# Plan de rediseño: páginas restantes

Rama: `redesign/general`. La home, el header y el footer nuevos ya están en `app/(site)`. Todo lo demás sigue en `app/(legacy)` con Bootstrap.

## Inventario

| Grupo | Páginas | Líneas | Destino |
| --- | --- | --- | --- |
| Principales | `/work`, `/blog-list`, `/blog/[id]`, `/services`, `/pricing` | 58, 44, 151 (+213 de `PostBody`), 196, 208 | Rehacer |
| Casos de estudio | 26 en `/projects/*` | 7.032 en total entre todas las páginas | Rehacer (ver fases 2 y 3) |
| Redirecciones | `/blog`, `/blog-details` | 6 y 6 | Mover tal cual |
| Restos de plantilla | `/index-2`, `/index-3`, `/work-single`, `/legacy-home` | 29, 542, 117, 35 | Borrar y redirigir a `/` |

Casos de estudio: 19 de las 26 páginas usan solo los bloques compartidos de `components/projects/ProjectPage.tsx` (unos 20: `Section`, `Figure`, `Callout`, `Takeaways`, `ProcessSteps`, `DataTable`, `Gallery`, `Carousel`, `Terminal`…). Las otras 7 llevan HTML de Bootstrap escrito a mano y son las que cargan los 77 `style={{}}`: `teller` (172 clases, 20 estilos), `moods` (178, 6), `take-away` (147, 4), `mesa360` (65), `thinkboard` (45), `wissen` (44) y `the-sower-store` (41).

## Decisiones por defecto

- El diseño nuevo es de un solo tema (papel). Se retira el interruptor claro/oscuro.
- `/index-2`, `/index-3`, `/work-single` y `/legacy-home` son demos de la plantilla. Se borran y redirigen a `/` con 308 para no dejar enlaces rotos.
- Los casos de estudio y el blog siguen en inglés. El botón de traducir y el aviso de idioma se rehacen con el diseño nuevo.
- Se mantiene la API de los bloques de `ProjectPage.tsx` (mismos nombres y props). Así las 19 páginas sencillas solo cambian el import y de carpeta.
- Sin `style`, sin `any` y sin `className` fuera de átomos y moléculas. Lo impone ESLint.

## Fases

**Fase 0. Base común.** Nada de esto cambia páginas todavía.
- `Dialog` (molécula con `<dialog>` nativo), `TranslateButton` y aviso de idioma con el diseño nuevo, y `TranslateProvider` con su UI nueva.
- Idioma del contenido por grupo de rutas: `(translated)` para home y `/work`, `(english)` para el resto.
- `PageHero`: título, etiqueta y resumen de cada página. Cierre común con `HomeStats` y `HomeContact`.

**Fase 1. Páginas principales,** una a una y en este orden: `/work`, `/blog-list`, `/blog/[id]` (con `PostBody`), `/services`, `/pricing`.
- `/work` y `/blog-list` reutilizan `ProjectCard` y `PostCard`.
- `PostBody` se reescribe con el mismo subconjunto de markdown y el sistema de bloques de los casos.
- `/pricing` lleva un `Faq` con `<details>` y animación.

**Fase 2. Kit de casos de estudio.** Reescribir en `components/case-study/` los ~20 bloques con la misma API: cabecera, secciones, `TableOfContents`, callouts, citas, métricas, tabla, pasos, galerías con zoom, carrusel, terminal animada y `BentoGallery`. Los `style` de estos componentes se sustituyen por variantes.

**Fase 3. Casos de estudio.**
- Mover primero las 19 sencillas, cambiando solo el import.
- Después reescribir las 7 con HTML a mano sobre los bloques nuevos, una por una: `take-away`, `moods`, `teller`, `mesa360`, `thinkboard`, `wissen`, `the-sower-store`.

**Fase 4. Limpieza.**
- Borrar los restos de plantilla y poner las redirecciones.
- Borrar `app/(legacy)`, `components/{elements,sections,layout,blog,projects}` antiguos, `public/assets/css`, imágenes de plantilla sin uso, y dependencias (`bootstrap` vía CSS, `wowjs`, `isotope-layout`, `swiper`, `react-countup`, `react-odometerjs`, `react-perfect-scrollbar`, `react-fast-marquee`).
- Actualizar la skill `update-portfolio` y el README al sistema nuevo.

## Cómo compruebo que no se rompió nada

Antes de tocar nada hago una foto de la web actual: para cada ruta y cada idioma guardo estado HTTP, `<title>`, `<h1>` y el texto de `<main>` normalizado. Tras migrar cada página comparo contra esa foto y reporto:
- texto que ha desaparecido (pérdida de contenido),
- cambios de título o de estado,
- imágenes rotas o con 404 en la red,
- errores de consola.

Por cada página además: `tsc`, ESLint y captura en el navegador. Al cerrar cada fase hago un `next build` completo y repaso las rutas. Al final: comparación completa contra la foto inicial, redirecciones, `grep` de clases de Bootstrap residuales (0) y de `style=` (0), y build de producción sin avisos nuevos.

## Riesgos

- El texto de las 7 páginas manuales puede cambiar al reestructurarlas. La comparación con la foto inicial lo detecta.
- Los 77 `style` de los widgets interactivos (carrusel, galería, terminal) afectan al zoom y al scroll. Se verifican a mano en el navegador.
- El traductor del navegador (API `Translator`) solo funciona en Chrome 138+ y Edge. En otros navegadores sigue abriendo Google Translate.
