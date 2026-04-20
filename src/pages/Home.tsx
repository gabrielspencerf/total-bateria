import { useSEO } from "../hooks/useSEO";
import { PageTransition } from "../components/layout/PageTransition";
import { HeroSection } from "../components/ui/HeroSection";
import { SectionHeading } from "../components/ui/SectionHeading";
import { TestimonialCard } from "../components/ui/TestimonialCard";
import { CTASection } from "../components/ui/CTASection";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { CheckCircle2, Battery, BatteryCharging, Truck, Wrench, ShieldCheck, Settings } from "lucide-react";
import { homeData } from "../data/home";
import { casesData } from "../data/cases";
import { FadeIn } from "../components/ui/FadeIn";
import { ServicesCarousel } from "../components/ui/ServicesCarousel";
import { CoverageSection } from "../components/ui/CoverageSection";
import { HomeSegmentsSection } from "../components/ui/HomeSegmentsSection";
import { homeServiceMedia } from "../data/mediaRuntime";

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

  const carouselServices = [
    {
      id: "baterias-tracionarias",
      title: "Baterias Tracionárias",
      description: "Manutenção, reforma, venda e carregadores com suporte técnico de campo.",
      link: "/servicos/baterias-tracionarias",
      icon: serviceIcons["baterias-tracionarias"],
      mediaSrc: homeServiceMedia["baterias-tracionarias"].mediaSrc,
      mediaAlt: homeServiceMedia["baterias-tracionarias"].mediaAlt,
    },
    {
      id: "baterias-de-litio",
      title: "Baterias de Lítio",
      description: "Mais autonomia e recarga rápida para operações de alta exigência logística.",
      link: "/servicos/baterias-de-litio",
      icon: serviceIcons["baterias-de-litio"],
      mediaSrc: homeServiceMedia["baterias-de-litio"].mediaSrc,
      mediaAlt: homeServiceMedia["baterias-de-litio"].mediaAlt,
    },
    {
      id: "empilhadeiras",
      title: "Empilhadeiras",
      description: "Assistência, manutenção e reforma para garantir produtividade e segurança.",
      link: "/servicos/empilhadeiras",
      icon: serviceIcons.empilhadeiras,
      mediaSrc: homeServiceMedia.empilhadeiras.mediaSrc,
      mediaAlt: homeServiceMedia.empilhadeiras.mediaAlt,
    },
    {
      id: "locacao-de-equipamentos",
      title: "Locação de Equipamentos",
      description: "Modelo flexível de locação com suporte e disponibilidade para sua operação.",
      link: "/servicos/locacao-de-equipamentos",
      icon: serviceIcons["locacao-de-equipamentos"],
      mediaSrc: homeServiceMedia["locacao-de-equipamentos"].mediaSrc,
      mediaAlt: homeServiceMedia["locacao-de-equipamentos"].mediaAlt,
    },
    {
      id: "pecas-e-acessorios",
      title: "Peças e Acessórios",
      description: "Componentes com qualidade e pronta entrega para reduzir indisponibilidade.",
      link: "/servicos/pecas-e-acessorios",
      icon: serviceIcons["pecas-e-acessorios"],
      mediaSrc: homeServiceMedia["pecas-e-acessorios"].mediaSrc,
      mediaAlt: homeServiceMedia["pecas-e-acessorios"].mediaAlt,
    },
    {
      id: "treinamentos-e-seguranca",
      title: "Treinamentos e Segurança",
      description: "Capacitação prática para equipe operar com segurança e melhor desempenho.",
      link: "/servicos/treinamentos-e-seguranca",
      icon: serviceIcons["treinamentos-e-seguranca"],
      mediaSrc: homeServiceMedia["treinamentos-e-seguranca"].mediaSrc,
      mediaAlt: homeServiceMedia["treinamentos-e-seguranca"].mediaAlt,
    },
  ];

  return (
    <PageTransition>
      <HeroSection 
        title={homeData.hero.title}
        subtitle={homeData.hero.subtitle}
        ctaText={homeData.hero.cta}
        badges={homeData.hero.badges}
      />

      {/* Prova rápida de autoridade */}
      <section className="border-b border-zinc-200 bg-surface-muted py-16 md:py-20">
        <div className="lp-container">
          <FadeIn direction="up">
            <SectionHeading
              title={homeData.authority.title}
              subtitle={homeData.authority.text}
              centered
              className="[&_p]:max-w-4xl [&_p]:text-lg [&_p]:md:text-xl"
            />
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="lp-card p-5">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">Tempo de resposta</p>
              <p className="text-2xl font-bold text-zinc-900">Atendimento ágil</p>
            </div>
            <div className="lp-card p-5">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">Cobertura técnica</p>
              <p className="text-2xl font-bold text-zinc-900">SP, Sul de MG e divisa RJ</p>
            </div>
            <div className="lp-card p-5">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">Estrutura</p>
              <p className="text-2xl font-bold text-zinc-900">Sede e frota próprias</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos serviços */}
      <section className="border-y border-zinc-200 bg-surface-muted py-16 md:py-20">
        <div className="lp-container">
          <FadeIn direction="up">
            <SectionHeading 
              title="Nossos Serviços" 
              subtitle="Carrossel de soluções para entender rapidamente como atendemos cada demanda operacional."
              centered
            />
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <ServicesCarousel services={carouselServices} />
          </FadeIn>
          
          <FadeIn direction="up" delay={0.4}>
            <div className="text-center">
              <Link to="/servicos">
                <Button variant="outline" size="lg">Ver todos os serviços</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Diferenciais + Cases e Clientes */}
      <section className="overflow-hidden bg-zinc-900 py-16 text-white md:py-20">
        <div className="lp-container">
          <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_1fr] gap-8 items-start">
            <div>
              <FadeIn direction="left">
                <SectionHeading 
                  title="Diferenciais, cases e confiança no mesmo bloco"
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
                  <Link to="/cases-e-clientes">
                    <Button variant="primary" size="lg">Ver cases e clientes</Button>
                  </Link>
                </div>
              </FadeIn>
            </div>

            <div className="space-y-4">
              {casesData.testimonials.slice(0, 2).map((testimonial, index) => (
                <FadeIn key={index} delay={index * 0.1} direction="right">
                  <TestimonialCard
                    role={testimonial.role}
                    text={testimonial.text}
                    rating={testimonial.rating}
                  />
                </FadeIn>
              ))}
              <FadeIn direction="right" delay={0.2}>
                <div className="rounded-2xl border border-zinc-700 bg-zinc-800 p-6 shadow-sm transition-colors duration-200 hover:border-red-600/35 hover:shadow-md">
                  <p className="mb-2 font-semibold text-white">Visão operacional</p>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    Cases orientados por resultado, prazo e impacto direto na produtividade do cliente.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <HomeSegmentsSection />

      <FadeIn direction="up">
        <CoverageSection />
      </FadeIn>

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
