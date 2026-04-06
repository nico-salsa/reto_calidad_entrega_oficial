# Reto QA API con Karate

Este repositorio ahora contiene solo el entregable de automatizacion API con Karate para `automationexercise.com/api_list`.

La parte de performance con K6 fue separada al repo companero `reto_calidad_entrega_oficial_2` para alinearse con la nueva division solicitada.

## Contenido

- `karate-api/`
- `.gitignore`
- `README.md`

## Prerequisitos

- Windows con PowerShell
- Java `17+`
- Acceso a internet

## Ejecutar la suite completa

```powershell
Set-Location "C:\Sofka U\reto_calidad_entrega_oficial\karate-api"
.\mvnw.cmd -q -Dtest=AutomationExerciseSuiteTest test
```

## Ejecutar una prueba individual

```powershell
Set-Location "C:\Sofka U\reto_calidad_entrega_oficial\karate-api"
.\mvnw.cmd -q -Dtest=GetProductsFeatureTest test
```

## Reportes

- [karate-api/target/karate-reports](./karate-api/target/karate-reports)
- [karate-api/README.md](./karate-api/README.md)

## Cobertura actual

- `GET /productsList`
- `POST /createAccount`
- `PUT /updateAccount`
- `DELETE /deleteAccount`

## Nota sobre la separacion

La automatizacion API queda en este repo.

La automatizacion de performance queda en:

- `https://github.com/nico-salsa/reto_calidad_entrega_oficial_2.git`
