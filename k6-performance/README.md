# K6 Performance

Este modulo contiene las pruebas de rendimiento prudentes del reto sobre `https://automationexercise.com/api`.

## Perfiles incluidos

- `smoke`
- `load-basic`

## Instalacion de k6 en Windows

```powershell
winget install --id GrafanaLabs.k6 -e --accept-package-agreements --accept-source-agreements
k6 version
& "C:\Program Files\k6\k6.exe" version
```

Si el shell actual no reconoce `k6` todavia, abrir una consola nueva o usar la ruta completa.

## Ejecucion

```powershell
Set-Location "C:\Sofka U\reto_calidad_entrega_oficial\k6-performance"
& "C:\Program Files\k6\k6.exe" run scripts\smoke.js
& "C:\Program Files\k6\k6.exe" run scripts\load-basic.js
```

## Cambiar la carga

```powershell
$env:LOAD_VUS = "2"
$env:LOAD_DURATION = "12s"
$env:LOAD_GRACEFUL_STOP = "10s"
$env:SEARCH_VUS = "1"
$env:SEARCH_ITERATIONS = "6"
$env:LOAD_P95_LIMIT_MS = "3000"
& "C:\Program Files\k6\k6.exe" run scripts\load-basic.js
```

Variables reutilizables:

- `K6_BASE_URL`
- `K6_TIMEOUT`
- `SEARCH_TERM`
- `PAUSE_SECONDS`

## Exportacion de resultados

Cada corrida exporta:

- salida legible en consola
- `results/<perfil>-summary.json`
- `results/<perfil>-summary.md`

Rutas actuales:

- [results/smoke-summary.json](./results/smoke-summary.json)
- [results/smoke-summary.md](./results/smoke-summary.md)
- [results/load-basic-summary.json](./results/load-basic-summary.json)
- [results/load-basic-summary.md](./results/load-basic-summary.md)

## Criterio tecnico aplicado

- `smoke` confirma disponibilidad y estructura.
- `load-basic` concentra la mayor parte de la carga en lecturas y busqueda.
- No se presiona de forma repetitiva `createAccount`, `updateAccount` ni `deleteAccount` porque son endpoints con efecto lateral sobre una API publica.

## Troubleshooting

- Si `PATH` no se actualiza tras instalar `k6`, usar `C:\Program Files\k6\k6.exe`.
- Si la API publica se degrada, los thresholds pueden fallar sin que eso signifique un defecto de los scripts.
- Si quieres una corrida todavia mas conservadora, reduce `LOAD_VUS`, `LOAD_DURATION` y `SEARCH_ITERATIONS`.
