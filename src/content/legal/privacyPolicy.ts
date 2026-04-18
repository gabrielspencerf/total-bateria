import { runtimeConfig } from "../../../config/runtime";
import { BRAND_CONTACT } from "../../shared/brand";

const company = runtimeConfig.companyName;

export const privacyPolicyMeta = {
  path: "/politica-de-privacidade",
  title: `Política de Privacidade | ${company}`,
  description:
    "Como a empresa trata dados pessoais e informações fornecidas em canais de contato e navegação neste site, em contexto B2B.",
  keywords: ["privacidade", "proteção de dados", "LGPD", "contato B2B", company],
  lastUpdated: "2026-04-18",
} as const;

export const privacyPolicySections: Array<{
  id: string;
  heading: string;
  paragraphs: string[];
}> = [
  {
    id: "introducao",
    heading: "Introdução",
    paragraphs: [
      `Esta Política de Privacidade descreve, em linguagem clara e institucional, como a ${company} (“nós”) pode tratar dados pessoais e informações relacionadas ao uso deste site e aos canais de contato disponibilizados para relacionamento comercial (B2B).`,
      "O site tem caráter institucional e comercial. Esta política não substitui contratos, propostas formais nem assessoria jurídica. Em caso de divergência com instrumento específico assinado entre as partes, prevalece o instrumento contratual.",
    ],
  },
  {
    id: "dados-coletados",
    heading: "Dados que podem ser coletados",
    paragraphs: [
      "Dados fornecidos voluntariamente por você ou pela sua empresa ao solicitar contato ou informações, por exemplo: nome, cargo, razão social, número de CNPJ (quando informado), telefone comercial, endereço de e-mail corporativo e o conteúdo das mensagens enviadas (incluindo por formulários, e-mail ou aplicativos de mensageria, quando utilizados).",
      "Dados técnicos gerados automaticamente em navegação, conforme configuração do ambiente de hospedagem e ferramentas eventualmente utilizadas: endereço IP, tipo de navegador, páginas acessadas, data e hora de acesso, identificadores de dispositivo em formato agregado ou técnico.",
    ],
  },
  {
    id: "finalidades",
    heading: "Finalidades do uso",
    paragraphs: [
      "Responder a solicitações de contato e apresentar informações comerciais e técnicas alinhadas ao perfil B2B.",
      "Manter comunicação necessária à relação comercial, inclusive retorno por canais indicados por você.",
      "Cumprir obrigações legais e regulatórias aplicáveis, bem como exercer defesa em processos administrativos ou judiciais, quando necessário.",
      "Melhorar a segurança, o desempenho e a usabilidade do site, inclusive mediante análises estatísticas agregadas, quando houver base legal aplicável e proporcionalidade.",
    ],
  },
  {
    id: "compartilhamento",
    heading: "Compartilhamento de dados",
    paragraphs: [
      "Não vendemos listas de contatos nem dados pessoais. O compartilhamento limita-se ao necessário para operar o site, prestar atendimento ou cumprir determinação legal.",
      "Podem receber dados prestadores de serviço de infraestrutura (hospedagem, DNS, proteção contra abuso), sempre sob obrigações de confidencialidade e finalidade específica, na medida do razoavelmente necessário.",
      "Quando você utiliza links para redes sociais, WhatsApp ou outros serviços de terceiros, passa a reger-se também às políticas desses provedores. Recomendamos a leitura dos termos aplicáveis antes do envio de dados sensíveis por esses canais.",
    ],
  },
  {
    id: "cookies",
    heading: "Cookies e tecnologias semelhantes",
    paragraphs: [
      "Este site pode utilizar cookies ou tecnologias equivalentes para funcionalidades essenciais, preferências de sessão ou métricas de uso, conforme implementação vigente a cada momento.",
      "Você pode gerenciar ou bloquear cookies nas configurações do seu navegador. Bloqueios podem afetar parte da experiência de navegação.",
    ],
  },
  {
    id: "armazenamento-seguranca",
    heading: "Armazenamento e segurança",
    paragraphs: [
      "Adotamos medidas técnicas e organizacionais compatíveis com a natureza da operação, visando proteger dados contra acessos não autorizados, perda acidental ou destruição indevida.",
      "Nenhum ambiente digital é absolutamente invulnerável. Caso identifiquemos incidente relevante que afete seus dados, buscaremos agir com diligência razoável, inclusive notificando autoridades ou titulares quando houver obrigação legal aplicável.",
      "Os dados são mantidos pelo tempo necessário às finalidades descritas ou pelo prazo exigido em lei, o que for maior, salvo anonimização ou eliminação quando cabível e solicitada de forma legítima.",
    ],
  },
  {
    id: "direitos",
    heading: "Direitos do titular",
    paragraphs: [
      "Dependendo da hipótese e da legislação aplicável (incluindo a Lei Geral de Proteção de Dados Pessoais — LGPD, quando pertinente), você poderá solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade (quando aplicável), eliminação de dados desnecessários ou excessivos, informação sobre compartilhamentos e outras medidas previstas em lei.",
      "Para exercer direitos ou esclarecer dúvidas sobre tratamento de dados, utilize o canal indicado na seção “Contato” abaixo. Poderemos solicitar informações mínimas para confirmar sua identidade antes de atender certas solicitações.",
    ],
  },
  {
    id: "contato",
    heading: "Contato para solicitações",
    paragraphs: [
      `E-mail: ${BRAND_CONTACT.email}`,
      `Endereço físico para correspondência: ${BRAND_CONTACT.addressLines.join(", ")}.`,
      `Telefone comercial (WhatsApp): ${BRAND_CONTACT.phoneDisplay} — utilizado preferencialmente para atendimento comercial B2B; solicitações formais sobre privacidade devem preferencialmente ser encaminhadas por e-mail para registro.`,
    ],
  },
  {
    id: "atualizacao",
    heading: "Atualização desta política",
    paragraphs: [
      "Podemos revisar esta política periodicamente para refletir mudanças operacionais, legais ou de produto. A data da última atualização será indicada no final desta página. Recomendamos revisitar este documento ao utilizar novamente o site.",
    ],
  },
];
