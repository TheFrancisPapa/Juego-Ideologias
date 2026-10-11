// origenes_relaciones.js - Módulo de Orígenes de Cuna, Carrera Media, Relaciones Peligrosas y Sistema de Urnas

// =========================================================================
// 1. MODO A: DESDE LA CUNA (0 AÑOS - NACER EN ARGENTINA)
// =========================================================================
const ORIGENES_CUNA = {
  cuna_oro: {
    id: "cuna_oro",
    nombre: "Cuna de Oro (Recoleta / San Isidro)",
    subtitulo: "Apellido patricio, piso en Av. Alvear y plata limpia",
    icono: "fa-solid fa-champagne-glasses",
    descripcion: "Heredás un apellido con prosapia, un piso de 400 metros sobre Avenida Alvear y contactos en los estudios jurídicos más caros de la City. Plata limpia y llegada directa a medios y empresarios. Desventaja: Cero calle; si pisás un barrio popular te miran con desconfianza absoluta.",
    edadInicial: 0,
    statsIniciales: { dinero: 90, calle: 10, medios: 85, rosca: 35 },
    modificadores: {
      claseMedia: +15,
      productivo: +20,
      trabajo: -15,
      dolarBlue: -50,
      roscaGobernadores: -10
    },
    vectorEjesBase: {
      estatismo: 75,
      valores: 65,
      comercio: 70
    }
  },

  cuna_popular: {
    id: "cuna_popular",
    nombre: "Cuna Militante / Barrio Popular (Conurbano / Periferia)",
    subtitulo: "Hijo de delegado gremial, ollas populares y club de barrio",
    icono: "fa-solid fa-people-roof",
    descripcion: "Crecés en un barrio ferroviario del primer cordón del Conurbano. Tu viejo fue delegado despedido en los 90 y tu vieja armaba merenderos. Aprendés a negociar cuerpo a cuerpo y entendés el código de la calle. Desventaja: Cero guita; para hacerte un nombre tenés que transar con punteros locales.",
    edadInicial: 0,
    statsIniciales: { dinero: 15, calle: 95, medios: 20, rosca: 65 },
    modificadores: {
      trabajo: +25,
      claseMedia: -10,
      productivo: -15,
      mechaSocial: -10,
      roscaGobernadores: +10
    },
    vectorEjesBase: {
      estatismo: 25,
      valores: 35,
      comercio: 30
    }
  },

  dinastia_feudal: {
    id: "dinastia_feudal",
    nombre: "Dinastía Feudal del Interior",
    subtitulo: "Familia dueña de la justicia provincial, diarios y estancias",
    icono: "fa-solid fa-landmark-dome",
    origenEscuela: "Provincia del Norte o Cuyo. Familia dueña de la justicia provincial, diarios locales y estancias.",
    ventajasPartida: "Aparato electoral blindado en tu provincia natal. Puesto público asegurado desde los 21 años. Senadores propios de partida.",
    pasivosOcultos: "Si salís a la política nacional, los medios porteños te destruyen como 'feudal arcaico'. 3 familiares directos nombrados en cargos como anclas de nepotismo.",
    descripcion: "Tu familia gobierna la provincia desde 1948. Tu tío es presidente de la Corte provincial, tu viejo fue vicegobernador dos veces y tu mamá maneja los registros automotores de la capital. El aparato estatal juega para vos desde que nacés. Desventaja: Si salís a la política nacional te tildan de feudal, dinástico y retrógrado.",
    edadInicial: 0,
    statsIniciales: { dinero: 70, calle: 50, medios: 35, rosca: 95 },
    atributosBase: { labia: 65, rosca: 95, calle: 50, chasis: 75, escrupulos: 20 },
    patrimonioEntorno: {
      cajaInicio: "US$ 180.000 + Estancia ganadera de 4.000 hectáreas",
      operador: 'Don Ramón "El Chueco" (Presidente del bloque legislativo provincial)',
      vinculoJudicial: "Tío Presidente del Superior Tribunal de Justicia Provincial"
    },
    modificadores: {
      roscaGobernadores: +30,
      institucionalidad: 30,
      frenteExterno: -10,
      estadoCiencia: +15
    },
    vectorEjesBase: {
      federalismo: 20,
      institucionalidad: 25,
      estatismo: 40
    }
  },

  clase_media_universitaria: {
    id: "clase_media_universitaria",
    nombre: "Clase Media Universitaria / \"Mi Hijo el Dóctor\"",
    subtitulo: "Caballito / La Plata / Córdoba Centro • Militancia en la UBA o UNC",
    icono: "fa-solid fa-graduation-cap",
    origenEscuela: "Caballito, La Plata o Córdoba Centro. Hijo de comerciantes o docentes; militancia en la UBA o UNC.",
    ventajasPartida: "Labia y oratoria técnica: +25% de efectividad en debates televisivos y leyes complejas. Buena imagen en el votante independiente.",
    pasivosOcultos: "Cero tropa territorial en la calle. Vivís al borde de la quiebra personal si perdés una elección legislativa.",
    descripcion: "Hijo de profesionales o comerciantes de clase media. Te formaste en la universidad pública entre fotocopias y asambleas estudiantiles. Gran retórica en debates, respetado por la clase media urbana. Desventaja: Cero músculo de choque; sin presupuesto para pagar micros ni punteros barriales.",
    edadInicial: 0,
    statsIniciales: { dinero: 30, calle: 35, medios: 80, rosca: 55 },
    atributosBase: { labia: 90, rosca: 55, calle: 35, chasis: 60, escrupulos: 70 },
    patrimonioEntorno: {
      cajaInicio: "US$ 25.000 (Ahorros familiares) + Departamento de 3 ambientes en Caballito",
      operador: 'Lic. Agustín (Consultor de opinión pública y encuestador)',
      vinculoJudicial: "Profesor Titular de Derecho Constitucional en la UBA"
    },
    modificadores: {
      claseMedia: +25,
      estadoCiencia: +20,
      trabajo: -5,
      mechaSocial: -5
    },
    vectorEjesBase: {
      institucionalidad: 80,
      valores: 30,
      estatismo: 55
    }
  },

  chacarero_gringo: {
    id: "chacarero_gringo",
    nombre: "Chacarero Gringo / Pampa Sojera",
    subtitulo: "Zona núcleo agroindustrial • Silobolsas, 4x4 y cooperativas rurales",
    icono: "fa-solid fa-wheat-awn",
    origenEscuela: "Pergamino, Armstrong o Rafaela. Vínculos con cooperativas agrarias, camionetas 4x4 y campo propio.",
    ventajasPartida: "Liquidez en granos: podés fondear campañas vendiendo silobolsas sin pasar por el radar bancario. Apoyo ciego de las cámaras agropecuarias.",
    pasivosOcultos: "Odio visceral de los gremios del transporte y movimientos sociales urbanos. Cero paciencia para la rosca legislativa de medianoche.",
    descripcion: "Nacido en el corazón productivo de la pampa húmeda. Tu familia forjó su patrimonio trabajando la tierra y administrando acopios. Tenés liquidez verde que no pasa por bancos y el respaldo cerrado del campo. Desventaja: Cero diplomacia; te sacan de quicio los piquetes y las trampas del reglamento parlamentario.",
    edadInicial: 0,
    statsIniciales: { dinero: 85, calle: 40, medios: 45, rosca: 60 },
    atributosBase: { labia: 45, rosca: 60, calle: 40, chasis: 90, escrupulos: 50 },
    patrimonioEntorno: {
      cajaInicio: "US$ 190.000 (Silobolsas liquidados barrani) + Toyota Hilux 4x4",
      operador: '"Gringo" Bressan (Tesorero de la Federación Agraria Departamental)',
      vinculoJudicial: "Juez de Paz del departamento rural"
    },
    modificadores: {
      productivo: +30,
      trabajo: -20,
      dolarBlue: -30,
      roscaGobernadores: +10
    },
    vectorEjesBase: {
      comercio: 85,
      estatismo: 80,
      federalismo: 75
    }
  }
};

// Alias para los 5 arquetipos
ORIGENES_CUNA.patriciado_porteno = ORIGENES_CUNA.cuna_oro;
ORIGENES_CUNA.barro_conurbano = ORIGENES_CUNA.cuna_popular;

// Enriquecer cuna_oro y cuna_popular con atributos y patrimonio según la tabla
ORIGENES_CUNA.cuna_oro.origenEscuela = "Recoleta / San Isidro. Colegio bilingüe tradicional, rugby y títulos en San Andrés o UCA.";
ORIGENES_CUNA.cuna_oro.ventajasPartida = "Billetera inicial limpia en dólares. Llegada directa a dueños de canales y embajadas. Contactos en la City y estudios de Comodoro Py.";
ORIGENES_CUNA.cuna_oro.pasivosOcultos = "Calle: 10/100. Si pisás La Matanza te sacan la billetera con la mirada. La militancia te tilda de oligarca cipayo al primer ajuste.";
ORIGENES_CUNA.cuna_oro.atributosBase = { labia: 75, rosca: 50, calle: 10, chasis: 70, escrupulos: 60 };
ORIGENES_CUNA.cuna_oro.patrimonioEntorno = {
  cajaInicio: "US$ 250.000 (Plata limpia en cuentas del exterior) + Piso en Av. Alvear",
  operador: "Dr. Máximo Anchorena (Abogado corporativo de la City)",
  vinculoJudicial: "Primo hermano en la Sala II de la Cámara Comercial"
};

ORIGENES_CUNA.cuna_popular.origenEscuela = "Cuarto cordón bonaerense o periferia de Rosario. Escuela pública, club barrial y fábrica o gremio.";
ORIGENES_CUNA.cuna_popular.ventajasPartida = "Calle: 95/100. Olfato inmediato para desactivar saqueos y aprietes. Tropas pesadas propias (micros, bombos y barras).";
ORIGENES_CUNA.cuna_popular.pasivosOcultos = "Cero llegada al establishment económico. Para ascender tenés que transar con intendentes feudales y barras bravas.";
ORIGENES_CUNA.cuna_popular.atributosBase = { labia: 60, rosca: 85, calle: 95, chasis: 85, escrupulos: 25 };
ORIGENES_CUNA.cuna_popular.patrimonioEntorno = {
  cajaInicio: "US$ 35.000 (Efectivo en caja de seguridad) + Quinta en San Vicente",
  operador: '"El Tano" (Puntero barrial con 80 contratos municipales)',
  vinculoJudicial: "Comisario Inspector de la Policía Bonaerense (Zona Sur)"
};

// =========================================================================
// 2. MODO B: SALTO AL BARRO (CARRERA MEDIA: 28-48 AÑOS)
// =========================================================================
const CARGOS_BARRO = {
  concejal_conurbano: {
    id: "concejal_conurbano",
    nombre: "Concejal de Municipio del Conurbano",
    distrito: "Tercera Sección Electoral (GBA Sur)",
    icono: "fa-solid fa-city",
    descripcion: "Manejo de ordenanzas de zonificación para supermercados, peleas a los gritos en el Concejo Deliberante y aprietes de barras bravas por habilitaciones de boliches bailables.",
    edadRango: [28, 48],
    statsIniciales: { dinero: 40, calle: 80, medios: 30, rosca: 65 },
    modificadores: {
      trabajo: +15,
      seguridadJusticia: -10,
      mechaSocial: +10
    }
  },

  intendente_interior: {
    id: "intendente_interior",
    nombre: "Intendente de Pueblo del Interior",
    distrito: "Zona Núcleo Agropecuaria",
    icono: "fa-solid fa-tractor",
    descripcion: "Hacés malabares con las retenciones y el fondo sojero, apagás incendios con la policía rural y tenés que viajar en auto a La Plata o Balcarce 50 a rogar por diez cuadras de pavimento.",
    edadRango: [32, 48],
    statsIniciales: { dinero: 60, calle: 55, medios: 25, rosca: 70 },
    modificadores: {
      productivo: +20,
      roscaGobernadores: +15,
      mechaSocial: -5
    }
  },

  diputado_provincial: {
    id: "diputado_provincial",
    nombre: "Diputado Provincial / Nacional",
    distrito: "Palacio Legislativo",
    icono: "fa-solid fa-scale-balanced",
    descripcion: "El laberinto de las comisiones fantasma, el toma y daca por levantar la mano a las 4 de la mañana para aprobar el presupuesto y la obsesión absoluta por colarte en los paneles de TV porteños.",
    edadRango: [28, 48],
    statsIniciales: { dinero: 55, calle: 40, medios: 75, rosca: 80 },
    modificadores: {
      claseMedia: +10,
      estadoCiencia: +10,
      riesgoPais: -10
    }
  },

  secretario_juzgado: {
    id: "secretario_juzgado",
    nombre: "Secretario de Juzgado Federal",
    distrito: "Comodoro Py (Comuna 1 - CABA)",
    icono: "fa-solid fa-gavel",
    descripcion: "El funcionario clave que redacta las indagatorias a las 3 AM y archiva las causas calientes en el subsuelo. Manejás información clasificada sobre gobernadores y empresarios antes de que pisen las escalinatas de Retiro.",
    edadRango: [28, 48],
    statsIniciales: { dinero: 50, calle: 30, medios: 60, rosca: 85 },
    modificadores: {
      institucionalidad: +15,
      seguridadJusticia: +15,
      mechaSocial: -5
    }
  },

  puntero_barrial: {
    id: "puntero_barrial",
    nombre: "Puntero Barrial y Referente Comunitario",
    distrito: "Segundo Cordón Bonaerense",
    icono: "fa-solid fa-hand-holding-hand",
    descripcion: "Administrador de comedores, listas de bolsones de alimentos y logística de colectivos para actos en Plaza de Mayo. Sin tu peaje territorial ningún candidato puede caminar tu barrio sin que le chiflen.",
    edadRango: [28, 48],
    statsIniciales: { dinero: 35, calle: 95, medios: 15, rosca: 80 },
    modificadores: {
      trabajo: +20,
      claseMedia: -15,
      mechaSocial: +15
    }
  }
};

// =========================================================================
// 3. MODO C: MODO PRESIDENTE (30-72 AÑOS)
// =========================================================================
const RANGOS_PRESIDENTE = {
  pibe_disruptivo: {
    id: "pibe_disruptivo",
    nombre: "El Pibe Maravilla / Fenómeno Disruptivo (31-35 Años)",
    edadRango: [31, 35],
    icono: "fa-solid fa-bolt",
    coronarias: 95,
    paranoia: 15,
    seguridad: 50,
    descripcion: "Récord de visualizaciones en streaming y furor en TikTok. Tenés juventud y mística libertaria/juvenil, pero la CGT y los 24 gobernadores te huelen a novato inexperto al que planean quebrar en dos semanas.",
    modificadores: {
      roscaGobernadores: -15,
      mechaSocial: +10,
      dolarBlue: -30
    }
  },

  candidato_aparato: {
    id: "candidato_aparato",
    nombre: "El Candidato del Aparato (45-55 Años)",
    edadRango: [45, 55],
    icono: "fa-solid fa-briefcase",
    coronarias: 75,
    paranoia: 35,
    seguridad: 65,
    descripcion: "Equilibrio físico y muñeca política curtida. Pero arrastrás un tendal de favores impagos a financistas, tres parientes en ministerios y expedientes dormidos en Comodoro Py.",
    modificadores: {
      roscaGobernadores: +10,
      mechaSocial: 0,
      riesgoPais: 0
    }
  },

  patriarca_retornado: {
    id: "patriarca_retornado",
    nombre: "El Patriarca / Caudillo Retornado (65-72 Años)",
    edadRango: [65, 72],
    icono: "fa-solid fa-crown",
    coronarias: 50,
    paranoia: 60,
    seguridad: 80,
    descripcion: "Aura de prócer vivo. Los intendentes bajan la cabeza al verte entrar. Pero la salud está en 50%; un cacerolazo fuerte te sube la presión a 19/11 y un viaje con turbulencia te deja de cama tres días.",
    modificadores: {
      roscaGobernadores: +25,
      mechaSocial: -10,
      dolarBlue: +40
    }
  }
};

// =========================================================================
// 3B. ATRIBUTOS BASE DEL DIRIGENTE (ESCALA 1 A 100)
// =========================================================================
const ATRIBUTOS_BASE_DEF = {
  labia: {
    id: "labia",
    nombre: "Labia y Cintura Retórica",
    icono: "fa-solid fa-comment-dots",
    color: "sky",
    descripcion: "Capacidad de chamuyo en vivo, velocidad para salir de preguntas trampa de periodistas y efectividad discursiva en cadenas nacionales o streams.",
    comentarioRango: (val) => val >= 80 ? "Oratoria demoledora en prime time" : (val >= 50 ? "Chamuyo prolijo y adaptable" : "Se traba ante repreguntas filosas")
  },
  rosca: {
    id: "rosca",
    nombre: "Muñeca y Capacidad de Rosca",
    icono: "fa-solid fa-handshake",
    color: "purple",
    descripcion: "Habilidad para negociar a oscuras en cantinas y pasillos, tragar sapos sin vomitar y comprar voluntades con fondos reservados o cargos públicos.",
    comentarioRango: (val) => val >= 80 ? "Especialista en café de trasnoche y acuerdos oscuros" : (val >= 50 ? "Negocia con billetera ajena" : "Lo madrugan en las comisiones de madrugada")
  },
  calle: {
    id: "calle",
    nombre: "Olfato de Asfalto (Calle)",
    icono: "fa-solid fa-road",
    color: "amber",
    descripcion: "Capacidad intuitiva para anticipar estallidos, saber cuándo una marcha es pacífica y cuándo un tiroteo es zona liberada, y conectar con el votante de a pie.",
    comentarioRango: (val) => val >= 80 ? "Olfato canino para desactivar saqueos" : (val >= 50 ? "Camina el centro sin custodia" : "Le cuesta conectar con la villa y le sacan la billetera")
  },
  chasis: {
    id: "chasis",
    nombre: "Resistencia del Chasis (Físico)",
    icono: "fa-solid fa-heart-pulse",
    color: "rose",
    descripcion: "Capacidad del corazón, las arterias y el hígado para tolerar el estrés, el tabaco, los asados de campaña a las 3:00 AM y el insomnio crónico.",
    comentarioRango: (val) => val >= 80 ? "Chasis de roble; banca noches sin dormir" : (val >= 50 ? "Sin antecedentes coronarios graves aún" : "Al borde del stent por hipertensión de Olivos")
  },
  escrupulos: {
    id: "escrupulos",
    nombre: "Escrúpulos Morales (Inverso)",
    icono: "fa-solid fa-scale-unbalanced",
    color: "emerald",
    descripcion: "Atributo inverso. Cuanto más alto, más te cuesta firmar un apriete, traicionar a un socio o usar fondos reservados; si llega a cero, sos un psicópata del poder capaz de cualquier maniobra maquiavélica.",
    comentarioRango: (val) => val >= 70 ? "Moral republicana; le cuesta firmar aprietes sucios" : (val >= 40 ? "Capaz de entregar a un socio si la coyuntura aprieta" : "Psicópata maquiavélico del poder absoluto")
  }
};

// =========================================================================
// 3C. VIRTUDES CRIOLLAS (ELEGÍ 2 RASGOS POSITIVOS)
// =========================================================================
const VIRTUDES_CRIOLLAS = {
  estomago_amianto: {
    id: "estomago_amianto",
    nombre: "Estómago de Amianto",
    icono: "fa-solid fa-shield-virus",
    color: "amber",
    descripcion: "Podés almorzar lechón con intendentes a las 14:00 hs, cenar empanadas fritas en un comité a la 01:00 AM y desayunar café con whisky sin que te suba la acidez gástrica ni te dé úlcera.",
    efectoMecanico: "Inmune a bajas de salud digestiva por dieta de campaña y banquetes de rosca.",
    resumenEfecto: "Inmunidad gástrica total"
  },
  piloto_tormentas: {
    id: "piloto_tormentas",
    nombre: "Piloto de Tormentas",
    icono: "fa-solid fa-cloud-bolt",
    color: "sky",
    descripcion: "Cuando la brecha cambiaria supera el 80% o hay cacerolazos frente a la Casa Rosada, tu atributo de Muñeca y Rosca se duplica temporalmente. Te crecés en el caos absoluto.",
    efectoMecanico: "Duplica la efectividad de rosca cuando la calle arde y el dólar vuela.",
    resumenEfecto: "Rosca x2 en crisis terminal"
  },
  tigre_recinto: {
    id: "tigre_recinto",
    nombre: "Tigre de Recinto",
    icono: "fa-solid fa-bullhorn",
    color: "purple",
    descripcion: "En los debates televisivos y sesiones maratónicas del Congreso a las 4:00 AM, tus remates verbales dejan callado a cualquier rival, sumando +5% de votos indecisos en vivo.",
    efectoMecanico: "+5% de intención de voto indeciso en debates y sesiones calientes.",
    resumenEfecto: "+5% votos en vivo por oratoria"
  },
  pintor_aldea: {
    id: "pintor_aldea",
    nombre: "Pintor de Aldea",
    icono: "fa-solid fa-heart",
    color: "pink",
    descripcion: "Tenés un magnetismo popular arrollador; podés cometer errores garrafales de gestión, pero la gente común te cruza en la calle, te abraza llorando y te perdona todo al grito de «¡Te banco igual, doctor!».",
    efectoMecanico: "Amortigua pérdidas de imagen pública y mecha social ante descalabros.",
    resumenEfecto: "Blindaje de afecto popular"
  },
  amigo_juez: {
    id: "amigo_juez",
    nombre: "Amigo del Juez",
    icono: "fa-solid fa-gavel",
    color: "indigo",
    descripcion: "Tenés un padrino intocable en la Cámara de Casación o en la Corte Suprema. Toda denuncia penal en tu contra tarda un mínimo de 10 años en salir de la etapa de instrucción.",
    efectoMecanico: "Cajoneo judicial permanente: causas congeladas en instrucción.",
    resumenEfecto: "Comodoro Py dormido 10 años"
  },
  billetera_barrani: {
    id: "billetera_barrani",
    nombre: "Billetera Barrani",
    icono: "fa-solid fa-money-bill-1-wave",
    color: "emerald",
    descripcion: "Sabés mover dinero en efectivo sin dejar rastros en el sistema financiero. Tus costos de campaña en negro son un 40% más baratos y ARCA nunca detecta inconsistencias patrimoniales iniciales.",
    efectoMecanico: "-40% en costos de micros y punteros en negro; inmunidad patrimonial en ARCA.",
    resumenEfecto: "-40% costos negros de campaña"
  }
};

// =========================================================================
// 3D. DEFECTOS Y VICIOS INICIALES (ELEGÍ 2 BOMBAS DE TIEMPO)
// =========================================================================
const DEFECTOS_CRIOLLOS = {
  bocon_medianoche: {
    id: "bocon_medianoche",
    nombre: "Bocón de Medianoche",
    icono: "fa-brands fa-x-twitter",
    color: "rose",
    descripcion: "Cada vez que el estrés supera el 70%, hay un 30% de probabilidad de que abras Twitter/X a las 02:30 AM tras dos copas de vino y publiques una barbaridad contra un juez, un país limítrofe o un periodista estrella.",
    efectoMecanico: "Riesgo de desastre comunicacional en redes bajo picos de estrés nocturno.",
    resumenEfecto: "Tuits incendiarios a las 2 AM"
  },
  golosina_caja: {
    id: "golosina_caja",
    nombre: "Golosina de Caja (Cleptomanía Presupuestaria)",
    icono: "fa-solid fa-sack-dollar",
    color: "amber",
    descripcion: "No podés ver una partida de fondos reservados o subsidios sin desviar un 15% hacia cajas de seguridad de testaferros. Aumenta la velocidad a la que Comodoro Py abre expedientes en tu contra.",
    efectoMecanico: "Desvío automático del 15% de fondos y aceleración de allanamientos judiciales.",
    resumenEfecto: "15% a cajas negras / Causa express"
  },
  familiero_cronico: {
    id: "familiero_cronico",
    nombre: "Familiero Crónico (Nepotismo Compulsivo)",
    icono: "fa-solid fa-people-roof",
    color: "purple",
    descripcion: "Tenés un compromiso moral patológico con tu clan: estás obligado a nombrar a tu cuñado, tu prima y tus hijos en puestos públicos antes de tu primer año de mandato, o sufrís un colapso de salud mental por culpa doméstica.",
    efectoMecanico: "Nepotismo compulsivo forzado; daño a la capacidad técnica del gabinete.",
    resumenEfecto: "Cuñado en Obras Públicas día 1"
  },
  complejo_procer: {
    id: "complejo_procer",
    nombre: "Complejo de Prócer (Megalomanía Terminal)",
    icono: "fa-solid fa-monument",
    color: "indigo",
    descripcion: "Te creés la reencarnación de San Martín, Rosas o Perón. Rechazás consejos técnicos de ministros de Economía, exigís bustos con tu cara en vida y te negás a negociar con gobernadores porque los considerás «seres inferiores».",
    efectoMecanico: "Rechazo de planes de estabilización económica y penalización en rosca federal.",
    resumenEfecto: "Megalomanía / Veto a técnicos"
  },
  panico_helicoptero: {
    id: "panico_helicoptero",
    nombre: "Pánico al Helicóptero",
    icono: "fa-solid fa-helicopter",
    color: "red",
    descripcion: "Tenés fobia biológica al desborde popular. Al primer cacerolazo masivo o quema de neumáticos a diez cuadras de tu despacho, tu presión arterial sube a 18/11 y sufrís parálisis de toma de decisiones durante 48 horas.",
    efectoMecanico: "Pico de presión 18/11 y bloqueo de decisiones ante cacerolazos.",
    resumenEfecto: "Parálisis ante cacerolazos"
  },
  debilidad_alcoba: {
    id: "debilidad_alcoba",
    nombre: "Debilidad de Alcoba",
    icono: "fa-solid fa-bed",
    color: "pink",
    descripcion: "Sos vulnerable a romances clandestinos con figuras de la farándula, modelos o espías encubiertas de la SIDE. Una vez por mandato, se desata un escándalo de filtración de chats o fotos que te obliga a pagar millones en silencios.",
    efectoMecanico: "Escándalo de filtración de chats íntimos y desvío de fondos para silencios.",
    resumenEfecto: "Escándalo mediático de sábanas"
  }
};

// =========================================================================
// 3E. BANCO DE NOMBRES DE DIRIGENTES ARGENTINOS
// =========================================================================
const NOMBRES_DIRIGENTES_ARGENTINOS = [
  'Dr. Carlos "El Vasco" Etchegoyen',
  'Lic. Romina "La Flaca" Capurro',
  'Dr. Horacio "El Pibe" Zabaleta',
  'Ing. Roberto "El Gaucho" Benítez',
  'Dra. Victoria "La Leona" Albarracín',
  'Dr. Juan Manuel "El Turco" Jalil',
  'Lic. Esteban "El Colo" Maciel',
  'Dra. Marcela "La Negra" Toledo',
  'Cdor. Osvaldo "El Zorro" Menéndez',
  'Dr. Federico "El Alemán" Von Der Heyde'
];

// =========================================================================
// 3F. GENERADOR DE FICHA MATRICULAR DE CANDIDATO
// =========================================================================
function generarFichaMatricularDirigente(opciones = {}) {
  const modo = opciones.modo || 'barro'; // 'cuna', 'barro', 'presidente'
  const nombre = opciones.nombre || NOMBRES_DIRIGENTES_ARGENTINOS[Math.floor(Math.random() * NOMBRES_DIRIGENTES_ARGENTINOS.length)];

  // 1. Origen Socioeconómico (5 arquetipos)
  let origenKey = opciones.origenId;
  const origenesValidos = ['cuna_oro', 'cuna_popular', 'dinastia_feudal', 'clase_media_universitaria', 'chacarero_gringo'];
  if (!origenKey || !ORIGENES_CUNA[origenKey]) {
    origenKey = origenesValidos[Math.floor(Math.random() * origenesValidos.length)];
  }
  const origen = ORIGENES_CUNA[origenKey];

  // 2. Edad & Cargo inicial
  let edad = opciones.edad;
  let cargoInicial = opciones.cargoInicial;

  if (modo === 'cuna') {
    edad = 0;
    cargoInicial = "Nacimiento en Maternidad / Hospital Público";
  } else if (modo === 'barro') {
    if (!edad) edad = Math.floor(28 + Math.random() * 21); // 28 a 48 Años
    if (!cargoInicial) {
      const cargosDisponibles = Object.values(CARGOS_BARRO);
      const c = cargosDisponibles[Math.floor(Math.random() * cargosDisponibles.length)];
      cargoInicial = c.nombre;
    }
  } else { // 'presidente'
    if (!edad) edad = Math.floor(31 + Math.random() * 41); // 31 a 71 Años
    cargoInicial = "Presidente de la Nación Argentina (Salón Blanco)";
  }

  // 3. Atributos Base (Escala 1 a 100)
  const baseAtrib = origen.atributosBase || { labia: 65, rosca: 65, calle: 50, chasis: 70, escrupulos: 45 };
  const atributos = {
    labia: Math.max(10, Math.min(99, opciones.labia !== undefined ? opciones.labia : Math.round(baseAtrib.labia + (Math.random() * 12 - 6)))),
    rosca: Math.max(10, Math.min(99, opciones.rosca !== undefined ? opciones.rosca : Math.round(baseAtrib.rosca + (Math.random() * 12 - 6)))),
    calle: Math.max(5, Math.min(99, opciones.calle !== undefined ? opciones.calle : Math.round(baseAtrib.calle + (Math.random() * 12 - 6)))),
    chasis: Math.max(20, Math.min(99, opciones.chasis !== undefined ? opciones.chasis : Math.round(baseAtrib.chasis + (Math.random() * 12 - 6)))),
    escrupulos: Math.max(5, Math.min(95, opciones.escrupulos !== undefined ? opciones.escrupulos : Math.round(baseAtrib.escrupulos + (Math.random() * 12 - 6))))
  };

  // 4. Virtudes (2 elegidas o sorteadas)
  const virtudesDisponibles = Object.values(VIRTUDES_CRIOLLAS);
  let v1 = opciones.virtud1 && VIRTUDES_CRIOLLAS[opciones.virtud1] ? VIRTUDES_CRIOLLAS[opciones.virtud1] : null;
  let v2 = opciones.virtud2 && VIRTUDES_CRIOLLAS[opciones.virtud2] ? VIRTUDES_CRIOLLAS[opciones.virtud2] : null;
  if (!v1 || !v2 || v1.id === v2.id) {
    const vShuffle = [...virtudesDisponibles].sort(() => Math.random() - 0.5);
    v1 = vShuffle[0];
    v2 = vShuffle[1];
  }

  // 5. Defectos (2 elegidos o sorteados)
  const defectosDisponibles = Object.values(DEFECTOS_CRIOLLOS);
  let d1 = opciones.defecto1 && DEFECTOS_CRIOLLOS[opciones.defecto1] ? DEFECTOS_CRIOLLOS[opciones.defecto1] : null;
  let d2 = opciones.defecto2 && DEFECTOS_CRIOLLOS[opciones.defecto2] ? DEFECTOS_CRIOLLOS[opciones.defecto2] : null;
  if (!d1 || !d2 || d1.id === d2.id) {
    const dShuffle = [...defectosDisponibles].sort(() => Math.random() - 0.5);
    d1 = dShuffle[0];
    d2 = dShuffle[1];
  }

  // 6. Patrimonio y Entorno
  const pat = origen.patrimonioEntorno || {
    cajaInicio: "US$ 140.000 (Efectivo en caja de seguridad) + Quinta en San Vicente",
    operador: '"El Tano" (Puntero barrial con 80 contratos municipales)',
    vinculoJudicial: "Primo hermano trabajando como Secretario en el Juzgado Federal N° 2"
  };

  return {
    nombre,
    edad,
    modo,
    cargoInicial,
    origen,
    atributos,
    virtudes: [v1, v2],
    defectos: [d1, d2],
    patrimonioEntorno: pat,
    timestamp: Date.now()
  };
}

// =========================================================================
// 3D. ÁRBOL DE DESBLOQUEO LEGAL Y POLÍTICO (CONSTITUCIÓN, CCyC Y LEYES NACIONALES)
// =========================================================================
const TRAMOS_DESBLOQUEO_LEGAL = {
  cuna_jardin: {
    id: "cuna_jardin",
    rango: "0 a 5 Años",
    edadMin: 0,
    edadMax: 5,
    icono: "fa-solid fa-baby",
    titulo: "Cuna y Jardín (Rasgos Pasivos)",
    marcoLegal: "Leyes 26.206 y 27.045 (Sala de 4 y 5 obligatoria; maternal no obligatoria)",
    faseVital: "Primera Infancia / Cuna Familiar",
    mecanicaSimulador: "Fase de Rasgos Pasivos: Inflación del hogar, quiebra familiar o cuna de oro forjan tu resistencia al estrés y tus prejuicios iniciales en los 12 ejes.",
    capacidadesDesbloqueadas: [
      "[✓] ASIMILACIÓN DE RASGOS PASIVOS: La cuna familiar define tus estadísticas de base en los 12 ejes.",
      "[✓] RESISTENCIA BIOLÓGICA PRIMARIA: La dieta y crisis del hogar marcan la tolerancia inicial del chasis."
    ],
    capacidadesBloqueadas: [
      "[X] Autonomía de decisión moral y política (Requiere 6 años cumplidos).",
      "[X] Conducción cívica e imputabilidad penal (Totalmente inimputable)."
    ]
  },
  primaria_club: {
    id: "primaria_club",
    rango: "6 a 12 Años",
    edadMin: 6,
    edadMax: 12,
    icono: "fa-solid fa-school",
    titulo: "Primaria y Club (Primeros Dilemas Morales)",
    marcoLegal: "Educación Primaria Obligatoria (Ley 26.206)",
    faseVital: "Infancia Escolar y Barrio",
    mecanicaSimulador: "Primeros Dilemas Morales: Cooperadoras escolares, el kiosco del colegio, clubes de barrio y la administración de tu primera plata en efectivo.",
    capacidadesDesbloqueadas: [
      "[✓] PRIMEROS DILEMAS MORALES: Gestión de caja chica en el recreo y cooperadoras de escuela.",
      "[✓] FORMACIÓN DE PERTENENCIA: Clubes barriales y primeros liderazgos infantiles en el aula."
    ],
    capacidadesBloqueadas: [
      "[X] Autonomía progresiva en salud (Art. 26 CCyC - Requiere 13 años).",
      "[X] Participación electoral formal."
    ]
  },
  autonomia_medica: {
    id: "autonomia_medica",
    rango: "13 a 15 Años",
    edadMin: 13,
    edadMax: 15,
    icono: "fa-solid fa-user-shield",
    titulo: "Autonomía Médica & Rebeldía Civil",
    marcoLegal: "Art. 26 del Código Civil y Comercial (CCyC - Autonomía progresiva)",
    faseVital: "Adolescencia Temprana / Despertar Político",
    mecanicaSimulador: "Primeras Posiciones Doctrinales: Debates sobre salud, religión familiar, marchas estudiantiles y tus primeras asambleas.",
    capacidadesDesbloqueadas: [
      "[✓] AUTONOMÍA PROGRESIVA (Art. 26 CCyC): Capacidad de decisión sobre tratamientos no invasivos y cuidado del cuerpo.",
      "[✓] PRIMERAS POSICIONES DOCTRINALES: Asambleas estudiantiles iniciales y ruptura de mandatos familiares."
    ],
    capacidadesBloqueadas: [
      "[X] Voto formal en comicios (Requiere 16 años por Ley 26.774).",
      "[X] Régimen de imputabilidad penal (Menor inimputable no punible)."
    ]
  },
  voto_joven_juvenil: {
    id: "voto_joven_juvenil",
    rango: "16 y 17 Años",
    edadMin: 16,
    edadMax: 17,
    icono: "fa-solid fa-check-to-slot",
    titulo: "Voto Joven y Régimen Penal Juvenil",
    marcoLegal: "Ley 26.774 (Voto Joven optativo) + Ley 22.278 (Régimen Penal Juvenil)",
    faseVital: "Juventud Secundaria / El Bautismo Cívico",
    mecanicaSimulador: "El Bautismo Cívico: Podés votar en las urnas o abstenerte sin multa. Conducción de centros de estudiantes, tomas de colegios y primeras causas contravencionales con régimen tutelar especial.",
    capacidadesDesbloqueadas: [
      "[✓] VOTO JOVEN OPTATIVO (Ley 26.774): Inscripción en el padrón electoral sin sanción ni multa por abstención.",
      "[✓] CONDUCCIÓN ESTUDIANTIL: Habilitación para liderar centros de estudiantes y tomas de colegios.",
      "[✓] RÉGIMEN PENAL JUVENIL (Ley 22.278): Responsabilidad penal por delitos graves bajo régimen tutelar especial."
    ],
    capacidadesBloqueadas: [
      "[X] Mayoría de edad plena (Art. 25 CCyC - Requiere 18 años).",
      "[X] Imputabilidad penal plena de adultos en Comodoro Py.",
      "[X] Cargos legislativos y ejecutivos nacionales."
    ]
  },
  mayoria_plena_militancia: {
    id: "mayoria_plena_militancia",
    rango: "18 a 24 Años",
    edadMin: 18,
    edadMax: 24,
    icono: "fa-solid fa-id-card",
    titulo: "Mayoría Plena & El Barro de la Militancia",
    marcoLegal: "Art. 25 CCyC (Mayoría de edad) + Código Electoral (Voto obligatorio) + CP (Imputabilidad plena)",
    faseVital: "Juventud Plena / El Barro de la Militancia",
    mecanicaSimulador: "El Barro de la Militancia: Si no votás, entrás al padrón de infractores. Sos elegible como autoridad de mesa (robo o control de boletas). Comodoro Py ya te puede procesar. Primeros contratos en el Estado.",
    capacidadesDesbloqueadas: [
      "[✓] MAYORÍA DE EDAD PLENA (Art. 25 CCyC): Capacidad civil integral sin patria potestad.",
      "[✓] VOTO OBLIGATORIO Y AUTORIDAD DE MESA: Telegrama del Correo para presidir mesas electorales y fiscalizar comicios.",
      "[✓] IMPUTABILIDAD PENAL DE ADULTOS: Comodoro Py y juzgados correccionales pueden abrir expedientes y procesarte.",
      "[✓] CONTRATACIÓN PÚBLICA: Primeros contratos y nombramientos en ministerios o legislaturas."
    ],
    capacidadesBloqueadas: [
      "[X] Diputado de la Nación (Art. 48 CN): Requiere 25 años cumplidos y 4 años de ciudadanía.",
      "[X] Senador Nacional y Presidente (Arts. 55 y 89 CN): Requiere 30 años cumplidos."
    ]
  },
  camara_baja_diputados: {
    id: "camara_baja_diputados",
    rango: "25 a 29 Años",
    edadMin: 25,
    edadMax: 29,
    icono: "fa-solid fa-landmark-dome",
    titulo: "Diputado Nacional (Cámara Baja)",
    marcoLegal: "Art. 48 de la Constitución Nacional (Piso de 25 años para Diputados)",
    faseVital: "Adultez Temprana / Carrera Parlamentaria",
    mecanicaSimulador: "Desbloqueo de la Cámara Baja: Podés encabezar listas legislativas nacionales. Proponés proyectos de ley, negociás en comisiones y cobrás dietas con pasajes canjeables. Manejo de hasta 12 asesores de bloque.",
    capacidadesDesbloqueadas: [
      "[✓] ELEGIBILIDAD LEGISLATIVA (Art. 48 CN): Cumplís el requisito constitucional para ser electo Diputado de la Nación.",
      "[✓] MANEJO DE DIETA Y ASESORES: Podés contratar hasta 12 asesores de bloque y canjear tramos aéreos por dinero.",
      "[✓] TABLERO DE RECINTO: Votación nominal (Afirmativo, Negativo, Abstención) y negociación de quórum."
    ],
    capacidadesBloqueadas: [
      "[X] Senador Nacional (Art. 55 CN): Requiere 30 años cumplidos.",
      "[X] Presidente de la Nación (Art. 89 CN): Requiere 30 años cumplidos."
    ]
  },
  sillon_rivadavia_senado: {
    id: "sillon_rivadavia_senado",
    rango: "30 a 69 Años",
    edadMin: 30,
    edadMax: 69,
    icono: "fa-solid fa-crown",
    titulo: "El Sillón de Rivadavia & Senado de la Nación",
    marcoLegal: "Arts. 55 y 89 de la Constitución Nacional (Piso de 30 años para Senador y Presidente)",
    faseVital: "Madurez de Poder / Ejercicio Ejecutivo Pleno",
    mecanicaSimulador: "El Sillón de Rivadavia: Habilitación total de la botonera ejecutiva: DNU, vetos, fondos reservados de la SIDE, coparticipación, decretos de Estado de Sitio y juicio político.",
    capacidadesDesbloqueadas: [
      "[✓] ELEGIBILIDAD EJECUTIVA Y SENADO (Arts. 55 y 89 CN): Habilitación plena para Presidente, Vicepresidente y Senador.",
      "[✓] BOTONERA NORMATIVA TOTAL: Emisión de Decretos de Necesidad y Urgencia (Art. 99 inc. 3 CN) y Vetos Presidenciales (Art. 83 CN).",
      "[✓] MANDO DEL ESTADO: Fondos reservados de la SIDE, designación de jueces por pliego y decretos de Estado de Sitio."
    ],
    capacidadesBloqueadas: [
      "[X] Prisión Domiciliaria automática por edad avanzada (Requiere 70 años cumplidos por Art. 10 CP / Art. 32 Ley 24.660).",
      "[X] Exención electoral de deber cívico por edad."
    ]
  },
  regimen_patriarca_domiciliaria: {
    id: "regimen_patriarca_domiciliaria",
    rango: "70+ Años",
    edadMin: 70,
    edadMax: 120,
    icono: "fa-solid fa-house-user",
    titulo: "El Régimen del Patriarca & Prisión Domiciliaria",
    marcoLegal: "Código Electoral Nacional (Voto optativo) + Art. 10 CP y Art. 32 Inc. d Ley 24.660",
    faseVital: "Vejez Patriarcal / El Gran Operador Tras Bambalinas",
    mecanicaSimulador: "El Régimen del Patriarca: Votás si querés. Si la Corte Suprema confirma tus condenas penales, tus abogados activan la prisión domiciliaria con pileta en tu quinta de 4 hectáreas con tobillera electrónica.",
    capacidadesDesbloqueadas: [
      "[✓] VOTO OPTATIVO POR EDAD: Sin obligación legal ni sanciones de padrón a partir de los 70 años.",
      "[✓] PRISIÓN DOMICILIARIA POR EDAD (Art. 10 CP / Art. 32 Ley 24.660): Solicitud de arresto domiciliario con tobillera en quinta privada.",
      "[✓] AUTORIDAD DE PATRIARCA: Influencia como oráculo político de consulta obligada para las nuevas generaciones."
    ],
    capacidadesBloqueadas: [
      "[X] Exención de muerte política biológica por desgaste arterial o senilidad avanzada."
    ]
  }
};

// =========================================================================
// 3E. DILEMAS DE HITOS CONSTITUCIONALES JUGABLES (16, 18, 25, 30 Y 70 AÑOS)
// =========================================================================
const DILEMAS_HITOS_LEGALES = [
  {
    id: "hito_16_anos",
    edadHito: 16,
    marcoLegal: "Ley 26.774 (Voto Joven) y Ley 22.278 (Régimen Penal Juvenil)",
    titulo: "A los 16 Años: El Hito del Voto Joven y la Toma del Colegio",
    situacion: "Es un año electoral presidencial. Rige la Ley 26.774: figurás en el padrón electoral, pero el voto es optativo. A la vez, el centro de estudiantes de tu colegio secundario vota tomar el establecimiento contra una reforma educativa.",
    opciones: [
      {
        id: "militante_base",
        nombreRol: "El Militante de Base",
        texto: "Liderás la toma del colegio, dormís en el aula magna y el domingo vas a votar con la boleta de tu espacio en el bolsillo.",
        impacto12Axes: { sindicalismo: 70, participacionPolitica: 65, institucionalidad: 35 },
        impactoTextual: "+20% Sindicalismo/Gremial | +15% Participación Política | El juez de menores te abre un acta tutelar.",
        actaTutelar: true,
        prontuario: "Acta tutelar de menores por ocupación pacífica de establecimiento educativo"
      },
      {
        id: "abstencion_cinica",
        nombreRol: "La Abstención Cínica",
        texto: "Te quedás en tu casa jugando a la computadora, no vas a votar aprovechando que no hay multas y criticás a los militantes en Twitter.",
        impacto12Axes: { libreMercado: 65, colectivismo: 40, antipolitica: 65 },
        impactoTextual: "+15% Anti-política / Libre Mercado | -10% Colectivismo | Cero prontuario.",
        actaTutelar: false,
        prontuario: null
      },
      {
        id: "rompehuelgas_orden",
        nombreRol: "El Rompehuelgas del Orden",
        texto: "Vas con un escribano a la puerta del colegio exigiendo entrar a estudiar, denunciás la usurpación y votás al candidato de 'mano dura'.",
        impacto12Axes: { ordenSeguridad: 75, institucionalidad: 70 },
        impactoTextual: "+25% Mano Dura en Eje 4 | +20% Institucionalidad | Te hacés viral como vocero del orden.",
        actaTutelar: false,
        prontuario: null,
        viralidad: true
      }
    ]
  },
  {
    id: "hito_18_anos",
    edadHito: 18,
    marcoLegal: "Art. 25 CCyC (Mayoría de edad plena) y Código Electoral Nacional",
    titulo: "A los 18 Años: La Mayoría de Edad y la Mesa de Votación",
    situacion: "Cumplís 18 años. Cesó la responsabilidad parental de tus viejos. El Correo Argentino te deja un telegrama bajo la puerta: fuiste designado Presidente de Mesa en una escuela del Conurbano o de la Capital Federal. Son las 17:30 hs. Faltan 30 minutos para cerrar los comicios. El fiscal del partido gobernante se te acerca con dos cafés y un fajo de billetes en la mano: 'Pibe, faltan boletas de la oposición en el cuarto oscuro pero nadie vino a reponerlas. Firmá el acta de escrutinio como viene, poné que no hubo impugnaciones y acá tenés una changa de $ 150.000 para el fin de semana.'",
    opciones: [
      {
        id: "firmar_acta_plata",
        nombreRol: "Firmar el Acta y Agarrar la Plata",
        texto: "Firmar el acta de escrutinio adulterada y embolsillar los $ 150.000 de changa barrani.",
        impacto12Axes: { pragmatismoMetodo: 80, institucionalidad: 30 },
        impactoTextual: "+30% Rosca Barrani / Pragmatismo en Eje 12 | +$ 150.000 de caja barrani | Te ganas el contacto de un puntero barrial.",
        cajaBarrani: 150000,
        contactoPuntero: true
      },
      {
        id: "impugnar_gendarmeria",
        nombreRol: "Impugnar la Mesa y Llamar a la Gendarmería",
        texto: "Parar los comicios, denunciar faltante de boletas ante el jefe de local de Gendarmería y labrar acta de impugnación.",
        impacto12Axes: { institucionalidad: 80, ordenSeguridad: 60 },
        impactoTextual: "+30% Institucionalismo Republicano en Eje 3 | El fiscal te espera a la salida para prepotearte en la vereda.",
        cajaBarrani: 0,
        aprieteFiscal: true
      },
      {
        id: "desentendido_camaleon",
        nombreRol: "Hacerte el Desentendido sin Agarrar Plata",
        texto: "Cerrar la urna con lo que hay sin convalidar truchadas explícitas ni aceptar la coima del fiscal.",
        impacto12Axes: { pragmatismoMetodo: 55, institucionalidad: 50 },
        impactoTextual: "+10% Camaleonismo | Cero costo personal.",
        cajaBarrani: 0
      }
    ]
  },
  {
    id: "hito_25_anos",
    edadHito: 25,
    marcoLegal: "Art. 48 de la Constitución Nacional (Piso de 25 años para Diputados)",
    titulo: "A los 25 Años: La Banca de Diputado Nacional y el Dilema del Quórum",
    situacion: "Cumplís el piso constitucional de 25 años. Tu padrino político te premia poniéndote en el puesto 6° de la lista sábana a Diputados Nacionales. Entrás al recinto. El oficialismo necesita exactamente 1 diputado para habilitar el quórum de una reforma laboral regresiva. Tu bloque vota en contra, pero el Ministro del Interior te llama al celular desde Pasos Perdidos: 'Diputado, si te sentás en tu banca y das quórum 5 minutos, te garantizamos $ 500 millones para el polideportivo de tu pueblo y el pase a planta permanente de 20 militantes tuyos.'",
    opciones: [
      {
        id: "dar_quorum_polideportivo",
        nombreRol: "Sentarte en la Banca y Dar Quórum",
        texto: "Ocupar la banca, clavar el número 129 de quórum y habilitar el debate a cambio de la obra territorial.",
        impacto12Axes: { pragmatismoMetodo: 75, centralismo: 60 },
        impactoTextual: "Tu bloque te tilda de traidor y te echa del interbloque; ganás caja territorial propia ($500M obra) y el gobierno te anota en su lista de aliados.",
        obrasTerritoriales: 500000000,
        expulsionBloque: true
      },
      {
        id: "caer_sesion_disciplina",
        nombreRol: "Quedarte en el Pasillo y Hacer Caer la Sesión",
        texto: "Apagar el celular en el pasillo, mantener la disciplina partidaria y dejar caer la sesión por falta de quórum.",
        impacto12Axes: { lealtadPartidaria: 80, institucionalidad: 65 },
        impactoTextual: "Mantenés la disciplina partidaria; el ministro te corta el teléfono y tu pueblo se queda sin obras.",
        obrasTerritoriales: 0,
        lealtadBloque: true
      },
      {
        id: "cuarto_intermedio_comision",
        nombreRol: "Pedir Cuarto Intermedio y Elevar el Peaje",
        texto: "Exigir que la obra empiece de inmediato y te otorguen la secretaría de la Comisión de Presupuesto antes de sentarte.",
        impacto12Axes: { roscaParlamentaria: 85, pragmatismoMetodo: 70 },
        impactoTextual: "+35% Rosca de pasillo | Ganás secretaría de comisión y obra financiada a mitad de precio.",
        obrasTerritoriales: 250000000,
        comisionSecretaria: true
      }
    ]
  },
  {
    id: "hito_30_anos",
    edadHito: 30,
    marcoLegal: "Arts. 55 y 89 de la Constitución Nacional (Habilitación Presidencial y Senado)",
    titulo: "A los 30 Años: La Habilitación del Sillón de Rivadavia",
    situacion: "Has alcanzado los 30 años de edad. Cumplís los requisitos de los Artículos 55 y 89 de la Constitución Nacional. La Presidencia de la Nación y la banca de Senador están formalmente desbloqueadas. Podés disputar el Poder Ejecutivo Nacional, comandar las FF.AA., emitir Decretos DNU y manejar los fondos reservados de la SIDE.",
    opciones: [
      {
        id: "lanzar_candidatura_presidencial",
        nombreRol: "Lanzar Candidatura Presidencial Propia",
        texto: "Rompés con los padrinos tradicionales y convocás a un acto masivo en la cancha de Ferro anunciando tu candidatura a Presidente de la Nación.",
        impacto12Axes: { caudillismo: 75, centralismo: 70 },
        impactoTextual: "Desafío total al statu quo: se habilita la carrera directa por el Sillón de Rivadavia y quedás en la mira de la SIDE y los monopolios de medios.",
        desbloqueoPresidencia: true
      },
      {
        id: "senador_fueros_provinciales",
        nombreRol: "Asegurar Banca de Senador Nacional",
        texto: "Competís por una banca de Senador en tu provincia para asegurarte 6 años de fueros constitucionales y control de la rosca federal.",
        impacto12Axes: { federalismo: 70, institucionalidad: 65 },
        impactoTextual: "Blindaje de fueros constitucionales (Arts. 68 y 69 CN) y asiento permanente en la mesa chica de los gobernadores.",
        desbloqueoSenado: true
      },
      {
        id: "liga_gobernadores_transversal",
        nombreRol: "Construir Liga de Mandatarios Transversales",
        texto: "Tejés alianzas con 8 gobernadores del interior para forzar una fórmula de consenso nacional en las PASO.",
        impacto12Axes: { pragmatismoMetodo: 75, roscaGobernadores: 80 },
        impactoTextual: "Consolidación de estructura territorial federal antes de desembarcar en Balcarce 50.",
        desbloqueoLiga: true
      }
    ]
  },
  {
    id: "hito_70_anos",
    edadHito: 70,
    marcoLegal: "Código Electoral Nacional (Voto optativo) + Art. 10 CP y Art. 32 Inc. d Ley 24.660",
    titulo: "A los 70 Años: El Voto Optativo y la Prisión Domiciliaria",
    situacion: "Tenés 71 años. Pasaron cuatro décadas desde tu inicio. Ya no tenés obligación de votar. Comodoro Py confirmó una condena a 6 años de prisión por administración fraudulenta durante tu presidencia. Tus abogados penalistas presentan un recurso formal amparándose en el Artículo 32, Inciso d, de la Ley 24.660 / Art. 10 del Código Penal.",
    opciones: [
      {
        id: "activar_domiciliaria_pileta",
        nombreRol: "Activar Prisión Domiciliaria con Pileta",
        texto: "Acatar la tobillera electrónica y cumplir la condena en tu quinta de 4 hectáreas con pileta, recibiendo a dirigentes para dar consejos de rosca.",
        impacto12Axes: { pragmatismoMetodo: 85, institucionalidad: 50 },
        impactoTextual: "Resolución exitosa: El juez concede la domiciliaria. Sos el Patriarca que maneja hilos desde el quincho con asado de fin de semana.",
        destinoFinal: "domiciliaria_pileta"
      },
      {
        id: "martir_ezeiza_vip",
        nombreRol: "Marcha al Pabellón VIP de Ezeiza como Mártir",
        texto: "Rechazar el beneficio, entregarte en Comodoro Py caminando con la frente en alto y publicar cartas desde el penal VIP de Ezeiza.",
        impacto12Axes: { caudillismo: 90, martirologio: 85 },
        impactoTextual: "Tu espacio político te proclama Prócer Perseguido y Preso Político; multitudes peregrinan a visitarte al penal.",
        destinoFinal: "martir_ezeiza"
      },
      {
        id: "asilo_diplomatico_exterior",
        nombreRol: "Pedir Asilo Diplomático en Embajada Aliada",
        texto: "Abordar un vuelo privado a Montevideo o Madrid antes de que la sentencia quede firme y gobernar la diáspora desde el exilio dorado.",
        impacto12Axes: { cosmopolitismo: 75, antiprogresismo: 50 },
        impactoTextual: "Exilio ilustre: Vivís entre conferencias internacionales y el asado con embajadores amigos sin pisar nunca un penal.",
        destinoFinal: "exilio_dorado"
      }
    ]
  }
];

// =========================================================================
// 3F. GENERADOR DE NOTIFICACIÓN DE ESTADO CÍVICO (MINISTERIO DEL INTERIOR)
// =========================================================================
function generarNotificacionEstadoCivico(personaje, edad, causasPenales) {
  const edadNum = Number(edad !== undefined ? edad : (personaje?.edad || 25));
  const nombre = personaje?.nombre || "Carlos 'El Vasco' Etchegoyen";
  const fecha = "10 de Octubre";

  let tramoKey = "cuna_jardin";
  if (edadNum >= 70) tramoKey = "regimen_patriarca_domiciliaria";
  else if (edadNum >= 30) tramoKey = "sillon_rivadavia_senado";
  else if (edadNum >= 25) tramoKey = "camara_baja_diputados";
  else if (edadNum >= 18) tramoKey = "mayoria_plena_militancia";
  else if (edadNum >= 16) tramoKey = "voto_joven_juvenil";
  else if (edadNum >= 13) tramoKey = "autonomia_medica";
  else if (edadNum >= 6) tramoKey = "primaria_club";

  const tramo = TRAMOS_DESBLOQUEO_LEGAL[tramoKey] || TRAMOS_DESBLOQUEO_LEGAL.camara_baja_diputados;
  const causas = Array.isArray(causasPenales) ? causasPenales : (personaje?.causasPenales || []);

  let causasTexto = [];
  if (causas.length === 0) {
    if (edadNum < 16) {
      causasTexto.push("  * Inimputabilidad absoluta por minoría de edad.");
    } else if (edadNum < 18) {
      causasTexto.push("  * 1 Expediente contravencional / acta tutelar de menores por toma escolar.");
      causasTexto.push("  * Régimen Penal Juvenil tutelar activo (Ley 22.278).");
    } else {
      causasTexto.push("  * 1 Expediente correccional por pintadas en la vía pública (abierto a los 19 años).");
      causasTexto.push("  * Imputabilidad plena activa: Comodoro Py monitorea tus declaraciones juradas.");
    }
  } else {
    causas.forEach(c => causasTexto.push(`  * ${typeof c === 'string' ? c : (c.caratula || c.titulo || 'Causa penal en trámite')}`));
  }

  const desbloqueadas = [...tramo.capacidadesDesbloqueadas];
  const bloqueadas = [...tramo.capacidadesBloqueadas];

  const fichaAscii = [
    "┌──────────────────────────────────────────────────────────────────────────────────────┐",
    "│                  MINISTERIO DEL INTERIOR - NOTIFICACIÓN DE ESTADO CÍVICO            │",
    "├──────────────────────────────────────────────────────────────────────────────────────┤",
    `│ CIUDADANO: ${nombre.padEnd(35, ' ')} | EDAD ALCANZADA: ${(edadNum + " Años").padEnd(10, ' ')} │`,
    `│ FECHA: ${fecha.padEnd(20, ' ')} | FASE VITAL: ${tramo.faseVital.padEnd(43, ' ')} │`,
    "├──────────────────────────────────────────────────────────────────────────────────────┤",
    "│ [NUEVAS CAPACIDADES JURÍDICAS Y POLÍTICAS DESBLOQUEADAS]:                           │",
    ...desbloqueadas.map(d => `│  ${d.padEnd(82, ' ')} │`),
    "│                                                                                      │",
    "│ [CAPACIDADES AÚN BLOQUEADAS POR LA CONSTITUCIÓN]:                                    │",
    ...bloqueadas.map(b => `│  ${b.padEnd(82, ' ')} │`),
    "├──────────────────────────────────────────────────────────────────────────────────────┤",
    "│ [TUS CAUSAS PENALES HASTA LA FECHA]:                                                 │",
    ...causasTexto.map(c => `│ ${c.padEnd(84, ' ')} │`),
    "└──────────────────────────────────────────────────────────────────────────────────────┘"
  ].join("\n");

  return {
    ciudadano: nombre,
    edadAlcanzada: edadNum,
    fecha,
    faseVital: tramo.faseVital,
    tramo,
    capacidadesDesbloqueadas: desbloqueadas,
    capacidadesBloqueadas: bloqueadas,
    causasPenales: causasTexto,
    fichaAscii
  };
}

function evaluarHitoDesbloqueoLegal(edadActual, edadPrevia = 0) {
  const hitos = [16, 18, 25, 30, 70];
  const cruzados = hitos.filter(h => edadPrevia < h && edadActual >= h);
  if (cruzados.length === 0) return null;
  const mayorHito = Math.max(...cruzados);
  return {
    hitoEdad: mayorHito,
    hitosCruzados: cruzados,
    dilemaHito: DILEMAS_HITOS_LEGALES.find(d => d.edadHito === mayorHito) || null
  };
}

// =========================================================================
// 4. DILEMAS DE CRECIMIENTO INFANTIL Y ADOLESCENTE (FASE CUNA: 15 Y 18 AÑOS)
// =========================================================================
const DILEMAS_CRECIMIENTO = [
  {
    id: "juv_15_anos",
    fase: "cuna",
    etapaBadge: "Fase 0: Adolescencia (15 Años)",
    area: "Iniciación Cívica & Calle",
    titulo: "¿En qué trinchera te curtís a los 15 años?",
    descripcion: "Tenés 15 años en una Argentina en crisis perpetua. La secundaria pública se cae a pedazos o el colegio privado es una burbuja. Llega el momento de tu primera decisión de calle.",
    explicacion: {
      queMide: "Vocación militante combativa vs. roce popular deportivo vs. pragmatismo financiero barrani.",
      siFavor: "Define tu afinidad ideológica inicial y tus lazos de lealtad generacionales.",
      siContra: "Cada camino te gana respeto en un nicho pero te cierra puertas en otro."
    },
    opciones: [
      {
        id: "centro_estudiantes",
        texto: "A) Meterte al Centro de Estudiantes y encabezar la toma del colegio exigiendo presupuesto edilicio y viandas dignas.",
        impacto12Axes: { institucionalidad: 35, estatismo: 20, valores: 30 },
        impactoSectores: { trabajo: +15, estadoCiencia: +15, seguridadJusticia: -15 },
        impactoMacro: {},
        impactoCriollo: { mechaSocial: +8 },
        impactoSalud: { coronarias: +5, paranoia: +5, seguridad: -5 }
      },
      {
        id: "inferiores_ascenso",
        texto: "B) Probarte en las inferiores de un club del ascenso (Chicago, Morón o Chacarita) bancando el barro y el vestuario pesado.",
        impacto12Axes: { valores: 60, seguridad: 40 },
        impactoSectores: { trabajo: +10, claseMedia: 0 },
        impactoMacro: {},
        impactoCriollo: { humorAfaScaloneta: +15 },
        impactoSalud: { coronarias: +10, paranoia: -5, seguridad: +5 }
      },
      {
        id: "cueva_colegio",
        texto: "C) Armar una cueva de dólares blue en el recreo de la escuela cobrándoles comisión a los profesores y compañeros.",
        impacto12Axes: { estatismo: 85, regulacion: 80, valores: 70 },
        impactoSectores: { productivo: +15, claseMedia: +10, trabajo: -10 },
        impactoMacro: { inflacionMensual: +0.1 },
        impactoCriollo: { dolarBlue: +25 },
        impactoSalud: { coronarias: 0, paranoia: +10, seguridad: 0 }
      }
    ]
  },

  {
    id: "juv_18_anos",
    fase: "cuna",
    etapaBadge: "Fase 0: Juventud (18 Años)",
    area: "Destino Profesional & Poder",
    titulo: "Cumplís 18 Años: La Puerta de Entrada al Sistema",
    descripcion: "Terminás el secundario con el país al borde de otra corrida cambiaria. Necesitás elegir tu trampolín para disputar el poder real.",
    explicacion: {
      queMide: "Rosca tribunalicia/académica vs. tecnocracia de mercado vs. fuerza de choque territorial.",
      siFavor: "Define tu inserción en el aparato del Estado o en el submundo de la militancia.",
      siContra: "Determina si tu carrera futura se apoya en expedientes, en planillas de Excel o en el asfalto."
    },
    opciones: [
      {
        id: "abogacia_uba",
        texto: "A) Estudiar Abogacía en la UBA: rosca en los pasillos de Figueroa Alcorta, pasantía ad-honorem en un juzgado federal y asambleas estudiantiles.",
        impacto12Axes: { institucionalidad: 50, valores: 40 },
        impactoSectores: { estadoCiencia: +15, seguridadJusticia: +10 },
        impactoMacro: {},
        impactoCriollo: { roscaGobernadores: +10 },
        impactoSalud: { coronarias: -5, paranoia: +10, seguridad: +5 }
      },
      {
        id: "economia_cema",
        texto: "B) Estudiar Economía en la UCA o Di Tella: pasantías en consultoras de la City, contactos con CEOs y armar planillas de Excel para el FMI.",
        impacto12Axes: { estatismo: 80, comercio: 85, regulacion: 75 },
        impactoSectores: { productivo: +20, frenteExterno: +15, trabajo: -15 },
        impactoMacro: { riesgoPais: -30 },
        impactoCriollo: { dolarBlue: -20 },
        impactoSalud: { coronarias: -2, paranoia: +5, seguridad: +10 }
      },
      {
        id: "paravalanchas_tribuna",
        texto: "C) Subirte al paravalanchas de la tribuna local: organizar los micros, manejar el negocio de los trapitos y hacerle los favores pesados al intendente.",
        impacto12Axes: { seguridad: 20, institucionalidad: 20, estatismo: 40 },
        impactoSectores: { trabajo: +15, seguridadJusticia: -20 },
        impactoMacro: {},
        impactoCriollo: { mechaSocial: +12, roscaGobernadores: +15 },
        impactoSalud: { coronarias: +5, paranoia: +20, seguridad: -15 }
      }
    ]
  }
];

// =========================================================================
// 5. DILEMA DE ASCENSO BISAGRA: LA VENTA DEL ALMA
// =========================================================================
const DILEMA_VENTA_ALMA = {
  id: "asc_lista_sabana_padrino",
  fase: "militante",
  etapaBadge: "Fase 1: Dilema Bisagra de Ascenso",
  area: "La Venta del Alma",
  titulo: "La Lista Sábana y el Padrino Político",
  descripcion: "El jefe del partido en tu distrito te cita a las 23:30 hs en una pizzería grasosa de Lanús. Tira la carpeta sobre la mesa grasienta con la lista de diputados cerrada para la medianoche. Te ofrece el 4° lugar (entrás seguro), pero con una condición innegociable.",
  explicacion: {
    queMide: "Sometimiento a la rosca del aparato vs. pureza testimonial solitaria vs. traición sanguinaria entre pares.",
    siFavor: "Te garantiza llegar al Congreso y blindarte, pagando peaje monetario y moral.",
    siContra: "Si rompés quedás afuera de todo; si traicionás te ganás un enemigo jurado de por vida."
  },
  opciones: [
    {
      id: "aceptar_paquete_completo",
      texto: "A) Aceptar el paquete completo: firmar pagarés en blanco por el 40% de tu sueldo de diputado para la caja del partido y aceptar como jefe de despacho al hijo del capo provincial (con 2 causas por estafa).",
      setFlags: { pacto_padrino: "aceptado" },
      impacto12Axes: { institucionalidad: 30, estatismo: 45 },
      impactoSectores: { trabajo: +10, claseMedia: -15, seguridadJusticia: -10 },
      impactoMacro: {},
      impactoCriollo: { roscaGobernadores: +25, mechaSocial: +5 },
      impactoSalud: { coronarias: -10, paranoia: +20, seguridad: +10 }
    },
    {
      id: "romper_armar_colectora",
      texto: "B) Romper el espacio y armar tu propio partido vecinal / colectora: salir a los gritos denunciando las mafias de la lista sábana y presentarte con un sello de goma de apuro.",
      setFlags: { pacto_padrino: "roto_colectora" },
      impacto12Axes: { institucionalidad: 85, valores: 50 },
      impactoSectores: { claseMedia: +20, trabajo: -15, productivo: -10 },
      impactoMacro: {},
      impactoCriollo: { roscaGobernadores: -35, mechaSocial: +10 },
      impactoSalud: { coronarias: -15, paranoia: +35, seguridad: -30 }
    },
    {
      id: "entregar_companero_militancia",
      texto: "C) Entregar a tu compañero de militancia de la facultad: salir a decir a la prensa que él recibió coimas de una constructora para quedarte con la banca; él jura destruirte como operador opositor por 20 años.",
      setFlags: { pacto_padrino: "traicion_amigo" },
      impacto12Axes: { institucionalidad: 25, seguridad: 40 },
      impactoSectores: { trabajo: +5, claseMedia: -10 },
      impactoMacro: {},
      impactoCriollo: { roscaGobernadores: +15 },
      impactoSalud: { coronarias: -5, paranoia: +40, seguridad: -10 }
    }
  ]
};

// =========================================================================
// 6. EL TABLERO DE RELACIONES: AMIGOS, INTERESADOS Y PELIGROSOS
// =========================================================================
const TABLERO_RELACIONES = {
  puntero_tano: {
    id: "puntero_tano",
    nombre: "El Tano",
    apodo: "El Puntero de Zona Sur",
    rol: "Manejo Territorial y Fiscales de Escuelas",
    icono: "fa-solid fa-people-group",
    avatarIcono: "fa-solid fa-people-group",
    territorio: "Tercera Sección Electoral (Lanús / Avellaneda / Quilmes)",
    beneficio: "Te llena 50 micros escolares para cualquier acto en Plaza de Mayo en 3 horas. Te garantiza el control y fiscalización blindada de 20 escuelas electorales (+8% votos protegidos).",
    costoOculto: "Te exige 80 contratos municipales para gente que no va a laburar y el manejo de los puestos de la feria barrial.",
    peligro: "Te exige 80 contratos municipales para gente que no va a laburar y el manejo de los puestos de la feria barrial. Si lo echás, te corta los accesos con gomas prendidas fuego.",
    riesgoExplosion: "Si lo desconocés, te corta el Puente Pueyrredón con gomas encendidas y te deja sin fiscales en el ballotage.",
    pactado: false,
    estado: "disponible", // 'disponible', 'pactado', 'rechazado', 'traicionado'
    fiscalesAportados: 15,
    costoRosca: +20,
    riesgoMechaSiRompe: +25,
    modificadoresPacto: {
      roscaGobernadores: +15,
      mechaSocial: -15,
      paranoia: +10,
      fiscales: +15
    },
    costoRuptura: {
      mechaSocial: +20,
      roscaGobernadores: -20,
      fiscales: -20
    }
  },

  financista_nico: {
    id: "financista_nico",
    nombre: "Nico",
    apodo: "El Financista de la City",
    rol: "Mesa de Dinero & Fondos Reservados",
    icono: "fa-solid fa-money-bill-trend-up",
    avatarIcono: "fa-solid fa-money-bill-trend-up",
    territorio: "Microcentro Porteño (San Martín y Reconquista)",
    beneficio: "Te fondea la campaña en efectivo con valijas sin registrar en ARCA. Te avisa 24 horas antes si los bancos preparan una corrida cambiaria para que cubras las reservas.",
    costoOculto: "Si llegás a un cargo ejecutivo, te pide información privilegiada sobre devaluaciones o letras del tesoro.",
    peligro: "Si llegás a un cargo ejecutivo, te pide información privilegiada sobre devaluaciones o letras del tesoro. Si te negás, te filtra las planillas de campaña en negro a la justicia federal.",
    riesgoExplosion: "Si no le das información de tasas, te filtra audios a los canales de noticias y te vacía las reservas del BCRA.",
    pactado: false,
    estado: "disponible",
    costoRosca: +15,
    riesgoMechaSiRompe: +15,
    modificadoresPacto: {
      dolarBlue: -150,
      reservasBCRA: +800,
      paranoia: +15
    },
    costoRuptura: {
      dolarBlue: +180,
      riesgoPais: +150,
      paranoia: +25
    }
  },

  comisario_bonaerense: {
    id: "comisario_bonaerense",
    nombre: "Comisario Mayor Ribas",
    apodo: "El Comisario de la Bonaerense",
    rol: "Cúpula Policial & Zona Liberada",
    icono: "fa-solid fa-shield-halved",
    avatarIcono: "fa-solid fa-shield-halved",
    territorio: "Jefatura Departamental Conurbano",
    beneficio: "Te frena los robos en tu municipio antes de las elecciones y te 'limpia' causas menores de tus familiares (choques alcoholizados, disturbios nocturnos).",
    costoOculto: "Te pide zona liberada para desarmaderos de autos y juego clandestino en galpones periféricos.",
    peligro: "Te pide zona liberada para desarmaderos de autos y juego clandestino. Si lo investigás con asuntos internos, un patrullero 'pierde' el rastro de sicarios que van a buscarte a tu casa.",
    riesgoExplosion: "Si le tocás las cajas negras, la seccional te libera la zona céntrica un viernes a la noche y desata una ola de asaltos.",
    pactado: false,
    estado: "disponible",
    costoRosca: +10,
    riesgoMechaSiRompe: +20,
    modificadoresPacto: {
      seguridad: +20,
      seguridadJusticia: +15,
      paranoia: +10
    },
    costoRuptura: {
      seguridad: -35,
      seguridadJusticia: -20
    }
  },

  barra_brava_club: {
    id: "barra_brava_club",
    nombre: "El Gordo Cacho",
    apodo: "El Jefe de la Barra Brava",
    rol: "Fuerza de Choque & Pintadas Callejeras",
    icono: "fa-solid fa-drum",
    avatarIcono: "fa-solid fa-drum",
    territorio: "Tribuna Popular de Club Grande / Ascenso",
    beneficio: "Mano de obra pesada para pintar paredes de madrugada, colgar pasacalles sobre los de tu rival y disolver asambleas de la oposición a empujones.",
    costoOculto: "Te exige el manejo exclusivo de los estacionamientos, el merchandising y los puestos de comida ambulante.",
    peligro: "Te exige el manejo exclusivo de los estacionamientos, el merchandising y la venta ambulante. Si hay un muerto en una interna de tribuna, tu teléfono es el primero que suena pidiendo cobertura judicial.",
    riesgoExplosion: "Si no le garantizás impunidad en una causa por lesiones, te escracha el búnker y te prende fuego los carteles partidarios.",
    pactado: false,
    estado: "disponible",
    costoRosca: +10,
    riesgoMechaSiRompe: +15,
    modificadoresPacto: {
      humorAfaScaloneta: +15,
      seguridad: +10,
      mechaSocial: -5
    },
    costoRuptura: {
      seguridad: -20,
      mechaSocial: +15
    }
  },

  operador_comodoro_py: {
    id: "operador_comodoro_py",
    nombre: "Dr. Ledesma",
    apodo: "El Operador de Comodoro Py",
    rol: "Pasillos de Tribunales Federales",
    icono: "fa-solid fa-scale-unbalanced",
    avatarIcono: "fa-solid fa-scale-unbalanced",
    territorio: "Retiro - Juzgados Federales de Comodoro Py",
    beneficio: "Duerme en un cajón cualquier denuncia penal por corrupción o malversación de fondos hasta que tus delitos prescriban definitivamente.",
    costoOculto: "Te cobra favores nombrando familiares en juzgados federales y te pide que impulses pliegos de jueces amigos afines a su estudio.",
    peligro: "Te cobra favores nombrando familiares en juzgados federales y te pide que impulses pliegos de jueces amigos. Si perdés poder, te reactiva la causa en feria judicial para quedar bien con el que viene.",
    riesgoExplosion: "Si le soltás la mano, te reactiva un procesamiento por enriquecimiento ilícito a tres días de una elección decisiva.",
    pactado: false,
    estado: "disponible",
    costoRosca: +25,
    riesgoMechaSiRompe: +10,
    modificadoresPacto: {
      paranoia: -20,
      roscaGobernadores: +15
    },
    costoRuptura: {
      paranoia: +35,
      claseMedia: -15
    }
  }
};

// =========================================================================
// 7. PELIGROS DE MUERTE DURANTE EL ASCENSO (MUERTES EN EL BARRO POLÍTICO)
// =========================================================================
const MUERTES_ASCENSO = {
  balacera_comite: {
    id: "balacera_comite",
    titulo: "La Balacera en la Salida del Comité",
    categoria: "ascenso_violento",
    icono: "fa-solid fa-gun",
    descripcionCorta: "Denunciaste complicidad policial con desarmaderos ilegales; moto sin patente te vacía el cargador en el auto.",
    relatoDetallado: "Sos un concejal joven que empezó a denunciar en los medios locales la complicidad entre la comisaría local y los galpones de autopartes ilegales del fondo del partido. Una noche de lluvia torrencial, cuando salías de la unidad básica a subirte a tu auto particular, dos tipos en una moto sin patente apagaron las luces, frenaron en seco a tres metros y te vaciaron un cargador entero en el parabrisas. Los peritos de la Bonaerense tardaron tres horas en acordonar la cuadra y las cámaras de seguridad del municipio justo sufrieron un microcorte.",
    placaCronica: "[PLACA ROJA] BALACERA EN EL COMITÉ: ACRIBILLARON A CONCEJAL A LA SALIDA DE LA UNIDAD BÁSICA",
    titularLaNacion: "Ataque sicario en el Conurbano: asesinan a balazos a un joven dirigente que denunciaba desarmaderos.",
    titularPagina12: "Crimen político y conmoción: exigen investigar a las bandas de autopartes y a la policía departamental.",
    epitafio: "Quiso limpiar la mafia de su barrio y la mafia le limpió el futuro político.",
    legadoPopular: "La esquina del comité se llenó de velas y un mural con su cara que los punteros tapan cada dos años."
  },

  ajuste_plata_campana: {
    id: "ajuste_plata_campana",
    titulo: "El Ajuste por Plata de Campaña No Devuelta",
    categoria: "ascenso_violento",
    icono: "fa-solid fa-handcuffs",
    descripcionCorta: "Le pediste 200.000 USD a un financista portuario prometiendo habilitar un puerto seco; perdiste por 200 votos y te cobraron la deuda.",
    relatoDetallado: "Para pelear la intendencia contra el cacique municipal que llevaba 16 años, le aceptaste 200.000 dólares en billetes termosellados a un financista turbio vinculado a los containers del puerto. Le juraste por tus hijos que si ganabas le habilitabas un puerto seco sin aduana. El domingo de elecciones perdiste por 208 votos en el recuento de mesas de la periferia. A las dos semanas, cuando volvías de cenar solo por la bajada de la autopista, te cruzaron dos camionetas oscuras. Tu teléfono se apagó para siempre y tu auto apareció quemado en un zanjón.",
    placaCronica: "[PLACA ROJA] AJUSTE DE CUENTAS: DESAPARECIÓ CANDIDATO TRAS PERDER LA INTENDENCIA POR 200 VOTOS",
    titularLaNacion: "Misterio por el paradero de un excandidato comunal: investigan deudas millonarias de campaña.",
    titularPagina12: "La sombra del dinero narco en la política: desesperada búsqueda de un dirigente local.",
    epitafio: "Prometió lo que no tenía a quienes nunca perdonan un pagaré.",
    legadoPopular: "En el pueblo nadie habla del caso en voz alta; el financista abrió tres concesionarias de autos importados."
  },

  susto_femoral: {
    id: "susto_femoral",
    titulo: "El Susto que se fue de las Manos (Tiro en la Femoral)",
    categoria: "ascenso_violento",
    icono: "fa-solid fa-kit-medical",
    descripcionCorta: "Tu socio político contrató marginales para pegarte un tiro en la pierna y bajarte de la lista; al sicario le tembló el pulso y acertó la femoral.",
    relatoDetallado: "Disputabas el primer lugar de la lista de diputados contra tu propio socio político. Para sacarte de la cancha sin generar un escándalo nacional, él contrató a dos marginales de la zona para que te pegaran un tiro en la pierna simulando un robo al voleo ('para que agarre reposo y baje la lista'). Pero el pistolero estaba drogado, le tembló el pulso al apretar el gatillo y el proyectil impactó de lleno en tu arteria femoral. Te desangraste en la vereda en menos de cinco minutos antes de que el móvil del SAME pudiera sortear el tránsito.",
    placaCronica: "[PLACA ROJA] LE QUISIERON ASUSTAR Y LO MATARON: FUEGO AMIGO EN LA INTERNA PARTIDARIA",
    titularLaNacion: "Tragedia en la interna oficialista: un intento de amedrentamiento terminó con la muerte del postulante.",
    titularPagina12: "Conmoción por la muerte de un candidato: investigan complicidad de su propio compañero de lista.",
    epitafio: "El fuego amigo no perdona: le encargaron una herida leve y le firmaron la sentencia de muerte.",
    legadoPopular: "El socio asumió la banca en el Congreso con traje negro y lágrimas falsas en el homenaje parlamentario."
  }
};

// =========================================================================
// 8. EL SISTEMA DE URNAS: EL DADO PONDERADO DE LAS ELECCIONES
// Voto Final = Piso Duro +- RNG + Modificadores Gestion (Voto Heladera) - Boletas Robadas
// =========================================================================
function simularEleccionConUrnas(motor, configOpciones = {}) {
  // 1. PISO DURO DE VOTANTES (Basado en la aprobación de sectores populares y productivos)
  const votoTrabajo = motor?.aprobacionSectores?.trabajo || 50;
  const votoClaseMedia = motor?.aprobacionSectores?.claseMedia || 50;
  const votoProductivo = motor?.aprobacionSectores?.productivo || 50;
  
  let pisoDuro = (votoTrabajo * 0.35) + (votoClaseMedia * 0.40) + (votoProductivo * 0.25);
  pisoDuro = Math.round(pisoDuro * 10) / 10;

  // 2. RNG: FACTOR CLIMA E INDECISOS (-3.5% a +3.5%)
  const rngClima = Math.round(((Math.random() * 7.0) - 3.5) * 10) / 10;

  // 3. EL "VOTO HELADERA" (Inflación última quincena)
  let modHeladera = 0;
  let motivoHeladera = "Estabilidad en los precios del último mes.";
  const inflacion = motor?.macroeconomia?.inflacionMensual || 4.2;

  if (inflacion < 3.0) {
    modHeladera = 3.0;
    motivoHeladera = "Baja inflación mensual y changas activas: el 'Voto Heladera' premia tu gestión (+3.0%).";
  } else if (inflacion <= 6.0) {
    modHeladera = 0.0;
    motivoHeladera = "Inflación moderada: efecto neutro en el changuito (0.0%).";
  } else if (inflacion <= 10.0) {
    modHeladera = -4.0;
    motivoHeladera = "Remarcaciones continuas en supermercados: bronca en las góndolas (-4.0%).";
  } else {
    modHeladera = -9.0;
    motivoHeladera = "Salarios pulverizados e hiperinflación: castigo masivo en las urnas (-9.0%).";
  }

  // 4. EL APARATO DE FISCALIZACIÓN Y ROBO DE BOLETAS
  // Si pactó con El Tano, forzó fiscales o rosca >= 70: blindaje de votos (+8%). Si no, robo de 4% a 9%.
  const tieneFiscales = configOpciones.forzarFiscales !== undefined
    ? Boolean(configOpciones.forzarFiscales)
    : Boolean(
        configOpciones.tieneFiscales ||
        (motor?.relaciones?.puntero_tano?.pactado === true) ||
        (motor?.relaciones?.puntero_tano?.estado === 'pactado') ||
        ((motor?.termometroCriollo?.roscaGobernadores || 0) >= 70)
      );

  let boletasRobadas = 0;
  let motivoFiscalizacion = "";

  if (tieneFiscales) {
    boletasRobadas = 0;
    motivoFiscalizacion = "Aparato de Fiscalización Aceitado: Se cuidó cada mesa escolar (+8% blindaje garantizado).";
  } else {
    // Te roban entre 4.0% y 9.0%
    boletasRobadas = configOpciones.boletasRobadas !== undefined
      ? configOpciones.boletasRobadas
      : Math.round((4.0 + (Math.random() * 5.0)) * 10) / 10;
    motivoFiscalizacion = `Sin fiscales en escuelas bravas del Conurbano: faltaron boletas en el cuarto oscuro y te robaron un ${boletasRobadas}% de votos.`;
  }

  // 5. EL ESCÁNDALO DE LA VEDA (EL CISNE NEGRO DEL JUEVES A 48 HS DE VOTAR)
  // Opciones: 'ignorar' (-3%), 'desmentir' (-6% si titubea o -1%), 'contraopereta' / 'contra_opereta' (+1% neto)
  let modVeda = 0;
  let motivoVeda = "Veda electoral tranquila sin operetas de última hora.";
  const respuestaVeda = configOpciones.respuestaVeda || 'ignorar';
  const huboEscandalo = configOpciones.huboEscandalo !== undefined ? configOpciones.huboEscandalo : true;

  if (huboEscandalo) {
    if (respuestaVeda === 'ignorar') {
      modVeda = -3.0;
      motivoVeda = "Ignoraste el audio filtrado: indignación de la clase media moralista (-3.0%).";
    } else if (respuestaVeda === 'desmentir') {
      const titubeo = configOpciones.forzarTitubeo !== undefined
        ? configOpciones.forzarTitubeo
        : (configOpciones.titubeo !== undefined ? configOpciones.titubeo : false);
      if (titubeo) {
        modVeda = -6.0;
        motivoVeda = "Saliste a desmentir a los gritos: se viralizó tu titubeo en streaming y canales opositores (-6.0%).";
      } else {
        modVeda = -1.0;
        motivoVeda = "Conferencia firme desmintiendo la opereta; contuviste la sangría (-1.0%).";
      }
    } else if (respuestaVeda === 'contraopereta' || respuestaVeda === 'contra_opereta') {
      modVeda = 1.0;
      motivoVeda = "Contra-opereta en el mismo minuto: embarraste la cancha y polarizaste la elección a tu favor (+1.0%).";
    }
  }

  // CÁLCULO FINAL DE URNAS
  let votoFinal = pisoDuro + rngClima + modHeladera + modVeda - (tieneFiscales ? 0 : boletasRobadas);
  votoFinal = Math.max(8.0, Math.min(68.0, Math.round(votoFinal * 10) / 10));

  // Opositor
  const segundoVotos = Math.max(25.0, Math.min(48.0, Math.round((100 - votoFinal - 10) * 10) / 10));
  const diferencia = Math.round((votoFinal - segundoVotos) * 10) / 10;

  // Regla Constitucional de Elección (Arts. 97 y 98 CN):
  // Gana si >= 45% o (>= 40% con diferencia > 10%)
  const ganaPrimeraVuelta = (votoFinal >= 45.0) || (votoFinal >= 40.0 && diferencia > 10.0);
  let esBalotaje = false;
  let ganaBalotaje = false;
  let votosBalotaje = 0;

  if (!ganaPrimeraVuelta) {
    esBalotaje = true;
    const factorBalotaje = ((motor?.aprobacionSectores?.seguridadJusticia || 50) * 0.2 + (motor?.aprobacionSectores?.estadoCiencia || 50) * 0.2);
    votosBalotaje = Math.round((votoFinal * 0.70 + factorBalotaje * 0.30 + 10) * 10) / 10;
    votosBalotaje = Math.min(65.0, Math.max(35.0, votosBalotaje));
    ganaBalotaje = votosBalotaje >= 50.0;
  }

  const ganoFinal = ganaPrimeraVuelta || ganaBalotaje;

  return {
    pisoDuro,
    rngClima,
    modHeladera,
    motivoHeladera,
    tieneFiscales,
    boletasRobadas,
    motivoFiscalizacion,
    modVeda,
    motivoVeda,
    votoFinal,
    segundoVotos,
    diferencia,
    ganaPrimeraVuelta,
    esBalotaje,
    votosBalotaje,
    ganaBalotaje,
    gano: ganoFinal
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ORIGENES_CUNA,
    CARGOS_BARRO,
    RANGOS_PRESIDENTE,
    DILEMAS_CRECIMIENTO,
    DILEMA_VENTA_ALMA,
    TABLERO_RELACIONES,
    MUERTES_ASCENSO,
    simularEleccionConUrnas,
    ATRIBUTOS_BASE_DEF,
    VIRTUDES_CRIOLLAS,
    DEFECTOS_CRIOLLOS,
    NOMBRES_DIRIGENTES_ARGENTINOS,
    generarFichaMatricularDirigente,
    TRAMOS_DESBLOQUEO_LEGAL,
    DILEMAS_HITOS_LEGALES,
    generarNotificacionEstadoCivico,
    evaluarHitoDesbloqueoLegal
  };
}

if (typeof window !== 'undefined') {
  window.ORIGENES_CUNA = ORIGENES_CUNA;
  window.CARGOS_BARRO = CARGOS_BARRO;
  window.RANGOS_PRESIDENTE = RANGOS_PRESIDENTE;
  window.DILEMAS_CRECIMIENTO = DILEMAS_CRECIMIENTO;
  window.DILEMA_VENTA_ALMA = DILEMA_VENTA_ALMA;
  window.TABLERO_RELACIONES = TABLERO_RELACIONES;
  window.MUERTES_ASCENSO = MUERTES_ASCENSO;
  window.simularEleccionConUrnas = simularEleccionConUrnas;
  window.ATRIBUTOS_BASE_DEF = ATRIBUTOS_BASE_DEF;
  window.VIRTUDES_CRIOLLAS = VIRTUDES_CRIOLLAS;
  window.DEFECTOS_CRIOLLOS = DEFECTOS_CRIOLLOS;
  window.NOMBRES_DIRIGENTES_ARGENTINOS = NOMBRES_DIRIGENTES_ARGENTINOS;
  window.generarFichaMatricularDirigente = generarFichaMatricularDirigente;
  window.TRAMOS_DESBLOQUEO_LEGAL = TRAMOS_DESBLOQUEO_LEGAL;
  window.DILEMAS_HITOS_LEGALES = DILEMAS_HITOS_LEGALES;
  window.generarNotificacionEstadoCivico = generarNotificacionEstadoCivico;
  window.evaluarHitoDesbloqueoLegal = evaluarHitoDesbloqueoLegal;
}

