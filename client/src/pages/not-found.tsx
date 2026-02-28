import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="font-pixel text-4xl md:text-6xl text-white/90">404</h1>
        <p className="font-mono text-white/55">Page not found</p>
      </div>

      <Link href="/">
        <button className="btn-primary-gradient px-6 py-3 text-white font-mono text-sm">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
