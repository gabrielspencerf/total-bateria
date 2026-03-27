import { useSEO } from "../hooks/useSEO";
import { PageTransition } from "../components/layout/PageTransition";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ServiceCard } from "../components/ui/ServiceCard";
import { CTASection } from "../components/ui/CTASection";
import { servicosData } from "../data/servicos";
import { FadeIn } from "../components/ui/FadeIn";
import { Battery, BatteryCharging, Truck, Wrench, ShieldCheck, Settings } from "lucide-react";

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up">
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  link={service.link}
                  icon={service.icon}
                />
              </FadeIn>
            ))}
          </div>
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
