import { useSEO } from "../hooks/useSEO";
import { PageTransition } from "../components/layout/PageTransition";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { CaseCard } from "../components/ui/CaseCard";
import { TestimonialCard } from "../components/ui/TestimonialCard";
import { CTASection } from "../components/ui/CTASection";
import { casesData } from "../data/cases";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";

export function Cases() {
  useSEO({
    title: "Cases e Clientes",
    description: "Conheça as empresas que confiam na Total Bateria para manter suas operações rodando sem parar."
  });

  return (
    <PageTransition>
      <div className="bg-zinc-50 py-12 border-b border-zinc-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <Breadcrumb items={[{ label: "Cases e Clientes" }]} />
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                {casesData.header.title}
              </h1>
              <p className="text-xl text-zinc-600">
                {casesData.header.subtitle}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Prova Social / Números */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {casesData.stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up">
                <div className="flex items-start">
                  <CheckCircle2 className="w-8 h-8 text-red-200 mr-4 flex-shrink-0" />
                  <p className="text-lg font-medium">{stat}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-zinc-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <FadeIn direction="up">
              <video
                className="w-full h-64 lg:h-full object-cover rounded-xl border border-zinc-200"
                controls
                preload="metadata"
                poster="/assets/media/posters/reels/operacao-tecnica-loop-01.jpg"
              >
                <source src="/assets/media/videos/reels/operacao-tecnica-loop-01.mp4" type="video/mp4" />
                Seu navegador não suporta vídeo em HTML5.
              </video>
            </FadeIn>
            <FadeIn direction="up" delay={0.1}>
              <img
                src="/assets/media/images/cases/cases-operacao-empilhadeira-bateria-01.webp"
                alt="Operação logística com movimentação de baterias"
                className="w-full h-64 object-cover rounded-xl border border-zinc-200"
                loading="lazy"
              />
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <img
                src="/assets/media/images/cases/cases-manutencao-celulas-02.webp"
                alt="Manutenção de células de bateria em bancada"
                className="w-full h-64 object-cover rounded-xl border border-zinc-200"
                loading="lazy"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Cases de Sucesso */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 mb-16">
              Cases de Sucesso
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {casesData.cases.map((caseStudy, index) => (
              <FadeIn key={caseStudy.id} delay={index * 0.1} direction="up">
                <CaseCard 
                  client={caseStudy.client}
                  segment={caseStudy.segment}
                  situation={caseStudy.situation}
                  challenge={caseStudy.challenge}
                  solution={caseStudy.solution}
                  results={caseStudy.results}
                  testimonial={caseStudy.testimonial}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Perfis Atendidos */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold text-zinc-900 mb-10">Perfis de empresas atendidas</h2>
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {casesData.profiles.map((profile, index) => (
                <FadeIn key={index} delay={index * 0.05} direction="up">
                  <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100 font-medium text-zinc-800 h-full flex items-center justify-center">
                    {profile}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
              O que dizem nossos clientes
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {casesData.testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up">
                <TestimonialCard 
                  role={testimonial.role}
                  text={testimonial.text}
                  rating={testimonial.rating}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FadeIn direction="up">
        <CTASection 
          title={casesData.ctaFinal.title}
          text={casesData.ctaFinal.text}
          buttonText={casesData.ctaFinal.button}
          variant="whatsapp"
        />
      </FadeIn>
    </PageTransition>
  );
}
