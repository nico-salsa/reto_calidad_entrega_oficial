# Matriz de trazabilidad

| Requerimiento original | Criterio derivado | Evidencia o archivo | Suite o script | Comando | Resultado esperado |
| --- | --- | --- | --- | --- | --- |
| Bootstrap del repo | `AC-01`, `AC-02`, `AC-03` | `README.md`, `.gitignore`, configuracion Git local | Git | `git status --short --branch` | Repo inicializado en `main` con `origin` correcto |
| Proyecto Karate funcional | `AC-04`, `AC-05` | `karate-api/pom.xml`, `karate-api/src/test/java/karate-config.js` | Maven Wrapper | `.\mvnw.cmd test` | Suite Karate ejecuta correctamente |
| Escenario GET | `AC-06`, `AC-07` | `karate-api/src/test/java/qa/features/products/get-products.feature` | `GetProductsFeatureTest` | `.\mvnw.cmd -q -Dtest=GetProductsFeatureTest test` | Catalogo valido y reporte generado |
| Escenario POST | `AC-06`, `AC-07` | `karate-api/src/test/java/qa/features/accounts/post-create-account.feature` | `CreateAccountFeatureTest` | `.\mvnw.cmd -q -Dtest=CreateAccountFeatureTest test` | Cuenta temporal creada, consultada y eliminada |
| Escenario PUT | `AC-06`, `AC-07` | `karate-api/src/test/java/qa/features/accounts/put-update-account.feature` | `UpdateAccountFeatureTest` | `.\mvnw.cmd -q -Dtest=UpdateAccountFeatureTest test` | Cuenta temporal actualizada, validada y eliminada |
| Escenario DELETE | `AC-06`, `AC-07` | `karate-api/src/test/java/qa/features/accounts/delete-account.feature` | `DeleteAccountFeatureTest` | `.\mvnw.cmd -q -Dtest=DeleteAccountFeatureTest test` | Cuenta temporal eliminada y no encontrada luego |
| Reportes Karate | `AC-08` | `karate-api/target/karate-reports/` | Karate | `.\mvnw.cmd test` | `karate-summary.html` disponible |
| Perfil smoke de K6 | `AC-09`, `AC-10`, `AC-13` | `k6-performance/scripts/smoke.js`, `k6-performance/results/smoke-summary.*` | k6 | `& "C:\Program Files\k6\k6.exe" run scripts\smoke.js` | Thresholds y checks del smoke en verde |
| Perfil load-basic de K6 | `AC-09`, `AC-11`, `AC-12`, `AC-13` | `k6-performance/scripts/load-basic.js`, `k6-performance/results/load-basic-summary.*` | k6 | `& "C:\Program Files\k6\k6.exe" run scripts\load-basic.js` | Carga prudente completada con thresholds aprobados |
| ASDD documentado | `AC-14`, `AC-16` | `docs/asdd/*.md`, `README.md` | Documentacion | lectura directa | Relacion clara entre analisis, criterios, pruebas y evidencia |
| Trazabilidad | `AC-17` | `docs/asdd/traceability-matrix.md` | Documentacion | lectura directa | Mapeo completo entre requerimiento y evidencia |
| Contexto EdTech | `AC-18`, `AC-19`, `AC-20` | `docs/reference/edtech-context.md`, `docs/reference/edtech-local-verification.md`, `docs/reference/edtech-future-coverage.md` | Documentacion | lectura directa | Dualidad del reto y ruta futura hacia EdTech explicadas |
