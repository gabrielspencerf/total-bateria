import { useSEO } from "../hooks/useSEO";
import { PageTransition } from "../components/layout/PageTransition";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { SegmentCard } from "../components/ui/SegmentCard";
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
      <div className="bg-zinc-950 text-white py-16 border-b border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <Breadcrumb items={[{ label: "Segmentos Atendidos" }]} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  {segmentosData.header.title}
                </h1>
                <p className="text-xl text-zinc-300 mb-4">
                  {segmentosData.header.subtitle}
                </p>
                <p className="text-lg text-zinc-400">
                  {segmentosData.header.text}
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-700 shadow-2xl bg-zinc-900 p-6">
                <p className="font-semibold text-white mb-2">Contexto operacional</p>
                <p className="text-zinc-300">
                  Atendimento planejado por criticidade, tipo de operação e janela de manutenção.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto mb-10 text-center">
              <p className="text-xl text-zinc-700 leading-relaxed">
                {segmentosData.intro.text}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {segmentosData.segments.map((segment, index) => (
              <FadeIn key={segment.id} delay={index * 0.1} direction="up">
                <SegmentCard
                  id={segment.id}
                  title={segment.title}
                  description={segment.text.split("\n\n")[0]}
                  demandas={segment.demandas?.slice(0, 4)}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-50 border-y border-zinc-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-2">Formato de atendimento</p>
              <p className="text-xl font-bold text-zinc-900">Preventivo e corretivo</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-2">Nível de criticidade</p>
              <p className="text-xl font-bold text-zinc-900">Operações que não podem parar</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-5">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-2">Cobertura</p>
              <p className="text-xl font-bold text-zinc-900">SP, Sul de MG e divisa RJ</p>
            </div>
          </div>
        </div>
      </section>

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
