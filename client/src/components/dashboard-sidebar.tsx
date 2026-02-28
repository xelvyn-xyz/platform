import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sidebarLinks = [
  { label: "Overview", href: "/dashboard" },
  { label: "Agents", href: "/dashboard/agents" },
  { label: "Logs", href: "/dashboard/logs" },
  { label: "XMTP", href: "/dashboard/xmtp" },
  { label: "Settings", href: "/dashboard/settings" },
];

export function DashboardSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [location] = useLocation();

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-background/80 backdrop-blur border-r border-white/[0.06] transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-48"
      }`}
      data-testid="dashboard-sidebar"
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-white/[0.06]">
          <span className="font-pixel text-white/90 text-xs">
            {isCollapsed ? "X" : "XELVYN"}
          </span>
        </div>

        <nav className="flex-1 overflow-y-auto">
          {sidebarLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={`px-4 py-3 font-mono text-sm transition-colors border-l-4 ${
                  location === link.href
                    ? "border-accent text-white/90 bg-accent/10"
                    : "border-transparent text-white/55 hover:text-white/75"
                }`}
                data-testid={`sidebar-link-${link.label.toLowerCase()}`}
              >
                {!isCollapsed && link.label}
              </div>
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-4 border-t border-white/[0.06] hover:bg-white/[0.05]"
          data-testid="sidebar-collapse-button"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
    </aside>
  );
}
