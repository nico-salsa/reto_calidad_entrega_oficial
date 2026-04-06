# Arquitectura del repositorio QA

## Objetivo

Este repositorio organiza en un solo lugar la implementacion tecnica del reto, la evidencia de ejecucion y el contexto de negocio de EdTech.

## Estructura elegida

- `karate-api/` contiene automatizacion API ejecutable con Maven Wrapper
- `k6-performance/` contiene performance testing prudente y resultados exportados
- `docs/` contiene ASDD aplicado, trazabilidad, analisis y contexto funcional

## Decisiones principales

- Monorepo en lugar de dos repos porque el remoto de entrega es unico.
- Karate `1.5.1` con Java `17+` para usar una version estable compatible con el entorno hallado.
- K6 `1.7.1` instalado con `winget` para reducir friccion de evaluacion en Windows.
- Resultados de performance versionados en `k6-performance/results/` porque son evidencia ligera y legible.
- Reportes de Karate fuera del versionado porque se regeneran en `target/`.

## Dualidad explicita del reto

- EdTech es el producto de negocio al que esta base de QA debe servir en el mediano plazo.
- Automation Exercise es el blanco tecnico obligatorio del reto para demostrar Karate y K6.
- La documentacion separa ambos contextos para evitar confundir alcance actual con evolucion futura.

## Ruta de crecimiento

- Reutilizar `karate-config.js`, helpers y runners para apuntar a `http://localhost:8080/api`.
- Mantener K6 sobre endpoints de lectura o exportacion de EdTech una vez existan datos controlados y ambiente estable.
- Extender la trazabilidad actual hacia contratos, smoke local y regresion por modulo.
