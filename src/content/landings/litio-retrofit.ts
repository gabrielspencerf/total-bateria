import type { LandingPageConfig } from "../../features/landing/types";
import { createWhatsAppCta, defaultLandingBadge } from "./base";

export const litioRetrofitLandingConfig: LandingPageConfig = {
  key: "litio-retrofit",
  name: "LP Lítio e Retrofit",
  seo: {
    title: "Bateria de Lítio e Retrofit de Empilhadeira | Total Bateria",
    description:
      "Atualize sua empilhadeira com bateria de lítio e retrofit técnico. Mais autonomia, menor custo e maior performance.",
    keywords: ["bateria de lítio", "retrofit de empilhadeira", "modernização de frota", "empilhadeira elétrica"],
    ogTitle: "Atualize sua empilhadeira. Reduza custos. Aumente performance.",
    ogDescription:
      "Projeto técnico sob medida para migração de chumbo-ácido para lítio com instalação, testes e validação operacional.",
    canonicalPath: "/",
  },
  hero: {
    badge: defaultLandingBadge,
    title: "Atualize sua empilhadeira.",
    highlight: "Reduza custos. Aumente performance.",
    description: "Venda de baterias de lítio e retrofit técnico para modernizar sua frota elétrica.",
    quickPoints: [
      "Mais autonomia por carga",
      "Recarga ultrarrápida",
      "Zero manutenção diária",
      "Redução de custo operacional",
      "Projeto técnico sob medida",
    ],
    visual: {
      format: "image",
      src: "/assets/landings/shared/shared-equipamentos-industriais-01-1600.webp",
      alt: "Equipamentos elétricos industriais — contexto de modernização de frota",
    },
  },
  heroActions: {
    primary: createWhatsAppCta(
      "Solicitar projeto técnico",
      "Olá! Gostaria de solicitar projeto técnico (bateria de lítio / retrofit).",
      "primary",
    ),
    secondary: createWhatsAppCta(
      "Falar com especialista",
      "Olá! Preciso falar com um especialista sobre bateria de lítio e retrofit.",
      "whatsapp",
    ),
  },
  problem: {
    architecture: "vertical",
    impactLine:
      "Cada minuto de recarga longa ou troca no turno é capacidade da frota que você deixa de usar — com custo acumulado no mês.",
    eyebrow: "O problema",
    title: "Sua empilhadeira está limitada pela bateria antiga",
    description:
      "Baterias tradicionais causam tempo alto de recarga, troca no turno, infraestrutura complexa e custo oculto ao longo dos anos. Enquanto isso, a tecnologia já evoluiu.",
    items: [
      "Tempo alto de recarga",
      "Troca de bateria no meio do turno",
      "Sala de carregamento complexa",
      "Manutenção constante",
      "Queda de desempenho",
      "Custo oculto ao longo dos anos",
    ],
    supportPanel: {
      title: "Sinais no piso",
      items: [
        { label: "Capacidade da frota", value: "Recarga longa e troca no turno roubam throughput" },
        { label: "Infraestrutura", value: "Sala de carga e processos mais complexos" },
        { label: "TCO", value: "Custo oculto acumula ao longo dos anos" },
      ],
    },
  },
  solution: {
    architecture: "pillars",
    eyebrow: "A solução",
    title: "Modernização com bateria de lítio + retrofit técnico",
    description: "Não é apenas trocar bateria. É atualizar sua frota.",
    items: [
      "Venda de bateria de lítio industrial",
      "Conversão técnica da empilhadeira",
      "Adequação elétrica",
      "Instalação profissional",
      "Ajuste de carregadores",
      "Configuração e testes",
      "Treinamento operacional",
    ],
  },
  benefits: {
    eyebrow: "Benefícios do lítio",
    title: "Por que migrar para bateria de lítio?",
    figure: {
      src: "/assets/landings/shared/shared-operacao-logistica-02-1600.webp",
      alt: "Operação logística em múltiplos turnos com frota elétrica",
    },
    items: [
      "Recarga até 3x mais rápida",
      "Possibilidade de carga de oportunidade",
      "Vida útil superior",
      "Redução de custo total no longo prazo",
      "Zero troca de bateria no turno",
      "Menor necessidade de espaço",
      "Mais segurança operacional",
      "Monitoramento inteligente (dependendo do modelo)",
    ],
  },
  services: {
    eyebrow: "Retrofit de empilhadeiras",
    title: "Transforme sua empilhadeira atual em uma versão mais eficiente",
    description: "Retrofit inclui diagnóstico, adequação e validação para desempenho elevado com segurança operacional.",
    cards: [
      {
        title: "Retrofit de empilhadeiras",
        microDescription: "Conversão técnica com compatibilidade elétrica, ajustes de performance e segurança de integração.",
        items: [
          "Adequação elétrica",
          "Ajuste de compatibilidade",
          "Reprogramação se necessário",
          "Otimização de performance",
          "Análise estrutural",
          "Instalação de sistema compatível",
        ],
        highlights: [
          "Mais torque",
          "Melhor resposta",
          "Maior autonomia",
          "Redução de custo por ciclo",
        ],
        ctaLabel: "Solicitar projeto técnico",
        imageSrc: "/assets/landings/shared/shared-galpao-operacao-01-1600.webp",
        imageAlt: "Operação industrial em galpão — contexto para modernização de frota",
      },
      {
        title: "Implementação de bateria de lítio",
        microDescription: "Seleção do banco, carregamento e integração com a operação — com treinamento da equipe no piso.",
        items: [
          "Seleção técnica do banco de baterias",
          "Configuração de carregamento",
          "Integração com operação",
          "Treinamento de equipe",
        ],
        highlights: [
          "Recarga rápida",
          "Mais autonomia",
          "Menor manutenção diária",
          "Melhor eficiência energética",
        ],
        ctaLabel: "Solicitar estudo de migração",
        imageSrc: "/assets/landings/shared/shared-centro-distribuicao-01-1600.webp",
        imageAlt: "Centro de distribuição em operação — contexto para integração de bateria de lítio na frota",
      },
      {
        title: "Validação de resultado",
        microDescription: "Testes em condição real, critérios de aceite e ajustes finos antes da operação assumir o equipamento.",
        items: [
          "Testes em operação",
          "Ajustes finos de desempenho",
          "Critérios de aceite",
          "Entrega operacional assistida",
        ],
        highlights: [
          "Validação em condição real de uso",
          "Critérios de aceite alinhados à operação",
          "Ajustes finos antes da entrega",
          "Suporte na entrada em produção",
        ],
        ctaLabel: "Falar com especialista",
        imageSrc: "/assets/landings/shared/shared-equipamentos-industriais-01-1600.webp",
        imageAlt: "Equipamentos em operação — contexto para validação e aceite técnico no piso",
      },
    ],
  },
  postServiceWidgets: [
    {
      type: "statBand",
      eyebrow: "Parâmetros do projeto",
      items: [
        { label: "Atendimento", value: "Somente CNPJ (B2B)" },
        { label: "Viabilidade", value: "Avaliação técnica por modelo" },
        { label: "Entrega", value: "Instalação + testes + suporte" },
      ],
    },
    {
      type: "imageInsight",
      src: "/assets/landings/shared/shared-equipamentos-industriais-01-1600.webp",
      alt: "Equipamentos elétricos em ambiente industrial",
      caption:
        "Modernização não é estética: é compatibilidade elétrica, recarga correta e validação com a equipe que opera o equipamento todos os dias.",
    },
  ],
  comparison: {
    eyebrow: "Comparativo visual",
    title: "Chumbo-Ácido vs Lítio",
    leftLabel: "Tradicional",
    rightLabel: "Lítio",
    rows: [
      { label: "Troca de bateria", leftValue: "Troca de bateria", rightValue: "Não precisa trocar" },
      { label: "Recarga", leftValue: "Recarga longa", rightValue: "Recarga rápida" },
      { label: "Manutenção", leftValue: "Manutenção frequente", rightValue: "Baixa manutenção" },
      { label: "Infraestrutura", leftValue: "Sala exclusiva", rightValue: "Pode carregar no equipamento" },
      { label: "Vida útil", leftValue: "Vida útil menor", rightValue: "Vida útil maior" },
    ],
  },
  process: {
    eyebrow: "Processo",
    title: "Como funciona o projeto",
    steps: [
      "Avaliação técnica da sua operação",
      "Estudo de viabilidade",
      "Proposta personalizada",
      "Aprovação",
      "Instalação técnica",
      "Testes e validação",
      "Entrega operacional",
    ],
  },
  differentials: {
    architecture: "iconCards",
    featuredCount: 1,
    title: "Por que escolher a TOTAL BATERIA & EQUIPAMENTOS?",
    items: [
      "Projeto técnico sob medida",
      "Venda de bateria de lítio industrial",
      "Conversão técnica da empilhadeira",
      "Instalação profissional",
      "Configuração e testes",
      "Treinamento operacional",
    ],
  },
  audience: {
    eyebrow: "Para quem é indicado",
    title: "Operações com alta exigência de produtividade",
    groups: [
      {
        label: "Ritmo e turno",
        items: ["Empresas com operação em múltiplos turnos", "Operações com alta demanda diária"],
      },
      {
        label: "Eficiência e modernização",
        items: ["Empresas que querem reduzir custo energético", "Empresas que querem modernizar frota"],
      },
      { label: "Alta produtividade em CD", items: ["CDs com necessidade de alta produtividade"] },
    ],
    items: [
      "Empresas com operação em múltiplos turnos",
      "Operações com alta demanda diária",
      "Empresas que querem reduzir custo energético",
      "Empresas que querem modernizar frota",
      "CDs com necessidade de alta produtividade",
    ],
  },
  authority: {
    eyebrow: "Bloco estratégico (autoridade)",
    title: "Modernizar é mais barato do que substituir a frota",
    description:
      "Muitas empresas trocam empilhadeira quando o problema está na bateria. Com retrofit, você mantém estrutura, atualiza tecnologia, reduz investimento e aumenta performance.",
    pullQuote: "Retrofit preserva estrutura, atualiza tecnologia e reduz investimento frente à troca total da frota.",
  },
  faq: {
    presentation: "accordion",
    title: "Perguntas frequentes",
    items: [
      {
        question: "Vale a pena financeiramente?",
        answer:
          "Na maioria dos casos, sim. O retorno ocorre na redução de custo operacional e aumento de produtividade.",
      },
      {
        question: "Serve para qualquer empilhadeira?",
        answer: "Depende do modelo. Realizamos avaliação técnica.",
      },
      {
        question: "Quanto tempo leva a instalação?",
        answer: "Após aprovação, o prazo é definido conforme projeto.",
      },
    ],
  },
  finalCta: {
    layout: "command",
    title: "Solicite um estudo técnico para migração para lítio",
    description: "Receba direcionamento técnico e comercial para avaliar viabilidade e ganhos da migração.",
    primary: createWhatsAppCta(
      "Receber estudo técnico",
      "Olá! Gostaria de receber estudo técnico para migração para bateria de lítio / retrofit.",
      "primary",
    ),
    betweenButtonsHint: "Quer falar direto com especialista?",
    secondary: createWhatsAppCta(
      "Falar no WhatsApp",
      "Olá! Quero falar direto com um especialista em lítio e retrofit.",
      "whatsapp",
    ),
  },
};
