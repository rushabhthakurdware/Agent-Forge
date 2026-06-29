const steps = [
  {
    step: '01',
    title: 'Describe Your Project',
    description: 'Type your project idea in plain English. The PM Agent asks clarifying questions to remove ambiguity and produce a clean, detailed spec.',
    code: '> "Build me a food delivery app with user auth, restaurant listings, and order tracking"',
    color: 'from-emerald-400 to-teal-400',
  },
  {
    step: '02',
    title: 'AI Designs the Architecture',
    description: 'The Architect Agent designs your database schema, all API endpoints, frontend pages, and folder structure across 5 validated steps.',
    code: '✓ 4 entities identified\n✓ 12 API endpoints designed\n✓ 6 frontend pages mapped\n✓ Blueprint validated',
    color: 'from-teal-400 to-cyan-400',
  },
  {
    step: '03',
    title: 'Agents Write & Review Code',
    description: 'Planner breaks work into ordered tasks. Coder writes each file. Reviewer checks for bugs. Executor runs it in Docker. Debugger fixes errors.',
    code: '✓ Task 1/24 — DB models written\n✓ Task 2/24 — Auth middleware done\n⟳ Task 3/24 — Writing API routes...',
    color: 'from-cyan-400 to-blue-400',
  },
  {
    step: '04',
    title: 'You Test & Give Feedback',
    description: 'Your app runs live in Docker. Use it in the browser. Give feedback in plain text — bugs, changes, or new features. Max 3 iterations.',
    code: '> "The login page looks fine but add Google OAuth"\n⟳ Feedback categorized → new tasks created',
    color: 'from-blue-400 to-violet-400',
  },
  {
    step: '05',
    title: 'Deploy with One Command',
    description: 'Deploy Agent generates all configs for Vercel, Render, and Neon. All free tier. Step-by-step guide included.',
    code: '✓ vercel.json generated\n✓ render.yaml generated\n✓ .env.example created\n✓ Ready to deploy!',
    color: 'from-violet-400 to-emerald-400',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-emerald-400 text-sm font-medium">Simple 5-Step Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            <span className="text-gray-200">
            How
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400"> Agent Forge Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From plain English requirement to a fully deployed app — here's exactly what happens under the hood.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col lg:flex-row gap-6 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className="flex-1 bg-gray-950 border border-gray-800 rounded-2xl p-8">
                <div className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${s.color} mb-4`}>
                  {s.step}
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.description}</p>
              </div>

              {/* Code block */}
              <div className="flex-1 bg-gray-950 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-gray-600 text-xs ml-2">Agent-Forge</span>
                </div>
                <pre className="font-mono text-sm text-emerald-400 whitespace-pre-wrap leading-relaxed">
                  {s.code}
                </pre>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}