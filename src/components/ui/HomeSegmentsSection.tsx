import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { Factory, Warehouse, Truck, Boxes, HardHat, Building2 } from "lucide-react";

const segmentItems = [
  { label: "Indústrias", icon: <Factory className="w-5 h-5" /> },
  { label: "Centros de Distribuição", icon: <Warehouse className="w-5 h-5" /> },
  { label: "Logística", icon: <Truck className="w-5 h-5" /> },
  { label: "Atacado e Varejo", icon: <Boxes className="w-5 h-5" /> },
  { label: "Construção", icon: <HardHat className="w-5 h-5" /> },
  { label: "Operações industriais diversas", icon: <Building2 className="w-5 h-5" /> },
];

export function HomeSegmentsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="lp-container">
        <FadeIn direction="up">
          <SectionHeading
            title="Segmentos atendidos com rotina de operação crítica"
            subtitle="Estruturamos atendimento por tipo de demanda, urgência e impacto na produtividade."
            centered
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {segmentItems.map((item, index) => (
              <FadeIn key={item.label} delay={index * 0.05} direction="up">
                <div className="lp-card-muted flex h-full items-start gap-3 p-5">
                  <span className="mt-0.5 text-red-600">{item.icon}</span>
                  <p className="font-semibold text-zinc-900">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn direction="left" delay={0.1}>
            <div className="rounded-2xl border border-zinc-200 h-full bg-zinc-950 text-zinc-200 p-6 min-h-[240px] flex flex-col justify-center">
              <p className="font-semibold text-white mb-2">Atendimento orientado por prioridade operacional</p>
              <p className="text-sm">
                Diagnóstico ágil, janela de manutenção definida e execução com mínimo impacto na rotina.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
