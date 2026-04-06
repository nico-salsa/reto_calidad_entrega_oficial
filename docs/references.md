# Referencias usadas

## Fuentes oficiales y primarias

Karate:

- Documentacion oficial: <https://docs.karatelabs.io/getting-started/install-dependencies/>
- FAQ y buenas practicas: <https://docs.karatelabs.io/faq/>
- Maven Central para versionado de `karate-junit5`: <https://search.maven.org/search?q=g:io.karatelabs%20AND%20a:karate-junit5>

K6:

- Instalacion oficial: <https://grafana.com/docs/k6/latest/set-up/install-k6/>
- Scenarios: <https://grafana.com/docs/k6/latest/using-k6/scenarios/>
- Thresholds: <https://grafana.com/docs/k6/latest/using-k6/thresholds/>
- Custom summary: <https://grafana.com/docs/k6/latest/results-output/end-of-test/custom-summary/>

Automation Exercise:

- API list oficial: <https://automationexercise.com/api_list>

EdTech:

- Repositorio de producto: <https://github.com/nico-salsa/EdTech_Reportes_Boletines_Desarrollo>
- README: <https://github.com/nico-salsa/EdTech_Reportes_Boletines_Desarrollo/blob/main/README.md>
- Decisiones tecnicas: <https://github.com/nico-salsa/EdTech_Reportes_Boletines_Desarrollo/blob/main/docs/DECISIONES_TECNICAS_MVP.md>
- Ejecucion local: <https://github.com/nico-salsa/EdTech_Reportes_Boletines_Desarrollo/blob/main/docs/EJECUCION_LOCAL.md>

## Verificaciones realizadas durante la implementacion

- Consulta real de `automationexercise.com/api_list`
- Validacion real de `productsList`, `brandsList`, `searchProduct`, `createAccount`, `updateAccount`, `deleteAccount` y `getUserDetailByEmail`
- Consulta real de Maven Central para confirmar que `1.5.2` estaba solo como release candidate y que `1.5.1` era la estable del mismo tronco
- Instalacion real de `k6` con `winget`
- Lectura real del repo local de EdTech y verificacion secundaria del backend local en `http://localhost:8080/api`
