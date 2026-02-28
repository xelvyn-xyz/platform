import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useAuth } from "@lib/auth";
import { useIsMobile } from "@hooks/use-mobile";

export function Navbar() {
  const { user } = useAuth();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Agents", href: "/agents" },
    { label: "x402", href: "/x402" },
    { label: "Logs", href: "/logs" },
    { label: "Skills", href: "/skills" },
    { label: "About", href: "/about" },
    { label: "Docs", href: "/docs" },
  ];

  return (
    <nav
      className={`cyber-topbar fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ borderRadius: "2px" }}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="font-pixel text-white/90 text-xs cursor-pointer">
            XELVYN
          </span>
        </Link>

        {!isMobile ? (
          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className="font-mono text-white/75 text-sm hover:text-white/90 cursor-pointer">
                    {`{${item.label}}`}
                  </span>
                </Link>
              ))}
            </div>

            <div className="flex gap-2">
              <a
                href="https://github.com/xelvyn-xyz"
                className="text-white/75 hover:text-white/90 transition-colors"
                data-testid="github-link"
              >
                GitHub
              </a>
              <a
                href="https://x.com/Xelvyn_"
                className="text-white/75 hover:text-white/90 transition-colors"
                data-testid="x-link"
              >
                X
              </a>
            </div>

            <Link href={user ? "/dashboard" : "/login"}>
              <button
                className="btn-primary-gradient px-4 py-2 text-white font-mono text-sm"
                data-testid="launch-button"
              >
                LAUNCH
              </button>
            </Link>
          </div>
        ) : (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        )}
      </div>

      {isMobile && isMenuOpen && (
        <div className="bg-background/80 backdrop-blur p-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span className="font-mono text-white/75 text-sm">
                {item.label}
              </span>
            </Link>
          ))}
          <Link href={user ? "/dashboard" : "/login"}>
            <button className="btn-primary-gradient w-full py-2">LAUNCH</button>
          </Link>
        </div>
      )}
    </nav>
  );
}
