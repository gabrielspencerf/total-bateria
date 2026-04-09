import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { cn } from "../../utils/cn";
import { motion } from "motion/react";
import { ChevronRight, CheckCircle2, Building2, Truck } from "lucide-react";
import { heroBackgroundVideos } from "../../data/mediaRuntime";

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
  className
}: HeroSectionProps) {
  const [activeBackgroundVideo, setActiveBackgroundVideo] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveBackgroundVideo((current) => (current + 1) % heroBackgroundVideos.length);
    }, 7000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className={cn("relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-zinc-950", className)}>
      <div className="absolute inset-0 z-0">
        {heroBackgroundVideos.map((videoSrc, index) => (
          <video
            key={videoSrc}
            className={cn(
              "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1200",
              index === activeBackgroundVideo ? "opacity-45" : "opacity-0",
            )}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            style={{ aspectRatio: "auto" }}
            aria-hidden="true"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ))}
        <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,_rgba(220,38,38,0.22),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(39,39,42,0.8),_rgba(9,9,11,1))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-900/60" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            {badges && badges.length > 0 && (
              <div className="mb-7">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-zinc-100 text-xs sm:text-sm font-semibold backdrop-blur-md">
                  <CheckCircle2 className="w-4 h-4 text-red-500 mr-2" />
                  {badges[0]}
                </span>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-zinc-200 mb-10 max-w-2xl leading-relaxed">
              {subtitle}
            </p>

            {ctaText && (
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={ctaLink}>
                  <Button size="lg" className="w-full sm:w-auto group shadow-xl shadow-red-600/20">
                    {ctaText}
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/servicos">
                  <Button
                    size="lg"
                    variant="glass"
                    className="w-full sm:w-auto group border-white/30 text-white hover:bg-white/25"
                  >
                    Conhecer Soluções
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="rounded-3xl border border-white/15 bg-zinc-900/75 backdrop-blur-md overflow-hidden shadow-2xl">
              <div className="p-7 space-y-5">
                <p className="text-xs uppercase tracking-widest text-zinc-400">Resumo operacional</p>
                <h2 className="text-xl font-bold text-white leading-tight">
                  Atendimento técnico com foco em disponibilidade e previsibilidade.
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-zinc-200">
                    <Building2 className="w-4 h-4 text-red-400 mr-2" />
                    Estrutura própria e processo padronizado.
                  </div>
                  <div className="flex items-center text-sm text-zinc-200">
                    <Truck className="w-4 h-4 text-red-400 mr-2" />
                    Logística planejada para operações críticas.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
