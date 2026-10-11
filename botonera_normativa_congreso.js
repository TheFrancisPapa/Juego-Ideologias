// botonera_normativa_congreso.js - Alias / Acceso directo a la Botonera Normativa y Sistema Legislativo
const sistemaLegislativoModule = require('./sistema_legislativo.js');

if (typeof module !== 'undefined' && module.exports) {
  module.exports = sistemaLegislativoModule;
}

if (typeof window !== 'undefined') {
  Object.assign(window, sistemaLegislativoModule);
}
