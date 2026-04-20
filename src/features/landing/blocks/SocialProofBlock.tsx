import { Quote } from "lucide-react";
import type { LandingSocialProofConfig } from "../types";
import { Reveal, Section } from "../../../shared/ui";
import { SectionHeader } from "./SectionHeader";

interface SocialProofBlockProps {
  data: LandingSocialProofConfig;
}

export function SocialProofBlock({ data }: SocialProofBlockProps) {
  return (
    <Section id="prova-social" className="border-y border-zinc-800 bg-zinc-950 text-white">
      <SectionHeader title={data.title} description={data.description} light />

      <Reveal>
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {data.stats.map((stat) => (
          <article key={stat} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 text-zinc-200">
            {stat}
          </article>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {data.testimonials.map((testimonial) => (
          <article key={testimonial.role} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <Quote className="mb-4 size-6 text-red-500" />
            <p className="mb-4 text-zinc-300">"{testimonial.text}"</p>
            <p className="font-semibold text-white">{testimonial.role}</p>
          </article>
        ))}
      </div>
      </Reveal>
    </Section>
  );
}
