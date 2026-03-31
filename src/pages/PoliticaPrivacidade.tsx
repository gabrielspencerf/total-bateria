import { PageTransition } from "../components/layout/PageTransition";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { useSEO } from "../hooks/useSEO";

export function PoliticaPrivacidade() {
  useSEO({
    title: "Política de Privacidade",
    description: "Entenda como a Total Bateria trata dados pessoais e corporativos no atendimento comercial.",
  });

  return (
    <PageTransition>
      <section className="bg-zinc-50 border-b border-zinc-200 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Política de Privacidade" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900">Política de Privacidade</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 text-zinc-700 leading-relaxed">
            <p>
              A Total Bateria utiliza os dados enviados no formulário de contato apenas para atendimento comercial,
              elaboração de propostas e suporte técnico solicitado pela sua empresa.
            </p>
            <p>
              Os dados não são compartilhados com terceiros sem base legal adequada. Mantemos controles internos para
              reduzir o risco de acesso indevido e retenção desnecessária de informações.
            </p>
            <p>
              Para solicitar atualização, correção ou remoção de dados, entre em contato por
              {" "}
              <a className="text-red-600 hover:text-red-700" href="mailto:adm@totalbateria.com.br">
                adm@totalbateria.com.br
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
