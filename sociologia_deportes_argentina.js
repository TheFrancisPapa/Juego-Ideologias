// sociologia_deportes_argentina.js - Mapeo sociológico e ideológico de clubes y disciplinas en Argentina

const SOCIOLOGIA_DEPORTES = {
  // 1. LOS CLUBES DE FÚTBOL Y SU IDENTIDAD SOCIOCULTURAL
  clubes: {
    boca_juniors: {
      nombre: "Boca Juniors",
      idiosincrasia: "Popular, plebeyo y transversal",
      origenSocial: "Inmigración genovesa, obreros portuarios de La Boca y masividad popular federal en todo el país.",
      posturaModelo: "Tradicionalmente reacio a convertirse en SAD privada por mandato de sus asambleas y socios, aunque históricamente disputado por sectores dirigenciales de centro-derecha y peronistas populares.",
      ejesAlineacion: { economia: "Social / Club de Socios", poder: "Popular Masivo", estructura: "Transversal Federal" }
    },
    river_plate: {
      nombre: "River Plate",
      idiosincrasia: "Institucional, modernizador y de clase media/alta ('Millonarios')",
      origenSocial: "Nacido en La Boca pero consolidado en Núñez. Histórica asociación con la burguesía urbana, el Instituto River Plate, la universidad interna y un modelo corporativo de alta gama.",
      posturaModelo: "Modelo de club social con fuerte impronta de gestión ejecutiva moderna y profesionalización de ingresos, pero celoso de la propiedad de los socios.",
      ejesAlineacion: { economia: "Gestión Corporativa / Club Social", poder: "Institucional", estructura: "Urbano Central" }
    },
    independiente: {
      nombre: "Independiente",
      idiosincrasia: "Obrero industrial, orgullo histórico ('Paladar Negro')",
      origenSocial: "Avellaneda industrial, vinculado históricamente a los trabajadores fabriles, sindicatos del transporte y una dirigencia muy ligada al poder político bonaerense.",
      posturaModelo: "Férrea defensa de la asociación civil comunitaria, pese a graves crisis de endeudamiento que reabren debates de financiamiento.",
      ejesAlineacion: { economia: "Tradición Sindical / Comunitaria", poder: "Gremial / Obrero", estructura: "Conurbano Bonaerense" }
    },
    racing_club: {
      nombre: "Racing Club",
      idiosincrasia: "Resistencia popular, lealtad y reconstrucción",
      origenSocial: "Avellaneda obrera y clase media fiel. Marcado por la quiebra de 1999, el gerenciamiento de Blanquiceleste S.A. y la posterior recuperación del club por parte de los socios.",
      posturaModelo: "Símbolo vivo de la advertencia contra las quiebras de gerenciamientos privados y el valor de la recuperación democrática por los hinchas.",
      ejesAlineacion: { economia: "Recuperación Societaria Antigerenciamiento", poder: "Democracia de Socios", estructura: "Federal" }
    },
    san_lorenzo: {
      nombre: "San Lorenzo de Almagro",
      idiosincrasia: "Identidad barrial boedense, club polideportivo y causa comunitaria",
      origenSocial: "Barrio de Boedo, fuerte impronta de los curas salesianos (Padre Lorenzo Massa), contención barrial juvenil masiva y la gesta popular por la 'Vuelta a Boedo' frente a la dictadura militar.",
      posturaModelo: "Enérgica defensa del club como trinchera social comunitaria con básquetbol, natación y compromiso vecinal.",
      ejesAlineacion: { economia: "Comunitario / Social", poder: "Resistencia Barrial", estructura: "Barrial Urbano" }
    },
    ferro_carril_oeste: {
      nombre: "Ferro Carril Oeste",
      idiosincrasia: "El modelo del club social polideportivo total (Caballito)",
      origenSocial: "Trabajadores ferroviarios ingleses y criollos, símbolo de la clase media porteña. Premiado en los '80 por la UNESCO como modelo mundial de club para la comunidad.",
      posturaModelo: "Máximo estandarte de la función social del deporte: decenas de disciplinas (básquet, vóley, atletismo, pelota paleta) donde el fútbol es sólo una actividad más.",
      ejesAlineacion: { economia: "Club Polideportivo Puro", poder: "Educación y Comunidad", estructura: "Clase Media" }
    },
    talleres_cordoba: {
      nombre: "Talleres de Córdoba",
      idiosincrasia: "Pionero del modelo de gestión empresarial y apertura al capital",
      origenSocial: "Gran masa de hinchas cordobeses de barrio Jardín. Tras su quiebra, fue reestructurado con un esquema gerencial profesionalizado de inversión privada exitoso deportivamente.",
      posturaModelo: "La institución más cercana al modelo pro-SAD o capitales mixtos del fútbol argentino.",
      ejesAlineacion: { economia: "Gestión Privada / Capitales Mixtos", poder: "Empresarial Eficiente", estructura: "Interior / Córdoba" }
    },
    belgrano_cordoba: {
      nombre: "Belgrano de Córdoba",
      idiosincrasia: "Rebeldía popular, asambleísmo y barrio Alberdi",
      origenSocial: "Barrio Alberdi, históricamente ligado al Cordobazo de 1969, estudiantes universitarios y sectores obreros automotrices.",
      posturaModelo: "Totalmente opuesto a las SAD: asambleísmo activo, control estricto de los socios y profundo arraigo social e identitario cordobés.",
      ejesAlineacion: { economia: "Social / Asambleario Popular", poder: "Rebeldía Popular", estructura: "Interior / Córdoba" }
    },
    colon_y_union: {
      nombre: "Colón y Unión de Santa Fe",
      idiosincrasia: "Identidad ribereña, arraigo popular y polarización santafesina",
      origenSocial: "El Litoral argentino, representatividad obrera y de clase media en una provincia con gran historia productiva y agropecuaria.",
      posturaModelo: "Clubes que nuclean a miles de familias con sedes polideportivas y colegios propios.",
      ejesAlineacion: { economia: "Asociación Civil Provincial", poder: "Identidad Provincial", estructura: "Santa Fe / Litoral" }
    },
    chaco_for_ever: {
      nombre: "Chaco For Ever",
      idiosincrasia: "El gigante del Nordeste y la trinchera del fútbol federal",
      origenSocial: "Resistencia, Chaco. Expresión del federalismo postergado que compite contra el centralismo porteño con escasos recursos.",
      posturaModelo: "Reclama financiamiento federal y distribución equitativa de derechos televisivos para no desaparecer frente al AMBA.",
      ejesAlineacion: { economia: "Federalismo / Subsidio al Interior", poder: "Resistencia Regional", estructura: "Nordeste Argentino" }
    }
  },

  // 2. DISCIPLINAS DEPORTIVAS Y SU SIGNIFICADO SOCIAL
  disciplinas: {
    basquetbol: {
      nombre: "Básquetbol (CABB / Liga Nacional / Liga Federal)",
      entidades: "Confederación Argentina de Basquetbol (CABB), Liga Nacional (AdC) y Liga Federal de Básquet.",
      rolSocial: "Deporte de arraigo federal inmenso en el interior (Bahía Blanca, Córdoba, Corrientes, Santiago del Estero, Entre Ríos).",
      ideario: "La 'Generación Dorada' encarna el ideal republicano de trabajo en equipo, meritocracia sin divismos, método formativo riguroso y clubes de barrio con canchas de parqué abiertas a la comunidad.",
      tensionPolitica: "Financiamiento de viajes kilométricos en la Liga Federal vs. falta de apoyo estatal a infraestructuras en provincias."
    },
    hockey_sobre_cesped: {
      nombre: "Hockey sobre Césped (CAH / Asociación de Buenos Aires)",
      entidades: "Confederación Argentina de Hockey (CAH) y Asociación de Hockey de Buenos Aires (AHBA).",
      rolSocial: "El fenómeno de 'Las Leonas' y 'Los Leones' transformó un deporte históricamente asociado a colegios privados y clubes de élite en una disciplina masiva femenina en todo el país.",
      ideario: "Mística de entrega, disciplina y superación. Fuerte debate sobre la construcción de canchas sintéticas municipales para democratizar el acceso en barrios vulnerables frente al costo del equipamiento importado.",
      tensionPolitica: "Democratización e inclusión en polideportivos estatales vs. aranceles altos en clubes tradicionales."
    },
    tenis: {
      nombre: "Tenis (AAT - Asociación Argentina de Tenis)",
      entidades: "Asociación Argentina de Tenis (AAT) y clubes de polvo de ladrillo tradicionales.",
      rolSocial: "Deporte con épica nacional (Copa Davis, Legión Argentina, Vilas, Sabatini) pero con barreras económicas de acceso (raquetas importadas, encordados, viajes internacionales en dólares).",
      ideario: "Cultura del esfuerzo individual, resiliencia mental y mecenazgo.",
      tensionPolitica: "Incentivo fiscal para que empresas sponsoreen a juveniles vs. creación de centros de alto rendimiento públicos gratuitos."
    },
    automovilismo: {
      nombre: "Automovilismo (ACTC, Turismo Carretera, TC2000, Turismo Nacional, Rally)",
      entidades: "Asociación Corredores Turismo Carretera (ACTC), TC, TC2000, Turismo Nacional (TN) y Rally Argentino.",
      rolSocial: "El segundo deporte más popular del país, de matriz 100% federal y fierrera. Pasión de talleres mecánicos de pueblo, chacras y zonas industriales (la mítica rivalidad Ford vs. Chevrolet).",
      ideario: "Cultura del trabajo manual, mecánica artesanal del interior productivo, camaradería de asado y carpa en los autódromos.",
      tensionPolitica: "Subsidios provinciales para llevar fechas del TC a autódromos del interior como motor turístico y comercial."
    },
    polo: {
      nombre: "Polo (Asociación Argentina de Polo - AAP)",
      entidades: "Asociación Argentina de Polo (AAP) y la Triple Corona (Abierto de Palermo, Hurlingham, Tortugas).",
      rolSocial: "Marca país de excelencia mundial absoluta. Argentina exporta caballos de polo, petiseros y los mejores polistas del planeta.",
      ideario: "Tradición ecuestre de campo, cría de caballos, lazos con la Sociedad Rural y la aristocracia agroganadera argentina.",
      tensionPolitica: "Símbolo de prestigio y divisas por exportación vs. críticas de sectores populares por considerarlo elitista."
    }
  }
};

// Exportación modular para Node.js y navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SOCIOLOGIA_DEPORTES };
}

if (typeof window !== 'undefined') {
  window.SOCIOLOGIA_DEPORTES = SOCIOLOGIA_DEPORTES;
}
