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
            <Breadcrumb items={[{ label: "Contato / Orçamento" }]} />
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                {contatoData.header.title}
              </h1>
              <p className="text-xl text-zinc-600 mb-8">
                {contatoData.header.subtitle}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Form Column */}
            <div className="lg:w-2/3">
              <FadeIn direction="left">
                <ContactForm />
              </FadeIn>
            </div>

            {/* Info Column */}
            <div className="lg:w-1/3 space-y-12">
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
        <section className="h-[400px] w-full relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.708899882903!2d-46.7262016!3d-23.0116667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceb70000000001%3A0x1234567890abcdef!2sJarinu%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de localização Total Bateria"
          ></iframe>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg border border-zinc-200 text-sm font-medium text-zinc-800 whitespace-nowrap">
            {contatoData.contactInfo.mapText}
          </div>
        </section>
      </FadeIn>
    </PageTransition>
  );
}
