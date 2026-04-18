import { ChevronDown, HelpCircle } from "lucide-react";
import type { LandingFaqConfig } from "../types";
import { Reveal, Section } from "../../../shared/ui";
import { SectionHeader } from "./SectionHeader";
import { cn } from "../../../utils/cn";

interface FaqBlockProps {
  data: LandingFaqConfig;
}

export function FaqBlock({ data }: FaqBlockProps) {
  const presentation = data.presentation ?? "accordion";

  return (
    <Section id="faq" className="border-y border-zinc-200 bg-white lp-surface-tech-light">
      <div className="mx-auto max-w-4xl">
        <SectionHeader title={data.title} className="max-w-3xl" />

        <Reveal>
          {presentation === "accordion" ? (
            <div className="space-y-2 md:space-y-3">
              {data.items.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-zinc-200 bg-white px-4 py-1 shadow-sm open:shadow-md md:px-5"
                >
                  <summary
                    className={cn(
                      "flex cursor-pointer list-none items-start gap-3 py-4 pr-2 text-left text-base font-bold text-zinc-900 md:text-lg",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
                      "[&::-webkit-details-marker]:hidden",
                    )}
                  >
                    <HelpCircle className="mt-0.5 size-5 shrink-0 text-red-600 md:size-6" aria-hidden />
                    <span className="flex-1">{faq.question}</span>
                    <ChevronDown
                      className="mt-1 size-5 shrink-0 text-zinc-500 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                      aria-hidden
                    />
                  </summary>
                  <div className="border-t border-zinc-200 pb-4 pl-8 pr-2 pt-3 text-sm leading-relaxed text-zinc-700 md:pb-5 md:pl-10 md:text-base">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {data.items.map((faq) => (
                <article key={faq.question} className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <div className="mb-3 flex items-start">
                    <HelpCircle className="mr-2 mt-0.5 size-5 shrink-0 text-red-600" aria-hidden />
                    <h3 className="font-bold text-zinc-900">{faq.question}</h3>
                  </div>
                  <p className="text-zinc-700">{faq.answer}</p>
                </article>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
