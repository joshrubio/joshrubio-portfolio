// Spanish text of the project cards (home grid and /work). The case-study pages themselves are English-only.
export interface ProjectTextEs {
    label: string
    subtitle: string
    workTitle: string
    description: string
}

export const projectsEs: Record<string, ProjectTextEs> = {
    "learn-by-doing": {
        label: "HERRAMIENTAS DE IA",
        subtitle: "Plugin de aprendizaje para Claude Code",
        workTitle: "Learn by Doing - Plugin para Claude Code",
        description: "Un plugin de Claude Code que convierte cada commit de Claude en lecciones breves, guardadas en Markdown y estudiadas después con repaso espaciado y un mapa 3D de lo que sabes. Diseñado y construido de principio a fin."
    },
    "lifepoint-church": {
        label: "FULL-STACK",
        subtitle: "De WordPress a una plataforma a medida",
        workTitle: "Lifepoint Church - Plataforma a medida",
        description: "Una web de iglesia que creció de un tema de WordPress a una plataforma en cuatro idiomas: un sitio público en Next.js, una consola de contenido y una API en NestJS, con accesibilidad, modo oscuro y soporte de árabe de derecha a izquierda. Construida con Oswaldo."
    },
    "the-new-paper": {
        label: "FULL-STACK",
        subtitle: "Periódico local trilingüe",
        workTitle: "The New Paper - Periódico local",
        description: "Un periódico local para Róterdam con consola de publicación, newsletter con doble confirmación y comentarios verificados por correo. Los artículos viven en git y los datos personales en Redis. Diseñado y construido de principio a fin."
    },
    pressroom: {
        label: "AUTOMATIZACIÓN",
        subtitle: "Automatización de notas de prensa",
        workTitle: "Pressroom - Automatización de notas de prensa",
        description: "Una memoria en markdown y git que permite a Claude Code redactar notas de prensa en neerlandés para una periodista independiente y recordar cada contacto y mensaje. Un repositorio público sin contactos dentro."
    },
    siegfried: {
        label: "FULL-STACK E IA",
        subtitle: "Plano de control de desarrollo",
        workTitle: "Siegfried - Plano de control de desarrollo",
        description: "Una bóveda de markdown con búsqueda RAG sobre Supabase y pgvector, más un kanban que siguió cinco apps satélite desde la idea hasta el lanzamiento. Diseñado y construido de principio a fin."
    },
    argus: {
        label: "APP WEB",
        subtitle: "Consola de operaciones simulada",
        workTitle: "Argus - Consola de operaciones",
        description: "Un panel de operaciones centrado en el mapa: una simulación con semilla de ocho activos, un feed de eventos en vivo y un motor de reglas que explica cada recomendación. Un satélite de Siegfried."
    },
    athena: {
        label: "APP WEB",
        subtitle: "Planificador de misiones para enjambres de drones",
        workTitle: "Athena - Planificador de misiones",
        description: "Dibuja un área en un mapa real y obtén un plan de cobertura boustrofedon repartido entre una flota, con una reproducción cinemática del enjambre. Un satélite de Siegfried."
    },
    themis: {
        label: "INTERFAZ DE IA",
        subtitle: "Visor de hallazgos de cumplimiento",
        workTitle: "Themis - Hallazgos de cumplimiento",
        description: "Hallazgos NIST SP 800-171 generados por un LLM sobre infraestructura como código, mostrados como un registro estilo escáner con páginas de detalle y un pegar-y-escanear en vivo. Un satélite de Siegfried."
    },
    siren: {
        label: "INTERFAZ DE ML",
        subtitle: "Visor de clasificación acústica",
        workTitle: "Siren - Visor del clasificador acústico",
        description: "Una capa de interpretación sobre un clasificador real de ruido de buques: espectrogramas, confianza por clase y una página honesta sobre dónde falla el modelo. Un satélite de Siegfried."
    },
    janus: {
        label: "FULL-STACK E IA",
        subtitle: "Portal de plataforma para desarrolladores",
        workTitle: "Janus - Plataforma para desarrolladores",
        description: "Un portal de autoservicio para desarrolladores en miniatura: catálogo de servicios, aprovisionamiento simulado, pipelines y un asistente RAG sobre sus propios documentos. Un satélite de Siegfried."
    },
    "conquest-brain": {
        label: "AUTOMATIZACIÓN",
        subtitle: "Pipeline de producción para YouTube",
        workTitle: "Conquest Brain - Automatización de contenido",
        description: "Un flujo documentado de 12 etapas con herramientas en Python y un panel local que lleva un episodio documental de YouTube desde la idea hasta el máster en 4K. Diseñado y construido de principio a fin."
    },
    "teller-framework": {
        label: "AUTOMATIZACIÓN",
        subtitle: "Biblia de historia con IA para escritores",
        workTitle: "Teller Framework - Biblia de historia con IA",
        description: "Una biblia de historia basada en archivos donde los nodos markdown declaran sus propias dependencias, para que cualquier IA con acceso a archivos pueda escribir ficción coherente y fiel al canon a lo largo de las sesiones."
    },
    "the-long-run": {
        label: "BRANDING",
        subtitle: "Identidad de marca",
        workTitle: "The Long Run - Identidad de marca",
        description: "Identidad de marca para una marca de nutrición para mascotas: familia de logos, sistema de color y tipografía, empaques, redes sociales, ropa y un sistema de 30 plantillas de correo construido sobre una promesa, More Days Together."
    },
    "rx-library": {
        label: "APP WEB",
        subtitle: "Plataforma de telesalud",
        workTitle: "RX Library - Plataforma de telesalud",
        description: "Una plataforma de telesalud multiinquilino de marca blanca basada en FHIR: app de pacientes, consola de operador y portal clínico en una sola aplicación Next.js. Trabajé en el frontend y en la lógica de negocio."
    },
    "rxlibrary-homepage": {
        label: "DISEÑO Y DESARROLLO WEB",
        subtitle: "Sitio de marketing interactivo",
        workTitle: "RX Library - Sitio de marketing interactivo",
        description: "El sitio de marketing de la plataforma de telesalud RX Library: una narrativa guiada por 3D, una historia de producto modular y vistas previas interactivas por rol. Diseñado y desarrollado de principio a fin."
    },
    "pharmacy-time": {
        label: "WORDPRESS",
        subtitle: "Sitio de farmacia con WooCommerce",
        workTitle: "PharmacyTime - Sitio de farmacia",
        description: "Un tema de WordPress a medida y una tienda WooCommerce para una marca de farmacia, con un pipeline en Python que sincroniza el catálogo desde Airtable. Diseñado y desarrollado de principio a fin."
    },
    heytides: {
        label: "WORDPRESS",
        subtitle: "Sitio de farmacia de péptidos",
        workTitle: "HeyTides - Sitio de farmacia de péptidos",
        description: "Un sitio para una farmacia moderna de formulación magistral y péptidos: tema de WordPress a medida, tienda WooCommerce y un catálogo gestionado desde Airtable. Diseñado y desarrollado de principio a fin."
    },
    mesa360: {
        label: "UX/UI",
        subtitle: "Sistema POS (UX/UI)",
        workTitle: "Mesa360 - Sistema POS",
        description: "Un sistema de punto de venta completo diseñado para agilizar la gestión de restaurantes. Incluye control de inventario, gestión de personal y analítica en tiempo real."
    },
    teller: {
        label: "UX/UI",
        subtitle: "Asistente de escritura con IA (UX/UI)",
        workTitle: "Teller - Asistente de escritura con IA",
        description: "Asistente de escritura con IA que ayuda a mejorar el estilo y el tono. Ofrece comentarios inteligentes, un espacio de trabajo unificado y trazado visual de la trama."
    },
    moods: {
        label: "UX/UI",
        subtitle: "Plataforma social de música (UX/UI)",
        workTitle: "MOODS - Plataforma social de música",
        description: "Una plataforma social de música que permite compartir estados de ánimo mediante listas y descubrir música nueva. Un giro desde BeatBoop con foco en la comunidad."
    },
    "take-away": {
        label: "UX/UI",
        subtitle: "App de comida a domicilio (UX/UI)",
        workTitle: "Take Away - App de comida a domicilio",
        description: "Una app de comida a domicilio pensada para clientes y restaurantes, que combina belleza y simplicidad. MVP desarrollado en 5 semanas."
    },
    "the-sower-store": {
        label: "E-COMMERCE",
        subtitle: "Plataforma de comercio electrónico MERN",
        workTitle: "The Sower Store",
        description: "Una plataforma de comercio electrónico full-stack con el stack MERN, con panel de administración a medida, integración de pagos y diseño responsivo."
    },
    wissen: {
        label: "E-LEARNING",
        subtitle: "Plataforma de e-learning",
        workTitle: "Wissen - Plataforma de aprendizaje",
        description: "Una plataforma de aprendizaje en línea pensada para ofrecer una experiencia educativa fluida a estudiantes e instructores. Incluye gestión de cursos y seguimiento del progreso."
    },
    thinkboard: {
        label: "APP WEB",
        subtitle: "App de notas MERN",
        workTitle: "Thinkboard - App de notas",
        description: "Una aplicación de notas full-stack con el stack MERN, con operaciones CRUD, limitación de peticiones y diseño responsivo."
    },
    "carmen-zambrano": {
        label: "DISEÑO Y DESARROLLO WEB",
        subtitle: "Portfolio de periodista",
        workTitle: "Carmen Zambrano - Portfolio de periodista",
        description: "Un portfolio trilingüe para una periodista con más de 30 años de experiencia, reconstruido de WordPress a un sitio estático en Next.js con movimiento y temas oscuro y claro. Diseñado y desarrollado de principio a fin."
    }
}

const CLIENTS: Record<string, string> = { "Personal Project": "Proyecto personal" }

/** Spanish version of the card fields that are not names (duration, client). */
export function durationEs(duration: string): string {
    if (duration === "Ongoing") return "En curso"
    return duration.replace(/^(\d+) Weeks?$/, (_, n) => `${n} semanas`)
}

export const clientEs = (client: string) => CLIENTS[client] ?? client
