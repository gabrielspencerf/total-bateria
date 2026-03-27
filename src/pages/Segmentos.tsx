import { useSEO } from "../hooks/useSEO";
import { PageTransition } from "../components/layout/PageTransition";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { SegmentCard } from "../components/ui/SegmentCard";
import { CoverageSection } from "../components/ui/CoverageSection";
import { CTASection } from "../components/ui/CTASection";
import { segmentosData } from "../data/segmentos";
import { FadeIn } from "../components/ui/FadeIn";

export function Segmentos() {
  useSEO({
    title: "Segmentos Atendidos",
    description: "Soluções em empilhadeiras e baterias para indústrias, logística, CDs, atacadistas e construção."
  });

  return (
    <PageTransition>
      <div className="bg-zinc-50 py-12 border-b border-zinc-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <Breadcrumb items={[{ label: "Segmentos Atendidos" }]} />
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                {segmentosData.header.title}
              </h1>
              <p className="text-xl text-zinc-600 mb-4">
                {segmentosData.header.subtitle}
              </p>
              <p className="text-lg text-zinc-500">
                {segmentosData.header.text}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <p className="text-xl text-zinc-700 leading-relaxed">
                {segmentosData.intro.text}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {segmentosData.segments.map((segment, index) => (
              <FadeIn key={segment.id} delay={index * 0.1} direction="up">
                <SegmentCard 
                  id={segment.id}
                  title={segment.title}
                  description={segment.text}
                  demandas={segment.demandas}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FadeIn direction="up">
        <CoverageSection />
      </FadeIn>

      <FadeIn direction="up">
        <CTASection 
          title={segmentosData.ctaFinal.title}
          text={segmentosData.ctaFinal.text}
          buttonText={segmentosData.ctaFinal.button}
          variant="dark"
        />
      </FadeIn>
    </PageTransition>
  );
}
