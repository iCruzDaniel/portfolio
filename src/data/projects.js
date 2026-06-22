export const projectCategories = [
  { id: 'devops', title: 'DEVOPS & TI SOLUTIONS' },
  { id: 'ai', title: 'AI SOLUTIONS' },
  { id: 'web', title: 'APPS WEB & LANDING PAGES' },
  { id: 'mechatronics', title: 'MECHATRONICS PROJECTS' },
];

export const projects = [
  // ─── DEVOPS & TI ───
  {
    id: 'mymailserver',
    title: 'MyMailServer',
    category: 'devops',
    image: 'img/mymailserver.png',
    links: [
      { icon: 'fab fa-github', url: 'https://github.com/iCruzDaniel/MyMailServer' },
    ],
  },
  {
    id: 'docker',
    title: 'Docker Implement',
    category: 'devops',
    image: 'img/docker.png',
    links: [
      { icon: 'fab fa-github', url: 'https://github.com/iCruzDaniel/evaluacionDocker' },
    ],
  },
  {
    id: 'proyecto-ti',
    title: 'Proyecto TI',
    category: 'devops',
    image: 'img/infraestructure-ti.webp',
    links: [
      { icon: 'fab fa-github', url: 'https://github.com/iCruzDaniel/proyecto-TI' },
    ],
  },

  // ─── AI SOLUTIONS ───
  {
    id: 'criteria',
    title: 'CriterIA',
    category: 'ai',
    image: 'img/criteria.png',
    links: [
      { icon: 'fab fa-github', url: 'https://github.com/iCruzDaniel/CriterIA' },
    ],
  },
  {
    id: 'phiusiil',
    title: 'PhiUSIIL Solution',
    category: 'ai',
    image: 'img/phiusiil.jpg',
    links: [
      { icon: 'fab fa-github', url: 'https://github.com/iCruzDaniel/Solucion-PhiUSIIL-URL-Phishing.git' },
    ],
  },
  {
    id: 'roomie',
    title: 'Roomie',
    category: 'ai',
    image: 'img/roomie.jpg',
    links: [
      { icon: 'fab fa-github', url: 'https://github.com/iCruzDaniel/Roomie' },
    ],
  },

  // ─── APPS WEB & LANDING PAGES ───
  {
    id: 'aerolab',
    title: 'AeroLab Cartagena',
    category: 'web',
    image: 'img/aerolab.png',
    links: [
      { icon: 'fas fa-globe', url: 'https://aerolabcartagena-tj6cb.ondigitalocean.app' },
    ],
  },
  {
    id: 'ggc',
    title: 'GGC',
    category: 'web',
    image: 'img/logo-GGC-blanco.png',
    fit: 'contain',
    bg: 'var(--color-grey-6)',
    links: [
      { icon: 'fas fa-globe', url: 'https://ggc.aluez.com/' },
    ],
  },
  {
    id: 'yapergo',
    title: 'YaperGoUTB',
    category: 'web',
    image: 'img/yapergo.png',
    links: [
      { icon: 'fab fa-github', url: 'https://github.com/ISCOUTB/AH-YaperGoUTB' },
    ],
  },

  // ─── MECHATRONICS ───
  {
    id: 'robotsoccers',
    title: 'RobotSoccers',
    category: 'mechatronics',
    image: 'img/robotsoccers.png',
    links: [
      { icon: 'fab fa-github', url: 'https://github.com/iCruzDaniel/RobotSoccers' },
    ],
  },
  {
    id: 'hexplorer',
    title: 'HEX-PLORER',
    category: 'mechatronics',
    image: 'img/hexplorer.png',
    links: [
      { icon: 'fab fa-github', url: 'https://github.com/iCruzDaniel/HEX-PLORER' },
    ],
  },
];
