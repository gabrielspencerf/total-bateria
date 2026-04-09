import { useSEO } from "../hooks/useSEO";
import { PageTransition } from "../components/layout/PageTransition";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { ContactForm } from "../components/ui/ContactForm";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { CTASection } from "../components/ui/CTASection";
import { contatoData } from "../data/contato";
import { CheckCircle2, Mail, MapPin } from "lucide-react";
import { FadeIn } from "../components/ui/FadeIn";

export function Contato() {
  useSEO({
    title: "Contato e Orçamento",
    description: "Solicite um orçamento técnico para sua empresa. Atendimento rápido para manutenção, locação e venda de baterias e empilhadeiras."
  });

  return (
    <PageTransition>
      <div className="bg-zinc-50 py-12 border-b border-zinc-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="max-w-4xl mx-auto text-center">
              <Breadcrumb items={[{ label: "Contato / Orçamento" }]} />
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                {contatoData.header.title}
              </h1>
              <p className="text-xl text-zinc-600 mb-8">
                {contatoData.header.subtitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {contatoData.header.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-center text-zinc-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form Column */}
            <div className="lg:w-2/3">
              <FadeIn direction="left">
                <ContactForm />
              </FadeIn>
            </div>

            {/* Info Column */}
            <div className="lg:w-1/3 space-y-12">
              <FadeIn direction="right">
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-6">
                  <p className="text-zinc-700">
                    Fale com nosso time para avaliação técnica e orientação rápida para sua operação.
                  </p>
                </div>
              </FadeIn>

              {/* WhatsApp Block */}
              <FadeIn direction="right" delay={0.1}>
                <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-200">
                  <h3 className="text-xl font-bold text-zinc-900 mb-6">{contatoData.contactInfo.title}</h3>
                  <WhatsAppButton 
                    number="11933312768" 
                    text={contatoData.contactInfo.whatsapp.button}
                    className="w-full mb-4"
                  />
                  <p className="text-sm text-zinc-600 text-center">
                    {contatoData.contactInfo.whatsapp.text}<br/>
                    <strong>{contatoData.contactInfo.whatsapp.number}</strong>
                  </p>
                </div>
              </FadeIn>

              {/* Other Contacts */}
              <div className="space-y-6">
                <FadeIn direction="right" delay={0.2}>
                  <div className="flex items-center p-4 bg-white border border-zinc-200 rounded-lg">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 font-medium">E-mail corporativo</p>
                      <a href={`mailto:${contatoData.contactInfo.email}`} className="text-zinc-900 font-bold hover:text-red-600 transition-colors">
                        {contatoData.contactInfo.email}
                      </a>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn direction="right" delay={0.3}>
                  <div className="flex items-start p-4 bg-white border border-zinc-200 rounded-lg">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 font-medium mb-1">Endereço (Sede Própria)</p>
                      <p className="text-zinc-900 font-medium">
                        {contatoData.contactInfo.address.street}<br/>
                        {contatoData.contactInfo.address.city}<br/>
                        {contatoData.contactInfo.address.zip}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Security Block */}
              <FadeIn direction="right" delay={0.4}>
                <div className="bg-zinc-900 text-white p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-6">{contatoData.security.title}</h3>
                  <ul className="space-y-4">
                    {contatoData.security.proofs.map((proof, index) => (
                      <li key={index} className="flex items-center text-zinc-300">
                        <CheckCircle2 className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                        {proof}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <FadeIn direction="up">
        <section className="w-full bg-zinc-100 border-y border-zinc-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="rounded-2xl bg-white border border-zinc-200 p-8 md:p-12 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">Como chegar</h2>
              <p className="text-zinc-600 mb-6">{contatoData.contactInfo.mapText}</p>
              <a
                href={contatoData.contactInfo.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-md bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors"
              >
                Abrir rota no Google Maps
              </a>
            </div>
          </div>
        </section>
      </FadeIn>
    </PageTransition>
  );
}
