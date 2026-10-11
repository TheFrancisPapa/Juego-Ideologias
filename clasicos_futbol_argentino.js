// clasicos_futbol_argentino.js - Radiografía sociopolítica, nivel de picantismo e historial de los 10 Grandes Clásicos

const CLASICOS_ARGENTINOS = [
  {
    id: "superclasico",
    nombre: "Superclásico del Fútbol Argentino",
    rivales: "Boca Juniors vs. River Plate",
    ciudad: "Buenos Aires",
    nivelPicantismo: "EXTREMO (10/10)",
    termometroSocial: "Paraliza al país entero. Enfrenta dos concepciones culturales: el pueblo xeneize plebeyo y federal vs. la escuela institucional y modernizadora millonaria.",
    antecedentesCriticos: "La final de Madrid 2018 con la pedrada al micro en Núñez, el episodio del gas pimienta en la Bombonera (2015), operativos de 1.500 policías y zonas liberadas.",
    riesgoDisturbio: "Zonas de La Boca, Barracas, Belgrano y Núñez en alerta máxima; cruces en transporte público y estaciones de tren.",
    titularesMedios: {
      cronica: "¡SE PUDRIÓ TODO EN EL SUPERCLÁSICO! GAS PIMIENTA, HERIDOS Y PIÑAS EN LA TRIBUNA",
      c5n: "Fuerte operativo de seguridad desbordado: denuncian abusos policiales y zonas liberadas",
      ln_mas: "El costo de la barbarie: exigen derecho de admisión estricto y privatización de la seguridad en estadios",
      azz: "¡Azzaro al palo! 'La policía le cuidó el negocio a los barras y los socios quedaron en el medio'"
    }
  },
  {
    id: "avellaneda",
    nombre: "Clásico de Avellaneda",
    rivales: "Independiente vs. Racing Club",
    ciudad: "Avellaneda (Buenos Aires)",
    nivelPicantismo: "ALTO (9.5/10)",
    termometroSocial: "Separados por solo 300 metros entre estadios. Avellaneda obrera e industrial dividida entre el orgullo copero del 'Rojo' y la épica de lealtad de la 'Academia'.",
    antecedentesCriticos: "Enfrentamientos en el Puente Pueyrredón, emboscadas en estaciones del ferrocarril Roca y tiroteos por control de estacionamientos ilegales.",
    riesgoDisturbio: "Cortes en accesos a Capital Federal, choque de facciones de barras bravas y quema de neumáticos en las inmediaciones del Viaducto."
  },
  {
    id: "rosarino",
    nombre: "Clásico Rosarino",
    rivales: "Rosario Central vs. Newell's Old Boys",
    ciudad: "Rosario (Santa Fe)",
    nivelPicantismo: "PELIGRO MÁXIMO / VOLCÁNICO (10/10)",
    termometroSocial: "El clásico más pasional y violento de la Argentina cotidiana. Rosario vive en vilo durante semanas; no hay lugar para empates morales.",
    antecedentesCriticos: "Balaceras a frentes de clubes, amenazas de muerte con banderas en tribunas, vínculos con bandas narcocriminales locales (Los Monos) e incidentes en el Monumento a la Bandera.",
    riesgoDisturbio: "Baleo de locales comerciales, ataques cruzados de motos y riesgo de conmoción civil que suele requerir refuerzo de Gendarmería Nacional."
  },
  {
    id: "platense",
    nombre: "Clásico Platense",
    rivales: "Estudiantes de La Plata vs. Gimnasia y Esgrima La Plata",
    ciudad: "La Plata (Buenos Aires)",
    nivelPicantismo: "MUY ALTO (9/10)",
    termometroSocial: "División total de la capital provincial: el modelo bilardista del esfuerzo, títulos y orden de Estudiantes vs. la mística sufrida y popular del 'Lobo' tripero en el Bosque.",
    antecedentesCriticos: "La trágica represión policial con gases lacrimógenos en el Bosque (octubre 2022, durante un Gimnasia vs. Boca) donde falleció el hincha César 'Lolo' Regueiro, marcó a fuego la seguridad platense; choques históricos en Plaza Moreno.",
    riesgoDisturbio: "Cortes de avenidas principales platenses y asedio a comisarías locales."
  },
  {
    id: "porteno_barrio",
    nombre: "Clásico Porteño / de Barrio",
    rivales: "San Lorenzo vs. Huracán",
    ciudad: "Buenos Aires (Boedo vs. Parque Patricios)",
    nivelPicantismo: "ALTO (8.5/10)",
    termometroSocial: "Paternidad histórica y folclore porteño entre dos identidades barriales contiguas de gran tradición tanguera y social.",
    antecedentesCriticos: "Cruces en la Avenida Caseros y Chiclana, tiroteos históricos entre barras en los años '90 y 2000, batallas campales en hospitales zonales.",
    riesgoDisturbio: "Enfrentamientos en las líneas de subte E y H, y desmanes en locales gastronómicos de Boedo y Pompeya."
  },
  {
    id: "cordobes",
    nombre: "Clásico Cordobés",
    rivales: "Talleres vs. Belgrano",
    ciudad: "Córdoba Capital",
    nivelPicantismo: "ALTO (9/10)",
    termometroSocial: "La Docta partida en dos: el modelo de gestión gerencial y proyección moderna de Talleres vs. la rebeldía del barrio Alberdi y la asamblea de Belgrano.",
    antecedentesCriticos: "El trágico caso de Emanuel Balbo en la tribuna del Mario Alberto Kempes (2017), choques en la Circunvalación cordobesa.",
    riesgoDisturbio: "Desmanes en las salidas del Estadio Kempes, batallas en paradas de colectivos urbanos cordobeses."
  },
  {
    id: "santafesino",
    nombre: "Clásico Santafesino",
    rivales: "Colón vs. Unión",
    ciudad: "Santa Fe Capital",
    nivelPicantismo: "MUY ALTO (9/10)",
    termometroSocial: "La capital de Santa Fe se paraliza. El 'Sabalero' del sur costero popular vs. el 'Tatengue' del centro comercial de Avenida López y Planes.",
    antecedentesCriticos: "Apedreamiento de micros de planteles, tiroteos en los barrios Centenario y Barranquitas, suspensiones por falta de garantías de la policía provincial.",
    riesgoDisturbio: "Cortes en el Puente Colgante y choques en la costanera santafesina."
  },
  {
    id: "sur",
    nombre: "Clásico del Sur",
    rivales: "Banfield vs. Lanús",
    ciudad: "Gran Buenos Aires Sur",
    nivelPicantismo: "MODERADO A ALTO (8/10)",
    termometroSocial: "Dos clubes modelo en infraestructura y formación: el 'Taladro' de Peña y Arenales vs. el 'Granate' de Guidi y Arias, con enorme crecimiento institucional.",
    antecedentesCriticos: "Cruces en la estación de trenes de Temperley y Remedios de Escalada, internas de barras por el negocio de la reventa.",
    riesgoDisturbio: "Peleas callejeras en el límite de los municipios de Lanús y Lomas de Zamora."
  },
  {
    id: "oeste",
    nombre: "Clásico del Oeste",
    rivales: "Ferro Carril Oeste vs. Vélez Sarsfield",
    ciudad: "Buenos Aires / Liniers vs. Caballito",
    nivelPicantismo: "HISTÓRICO Y PICANTE (8/10)",
    termometroSocial: "Clásico tradicional porteño de la traza del Ferrocarril Sarmiento: la escuela polideportiva de Caballito vs. la fortaleza institucional de Liniers.",
    antecedentesCriticos: "Históricas batallas en vagones del tren Sarmiento, banderas robadas y rivalidad encarnizada de décadas.",
    riesgoDisturbio: "Tensión en las vías del tren Sarmiento y en las estaciones Caballito, Flores y Liniers."
  },
  {
    id: "cuyo",
    nombre: "Clásico de Cuyo",
    rivales: "Godoy Cruz vs. Independiente Rivadavia",
    ciudad: "Mendoza",
    nivelPicantismo: "ALTO (8.5/10)",
    termometroSocial: "La provincia cuyana dividida: el 'Tomba' bodeguero consolidado en Primera y torneos continentales vs. la 'Lepra' del Parque San Martín, de histórica convocatoria popular y vínculos con empresarios de medios (Daniel Vila).",
    antecedentesCriticos: "Suspensiones de partidos por incidentes en el Estadio Malvinas Argentinas, disputas por el control del negocio de estacionamientos y trapitos en el Parque General San Martín e internas feroces de barras bravas.",
    riesgoDisturbio: "Daños en el Parque San Martín de Mendoza y cortes en el Corredor del Oeste."
  },

  // --- CLÁSICOS HISTÓRICOS DE LA PRIMERA NACIONAL (EL ASCENSO MÁS PICANTE) ---
  {
    id: "superclasico_ascenso",
    nombre: "El Superclásico del Ascenso",
    rivales: "All Boys vs. Nueva Chicago",
    ciudad: "Buenos Aires (Floresta vs. Mataderos)",
    nivelPicantismo: "PELIGRO EXTREMO (10/10)",
    termometroSocial: "La rivalidad barrial más sangrienta del ascenso porteño. Separados por pocas cuadras de la Avenida Rivadavia y Alberdi: la identidad obrera y de mataderos del 'Torito' frente a la tradición de Floresta del 'Albo'.",
    antecedentesCriticos: "Históricas batallas en la Avenida General Paz, emboscadas sobre la autopista Perito Moreno, decenas de heridos e imposibilidad de jugar con público visitante desde hace décadas.",
    riesgoDisturbio: "Zonas de Mataderos, Liniers y Floresta completamente valladas; cortes en accesos de la General Paz."
  },
  {
    id: "clasico_oeste_conurbano",
    nombre: "Clásico del Oeste del Conurbano",
    rivales: "Almirante Brown vs. Deportivo Morón",
    ciudad: "La Matanza vs. Morón (GBA Oeste)",
    nivelPicantismo: "VOLCÁNICO (9.5/10)",
    termometroSocial: "Separados por apenas 6 kilómetros. Enfrenta al gigante matancero de Isidro Casanova (la 'Fragata') contra el 'Gallo' de Morón, dos de las hinchadas más pesadas y populosas del conurbano profundo.",
    antecedentesCriticos: "Graves enfrentamientos armados en cruces de la Ruta 4 (Camino de Cintura) y vías del Ferrocarril Belgrano Sur, con heridos de bala e intervención de tropas de infantería bonaerense.",
    riesgoDisturbio: "Batallas campales en el límite de los partidos de Morón y La Matanza, paralización del transporte de colectivos locales."
  },
  {
    id: "villa_crespo_san_martin",
    nombre: "Clásico de Villa Crespo / San Martín",
    rivales: "Atlanta vs. Chacarita Juniors",
    ciudad: "Villa Crespo / San Martín (GBA Norte)",
    nivelPicantismo: "EXTREMO Y ANCESTRAL (9.5/10)",
    termometroSocial: "Rivalidad centenaria nacida en el barrio de Villa Crespo (cuando las canchas estaban a solo 100 metros) y trasladada a San Martín con el 'Funebrero'. Cruce de identidades barriales y alta temperatura política.",
    antecedentesCriticos: "Históricos destrozos en la calle Humboldt, combates en las estaciones del tren San Martín y agresiones con piedras a las delegaciones en la Avenida Corrientes.",
    riesgoDisturbio: "Alerta máxima en las avenidas Corrientes, Juan B. Justo y General Paz."
  },
  {
    id: "clasico_lomas",
    nombre: "Clásico de Lomas de Zamora",
    rivales: "Los Andes vs. Temperley",
    ciudad: "Lomas de Zamora / Turdera (GBA Sur)",
    nivelPicantismo: "MUY ALTO (9/10)",
    termometroSocial: "Casi 90 años de odio deportivo y vecinal por el dominio del partido de Lomas de Zamora. El 'Milrayitas' de la Avenida Santa Fe frente al 'Gasolero' de Turdera.",
    antecedentesCriticos: "Enfrentamientos en la Avenida Hipólito Yrigoyen (Pavón), tiroteos en puentes ferroviarios del ramal Roca e invasiones de campo históricas.",
    riesgoDisturbio: "Cortes de la traza ferroviaria del Ferrocarril Roca y tensión en el centro comercial de Lomas de Zamora."
  },
  {
    id: "clasico_santiagueno",
    nombre: "Clásico Santiagueño",
    rivales: "Mitre vs. Güemes",
    ciudad: "Santiago del Estero Capital",
    nivelPicantismo: "MUY ALTO (9/10)",
    termometroSocial: "El derbi más taquillero y pasional de la provincia madre de ciudades. Divide a familias enteras entre el barrio 8 de Abril ('Aurinegro') y el barrio Oeste ('Gaucho').",
    antecedentesCriticos: "Batallas campales en el Parque Aguirre, emboscadas en avenidas céntricas santiagueñas y operativos de emergencia de la policía provincial.",
    riesgoDisturbio: "Quema de neumáticos en puentes y desmanes en el centro de la capital santiagueña."
  },
  {
    id: "clasico_salteno",
    nombre: "Clásico Salteño",
    rivales: "Gimnasia y Tiro vs. Central Norte",
    ciudad: "Salta Capital",
    nivelPicantismo: "VOLCÁNICO (9.5/10)",
    termometroSocial: "La rivalidad más caliente y masiva del Norte argentino: el 'Albo' tradicional de la clase media salteña en el Monumental de la Virrey Toledo frente al 'Cuervo' azabache de masivo arraigo popular.",
    antecedentesCriticos: "Internas feroces de las facciones de barras de Central Norte que chocan en avenidas de acceso, heridos en la terminal de ómnibus y partidos suspendidos en el Estadio Padre Martearena.",
    riesgoDisturbio: "Choques armados entre facciones barriales en la capital salteña."
  },
  {
    id: "clasico_mendocino_nacional",
    nombre: "Clásico Mendocino del Ascenso",
    rivales: "Deportivo Maipú vs. Gimnasia y Esgrima de Mendoza",
    ciudad: "Gran Mendoza / Maipú",
    nivelPicantismo: "ALTO (8.5/10)",
    termometroSocial: "El 'Cruzado' maipucino del corazón vitivinícola frente al 'Lobo' del Parque General San Martín en el Víctor Legrotaglie. Cruce caliente por el boleto a la Primera División.",
    antecedentesCriticos: "Peleas en paradas de colectivos interurbanos, pedradas a micros de hinchas en el Acceso Este y tensión en el Parque San Martín.",
    riesgoDisturbio: "Cortes en el Acceso Este mendocino y choques en zonas residenciales."
  },
  {
    id: "clasico_tucumano",
    nombre: "Clásico Tucumano",
    rivales: "San Martín vs. Atlético Tucumán",
    ciudad: "San Miguel de Tucumán",
    nivelPicantismo: "EXTREMO (9.5/10)",
    termometroSocial: "La Ciudadela vs. 25 de Mayo y Chile. El Santo popular, caliente y barrial frente al Decano histórico con peso institucional en AFA. Refleja las internas del peronismo tucumano con financiamiento cruzado.",
    antecedentesCriticos: "Enfrentamientos en las avenidas Mate de Luna y Sarmiento, tiroteos entre facciones de La Inimitable y La Brava, y micros fletados por comunas del interior.",
    riesgoDisturbio: "Cortes de accesos a la capital tucumana y balaceras en barrios periféricos."
  },
  {
    id: "triangular_salta",
    nombre: "El Triangular de la Furia Salteña",
    rivales: "Central Norte vs. Juventud Antoniana vs. Gimnasia y Tiro",
    ciudad: "Salta Capital",
    nivelPicantismo: "VOLCÁNICO (10/10)",
    termometroSocial: "Guerra a tres bandas en el Estadio Padre Ernesto Martearena. Pasión descarnada en el Federal A y el ascenso: el 'Cuervo' azabache, el 'Santo' antoniano y el 'Albo' millonario se disputan el dominio absoluto de la provincia.",
    antecedentesCriticos: "Enfrentamientos constantes de barras sobre las Rutas Nacionales 9 y 34, cortes de rutas provinciales, batallas campales en la rotonda de Limache y heridos de arma blanca tras cada clásico.",
    riesgoDisturbio: "Parálisis del transporte interurbano y bloqueos de puentes en la capital salteña."
  }
];

const OTROS_DEPORTES_ARGENTINOS = {
  automovilismo_tc: {
    id: "automovilismo_tc",
    deporte: "Automovilismo (Turismo Carretera)",
    grieta: "Ford vs. Chevrolet (El Óvalo vs. El Chivo)",
    folclore: "La pasión más federal de la Argentina: campamentos de 4 días con carpas, asados con leña y cumbia en las banquinas de Rafaela, Toay y San Nicolás. Cero tolerancia a autos eléctricos o híbridos.",
    quilomboGobierno: "Si YPF retira los subsidios y patrocinios a la categoría por ajuste fiscal, intendentes del interior y miles de fanáticos cortan las rutas nacionales con camionetas."
  },
  rugby_san_isidro: {
    id: "rugby_san_isidro",
    deporte: "Rugby (Clásico de San Isidro)",
    grieta: "CASI vs. SIC (La Academia vs. La Zanja)",
    folclore: "La aristocracia deportiva de la Zona Norte: colegios tradicionales, terceros tiempos y linaje familiar. Purismo del amateurismo URBA vs. franquicias profesionales de la UAR.",
    quilomboGobierno: "Si el Estado audita exenciones impositivas o titularidad de terrenos fiscales costeros en la ribera de San Isidro, la clase alta y medios tradicionales denuncian un ataque chavista a los clubes formadores."
  },
  basquet_liga_nacional: {
    id: "basquet_liga_nacional",
    deporte: "Básquetbol (Liga Nacional)",
    grieta: "Atenas de Córdoba vs. Peñarol de Mar del Plata / Ferro",
    folclore: "La cuna dorada de la Generación Dorada: estadios calientes del interior (Cerutti en Córdoba, Casanova en Bahía Blanca).",
    quilomboGobierno: "Crisis terminal de clubes fundidos por tarifas de luz y contratos en dólares. ¿Salvatáje con transmisión gratuita en la TV Pública o quiebra de plazas históricas del interior?"
  },
  boxeo_luna_park: {
    id: "boxeo_luna_park",
    deporte: "Boxeo Tradicional vs. Noches de Streamers",
    grieta: "FAB y Luna Park vs. Veladas de Influencers (Párense de Manos)",
    folclore: "El deporte histórico de la movilidad social ascendente: el gimnasio de chapa del conurbano donde un pibe sale de la esquina para pelear por un título.",
    quilomboGobierno: "El choque de recursos y marquesinas: veladas de streaming que llenan estadios con influencers millonarios frente a festivales profesionales tradicionales que subsisten vendiendo rifas de empanadas."
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CLASICOS_ARGENTINOS, OTROS_DEPORTES_ARGENTINOS };
}
