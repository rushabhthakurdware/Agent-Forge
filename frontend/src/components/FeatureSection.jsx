const features = [
  {
    icon: '🧠',
    title: 'PM Agent',
    description: 'Understands your requirement, removes ambiguity, and produces a clean spec before any code is written.',
  },
  {
    icon: '🏗️',
    title: 'Architect Agent',
    description: 'Designs database schema, API endpoints, frontend pages, and folder structure in 5 validated steps.',
  },
  {
    icon: '📋',
    title: 'Planner Agent',
    description: 'Breaks the blueprint into phased, dependency-ordered tasks with parallel execution support.',
  },
  {
    icon: '💻',
    title: 'Coder Agent',
    description: 'Writes production-ready code one task at a time, following consistent project patterns throughout.',
  },
  {
    icon: '🔍',
    title: 'Reviewer Agent',
    description: 'Reviews every file for bugs, security issues, and blueprint compliance before execution.',
  },
  {
    icon: '⚡',
    title: 'Executor Agent',
    description: 'Runs code in a real Docker sandbox and captures actual stdout/stderr — not simulated output.',
  },
  {
    icon: '🐛',
    title: 'Debugger Agent',
    description: '4-tier escalation: self-fix → broader context → Git rollback → human escalation.',
  },
  {
    icon: '🚀',
    title: 'Deploy Agent',
    description: 'Generates deployment configs for Vercel, Render, and Neon. All free tier, ready to ship.',
  },
]

const extras = [
  { icon: '💾', title: 'Crash Recovery', description: 'Redis checkpoints save state after every node. Server crash? Resume from exact last step.' },
  { icon: '↩️', title: 'Git Rollback', description: 'Auto git-commits after every task. Bad code? Roll back to last known good state instantly.' },
  { icon: '🎨', title: 'Pattern Consistency', description: 'Extracts your project coding style after Phase 1 and injects it into every future task.' },
  { icon: '💰', title: 'Token Tracking', description: 'Tracks every API call cost. Warns at 80% budget. Pauses when limit is exceeded.' },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-emerald-400 text-sm font-medium">8 Specialized Agents</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            <span className="text-gray-200">
            Your Complete
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400"> AI Dev Team</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto  ">
            <span className="text-gray-400 text-lg max-w-2xl mx-auto">
              Each agent is a specialist. Together they handle the entire software development lifecycle — from requirement to deployment.
              </span>
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 hover:border-emerald-500/50 rounded-2xl p-6 transition-all hover:bg-gray-900/80 group"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-emerald-400 transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-4 py-1.5">
            <span className="text-gray-400 text-sm font-medium">V2 Superpowers</span>
          </div>
        </div>

        {/* Extras Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {extras.map((e, i) => (
            <div
              key={i}
              className="bg-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/50 rounded-2xl p-6 transition-all group"
            >
              <div className="text-3xl mb-4">{e.icon}</div>
              <h3 className="text-emerald-400 font-bold text-lg mb-2">{e.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{e.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}