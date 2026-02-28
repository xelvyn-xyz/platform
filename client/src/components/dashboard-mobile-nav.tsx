import { Link, useLocation } from "wouter";

const mobileNavLinks = [
  { label: "Overview", href: "/dashboard" },
  { label: "Agents", href: "/dashboard/agents" },
  { label: "Logs", href: "/dashboard/logs" },
  { label: "XMTP", href: "/dashboard/xmtp" },
  { label: "Settings", href: "/dashboard/settings" },
];

export function DashboardMobileNav() {
  const [location] = useLocation();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur border-t border-white/[0.06] md:hidden"
      data-testid="dashboard-mobile-nav"
    >
      <div className="flex justify-around">
        {mobileNavLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <div
              className={`flex-1 py-3 text-center font-mono text-xs transition-colors ${
                location === link.href
                  ? "border-t-2 border-accent text-white/90"
                  : "text-white/55"
              }`}
              data-testid={`mobile-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
