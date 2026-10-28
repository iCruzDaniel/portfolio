export const projectCategories = [
  {
    id: 'web',
    title: { es: 'APPS WEB & LANDING PAGES', en: 'WEB APPS & LANDING PAGES', pt: 'APPS WEB & LANDING PAGES' },
  },
  {
    id: 'ai',
    title: { es: 'SOLUCIONES IA', en: 'AI SOLUTIONS', pt: 'SOLUÇÕES DE IA' },
  },
  {
    id: 'devops',
    title: { es: 'SOLUCIONES DEVOPS & TI', en: 'DEVOPS & IT SOLUTIONS', pt: 'SOLUÇÕES DEVOPS & TI' },
  },
  {
    id: 'mechatronics',
    title: { es: 'PROYECTOS MECATRÓNICOS', en: 'MECHATRONICS PROJECTS', pt: 'PROJETOS DE MECATRÔNICA' },
  },
];

/*
 * Estructura de cada proyecto:
 *   title    — nombre (invariante)
 *   tagline  — frase de una línea: qué hace / qué problema resuelve  {es, en, pt}
 *   problem  — situación real que motivó el proyecto (1-2 frases)    {es, en, pt}
 *   solution — qué se construyó (1-2 frases)                         {es, en, pt}
 *   result   — impacto (número si existe; si no, resultado cualitativo verificado) {es, en, pt}
 *   stack    — tecnologías como tags (invariante)
 *   links    — { icon, label: {es,en,pt}, url }
 *   captions — { 'img.webp': {es,en,pt} | '' }
 */
export const projects = [
  // ─── DEVOPS & TI ───
  {
    id: 'mymailserver',
    title: 'MyMailServer',
    category: 'devops',
    tagline: {
      es: 'Servidor de correo autogestionado, multi-cloud y con observabilidad completa, levantado con infraestructura como código.',
      en: 'Self-hosted mail server, multi-cloud, with full observability, built with infrastructure as code.',
      pt: 'Servidor de e-mail autogerenciado, multi-cloud e com observabilidade completa, criado com infraestrutura como código.',
    },
    problem: {
      es: 'Depender de Gmail/Outlook para un dominio propio cede los datos y se paga por usuario; montar un servidor de correo a mano es frágil y lleva semanas (SPF, DKIM, monitoreo, respaldo).',
      en: 'Depending on Gmail/Outlook for a custom domain hands over your data and charges per user; setting up a mail server by hand is fragile and takes weeks (SPF, DKIM, monitoring, backup).',
      pt: 'Depender do Gmail/Outlook para um domínio próprio entrega os dados e cobra por usuário; montar um servidor de e-mail manualmente é frágil e leva semanas (SPF, DKIM, monitoramento, backup).',
    },
    solution: {
      es: 'Stack completo de correo (Poste.io + Traefik) en un solo VPS, desplegado con Terraform multi-cloud (AWS/DigitalOcean), Ansible y monitoreo Prometheus/Grafana con DNS en Cloudflare.',
      en: 'Full mail stack (Poste.io + Traefik) on a single VPS, deployed with multi-cloud Terraform (AWS/DigitalOcean), Ansible, and Prometheus/Grafana monitoring with DNS on Cloudflare.',
      pt: 'Stack completo de e-mail (Poste.io + Traefik) em um único VPS, implantado com Terraform multi-cloud (AWS/DigitalOcean), Ansible e monitoramento Prometheus/Grafana com DNS no Cloudflare.',
    },
    result: {
      es: '3 de 4 fases completadas: correo operativo con proxy reverso, observabilidad y automatización multi-cloud reproducibles.',
      en: '3 of 4 phases completed: operational mail with reverse proxy, observability, and reproducible multi-cloud automation.',
      pt: '3 de 4 fases concluídas: e-mail operacional com proxy reverso, observabilidade e automação multi-cloud reproduzível.',
    },
    stack: ['Docker', 'Terraform', 'Ansible', 'Cloudflare', 'Prometheus', 'Grafana', 'Traefik'],
    links: [{ icon: 'github', label: { es: 'Ver código', en: 'View code', pt: 'Ver código' }, url: 'https://github.com/iCruzDaniel/MyMailServer' }],
    captions: { 'portada.webp': '', 'ss-grafana.webp': '' },
  },
  {
    id: 'cirecipes',
    title: 'CI Recipes',
    category: 'devops',
    tagline: {
      es: 'Biblioteca de pipelines CI/CD listos para copiar y pegar, clasificados y versionados por flujo.',
      en: 'CI/CD pipeline library ready to copy and paste, classified and versioned by workflow.',
      pt: 'Biblioteca de pipelines CI/CD prontos para copiar e colar, classificados e versionados por fluxo.',
    },
    problem: {
      es: 'Cada proyecto nuevo reescribía los mismos pipelines de CI/CD desde cero, sin documentación ni versionado, y cada uno terminaba distinto.',
      en: 'Every new project rewrote the same CI/CD pipelines from scratch, with no documentation or versioning, and each one ended up different.',
      pt: 'Cada projeto novo reescrevia os mesmos pipelines de CI/CD do zero, sem documentação nem versionamento, e cada um acabava diferente.',
    },
    solution: {
      es: 'Flujos GitHub Actions reutilizables con ficha técnica (manifest.yml), código taxonómico por arquitectura y versionado por flujo: deploy a registry (GHCR + Dokploy) y a VPS por SSH con docker compose.',
      en: 'Reusable GitHub Actions workflows with a technical sheet (manifest.yml), taxonomy-based code per architecture, and per-workflow versioning: deploy to registry (GHCR + Dokploy) and to VPS over SSH with docker compose.',
      pt: 'Fluxos reutilizáveis do GitHub Actions com ficha técnica (manifest.yml), código taxonômico por arquitetura e versionamento por fluxo: deploy em registry (GHCR + Dokploy) e em VPS via SSH com docker compose.',
    },
    result: {
      es: 'Configurar CI/CD pasa de horas a minutos copiando un flujo ya probado y documentado.',
      en: 'Setting up CI/CD goes from hours to minutes by copying a tested, documented workflow.',
      pt: 'Configurar CI/CD passa de horas para minutos copiando um fluxo já testado e documentado.',
    },
    stack: ['GitHub Actions', 'Ansible', 'Docker', 'YAML'],
    links: [{ icon: 'github', label: { es: 'Ver código', en: 'View code', pt: 'Ver código' }, url: 'https://github.com/iCruzDaniel/cirecipes' }],
    captions: { 'portada0.webp': '' },
  },
  {
    id: 'poly-k8',
    title: 'Poly-K8',
    category: 'devops',
    fit: 'contain',
    bg: 'var(--color-grey-6)',
    tagline: {
      es: 'Malla de microservicios políglotas (Python, Node.js, TypeScript, Nginx) desplegada en Kubernetes.',
      en: 'Mesh of polyglot microservices (Python, Node.js, TypeScript, Nginx) deployed on Kubernetes.',
      pt: 'Malha de microsserviços poliglotas (Python, Node.js, TypeScript, Nginx) implantada em Kubernetes.',
    },
    problem: {
      es: 'Migrar de monolito a microservicios exige probar la integración real de servicios en distintos lenguajes dentro de un clúster, no solo en local.',
      en: 'Moving from monolith to microservices requires testing real service integration across languages inside a cluster, not just locally.',
      pt: 'Migrar de monólito para microsserviços exige provar a integração real dos serviços em diferentes linguagens dentro de um cluster, não apenas localmente.',
    },
    solution: {
      es: 'Arquitectura de 5 servicios — frontend estático, API gateway (TS/Express), auth (FastAPI), analytics y data processor (Flask) — orquestados en Kubernetes con Nginx Ingress.',
      en: 'Architecture of 5 services — static frontend, API gateway (TS/Express), auth (FastAPI), analytics and data processor (Flask) — orchestrated on Kubernetes with Nginx Ingress.',
      pt: 'Arquitetura de 5 serviços — frontend estático, API gateway (TS/Express), auth (FastAPI), analytics e data processor (Flask) — orquestrados em Kubernetes com Nginx Ingress.',
    },
    result: {
      es: 'Clúster completo operativo: tráfico enrutado por Ingress y comunicaciones entre servicios verificadas extremo a extremo.',
      en: 'Fully operational cluster: traffic routed by Ingress and service-to-service communication verified end to end.',
      pt: 'Cluster completo operacional: tráfego roteado por Ingress e comunicação entre serviços verificada de ponta a ponta.',
    },
    stack: ['Kubernetes', 'Docker', 'Python', 'FastAPI', 'Node.js', 'TypeScript', 'Express', 'Nginx'],
    links: [{ icon: 'github', label: { es: 'Ver código', en: 'View code', pt: 'Ver código' }, url: 'https://github.com/iCruzDaniel/poly-k8' }],
    captions: { 'portada.webp': '' },
  },
  {
    id: 'docker',
    title: 'Docker Implement',
    category: 'devops',
    tagline: {
      es: 'Aplicación Flask contenerizada, servida con Nginx y orquestada con Docker Compose.',
      en: 'Containerized Flask application, served with Nginx and orchestrated with Docker Compose.',
      pt: 'Aplicação Flask conteinerizada, servida com Nginx e orquestrada com Docker Compose.',
    },
    problem: {
      es: 'Pasar de correr apps en local a entornos reproducibles exige dominar el ciclo completo de contenerización y orquestación.',
      en: 'Moving from running apps locally to reproducible environments requires mastering the full containerization and orchestration cycle.',
      pt: 'Passar de apps locais a ambientes reproduzíveis exige dominar o ciclo completo de conteinerização e orquestração.',
    },
    solution: {
      es: 'Implementación de una app Flask en Docker expuesta por Nginx, levantada con un solo comando docker-compose up.',
      en: 'Implementation of a Flask app in Docker exposed through Nginx, spun up with a single docker-compose up command.',
      pt: 'Implementação de um app Flask em Docker exposto via Nginx, levantado com um único comando docker-compose up.',
    },
    result: {
      es: 'Entorno reproducible con un comando y base reutilizable para despliegues más complejos.',
      en: 'Reproducible environment with one command and a reusable base for more complex deployments.',
      pt: 'Ambiente reproduzível com um comando e base reutilizável para implantações mais complexas.',
    },
    stack: ['Docker', 'Docker Compose', 'Flask', 'Nginx'],
    links: [{ icon: 'github', label: { es: 'Ver código', en: 'View code', pt: 'Ver código' }, url: 'https://github.com/iCruzDaniel/evaluacionDocker' }],
  },
  {
    id: 'proyecto-ti',
    title: 'Proyecto TI',
    category: 'devops',
    tagline: {
      es: 'Despliegue automatizado de la app universitaria YaperGo en DigitalOcean con Terraform y Ansible.',
      en: 'Automated deployment of the university app YaperGo to DigitalOcean with Terraform and Ansible.',
      pt: 'Implantação automatizada do app universitário YaperGo na DigitalOcean com Terraform e Ansible.',
    },
    problem: {
      es: 'Llevar YaperGo a producción requería pasos manuales, frágiles y no reproducibles desde cualquier máquina.',
      en: 'Taking YaperGo to production required manual, fragile, non-reproducible steps from any machine.',
      pt: 'Levar o YaperGo à produção exigia passos manuais, frágeis e não reproduzíveis de qualquer máquina.',
    },
    solution: {
      es: 'Automatización completa del despliegue en DigitalOcean: Terraform para infraestructura y Ansible para configuración, usable desde Ubuntu, WSL2 o una Raspberry Pi.',
      en: 'Full deployment automation on DigitalOcean: Terraform for infrastructure and Ansible for configuration, usable from Ubuntu, WSL2, or a Raspberry Pi.',
      pt: 'Automação completa da implantação na DigitalOcean: Terraform para infraestrutura e Ansible para configuração, utilizável a partir de Ubuntu, WSL2 ou uma Raspberry Pi.',
    },
    result: {
      es: 'Despliegue reproducible desde cualquier SO, documentado paso a paso para el equipo.',
      en: 'Reproducible deployment from any OS, documented step by step for the team.',
      pt: 'Implantação reproduzível de qualquer SO, documentada passo a passo para o time.',
    },
    stack: ['Terraform', 'Ansible', 'Docker', 'DigitalOcean'],
    links: [{ icon: 'github', label: { es: 'Ver código', en: 'View code', pt: 'Ver código' }, url: 'https://github.com/iCruzDaniel/proyecto-TI' }],
  },

  // ─── AI SOLUTIONS ───
  {
    id: 'roomie',
    title: 'Roomie',
    category: 'ai',
    tagline: {
      es: 'Recomendador de compañeros de piso por compatibilidad, construido para una plataforma real de habitaciones en alquiler.',
      en: 'Roommate compatibility recommender, built for a real room-rental platform.',
      pt: 'Recomendador de colegas de quarto por compatibilidade, criado para uma plataforma real de aluguel de quartos.',
    },
    problem: {
      es: 'Habitacion.com asignaba manualmente inquilinos compatibles: un proceso lento, subjetivo y que no escala con ~12.000 perfiles activos.',
      en: 'Habitacion.com assigned compatible tenants manually: a slow, subjective process that does not scale with ~12,000 active profiles.',
      pt: 'A Habitacion.com atribuía inquilinos compatíveis manualmente: um processo lento, subjetivo e que não escala com ~12.000 perfis ativos.',
    },
    solution: {
      es: 'Sistema de matching por similitud (producto punto sobre perfiles codificados) que filtra los N candidatos más compatibles para un piso y los presenta con visualizaciones interactivas en tiempo real.',
      en: 'Similarity-based matching system (dot product over encoded profiles) that filters the N most compatible candidates for a room and presents them with real-time interactive visualizations.',
      pt: 'Sistema de matching por similaridade (produto escalar sobre perfis codificados) que filtra os N candidatos mais compatíveis para um quarto e os apresenta com visualizações interativas em tempo real.',
    },
    result: {
      es: 'Evaluado sobre 12.000 perfiles reales; reduce a segundos una decisión que antes era manual y subjetiva.',
      en: 'Evaluated on 12,000 real profiles; reduces a previously manual, subjective decision to seconds.',
      pt: 'Avaliado sobre 12.000 perfis reais; reduz a segundos uma decisão que antes era manual e subjetiva.',
    },
    stack: ['Python', 'scikit-learn', 'Streamlit', 'Plotly', 'SQLite', 'Docker'],
    links: [
      { icon: 'globe', label: { es: 'Ver demo', en: 'View demo', pt: 'Ver demo' }, url: 'https://roomie-icruzdaniel.streamlit.app' },
      { icon: 'github', label: { es: 'Ver código', en: 'View code', pt: 'Ver código' }, url: 'https://github.com/iCruzDaniel/Roomie' },
    ],
    captions: { 'ss1.webp': '', 'ss2.webp': '', 'ss3.webp': '', 'ss4.webp': '' },
  },
  {
    id: 'criteria',
    title: 'CriterIA',
    category: 'ai',
    tagline: {
      es: 'Asistente RAG para abogados: consulta contratos en lenguaje natural y recibe respuestas con la cita textual exacta.',
      en: 'RAG assistant for lawyers: query contracts in natural language and get answers with the exact textual quote.',
      pt: 'Assistente RAG para advogados: consulte contratos em linguagem natural e receba respostas com a citação textual exata.',
    },
    problem: {
      es: 'Buscar cláusulas en contratos largos toma horas, y los documentos legales confidenciales no pueden enviarse a servicios externos en la nube.',
      en: 'Searching clauses in long contracts takes hours, and confidential legal documents cannot be sent to external cloud services.',
      pt: 'Buscar cláusulas em contratos longos leva horas, e documentos jurídicos confidenciais não podem ser enviados a serviços externos na nuvem.',
    },
    solution: {
      es: 'RAG 100% local y contenerizado: carga de PDFs con chunking semántico, consultas en español, respuestas con cita textual (página y sección), autenticación JWT multi-usuario.',
      en: '100% local, containerized RAG: PDF loading with semantic chunking, natural-language queries, answers with textual citation (page and section), multi-user JWT authentication.',
      pt: 'RAG 100% local e conteinerizado: carregamento de PDFs com chunking semântico, consultas em linguagem natural, respostas com citação textual (página e seção), autenticação JWT multiusuário.',
    },
    result: {
      es: 'Sistema de escritorio completo que responde con la cita exacta del contrato sin que los datos salgan de la máquina.',
      en: 'Complete desktop system that answers with the exact contract quote without data leaving the machine.',
      pt: 'Sistema de desktop completo que responde com a citação exata do contrato sem que os dados saiam da máquina.',
    },
    stack: ['React', 'FastAPI', 'LlamaIndex', 'ChromaDB', 'Docker', 'Ollama'],
    links: [{ icon: 'github', label: { es: 'Ver código', en: 'View code', pt: 'Ver código' }, url: 'https://github.com/iCruzDaniel/CriterIA' }],
  },
  {
    id: 'phiusiil',
    title: 'PhiUSIIL Solution',
    category: 'ai',
    tagline: {
      es: 'Modelo de machine learning para detectar URLs de phishing antes de que engañen al usuario.',
      en: 'Machine learning model that detects phishing URLs before they fool the user.',
      pt: 'Modelo de machine learning para detectar URLs de phishing antes que enganem o usuário.',
    },
    problem: {
      es: 'Las listas negras no alcanzan: las URLs de phishing nuevas se crean por miles al día y evaden los filtros estáticos en minutos.',
      en: 'Blacklists are not enough: new phishing URLs are created by the thousands daily and evade static filters within minutes.',
      pt: 'As listas negras não bastam: novas URLs de phishing são criadas por milhares por dia e evadem os filtros estáticos em minutos.',
    },
    solution: {
      es: 'Clasificador de URLs entrenado sobre el dataset PhiUSIIL, que detecta sitios de phishing por características de la propia URL.',
      en: 'URL classifier trained on the PhiUSIIL dataset, detecting phishing sites from features of the URL itself.',
      pt: 'Classificador de URLs treinado sobre o dataset PhiUSIIL, que detecta sites de phishing pelas características da própria URL.',
    },
    result: {
      es: 'Clasificador entrenado y evaluado sobre el dataset de referencia PhiUSIIL.',
      en: 'Classifier trained and evaluated on the PhiUSIIL reference dataset.',
      pt: 'Classificador treinado e avaliado sobre o dataset de referência PhiUSIIL.',
    },
    stack: ['Python', 'Machine Learning'],
    links: [{ icon: 'github', label: { es: 'Ver código', en: 'View code', pt: 'Ver código' }, url: 'https://github.com/iCruzDaniel/Solucion-PhiUSIIL-URL-Phishing' }],
  },

  // ─── APPS WEB & LANDING PAGES ───
  {
    id: 'genercom',
    title: 'Genercom SAS',
    category: 'web',
    tagline: {
      es: 'Sitio corporativo para consultora de ingeniería eléctrica y energías renovables, con herramientas digitales de cotización solar.',
      en: 'Corporate website for an electrical engineering and renewable energy consultancy, with online solar quoting tools.',
      pt: 'Site corporativo para consultoria de engenharia elétrica e energias renováveis, com ferramentas digitais de cotação solar.',
    },
    problem: {
      es: 'La firma no tenía presencia digital que exhibiera su portafolio (diseño eléctrico, proyectos fotovoltaicos, licenciamiento ambiental) ni un canal ágil para captar y cotizar clientes potenciales.',
      en: 'The firm had no digital presence to showcase its portfolio (electrical design, photovoltaic projects, environmental licensing) nor an agile channel to capture and quote potential clients.',
      pt: 'A firma não tinha presença digital para exibir seu portfólio (projeto elétrico, projetos fotovoltaicos, licenciamento ambiental) nem um canal ágil para captar e cotar clientes potenciais.',
    },
    solution: {
      es: 'Sitio corporativo con catálogo de servicios, portafolio de proyectos ejecutados, formulario de contacto segmentado por servicio y herramientas en línea: cotizador solar con dimensionamiento automático de paneles, estimación de ahorro y TIR, e integración con el ERP corporativo.',
      en: 'Corporate website with a service catalog, executed-project portfolio, a contact form segmented by service, and online tools: a solar quoting calculator with automatic panel sizing, savings and IRR estimates, plus corporate ERP integration.',
      pt: 'Site corporativo com catálogo de serviços, portfólio de projetos executados, formulário de contato segmentado por serviço e ferramentas on-line: cotador solar com dimensionamento automático de painéis, estimativa de economia e TIR, além de integração com o ERP corporativo.',
    },
    result: {
      es: 'Sitio en producción operando como canal principal de captación, cotización y presentación oficial de la firma.',
      en: 'Site in production operating as the firm main lead-capture, quoting and official presentation channel.',
      pt: 'Site em produção operando como principal canal de captação, cotação e apresentação oficial da firma.',
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: [{ icon: 'globe', label: { es: 'Ver sitio', en: 'Visit site', pt: 'Ver site' }, url: 'https://genercom.co/' }],
    captions: {
      'ss1.webp': { es: 'Catálogo de servicios de ingeniería.', en: 'Engineering services catalog.', pt: 'Catálogo de serviços de engenharia.' },
      'ss2.webp': { es: 'Sección fotovoltaica con estimación de paneles según consumo.', en: 'Photovoltaic section with panel estimation by consumption.', pt: 'Seção fotovoltaica com estimativa de painéis por consumo.' },
    },
  },
  {
    id: 'openwaitlist',
    title: 'OpenWaitlist',
    category: 'web',
    tagline: {
      es: 'Backend de waitlist y gestión de leads self-hosted para todas tus landing pages.',
      en: 'Self-hosted waitlist backend and lead management for all your landing pages.',
      pt: 'Backend de waitlist autogerenciado e gestão de leads para todas as suas landing pages.',
    },
    problem: {
      es: 'Cada landing page terminaba con su formulario "único": 15 formularios, 12 bases de datos y 0 visibilidad de los leads capturados.',
      en: 'Every landing page ended up with its own "unique" form: 15 forms, 12 databases, and 0 visibility of captured leads.',
      pt: 'Cada landing page terminava com seu formulário "único": 15 formulários, 12 bancos de dados e 0 visibilidade dos leads capturados.',
    },
    solution: {
      es: 'Un solo backend FastAPI con panel admin en React: recibe leads de todas las landings (crea la waitlist sobre la marcha, con JSON libre), exige JWT para leer y exporta a CSV. Corre sobre SQLite, Postgres o Upstash Redis.',
      en: 'A single FastAPI backend with a React admin panel: receives leads from all landings (creates the waitlist on the fly, with free-form JSON), enforces JWT for reads, and exports to CSV. Runs on SQLite, Postgres, or Upstash Redis.',
      pt: 'Um único backend FastAPI com painel admin em React: recebe leads de todas as landings (cria a waitlist on the fly, com JSON livre), exige JWT para leitura e exporta para CSV. Roda sobre SQLite, Postgres ou Upstash Redis.',
    },
    result: {
      es: 'Demo en vivo en Vercel (serverless con Upstash) y paquete publicado en Docker Hub.',
      en: 'Live demo on Vercel (serverless with Upstash) and a package published on Docker Hub.',
      pt: 'Demo ao vivo na Vercel (serverless com Upstash) e pacote publicado no Docker Hub.',
    },
    stack: ['FastAPI', 'React', 'SQLite', 'PostgreSQL', 'Upstash Redis', 'Docker'],
    links: [
      { icon: 'globe', label: { es: 'Ver demo', en: 'View demo', pt: 'Ver demo' }, url: 'https://open-waitlist-one.vercel.app/' },
      { icon: 'user', label: { es: 'Demo admin', en: 'Admin demo', pt: 'Demo admin' }, url: 'https://open-waitlist-one.vercel.app/admin?email=admin%40demo.com&pass=elAdmin123' },
      { icon: 'github', label: { es: 'Ver código', en: 'View code', pt: 'Ver código' }, url: 'https://github.com/iCruzDaniel/open-waitlist' },
    ],
    captions: {
      'Captura-desde-2026-09-12-14-00-00.webp': '',
      'ss1.webp': '',
      'ss2.webp': '',
      'ss3.webp': '',
    },
  },
  {
    id: 'fast-foody',
    title: 'Fast Foody',
    category: 'web',
    fit: 'contain',
    bg: 'var(--color-grey-6)',
    tagline: {
      es: 'Gestión de pedidos para restaurante de comida rápida, con roles y despliegue CI/CD automático.',
      en: 'Order management for fast-food restaurants, with roles and automatic CI/CD deployment.',
      pt: 'Gestão de pedidos para restaurante de fast food, com papéis e implantação CI/CD automática.',
    },
    problem: {
      es: 'Un restaurante gestionaba pedidos en papel o por chat: sin catálogo central, errores de comunicación y cero visibilidad del estado de cada orden.',
      en: 'A restaurant managed orders on paper or by chat: no central catalog, communication errors, and zero visibility of each order status.',
      pt: 'Um restaurante gerenciava pedidos no papel ou por chat: sem catálogo central, erros de comunicação e zero visibilidade do estado de cada pedido.',
    },
    solution: {
      es: 'App fullstack: catálogo de productos, órdenes con ciclo completo (creación → entrega/cancelación), autenticación por roles (cliente/staff/admin) y despliegue automático con cada push a main.',
      en: 'Fullstack app: product catalog, orders with a full cycle (creation → delivery/cancellation), role-based authentication (customer/staff/admin), and automatic deployment on every push to main.',
      pt: 'App fullstack: catálogo de produtos, pedidos com ciclo completo (criação → entrega/cancelamento), autenticação por papéis (cliente/staff/admin) e implantação automática a cada push na main.',
    },
    result: {
      es: '114 tests automatizados y CI/CD que redespliega frontend (GitHub Pages) y API (Vercel) en cada push.',
      en: '114 automated tests and CI/CD that redeploys the frontend (GitHub Pages) and API (Vercel) on every push.',
      pt: '114 testes automatizados e CI/CD que reimplanta o frontend (GitHub Pages) e a API (Vercel) a cada push.',
    },
    stack: ['React', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Upstash Redis', 'Tailwind', 'Vitest'],
    links: [
      { icon: 'globe', label: { es: 'Ver demo', en: 'View demo', pt: 'Ver demo' }, url: 'https://icruzdaniel.github.io/fast-foody' },
      { icon: 'user', label: { es: 'Demo staff', en: 'Staff demo', pt: 'Demo equipe' }, url: 'https://icruzdaniel.github.io/fast-foody/login' },
      { icon: 'github', label: { es: 'Ver código', en: 'View code', pt: 'Ver código' }, url: 'https://github.com/iCruzDaniel/fast-foody' },
    ],
    captions: {
      'ss1_user_loged.webp': '',
      'ss2_carrito.webp': '',
      'ss3.webp': '',
      'ss4.webp': '',
      'ss5.webp': '',
    },
  },
  {
    id: 'referio',
    title: 'ReferIO',
    category: 'web',
    fit: 'contain',
    bg: 'var(--color-grey-6)',
    tagline: {
      es: 'Plataforma de programas de referidos con cupones de descuento y control de acceso por jerarquía.',
      en: 'Referral program platform with discount coupons and hierarchy-based access control.',
      pt: 'Plataforma de programas de indicação com cupons de desconto e controle de acesso por hierarquia.',
    },
    problem: {
      es: 'Las empresas pierden el control de los descuentos que otorgan los empleados por referidos: cupones que exceden el límite de su rol y sin rastreo de la conversión.',
      en: 'Companies lose control over discounts granted by employees through referrals: coupons exceeding their role limit and no conversion tracking.',
      pt: 'As empresas perdem o controle sobre os descontos concedidos pelos funcionários por meio de indicações: cupons que excedem o limite do seu papel e sem rastreamento da conversão.',
    },
    solution: {
      es: 'Sistema Symfony con roles jerárquicos (Admin → Manager → Supervisor → Employee) que valida cada cupón contra el límite del rol y rastrea el ciclo completo del referido: pendiente → contactado → convertido.',
      en: 'Symfony system with hierarchical roles (Admin → Manager → Supervisor → Employee) that validates each coupon against the role limit and tracks the full referral cycle: pending → contacted → converted.',
      pt: 'Sistema Symfony com papéis hierárquicos (Admin → Manager → Supervisor → Employee) que valida cada cupom contra o limite do papel e rastreia o ciclo completo da indicação: pendente → contatado → convertido.',
    },
    result: {
      es: 'MVP funcional con 4 niveles de rol, validación automática de permisos y trail de auditoría de cupones.',
      en: 'Functional MVP with 4 role levels, automatic permission validation, and a coupon audit trail.',
      pt: 'MVP funcional com 4 níveis de papel, validação automática de permissões e trilha de auditoria de cupons.',
    },
    stack: ['Symfony', 'PHP', 'MySQL', 'Bootstrap', 'Docker', 'PHPUnit'],
    links: [{ icon: 'github', label: { es: 'Ver código', en: 'View code', pt: 'Ver código' }, url: 'https://github.com/iCruzDaniel/refer-io' }],
    captions: { 'cover.webp': '' },
  },
  {
    id: 'axioma-energy',
    title: 'Axioma Energy',
    category: 'web',
    fit: 'contain',
    bg: '#ffffff',
    tagline: {
      es: 'Sitio web corporativo para una consultora de energía en Latinoamérica.',
      en: 'Corporate website for an energy consultancy in Latin America.',
      pt: 'Site corporativo para uma consultoria de energia na América Latina.',
    },
    problem: {
      es: 'La consultora no tenía presencia web que comunicara su oferta de servicios a clientes corporativos.',
      en: 'The consultancy had no web presence to communicate its service offering to corporate clients.',
      pt: 'A consultoria não tinha presença web para comunicar sua oferta de serviços a clientes corporativos.',
    },
    solution: {
      es: 'Landing corporativa con identidad de marca, servicios y contacto, publicada en producción.',
      en: 'Corporate landing with brand identity, services, and contact, published to production.',
      pt: 'Landing corporativa com identidade de marca, serviços e contato, publicada em produção.',
    },
    result: {
      es: 'Sitio en producción y operando como canal principal de presentación de la marca.',
      en: 'Site in production operating as the brand main presentation channel.',
      pt: 'Site em produção operando como principal canal de apresentação da marca.',
    },
    stack: ['HTML', 'CSS', 'JavaScript'],
    links: [{ icon: 'globe', label: { es: 'Ver sitio', en: 'Visit site', pt: 'Ver site' }, url: 'https://axiomaenergy.co' }],
    captions: { 'ss1.webp': '', 'ss2.webp': '' },
  },
  {
    id: 'aerolab',
    title: 'AeroLab Cartagena',
    category: 'web',
    fit: 'contain',
    bg: 'var(--color-grey-6)',
    tagline: {
      es: 'Sitio web de la primera asociación de aeromodelismo de Cartagena.',
      en: 'Website for the first aeromodeling association in Cartagena.',
      pt: 'Site da primeira associação de aeromodelismo de Cartagena.',
    },
    problem: {
      es: 'Un grupo de estudiantes fundó la primera asociación de aeromodelismo de la ciudad y no tenía cómo mostrar sus proyectos ni sumar nuevos integrantes.',
      en: 'A group of students founded the city first aeromodeling association and had no way to showcase their projects or attract new members.',
      pt: 'Um grupo de estudantes fundou a primeira associação de aeromodelismo da cidade e não tinha como mostrar seus projetos nem atrair novos integrantes.',
    },
    solution: {
      es: 'Landing institucional con portafolio de proyectos, sección sobre nosotros y formulario de contacto, desplegada para la asociación.',
      en: 'Institutional landing with a project portfolio, about-us section, and contact form, deployed for the association.',
      pt: 'Landing institucional com portfólio de projetos, seção sobre nós e formulário de contato, implantada para a associação.',
    },
    result: {
      es: 'Primer canal de presencia digital y captación de miembros de la asociación.',
      en: 'The association first digital presence and member recruitment channel.',
      pt: 'Primeiro canal de presença digital e captação de membros da associação.',
    },
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    links: [{ icon: 'globe', label: { es: 'Ver sitio', en: 'Visit site', pt: 'Ver site' }, url: 'https://aerolabcartagena-tj6cb.ondigitalocean.app' }],
    captions: { 'ss1.webp': '', 'ss2.webp': '', 'ss3.webp': '' },
  },
  {
    id: 'ggc',
    title: 'GGC',
    category: 'web',
    fit: 'contain',
    bg: 'var(--color-grey-6)',
    tagline: {
      es: 'Sitio corporativo de consultora de energía y software para mercados latinoamericanos.',
      en: 'Corporate site for an energy and software consultancy serving Latin American markets.',
      pt: 'Site corporativo de consultoria de energia e software para mercados latino-americanos.',
    },
    problem: {
      es: 'GGC, firma de consultoría en optimización estocástica y analítica para mercados energéticos, necesitaba comunicar servicios especializados a clientes corporativos.',
      en: 'GGC, a consultancy in stochastic optimization and analytics for energy markets, needed to communicate specialized services to corporate clients.',
      pt: 'A GGC, consultoria em otimização estocástica e analytics para mercados de energia, precisava comunicar serviços especializados a clientes corporativos.',
    },
    solution: {
      es: 'Web corporativa con servicios (análisis regulatorio, simulación, modelos financieros, data analytics y desarrollo de software) y presencia de marca.',
      en: 'Corporate website with services (regulatory analysis, simulation, financial models, data analytics, and software development) and brand presence.',
      pt: 'Site corporativo com serviços (análise regulatória, simulação, modelos financeiros, data analytics e desenvolvimento de software) e presença de marca.',
    },
    result: {
      es: 'Sitio en producción como presentación oficial de servicios de la firma.',
      en: 'Site in production as the firm official services presentation.',
      pt: 'Site em produção como apresentação oficial dos serviços da firma.',
    },
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    links: [{ icon: 'globe', label: { es: 'Ver sitio', en: 'Visit site', pt: 'Ver site' }, url: 'https://ggc.aluez.com/' }],
    captions: { 'ss1.webp': '', 'ss2.webp': '', 'ss3.webp': '' },
  },

  // ─── MECHATRONICS ───
  {
    id: 'sihni',
    title: 'SIHNI',
    category: 'mechatronics',
    tagline: {
      es: 'Un panel web que le dice al personal de aseo si una habitación está libre u ocupada, en tiempo real, sin instalar nada invasivo.',
      en: 'A web panel that tells housekeeping staff whether a room is vacant or occupied, in real time, with nothing invasive to install.',
      pt: 'Um painel web que informa à equipe de limpeza se um quarto está livre ou ocupado, em tempo real, sem instalar nada invasivo.',
    },
    problem: {
      es: 'El aseo se organiza por horarios acordados ("la 501 se limpia a las 10am"), no por el estado real: si el huésped sigue adentro, igual tocan la puerta e interrumpen. La tarjeta que activa la luz sí sabía la verdad, pero nadie podía verla desde afuera.',
      en: 'Housekeeping is organized by agreed schedules ("room 501 gets cleaned at 10am"), not by actual state: if the guest is still inside, staff knock and interrupt anyway. The card switch that powers the light did know the truth, but nobody could see it from outside.',
      pt: 'A limpeza é organizada por horários combinados ("o 501 se limpa às 10h"), não pelo estado real: se o hóspede ainda estiver dentro, batem na porta e interrompem mesmo assim. O interruptor do cartão que acende a luz sabia a verdade, mas ninguém podia vê-la de fora.',
    },
    solution: {
      es: 'Un sensor de bolsillo se pega al interruptor de la tarjeta y solo observa si hay corriente: no modifica nada. Al insertar la tarjeta, el panel pasa la habitación a "Ocupada"; si el sensor deja de reportar, la muestra en gris ("Sin datos") en vez de asumir "Libre". Sin cámaras ni cambios en cerraduras.',
      en: 'A pocket-size sensor sticks onto the card switch and only watches for current: it changes nothing. When a card is inserted, the panel marks the room "Occupied"; if the sensor stops reporting, it shows grey ("No data") instead of assuming "Vacant". No cameras, no lock changes.',
      pt: 'Um sensor de bolso é colado no interruptor do cartão e apenas observa se há corrente: não modifica nada. Ao inserir o cartão, o painel passa o quarto para "Ocupado"; se o sensor para de reportar, mostra cinza ("Sem dados") em vez de assumir "Livre". Sem câmeras nem mudanças nas fechaduras.',
    },
    result: {
      es: '6 de 9 etapas completadas y 32 pruebas automáticas en verde. Las 10 habitaciones de la prueba reflejan el cambio en menos de 0,1 s y pasaron a "Sin datos" solas al cortarse la señal — justo el comportamiento de seguridad buscado. Costo por habitación: dos componentes pequeños.',
      en: '6 of 9 stages completed and 32 automated tests green. The 10 pilot rooms reflect changes in under 0.1 s and switched to "No data" on their own when the signal was cut — exactly the fail-safe behavior we were after. Cost per room: two small components.',
      pt: '6 de 9 etapas concluídas e 32 testes automatizados em verde. Os 10 quartos do piloto refletem a mudança em menos de 0,1 s e passaram sozinhos para "Sem dados" quando o sinal foi cortado — exatamente o comportamento de segurança buscado. Custo por quarto: dois componentes pequenos.',
    },
    stack: ['ESP32', 'PlatformIO', 'Optoacoplador', 'MQTT', 'Mosquitto', 'Node.js', 'Express', 'Redis', 'Upstash', 'Vue 3', 'Pinia', 'Vue Router', 'Vite', 'Docker Compose', 'JWT', 'Argon2', 'Vercel'],
    links: [{ icon: 'github', label: { es: 'Ver código', en: 'View code', pt: 'Ver código' }, url: 'https://github.com/iCruzDaniel/sihni' }],
    captions: { 'cover.webp': '' },
  },
  {
    id: 'sentinel',
    title: 'SENTINEL',
    category: 'mechatronics',
    tagline: {
      es: 'Bote autónomo que monitorea la calidad del agua y alerta en tiempo real, sin depender de muestreos manuales.',
      en: 'Autonomous boat that monitors water quality and alerts in real time, with no manual sampling.',
      pt: 'Barco autônomo que monitora a qualidade da água e alerta em tempo real, sem depender de amostragens manuais.',
    },
    problem: {
      es: 'Los cuerpos de agua urbanos de Cartagena (como el Laguito de Bocagrande) no se monitorean de forma continua: el muestreo manual es caro, puntual y no escala, así que los problemas de calidad del agua se detectan tarde.',
      en: 'Urban water bodies in Cartagena (like the Laguito de Bocagrande) are not monitored continuously: manual sampling is expensive, sporadic, and does not scale, so water quality problems are detected late.',
      pt: 'Os corpos d\u2019água urbanos de Cartagena (como o Laguito de Bocagrande) não são monitorados continuamente: a amostragem manual é cara, pontual e não escala, então os problemas de qualidade da água são detectados tarde.',
    },
    solution: {
      es: 'Un bote no tripulado navega solo por puntos definidos, mide pH, turbidez y temperatura, y envía los datos por internet en tiempo real a un panel web con mapa de navegación y reportes descargables.',
      en: 'An uncrewed boat navigates defined waypoints on its own, measures pH, turbidity, and temperature, and sends data online in real time to a web panel with a navigation map and downloadable reports.',
      pt: 'Um barco não tripulado navega sozinho por pontos definidos, mede pH, turbidez e temperatura, e envia os dados pela internet em tempo real a um painel web com mapa de navegação e relatórios baixáveis.',
    },
    result: {
      es: 'Prototipo validado en el Laguito de Bocagrande: navegación autónoma completa con mediciones en tiempo real (error ≤ 2%), telemetría estable a más de 100 m de distancia y monitoreo desde cualquier lugar con conexión.',
      en: 'Prototype validated at the Laguito de Bocagrande: full autonomous navigation with real-time measurements (error ≤ 2%), stable telemetry beyond 100 m, and monitoring from anywhere with a connection.',
      pt: 'Protótipo validado no Laguito de Bocagrande: navegação autônoma completa com medições em tempo real (erro ≤ 2%), telemetria estável a mais de 100 m e monitoramento de qualquer lugar com conexão.',
    },
    stack: ['ESP32 / FreeRTOS', 'C/C++', 'ArduPilot', 'MAVLink', 'MQTT', 'React', 'Python', 'MySQL', 'InfluxDB', 'AWS Cognito', 'Docker', 'AWS EC2', 'AWS IoT Core'],
    links: [{ icon: 'github', label: { es: 'Ver código', en: 'View code', pt: 'Ver código' }, url: 'https://github.com/ISCOUTB/Sentinel' }],
    captions: {
      'ss1.webp': { es: 'HMI de control del USV Sentinel.', en: 'Sentinel USV control HMI.', pt: 'HMI de controle do USV Sentinel.' },
      'ss2.webp': { es: 'USV en misión en cuerpo de agua real.', en: 'USV on mission in a real water body.', pt: 'USV em missão em corpo d\u2019água real.' },
      'ss3.webp': { es: 'Infraestructura cloud del proyecto.', en: 'Project cloud infrastructure.', pt: 'Infraestrutura em nuvem do projeto.' },
      'ss4.webp': { es: 'Logs IoT en AWS.', en: 'IoT logs on AWS.', pt: 'Logs de IoT na AWS.' },
      'ss5.webp': { es: 'Generación de reportes automáticos.', en: 'Automatic report generation.', pt: 'Geração de relatórios automáticos.' },
    },
  },
  {
    id: 'hexplorer',
    title: 'HEX-PLORER',
    category: 'mechatronics',
    tagline: {
      es: 'Hexápodo teledirigido para mapear y detectar condiciones irregulares en zonas de difícil acceso.',
      en: 'Remote-controlled hexapod to map and detect irregular conditions in hard-to-reach areas.',
      pt: 'Hexápode controlado remotamente para mapear e detectar condições irregulares em áreas de difícil acesso.',
    },
    problem: {
      es: 'Inspeccionar terrenos irregulares o peligrosos pone en riesgo a las personas y exige equipos costosos.',
      en: 'Inspecting irregular or dangerous terrain puts people at risk and requires expensive equipment.',
      pt: 'Inspecionar terrenos irregulares ou perigosos coloca pessoas em risco e exige equipamentos caros.',
    },
    solution: {
      es: 'Prototipo de hexápodo con control remoto Bluetooth, HMI de escritorio para análisis de sensores, ~30 min de autonomía y detección de obstáculos en radio de 80 cm.',
      en: 'Hexapod prototype with Bluetooth remote control, desktop HMI for sensor analysis, ~30 min battery life, and obstacle detection within an 80 cm radius.',
      pt: 'Protótipo de hexápode com controle remoto Bluetooth, HMI de desktop para análise de sensores, ~30 min de autonomia e detecção de obstáculos em raio de 80 cm.',
    },
    result: {
      es: 'Prototipo funcional de mapeo y teledetección remota, con obstáculos detectados horizontalmente a 80 cm del centroide.',
      en: 'Functional remote-mapping and telemetry prototype, with obstacles detected horizontally at 80 cm from the centroid.',
      pt: 'Protótipo funcional de mapeamento e teledetecção remota, com obstáculos detectados horizontalmente a 80 cm do centroide.',
    },
    stack: ['Java', 'Scene Builder', 'Arduino', 'C++', 'Bluetooth'],
    links: [{ icon: 'github', label: { es: 'Ver código', en: 'View code', pt: 'Ver código' }, url: 'https://github.com/iCruzDaniel/HEX-PLORER' }],
  },
  {
    id: 'robotsoccers',
    title: 'RobotSoccers',
    category: 'mechatronics',
    tagline: {
      es: 'Robots futbolistas con ruedas omnidireccionales, visión artificial y control inteligente.',
      en: 'Soccer robots with omnidirectional wheels, computer vision, and intelligent control.',
      pt: 'Robôs de futebol com rodas omnidirecionais, visão computacional e controle inteligente.',
    },
    problem: {
      es: 'El semillero UTBot necesitaba una plataforma física y de software para entrenar a nuevos integrantes en robótica competitiva de RobotSoccer.',
      en: 'The UTBot youth program needed a physical and software platform to train new members in competitive RobotSoccer robotics.',
      pt: 'O semillero UTBot precisava de uma plataforma física e de software para treinar novos integrantes em robótica competitiva de RobotSoccer.',
    },
    solution: {
      es: 'Robots con ruedas omnidireccionales que integran visión artificial (percepción del entorno y del balón), control inteligente autónomo y una HMI para configurar y monitorear el partido.',
      en: 'Robots with omnidirectional wheels integrating computer vision (environment and ball perception), autonomous intelligent control, and an HMI to set up and monitor the match.',
      pt: 'Robôs com rodas omnidirecionais que integram visão computacional (percepção do ambiente e da bola), controle inteligente autônomo e uma HMI para configurar e monitorar a partida.',
    },
    result: {
      es: 'Plataforma diseñada para competencias de robótica de Cartagena, capaz de jugar sin intervención humana durante el partido.',
      en: 'Platform designed for Cartagena robotics competitions, able to play with no human intervention during the match.',
      pt: 'Plataforma projetada para competições de robótica de Cartagena, capaz de jogar sem intervenção humana durante a partida.',
    },
    stack: ['Python', 'Arduino', 'Qt', 'YOLOv8'],
    links: [{ icon: 'github', label: { es: 'Ver código', en: 'View code', pt: 'Ver código' }, url: 'https://github.com/iCruzDaniel/RobotSoccers' }],
  },
];
