# ADR-002: Pago manual con publicación automática posterior

- **Estado:** aceptada
- **Fecha:** 2026-08-25

## Contexto

El lanzamiento se orienta a Bolivia y comienza con pagos por QR o transferencia. La confirmación del pago puede requerir validar un comprobante mientras se define o integra una pasarela local.

## Decisión

El cliente crea un pedido, recibe instrucciones de pago y adjunta un comprobante. Un operador valida o rechaza el comprobante. La validación registra un evento que inicia un aprovisionamiento automático; el operador no publica el sitio manualmente.

## Consecuencias

El plazo de 2 a 5 minutos se cuenta desde la validación del pago. El sistema debe mostrar con claridad los estados pendiente, validado, aprovisionando, publicado y error. La integración futura de una pasarela podrá emitir el mismo evento de pago validado.
