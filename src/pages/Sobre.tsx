import { useSEO } from "../hooks/useSEO";
import { PageTransition } from "../components/layout/PageTransition";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { SectionHeading } from "../components/ui/SectionHeading";
import { TrustBadges } from "../components/ui/TrustBadges";
import { CoverageSection } from "../components/ui/CoverageSection";
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
            <Breadcrumb items={[{ label: "Sobre a Empresa" }]} />
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              {sobreData.history.title}
            </h1>
          </FadeIn>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2 space-y-6">
              <FadeIn direction="left">
                {sobreData.history.text.map((paragraph, index) => (
                  <p key={index} className="text-lg text-zinc-600 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
                
                <div className="pt-8 mt-8 border-t border-zinc-200">
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
              </FadeIn>
            </div>
            
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 gap-8">
                <FadeIn direction="right" delay={0.1}>
                  <div className="bg-zinc-900 text-white p-8 rounded-xl">
                    <h3 className="text-xl font-bold text-red-500 mb-3 uppercase tracking-wider">Missão</h3>
                    <p className="text-lg text-zinc-300">{sobreData.mvv.missao}</p>
                  </div>
                </FadeIn>
                
                <FadeIn direction="right" delay={0.2}>
                  <div className="bg-zinc-100 text-zinc-900 p-8 rounded-xl">
                    <h3 className="text-xl font-bold text-red-600 mb-3 uppercase tracking-wider">Visão</h3>
                    <p className="text-lg text-zinc-700">{sobreData.mvv.visao}</p>
                  </div>
                </FadeIn>
                
                <FadeIn direction="right" delay={0.3}>
                  <div className="bg-white border border-zinc-200 p-8 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wider">Valores</h3>
                    <ul className="space-y-3">
                      {sobreData.mvv.valores.map((valor, index) => (
                        <li key={index} className="flex items-center text-zinc-700 font-medium">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                          {valor}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FadeIn direction="up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadges />
        </div>
      </FadeIn>

      <FadeIn direction="up">
        <CoverageSection />
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
