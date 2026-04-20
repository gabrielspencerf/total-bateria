import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-zinc-900">
      <SiteHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
