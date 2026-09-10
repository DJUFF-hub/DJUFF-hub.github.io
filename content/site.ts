export const siteContent = {
  intro: 'O DJUFF reúne estudantes para aprender, produzir e publicar jogos dentro da Universidade Federal Fluminense.',
  about: 'Trabalhamos em equipes multidisciplinares, organizamos grupos de estudo, oficinas, projetos de extensão e game jams. Não é preciso chegar sabendo: o grupo existe para transformar interesse em prática compartilhada.',
  disciplines: ['Game design', 'Programação', 'Arte', 'Narrativa', 'Áudio', 'Produção'],
  activities: [
    { title: 'Formação', description: 'Grupos de estudo, oficinas e projetos guiados sobre diferentes áreas do desenvolvimento de jogos.' },
    { title: 'Produção', description: 'Jogos autorais desenvolvidos pelo coletivo, por equipes de extensão e em projetos semestrais.' },
    { title: 'Comunidade', description: 'Game jams, encontros e pontes entre estudantes, grupos universitários e profissionais.' },
    { title: 'Publicação', description: 'Jogos, código e processos disponíveis para jogar, estudar e continuar desenvolvendo.' },
  ],
  partnerGroups: [
    { label: 'Apoio institucional', partners: [{ name: 'Instituto de Computação — UFF', url: 'https://www.ic.uff.br/', logo: '/partners/ic-uff.png' }] },
    { label: 'Rede universitária', partners: [
      { name: 'PRISMA — PUC-Rio', url: 'https://prismagamelab.itch.io/', logo: '/partners/prisma.png' },
      { name: 'GameLab UERJ', url: 'https://gamelabuerj.itch.io/', logo: '/partners/gamelab-uerj.png' },
      { name: 'GDP — UFRJ', url: 'https://www.instagram.com/gdpufrj/', logo: '/partners/gdp-ufrj.png' },
      { name: 'Include Meninas — UFF', url: 'https://sites.google.com/view/include-meninas-uff', logo: '/partners/include-meninas.png' },
    ] },
    { label: 'Ecossistema de jogos', partners: [{ name: 'ACJOGOS-RJ', url: 'https://rj.acjogos.com.br/', logo: '/partners/acjogos-rj.webp' }] },
  ],
  links: { github: 'https://github.com/DJUFF-Projects', itch: 'https://djuff-oficial.itch.io/', instagram: 'https://www.instagram.com/djuff.oficial/' },
} as const;
