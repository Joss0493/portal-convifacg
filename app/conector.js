// Permite que el Index.html del Registro escolar funcione fuera de Google:
// reemplaza google.script.run por llamadas web (fetch) al Apps Script publicado.
(function () {
  if (window.google && window.google.script && window.google.script.run) return;   // dentro de Apps Script: no hace nada
  const URL_API = () => (window.CONFIG && window.CONFIG.API_URL || localStorage.getItem('API_URL') || '').trim();

  function llamar(fn, args) {
    const url = URL_API();
    if (!url) return Promise.reject(new Error('Falta la URL del servidor. Abre config.js y pega la URL de Apps Script (termina en /exec).'));
    return fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ fn: fn, args: args }), redirect: 'follow' })
      .then(r => { if (!r.ok) throw new Error('El servidor respondió ' + r.status); return r.json(); })
      .then(j => { if (!j.ok) throw new Error(j.error || 'Error del servidor'); return j.data; });
  }

  function crear(ok, mal) {
    return new Proxy({}, {
      get(_, nombre) {
        if (nombre === 'withSuccessHandler') return f => crear(f, mal);
        if (nombre === 'withFailureHandler') return f => crear(ok, f);
        return (...args) => llamar(String(nombre), args).then(d => ok && ok(d), e => mal ? mal(e) : console.error(e));
      }
    });
  }
  window.google = { script: { run: crear(null, null) } };
})();
