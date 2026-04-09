import { useState, useEffect, useRef, type FocusEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils/cn";
import { DesktopNav } from "./header/DesktopNav";
import { MobileNav } from "./header/MobileNav";
import { HeaderCTA } from "./header/HeaderCTA";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);
  const servicesContainerRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const servicesMenuId = "desktop-services-menu";
  const mobileMenuId = "mobile-main-navigation";
  const mobileServicesMenuId = "mobile-services-navigation";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      mobileMenuButtonRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
        return;
      }

      if (servicesDropdownOpen) {
        setServicesDropdownOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen, servicesDropdownOpen]);

  const handleServicesBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextFocusedElement = event.relatedTarget;
    if (
      nextFocusedElement instanceof Node &&
      servicesContainerRef.current?.contains(nextFocusedElement)
    ) {
      return;
    }

    setServicesDropdownOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-zinc-950/85 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-white/10 py-3"
          : "bg-white/95 backdrop-blur-sm py-5"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center group" onClick={() => setMobileMenuOpen(false)}>
            <span className="text-2xl font-black text-red-600 tracking-tighter italic group-hover:text-red-500 transition-colors">TOTAL</span>
            <span
              className={cn(
                "text-2xl font-black tracking-tighter italic ml-1 transition-colors",
                isScrolled ? "text-white group-hover:text-zinc-200" : "text-zinc-900 group-hover:text-zinc-700",
              )}
            >
              BATERIA
            </span>
          </Link>

          <DesktopNav
            isScrolled={isScrolled}
            locationPathname={location.pathname}
            servicesDropdownOpen={servicesDropdownOpen}
            servicesMenuId={servicesMenuId}
            servicesContainerRef={servicesContainerRef}
            onServicesOpen={() => setServicesDropdownOpen(true)}
            onServicesClose={() => setServicesDropdownOpen(false)}
            onServicesBlur={handleServicesBlur}
            onServicesToggle={() => setServicesDropdownOpen((current) => !current)}
          />

          <HeaderCTA />

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center z-[60]">
            <button
              ref={mobileMenuButtonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "hover:text-red-600 focus:outline-none transition-colors p-2 -mr-2 relative z-[60]",
                isScrolled ? "text-white" : "text-zinc-900",
              )}
              aria-label="Abrir menu principal"
              aria-expanded={mobileMenuOpen}
              aria-controls={mobileMenuId}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <MobileNav
        open={mobileMenuOpen}
        menuId={mobileMenuId}
        mobileServicesMenuId={mobileServicesMenuId}
        mobileServicesOpen={mobileServicesOpen}
        locationPathname={location.pathname}
        onClose={() => setMobileMenuOpen(false)}
        onToggleServices={() => setMobileServicesOpen((current) => !current)}
      />
    </header>
  );
}
