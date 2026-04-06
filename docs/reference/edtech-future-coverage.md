# Evolucion futura hacia cobertura directa de EdTech

## Objetivo

La base creada en este repo debe poder crecer hacia automatizacion directa del backend local de EdTech sin reestructurarse por completo.

## Reutilizacion inmediata de Karate

- Mantener `karate-config.js` y cambiar `baseUrl` a `http://localhost:8080/api`
- Agregar helpers para registrar docentes y capturar `X-Session-Token`
- Separar features por modulo: `auth`, `courses`, `students`, `activities`, `grades`, `report`

## Casos prioritarios para EdTech

- registro y login de docente
- creacion de curso con regla de unicidad por docente
- alta de estudiantes
- validacion de ponderaciones que sumen `100%`
- rechazo de instancias evaluativas vacias o duplicadas
- notas vacias visibles pero computadas como `0`
- exportacion de boletines con advertencia previa
- cobertura del endpoint `DELETE /api/courses/{courseId}/activities/{activityId}`

## Reutilizacion inmediata de K6

- smoke local de `auth/session` y `courses`
- carga ligera sobre lecturas seguras como listado de cursos o exportaciones controladas
- uso de datasets locales para no depender de datos publicos cambiantes

## Recomendacion de crecimiento

La evolucion mas segura es mantener Automation Exercise como demostracion tecnica del reto y agregar una segunda capa de suites locales para EdTech. Eso permite separar:

- evidencia del reto entregable
- regresion real del producto de negocio
