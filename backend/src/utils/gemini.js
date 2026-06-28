/**
 * gemini.js — OpenAI API Wrapper (Fixed Token Tracking)
 *
 * DESIGN CHANGE:
 * Old approach: Agent passes tokenUsage object → callOpenAi mutates it → agent returns it
 * Problem: LangGraph reducer merges old + new, causing exponential duplication.
 *
 * New approach: callOpenAi returns token info.
 * Agent builds a DELTA object (only new data) and returns it.
 * Reducer adds delta to existing state. No duplication possible.
 */

import OpenAI from "openai";

let aiClient = null;

export function initOpenAi(apiKey) {
  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY is required. Get one from https://platform.openai.com/apikeys",
    );
  }
  aiClient = new OpenAI({ apiKey });
  return aiClient;
}

export function getClient() {
  if (!aiClient)
    throw new Error("OpenAI not initialized. Call initOpenAi(apiKey) first.");
  return aiClient;
}

/**
 * Core LLM call — returns parsed JSON + token info
 *
 * Does NOT mutate any external state. Returns everything the caller needs
 * to build its own state update.
 *
 * @returns {object} { parsed, raw, tokens: {input, output, cost} }
 */
export async function callOpenAi({
  systemPrompt,
  userPrompt,
  agentName = "unknown",
  currentCost = 0,
  tokenBudget = 2.0,
  model = null,
}) {
  const client = getClient();
  const modelName = model || process.env.OPENAI_MODEL || "gpt-4.1";

  // Budget check
  if (currentCost >= tokenBudget) {
    throw new Error(
      `TOKEN_BUDGET_EXCEEDED: $${currentCost.toFixed(4)} >= budget $${tokenBudget}`,
    );
  }

  const fullPrompt = `${systemPrompt}\n\n---\n\nINPUT:\n${userPrompt}\n\n---\n\nIMPORTANT: Respond with ONLY valid JSON. No markdown, no backticks, no explanation outside JSON.`;

  let lastError = null;
  const MAX_RETRIES = 3;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await client.responses.create({
        model: modelName,
        input: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: fullPrompt,
          },
        ],
      });

      const rawText = response.output_text || "";

      // Use actual token counts from API response if available, otherwise estimate
      const inputTokens = response.usage?.input_tokens || 0;
      const outputTokens = response.usage?.output_tokens || 0;
      // OpenAI GPT-4.1: $0.15/1M input, $0.60/1M output

      const INPUT_COST_PER_1M = 2.00;
const OUTPUT_COST_PER_1M = 8.00;

      const cost =
        (inputTokens / 1_000_000) * INPUT_COST_PER_1M +
        (outputTokens / 1_000_000) * OUTPUT_COST_PER_1M;
      // Parse JSON
      let parsed;
      try {
        let cleanText = rawText.trim();
        if (cleanText.startsWith("```")) {
          cleanText = cleanText
            .replace(/^```(?:json)?\n?/, "")
            .replace(/\n?```$/, "");
        }
        parsed = JSON.parse(cleanText);
      } catch (parseError) {
        console.error(
          `[${agentName}] JSON parse failed (attempt ${attempt}):`,
          rawText.slice(0, 200),
        );
        if (attempt === MAX_RETRIES) {
          throw new Error(`JSON_PARSE_FAILED after ${MAX_RETRIES} attempts.`);
        }
        lastError = parseError;
        continue;
      }

      return {
        parsed,
        raw: rawText,
        tokens: { input: inputTokens, output: outputTokens, cost },
      };
    } catch (error) {
      lastError = error;
      if (error.message?.includes("TOKEN_BUDGET_EXCEEDED")) throw error;
      if (attempt === MAX_RETRIES) throw error;

      const waitMs = Math.pow(2, attempt) * 1000;
      console.warn(
        `[${agentName}] Attempt ${attempt} failed: ${error.message}. Retrying in ${waitMs}ms...`,
      );
      await new Promise((r) => setTimeout(r, waitMs));
    }
  }
  throw lastError;
}

/**
 * Helper: build tokenUsage delta from a single callOpenAi result
 *
 * This is what agents return to the state reducer.
 * The reducer ADDS this to existing state — no duplication.
 */
export function makeTokenDelta(agentName, tokens) {
  return {
    newCalls: [
      {
        agent: agentName,
        inputTokens: tokens.input,
        outputTokens: tokens.output,
        timestamp: Date.now(),
      },
    ],
    addedInput: tokens.input,
    addedOutput: tokens.output,
    addedCost: tokens.cost,
  };
}
