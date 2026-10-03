# Fashion Texa Mockup — Requisitos funcionales, visuales y de aceptación

> Documento maestro para la iteración del mockup existente.
>
> Repositorio: https://github.com/Abeelgutiierrez/MockUp---Pagina-Web
>
> Web actual de Fashion Texa: https://fashiontexa.com/
>
> Referencias visuales principales:
> - DBL Group: https://www.dbl-group.com/
> - DBL category/business page: https://www.dbl-group.com/businesses/embroidery
> - Bextex: https://www.bextex.net/
>
> Regla de uso de referencias: no copiar literalmente ninguna web. Usar cada URL únicamente para el aspecto visual, de navegación o composición indicado en el requisito correspondiente. La identidad final debe ser Fashion Texa.

## 0. Objetivo del mockup

### GEN-01 — Web B2B de fabricante / sourcing textil
Fashion Texa debe presentarse como una empresa de fabricación, sourcing y coordinación de producción textil para compradores profesionales.

No debe parecer una tienda online, ecommerce, marketplace, Shopify, SaaS, plantilla Bootstrap o catálogo B2C.

Debe transmitir fabricación, industria textil, sourcing, capacidad de producción, experiencia, orden, confianza, amplitud de portfolio y profesionalidad internacional.

Referencia de negocio y contenido: https://fashiontexa.com/

**Aceptación:** un visitante nuevo debe entender en pocos segundos que Fashion Texa trabaja para marcas, retailers, importadores, mayoristas y compradores profesionales.

### GEN-02 — Conservar la arquitectura útil ya existente
No rehacer el proyecto desde cero si la arquitectura actual es reutilizable. Mantener React/TypeScript/Vite/React Router, el catálogo data-driven, rutas reutilizables y los componentes que funcionen.

**Aceptación:** la iteración debe ser principalmente de UX, dirección de arte, contenido visual, motion y calidad de assets.

---

## 1. Branding

### BRAND-01 — Logo original
Mantener el logo original de Fashion Texa. No sustituirlo por un wordmark inventado.

Referencia: https://fashiontexa.com/

**Aceptación:** el logo debe descargarse y almacenarse localmente si no lo está ya.

### BRAND-02 — Paleta basada en Fashion Texa
La paleta debe derivarse de los colores actuales de Fashion Texa y su logo. Evolucionarla hacia un resultado premium, sobrio y coherente.

Debe existir un sistema de tokens para brand-primary, brand-secondary, brand-accent, backgrounds, dark, text, muted, border, hover y active.

Referencia: https://fashiontexa.com/

**Aceptación:** el logo debe sentirse naturalmente integrado en la nueva interfaz.

---

## 2. Header y navegación

### NAV-01 — Header minimalista
Header limpio con logo original y botón MENU/hamburguesa. Debe interferir lo mínimo posible con el hero.

Referencia visual: https://www.dbl-group.com/

**Aceptación:** sobre un hero fotográfico o de vídeo debe poder funcionar transparente.

### NAV-02 — Menú fullscreen
Al pulsar MENU se abrirá una capa fullscreen oscura, con mucho whitespace, tipografía grande, cierre claro y subapartados desplegables.

Referencia visual y de interacción: https://www.bextex.net/

Referencia de imagen adjunta: **Imagen de menú fullscreen de Bextex**.

**Aceptación:** no debe parecer un dropdown convencional.

### NAV-03 — Estructura
Como mínimo:
- Products
- Capabilities
- Sustainability
- Company / About Us
- Contact

Products debe llevar a:
- Men
- Women
- Boys
- Girls
- Socks
- Workwear / Technical

y después a:
- Knit Tops
- Knit Bottoms
- Sweaters
- Woven Tops
- Woven Bottoms
- Jackets

Contenido real: https://fashiontexa.com/

### NAV-04 — Motion del menú
Apertura/cierre mediante fade, slide, reveal o combinación sutil. Respetar prefers-reduced-motion.

Referencia: https://www.bextex.net/

---

## 3. Home — Hero

### HERO-01 — Hero inmersivo de fábrica
La primera pantalla debe parecer una web de fabricante textil. Debe ocupar aproximadamente 90–100vh.

Referencia principal: https://www.dbl-group.com/

Referencia adjunta: **Imagen 1 — hero DBL con fábrica y copy sobre fondo en movimiento**.

Debe incluir:
- logo/header flotante;
- vídeo de fábrica o producción textil;
- overlay de contraste;
- eyebrow;
- headline grande;
- copy breve;
- CTA;
- scroll/slide indicator si aporta valor.

### HERO-02 — Vídeo REAL, no poster estático
El componente actual ya utiliza `<video>`, pero no basta con mostrar un poster. Debe existir un archivo de vídeo local real mediante `src` o `<source>`.

El vídeo debe representar maquinaria, confección, tejidos, trabajadores o procesos de manufacturing.

Referencia: https://www.dbl-group.com/

**Aceptación:** al abrir `/` debe percibirse movimiento real. Si el navegador no reproduce el vídeo, debe existir poster fallback.

### HERO-03 — Recursos visuales encontrados por Codex
Codex debe navegar por Internet y localizar un recurso visual temporal adecuado para este mockup cuando Fashion Texa no disponga de uno apto.

Debe buscar recursos profesionales y legalmente utilizables para una demo, preferentemente libres o con licencia compatible. No usar imágenes o vídeos de DBL/Bextex como assets finales.

Los recursos seleccionados deben descargarse al proyecto y no depender de URLs remotas.

**Aceptación:** el hero debe parecer claramente una fábrica / empresa de manufacturing textil.

### HERO-04 — Mensaje B2B
El contenido debe hablar de apparel sourcing, producción, desarrollo de producto, supplier coordination, quality y shipment. No usar lenguaje retail.

Fuente: https://fashiontexa.com/

### HERO-05 — Mantener lo que funciona del hero actual
La jerarquía tipográfica actual, el logo, headline, CTAs y composición pueden conservarse si funcionan, pero deben enriquecerse mediante vídeo, profundidad y motion.

---

## 4. Home — Portfolio visual

### PORT-01 — Cards grandes tipo “Divisions”
Después de la introducción debe existir una sección de grandes bloques fotográficos inspirada en la sección Divisions de Bextex.

Referencia: https://www.bextex.net/

Referencia adjunta: **Imagen 2 — grid “Divisions” de Bextex**.

Características:
- imágenes protagonistas;
- 1–2 columnas según viewport;
- títulos superpuestos;
- overlay;
- hover;
- ritmo visual;
- no pequeñas cards ecommerce.

### PORT-02 — Adaptación a Fashion Texa
No copiar Denim/Spinning/etc. El concepto debe transformarse en “Product Portfolio”, “What We Make” o equivalente.

Contenido: https://fashiontexa.com/

### PORT-03 — Primer nivel por target
Mostrar de forma muy clara:
- Men
- Women
- Boys
- Girls

### PORT-04 — Segundo nivel por familia
Mostrar también:
- Knit Tops
- Knit Bottoms
- Sweaters
- Woven Tops
- Woven Bottoms
- Jackets
- Socks
- Technical / Workwear

**Aceptación:** la Home debe transmitir mucho más portfolio que el mockup actual.

---

## 5. Imágenes y recursos visuales

### IMG-01 — Combinar imágenes del mockup + Fashion Texa
No eliminar todas las imágenes actuales. Mantener las que funcionen para Hero, Company, Capabilities, Sustainability, process y storytelling.

Además, incorporar imágenes reales de producto desde:
- https://fashiontexa.com/
- https://fashiontexa.com/men-knit-top/
- resto de páginas internas del sitio.

### IMG-02 — Producto real
Para Products, Men, Women, Boys, Girls, category pages y product families priorizar imágenes reales de Fashion Texa cuando tengan calidad suficiente.

### IMG-03 — Codex debe buscar assets adicionales
Cuando no exista un recurso real suficientemente bueno, Codex debe navegar por Internet para encontrar imágenes o vídeos temporales de calidad que representen de forma realista:
- garment manufacturing;
- textile factory;
- sewing / cutting / inspection;
- fabric macro;
- quality control;
- sourcing / product development;
- logistics / shipment;
- menswear;
- womenswear;
- kidswear;
- knitwear;
- woven apparel;
- outerwear;
- workwear / hi-vis.

Usar recursos legalmente apropiados para demo y guardarlos localmente.

### IMG-04 — Calidad mínima
No usar en hero o grandes superficies una imagen pixelada o claramente insuficiente para 1440/1920px.

Referencia para el nivel esperado: https://www.dbl-group.com/businesses/embroidery

### IMG-05 — Evitar repetición
No repetir la misma camisa/imagen por Home, Products, Gender, Category y Product Detail.

Debe percibirse variedad: T-shirts, polos, hoodies, sweatshirts, sweaters, jackets, dresses, trousers, shorts, blouses, kidswear, socks, workwear, etc.

### IMG-06 — Clasificación funcional
Clasificar assets como:
- hero
- editorial
- product
- process
- material
- quality
- corporate
- sustainability
- technical

No utilizar aleatoriamente una imagen de producto como sustituto de un proceso industrial.

### IMG-07 — Assets locales
Todos los assets críticos deben almacenarse en `public/images/` o `public/media/` con estructura ordenada.

---

## 6. Company

### COMP-01 — Página corporativa B2B
Debe explicar quién es Fashion Texa, cómo trabaja, para quién trabaja y su papel en desarrollo, sourcing, suppliers, production, quality y shipping.

Fuente: https://fashiontexa.com/

### COMP-02 — Mucho más visual que la versión actual
La pantalla actual con cuatro bloques “Partnership over transaction”, “Communication over assumption”, etc. resulta demasiado vacía.

Referencia de problema: **Imagen adjunta de /company con cuatro grandes celdas de texto**.

La nueva versión debe combinar:
- imágenes grandes;
- escenas de fábrica;
- detalles textiles;
- bloques editoriales;
- principios;
- transición o hover;
- composición asimétrica.

Referencia de calidad visual: https://www.dbl-group.com/

**Aceptación:** no debe existir una gran pantalla casi vacía formada solo por texto.

### COMP-03 — Principios con soporte visual
Los principios pueden mantenerse, pero deben reaccionar visualmente mediante:
- imagen asociada;
- hover/focus;
- cambio de background;
- scroll storytelling;
- reveal.

### COMP-04 — Who We Are / How We Work
Añadir al menos una sección visual con fotografía grande + copy corporativo. No inventar estadísticas no verificadas.

---

## 7. Capabilities y proceso

### CAP-01 — Capacidades reales
Mostrar:
- Product Development
- Material & Supplier Sourcing
- Merchandising
- Supplier Coordination
- Production Management
- Quality Control
- Shipping & Documentation

Fuente: https://fashiontexa.com/

### CAP-02 — Storytelling visual, no tabla plana
La sección actual “One continuous line of coordination” debe ganar mucha más presencia visual.

Referencia de problema: **Imagen adjunta de la sección actual con filas de Product development, Merchandising, Supplier coordination, etc.**

Referencia de nivel visual: https://www.dbl-group.com/

### CAP-03 — Sticky image + etapas
En desktop:
- imagen o vídeo sticky en un lado;
- etapas en el otro;
- al entrar cada etapa en viewport, cambiar/crossfade el recurso visual correspondiente;
- marcar etapa activa.

En móvil: stack vertical accesible.

### CAP-04 — Imagen específica por etapa
Product Development, Quality Control y Shipping no deben utilizar exactamente el mismo recurso visual.

### CAP-05 — Motion
Añadir reveals, crossfades y cambios de estado al scroll, sin scroll hijacking.

---

## 8. Material Directions / Material Expertise

### MAT-01 — Rediseñar completamente el bloque visual
La versión actual formada únicamente por botones/rectángulos “Cotton, CVC, Viscose…” es demasiado básica.

Referencia del problema: **Imagen adjunta de “MATERIAL DIRECTIONS”**.

### MAT-02 — Materiales como experiencia visual
Mostrar Cotton, CVC, Viscose, Linen, Denim, Fleece, Jersey, Piqué, French Terry, Twill, etc. mediante una solución más visual.

Opciones válidas:
- macro fotografía de texturas;
- background/preview que cambia al hover/focus;
- ticker editorial;
- lista tipográfica de gran formato;
- cursor/follow preview moderado;
- panel interactivo;
- combinación de texto + texture gallery.

Inspiración general:
- https://www.dbl-group.com/
- https://www.bextex.net/

### MAT-03 — Expertise, no ecommerce
Debe parecer conocimiento técnico de materiales y fabricación, no un selector de filtros de tienda.

### MAT-04 — Accesibilidad
Lo que dependa de hover en desktop debe tener alternativa para touch/mobile.

---

## 9. Category pages

### CAT-01 — Mantener la distribución que ya funciona
La estructura general actual de `/products/men/knit-tops` gusta: breadcrumb, headline grande, hero y navegación contextual inferior.

Referencia del estado actual: **Imagen 5 adjunta — hero de Sweaters / category page**.

No rehacer esa lógica sin necesidad.

### CAT-02 — Mejorar calidad del hero
La imagen concreta actual de Sweaters no tiene suficiente calidad. Sustituir por una imagen de alta resolución y coherente con la familia.

Prioridades:
1. imagen real Fashion Texa de calidad;
2. si no existe, recurso temporal encontrado por Codex en Internet;
3. asset local.

Referencia de nivel: https://www.dbl-group.com/businesses/embroidery

### CAT-03 — Página como capability, no ecommerce
La página debe sentirse como una división/capacidad productiva.

Referencia visual: https://www.dbl-group.com/businesses/embroidery

### CAT-04 — Product family index mucho más visual
La actual sección con “Pullovers, Cardigans, Tank Tops, Hooded Knitwear, Accessories” está bien ordenada, pero demasiado vacía.

Referencia del estado actual: **Imagen 6 adjunta — collection directions**.

Mantener claridad, pero añadir una capa visual potente.

### CAT-05 — Preview de cada product family
Al hover/focus sobre Pullovers, Cardigans, Tank Tops, Hooded Knitwear, etc. debe aparecer una imagen distinta o cambiar el panel visual principal.

Opciones:
- sticky preview image;
- background image reveal;
- side panel;
- cursor-follow preview moderado;
- collage que cambia.

Referencia conceptual: https://www.dbl-group.com/businesses/embroidery

### CAT-06 — Mobile
No depender de hover. En touch, mostrar imagen por item o revelar con tap.

### CAT-07 — Contenido técnico
Incluir product families, fabrications, materials, gauges/yarns/constructions cuando proceda, usando contenido real de Fashion Texa.

Fuente:
- https://fashiontexa.com/
- https://fashiontexa.com/men-knit-top/

---

## 10. Jerarquía del catálogo

### ARCH-01 — Tres niveles
Target → Category → Product Family.

Ejemplo:
Men → Knit Tops → Polo Shirts.

### ARCH-02 — Progressive disclosure
Primero Men/Women/Boys/Girls; después Knit/Woven/Sweater/Jackets; después producto concreto.

Referencia visual de organización: https://www.bextex.net/

### ARCH-03 — Breadcrumbs y contextual nav
Mantener breadcrumbs claros y navegación contextual sticky/horizontal en categorías si mejora UX.

---

## 11. Motion y dirección visual

### FX-01 — Motion editorial
Añadir de forma consistente:
- scroll reveal;
- image mask/clip reveal;
- fade/translate;
- subtle parallax;
- image crossfade;
- hover zoom;
- animated arrows;
- page transitions.

Inspiración: https://www.dbl-group.com/

### FX-02 — Más visual, no más ruido
No usar partículas, WebGL innecesario, cursores extravagantes ni efectos gratuitos.

### FX-03 — Sistema común
Crear tokens/constantes de duración y easing. Ejemplo:
- fast ~200ms
- normal ~400ms
- reveal ~700ms
- editorial ~900ms

### FX-04 — Respetar reduced motion
Todo efecto debe degradar correctamente con `prefers-reduced-motion`.

### VIS-01 — Minimalismo editorial
Mantener limpieza y whitespace, pero evitar “minimalismo vacío”.

Referencia de problema: **Imágenes 2, 3, 4 y 6 de la revisión actual**, donde hay demasiado espacio con poco estímulo visual.

Objetivo: fotografía, tipografía, ritmo, contraste, movimiento y composición sin saturación.

---

## 12. Product portfolio realista

### PROD-01 — Amplitud
El sitio debe mostrar visualmente tantas familias como sea razonable a partir de Fashion Texa:
- Men
- Women
- Boys
- Girls
- Knit Tops
- Knit Bottoms
- Sweaters
- Woven Tops
- Woven Bottoms
- Jackets
- Socks
- Workwear / Technical

### PROD-02 — Producto real
En las páginas de producto usar las imágenes de la web actual de Fashion Texa cuando sean aptas.

### PROD-03 — No ecommerce
No precios, carrito, stock, ratings o “Buy now”.

---

## 13. Responsive, performance y demo offline

### RESP-01
Revisar como mínimo 1920, 1440, 1024, 768 y 390px.

### PERF-01
Lazy load, imágenes optimizadas, WebP/AVIF si conviene, preload solo de hero crítico.

### OFF-01
Tras descargar recursos, la demo debe poder presentarse sin Internet.

### OFF-02
Vídeo, logo e imágenes críticas deben ser locales.

---

## 14. Datos y afirmaciones

### DATA-01 — No inventar
No inventar:
- fábricas;
- empleados;
- clientes;
- marcas;
- facturación;
- capacidad anual;
- países;
- certificaciones;
- métricas ESG;
- años de experiencia.

### DATA-02 — Contenido real
La web actual de Fashion Texa es la principal fuente de contenido factual:
https://fashiontexa.com/

### DATA-03 — Catálogo centralizado
Mantener/expandir `src/data/catalog.ts` y `src/data/images.ts` o estructura equivalente.

---

## 15. Validación visual obligatoria

Antes de terminar, Codex debe abrir localhost y revisar visualmente:
- Home desktop
- Home mobile
- Company
- Products
- Men
- Women
- Category page
- Product family index
- Capabilities
- Materials
- Sustainability
- Contact
- Fullscreen menu

Buscar y corregir:
- assets de baja calidad;
- imágenes repetidas;
- páginas demasiado vacías;
- crop deficiente;
- overflow;
- layout shift;
- animaciones rotas;
- botones sin acción;
- errores de consola;
- navegación confusa.

---

## 16. Checklist de aceptación

Codex debe verificar internamente como PASS/FAIL, y corregir todos los FAIL antes de finalizar:

GEN-01, GEN-02,
BRAND-01, BRAND-02,
NAV-01, NAV-02, NAV-03, NAV-04,
HERO-01, HERO-02, HERO-03, HERO-04, HERO-05,
PORT-01, PORT-02, PORT-03, PORT-04,
IMG-01, IMG-02, IMG-03, IMG-04, IMG-05, IMG-06, IMG-07,
COMP-01, COMP-02, COMP-03, COMP-04,
CAP-01, CAP-02, CAP-03, CAP-04, CAP-05,
MAT-01, MAT-02, MAT-03, MAT-04,
CAT-01, CAT-02, CAT-03, CAT-04, CAT-05, CAT-06, CAT-07,
ARCH-01, ARCH-02, ARCH-03,
FX-01, FX-02, FX-03, FX-04,
VIS-01,
PROD-01, PROD-02, PROD-03,
RESP-01, PERF-01, OFF-01, OFF-02,
DATA-01, DATA-02, DATA-03.

---

## 17. Referencias adjuntas que acompañarán al prompt de Codex

Cuando se ejecute la siguiente iteración, el usuario adjuntará las mismas capturas utilizadas para definir estos requisitos. Deben interpretarse así:

- **Imagen 1 (referencia DBL):** hero de fábrica / vídeo / primera impresión.
  URL: https://www.dbl-group.com/
- **Imagen 2 (referencia Bextex):** cards grandes / divisiones / portfolio visual.
  URL: https://www.bextex.net/
- **Imagen 3 (referencia Bextex):** menú fullscreen oscuro.
  URL: https://www.bextex.net/
- **Imagen 4 (mockup actual):** Material Directions demasiado básico; rediseñar MAT-01..MAT-04.
- **Imagen 5 (mockup actual):** category hero; conservar distribución, cambiar asset de baja calidad y elevar el tratamiento visual.
  URL objetivo local: /products/men/knit-tops
  Referencia externa: https://www.dbl-group.com/businesses/embroidery
- **Imagen 6 (mockup actual):** product family / collection directions demasiado textual; mantener orden pero añadir previews, imágenes y motion.
  URL objetivo local: /products/men/knit-tops

También se adjuntarán capturas del mockup actual de Company y Home/Capabilities para identificar las secciones excesivamente vacías.

---

## 18. Regla final

El resultado debe sentirse como:

**Fashion Texa real + identidad real + producto real + recursos editoriales de alta calidad + experiencia premium de fabricante textil B2B.**

No debe ser una copia de DBL ni Bextex.

Debe parecer una web construida específicamente para Fashion Texa y suficientemente pulida para enseñarla a un cliente como dirección de rediseño.
