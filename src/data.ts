import { ExperienceItem, EducationItem, SubstackArticle, SkillCategory } from './types';

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'drogueria_20_de_junio',
    role: 'Responsable de Marketing',
    company: 'Droguería 20 de Junio',
    location: 'Rosario, Santa Fe (Salud / Medicamentos)',
    period: 'Septiembre 2021 – Actualidad',
    category: 'marketing',
    bullets: [
      'Área de Marketing creada desde cero: Llegué a una empresa sin departamento de marketing y construí el área completa: estructura, equipo, procesos y plan de marketing anual con indicadores de rendimiento (KPIs).',
      'Diseño e implementación de la estrategia de rebranding de marca corporativa para adaptarla a la expansión nacional del negocio.',
      'Liderazgo y dirección de canales de venta digital (E-commerce), incrementando la conversión y la facturación digital de manera sostenida.',
      'Organización integral y coordinación comercial de la ExpoFarma20: un mega evento de negocios propio con rondas de negocios, shows artísticos, y espacios de networking frente a principales laboratorios nacionales, farmacias de la región y público masivo.'
    ],
    achievements: [
      'Creación del departamento de marketing completo partiendo de bases nulas.',
      'Lanzamiento exitoso de la identidad de marca renovada (Rebranding 360°).',
      'Dirección del canal e-commerce con foco analítico en conversión de punta a punta.',
      'Planificación y éxito logístico de ExpoFarma20 con récord de auspiciantes y asistentes.'
    ]
  },
  {
    id: 'randstad_marketing_manager',
    role: 'Digital Marketing Manager',
    company: 'Randstad Argentina y Uruguay',
    location: 'Buenos Aires / Rosario',
    period: 'Enero 2017 – Agosto 2021',
    category: 'marketing',
    bullets: [
      'Gestión y monitoreo de la estrategia digital a nivel táctico y estratégico para Argentina y Uruguay.',
      'Coordinación de campañas online y offline (Google Ads, programmatic display, email marketing, redes sociales).',
      'Implementación de estrategias avanzadas de SEO y optimizaciones técnicas para el posicionamiento orgánico.',
      'Creación, seguimiento y análisis de reportes de performance digital (KPIs, ROAS, conversión).',
      'Gestión de proveedores, presupuestos regionales y coordinación directa con la agencia creativa externa.',
      'Liderazgo y supervisión de un equipo interno directo de 3 personas.'
    ],
    achievements: [
      'Implementación exitosa del nuevo concepto global de marca corporativa a nivel regional (online y offline).',
      'Logré un incremento de +50% en posicionamiento orgánico (SEO) y mayor estabilidad del tráfico del portal.',
      'Participé activamente en el proyecto global de transformación digital de la corporación: "Project Talent Factory".'
    ]
  },
  {
    id: 'randstad_jefa_diseno',
    role: 'Jefa de Diseño',
    company: 'Randstad Argentina y Uruguay',
    location: 'Buenos Aires / Rosario',
    period: 'Enero 2014 – Diciembre 2016',
    category: 'design',
    bullets: [
      'Coordinación y supervisión de tareas de diseño gráfico, maquetación web y comunicación visual de la compañía.',
      'Creación y ejecución de campañas creativas de engagement para personal interno, fortaleciendo el Employer Branding.',
      'Diseño y dirección de arte de materiales institucionales, editoriales, memorias anuales y piezas publicitarias.',
      'Gestión del presupuesto asignado y relación comercial con imprentas y proveedores del área de diseño.',
      'Trabajo interdisciplinario constante junto a los departamentos de Comunicación Institucional y Recursos Humanos.'
    ],
    achievements: [
      'Unifiqué la línea de identidad gráfica corporativa en todas las unidades de negocio de Argentina y Uruguay, optimizando los tiempos de entrega en un 30%.'
    ]
  },
  {
    id: 'randstad_responsable_diseno',
    role: 'Responsable de Diseño',
    company: 'Randstad Argentina',
    location: 'Rosario, Santa Fe',
    period: 'Julio 2012 – Diciembre 2013',
    category: 'design',
    bullets: [
      'Diseño, conceptualización y adaptación de piezas visuales para redes sociales y comunicación interna.',
      'Colaboración directa en campañas y desarrollo de materiales corporativos promocionales.',
      'Diseño editorial, armado de piezas para campañas de mailing y soporte gráfico integral a nivel país.'
    ],
    achievements: []
  },
  {
    id: 'randstad_analista_diseno',
    role: 'Analista de Diseño',
    company: 'Randstad Argentina',
    location: 'Rosario, Santa Fe',
    period: 'Junio 2008 – Junio 2012',
    category: 'design',
    bullets: [
      'Diseño de piezas gráficas para uso interno y externo (folletería, banners, papelería institucional).',
      'Generación de contenidos visuales interactivos para plataformas digitales internas de la empresa.',
      'Soporte creativo general para la gerencia de marketing y comunicación.'
    ],
    achievements: []
  },
  {
    id: 'fomo_streaming',
    role: 'Co-Creadora & Host',
    company: 'FOMO Streaming',
    location: 'Rosario, Santa Fe (Proyectos Freelance)',
    period: '2024 – Actualidad',
    category: 'freelance_streaming',
    bullets: [
      'Co-creación del concepto de programa, identidad de marca, y dirección general del canal de streaming.',
      'Producción ejecutiva de contenidos sobre marketing digital, branding, inteligencia artificial, psicología del consumidor y negocios.',
      'Conducción del programa en vivo junto a un equipo multidisciplinario de profesionales.',
      'Desarrollo de guiones para episodios, coordinación de entrevistas con referentes, estructuración de bloques temáticos.',
      'Generación de comunidad, engagement y crecimiento orgánico de la marca en plataformas sociales (Instagram, YouTube, TikTok).'
    ],
    achievements: [
      '+20 episodios transmitidos en vivo con referentes líderes del sector de tecnología y marketing, consolidando un espacio dinámico de alto valor educativo.',
      'Establecimiento de alianzas de patrocinio y desarrollo técnico de una puesta de transmisión profesional.'
    ]
  },
  {
    id: 'melimel_studio',
    role: 'Fundadora & Directora Creativa',
    company: 'Estudio MeliMel',
    location: 'Rosario, Santa Fe (Emprendimiento propio)',
    period: '2017 – 2020',
    category: 'freelance_streaming',
    bullets: [
      'Creación y dirección de un estudio de fotografía y diseño boutique, especializado en fotografía de productos infantiles.',
      'Desarrollo de identidad visual integral, diseño de marca y sitios web para emprendimientos independientes (Deckstone, Seiso, Provefarma).',
      'Creación de contenido audiovisual estratégico y gestión de redes sociales para clientes externos.'
    ],
    achievements: [
      'Posicioné el estudio a nivel local, logrando una cartera de más de 30 clientes recurrentes de forma 100% independiente.',
      'Adquirí una sólida competencia en gestión de tiempos, captación de leads comerciales y armado de equipos interdisciplinarios.'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu_1',
    title: 'MBA in Digital Business (Transformación Digital)',
    school: 'IEBS School (Barcelona, España)',
    period: '2020 – 2021'
  },
  {
    id: 'edu_2',
    title: 'Diplomatura en Marketing Digital con orientación E-commerce',
    school: 'ITBA (Instituto Tecnológico de Buenos Aires)',
    period: '2019 – 2020'
  },
  {
    id: 'edu_3',
    title: 'Project Management Program',
    school: 'UADE Business School',
    period: '2023'
  },
  {
    id: 'edu_4',
    title: 'Diplomado en Gestión Ágil de Proyectos',
    school: 'Fundación Libertad',
    period: '2019'
  },
  {
    id: 'edu_5',
    title: 'Licenciatura en Diseño y Comunicación Visual',
    school: 'UNR (Universidad Nacional de Rosario)',
    period: 'Título en curso (adeudo tesis)'
  },
  {
    id: 'edu_6',
    title: 'Diseño Gráfico y Comunicación Visual',
    school: 'IES Santa Fe Nº9233',
    period: 'Título Terciario de Grado'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Marketing Digital & Estrategia',
    skills: ['E-commerce', 'Branding Estratégico', 'Plan de Marketing Anual', 'SEO & Posicionamiento', 'Google Ads', 'Meta Business Suite', 'HubSpot & CRM', 'Email Marketing (Mailchimp/Doppler)'],
    iconName: 'TrendingUp'
  },
  {
    title: 'Diseño & Creatividad',
    skills: ['Identidad Corporativa', 'Dirección de Arte', 'Diseño Web (UX/UI)', 'Adobe Creative Suite', 'Canva', 'Fotografía de Producto & Iluminación', 'Producción Audiovisual'],
    iconName: 'Palette'
  },
  {
    title: 'Gestión de Proyectos & Metodologías',
    skills: ['Project Management', 'Metodologías Ágiles (Scrum/Kanban)', 'Gestión del Presupuesto', 'Liderazgo de Equipos', 'Herramientas (Trello, Asana, Notion)', 'Pensamiento Analítico'],
    iconName: 'CheckSquare'
  }
];

export const INITIAL_ARTICLES: SubstackArticle[] = [
  {
    id: 'art_1',
    title: 'E-commerce & Conversión: Claves para optimizar tu retorno de inversión',
    excerpt: 'Análisis y estrategias reales para potenciar la tasa de conversión en tiendas online. Cómo ordenar tu inversión publicitaria y automatizar la fidelización de clientes de punta a punta.',
    date: 'Junio 2026',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    readTime: '5 min de lectura',
    link: 'https://substack.com/@melifontanessi',
    category: 'E-commerce'
  },
  {
    id: 'art_2',
    title: 'Cómo estructurar el departamento de marketing de tu empresa desde cero',
    excerpt: 'Guía práctica para fundar las bases del área en PYMEs y corporaciones. Roles clave, KPIs indispensables y la integración de tecnología e Inteligencia Artificial en tus procesos diarios.',
    date: 'Mayo 2026',
    coverImage: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80',
    readTime: '7 min de lectura',
    link: 'https://substack.com/@melifontanessi',
    category: 'Consultoría'
  },
  {
    id: 'art_3',
    title: 'Detrás de escena de FOMO Streaming: Branding y contenido de alto valor',
    excerpt: 'Mis aprendizajes co-creando y liderando más de 20 transmisiones en vivo con referentes de la industria. Por qué el contenido honesto y colaborativo construye una verdadera reputación.',
    date: 'Abril 2026',
    coverImage: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    readTime: '6 min de lectura',
    link: 'https://substack.com/@melifontanessi',
    category: 'Branding'
  }
];
