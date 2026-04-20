import { MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { BRAND_ASSETS, BRAND_IDENTITY, buildWhatsAppLink } from "../brand";
import { LandingMediaImage, uiTokens } from "../ui";
import { cn } from "../../utils/cn";

const headerPrimaryCtaClass =
  "inline-flex h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-red-600 px-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:px-4";

const headerOutlineCtaClass =
  "inline-flex h-10 shrink-0 items-center justify-center rounded-xl border border-zinc-300 bg-transparent px-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:border-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:px-3";

const heroPrimaryCtaClass =
  "inline-flex h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-xl bg-red-600 px-3 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:px-4";

const heroOutlineCtaClass =
  "inline-flex h-10 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:px-3";

export function SiteHeader() {
  const { pathname } = useLocation();
  const whatsappLink = buildWhatsAppLink();
  const heroLanding = pathname === "/";
  const contactCtaHref = heroLanding ? "#cta-final" : "/#cta-final";

  return (
    <header
      className={cn(
        "z-50 border-b",
        heroLanding
          ? "fixed inset-x-0 top-0 border-white/10 bg-zinc-950/55 text-white backdrop-blur-md motion-reduce:backdrop-blur-none"
          : "relative border-zinc-200 bg-white",
      )}
    >
      <div className={uiTokens.container}>
        <div className="flex h-14 items-center justify-between gap-3 sm:h-16 sm:gap-4">
          <div className="flex min-w-0 flex-1 items-center gap-4 sm:gap-6">
            <a href="/" className="inline-flex shrink-0 items-center" aria-label={BRAND_IDENTITY.companyName}>
              <LandingMediaImage
                src={heroLanding ? BRAND_ASSETS.logos.white : BRAND_ASSETS.logos.color}
                fallbackSrc={BRAND_ASSETS.seoDefault}
                alt=""
                className="h-9 w-auto sm:h-10"
              />
            </a>

            {!heroLanding ? (
              <nav
                className="hidden min-w-0 items-center gap-4 text-sm font-semibold text-zinc-700 md:flex"
                aria-label="Documentos legais"
              >
                <Link
                  to="/politica-de-privacidade"
                  className="whitespace-nowrap underline-offset-4 hover:text-red-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Privacidade
                </Link>
                <Link
                  to="/termos-de-uso"
                  className="whitespace-nowrap underline-offset-4 hover:text-red-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Termos
                </Link>
              </nav>
            ) : null}
          </div>

          <div className="flex shrink-0 flex-wrap items-center justify-end gap-2 sm:gap-3">
            <a
              href={contactCtaHref}
              className={heroLanding ? heroPrimaryCtaClass : headerPrimaryCtaClass}
            >
              <span className="sm:hidden">Contato</span>
              <span className="hidden sm:inline">Solicitar contato</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(heroLanding ? heroOutlineCtaClass : headerOutlineCtaClass, "gap-1.5")}
              aria-label="Abrir conversa no WhatsApp com a Total Bateria"
            >
              <MessageCircle className="size-4 shrink-0" aria-hidden />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
