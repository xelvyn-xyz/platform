import React, { useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@lib/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [, navigate] = useLocation();
  const { login } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email);
      navigate("/dashboard");
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div
        className="glass-morphism p-8 w-full max-w-sm"
        style={{ borderRadius: "2px" }}
      >
        <h1 className="font-pixel text-lg text-white/90 text-center mb-8">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-white/75 font-mono text-sm mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-2 bg-white/5 border border-white/[0.06] text-white placeholder:text-white/30 font-mono"
              style={{ borderRadius: "2px" }}
              required
              data-testid="email-input"
            />
          </div>

          {error && (
            <p className="text-red-400 font-mono text-sm" data-testid="error-message">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary-gradient py-2.5 text-white font-mono text-sm uppercase disabled:opacity-50"
            data-testid="login-button"
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>

        <p className="text-white/45 text-xs text-center mt-6 font-mono">
          Email-only authentication. No password required.
        </p>
      </div>
    </div>
  );
}
