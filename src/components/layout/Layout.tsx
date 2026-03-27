import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "../ui/WhatsAppButton";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-zinc-900 bg-white">
      <Header />
      <main className="flex-grow pt-[72px]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton number="11933312768" floating />
    </div>
  );
}
