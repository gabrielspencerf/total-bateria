export const runtimeMediaPolicy = {
  allowedImageFormats: [".webp", ".jpg", ".jpeg", ".png"] as const,
  allowedVideoFormats: [".mp4"] as const,
  imageQualityTarget: "webp com boa nitidez para conteúdo principal",
  videoCodecTarget: "H.264/AAC em MP4 para máxima compatibilidade",
} as const;

export const heroBackgroundVideos = [
  "/assets/media/videos/reels/institucional-ambiente-loop-01.mp4",
  "/assets/media/videos/reels/drone-aereo-loop-01.mp4",
  "/assets/media/videos/reels/operacao-tecnica-loop-01.mp4",
] as const;

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
