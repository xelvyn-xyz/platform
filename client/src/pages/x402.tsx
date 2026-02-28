import { useState } from "react";
import { GlassCard } from "@/components/glass-card";

export default function X402() {
  const [filterAgent, setFilterAgent] = useState<string | null>(null);

  const transactions = [
    { id: "1", amount: "0.50", agent: "agent-alpha-7x", to: "0x742d...9e4b", hash: "0xabc123...", timestamp: "2026-02-28T14:30:00Z" },
    { id: "2", amount: "0.25", agent: "agent-beta-3k", to: "0x8f4e...2c1d", hash: "0xdef456...", timestamp: "2026-02-28T14:25:00Z" },
    { id: "3", amount: "0.75", agent: "agent-gamma-9z", to: "0x3a9b...5f8e", hash: "0xghi789...", timestamp: "2026-02-28T14:20:00Z" },
  ];

  const agents = ["agent-alpha-7x", "agent-beta-3k", "agent-gamma-9z"];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-pixel text-lg text-white/90">x402 Transactions</h1>
        <span className="px-3 py-1 border border-white/[0.06] text-xs font-mono">Base</span>
      </div>

      {/* Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => setFilterAgent(null)}
          className={`px-4 py-2 text-xs font-mono whitespace-nowrap ${
            filterAgent === null ? "btn-primary-gradient" : "btn-secondary-glass"
          }`}
        >
          All
        </button>
        {agents.map((agent) => (
          <button
            key={agent}
            onClick={() => setFilterAgent(agent)}
            className={`px-4 py-2 text-xs font-mono whitespace-nowrap ${
              filterAgent === agent ? "btn-primary-gradient" : "btn-secondary-glass"
            }`}
          >
            {agent}
          </button>
        ))}
      </div>

      {/* Transactions */}
      <div className="space-y-2">
        {transactions.map((tx) => (
          <GlassCard key={tx.id}>
            <div className="flex items-center justify-between">
              <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-4">
                <div>
                  <p className="text-white/45 text-xs">Amount</p>
                  <p className="font-mono text-white/90">{tx.amount} USDC</p>
                </div>
                <div>
                  <p className="text-white/45 text-xs">Agent</p>
                  <p className="font-mono text-white/90 text-sm">{tx.agent}</p>
                </div>
                <div>
                  <p className="text-white/45 text-xs">To</p>
                  <p className="font-mono text-white/90 text-sm">{tx.to}</p>
                </div>
                <div>
                  <p className="text-white/45 text-xs">Hash</p>
                  <p className="font-mono text-white/90 text-sm">{tx.hash}</p>
                </div>
                <div>
                  <p className="text-white/45 text-xs">Time (UTC)</p>
                  <p className="font-mono text-white/90 text-sm">
                    {new Date(tx.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <p className="text-center text-white/45 text-sm">Total: 59 transactions</p>
    </div>
  );
}
