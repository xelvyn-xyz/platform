import { Link } from "wouter";

export default function Landing() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="text-center py-20">
        <h1 className="font-pixel text-2xl md:text-4xl text-white/90 mb-6">
          Autonomous Execution<br />Collective Control
        </h1>
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          <span className="px-3 py-1 border border-white/[0.06] text-xs font-mono">BETA v1</span>
          <span className="px-3 py-1 border border-white/[0.06] text-xs font-mono">x402 Protocol</span>
          <span className="px-3 py-1 border border-white/[0.06] text-xs font-mono">XMTP Encrypted</span>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        <div className="glass-morphism p-6" style={{ borderRadius: "2px" }}>
          <h3 className="font-pixel text-sm text-white/90 mb-2">CLI-First Deploy</h3>
          <p className="font-mono text-white/55 text-sm">Deploy agents in seconds with simple commands</p>
        </div>
        <div className="glass-morphism p-6" style={{ borderRadius: "2px" }}>
          <h3 className="font-pixel text-sm text-white/90 mb-2">x402 Micropayments</h3>
          <p className="font-mono text-white/55 text-sm">Pay per compute with USDC on Base</p>
        </div>
        <div className="glass-morphism p-6" style={{ borderRadius: "2px" }}>
          <h3 className="font-pixel text-sm text-white/90 mb-2">XMTP Messaging</h3>
          <p className="font-mono text-white/55 text-sm">End-to-end encrypted agent communication</p>
        </div>
        <div className="glass-morphism p-6" style={{ borderRadius: "2px" }}>
          <h3 className="font-pixel text-sm text-white/90 mb-2">Modular Skills</h3>
          <p className="font-mono text-white/55 text-sm">Mix and match pre-built capabilities</p>
        </div>
      </section>

      {/* Workflow */}
      <section className="max-w-4xl mx-auto px-4">
        <h2 className="font-pixel text-lg text-white/90 mb-8 text-center">4-Step Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {["Install CLI", "Init Agent", "Deploy to VPS", "Monitor"].map((step, i) => (
            <div key={i} className="glass-morphism p-4 text-center" style={{ borderRadius: "2px" }}>
              <div className="text-4xl text-accent font-pixel mb-2">{i + 1}</div>
              <p className="font-mono text-white/75 text-xs">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <Link href="/login">
          <button className="btn-primary-gradient px-6 py-3" data-testid="cta-button">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
}
