import type { LandingAuthorityConfig } from "../types";
import { LandingMediaImage, Reveal, Section } from "../../../shared/ui";
import { SectionHeader } from "./SectionHeader";

interface AuthorityBlockProps {
  data: LandingAuthorityConfig;
}

export function AuthorityBlock({ data }: AuthorityBlockProps) {
  const quote = data.pullQuote?.trim();

  if (data.figure) {
    return (
      <Section id="autoridade" className="border-t-0 bg-zinc-50 pb-16 pt-10 md:pb-20 md:pt-14">
        <Reveal>
          <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md lp-grid-faint">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:items-stretch">
              <div className="relative flex flex-col justify-center p-8 lg:p-12">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-red-50/40 via-transparent to-transparent" aria-hidden />
                <div className="relative">
                  <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} className="mb-0 max-w-xl" />
                  {quote ? (
                    <blockquote className="mt-8 border-l-4 border-red-600 bg-zinc-50/90 px-4 py-3 text-sm font-semibold leading-snug text-zinc-900 sm:text-base">
                      {quote}
                    </blockquote>
                  ) : null}
                </div>
              </div>
              <div className="relative min-h-[280px] border-t border-zinc-200 bg-zinc-100 lg:min-h-[360px] lg:border-l lg:border-t-0">
                <LandingMediaImage
                  src={data.figure.src}
                  alt={data.figure.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent lg:bg-gradient-to-l" aria-hidden />
              </div>
            </div>
          </article>
        </Reveal>
      </Section>
    );
  }

  return (
    <Section id="autoridade" className="border-t-0 bg-zinc-50 pb-16 pt-10 md:pb-20 md:pt-14">
      <Reveal>
        <article className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-8 text-white shadow-xl shadow-black/30 md:p-12 lp-surface-tech-dark">
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] lp-grid-faint-dark motion-reduce:opacity-0" aria-hidden />
          <div className="relative max-w-4xl">
            <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} light className="mb-0" />
            {quote ? (
              <blockquote className="mt-8 border-l-4 border-red-500 bg-white/5 px-4 py-3 text-sm font-semibold leading-snug text-zinc-100 sm:text-base">
                {quote}
              </blockquote>
            ) : null}
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
