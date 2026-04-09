import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "../../utils/cn";

interface CarouselService {
  id: string;
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
  mediaSrc?: string;
  mediaAlt?: string;
}

interface ServicesCarouselProps {
  services: CarouselService[];
}

export function ServicesCarousel({ services }: ServicesCarouselProps) {
  const [active, setActive] = useState(0);
  const safeServices = useMemo(() => services.filter((service) => Boolean(service.id)), [services]);
  const total = safeServices.length;

  if (!total) {
    return null;
  }

  const goNext = () => setActive((current) => (current + 1) % total);
  const goPrev = () => setActive((current) => (current - 1 + total) % total);

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {safeServices.map((service) => (
            <article key={service.id} className="min-w-full">
              <div className={cn("min-h-[280px] sm:min-h-[320px]", service.mediaSrc ? "grid grid-cols-1 lg:grid-cols-2" : "p-6 sm:p-8 lg:p-10")}>
                {service.mediaSrc && (
                  <div className="h-56 sm:h-64 lg:h-72 xl:h-80 border-b border-zinc-200 lg:border-b-0 lg:border-r border-zinc-200">
                    <img
                      src={service.mediaSrc}
                      alt={service.mediaAlt ?? service.title}
                      className="h-full w-full object-cover object-center"
                      style={{ objectPosition: "center center", objectFit: "cover" }}
                      loading="lazy"
                    />
                  </div>
                )}

                <div className={cn("flex flex-col justify-between", service.mediaSrc ? "p-6 sm:p-8 lg:p-10" : "")}>
                  <div>
                    <div className="inline-flex items-center rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700 mb-4">
                      {service.icon}
                      <span className={cn(service.icon && "ml-2")}>Solução Industrial</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4">{service.title}</h3>
                    <p className="text-zinc-600 leading-relaxed">{service.description}</p>
                  </div>
                  <Link
                    to={service.link}
                    className="mt-8 inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
                  >
                    Ver detalhes do serviço
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {safeServices.map((service, index) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "h-2.5 rounded-full transition-all",
                active === index ? "w-8 bg-red-600" : "w-2.5 bg-zinc-300 hover:bg-zinc-400",
              )}
              aria-label={`Ir para ${service.title}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
