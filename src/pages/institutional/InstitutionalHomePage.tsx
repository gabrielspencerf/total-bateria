import { Link } from "react-router-dom";
import { runtimeConfig } from "../../../config/runtime";
import { selectedLandingConfig } from "../../content/landing";
import { useSEO } from "../../hooks/useSEO";
import { BRAND_IDENTITY } from "../../shared/brand";
import { Section } from "../../shared/ui";
import { cn } from "../../utils/cn";

const primaryLinkClass =
  "inline-flex h-12 items-center justify-center rounded-xl bg-red-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const outlineLinkClass =
  "inline-flex h-12 items-center justify-center rounded-xl border border-zinc-300 bg-transparent px-6 text-sm font-semibold text-zinc-900 transition-colors hover:border-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

export function InstitutionalHomePage() {
  useSEO({
    title: `Institucional | ${runtimeConfig.companyName}`,
    description:
      "Base institucional da Total Bateria com direcionamento para páginas comerciais e atendimento técnico B2B.",
    path: "/institucional",
  });

  return (
    <Section className="border-b border-zinc-200 bg-white lp-surface-tech-light">
      <div className="mx-auto max-w-4xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-red-600">Institucional</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-zinc-900 md:text-4xl">{BRAND_IDENTITY.businessTagline}</h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-700">
          Esta rota preserva o espaço institucional e mantém compatibilidade com o ecossistema existente enquanto as landing pages evoluem em
          arquitetura content-driven.
        </p>

        <nav className="mt-8 flex flex-col gap-3 border-t border-zinc-200 pt-8 sm:flex-row sm:flex-wrap sm:items-center" aria-label="Ações institucionais">
          <Link to={selectedLandingConfig.seo.canonicalPath} className={cn(primaryLinkClass, "w-full sm:w-auto")}>
            Ir para landing principal
          </Link>
          <Link to="/politica-de-privacidade" className={cn(outlineLinkClass, "w-full sm:w-auto")}>
            Política de Privacidade
          </Link>
          <Link to="/termos-de-uso" className={cn(outlineLinkClass, "w-full sm:w-auto")}>
            Termos de Uso
          </Link>
        </nav>
      </div>
    </Section>
  );
}
