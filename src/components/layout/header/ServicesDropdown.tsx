import { Link } from "react-router-dom";
import type { FocusEvent, RefObject } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../../utils/cn";
import type { ServiceNavigationItem } from "../../../data/navigation";

interface ServicesDropdownProps {
  label: string;
  linkPath: string;
  links: ServiceNavigationItem[];
  locationPathname: string;
  isScrolled: boolean;
  isOpen: boolean;
  menuId: string;
  containerRef: RefObject<HTMLDivElement | null>;
  onOpen: () => void;
  onClose: () => void;
  onBlur: (event: FocusEvent<HTMLDivElement>) => void;
  onToggle: () => void;
}

export function ServicesDropdown({
  label,
  linkPath,
  links,
  locationPathname,
  isScrolled,
  isOpen,
  menuId,
  containerRef,
  onOpen,
  onClose,
  onBlur,
  onToggle,
}: ServicesDropdownProps) {
  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex items-center py-2 text-sm font-semibold transition-colors hover:text-red-600",
        isScrolled ? "text-zinc-200" : "text-zinc-700",
      )}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={onBlur}
    >
      <Link
        to={linkPath}
        className={cn(
          "relative rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2",
          isScrolled ? "focus-visible:ring-offset-zinc-950" : "focus-visible:ring-offset-white",
          locationPathname.startsWith("/servicos") && "text-red-600",
        )}
      >
        {label}
        <span
          className={cn(
            "absolute -bottom-1 left-0 h-0.5 w-0 bg-red-600 transition-all duration-300 group-hover:w-full",
            locationPathname.startsWith("/servicos") && "w-full",
          )}
        />
      </Link>

      <button
        type="button"
        aria-label="Abrir submenu de serviços"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={onToggle}
        className={cn(
          "ml-0.5 inline-flex min-h-10 min-w-10 items-center justify-center rounded-md transition-colors hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2",
          isScrolled ? "text-zinc-200 focus-visible:ring-offset-zinc-950" : "text-zinc-700 focus-visible:ring-offset-white",
        )}
      >
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            isOpen && "rotate-180",
          )}
        />
      </button>

      <div
        id={menuId}
        role="menu"
        aria-label="Lista de serviços"
        className={cn(
          "absolute left-0 top-full z-[70] w-72 origin-top-left rounded-xl border border-zinc-100 bg-white/95 py-3 shadow-lg shadow-zinc-950/10 backdrop-blur-md transition-[opacity,transform,visibility] duration-200 motion-reduce:transition-none",
          isOpen
            ? "visible translate-y-0 opacity-100 pointer-events-auto"
            : "invisible -translate-y-1 opacity-0 pointer-events-none",
        )}
      >
        {links.map((sublink) => (
          <Link
            role="menuitem"
            key={sublink.name}
            to={sublink.path}
            onClick={onClose}
            className={cn(
              "block px-5 py-2.5 text-sm transition-colors duration-200 hover:bg-red-50 hover:text-red-600 focus-visible:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-600/30",
              locationPathname === sublink.path
                ? "border-l-2 border-red-600 bg-red-50/50 font-medium text-red-600"
                : "border-l-2 border-transparent text-zinc-600",
            )}
          >
            {sublink.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
