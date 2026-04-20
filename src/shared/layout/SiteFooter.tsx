import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { runtimeConfig } from "../../../config/runtime";
import { BRAND_ASSETS, BRAND_CONTACT, BRAND_IDENTITY, buildWhatsAppLink } from "../brand";
import { LandingMediaImage } from "../ui";
import { uiTokens } from "../ui";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const whatsappLink = buildWhatsAppLink();

  return (
    <footer className="border-t border-zinc-300/80 bg-zinc-100">
      <div className={`${uiTokens.container} py-10 sm:py-12`}>
        <div className="grid gap-10 border-b border-zinc-200/90 pb-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start lg:gap-14 lg:pb-12">
          <div className="max-w-xl lg:max-w-none">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <LandingMediaImage
                src={BRAND_ASSETS.logos.black}
                fallbackSrc={BRAND_ASSETS.seoDefault}
                alt={BRAND_IDENTITY.companyName}
                className="h-9 w-auto sm:h-10"
              />
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">{BRAND_IDENTITY.companyName}</span>
            </div>
            <p className="text-base font-medium leading-relaxed text-zinc-800">{BRAND_IDENTITY.businessTagline}</p>
            <p className="mt-3 text-sm text-zinc-600">{BRAND_IDENTITY.serviceFocus}</p>
            {runtimeConfig.regionLabel ? <p className="mt-2 text-sm text-zinc-500">{runtimeConfig.regionLabel}</p> : null}
            <p className="mt-4 text-sm text-zinc-500">
              Atendimento comercial: <span className="font-semibold text-zinc-800">{BRAND_CONTACT.phoneDisplay}</span>
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:border-l lg:border-zinc-200 lg:pl-10">
            <nav className="flex flex-col gap-3 lg:items-end" aria-label="Atalhos de rodapé">
              <p className="text-xs font-bold uppercase tracking-wide text-zinc-500 lg:text-right">Atalhos</p>
              <Link
                to="/#cta-final"
                className="text-sm font-semibold text-zinc-800 underline-offset-4 hover:text-red-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 lg:text-right"
              >
                Fechamento comercial
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-800 underline-offset-4 hover:text-green-800 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 lg:justify-end lg:text-right"
              >
                <MessageCircle className="size-4 shrink-0" aria-hidden />
                WhatsApp comercial
              </a>
            </nav>

            <nav className="flex flex-col gap-3 border-t border-zinc-200/90 pt-6 lg:items-end lg:border-t-0 lg:pt-0" aria-label="Informação legal">
              <p className="text-xs font-bold uppercase tracking-wide text-zinc-500 lg:text-right">Informação legal</p>
              <Link
                to="/politica-de-privacidade"
                className="text-sm font-semibold text-zinc-800 underline-offset-4 hover:text-red-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 lg:text-right"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/termos-de-uso"
                className="text-sm font-semibold text-zinc-800 underline-offset-4 hover:text-red-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 lg:text-right"
              >
                Termos de Uso
              </Link>
              <Link
                to="/institucional"
                className="text-sm font-semibold text-zinc-800 underline-offset-4 hover:text-red-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 lg:text-right"
              >
                Página institucional
              </Link>
            </nav>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-zinc-500 sm:text-left">
          &copy; {currentYear} {BRAND_IDENTITY.companyName}. Atendimento B2B.
        </div>
      </div>
    </footer>
  );
}
