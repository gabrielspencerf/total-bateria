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
        "flex items-center text-sm font-semibold hover:text-red-600 transition-colors py-2",
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
          "relative",
          locationPathname.startsWith("/servicos") && "text-red-600",
        )}
      >
        {label}
        <span
          className={cn(
            "absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full",
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
          "ml-1 hover:text-red-600 transition-colors",
          isScrolled ? "text-zinc-200" : "text-zinc-700",
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
          "absolute top-full left-0 w-72 bg-white/95 backdrop-blur-xl shadow-2xl border border-zinc-100 rounded-xl py-3 transition-all duration-300 origin-top-left",
          isOpen
            ? "opacity-100 scale-100 visible translate-y-0"
            : "opacity-0 scale-95 invisible -translate-y-2",
        )}
      >
        {links.map((sublink) => (
          <Link
            role="menuitem"
            key={sublink.name}
            to={sublink.path}
            onClick={onClose}
            className={cn(
              "block px-5 py-2.5 text-sm hover:bg-red-50 hover:text-red-600 transition-all duration-200",
              locationPathname === sublink.path
                ? "text-red-600 font-medium bg-red-50/50 border-l-2 border-red-600"
                : "text-zinc-600 border-l-2 border-transparent",
            )}
          >
            {sublink.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
