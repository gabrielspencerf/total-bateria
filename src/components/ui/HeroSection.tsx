import { Link } from "react-router-dom";
import { Button } from "./Button";
import { cn } from "../../utils/cn";
import { motion } from "motion/react";
import { ChevronRight, Zap, BatteryCharging, ShieldCheck } from "lucide-react";

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
  backgroundImage = "https://images.unsplash.com/photo-1586528116311-ad8c738759be?q=80&w=2070&auto=format&fit=crop",
  className
}: HeroSectionProps) {
  return (
    <section className={cn("relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-zinc-950", className)}>
      {/* Background Image with Blur/Glassmorphism */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-900/60" />
        <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-[2px]" />
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
              <div className="flex flex-wrap gap-3 mb-8">
                {badges.map((badge, index) => (
                  <span key={index} className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-zinc-100 text-sm font-semibold backdrop-blur-md shadow-lg">
                    <Zap className="w-4 h-4 text-red-500 mr-2" />
                    {badge}
                  </span>
                ))}
              </div>
            )}
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
              {title.split(' ').map((word, i) => {
                const lower = word.toLowerCase();
                if (lower.includes('energia') || lower.includes('movimento') || lower.includes('baterias') || lower.includes('empilhadeiras') || lower.includes('parar')) {
                  return <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 drop-shadow-sm">{word} </span>;
                }
                return <span key={i}>{word} </span>;
              })}
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-200 mb-10 max-w-2xl leading-relaxed font-light drop-shadow-md">
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
                  <Button size="lg" variant="glass" className="w-full sm:w-auto group">
                    Conhecer Soluções
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform opacity-70" />
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>

          {/* 3D / Floating Element Illusion */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex relative h-[500px] w-full items-center justify-center perspective-1000"
          >
            <motion.div 
              animate={{ 
                y: [-15, 15, -15],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-tr from-zinc-800/80 to-white/10 border border-white/20 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden p-8 flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-600/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10 flex justify-between items-start">
                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10 shadow-inner">
                  <BatteryCharging className="w-10 h-10 text-red-500" />
                </div>
                <span className="px-4 py-1.5 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-bold tracking-wider uppercase flex items-center shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                  System Active
                </span>
              </div>

              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium text-zinc-300">
                    <span>Performance</span>
                    <span className="text-red-400">98%</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-red-600 to-red-400"
                      initial={{ width: "0%" }}
                      animate={{ width: "98%" }}
                      transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Tecnologia Tracionária</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Monitoramento contínuo de células, otimização de ciclo de vida e máxima eficiência para sua operação logística.
                  </p>
                </div>
                
                <div className="flex items-center gap-4 pt-2">
                  <div className="flex items-center text-xs font-medium text-zinc-200 bg-white/10 px-3 py-2 rounded-lg border border-white/20">
                    <ShieldCheck className="w-4 h-4 text-red-500 mr-2" />
                    Certificado
                  </div>
                  <div className="flex items-center text-xs font-medium text-zinc-200 bg-white/10 px-3 py-2 rounded-lg border border-white/20">
                    <Zap className="w-4 h-4 text-yellow-500 mr-2" />
                    Alta Carga
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
