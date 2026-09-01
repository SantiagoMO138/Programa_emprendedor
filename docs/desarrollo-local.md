# Desarrollo local con Docker

## Objetivo

Docker Compose será el modo estándar para desarrollar y probar la aplicación sin depender de servicios de producción. Asegura la misma versión de Node.js y separa las credenciales locales de las reales.

## Servicios previstos

| Servicio | Propósito | Perfil |
| --- | --- | --- |
| `app` | Aplicación Next.js y pruebas unitarias/E2E. | Disponible ahora. |
| `db-test` | PostgreSQL efímero para pruebas de integración. | Fase 1. |
| `mail-test` | Buzón SMTP local para inspeccionar notificaciones. | Fase 1. |
| `worker` | Consumidor local de trabajos de aprovisionamiento con adaptadores simulados. | Fase 1. |

La aplicación usará Supabase administrado en producción. Para desarrollo, puede conectarse a Supabase local o a `db-test` mediante una capa de repositorio; las pruebas no deben requerir una cuenta o credenciales productivas.

## Archivos disponibles para el POC

- `Dockerfile`: imagen de desarrollo de Node.js y dependencias reproducibles de la aplicación.
- `compose.yaml`: servicio `app` expuesto en el puerto 3000, con volumen de dependencias aislado.
- `.dockerignore`: excluye dependencias locales, secretos y artefactos de compilación.

La primera versión de Compose mantiene el POC liviano. `db-test`, `mail-test` y `worker` se agregarán al iniciar las funciones de cuentas, pagos y aprovisionamiento de la fase 1.

Ejecuta `docker compose up --build` y abre `http://localhost:3000`. Detén el entorno con `docker compose down`.

## Reglas de pruebas

- Las pruebas unitarias se ejecutan dentro de `app` y no necesitan red externa.
- Las pruebas de integración arrancan `db-test` y `worker`; usan datos aislados y eliminables.
- Las pruebas E2E usan el checkout y los adaptadores de publicación simulados.
- Nunca se montan archivos de credenciales ni se invocan pagos, DNS, Cloudflare o Supabase de producción desde Compose.
- Antes de integrar una función se ejecutan lint, pruebas unitarias e integración mediante Compose.

## Producción

La aplicación y los sitios publicados se entregan con Cloudflare Pages/Workers. Docker no es un requisito de ejecución en producción y no sustituye la configuración de dominios, HTTPS ni los controles de Supabase.
