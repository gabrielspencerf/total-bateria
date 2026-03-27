import { useSEO } from "../../hooks/useSEO";
import { PageTransition } from "../../components/layout/PageTransition";
import { Breadcrumb } from "../../components/ui/Breadcrumb";
import { CTASection } from "../../components/ui/CTASection";
import { servicosData } from "../../data/servicos";
import { CheckCircle2, PackageSearch, Target, AlertCircle } from "lucide-react";

export function Locacao() {
  const data = servicosData.locacao;
  
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
            { label: "Locação de Equipamentos" }
          ]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-zinc-300 mb-8">
              {data.subtitle}
            </p>
            <CTASection 
              title=""
              text=""
              buttonText={data.cta}
              variant="primary"
              className="p-0 bg-transparent"
            />
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-6 flex items-center">
              <PackageSearch className="w-8 h-8 text-red-600 mr-4" />
              Visão Geral
            </h2>
            <p className="text-xl text-zinc-700 leading-relaxed">
              {data.visaoGeral}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-200">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">O que está incluso</h3>
              <ul className="space-y-4">
                {data.incluso.map((item, index) => (
                  <li key={index} className="flex items-start text-zinc-700">
                    <CheckCircle2 className="w-6 h-6 text-red-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center">
                  <Target className="w-8 h-8 text-red-600 mr-4" />
                  Indicado para
                </h3>
                <div className="flex flex-wrap gap-3">
                  {data.indicadoPara.map((item, index) => (
                    <span key={index} className="px-4 py-2 bg-zinc-100 text-zinc-800 rounded-full font-medium text-sm border border-zinc-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h3 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                  Diferencial Importante
                </h3>
                <p className="text-red-900 font-medium">
                  {data.diferencial}
                </p>
              </div>
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
