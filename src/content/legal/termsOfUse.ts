import { runtimeConfig } from "../../../config/runtime";
import { BRAND_CONTACT } from "../../shared/brand";

const company = runtimeConfig.companyName;

export const termsOfUseMeta = {
  path: "/termos-de-uso",
  title: `Termos de Uso | ${company}`,
  description:
    "Condições gerais de uso deste site, limitações de responsabilidade e propriedade intelectual em contexto institucional B2B.",
  keywords: ["termos de uso", "condições de uso", "site institucional", company],
  lastUpdated: "2026-04-18",
} as const;

export const termsOfUseSections: Array<{
  id: string;
  heading: string;
  paragraphs: string[];
}> = [
  {
    id: "objeto",
    heading: "Objeto",
    paragraphs: [
      `Estes Termos de Uso regulam o acesso e a utilização do site institucional da ${company}, incluindo páginas de apresentação comercial, conteúdos informativos e mecanismos de contato.`,
      "O uso do site implica ciência destes termos. Se não concordar, interrompa a navegação e não utilize os canais de envio de dados.",
    ],
  },
  {
    id: "escopo",
    heading: "Escopo do site e das informações",
    paragraphs: [
      "As informações publicadas têm finalidade comercial e institucional, descrevendo de forma geral produtos, serviços e posicionamento da empresa perante o mercado B2B.",
      "Conteúdos, prazos, disponibilidades e condições comerciais definitivas dependem de confirmação em proposta, pedido ou contrato formal, quando aplicável. Nada neste site constitui oferta vinculante enquanto não houver manifestação expressa da empresa nas formas usuais de negócio.",
    ],
  },
  {
    id: "uso-permitido",
    heading: "Uso permitido",
    paragraphs: [
      "É permitido acessar o site de boa-fé, para consulta institucional ou comercial, e utilizar os canais de contato para demandas legítimas relacionadas à atividade da empresa.",
      "É vedado utilizar o site para fins ilícitos, envio de conteúdo ofensivo ou fraudulento, tentativa de obstruir a operação (incluindo ataques automatizados), engenharia reversa desproporcional, coleta massiva automatizada não autorizada ou qualquer conduta que viole lei aplicável ou direitos de terceiros.",
    ],
  },
  {
    id: "limitacao-responsabilidade",
    heading: "Limitações de responsabilidade",
    paragraphs: [
      "Empregamos esforço razoável para manter informações atualizadas e o funcionamento técnico do site, mas não garantimos ausência total de erros tipográficos, indisponibilidades temporárias ou incompatibilidades pontuais com determinados dispositivos ou navegadores.",
      "Na extensão permitida pela lei aplicável, não nos responsabilizamos por danos indiretos, lucros cessantes ou perdas decorrentes exclusivamente do uso de informações genéricas publicadas no site sem validação comercial prévia.",
      "Links para sites de terceiros são oferecidos apenas por conveniência. Não controlamos nem endossamos integralmente o conteúdo externo; o acesso é por sua conta e risco.",
    ],
  },
  {
    id: "propriedade-intelectual",
    heading: "Propriedade intelectual e uso de conteúdo",
    paragraphs: [
      "Marcas, logotipos, textos, imagens, layout, combinações de elementos visuais e demais conteúdos produzidos pela empresa ou licenciados a ela estão protegidos pelas leis aplicáveis.",
      "É proibida a reprodução, distribuição ou modificação não autorizada de conteúdos do site para fins comerciais de terceiros, salvo consentimento expresso por escrito ou hipótese legal específica.",
    ],
  },
  {
    id: "canais-contato",
    heading: "Canais de contato",
    paragraphs: [
      `Dúvidas sobre estes termos ou sobre o site podem ser encaminhadas para ${BRAND_CONTACT.email}.`,
      `Telefone comercial (WhatsApp): ${BRAND_CONTACT.phoneDisplay}.`,
      `Endereço: ${BRAND_CONTACT.addressLines.join(", ")}.`,
    ],
  },
  {
    id: "alteracoes",
    heading: "Alterações destes termos",
    paragraphs: [
      "Podemos alterar estes Termos de Uso a qualquer momento, publicando a versão revisada nesta mesma rota, com indicação da data de atualização. O uso continuado do site após alterações relevantes pode ser interpretado como ciência das novas condições.",
    ],
  },
  {
    id: "lei-foro",
    heading: "Legislação aplicável e foro",
    paragraphs: [
      "Estes termos são regidos pelas leis da República Federativa do Brasil, sem considerar conflitos de leis.",
      `Fica eleito o foro da comarca de Jarinu, Estado de São Paulo, para dirimir controvérsias decorrentes do uso deste site, salvo disposição legal imperativa em contrário (por exemplo, consumidor ou microempresa em situações específicas, quando aplicável).`,
    ],
  },
];
