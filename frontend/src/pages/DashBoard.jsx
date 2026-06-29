import { useState } from "react";
import Navbar from "../components/Navbar";
import AgentProgress from "../components/AgentProgress";
import LiveLogs from "../components/LiveLogs";
import OutputPanel from "../components/OutputPanel";


const INITIAL_AGENTS = [
  {
    id: 1,
    name: "PM Agent",
    icon: "🧠",
    role: "Clarifying requirements",
    status: "idle",
  },
  {
    id: 2,
    name: "Architect",
    icon: "🏗️",
    role: "Designing blueprint",
    status: "idle",
  },
  {
    id: 3,
    name: "Planner",
    icon: "📋",
    role: "Creating task queue",
    status: "idle",
  },
  { id: 4, name: "Coder", icon: "💻", role: "Writing code", status: "idle" },
  {
    id: 5,
    name: "Reviewer",
    icon: "🔍",
    role: "Reviewing code",
    status: "idle",
  },
  {
    id: 6,
    name: "Executor",
    icon: "⚡",
    role: "Running in Docker",
    status: "idle",
  },
  {
    id: 7,
    name: "Debugger",
    icon: "🐛",
    role: "Fixing errors",
    status: "idle",
  },
  {
    id: 8,
    name: "Deploy",
    icon: "🚀",
    role: "Generating configs",
    status: "idle",
  },
];

const DEMO_LOGS = [
  { type: "system", text: "Codex AI ready. Describe your project to begin." },
];

export default function Dashboard() {
  const [requirement, setRequirement] = useState("");
  const [agents, setAgents] = useState(INITIAL_AGENTS);
  const [logs, setLogs] = useState(DEMO_LOGS);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState(null);
  const [currentAgent, setCurrentAgent] = useState(null);

  const [threadId, setThreadId] = useState(null);
const [questions, setQuestions] = useState([]);
const [userAnswer, setUserAnswer] = useState("");
const [waitingForAnswer, setWaitingForAnswer] = useState(false);


  const addLog = (type, text) => {
    setLogs((prev) => [
      ...prev,
      { type, text, time: new Date().toLocaleTimeString() },
    ]);
  };

  const updateAgent = (id, status) => {
    setAgents((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
    setCurrentAgent(id);
  };

  // Simulate pipeline for demo purposes
  const runPipeline = async () => {
    if (!requirement.trim()) return;
    setIsRunning(true);
    setOutput(null);
    setAgents(INITIAL_AGENTS);
    setLogs([{ type: "system", text: "🚀 Connecting to Codex AI..." }]);
    setQuestions([]);
setUserAnswer("");
setWaitingForAnswer(false);
setThreadId(null);

    try {
      const url = `${import.meta.env.VITE_API_URL}/api/run?requirement=${encodeURIComponent(requirement)}`;
      const eventSource = new EventSource(url);

      eventSource.onmessage = (e) => {
        const data = JSON.parse(e.data);

        if (data.type === "log") {
          setLogs((prev) => [
            ...prev,
            {
              type: "info",
              text: data.text,
              time: new Date().toLocaleTimeString(),
            },
          ]);
        }

        if (data.type === "agent") {
          setAgents((prev) =>
            prev.map((a) =>
              a.id === data.agentId ? { ...a, status: data.status } : a,
            ),
          );
          setCurrentAgent(data.agentId);
        }

        if (data.type === "done") {
          setOutput(data.output);
          setIsRunning(false);
          eventSource.close();
        }

        if (data.type === "error") {
          setLogs((prev) => [
            ...prev,
            { type: "error", text: `Error: ${data.message}` },
          ]);
          setIsRunning(false);
          eventSource.close();
        }
        if (data.type === "threadId") {
  setThreadId(data.threadId);
}

if (data.type === "questions") {
  setThreadId(data.threadId);
  setQuestions(data.questions);
  setWaitingForAnswer(true);
  setIsRunning(false); // pause the spinner while we wait on you
}
      };

      eventSource.onerror = () => {
        setLogs((prev) => [
          ...prev,
          { type: "error", text: "Connection lost." },
        ]);
        setIsRunning(false);
        eventSource.close();
      };
    } catch (err) {
      setLogs((prev) => [...prev, { type: "error", text: err.message }]);
      setIsRunning(false);
    }
  };

  const submitAnswer = async () => {
  if (!userAnswer.trim() || !threadId) return;

  setWaitingForAnswer(false);
  setIsRunning(true);
  setLogs((prev) => [
    ...prev,
    { type: "info", text: "Sending your answer...", time: new Date().toLocaleTimeString() },
  ]);

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/answer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ threadId, answer: userAnswer }),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Failed to submit answer");
    }
    setUserAnswer("");
    setQuestions([]);
  } catch (err) {
    setLogs((prev) => [...prev, { type: "error", text: err.message }]);
    setIsRunning(false);
  }
};
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      
      <div className="pt-16 max-w-7xl mx-auto px-4 py-8">
        <button 
          onClick={() => window.history.back()}
          className="text-emerald-400 hover:text-emerald-300 mb-4 font-bold text-lg"
        >
          ← Back
        </button>
        <div className="mb-8">
          <h1 className="text-3xl font-black text-white mb-1">
            <span className="text-gray-200">
              Agent-Forge     
            </span>
            <span className="text-emerald-400 ml-1">Dashboard</span>
          </h1>
          <p className="text-gray-500">
            Describe your project and watch 8 AI agents build it.
          </p>
        </div>

        {/* Input Panel */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
          <label className="block text-sm font-semibold text-gray-400 mb-3">
            Project Requirement
          </label>
          <textarea
            className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none text-sm leading-relaxed"
            rows={4}
            placeholder="e.g. Build a task management app with user authentication, categories, due dates, and a dashboard showing progress stats..."
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            disabled={isRunning}
          />
          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-600 text-xs">
              {requirement.length} characters
            </span>
            <button
              onClick={runPipeline}
              disabled={isRunning || !requirement.trim()}
              className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold px-6 py-2.5 rounded-xl text-sm transition-all hover:scale-105 flex items-center gap-2"
            >
              {isRunning ? (
                <>
                  <svg
                    className="animate-spin w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Running Pipeline...
                </>
              ) : (
                "🚀 Start Building"
              )}
            </button>
          </div>
        </div>

        {/* PM Questions Panel */}
        {waitingForAnswer && questions.length > 0 && (
          <div className="bg-gray-900 border border-yellow-500/30 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">❓</span>
              <h2 className="text-white font-bold text-lg">
                PM Agent needs more information
              </h2>
            </div>
            <div className="flex flex-col gap-3 mb-4">
              {questions.map((q, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-yellow-400 font-bold text-sm flex-shrink-0">
                    {i + 1}.
                  </span>
                  <p className="text-gray-300 text-sm">{q}</p>
                </div>
              ))}
            </div>
            <textarea
              className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none text-sm mb-3"
              rows={3}
              placeholder="Answer all questions above (you can answer them all at once)..."
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
            <button
              onClick={submitAnswer}
              disabled={!userAnswer.trim()}
              className="bg-yellow-500 hover:bg-yellow-400 disabled:opacity-50 text-black font-bold px-6 py-2.5 rounded-xl text-sm transition-all"
            >
              Send Answers →
            </button>
          </div>
        )}
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left — Agent Progress */}
          <div className="lg:col-span-1">
            <AgentProgress agents={agents} currentAgent={currentAgent} />
          </div>

          {/* Right — Logs + Output */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <LiveLogs logs={logs} />
            {output && <OutputPanel output={output} />}
          </div>
        </div>
      </div>
    </div>
  );
}
