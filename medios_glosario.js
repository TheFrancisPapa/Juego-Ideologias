// medios_glosario.js - Términos del ecosistema de televisión y streaming argentino para el glosario interactivo

const GLOSARIO_MEDIOS = {
  // CANALES DE AIRE Y NOTICIAS TRADICIONALES
  "c5n": {
    titulo: "C5N (Canal 5 Noticias)",
    def: "Señal de noticias con editorial popular y progresista, centrada en el impacto social, la defensa de los jubilados, el empleo y las críticas al libre mercado."
  },
  "tn": {
    titulo: "TN (Todo Noticias - Grupo Clarín)",
    def: "Señal de noticias líder en cable, con enfoque en la actualidad urbana, la inflación, las investigaciones judiciales y la cobertura en vivo del tránsito y protestas."
  },
  "ln+": {
    titulo: "LN+ (La Nación Más)",
    def: "Canal de noticias de orientación liberal conservadora, enfocado en el análisis económico de libre mercado, la crítica al gasto público y la mano dura en seguridad."
  },
  "crónica tv": {
    titulo: "Crónica TV",
    def: "Canal icónico por sus placas rojas estridentes y su mirada popular, con móvil permanente en las calles, carnicerías y reclamos de las clases trabajadoras."
  },
  "américa tv": {
    titulo: "América TV / A24",
    def: "Emblema del panelismo político picante y las primicias de último momento, con mesas de debate calientes entre posturas enfrentadas."
  },
  "televisión pública": {
    titulo: "Televisión Pública (Canal 7)",
    def: "Canal estatal abierto de alcance federal, histórico polo de producción cultural y deportiva nacional, eje de permanentes debates sobre pauta y privatización."
  },
  "telefe": {
    titulo: "Telefe (Televisión Federal)",
    def: "El canal de aire líder indiscutido en audiencia, con perfil comercial, entretenimiento familiar y noticieros de gran despliegue."
  },
  "el trece": {
    titulo: "El Trece (Canal 13 - Grupo Clarín)",
    def: "Canal de aire histórico con magazines, ficciones y programas de investigación periodística de alto impacto."
  },
  "el nueve": {
    titulo: "El Nueve (Canal 9)",
    def: "Canal de aire tradicional de perfil popular y cercano a los barrios, enfocado en servicios, jubilados y problemáticas vecinales del AMBA."
  },

  // CANALES DE STREAMING (EL NUEVO FENÓMENO DIGITAL)
  "olga": {
    titulo: "Olga Stream (Migue Granados / 'Soñé que Volaba')",
    def: "Canal de streaming con masiva audiencia joven y de clase media, caracterizado por el humor descontracturado, la música en vivo y la empatía social comunitaria."
  },
  "luzu tv": {
    titulo: "Luzu TV (Nico Occhiato / 'Nadie Dice Nada')",
    def: "Pionero del streaming diario en Argentina, enfocado en las vivencias cotidianas de los jóvenes, el alquiler, los vínculos y las aspiraciones de independencia económica."
  },
  "blender": {
    titulo: "Blender ('Hay Algo Ahí' / Tomás Rebord)",
    def: "Canal de streaming reconocido por el debate político picante, las entrevistas filosóficas a fondo con dirigentes de todos los espacios y el análisis crudo del poder."
  },
  "vorterix": {
    titulo: "Vorterix (Mario Pergolini)",
    def: "Medio pionero en combinar radio, rock y streaming digital, con foco en la inteligencia artificial, la tecnología y la transformación de la industria del entretenimiento."
  },
  "azz": {
    titulo: "AZZ Stream (Flavio Azzaro)",
    def: "Streaming deportivo y de medios sin filtro, bandera de la resistencia de los hinchas frente a las SAD y crítica descarnada a las corporaciones televisivas tradicionales."
  },
  "carajo": {
    titulo: "Carajo Stream / La Misa",
    def: "Canal de streaming de trinchera libertaria digital, centrado en la batalla cultural contra el estatismo, la burla a la vieja política y la celebración de la desregulación."
  },
  "pauta oficial": {
    titulo: "Pauta Oficial Publicitaria",
    def: "Fondos públicos que el Estado destina a contratar espacios publicitarios en medios de comunicación para difundir actos de gobierno, históricamente disputada por su uso como herramienta de presión política."
  }
};

// Fusionar con el glosario general
if (typeof GLOSARIO !== 'undefined') {
  Object.assign(GLOSARIO, GLOSARIO_MEDIOS);
}

if (typeof window !== 'undefined') {
  window.GLOSARIO_MEDIOS = GLOSARIO_MEDIOS;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GLOSARIO_MEDIOS };
}
