---
name: site-provisioning
description: Implementa y mantiene la generación, publicación y verificación automática de sitios y subdominios de la plataforma.
---

# Aprovisionamiento de sitios

La publicación comienza exclusivamente por un evento de pago validado y debe ser idempotente. Registra cada intento en `ProvisioningJob`, usa estados explícitos y reintentos acotados; no marques un sitio como publicado hasta comprobar su URL.

Mantén aisladas las credenciales de proveedores en el servidor. El subdominio gestionado es la entrega inicial; el dominio propio requiere verificación DNS y HTTPS antes de activarse. Consulta [arquitectura](../../../docs/arquitectura.md) y [ADR-001](../../../docs/decisiones/ADR-001-publicacion-automatizada.md).

Para pruebas locales usa los adaptadores y servicios de Docker Compose descritos en [desarrollo local](../../../docs/desarrollo-local.md); no llames a proveedores de producción.
