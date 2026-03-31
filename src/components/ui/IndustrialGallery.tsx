interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
  featured?: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    type: "video",
    src: "/assets/media/videos/reels/drone-aereo-loop-01.mp4",
    poster: "/assets/media/posters/reels/drone-aereo-loop-01.jpg",
    alt: "Visão aérea da estrutura industrial e cobertura operacional",
    featured: true,
  },
  {
    id: "g-2",
    type: "image",
    src: "/assets/media/images/gallery/gallery-drone-fachada-01.webp",
    alt: "Fachada e área externa da operação",
  },
  {
    id: "g-3",
    type: "image",
    src: "/assets/media/images/gallery/gallery-bancada-operacao-04.webp",
    alt: "Bancada técnica com processo de manutenção",
  },
  {
    id: "g-4",
    type: "video",
    src: "/assets/media/videos/reels/operacao-tecnica-loop-01.mp4",
    poster: "/assets/media/posters/reels/operacao-tecnica-loop-01.jpg",
    alt: "Rotina operacional e técnica em loop contínuo",
  },
  {
    id: "g-5",
    type: "image",
    src: "/assets/media/images/gallery/gallery-drone-planta-02.webp",
    alt: "Panorama aéreo da planta industrial",
  },
];

export function IndustrialGallery() {
  return (
    <section className="py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-300 mb-4">
            Galeria operacional
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Estrutura, equipe e operação em campo</h2>
          <p className="text-zinc-300">
            Uma visão real da rotina técnica da Total Bateria, com foco em confiabilidade, método e execução industrial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 ${
                item.featured ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {item.type === "video" ? (
                <video
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={item.poster}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-sm sm:text-base font-medium text-zinc-100">{item.alt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
