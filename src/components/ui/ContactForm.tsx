import { useState } from "react";
import { Button } from "./Button";
import { contatoData } from "../../data/contato";

interface ContactFormPayload {
  empresa: string;
  cnpj: string;
  nome: string;
  cargo: string;
  email: string;
  whatsapp: string;
  servico: string;
  urgencia: string;
  quantidade: string;
  marca: string;
  cidade: string;
  mensagem: string;
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const parseField = (formData: FormData, field: keyof ContactFormPayload) => {
    const value = formData.get(field);
    return typeof value === "string" ? value.trim() : "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(e.currentTarget);
    const data: ContactFormPayload = {
      empresa: parseField(formData, "empresa"),
      cnpj: parseField(formData, "cnpj"),
      nome: parseField(formData, "nome"),
      cargo: parseField(formData, "cargo"),
      email: parseField(formData, "email"),
      whatsapp: parseField(formData, "whatsapp"),
      servico: parseField(formData, "servico"),
      urgencia: parseField(formData, "urgencia"),
      quantidade: parseField(formData, "quantidade"),
      marca: parseField(formData, "marca"),
      cidade: parseField(formData, "cidade"),
      mensagem: parseField(formData, "mensagem"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const payload = (await response.json().catch(() => null)) as { message?: string } | null;
        setSubmitError(payload?.message ?? "Não foi possível enviar sua solicitação agora. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSubmitError("Falha de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Solicitação enviada!</h3>
        <p className="text-green-700">
          Recebemos seus dados com sucesso. Nossa equipe comercial entrará em contato em breve.
        </p>
        <Button 
          variant="outline" 
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Enviar nova solicitação
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-zinc-200 overflow-hidden">
      <div className="p-8 bg-zinc-900 text-white">
        <h3 className="text-2xl font-bold mb-2">{contatoData.form.title}</h3>
        <p className="text-zinc-400">{contatoData.form.subtitle}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        {submitError && (
          <div role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {submitError}
          </div>
        )}

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-zinc-900 border-b pb-2">Informações da empresa</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="empresa" className="block text-sm font-medium text-zinc-700 mb-1">Nome da empresa *</label>
              <input type="text" id="empresa" name="empresa" required className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label htmlFor="cnpj" className="block text-sm font-medium text-zinc-700 mb-1">CNPJ</label>
              <input type="text" id="cnpj" name="cnpj" className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-zinc-700 mb-1">Nome do responsável *</label>
              <input type="text" id="nome" name="nome" required className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label htmlFor="cargo" className="block text-sm font-medium text-zinc-700 mb-1">Cargo</label>
              <input type="text" id="cargo" name="cargo" placeholder="Ex: Compras, Manutenção..." className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">E-mail corporativo *</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium text-zinc-700 mb-1">WhatsApp *</label>
              <input type="tel" id="whatsapp" name="whatsapp" required className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" />
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <h4 className="text-lg font-semibold text-zinc-900 border-b pb-2">Sobre a necessidade</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="servico" className="block text-sm font-medium text-zinc-700 mb-1">Tipo de serviço *</label>
              <select id="servico" name="servico" required className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all bg-white">
                <option value="">Selecione...</option>
                {contatoData.form.serviceOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="urgencia" className="block text-sm font-medium text-zinc-700 mb-1">Urgência</label>
              <select id="urgencia" name="urgencia" className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all bg-white">
                <option value="">Selecione...</option>
                {contatoData.form.urgencyOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="quantidade" className="block text-sm font-medium text-zinc-700 mb-1">Qtd. equipamentos</label>
              <input type="number" id="quantidade" name="quantidade" min="1" className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label htmlFor="marca" className="block text-sm font-medium text-zinc-700 mb-1">Marca/modelo</label>
              <input type="text" id="marca" name="marca" className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label htmlFor="cidade" className="block text-sm font-medium text-zinc-700 mb-1">Cidade/UF *</label>
              <input type="text" id="cidade" name="cidade" required className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all" />
            </div>
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-zinc-700 mb-1">Descreva sua necessidade ou problema</label>
            <textarea id="mensagem" name="mensagem" rows={4} className="w-full px-4 py-2 border border-zinc-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all resize-none"></textarea>
          </div>
        </div>

        <div className="pt-4">
          <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
            {isSubmitting ? "Enviando..." : "ENVIAR SOLICITAÇÃO"}
          </Button>
          <p className="text-center text-sm text-zinc-500 mt-4">
            Atendemos exclusivamente empresas (CNPJ).
          </p>
        </div>
      </form>
    </div>
  );
}
