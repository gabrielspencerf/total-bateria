import { useSEO } from "../../hooks/useSEO";
import { termsOfUseMeta, termsOfUseSections } from "../../content/legal/termsOfUse";
import { LegalDocumentLayout } from "./LegalDocumentLayout";

export function TermsOfUsePage() {
  useSEO({
    title: termsOfUseMeta.title,
    description: termsOfUseMeta.description,
    keywords: [...termsOfUseMeta.keywords],
    path: termsOfUseMeta.path,
  });

  return (
    <LegalDocumentLayout title="Termos de Uso" lastUpdated={termsOfUseMeta.lastUpdated}>
      <p className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700">
        Estes termos tratam do uso do site. Para condições de fornecimento de produtos ou serviços, aplicam-se instrumentos próprios de
        proposta, pedido ou contrato, quando existentes.
      </p>
      {termsOfUseSections.map((section) => (
        <section key={section.id} id={section.id} aria-labelledby={`heading-${section.id}`}>
          <h2 id={`heading-${section.id}`}>{section.heading}</h2>
          {section.paragraphs.map((p, i) => (
            <p key={`${section.id}-${i}`}>{p}</p>
          ))}
        </section>
      ))}
    </LegalDocumentLayout>
  );
}
