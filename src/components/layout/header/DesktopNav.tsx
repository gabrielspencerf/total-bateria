import { Link } from "react-router-dom";
import type { FocusEvent, RefObject } from "react";
import { cn } from "../../../utils/cn";
import { navLinks, servicesLinks } from "../../../data/navigation";
import { ServicesDropdown } from "./ServicesDropdown";

interface DesktopNavProps {
  isScrolled: boolean;
  locationPathname: string;
  servicesDropdownOpen: boolean;
  servicesMenuId: string;
  servicesContainerRef: RefObject<HTMLDivElement | null>;
  onServicesOpen: () => void;
  onServicesClose: () => void;
  onServicesBlur: (event: FocusEvent<HTMLDivElement>) => void;
  onServicesToggle: () => void;
}

export function DesktopNav({
  isScrolled,
  locationPathname,
  servicesDropdownOpen,
  servicesMenuId,
  servicesContainerRef,
  onServicesOpen,
  onServicesClose,
  onServicesBlur,
  onServicesToggle,
}: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navLinks.map((link) => (
        <div key={link.name} className="relative group">
          {link.hasDropdown ? (
            <ServicesDropdown
              label={link.name}
              linkPath={link.path}
              links={servicesLinks}
              locationPathname={locationPathname}
              isScrolled={isScrolled}
              isOpen={servicesDropdownOpen}
              menuId={servicesMenuId}
              containerRef={servicesContainerRef}
              onOpen={onServicesOpen}
              onClose={onServicesClose}
              onBlur={onServicesBlur}
              onToggle={onServicesToggle}
            />
          ) : (
            <Link
              to={link.path}
              className={cn(
                "group relative rounded-md py-2 text-sm font-semibold transition-colors hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2",
                locationPathname === link.path
                  ? "text-red-600"
                  : isScrolled
                    ? "text-zinc-200 focus-visible:ring-offset-zinc-950"
                    : "text-zinc-700 focus-visible:ring-offset-white",
              )}
            >
              {link.name}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full",
                  locationPathname === link.path && "w-full",
                )}
              />
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
