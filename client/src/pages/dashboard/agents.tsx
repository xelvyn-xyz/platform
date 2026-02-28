import { GlassCard } from "@/components/glass-card";

export default function DashboardAgents() {
  const agents = [
    { id: "1", name: "agent-alpha-7x", status: "ACTIVE", cpu: 25, memory: 48, uptime: 99.8 },
    { id: "2", name: "agent-beta-3k", status: "ACTIVE", cpu: 15, memory: 32, uptime: 99.5 },
    { id: "3", name: "agent-gamma-9z", status: "IDLE", cpu: 5, memory: 16, uptime: 98.2 },
  ];

  return (
    <div className="space-y-6 px-4 md:px-8 py-8">
      <h1 className="font-pixel text-2xl text-white/90">Agent Management</h1>

      <div className="space-y-4">
        {agents.map((agent) => (
          <GlassCard key={agent.id} glowVariant={agent.status === "ACTIVE"}>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-white/90 font-bold">{agent.name}</h3>
                <span
                  className={`px-2 py-1 text-xs font-mono ${
                    agent.status === "ACTIVE"
                      ? "text-green-400 health-pulse"
                      : "text-white/45"
                  }`}
                >
                  ● {agent.status}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-white/45 text-xs">CPU</p>
                  <p className="font-mono text-white/90">{agent.cpu}%</p>
                </div>
                <div>
                  <p className="text-white/45 text-xs">Memory</p>
                  <p className="font-mono text-white/90">{agent.memory}%</p>
                </div>
                <div>
                  <p className="text-white/45 text-xs">Uptime</p>
                  <p className="font-mono text-white/90">{agent.uptime}%</p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  className="flex-1 btn-primary-gradient py-2 text-white font-mono text-xs"
                  data-testid={`start-${agent.id}`}
                >
                  Start
                </button>
                <button
                  className="flex-1 btn-secondary-glass py-2 text-white font-mono text-xs"
                  data-testid={`stop-${agent.id}`}
                >
                  Stop
                </button>
                <button
                  className="flex-1 btn-secondary-glass py-2 text-white font-mono text-xs"
                  data-testid={`restart-${agent.id}`}
                >
                  Restart
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
