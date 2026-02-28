import { GlassCard } from "@/components/glass-card";

export default function Agents() {
  const agents = [
    {
      id: "agent-alpha-7x",
      name: "agent-alpha-7x",
      status: "ACTIVE" as const,
      template: "yield",
      balance: "4.20",
      skills: ["yield-rebalancer", "risk-monitor"],
      uptime: 99.8,
    },
    {
      id: "agent-beta-3k",
      name: "agent-beta-3k",
      status: "ACTIVE" as const,
      template: "monitor",
      balance: "3.10",
      skills: ["wallet-guard", "price-oracle"],
      uptime: 99.5,
    },
    {
      id: "agent-gamma-9z",
      name: "agent-gamma-9z",
      status: "IDLE" as const,
      template: "router",
      balance: "1.80",
      skills: ["gas-optimizer"],
      uptime: 98.2,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlassCard>
          <div className="text-center">
            <div className="font-pixel text-white/90 text-lg">3</div>
            <p className="font-mono text-white/55 text-sm">Total Agents</p>
          </div>
        </GlassCard>
        <GlassCard>
          <div className="text-center">
            <div className="font-pixel text-white/90 text-lg">6</div>
            <p className="font-mono text-white/55 text-sm">Total Deploys</p>
          </div>
        </GlassCard>
        <GlassCard>
          <div className="text-center">
            <div className="font-pixel text-white/90 text-lg">9.10 USDC</div>
            <p className="font-mono text-white/55 text-sm">Total x402 Balance</p>
          </div>
        </GlassCard>
      </div>

      {/* Agent Cards */}
      <div className="grid grid-cols-1 gap-6">
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
                  data-testid={`agent-status-${agent.id}`}
                >
                  ● {agent.status}
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-white/45 text-xs">Template</p>
                  <p className="font-mono text-white/90">{agent.template}</p>
                </div>
                <div>
                  <p className="text-white/45 text-xs">Balance</p>
                  <p className="font-mono text-white/90">{agent.balance} USDC</p>
                </div>
                <div>
                  <p className="text-white/45 text-xs">Uptime</p>
                  <p className="font-mono text-white/90">{agent.uptime}%</p>
                </div>
                <div>
                  <p className="text-white/45 text-xs">Skills</p>
                  <p className="font-mono text-white/90">{agent.skills.length}</p>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
