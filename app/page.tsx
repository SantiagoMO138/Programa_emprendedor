"use client";

import { useEffect, useMemo, useState } from "react";

type PresetKey = "servicios" | "tienda" | "landing";
type Viewport = "desktop" | "mobile";

type Preset = {
  key: PresetKey;
  label: string;
  short: string;
  eyebrow: string;
  title: string;
  body: string;
  color: string;
  cards: string[];
};

const presets: Preset[] = [
  { key: "servicios", label: "Servicios", short: "Para negocios que generan confianza", eyebrow: "Estudio de bienestar", title: "Tu mejor versión empieza hoy.", body: "Atención cercana, resultados reales y un espacio pensado para ti.", color: "#0e8b7d", cards: ["Consulta inicial", "Plan personalizado", "Seguimiento"] },
  { key: "tienda", label: "Tienda", short: "Para vender productos online", eyebrow: "Casa Nativa", title: "Objetos que hacen hogar.", body: "Una colección pequeña de piezas honestas, hechas para durar.", color: "#d55d36", cards: ["Nuevos favoritos", "Hecho a mano", "Entrega local"] },
  { key: "landing", label: "Landing page", short: "Para lanzar una idea o campaña", eyebrow: "Impulso 2026", title: "La idea que estás listo para mover.", body: "Una experiencia breve y clara para convertir curiosidad en acción.", color: "#6c4cff", cards: ["Aprende", "Conecta", "Crece"] }
];

const colors = ["#0e8b7d", "#d55d36", "#6c4cff", "#d0a42c", "#163a70"];

export default function Home() {
  const [presetKey, setPresetKey] = useState<PresetKey>("servicios");
  const [brand, setBrand] = useState("Aurea Analytics");
  const [title, setTitle] = useState(presets[0].title);
  const [body, setBody] = useState(presets[0].body);
  const [accent, setAccent] = useState(presets[0].color);
  const [font, setFont] = useState<"sans" | "serif">("sans");
  const [showCards, setShowCards] = useState(true);
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [salesOpen, setSalesOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const preset = useMemo(() => presets.find((item) => item.key === presetKey)!, [presetKey]);

  useEffect(() => {
    const saved = localStorage.getItem("vitrina-poc");
    if (!saved) return;
    try {
      const data = JSON.parse(saved) as { brand?: string; title?: string; body?: string; accent?: string; presetKey?: PresetKey };
      if (data.brand) setBrand(data.brand);
      if (data.title) setTitle(data.title);
      if (data.body) setBody(data.body);
      if (data.accent) setAccent(data.accent);
      if (data.presetKey) setPresetKey(data.presetKey);
    } catch { /* A demo must continue if an old draft is malformed. */ }
  }, []);

  function choosePreset(next: Preset) {
    setPresetKey(next.key);
    setTitle(next.title);
    setBody(next.body);
    setAccent(next.color);
  }

  function saveDraft() {
    localStorage.setItem("vitrina-poc", JSON.stringify({ presetKey, brand, title, body, accent }));
  }

  function confirmSubscription() {
    setConfirmed(true);
    setCheckoutOpen(false);
    localStorage.removeItem("vitrina-poc");
  }

  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav wrap">
          <a className="wordmark" href="#inicio"><i />AUREA ANALYTICS</a>
          <div className="nav-links"><a href="#como-funciona">Cómo funciona</a><a href="#planes">Planes</a><button className="link-button" onClick={() => setSalesOpen(true)}>Proyecto a medida</button></div>
          <button className="nav-cta" onClick={() => document.getElementById("creador")?.scrollIntoView({ behavior: "smooth" })}>Crear mi página <span>→</span></button>
        </nav>
        <div className="hero-copy wrap">
          <p className="kicker">WEBS QUE SE PONEN A TRABAJAR</p>
          <h1>Tu negocio merece<br /><em>salir al mundo.</em></h1>
          <p className="hero-text">Elige una base, hazla tuya y publícala. Sin esperar semanas, sin saber programar.</p>
          <button className="primary" onClick={() => document.getElementById("creador")?.scrollIntoView({ behavior: "smooth" })}>Empieza a crear <span>→</span></button>
          <p className="microcopy">Sin tarjeta para probar · Publicación en minutos</p>
        </div>
        <div className="orb orb-one" /><div className="orb orb-two" />
      </section>

      <section className="steps wrap" id="como-funciona">
        <p className="section-label">ASÍ DE SIMPLE</p>
        <div className="steps-grid">
          {[['01', 'Elige tu base', 'Encuentra una estructura que encaje con tu negocio.'], ['02', 'Hazla tuya', 'Cambia textos, colores, tipografía e imágenes.'], ['03', 'Empieza a vender', 'Suscríbete y recibe tu página lista para compartir.']].map(([number, heading, text]) => <article className="step" key={number}><span>{number}</span><h3>{heading}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="builder-section" id="creador">
        <div className="wrap builder-intro"><p className="section-label">PRUÉBALO AHORA</p><h2>Crea una primera versión<br />en menos de un minuto.</h2><p>Todo lo que necesitas para verte profesional desde el primer día.</p></div>
        <div className="builder wrap">
          <aside className="controls">
            <div className="control-heading"><span>PASO 1 DE 3</span><b>Elige una base</b></div>
            <div className="preset-list">
              {presets.map((item) => <button key={item.key} className={`preset ${presetKey === item.key ? "selected" : ""}`} onClick={() => choosePreset(item)}><span className={`preset-icon ${item.key}`}>{item.key === "servicios" ? "✦" : item.key === "tienda" ? "▣" : "↗"}</span><span><b>{item.label}</b><small>{item.short}</small></span><i>→</i></button>)}
            </div>
            <div className="control-heading compact"><span>PASO 2 DE 3</span><b>Personaliza</b></div>
            <label>Nombre de tu negocio<input value={brand} maxLength={22} onChange={(e) => setBrand(e.target.value)} /></label>
            <label>Titular principal<textarea value={title} rows={2} maxLength={70} onChange={(e) => setTitle(e.target.value)} /></label>
            <label>Descripción<textarea value={body} rows={2} maxLength={120} onChange={(e) => setBody(e.target.value)} /></label>
            <div className="inline-label"><span>Color principal</span><div className="swatches">{colors.map((color) => <button key={color} aria-label={`Color ${color}`} onClick={() => setAccent(color)} className={accent === color ? "chosen" : ""} style={{ background: color }} />)}</div></div>
            <div className="font-row"><span>Tipografía</span><button className={font === "sans" ? "active" : ""} onClick={() => setFont("sans")}>Moderna</button><button className={font === "serif" ? "active serif" : "serif"} onClick={() => setFont("serif")}>Editorial</button></div>
            <label className="toggle"><span>Mostrar beneficios</span><input type="checkbox" checked={showCards} onChange={(e) => setShowCards(e.target.checked)} /><i /></label>
            <div className="control-actions"><button className="save" onClick={saveDraft}>Guardar borrador</button><button className="subscribe" onClick={() => setCheckoutOpen(true)}>Continuar <span>→</span></button></div>
          </aside>
          <section className="preview-area">
            <div className="preview-bar"><span>VISTA PREVIA</span><div className="view-switch"><button className={viewport === "desktop" ? "active" : ""} onClick={() => setViewport("desktop")}>▭ Escritorio</button><button className={viewport === "mobile" ? "active" : ""} onClick={() => setViewport("mobile")}>▯ Móvil</button></div></div>
            <div className="canvas"><div className={`browser ${viewport} ${font}`} style={{ "--accent": accent } as React.CSSProperties}><div className="browser-top"><div><i /><i /><i /></div><span>tupagina.vitrina.bo</span></div><PreviewSite preset={preset} brand={brand} title={title} body={body} accent={accent} showCards={showCards} /></div></div>
          </section>
        </div>
      </section>

      <section className="plans wrap" id="planes"><p className="section-label">UN PLAN, TODO LISTO</p><div className="plan-card"><div><span className="pill">PÁGINA ESENCIAL</span><h2>Tu lugar en internet,<br />sin vueltas.</h2><p>Todo lo necesario para empezar con una presencia que te representa.</p></div><div className="plan-price"><p><b>Bs 149</b> / mes</p><ul><li>Hosting y seguridad incluidos</li><li>Dominio Vitrina incluido</li><li>Edición de contenidos</li><li>Soporte cercano</li></ul><button className="primary dark" onClick={() => setCheckoutOpen(true)}>Crear mi página <span>→</span></button></div></div></section>

      <section className="custom wrap"><div><p className="section-label">¿ALGO DIFERENTE EN MENTE?</p><h2>Si lo imaginas, podemos construirlo.</h2><p>Para proyectos con necesidades especiales, nuestro equipo te acompaña desde la idea hasta el lanzamiento.</p></div><button className="outline" onClick={() => setSalesOpen(true)}>Hablar con ventas <span>→</span></button></section>

      <footer className="wrap"><a className="wordmark" href="#inicio"><i />AUREA ANALYTICS</a><p>Webs que se ponen a trabajar.</p><span>© 2026 Aurea Analytics</span></footer>

      {checkoutOpen && <Modal onClose={() => setCheckoutOpen(false)}><p className="section-label">CASI LISTO</p><h2>Tu página está preparada.</h2><p>Esta es una demostración: en la versión real elegirás tu plan y recibirás las instrucciones de pago por QR o transferencia.</p><div className="summary"><span>Base elegida</span><b>{preset.label}</b><span>Tu dirección</span><b>{(brand || "tumarca").toLowerCase().replace(/\s+/g, "-")}.vitrina.bo</b></div><button className="primary full" onClick={confirmSubscription}>Simular suscripción <span>→</span></button></Modal>}
      {salesOpen && <Modal onClose={() => setSalesOpen(false)}><p className="section-label">PROYECTO PERSONALIZADO</p><h2>Cuéntanos tu idea.</h2><p>Cuéntanos qué necesitas y el equipo de ventas te contactará para preparar una propuesta.</p><form onSubmit={(e) => { e.preventDefault(); setSalesOpen(false); alert("¡Gracias! En un producto real, ventas recibirá tu solicitud."); }}><input required placeholder="Tu nombre" /><input required type="email" placeholder="Correo de trabajo" /><textarea required rows={4} placeholder="¿Qué quieres construir?" /><button className="primary full" type="submit">Enviar solicitud <span>→</span></button></form></Modal>}
      {confirmed && <div className="confirmation"><button onClick={() => setConfirmed(false)}>×</button><span>✓</span><div><b>¡Listo! Tu sitio está en camino.</b><p>En la versión real recibirías tu enlace al confirmar el pago.</p></div></div>}
    </main>
  );
}

function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={onClose}><section className="modal" role="dialog" aria-modal="true" onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" onClick={onClose} aria-label="Cerrar">×</button>{children}</section></div>;
}

function PreviewSite({ preset, brand, title, body, accent, showCards }: { preset: Preset; brand: string; title: string; body: string; accent: string; showCards: boolean }) {
  const [notice, setNotice] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [booking, setBooking] = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const displayBrand = brand || "AUREA ANALYTICS";
  const actionLabel = preset.key === "servicios" ? "Reserva una consulta" : preset.key === "tienda" ? "Ver colección" : "Quiero participar";

  return <div className="demo-site">
    <header><strong>{displayBrand}</strong><nav><button onClick={() => setNotice("Estás viendo el inicio.")}>Inicio</button><button onClick={() => setNotice("Aquí iría la historia de tu marca.")}>Nosotros</button><button onClick={() => setNotice("Formulario de contacto listo para conectar.")}>Contacto</button></nav>{preset.key === "tienda" ? <button onClick={() => setNotice(cartCount ? `Tienes ${cartCount} producto${cartCount === 1 ? "" : "s"} en tu carrito.` : "Tu carrito está vacío.")} style={{ background: accent }}>Carrito {cartCount ? `(${cartCount})` : ""}</button> : <button onClick={() => setNotice("¡Perfecto! Este botón abriría tu canal de contacto.")} style={{ background: accent }}>Hablemos</button>}</header>
    <div className="site-hero"><p>{preset.eyebrow}</p><h3>{title || preset.title}</h3><div className="hero-swash" /><article><p>{body || preset.body}</p><button onClick={() => setNotice(preset.key === "servicios" ? "Elige un horario en el módulo de reservas." : preset.key === "tienda" ? "Explora los productos destacados abajo." : "Deja tu correo en el formulario de acceso.")} style={{ background: accent }}>{actionLabel} <b>→</b></button></article></div>
    {preset.key === "servicios" && <section className="interactive-block appointment"><div><small>RESERVA ONLINE</small><b>{booking ? "Consulta reservada" : "Elige tu horario"}</b></div>{booking ? <span className="success-chip">✓ Martes · 10:30</span> : <div className="slot-row"><button onClick={() => setBooking(true)}>Mar · 10:30</button><button onClick={() => setBooking(true)}>Jue · 16:00</button></div>}</section>}
    {preset.key === "tienda" && <section className="interactive-block products"><div className="product"><span className="product-image one" /><b>Vela de barro</b><small>Bs 89</small><button onClick={() => { setCartCount((count) => count + 1); setNotice("Vela de barro añadida al carrito."); }}>Añadir +</button></div><div className="product"><span className="product-image two" /><b>Jarrón Nativa</b><small>Bs 129</small><button onClick={() => { setCartCount((count) => count + 1); setNotice("Jarrón Nativa añadido al carrito."); }}>Añadir +</button></div></section>}
    {preset.key === "landing" && <section className="interactive-block lead-form">{leadSent ? <div className="lead-success"><b>✓ ¡Estás dentro!</b><small>Te avisaremos de las novedades.</small></div> : <><div><small>ACCESO ANTICIPADO</small><b>Recibe las novedades primero.</b></div><button onClick={() => setLeadSent(true)} style={{ background: accent }}>Unirme <span>→</span></button></>}</section>}
    {notice && <p className="preview-notice" role="status"><span>✓</span>{notice}</p>}
    {showCards && <div className="site-cards">{preset.cards.map((card, index) => <button onClick={() => setNotice(`${card}: bloque informativo de tu página.`)} key={card}><small>0{index + 1}</small><b>{card}</b><span style={{ color: accent }}>↗</span></button>)}</div>}
  </div>;
}
