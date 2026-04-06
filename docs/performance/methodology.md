# Metodologia de performance

## Objetivo

Demostrar criterio tecnico de performance sobre una API publica sin generar carga agresiva ni efectos laterales innecesarios.

## Endpoints elegidos

- `GET /productsList`
- `GET /brandsList`
- `POST /searchProduct`

## Endpoints excluidos de carga repetitiva

- `POST /createAccount`
- `PUT /updateAccount`
- `DELETE /deleteAccount`

Se dejaron fuera de la carga repetitiva porque modifican estado en una API publica y no son apropiados para loops de performance.

## Perfiles implementados

### Smoke

- 1 VU
- 2 iteraciones
- secuencia simple sobre productos, marcas y busqueda
- thresholds base con `p(95) < 2500 ms`

### Load basic

- escenario `catalog_readers` con 2 VUs durante 12 segundos
- escenario `search_readers` con 1 VU y 6 iteraciones
- thresholds base con `p(95) < 3000 ms`

## Criterios tecnicos usados

- `checks` mayores a `99%`
- `http_req_failed` menor a `1%`
- `http_req_duration p95` bajo limites prudentes
- pausas entre llamadas para no concentrar picos innecesarios

## Exportacion

Cada corrida produce:

- resumen visible en consola
- resumen JSON
- resumen Markdown

Las salidas se guardan en `k6-performance/results/`.

## Limitacion metodologica

Las mediciones dependen de internet y de un tercero. Por eso se interpretan como evidencia tecnica del framework y del criterio aplicado, no como SLA formal del servicio publico.
