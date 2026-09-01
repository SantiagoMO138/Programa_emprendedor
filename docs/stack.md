# Stack técnico

| Área | Tecnología | Uso |
| --- | --- | --- |
| Aplicación | Next.js, TypeScript y React | POC, marketing, configurador, paneles y endpoints de servidor. |
| UI | Tailwind CSS y componentes accesibles | Interfaz consistente, responsiva y mantenible. |
| Formularios | Formularios tipados con validación de esquema | Datos de configuración, pedidos y contacto comercial. |
| Datos | Supabase PostgreSQL | Clientes, sitios, configuraciones, suscripciones, pedidos y trabajos. |
| Identidad y archivos | Supabase Auth y Storage | Sesiones, logos, imágenes y comprobantes de pago. |
| Publicación | Cloudflare Pages y Workers | Hosting estático, rutas por subdominio y lógica perimetral. |
| Automatización | Cola de trabajos compatible con Workers | Aprovisionamiento, reintentos, DNS y notificaciones. |
| Entorno local | Docker y Docker Compose | Desarrollo reproducible, pruebas de integración y servicios de prueba aislados. |
| Calidad | Pruebas unitarias, integración y E2E | Configurador, publicación y flujo de compra. |

## Justificación

Next.js y TypeScript permiten construir el POC y evolucionarlo sin cambiar de plataforma. Supabase concentra datos, autenticación y activos con controles por fila. Cloudflare reduce el coste y latencia de servir sitios estáticos multi-tenant, y Workers permite conectar la publicación y dominio con procesos asíncronos.

El proveedor concreto de QR, transferencia, correo y cola se seleccionará durante la implementación según disponibilidad, coste y soporte operativo en Bolivia. La interfaz se diseñará para que estos servicios sean reemplazables.

Docker no se utiliza para servir los sitios de producción. Su propósito es que todo desarrollador ejecute la misma versión de Node.js, dependencias y servicios de prueba antes de desplegar en Cloudflare.
