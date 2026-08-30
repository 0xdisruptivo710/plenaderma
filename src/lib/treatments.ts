/**
 * Fonte única das 5 frentes de cuidado da Plena Derma.
 * Alimenta o índice da Home, o footer e as subpáginas dedicadas.
 * Regras de copy: sem preço, sem promessa de resultado, sem travessão.
 */

export interface IncludedItem {
  name: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Treatment {
  slug: string;
  name: string;
  navLabel: string;
  tag: string;
  waKey: 'injetaveis' | 'ultraformer' | 'lasers' | 'corporal' | 'depilacao';
  indexDesc: string;
  indexImage: string;
  heroTitle: string;
  heroLead: string;
  heroVideo?: string;
  heroPoster?: string;
  heroImage?: string;
  definitionEyebrow: string;
  definitionTitle: string;
  definitionBody: string[];
  included: IncludedItem[];
  faq: FaqItem[];
}

export const TREATMENTS: Treatment[] = [
  {
    slug: 'harmonizacao-facial',
    name: 'Harmonização Facial',
    navLabel: 'Harmonização',
    tag: 'Injetáveis',
    waKey: 'injetaveis',
    indexDesc: 'Toxina, preenchimento, bioestimuladores e fios, com a sua expressão preservada.',
    indexImage: '/modelos/modelo-injetaveis.jpg',
    heroTitle: 'Seu rosto, <em>em harmonia.</em>',
    heroLead:
      'Toxina botulínica, preenchimento com ácido hialurônico, bioestimuladores de colágeno e fios de PDO. Cada aplicação nasce de uma avaliação atenta, pra você continuar se reconhecendo no espelho.',
    heroVideo: '/video/harmonizacao.mp4',
    heroPoster: '/video/harmonizacao-poster.jpg',
    definitionEyebrow: 'O que é',
    definitionTitle: 'Equilíbrio, não transformação.',
    definitionBody: [
      'Harmonizar é trabalhar proporções: suavizar o que pesa, devolver o que o tempo levou e valorizar o que já é seu. Na Plena Derma, a conversa começa sempre pela avaliação, onde as doutoras entendem a sua história, a sua anatomia e o que você quer ver no espelho.',
      'Dali nasce um protocolo personalizado, que pode combinar diferentes técnicas em etapas, no seu ritmo e com acompanhamento próximo da equipe.',
    ],
    included: [
      { name: 'Toxina botulínica', desc: 'Suavização de linhas de expressão, sorriso gengival, bruxismo e mais' },
      { name: 'Preenchimento com ácido hialurônico', desc: 'Lábios, malar, mandíbula, mento, olheiras e sulcos' },
      { name: 'Bioestimuladores de colágeno', desc: 'Sculptra, Radiesse, Ellansé e Nexus Stimulate' },
      { name: 'Fios de PDO', desc: 'Liso, espiculado e técnicas de sustentação' },
      { name: 'Skinbooster', desc: 'Hidratação profunda e qualidade de pele' },
      { name: 'Rinomodelação', desc: 'Contorno nasal sem cirurgia, com avaliação criteriosa' },
    ],
    faq: [
      {
        q: 'Vou continuar parecida comigo?',
        a: 'Essa é a nossa régua. A técnica da casa preserva o movimento e a identidade do rosto; a avaliação define doses, pontos e etapas pensando no seu caso, nunca num padrão.',
      },
      {
        q: 'Por onde eu começo?',
        a: 'Pela avaliação. Você conta o que te incomoda, a equipe analisa a sua pele e a sua anatomia e desenha o protocolo. Sem pressa e sem julgamento.',
      },
      {
        q: 'A aplicação incomoda?',
        a: 'A sensibilidade varia de pessoa pra pessoa. Usamos recursos de conforto, como anestésicos tópicos, e a equipe conduz cada etapa no seu ritmo.',
      },
      {
        q: 'Quanto tempo dura o efeito?',
        a: 'Depende da técnica, do produto e da resposta do seu organismo. Na avaliação a equipe explica o que esperar para o seu caso e como funciona a manutenção.',
      },
    ],
  },
  {
    slug: 'ultraformer',
    name: 'Ultraformer',
    navLabel: 'Ultraformer',
    tag: 'Tecnologia',
    waKey: 'ultraformer',
    indexDesc: 'Ultrassom micro e macrofocado para firmeza e contorno. Tecnologia própria da clínica.',
    indexImage: '/modelos/feature-ultraformer.jpg',
    heroTitle: 'Firmeza que vem <em>de dentro.</em>',
    heroLead:
      'Ultrassom micro e macrofocado que estimula o colágeno nas camadas profundas da pele. O equipamento é da Plena Derma, e cada protocolo é conduzido por avaliação profissional.',
    heroVideo: '/video/ultraformer.mp4',
    heroPoster: '/video/ultraformer-poster.jpg',
    definitionEyebrow: 'O que é',
    definitionTitle: 'Tecnologia própria, protocolo seu.',
    definitionBody: [
      'O Ultraformer trabalha onde a flacidez começa: nas camadas profundas da pele. O ultrassom microfocado estimula a produção de colágeno e promove efeito lifting, firmeza e melhora de textura, sem cortes.',
      'Por ser um equipamento residente da clínica, a agenda é nossa: o protocolo é montado por região e por objetivo na avaliação, e a evolução acontece de forma gradual ao longo de cerca de três meses, acompanhando o tempo do seu colágeno.',
    ],
    included: [
      { name: 'Full face', desc: 'Protocolo completo de firmeza e contorno facial' },
      { name: 'Full face + papada', desc: 'Rosto inteiro com atenção especial ao contorno inferior' },
      { name: 'Papada', desc: 'Definição da região submentoniana' },
      { name: 'Contorno facial', desc: 'Linha da mandíbula e terço inferior' },
      { name: 'Pálpebras', desc: 'Região periocular, com técnica delicada' },
      { name: 'Corporal', desc: 'Abdômen, flancos e braços' },
    ],
    faq: [
      {
        q: 'Quando a evolução aparece?',
        a: 'O estímulo de colágeno é gradual: a pele responde ao longo de cerca de três meses após o protocolo. Na avaliação a equipe alinha as expectativas para a sua região e objetivo.',
      },
      {
        q: 'Preciso parar minha rotina?',
        a: 'Na maioria dos casos a rotina segue normalmente no mesmo dia. Você recebe orientações individuais da equipe após a sessão.',
      },
      {
        q: 'O equipamento é da clínica mesmo?',
        a: 'Sim. O Ultraformer mora na Plena Derma, o que garante agenda própria, protocolos completos e acompanhamento de perto pela nossa equipe.',
      },
      {
        q: 'Serve pra corpo também?',
        a: 'Sim. Além do rosto, papada e pálpebras, há protocolos corporais para abdômen, flancos e braços, sempre definidos na avaliação.',
      },
    ],
  },
  {
    slug: 'lasers-e-pele',
    name: 'Lasers & Pele',
    navLabel: 'Lasers e Pele',
    tag: 'Pele',
    waKey: 'lasers',
    indexDesc: 'CO2, Lavieen, microagulhamento e peelings. Textura, viço e uniformidade.',
    indexImage: '/fotos/microagulhamento.jpg',
    heroTitle: 'Pele com <em>luz própria.</em>',
    heroLead:
      'Laser de CO2 fracionado, Lavieen, microagulhamento, peelings e limpeza de pele. Da renovação intensa ao cuidado de rotina, tudo que a sua pele pode receber aqui na Plena Derma.',
    heroVideo: '/video/lasers.mp4',
    heroPoster: '/video/lasers-poster.jpg',
    definitionEyebrow: 'O que é',
    definitionTitle: 'Cada pele pede um caminho.',
    definitionBody: [
      'Manchas, textura irregular, poros, viço apagado, marcas do tempo: cada queixa tem uma tecnologia certa. O CO2 fracionado renova em profundidade; o Lavieen trata manchas e devolve luminosidade; microagulhamento, peelings e limpeza mantêm a pele saudável no dia a dia.',
      'Na avaliação, a equipe analisa a sua pele e monta o protocolo em sessões, respeitando a estação do ano, o seu fototipo e a sua rotina.',
    ],
    included: [
      { name: 'Laser de CO2 fracionado', desc: 'Renovação intensa de textura e qualidade de pele' },
      { name: 'Lavieen (BB Laser)', desc: 'Manchas, viço e uniformidade em protocolo de sessões' },
      { name: 'Microagulhamento', desc: 'Estímulo de renovação, inclusive com ativos e exossomos' },
      { name: 'Peelings', desc: 'Renovação química em diferentes intensidades' },
      { name: 'Limpeza de pele', desc: 'Cuidado de rotina, base de qualquer protocolo' },
    ],
    faq: [
      {
        q: 'Qual tratamento é o certo pra mim?',
        a: 'É exatamente o que a avaliação responde. A equipe analisa a sua pele, entende a sua queixa e indica a tecnologia e o número de sessões adequados ao seu caso.',
      },
      {
        q: 'Posso fazer laser no verão?',
        a: 'Alguns lasers pedem um momento do ano mais adequado e cuidados redobrados com o sol. Na avaliação a equipe orienta o melhor calendário pra você.',
      },
      {
        q: 'Em quantas sessões vejo evolução?',
        a: 'Depende da tecnologia e da sua pele. Os protocolos são montados em sessões, com acompanhamento da equipe a cada etapa.',
      },
    ],
  },
  {
    slug: 'corporal',
    name: 'Estética Corporal',
    navLabel: 'Corporal',
    tag: 'Corpo',
    waKey: 'corporal',
    indexDesc: 'Harmonização glútea, lipo enzimática e protocolos de contorno e firmeza.',
    indexImage: '/fotos/corporal-real.jpg',
    heroTitle: 'Seu corpo também <em>merece cuidado.</em>',
    heroLead:
      'Harmonização glútea, lipo enzimática, secagem de vasinhos e protocolos para celulite, estrias e flacidez. O mesmo olhar personalizado do rosto, aplicado ao corpo inteiro.',
    heroVideo: '/video/corporal.mp4',
    heroPoster: '/video/corporal-poster.jpg',
    definitionEyebrow: 'O que é',
    definitionTitle: 'Contorno com naturalidade.',
    definitionBody: [
      'O cuidado corporal da Plena Derma segue a mesma lógica do facial: entender o que te incomoda, avaliar com calma e montar um protocolo que combine as técnicas certas, do injetável à terapia manual.',
      'Harmonização glútea para contorno e firmeza, lipo enzimática para gordura localizada, protocolos para celulite e estrias, drenagem como complemento. Tudo em etapas, com acompanhamento próximo.',
    ],
    included: [
      { name: 'Harmonização glútea', desc: 'Contorno e firmeza com técnica e avaliação criteriosa' },
      { name: 'Lipo enzimática', desc: 'Aplicações para gordura localizada em protocolo de sessões' },
      { name: 'Protocolos para celulite e estrias', desc: 'Combinação de tecnologias e ativos' },
      { name: 'Secagem de vasinhos', desc: 'Cuidado para vasinhos aparentes nas pernas' },
      { name: 'Drenagem e massagens', desc: 'Complemento de protocolo e bem-estar' },
    ],
    faq: [
      {
        q: 'Como funciona a harmonização glútea?',
        a: 'É um protocolo de contorno e firmeza feito com injetáveis, desenhado na avaliação de acordo com a sua anatomia e o seu objetivo, sempre com naturalidade como régua.',
      },
      {
        q: 'Lipo enzimática é pra mim?',
        a: 'A avaliação responde. As aplicações auxiliam na quebra de gordura localizada em regiões específicas, em protocolo de sessões definido pela equipe.',
      },
      {
        q: 'Os protocolos corporais são combinados?',
        a: 'Sim, com frequência. Tecnologia, injetáveis e terapias manuais se complementam; a equipe monta a sequência certa pra você na avaliação.',
      },
    ],
  },
  {
    slug: 'depilacao-a-laser',
    name: 'Depilação a Laser',
    navLabel: 'Depilação',
    tag: 'Novo',
    waKey: 'depilacao',
    indexDesc: 'Soprano Ice Platinum: sessões confortáveis para diferentes fototipos.',
    indexImage: '/modelos/modelo-depilacao.jpg',
    heroTitle: 'Liberdade, <em>sessão a sessão.</em>',
    heroLead:
      'Depilação a laser com Soprano Ice Platinum, agora na Plena Derma. Sessões confortáveis, tecnologia indicada para diferentes fototipos e avaliação profissional antes de começar.',
    heroImage: '/modelos/modelo-depilacao.jpg',
    definitionEyebrow: 'O que é',
    definitionTitle: 'A tecnologia que faltava na sua rotina.',
    definitionBody: [
      'O Soprano Ice Platinum combina três comprimentos de onda num único aplicador e um sistema de resfriamento contínuo que mantém a pele protegida durante a aplicação, tornando a sessão muito mais confortável.',
      'É uma tecnologia indicada para diferentes fototipos de pele, sempre com avaliação profissional antes de começar: a equipe analisa a sua pele e o seu pelo e monta o plano de sessões adequado.',
    ],
    included: [
      { name: 'Rosto', desc: 'Buço, queixo e faixas do rosto' },
      { name: 'Axilas', desc: 'Uma das regiões mais pedidas da rotina' },
      { name: 'Pernas', desc: 'Meia perna ou perna inteira' },
      { name: 'Virilha', desc: 'Linhas e protocolos completos' },
      { name: 'Braços', desc: 'Meio braço ou braço inteiro' },
      { name: 'Protocolos combinados', desc: 'Combinações de regiões montadas na avaliação' },
    ],
    faq: [
      {
        q: 'Funciona no meu tom de pele?',
        a: 'O Soprano Ice Platinum é indicado para diferentes fototipos. Na avaliação, a equipe confirma a indicação para a sua pele e monta o plano de sessões.',
      },
      {
        q: 'A sessão incomoda?',
        a: 'O sistema de resfriamento contínuo do equipamento mantém a pele protegida durante a aplicação, o que torna a experiência bem mais confortável. A sensibilidade varia de pessoa pra pessoa.',
      },
      {
        q: 'Quantas sessões eu preciso?',
        a: 'Depende da região, do seu tipo de pelo e da fase de crescimento. O plano é definido na avaliação e acompanhado sessão a sessão.',
      },
    ],
  },
];

export function getTreatment(slug: string): Treatment | undefined {
  return TREATMENTS.find((t) => t.slug === slug);
}
