---
name: payment-workflow
description: Implementa el flujo de pedidos, comprobantes, validación de pago y activación de aprovisionamiento sin ejecutar cobros externos no autorizados.
---

# Flujo de pagos

El pago inicial es manual por QR o transferencia: crea pedido, recibe comprobante y permite validación o rechazo por personal autorizado. Una validación exitosa emite el evento de pago validado que inicia la publicación automática; nunca publica un sitio por la mera carga de un comprobante.

Mantén estados auditables y mensajes claros para el cliente. Diseña integraciones futuras de pasarela para emitir el mismo evento, sin duplicar la lógica de aprovisionamiento. No realices cobros, reembolsos ni cambios en proveedores externos sin autorización explícita. Consulta [ADR-002](../../../docs/decisiones/ADR-002-pago-manual.md).
