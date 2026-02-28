import { useEffect } from "react";
import { GlassCard } from "@/components/glass-card";

export default function About() {
  useEffect(() => {
    document.title = "About XELVYN - Autonomous Agent Deployment Platform";
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* Introduction */}
      <section>
        <h1 className="font-pixel text-2xl text-white/90 mb-6">About XELVYN</h1>
        <p className="font-mono text-white/55 max-w-2xl">
          XELVYN is an autonomous agent deployment platform for Web4. Deploy agents to isolated VPS, pay per compute with x402 Protocol (USDC on Base), and communicate end-to-end encrypted via XMTP.
        </p>
      </section>

      {/* Web4 Vision */}
      <section className="space-y-6">
        <h2 className="font-pixel text-xl text-white/90">Web4 Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <GlassCard>
            <h3 className="font-pixel text-sm text-white/90 mb-2">From Web3 to Web4</h3>
            <p className="font-mono text-white/55 text-sm">Web3 is about ownership. Web4 is about autonomy. Autonomous software agents execute tasks without intermediaries.</p>
          </GlassCard>
          <GlassCard>
            <h3 className="font-pixel text-sm text-white/90 mb-2">Autonomous Infrastructure</h3>
            <p className="font-mono text-white/55 text-sm">Agents run on isolated VPS with direct access to blockchain, APIs, and tools. No shared runtime risk.</p>
          </GlassCard>
          <GlassCard>
            <h3 className="font-pixel text-sm text-white/90 mb-2">Collective Control</h3>
            <p className="font-mono text-white/55 text-sm">Operators define agent boundaries. Agents execute autonomously within those bounds. Full transparency. Zero centralization.</p>
          </GlassCard>
          <GlassCard>
            <h3 className="font-pixel text-sm text-white/90 mb-2">Mission</h3>
            <p className="font-mono text-white/55 text-sm">Make agent deployment as simple as deploying a web app. One CLI. Full power.</p>
          </GlassCard>
        </div>
      </section>

      {/* Architecture */}
      <section className="space-y-6">
        <h2 className="font-pixel text-xl text-white/90">Architecture</h2>
        <div className="space-y-3">
          {[
            { num: "1", name: "Client", desc: "@xelvyn/cli, @xelvyn/sdk, Dashboard" },
            { num: "2", name: "API", desc: "REST endpoints, auth, rate limiting" },
            { num: "3", name: "Orchestration", desc: "VPS provisioning, x402 channels, XMTP identity" },
            { num: "4", name: "Execution", desc: "Isolated VPS, agent runtime, skill engine" },
            { num: "5", name: "Protocol", desc: "Base network, USDC, XMTP" },
          ].map((layer) => (
            <GlassCard key={layer.num}>
              <div className="flex gap-4">
                <span className="font-pixel text-white/90 text-lg">{layer.num}</span>
                <div>
                  <h3 className="font-mono text-white/90 font-bold">{layer.name}</h3>
                  <p className="text-white/55 text-sm">{layer.desc}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Protocols */}
      <section className="space-y-6">
        <h2 className="font-pixel text-xl text-white/90">Protocols</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard glowVariant>
            <h3 className="font-pixel text-sm text-white/90 mb-4">x402 Protocol</h3>
            <ul className="space-y-2 text-white/55 text-sm font-mono">
              <li>• HTTP 402 Payment Required</li>
              <li>• USDC on Base network</li>
              <li>• Per-agent payment channels</li>
              <li>• Transparent pay-per-compute</li>
            </ul>
          </GlassCard>
          <GlassCard glowVariant>
            <h3 className="font-pixel text-sm text-white/90 mb-4">XMTP Messaging</h3>
            <ul className="space-y-2 text-white/55 text-sm font-mono">
              <li>• Decentralized messaging</li>
              <li>• End-to-end encrypted</li>
              <li>• Agent-to-operator comms</li>
              <li>• Message types: DEPLOY, ALERT, REPORT, COMMAND, ERROR</li>
            </ul>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
