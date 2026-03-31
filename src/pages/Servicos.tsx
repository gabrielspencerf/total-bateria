import { useSEO } from "../hooks/useSEO";
import { PageTransition } from "../components/layout/PageTransition";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { SectionHeading } from "../components/ui/SectionHeading";
import { CTASection } from "../components/ui/CTASection";
import { servicosData } from "../data/servicos";
import { FadeIn } from "../components/ui/FadeIn";
import { Battery, BatteryCharging, Truck, Wrench, ShieldCheck, Settings } from "lucide-react";
import { ServicesCarousel } from "../components/ui/ServicesCarousel";

export function Servicos() {
  useSEO({
    title: "Serviços em Empilhadeiras e Baterias",
    description: "Soluções completas para manter sua operação sempre em movimento. Manutenção, locação, peças e treinamentos."
  });

  const servicesList = [
    {
      title: servicosData.bateriasTracionarias.title,
      description: servicosData.bateriasTracionarias.subtitle,
      link: "/servicos/baterias-tracionarias",
      icon: <Battery className="w-6 h-6" />
    },
    {
      title: servicosData.bateriasLitio.title,
      description: servicosData.bateriasLitio.subtitle,
      link: "/servicos/baterias-de-litio",
      icon: <BatteryCharging className="w-6 h-6" />
    },
    {
      title: servicosData.empilhadeiras.title,
      description: servicosData.empilhadeiras.subtitle,
      link: "/servicos/empilhadeiras",
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: servicosData.locacao.title,
      description: servicosData.locacao.subtitle,
      link: "/servicos/locacao-de-equipamentos",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: servicosData.pecas.title,
      description: servicosData.pecas.subtitle,
      link: "/servicos/pecas-e-acessorios",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: servicosData.treinamentos.title,
      description: servicosData.treinamentos.subtitle,
      link: "/servicos/treinamentos-e-seguranca",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <PageTransition>
      <div className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <Breadcrumb items={[{ label: "Serviços" }]} />
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {servicosData.hub.title}
              </h1>
              <p className="text-xl text-zinc-300">
                {servicosData.hub.subtitle}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <SectionHeading
              title="Navegue pelos serviços em formato visual"
              subtitle="Cada serviço com contexto prático para facilitar a decisão."
              centered
            />
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <ServicesCarousel
              services={[
                {
                  id: "baterias-tracionarias",
                  title: servicesList[0].title,
                  description: servicesList[0].description,
                  link: servicesList[0].link,
                  icon: servicesList[0].icon,
                  mediaType: "video",
                  mediaSrc: "/assets/media/videos/home/home-bateria-inspecao-tecnica-03.mp4",
                  poster: "/assets/media/posters/home-bateria-inspecao-tecnica-03.jpg",
                },
                {
                  id: "baterias-de-litio",
                  title: servicesList[1].title,
                  description: servicesList[1].description,
                  link: servicesList[1].link,
                  icon: servicesList[1].icon,
                  mediaType: "video",
                  mediaSrc: "/assets/media/videos/home/home-bateria-analise-celulas-02.mp4",
                  poster: "/assets/media/posters/home-bateria-analise-celulas-02.jpg",
                },
                {
                  id: "empilhadeiras",
                  title: servicesList[2].title,
                  description: servicesList[2].description,
                  link: servicesList[2].link,
                  icon: servicesList[2].icon,
                  mediaType: "image",
                  mediaSrc: "/assets/media/images/cases/cases-operacao-empilhadeira-bateria-02.webp",
                },
                {
                  id: "locacao",
                  title: servicesList[3].title,
                  description: servicesList[3].description,
                  link: servicesList[3].link,
                  icon: servicesList[3].icon,
                  mediaType: "image",
                  mediaSrc: "/assets/media/images/sobre/sobre-estrutura-interna-02.webp",
                },
                {
                  id: "pecas",
                  title: servicesList[4].title,
                  description: servicesList[4].description,
                  link: servicesList[4].link,
                  icon: servicesList[4].icon,
                  mediaType: "image",
                  mediaSrc: "/assets/media/images/sobre/sobre-laboratorio-baterias-01.webp",
                },
                {
                  id: "treinamentos",
                  title: servicesList[5].title,
                  description: servicesList[5].description,
                  link: servicesList[5].link,
                  icon: servicesList[5].icon,
                  mediaType: "video",
                  mediaSrc: "/assets/media/videos/sobre/sobre-solda-reparo-estrutura-01.mp4",
                  poster: "/assets/media/posters/sobre-solda-reparo-estrutura-01.jpg",
                },
              ]}
            />
          </FadeIn>
        </div>
      </section>

      <FadeIn direction="up">
        <CTASection 
          title="Precisa de ajuda para escolher a melhor solução?"
          text="Nossa equipe técnica está pronta para avaliar sua operação e indicar o serviço ideal."
          buttonText={servicosData.hub.cta}
          variant="primary"
        />
      </FadeIn>
    </PageTransition>
  );
}
