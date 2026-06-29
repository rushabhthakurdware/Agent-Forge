export default function OutputPanel({ output }) {
  return (
    <div className="bg-gray-900 border border-emerald-500/20 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-2xl">🎉</span>
        <h2 className="text-white font-bold text-lg">Build Complete</h2>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Cost', value: output.cost, color: 'text-emerald-400' },
          { label: 'Tokens Used', value: output.tokens, color: 'text-blue-400' },
          { label: 'Tasks Done', value: output.tasks, color: 'text-violet-400' },
          { label: 'Time Taken', value: output.time, color: 'text-yellow-400' },
        ].map((stat, i) => (
          <div key={i} className="bg-gray-950 border border-gray-800 rounded-xl p-4 text-center">
            <div className={`text-xl font-black ${stat.color}`}>{stat.value}</div>
            <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Files Generated */}
      <div>
        <div className="text-sm font-semibold text-gray-400 mb-3">
          Files Generated ({output.files.length})
        </div>
        <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 max-h-48 overflow-y-auto">
          {output.files.map((file, i) => (
            <div key={i} className="flex items-center gap-2 py-1.5 border-b border-gray-900 last:border-0">
              <span className="text-emerald-400 text-xs">✓</span>
              <span className="text-gray-400 text-xs font-mono">{file}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Deploy Button */}
      <button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-3 rounded-xl transition-all hover:scale-[1.02] text-sm">
        🚀 Generate Deployment Files
      </button>
    </div>
  )
}