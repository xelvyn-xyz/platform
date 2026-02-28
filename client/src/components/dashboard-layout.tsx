import { useAuth } from "@lib/auth";
import { DashboardSidebar } from "./dashboard-sidebar";
import { DashboardMobileNav } from "./dashboard-mobile-nav";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center space-y-4">
          <p className="font-mono text-white/75">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white grid-overlay">
      <DashboardSidebar />
      <main className="ml-48 md:ml-16 pb-20 md:pb-0 pt-4">
        {children}
      </main>
      <DashboardMobileNav />
    </div>
  );
}
