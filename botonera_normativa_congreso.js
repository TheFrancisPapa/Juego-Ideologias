// botonera_normativa_congreso.js - Alias / Acceso directo a la Botonera Normativa y Sistema Legislativo
let sistemaLegislativoModule = {};
if (typeof require !== 'undefined') {
  try {
    sistemaLegislativoModule = require('./sistema_legislativo.js');
  } catch (e) {}
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = sistemaLegislativoModule;
}

if (typeof window !== 'undefined') {
  if (sistemaLegislativoModule && Object.keys(sistemaLegislativoModule).length > 0) {
    Object.assign(window, sistemaLegislativoModule);
  }
}
