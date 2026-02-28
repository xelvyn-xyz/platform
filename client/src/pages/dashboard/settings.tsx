import { GlassCard } from "@/components/glass-card";
import { useAuth } from "@lib/auth";

export default function DashboardSettings() {
  const { logout } = useAuth();

  return (
    <div className="space-y-8 px-4 md:px-8 py-8">
      <h1 className="font-pixel text-2xl text-white/90">Settings</h1>

      {/* API Keys */}
      <section className="space-y-4">
        <h2 className="font-pixel text-lg text-white/90">API Keys</h2>
        <GlassCard>
          <div className="space-y-3">
            <p className="text-white/55 text-sm font-mono">
              API keys are generated on your VPS after deployment. They are displayed once and stored securely.
            </p>
            <code className="block bg-black/30 p-2 text-white/45 font-mono text-xs" style={{ borderRadius: "2px" }}>
              xvn_••••••••••••••••••••••••••••
            </code>
          </div>
        </GlassCard>
      </section>

      {/* x402 Config */}
      <section className="space-y-4">
        <h2 className="font-pixel text-lg text-white/90">x402 Config</h2>
        <GlassCard>
          <div className="space-y-4">
            <div>
              <label className="block text-white/75 font-mono text-sm mb-2">Max Spend (USDC)</label>
              <input
                type="number"
                defaultValue="10"
                className="w-full px-4 py-2 bg-white/5 border border-white/[0.06] text-white font-mono text-sm"
                style={{ borderRadius: "2px" }}
              />
            </div>
            <button className="btn-primary-gradient px-4 py-2 text-white font-mono text-sm">Save Config</button>
          </div>
        </GlassCard>
      </section>

      {/* VPS Settings */}
      <section className="space-y-4">
        <h2 className="font-pixel text-lg text-white/90">VPS Settings</h2>
        <GlassCard>
          <div className="space-y-3">
            <div>
              <p className="text-white/45 text-xs font-mono mb-1">CPU: 2 vCPU</p>
              <p className="text-white/45 text-xs font-mono mb-1">Memory: 4 GB RAM</p>
              <p className="text-white/45 text-xs font-mono mb-1">Pricing: $0.05 USDC/hour</p>
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Notifications */}
      <section className="space-y-4">
        <h2 className="font-pixel text-lg text-white/90">Notifications</h2>
        <GlassCard>
          <div className="space-y-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="text-white/75 font-mono text-sm">Email alerts</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="text-white/75 font-mono text-sm">XMTP messages</span>
            </label>
          </div>
        </GlassCard>
      </section>

      {/* Logout */}
      <section className="space-y-4">
        <button
          onClick={() => logout()}
          className="btn-secondary-glass px-4 py-2 text-white font-mono text-sm"
          data-testid="logout-button"
        >
          Logout
        </button>
      </section>
    </div>
  );
}
