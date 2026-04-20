export const runtimeMediaPolicy = {
  allowedImageFormats: [".webp", ".jpg", ".jpeg", ".png"] as const,
  allowedVideoFormats: [".webm", ".mp4"] as const,
  imageQualityTarget: "webp com boa nitidez para conteúdo principal",
  videoCodecTarget: "VP9/Opus em WebM quando disponível; H.264/AAC em MP4 como fallback",
} as const;

/** Vídeos legados listados para produção; o hero carrega apenas o primeiro (performance + LCP). */
export const heroBackgroundVideos = [
  "/assets/media/videos/reels/institucional-ambiente-loop-01.mp4",
  "/assets/media/videos/reels/drone-aereo-loop-01.mp4",
  "/assets/media/videos/reels/operacao-tecnica-loop-01.mp4",
] as const;

/** Único MP4 de fundo do hero institucional (sem carrossel). */
export const heroBackgroundVideoPrimary = heroBackgroundVideos[0];

/**
 * WebM opcional (mesmo loop que o MP4, menor bitrate típico).
 * Coloque o arquivo em `public/` e defina o path aqui. `null` = sem asset versionado neste repo.
 */
export const heroBackgroundVideoWebmPrimary: string | null = null;

export const homeServiceMedia = {
  "baterias-tracionarias": {
    mediaSrc: "/assets/media/images/home/home-bateria-bancada-tecnica-02.webp",
    mediaAlt: "Bancada técnica de manutenção de baterias tracionárias",
  },
  "baterias-de-litio": {
    mediaSrc: "/assets/media/images/cases/cases-manutencao-celulas-02.webp",
    mediaAlt: "Bateria de lítio em contexto operacional",
  },
  empilhadeiras: {
    mediaSrc: "/assets/media/images/cases/cases-operacao-empilhadeira-bateria-01.webp",
    mediaAlt: "Operação e suporte técnico em empilhadeiras",
  },
  "locacao-de-equipamentos": {
    mediaSrc: "/assets/media/images/gallery/gallery-bancada-operacao-05.webp",
    mediaAlt: "Estrutura operacional para locação de equipamentos",
  },
  "pecas-e-acessorios": {
    mediaSrc: "/assets/media/images/gallery/gallery-drone-fachada-02.webp",
    mediaAlt: "Área técnica para preparação e fornecimento de peças e acessórios",
  },
  "treinamentos-e-seguranca": {
    mediaSrc: "/assets/media/posters/reels/institucional-ambiente-loop-01.jpg",
    mediaAlt: "Equipe técnica em contexto de orientação e atendimento operacional",
  },
} as const;
