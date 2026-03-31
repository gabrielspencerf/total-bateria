import { useSEO } from "../../hooks/useSEO";
import { PageTransition } from "../../components/layout/PageTransition";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { CTASection } from "../../components/ui/CTASection";
import { ServiceMediaShowcase } from "../../components/ui/ServiceMediaShowcase";
import { servicosData } from "../../data/servicos";
import { CheckCircle2, Settings, ShieldCheck } from "lucide-react";

export function Pecas() {
  const data = servicosData.pecas;
  
  useSEO({
    title: data.title,
    description: data.subtitle
  });

  return (
    <PageTransition>
      <div className="bg-zinc-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[
            { label: "Serviços", path: "/servicos" },
            { label: "Peças e Acessórios" }
          ]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-zinc-300 mb-8">
              {data.subtitle}
            </p>
          </div>
        </div>
      </div>

      <ServiceMediaShowcase serviceKey="pecas" />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-200">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center">
                <Settings className="w-8 h-8 text-red-600 mr-4" />
                O que fornecemos
              </h3>
              <ul className="space-y-4">
                {data.fornecemos.map((item, index) => (
                  <li key={index} className="flex items-start text-zinc-700">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-200">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center">
                <ShieldCheck className="w-8 h-8 text-red-600 mr-4" />
                Diferenciais
              </h3>
              <ul className="space-y-4">
                {data.diferenciais.map((item, index) => (
                  <li key={index} className="flex items-start text-zinc-700">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title={data.ctaFinal.title}
        text=""
        buttonText={data.ctaFinal.button}
        variant="dark"
      />
    </PageTransition>
  );
}
