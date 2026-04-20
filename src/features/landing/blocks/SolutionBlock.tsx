import { Cog } from "lucide-react";
import type { LandingSolutionConfig } from "../types";
import { Reveal, Section } from "../../../shared/ui";
import { SectionHeader } from "./SectionHeader";
import { cn } from "../../../utils/cn";

interface SolutionBlockProps {
  data: LandingSolutionConfig;
}

export function SolutionBlock({ data }: SolutionBlockProps) {
  const architecture = data.architecture ?? "pillars";

  return (
    <Section
      id="solucao"
      className="relative border-t border-zinc-800/80 bg-zinc-950 text-white lp-surface-tech-dark"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] lp-grid-faint-dark motion-reduce:opacity-0" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent" aria-hidden />

      <div className="relative">
        <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} light />
        <Reveal>
          {architecture === "pillars" ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.items.map((item, i) => (
                <article
                  key={item}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/80 p-5 shadow-lg shadow-black/30 transition-[border-color,background-color] duration-200 ease-out motion-reduce:transition-none md:p-6"
                >
                  <span className="font-mono text-[10px] font-bold text-red-500/90">{String(i + 1).padStart(2, "0")}</span>
                  <Cog className="mt-3 size-6 text-red-500" aria-hidden />
                  <p className="mt-3 font-semibold leading-snug text-zinc-50">{item}</p>
                </article>
              ))}
            </div>
          ) : null}

          {architecture === "asymmetric" ? (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
              {data.items.map((item, index) => (
                <article
                  key={item}
                  className={cn(
                    "relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-gradient-to-br from-zinc-900/95 to-zinc-950 p-5 shadow-lg shadow-black/35 transition-[border-color,transform] duration-200 ease-out motion-reduce:transition-none md:p-6",
                    "motion-reduce:hover:translate-y-0",
                    index === 0 ? "lg:col-span-7 lg:min-h-[14rem] lg:p-8" : "lg:col-span-5",
                    index === 0 && "hover:border-zinc-600/90 motion-reduce:hover:border-zinc-800/90",
                  )}
                >
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-red-400">
                      {String(index + 1).padStart(2, "0")} — capacidade
                    </span>
                    <Cog className={`mt-3 text-red-500 ${index === 0 ? "size-8" : "size-6"}`} aria-hidden />
                    <p className={`mt-3 font-semibold leading-snug text-zinc-50 ${index === 0 ? "text-lg md:text-xl" : "text-base"}`}>
                      {item}
                    </p>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
                </article>
              ))}
            </div>
          ) : null}

          {architecture === "rail" ? (
            <div className={cn("grid gap-4 lg:items-stretch", data.railAside && "lg:grid-cols-[minmax(0,1fr)_280px]")}>
              <div className="space-y-3">
                {data.items.map((item, i) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-r-xl border-y border-r border-zinc-800/90 border-l-4 border-l-red-600 bg-zinc-900/70 py-3 pl-4 pr-4 text-sm font-semibold leading-snug text-zinc-100 sm:text-base md:py-4 md:pl-5"
                  >
                    <span className="font-mono text-xs font-bold text-red-500">{String(i + 1).padStart(2, "0")}</span>
                    <span className="min-w-0">{item}</span>
                  </div>
                ))}
              </div>
              {data.railAside ? (
                <aside className="hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 lg:flex lg:flex-col lg:justify-between">
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-red-400">Leitura</p>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{data.railAside}</p>
                  </div>
                </aside>
              ) : null}
            </div>
          ) : null}
        </Reveal>
      </div>
    </Section>
  );
}
