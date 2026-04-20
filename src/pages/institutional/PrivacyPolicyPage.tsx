import { useSEO } from "../../hooks/useSEO";
import { privacyPolicyMeta, privacyPolicySections } from "../../content/legal/privacyPolicy";
import { LegalDocumentLayout } from "./LegalDocumentLayout";

export function PrivacyPolicyPage() {
  useSEO({
    title: privacyPolicyMeta.title,
    description: privacyPolicyMeta.description,
    keywords: [...privacyPolicyMeta.keywords],
    path: privacyPolicyMeta.path,
  });

  return (
    <LegalDocumentLayout title="Política de Privacidade" lastUpdated={privacyPolicyMeta.lastUpdated}>
      {privacyPolicySections.map((section) => (
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
