// comodoro_py_justicia.js - Módulo de Expedientes Judiciales, Fauna de Comodoro Py, Fueros y Vida Carcelaria en Ezeiza

// =========================================================================
// 1. FASES PROCESALES DE UNA CAUSA EN COMODORO PY
// =========================================================================
const FASES_PROCESALES = {
  denuncia_mediatica: {
    id: "denuncia_mediatica",
    orden: 1,
    nombre: "Denuncia Testimonial / Mediática",
    subtitulo: "Carpeta de fotocopias en el prime time televisivo",
    icono: "fa-solid fa-file-lines",
    color: "slate",
    descripcion: "Un diputado opositor u ONG se sienta en un programa de TV de investigación con una carpeta de fotocopias anilladas. Si tenés alta popularidad, no pasa nada; si estás débil, un fiscal abre investigación de oficio.",
    impactoParanoia: +5,
    riesgoProcesal: 15
  },

  imputacion_inhibicion: {
    id: "imputacion_inhibicion",
    orden: 2,
    nombre: "Imputación e Inhibición General de Bienes",
    subtitulo: "Cuentas congeladas y prohibición de salida del país",
    icono: "fa-solid fa-handcuffs",
    color: "amber",
    descripcion: "El fiscal eleva el requerimiento de instrucción. El juez decreta la inhibición general de bienes, congela tus plazos fijos en pesos y notifica a Migraciones la prohibición de salir del país sin autorización previa.",
    impactoParanoia: +15,
    riesgoProcesal: 35
  },

  indagatoria_escalinatas: {
    id: "indagatoria_escalinatas",
    orden: 3,
    nombre: "El Llamado a Indagatoria",
    subtitulo: "Subir las escalinatas de Retiro bajo una lluvia de micrófonos",
    icono: "fa-solid fa-person-walking-dashed-line-arrow-right",
    color: "orange",
    descripcion: "El juez fija fecha de declaración indagatoria bajo apercibimiento de comparendo por la fuerza pública. Subís las escalinatas de Comodoro Py con micrófonos golpeándote los dientes y militantes en la puerta.",
    impactoParanoia: +25,
    riesgoProcesal: 55
  },

  procesamiento_simple: {
    id: "procesamiento_simple",
    orden: 4,
    nombre: "Procesamiento Simple",
    subtitulo: "Sin preventiva: a un paso del juicio oral pero en libertad",
    icono: "fa-solid fa-scale-unbalanced",
    color: "rose",
    descripcion: "El magistrado considera que hay elementos de convicción suficientes sobre tu responsabilidad. Embargo millonario sobre tus bienes pero continuás en libertad ambulatoria mientras apelas a la Cámara.",
    impactoParanoia: +30,
    riesgoProcesal: 70
  },

  procesamiento_preventiva: {
    id: "procesamiento_preventiva",
    orden: 5,
    nombre: "Procesamiento con Prisión Preventiva",
    subtitulo: "Doctrina de relaciones residuales de poder",
    icono: "fa-solid fa-dungeon",
    color: "red",
    descripcion: "El juez resuelve que conservás 'relaciones residuales de poder' suficientes para entorpecer la recolección de pruebas. Si no contás con fueros parlamentarios, salís esposado y con chaleco antibalas rumbo al penal.",
    impactoParanoia: +45,
    riesgoProcesal: 90
  },

  pedido_desafuero: {
    id: "pedido_desafuero",
    orden: 6,
    nombre: "Pedido de Desafuero en el Congreso",
    subtitulo: "Oficio judicial a las Cámaras para proceder a la detención",
    icono: "fa-solid fa-landmark-flag",
    color: "purple",
    descripcion: "El juez envía el exhorto formal al presidente de la Cámara solicitando la remoción inmediata de tus fueros parlamentarios (Arts. 68 y 69 CN) para hacer efectiva la prisión preventiva.",
    impactoParanoia: +40,
    riesgoProcesal: 85
  },

  juicio_oral_casacion: {
    id: "juicio_oral_casacion",
    orden: 7,
    nombre: "Juicio Oral en la Sala AMIA & Casación",
    subtitulo: "Años de audiencias los días martes y peritajes contables",
    icono: "fa-solid fa-gavel",
    color: "indigo",
    descripcion: "El Tribunal Oral Federal fija audiencias semanales con decenas de testigos, cuadernos peritados y alegatos transmitidos por YouTube. La última instancia de apelación previa a la Corte Suprema.",
    impactoParanoia: +35,
    riesgoProcesal: 80
  }
};

// =========================================================================
// 2. LA FAUNA DE COMODORO PY (LOS 4 ARQUETIPOS CLAVE)
// =========================================================================
const FAUNA_COMODORO_PY = {
  juez_garrochero: {
    id: "juez_garrochero",
    nombre: "Dr. Marcelo Garrido",
    apodo: "El Juez Garrochero ('El Doctor')",
    rol: "Juez Federal del Juzgado N° 14 de Retiro",
    icono: "fa-solid fa-scale-balanced",
    avatarIcono: "fa-solid fa-scale-balanced",
    descripcion: "Sobresee con velocidad récord al presidente en ejercicio y procesa con prisión preventiva al mandatario saliente apenas entrega el bastón. Calibra sus fallos según las encuestas de opinión y los resultados de las legislativas.",
    comoOpera: "Acelera o frena las fojas según la correlación de fuerzas políticas en el Consejo de la Magistratura.",
    monedaDeCambio: "Nombramientos de familiares en secretarías judiciales, contratos de locación y blindaje ante pedidos de juicio político.",
    tarifaRosca: 20
  },

  fiscal_halcon: {
    id: "fiscal_halcon",
    nombre: "Dr. Fernando Stornelli",
    apodo: "El Fiscal 'Halcón' Mediático",
    rol: "Fiscal Federal de Instrucción",
    icono: "fa-solid fa-bullhorn",
    avatarIcono: "fa-solid fa-bullhorn",
    descripcion: "Habla en off the record con periodistas de investigación los domingos a la tarde. Filtra fojas selladas a los canales de TV a las 20:00 hs para marcar la agenda de la semana y candidatearse a Procurador General.",
    comoOpera: "Usa el escándalo mediático y la presión pública para forzar al juez a dictar medidas de coerción y allanamientos.",
    monedaDeCambio: "Espacios de prime time en televisión abierta y respaldos diplomáticos de embajadas occidentales.",
    tarifaRosca: 15
  },

  operador_monje_negro: {
    id: "operador_monje_negro",
    nombre: "Dr. Guillermo 'El Negro' Ledesma",
    apodo: "El Operador Judicial ('El Monje Negro')",
    rol: "Mesa de Enlace entre la SIDE y los Camaristas",
    icono: "fa-solid fa-user-secret",
    avatarIcono: "fa-solid fa-user-secret",
    descripcion: "Exespía de la Secretaría de Inteligencia con estudio en Puerto Madero. Nunca firma un escrito procesal, pero cena en cantinas de Recoleta con los camaristas y define qué expedientes duermen en el cajón de archivo.",
    comoOpera: "Intercambia carpetazos de inteligencia, valijas de fondos reservados y presiones a jueces subrogantes.",
    monedaDeCambio: "Fondos reservados en efectivo, impunidad en causas patrimoniales cruzadas y designación de jueces subrogantes amigos.",
    tarifaRosca: 25
  },

  abogado_penalista_estrella: {
    id: "abogado_penalista_estrella",
    nombre: "Dr. Mariano Cúneo Fontán",
    apodo: "El Penalista Estrella",
    rol: "Defensor Particular de Figuras Públicas",
    icono: "fa-solid fa-briefcase",
    avatarIcono: "fa-solid fa-briefcase",
    descripcion: "Cobra 1.500 dólares la hora. Jamás discute si sos culpable o inocente: busca la nulidad de las pruebas, recusa magistrados por 'animosidad manifiesta' y dilata peritajes contables durante doce años hasta lograr la prescripción.",
    comoOpera: "Artillería de recursos de reposición, quejas ante Casación y nulidades procesales para ganar tiempo biológico.",
    monedaDeCambio: "Honorarios en dólares en cuentas del exterior y cartelera de clientes con alto perfil mediático.",
    tarifaRosca: 30
  }
};

// =========================================================================
// 3. DILEMAS PROCESALES JUDICIALES EXTREMOS
// =========================================================================
const DILEMAS_JUDICIALES = [
  {
    id: "jud_arrepentido_cuadernos",
    fase: "diputado",
    etapaBadge: "Comodoro Py • Escándalo de Corrupción",
    area: "Dilema Procesal: El Arrepentido",
    titulo: "El 'Arrepentido' de la Causa Cuadernos",
    descripcion: "Tu exsecretario privado y chofer histórico fue detenido a la madrugada y, tras pasar 72 horas incomunicado en una celda fría de la comisaría, pide acogerse a la Ley del Arrepentido. A cambio de no ir a un penal común, ofrece entregar dos pendrives con planillas de sobornos y señalar la caja de seguridad donde guardabas plata en efectivo no declarada.",
    explicacion: {
      queMide: "Guerra sucia mediática vs. coacción encubierta de testigos vs. épica de persecución popular.",
      siDeAcuerdo: "Define si enfrentás la causa con abogados y contra-operaciones o si te apoyás en la trinchera popular.",
      siEnContra: "Si fallás en frenar su testimonio, el fiscal pide tu prisión preventiva en 48 horas."
    },
    opciones: [
      {
        id: "guerra_sucia_testigo",
        texto: "A) Guerra sucia contra el testigo: filtrar fotos íntimas a medios afines, denunciar desequilibrio psiquiátrico y acusarlo de haberse robado él mismo el dinero.",
        impacto12Axes: { institucionalidad: 15, seguridad: 25 },
        impactoSectores: { seguridadJusticia: -15, claseMedia: -10 },
        impactoMacro: {},
        impactoCriollo: { mechaSocial: +8 },
        impactoSalud: { coronarias: -4, paranoia: +15, seguridad: -5 },
        impactoJudicial: {
          avanceCausa: +1,
          reaccionFiscal: "El fiscal lo toma como confirmación encubierta y pide indagatoria urgente.",
          estadoTestigo: "neutralizado_mediaticamente"
        }
      },
      {
        id: "comprar_silencio_familia",
        texto: "B) Comprar su silencio con un pacto de familia: enviar a tu abogado de confianza a ofrecerle jubilación de privilegio en el exterior y abogados pagos si se desdice ante el juez.",
        impacto12Axes: { institucionalidad: 10, estatismo: 40 },
        impactoSectores: { seguridadJusticia: -20, trabajo: -5 },
        impactoMacro: {},
        impactoCriollo: { roscaGobernadores: +10 },
        impactoSalud: { coronarias: -6, paranoia: +25, seguridad: 0 },
        impactoJudicial: {
          avanceCausa: 0,
          reaccionFiscal: "La fiscalía interviene el penal: sospechas de coacción de testigos.",
          estadoTestigo: "silenciado_bajo_pacto"
        }
      },
      {
        id: "descargo_publico_youtube",
        texto: "C) Descargo público épico en vivo: convocar a YouTube denunciando persecución del 'lawfare' y admitir que te traicionó un 'empleado infiel' que actuaba por su cuenta.",
        impacto12Axes: { institucionalidad: 45, valores: 35 },
        impactoSectores: { trabajo: +15, claseMedia: -15 },
        impactoMacro: {},
        impactoCriollo: { mechaSocial: +12, roscaGobernadores: -10 },
        impactoSalud: { coronarias: +5, paranoia: +10, seguridad: -10 },
        impactoJudicial: {
          avanceCausa: +1,
          reaccionFiscal: "Contuviste a tu núcleo duro, pero jurídicamente quedás desprotegido ante la prueba material.",
          estadoTestigo: "arrepentido_homologado"
        }
      }
    ]
  },

  {
    id: "jud_allanamiento_6am",
    fase: "presidente",
    etapaBadge: "Comodoro Py • Operativo Judicial",
    area: "Dilema Procesal: Allanamiento en Vivo",
    titulo: "El Allanamiento Sorpresa de las 6:00 AM",
    descripcion: "Diez camionetas de la Prefectura Naval y perros rastreadores de divisas de ARCA se apostan en la puerta de tu departamento en Recoleta (o tu quinta en Pilar) con una orden judicial de requisa y apertura de cajas fuertes. Hay dos móviles de televisión transmitiendo en directo desde la vereda con zócalos estridentes.",
    explicacion: {
      queMide: "Blindaje de inmunidad parlamentaria vs. colaboración y café vs. fuga diplomática internacional.",
      siDeAcuerdo: "Determina si defendés el domicilio con los fueros constitucionales o si evitás el show mediático.",
      siEnContra: "Una mala jugada te deja sin salida o filmado saliendo esposado en pijama."
    },
    opciones: [
      {
        id: "atrincherarse_fueros_domicilio",
        texto: "A) Atrincherarse invocando fueros constitucionales: no abrir la puerta, ordenar a tu custodia frenar a la fuerza pública y llamar a los gritos al presidente de la Cámara.",
        impacto12Axes: { institucionalidad: 20, seguridad: 25 },
        impactoSectores: { claseMedia: -20, seguridadJusticia: -15 },
        impactoMacro: {},
        impactoCriollo: { mechaSocial: +15 },
        impactoSalud: { coronarias: -8, paranoia: +20, seguridad: -5 },
        impactoJudicial: {
          avanceCausa: +1,
          reaccionJuez: "Ganaste 4 horas para triturar papeles confidenciales, pero las cámaras de TV transmitieron el bochorno en vivo.",
          resultadoAllanamiento: "papeles_destruidos"
        }
      },
      {
        id: "abrir_puerta_convidar_cafe",
        texto: "B) Abrir la puerta, convidar café y dar acceso total: mostrarte relajado, permitir que revisen hasta el lavarropas y hablar con los cronistas diciendo que 'el que nada debe, nada teme'.",
        impacto12Axes: { institucionalidad: 70, seguridad: 60 },
        impactoSectores: { claseMedia: +10, seguridadJusticia: +5 },
        impactoMacro: {},
        impactoCriollo: { mechaSocial: -5 },
        impactoSalud: { coronarias: +5, paranoia: +10, seguridad: +5 },
        impactoJudicial: {
          avanceCausa: 0,
          reaccionJuez: "Desactivaste el circo televisivo, pero si los perros hallan billetes termosellados vas a juicio oral directo.",
          resultadoAllanamiento: "inspeccion_tranquila"
        }
      },
      {
        id: "fuga_cochera_embajada",
        texto: "C) Fuga de urgencia por la cochera hacia una embajada aliada: escapar por el pulmón de manzana del edificio y solicitar asilo diplomático en una sede consular de la región.",
        impacto12Axes: { geopolitica: 80, institucionalidad: 10 },
        impactoSectores: { trabajo: -10, claseMedia: -25, frenteExterno: -20 },
        impactoMacro: { riesgoPais: +80 },
        impactoCriollo: { mechaSocial: +25, dolarBlue: +120 },
        impactoSalud: { coronarias: -15, paranoia: +40, seguridad: -30 },
        impactoJudicial: {
          avanceCausa: +2,
          reaccionJuez: "Evitaste la foto esposado en la alcaidía, pero tu carrera política nacional se terminó: quedás prófugo y asilado en el exterior.",
          resultadoAllanamiento: "asilo_diplomatico"
        }
      }
    ]
  }
];

// =========================================================================
// 4. EL EVENTO: PEDIDO DE DESAFUERO EN EL RECINTO (ARTS. 68 Y 69 CN)
// =========================================================================
const ESTRATEGIAS_DESAFUERO = {
  doctrina_pichetto: {
    id: "doctrina_pichetto",
    nombre: "La 'Doctrina Histórica' (Doctrina Pichetto)",
    subtitulo: "No desaforar sin sentencia firme de la Corte Suprema de Justicia",
    icono: "fa-solid fa-shield",
    descripcion: "Convencés a los senadores tradicionales y caudillos de que abrir la puerta al desafuero sin condena firme de la Corte sienta un precedente que mañana usarán contra ellos mismos.",
    costoRosca: 30,
    costoImagen: -15,
    requisitoVotos: "Mayoría especial de 2/3 para frenar el dictamen",
    resultadoExito: "Blindado por el Senado: el pedido se archiva en comisión. Los medios titulan 'EL PACTO DE IMPUNIDAD'. Continuás en libertad pero con costo electoral en la clase media.",
    resultadoFallo: "La oposición junta los 2/3 de los presentes con apoyo de traidores propios y aprueba el desafuero."
  },

  renuncia_martir: {
    id: "renuncia_martir",
    nombre: "Renuncia a los Fueros para Posar de Mártir",
    subtitulo: "Pedir la palabra y bajarse los fueros desafiando a 'la mafia judicial'",
    icono: "fa-solid fa-microphone-lines",
    descripcion: "Pedís la palabra en el recinto, denunciás al tribunal y renunciás a tus privilegios diciendo que 'no le tenés miedo a los jueces corruptos'. Apuesta a todo o nada.",
    costoRosca: 0,
    costoImagen: +20,
    requisitoVotos: "Ninguno (declaración unipersonal en el recinto)",
    resultadoExito: "Tu abogado presenta un hábeas corpus con fianza millonaria y zafás de la preventiva posando como el líder más valiente del país.",
    resultadoFallo: "El juez es implacable: la Policía de Seguridad Aeroportuaria te espera en el estacionamiento del Congreso y te traslada directamente a Ezeiza."
  },

  carpetazo_oposicion: {
    id: "carpetazo_oposicion",
    nombre: "Carpetear a la Oposición a Medianoche",
    subtitulo: "Filtrar audios comprometedores de los jefes de bloque opositores",
    icono: "fa-solid fa-tape",
    descripcion: "Mandás a tu operador de inteligencia a filtrar carpetas con escuchas y cuentas offshore de los presidentes de bloque rivales dos horas antes de iniciar la sesión.",
    costoRosca: 20,
    costoImagen: -5,
    requisitoVotos: "Romper el quórum de 129 diputados o 37 senadores",
    resultadoExito: "Gritos, sillazos e insultos en el recinto: la sesión se cae por falta de quórum a las 4 AM. El desafuero queda postergado indefinidamente.",
    resultadoFallo: "La filtración se toma como extorsión institucional agravada: se adelanta la votación por unanimidad en repudio."
  }
};

// =========================================================================
// 5. LA VIDA CARCELARIA EN EZEIZA: MÓDULO VIP / IRIC
// =========================================================================
const ACCIONES_EZEIZA = {
  hacerse_fuerte_penal: {
    id: "hacerse_fuerte_penal",
    nombre: "Hacerse Fuerte en el Pabellón VIP",
    subtitulo: "Organizar torneos de truco, asados en la celda y talleres doctrinarios",
    icono: "fa-solid fa-people-group",
    descripcion: "Te ganás el respeto del pabellón de políticos y empresarios. Cocinás guiso para todos, armás torneos de truco los sábados y dictás talleres de formación doctrinaria. Conducís la rosca política hacia afuera mediante celulares clandestinos.",
    beneficioMoral: +20,
    beneficioSeguridad: +15,
    costoSalud: -5,
    relato: "Sos el jefe político del módulo. Los guardiacárceles te piden autógrafos y los intendentes presos bajan la cabeza al verte pasar por el patio."
  },

  huelga_hambre_cidh: {
    id: "huelga_hambre_cidh",
    nombre: "Huelga de Hambre con Móviles de TV",
    subtitulo: "Negarte a comer y exigir la intervención de la Comisión Interamericana (CIDH)",
    icono: "fa-solid fa-bowl-food",
    descripcion: "Iniciás una huelga de hambre rigurosa ingiriendo únicamente mate cocido. Tu abogado convoca conferencias de prensa denunciando 'condiciones inhumanas y tortura psicológica', logrando una medida cautelar internacional.",
    beneficioMoral: +10,
    beneficioSeguridad: -10,
    costoSalud: -25,
    relato: "Las cámaras de televisión transmiten tus fotos desmejorado en camilla. La CIDH intima al gobierno nacional a garantizar tu integridad psicofísica."
  },

  certificado_medico_domiciliaria: {
    id: "certificado_medico_domiciliaria",
    nombre: "Certificado Médico para Prisión Domiciliaria",
    subtitulo: "Peritajes privados por hipertensión severa, claustrofobia y arritmia",
    icono: "fa-solid fa-house-medical",
    descripcion: "Contratás a un cuerpo médico forense privado que certifica que el ambiente carcelario agrava de forma letal tus coronarias. Solicitás la prisión domiciliaria con tobillera electrónica en tu quinta con piscina.",
    beneficioMoral: +30,
    beneficioSeguridad: +35,
    costoSalud: +15,
    relato: "El juez accede al informe médico y concede la prisión domiciliaria. Te trasladan en ambulancia a tu quinta; cumplís la preventiva en bata, con pileta y asados familiares mientras esperás que la causa prescriba."
  }
};

// =========================================================================
// 6. LOS TRES DESTINOS FINALES EN LA JUSTICIA ARGENTINA
// =========================================================================
const DESTINOS_JUDICIALES = {
  condena_firme: {
    id: "condena_firme",
    titulo: "La Condena Firme & Decomiso Total de Bienes",
    icono: "fa-solid fa-lock",
    color: "rose",
    descripcion: "La Corte Suprema de Justicia rechaza el recurso extraordinario federal (Art. 280 CPCCN). Te decomisan estancias en la Patagonia, departamentos en Puerto Madero y yates comprados a nombre de testaferros.",
    penal: "Cumplís 8 años de prisión efectiva en el penal de Ezeiza con inhabilitación perpetua para ejercer cargos públicos.",
    epitafioJudicial: "La justicia tardó diez años pero llegó con martillo de hierro: de Balcarce 50 al calabozo sin escalas."
  },

  fallo_madrugada: {
    id: "fallo_madrugada",
    titulo: "El 'Fallo de la Madrugada' (Sobreseimiento por Inconsistencia)",
    icono: "fa-solid fa-champagne-glasses",
    color: "emerald",
    descripcion: "Cambió el color político del gobierno nacional. Asume un mandatario afín, jubilan de urgencia al juez que te instruyó y la Cámara Federal anula todo lo actuado por 'vicios formales en la recolección de pruebas'.",
    penal: "Salís caminando de Comodoro Py con traje de seda italiano, causa cerrada sin costas y derecho a demandar al Estado por daños y perjuicios.",
    epitafioJudicial: "El viento político sopló a favor: la causa más pesada del siglo terminó archivada en una caja de cartón con humedad."
  },

  prescripcion_biologica: {
    id: "prescripcion_biologica",
    titulo: "La Prescripción Biológica (El Esquema Menem)",
    icono: "fa-solid fa-hourglass-end",
    color: "amber",
    descripcion: "El juicio oral duró 14 años; entre recusaciones de peritos, licencias médicas y recursos de queja, cumplís 85 años de edad sin sentencia firme. La Cámara de Casación declara la extinción de la acción penal.",
    penal: "Cerrás tu vida libre, impune y con tu jubilación de privilegio de expresidente depositada puntualmente todos los meses en el Banco Nación.",
    epitafioJudicial: "Le ganó a los jueces no con leyes, sino con el reloj de vida: murió libre en su estancia rodeado de parientes y herederos."
  }
};

// =========================================================================
// 7. MOTOR PROCESAL DE COMODORO PY
// =========================================================================
class SistemaComodoroPy {
  constructor() {
    this.faseActual = 'denuncia_mediatica';
    this.expedienteNum = "Causa N° 14.288/2026 - 'N.N. y Otros s/ Malversación y Asociación Ilícita'";
    this.caratula = "Defraudación a la Administración Pública y Lavado de Activos";
    this.juez = FAUNA_COMODORO_PY.juez_garrochero;
    this.fiscal = FAUNA_COMODORO_PY.fiscal_halcon;
    this.abogado = FAUNA_COMODORO_PY.abogado_penalista_estrella;
    this.fuerosActivos = true;
    this.inhibicionBienes = false;
    this.prisionPreventiva = false;
    this.enEzeiza = false;
    this.enDomiciliaria = false;
    this.aniosEnProceso = 1;
    this.fianzaMonto = 0;
    this.moralPabellon = 50;
    this.historialFases = ['denuncia_mediatica'];
    this.destinoFinal = null;
  }

  // Evalúa el avance del expediente según el 'Cajón Judicial' y el termómetro político
  evaluarAvance(motor) {
    if (this.destinoFinal) return this.destinoFinal;

    const mecha = motor?.termometroCriollo?.mechaSocial || 45;
    const rosca = motor?.termometroCriollo?.roscaGobernadores || 55;
    const tieneLedesma = motor?.relaciones?.operador_comodoro_py?.pactado || false;
    const mediaAprobacion = (
      (motor?.aprobacionSectores?.claseMedia || 50) +
      (motor?.aprobacionSectores?.trabajo || 50) +
      (motor?.aprobacionSectores?.productivo || 50)
    ) / 3;

    this.aniosEnProceso += 1;

    // 1. Si pactó con Ledesma y tiene alta rosca, la causa DUERME EN EL CAJÓN
    if (tieneLedesma && rosca >= 50) {
      if (this.aniosEnProceso >= 12) {
        this.destinoFinal = DESTINOS_JUDICIALES.prescripcion_biologica;
      }
      return {
        avance: 0,
        motivo: "El Dr. Ledesma mantuvo el expediente planchado en el cajón de secretaría: peritajes demorados 3 años."
      };
    }

    // 2. Si la imagen supera el 55%, el juzgado posterga por problemas de agenda
    if (mediaAprobacion >= 55) {
      return {
        avance: 0,
        motivo: "Alta popularidad en encuestas: el tribunal postergó las audiencias alegando sobrecarga procesal."
      };
    }

    // 3. Si la mecha social es alta o perdió caudal político, el juez DESEMPOLVA LA CAUSA
    if (mecha >= 70 || mediaAprobacion < 40) {
      return this.avanzarFaseProcesal(motor);
    }

    // 4. Si pasaron más de 12 años sin condena firme -> Esquema Menem
    if (this.aniosEnProceso >= 12 && !this.enEzeiza) {
      this.destinoFinal = DESTINOS_JUDICIALES.prescripcion_biologica;
      return {
        avance: 0,
        destino: this.destinoFinal,
        motivo: "Prescripción biológica: Casación dictaminó violación del plazo razonable de juzgamiento."
      };
    }

    return {
      avance: 0,
      motivo: "Causa en trámite regular en el tercer piso de Comodoro Py."
    };
  }

  avanzarFaseProcesal(motor) {
    const ordenFases = [
      'denuncia_mediatica',
      'imputacion_inhibicion',
      'indagatoria_escalinatas',
      'procesamiento_simple',
      'procesamiento_preventiva',
      'pedido_desafuero',
      'juicio_oral_casacion'
    ];

    const idxActual = ordenFases.indexOf(this.faseActual);
    if (idxActual < ordenFases.length - 1) {
      const nuevaFase = ordenFases[idxActual + 1];
      this.faseActual = nuevaFase;
      this.historialFases.push(nuevaFase);

      const fInfo = FASES_PROCESALES[nuevaFase];
      if (motor?.saludSupervivencia) {
        motor.saludSupervivencia.paranoia = Math.min(100, motor.saludSupervivencia.paranoia + (fInfo.impactoParanoia || 15));
      }

      if (nuevaFase === 'imputacion_inhibicion') {
        this.inhibicionBienes = true;
      } else if (nuevaFase === 'procesamiento_preventiva') {
        this.prisionPreventiva = true;
        if (!this.fuerosActivos) {
          this.enEzeiza = true;
        }
      }

      return {
        avance: +1,
        nuevaFase: fInfo,
        motivo: `El Juez desempolvó el expediente: avanzó a ${fInfo.nombre}.`
      };
    }

    // Si ya superó juicio oral y no zafó, evaluar condena firme
    if (this.faseActual === 'juicio_oral_casacion' && !this.destinoFinal) {
      this.destinoFinal = DESTINOS_JUDICIALES.condena_firme;
      this.enEzeiza = true;
      return {
        avance: +1,
        destino: this.destinoFinal,
        motivo: "Corte Suprema rechazó recurso: condena firme de 8 años en Ezeiza."
      };
    }

    return { avance: 0, motivo: "Fase procesal máxima alcanzada." };
  }

  resolverDesafuero(motor, estrategiaId = 'doctrina_pichetto') {
    const estr = ESTRATEGIAS_DESAFUERO[estrategiaId] || ESTRATEGIAS_DESAFUERO.doctrina_pichetto;
    const rosca = motor?.termometroCriollo?.roscaGobernadores || 50;

    let exito = false;
    let relato = "";

    if (estrategiaId === 'doctrina_pichetto') {
      // Éxito si la rosca con gobernadores y senadores supera 45
      exito = rosca >= 45;
      if (exito) {
        this.fuerosActivos = true;
        if (motor?.aprobacionSectores) {
          motor.aprobacionSectores.claseMedia = Math.max(5, motor.aprobacionSectores.claseMedia - 15);
        }
        relato = estr.resultadoExito;
      } else {
        this.fuerosActivos = false;
        this.enEzeiza = true;
        relato = estr.resultadoFallo;
      }
    } else if (estrategiaId === 'renuncia_martir') {
      this.fuerosActivos = false;
      // 50% de probabilidad de zafar con amparo
      const zafaConAmparo = Math.random() < 0.5 || (motor?.relaciones?.operador_comodoro_py?.pactado);
      if (zafaConAmparo) {
        exito = true;
        if (motor?.aprobacionSectores) {
          motor.aprobacionSectores.trabajo = Math.min(95, motor.aprobacionSectores.trabajo + 20);
        }
        relato = estr.resultadoExito;
      } else {
        exito = false;
        this.enEzeiza = true;
        relato = estr.resultadoFallo;
      }
    } else if (estrategiaId === 'carpetazo_oposicion') {
      // Éxito con costo de rosca
      exito = rosca >= 40;
      if (exito) {
        if (motor?.termometroCriollo) {
          motor.termometroCriollo.mechaSocial = Math.min(100, motor.termometroCriollo.mechaSocial + 10);
        }
        relato = estr.resultadoExito;
      } else {
        this.fuerosActivos = false;
        this.enEzeiza = true;
        relato = estr.resultadoFallo;
      }
    }

    return {
      estrategia: estr,
      exito: exito,
      fuerosActivos: this.fuerosActivos,
      enEzeiza: this.enEzeiza,
      relato: relato
    };
  }

  ejecutarAccionEzeiza(motor, accionId = 'hacerse_fuerte_penal') {
    const acc = ACCIONES_EZEIZA[accionId] || ACCIONES_EZEIZA.hacerse_fuerte_penal;

    this.moralPabellon = Math.min(100, Math.max(0, this.moralPabellon + acc.beneficioMoral));

    if (motor?.saludSupervivencia) {
      motor.saludSupervivencia.seguridad = Math.min(100, Math.max(0, motor.saludSupervivencia.seguridad + acc.beneficioSeguridad));
      motor.saludSupervivencia.coronarias = Math.min(100, Math.max(0, motor.saludSupervivencia.coronarias + acc.costoSalud));
    }

    if (accionId === 'certificado_medico_domiciliaria') {
      this.enDomiciliaria = true;
      this.enEzeiza = false;
    }

    return {
      accion: acc,
      enEzeiza: this.enEzeiza,
      enDomiciliaria: this.enDomiciliaria,
      moralPabellon: this.moralPabellon,
      relato: acc.relato
    };
  }

  obtenerResumen() {
    return {
      faseActual: this.faseActual,
      infoFase: FASES_PROCESALES[this.faseActual],
      expedienteNum: this.expedienteNum,
      caratula: this.caratula,
      juez: this.juez,
      fiscal: this.fiscal,
      abogado: this.abogado,
      fuerosActivos: this.fuerosActivos,
      inhibicionBienes: this.inhibicionBienes,
      prisionPreventiva: this.prisionPreventiva,
      enEzeiza: this.enEzeiza,
      enDomiciliaria: this.enDomiciliaria,
      aniosEnProceso: this.aniosEnProceso,
      moralPabellon: this.moralPabellon,
      destinoFinal: this.destinoFinal
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    FASES_PROCESALES,
    FAUNA_COMODORO_PY,
    DILEMAS_JUDICIALES,
    ESTRATEGIAS_DESAFUERO,
    ACCIONES_EZEIZA,
    DESTINOS_JUDICIALES,
    SistemaComodoroPy
  };
}
