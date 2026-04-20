import { Link } from "react-router-dom";
import { Button } from "./Button";
import { cn } from "../../utils/cn";
import { motion, useReducedMotion } from "motion/react";
import { ChevronRight, CheckCircle2, Building2, Truck } from "lucide-react";
import { heroBackgroundVideoPrimary, heroBackgroundVideoWebmPrimary } from "../../data/mediaRuntime";

const HERO_POSTER = "/assets/hero-industrial.svg";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  badges?: string[];
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink = "/contato",
  badges,
  className,
}: HeroSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className={cn(
        "relative flex min-h-[min(100dvh,900px)] items-center overflow-hidden bg-zinc-950 pb-16 pt-28 md:min-h-[min(92vh,880px)] md:pb-20 md:pt-24",
        className,
      )}
    >
      <div className="absolute inset-0 z-0" aria-hidden>
        <img
          src={HERO_POSTER}
          alt=""
          className="h-full w-full object-cover object-center opacity-40 md:opacity-35"
          decoding="async"
          fetchPriority="high"
        />
        <video
          className={cn(
            "absolute inset-0 h-full w-full object-cover object-center",
            "hidden md:block motion-reduce:hidden",
          )}
          poster={HERO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          {heroBackgroundVideoWebmPrimary ? (
            <source src={heroBackgroundVideoWebmPrimary} type="video/webm" />
          ) : null}
          <source src={heroBackgroundVideoPrimary} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-b from-zinc-950/95 via-zinc-950/80 to-zinc-950/95"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-zinc-950/40"
          aria-hidden
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            {badges && badges.length > 0 && (
              <div className="mb-6">
                <span className="inline-flex items-center rounded-full border border-red-600/40 bg-red-600/15 px-4 py-2 text-xs font-semibold text-red-100 sm:text-sm">
                  <CheckCircle2 className="mr-2 size-4 shrink-0 text-red-500" />
                  {badges[0]}
                </span>
              </div>
            )}

            <h1 className="mb-6 text-4xl font-black leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.15rem]">
              {title}
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-200 md:text-xl">{subtitle}</p>

            {ctaText && (
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to={ctaLink}
                  className="group inline-flex w-full rounded-xl focus-within:outline-none focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 focus-within:ring-offset-zinc-950 sm:w-auto"
                >
                  <Button size="lg" className="w-full sm:w-auto">
                    {ctaText}
                    <ChevronRight className="ml-2 size-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Button>
                </Link>
                <Link
                  to="/servicos"
                  className="group inline-flex w-full rounded-xl focus-within:outline-none focus-within:ring-2 focus-within:ring-white/60 focus-within:ring-offset-2 focus-within:ring-offset-zinc-950 sm:w-auto"
                >
                  <Button size="lg" variant="glass" className="w-full sm:w-auto">
                    Conhecer soluções
                    <ChevronRight className="ml-2 size-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl border border-zinc-800/90 bg-zinc-900/80 p-7 shadow-lg shadow-black/40">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">Resumo operacional</p>
              {/* Exceção tipográfica: cartão lateral do hero — não compete com H1; ver docs/design-system */}
              <h2 className="mt-3 text-xl font-bold leading-snug text-white">
                Atendimento técnico com foco em disponibilidade e previsibilidade.
              </h2>
              <div className="mt-5 space-y-3">
                <div className="flex items-center text-sm text-zinc-200">
                  <Building2 className="mr-2 size-4 shrink-0 text-red-500" />
                  Estrutura própria e processo padronizado.
                </div>
                <div className="flex items-center text-sm text-zinc-200">
                  <Truck className="mr-2 size-4 shrink-0 text-red-500" />
                  Logística planejada para operações críticas.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
