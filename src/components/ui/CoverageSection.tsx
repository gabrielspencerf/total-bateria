import { MapPin, Navigation, Map } from "lucide-react";
import { InteractiveCoverageMap } from "./InteractiveCoverageMap";

export function CoverageSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-50 -skew-x-12 translate-x-32 hidden lg:block" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-6">
              <Map className="w-4 h-4 mr-2" />
              Área de Cobertura
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
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

            <img
              src="/assets/media/images/gallery/gallery-drone-planta-01.webp"
              alt="Vista aérea da estrutura de cobertura operacional"
              className="w-full rounded-2xl border border-zinc-200 shadow-sm"
              loading="lazy"
            />
          </div>
          
          <div className="lg:w-1/2 w-full">
            <InteractiveCoverageMap />
          </div>
        </div>
      </div>
    </section>
  );
}
