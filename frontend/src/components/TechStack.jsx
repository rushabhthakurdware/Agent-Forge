const stack = [
  {
    category: 'Orchestration',
    items: [
      { name: 'LangGraph', description: 'Connects all 30 agent nodes in a stateful flow', icon: '🔗' },
      { name: 'Node.js', description: 'Runtime for the entire backend pipeline', icon: '⚙️' },
    ]
  },
  {
    category: 'AI & Memory',
    items: [
      { name: 'Google Gemini', description: 'LLM brain powering all 8 agents', icon: '🧠' },
      { name: 'Pinecone', description: 'Vector DB for long-term project memory', icon: '🗄️' },
    ]
  },
  {
    category: 'Sandbox & DevOps',
    items: [
      { name: 'Docker', description: 'Isolated sandbox where AI code actually runs', icon: '🐳' },
      { name: 'Git', description: 'Auto-commits after every task for rollback', icon: '📦' },
    ]
  },
  {
    category: 'Persistence',
    items: [
      { name: 'Redis', description: 'Checkpoints state after every node — crash safe', icon: '💾' },
      { name: 'PostgreSQL', description: 'Primary database for generated apps', icon: '🐘' },
    ]
  },
  {
    category: 'Generated App Stack',
    items: [
      { name: 'React + Vite', description: 'Frontend for every generated application', icon: '⚛️' },
      { name: 'Express.js', description: 'Backend API for every generated application', icon: '🚂' },
    ]
  },
  {
    category: 'Deployment',
    items: [
      { name: 'Vercel', description: 'Frontend deployment — free tier', icon: '▲' },
      { name: 'Render', description: 'Backend deployment — free tier', icon: '🌐' },
    ]
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-emerald-400 text-sm font-medium">Production Grade Stack</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black  mb-4 from">
            <span className="text-gray-200">
            Built With the

            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400"> Best Tools</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every technology was chosen for a specific reason. No bloat, no guesswork.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((group, i) => (
            <div
              key={i}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all"
            >
              {/* Category Label */}
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">
                {group.category}
              </div>

              {/* Items */}
              <div className="flex flex-col gap-4">
                {group.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{item.name}</div>
                      <div className="text-gray-500 text-sm mt-0.5">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-12 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-8 text-center">
          <h3 className="text-white text-2xl font-bold mb-2">Fixed Stack = Better Code Quality</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every generated app uses React + Express + PostgreSQL. This keeps agent prompts focused,
            reduces hallucinations, and ensures consistent, high-quality output every time.
          </p>
        </div>

      </div>
    </section>
  )
}