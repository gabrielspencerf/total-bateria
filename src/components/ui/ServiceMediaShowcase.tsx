type ServiceKey =
  | "baterias-tracionarias"
  | "baterias-de-litio"
  | "empilhadeiras"
  | "locacao"
  | "pecas"
  | "treinamentos";

interface ServiceMediaShowcaseProps {
  serviceKey: ServiceKey;
}

const mediaByService: Record<
  ServiceKey,
  { title: string; imageA: string; imageB: string; video: string; poster: string }
> = {
  "baterias-tracionarias": {
    title: "Operação e manutenção de baterias tracionárias",
    imageA: "/assets/media/images/gallery/gallery-bancada-operacao-03.webp",
    imageB: "/assets/media/images/gallery/gallery-bancada-operacao-04.webp",
    video: "/assets/media/videos/home/home-bateria-inspecao-tecnica-03.mp4",
    poster: "/assets/media/posters/home-bateria-inspecao-tecnica-03.jpg",
  },
  "baterias-de-litio": {
    title: "Tecnologia de energia com alta disponibilidade",
    imageA: "/assets/media/images/gallery/gallery-bancada-operacao-05.webp",
    imageB: "/assets/media/images/gallery/gallery-drone-planta-01.webp",
    video: "/assets/media/videos/home/home-bateria-analise-celulas-02.mp4",
    poster: "/assets/media/posters/home-bateria-analise-celulas-02.jpg",
  },
  empilhadeiras: {
    title: "Atendimento de campo e suporte à movimentação",
    imageA: "/assets/media/images/cases/cases-operacao-empilhadeira-bateria-01.webp",
    imageB: "/assets/media/images/gallery/gallery-drone-fachada-02.webp",
    video: "/assets/media/videos/reels/operacao-tecnica-loop-01.mp4",
    poster: "/assets/media/posters/reels/operacao-tecnica-loop-01.jpg",
  },
  locacao: {
    title: "Operação contínua com equipamentos disponíveis",
    imageA: "/assets/media/images/gallery/gallery-drone-planta-02.webp",
    imageB: "/assets/media/images/gallery/gallery-drone-area-03.webp",
    video: "/assets/media/videos/reels/institucional-ambiente-loop-01.mp4",
    poster: "/assets/media/posters/reels/institucional-ambiente-loop-01.jpg",
  },
  pecas: {
    title: "Componentes e suporte técnico especializado",
    imageA: "/assets/media/images/gallery/gallery-bancada-operacao-03.webp",
    imageB: "/assets/media/images/gallery/gallery-drone-fachada-01.webp",
    video: "/assets/media/videos/reels/drone-aereo-loop-01.mp4",
    poster: "/assets/media/posters/reels/drone-aereo-loop-01.jpg",
  },
  treinamentos: {
    title: "Equipe preparada para segurança e produtividade",
    imageA: "/assets/media/images/gallery/gallery-bancada-operacao-05.webp",
    imageB: "/assets/media/images/gallery/gallery-drone-area-03.webp",
    video: "/assets/media/videos/sobre/sobre-solda-reparo-estrutura-01.mp4",
    poster: "/assets/media/posters/sobre-solda-reparo-estrutura-01.jpg",
  },
};

export function ServiceMediaShowcase({ serviceKey }: ServiceMediaShowcaseProps) {
  const media = mediaByService[serviceKey];

  return (
    <section className="py-10 bg-zinc-50 border-y border-zinc-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">{media.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img
            src={media.imageA}
            alt={media.title}
            className="h-56 w-full rounded-xl border border-zinc-200 object-cover"
            loading="lazy"
          />
          <img
            src={media.imageB}
            alt={media.title}
            className="h-56 w-full rounded-xl border border-zinc-200 object-cover"
            loading="lazy"
          />
          <video
            className="h-56 w-full rounded-xl border border-zinc-200 object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={media.poster}
          >
            <source src={media.video} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
