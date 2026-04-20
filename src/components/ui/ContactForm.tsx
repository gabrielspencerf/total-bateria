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
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-2xl font-black text-green-800">Solicitação enviada!</h3>
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
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md">
      <div className="bg-zinc-900 p-8 text-white">
        <h3 className="mb-2 text-2xl font-black">{contatoData.form.title}</h3>
        <p className="text-zinc-400">{contatoData.form.subtitle}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="p-8 space-y-6">
        {submitError && (
          <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {submitError}
          </div>
        )}

        <div className="space-y-4">
          <h4 className="border-b border-zinc-200 pb-2 text-lg font-bold text-zinc-900">Informações da empresa</h4>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="empresa" className="tb-form-label">Nome da empresa *</label>
              <input type="text" id="empresa" name="empresa" required disabled={isSubmitting} className="tb-form-field" />
            </div>
            <div>
              <label htmlFor="cnpj" className="tb-form-label">CNPJ</label>
              <input type="text" id="cnpj" name="cnpj" disabled={isSubmitting} className="tb-form-field" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="nome" className="tb-form-label">Nome do responsável *</label>
              <input type="text" id="nome" name="nome" required disabled={isSubmitting} className="tb-form-field" />
            </div>
            <div>
              <label htmlFor="cargo" className="tb-form-label">Cargo</label>
              <input type="text" id="cargo" name="cargo" placeholder="Ex: Compras, Manutenção..." disabled={isSubmitting} className="tb-form-field" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="tb-form-label">E-mail corporativo *</label>
              <input type="email" id="email" name="email" required disabled={isSubmitting} className="tb-form-field" />
            </div>
            <div>
              <label htmlFor="whatsapp" className="tb-form-label">WhatsApp *</label>
              <input type="tel" id="whatsapp" name="whatsapp" required disabled={isSubmitting} className="tb-form-field" />
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <h4 className="border-b border-zinc-200 pb-2 text-lg font-bold text-zinc-900">Sobre a necessidade</h4>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="servico" className="tb-form-label">Tipo de serviço *</label>
              <select id="servico" name="servico" required disabled={isSubmitting} className="tb-form-field bg-white">
                <option value="">Selecione...</option>
                {contatoData.form.serviceOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="urgencia" className="tb-form-label">Urgência</label>
              <select id="urgencia" name="urgencia" disabled={isSubmitting} className="tb-form-field bg-white">
                <option value="">Selecione...</option>
                {contatoData.form.urgencyOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label htmlFor="quantidade" className="tb-form-label">Qtd. equipamentos</label>
              <input type="number" id="quantidade" name="quantidade" min="1" disabled={isSubmitting} className="tb-form-field" />
            </div>
            <div>
              <label htmlFor="marca" className="tb-form-label">Marca/modelo</label>
              <input type="text" id="marca" name="marca" disabled={isSubmitting} className="tb-form-field" />
            </div>
            <div>
              <label htmlFor="cidade" className="tb-form-label">Cidade/UF *</label>
              <input type="text" id="cidade" name="cidade" required disabled={isSubmitting} className="tb-form-field" />
            </div>
          </div>

          <div>
            <label htmlFor="mensagem" className="tb-form-label">Descreva sua necessidade ou problema</label>
            <textarea id="mensagem" name="mensagem" rows={4} disabled={isSubmitting} className="tb-form-field min-h-[8rem] resize-y" />
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
