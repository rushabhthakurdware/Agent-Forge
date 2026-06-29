import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-emerald-700/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-emerald-400 text-sm font-medium">AI-Powered Multi-Agent System</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-white text-white leading-tight mb-6 ">
          <div className="text-transparent bg-clip-text bg-gradient-to-r  from-gray-100 to-gray-300">
            Build Software with
          </div>
          
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
            an AI Dev Team
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Describe your project in plain English. Codex AI deploys 8 specialized agents — 
          PM, Architect, Coder, Reviewer, Debugger and more — to build your full-stack app automatically.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            to="/dashboard"
            className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105"
          >
            Start Building →
          </Link>
          <a
            href="#how-it-works"
            className="border border-gray-700 hover:border-emerald-500 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all"
          >
            See How it Works
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-gray-800 pt-10">
          <div>
            <div className="text-3xl font-black text-emerald-400">8</div>
            <div className="text-gray-500 text-sm mt-1">AI Agents</div>
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-400">30</div>
            <div className="text-gray-500 text-sm mt-1">Pipeline Nodes</div>
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-400">0</div>
            <div className="text-gray-500 text-sm mt-1">Manual Coding</div>
          </div>
        </div>

        {/* Terminal mockup */}
        <div className="mt-16 bg-gray-900 border border-gray-800 rounded-2xl p-6 text-left max-w-2xl mx-auto shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-gray-600 text-xs ml-2">Agent Forge ~ terminal</span>
          </div>
          <div className="font-mono text-sm space-y-2">
            <div className="text-gray-500">$ Agent Forge start</div>
            <div className="text-emerald-400">✓ PM Agent — Spec clarified</div>
            <div className="text-emerald-400">✓ Architect — Blueprint validated</div>
            <div className="text-emerald-400">✓ Planner — 24 tasks created</div>
            <div className="text-yellow-400">⟳ Coder — Writing auth middleware...</div>
            <div className="text-gray-600">◦ Reviewer — Waiting...</div>
            <div className="text-gray-600">◦ Executor — Waiting...</div>
          </div>
        </div>

      </div>
    </section>
  )
}