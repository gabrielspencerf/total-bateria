import { useSEO } from "../hooks/useSEO";
import { PageTransition } from "../components/layout/PageTransition";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { DifferentialCard } from "../components/ui/DifferentialCard";
import { CTASection } from "../components/ui/CTASection";
import { diferenciaisData } from "../data/diferenciais";
import { FadeIn } from "../components/ui/FadeIn";
import { ClipboardCheck, Zap, RefreshCw, Building2, Truck, Users, ShieldAlert, MapPin, Award } from "lucide-react";

export function Diferenciais() {
  useSEO({
    title: "Nossos Diferenciais",
    description: "Por que empresas escolhem a Total Bateria. Atendimento rápido, estrutura própria e equipe especializada."
  });

  const getIconForDifferential = (id: string) => {
    switch (id) {
      case "visita-tecnica": return <ClipboardCheck className="w-6 h-6" />;
      case "atendimento-rapido": return <Zap className="w-6 h-6" />;
      case "emprestimo": return <RefreshCw className="w-6 h-6" />;
      case "estrutura": return <Building2 className="w-6 h-6" />;
      case "frota": return <Truck className="w-6 h-6" />;
      case "equipe": return <Users className="w-6 h-6" />;
      case "treinamento": return <ShieldAlert className="w-6 h-6" />;
      case "localizacao": return <MapPin className="w-6 h-6" />;
      case "experiencia": return <Award className="w-6 h-6" />;
      default: return undefined;
    }
  };

  return (
    <PageTransition>
      <div className="bg-zinc-900 text-white py-16">
        <div className="lp-container">
          <FadeIn direction="up">
            <Breadcrumb items={[{ label: "Diferenciais" }]} />
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {diferenciaisData.header.title}
              </h1>
              <p className="text-xl text-zinc-300 mb-4">
                {diferenciaisData.header.subtitle}
              </p>
              <p className="text-lg text-red-500 font-medium">
                {diferenciaisData.header.text}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <section className="py-16 bg-zinc-50">
        <div className="lp-container">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto mb-10 text-center">
              <p className="text-xl text-zinc-700 leading-relaxed">
                {diferenciaisData.intro.text}
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciaisData.items.map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.1} direction="up">
                <DifferentialCard 
                  title={item.title}
                  description={item.text}
                  benefits={item.benefits}
                  icon={getIconForDifferential(item.id)}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FadeIn direction="up">
        <CTASection 
          title={diferenciaisData.ctaFinal.title}
          text={diferenciaisData.ctaFinal.text}
          buttonText={diferenciaisData.ctaFinal.button}
          variant="whatsapp"
        />
      </FadeIn>
    </PageTransition>
  );
}
