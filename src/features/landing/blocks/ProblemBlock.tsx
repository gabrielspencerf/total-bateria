import { AlertTriangle } from "lucide-react";
import type { LandingProblemConfig } from "../types";
import { Reveal, Section } from "../../../shared/ui";
import { SectionHeader } from "./SectionHeader";

interface ProblemBlockProps {
  data: LandingProblemConfig;
}

function SupportPanelAside({ panel }: { panel: NonNullable<LandingProblemConfig["supportPanel"]> }) {
  return (
    <aside className="flex flex-col justify-between gap-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm lp-grid-faint lg:min-h-[min(100%,22rem)] xl:p-7">
      <div>
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">{panel.title}</p>
        <ul className="mt-5 space-y-4">
          {panel.items.map((row) => (
            <li key={row.label} className="border-b border-zinc-100 pb-4 last:border-b-0 last:pb-0">
              <p className="text-[11px] font-bold uppercase tracking-wide text-zinc-500">{row.label}</p>
              <p className="mt-1.5 text-sm font-semibold leading-snug text-zinc-900 sm:text-base">{row.value}</p>
            </li>
          ))}
        </ul>
      </div>
      {panel.footnote ? <p className="text-[11px] leading-relaxed text-zinc-500">{panel.footnote}</p> : null}
    </aside>
  );
}

export function ProblemBlock({ data }: ProblemBlockProps) {
  const architecture = data.architecture ?? "vertical";
  const panel = data.supportPanel;
  const showSplit = Boolean(panel && architecture === "vertical");

  return (
    <Section id="problema" className="border-b border-zinc-200 lp-surface-tech-light">
      <Reveal>
        <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} />

        {data.impactLine ? (
          <p className="mb-8 max-w-4xl border-l-4 border-red-600 bg-white/80 px-4 py-3 text-sm font-bold leading-snug text-zinc-900 shadow-sm sm:text-base">
            {data.impactLine}
          </p>
        ) : null}

        {panel && !showSplit ? <div className="mb-10 max-w-4xl"><SupportPanelAside panel={panel} /></div> : null}

        {architecture === "vertical" ? (
          showSplit && panel ? (
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(280px,340px)]">
              <div className="max-w-none space-y-5 border-l-4 border-zinc-900 pl-5 lg:max-w-[48rem]">
                {data.items.map((item, i) => (
                  <div key={item} className="flex gap-4">
                    <span className="w-8 shrink-0 pt-0.5 text-right font-mono text-sm font-black tabular-nums text-red-600 sm:text-base">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-base font-semibold leading-snug text-zinc-900 sm:text-lg">{item}</p>
                  </div>
                ))}
              </div>
              <SupportPanelAside panel={panel} />
            </div>
          ) : (
            <div className="max-w-3xl space-y-5 border-l-4 border-zinc-900 pl-5">
              {data.items.map((item, i) => (
                <div key={item} className="flex gap-4">
                  <span className="w-8 shrink-0 pt-0.5 text-right font-mono text-sm font-black tabular-nums text-red-600 sm:text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base font-semibold leading-snug text-zinc-900 sm:text-lg">{item}</p>
                </div>
              ))}
            </div>
          )
        ) : null}

        {architecture === "strip" ? (
          <div className="overflow-hidden rounded-none border border-zinc-800 bg-zinc-950 text-zinc-100 sm:rounded-xl">
            <div className="grid divide-y divide-zinc-800 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
              {data.items.map((item) => (
                <div key={item} className="flex min-h-[4.25rem] items-start gap-3 px-4 py-4 sm:min-h-[5rem] sm:px-5 sm:py-5">
                  <AlertTriangle className="mt-0.5 size-5 shrink-0 text-red-500" aria-hidden />
                  <p className="text-sm font-semibold leading-snug tracking-tight text-zinc-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {architecture === "matrix" ? (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {data.items.map((item) => (
              <div
                key={item}
                className="border border-zinc-300 bg-white px-3 py-3 text-xs font-semibold uppercase tracking-wide text-zinc-800 sm:text-[0.8125rem]"
              >
                {item}
              </div>
            ))}
          </div>
        ) : null}

        {architecture === "timeline" ? (
          <div className="relative max-w-3xl border-l border-red-600/70 pl-6">
            <div className="space-y-6">
              {data.items.map((item, index) => (
                <div key={item} className="relative">
                  <span
                    className="absolute -left-[1.4rem] top-1.5 size-2.5 rounded-full border-2 border-red-600 bg-white"
                    aria-hidden
                  />
                  <p className="text-sm font-semibold text-zinc-900 sm:text-base">
                    <span className="mr-2 font-mono text-xs text-red-600">{String(index + 1).padStart(2, "0")}</span>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </Reveal>
    </Section>
  );
}
