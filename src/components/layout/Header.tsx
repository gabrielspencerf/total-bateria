import { useState, useEffect, useRef, type FocusEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Sobre", path: "/sobre" },
  {
    name: "Serviços",
    path: "/servicos",
    hasDropdown: true,
  },
  { name: "Segmentos Atendidos", path: "/segmentos-atendidos" },
  { name: "Mídia", path: "/midia" },
  { name: "Clientes", path: "/cases-e-clientes" },
];

const servicesLinks = [
  { name: "Baterias Tracionárias", path: "/servicos/baterias-tracionarias" },
  { name: "Baterias de Lítio", path: "/servicos/baterias-de-litio" },
  { name: "Empilhadeiras", path: "/servicos/empilhadeiras" },
  { name: "Locação de Equipamentos", path: "/servicos/locacao-de-equipamentos" },
  { name: "Peças e Acessórios", path: "/servicos/pecas-e-acessorios" },
  { name: "Treinamentos e Segurança", path: "/servicos/treinamentos-e-seguranca" },
];

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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <div
                    ref={servicesContainerRef}
                    className={cn(
                      "flex items-center text-sm font-semibold hover:text-red-600 transition-colors py-2",
                      isScrolled ? "text-zinc-200" : "text-zinc-700",
                    )}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    onFocus={() => setServicesDropdownOpen(true)}
                    onBlur={handleServicesBlur}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        "relative",
                        location.pathname.startsWith("/servicos") && "text-red-600",
                      )}
                    >
                      {link.name}
                      <span
                        className={cn(
                        "absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full",
                        location.pathname.startsWith("/servicos") && "w-full",
                        )}
                      />
                    </Link>

                    <button
                      type="button"
                      aria-label="Abrir submenu de serviços"
                      aria-haspopup="menu"
                      aria-expanded={servicesDropdownOpen}
                      aria-controls={servicesMenuId}
                      onClick={() => setServicesDropdownOpen((current) => !current)}
                      className={cn(
                        "ml-1 hover:text-red-600 transition-colors",
                        isScrolled ? "text-zinc-200" : "text-zinc-700",
                      )}
                    >
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-300",
                          servicesDropdownOpen && "rotate-180",
                        )}
                      />
                    </button>

                    {/* Dropdown */}
                    <div
                      id={servicesMenuId}
                      role="menu"
                      aria-label="Lista de serviços"
                      className={cn(
                        "absolute top-full left-0 w-72 bg-white/95 backdrop-blur-xl shadow-2xl border border-zinc-100 rounded-xl py-3 transition-all duration-300 origin-top-left",
                        servicesDropdownOpen
                          ? "opacity-100 scale-100 visible translate-y-0"
                          : "opacity-0 scale-95 invisible -translate-y-2",
                      )}
                    >
                      {servicesLinks.map((sublink) => (
                        <Link
                          role="menuitem"
                          key={sublink.name}
                          to={sublink.path}
                          onClick={() => setServicesDropdownOpen(false)}
                          className={cn(
                            "block px-5 py-2.5 text-sm hover:bg-red-50 hover:text-red-600 transition-all duration-200",
                            location.pathname === sublink.path
                              ? "text-red-600 font-medium bg-red-50/50 border-l-2 border-red-600"
                              : "text-zinc-600 border-l-2 border-transparent",
                          )}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "relative text-sm font-semibold hover:text-red-600 transition-colors py-2 group",
                      location.pathname === link.path
                        ? "text-red-600"
                        : isScrolled
                          ? "text-zinc-200"
                          : "text-zinc-700",
                    )}
                  >
                    {link.name}
                    <span
                      className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full",
                      location.pathname === link.path && "w-full",
                      )}
                    />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link to="/contato">
              <Button size="sm" className="shadow-lg shadow-red-600/20">Solicitar Orçamento</Button>
            </Link>
          </div>

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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-zinc-950/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id={mobileMenuId}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden flex flex-col pt-24 pb-6 px-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
          >
            <div className="flex flex-col space-y-6 flex-grow">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-zinc-100 pb-4">
                  {link.hasDropdown ? (
                    <div>
                      <div className="flex items-center justify-between">
                        <Link 
                          to={link.path} 
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "text-xl font-bold transition-colors",
                            location.pathname.startsWith('/servicos') ? "text-red-600" : "text-zinc-900 hover:text-red-600"
                          )}
                        >
                          {link.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="p-2 text-zinc-500 hover:text-red-600 transition-colors"
                          aria-label="Abrir submenu de serviços no menu mobile"
                          aria-expanded={mobileServicesOpen}
                          aria-controls={mobileServicesMenuId}
                        >
                          <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", mobileServicesOpen && "rotate-180")} />
                        </button>
                      </div>
                      
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div 
                            id={mobileServicesMenuId}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 mt-4 space-y-4 border-l-2 border-red-100">
                              {servicesLinks.map((sublink) => (
                                <Link 
                                  key={sublink.name} 
                                  to={sublink.path}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={cn(
                                    "block text-base transition-colors",
                                    location.pathname === sublink.path ? "text-red-600 font-semibold" : "text-zinc-600 hover:text-red-600"
                                  )}
                                >
                                  {sublink.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link 
                      to={link.path} 
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block text-xl font-bold transition-colors",
                        location.pathname === link.path ? "text-red-600" : "text-zinc-900 hover:text-red-600"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            <div className="pt-8 mt-auto">
              <Link to="/contato" className="block w-full" onClick={() => setMobileMenuOpen(false)}>
                <Button size="lg" className="w-full shadow-xl shadow-red-600/20">Solicitar Orçamento</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
