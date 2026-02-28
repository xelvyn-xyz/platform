import { useState } from "react";
import { GlassCard } from "@/components/glass-card";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const skills = [
    { id: "1", name: "yield-rebalancer", category: "defi", description: "Auto-rebalance DeFi positions", ai: ["openai", "claude"] },
    { id: "2", name: "risk-monitor", category: "security", description: "Track portfolio risk metrics", ai: ["openai", "claude"] },
    { id: "3", name: "gas-optimizer", category: "infrastructure", description: "Predict and optimize gas costs", ai: ["openai"] },
    { id: "4", name: "price-oracle", category: "data", description: "Aggregate price data", ai: [] },
    { id: "5", name: "smart-router", category: "defi", description: "Intelligent transaction routing", ai: ["openai", "claude"] },
    { id: "6", name: "wallet-guard", category: "security", description: "Monitor wallets for suspicious activity", ai: ["claude"] },
    { id: "7", name: "portfolio-tracker", category: "data", description: "Track portfolio performance", ai: [] },
    { id: "8", name: "auto-compound", category: "defi", description: "Auto-compound yield positions", ai: ["openai"] },
    { id: "9", name: "sentiment-scanner", category: "data", description: "On-chain sentiment analysis", ai: ["openai", "claude"] },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "defi", label: "DeFi" },
    { id: "security", label: "Security" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "data", label: "Data" },
  ];

  const filtered = selectedCategory === "all" ? skills : skills.filter((s) => s.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <h1 className="font-pixel text-lg text-white/90">Agent Skills</h1>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 text-xs font-mono whitespace-nowrap ${
              selectedCategory === cat.id ? "btn-primary-gradient" : "btn-secondary-glass"
            }`}
            data-testid={`category-${cat.id}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((skill) => (
          <GlassCard key={skill.id}>
            <div className="space-y-3">
              <h3 className="font-mono text-white/90 font-bold">{skill.name}</h3>
              <p className="text-white/55 text-sm">{skill.description}</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 text-xs border border-white/[0.06]">
                  {skill.category}
                </span>
                {skill.ai.length > 0 ? (
                  skill.ai.map((provider) => (
                    <span key={provider} className="px-2 py-1 text-xs border border-accent text-accent">
                      {provider}
                    </span>
                  ))
                ) : (
                  <span className="px-2 py-1 text-xs border border-white/[0.06] text-white/45">No AI</span>
                )}
              </div>
              <code className="text-xs text-white/45 block bg-black/30 p-2" style={{ borderRadius: "2px" }}>
                xelvyn skill install {skill.name}
              </code>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
