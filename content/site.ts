export const siteContent = {
  brand: { name: 'DJUFF', logo: '/brand/djuff-logo.png' },
  homePhotos: [
    {
      src: '/grupo-djuff.jpg',
      alt: 'Integrantes do DJUFF reunidos na Universidade Federal Fluminense',
      width: 1600,
      height: 1600,
    },
    {
      src: '/djuff-gamejamplus-2024.jpg',
      alt: 'Integrantes do DJUFF na grande final da GameJamPlus 2024',
      width: 1600,
      height: 1200,
    },
    {
      src: '/djuff-jam-2026.jpg',
      alt: 'Participantes da DJUFF Jam 2026 reunidos com troféus e premiações',
      width: 4000,
      height: 1848,
    },
  ],
  group: {
    statement:
      'Um coletivo para entender jogos por dentro e construir em conjunto.',
    history: [
      'O DJUFF foi criado em 2018 por cinco alunos que buscavam crescer e construir um portfólio na área de jogos. Em 2019, a troca com grupos acadêmicos de universidades como PUC, UFRJ, CEFET e UFRRJ inspirou o coletivo a se estruturar e a fortalecer a presença da UFF na área de jogos digitais.',
      'Desde então, essa trajetória inclui projetos premiados em festivais de cinema, participação e organização de game jams nacionais e internacionais e estúdios de jogos formados por membros do coletivo. O grupo segue como um espaço de aprendizado, troca e criação conjunta.',
      'O grupo é coordenado pelo professor Esteban Clua e reúne pessoas de diferentes cursos e momentos de formação.',
    ],
  },
  intro:
    'O DJUFF reúne estudantes para aprender, produzir e publicar jogos dentro da Universidade Federal Fluminense.',
  about:
    'Trabalhamos em equipes multidisciplinares, organizamos grupos de estudo, oficinas, projetos de extensão e game jams. Não é preciso chegar sabendo: o grupo existe para transformar interesse em prática compartilhada.',
  disciplines: [
    'Game design',
    'Programação',
    'Arte',
    'Narrativa',
    'Áudio',
    'Produção',
  ],
  activities: [
    {
      title: 'Formação',
      description:
        'Grupos de estudo, oficinas e projetos guiados sobre diferentes áreas do desenvolvimento de jogos.',
    },
    {
      title: 'Produção',
      description:
        'Jogos autorais desenvolvidos pelo coletivo, por equipes de extensão e em projetos semestrais.',
    },
    {
      title: 'Comunidade',
      description:
        'Game jams, encontros e pontes entre estudantes, grupos universitários e profissionais.',
    },
    {
      title: 'Publicação',
      description:
        'Jogos, código e processos disponíveis para jogar, estudar e continuar desenvolvendo.',
    },
  ],
  partnerGroups: [
    {
      label: 'Apoio institucional',
      partners: [
        {
          name: 'Instituto de Computação — UFF',
          url: 'https://www.ic.uff.br/',
          logo: '/partners/ic-uff.png',
        },
      ],
    },
    {
      label: 'Rede universitária',
      partners: [
        {
          name: 'PRISMA — PUC-Rio',
          url: 'https://prismagamelab.itch.io/',
          logo: '/partners/prisma.png',
        },
        {
          name: 'GameLab UERJ',
          url: 'https://gamelabuerj.itch.io/',
          logo: '/partners/gamelab-uerj.png',
        },
        {
          name: 'GDP — UFRJ',
          url: 'https://www.instagram.com/gdpufrj/',
          logo: '/partners/gdp-ufrj.png',
        },
        {
          name: 'Include Meninas — UFF',
          url: 'https://sites.google.com/view/include-meninas-uff',
          logo: '/partners/include-meninas.png',
        },
        {
          name: 'Grupo de Animadores/Artistas da UVA',
          url: 'https://www.instagram.com/dg_da_uva/',
          logo: '/partners/dg-da-uva.jpg',
        },
      ],
    },
    {
      label: 'Ecossistema de jogos',
      partners: [
        {
          name: 'ACJOGOS-RJ',
          url: 'https://rj.acjogos.com.br/',
          logo: '/partners/acjogos-rj.webp',
        },
      ],
    },
  ],
  sponsors: [
    {
      name: 'Indie Hero',
      url: 'https://www.indiehero.io/',
      logo: '/sponsors/indie-hero.png',
      darkLogoBackground: true,
    },
    {
      name: 'Goiaba Games Studio',
      url: 'https://www.instagram.com/goiabagamesstudio/',
      logo: '/sponsors/goiaba-games-studio.png',
    },
    {
      name: 'BGS - Brasil Game Show',
      url: 'https://www.brasilgameshow.com.br/',
      logo: '/sponsors/bgs.png',
    },
  ],
  links: {
    github: 'https://github.com/DJUFF-Projects',
    itch: 'https://djuff-oficial.itch.io/',
    instagram: 'https://www.instagram.com/djuff.oficial/',
  },
} as const;
