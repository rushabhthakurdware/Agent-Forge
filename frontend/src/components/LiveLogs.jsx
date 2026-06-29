import { useEffect, useRef } from 'react'

const logColors = {
  system: 'text-emerald-400',
  info: 'text-blue-400',
  success: 'text-emerald-300',
  warning: 'text-yellow-400',
  error: 'text-red-400',
}

export default function LiveLogs({ logs }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [logs])

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-bold text-lg">
          <span className="text-gray-200">Live Logs</span>
        </h2>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-gray-500 text-xs">Live</span>
        </div>
      </div>

      {/* Terminal */}
      <div className="bg-gray-950 rounded-xl p-4 h-64 overflow-y-auto font-mono text-xs">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-3 mb-1.5">
            {log.time && (
              <span className="text-gray-700 flex-shrink-0">{log.time}</span>
            )}
            <span className={logColors[log.type] || 'text-gray-400'}>
              {log.text}
            </span>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  )
}