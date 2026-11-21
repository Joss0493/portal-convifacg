// ===== CONTENIDO DEL PORTAL (edita solo este archivo) =====
// Cada lista es independiente. Copia una línea, cambia los textos y guarda.
// Fechas en formato AAAA-MM-DD. Los ejemplos están marcados: reemplázalos por los reales.

window.PORTAL = {

  avisos: [
    { fecha: '2026-11-21', titulo: 'Portal actualizado', texto: 'Ahora el portal reúne la app, la extensión del SIE, avisos y calendario en un solo lugar.', importante: false },
    { fecha: '2026-11-21', titulo: 'Ejemplo: Entrega de notas', texto: 'Edita o borra este aviso en datos.js. Pon importante: true para destacarlo.', importante: true }
  ],

  calendario: [
    { fecha: '2026-11-27', titulo: 'Ejemplo: Cierre de notas del trimestre' },
    { fecha: '2026-12-04', titulo: 'Ejemplo: Reunión de docentes' },
    { fecha: '2026-12-11', titulo: 'Ejemplo: Entrega de boletines' }
  ],

  enlaces: [
    { nombre: 'SIE (Sistema de Información Educativa)', url: 'https://academico.sie.gob.bo', nota: 'Registro de calificaciones' },
    { nombre: 'Correo Gmail', url: 'https://mail.google.com', nota: 'Bandeja de entrada' },
    { nombre: 'Google Drive', url: 'https://drive.google.com', nota: 'Documentos y planillas' }
  ],

  faq: [
    { p: '¿Dónde se guardan las notas?', r: 'En tu Google Sheets. Esta página solo es la pantalla: no guarda notas en GitHub.' },
    { p: '¿Puedo usar la extensión en el celular?', r: 'No. Las extensiones funcionan en Chrome o Edge de computadora.' },
    { p: 'Aparece «Failed to fetch»', r: 'Revisa que la URL de Apps Script termine en /exec y que el acceso sea «Cualquier persona». Después pulsa Ctrl + Shift + R.' },
    { p: '¿Olvidé la clave del portal?', r: 'En Apps Script abre Configuración del proyecto → Propiedades de la secuencia de comandos y cambia PORTAL_CLAVE.' },
    { p: 'Cambié el código de Apps Script y nada cambia', r: 'Crea una Nueva versión: Implementar → Administrar implementaciones → ✏ → Nueva versión → Implementar.' }
  ]
};
