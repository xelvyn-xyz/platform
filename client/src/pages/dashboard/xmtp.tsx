import { useState } from "react";
import { GlassCard } from "@/components/glass-card";

export default function DashboardXMTP() {
  const [selectedAgent, setSelectedAgent] = useState("agent-alpha-7x");

  const agents = ["agent-alpha-7x", "agent-beta-3k", "agent-gamma-9z"];
  const messages = [
    { id: "1", type: "DEPLOY", message: "Agent deployed successfully" },
    { id: "2", type: "ALERT", message: "Position at 80% of limit" },
    { id: "3", type: "REPORT", message: "Daily summary: 0.5 USDC earned" },
  ];

  const typeColors = {
    DEPLOY: "bg-accent/20 text-accent",
    ALERT: "bg-yellow-500/20 text-yellow-400",
    REPORT: "bg-green-500/20 text-green-400",
    COMMAND: "bg-blue-500/20 text-blue-400",
    ERROR: "bg-red-500/20 text-red-400",
  };

  return (
    <div className="flex h-screen gap-6 px-4 md:px-8 py-8">
      {/* Agent List */}
      <div className="w-full md:w-48 space-y-2">
        <h2 className="font-pixel text-sm text-white/90">Agents</h2>
        <div className="space-y-1">
          {agents.map((agent) => (
            <button
              key={agent}
              onClick={() => setSelectedAgent(agent)}
              className={`w-full text-left px-3 py-2 text-xs font-mono transition-colors border-l-2 ${
                selectedAgent === agent
                  ? "border-accent bg-accent/10 text-white/90"
                  : "border-transparent text-white/45 hover:text-white/75"
              }`}
              data-testid={`xmtp-agent-${agent}`}
            >
              {agent}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 flex flex-col">
        <h2 className="font-pixel text-sm text-white/90 mb-4">Messages</h2>
        <div className="flex-1 overflow-y-auto space-y-2 mb-4">
          {messages.map((msg) => (
            <GlassCard key={msg.id}>
              <div className="flex gap-3">
                <span
                  className={`px-2 py-1 text-xs font-mono whitespace-nowrap ${
                    typeColors[msg.type as keyof typeof typeColors]
                  }`}
                >
                  {msg.type}
                </span>
                <p className="text-white/75 font-mono text-sm">{msg.message}</p>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Send */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Send command..."
            className="flex-1 px-4 py-2 bg-white/5 border border-white/[0.06] text-white/75 placeholder:text-white/30 font-mono text-sm"
            style={{ borderRadius: "2px" }}
            data-testid="xmtp-input"
          />
          <button className="btn-primary-gradient px-4 text-white font-mono text-sm">Send</button>
        </div>
      </div>
    </div>
  );
}
