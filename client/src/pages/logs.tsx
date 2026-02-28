import { useState } from "react";
import { GlassCard } from "@/components/glass-card";

export default function Logs() {
  const [levelFilter, setLevelFilter] = useState<string>("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  const logs = [
    { id: "1", timestamp: "2026-02-28T14:35:00Z", level: "INFO", agent: "agent-alpha-7x", message: "Position rebalanced successfully" },
    { id: "2", timestamp: "2026-02-28T14:33:00Z", level: "WARN", agent: "agent-beta-3k", message: "Portfolio volatility increased 15%" },
    { id: "3", timestamp: "2026-02-28T14:32:00Z", level: "INFO", agent: "agent-gamma-9z", message: "Gas price monitoring enabled" },
    { id: "4", timestamp: "2026-02-28T14:30:00Z", level: "ERROR", agent: "agent-alpha-7x", message: "Failed to execute trade" },
    { id: "5", timestamp: "2026-02-28T14:28:00Z", level: "DEBUG", agent: "agent-beta-3k", message: "Fetching price oracle data" },
  ];

  const levels = ["ALL", "INFO", "WARN", "ERROR", "DEBUG"];
  const levelColors = {
    INFO: "text-blue-400",
    WARN: "text-yellow-400",
    ERROR: "text-red-400",
    DEBUG: "text-gray-400",
  };

  const filteredLogs = logs.filter((log) => {
    const levelMatch = levelFilter === "ALL" || log.level === levelFilter;
    const searchMatch = log.message.toLowerCase().includes(searchTerm.toLowerCase());
    return levelMatch && searchMatch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <h1 className="font-pixel text-lg text-white/90">Agent Logs</h1>

      {/* Filters */}
      <div className="space-y-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setLevelFilter(level)}
              className={`px-4 py-2 text-xs font-mono whitespace-nowrap ${
                levelFilter === level ? "btn-primary-gradient" : "btn-secondary-glass"
              }`}
              data-testid={`filter-${level.toLowerCase()}`}
            >
              {level}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search logs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 bg-white/5 border border-white/[0.06] text-white/75 placeholder:text-white/30 font-mono text-sm"
          style={{ borderRadius: "2px" }}
          data-testid="search-input"
        />
      </div>

      {/* Logs */}
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {filteredLogs.map((log) => (
          <GlassCard key={log.id}>
            <div className="flex gap-4 items-start">
              <span className={`text-xs font-mono whitespace-nowrap ${levelColors[log.level as keyof typeof levelColors]}`}>
                {log.level}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between gap-2">
                  <span className="text-white/90 font-mono text-sm">{log.agent}</span>
                  <span className="text-white/45 text-xs whitespace-nowrap">
                    {new Date(log.timestamp).toLocaleTimeString()} UTC
                  </span>
                </div>
                <p className="text-white/55 font-mono text-sm mt-1">{log.message}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
