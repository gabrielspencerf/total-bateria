import { ArrowRight, ImageIcon } from "lucide-react";
import type { LandingPostServiceWidget } from "../types";
import { LandingMediaImage, Reveal, Section } from "../../../shared/ui";

interface PostServiceWidgetsBlockProps {
  widgets: LandingPostServiceWidget[];
}

export function PostServiceWidgetsBlock({ widgets }: PostServiceWidgetsBlockProps) {
  if (!widgets.length) return null;

  return (
    <Section aria-label="Destaques operacionais" className="border-b border-zinc-200 bg-zinc-50 py-8">
      <Reveal>
        <div className="flex flex-col gap-4">
          {widgets.map((w, i) => {
            const key = `${w.type}-${i}`;
            if (w.type === "techStrip") {
              return (
                <div
                  key={key}
                  className="flex flex-wrap items-center gap-x-3 gap-y-2 border-l-4 border-red-600 bg-white px-4 py-3 text-sm font-semibold text-zinc-800 shadow-sm sm:text-base"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-red-600">Operação</span>
                  <span className="min-w-0">{w.text}</span>
                </div>
              );
            }
            if (w.type === "statBand") {
              return (
                <div
                  key={key}
                  className="rounded-xl border border-zinc-200 bg-white px-4 py-4 shadow-sm sm:px-6 sm:py-5"
                >
                  {w.eyebrow ? (
                    <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-red-600">{w.eyebrow}</p>
                  ) : null}
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                    {w.items.map((it) => (
                      <li key={it.label} className="border-t border-zinc-100 pt-3 first:border-t-0 first:pt-0 sm:border-t-0 sm:pt-0">
                        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{it.label}</p>
                        <p className="mt-1 text-sm font-bold text-zinc-900 sm:text-base">{it.value}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            if (w.type === "processMini") {
              return (
                <div key={key} className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
                  {w.title ? <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-zinc-900">{w.title}</h3> : null}
                  <ol className="space-y-2">
                    {w.steps.map((step, idx) => (
                      <li key={step} className="flex gap-3 text-sm text-zinc-700">
                        <span className="font-mono text-xs font-bold text-red-600">{String(idx + 1).padStart(2, "0")}</span>
                        <span className="leading-snug">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            }
            /* imageInsight */
            return (
              <figure
                key={key}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm sm:grid sm:grid-cols-[minmax(0,1fr)_220px] sm:items-stretch"
              >
                <div className="relative min-h-[200px] bg-zinc-100 sm:min-h-[220px]">
                  <LandingMediaImage
                    src={w.src}
                    alt={w.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute left-3 top-3 rounded bg-zinc-950/85 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    <span className="inline-flex items-center gap-1">
                      <ImageIcon className="size-3.5" aria-hidden />
                      Contexto
                    </span>
                  </div>
                </div>
                <figcaption className="flex flex-col justify-center border-t border-zinc-200 p-4 sm:border-l sm:border-t-0 sm:p-5">
                  <p className="text-sm font-semibold leading-snug text-zinc-900">{w.caption}</p>
                  <ArrowRight className="mt-3 size-5 text-red-600" aria-hidden />
                </figcaption>
              </figure>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
