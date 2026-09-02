/**
 * Constantes da Plena Derma.
 * Fonte única - não duplicar em components.
 * Fonte dos dados: orientador-plena-derma.md + bio/posts do @plenaderma.
 */

export const CLINIC = {
  name: 'Plena Derma',
  shortName: 'Plena Derma',
  signature: 'Clínica de Estética Facial e Corporal',
  phone: '(61) 99588-8306',
  phoneE164: '+5561995888306',
  whatsappNumber: '5561995888306',
  address: {
    // Loja 30 conforme posts oficiais do @plenaderma. [CONFIRMAR demais lojas 20/22/34]
    street: 'CLN 309, Bloco C, Loja 30',
    neighborhood: 'Asa Norte',
    city: 'Brasília',
    state: 'DF',
    postalCode: '70755-530',
    fullLine: 'CLN 309, Bloco C, Loja 30 - Asa Norte, Brasília · DF',
  },
  hours: {
    // [CONFIRMAR horários de funcionamento antes do go-live]
    fullLine: 'Atendimento com agendamento prévio',
  },
  social: {
    instagram: 'https://www.instagram.com/plenaderma',
  },
  mapLink:
    'https://www.google.com/maps?q=CLN+309+Bloco+C+-+Asa+Norte,+Bras%C3%ADlia+-+DF,+70755-530',
} as const;

/**
 * Constrói uma URL wa.me com mensagem pré-preenchida.
 */
export function whatsappUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CLINIC.whatsappNumber}?text=${encoded}`;
}

/**
 * Mensagens padronizadas para cada CTA.
 * O prefixo "Vim do site" é o rastreador de origem no CRM - não alterar o esquema.
 */
export const WA_MESSAGES = {
  general: 'Olá! Vim do site da Plena Derma e quero agendar minha avaliação.',
  injetaveis: 'Olá! Vim do site da Plena Derma e quero agendar minha avaliação de harmonização facial.',
  corporal: 'Olá! Vim do site da Plena Derma e quero agendar minha avaliação de harmonização corporal.',
  tecnologias: 'Olá! Vim do site da Plena Derma e quero agendar minha avaliação das tecnologias da clínica.',
  pele: 'Olá! Vim do site da Plena Derma e quero agendar minha avaliação de tratamentos de pele.',
  depilacao: 'Olá! Vim do site da Plena Derma e quero agendar minha avaliação de depilação a laser.',
  ultraformer: 'Olá! Vim do site da Plena Derma e quero agendar minha avaliação de Ultraformer.',
} as const;
