import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { Section, uiTokens } from "../../shared/ui";
import { cn } from "../../utils/cn";

interface LegalDocumentLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export function LegalDocumentLayout({ title, lastUpdated, children }: LegalDocumentLayoutProps) {
  return (
    <Section className="border-b border-zinc-200 bg-white lp-surface-tech-light">
      <div className={uiTokens.container}>
        <nav className="mb-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold" aria-label="Navegação da página">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-zinc-700 underline-offset-4 hover:text-red-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            ← Voltar à página inicial
          </Link>
          <span className="hidden text-zinc-300 sm:inline" aria-hidden>
            |
          </span>
          <Link
            to="/institucional"
            className="text-zinc-700 underline-offset-4 hover:text-red-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Institucional
          </Link>
        </nav>

        <article
          className={cn(
            "mx-auto max-w-3xl rounded-2xl border border-zinc-200 bg-white/90 px-6 py-10 shadow-sm lp-grid-faint sm:px-10 sm:py-12 md:px-12",
          )}
        >
          <header className="border-b border-zinc-200 pb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-red-600">Documento institucional</p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-zinc-900 md:text-4xl">{title}</h1>
            <p className="mt-4 text-sm text-zinc-500">Última atualização: {lastUpdated}</p>
          </header>

          <div
            className={cn(
              "legal-prose mt-10 space-y-10 text-base leading-relaxed text-zinc-800",
              "[&_h2]:scroll-mt-24 [&_h2]:border-b [&_h2]:border-zinc-100 [&_h2]:pb-2 [&_h2]:text-xl [&_h2]:font-black [&_h2]:tracking-tight [&_h2]:text-zinc-900 md:[&_h2]:text-2xl",
              "[&_p+p]:mt-4",
            )}
          >
            {children}
          </div>

          <footer className="mt-12 border-t border-zinc-200 pt-8">
            <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">Documentos relacionados</p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              <Link
                to="/politica-de-privacidade"
                className="text-zinc-800 underline-offset-4 hover:text-red-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/termos-de-uso"
                className="text-zinc-800 underline-offset-4 hover:text-red-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Termos de Uso
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </Section>
  );
}
