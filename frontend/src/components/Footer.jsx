import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          {/* Glow */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[500px] h-[200px] bg-emerald-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">Ready to Build?</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
                <span className="text-gray-200">
                Stop Writing Code.

                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Start Shipping Products.
                </span>
              </h2>

              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
                Describe your idea. Let 8 AI agents handle the rest — architecture, code, debugging, and deployment.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/dashboard"
                  className="bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-10 py-4 rounded-xl text-lg transition-all hover:scale-105"
                >
                  Launch Codex AI →
                </Link>
                <a
                  href="#how-it-works"
                  className="border border-gray-700 hover:border-emerald-500 text-gray-300 hover:text-white font-semibold px-10 py-4 rounded-xl text-lg transition-all"
                >
                  Learn More
                </a>
              </div>

              {/* Mini stats */}
              <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-gray-800">
                <div className="text-center">
                  <div className="text-2xl font-black text-emerald-400">8</div>
                  <div className="text-gray-500 text-sm">Specialized Agents</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-emerald-400">30</div>
                  <div className="text-gray-500 text-sm">Pipeline Nodes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-emerald-400">4</div>
                  <div className="text-gray-500 text-sm">Debug Tiers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-emerald-400">∞</div>
                  <div className="text-gray-500 text-sm">Apps You Can Build</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-black text-sm">AF</span>
              </div>
              <span className="text-white font-bold text-xl">
                Agent<span className="text-emerald-400">Forge</span>
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How it Works</a>
              <a href="#tech-stack" className="hover:text-emerald-400 transition-colors">Tech Stack</a>
              <Link to="/dashboard" className="hover:text-emerald-400 transition-colors">Dashboard</Link>
            </div>

            {/* Credit */}
            <div className="text-gray-600 text-sm">
              Built by <span className="text-emerald-400 font-medium">Rushabh Thakurdware</span>  
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}