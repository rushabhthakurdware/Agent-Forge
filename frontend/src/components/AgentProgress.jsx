const statusConfig = {
  idle: { color: 'text-gray-600', bg: 'bg-gray-800', dot: 'bg-gray-700', label: 'Idle' },
  running: { color: 'text-yellow-400', bg: 'bg-yellow-500/10', dot: 'bg-yellow-400 animate-pulse', label: 'Running' },
  done: { color: 'text-emerald-400', bg: 'bg-emerald-500/10', dot: 'bg-emerald-400', label: 'Done' },
  error: { color: 'text-red-400', bg: 'bg-red-500/10', dot: 'bg-red-400', label: 'Error' },
}

export default function AgentProgress({ agents, currentAgent }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <h2 className="text-white font-bold text-lg mb-4">
        <span className="text-gray-200">Agent Pipeline</span></h2>
      <div className="flex flex-col gap-3">
        {agents.map((agent, i) => {
          const s = statusConfig[agent.status]
          return (
            <div key={agent.id}>
              <div className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                agent.status === 'running'
                  ? 'border-yellow-500/30 bg-yellow-500/5'
                  : agent.status === 'done'
                  ? 'border-emerald-500/20 bg-emerald-500/5'
                  : 'border-transparent'
              }`}>
                {/* Icon */}
                <div className="text-xl w-8 text-center">{agent.icon}</div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-white text-sm font-semibold">{agent.name}</span>
                    {agent.status === 'running' && (
                      <span className="text-yellow-400 text-xs">● Running</span>
                    )}
                    {agent.status === 'done' && (
                      <span className="text-emerald-400 text-xs">✓ Done</span>
                    )}
                  </div>
                  <div className="text-gray-600 text-xs truncate">{agent.role}</div>
                </div>

                {/* Status dot */}
                <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${s.dot}`} />
              </div>

              {/* Connector line */}
              {i < agents.length - 1 && (
                <div className="ml-7 w-0.5 h-3 bg-gray-800" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}