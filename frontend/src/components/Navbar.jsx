import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-black text-sm">AF</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Agent<span className="text-emerald-400">Forge</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Features</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">How it Works</a>
            <a href="#tech-stack" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Tech Stack</a>
            <a href="#agents" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Agents</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/dashboard"
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Launch App →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4 flex flex-col gap-4">
            <a href="#features" className="text-gray-400 hover:text-emerald-400 text-sm">Features</a>
            <a href="#how-it-works" className="text-gray-400 hover:text-emerald-400 text-sm">How it Works</a>
            <a href="#tech-stack" className="text-gray-400 hover:text-emerald-400 text-sm">Tech Stack</a>
            <a href="#agents" className="text-gray-400 hover:text-emerald-400 text-sm">Agents</a>
            <Link to="/dashboard" className="bg-emerald-500 text-black font-semibold px-4 py-2 rounded-lg text-sm text-center">
              Launch App →
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}