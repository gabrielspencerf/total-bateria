import type { LandingPageConfig } from "../../features/landing/types";
import { createWhatsAppCta, defaultLandingBadge } from "./base";

export const empilhadeirasLandingConfig: LandingPageConfig = {
  key: "empilhadeiras",
  name: "LP Empilhadeiras",
  seo: {
    title: "Manutenção, Locação e Venda de Empilhadeira | Total Bateria",
    description:
      "Empilhadeira parada custa dinheiro. Manutenção, locação e venda de empilhadeiras para empresas que não podem parar.",
    keywords: ["manutenção de empilhadeira", "locação de empilhadeiras", "venda de empilhadeiras", "empilhadeira b2b"],
    ogTitle: "Empilhadeira parada custa dinheiro. Nós colocamos sua operação para rodar.",
    ogDescription:
      "Atendimento técnico especializado em manutenção, locação e venda de empilhadeiras com foco em continuidade operacional.",
    canonicalPath: "/",
  },
  hero: {
    badge: defaultLandingBadge,
    title: "Empilhadeira parada custa dinheiro.",
    highlight: "Nós colocamos sua operação para rodar.",
    description: "Manutenção, locação e venda de empilhadeiras para empresas que não podem parar.",
    quickPoints: [
      "Atendimento técnico especializado",
      "Peças e reposição rápida",
      "Planos sob medida para sua frota",
      "Atendimento 100% B2B",
    ],
    visual: {
      format: "video",
      webmSrc: "/assets/landings/empilhadeiras/video/hero-empilhadeiras-operacao-1280.webm",
      mp4Src: "/assets/landings/empilhadeiras/video/hero-empilhadeiras-operacao-1280.mp4",
      poster: "/assets/landings/empilhadeiras/video/hero-empilhadeiras-operacao-poster-1280.webp",
      alt: "Empilhadeira em operação em ambiente industrial — trecho em vídeo otimizado",
    },
  },
  heroActions: {
    primary: createWhatsAppCta(
      "Solicitar orçamento",
      "Olá! Gostaria de solicitar orçamento (manutenção, locação ou venda de empilhadeiras).",
      "primary",
    ),
    secondary: createWhatsAppCta(
      "Falar com especialista no WhatsApp",
      "Olá! Preciso falar com um especialista sobre empilhadeiras.",
      "whatsapp",
    ),
  },
  problem: {
    architecture: "vertical",
    impactLine: "Parada de equipamento vira custo direto, atraso de entrega e risco de segurança. Sem plano técnico, o problema escala.",
    eyebrow: "Problema",
    title: "Sua operação não pode depender de improviso",
    description:
      "Empilhadeira parada gera atraso na logística e outros impactos. Sem acompanhamento técnico, o custo aparece depois.",
    items: [
      "Atraso na logística",
      "Equipe ociosa",
      "Multa por atraso",
      "Prejuízo operacional",
      "Risco de acidente por manutenção mal feita",
    ],
    supportPanel: {
      title: "Onde o custo aparece",
      items: [
        { label: "Disponibilidade", value: "Parada vira atraso e custo direto" },
        { label: "Segurança", value: "Manutenção mal feita eleva risco operacional" },
        { label: "Previsibilidade", value: "Sem plano técnico, o custo surge depois" },
      ],
    },
  },
  solution: {
    architecture: "rail",
    eyebrow: "Solução",
    title: "A TOTAL BATERIA & EQUIPAMENTOS resolve isso para você",
    description: "Nós não vendemos produto. Entregamos continuidade operacional.",
    railAside: "Nós não vendemos produto. Entregamos continuidade operacional — diagnóstico, intervenção e frota ativa.",
    items: [
      "Manutenção preventiva",
      "Manutenção corretiva",
      "Locação emergencial",
      "Venda de empilhadeiras revisadas",
      "Venda de equipamentos novos",
      "Gestão técnica de frota",
    ],
  },
  services: {
    eyebrow: "Serviços detalhados",
    title: "Manutenção, locação e venda de empilhadeiras",
    description: "Diagnóstico, contingência e aquisição alinhados à necessidade real da sua operação.",
    cards: [
      {
        title: "Manutenção de Empilhadeiras",
        microDescription: "Diagnóstico, intervenção e peças alinhados à disponibilidade real da sua frota.",
        items: [
          "Diagnóstico técnico completo",
          "Manutenção preventiva programada",
          "Manutenção corretiva emergencial",
          "Revisão elétrica",
          "Revisão mecânica",
          "Sistema hidráulico",
          "Freios e direção",
          "Troca de peças e componentes",
        ],
        highlights: [
          "Redução de parada inesperada",
          "Maior vida útil do equipamento",
          "Previsibilidade de custo",
          "Segurança operacional",
        ],
        ctaLabel: "Solicitar diagnóstico técnico",
        imageSrc: "/assets/landings/empilhadeiras/empilhadeira-servico-manutencao-1600.webp",
        imageAlt: "Atendimento técnico em manutenção de empilhadeira",
      },
      {
        title: "Locação de Empilhadeiras",
        microDescription: "Contingência para pico, substituição ou emergência — sem travar capital em ativo ocioso.",
        items: [
          "Demanda sazonal",
          "Pico de produção",
          "Substituição temporária",
          "Emergências",
          "Expansão rápida",
          "Modelos elétricos e combustão disponíveis",
        ],
        highlights: [
          "Sem imobilizar capital",
          "Manutenção inclusa (opcional)",
          "Equipamentos revisados",
          "Flexibilidade contratual",
        ],
        ctaLabel: "Solicitar cotação de locação",
        imageSrc: "/assets/landings/empilhadeiras/empilhadeira-operacao-tecnica-1600.webp",
        imageAlt: "Empilhadeira em operação em ambiente industrial",
      },
      {
        title: "Venda de Empilhadeiras",
        microDescription: "Indicação técnica do equipamento certo para o perfil de carga, turno e piso da operação.",
        items: [
          "Equipamentos revisados",
          "Equipamentos novos sob encomenda",
          "Avaliação técnica personalizada",
          "Orientação conforme necessidade da operação",
        ],
        highlights: [
          "Não vendemos o que você quer",
          "Indicamos o que sua operação precisa",
          "Avaliação técnica personalizada",
          "Orientação conforme necessidade da operação",
        ],
        ctaLabel: "Falar com consultor técnico",
        imageSrc: "/assets/landings/empilhadeiras/empilhadeira-frota-ambiente-1600.webp",
        imageAlt: "Empilhadeira em operação em ambiente industrial — contexto visual para venda e indicação técnica",
      },
    ],
  },
  postServiceWidgets: [
    {
      type: "processMini",
      title: "Fluxo operacional típico",
      steps: ["Diagnóstico no pátio ou CD", "Proposta técnica e prazo", "Execução com peças homologadas", "Validação com equipe de manutenção"],
    },
  ],
  differentials: {
    architecture: "iconCards",
    featuredCount: 1,
    title: "Por que escolher a TOTAL BATERIA & EQUIPAMENTOS?",
    items: [
      "Atendimento técnico especializado",
      "Foco exclusivo em empresas",
      "Agilidade no atendimento",
      "Equipe experiente",
      "Suporte consultivo",
      "Atendimento regional rápido",
      "Transparência técnica",
    ],
  },
  audience: {
    eyebrow: "Quem atendemos",
    title: "Operações que não podem parar",
    groups: [
      { label: "Logística e CD", items: ["Centros de distribuição", "Operadores logísticos", "E-commerce com CD próprio"] },
      { label: "Produção e abastecimento", items: ["Indústrias", "Atacadistas"] },
      { label: "Transporte", items: ["Empresas de transporte"] },
    ],
    items: [
      "Centros de distribuição",
      "Indústrias",
      "Operadores logísticos",
      "Empresas de transporte",
      "Atacadistas",
      "E-commerce com CD próprio",
    ],
  },
  authority: {
    eyebrow: "Autoridade",
    title: "Sua frota é um ativo estratégico",
    description:
      "Empilhadeira não é custo. É ferramenta de produção. Empresas que tratam manutenção como estratégia economizam no longo prazo.",
    pullQuote: "Manutenção tratada como estratégia reduz custo no longo prazo.",
    figure: {
      src: "/assets/landings/empilhadeiras/empilhadeira-frota-ambiente-1600.webp",
      alt: "Frota de empilhadeiras em pátio industrial",
    },
  },
  faq: {
    presentation: "accordion",
    title: "Perguntas frequentes",
    items: [
      { question: "Vocês atendem urgência?", answer: "Sim. Atendimento emergencial sob disponibilidade." },
      { question: "Atendem apenas empresas?", answer: "Sim. Atendimento exclusivo para CNPJ." },
      { question: "Trabalham com contrato mensal?", answer: "Sim. Temos planos recorrentes." },
      { question: "Atendem quais regiões?", answer: "(Definir região de atuação)" },
    ],
  },
  finalCta: {
    layout: "command",
    title: "Solicite um orçamento técnico",
    description: "Fale com nosso time e receba orientação para manutenção, locação ou compra.",
    primary: createWhatsAppCta(
      "Receber contato técnico",
      "Olá! Gostaria de receber contato técnico para orçamento (empilhadeiras).",
      "primary",
    ),
    betweenButtonsHint: "Se preferir atendimento imediato:",
    secondary: createWhatsAppCta(
      "Falar no WhatsApp",
      "Olá! Quero atendimento imediato sobre empilhadeiras.",
      "whatsapp",
    ),
  },
};
