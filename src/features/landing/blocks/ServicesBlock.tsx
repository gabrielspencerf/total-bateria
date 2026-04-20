import { ChevronLeft, ChevronRight, Factory, ImageOff, Truck, Wrench } from "lucide-react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import type { LandingCallToAction, LandingPageConfig, LandingServiceCardConfig } from "../types";
import { Button, LandingMediaImage, Reveal, Section } from "../../../shared/ui";
import { resolvePublicUrl } from "../../../utils/publicAsset";
import { SectionHeader } from "./SectionHeader";
import { cn } from "../../../utils/cn";

interface ServicesBlockProps {
  data: LandingPageConfig["services"];
  defaultCta: LandingCallToAction;
}

const serviceIcons = [Wrench, Truck, Factory];

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return reduced;
}

function useViewportWidth<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") {
      setWidth(el?.clientWidth ?? 0);
      return;
    }
    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  return { ref, width };
}

function ServiceSlide({
  card,
  Icon,
  ctaLabel,
  defaultCta,
  index,
  total,
}: {
  card: LandingServiceCardConfig;
  Icon: typeof Wrench;
  ctaLabel: string;
  defaultCta: LandingCallToAction;
  index: number;
  total: number;
}) {
  const operational = card.highlights[0];
  const restHighlights = card.highlights.slice(1, 4);
  const micro = card.microDescription?.trim();
  const listCap = 6;
  const listItems = card.items.slice(0, listCap);
  const visual = card.visual;
  const hasVisual = Boolean(
    visual ||
      (card.imageSrc && card.imageAlt),
  );

  return (
    <article
      role="group"
      aria-label={`${card.title}, slide ${index + 1} de ${total}`}
      className="h-full min-h-0"
    >
      <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md lg:min-h-[420px] lg:flex-row">
        <div
          className={cn(
            "relative flex min-h-[11rem] shrink-0 bg-zinc-200 lg:min-h-0",
            hasVisual ? "lg:w-[42%]" : "lg:flex lg:w-[38%] lg:items-center lg:justify-center",
          )}
        >
          {visual?.format === "video" ? (
            <>
              <LandingMediaImage
                src={visual.poster}
                alt=""
                className="h-full min-h-[11rem] w-full object-cover lg:absolute lg:inset-0 lg:min-h-0"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
              <video
                className={cn(
                  "absolute inset-0 hidden h-full w-full object-cover object-center md:block motion-reduce:md:hidden",
                )}
                poster={resolvePublicUrl(visual.poster)}
                muted
                playsInline
                loop
                preload="metadata"
                autoPlay
                aria-label={visual.alt}
              >
                <source src={resolvePublicUrl(visual.webmSrc)} type="video/webm" />
                <source src={resolvePublicUrl(visual.mp4Src)} type="video/mp4" />
              </video>
            </>
          ) : visual?.format === "image" ? (
            <LandingMediaImage
              src={visual.src}
              alt={visual.alt}
              className="h-full min-h-[11rem] w-full object-cover lg:absolute lg:inset-0 lg:min-h-0"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ) : card.imageSrc && card.imageAlt ? (
            <LandingMediaImage
              src={card.imageSrc}
              alt={card.imageAlt}
              className="h-full min-h-[11rem] w-full object-cover lg:absolute lg:inset-0 lg:min-h-0"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-zinc-100 p-6 text-center text-zinc-500">
              <ImageOff className="size-8 opacity-60" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-wide">Contexto visual opcional</span>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/55 via-transparent to-transparent lg:bg-gradient-to-r" aria-hidden />
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 lg:bottom-4 lg:left-4 lg:right-4">
            <span className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-zinc-950/65 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-[2px] motion-reduce:backdrop-blur-none">
              <Icon className="size-3.5 text-red-400" aria-hidden />
              Serviço
            </span>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col border-t border-zinc-200 bg-gradient-to-b from-white to-zinc-50/90 lg:border-l lg:border-t-0">
          <div className="border-b border-zinc-200/90 p-5 sm:p-6 md:p-8 md:pb-6">
            <h3 className="text-xl font-black tracking-tight text-zinc-900 sm:text-2xl lg:text-[1.65rem] lg:leading-tight">{card.title}</h3>
            {micro ? <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">{micro}</p> : null}
            {operational ? (
              <p className="mt-4 inline-flex max-w-full items-center gap-2 border border-red-200 bg-red-50 px-3 py-2 text-xs font-bold uppercase leading-snug tracking-wide text-red-900">
                <span className="font-mono text-[10px] text-red-600">OP</span>
                <span className="min-w-0">{operational}</span>
              </p>
            ) : null}
          </div>

          <div className="grid flex-1 grid-cols-1 gap-6 p-5 sm:p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,17rem)] md:p-8 md:pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,18.5rem)]">
            <ul className="min-w-0 space-y-2 text-sm text-zinc-800 sm:text-[0.9375rem]">
              {listItems.map((item) => (
                <li key={item} className="flex gap-2.5 leading-snug">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-red-600" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
              {card.items.length > listCap ? (
                <li className="pl-4 text-xs font-semibold text-zinc-500">+ {card.items.length - listCap} itens no escopo técnico</li>
              ) : null}
            </ul>

            <div className="flex min-w-0 flex-col gap-4 border-t border-dashed border-zinc-200 pt-5 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              {restHighlights.length > 0 ? (
                <ul className="rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700">
                  {restHighlights.map((h) => (
                    <li key={h} className="flex gap-2 border-b border-zinc-100 py-2 first:pt-0 last:border-b-0 last:pb-0">
                      <span className="font-mono text-xs font-bold text-red-600">+</span>
                      <span className="leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              <a
                href={defaultCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full min-w-0 shrink-0"
              >
                <Button
                  variant={defaultCta.variant}
                  className="h-auto min-h-12 w-full min-w-0 justify-center px-4 py-3 text-center text-sm leading-snug whitespace-normal sm:px-5 sm:text-base"
                >
                  {ctaLabel}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ServicesBlock({ data, defaultCta }: ServicesBlockProps) {
  const reducedMotion = usePrefersReducedMotion();
  const { ref: viewportRef, width: vw } = useViewportWidth<HTMLDivElement>();
  const [index, setIndex] = useState(0);
  const n = data.cards.length;

  const scrollToIndex = useCallback((i: number) => {
    const clamped = ((i % n) + n) % n;
    setIndex(clamped);
  }, [n]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollToIndex(index - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollToIndex(index + 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollToIndex(0);
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToIndex(n - 1);
      }
    },
    [index, n, scrollToIndex],
  );

  const trackOffset = vw > 0 ? -(index * vw) : 0;

  return (
    <Section id="services" className="border-y border-zinc-200 lp-surface-tech-light">
      <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} className="max-w-5xl" />

      <Reveal>
        <div className="mx-auto max-w-6xl">
          <p className="sr-only" aria-live="polite">
            Serviço {index + 1} de {n}: {data.cards[index]?.title}
          </p>

          <div
            className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-100/50 shadow-sm lp-grid-faint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            onKeyDown={onKeyDown}
            tabIndex={0}
            role="region"
            aria-label="Carrossel de serviços"
          >
            <div ref={viewportRef} className="relative w-full min-w-0 overflow-hidden">
              <div
                className={cn(
                  "flex flex-nowrap",
                  !reducedMotion && "transition-transform duration-300 ease-out",
                  reducedMotion && "duration-0",
                )}
                style={{
                  transform: vw > 0 ? `translate3d(${trackOffset}px,0,0)` : undefined,
                }}
              >
                {data.cards.map((card, i) => {
                  const Icon = serviceIcons[i] ?? Wrench;
                  const ctaLabel = card.ctaLabel || defaultCta.label;
                  const slideW = vw > 0 ? vw : undefined;
                  return (
                    <div key={card.title} className="box-border shrink-0 grow-0" style={{ width: slideW ?? "100%" }}>
                      <ServiceSlide card={card} Icon={Icon} ctaLabel={ctaLabel} defaultCta={defaultCta} index={i} total={n} />
                    </div>
                  );
                })}
              </div>
            </div>

            {n > 1 ? (
              <div className="flex flex-col gap-3 border-t border-zinc-200 bg-white/90 px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
                <div className="flex items-center justify-center gap-2 sm:justify-start">
                  <button
                    type="button"
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-zinc-300 bg-white text-zinc-900 shadow-sm transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    aria-label="Serviço anterior"
                    onClick={() => scrollToIndex(index - 1)}
                  >
                    <ChevronLeft className="size-5" aria-hidden />
                  </button>
                  <span className="min-w-[4.5rem] text-center font-mono text-xs font-bold tabular-nums text-zinc-500">
                    {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                  </span>
                  <button
                    type="button"
                    className="inline-flex size-10 items-center justify-center rounded-lg border border-zinc-300 bg-white text-zinc-900 shadow-sm transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    aria-label="Próximo serviço"
                    onClick={() => scrollToIndex(index + 1)}
                  >
                    <ChevronRight className="size-5" aria-hidden />
                  </button>
                </div>

                <div className="flex justify-center gap-1.5 sm:hidden" aria-label="Indicadores de slide">
                  {data.cards.map((_, i) => (
                    <button
                      key={String(i)}
                      type="button"
                      className={cn(
                        "size-2.5 rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",
                        i === index ? "border-red-800 bg-red-600" : "border-zinc-300 bg-zinc-200 hover:bg-zinc-300",
                      )}
                      aria-label={`Ir para o serviço ${i + 1}`}
                      aria-current={i === index ? "true" : undefined}
                      onClick={() => scrollToIndex(i)}
                    />
                  ))}
                </div>

                <div
                  className="hidden flex-wrap items-center justify-end gap-2 sm:flex"
                  role="tablist"
                  aria-label="Índice de serviços"
                >
                  {data.cards.map((c, i) => (
                    <button
                      key={c.title}
                      type="button"
                      role="tab"
                      aria-selected={i === index}
                      className={cn(
                        "max-w-[10rem] truncate rounded-lg border px-3 py-2 text-left text-[11px] font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 md:max-w-[12rem] lg:max-w-[14rem]",
                        i === index
                          ? "border-red-700 bg-red-600 text-white"
                          : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300 hover:bg-white",
                      )}
                      aria-label={`Ir para ${c.title}`}
                      onClick={() => scrollToIndex(i)}
                    >
                      {c.title}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
