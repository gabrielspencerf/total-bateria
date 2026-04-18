import type { LandingComparisonConfig } from "../types";
import { Reveal, Section } from "../../../shared/ui";
import { SectionHeader } from "./SectionHeader";

interface ComparisonBlockProps {
  data: LandingComparisonConfig;
}

export function ComparisonBlock({ data }: ComparisonBlockProps) {
  return (
    <Section id="comparison" className="bg-zinc-950 text-white">
      <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} light />
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-zinc-800">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-zinc-900 text-left text-sm uppercase tracking-wide text-zinc-300">
              <th className="border-b border-zinc-800 px-4 py-3">Critério</th>
              <th className="border-b border-zinc-800 px-4 py-3">{data.leftLabel}</th>
              <th className="border-b border-zinc-800 px-4 py-3">{data.rightLabel}</th>
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row) => (
              <tr key={row.label} className="bg-zinc-950">
                <td className="border-b border-zinc-800 px-4 py-3 font-semibold text-zinc-100">{row.label}</td>
                <td className="border-b border-zinc-800 px-4 py-3 text-zinc-300">{row.leftValue}</td>
                <td className="border-b border-zinc-800 px-4 py-3 text-zinc-300">{row.rightValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </Reveal>
    </Section>
  );
}
