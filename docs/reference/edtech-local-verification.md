# Verificacion local opcional de EdTech

## Proposito

Este documento describe como usar EdTech localmente como referencia secundaria. No reemplaza el alcance principal del reto, que sigue siendo Automation Exercise para Karate y K6.

## Base URLs esperadas

- Backend: `http://localhost:8080/api`
- Frontend: `http://localhost:5173`

## Levantar backend

```powershell
Set-Location "C:\Sofka U\EdTech_Reportes_Boletines_Desarrollo\backend"
New-Item -ItemType Directory -Force data | Out-Null
.\gradlew.bat bootRun
```

## Levantar frontend

```powershell
Set-Location "C:\Sofka U\EdTech_Reportes_Boletines_Desarrollo\frontend"
pnpm install
pnpm dev
```

## Verificaciones ligeras recomendadas

Backend:

```powershell
Invoke-WebRequest -Uri "http://localhost:8080/api/auth/session" -Headers @{ "X-Session-Token" = "invalid-token" } -Method Get
```

Frontend:

```powershell
Start-Process "http://localhost:5173"
```

## Observaciones reales de esta implementacion

- El `2026-04-06` el puerto `8080` estaba accesible en esta maquina.
- El `2026-04-06` el puerto `5173` no estaba abierto en el momento de la exploracion.
- Una consulta con token invalido a `GET /api/auth/session` devolvio `401 Unauthorized`, consistente con la forma esperada del backend.

## Como usar EdTech sin desviar el reto

- como referencia de dominio
- como referencia secundaria de endpoints
- como base para futuras suites Karate locales
- como insumo para documentar la ruta de evolucion del QA
