# ADR-001: Publicación automatizada de sitios estáticos

- **Estado:** aceptada
- **Fecha:** 2026-08-25

## Contexto

La propuesta comercial requiere que una web estándar esté disponible en minutos después de confirmar el pago. La publicación manual limita la promesa del producto y la capacidad de escalar.

## Decisión

Los sitios de autoservicio se generan de forma automática desde un preset y una `SiteConfiguration` validada. Se entregan como sitios estáticos multi-tenant bajo un subdominio administrado mediante Cloudflare. Un trabajo idempotente controla generación, despliegue, comprobación y reintentos.

## Consecuencias

La personalización se limita a bloques y propiedades soportados por los presets. Esto simplifica el despliegue, reduce costes y permite tiempos cortos. Los requisitos fuera de este modelo pasan a ventas como proyecto personalizado.
