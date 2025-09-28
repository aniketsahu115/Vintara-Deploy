import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ConnectWallet } from "@/components/ui/ConnectWallet";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Swap", href: "/swap" },
  { name: "Liquidity", href: "/liquidity" },
  { name: "Lending", href: "/lending" },
  { name: "Yield", href: "/yield" },
  { name: "Analytics", href: "/analytics" },
  { name: "Governance", href: "/governance" },
  { name: "Bridge", href: "/bridge" },
  { name: "Institutional", href: "/institutional" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 sm:h-18 md:h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-1">
          <img
            src="..../assets/Vintara website-svg.svg"
            alt="Vintara Logo"
            className="h-10 w-auto sm:h-12 md:h-14"
          />
          <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-bitcoin to-bitcoin-light bg-clip-text text-transparent">
            Vintara
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-bitcoin ${
                location.pathname === item.href
                  ? "text-bitcoin"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Wallet Connect Button */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex">
            <ConnectWallet />
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="flex flex-col space-y-4 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-bitcoin ${
                  location.pathname === item.href
                    ? "text-bitcoin"
                    : "text-muted-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex justify-center">
              <ConnectWallet />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
