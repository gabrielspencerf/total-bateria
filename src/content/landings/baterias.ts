import type { LandingPageConfig } from "../../features/landing/types";
import { createWhatsAppCta, defaultLandingBadge } from "./base";

export const bateriasLandingConfig: LandingPageConfig = {
  key: "baterias",
  name: "LP Baterias",
  seo: {
    title: "Manutenção, Locação e Venda de Bateria | Total Bateria",
    description:
      "Bateria fraca não avisa. Ela simplesmente para sua operação. Manutenção, locação e venda de baterias industriais para empilhadeiras e equipamentos elétricos.",
    keywords: ["bateria industrial", "baterias tracionárias", "locação de baterias", "manutenção de bateria"],
    ogTitle: "Bateria fraca não avisa. Ela simplesmente para sua operação.",
    ogDescription:
      "Diagnóstico técnico, locação emergencial e planos de manutenção para baterias industriais em empilhadeiras.",
    canonicalPath: "/",
  },
  hero: {
    badge: defaultLandingBadge,
    title: "Bateria fraca não avisa.",
    highlight: "Ela simplesmente para sua operação.",
    description:
      "Manutenção, locação e venda de baterias industriais para empilhadeiras e equipamentos elétricos.",
    quickPoints: [
      "Atendimento exclusivo para empresas",
      "Diagnóstico técnico especializado",
      "Locação emergencial",
      "Planos de manutenção preventiva",
    ],
    visual: {
      format: "image",
      src: "/assets/landings/shared/shared-galpao-operacao-01-1600.webp",
      alt: "Operação logística em galpão industrial com equipamentos em uso",
    },
  },
  heroActions: {
    primary: createWhatsAppCta(
      "Solicitar diagnóstico",
      "Olá! Gostaria de solicitar diagnóstico técnico de baterias industriais.",
      "primary",
    ),
    secondary: createWhatsAppCta(
      "Falar com especialista",
      "Olá! Preciso falar com um especialista sobre baterias industriais.",
      "whatsapp",
    ),
  },
  problem: {
    architecture: "vertical",
    impactLine:
      "Quando a tracionária perde performance, a operação paga em turno inteiro, trocas antecipadas e risco de parada no meio do pico.",
    eyebrow: "A dor do mercado",
    title: "A bateria é o coração da sua empilhadeira",
    description:
      "Quando ela falha, você perde produtividade, turnos completos, prazo de entrega, segurança e dinheiro. Grande parte das empresas só troca bateria quando já perdeu desempenho. Isso custa mais caro do que parece.",
    items: ["Produtividade", "Turnos completos", "Prazo de entrega", "Segurança", "Dinheiro"],
    supportPanel: {
      title: "Leitura de impacto",
      items: [
        { label: "Gestão preventiva (referência)", value: "até 30% no ciclo de vida da bateria" },
        { label: "Modo de atendimento", value: "100% B2B (CNPJ)" },
        { label: "Âmbito técnico", value: "Tracionárias e frota elétrica industrial" },
      ],
      footnote: "Referência alinhada ao bloco Autoridade desta página.",
    },
  },
  solution: {
    architecture: "asymmetric",
    eyebrow: "Nossa solução",
    title: "Gestão completa de baterias industriais",
    description: "Nosso foco não é vender bateria. É manter sua operação ativa.",
    items: [
      "Manutenção preventiva",
      "Manutenção corretiva",
      "Recuperação de baterias",
      "Locação emergencial",
      "Venda de baterias novas",
      "Avaliação técnica da vida útil",
    ],
  },
  services: {
    eyebrow: "Serviços detalhados",
    title: "Manutenção, locação e venda de baterias industriais",
    description: "A TOTAL BATERIA & EQUIPAMENTOS cobre manutenção, contingência e aquisição conforme a necessidade real da operação.",
    cards: [
      {
        title: "Manutenção de Baterias",
        microDescription: "Leitura técnica de células, densidade e conexões — plano alinhado ao ciclo real de descarga.",
        items: [
          "Equalização de carga",
          "Teste de densidade",
          "Verificação de células",
          "Limpeza técnica",
          "Inspeção de cabos e conectores",
          "Análise de desempenho",
          "Identificação de perda de capacidade",
        ],
        highlights: [
          "Aumento da vida útil",
          "Redução de troca prematura",
          "Melhor desempenho da empilhadeira",
          "Economia operacional",
        ],
        ctaLabel: "Agendar avaliação técnica",
        imageSrc: "/assets/landings/shared/shared-centro-distribuicao-01-1600.webp",
        imageAlt: "Centro de distribuição com operação de frota elétrica",
      },
      {
        title: "Locação de Baterias",
        microDescription: "Contingência para manutenção programada, pico de demanda ou falha — sem congelar capital.",
        items: [
          "Bateria em manutenção",
          "Picos operacionais",
          "Operações sazonais",
          "Substituição emergencial",
        ],
        highlights: [
          "Sem parada de operação",
          "Equipamentos revisados",
          "Agilidade na substituição",
          "Alternativa sem imobilização de capital",
        ],
        ctaLabel: "Solicitar bateria emergencial",
        imageSrc: "/assets/landings/shared/shared-galpao-operacao-01-1600.webp",
        imageAlt: "Galpão industrial com operação contínua — contexto para locação e contingência",
      },
      {
        title: "Venda de Baterias Industriais",
        microDescription: "Dimensionamento consultivo: capacidade, perfil de uso e ambiente — sem super nem subdimensionar.",
        items: [
          "Baterias tracionárias",
          "Modelos sob medida",
          "Dimensionamento técnico",
          "Suporte na escolha ideal",
          "Orientação de uso correto",
        ],
        highlights: [
          "Vendemos conforme a necessidade da sua operação",
          "Não superdimensionamos",
          "Não subdimensionamos",
        ],
        ctaLabel: "Receber cotação técnica",
        imageSrc: "/assets/landings/shared/shared-equipamentos-industriais-01-1600.webp",
        imageAlt: "Equipamentos elétricos industriais — contexto para escolha consultiva de bateria",
      },
    ],
  },
  postServiceWidgets: [
    {
      type: "techStrip",
      text: "Bateria industrial: densidade, carga, conectores e uso real definem o plano — não o catálogo genérico.",
    },
  ],
  differentials: {
    architecture: "iconCards",
    featuredCount: 2,
    title: "Por que escolher a TOTAL BATERIA & EQUIPAMENTOS?",
    items: [
      "Especialistas em bateria industrial",
      "Atendimento 100% B2B",
      "Agilidade operacional",
      "Estoque estratégico",
      "Suporte técnico consultivo",
      "Atendimento regional rápido",
      "Transparência técnica",
    ],
  },
  audience: {
    eyebrow: "Quem atendemos",
    title: "Atendimento exclusivo para CNPJ",
    groups: [
      {
        label: "Operações físicas e logística",
        items: ["Centros de distribuição", "Armazéns", "Operadores logísticos"],
      },
      { label: "Indústria e abastecimento", items: ["Indústrias", "Atacadistas"] },
      { label: "Frota e mobilidade elétrica", items: ["Empresas com frota elétrica"] },
    ],
    items: [
      "Centros de distribuição",
      "Indústrias",
      "Operadores logísticos",
      "Atacadistas",
      "Empresas com frota elétrica",
      "Armazéns",
    ],
  },
  authority: {
    eyebrow: "Bloco estratégico (autoridade)",
    title: "Bateria não é despesa. É ativo operacional.",
    description:
      "Empresas que fazem gestão preventiva economizam até 30% no ciclo de vida da bateria. Gestão técnica reduz troca prematura, perda de carga, danos estruturais e acidentes.",
    pullQuote: "Gestão preventiva pode representar até 30% de economia no ciclo de vida da bateria.",
    figure: {
      src: "/assets/landings/shared/shared-equipamentos-industriais-01-1600.webp",
      alt: "Equipamentos industriais em ambiente de operação B2B",
    },
  },
  faq: {
    presentation: "accordion",
    title: "Perguntas frequentes",
    items: [
      { question: "Atendem emergência?", answer: "Sim, conforme disponibilidade de estoque." },
      { question: "Fazem contrato mensal?", answer: "Sim, planos recorrentes disponíveis." },
      {
        question: "Vocês dimensionam bateria para minha frota?",
        answer: "Sim, fazemos avaliação técnica personalizada.",
      },
    ],
  },
  finalCta: {
    layout: "focal",
    title: "Solicite um diagnóstico técnico da sua bateria",
    description: "Nosso time retorna com orientação técnica e comercial para sua operação.",
    primary: createWhatsAppCta(
      "Receber contato técnico",
      "Olá! Gostaria de receber contato técnico sobre diagnóstico de baterias industriais.",
      "primary",
    ),
    betweenButtonsHint: "Precisa resolver agora?",
    secondary: createWhatsAppCta(
      "Falar no WhatsApp",
      "Olá! Preciso resolver demanda de baterias com urgência.",
      "whatsapp",
    ),
  },
};
