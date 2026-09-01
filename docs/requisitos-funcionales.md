# Requisitos funcionales

## Fase previa: prueba de concepto

- Mostrar una página comercial con propuesta de valor, planes referenciales y rutas separadas para autoservicio y ventas.
- Permitir seleccionar los presets de servicios, tienda y landing page.
- Permitir cambiar colores, tipografías, logo, textos, imágenes y secciones predefinidas.
- Renderizar una vista previa en tiempo real, con modos de escritorio y móvil.
- Simular el recorrido de suscripción y presentar una URL de ejemplo publicada.
- Capturar solicitudes de proyectos personalizados mediante un formulario.

**Aceptación:** una persona puede completar el flujo preset → personalización → checkout simulado → confirmación y explicar que el sitio estándar se publica automáticamente; también puede identificar la vía para un proyecto a medida.

## Fase 1: lanzamiento comercial automatizado

- Permitir crear cuentas, iniciar sesión, guardar borradores y administrar los sitios del cliente.
- Persistir una `SiteConfiguration` validada para cada borrador y pedido.
- Crear pedidos de suscripción en bolivianos, mostrar instrucciones de QR o transferencia y recibir comprobantes.
- Permitir al equipo validar o rechazar comprobantes; una validación debe emitir un evento de aprovisionamiento.
- Crear un trabajo de publicación que genere el sitio, lo despliegue en un subdominio único y registre resultado, errores y reintentos.
- Notificar al cliente cuando el sitio esté publicado o requiera atención.
- Permitir cambios compatibles con el preset, previsualización y republicación.
- Permitir solicitar un dominio propio y verificar los registros DNS antes de activarlo con HTTPS.
- Incluir formularios de contacto, WhatsApp, ubicación y horarios en servicios; catálogo, carrito y pedidos en tienda; y formularios de captación en landing.

**Aceptación:** tras validar un pago, el sitio queda disponible en su subdominio o presenta un estado de error recuperable. Ningún cliente puede acceder a borradores, activos o administración de otro cliente.

## Fase 2: escalamiento

- Incorporar presets, bloques y opciones de estilo adicionales sin invalidar sitios existentes.
- Añadir historial de cambios, restauración de versiones, biblioteca de activos y analítica por sitio.
- Automatizar renovaciones, pagos fallidos, actualización de plan, cancelaciones y recuperación.
- Añadir observabilidad operativa: alertas, copias de seguridad, trazabilidad y recuperación de trabajos.
- Gestionar solicitudes personalizadas en un CRM o panel comercial con estados de calificación y seguimiento.

**Aceptación:** la plataforma escala el catálogo sin romper configuraciones publicadas, recupera fallos de publicación y permite administrar todo el ciclo de suscripción.
