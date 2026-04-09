import { MapPin, Navigation, Map, Truck, BatteryCharging } from "lucide-react";

export function CoverageSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-6">
              <Map className="w-4 h-4 mr-2" />
              Área de Cobertura
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 leading-tight">
              Onde a Total Bateria atende
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mr-4 flex-shrink-0">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 mb-2">Empilhadeiras</h4>
                  <p className="text-zinc-600 leading-relaxed">
                    Atendimento ágil para empresas em um raio de até 150 km de nossa sede.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 mb-2">Baterias Tracionárias</h4>
                  <p className="text-zinc-600 leading-relaxed">
                    Cobertura em todo o estado de São Paulo, Sul de Minas Gerais e região de Resende-RJ.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-zinc-900 rounded-2xl text-white mb-5">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-red-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Sede Estratégica</h4>
                  <p className="text-zinc-400">R. Benedito Higino Machado, 79<br/>Maracanã — Jarinu/SP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <div className="flex items-center mb-3">
                <Truck className="w-5 h-5 text-red-600 mr-2" />
                <p className="font-semibold text-zinc-900">Empilhadeiras</p>
              </div>
              <p className="text-zinc-600">
                Raio técnico de até 150 km a partir da sede, com foco em manutenção preventiva e corretiva.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <div className="flex items-center mb-3">
                <BatteryCharging className="w-5 h-5 text-red-600 mr-2" />
                <p className="font-semibold text-zinc-900">Baterias Tracionárias e Lítio</p>
              </div>
              <p className="text-zinc-600">
                Cobertura em todo o estado de São Paulo, Sul de Minas Gerais e divisa com Resende-RJ.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-zinc-800">Cobertura estratégica</p>
              <p className="text-sm text-zinc-600 mt-2">
                Atendimento planejado por criticidade, SLA e janela operacional para reduzir paradas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
