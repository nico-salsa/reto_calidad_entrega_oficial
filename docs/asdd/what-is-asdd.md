# Que es ASDD

ASDD significa Agentic Spec-Driven Development. En este repo se usa como un enfoque estructurado para transformar un requerimiento complejo en especificaciones ejecutables, criterios de aceptacion, decisiones tecnicas, trazabilidad y evidencia.

## Objetivo

El objetivo de ASDD aqui no es instalar una plataforma completa de agentes, sino reducir ambiguedad y conectar de forma ordenada:

- el artefacto de entrada
- la calidad del requerimiento
- la estrategia de pruebas
- la implementacion de automatizacion
- la evidencia final

## Adaptacion usada en este repositorio

El reto tiene dos contextos a la vez:

- EdTech como producto de negocio de referencia
- Automation Exercise como target tecnico obligatorio para Karate y K6

Por eso ASDD se adapto para organizar el trabajo en torno a:

- clasificacion del reto
- evaluacion de calidad del input
- criterios de aceptacion
- diseno de pruebas
- decisiones de arquitectura del monorepo
- trazabilidad entre requerimiento y artefactos ejecutables

## Relacion con especificaciones y automatizacion

ASDD se refleja aqui en una cadena simple y verificable:

1. Se recibe un reto compuesto.
2. Se identifican objetivos, restricciones y vacios.
3. Se derivan criterios de aceptacion y decisiones tecnicas.
4. Se construyen suites Karate, scripts K6 y documentacion asociada.
5. Se deja evidencia ejecutada y rutas claras de interpretacion.

## Advertencia metodologica

En este repositorio ASDD se documenta como enfoque metodologico. No existe una plataforma completa de agentes instalada ni un orquestador real ejecutando roles de forma automatica. Cuando se nombran roles como `QA Agent`, se usan solo como abstraccion de trabajo y trazabilidad.
