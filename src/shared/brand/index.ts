import { runtimeConfig } from "../../../config/runtime";

export const BRAND_ASSETS = {
  logos: {
    color: "/assets/brand/Total-Bateria-s-txt-colorido.png",
    black: "/assets/brand/Total-Bateria-s-txt-preto.png",
    white: "/assets/brand/Total-Bateria-s-txt-branco.png",
  },
  seoDefault: "/assets/seo-default.svg",
} as const;

export const BRAND_CONTACT = {
  phoneDisplay: runtimeConfig.whatsappNumber,
  phoneDigits: runtimeConfig.whatsappNumber,
  email: "adm@totalbateria.com.br",
  addressLines: ["R. Benedito Higino Machado, 79", "Maracanã - Jarinu/SP", "CEP: 13246-102"],
} as const;

export const BRAND_IDENTITY = {
  companyName: runtimeConfig.companyName,
  tradingName: "TOTAL BATERIA & EQUIPAMENTOS",
  businessTagline: "Soluções técnicas para operações logísticas e industriais",
  serviceFocus: "Atendimento exclusivo para empresas (B2B).",
} as const;

export function buildWhatsAppLink(number: string = BRAND_CONTACT.phoneDigits, text?: string) {
  const base = `https://wa.me/55${number.replace(/\D/g, "")}`;
  const trimmed = text?.trim();
  if (!trimmed) return base;
  return `${base}?text=${encodeURIComponent(trimmed)}`;
}
