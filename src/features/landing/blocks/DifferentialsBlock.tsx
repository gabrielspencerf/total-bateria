import { Cpu, Factory, Gauge, HardHat, ShieldCheck, Truck, Wrench, Zap } from "lucide-react";
import type { LandingDifferentialsConfig } from "../types";
import { Reveal, Section } from "../../../shared/ui";
import { SectionHeader } from "./SectionHeader";
import { cn } from "../../../utils/cn";

interface DifferentialsBlockProps {
  data: LandingDifferentialsConfig;
}

const INDUSTRIAL_ICONS = [Gauge, Cpu, HardHat, Factory, Truck, Wrench, ShieldCheck, Zap] as const;

export function DifferentialsBlock({ data }: DifferentialsBlockProps) {
  const mode = data.architecture === "rails" ? "rails" : "iconCards";
  const featuredCount = data.featuredCount ?? 0;
  const leadFullWidth = featuredCount > 0 && data.items.length > 4;

  return (
    <Section id="diferenciais" className="relative border-t border-zinc-800/80 bg-zinc-950 text-white lp-surface-tech-dark">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] lp-grid-faint-dark motion-reduce:opacity-0" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-600/35 to-transparent" aria-hidden />

      <div className="relative">
        <Reveal>
          <SectionHeader title={data.title} light />

          {mode === "rails" ? (
            <ul className="max-w-3xl space-y-0 divide-y divide-zinc-800 border-y border-zinc-800">
              {data.items.map((item) => (
                <li key={item} className="flex gap-3 py-3 text-sm font-semibold leading-snug text-zinc-100 sm:text-base">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-red-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
              {data.items.map((item, i) => {
                const Icon = INDUSTRIAL_ICONS[i % INDUSTRIAL_ICONS.length]!;
                const featured = featuredCount > i;
                const isLead = leadFullWidth && i === 0;
                return (
                  <article
                    key={item}
                    className={cn(
                      "group relative overflow-hidden rounded-xl border border-zinc-800/90 bg-zinc-900/85 p-4 shadow-md shadow-black/25 sm:p-5",
                      "transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out",
                      "motion-reduce:transform-none motion-reduce:transition-none",
                      "hover:-translate-y-0.5 hover:border-zinc-600 hover:shadow-lg hover:shadow-black/40",
                      "motion-reduce:hover:translate-y-0",
                      featured && "border-red-900/45 ring-1 ring-red-600/30",
                      isLead && "col-span-2 min-h-[8.5rem] lg:col-span-3 lg:min-h-0",
                      !isLead && "col-span-1",
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-950 text-red-500 shadow-inner transition-colors group-hover:border-zinc-600 sm:size-11">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <div className="min-w-0 flex-1">
                        {featured ? (
                          <span className="mb-1.5 inline-block font-mono text-[0.65rem] font-bold uppercase tracking-widest text-red-400">
                            Pilar
                          </span>
                        ) : null}
                        <p className="text-[0.8125rem] font-semibold leading-snug text-zinc-100 sm:text-sm md:text-[0.9375rem]">{item}</p>
                      </div>
                    </div>
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100 motion-reduce:group-hover:opacity-0"
                      aria-hidden
                    />
                  </article>
                );
              })}
            </div>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
