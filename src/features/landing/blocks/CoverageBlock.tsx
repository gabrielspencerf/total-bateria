import { MapPin } from "lucide-react";
import type { LandingCoverageConfig } from "../types";
import { Section } from "../../../shared/ui";
import { SectionHeader } from "./SectionHeader";

interface CoverageBlockProps {
  data: LandingCoverageConfig;
}

export function CoverageBlock({ data }: CoverageBlockProps) {
  return (
    <Section id="coverage" className="bg-zinc-50">
      <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((item) => (
          <article key={item} className="rounded-xl border border-zinc-200 bg-white p-5">
            <MapPin className="mb-3 size-6 text-red-600" />
            <p className="font-medium text-zinc-800">{item}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
