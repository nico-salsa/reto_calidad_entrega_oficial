# Analisis de resultados de performance

## Lectura ejecutiva

Las dos corridas reales ejecutadas sobre Automation Exercise pasaron sin errores HTTP, con `100%` de checks exitosos y con latencias `p95` muy por debajo de los thresholds definidos. Para el alcance del reto, la base de K6 queda funcional, prudente y con resultados legibles.

## Corridas ejecutadas

### Smoke

- Perfil: `smoke`
- Archivo: [k6-performance/results/smoke-summary.json](../../k6-performance/results/smoke-summary.json)
- Fecha UTC exportada: `2026-04-06T09:45:16.458Z`

| Metrica | Valor |
| --- | --- |
| HTTP requests | 6 |
| Iterations | 2 |
| Checks rate | 100% |
| HTTP failed rate | 0% |
| Latencia promedio | 364.96 ms |
| Latencia p90 | 684.20 ms |
| Latencia p95 | 831.23 ms |
| Latencia maxima | 978.26 ms |
| Threshold `p(95) < 2500 ms` | PASS |

Interpretacion:

- el smoke confirma disponibilidad real de los tres endpoints cubiertos
- no hubo errores ni degradacion visible
- la latencia p95 fue amplia respecto al promedio, pero aun muy saludable para un servicio publico consumido por internet

### Load basic

- Perfil: `load-basic`
- Archivo: [k6-performance/results/load-basic-summary.json](../../k6-performance/results/load-basic-summary.json)
- Fecha UTC exportada: `2026-04-06T09:46:22.635Z`

| Metrica | Valor |
| --- | --- |
| HTTP requests | 26 |
| Iterations | 16 |
| Checks rate | 100% |
| HTTP failed rate | 0% |
| Latencia promedio | 436.47 ms |
| Latencia p90 | 734.84 ms |
| Latencia p95 | 782.88 ms |
| Latencia maxima | 796.66 ms |
| VUs maximos | 3 |
| Threshold `p(95) < 3000 ms` | PASS |

Interpretacion:

- la API sostuvo la carga basica propuesta sin errores
- la latencia aumento frente al smoke, pero permanecio contenida y estable
- el perfil fue suficientemente prudente para una API publica y suficientemente util para evidenciar thresholds, checks, escenarios y exportacion

## Throughput aproximado

Tomando la salida de consola observada durante las corridas:

- smoke: cerca de `0.72 req/s`
- load-basic: cerca de `1.77 req/s`

Estos valores son deliberadamente bajos porque el objetivo era demostrar diseno y respeto por la API publica, no estresarla.

## Conclusiones

- el framework de performance quedo operativo
- los thresholds configurados son realistas para este contexto
- la exportacion JSON y Markdown funciona
- la base esta lista para evolucionar hacia un entorno local mas controlado como EdTech

## Limites de interpretacion

- no se evaluo un SLA del proveedor
- no se ejecutaron cargas agresivas ni de larga duracion
- los resultados pueden variar por red, nube y estado del servicio externo
