import {
  AlertCircle,
  ArrowRightCircle,
  BookOpen,
  PackageSearch,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Target,
  TrendingUp,
  Wrench,
  Zap,
} from "lucide-react";
import type { ServicePageConfig } from "../components/ui/ServicePageTemplate";
import { servicosData } from "./servicos";

const bateriasTracionarias = servicosData.bateriasTracionarias;
const bateriasLitio = servicosData.bateriasLitio;
const empilhadeiras = servicosData.empilhadeiras;
const locacao = servicosData.locacao;
const pecas = servicosData.pecas;
const treinamentos = servicosData.treinamentos;

export const servicePageConfigs: Record<string, ServicePageConfig> = {
  bateriasTracionarias: {
    title: bateriasTracionarias.title,
    subtitle: bateriasTracionarias.subtitle,
    breadcrumbLabel: "Baterias Tracionárias",
    heroButtonText: bateriasTracionarias.cta,
    intro: {
      title: "O que fazemos",
      text: bateriasTracionarias.oQueFazemos,
      icon: Wrench,
    },
    rows: [
      [
        {
          type: "list-card",
          title: "Serviços Oferecidos",
          items: bateriasTracionarias.servicos,
        },
        {
          type: "list-card",
          title: "Diferenciais Técnicos",
          items: bateriasTracionarias.diferenciais,
        },
      ],
      [
        {
          type: "list-card",
          title: "Garantias",
          icon: ShieldCheck,
          items: bateriasTracionarias.garantias,
        },
        {
          type: "chips",
          title: "Para quem é indicado",
          icon: Target,
          items: bateriasTracionarias.indicadoPara,
        },
      ],
    ],
    finalCta: bateriasTracionarias.ctaFinal,
  },
  bateriasLitio: {
    title: bateriasLitio.title,
    subtitle: bateriasLitio.subtitle,
    breadcrumbLabel: "Baterias de Lítio",
    heroButtonText: bateriasLitio.cta,
    intro: {
      title: "Visão Geral",
      text: bateriasLitio.visaoGeral,
      icon: Zap,
    },
    rows: [
      [
        {
          type: "list-card",
          title: "Principais Benefícios",
          items: bateriasLitio.beneficios,
        },
        {
          type: "list-plain",
          title: "Nossos Serviços em Lítio",
          icon: Settings,
          items: bateriasLitio.servicos,
        },
      ],
      [
        {
          type: "chips",
          title: "Quando vale a pena migrar",
          icon: ArrowRightCircle,
          items: bateriasLitio.quandoMigrar,
        },
        {
          type: "highlight",
          title: "Decisão técnica",
          icon: Target,
          text: "A migração deve considerar ciclo operacional, janela de recarga e custo total no médio prazo.",
        },
      ],
    ],
    finalCta: bateriasLitio.ctaFinal,
  },
  empilhadeiras: {
    title: empilhadeiras.title,
    subtitle: empilhadeiras.subtitle,
    breadcrumbLabel: "Empilhadeiras",
    heroButtonText: empilhadeiras.cta,
    intro: {
      title: "O que fazemos",
      text: empilhadeiras.oQueFazemos,
      icon: Wrench,
    },
    rows: [
      [
        {
          type: "list-card",
          title: "Serviços",
          icon: Settings,
          items: empilhadeiras.servicos,
        },
        {
          type: "list-card",
          title: "Diferenciais",
          icon: ShieldCheck,
          items: empilhadeiras.diferenciais,
        },
        {
          type: "list-card",
          title: "Benefícios para o cliente",
          icon: TrendingUp,
          items: empilhadeiras.beneficios,
        },
      ],
    ],
    finalCta: empilhadeiras.ctaFinal,
  },
  locacao: {
    title: locacao.title,
    subtitle: locacao.subtitle,
    breadcrumbLabel: "Locação de Equipamentos",
    heroButtonText: locacao.cta,
    intro: {
      title: "Visão Geral",
      text: locacao.visaoGeral,
      icon: PackageSearch,
    },
    rows: [
      [
        {
          type: "list-card",
          title: "O que está incluso",
          items: locacao.incluso,
        },
        {
          type: "chips",
          title: "Indicado para",
          icon: Target,
          items: locacao.indicadoPara,
        },
      ],
      [
        {
          type: "highlight",
          title: "Diferencial Importante",
          icon: AlertCircle,
          text: locacao.diferencial,
        },
        {
          type: "list-card",
          title: "Condições ideais de uso",
          icon: ShieldCheck,
          items: [
            "Operações com variação de demanda",
            "Necessidade de previsibilidade de custos",
            "Frotas em expansão por projeto",
          ],
        },
      ],
    ],
    finalCta: locacao.ctaFinal,
  },
  pecas: {
    title: pecas.title,
    subtitle: pecas.subtitle,
    breadcrumbLabel: "Peças e Acessórios",
    heroButtonText: pecas.ctaFinal.button,
    rows: [
      [
        {
          type: "list-card",
          title: "O que fornecemos",
          icon: Settings,
          items: pecas.fornecemos,
        },
        {
          type: "list-card",
          title: "Diferenciais",
          icon: ShieldCheck,
          items: pecas.diferenciais,
        },
      ],
    ],
    finalCta: pecas.ctaFinal,
  },
  treinamentos: {
    title: treinamentos.title,
    subtitle: treinamentos.subtitle,
    breadcrumbLabel: "Treinamentos e Segurança",
    heroButtonText: treinamentos.ctaFinal.button,
    intro: {
      title: "Descrição",
      text: treinamentos.descricao,
      icon: ShieldAlert,
    },
    rows: [
      [
        {
          type: "list-card",
          title: "O que inclui",
          icon: BookOpen,
          items: treinamentos.inclui,
        },
        {
          type: "list-card",
          title: "Benefícios",
          icon: TrendingUp,
          items: treinamentos.beneficios,
        },
      ],
    ],
    finalCta: treinamentos.ctaFinal,
  },
};
