import type { LandingFinalCtaConfig } from "../types";
import { Button, Section } from "../../../shared/ui";
import { cn } from "../../../utils/cn";

interface FinalCtaBlockProps {
  data: LandingFinalCtaConfig;
}

export function FinalCtaBlock({ data }: FinalCtaBlockProps) {
  const layout = data.layout ?? "focal";

  return (
    <Section
      id="cta-final"
      className="relative border-t border-zinc-800/90 bg-zinc-950 text-white lp-surface-tech-dark"
      spacing="default"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] lp-grid-faint-dark motion-reduce:opacity-0" aria-hidden />

      <article
        className={cn(
          "relative mx-auto max-w-5xl shadow-black/40",
          layout === "command"
            ? "border-l-4 border-red-600 bg-zinc-900/50 py-10 pl-7 pr-7 md:py-12 md:pl-10 md:pr-12"
            : "rounded-2xl border border-zinc-800/90 bg-zinc-900/60 p-8 md:p-12",
        )}
      >
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:inset-x-10" aria-hidden />
        <h2
          className={cn(
            "font-black tracking-tight text-white",
            layout === "command" ? "text-2xl md:max-w-4xl md:text-3xl" : "text-3xl md:max-w-4xl md:text-4xl",
          )}
        >
          {data.title}
        </h2>
        <p className={cn("max-w-3xl text-zinc-300", layout === "command" ? "mt-3 text-base" : "mt-4 text-lg")}>
          {data.description}
        </p>
        <div className={cn("flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center", layout === "command" ? "mt-8" : "mt-10")}>
          <a href={data.primary.href} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant={data.primary.variant} size="lg" className="w-full sm:w-auto">
              {data.primary.label}
            </Button>
          </a>
          {data.betweenButtonsHint && data.secondary ? (
            <>
              <p className="w-full text-sm font-medium text-zinc-400 sm:w-auto sm:px-2">{data.betweenButtonsHint}</p>
              <a href={data.secondary.href} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant={data.secondary.variant} size="lg" className="w-full sm:w-auto">
                  {data.secondary.label}
                </Button>
              </a>
            </>
          ) : (
            data.secondary && (
              <a href={data.secondary.href} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant={data.secondary.variant} size="lg" className="w-full sm:w-auto">
                  {data.secondary.label}
                </Button>
              </a>
            )
          )}
        </div>
      </article>
    </Section>
  );
}
