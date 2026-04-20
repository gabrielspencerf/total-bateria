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
        "fixed left-0 right-0 top-0 z-50 transition-[padding,background-color,box-shadow,border-color] duration-200",
        isScrolled
          ? "border-b border-white/10 bg-zinc-950/90 py-3 shadow-lg shadow-black/15 backdrop-blur-md"
          : "bg-white/95 py-5 backdrop-blur-sm"
      )}
    >
      <div className="lp-container relative z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "flex shrink-0 items-center rounded-md transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2",
              isScrolled ? "focus-visible:ring-offset-zinc-950" : "focus-visible:ring-offset-white",
            )}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Ir para a página inicial da Total Bateria"
          >
            <img
              src={isScrolled ? "/assets/logos/total-bateria-branco.png" : "/assets/logos/total-bateria-colorido.png"}
              alt="Total Bateria"
              className="h-11 w-auto md:h-12"
              loading="eager"
              decoding="async"
            />
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
                "relative z-[60] -mr-2 rounded-lg p-2 transition-colors hover:text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                isScrolled ? "text-white focus-visible:ring-offset-zinc-950" : "text-zinc-900",
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
