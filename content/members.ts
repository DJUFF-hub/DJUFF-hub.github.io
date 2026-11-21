export type Member = {
  name: string;
  role: string;
  photo?: string;
  founder?: boolean;
  profileUrl?: string;
};

export const members = [
  {
    name: 'Prof. Esteban Clua',
    role: 'Coordenador do grupo',
    photo: '/participants/Esteban Clua.jpeg',
  },
  {
    name: 'André “Adner” Lopes',
    role: 'Graduando em Ciência da Computação',
    photo: '/participants/André Lopes.jpeg',
  },
  {
    name: 'Ana Beatriz',
    role: 'Graduada em Ciência da Computação',
    photo: '/participants/Ana Beatriz.jpeg',
  },
  {
    name: 'Arthur “Tuco” Erthal',
    role: 'Graduando em Ciência da Computação',
    photo: '/participants/Arthur Erthal.jpeg',
  },
  {
    name: 'Cláudio Pires',
    role: 'Graduando em Ciência da Computação',
    photo: '/participants/Cláudio Pires.jpeg',
  },
  {
    name: 'Emanuelly Araújo',
    role: 'Graduada em Comunicação Social — Publicidade e Propaganda. Atua em gestão de projetos, produção e game design',
    photo: '/participants/Emanuelly Araújo.jpeg',
  },
  {
    name: 'Felipe “GoDoug” Barreto',
    founder: true,
    role: 'Professor de Programação de Jogos no Gaming Parque, mestre em Ensino de Ciências da Natureza e graduado em Física e Matemática',
    photo: '/participants/Felipe Barreto.jpeg',
  },
  {
    name: 'Felipe Dutra',
    role: 'Graduando em Ciência da Computação',
    photo: '/participants/Felipe Dutra.jpeg',
  },
  {
    name: 'Gabriel Coelho',
    role: 'Graduando em Engenharia Elétrica',
    photo: '/participants/Gabriel Coelho.jpeg',
  },
  {
    name: 'Gabriel Daher',
    role: 'Graduando em Ciência da Computação',
    photo: '/participants/Gabriel Daher.jpeg',
  },
  {
    name: 'Gabriel Maia',
    role: 'Graduando em Ciência da Computação',
    photo: '/participants/Gabriel Maia.jpeg',
  },
  {
    name: 'Gabriel Panza',
    role: 'Graduado em Ciência da Computação',
    photo: '/participants/Gabriel Panza.png',
  },
  {
    name: 'Gabriel “Gabcentro” Ribeiro',
    founder: true,
    role: 'Professor de Design no Senac, pós-graduado em UX pela PUCRS e graduado em Desenho Industrial',
    photo: '/participants/Gabriel Ribeiro.jpeg',
  },
  {
    name: 'João Gaidzinski',
    founder: true,
    role: 'Graduado em Sistemas da Informação',
    photo: '/participants/João Gaid.jpeg',
  },
  {
    name: 'João Guilherme Beltrão',
    role: 'Mestrando em Ciência da Computação',
    photo: '/participants/João Guilherme.jpeg',
  },
  {
    name: 'João Mendes',
    role: 'Graduando em Ciência da Computação',
    photo: '/participants/João Mendes.jpeg',
  },
  {
    name: 'João Pedro “Pepeco” Monteiro',
    founder: true,
    role: 'Graduado em Ciência da Computação',
    photo: '/participants/João Pedro Monteiro.jpeg',
  },
  {
    name: 'Júlia Lobo',
    role: 'Graduanda em Mídias e graduada em Jogos Digitais. É diretora de operações da ACJOGOS-RJ e lidera o estúdio LOBO House Interactive, responsável pelo desenvolvimento de Pastelo, jogo contemplado na 5ª edição do edital Sampa Games.',
    photo: '/participants/Júlia Lobo.jpeg',
  },
  {
    name: 'Larissa Yumi',
    role: 'Graduanda em Ciência da Computação',
    photo: '/participants/Larissa Yumi.jpeg',
  },
  {
    name: 'Leon Stevans',
    role: 'Graduando em Sistemas da Informação. Desenvolvedor solo à frente do estúdio noidnoidnoid e criador de [AFANTASIA], jogo independente premiado com publicação internacional anunciada pelo Studio Sasanqua.',
    photo: '/participants/Leon Stevans.jpeg',
  },
  {
    name: 'Luan Lopes',
    role: 'Graduando em Ciência da Computação',
    photo: '/participants/Luan Lopes.jpeg',
  },
  {
    name: 'Marianna Lima',
    role: 'Graduanda em Ciência da Computação',
    photo: '/participants/Marianna Lima.jpeg',
  },
  {
    name: "Silvio D'Arcangelo",
    role: 'Graduando em Ciência da Computação',
    photo: "/participants/Silvio D'Arcangelo.jpeg",
  },
  {
    name: 'Tamires da Hora',
    role: 'Graduanda em Sistemas da Informação',
    photo: '/participants/Tamires da Hora.jpeg',
  },
] satisfies Member[];

export const formerMembers = [
  {
    name: 'Gabriel Machado Gomes',
    founder: true,
    photo: '/participants/Gabriel Machado.jpeg',
    role: 'Engenheiro de XR e desenvolvedor C# com Unity',
  },
  {
    name: 'Gabriel Tavares Gagur',
    role: 'Graduado em Ciência da Computação e Unity Developer',
    photo: '/participants/Gabriel Tavares.jpeg',
  },
  {
    name: 'Michelle Mayumi Tizuka',
    role: 'Geóloga, mestre em Geociências e Meio Ambiente, arqueóloga e doutora em Ciência da Computação',
    photo: '/participants/Michelle Mayumi Tizuka.jpeg',
  },
  {
    name: 'Thay Pantuza',
    role: 'Mestre em Tecnologias de Comunicação e Cultura pela UERJ, na área de Comunicação Social, com ênfase em Game Studies, e bacharel em Cinema e Audiovisual pela UFF. Diretora criativa e Game Producer no Pantuza Studios, embaixadora da Women in Games, curadora de jogos e códigos criativos no Festival Ecrã e designer de narrativa do jogo Sonatina. Atua também como Game Producer, designer de narrativa e social media na Purple Shore Studio, no jogo The Pale Place.',
    photo: '/participants/Thays Pantuza.png',
  },
  {
    name: 'Vitor Augusto',
    role: 'Graduado em Ciência da Computação. Entre os jogos que desenvolveu com o coletivo está "Raízes", que conquistou o terceiro lugar em uma das categorias patrocinadas da Game Jam Plus 2022/2023. Atualmente, trabalha com jogos e participa de um projeto em parceria com a Game Builders.',
    photo: '/participants/Vitor Augusto .jpeg',
  },
] satisfies Member[];

export const partnerMembers = [
  {
    name: 'Victor Ferrari',
    role: 'Graduado em Engenharia Mecânica, licenciado em Matemática pela FAEP, tecnólogo em Computer Games and Programming Skills, mestre em Ciência da Computação com foco em Computação Gráfica e doutorando em Ciência da Computação com foco em Realidade Virtual. Produtor e desenvolvedor de jogos na Goiaba Games Studio',
    photo: '/participants/Victor Ferrari.jpeg',
    profileUrl: 'https://br.linkedin.com/in/victorsassi',
  },
  {
    name: 'Márcio Filho',
    role: 'Graduado em Direito, com formação em gamificação pela Wharton (UPenn) e em docência virtual pelo programa Virtual Teacher da Universidade da Califórnia, Irvine (UCI). Tem mais de 20 anos de experiência com jogos eletrônicos. Fundou a GF Corp e criou a CASE, plataforma que integra jogos e aprendizagem. Desenvolveu mais de 60 jogos e experiências gamificadas para organizações como SESI, SESC e Furnas e registrou cerca de dez propriedades intelectuais no INPI. Coorganizou simpósios de jogos, realidade virtual e computação com a Sociedade Brasileira de Computação. Em Niterói, foi conselheiro do Orçamento Participativo da Cultura e parecerista do primeiro edital público de cultura geek do país. Presidiu a RING (2022–2024) e foi reeleito para a presidência da ACJOGOS-RJ (2024–2026). Atuou na articulação do Marco Legal dos Games e é coautor do PL dos Games Vivos (PL 3612/2026).',
    photo: '/participants/Márcio Filho.jpeg',
    profileUrl: 'https://www.linkedin.com/in/filhomarcio/',
  },
] satisfies Member[];

export const founders: Member[] = [
  ...members,
  ...formerMembers,
  ...partnerMembers,
].filter((member) => 'founder' in member && member.founder);
