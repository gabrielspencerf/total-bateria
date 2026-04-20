import type { LandingProcessConfig } from "../types";
import { Section } from "../../../shared/ui";
import { SectionHeader } from "./SectionHeader";

interface ProcessBlockProps {
  data: LandingProcessConfig;
}

export function ProcessBlock({ data }: ProcessBlockProps) {
  return (
    <Section id="process" className="border-y border-zinc-200 bg-white">
      <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {data.steps.map((step, index) => (
          <article key={step} className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-600">Etapa {index + 1}</p>
            <p className="font-medium text-zinc-800">{step}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
