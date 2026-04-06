# Diseno de pruebas

## Seleccion de escenarios Karate

Los cuatro escenarios se eligieron para cubrir el objetivo minimo obligatorio del reto con verbos HTTP reales y comportamiento verificable:

- `GET /productsList` valida integridad minima del catalogo y de la metadata de categoria
- `POST /createAccount` valida creacion real y persistencia consultable por email
- `PUT /updateAccount` valida actualizacion de datos sobre una cuenta temporal
- `DELETE /deleteAccount` valida borrado y posterior ausencia del recurso por consulta

## Supuestos y restricciones

- Las cuentas temporales se crean con emails unicos para minimizar colisiones.
- El catalogo de productos puede cambiar, por eso no se validan conteos exactos.
- Automation Exercise expresa el resultado funcional con `responseCode` y `message` dentro del body.

## Seleccion de escenarios K6

K6 se diseno con prudencia porque el target es una API publica:

- `productsList` y `brandsList` son endpoints de lectura aptos para la mayor parte de la carga
- `searchProduct` es un POST, pero sin efecto lateral persistente, por eso se incluye como endpoint razonable
- `createAccount`, `updateAccount` y `deleteAccount` se dejaron fuera del performance repetitivo por respeto a la API publica y para evitar residuos de datos

## Relacion con el contexto de calidad de EdTech

Aunque el performance obligatorio del reto no corre sobre EdTech, el criterio usado si conversa con el producto real:

- separar smoke de carga basica sirve para futuros checks locales de disponibilidad de EdTech
- privilegiar endpoints de lectura es una practica razonable para pruebas tempranas sobre ambientes locales
- documentar el endpoint `DELETE` de EdTech deja una puerta abierta para ampliar la cobertura API futura, incluso si hoy el frontend no lo consume
