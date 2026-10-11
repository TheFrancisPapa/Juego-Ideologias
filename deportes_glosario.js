// deportes_glosario.js - Términos del deporte, ligas y clubes argentinos para el glosario interactivo

const GLOSARIO_DEPORTES = {
  // LIGAS Y CATEGORÍAS
  "liga profesional": {
    titulo: "Liga Profesional de Fútbol (Primera División)",
    def: "La máxima categoría del fútbol argentino, compuesta por clubes históricos con alcance masivo y competencias continentales."
  },
  "primera nacional": {
    titulo: "Primera Nacional (Segunda División)",
    def: "El torneo más federal y extenso del país, donde compiten equipos históricos del interior y del AMBA por el ansiado ascenso a Primera."
  },
  "torneo federal a": {
    titulo: "Torneo Federal A (Tercera División del Interior)",
    def: "Competencia que nuclea a los clubes de las provincias argentinas, vital para el desarrollo deportivo y la identidad regional."
  },
  "primera b metropolitana": {
    titulo: "Primera B Metropolitana",
    def: "Histórica categoría de ascenso para clubes tradicionales de la Ciudad de Buenos Aires y el Conurbano bonaerense."
  },

  // TORNEOS NACIONALES E INTERNACIONALES
  "copa libertadores": {
    titulo: "Copa Libertadores de América",
    def: "El torneo de clubes más prestigioso de América del Sur, organizado por la CONMEBOL, con enorme impacto económico, turístico y de seguridad pública."
  },
  "copa sudamericana": {
    titulo: "Copa Sudamericana",
    def: "El segundo certamen internacional más relevante del continente, trampolín económico y deportivo para los clubes clasificados."
  },
  "champions league": {
    titulo: "UEFA Champions League",
    def: "El torneo de clubes más rico del mundo en Europa, modelo de ingresos multimillonarios por derechos de televisión y marcas globales."
  },
  "mundial de clubes": {
    titulo: "Mundial de Clubes de la FIFA",
    def: "Torneo global que enfrenta a los campeones continentales, con premios millonarios en dólares para los participantes."
  },

  // CLUBES DE PRIMERA DIVISIÓN (MENCIONADOS)
  "river plate": {
    titulo: "Club Atlético River Plate",
    def: "Uno de los clubes más convocantes de Argentina, con el Estadio Monumental como sede de la Selección y múltiples títulos de Copa Libertadores."
  },
  "boca juniors": {
    titulo: "Club Atlético Boca Juniors",
    def: "Institución histórica con arraigo popular masivo en todo el país y seis títulos de Copa Libertadores, con fuerte peso político interno."
  },
  "independiente": {
    titulo: "Club Atlético Independiente",
    def: "El 'Rey de Copas' de Avellaneda, máximo ganador histórico de la Copa Libertadores (7 títulos), ejemplo de intensas pujas dirigenciales y societarias."
  },
  "racing club": {
    titulo: "Racing Club de Avellaneda",
    def: "Uno de los cinco grandes del fútbol argentino, con enorme masa societaria y primer campeón mundial argentino de clubes en 1967."
  },
  "san lorenzo": {
    titulo: "Club Atlético San Lorenzo de Almagro",
    def: "Institución centenaria con fuerte identidad barrial en Boedo y destacada contención social en deportes como básquet, vóley y natación."
  },
  "rosario central": {
    titulo: "Club Atlético Rosario Central",
    def: "Gigante del interior en la provincia de Santa Fe con una de las hinchadas más pasionales y activas del país."
  },
  "newell's old boys": {
    titulo: "Club Atlético Newell's Old Boys",
    def: "Institución rosarina cuna de grandes figuras del fútbol mundial y formadora de talento juvenil de exportación."
  },
  "talleres de córdoba": {
    titulo: "Club Atlético Talleres de Córdoba",
    def: "Club cordobés pionero en modelos de gestión empresarial mixta con gran infraestructura e inversión privada."
  },
  "belgrano de córdoba": {
    titulo: "Club Atlético Belgrano de Córdoba",
    def: "Institución cordobesa de profundo arraigo popular en el barrio Alberdi y modelo societario participativo."
  },

  // CLUBES DEL ASCENSO (PRIMERA NACIONAL Y FEDERAL)
  "ferro carril oeste": {
    titulo: "Club Ferro Carril Oeste",
    def: "Club emblemático de Caballito, modelo histórico del club social polideportivo (básquet, vóley, atletismo) premiado por la UNESCO en los años '80."
  },
  "chaco for ever": {
    titulo: "Club Atlético Chaco For Ever",
    def: "Histórica institución de Resistencia, Chaco, símbolo del fútbol del Nordeste argentino en la Primera Nacional."
  },
  "colón de santa fe": {
    titulo: "Club Atlético Colón de Santa Fe",
    def: "Institución tradicional del Litoral con enorme masa de hinchas y presencia constante en el fútbol de Primera y torneos continentales."
  },
  "san martín de tucumán": {
    titulo: "Club Atlético San Martín de Tucumán",
    def: "Uno de los grandes del Norte argentino en la Ciudadela, con fuerte rivalidad e identidad popular."
  },
  "quilmes": {
    titulo: "Quilmes Atlético Club",
    def: "El club decano del fútbol argentino reconocido por su historia y sus disciplinas polideportivas en el sur del conurbano."
  },
  "nueva chicago": {
    titulo: "Club Atlético Nueva Chicago",
    def: "Club tradicional de Mataderos de arraigo obrero y barrial en el ascenso metropolitano."
  },
  "gimnasia y tiro de salta": {
    titulo: "Club Gimnasia y Tiro de Salta",
    def: "Institución señera del Norte argentino en el Torneo Federal A y Primera Nacional, con múltiples ramas deportivas."
  },
  "all boys": {
    titulo: "Club Atlético All Boys",
    def: "Institución centenaria de Floresta, protagonista del Superclásico del Ascenso frente a Chicago y cuna de grandes figuras futboleras."
  },
  "almirante brown": {
    titulo: "Club Almirante Brown (La Matanza)",
    def: "La 'Fragata' de Isidro Casanova, el club más populoso y convocante de La Matanza, protagonista del picante clásico contra Morón."
  },
  "deportivo morón": {
    titulo: "Club Deportivo Morón",
    def: "El 'Gallo' del oeste bonaerense, con enorme masa societaria y tradicional rivalidad contra Almirante Brown."
  },
  "chacarita juniors": {
    titulo: "Club Atlético Chacarita Juniors",
    def: "El 'Funebrero' de San Martín, campeón de Primera en 1969, de inmensa hinchada popular y rival histórico de Atlanta."
  },
  "atlanta": {
    titulo: "Club Atlético Atlanta",
    def: "El 'Bohemio' de Villa Crespo, institución tradicional con rica historia comunitaria y enconada rivalidad con Chacarita."
  },
  "temperley": {
    titulo: "Club Atlético Temperley",
    def: "El 'Gasolero' de Turdera, club de enorme arraigo en el sur del conurbano y protagonista del Clásico de Lomas ante Los Andes."
  },
  "los andes": {
    titulo: "Club Atlético Los Andes",
    def: "El 'Milrayitas' de Lomas de Zamora, tradicional institución con gran convocatoria en el ascenso y escuelas propias."
  },
  "mitre de santiago": {
    titulo: "Club Atlético Mitre (Santiago del Estero)",
    def: "El 'Aurinegro' del barrio 8 de Abril, el club más antiguo y convocante de Santiago del Estero junto a Güemes."
  },
  "güemes de santiago": {
    titulo: "Club Atlético Güemes (Santiago del Estero)",
    def: "El 'Gaucho' de la capital santiagueña, protagonista del derbi más caliente de la provincia frente a Mitre."
  },
  "central norte de salta": {
    titulo: "Club Atlético Central Norte de Salta",
    def: "El 'Cuervo' azabache salteño, club de enorme masa popular en el Norte argentino y clásico rival de Gimnasia y Tiro."
  },
  "deportivo maipú": {
    titulo: "Club Deportivo Maipú de Mendoza",
    def: "El 'Cruzado' maipucino, baluarte del fútbol del interior mendocino y protagonista del ascenso cuyano."
  },
  "gimnasia de mendoza": {
    titulo: "Club Gimnasia y Esgrima de Mendoza",
    def: "El 'Lobo' mendocino del Parque General San Martín, de histórica trayectoria en los viejos Torneos Nacionales y Primera División."
  },

  // ACTORES: DIRIGENTES, JUGADORES Y REGULACIÓN
  "dirigentes deportivos": {
    titulo: "Dirigentes Deportivos / Comisión Directiva",
    def: "Autoridades electas por los socios en asamblea para administrar el patrimonio del club, negociar contratos y gestionar las disciplinas."
  },
  "futbolistas profesionales": {
    titulo: "Futbolistas Profesionales / Plantel",
    def: "Trabajadores representados por el gremio de Futbolistas Argentinos Agremiados, cuyos pases y salarios generan debates fiscales y cambiarios."
  },
  // OTRAS DISCIPLINAS Y ORGANISMOS FEDERATIVOS
  "cabb": {
    titulo: "Confederación Argentina de Basquetbol (CABB)",
    def: "Entidad rectora del básquet nacional, cuna de la 'Generación Dorada' y organizadora de los seleccionados argentinos."
  },
  "liga federal de básquet": {
    titulo: "Liga Federal de Básquetbol",
    def: "El certamen más federal del país que recorre cientos de clubes de barrio y provincias (desde Bahía Blanca hasta el NOA)."
  },
  "cah": {
    titulo: "Confederación Argentina de Hockey (CAH)",
    def: "Órgano madre del hockey sobre césped argentino, responsable de los éxitos internacionales de Las Leonas y Los Leones."
  },
  "asociación de hockey de buenos aires": {
    titulo: "Asociación de Hockey de Buenos Aires (AHBA)",
    def: "La federación regional más grande del país con cientos de clubes tradicionales y divisiones formativas de damas y caballeros."
  },
  "aat": {
    titulo: "Asociación Argentina de Tenis (AAT)",
    def: "Entidad madre del tenis argentino, organizadora de la Copa Davis y del circuito nacional de polvo de ladrillo."
  },
  "copa davis": {
    titulo: "Copa Davis",
    def: "La máxima competencia por naciones del tenis mundial, ganada históricamente por Argentina en 2016."
  },
  "actc": {
    titulo: "Asociación Corredores Turismo Carretera (ACTC)",
    def: "Poderosa entidad rectora del Turismo Carretera y categorías asociadas, emblema del automovilismo federal y fierrero."
  },
  "turismo carretera": {
    titulo: "Turismo Carretera (TC)",
    def: "La categoría automovilística más antigua del mundo en actividad, con la mítica rivalidad Ford vs. Chevrolet en autódromos de todo el país."
  },
  "tc2000": {
    titulo: "TC2000 (Turismo Competición 2000)",
    def: "Categoría de automovilismo de alta tecnología que enfrenta a equipos oficiales de terminales automotrices multinacionales."
  },
  "turismo nacional": {
    titulo: "Turismo Nacional (TN)",
    def: "La categoría más vibrante del automovilismo argentino con autos de calle preparados y paridad absoluta en pista."
  },
  "rally argentino": {
    titulo: "Rally Argentino",
    def: "Competencia de carreras por caminos de tierra, montaña y sierras, con epicentro histórico en Córdoba."
  },
  "asociación argentina de polo": {
    titulo: "Asociación Argentina de Polo (AAP)",
    def: "Entidad rectora del polo argentino, máxima potencia mundial de este deporte y organizadora de la Triple Corona."
  },
  "abierto de palermo": {
    titulo: "Campeonato Argentino Abierto de Polo (Palermo)",
    def: "El certamen de polo de mayor hándicap y prestigio del planeta, vidriera de la élite ecuestre y de exportación de caballos argentinos."
  },
  "sad": {
    titulo: "Sociedades Anónimas Deportivas (SAD)",
    def: "Modelo jurídico que permite a empresas privadas o fondos de inversión comprar clubes de fútbol, en contraste con las Asociaciones Civiles sin fines de lucro tradicionales."
  },
  "asociaciones civiles sin fines de lucro": {
    titulo: "Asociaciones Civiles sin Fines de Lucro",
    def: "Estructura tradicional de los clubes argentinos donde los socios son los dueños, eligen autoridades mediante voto y los clubes cumplen un rol social y comunitario."
  },
  "fórmula 1": {
    titulo: "Fórmula 1 (Gran Premio de Argentina)",
    def: "Máxima categoría del automovilismo mundial. El GP de Argentina se corrió en el Autódromo de Buenos Aires y su regreso exige inversiones millonarias."
  },
  "derecho de formación": {
    titulo: "Derecho de Formación y Mecanismo de Solidaridad",
    def: "Porcentaje económico que deben recibir los clubes de barrio y ligas del interior cuando un jugador formado por ellos es vendido al exterior."
  },

  // CANALES DEPORTIVOS Y PACK FÚTBOL
  "tyc sports": {
    titulo: "TyC Sports (Torneos y Competencias)",
    def: "Canal pionero en transmisiones del deporte argentino, Selección Argentina, Copa Argentina y debates de mediodía."
  },
  "espn argentina": {
    titulo: "ESPN Argentina (Disney)",
    def: "Señal líder internacional con base local, dueña de los derechos de la Copa Libertadores, Champions League y F1."
  },
  "tnt sports": {
    titulo: "TNT Sports (Pack Fútbol Premium)",
    def: "Señal paga de alta definición que transmite en vivo los partidos de la Liga Profesional de Fútbol."
  },
  "fox sports": {
    titulo: "Fox Sports Argentina",
    def: "Tradicional señal deportiva con coberturas de automovilismo, fútbol continental y artes marciales mixtas."
  },
  "deportv": {
    titulo: "DeporTV (Canal Público Deportivo)",
    def: "Señal digital estatal dedicada al deporte amateur, femenino, automovilismo federal y paralímpico."
  },

  // CABLEOPERADORES Y TELECOMUNICACIONES
  "flow": {
    titulo: "Flow (Telecom Argentina)",
    def: "Plataforma líder en televisión en vivo y fibra óptica de banda ancha en los principales centros urbanos del país."
  },
  "directv": {
    titulo: "DirecTV Argentina / DGO",
    def: "Operador de televisión satelital con cobertura en todo el territorio nacional, clave en zonas rurales sin cableado."
  },
  "telecentro": {
    titulo: "Telecentro",
    def: "Empresa de triple play (cable, internet, telefonía) con masiva presencia y tarifas accesibles en el Conurbano bonaerense."
  },

  // PLATAFORMAS GLOBALES DE STREAMING
  "netflix": {
    titulo: "Netflix",
    def: "Gigante global de series y películas on demand, epicentro de debates fiscales por percepciones a consumos en dólares."
  },
  "disney+": {
    titulo: "Disney+ / Star+",
    def: "Plataforma que concentra el entretenimiento familiar y todo el contenido deportivo en vivo de ESPN."
  },
  "max": {
    titulo: "Max (HBO Max)",
    def: "Servicio de streaming internacional con producciones cinematográficas de prestigio y eventos deportivos."
  },
  "spotify": {
    titulo: "Spotify",
    def: "Plataforma de música y podcasts líder en Argentina, vidriera global del fenómeno de la música urbana y el trap local."
  },

  // GRANDES CORPORACIONES Y MULTINACIONALES
  "ypf": {
    titulo: "YPF (Yacimientos Petrolíferos Fiscales)",
    def: "Empresa de bandera de energía y combustibles, corazón productivo de Vaca Muerta y eje de la soberanía energética."
  },
  "mercado libre": {
    titulo: "Mercado Libre (Marcos Galperin)",
    def: "La empresa tecnológica y fintech más valiosa del país, emblema del comercio electrónico y los pagos digitales."
  },

  // UNIVERSIDADES, EDUCACIÓN Y CIENCIA
  "uba": {
    titulo: "Universidad de Buenos Aires (UBA)",
    def: "La universidad pública más prestigiosa del país, gratuita, laica y cogobernada, protagonista de las marchas federales en defensa del presupuesto universitario."
  },
  "marcha federal universitaria": {
    titulo: "Marcha Federal Universitaria",
    def: "Histórica movilización multitudinaria en Plaza de Mayo y todas las provincias en defensa de las universidades nacionales y los salarios docentes."
  },
  "ctera": {
    titulo: "CTERA (Confederación de Trabajadores de la Educación)",
    def: "El mayor gremio docente del país, protagonista de las negociaciones de paritarias y los paros en el inicio del ciclo lectivo."
  },
  "vouchers educativos": {
    titulo: "Vouchers Educativos / Subsidios a Colegios",
    def: "Sistema de subsidio directo a las familias de clase media para costear las cuotas de colegios privados parroquiales o laicos."
  },

  // PLANES SOCIALES, TRABAJO Y ASISTENCIA
  "salario mínimo, vital y móvil": {
    titulo: "Salario Mínimo, Vital y Móvil (SMVM)",
    def: "El piso legal de remuneración que debe percibir un trabajador por jornada completa, acordado en el Consejo del Salario."
  },
  "potenciar trabajo": {
    titulo: "Planes Sociales / Potenciar Trabajo",
    def: "Programas de asistencia a trabajadores desocupados o de la economía popular, en permanente debate por la intermediación de movimientos piqueteros."
  },

  // INSTITUCIONES DE LA REPÚBLICA: CONGRESO Y TRIBUNALES
  "senado de la nación": {
    titulo: "Honorable Senado de la Nación",
    def: "Cámara alta del Congreso que representa a las provincias y a los gobernadores, clave para destrabar o rechazar leyes nacionales."
  },
  "cámara de diputados": {
    titulo: "Cámara de Diputados de la Nación",
    def: "Cámara baja donde se debaten leyes impositivas y presupuestos con 257 legisladores de representación popular."
  },
  "comodoro py": {
    titulo: "Comodoro Py (Justicia Federal y Fiscales)",
    def: "Los tribunales federales de Retiro donde tramitan las causas de corrupción, narcotráfico y delitos contra la administración pública."
  },

  // MARCHAS Y MOVILIZACIONES HISTÓRICAS
  "marcha del 24 de marzo": {
    titulo: "Marcha del 24 de Marzo (Día de la Memoria)",
    def: "La más trascendente conmemoración popular por los derechos humanos, Memoria, Verdad y Justicia en Plaza de Mayo."
  },
  "marcha de san cayetano": {
    titulo: "Marcha de San Cayetano (Paz, Pan y Trabajo)",
    def: "Histórica procesión obrera y social desde el santuario de Liniers a la Casa Rosada cada 7 de agosto."
  },

  // FENÓMENO TELEVISIVO Y CULTURA POP
  "gran hermano": {
    titulo: "Gran Hermano Argentina (Telefe)",
    def: "El reality show más visto y polarizante del país: un espejo social de alianzas, traiciones y necesidad económica que marca el rating y compite con la agenda política nacional."
  }
};

// Fusionar con el glosario general
if (typeof GLOSARIO !== 'undefined') {
  Object.assign(GLOSARIO, GLOSARIO_DEPORTES);
}

if (typeof window !== 'undefined') {
  window.GLOSARIO_DEPORTES = GLOSARIO_DEPORTES;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GLOSARIO_DEPORTES };
}
