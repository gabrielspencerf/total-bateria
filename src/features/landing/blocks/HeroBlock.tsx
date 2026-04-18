import { CheckCircle2 } from "lucide-react";
import type { LandingCallToAction, LandingHeroConfig } from "../types";
import { Button, uiTokens } from "../../../shared/ui";
import { cn } from "../../../utils/cn";

interface HeroBlockProps {
  data: LandingHeroConfig;
  primaryCta: LandingCallToAction;
  secondaryCta?: LandingCallToAction;
}

export function HeroBlock({ data, primaryCta, secondaryCta }: HeroBlockProps) {
  const visual = data.visual;
  const isVideo = visual.format === "video";

  return (
    <section
      id="hero"
      className="relative isolate min-h-[min(100dvh,900px)] overflow-hidden bg-zinc-950 text-white"
      aria-label={isVideo ? visual.alt : undefined}
    >
      <div className="absolute inset-0 z-0">
        {visual.format === "image" ? (
          <img
            src={visual.src}
            alt={visual.alt}
            className="h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        ) : (
          <>
            <img
              src={visual.poster}
              alt=""
              className="h-full w-full object-cover object-center"
              decoding="async"
              fetchPriority="high"
            />
            <video
              className={cn(
                "absolute inset-0 h-full w-full object-cover object-center",
                "hidden md:block motion-reduce:md:hidden",
              )}
              poster={visual.poster}
              muted
              playsInline
              loop
              preload="metadata"
              autoPlay
              aria-hidden
            >
              <source src={visual.webmSrc} type="video/webm" />
              <source src={visual.mp4Src} type="video/mp4" />
            </video>
          </>
        )}
      </div>

      {/* Leitura: vinheta + gradiente vertical; luz lateral no desktop */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(100%_70%_at_50%_0%,rgb(9_9_11/0.2),rgb(9_9_11/0.88)_62%,rgb(9_9_11/0.96))]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-zinc-950/80 via-zinc-950/72 to-zinc-950"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[3] hidden bg-gradient-to-r from-zinc-950 via-zinc-950/65 to-transparent md:block"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 z-[4] opacity-[0.055] lp-grid-faint-dark motion-reduce:opacity-0" aria-hidden />

      <div
        className={cn(
          uiTokens.container,
          "relative z-10 flex min-h-[min(100dvh,900px)] flex-col justify-end gap-12 pb-14 pt-[calc(5.5rem+env(safe-area-inset-top))] sm:pt-[calc(6rem+env(safe-area-inset-top))] md:flex-row md:items-end md:justify-between md:gap-16 md:pb-20 lg:gap-20 xl:gap-24",
        )}
      >
        <div className="min-w-0 max-w-2xl md:max-w-[min(36rem,52%)] lg:max-w-[min(40rem,54%)] xl:pb-2">
          <p className="mb-4 inline-flex max-w-full items-center gap-2 rounded-md border border-red-500/35 bg-red-600/10 px-2.5 py-1 text-[10px] font-bold uppercase leading-snug tracking-[0.12em] text-red-200 sm:px-3 sm:text-[11px]">
            <span className="max-w-[min(100%,70ch)] truncate sm:whitespace-normal sm:overflow-visible">{data.badge}</span>
          </p>
          <h1 className="text-balance text-[1.85rem] font-black leading-[1.06] tracking-tight text-white sm:text-4xl md:text-[2.65rem] md:leading-[1.05] lg:text-5xl lg:leading-[1.02]">
            {data.title}
            <span className="mt-2 block max-w-[22ch] text-balance text-red-400 sm:max-w-none">{data.highlight}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-200 sm:text-lg">{data.description}</p>

          <ul className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5">
            {data.quickPoints.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-lg border border-white/10 bg-zinc-950/35 px-3 py-2 text-zinc-100 backdrop-blur-[2px] motion-reduce:backdrop-blur-none sm:items-center sm:py-2.5"
              >
                <CheckCircle2 className="mt-0.5 size-[1.125rem] shrink-0 text-red-500 sm:mt-0 sm:size-5" aria-hidden />
                <span className="text-[0.8125rem] font-medium leading-snug sm:text-[0.9375rem]">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={primaryCta.href} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant={primaryCta.variant} className="w-full shadow-lg shadow-red-950/30 sm:w-auto">
                {primaryCta.label}
              </Button>
            </a>
            {secondaryCta && (
              <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant={secondaryCta.variant} className="w-full sm:w-auto">
                  {secondaryCta.label}
                </Button>
              </a>
            )}
          </div>
        </div>

        <aside
          className="hidden w-full max-w-sm shrink-0 border-t border-white/10 pt-6 text-sm text-zinc-300 md:block md:w-[min(100%,20rem)] md:border-l md:border-t-0 md:pl-8 md:pt-0 lg:w-[min(100%,22rem)] xl:max-w-md"
          aria-label="Resumo operacional do hero"
        >
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-red-400">Checklist rápido</p>
          <ol className="mt-4 space-y-3 border-l border-white/15 pl-4">
            {data.quickPoints.map((item, i) => (
              <li key={item} className="relative pl-1">
                <span className="absolute -left-[1.15rem] top-1.5 size-1.5 rounded-full bg-red-500" aria-hidden />
                <span className="font-mono text-[11px] font-bold text-zinc-500">{String(i + 1).padStart(2, "0")}</span>
                <span className="mt-0.5 block text-[0.8125rem] font-medium leading-snug text-zinc-100">{item}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
