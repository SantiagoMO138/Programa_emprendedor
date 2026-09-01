# Aurea Analytics

Aurea Analytics es una plataforma autoservicio dirigida a PyMEs bolivianas. El cliente elige una plantilla, personaliza contenido y estilo dentro de límites definidos, valida un pago por QR o transferencia y recibe un sitio publicado automáticamente en un subdominio.

Los proyectos que requieren diseño, funcionalidades o integraciones fuera de los presets se derivan al equipo de ventas.

## Demo pública

Tras ejecutarse el despliegue de GitHub Pages, el POC estará disponible en [SantiagoMO138.github.io/Programa_emprendedor](https://santiagomo138.github.io/Programa_emprendedor/).

## Estado

El proyecto está en etapa de definición y prueba de concepto (POC). Aún no contiene una aplicación ejecutable.

## Stack objetivo

- Next.js + TypeScript + React
- Tailwind CSS y componentes accesibles
- Supabase (PostgreSQL, Auth y Storage)
- Cloudflare Pages/Workers para publicación y automatización
- Docker Compose para desarrollo local y pruebas de integración

Consulta [la arquitectura](docs/arquitectura.md), [el stack](docs/stack.md) y [los requisitos](docs/requisitos-funcionales.md) antes de iniciar la implementación.

## Preparación local prevista

Cuando se cree la aplicación, Docker Compose será el entorno de desarrollo reproducible. Levantará la aplicación, una base de datos de pruebas y los servicios locales necesarios; Cloudflare y Supabase administrados seguirán siendo servicios de producción.

El flujo previsto es:

```bash
docker compose up --build
docker compose run --rm app npm run lint
docker compose run --rm app npm run test
docker compose down --volumes
```

Las variables de entorno, la configuración de Supabase y las credenciales de Cloudflare se documentarán junto con la primera implementación; nunca deben incorporarse al repositorio.

Consulta la [guía de desarrollo local](docs/desarrollo-local.md) para los servicios y las reglas de Docker.

## Documentación

- [Producto](docs/producto.md)
- [Requisitos funcionales](docs/requisitos-funcionales.md)
- [Arquitectura](docs/arquitectura.md)
- [Stack](docs/stack.md)
- [Desarrollo local](docs/desarrollo-local.md)
- [Roadmap](docs/roadmap.md)
- [Decisiones de arquitectura](docs/decisiones)
