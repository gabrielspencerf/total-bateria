import { Link } from "react-router-dom";
import { Button } from "./Button";
import { cn } from "../../utils/cn";
import { motion } from "motion/react";
import { ChevronRight, CheckCircle2, Building2, Truck } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  badges?: string[];
  backgroundImage?: string;
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink = "/contato",
  badges,
  backgroundImage = "/assets/hero-industrial.svg",
  className
}: HeroSectionProps) {
  return (
    <section className={cn("relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-zinc-950", className)}>
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={backgroundImage}
          alt="Área de operação industrial"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-900/60" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl"
          >
            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-2.5 mb-8">
                {badges.map((badge, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-zinc-100 text-xs sm:text-sm font-semibold backdrop-blur-md">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mr-2" />
                    {badge}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              {title}
            </h1>

            <p className="text-lg md:text-xl text-zinc-200 mb-10 max-w-2xl leading-relaxed">
              {subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-widest text-zinc-300 mb-1">Experiência</p>
                <p className="text-xl font-bold text-white">19+ anos</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-widest text-zinc-300 mb-1">Atuação</p>
                <p className="text-xl font-bold text-white">SP, MG e RJ</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-widest text-zinc-300 mb-1">Operação</p>
                <p className="text-xl font-bold text-white">Frota própria</p>
              </div>
            </div>

            {ctaText && (
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={ctaLink}>
                  <Button size="lg" className="w-full sm:w-auto group shadow-xl shadow-red-600/20">
                    {ctaText}
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/servicos">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto group border-white/30 text-white hover:bg-white hover:text-zinc-900">
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
              <video
                className="h-[360px] w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/assets/media/posters/reels/institucional-ambiente-loop-01.jpg"
              >
                <source src="/assets/media/videos/reels/institucional-ambiente-loop-01.mp4" type="video/mp4" />
              </video>
              <div className="grid grid-cols-2 gap-3 p-5">
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <Building2 className="w-5 h-5 text-red-400 mb-2" />
                  <p className="text-xs text-zinc-300 uppercase tracking-widest mb-1">Sede própria</p>
                  <p className="text-sm text-white font-semibold">Estrutura industrial dedicada</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <Truck className="w-5 h-5 text-red-400 mb-2" />
                  <p className="text-xs text-zinc-300 uppercase tracking-widest mb-1">Logística</p>
                  <p className="text-sm text-white font-semibold">Coleta e entrega programada</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
