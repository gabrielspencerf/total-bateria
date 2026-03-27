import { useSEO } from "../hooks/useSEO";
import { PageTransition } from "../components/layout/PageTransition";
import { HeroSection } from "../components/ui/HeroSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ServiceCard } from "../components/ui/ServiceCard";
import { TestimonialCard } from "../components/ui/TestimonialCard";
import { CTASection } from "../components/ui/CTASection";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { CheckCircle2, Battery, BatteryCharging, Truck, Wrench, ShieldCheck, Settings } from "lucide-react";
import { homeData } from "../data/home";
import { casesData } from "../data/cases";
import { FadeIn } from "../components/ui/FadeIn";

export function Home() {
  useSEO({
    title: "Especialistas em Empilhadeiras e Baterias",
    description: "Há 19 anos oferecendo manutenção, locação e soluções completas em empilhadeiras e baterias tracionárias para empresas de todo o estado de SP e região."
  });

  const serviceIcons: Record<string, React.ReactNode> = {
    "baterias-tracionarias": <Battery className="w-6 h-6" />,
    "baterias-de-litio": <BatteryCharging className="w-6 h-6" />,
    "empilhadeiras": <Truck className="w-6 h-6" />,
    "locacao-de-equipamentos": <Settings className="w-6 h-6" />,
    "pecas-e-acessorios": <Wrench className="w-6 h-6" />,
    "treinamentos-e-seguranca": <ShieldCheck className="w-6 h-6" />
  };

  return (
    <PageTransition>
      <HeroSection 
        title={homeData.hero.title}
        subtitle={homeData.hero.subtitle}
        ctaText={homeData.hero.cta}
        badges={homeData.hero.badges}
      />

      {/* Prova rápida de autoridade */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">{homeData.authority.title}</h2>
              <p className="text-xl text-zinc-600 leading-relaxed">{homeData.authority.text}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Nossos serviços */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <SectionHeading 
              title="Nossos Serviços" 
              subtitle="Soluções completas para manter sua operação rodando."
              centered
            />
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {homeData.services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.1} direction="up">
                <ServiceCard 
                  title={service.title}
                  description={service.shortDescription}
                  link={service.slug}
                  icon={serviceIcons[service.id]}
                />
              </FadeIn>
            ))}
          </div>
          
          <FadeIn direction="up" delay={0.4}>
            <div className="text-center">
              <Link to="/servicos">
                <Button variant="outline" size="lg">Ver todos os serviços</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <FadeIn direction="left">
                <SectionHeading 
                  title={homeData.differentials.title}
                  light
                  className="mb-8"
                />
                <ul className="space-y-4">
                  {homeData.differentials.items.map((item, index) => (
                    <li key={index} className="flex items-center text-lg text-zinc-300">
                      <CheckCircle2 className="w-6 h-6 text-red-500 mr-4 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link to="/diferenciais">
                    <Button variant="primary" size="lg">Conheça nossos diferenciais</Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
            <div className="lg:w-1/2 w-full">
              <FadeIn direction="right" delay={0.2}>
                <div className="aspect-square md:aspect-video lg:aspect-square bg-zinc-800 rounded-2xl overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                    alt="Técnico realizando manutenção" 
                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Segmentos atendidos */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <SectionHeading 
              title={homeData.segments.title}
              subtitle={homeData.segments.text}
              centered
            />
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 mt-12">
            {homeData.segments.items.map((item, index) => (
              <FadeIn key={index} delay={index * 0.05} direction="up">
                <div className="bg-white p-6 rounded-xl border border-zinc-200 text-center shadow-sm hover:shadow-md transition-shadow flex items-center justify-center min-h-[120px] h-full group">
                  <span className="font-bold text-zinc-900 group-hover:text-red-600 transition-colors">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <SectionHeading 
              title="Quem confia na Total Bateria"
              centered
            />
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {casesData.testimonials.slice(0, 3).map((testimonial, index) => (
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

      {/* CTA Final */}
      <FadeIn direction="up">
        <CTASection 
          title={homeData.ctaFinal.title}
          text={homeData.ctaFinal.text}
          buttonText={homeData.ctaFinal.button}
          buttonLink="/contato"
          variant="whatsapp"
        />
      </FadeIn>
    </PageTransition>
  );
}
