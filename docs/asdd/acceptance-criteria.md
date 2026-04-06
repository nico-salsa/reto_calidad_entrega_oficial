# Criterios de aceptacion derivados

## Bootstrap del repositorio

- `AC-01`: el repo de entrega queda inicializado con Git y rama principal `main`
- `AC-02`: el remoto `origin` apunta a `https://github.com/nico-salsa/reto_calidad_entrega_oficial.git`
- `AC-03`: existe un `.gitignore` coherente con Java, Maven, Node, IDEs y Windows

## Karate

- `AC-04`: existe un proyecto `karate-api/` ejecutable con Maven Wrapper
- `AC-05`: la configuracion centraliza la base URL de Automation Exercise
- `AC-06`: existen 4 escenarios automatizados que cubren GET, POST, PUT y DELETE
- `AC-07`: los escenarios validan estructura o comportamiento real y no solo status HTTP
- `AC-08`: los reportes quedan localizables en `karate-api/target/karate-reports/`

## K6

- `AC-09`: existe un proyecto `k6-performance/` con scripts reutilizables
- `AC-10`: existe al menos un perfil `smoke`
- `AC-11`: existe al menos un perfil `load-basic`
- `AC-12`: las pruebas de performance aplican carga prudente sobre la API publica
- `AC-13`: cada corrida exporta consola, JSON y un artefacto humano legible

## ASDD y documentacion

- `AC-14`: existe la carpeta `docs/asdd/` completa con los documentos solicitados
- `AC-15`: el `README.md` raiz explica la dualidad EdTech vs Automation Exercise
- `AC-16`: el `README.md` raiz incluye la seccion `ASDD aplicado en este reto`
- `AC-17`: existe trazabilidad entre requerimiento, criterios, suites, scripts y evidencia

## Relacion con EdTech

- `AC-18`: existe un documento que resume el contexto funcional y tecnico de EdTech
- `AC-19`: existe un documento de verificacion local opcional de EdTech
- `AC-20`: se documenta como esta base de QA puede evolucionar hacia cobertura directa del backend EdTech
