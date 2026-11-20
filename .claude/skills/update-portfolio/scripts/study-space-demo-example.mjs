// Builds a standalone copy of the Learn by Doing study space with a stubbed window.claude and
// synthetic lessons about the portfolio repo itself (public code, no client data).
import { readFileSync, writeFileSync } from "node:fs";

const src = readFileSync(process.env.STUDY_SPACE_HTML, "utf8");
const DAY = 86400000, now = Date.now();
const iso = (d) => new Date(now - d * DAY).toISOString();
const P = { project: "josh-portfolio", projectName: "josh-portfolio" };
const base = { ...P, scope: "universal", kind: "app", languages: ["typescript"], frameworks: ["nextjs"], appearances: [], example: false, primer: false, order: 0 };

const lessons = [
  { id: "portfolio-panorama", primer: true, order: 1, type: "concepto", area: "arquitectura", concept: "app-arquitectura", title: "Qué es este portfolio y cómo está hecho", createdAt: iso(9),
    commit: { hash: "61afee1", message: "base lessons", date: "" },
    context: { building: "Un portfolio que se actualiza con cada proyecto nuevo.", snippetRole: "La lista de proyectos es el único sitio que conoce todos los casos de estudio.", learning: "Cómo se reparten las responsabilidades en una app pequeña." },
    intro: { project: "Portfolio personal en Next.js 14 y TypeScript: una lista de proyectos, una página por caso de estudio y componentes compartidos.", where: "Todo parte de data/projects.ts.", diagram: "data/projects.ts --> /work (tarjetas)\n                 \\-> home (rejilla)\napp/projects/<slug>/page.tsx  <== aquí" },
    predict: "Si añades un proyecto nuevo, ¿cuántos archivos hay que tocar como mínimo?", predictAnswer: "Tres: la entrada en data/projects.ts, la página del caso de estudio y las imágenes.",
    explain: "La lista de proyectos es la única fuente de verdad. Las tarjetas se generan a partir de ella, así que no hay HTML duplicado que mantener.",
    exercise: { modality: "opcion-multiple", prompt: "¿Qué ventaja tiene generar las tarjetas desde un array?", options: ["Es más bonito", "Un proyecto se declara una vez y aparece en todas partes", "Evita escribir páginas", "No hace falta TypeScript"], answer: 1, why: "Una sola fuente evita que la home y /work se desincronicen." }, related: ["fuente-unica-de-verdad"] },
  { id: "fuente-unica-de-verdad", type: "decision", area: "arquitectura", concept: "separacion-de-responsabilidades", title: "Una sola lista para la home y para /work", createdAt: iso(7),
    commit: { hash: "90564b7", message: "refactor: single source of truth for projects", date: "" },
    context: { building: "Quitar tarjetas escritas a mano en dos sitios.", snippetRole: "El tipo Project declara los campos que cada tarjeta puede mostrar.", learning: "Por qué los datos viven separados de la presentación." },
    intro: { project: "Portfolio personal en Next.js.", where: "data/projects.ts y el componente ProjectCard.", diagram: "projects[] --> ProjectCard --> home\n            \\-> ProjectCard --> /work   <== un componente, dos usos" },
    code: { file: "data/projects.ts", text: "export interface Project {\n  slug: string\n  title: string\n  duration?: string   // opcional\n  thumbnail: { src: string; width: number; height: number }\n  categories: ProjectCategory[]\n}" },
    predict: "Un proyecto no tiene duración conocida. ¿Qué debería pasar con su tarjeta?", predictAnswer: "La tarjeta oculta esa fila en lugar de mostrar un hueco o un texto inventado.",
    explain: "Un campo opcional en el tipo obliga a la tarjeta a decidir qué hacer cuando falta, en un solo sitio.",
    exercise: { modality: "justifica", prompt: "Defiende por qué las categorías son un tipo cerrado y no un texto libre.", keyPoints: ["El compilador avisa si escribes una que no existe", "Los botones de filtro se generan de la misma lista", "Un typo no crea una categoría fantasma"], modelAnswer: "Un tipo cerrado convierte un error de escritura en un error de compilación, y la misma lista alimenta los filtros." }, related: ["portfolio-panorama", "tamano-de-imagen-en-build"] },
  { id: "tamano-de-imagen-en-build", type: "concepto", area: "frontend", concept: "next-server-components", scope: "framework", title: "Leer el tamaño de una imagen al compilar", createdAt: iso(6),
    commit: { hash: "6e7a1dc", message: "feat: add six new projects and shared case-study components", date: "" },
    context: { building: "Un componente Figure que no obliga a escribir width y height.", snippetRole: "Se lee la cabecera del archivo en el servidor, durante el build.", learning: "Qué trabajo puede hacerse en el servidor y no llega al navegador." },
    intro: { project: "Portfolio personal en Next.js.", where: "util/image-size.ts y components/projects/ProjectPage.tsx.", diagram: "build: Figure --> getImageSize(src) --> <Image width height>\nnavegador: solo recibe el HTML ya medido   <== aquí" },
    code: { file: "util/image-size.ts", text: "export function getImageSize(src: string) {\n  const file = path.join(process.cwd(), 'public', src)\n  if (!fs.existsSync(file)) return null\n  return readHeader(fs.readFileSync(file))\n}" },
    predict: "¿Se ejecuta fs.readFileSync en el navegador del visitante?", predictAnswer: "No. Es un componente de servidor: corre al compilar y el navegador solo recibe el resultado.",
    explain: "Los componentes de servidor pueden leer archivos. Como la medición ocurre en el build, el visitante no paga nada y la imagen reserva su espacio.",
    exercise: { modality: "predice-salida", prompt: "Si borras una imagen de public/ y compilas, ¿qué renderiza Figure?", options: ["Un error que rompe el build", "Nada: devuelve null y avisa en desarrollo", "Una imagen rota"], answer: 1, why: "getImageSize devuelve null y Figure no pinta nada." }, related: ["fuente-unica-de-verdad"] },
  { id: "composicion-de-componentes", type: "decision", area: "frontend", concept: "react-componentes", scope: "framework", title: "Piezas pequeñas en vez de una plantilla enorme", createdAt: iso(5),
    commit: { hash: "6e7a1dc", message: "feat: add six new projects and shared case-study components", date: "" },
    context: { building: "Páginas de proyecto con el mismo tono y distinto contenido.", snippetRole: "Callout, ProcessSteps o Takeaways se combinan como bloques.", learning: "Composición frente a configuración." },
    intro: { project: "Portfolio personal en Next.js.", where: "components/projects/ProjectPage.tsx.", diagram: "page.tsx --> Section --> Callout\n                  \\-> Figure\n                  \\-> Takeaways   <== bloques que se combinan" },
    predict: "Cada caso de estudio necesita un orden distinto de secciones. ¿Una plantilla con props o bloques sueltos?", predictAnswer: "Bloques sueltos: la página decide el orden y el componente solo pinta.",
    explain: "Los bloques pequeños se combinan como se quiera. Una plantilla con decenas de props acaba necesitando una más cada semana.",
    exercise: { modality: "compara", prompt: "Compara una plantilla con muchas props y un conjunto de bloques componibles.", keyPoints: ["La plantilla es rápida al inicio pero rígida", "Los bloques permiten estructuras distintas", "Los bloques piden más disciplina de estilo"], modelAnswer: "La plantilla da velocidad inicial y rigidez después. Los bloques cuestan más al principio y permiten que cada página cuente su historia." }, related: ["portfolio-panorama"] },
  { id: "rutas-por-carpeta", type: "concepto", area: "frontend", concept: "next-rutas", scope: "framework", title: "Una carpeta es una página", createdAt: iso(4),
    commit: { hash: "ccaabdb", message: "feat: add Siegfried and its five satellite projects", date: "" },
    context: { building: "Seis páginas de proyecto nuevas.", snippetRole: "Cada carpeta bajo app/projects contiene un page.tsx.", learning: "Cómo el App Router convierte carpetas en URLs." },
    intro: { project: "Portfolio personal en Next.js.", where: "app/projects/<slug>/page.tsx.", diagram: "app/projects/janus/page.tsx --> /projects/janus   <== aquí" },
    predict: "Creas app/projects/argus/page.tsx. ¿Qué URL aparece?", predictAnswer: "/projects/argus, sin registrar nada más.",
    explain: "La estructura de carpetas es la tabla de rutas. Añadir un proyecto es añadir una carpeta.",
    exercise: { modality: "opcion-multiple", prompt: "¿Qué hace falta para que /projects/argus exista?", options: ["Registrar la ruta en un archivo de rutas", "Crear app/projects/argus/page.tsx", "Reiniciar el servidor de producción a mano"], answer: 1, why: "El App Router usa el sistema de archivos como tabla de rutas." }, related: ["composicion-de-componentes"] },
  { id: "no-publicar-datos-de-contacto", type: "riesgo", area: "seguridad", concept: "seguridad-basica", title: "Una captura también puede filtrar datos", createdAt: iso(2),
    commit: { hash: "a91c2de", message: "feat: add case study screenshots", date: "" },
    context: { building: "Capturas reales de webs en producción.", snippetRole: "Antes de capturar, se sustituyen correos y teléfonos visibles.", learning: "Qué datos personales se cuelan en una imagen." },
    intro: { project: "Portfolio personal en Next.js.", where: "Script de captura previo a publicar imágenes.", diagram: "web real --> reemplazo de texto --> captura   <== aquí" },
    predict: "Una web muestra el teléfono de su dueña en la tarjeta de perfil. ¿Es seguro publicar la captura tal cual?", predictAnswer: "No: el dato queda en la imagen y es difícil de retirar. Se sustituye antes de capturar.",
    explain: "Un dato visible en una captura es público para siempre. Es más barato ocultarlo antes que pedir que lo retiren después.",
    exercise: { modality: "opcion-multiple", prompt: "¿Cuándo conviene ocultar un dato personal en una captura?", options: ["Nunca, la web ya es pública", "Antes de capturar", "Solo si alguien se queja"], answer: 1, why: "Ocultarlo antes evita que quede en una imagen publicada." }, related: [] },
].map((l) => ({ ...base, ...l }));

const project = { project: "josh-portfolio", name: "josh-portfolio", kind: "app", languages: ["typescript"], frameworks: ["nextjs"],
  summary: "Portfolio personal en Next.js 14 y TypeScript con una lista de proyectos, una página por caso de estudio y componentes compartidos para mantener el mismo tono.",
  structure: [{ path: "data/projects.ts", role: "Única lista de proyectos: alimenta la home y /work" }, { path: "app/projects/<slug>", role: "Una página de caso de estudio por proyecto" }, { path: "components/projects", role: "Bloques compartidos: Section, Callout, Figure, Takeaways" }, { path: "util/image-size.ts", role: "Lee el tamaño de las imágenes al compilar" }],
  core: ["app-arquitectura", "separacion-de-responsabilidades", "react-componentes", "next-rutas", "next-server-components"],
  flow: "Se declara el proyecto en data/projects.ts, se crea su página bajo app/projects y se añaden las imágenes. La home y /work lo muestran sin más cambios.",
  builtAtCommit: "61afee1", createdAt: iso(9), updatedAt: iso(9),
  diagram: "+---------------+   +----------------+   +------------+\n| projects.ts   |-->| ProjectCard    |-->| home, /work|\n+---------------+   +----------------+   +------------+" };

const profile = { modalities: ["opcion-multiple", "predice-salida", "justifica", "compara"], known: ["variables-y-tipos", "funciones"], rusty: ["manejo-de-errores"], updatedAt: iso(9) };
const progress = {
  p_portfolio_panorama: null,
  "p_portfolio-panorama": { box: 3, done: true, due: now + 20 * DAY, updatedAt: now },
  "p_fuente-unica-de-verdad": { box: 1, done: true, due: now + 2 * DAY, updatedAt: now },
  "p_tamano-de-imagen-en-build": { box: 0, done: true, due: now - DAY, updatedAt: now - 3 * DAY },
  "p_rutas-por-carpeta": { box: 3, done: true, due: now + 14 * DAY, updatedAt: now },
};
delete progress.p_portfolio_panorama;

const stub = `<script>
(function(){
  const D=${JSON.stringify({ lessons, projects: [project], progress, profile })};
  const doc=(id,d)=>({id,data:()=>d});
  const colls={lessons:D.lessons.map(l=>doc(l.id,l)),projects:D.projects.map(p=>doc(p.project,p)),
    'data/users/demo':[...Object.entries(D.progress).map(([k,v])=>doc(k,v)),doc('profile',D.profile)]};
  const db={collection:(n)=>({onSnapshot:(cb)=>{setTimeout(()=>cb({docs:colls[n]||[]}),50);return()=>{}},doc:()=>({set:async()=>{},update:async()=>{},get:async()=>({exists:false,data:()=>null})}),get:async()=>({docs:colls[n]||[]})})};
  window.claude={use:async(k)=>k==='db'?db:k==='user'?{id:async()=>'demo'}:null};
})();
</script>`;

writeFileSync(process.env.OUT_FILE ?? "./index.html", src.replace("<script>", stub + "\n<script>"));
console.log("ok", lessons.length);
