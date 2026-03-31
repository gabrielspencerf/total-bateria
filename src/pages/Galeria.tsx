import { useSEO } from "../hooks/useSEO";
import { PageTransition } from "../components/layout/PageTransition";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { FadeIn } from "../components/ui/FadeIn";
import { IndustrialGallery } from "../components/ui/IndustrialGallery";

export function Galeria() {
  useSEO({
    title: "Mídia",
    description:
      "Veja a galeria de fotos e vídeos da estrutura, equipe e operação da Total Bateria em contexto industrial.",
  });

  return (
    <PageTransition>
      <div className="bg-zinc-950 text-white py-16 border-b border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <Breadcrumb items={[{ label: "Mídia" }]} />
            <div className="max-w-3xl mt-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-5">Mídia da operação</h1>
              <p className="text-lg md:text-xl text-zinc-300">
                Um espaço dedicado para fotos e vídeos da rotina técnica, estrutura e cobertura operacional.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      <IndustrialGallery />
    </PageTransition>
  );
}
