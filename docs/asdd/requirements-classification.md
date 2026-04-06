# Clasificacion del requerimiento

## Tipo de artefacto

El reto se clasifica como un reto tecnico compuesto de QA y automatizacion.

## Justificacion

No encaja como historia de usuario pura porque:

- no expresa un valor de negocio singular para un actor final
- mezcla bootstrap de repositorio, automatizacion API, performance, documentacion y trazabilidad
- incluye restricciones operativas y de estilo propias de un entregable tecnico

No encaja como especificacion tradicional aislada porque conserva tono operativo de taller tecnico y exige decisiones de implementacion concretas.

## Capacidades derivadas

- preparar el repositorio de entrega
- investigar herramientas y fuentes oficiales
- automatizar 4 verbos HTTP con Karate
- disenar pruebas prudentes de performance con K6
- exportar resultados y analizarlos
- documentar ASDD aplicado
- documentar el contexto de EdTech y la relacion con el reto

## Entregables derivados

- monorepo inicializado
- `README.md` raiz
- proyecto `karate-api/`
- proyecto `k6-performance/`
- carpeta `docs/asdd/`
- carpeta `docs/performance/`
- carpeta `docs/reference/`

## Riesgos de ambiguedad detectados

- el reto exige Automation Exercise, pero tambien exige comprender y documentar EdTech
- el repo de entrega podia no existir como repo Git
- la version exacta de Karate debia confirmarse con fuente primaria
- la disponibilidad de `k6` en la maquina no estaba garantizada
- la API publica puede cambiar catalogo y tiempos de respuesta

## Supuestos usados

- el repo QA seria el unico repositorio entregable
- el backend EdTech no seria modificado
- las respuestas de Automation Exercise seguirian publicamente accesibles
- las pruebas de escritura sobre cuentas temporales debian autolimpiarse cuando fuera posible

## Restricciones por usar API publica

- no aplicar carga agresiva
- tolerar variaciones de catalogo
- no usar datos persistentes como base de assertions rigidas
- aceptar que la latencia depende de internet y de un tercero

## Uso parcial de INVEST e IEEE 830

INVEST aplica solo parcialmente porque el artefacto no es una historia de usuario clasica. IEEE 830 tambien aplica solo parcialmente porque el input no llego como especificacion formal completa, sino como reto compuesto con instrucciones operativas. Por eso se uso una mezcla pragmatica de ambos enfoques para evaluar claridad, testabilidad y vacios.
