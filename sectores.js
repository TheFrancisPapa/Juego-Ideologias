// sectores.js - Definición de los 6 grandes bloques de la sociedad argentina
// Incluye ponderación demográfica/electoral y sensibilidades políticas

const SECTORES_ARG = {
  trabajo: {
    id: "trabajo",
    nombre: "Mundo del Trabajo & Movimientos Sociales",
    icono: "fa-solid fa-people-group",
    color: "text-red-400",
    pesoElectoral: 0.28, // 28% del padrón electoral
    descripcion: "Sindicatos (CGT/CTA), trabajadores registrados, economía informal, comedores comunitarios y cooperativas populares.",
    prioridades: "Salarios por encima de la inflación, paritarias libres, protección contra despidos y subsidios sociales de emergencia.",
    aprobacionInicial: 50
  },
  productivo: {
    id: "productivo",
    nombre: "Sectores Productivos, Agro e Industria",
    icono: "fa-solid fa-wheat-awn",
    color: "text-amber-400",
    pesoElectoral: 0.18, // 18% del padrón electoral (con enorme peso en PBI e inversión)
    descripcion: "Sociedad Rural y agroexportadores, Unión Industrial (UIA), PYMES de servicios, comerciantes y sector financiero.",
    prioridades: "Baja de impuestos, eliminación de retenciones al agro, desregulación laboral y estabilidad cambiaria sin cepos.",
    aprobacionInicial: 50
  },
  claseMedia: {
    id: "claseMedia",
    nombre: "Clases Medias & Ciudadanía Civil",
    icono: "fa-solid fa-users-viewfinder",
    color: "text-blue-400",
    pesoElectoral: 0.26, // 26% del padrón electoral
    descripcion: "Docentes, profesionales independientes, comerciantes barriales, jubilados y familias de clase media urbana.",
    prioridades: "Baja inflación en el supermercado, seguridad en las calles, previsibilidad económica y escuelas/hospitales en condiciones.",
    aprobacionInicial: 50
  },
  estadoCiencia: {
    id: "estadoCiencia",
    nombre: "Aparato Público, Ciencia & Universidad",
    icono: "fa-solid fa-graduation-cap",
    color: "text-cyan-400",
    pesoElectoral: 0.12, // 12% del padrón electoral
    descripcion: "Empleados públicos estatales, científicos del CONICET, médicos de hospitales públicos, docentes universitarios y empresas del Estado.",
    prioridades: "Presupuesto digno para ciencia y salud, estabilidad laboral estatal, soberanía tecnológica y defensa de empresas públicas.",
    aprobacionInicial: 50
  },
  seguridadJusticia: {
    id: "seguridadJusticia",
    nombre: "Fuerzas de Seguridad, Defensa & Tribunales",
    icono: "fa-solid fa-shield-halved",
    color: "text-emerald-400",
    pesoElectoral: 0.08, // 8% del padrón electoral (gran poder institucional)
    descripcion: "Fuerzas federales (Gendarmería, Prefectura, PFA), policías provinciales, Fuerzas Armadas, jueces y fiscales.",
    prioridades: "Equipamiento moderno, respaldo político a la acción policial, combate implacable al narcotráfico y respeto irrestricto a la ley.",
    aprobacionInicial: 50
  },
  frenteExterno: {
    id: "frenteExterno",
    nombre: "Frente Externo & Mercados Internacionales",
    icono: "fa-solid fa-earth-americas",
    color: "text-purple-400",
    pesoElectoral: 0.08, // 8% de peso indirecto (inversión extranjera y riesgo país)
    descripcion: "Fondo Monetario Internacional (FMI), inversores extranjeros, acreedores de bonos y embajadas de grandes potencias.",
    prioridades: "Déficit fiscal cero, pago puntual de compromisos de deuda externa, clima favorable a inversiones y libre repatriación de dividendos.",
    aprobacionInicial: 50
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SECTORES_ARG };
}
