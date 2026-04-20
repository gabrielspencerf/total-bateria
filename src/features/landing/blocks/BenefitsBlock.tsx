import { Zap } from "lucide-react";
import type { LandingBenefitsConfig } from "../types";
import { LandingMediaImage, Reveal, Section } from "../../../shared/ui";
import { SectionHeader } from "./SectionHeader";

interface BenefitsBlockProps {
  data: LandingBenefitsConfig;
}

export function BenefitsBlock({ data }: BenefitsBlockProps) {
  return (
    <Section id="benefits" className="border-y border-zinc-200 bg-white">
      <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} />
      <Reveal>
        {data.figure ? (
          <div className="mb-10 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm">
            <LandingMediaImage
              src={data.figure.src}
              alt={data.figure.alt}
              className="max-h-72 w-full object-cover object-center sm:max-h-80"
              loading="lazy"
              decoding="async"
            />
          </div>
        ) : null}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item) => (
            <article
              key={item}
              className="group rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm transition-[transform,box-shadow,border-color] duration-200 ease-out motion-reduce:transition-none hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md motion-reduce:hover:translate-y-0"
            >
              <Zap className="mb-3 size-6 text-red-600 transition-transform duration-200 group-hover:scale-105 motion-reduce:group-hover:scale-100" aria-hidden />
              <p className="text-zinc-800">{item}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
