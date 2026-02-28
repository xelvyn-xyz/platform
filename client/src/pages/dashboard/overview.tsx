import { GlassCard } from "@/components/glass-card";

export default function DashboardOverview() {
  const stats = [
    { label: "Total Agents", value: "3" },
    { label: "Total Deploys", value: "6" },
    { label: "x402 Balance", value: "9.10 USDC" },
    { label: "Transactions", value: "59" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="font-pixel text-2xl text-white/90 px-4 md:px-8">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 md:px-8">
        {stats.map((stat, i) => (
          <GlassCard key={i}>
            <p className="text-white/45 text-xs font-mono mb-2">{stat.label}</p>
            <p className="font-pixel text-xl text-white/90">{stat.value}</p>
          </GlassCard>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="px-4 md:px-8">
        <h2 className="font-pixel text-lg text-white/90 mb-4">Recent Activity</h2>
        <div className="space-y-2">
          {[
            "agent-alpha-7x position rebalanced",
            "agent-beta-3k portfolio updated",
            "agent-gamma-9z status check",
          ].map((activity, i) => (
            <GlassCard key={i}>
              <p className="text-white/75 font-mono text-sm">{activity}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
