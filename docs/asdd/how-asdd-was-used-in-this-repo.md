# Como se uso ASDD en este repositorio

## Artefacto de entrada recibido

El input fue un reto tecnico compuesto con instrucciones operativas, restricciones de estilo, contexto de producto y un target tecnico obligatorio distinto al producto de negocio.

## Clasificacion del artefacto

No se trato como una historia de usuario aislada. Se trato como un reto compuesto de QA con bootstrap de repositorio, automatizacion API, performance testing, documentacion y trazabilidad.

## Evaluacion de calidad del requerimiento

El requerimiento traia mucha informacion util, pero tambien tenia tensiones reales:

- pedia trabajar sobre un repo nuevo y posiblemente vacio
- exigia explicar EdTech aunque las pruebas obligatorias debian correr sobre otra API
- fijaba restricciones de estilo muy estrictas
- asumia versiones y herramientas que debian verificarse antes de usarse

ASDD ayudo a separar lo que era obligatorio, lo que era contextual y lo que debia investigarse con fuentes primarias.

## Validacion de completitud y viabilidad

Se validaron cuatro cosas antes de construir:

- estado real del repo QA
- herramientas disponibles en la maquina
- acceso real a la API publica
- disponibilidad local del repo y backend de EdTech como referencia secundaria

Esa validacion permitio confirmar que el repo de entrega estaba vacio, que habia Java y Maven instalados, que `k6` faltaba y que el backend de EdTech estaba accesible localmente pero fuera del alcance principal.

## Analisis tecnico del que, donde y por que

El analisis llevo a separar el monorepo asi:

- `karate-api/` para pruebas API y reportes regenerables
- `k6-performance/` para performance prudente y resultados exportados
- `docs/` para ASDD, decisiones, trazabilidad y contexto EdTech

La separacion evita mezclar herramientas, evidencia y narrativa metodologica.

## Traduccion a entregables concretos

De ese analisis salieron entregables directos:

- bootstrap Git y estructura del repo
- proyecto Karate con 4 verbos obligatorios
- proyecto K6 con smoke y load basico
- analisis real de resultados
- documentacion del contexto EdTech
- matriz de trazabilidad

## Implementacion de Karate

ASDD aterrizo la fase de API en escenarios que respondieran a dos necesidades:

- cumplir el reto tecnico con GET, POST, PUT y DELETE
- mantener un diseno sostenible y reutilizable

Por eso se centralizo configuracion en `karate-config.js`, se usaron helpers para cuentas temporales y se crearon runners simples por feature.

## Implementacion de K6

ASDD aterrizo la fase de performance con una regla clara: demostrar criterio tecnico sin abusar de una API publica.

Eso llevo a:

- usar lecturas para la mayor parte de la carga
- incluir `searchProduct` como POST de bajo riesgo
- evitar carga repetitiva sobre `createAccount`, `updateAccount` y `deleteAccount`
- exportar resumen JSON y resumen humano legible

## Generacion de documentacion y evidencia

La documentacion no se escribio como apendice ornamental. Se uso para fijar:

- criterios de aceptacion
- decisiones tecnicas
- dualidad EdTech vs Automation Exercise
- resultados obtenidos
- limites conocidos

## Delegacion metodologica

No hubo agentes reales corriendo. La delegacion se modela solo de forma metodologica bajo un rol abstracto de `QA Agent`, responsable de:

- interpretar el reto
- derivar criterios
- disenar pruebas
- implementar suites y scripts
- producir evidencia y trazabilidad

## Limites de esta aplicacion de ASDD

- No hay plataforma completa de agentes instalada.
- No hay orquestacion automatica multiagente.
- No se automatizo aun la API local de EdTech.
- La evidencia de performance depende de una API publica externa y de la red disponible al momento de correrla.
