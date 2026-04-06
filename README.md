# Reto QA y Automatizacion

Este repositorio resuelve el reto tecnico de QA y automatizacion en un solo monorepo. La cobertura obligatoria del reto se ejecuta sobre `automationexercise.com/api_list` con Karate y K6, mientras que EdTech se documenta como el producto de negocio de referencia que da contexto de calidad y la ruta de evolucion futura.

## Stack del entregable

- Karate `1.5.1` con Maven Wrapper y Java `17+`
- K6 `1.7.1`
- Markdown para ASDD, trazabilidad, arquitectura y analisis

## Por que se resolvio como monorepo

El enunciado original sugiere separar entregables, pero el repositorio remoto de entrega es uno solo. Por eso se adapto la solucion a un monorepo con tres frentes claros:

- `karate-api/` contiene el entregable de automatizacion API
- `k6-performance/` contiene el entregable de performance
- `docs/` contiene ASDD aplicado, trazabilidad, resultados, decisiones y contexto EdTech

La decision evita fragmentar evidencia, simplifica la evaluacion y deja una base lista para crecer hacia cobertura directa del backend de EdTech.

## Estructura del proyecto

```text
.
|-- README.md
|-- .gitignore
|-- docs
|   |-- architecture.md
|   |-- references.md
|   |-- asdd
|   |-- performance
|   `-- reference
|-- karate-api
|   |-- .mvn
|   |-- mvnw
|   |-- mvnw.cmd
|   |-- pom.xml
|   |-- README.md
|   `-- src
`-- k6-performance
    |-- README.md
    |-- lib
    |-- results
    `-- scripts
```

## Prerequisitos

- Windows con PowerShell
- Git
- Java `17+`
- Acceso a internet para `automationexercise.com`

## Instalacion y bootstrap

```powershell
Set-Location "C:\Sofka U\reto_calidad_entrega_oficial"
git status --short --branch
git remote -v
java -version
k6 version
& "C:\Program Files\k6\k6.exe" version
```

Si el shell actual no reconoce `k6` todavia, abrir una consola nueva o usar la ruta completa.

## Ejecutar Karate

Ejecucion completa:

```powershell
Set-Location "C:\Sofka U\reto_calidad_entrega_oficial\karate-api"
.\mvnw.cmd -q -Dtest=AutomationExerciseSuiteTest test
```

Ejecucion individual:

```powershell
Set-Location "C:\Sofka U\reto_calidad_entrega_oficial\karate-api"
.\mvnw.cmd -q -Dtest=GetProductsFeatureTest test
```

Reportes:

- `karate-api/target/karate-reports/karate-summary.html`
- `karate-api/target/karate-reports/*.json`
- `karate-api/target/karate-reports/*.html`

Mas detalle en [karate-api/README.md](./karate-api/README.md).

## Ejecutar K6

Smoke:

```powershell
Set-Location "C:\Sofka U\reto_calidad_entrega_oficial\k6-performance"
& "C:\Program Files\k6\k6.exe" run scripts\smoke.js
```

Load basico:

```powershell
Set-Location "C:\Sofka U\reto_calidad_entrega_oficial\k6-performance"
& "C:\Program Files\k6\k6.exe" run scripts\load-basic.js
```

Sobrescribir carga:

```powershell
Set-Location "C:\Sofka U\reto_calidad_entrega_oficial\k6-performance"
$env:LOAD_VUS = "2"
$env:LOAD_DURATION = "12s"
$env:SEARCH_ITERATIONS = "6"
& "C:\Program Files\k6\k6.exe" run scripts\load-basic.js
```

Artefactos exportados:

- `k6-performance/results/smoke-summary.json`
- `k6-performance/results/smoke-summary.md`
- `k6-performance/results/load-basic-summary.json`
- `k6-performance/results/load-basic-summary.md`

Mas detalle en [k6-performance/README.md](./k6-performance/README.md).

## Ubicacion de reportes y analisis

- Reportes Karate: [karate-api/target/karate-reports](./karate-api/target/karate-reports)
- Resultados K6: [k6-performance/results](./k6-performance/results)
- Analisis de performance: [docs/performance/results-analysis.md](./docs/performance/results-analysis.md)

## ASDD aplicado en este reto

ASDD se aplico aqui como enfoque metodologico estructurado, no como una plataforma real de agentes instalada. Se uso para clasificar el artefacto, evaluar el requerimiento, derivar criterios, disenar las pruebas y mantener trazabilidad entre reto, suites, scripts y evidencia.

Documentos principales:

- [docs/asdd/what-is-asdd.md](./docs/asdd/what-is-asdd.md)
- [docs/asdd/how-asdd-was-used-in-this-repo.md](./docs/asdd/how-asdd-was-used-in-this-repo.md)
- [docs/asdd/traceability-matrix.md](./docs/asdd/traceability-matrix.md)

## Contexto EdTech

EdTech es la referencia funcional y de negocio de este ejercicio. Automation Exercise es el target tecnico obligatorio del reto. Ambos contextos conviven, pero no significan lo mismo.

Documentos principales:

- [docs/reference/edtech-context.md](./docs/reference/edtech-context.md)
- [docs/reference/edtech-local-verification.md](./docs/reference/edtech-local-verification.md)
- [docs/reference/edtech-future-coverage.md](./docs/reference/edtech-future-coverage.md)

## Verificacion local opcional de EdTech

```powershell
Set-Location "C:\Sofka U\EdTech_Reportes_Boletines_Desarrollo\backend"
New-Item -ItemType Directory -Force data | Out-Null
.\gradlew.bat bootRun
```

Base URL esperada:

- Backend: `http://localhost:8080/api`
- Frontend: `http://localhost:5173`

## Decisiones de arquitectura

- Monorepo porque el remoto de entrega es unico.
- Karate `1.5.1` en lugar de una `RC` de la linea `1.5.2`.
- Carga prudente en K6 sobre lecturas y busqueda.
- Contexto EdTech separado en `docs/reference/` para no mezclar alcance actual con evolucion futura.

Mas detalle en [docs/architecture.md](./docs/architecture.md).

## Consideraciones sobre la API publica

- Automation Exercise usa `responseCode` y `message` dentro del body.
- Los endpoints de cuentas usan `application/x-www-form-urlencoded`.
- El catalogo es publico y mutable, por eso no se validan conteos exactos.
- La performance medida aqui es indicativa y depende de internet y de un servicio externo.

## Limitaciones conocidas

- Un shell abierto antes de instalar `k6` puede no refrescar `PATH` hasta abrir una consola nueva.
- Los reportes `target/` de Karate no se versionan; se regeneran con `.\mvnw.cmd test`.
- La suite no automatiza aun el backend local de EdTech; deja la base para evolucionar hacia esa cobertura.

## Siguientes mejoras sugeridas

- Agregar suites Karate por modulo cuando se migre a EdTech.
- Incorporar autenticacion y manejo de `X-Session-Token` para el backend local.
- Versionar historicos de performance por corrida.
- Integrar este monorepo en CI.
