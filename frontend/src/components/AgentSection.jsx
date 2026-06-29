const agents = [
  {
    number: '01',
    name: 'PM Agent',
    icon: '🧠',
    role: 'Product Manager',
    color: 'emerald',
    description:
      'Analyzes your raw requirement, identifies ambiguity, and asks up to 8 clarifying questions. Produces a clean, detailed spec before any code is written.',
    capabilities: [
      'Removes requirement ambiguity',
      'Asks max 5-8 smart questions',
      'Decides obvious things independently',
      'Outputs strict JSON spec',
    ],
  },
  {
    number: '02',
    name: 'Architect Agent',
    icon: '🏗️',
    role: 'Senior Engineer',
    color: 'teal',
    description:
      'Designs the entire system in 5 focused steps — entities, DB schema, API endpoints, frontend pages, and folder structure. Self-validates via Blueprint Validator.',
    capabilities: [
      'Entity relationship design',
      'Full database schema with constraints',
      'All API endpoints with auth rules',
      'Frontend page + component mapping',
    ],
  },
  {
    number: '03',
    name: 'Planner Agent',
    icon: '📋',
    role: 'Tech Lead',
    color: 'cyan',
    description:
      'Breaks the validated blueprint into 5 mandatory phases with dependency-ordered tasks. Marks which tasks can run in parallel to save time.',
    capabilities: [
      '5-phase mandatory order',
      'Dependency-ordered task queue',
      'Parallel task flagging',
      'Acceptance criteria per task',
    ],
  },
  {
    number: '04',
    name: 'Coder Agent',
    icon: '💻',
    role: 'Full Stack Developer',
    color: 'blue',
    description:
      'Writes production-ready code one task at a time. Follows project patterns extracted from Phase 1 so all 50+ files look like they were written by one person.',
    capabilities: [
      'Writes to real Docker filesystem',
      'Follows extracted project patterns',
      'Uses knowledge tools for docs',
      'One task at a time — focused output',
    ],
  },
  {
    number: '05',
    name: 'Reviewer Agent',
    icon: '🔍',
    role: 'Code Reviewer',
    color: 'violet',
    description:
      'Reviews every file for bugs, security issues, blueprint compliance, and pattern consistency. Max 2 rejection cycles — then escalates to simplifyTask instead of force-approving.',
    capabilities: [
      'Bug and security review',
      'Blueprint compliance check',
      'Pattern consistency validation',
      'Escalates to task simplification',
    ],
  },
  {
    number: '06',
    name: 'Executor Agent',
    icon: '⚡',
    role: 'QA Engineer',
    color: 'yellow',
    description:
      'Runs approved code in Docker sandbox. Installs dependencies, runs test commands, and captures real stdout/stderr — not simulated output.',
    capabilities: [
      'Real Docker execution',
      'Installs new dependencies',
      'Captures full error output',
      'Tests both pass and fail cases',
    ],
  },
  {
    number: '07',
    name: 'Debugger Agent',
    icon: '🐛',
    role: 'Bug Fixer',
    color: 'orange',
    description:
      'Four-tier escalation system. Reads real errors, traces root causes, attempts Git rollback if needed, and only escalates to human as a last resort.',
    capabilities: [
      'Tier 1: Self-fix (3 attempts)',
      'Tier 2: Broader context (2 attempts)',
      'Tier 2.5: Git rollback + retry',
      'Tier 3: Human escalation',
    ],
  },
  {
    number: '08',
    name: 'Deploy Agent',
    icon: '🚀',
    role: 'DevOps Engineer',
    color: 'emerald',
    description:
      'Generates all deployment configs for free-tier platforms. Creates vercel.json, render.yaml, Dockerfile, .env.example, and a step-by-step deployment guide.',
    capabilities: [
      'Vercel config for frontend',
      'Render config for backend',
      'Final clean Git commit',
      'Step-by-step deploy guide',
    ],
  },
]

const colorMap = {
  emerald: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-400',
  teal: 'border-teal-500/30 bg-teal-500/5 text-teal-400',
  cyan: 'border-cyan-500/30 bg-cyan-500/5 text-cyan-400',
  blue: 'border-blue-500/30 bg-blue-500/5 text-blue-400',
  violet: 'border-violet-500/30 bg-violet-500/5 text-violet-400',
  yellow: 'border-yellow-500/30 bg-yellow-500/5 text-yellow-400',
  orange: 'border-orange-500/30 bg-orange-500/5 text-orange-400',
}

const numberColorMap = {
  emerald: 'text-emerald-400',
  teal: 'text-teal-400',
  cyan: 'text-cyan-400',
  blue: 'text-blue-400',
  violet: 'text-violet-400',
  yellow: 'text-yellow-400',
  orange: 'text-orange-400',
}

export default function AgentsSection() {
  return (
    <section id="agents" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-emerald-400 text-sm font-medium ">Meet the Team</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            <span className="text-gray-200">
            8 Agents.

            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400"> One Goal.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Each agent is a specialist with a defined role, strict boundaries, and a JSON output format.
            Together they cover the entire software development lifecycle.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agents.map((agent, i) => (
            <div
              key={i}
              className={`border rounded-2xl p-6 transition-all hover:scale-[1.01] ${colorMap[agent.color]}`}
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Icon */}
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {agent.icon}
                </div>

                {/* Name + Role */}
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-black ${numberColorMap[agent.color]}`}>
                      {agent.number}
                    </span>
                    <h3 className="text-white font-bold text-lg">{agent.name}</h3>
                  </div>
                  <div className="text-gray-500 text-sm">{agent.role}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {agent.description}
              </p>

              {/* Capabilities */}
              <div className="flex flex-col gap-2">
                {agent.capabilities.map((cap, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className={`text-xs ${numberColorMap[agent.color]}`}>✓</span>
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 bg-gray-950 border border-gray-800 rounded-2xl p-6 text-center">
          <p className="text-gray-400">
            Every agent outputs <span className="text-emerald-400 font-semibold">strict JSON</span> so the next node parses it programmatically.
            All agents follow a <span className="text-emerald-400 font-semibold">ROLE → GOAL → BOUNDARIES → INPUT → OUTPUT → RULES</span> prompt structure.
          </p>
        </div>

      </div>
    </section>
  )
}