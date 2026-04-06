# Karate API

Este modulo contiene la automatizacion API del reto sobre `https://automationexercise.com/api`.

## Alcance cubierto

- `GET /productsList`
- `POST /createAccount`
- `PUT /updateAccount`
- `DELETE /deleteAccount`

La suite usa datos dinamicos para cuentas temporales y limpia los usuarios creados al finalizar cada flujo exitoso.

## Prerequisitos

- Java `17+`
- Acceso a internet

## Instalacion

```powershell
Set-Location "C:\Sofka U\reto_calidad_entrega_oficial\karate-api"
.\mvnw.cmd -version
```

## Ejecucion total

```powershell
Set-Location "C:\Sofka U\reto_calidad_entrega_oficial\karate-api"
.\mvnw.cmd -q -Dtest=AutomationExerciseSuiteTest test
```

## Ejecucion individual

```powershell
.\mvnw.cmd -q -Dtest=GetProductsFeatureTest test
.\mvnw.cmd -q -Dtest=CreateAccountFeatureTest test
.\mvnw.cmd -q -Dtest=UpdateAccountFeatureTest test
.\mvnw.cmd -q -Dtest=DeleteAccountFeatureTest test
```

## Configuracion base

La base URL se centraliza en `karate-config.js`.

Valores soportados:

- propiedad Maven `-DbaseUrl=...`
- propiedad Maven `-Dkarate.baseUrl=...`
- variable de entorno `KARATE_BASE_URL`

Ejemplo:

```powershell
.\mvnw.cmd "-DbaseUrl=https://automationexercise.com/api" test
```

## Reportes

Los reportes quedan en:

- [target/karate-reports/karate-summary.html](./target/karate-reports/karate-summary.html)
- [target/karate-reports](./target/karate-reports)

## Decisiones de diseno

- La version fijada es Karate `1.5.1`.
- La linea `1.5.2` se dejo fuera porque al momento de implementacion aparecia solo como `RC`.
- Los endpoints de cuentas usan `application/x-www-form-urlencoded`.
- La API publica usa `responseCode` y `message` dentro del body, por eso las validaciones no dependen solo del status HTTP.
- El escenario GET evita conteos exactos del catalogo para tolerar cambios legitimos del sitio.

## Troubleshooting

- Si `.\mvnw.cmd` descarga Maven por primera vez, el primer arranque tarda mas.
- Si la red falla, los reportes pueden quedar incompletos y la suite fallara por timeout.
- Si la API publica cambia mensajes funcionales, revisar primero `https://automationexercise.com/api_list`.
