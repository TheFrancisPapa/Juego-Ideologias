// salud_supervivencia.js - Módulo de Reloj de Vida, Desgaste del Sillón y Muertes Políticas Argentinas

const ARQUETIPOS_EDAD = {
  pibe_maravilla: {
    id: "pibe_maravilla",
    nombre: "El Pibe Maravilla (42 Años)",
    edadInicial: 42,
    descripcion: "Joven, enérgico y mediático. El corazón resiste las madrugadas, pero carece de la lealtad de los intendentes pesados y la SIDE te camina por la espalda.",
    coronarias: 95,
    paranoia: 10,
    seguridad: 50,
    roscaInicialMod: -10,
    avatarIcono: "fa-solid fa-bolt",
    badge: "Pibe Maravilla • 42 años"
  },
  maduro_carrera: {
    id: "maduro_carrera",
    nombre: "El Maduro de Carrera (55 Años)",
    edadInicial: 55,
    descripcion: "Equilibrio clásico de la política criolla. Dos décadas de rosca parlamentaria, arterias moderadamente castigadas por el café amargo y Clonazepam para conciliar el sueño.",
    coronarias: 75,
    paranoia: 30,
    seguridad: 65,
    roscaInicialMod: 0,
    avatarIcono: "fa-solid fa-briefcase",
    badge: "Maduro de Carrera • 55 años"
  },
  caudillo_historico: {
    id: "caudillo_historico",
    nombre: "El Caudillo Histórico (68 Años)",
    edadInicial: 68,
    descripcion: "Patriarca con cuatro elecciones en el lomo y gobernadores que le deben favores. Máxima cintura política, pero el cardiólogo vive con el desfibrilador a mano en Olivos.",
    coronarias: 52,
    paranoia: 58,
    seguridad: 80,
    roscaInicialMod: +15,
    avatarIcono: "fa-solid fa-landmark",
    badge: "Caudillo Histórico • 68 años"
  }
};

// =========================================================================
// 1. EL RELOJ VITAL: COEFICIENTE OLIVOS & ENVEJECIMIENTO ACELERADO
// Cada 7 días de juego = 1 año de edad biológica (Mandato de 4 años = 28 días)
// =========================================================================
const COEFICIENTE_OLIVOS = {
  llano_exilio: {
    id: "llano_exilio",
    nombre: "En el Llano / Exilio",
    multiplicador: 1.0,
    descripcion: "Envejecimiento biológico x 1.0 (Normal). Sin el protocolo asfixiante ni los aprietes de la City."
  },
  legislador: {
    id: "legislador",
    nombre: "Como Legislador",
    multiplicador: 1.2,
    descripcion: "Envejecimiento x 1.2: Café, tabaco en los pasillos y sesiones maratónicas de presupuesto."
  },
  presidente_paz: {
    id: "presidente_paz",
    nombre: "Como Presidente en Paz",
    multiplicador: 1.5,
    descripcion: "Envejecimiento x 1.5: Poco sueño, protocolo asfixiante y lapicera pesada."
  },
  presidente_crisis: {
    id: "presidente_crisis",
    nombre: "Presidente en Crisis",
    multiplicador: 2.5,
    descripcion: "Envejecimiento x 2.5: Hipertensión, pánico, corridas cambiarias, cacerolazos y saqueos."
  }
};

// =========================================================================
// 2. LAS 4 BARRAS DE FISIOLOGÍA POLÍTICA
// =========================================================================
const BARRAS_FISIOLOGICAS = {
  coronarias: {
    id: "coronarias",
    nombre: "Coronarias (Presión / Corazón)",
    icono: "fa-solid fa-heart-pulse",
    color: "text-rose-400",
    desgaste: "Corridas del dólar blue, cacerolazos en Olivos, sesiones maratónicas y gritos en reuniones de gabinete.",
    regenera: "Fin de semana de golf en Chapadmalal, bypass preventivo y renunciar al café negro.",
    consecuenciaCritica: "Infarto agudo de miocardio o ACV isquémico en vivo por cadena nacional."
  },
  digestivo: {
    id: "digestivo",
    nombre: "Aparato Digestivo (Hígado / Úlcera)",
    icono: "fa-solid fa-bacon",
    color: "text-amber-400",
    desgaste: "Dieta de campaña: sándwiches de miga secos, empanadas grasosas en unidades básicas, whisky a las 3 AM.",
    regenera: "Dieta estricta de arroz hervido, té de boldo y chef privado de comida orgánica.",
    consecuenciaCritica: "Hemorragia digestiva alta que exige internación de urgencia y transfusión de sangre."
  },
  cabeza: {
    id: "cabeza",
    nombre: "Cabeza y Neurología (Insomnio / Paranoia)",
    icono: "fa-solid fa-brain",
    color: "text-purple-400",
    desgaste: "Traiciones de ministros, filtraciones de la SIDE, encuestas en baja y falta crónica de sueño.",
    regenera: "Vacaciones desconectado sin teléfono celular y sesiones de terapia con analista leal.",
    consecuenciaCritica: "Brote paranoico o depresión clínica: ves conspiraciones en tus propios hijos y mozos."
  },
  vigorPublico: {
    id: "vigorPublico",
    nombre: "Vigor Público (Fuerza / Presencia)",
    icono: "fa-solid fa-person-walking",
    color: "text-emerald-400",
    desgaste: "Caminatas por el barro del conurbano, actos bajo la lluvia, viajes en aviones chicos con turbulencia.",
    regenera: "Tratamientos de células madre, kinesiología diaria y siesta sagrada de 40 minutos.",
    consecuenciaCritica: "Inmovilidad física: tenés que gobernar en silla de ruedas o mandar videos pregrabados."
  }
};

// =========================================================================
// 3. LAS 4 FASES BIOLÓGICAS DEL DIRIGENTE
// =========================================================================
const FASES_BIOLOGICAS_DIRIGENTE = {
  joven_promesa: {
    id: "joven_promesa",
    rango: "30 a 44 Años",
    titulo: "La Joven Promesa",
    edadMin: 30,
    edadMax: 44,
    icono: "fa-solid fa-bolt",
    ventajas: "Aguantás 72 horas sin dormir, caminás 20 cuadras de marcha sin agitarte y conectás con streamers y el voto joven.",
    vulnerabilidades: "Soberbia e inmadurez biológica. Ataques de pánico antes de salir al atril, Rivotril descontrolado y riesgo de burnout."
  },
  animal_raza: {
    id: "animal_raza",
    rango: "45 a 59 Años",
    titulo: "El Animal de Raza / Poder",
    edadMin: 45,
    edadMax: 59,
    icono: "fa-solid fa-briefcase",
    ventajas: "Punto de equilibrio óptimo: templanza, manejo de trampas del Estado y voz gastada con autoridad de mando.",
    vulnerabilidades: "Crisis de mediana edad: papada, canas teñidas a escondidas, panza de bodegón, primer stent en Otamendi y divorcios mediáticos."
  },
  caudillo_veterano: {
    id: "caudillo_veterano",
    rango: "60 a 74 Años",
    titulo: "El Caudillo Histórico",
    edadMin: 60,
    edadMax: 74,
    icono: "fa-solid fa-landmark",
    ventajas: "Respeto reverencial: nadie se atreve a levantarte la voz en el gabinete; tus silencios pesan más que un discurso de dos horas.",
    vulnerabilidades: "El cuerpo pasa factura: siesta de las 14:00 obligatoria, presión 18/11 si despertás sobresaltado, audífonos invisibles y lapsus de nombres en conferencias."
  },
  patriarca_eterno: {
    id: "patriarca_eterno",
    rango: "75 a 90+ Años",
    titulo: "El Patriarca Inmortal",
    edadMin: 75,
    edadMax: 120,
    icono: "fa-solid fa-crown",
    ventajas: "Inmunidad moral total: podés faltar seis meses al Congreso alegando cuadro gripal y la sociedad lo toma como algo natural.",
    vulnerabilidades: "Gobernar a control remoto: la lapicera tiembla al firmar decretos, sostén de custodios en los codos y el entorno íntimo firma decretos en tus horas de sueño profundo."
  }
};

// =========================================================================
// 4. LA UNIDAD MÉDICA PRESIDENCIAL (UMP): MÉDICOS DE CABECERA
// =========================================================================
const EQUIPO_UMP_MEDICOS = {
  cardenal_medicina: {
    id: "cardenal_medicina",
    nombre: "El Cardenal de la Medicina",
    institucion: "Eminencia de la Fundación Favaloro o el Hospital Británico",
    icono: "fa-solid fa-user-doctor",
    descripcion: "Te dice la verdad cruda en la cara. Exige reposo absoluto tras un pico de presión y no duda en internarte aunque caiga la Bolsa de Comercio.",
    rasgos: [
      "Te dice la verdad cruda en la cara.",
      "Te exige reposo absoluto tras un pico de presión.",
      "No duda en internarte aunque caiga la Bolsa."
    ],
    modificadorCoronarias: +12,
    modificadorRiesgoMercado: +15
  },
  doctor_militante: {
    id: "doctor_militante",
    nombre: "El Doctor Militante",
    institucion: "Tu amigo de la juventud / Médico del partido",
    icono: "fa-solid fa-stethoscope",
    descripcion: "Te oculta diagnósticos para que no te asustes. Te clava inyecciones de corticoides para salir al aire y falsifica el parte médico oficial para calmar a los mercados.",
    rasgos: [
      "Te oculta diagnósticos para que no te asustes.",
      "Te clava inyecciones de corticoides para salir al aire.",
      "Falsifica el parte médico oficial para calmar a los mercados."
    ],
    modificadorCoronarias: -8,
    modificadorRiesgoMercado: -15
  }
};

// =========================================================================
// EL DILEMA DEL QUIRÓFANO: ¿DÓNDE TE OPERÁS?
// =========================================================================
const DILEMAS_QUIROFANO = {
  hospital_publico: {
    id: "hospital_publico",
    nombre: "El Hospital Público (Argerich / Clínicas)",
    icono: "fa-solid fa-hospital",
    efectoPolitico: "Gesto de humildad y defensa de la salud pública; aplausos del progresismo y de la calle.",
    riesgoSanitario: "Instalaciones desbordadas, riesgo de corte de luz de Edesur en pleno posoperatorio y enfermeros mal pagos pueden filtrar fotos tuyas intubado a los medios por 5.000 dólares.",
    impacto: {
      coronarias: +25,
      mechaSocial: -10,
      riesgoFiltracion: 0.35,
      riesgoComplicacion: 0.20
    }
  },
  sanatorio_privado: {
    id: "sanatorio_privado",
    nombre: "El Sanatorio Privado de Élite (Otamendi / Los Arcos / Mater Dei)",
    icono: "fa-solid fa-square-h",
    efectoPolitico: "Crónica TV monta una guardia de 24 horas en la puerta y la oposición te tilda de burgués insensible que le escapa a los hospitales que desfinancia.",
    riesgoSanitario: "Tenés a los mejores cirujanos del continente y una suite presidencial blindada para recuperarte en secreto.",
    impacto: {
      coronarias: +45,
      mechaSocial: +5,
      riesgoFiltracion: 0.05,
      riesgoComplicacion: 0.05
    }
  },
  vuelo_sanitario_eeuu: {
    id: "vuelo_sanitario_eeuu",
    nombre: "El Vuelo Sanitario Clandestino a EE.UU. (Clínica Mayo / Houston)",
    icono: "fa-solid fa-plane-up",
    efectoPolitico: "Si la prensa descubre el despegue del Learjet sanitario, tu carrera política se termina por 'abandono de la patria'.",
    riesgoSanitario: "Salvás la vida con tecnología médica que no existe en el país.",
    impacto: {
      coronarias: +60,
      mechaSocial: +25,
      riesgoPais: +120,
      riesgoEscandalo: 0.45
    }
  }
};

// =========================================================================
// 5. CATÁLOGO DE ENFERMEDADES Y ADICCIONES DEL PODER
// =========================================================================
const CATALOGO_ENFERMEDADES_PODER = {
  colon_negociacion: {
    id: "colon_negociacion",
    nombre: "El Colon de la Negociación",
    icono: "fa-solid fa-toilet-paper",
    sintomas: "Gases, cólicos y acidez tras 8 horas encerrado con intendentes comiendo medialunas de manteca viejas.",
    efectoJuego: "Te obliga a salir del despacho cada 20 minutos; desgasta el aparato digestivo (-12%)."
  },
  sindrome_rivotril: {
    id: "sindrome_rivotril",
    nombre: "El Síndrome del Rivotril",
    icono: "fa-solid fa-pills",
    sintomas: "Dependencia química a las benzodiacepinas para dormir tras ver los números del INDEC.",
    efectoJuego: "Si no tomás la pastilla, las manos te tiemblan en los actos; eleva la dosis a 2.0 mg diarios."
  },
  arritmia_helicoptero: {
    id: "arritmia_helicoptero",
    nombre: "La Arritmia del Helicóptero",
    icono: "fa-solid fa-helicopter",
    sintomas: "Taquicardia paroxística que se activa cada vez que escuchás un ruido de aspas o ves una placa roja de Crónica TV en silencio en el televisor del living.",
    efectoJuego: "Pico de presión a 17/11 ante cacerolazos o corridas del dólar blue (-15% coronarias)."
  },
  paranoia_mozo: {
    id: "paranoia_mozo",
    nombre: "La Paranoia del Mozo",
    icono: "fa-solid fa-utensils",
    sintomas: "Rechazo a tomar agua o comer en Olivos si el plato no lo probó antes un secretario leal, por miedo a envenenamiento con sustancias indetectables.",
    efectoJuego: "Eleva la paranoia mental al 85%; desconfianza extrema en reuniones íntimas."
  },
  neumonia_corte_cinta: {
    id: "neumonia_corte_cinta",
    nombre: "La Neumonía del Corte de Cinta",
    icono: "fa-solid fa-head-side-cough",
    sintomas: "Bronquitis aguda con 39 grados de fiebre por viajar en camioneta descapotable en julio para inaugurar tres cuadras de asfalto en el conurbano bonaerense.",
    efectoJuego: "Inmoviliza el vigor físico al 40%; requiere reposo forzado con nebulizaciones en Olivos."
  }
};

// =========================================================================
// 6. OPCIONES DEL BRINDIS DE LA NOCHE (CUMPLEAÑOS Y CHEQUEO VITAL ANUAL)
// =========================================================================
const OPCIONES_BRINDIS_CUMPLEANOS = {
  asado_con_tropa: {
    id: "asado_con_tropa",
    titulo: "[EL ASADO CON LA TROPA]",
    descripcion: "Cenar cordero con 15 gobernadores y secretarios en el quincho de Olivos.",
    impacto: {
      roscaGobernadores: +10,
      coronarias: -12,
      digestivo: -15,
      colesterol: +25
    },
    relato: "Madrugada de cordero patagónico, mollejas y vino tinto de cosecha reservada. Los gobernadores te prometen fidelidad en el Senado, pero tus arterias sufren el peaje de los lípidos y la presión arterial."
  },
  chequeo_silencio: {
    id: "chequeo_silencio",
    titulo: "[EL CHEQUEO EN SILENCIO]",
    descripcion: "Internarte 24 horas en el Otamendi para una endoscopia y ecodoppler completo.",
    impacto: {
      coronarias: +15,
      digestivo: +12,
      dolarBlue: +15,
      titularPrensa: "MISTERIO POR LA SALUD DEL PRESIDENTE"
    },
    relato: "Ingresaste con nombre falso un sábado a las 06:00 AM. Tres cardiólogos calibraron tu medicación y descartaron un aneurisma. Sin embargo, en la City porteña corrió el rumor de que estabas sedado y el Blue saltó $15."
  },
  fiesta_vip_farandula: {
    id: "fiesta_vip_farandula",
    titulo: "[FIESTA ÍNTIMA CON MODELOS / FARÁNDULA]",
    descripcion: "Festejo VIP en la residencia de huéspedes con champagne importado y música lounge.",
    impacto: {
      cabeza: +20,
      vigorPublico: -6,
      chanceFiltracion: 0.40
    },
    relato: "Champagne francés y risas hasta las cinco de la mañana. Olvidaste la inflación y las encuestas por unas horas, pero un mozo contratado sacó fotos con su teléfono que ya se ofrecen a los portales de chimentos."
  }
};

// =========================================================================
// 7. BOTIQUÍN Y DECISIONES CLÍNICAS INMEDIATAS (DASHBOARD UMP)
// =========================================================================
const ACCIONES_BOTIQUIN_UMP = {
  subir_dosis: {
    id: "subir_dosis",
    nombre: "[SUBIR LA DOSIS]",
    descripcion: "Tomar 1 mg extra de ansiolítico para frenar la taquicardia antes del anuncio.",
    impacto: {
      coronarias: +8,
      vigorPublico: -6,
      dosisClonazepamDelta: +1.0,
      estresDelta: -18
    },
    relato: "El comprimido sublingual disuelve la opresión en el pecho en doce minutos. Salís al atril sereno y con pulso firme, aunque con una ligera pesadez en los párpados."
  },
  pedir_licencia: {
    id: "pedir_licencia",
    nombre: "[PEDIR LICENCIA]",
    descripcion: "Delegar el mando en el Vicepresidente por 48 horas para reposo médico estricto.",
    impacto: {
      coronarias: +18,
      digestivo: +14,
      cabeza: +16,
      vigorPublico: +12,
      roscaGobernadores: -10,
      estresDelta: -35
    },
    relato: "Te desconectás en la residencia de Chapadmalal respirando aire marítimo sin teléfono. Tu cuerpo revive, pero el Vicepresidente aprovecha tus 48 horas para armar rosca con la oposición en el Senado."
  },
  tapar_parte: {
    id: "tapar_parte",
    nombre: "[TAPAR EL PARTE]",
    descripcion: "Obligar al Director de la UMP a firmar que tu estado de salud es impecable.",
    impacto: {
      dolarBlue: -12,
      riesgoPais: -18,
      riesgoInfartoSilencioso: +15,
      estresDelta: +10
    },
    relato: "El vocero presidencial distribuye el parte oficial: 'El mandatario se encuentra en óptimo estado psicofísico'. Los mercados festejan la estabilidad, pero tus arterias siguen obstruidas y sin tratamiento."
  },
  cirugia_express: {
    id: "cirugia_express",
    nombre: "[CIRUGÍA EXPRESS]",
    descripcion: "Agendar angioplastia coronaria el sábado a las 05:00 AM para no alterar la agenda.",
    impacto: {
      coronarias: +28,
      vigorPublico: -10,
      obstruccionDelta: -30,
      estresDelta: -25
    },
    relato: "Cinco cirujanos de elite ingresan en una camioneta sin identificación. Te colocan un Stent coronario mientras el país duerme. A las 11:00 AM estás en Olivos firmando decretos con moretones en la muñeca."
  }
};

// =========================================================================
// CATÁLOGO DE MUERTES POLÍTICAS ARGENTINAS (CÓMO TE APAGAN LA TELE)
// =========================================================================
const CATALOGO_MUERTES = {
  // A. MUERTES BIOLÓGICAS POR ESTRÉS DEL PODER
  infarto_quincho_olivos: {
    id: "infarto_quincho_olivos",
    titulo: "El Infarto del Quincho de Olivos",
    categoria: "biologica",
    icono: "fa-solid fa-heart-crack",
    descripcionCorta: "Muerte súbita durante un partido dominical de paddle o fútbol con secretarios y un juez federal.",
    relatoDetallado: "Domingo 17:40 hs en la quinta de Olivos. Quisiste correr una pelota contra la pared para demostrarle al juez federal y al ministro de Economía que estabas entero a pesar de la devaluación. Sentiste una puntada ardiente en el esternón, un sabor metálico en la boca y caíste seco sobre el pasto sintético. Los mozos tiraron las bandejas de sándwiches de miga y el médico de guardia intentó maniobras de RCP durante 18 minutos sin éxito. Crónica TV puso la placa roja con sirena antes de que la ambulancia cruzara el portón de la avenida Maipú.",
    placaCronica: "[PLACA ROJA] INFARTO EN OLIVOS: CAYÓ SECO EN EL SEGUNDO SET // CONMOCIÓN NACIONAL",
    titularLaNacion: "Falleció el primer mandatario: paro cardiorrespiratorio en Olivos e incertidumbre en la apertura de los mercados.",
    titularPagina12: "Dolor popular en la residencia presidencial: se apagó el corazón de quien condujo los destinos de la patria.",
    epitafio: "Murió con las zapatillas puestas queriendo demostrar que el poder no cansa.",
    legadoPopular: "El club de su barrio le puso su nombre a la cancha de paddle; sus ministros se pelearon por la herencia en el velatorio."
  },

  acv_sesion_maratonica: {
    id: "acv_sesion_maratonica",
    titulo: "El ACV de la Sesión Maratónica",
    categoria: "biologica",
    icono: "fa-solid fa-brain",
    descripcionCorta: "Colapso arterial cerebral tras 14 horas de debate presupuestario y traición de gobernadores aliados.",
    relatoDetallado: "Madrugada de un 29 de diciembre sofocante en el Congreso de la Nación. Tras catorce horas ininterrumpidas de negociaciones con senadores que pedían fondos coparticipables, cuatro gobernadores aliados cambiaron su voto a último minuto. Entre humo de cigarrillos a escondidas, tres tazas de café frío y gritos desaforados de la oposición, sentiste un zumbido ensordecedor y la mitad del cuerpo se te durmió en vivo ante las cámaras de Diputados TV. El desmayo sobre el estrado paralizó la votación y el helicóptero sanitario no llegó a tiempo.",
    placaCronica: "[PLACA ROJA] COLAPSO EN EL SENADO: LE DIO UN ACV EN VIVO DISCUTIENDO EL PRESUPUESTO",
    titularLaNacion: "Crisis institucional en el Congreso: el mandatario colapsó durante el debate de la ley económica.",
    titularPagina12: "La traición de los gobernadores le costó la vida al líder: vigilia y lágrimas frente al Palacio Legislativo.",
    epitafio: "Lo mató una planilla de Excel y cuatro votos provinciales que se vendieron por una obra pública.",
    legadoPopular: "El Congreso suspendió la sesión durante tres días; los traidores votaron el presupuesto con el sucesor al lunes siguiente."
  },

  complicacion_quirurgica: {
    id: "complicacion_quirurgica",
    titulo: "La Complicación Quirúrgica Sospechosa",
    categoria: "biologica",
    icono: "fa-solid fa-hospital-user",
    descripcionCorta: "Cirugía menor programada en Recoleta interrumpida por un apagón de red o una bacteria intrahospitalaria inexplicable.",
    relatoDetallado: "Te internaste un sábado por la mañana con nombre ficticio en una suite del Sanatorio Otamendi para una intervención de pólipos de rutina que no debía durar más de 40 minutos. A mitad del procedimiento, un corte masivo de suministro eléctrico en Recoleta dejó sin energía a los generadores de emergencia durante doce minutos críticos, o bien una cepa bacteriana resistente de origen desconocido desató una sepsis fulminante. El vocero presidencial tartamudeó tres veces en la sala de prensa antes de anunciar que el corazón del líder no resistió el postoperatorio.",
    placaCronica: "[PLACA ROJA] QUIRÓFANO A OSCURAS: NO RESISTIÓ LA ANESTESIA EN SANATORIO PRIVADO",
    titularLaNacion: "Tragedia médica en Recoleta: una falla multiorgánica apagó la vida del jefe de Estado.",
    titularPagina12: "Sospechas y dolor: exigen investigar la clínica privada tras la muerte repentina del mandatario.",
    epitafio: "Buscaba arreglarse la vesícula para encarar la reelección y se quedó en la camilla.",
    legadoPopular: "La clínica clausuró el quirófano por seis meses y las pericias toxicológicas quedaron archivadas en un juzgado federal."
  },

  // B. LOS "ACCIDENTES" Y LA MANO NEGRA
  learjet_tormenta_litoral: {
    id: "learjet_tormenta_litoral",
    titulo: "El Learjet en la Tormenta del Litoral",
    categoria: "accidente",
    icono: "fa-solid fa-plane-slash",
    descripcionCorta: "Avioneta privada prestada por un contratista de obra pública perdida sobre los esteros en una noche de tormenta.",
    relatoDetallado: "Viernes por la noche. Había un frente de tormenta eléctrica severo sobre Santa Fe y Corrientes, pero la desesperación por cerrar el acto de campaña con los intendentes del Litoral te hizo ordenar el despegue en un Learjet 35 prestado por un empresario constructor que cobraba peajes viales. El radar meteorológico de a bordo venía reportando fallas, el copiloto era un amigo del ministro de Obras Públicas y la avioneta desapareció de los monitores de Ezeiza a las 22:14 hs sobre los esteros de un campo de soja. Tres días de rastrillaje militar para encontrar los restos de la turbina.",
    placaCronica: "[PLACA ROJA] CAYÓ LA AVIONETA DEL PRESIDENTE EN LOS ESTEROS // NO HAY SOBREVIVIENTES",
    titularLaNacion: "Tragedia aérea en el Litoral: investigan el plan de vuelo y los vínculos con el contratista del avión.",
    titularPagina12: "Conmoción nacional: cayó la aeronave presidencial en medio de un temporal feroz.",
    epitafio: "La urgencia de un acto político valió más que la advertencia del Servicio Meteorológico Nacional.",
    legadoPopular: "Una rotonda en la Ruta 11 lleva su nombre; el empresario del avión cobró el seguro y siguió licitando con el vice."
  },

  helicoptero_estancia: {
    id: "helicoptero_estancia",
    titulo: "El Helicóptero en la Estancia",
    categoria: "accidente",
    icono: "fa-solid fa-helicopter",
    descripcionCorta: "Accidente aéreo de baja altura sobre un río rural al enganchar un tendido de alta tensión no señalizado.",
    relatoDetallado: "Ibas rumbo a un asado campestre en la estancia de un influyente gobernador del interior para sellar la fórmula presidencial del año entrante. El Bell 407 sobrevolaba un brazo del río a baja altura cuando una ráfaga cruzada enganchó el rotor de cola con un cable de alta tensión que no figuraba en las cartas de navegación de la Fuerza Aérea. El helicóptero giró sobre su propio eje y se precipitó en picada sobre el agua. Nunca se pudo determinar con certeza si el piloto intentó una maniobra imprudente o si alguien aflojó una tuerca clave en el hangar de San Fernando.",
    placaCronica: "[PLACA ROJA] HELICÓPTERO PRESIDENCIAL CAYÓ EN EL RÍO: ¿ACCIDENTE O SABOTAJE?",
    titularLaNacion: "Fatídico siniestro aéreo en el interior: peritos analizan las causas del impacto del helicóptero.",
    titularPagina12: "Misterio y luto: el mandatario perdió la vida camino a un encuentro con gobernadores.",
    epitafio: "A dos metros del agua y con los teléfonos intervenidos, nadie escuchó el último grito de auxilio.",
    legadoPopular: "Se tejieron siete teorías conspirativas de sobremesa que todavía llenan horas de streaming en YouTube."
  },

  intoxicacion_bodegon: {
    id: "intoxicacion_bodegon",
    titulo: "La Intoxicación en el Bodegón",
    categoria: "accidente",
    icono: "fa-solid fa-skull-crossbones",
    descripcionCorta: "Almuerzo clandestino con los caciques del transporte que termina en coma hepático fulminante en 48 horas.",
    relatoDetallado: "Almuerzo secreto en el reservado de una cantina histórica de Barracas para destrabar una amenaza de paro por tiempo indeterminado de la UTA y Camioneros. Te sirvieron una fuente de mollejas al verdeo y un vino tinto de cosecha reservada que tenía un retrogusto ligeramente dulzón. A las seis horas empezaste con mareos y sudoración fría; a las 48 horas ingresaste en coma hepático irreversible en el Hospital Alemán. El frasco de muestra toxicológica y las grabaciones de seguridad del bodegón desaparecieron misteriosamente mientras la Policía de la Ciudad custodiaba la puerta.",
    placaCronica: "[PLACA ROJA] COMA HEPÁTICO TRAS ASADO SINDICAL: LAS PERICIAS SE PERDIERON EN LA COMISARÍA",
    titularLaNacion: "Inesperado deceso del mandatario: hermetismo absoluto en torno al parte médico toxicológico.",
    titularPagina12: "La sombra de un crimen político: exigen esclarecer la intoxicación del presidente.",
    epitafio: "Pensó que se comía a los sindicatos y los caciques le cobraron el menú completo.",
    legadoPopular: "El bodegón fue clausurado y reabierto dos años después como cervecería artesanal."
  },

  // C. EL ATENTADO DIRECTO Y EL DESMADRE DE SEGURIDAD
  falla_custodia_multitud: {
    id: "falla_custodia_multitud",
    titulo: "La Falla de la Custodia en la Multitud",
    categoria: "atentado",
    icono: "fa-solid fa-person-rifle",
    descripcionCorta: "Ataque cuerpo a cuerpo al bajarse del blindado en un acto popular con la policía mirando el teléfono celular.",
    relatoDetallado: "La euforia de la multitud en una esquina populosa de La Matanza te empujó a desoír el protocolo de la Casa Militar. Bajaste del Audi blindado para abrazar a una doña con un cartel de agradecimiento. El cordón de la Policía Federal estaba descoordinado, dos custodios miraban las notificaciones de WhatsApp y un solitario con la mirada desencajada se filtró entre los bombos y las banderas de satén con un objeto punzocortante. Cuando los agentes reaccionaron ya estabas en el suelo con la camisa empapada de sangre. El traslado al hospital duró 25 minutos eternos por calles cortadas por los propios micros de la militancia.",
    placaCronica: "[PLACA ROJA] ATENTADO EN VIVO EN LA MATANZA: CUSTODIA DESBORDADA // EL PAÍS EN SHOCK",
    titularLaNacion: "Magnicidio en el Conurbano: fallas extremas en la seguridad del presidente durante un acto proselitista.",
    titularPagina12: "Magnicidio popular: la violencia política segó la vida del conductor en medio de su pueblo.",
    epitafio: "La vanidad de un baño de masas sin chaleco antibalas le costó el mandato y la existencia.",
    legadoPopular: "Una estación de tren del Belgrano Sur fue rebautizada con su nombre y el custodio fue trasladado a Paso de los Libres."
  },

  nismaneo_bano: {
    id: "nismaneo_bano",
    titulo: "El 'Nismaneo' en el Departamento Privado",
    categoria: "atentado",
    icono: "fa-solid fa-door-closed",
    descripcionCorta: "Aparición sin vida dentro del baño de un departamento privado tras chocar a muerte con los espías de la SIDE.",
    relatoDetallado: "Habías firmado un decreto para auditar los fondos reservados de la Secretaría de Inteligencia y abrir los archivos del contrabando en la Aduana. El domingo por la noche decidiste dormir en tu piso privado de Puerto Madero sin la escolta oficial. El custodio apostado en la planta baja declaró que 'había bajado a comprar empanadas'. A las 8:30 del lunes, la mucama encontró la puerta del baño trabada por dentro, un arma calibre .22 en el suelo y una carta mecanografiada que tus familiares juran que jamás escribiste. Los peritos de la Prefectura pisaron la escena sin botas protectoras y limpiaron las manchas de la alfombra con toallas de mano.",
    placaCronica: "[PLACA ROJA] APARECIÓ MUERTO EN EL BAÑO DE PUERTO MADERO: CUSTODIO FUE POR EMPANADAS",
    titularLaNacion: "Muerte del presidente: la hipótesis del suicidio choca con la denuncia de la familia y los servicios.",
    titularPagina12: "El poder de las cloacas: apuntan a los servicios de inteligencia por la muerte del mandatario.",
    epitafio: "Se metió en el sótano del espionaje criollo y las cloacas le devolvieron el saludo.",
    legadoPopular: "El caso pasó por doce jueces federales, cuatro peritajes contradictorios y dos documentales de Netflix."
  },

  emboscada_autopista: {
    id: "emboscada_autopista",
    titulo: "La Emboscada en la Autopista",
    categoria: "atentado",
    icono: "fa-solid fa-car-burst",
    descripcionCorta: "Ataque tipo comando de dos autos sin patente en la Autopista Riccheri durante un traslado clandestino.",
    relatoDetallado: "Madrugada de neblina en la Riccheri a la altura de Ezeiza. Ibas en un vehículo discreto sin balizas ni sirenas hacia una quinta secreta para negociar un salvataje de emergencia con los dueños de los tres bancos más grandes de la City. Dos camionetas 4x4 sin patentes y con vidrios polarizados encerraron tu vehículo de costado, lo sacaron al guardarraíl y desataron una ráfaga de fuego cruzado durante 45 segundos implacables. Para cuando el primer patrullero de la Bonaerense llegó al peaje, los atacantes ya se habían esfumado por los caminos de tierra de La Matanza.",
    placaCronica: "[PLACA ROJA] TIROTEO COMANDO EN LA RICCHERI: EMBOSCARON LA COMITIVA EN LA NEBLINA",
    titularLaNacion: "Ataque letal en la autopista: golpe comando contra el automóvil del jefe de Estado.",
    titularPagina12: "Atentado narco-financiero en la autopista: conmoción por el asesinato del presidente.",
    epitafio: "Pensó que podía reunirse a solas con los dueños del dinero sin que nadie le cuidara la espalda.",
    legadoPopular: "El peaje donde ocurrió el tiroteo fue bautizado con flores y crespones negros durante una década."
  },

  // D. LA VICTORIA DEFINITIVA: MORIR DE VIEJO CON FUEROS (EL FINAL MENEM)
  patriarca_inmortal: {
    id: "patriarca_inmortal",
    titulo: "El Patriarca Inmortal (El Final Menem)",
    categoria: "inmortal_con_fueros",
    icono: "fa-solid fa-crown",
    descripcionCorta: "La consagración suprema del político argentino: morís a los 93 años en una suite de Los Arcos, con fueros de Senador Vitalicio y causas prescriptas.",
    relatoDetallado: "Navegaste tres presidencias, dos hiperinflaciones, tres devaluaciones y cinco quiebras del Estado sin que te rozara una bala. Cuando la marea cambió, te hiciste elegir Senador Nacional Vitalicio por tu provincia de origen y blindaste tu libertad hasta el último aliento. Morís en paz un sábado a los 93 años en la suite presidencial del Sanatorio Los Arcos, rodeado de tu última pareja de 34 años, tres abogados penalistas millonarios que lograron la prescripción definitiva de tus sesenta y dos causas por enriquecimiento ilícito, y dos enfermeras que te acomodan la bata de seda. Te velan en el Salón Azul del Congreso con honores de Estado; hay cuatro cuadras de cola bajo un diluvio torrencial para besar el cajón y los mismos periodistas de la tele que pedían tu detención dicen emocionados: 'Se fue un animal político único, un hombre que entendía los tiempos de la patria'.",
    placaCronica: "[PLACA NEGRA] MURIÓ EL PATRIARCA A LOS 93 AÑOS: CUATRO CUADRAS DE COLA BAJO LA LLUVIA // EL CAJÓN EN EL SENADO",
    titularLaNacion: "Murió una figura central de la política argentina: despiden con honores de Estado al exmandatario.",
    titularPagina12: "El adiós a un animal político: multitudes despiden los restos del patriarca en el Congreso.",
    epitafio: "Causas prescriptas, fueros vitalicios y el perdón de los que antes lo odiaban. Ganó el juego de la política argentina.",
    legadoPopular: "Una autopista, tres represas y el aeropuerto de su provincia llevan su nombre con letras de bronce que nadie se atreve a tocar."
  },

  // E. PELIGROS DE MUERTE DURANTE EL ASCENSO (NO ESPERES A SER PRESIDENTE)
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
// CATÁLOGO DE SUCESORES PRESIDENCIALES PARA CONTINUAR LA PARTIDA
// =========================================================================
const SUCESORES_PRESIDENCIALES = {
  vicepresidente_enemigo: {
    id: "vicepresidente_enemigo",
    nombre: "El Vicepresidente Opositor Encubierto",
    rol: "Presidente Provisional de la Nación (Art. 88 CN)",
    avatarIcono: "fa-solid fa-user-tie",
    descripcion: "Un animal de la rosca legislativa que te detestaba en silencio. Asume el sillón y desarma tus principales leyes en 48 horas para congraciarse con el establishment y los gobernadores.",
    modificadores: {
      roscaGobernadores: +30,
      mechaSocial: +10,
      saludCoronarias: 85,
      paranoiaMental: 20,
      seguridadBlindaje: 75,
      estatismoDelta: +15
    },
    citaInaugural: "El país necesita madurez institucional y menos personalismos. Vengo a restaurar el diálogo con todos los sectores que fueron maltratados."
  },

  conyuge_heredera: {
    id: "conyuge_heredera",
    nombre: "La Cónyuge / Heredera de la Mística",
    rol: "Presidenta Constitucional por Sucesión Emocional",
    avatarIcono: "fa-solid fa-gem",
    descripcion: "Hereda las lágrimas de la plaza, el apoyo de los intendentes fieles y el fervor popular. Sin embargo, los servicios de inteligencia y los caciques de la policía desconfían de su mano firme.",
    modificadores: {
      roscaGobernadores: -15,
      mechaSocial: -20,
      saludCoronarias: 70,
      paranoiaMental: 65,
      seguridadBlindaje: 45,
      estatismoDelta: -20
    },
    citaInaugural: "Juro por la memoria del líder eterno y por los descamisados de esta patria que no daré ni un solo paso atrás ante los extorsionadores de siempre."
  },

  ministro_economista: {
    id: "ministro_economista",
    nombre: "El Ministro de Economía Tecnócrata",
    rol: "Jefe de Estado por Consenso del Mercado",
    avatarIcono: "fa-solid fa-chart-pie",
    descripcion: "Frío, formado en Chicago o en la City porteña, sin carisma ni votos propios. Su única misión es negociar con el FMI y los acreedores mientras las calles del Conurbano se llenan de barricadas.",
    modificadores: {
      roscaGobernadores: +10,
      mechaSocial: +25,
      saludCoronarias: 60,
      paranoiaMental: 40,
      seguridadBlindaje: 60,
      estatismoDelta: +25
    },
    citaInaugural: "No hay margen para la poesía ni el populismo. El plan de estabilización se cumplirá a rajatabla cueste lo que cueste."
  }
};

// =========================================================================
// DILEMAS MÉDICOS Y DE SEGURIDAD (ENTREMEZCLADOS A PARTIR DE LOS 55 AÑOS)
// =========================================================================
const DILEMAS_SALUD = [
  {
    id: "med_presion_cadena_nacional",
    fase: "salud",
    area: "Salud Presidencial",
    titulo: "Pico de Presión 18/11 antes de la Cadena Nacional",
    descripcion: "Faltan doce minutos para salir en cadena nacional ante 5 millones de personas para explicar la suba de tarifas. Tu médico te toma la presión en el camarín de Olivos: el tensiómetro marca 18/11, te zumba el oído izquierdo y tenés la frente empapada de sudor frío.",
    explicacion: {
      queMide: "Tolerancia física al estrés público vs. costo de imagen y credibilidad cambiaria.",
      siFavor: "Preservás el cuerpo a costa de disparar rumores de debilidad y suba del dólar.",
      siContra: "Salís al aire a pura pastilla arriesgando un derrame cerebral en horario central."
    },
    opciones: [
      {
        texto: "A) Suspender la cadena nacional por 'motivos de fuerza mayor' y llamar a la Unidad Médica Presidencial.",
        impacto12Axes: { institucionalidad: 60 },
        impactoSectores: { claseMedia: -5, frenteExterno: -10 },
        impactoMacro: { riesgoPais: +80 },
        impactoCriollo: { dolarBlue: +65, mechaSocial: +8 },
        impactoSalud: { coronarias: +12, paranoia: +10, seguridad: 0 }
      },
      {
        texto: "B) Clavarse dos pastillas sublinguales de apuro, tomarse un vaso de agua mineral y salir al aire con la cara roja.",
        impacto12Axes: { institucionalidad: 50, estatismo: 50 },
        impactoSectores: { trabajo: +5 },
        impactoMacro: { riesgoPais: -20 },
        impactoCriollo: { dolarBlue: -15, mechaSocial: -4 },
        impactoSalud: { coronarias: -25, paranoia: +15, seguridad: 0 }
      },
      {
        texto: "C) Grabar el mensaje en partes con teleprompter, filtros de iluminación y edición rápida de diez minutos.",
        impacto12Axes: { institucionalidad: 45 },
        impactoSectores: { claseMedia: 0 },
        impactoMacro: {},
        impactoCriollo: { mechaSocial: +5 },
        impactoSalud: { coronarias: -8, paranoia: +25, seguridad: 0 }
      }
    ]
  },

  {
    id: "med_cambio_chofer_custodia",
    fase: "salud",
    area: "Seguridad de Estado",
    titulo: "El Jefe de la Casa Militar exige cambiar tu Chofer",
    descripcion: "La Casa Militar y el Ministerio de Seguridad te informan que tu chofer de toda la vida, un tipo de 62 años de tu pueblo natal que te acompaña desde intendente, no aprueba el curso de maniobras evasivas antiblindaje ni tiro táctico. Quieren ponerte un comando de la Policía Federal.",
    explicacion: {
      queMide: "Lealtad personal pueblerina vs. profesionalismo de la inteligencia estatal.",
      siFavor: "Ponés profesionales de elite que reportan a la SIDE tus movimientos.",
      siContra: "Mantenés lealtad ciega pero quedás expuesto ante una emboscada en la autopista."
    },
    opciones: [
      {
        texto: "A) Aceptar el relevo y nombrar al comando especializado recomendado por la Federal.",
        impacto12Axes: { seguridad: 75 },
        impactoSectores: { seguridadJusticia: +10 },
        impactoMacro: {},
        impactoCriollo: { roscaGobernadores: +5 },
        impactoSalud: { coronarias: 0, paranoia: +25, seguridad: +30 }
      },
      {
        texto: "B) Mantener a tu chofer de confianza del pueblo; nadie maneja tu auto salvo él.",
        impacto12Axes: { seguridad: 35 },
        impactoSectores: { seguridadJusticia: -10 },
        impactoMacro: {},
        impactoCriollo: {},
        impactoSalud: { coronarias: +5, paranoia: -15, seguridad: -35 }
      },
      {
        texto: "C) Contratar escolta y chofer a una empresa de seguridad privada militar extranjera (ex Mossad).",
        impacto12Axes: { seguridad: 85, institucionalidad: 30 },
        impactoSectores: { seguridadJusticia: -15, frenteExterno: +10 },
        impactoMacro: {},
        impactoCriollo: { mechaSocial: +12 },
        impactoSalud: { coronarias: -5, paranoia: +30, seguridad: +40 }
      }
    ]
  },

  {
    id: "med_cirugia_bypass_urgente",
    fase: "salud",
    area: "Salud Presidencial",
    titulo: "Angiografía de Urgencia: Tres Arterias Obstruidas",
    descripcion: "Estudios coronarios secretos en la Fundación Favaloro revelan que tenés tres arterias coronarias tapadas al 85%. Los médicos son categóricos: necesitás un triple bypass antes de fin de mes o el riesgo de muerte súbita se dispara.",
    explicacion: {
      queMide: "Ceder el sillón temporalmente al Vice vs. jugar a la ruleta rusa con el corazón.",
      siFavor: "Te operás en el país y el Vice asume el Ejecutivo durante 45 días de licencia médica.",
      siContra: "Postergás el quirófano para no perder el poder hasta que pasen las elecciones."
    },
    opciones: [
      {
        texto: "A) Operarte de urgencia en el país; pedir licencia y dejar al Vicepresidente al mando por 40 días.",
        impacto12Axes: { institucionalidad: 70 },
        impactoSectores: { claseMedia: +5, frenteExterno: -5 },
        impactoMacro: { riesgoPais: +90 },
        impactoCriollo: { dolarBlue: +80, mechaSocial: +10, roscaGobernadores: -15 },
        impactoSalud: { coronarias: +45, paranoia: +20, seguridad: +10 }
      },
      {
        texto: "B) Viajar de incógnito en avión sanitario a una clínica de Houston durante un fin de semana largo.",
        impacto12Axes: { institucionalidad: 40, geopolitica: 75 },
        impactoSectores: { trabajo: -15, productivo: +5 },
        impactoMacro: { reservasNetasBCRA: -100 },
        impactoCriollo: { mechaSocial: +15, roscaGobernadores: -10 },
        impactoSalud: { coronarias: +50, paranoia: +30, seguridad: -15 }
      },
      {
        texto: "C) Postergar la cirugía 6 meses hasta después de las elecciones legislativas con medicación de shock.",
        impacto12Axes: { institucionalidad: 50 },
        impactoSectores: {},
        impactoMacro: { riesgoPais: -30 },
        impactoCriollo: { dolarBlue: -20, mechaSocial: -5 },
        impactoSalud: { coronarias: -40, paranoia: +35, seguridad: 0 }
      }
    ]
  },

  {
    id: "med_asado_sindical_mollejas",
    fase: "salud",
    area: "Poder & Digestión",
    titulo: "El Asado Reservado con la Cúpula del Transporte",
    descripcion: "Almuerzo definitorio en una cantina cerrada de Barracas con los caciques de la CGT y los gremios del transporte para frenar un paro general de 72 horas. La mesa está servida con mollejas al verdeo, asado de tira, chorizo criollo y vino tinto de guarda.",
    explicacion: {
      queMide: "Confraternidad gastronómica criolla vs. salud digestiva y riesgo de intoxicación.",
      siFavor: "Comés a la par de los sindicalistas para sellar el pacto con código de barrio.",
      siContra: "Pedís ensalada y agua mineral; te tildan de cheto débil y la rosca se enfría."
    },
    opciones: [
      {
        texto: "A) Comer y brindar a la par de los caciques: dos platos de mollejas, asado grasoso y tres copas de tinto.",
        impacto12Axes: { estatismo: 40 },
        impactoSectores: { trabajo: +20, productivo: -10 },
        impactoMacro: {},
        impactoCriollo: { mechaSocial: -18, roscaGobernadores: +10 },
        impactoSalud: { coronarias: -22, paranoia: -10, seguridad: -15 }
      },
      {
        texto: "B) Pedir bife magro con ensalada mixta y agua mineral alegando 'dieta médica estricta'.",
        impacto12Axes: { institucionalidad: 60 },
        impactoSectores: { trabajo: -10 },
        impactoMacro: {},
        impactoCriollo: { mechaSocial: +8, roscaGobernadores: -5 },
        impactoSalud: { coronarias: +5, paranoia: +10, seguridad: +5 }
      },
      {
        texto: "C) Mandar al Ministro de Trabajo en tu representación y quedarte en Olivos comiendo caldo de verduras.",
        impacto12Axes: { institucionalidad: 50 },
        impactoSectores: { trabajo: -20 },
        impactoMacro: { riesgoPais: +40 },
        impactoCriollo: { mechaSocial: +15, dolarBlue: +30 },
        impactoSalud: { coronarias: +10, paranoia: +20, seguridad: +10 }
      }
    ]
  }
];

// =========================================================================
// EVALUADOR DEL DESGASTE BIOLÓGICO Y DISPARADOR DE MUERTES
// =========================================================================
function evaluarMuertePolitica(saludObj, motor) {
  if (!saludObj || saludObj.muertePolitica) return saludObj ? saludObj.muertePolitica : null;

  const { coronarias, paranoia, seguridad, edad, digestivo, vigorPublico } = saludObj;
  const mecha = motor?.termometroCriollo?.mechaSocial || 40;
  const blue = motor?.termometroCriollo?.dolarBlue || 1280;

  // 1. CONDICIÓN DE PATRIARCA INMORTAL (EL FINAL MENEM)
  // Superar los 75 años habiendo ganado o completado mandatos sin estallido social
  if (edad >= 78 && mecha < 60 && coronarias > 20) {
    return CATALOGO_MUERTES.patriarca_inmortal;
  }

  // 2. MUERTES BIOLÓGICAS (CORONARIAS COLAPSAN O PICOS DE PRESIÓN CON MECHA SOCIAL EXTREMA)
  if (coronarias <= 0) {
    // Si la mecha social o el dólar estaban altos, ACV de sesión maratónica o infarto
    if (mecha >= 75 || blue > 1500) {
      return CATALOGO_MUERTES.acv_sesion_maratonica;
    }
    return CATALOGO_MUERTES.infarto_quincho_olivos;
  }

  // 2B. COLAPSO DIGESTIVO EXTREMO
  if (digestivo !== undefined && digestivo <= 0) {
    return CATALOGO_MUERTES.intoxicacion_bodegon;
  }

  // Ruleta de paro cardíaco súbito si coronarias < 15%
  if (coronarias < 15) {
    const tirada = Math.random();
    if (tirada < 0.40) {
      return CATALOGO_MUERTES.infarto_quincho_olivos;
    }
  }

  // 3. ATENTADOS DIRECTOS POR FALLA CRÍTICA DE SEGURIDAD (SEGURIDAD <= 5%)
  if (seguridad <= 5) {
    if (paranoia > 70) {
      return CATALOGO_MUERTES.nismaneo_bano;
    }
    return CATALOGO_MUERTES.falla_custodia_multitud;
  }

  // Emboscada si seguridad es muy baja y mecha social es explosiva
  if (seguridad < 20 && mecha >= 80) {
    const tirada = Math.random();
    if (tirada < 0.35) {
      return CATALOGO_MUERTES.emboscada_autopista;
    }
  }

  // 4. PARANOIA EXTREMA (PARANOIA >= 95% Y SEGURIDAD BAJA)
  if (paranoia >= 95 && seguridad < 35) {
    return CATALOGO_MUERTES.nismaneo_bano;
  }

  return null;
}

// =========================================================================
// CLASE SISTEMA DE SALUD & SUPERVIVENCIA INTEGRADA
// =========================================================================
class SistemaSaludSupervivencia {
  constructor(config = {}) {
    this.arquetipo = config.arquetipo || 'maduro_carrera';
    const arq = ARQUETIPOS_EDAD[this.arquetipo] || ARQUETIPOS_EDAD.maduro_carrera;
    
    this.edad = config.edad !== undefined ? config.edad : arq.edadInicial;
    this.diasEnPoder = config.diasEnPoder || 0;
    this.semanasTranscurridas = config.semanasTranscurridas || 0;
    this.diasEnGestionSemana = 0; // Acumulador de días hacia el próximo año biológico

    // Las 4 Barras Fisiológicas (0 a 100)
    this.coronarias = config.coronarias !== undefined ? config.coronarias : arq.coronarias;
    this.digestivo = config.digestivo !== undefined ? config.digestivo : (this.arquetipo === 'pibe_maravilla' ? 88 : (this.arquetipo === 'maduro_carrera' ? 68 : 50));
    this.cabeza = config.cabeza !== undefined ? config.cabeza : (100 - (config.paranoia !== undefined ? config.paranoia : arq.paranoia));
    this.vigorPublico = config.vigorPublico !== undefined ? config.vigorPublico : (this.arquetipo === 'pibe_maravilla' ? 95 : (this.arquetipo === 'maduro_carrera' ? 70 : 45));

    // Seguridad & Custodia
    this.seguridad = config.seguridad !== undefined ? config.seguridad : arq.seguridad;

    // Médico de cabecera UMP
    this.medicoTipo = config.medicoTipo || 'cardenal_medicina';

    // Signos y variables clínicas
    this.pesoKg = config.pesoKg || (this.arquetipo === 'pibe_maravilla' ? 78 : (this.arquetipo === 'maduro_carrera' ? 94 : 88));
    this.pesoInicial = this.pesoKg;
    this.dosisClonazepamMg = config.dosisClonazepamMg || (this.arquetipo === 'pibe_maravilla' ? 0.5 : (this.arquetipo === 'maduro_carrera' ? 2.0 : 3.0));
    this.horasSueno = config.horasSueno || 4.2;
    this.obstruccionCoronaria = config.obstruccionCoronaria || (this.arquetipo === 'pibe_maravilla' ? 20 : (this.arquetipo === 'maduro_carrera' ? 65 : 82));
    this.stentColocado = config.stentColocado || false;

    // Estado institucional y biológico
    this.muertePolitica = null;
    this.esSucesor = false;
    this.sucesorActual = null;
    this.nombreMandatario = config.nombreMandatario || arq.nombre;

    this.historialClinico = [];
    this.enfermedadesActivas = [];
    this.ultimoReporteCumpleanos = null;
  }

  // Compatibilidad hacia atrás: paranoia como getter y setter vinculado a cabeza
  get paranoia() {
    return Math.max(0, Math.min(100, 100 - this.cabeza));
  }
  set paranoia(val) {
    this.cabeza = Math.max(0, Math.min(100, 100 - val));
  }

  /**
   * Calcula el Coeficiente Olivos dinámicamente según la fase y la mecha social
   */
  calcularCoeficienteOlivos(motor = null) {
    const fase = motor?.faseActual || 'presidente';
    const mecha = motor?.termometroCriollo?.mechaSocial || 40;
    const blue = motor?.termometroCriollo?.dolarBlue || 1280;
    const riesgo = motor?.macroeconomia?.riesgoPais || 1250;
    const enCrisis = motor?.climaxCrisis || mecha >= 65 || blue > 1500 || riesgo > 1400;

    if (fase === 'militante' || fase === 'cuna') {
      return COEFICIENTE_OLIVOS.llano_exilio;
    } else if (fase === 'diputado') {
      return COEFICIENTE_OLIVOS.legislador;
    } else {
      if (enCrisis) {
        return COEFICIENTE_OLIVOS.presidente_crisis;
      } else {
        return COEFICIENTE_OLIVOS.presidente_paz;
      }
    }
  }

  /**
   * Obtiene la fase biológica del dirigente según su edad actual
   */
  obtenerFaseBiologica() {
    if (this.edad < 45) return FASES_BIOLOGICAS_DIRIGENTE.joven_promesa;
    if (this.edad < 60) return FASES_BIOLOGICAS_DIRIGENTE.animal_raza;
    if (this.edad < 75) return FASES_BIOLOGICAS_DIRIGENTE.caudillo_veterano;
    return FASES_BIOLOGICAS_DIRIGENTE.patriarca_eterno;
  }

  /**
   * Avanza el tiempo del reloj vital.
   * Cada 7 días de juego equivale a 1 año de edad biológica (mandato 4 años = 28 días)
   */
  avanzarRelojVital(dias = 7, motor = null) {
    const coef = this.calcularCoeficienteOlivos(motor);
    this.diasEnPoder += dias;
    this.semanasTranscurridas += Math.floor(dias / 7);
    this.diasEnGestionSemana += dias;

    // Envejecimiento acelerado con Coeficiente Olivos
    const envejecimientoAnos = (dias / 7) * coef.multiplicador;
    this.edad = Math.round((this.edad + envejecimientoAnos) * 10) / 10;

    // Aumento de peso por sedentarismo y asados (+0.5 kg por año de poder)
    this.pesoKg = Math.round((this.pesoKg + (0.5 * (dias / 7))) * 10) / 10;

    // Desgaste de horas de sueño
    if (coef.multiplicador >= 2.0) {
      this.horasSueno = Math.max(3.2, Math.round((this.horasSueno - 0.2) * 10) / 10);
      this.obstruccionCoronaria = Math.min(95, this.obstruccionCoronaria + 3);
    }

    // Chequeo si corresponde disparar evento de Cumpleaños (cada 7 días de juego)
    let huboCumpleanos = false;
    if (this.diasEnGestionSemana >= 7) {
      this.diasEnGestionSemana = 0;
      this.ultimoReporteCumpleanos = this.generarReporteCumpleanos(motor);
      huboCumpleanos = true;
    }

    // Actualizar catálogo de enfermedades según niveles críticos
    this.actualizarEnfermedades();

    // Evaluar posible muerte política
    this.muertePolitica = evaluarMuertePolitica(this, motor);

    const edadPreviaInt = Math.floor(this.edad - envejecimientoAnos);
    const edadActualInt = Math.floor(this.edad);
    let hitoCruzado = null;
    if (motor && typeof motor.verificarDesbloqueoConstitucional === 'function') {
      hitoCruzado = motor.verificarDesbloqueoConstitucional(edadActualInt, edadPreviaInt);
    }

    return {
      edadActual: Math.floor(this.edad),
      edadExacta: this.edad,
      coeficiente: coef,
      huboCumpleanos,
      reporteCumpleanos: this.ultimoReporteCumpleanos,
      muertePolitica: this.muertePolitica,
      hitoCruzado
    };
  }

  /**
   * Actualiza las enfermedades activas
   */
  actualizarEnfermedades() {
    this.enfermedadesActivas = [];
    if (this.digestivo < 45) this.enfermedadesActivas.push(CATALOGO_ENFERMEDADES_PODER.colon_negociacion);
    if (this.cabeza < 50 || this.dosisClonazepamMg >= 2.0) this.enfermedadesActivas.push(CATALOGO_ENFERMEDADES_PODER.sindrome_rivotril);
    if (this.coronarias < 50) this.enfermedadesActivas.push(CATALOGO_ENFERMEDADES_PODER.arritmia_helicoptero);
    if (this.cabeza < 35) this.enfermedadesActivas.push(CATALOGO_ENFERMEDADES_PODER.paranoia_mozo);
    if (this.vigorPublico < 45) this.enfermedadesActivas.push(CATALOGO_ENFERMEDADES_PODER.neumonia_corte_cinta);
  }

  /**
   * Obtiene los signos vitales calculados en tiempo real para el Monitor UMP
   */
  obtenerSignosVitales(motor = null) {
    const mecha = motor?.termometroCriollo?.mechaSocial || 40;

    // Presión arterial sistólica / diastólica (mmHg)
    let sistolica = 120 + Math.round((100 - this.coronarias) * 0.5) + Math.round((mecha - 40) * 0.3);
    let diastolica = 80 + Math.round((100 - this.coronarias) * 0.3) + Math.round((mecha - 40) * 0.2);
    sistolica = Math.max(110, Math.min(210, Math.round(sistolica)));
    diastolica = Math.max(70, Math.min(130, Math.round(diastolica)));

    let estadoPresion = "ESTABLE CON MEDICACIÓN";
    if (sistolica >= 180 || diastolica >= 110) {
      estadoPresion = "CRISIS HIPERTENSIVA (RIESGO ACV)";
    } else if (sistolica >= 160 || diastolica >= 100) {
      estadoPresion = "HIPERTENSIÓN GRADO II";
    } else if (sistolica >= 140 || diastolica >= 90) {
      estadoPresion = "HIPERTENSIÓN LEVE";
    }

    // Frecuencia cardíaca (lpm)
    let frecuencia = 72 + Math.round((mecha - 30) * 0.5) + (this.coronarias < 50 ? 10 : 0);
    frecuencia = Math.max(60, Math.min(135, Math.round(frecuencia)));

    // Nivel de estrés (0% a 100%)
    let estres = Math.round((mecha * 0.4) + ((100 - this.cabeza) * 0.4) + ((100 - this.coronarias) * 0.2));
    estres = Math.max(10, Math.min(100, estres));

    return {
      presionTexto: `${Math.round(sistolica / 10)}/${Math.round(diastolica / 10)}`,
      presionDetalle: `${sistolica}/${diastolica} mmHg [${estadoPresion}]`,
      estadoPresion,
      frecuenciaLpm: frecuencia,
      nivelEstres: estres,
      pesoKg: this.pesoKg,
      pesoGanado: Math.max(0, Math.round((this.pesoKg - this.pesoInicial) * 10) / 10),
      horasSueno: this.horasSueno,
      dosisClonazepam: this.dosisClonazepamMg,
      obstruccionCoronaria: this.obstruccionCoronaria,
      stentColocado: this.stentColocado
    };
  }

  /**
   * Genera el Reporte Anual de Supervivencia para el cumpleaños
   */
  generarReporteCumpleanos(motor = null) {
    const edadEntera = Math.floor(this.edad);
    const anosMandato = Math.floor(this.diasEnPoder / 7);
    const signos = this.obtenerSignosVitales(motor);
    const faseBio = this.obtenerFaseBiologica();

    let deterioroVisible = "Buen aspecto general, sin signos de fatiga extrema.";
    if (this.coronarias < 50 && this.edad >= 55) {
      deterioroVisible = "Canas totales, papada prominente y temblor fino en la mano izquierda.";
    } else if (this.cabeza < 40) {
      deterioroVisible = "Ojeras pronunciadas, mirada esquiva y tics nerviosos ante ruidos imprevistos.";
    } else if (this.vigorPublico < 50) {
      deterioroVisible = "Cojera leve al descender del helicóptero; custodia asiste en escalinatas.";
    }

    return {
      edadCumplida: edadEntera,
      anosMandato,
      semanaJuego: motor?.jugador?.semana || Math.floor(this.diasEnPoder / 7) + 1,
      faseBiologica: faseBio,
      signos,
      deterioroVisible,
      opcionesBrindis: Object.values(OPCIONES_BRINDIS_CUMPLEANOS)
    };
  }

  /**
   * Resuelve la elección del Brindis de Cumpleaños
   */
  resolverBrindisCumpleanos(opcionId, motor = null) {
    const opc = OPCIONES_BRINDIS_CUMPLEANOS[opcionId] || OPCIONES_BRINDIS_CUMPLEANOS.asado_con_tropa;
    const imp = opc.impacto;

    if (imp.coronarias) this.coronarias = Math.max(0, Math.min(100, this.coronarias + imp.coronarias));
    if (imp.digestivo) this.digestivo = Math.max(0, Math.min(100, this.digestivo + imp.digestivo));
    if (imp.cabeza) this.cabeza = Math.max(0, Math.min(100, this.cabeza + imp.cabeza));
    if (imp.vigorPublico) this.vigorPublico = Math.max(0, Math.min(100, this.vigorPublico + imp.vigorPublico));

    if (motor && motor.termometroCriollo) {
      if (imp.roscaGobernadores) {
        motor.termometroCriollo.roscaGobernadores = Math.max(0, Math.min(100, motor.termometroCriollo.roscaGobernadores + imp.roscaGobernadores));
      }
      if (imp.dolarBlue) {
        motor.termometroCriollo.dolarBlue += imp.dolarBlue;
      }
    }

    this.historialClinico.push({
      tipo: "brindis_cumpleanos",
      opcion: opc.id,
      relato: opc.relato
    });

    return {
      exito: true,
      opcion: opc,
      relato: opc.relato,
      estadoResultante: this.obtenerDashboardUMP(motor)
    };
  }

  /**
   * Ejecuta una de las 4 acciones del Botiquín Clínico Inmediato
   */
  ejecutarAccionBotiquin(accionId, motor = null) {
    const acc = ACCIONES_BOTIQUIN_UMP[accionId] || ACCIONES_BOTIQUIN_UMP.subir_dosis;
    const imp = acc.impacto;

    if (imp.coronarias) this.coronarias = Math.max(0, Math.min(100, this.coronarias + imp.coronarias));
    if (imp.digestivo) this.digestivo = Math.max(0, Math.min(100, this.digestivo + imp.digestivo));
    if (imp.cabeza) this.cabeza = Math.max(0, Math.min(100, this.cabeza + imp.cabeza));
    if (imp.vigorPublico) this.vigorPublico = Math.max(0, Math.min(100, this.vigorPublico + imp.vigorPublico));
    if (imp.dosisClonazepamDelta) this.dosisClonazepamMg = Math.round((this.dosisClonazepamMg + imp.dosisClonazepamDelta) * 10) / 10;
    if (imp.obstruccionDelta) this.obstruccionCoronaria = Math.max(15, this.obstruccionCoronaria + imp.obstruccionDelta);

    if (accionId === 'cirugia_express') {
      this.stentColocado = true;
    }

    if (motor) {
      if (motor.termometroCriollo) {
        if (imp.dolarBlue) motor.termometroCriollo.dolarBlue = Math.max(100, motor.termometroCriollo.dolarBlue + imp.dolarBlue);
        if (imp.roscaGobernadores) motor.termometroCriollo.roscaGobernadores = Math.max(0, Math.min(100, motor.termometroCriollo.roscaGobernadores + imp.roscaGobernadores));
      }
      if (motor.macroeconomia && imp.riesgoPais) {
        motor.macroeconomia.riesgoPais = Math.max(200, motor.macroeconomia.riesgoPais + imp.riesgoPais);
      }
    }

    this.historialClinico.push({
      tipo: "botiquin",
      accion: acc.id,
      relato: acc.relato
    });

    return {
      exito: true,
      accion: acc,
      relato: acc.relato,
      estadoResultante: this.obtenerDashboardUMP(motor)
    };
  }

  /**
   * Resuelve el dilema de quirófano
   */
  resolverDilemaQuirofano(lugarId, motor = null) {
    const q = DILEMAS_QUIROFANO[lugarId] || DILEMAS_QUIROFANO.sanatorio_privado;
    const imp = q.impacto;

    this.coronarias = Math.max(0, Math.min(100, this.coronarias + imp.coronarias));
    this.stentColocado = true;
    this.obstruccionCoronaria = Math.max(20, this.obstruccionCoronaria - 40);

    if (motor) {
      if (motor.termometroCriollo && imp.mechaSocial) {
        motor.termometroCriollo.mechaSocial = Math.max(0, Math.min(100, motor.termometroCriollo.mechaSocial + imp.mechaSocial));
      }
      if (motor.macroeconomia && imp.riesgoPais) {
        motor.macroeconomia.riesgoPais += imp.riesgoPais;
      }
    }

    this.historialClinico.push({
      tipo: "quirofano",
      lugar: q.id,
      nombre: q.nombre
    });

    return {
      exito: true,
      quirofano: q,
      relato: `Intervención realizada con éxito en ${q.nombre}. Salud coronaria restaurada (+${imp.coronarias}%).`,
      estadoResultante: this.obtenerDashboardUMP(motor)
    };
  }

  /**
   * Retorna el snapshot completo para el Dashboard de la UMP
   */
  obtenerDashboardUMP(motor = null) {
    const signos = this.obtenerSignosVitales(motor);
    const faseBio = this.obtenerFaseBiologica();
    const coef = this.calcularCoeficienteOlivos(motor);
    const medico = EQUIPO_UMP_MEDICOS[this.medicoTipo] || EQUIPO_UMP_MEDICOS.cardenal_medicina;

    return {
      paciente: "Presidente de la Nación",
      edad: Math.floor(this.edad),
      edadExacta: this.edad,
      pesoKg: this.pesoKg,
      pesoGanado: signos.pesoGanado,
      signos,
      faseBiologica: faseBio,
      coeficienteOlivos: coef,
      medico,
      barras: {
        coronarias: {
          valor: this.coronarias,
          nombre: BARRAS_FISIOLOGICAS.coronarias.nombre,
          icono: BARRAS_FISIOLOGICAS.coronarias.icono,
          color: BARRAS_FISIOLOGICAS.coronarias.color,
          subtitulo: this.coronarias < 25 ? "¡Riesgo inminente de infarto!" : (this.coronarias < 50 ? "Arterias tapadas / Stent sugerido" : "Presión arterial controlada"),
          estado: this.coronarias < 25 ? "critico" : (this.coronarias < 50 ? "alerta" : "estable")
        },
        digestivo: {
          valor: this.digestivo,
          nombre: BARRAS_FISIOLOGICAS.digestivo.nombre,
          icono: BARRAS_FISIOLOGICAS.digestivo.icono,
          color: BARRAS_FISIOLOGICAS.digestivo.color,
          subtitulo: this.digestivo < 25 ? "¡Riesgo de hemorragia alta!" : (this.digestivo < 50 ? "Gastritis erosiva medicada" : "Digestión y dieta equilibrada"),
          estado: this.digestivo < 25 ? "critico" : (this.digestivo < 50 ? "alerta" : "estable")
        },
        cabeza: {
          valor: this.cabeza,
          nombre: BARRAS_FISIOLOGICAS.cabeza.nombre,
          icono: BARRAS_FISIOLOGICAS.cabeza.icono,
          color: BARRAS_FISIOLOGICAS.cabeza.color,
          subtitulo: this.cabeza < 25 ? "¡Brote paranoico / Delirio!" : (this.cabeza < 50 ? "Paranoia y Rivotril diario" : "Mente lúcida y templanza"),
          estado: this.cabeza < 25 ? "critico" : (this.cabeza < 50 ? "alerta" : "estable")
        },
        vigorPublico: {
          valor: this.vigorPublico,
          nombre: BARRAS_FISIOLOGICAS.vigorPublico.nombre,
          icono: BARRAS_FISIOLOGICAS.vigorPublico.icono,
          color: BARRAS_FISIOLOGICAS.vigorPublico.color,
          subtitulo: this.vigorPublico < 25 ? "¡Inmovilidad física / Silla de ruedas!" : (this.vigorPublico < 50 ? "Fatiga muscular crónica" : "Energía plena para la calle"),
          estado: this.vigorPublico < 25 ? "critico" : (this.vigorPublico < 50 ? "alerta" : "estable")
        }
      },
      enfermedadesActivas: [ ...this.enfermedadesActivas ],
      accionesBotiquin: Object.values(ACCIONES_BOTIQUIN_UMP),
      dilemasQuirofano: Object.values(DILEMAS_QUIROFANO),
      muertePolitica: this.muertePolitica
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ARQUETIPOS_EDAD,
    CATALOGO_MUERTES,
    SUCESORES_PRESIDENCIALES,
    DILEMAS_SALUD,
    COEFICIENTE_OLIVOS,
    BARRAS_FISIOLOGICAS,
    FASES_BIOLOGICAS_DIRIGENTE,
    EQUIPO_UMP_MEDICOS,
    DILEMAS_QUIROFANO,
    CATALOGO_ENFERMEDADES_PODER,
    OPCIONES_BRINDIS_CUMPLEANOS,
    ACCIONES_BOTIQUIN_UMP,
    SistemaSaludSupervivencia,
    evaluarMuertePolitica
  };
} else if (typeof window !== 'undefined') {
  window.COEFICIENTE_OLIVOS = COEFICIENTE_OLIVOS;
  window.BARRAS_FISIOLOGICAS = BARRAS_FISIOLOGICAS;
  window.FASES_BIOLOGICAS_DIRIGENTE = FASES_BIOLOGICAS_DIRIGENTE;
  window.EQUIPO_UMP_MEDICOS = EQUIPO_UMP_MEDICOS;
  window.DILEMAS_QUIROFANO = DILEMAS_QUIROFANO;
  window.CATALOGO_ENFERMEDADES_PODER = CATALOGO_ENFERMEDADES_PODER;
  window.OPCIONES_BRINDIS_CUMPLEANOS = OPCIONES_BRINDIS_CUMPLEANOS;
  window.ACCIONES_BOTIQUIN_UMP = ACCIONES_BOTIQUIN_UMP;
  window.SistemaSaludSupervivencia = SistemaSaludSupervivencia;
  window.evaluarMuertePolitica = evaluarMuertePolitica;
}
