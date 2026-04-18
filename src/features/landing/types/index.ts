import type { ButtonProps } from "../../../shared/ui";

export interface LandingSeoConfig {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  canonicalPath: string;
}

export type LandingHeroVisual =
  | { format: "image"; src: string; alt: string }
  | {
      format: "video";
      /** Preferência WebM (VP9), menor em geral; MP4 como fallback. */
      webmSrc: string;
      mp4Src: string;
      poster: string;
      /** Rótulo acessível (vídeo é decorativo; conteúdo crítico permanece no texto). */
      alt: string;
    };

export interface LandingHeroConfig {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  quickPoints: string[];
  visual: LandingHeroVisual;
}

export interface LandingListSectionConfig {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
}

/** Família visual A — impacto / problema (Etapa 4). */
export type LandingProblemArchitecture = "strip" | "matrix" | "timeline" | "vertical";

/** Painel auxiliar ao lado do problema (desktop): leitura econômica / operacional — sem métricas inventadas. */
export interface LandingProblemSupportPanel {
  title: string;
  items: Array<{ label: string; value: string }>;
  footnote?: string;
}

export interface LandingProblemConfig extends LandingListSectionConfig {
  architecture?: LandingProblemArchitecture;
  /** Faixa curta de impacto (custo / parada) acima da lista — modo `vertical` recomendado. */
  impactLine?: string;
  /** Complemento editorial no desktop (ex.: sinais já declarados na narrativa da LP). */
  supportPanel?: LandingProblemSupportPanel;
}

/** Família visual B — solução / operação (Etapa 4). */
export type LandingSolutionArchitecture = "pillars" | "asymmetric" | "rail";

export interface LandingSolutionConfig extends LandingListSectionConfig {
  architecture?: LandingSolutionArchitecture;
  /** Coluna auxiliar no modo `rail` (desktop): uma frase da própria narrativa, sem conteúdo novo no JSX. */
  railAside?: string;
}

export type LandingServiceCardArchitecture = "standard" | "editorial" | "split" | "compact";

export interface LandingServiceCardConfig {
  title: string;
  items: string[];
  highlights: string[];
  ctaLabel: string;
  /** Uma linha editorial curta (carrossel de serviços). */
  microDescription?: string;
  /** Imagem opcional de apoio (prova visual / contexto operacional). */
  imageSrc?: string;
  imageAlt?: string;
  /** Legado: a seção de serviços usa carrossel unificado; campo ignorado no render atual. */
  architecture?: LandingServiceCardArchitecture;
}

export interface LandingAudienceConfig {
  eyebrow: string;
  title: string;
  description?: string;
  /** Agrupamento opcional para diagramação (cards por linha em vez de nuvem de tags). */
  groups?: Array<{ label: string; items: string[] }>;
  items: string[];
}

export interface LandingSocialProofConfig {
  title: string;
  description: string;
  stats: string[];
  testimonials: Array<{
    role: string;
    text: string;
    rating: number;
  }>;
}

export interface LandingAuthorityConfig {
  eyebrow: string;
  title: string;
  description: string;
  /** Figura opcional ao lado do texto (autoridade / contexto). */
  figure?: { src: string; alt: string };
  /** Destaque curto reutilizando narrativa já aprovada (ex.: dado do próprio parágrafo). */
  pullQuote?: string;
}

export type LandingFaqPresentation = "accordion" | "grid";

export interface LandingFaqConfig {
  title: string;
  /** Padrão Etapa 4: `accordion` (menos “vitrine de cards”). */
  presentation?: LandingFaqPresentation;
  items: Array<{
    question: string;
    answer: string;
  }>;
}

export interface LandingCallToAction {
  label: string;
  href: string;
  variant?: ButtonProps["variant"];
}

export interface LandingHeroActions {
  primary: LandingCallToAction;
  secondary?: LandingCallToAction;
}

export interface LandingFinalCtaConfig {
  title: string;
  description: string;
  primary: LandingCallToAction;
  secondary?: LandingCallToAction;
  /** Texto curto entre o CTA principal e o botão secundário (ex.: convite ao WhatsApp). */
  betweenButtonsHint?: string;
  /** `command` = faixa mais seca, hierarquia comercial concentrada. */
  layout?: "focal" | "command";
}

export interface LandingBenefitsConfig {
  eyebrow: string;
  title: string;
  description?: string;
  items: string[];
  /** Imagem opcional de apoio (ex.: operação real). */
  figure?: { src: string; alt: string };
}

export interface LandingComparisonConfig {
  eyebrow: string;
  title: string;
  description?: string;
  leftLabel: string;
  rightLabel: string;
  rows: Array<{
    label: string;
    leftValue: string;
    rightValue: string;
  }>;
}

export interface LandingProcessConfig {
  eyebrow: string;
  title: string;
  description?: string;
  steps: string[];
}

export interface LandingCoverageConfig {
  eyebrow: string;
  title: string;
  description?: string;
  items: string[];
}

/** Widgets leves após o carrossel de serviços (narrativa / respiro). Sem dados inventados. */
export type LandingPostServiceWidget =
  | { type: "techStrip"; text: string }
  | { type: "statBand"; eyebrow?: string; items: Array<{ label: string; value: string }> }
  | { type: "processMini"; title?: string; steps: string[] }
  | { type: "imageInsight"; src: string; alt: string; caption: string };

export interface LandingDifferentialsConfig {
  title: string;
  /**
   * `iconCards` — cards industriais com ícone + hover discreto (padrão).
   * `rails` — lista densa sem grade.
   * `cards` — alias de `iconCards` (compat.).
   */
  architecture?: "rails" | "iconCards" | "cards";
  /** Destaque visual nos primeiros N itens (1–2). */
  featuredCount?: 0 | 1 | 2;
  items: string[];
}

export interface LandingPageConfig {
  key: string;
  name: string;
  seo: LandingSeoConfig;
  hero: LandingHeroConfig;
  heroActions: LandingHeroActions;
  problem: LandingProblemConfig;
  solution: LandingSolutionConfig;
  services: {
    eyebrow: string;
    title: string;
    description: string;
    cards: LandingServiceCardConfig[];
  };
  /** 0–2 widgets narrativos logo após serviços (antes dos diferenciais). */
  postServiceWidgets?: LandingPostServiceWidget[];
  differentials: LandingDifferentialsConfig;
  audience: LandingAudienceConfig;
  authority: LandingAuthorityConfig;
  faq: LandingFaqConfig;
  finalCta: LandingFinalCtaConfig;
  socialProof?: LandingSocialProofConfig;
  benefits?: LandingBenefitsConfig;
  comparison?: LandingComparisonConfig;
  process?: LandingProcessConfig;
  coverage?: LandingCoverageConfig;
}
