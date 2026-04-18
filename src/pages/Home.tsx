import { selectedLandingConfig } from "../content/landing";
import { LandingPageTemplate } from "../features/landing/templates/LandingPageTemplate";
import { useSEO } from "../hooks/useSEO";

export function Home() {
  useSEO({
    title: selectedLandingConfig.seo.title,
    description: selectedLandingConfig.seo.description,
    keywords: selectedLandingConfig.seo.keywords,
    path: selectedLandingConfig.seo.canonicalPath,
    ogTitle: selectedLandingConfig.seo.ogTitle,
    ogDescription: selectedLandingConfig.seo.ogDescription,
  });

  return <LandingPageTemplate config={selectedLandingConfig} />;
}
