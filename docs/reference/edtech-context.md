# Contexto EdTech

## Que hace el producto

EdTech es una aplicacion local para docentes orientada a gestionar cursos, estudiantes, programa evaluativo, registro de notas y exportacion de boletines individuales.

## Stack actual

- Frontend: React, Vite y TypeScript
- Backend: Java 21 y Spring Boot
- Persistencia: SQLite
- Exportacion: PDF, HTML y JSON

## Reglas de dominio relevantes

- los cursos son unicos por docente
- las ponderaciones del programa deben sumar exactamente `100%`
- no se permiten nombres vacios en instancias evaluativas
- no se permiten nombres duplicados de instancias evaluativas por curso
- las notas deben ser numericas y mayores o iguales a `0`
- las notas vacias deben verse vacias para UX, pero cuentan como `0` en calculo
- al exportar boletin con notas vacias debe existir advertencia previa

## Modulos actuales

- autenticacion local
- gestion de cursos
- alta y busqueda de estudiantes
- programa evaluativo
- registro de notas
- exportacion individual de boletines

## Endpoints disponibles hoy

Corroborados contra la documentacion del repo y contra la lectura local de controladores del backend:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/session`
- `POST /api/auth/logout`
- `GET /api/courses`
- `POST /api/courses`
- `GET /api/courses/{courseId}`
- `GET /api/students/{studentId}`
- `POST /api/courses/{courseId}/students`
- `PUT /api/courses/{courseId}/activities`
- `PUT /api/courses/{courseId}/grades`
- `DELETE /api/courses/{courseId}/activities/{activityId}`
- `GET /api/courses/{courseId}/students/{studentId}/report?format=pdf|html|json`

## Importancia del endpoint DELETE para QA

El endpoint `DELETE /api/courses/{courseId}/activities/{activityId}` existe en backend pero no esta integrado al frontend. Eso importa porque:

- habilita cobertura API futura sobre los 4 verbos HTTP
- permite probar comportamiento no cubierto aun por la UI
- deja una oportunidad concreta de trazabilidad entre calidad tecnica y backlog de integracion

## Por que este contexto importa en un repo QA separado

Aunque el reto tecnico obligatorio se ejecuta sobre Automation Exercise, el contexto EdTech sirve para:

- justificar la estrategia de calidad
- documentar el dominio objetivo real
- explicar por que la base creada debe crecer luego hacia `http://localhost:8080/api`
- dejar trazabilidad entre el ejercicio tecnico y la madurez de QA esperada para el producto
