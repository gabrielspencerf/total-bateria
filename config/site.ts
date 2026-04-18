import { runtimeConfig } from "./runtime";
import { selectedLandingConfig } from "../src/content/landing";
import { privacyPolicyMeta } from "../src/content/legal/privacyPolicy";
import { termsOfUseMeta } from "../src/content/legal/termsOfUse";

export const SITE_CONFIG = {
  name: runtimeConfig.companyName,
  legalName: runtimeConfig.companyName,
  baseUrl: runtimeConfig.siteUrl,
  defaultTitle: selectedLandingConfig.seo.title,
  defaultDescription: selectedLandingConfig.seo.description,
  defaultImage: "/assets/seo-default.svg",
  locale: "pt_BR",
  themeColor: "#dc2626",
  contact: {
    phone: runtimeConfig.whatsappNumber,
    email: "adm@totalbateria.com.br",
  },
} as const;

export interface SiteRouteSeo {
  path: string;
  title: string;
  description: string;
  keywords: string[];
}

export const SITE_ROUTES: SiteRouteSeo[] = [
  {
    path: selectedLandingConfig.seo.canonicalPath,
    title: selectedLandingConfig.seo.title,
    description: selectedLandingConfig.seo.description,
    keywords: selectedLandingConfig.seo.keywords,
  },
  {
    path: privacyPolicyMeta.path,
    title: privacyPolicyMeta.title,
    description: privacyPolicyMeta.description,
    keywords: [...privacyPolicyMeta.keywords],
  },
  {
    path: termsOfUseMeta.path,
    title: termsOfUseMeta.title,
    description: termsOfUseMeta.description,
    keywords: [...termsOfUseMeta.keywords],
  },
  {
    path: "/institucional",
    title: `Institucional | ${runtimeConfig.companyName}`,
    description: "Base institucional e direcionamento para landing e atendimento B2B.",
    keywords: ["institucional", runtimeConfig.companyName, "B2B"],
  },
];
