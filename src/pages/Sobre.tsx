import { useSEO } from "../hooks/useSEO";
import { PageTransition } from "../components/layout/PageTransition";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { TrustBadges } from "../components/ui/TrustBadges";
import { CTASection } from "../components/ui/CTASection";
import { sobreData } from "../data/sobre";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";

export function Sobre() {
  useSEO({
    title: "Sobre a Empresa",
    description: "Conheça a história da Total Bateria, há 19 anos mantendo operações em movimento com soluções em empilhadeiras e baterias tracionárias."
  });

  return (
    <PageTransition>
      <div className="bg-zinc-50 py-12 border-b border-zinc-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <Breadcrumb items={[{ label: "Sobre a Empresa" }]} />
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                {sobreData.history.title}
              </h1>
            </div>
          </FadeIn>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <FadeIn direction="left">
              <article className="h-full rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
                {sobreData.history.text.map((paragraph, index) => (
                  <p key={index} className="text-lg text-zinc-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}

                <div className="pt-6 mt-6 border-t border-zinc-200">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-6">Nossa Estrutura</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {sobreData.structure.map((item, index) => (
                      <li key={index} className="flex items-center text-zinc-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <article className="h-full rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm space-y-8">
                <section className="rounded-xl bg-zinc-900 p-6 text-white">
                  <h3 className="text-xl font-bold text-red-500 mb-2 uppercase tracking-wider">Missão</h3>
                  <p className="text-zinc-300">{sobreData.mvv.missao}</p>
                </section>

                <section className="rounded-xl bg-zinc-100 p-6">
                  <h3 className="text-xl font-bold text-red-600 mb-2 uppercase tracking-wider">Visão</h3>
                  <p className="text-zinc-700">{sobreData.mvv.visao}</p>
                </section>

                <section className="rounded-xl border border-zinc-200 p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider">Valores</h3>
                  <ul className="space-y-3">
                    {sobreData.mvv.valores.map((valor, index) => (
                      <li key={index} className="flex items-center text-zinc-700 font-medium">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        {valor}
                      </li>
                    ))}
                  </ul>
                </section>
              </article>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
              <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Experiência</p>
                <p className="text-sm font-semibold text-zinc-900">19+ anos</p>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Estrutura</p>
                <p className="text-sm font-semibold text-zinc-900">Sede e frota próprias</p>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Cobertura</p>
                <p className="text-sm font-semibold text-zinc-900">SP, MG e divisa RJ</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FadeIn direction="up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </FadeIn>

      <FadeIn direction="up">
        <CTASection 
          title="Sua operação não pode parar"
          text="Fale com nossa equipe e receba uma avaliação técnica personalizada."
          buttonText="Solicitar avaliação"
        />
      </FadeIn>
    </PageTransition>
  );
}
