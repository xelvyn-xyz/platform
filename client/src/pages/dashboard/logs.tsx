import { useState } from "react";
import { GlassCard } from "@/components/glass-card";

export default function DashboardLogs() {
  const [selectedAgent, setSelectedAgent] = useState("all");

  const agents = ["all", "agent-alpha-7x", "agent-beta-3k", "agent-gamma-9z"];

  const logs = [
    { id: "1", agent: "agent-alpha-7x", level: "INFO", message: "Rebalancing yield positions" },
    { id: "2", agent: "agent-beta-3k", level: "WARN", message: "High portfolio volatility detected" },
    { id: "3", agent: "agent-gamma-9z", level: "INFO", message: "Gas price monitoring active" },
  ];

  return (
    <div className="space-y-6 px-4 md:px-8 py-8">
      <h1 className="font-pixel text-2xl text-white/90">Agent Logs</h1>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {agents.map((agent) => (
          <button
            key={agent}
            onClick={() => setSelectedAgent(agent)}
            className={`px-3 py-1.5 text-xs font-mono transition-colors ${
              selectedAgent === agent ? "btn-primary-gradient" : "btn-secondary-glass"
            }`}
            data-testid={`agent-filter-${agent}`}
          >
            {agent === "all" ? "All Agents" : agent}
          </button>
        ))}
      </div>

      {/* Logs */}
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {logs.map((log) => (
          <GlassCard key={log.id}>
            <div className="flex gap-4">
              <span className="text-xs font-mono text-white/45 whitespace-nowrap">{log.level}</span>
              <div className="flex-1">
                <p className="text-white/75 font-mono text-sm">{log.message}</p>
                <p className="text-white/45 text-xs">{log.agent}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
