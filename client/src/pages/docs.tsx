import { useState } from "react";
import { GlassCard } from "@/components/glass-card";

export default function Docs() {
  const [activeTab, setActiveTab] = useState<"cli" | "sdk" | "api">("cli");

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <h1 className="font-pixel text-lg text-white/90">Documentation</h1>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-white/[0.06]">
        {["cli", "sdk", "api"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 py-2 font-mono text-sm uppercase transition-colors ${
              activeTab === tab
                ? "text-white/90 border-b-2 border-accent"
                : "text-white/45 hover:text-white/75"
            }`}
            data-testid={`tab-${tab}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CLI Tab */}
      {activeTab === "cli" && (
        <div className="space-y-4">
          {[
            { cmd: "xelvyn login", desc: "Authenticate with XELVYN" },
            { cmd: "xelvyn init <name> --template <tpl> --network base", desc: "Initialize new agent" },
            { cmd: "xelvyn deploy --x402 --xmtp", desc: "Deploy to VPS" },
            { cmd: "xelvyn status <name> --live", desc: "Check agent status" },
            { cmd: "xelvyn logs <name>", desc: "View agent logs" },
            { cmd: "xelvyn stop <name>", desc: "Stop agent" },
            { cmd: "xelvyn restart <name>", desc: "Restart agent" },
            { cmd: "xelvyn x402 balance", desc: "Check x402 balance" },
            { cmd: "xelvyn x402 history", desc: "View transaction history" },
            { cmd: "xelvyn xmtp read", desc: "Read XMTP messages" },
            { cmd: "xelvyn skill install <name> --ai openai|claude", desc: "Install skill" },
          ].map((item, i) => (
            <GlassCard key={i}>
              <div>
                <code className="text-accent font-mono text-sm">{item.cmd}</code>
                <p className="text-white/55 text-sm mt-2">{item.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      )}

      {/* SDK Tab */}
      {activeTab === "sdk" && (
        <div className="space-y-4">
          <GlassCard>
            <pre className="text-white/75 font-mono text-xs overflow-x-auto">{`import { XelvynClient } from '@xelvyn/sdk';

const client = new XelvynClient({ 
  apiKey: 'xvn_...' 
});

// Deploy
const agent = await client.agents.deploy({
  name: 'my-agent',
  template: 'yield',
  x402: true,
  xmtp: true
});

// Check balance
const balance = await client.x402.balance(agent.id);

// Read messages
const msgs = await client.xmtp.list({ 
  agentId: agent.id 
});

// Install skill
await client.skills.install(agent.id, {
  name: 'yield-rebalancer',
  ai: 'openai'
});`}</pre>
          </GlassCard>
        </div>
      )}

      {/* API Tab */}
      {activeTab === "api" && (
        <div className="space-y-4">
          <p className="text-white/55 text-sm">Base URL: https://api.xelvyn.xyz/v1</p>
          {[
            { method: "POST", path: "/auth/login", desc: "Email authentication" },
            { method: "GET", path: "/agents", desc: "List agents" },
            { method: "GET", path: "/agents/:id", desc: "Get agent details" },
            { method: "POST", path: "/agents/deploy", desc: "Deploy agent" },
            { method: "GET", path: "/x402/balance/:id", desc: "Get balance" },
            { method: "GET", path: "/x402/history/:id", desc: "Get transactions" },
            { method: "GET", path: "/xmtp/messages/:id", desc: "Get messages" },
            { method: "GET", path: "/skills", desc: "List skills" },
          ].map((endpoint, i) => (
            <GlassCard key={i}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex gap-2 items-center mb-1">
                    <span className="px-2 py-1 text-xs font-mono bg-accent/20 text-accent">
                      {endpoint.method}
                    </span>
                    <code className="text-white/75 font-mono text-sm">{endpoint.path}</code>
                  </div>
                  <p className="text-white/55 text-sm">{endpoint.desc}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}
