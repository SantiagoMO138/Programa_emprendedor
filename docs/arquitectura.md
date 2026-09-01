# Arquitectura

## Principios

- Un sitio se define por datos, no por una aplicación independiente editable.
- Los presets comparten un contrato `SiteConfiguration`; el renderizador solo admite bloques compatibles.
- Los clientes están aislados por políticas de datos y por la relación propietario-sitio.
- La validación humana de pago no implica publicación manual: solo autoriza un trabajo automático.

## Componentes

| Componente | Responsabilidad |
| --- | --- |
| Aplicación Next.js | Marketing, configurador, cuenta del cliente, pedidos y panel interno. |
| Supabase | PostgreSQL, Auth, Storage de activos y políticas de acceso por cliente. |
| Servicio de aprovisionamiento | Consume eventos, valida configuración, genera el sitio y controla reintentos. |
| Cloudflare Pages/Workers | Entrega los sitios estáticos, enruta subdominios y procesa tareas perimetrales. |
| Notificaciones | Envía confirmaciones de pedido, pago, publicación y errores. |
| Docker Compose (local) | Ejecuta la aplicación y dependencias de prueba sin formar parte de producción. |

## Datos principales

`SiteConfiguration` contiene el identificador y versión del preset, identidad visual, contenido de bloques permitidos, activos y preferencias de dominio. `Subscription` relaciona cliente, plan, estado de pago y sitio. `ProvisioningJob` registra una solicitud, sus intentos, estado, URL de resultado y error no sensible.

Estados de sitio: `draft`, `payment_pending`, `provisioning`, `published`, `error` y `suspended`. Solo un pago validado puede pasar a `provisioning`.

## Ciclo de publicación

1. El cliente guarda una configuración y crea un pedido.
2. El operador valida el comprobante de pago.
3. La validación registra el evento y crea un `ProvisioningJob` idempotente.
4. El servicio genera la salida estática desde el preset y la configuración validada.
5. Se despliega en `cliente.tudominio.com`, se comprueba disponibilidad y se actualiza el estado.
6. Se notifica al cliente; los errores se registran y se reintentan de forma controlada.

## Dominios y límites

El subdominio gestionado es la entrega inicial. Un dominio propio se activa solo después de verificar DNS y HTTPS. No se crean instancias o servidores aislados por cliente en la primera arquitectura: la separación se logra con datos, controles de acceso y artefactos de publicación identificados por sitio.

El checkout, la validación de pagos y la publicación no exponen credenciales de proveedores al navegador. Las operaciones de Cloudflare y notificaciones se ejecutan únicamente en servicios del servidor.

Docker Compose reproduce localmente la aplicación y los contratos de sus dependencias. Las pruebas no llaman a Cloudflare, Supabase ni pagos reales: usan credenciales de prueba y adaptadores simulados.
