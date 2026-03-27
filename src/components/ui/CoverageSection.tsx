import { MapPin, Navigation, Map } from "lucide-react";

export function CoverageSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-zinc-50 -skew-x-12 translate-x-32 hidden lg:block" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
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
            
            <div className="p-6 bg-zinc-900 rounded-2xl text-white">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-red-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-2 text-lg">Sede Estratégica</h4>
                  <p className="text-zinc-400">R. Benedito Higino Machado, 79<br/>Maracanã — Jarinu/SP</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200/50 border border-zinc-100 group">
              <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              <div className="aspect-square lg:aspect-[4/3] bg-zinc-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.708899882903!2d-46.7262016!3d-23.0116667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceb70000000001%3A0x1234567890abcdef!2sJarinu%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de localização Total Bateria"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
