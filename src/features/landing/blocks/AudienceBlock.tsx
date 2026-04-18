import { Building2 } from "lucide-react";
import type { LandingAudienceConfig } from "../types";
import { Reveal, Section } from "../../../shared/ui";
import { SectionHeader } from "./SectionHeader";

interface AudienceBlockProps {
  data: LandingAudienceConfig;
}

export function AudienceBlock({ data }: AudienceBlockProps) {
  const groups =
    data.groups && data.groups.length > 0
      ? data.groups
      : [{ label: "Segmentos", items: data.items }];

  return (
    <Section id="audience" className="border-b border-zinc-200/80 bg-zinc-50 lp-surface-tech-light">
      <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} />

      <Reveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {groups.map((group) => (
            <section
              key={group.label}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm lp-grid-faint sm:p-6"
              aria-label={group.label}
            >
              <div className="mb-4 flex items-center gap-2 border-b border-zinc-100 pb-3">
                <span className="flex size-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-950 text-white shadow-inner">
                  <Building2 className="size-4 text-red-500" aria-hidden />
                </span>
                <h3 className="text-sm font-black uppercase tracking-wide text-zinc-900">{group.label}</h3>
              </div>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 rounded-lg border border-zinc-100 bg-zinc-50/80 px-3 py-2.5 text-sm font-semibold leading-snug text-zinc-900"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-red-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
