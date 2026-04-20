import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { cn } from "../../../utils/cn";
import { navLinks, servicesLinks } from "../../../data/navigation";
import { HeaderCTA } from "./HeaderCTA";

interface MobileNavProps {
  open: boolean;
  menuId: string;
  mobileServicesMenuId: string;
  mobileServicesOpen: boolean;
  locationPathname: string;
  onClose: () => void;
  onToggleServices: () => void;
}

export function MobileNav({
  open,
  menuId,
  mobileServicesMenuId,
  mobileServicesOpen,
  locationPathname,
  onClose,
  onToggleServices,
}: MobileNavProps) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-zinc-950/20 backdrop-blur-sm motion-reduce:backdrop-blur-none lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={
              reduceMotion
                ? { duration: 0.2, ease: "easeOut" }
                : { type: "spring", damping: 28, stiffness: 320 }
            }
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto bg-white px-6 pb-6 pt-24 shadow-xl lg:hidden"
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
                          onClick={onClose}
                          className={cn(
                            "rounded-md text-xl font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                            locationPathname.startsWith("/servicos")
                              ? "text-red-600"
                              : "text-zinc-900 hover:text-red-600",
                          )}
                        >
                          {link.name}
                        </Link>
                        <button
                          type="button"
                          onClick={onToggleServices}
                          className="rounded-md p-2 text-zinc-500 transition-colors hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                          aria-label="Abrir submenu de serviços no menu mobile"
                          aria-expanded={mobileServicesOpen}
                          aria-controls={mobileServicesMenuId}
                        >
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 transition-transform duration-300",
                              mobileServicesOpen && "rotate-180",
                            )}
                          />
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
                                  onClick={onClose}
                                  className={cn(
                                    "block rounded-md py-1 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                                    locationPathname === sublink.path
                                      ? "text-red-600 font-semibold"
                                      : "text-zinc-600 hover:text-red-600",
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
                      onClick={onClose}
                      className={cn(
                        "block rounded-md py-1 text-xl font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                        locationPathname === link.path
                          ? "text-red-600"
                          : "text-zinc-900 hover:text-red-600",
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-8 mt-auto">
              <HeaderCTA mobile onClick={onClose} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
