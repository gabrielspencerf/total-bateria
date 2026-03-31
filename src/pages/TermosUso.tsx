import { PageTransition } from "../components/layout/PageTransition";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { useSEO } from "../hooks/useSEO";

export function TermosUso() {
  useSEO({
    title: "Termos de Uso",
    description: "Condições de uso do site da Total Bateria para visitantes e empresas atendidas.",
  });

  return (
    <PageTransition>
      <section className="bg-zinc-50 border-b border-zinc-200 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Termos de Uso" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900">Termos de Uso</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 text-zinc-700 leading-relaxed">
            <p>
              O conteúdo deste site possui finalidade informativa e comercial, com foco em soluções corporativas de
              baterias e empilhadeiras. O envio de formulário não garante contratação automática de serviços.
            </p>
            <p>
              As informações técnicas e comerciais podem ser atualizadas sem aviso prévio para refletir disponibilidade,
              escopo de atendimento e melhorias internas.
            </p>
            <p>
              Em caso de dúvidas, entre em contato por
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
