// side_inteligencia.js - Módulo de La Casa (Calle 25 de Mayo), La SIDE, Fondos Reservados y Operaciones Negras

// =========================================================================
// 1. LA ESTRUCTURA DE "LA CASA" (CALLE 25 DE MAYO)
// =========================================================================
const ESTRUCTURA_CASA_SIDE = {
  sr5: {
    id: "sr5",
    codigo: "Señor 5",
    cargo: "Director General de la SIDE / Secretaría de Inteligencia",
    subtitulo: "El Conductor Político (Amigo personal / Publicista / Abogado fiel)",
    icono: "fa-solid fa-user-tie",
    color: "amber",
    descripcion: "Suele ser tu amigo personal de la noche, tu publicista de campaña o un abogado de confianza ciega. No sabe de espionaje técnico ni de encriptación cuántica, pero sabe con precisión quirúrgica a quién hay que destruir mediáticamente y a quién hay que comprar con una valija.",
    lealtadBase: 90,
    perfil: "Tu mano derecha en la oscuridad institucional."
  },

  sr8: {
    id: "sr8",
    codigo: "Señor 8",
    cargo: "Subdirector Operativo de la SIDE",
    subtitulo: "El Jefe Operativo de Carrera (Cuadro oscuro de carrera)",
    icono: "fa-solid fa-user-secret",
    color: "purple",
    descripcion: "Un cuadro oscuro que sobrevivió a cinco presidentes y cuatro cambios de régimen. Conoce los túneles subterráneos de la calle 25 de Mayo, tiene las llaves maestras de las cajas fuertes del subsuelo y maneja a los agentes encubiertos. Si le tocás sus negocios, es el primero en armarte un carpetazo interno.",
    lealtadBase: 50,
    perfil: "Poder fáctico permanente. Nunca confíes al 100% en él."
  },

  brazosOperativos: {
    agencia_exterior: {
      id: "agencia_exterior",
      nombre: "Agencia Exterior & Geopolítica",
      icono: "fa-solid fa-earth-americas",
      descripcion: "Lazos con embajadas de potencias occidentales, la CIA, el Mossad y servicios vecinos. Negocia cables clasificados y alerta sobre presiones internacionales.",
      especialidad: "Geopolítica, deuda y acuerdos con organismos multilaterales."
    },
    ciberespionaje_granjas: {
      id: "ciberespionaje_granjas",
      nombre: "Ciberespionaje, Granjas & Guerrilla Digital",
      icono: "fa-solid fa-network-wired",
      descripcion: "Galpones clandestinos con cientos de módems prepagos, operadores de redes y bots. Inundan Twitter/X, TikTok y WhatsApp con ataques psicológicos coordinados.",
      especialidad: "Demolición de imagen pública y microtargeting de votantes indecisos."
    },
    contrainteligencia: {
      id: "contrainteligencia",
      nombre: "Contrainteligencia & Escuchas Locales",
      icono: "fa-solid fa-headset",
      descripcion: "Pinchaduras directas de líneas fijas, interceptación satelital y clonación de WhatsApp a ministros de tu propio gabinete, jueces de Comodoro Py y gobernadores.",
      especialidad: "Anticipar traiciones internas y armar carpetas antes de sesiones parlamentarias."
    },
    inorganicos: {
      id: "inorganicos",
      nombre: "'Los Inorgánicos' (Mano de Obra Marginal)",
      icono: "fa-solid fa-mask",
      descripcion: "Exagentes exonerados de la Policía Bonaerense, delincuentes reclutados y hackers independientes. No figuran en ningún organigrama del Estado; cobran en dólares cash y si caen presos, el gobierno niega rotundamente conocerlos.",
      especialidad: "Aprietes callejeros, persecuciones intimidatorias y plantado de pruebas."
    }
  }
};

// =========================================================================
// 2. EL RECURSO: FONDOS RESERVADOS (VALIJAS DE DÓLARES CASH)
// =========================================================================
const USOS_FONDOS_RESERVADOS = {
  comprar_tapa_domingo: {
    id: "comprar_tapa_domingo",
    nombre: "'Comprar' la Tapa del Domingo",
    costo: 1500000, // US$ 1.5 M
    icono: "fa-solid fa-newspaper",
    descripcion: "Entregarle un bolso deportivo con fajos termosellados a un periodista estrella o a los productores de un canal de noticias de cable para demoler a un rival o silenciar una denuncia familiar.",
    beneficioImagen: +10,
    reduccionMecha: -10,
    impactoSospechaBicameral: +12,
    relato: "El domingo a las 8 AM, el diario de mayor circulación abre con una investigación demoledora contra tu principal adversario político. Tu teléfono no para de sonar."
  },

  operacion_banelco: {
    id: "operacion_banelco",
    nombre: "La Operación Banelco (Comprar Voluntades en el Senado)",
    costo: 3000000, // US$ 3 M
    icono: "fa-solid fa-sack-dollar",
    descripcion: "Enviar a un valijero del Señor 5 al subsuelo de un hotel cinco estrellas de Puerto Madero para cerrar el voto de tres senadores de provincias chicas que amagaban con voltearte una ley clave.",
    beneficioRosca: +25,
    reduccionRiesgoCongreso: -30,
    impactoSospechaBicameral: +25,
    relato: "En una reunión a oscuras en Puerto Madero, los tres senadores rebeldes guardan los bolsos en el baúl. A las 3 AM bajan al recinto y votan disciplinadamente a favor de tu gobierno."
  },

  financiar_granjas_trolls: {
    id: "financiar_granjas_trolls",
    nombre: "Financiar Granjas de Trolls y Guerrilla Digital",
    costo: 2000000, // US$ 2 M
    icono: "fa-solid fa-robot",
    descripcion: "Alquilar galpones con 50 operadores contratados en negro y miles de chips prepagos para posicionar hashtags destructivos, videos adulterados y defender tus medidas en Twitter/X y TikTok.",
    beneficioDefensaRedes: +20,
    reduccionDanioOperetas: -15,
    impactoSospechaBicameral: +10,
    relato: "En menos de dos horas, la oposición es tendencia mundial con etiquetas infamantes. La clase media conectada duda de las denuncias en tu contra."
  },

  sobresueldo_juez_federal: {
    id: "sobresueldo_juez_federal",
    nombre: "Comprar la Buena Voluntad de un Juez Federal",
    costo: 2500000, // US$ 2.5 M
    icono: "fa-solid fa-scale-balanced",
    descripcion: "Financiarle un viaje privado con todo pago al exterior, saldar deudas de su estudio familiar o girarle un 'sobresueldo de tranquilidad' en billetes de 100 para que pise tus expedientes.",
    beneficioJudicial: "Plancha la causa penal en Comodoro Py por 1 turno",
    reduccionRiesgoProcesal: -20,
    impactoSospechaBicameral: +18,
    relato: "El magistrado firma una resolución postergando las pericias contables por 180 días debido a 'sobrecarga del cuerpo pericial'. Tu causa vuelve a dormir en el cajón."
  },

  calmar_inorganicos: {
    id: "calmar_inorganicos",
    nombre: "Calmar a los Agentes Inorgánicos (Silenciar la Cueva)",
    costo: 1000000, // US$ 1 M
    icono: "fa-solid fa-hand-holding-dollar",
    descripcion: "Girar un fajo en efectivo a los expolicías y hackers despechados que amenazan con vender grabaciones clandestinas a streamers de la oposición.",
    beneficioAmenazaFiltracion: -25,
    impactoSospechaBicameral: +5,
    relato: "Los inorgánicos reciben la valija en una estación de servicio de la Ruta 2. Borran los archivos de audio de sus computadoras y suspenden las filtraciones por el momento."
  }
};

// =========================================================================
// 3. EL MENÚ DE OPERACIONES NEGRAS (ACCIONES DIRECTAS)
// =========================================================================
const OPERACIONES_NEGRAS = {
  pinchadura_linea: {
    id: "pinchadura_linea",
    nombre: "Pinchadura de Línea / Clonación de WhatsApp",
    subtitulo: "Interceptar teléfonos de ministros, gobernadores y jueces",
    icono: "fa-solid fa-phone-volume",
    color: "sky",
    costoFondos: 800000, // US$ 800.000
    riesgoFiltracion: 30, // 30% base
    objetivo: "Conocer con 48 hs de anticipación renuncias, corridas bancarias y roscas secretas de la oposición.",
    efectoExito: {
      paranoia: -15,
      roscaGobernadores: +15,
      lineasInterceptadas: +8,
      relato: "El Señor 8 te acerca una carpeta espiralada con transcripciones completas: descubrís que dos gobernadores aliados pensaban traicionarte en la votación fiscal."
    },
    efectoFallo: {
      paranoia: +35,
      mechaSocial: +20,
      claseMedia: -20,
      sospechaBicameral: +30,
      relato: "¡ESCÁNDALO DE ESPIONAJE ILEGAL! Un perito informático descubre la intrusión y la oposición convoca a sesión especial para pedir tu Juicio Político directo."
    }
  },

  carpetazo_preventivo: {
    id: "carpetazo_preventivo",
    nombre: "El 'Carpetazo' Preventivo",
    subtitulo: "Videos íntimos, cuentas en Panamá y facturas truchas de rivales",
    icono: "fa-solid fa-folder-closed",
    color: "purple",
    costoFondos: 1200000, // US$ 1.2 M
    riesgoFiltracion: 25,
    objetivo: "Sentar a un jefe de bloque opositor a solas, mostrarle la carpeta de 200 fojas y garantizar su voto sin que diga una sola palabra en el recinto.",
    efectoExito: {
      roscaGobernadores: +20,
      lineasInterceptadas: +4,
      amenazaFiltracion: +10,
      relato: "El diputado opositor hojea las fotos íntimas y las transferencias a su cuenta offshore. Se pone pálido, se seca la frente y promete que su bancada votará a favor."
    },
    efectoFallo: {
      institucional: -25,
      mechaSocial: +15,
      sospechaBicameral: +25,
      relato: "¡EL OPOSITOR SE VICTIMIZA EN TV! El dirigente convoca a conferencia de prensa exhibiendo el intento de extorsión. Tu gobierno queda expuesto como una mafia estatal."
    }
  },

  plantado_pruebas: {
    id: "plantado_pruebas",
    nombre: "Plantado de Pruebas en Allanamiento",
    subtitulo: "Fajo con faja bancaria o arma limada antes de la llegada policial",
    icono: "fa-solid fa-gun",
    color: "rose",
    costoFondos: 1500000, // US$ 1.5 M
    riesgoFiltracion: 40,
    objetivo: "Neutralizar de un plumazo a un líder piquetero o secretario general de transporte dejándolo preso con preventiva en Ezeiza.",
    efectoExito: {
      sindical: -30,
      seguridad: +15,
      mechaSocial: -10,
      relato: "Los canales de TV transmiten en vivo el hallazgo del fajo de dólares y el arma limada. El sindicalista es esposado con chaleco antibalas ante las cámaras."
    },
    efectoFallo: {
      riesgoJudicial: +35,
      paranoia: +30,
      mechaSocial: +25,
      sospechaBicameral: +35,
      relato: "¡UNA CÁMARA DE SEGURIDAD VECINAL GRABÓ TODO! Se ve claramente a dos agentes de la SIDE entrando antes que la policía con una mochila. Te imputan por asociación ilícita."
    }
  },

  operacion_desgaste: {
    id: "operacion_desgaste",
    nombre: "Operación Desgaste (Fake News Quirúrgica)",
    subtitulo: "Audios adulterados con IA y rumores clínicos en plena veda",
    icono: "fa-solid fa-bullhorn",
    color: "amber",
    costoFondos: 1000000, // US$ 1 M
    riesgoFiltracion: 20,
    objetivo: "Licuar entre un 4% y 7% de votos indecisos de la oposición 48 horas antes de la votación.",
    efectoExito: {
      intencionVotoOpositor: -6,
      defensaRedes: +15,
      relato: "El audio adulterado del candidato rival insultando a sus votantes se viraliza en grupos de WhatsApp de madres y consorcios. La duda cala en la clase media."
    },
    efectoFallo: {
      credibilidadPublica: -20,
      claseMedia: -15,
      paranoia: +15,
      relato: "LOS VERIFICADORES DE DATOS DEMUESTRAN QUE EL AUDIO ES TRUCHO. La prensa unificada titula 'Campura sucia del oficialismo'; el boomerang te hace perder votos."
    }
  },

  mensaje_manija: {
    id: "mensaje_manija",
    nombre: "El 'Mensaje de la Manija' (Apriete Psicológico)",
    subtitulo: "Autos sin patente en la puerta de colegios y sobres con balas",
    icono: "fa-solid fa-skull-crossbones",
    color: "red",
    costoFondos: 700000, // US$ 700.000
    riesgoFiltracion: 35,
    objetivo: "Forzar a un juez federal o camarista rebelde a pedir licencia psiquiátrica para que la causa contra vos se sortee a un tribunal amigo.",
    efectoExito: {
      alivioJudicial: true,
      paranoia: -10,
      relato: "El juez encuentra el sobre con las dos balas calibre 9mm en su buzón. Al día siguiente pide licencia por estrés y se excusa de seguir entendiendo en tu causa."
    },
    efectoFallo: {
      crisisInstitucional: +30,
      mechaSocial: +25,
      sospechaBicameral: +40,
      relato: "¡REPUDIO GENERAL DE LA CORTE SUPREMA! El Colegio de Magistrados y el máximo tribunal denuncian terrorismo de Estado contra la judicatura. Paro total de tribunales."
    }
  }
};

// =========================================================================
// 4. LA LEY DEL BOOMERANG: CUANDO LOS ESPÍAS SE CORTAN SOLOS
// =========================================================================
const EVENTOS_BOOMERANG_SIDE = {
  extorsion_sr8: {
    id: "extorsion_sr8",
    titulo: "La Extorsión Nocturna del Señor 8",
    subtitulo: "Un café a solas en la Quinta de Olivos con una grabación sobre la mesa",
    icono: "fa-solid fa-tape",
    gatillo: { lealtadSr8MenorA: 40, fondosMenorA: 3000000 },
    descripcion: "El Subdirector de Carrera se sienta en tu despacho a las 2 AM. Apoya un teléfono viejo sobre tu escritorio y te reproduce una llamada tuya de hace tres años arreglando un soborno con un contratista. Sonríe frío y te dice: 'Doctor, la tropa necesita un aumento presupuestario del 40% en fondos reservados, si no se nos complica contener a la gente'.",
    opciones: [
      {
        id: "pagar_rescate_sr8",
        texto: "Aceptar el chantaje y girar US$ 3.000.000 de inmediato a las cuentas del Señor 8.",
        impacto: { fondos: -3000000, lealtadSr8: +35, paranoia: +20, amenazaFiltracion: -20 },
        relato: "El Señor 8 guarda el teléfono en el bolsillo del piloto. 'Sabía que nos entenderíamos, Presidente. La tropa cuidará sus espaldas'."
      },
      {
        id: "echar_sr8_intervencion",
        texto: "Echar al Señor 8 por decreto de necesidad y urgencia e intervenir 'La Casa'.",
        impacto: { lealtadSr8: -100, amenazaFiltracion: +60, mechaSocial: +15, paranoia: +45 },
        relato: "El Señor 8 se levanta sin pestañear. A las 6 AM, los canales de streaming transmiten audios de tu intimidad. La cueva clandestina ha iniciado la guerra total."
      }
    ]
  },

  doble_juego_embajadas: {
    id: "doble_juego_embajadas",
    titulo: "El Doble Juego de las Embajadas (El Cable de la CIA)",
    subtitulo: "La carpeta contra la multinacional petrolera choca contra Washington",
    icono: "fa-solid fa-flag-usa",
    gatillo: { operacionesEjecutadasMayorA: 2 },
    descripcion: "Tus espías lograron armar una carpeta de contrabando millonario contra una multinacional cerealera y petrolera. Pero antes de que puedas filtrarla, un agregado de la embajada norteamericana te invita a almorzar y te 'sugiere' planchar el expediente a cambio de que el FMI apruebe el desembolso trimestral.",
    opciones: [
      {
        id: "acatar_sugerencia_embajada",
        texto: "Congelar la carpeta y asegurar el desembolso del FMI para calmar las reservas.",
        impacto: { reservasBCRA: +500, roscaGobernadores: +10, soberania: -20, paranoia: +10 },
        relato: "El FMI aprueba las metas sin objeciones. La carpeta queda archivada en una caja fuerte de la calle 25 de Mayo con una faja sellada."
      },
      {
        id: "publicar_carpeta_patria",
        texto: "Desoír la advertencia y filtrar la carpeta denunciando saqueo de recursos soberanos.",
        impacto: { reservasBCRA: -300, dolarBlue: +80, trabajo: +20, claseMedia: -15 },
        relato: "El escándalo sacude las bolsas pero el FMI posterga las reuniones. El dólar blue se dispara mientras tus militantes celebran en la Plaza de Mayo."
      }
    ]
  },

  mano_obra_desocupada: {
    id: "mano_obra_desocupada",
    titulo: "La Venganza de la 'Mano de Obra Desocupada'",
    subtitulo: "200 agentes exonerados montan cuevas clandestinas en el Conurbano",
    icono: "fa-solid fa-ghost",
    gatillo: { amenazaFiltracionMayorA: 65 },
    descripcion: "Para dar un mensaje de austeridad republicana, recortaste el presupuesto de planta de la SIDE y echaste a 200 agentes inorgánicos. Lejos de buscar trabajo en el sector privado, los agentes armaron células clandestinas de espionaje y están subastando carpetas tuyas al mejor postor.",
    opciones: [
      {
        id: "comprar_silencio_cuevas",
        texto: "Mandar al Señor 5 a repartir US$ 2.000.000 en bolsos para recomprar los discos rígidos.",
        impacto: { fondos: -2000000, amenazaFiltracion: -35, sospechaBicameral: +15 },
        relato: "Se recuperan 14 discos rígidos y cientos de pendrives en un galpón de Avellaneda. El incendio fue contenido a un costo altísimo."
      },
      {
        id: "guerra_policial_allanamientos",
        texto: "Ordenar a la Policía Federal allanar las cuevas de espionaje clandestino a punta de pistola.",
        impacto: { seguridad: +10, mechaSocial: +20, amenazaFiltracion: +20, paranoia: +25 },
        relato: "Tiroteo en una cueva de Villa Martelli. Detienen a cuatro exagentes pero un servidor remoto sube 20 horas de escuchas a servidores en Suiza."
      }
    ]
  }
};

// =========================================================================
// 5. DILEMAS JUGABLES DE INTELIGENCIA
// =========================================================================
const DILEMAS_INTELIGENCIA = [
  {
    id: "dilema_dnu_fondos_reservados",
    etapaBadge: "Dilema de Inteligencia • El Poder Invisible",
    area: "SIDE / Fondos Reservados / Congreso",
    titulo: "El DNU de los Fondos Reservados y el Apagón de Senadores",
    descripcion: "Se te terminaron los fondos reservados para pagar la pauta encubierta a los medios amigos y sostener la estructura de bots en redes. Firmás un Decreto de Necesidad y Urgencia (DNU) asignando 100 millones de dólares en fondos reservados para la SIDE. La Cámara de Diputados vota para rechazar el decreto y solo te queda el Senado para salvarlo de la anulación definitiva.",
    explicacion: {
      queMide: "Mide si recurrís a la rosca oscura de valijas, a la capitulación institucional o a la extorsión pública por cadena nacional.",
      siDeAcuerdo: "Salvar los fondos garantiza recursos ilimitados pero arriesga la revelación de sobornos masivos.",
      siEnContra: "Acatar el rechazo te deja ciego frente a tus enemigos políticos y disuelve tus ejércitos digitales."
    },
    opciones: [
      {
        texto: "Opción A: La Valija en el Senado. Usar el 30% de los fondos ya girados para pagarle a cinco senadores de provincias chicas y que falten por 'problemas de salud', haciendo caer el quórum.",
        etiqueta: "Rosca Oscura / Valija",
        impacto12Axes: { diplomacia: 50, justicia: 20, seguridad: 75 },
        impactoSectores: { claseMedia: -10, circuloRojo: +10 },
        impactoSalud: { paranoia: +15, coronarias: -5 },
        impactoTermometro: { roscaGobernadores: +20, mechaSocial: +10 },
        impactoInteligencia: { fondosDelta: -30000000, fondosGanados: +70000000, sospechaBicameral: +35 },
        relato: "Los senadores faltan alegando gastroenteritis aguda. Salvaste el DNU, pero dos meses después uno de ellos compra una flota de 4x4 y el rumor enciende las redacciones."
      },
      {
        texto: "Opción B: Acatar el rechazo legislativo y gobernar sin fondos oscuros. Dejar caer el DNU, congelar las operaciones de inteligencia y mostrarte como un presidente republicano y transparente.",
        etiqueta: "Institucionalismo / Apagón",
        impacto12Axes: { justicia: 85, seguridad: 30, estatismo: 40 },
        impactoSectores: { claseMedia: +15, campo: +5 },
        impactoSalud: { paranoia: +35, coronarias: -10 },
        impactoTermometro: { roscaGobernadores: -20, mechaSocial: -5 },
        impactoInteligencia: { apagonInteligencia: true, fondosDelta: -10000000 },
        relato: "La prensa internacional aplaude tu apego a la ley, pero los servicios apagan los teléfonos: quedás ciego sobre lo que trama la oposición y tus trolls se pasan a trabajar para un rival."
      },
      {
        texto: "Opción C: El Carpetazo Masivo en Cadena Nacional. Amenazar públicamente a los jefes de bancada opositores mostrando capturas de pantalla de sus declaraciones juradas incongruentes si votan en contra.",
        etiqueta: "Chantaje Abierto / Choque Total",
        impacto12Axes: { justicia: 15, seguridad: 90, centralismo: 85 },
        impactoSectores: { claseMedia: -25, trabajo: +10 },
        impactoSalud: { paranoia: +25, coronarias: -15 },
        impactoTermometro: { mechaSocial: +30, roscaGobernadores: -30 },
        impactoInteligencia: { amenazaFiltracion: +40, sospechaBicameral: +50 },
        relato: "El pánico paraliza el recinto: la oposición levanta la sesión por terror, pero el país se fractura al extremo y te abren una causa penal por intimidación pública y extorsión de Estado."
      }
    ]
  },

  {
    id: "dilema_hackeo_ruso_bariloche",
    etapaBadge: "Dilema de Inteligencia • Ciberespionaje",
    area: "Comodoro Py / Medios / Telegram",
    titulo: "El Hackeo Ruso y los Chats de los Jueces en Bariloche",
    descripcion: "Una célula de hackers independientes filtra en un canal de Telegram 5.000 páginas de chats de WhatsApp entre los principales jueces de Comodoro Py, dos fiscales federales y los dueños de los tres canales de televisión más vistos del país, coordinando fallos judiciales y asados en una estancia privada en el sur argentino.",
    explicacion: {
      queMide: "Mide cómo capitalizás una filtración ilegal masiva: si para destruir a la corporación judicial, pactar impunidad mutua o reprimir la filtración.",
      siDeAcuerdo: "Usar los chats te permite arrinconar a los jueces pero desata una guerra mediática total de 24 horas.",
      siEnContra: "Pactar con los jueces cierra tus causas penales pero te ata a un pacto de silencio peligroso."
    },
    opciones: [
      {
        texto: "Opción A: Usar la filtración para demoler a los jueces en el Consejo de la Magistratura. Salir por cadena nacional a denunciar la connivencia judicial, exigir la renuncia de la Cámara Federal y pedir la intervención del Poder Judicial.",
        etiqueta: "Guerra Abierta Judicial",
        impacto12Axes: { justicia: 70, seguridad: 40, centralismo: 80 },
        impactoSectores: { trabajo: +20, claseMedia: -15, circuloRojo: -30 },
        impactoSalud: { paranoia: +25, coronarias: -10 },
        impactoTermometro: { mechaSocial: +25, roscaGobernadores: -15 },
        impactoInteligencia: { amenazaFiltracion: +20 },
        relato: "Tus bases militantes celebran en las calles, pero los canales involucrados inician una campaña feroz las 24 horas acusándote de ser un tirano que pisotea las garantías constitucionales."
      },
      {
        texto: "Opción B: Pactar en silencio con los jueces expuestos. Convocar a los jueces a una reunión reservada y prometerles que el Ministerio de Justicia y la SIDE declararán nulas las pruebas por 'intrusión ilegal', a cambio de que sobresean todas tus causas penales en 72 horas.",
        etiqueta: "Pacto de Impunidad Mutua",
        impacto12Axes: { justicia: 15, seguridad: 60, centralismo: 60 },
        impactoSectores: { circuloRojo: +20, claseMedia: -20 },
        impactoSalud: { paranoia: -20, coronarias: +10 },
        impactoTermometro: { roscaGobernadores: +15, mechaSocial: +10 },
        impactoInteligencia: { fondosDelta: -2000000, lealtadSr8: +25 },
        relato: "Cerrás tu frente judicial para siempre: los jueces dictan sobreseimientos exprés. Pero vivís con una espada de Damocles: si un juez arrepentido habla, el encubrimiento te tumba el gobierno."
      },
      {
        texto: "Opción C: Iniciar una cacería contra los hackers y allanar redacciones. Calificar la filtración como un ataque terrorista contra la seguridad de la República, mandar a la Policía Federal a allanar redacciones periodísticas y detener a informáticos locales.",
        etiqueta: "Censura y Escarmiento",
        impacto12Axes: { justicia: 25, seguridad: 95, centralismo: 90 },
        impactoSectores: { claseMedia: -30, campo: -10 },
        impactoSalud: { paranoia: +30, coronarias: -15 },
        impactoTermometro: { mechaSocial: +30, sospechaBicameral: +40 },
        impactoInteligencia: { sospechaBicameral: +45, amenazaFiltracion: +35 },
        relato: "Allanás redacciones y detenés informáticos, pero el Colegio de Periodistas y la Comisión Interamericana de DDHH te declaran enemigo público de la libertad de expresión."
      }
    ]
  },

  {
    id: "dilema_atentado_copitos",
    etapaBadge: "Dilema de Inteligencia • Cisne Negro",
    area: "Seguridad Presidencial / Custodia / Calle",
    titulo: "El Atentado Frustrado y el 'Cisne Negro' de la Calle",
    descripcion: "En un acto multitudinario en Rosario o La Matanza, la custodia presidencial reduce en el cordón de seguridad a un tipo con una pistola 9mm con la numeración limada que intentó gatillar a tres metros de tu persona. La pistola no tenía bala en la recámara. El atacante no tiene filiación política clara y vivía en una pensión vendiendo copitos de azúcar o medias en la calle.",
    explicacion: {
      queMide: "Mide cómo reaccionás frente a un intento de magnicidio: si alimentando la polarización heroica, desdramatizando institucionalmente o usando a la SIDE para incriminar rivales.",
      siDeAcuerdo: "La épica del sobreviviente moviliza a tus bases pero fractura irreversiblemente a la sociedad.",
      siEnContra: "Bajar el tono calma a los mercados pero te hace ver vulnerable y expone fallas groseras de custodia."
    },
    opciones: [
      {
        texto: "Opción A: Declarar el magnicidio frustrado y polarizar el país. Decretar feriado nacional de inmediato, acusar a la oposición y a los discursos de odio de los medios por el intento de asesinato y convocar a una marcha federal a Plaza de Mayo para blindar tu liderazgo.",
        etiqueta: "Épica de la Supervivencia",
        impacto12Axes: { justicia: 45, seguridad: 80, centralismo: 85 },
        impactoSectores: { trabajo: +25, claseMedia: -20 },
        impactoSalud: { paranoia: +40, coronarias: -20 },
        impactoTermometro: { mechaSocial: +35, roscaGobernadores: -25 },
        impactoInteligencia: { amenazaFiltracion: +15 },
        relato: "Un millón de personas colman la Plaza de Mayo bajo una marea de banderas. La oposición denuncia que fue una puesta en escena orquestada por la SIDE; el país queda partido en dos mitades irreconciliables."
      },
      {
        texto: "Opción B: Bajarle el tono y manejarlo como un hecho policial aislado. Dejar la investigación en manos de un fiscal ordinario, presentarlo como la acción de un desquiciado solitario y no alterar la agenda económica ni los viajes oficiales.",
        etiqueta: "Desdramatización Institucional",
        impacto12Axes: { justicia: 75, seguridad: 50, centralismo: 40 },
        impactoSectores: { claseMedia: +10, circuloRojo: +15 },
        impactoSalud: { paranoia: +10, coronarias: -5 },
        impactoTermometro: { mechaSocial: -10, dolarBlue: -20 },
        impactoInteligencia: { lealtadSr5: -15 },
        relato: "Evitás el pánico en los mercados y que caigan los bonos soberanos. Pero tus propios militantes te reprochan tibieza y acusan a tu entorno de descuidar tu vida por desidia criminal."
      },
      {
        texto: "Opción C: Usar a la SIDE para vincular al atacante con tus peores rivales. Ordenar al Señor 5 que 'encuentre' transferencias de dinero sospechosas desde las cuentas de un financista opositor hacia la familia del atacante.",
        etiqueta: "Montaje de Inteligencia Sucio",
        impacto12Axes: { justicia: 10, seguridad: 90, centralismo: 90 },
        impactoSectores: { claseMedia: -30, circuloRojo: -30 },
        impactoSalud: { paranoia: +50, coronarias: -25 },
        impactoTermometro: { mechaSocial: +45, sospechaBicameral: +50 },
        impactoInteligencia: { sospechaBicameral: +50, amenazaFiltracion: +50 },
        relato: "Detienen a los financistas de la oposición en un operativo espectacular. Pero a las dos semanas, Gendarmería descubre que la IP de la transferencia salió de la propia SIDE: quedás al borde del juicio político."
      }
    ]
  }
];

// =========================================================================
// 6. ESTRATEGIAS ANTE LA COMISIÓN BICAMERAL DE INTELIGENCIA
// =========================================================================
const ESTRATEGIAS_BICAMERAL = {
  enviar_sr5_declarar: {
    id: "enviar_sr5_declarar",
    nombre: "Enviar al Señor 5 a Declarar bajo Juramento",
    subtitulo: "Testimonio hermético sin confirmar ni desmentir",
    descripcion: "El Director General se sienta frente a diputados y senadores. Responde con evasivas amparado en el secreto de Estado.",
    requisitoLealtadSr5: 70,
    costoFondos: 0,
    relatoExito: "El Señor 5 torea a los legisladores opositores con frialdad. No aporta un solo papel pero esquiva la interpelación penal. La Bicameral pasa a cuarto intermedio.",
    relatoFallo: "El Señor 5 titubea ante las preguntas sobre los bolsos en Puerto Madero. La oposición eleva un pedido de desafuero y solicita la incautación de los libros contables."
  },

  bloqueo_fueros_secreto_estado: {
    id: "bloqueo_fueros_secreto_estado",
    nombre: "Invocar la Ley 25.520 y Rehusar la Concurrencia",
    subtitulo: "Cerrar las puertas de la SIDE con candado institucional",
    descripcion: "Firmás un decreto clasificando todas las actuaciones como Secreto Máximo de Estado y ordenás al Señor 5 no pisar el Congreso.",
    requisitoLealtadSr5: 40,
    costoFondos: 0,
    relatoExito: "Blindás los expedientes pero la oposición denuncia 'apagón institucional'. Los fondos quedan congelados hasta la próxima ley de presupuesto.",
    relatoFallo: "La Justicia Federal declara inconstitucional el decreto de secreto y ordena el allanamiento de la sede de la calle 25 de Mayo con la Policía de Seguridad Aeroportuaria."
  },

  operacion_valija_bicameral: {
    id: "operacion_valija_bicameral",
    nombre: "Operación 'Valija en la Bicameral' (Comprar el Dictamen)",
    subtitulo: "Pagar honorarios encubiertos a los miembros clave de la comisión",
    descripcion: "Girar US$ 2.500.000 de los fondos reservados para que los diputados opositores de provincias dialoguistas firmen un dictamen de archivo sin observaciones.",
    requisitoLealtadSr5: 0,
    costoFondos: 2500000,
    relatoExito: "El dictamen de la Comisión Bicameral sale firmado por mayoría concluyendo que 'no se observaron irregularidades operativas ni desvío de partidas'. Causa archivada.",
    relatoFallo: "Uno de los secretarios de la comisión filtra una foto de los fajos termosellados en el maletín. El escándalo por cohecho parlamentario llega a la tapa de los diarios."
  }
};

// =========================================================================
// 7. DESTINOS FINALES EN EL SUBMUNDO DE LA INTELIGENCIA
// =========================================================================
const DESTINOS_INTELIGENCIA_FINAL = {
  el_titiritero_de_las_sombras: {
    id: "el_titiritero_de_las_sombras",
    titulo: "El Titiritero de las Sombras (Maquiavelo Criollo)",
    icono: "fa-solid fa-chess-king",
    color: "purple",
    descripcion: "Usaste los fondos reservados y a la SIDE con frialdad quirúrgica. Supiste comprar voluntades en el Senado, amedrentar a jueces rebeldes y silenciar a la prensa sin dejar una sola huella dactilar probada.",
    epitafio: "Gobernó el país visible desde la Casa Rosada, pero doblegó a todos sus rivales desde el subsuelo de la calle 25 de Mayo."
  },

  victima_del_carpetazo_interno: {
    id: "victima_del_carpetazo_interno",
    titulo: "Víctima del Carpetazo Interno (Furia de la Tropa)",
    icono: "fa-solid fa-tape",
    color: "rose",
    descripcion: "Te confiaste en que los espías trabajaban para vos. Cuando intentaste recortarles los fondos o cambiar a los directores, el Señor 8 y los inorgánicos te filtraron audios que destruyeron tu presidencia.",
    epitafio: "Creó un monstruo de mil ojos para espiar a sus rivales y terminó devorado por sus propias criaturas."
  },

  apagon_republicano_ciego: {
    id: "apagon_republicano_ciego",
    titulo: "La Ceguera Republicana (El Mandatario Desarmado)",
    icono: "fa-solid fa-eye-slash",
    color: "sky",
    descripcion: "Quisiste gobernar con transparencia virginal en un país con subsuelos oscuros. Desfinanciaste la inteligencia y te negaste a pagar favores; tus rivales te jugaron con carpetazos y te enteraste de las crisis por la televisión.",
    epitafio: "Mantuvo las manos limpias de billetes termosellados, pero gobernó a ciegas en una jungla de depredadores profesionales."
  }
};

// =========================================================================
// 8. MOTOR DEL SISTEMA DE INTELIGENCIA DE LA SIDE
// =========================================================================
class SistemaInteligenciaSIDE {
  constructor() {
    this.fondosReservados = 14500000; // US$ 14.5 M en billetes termosellados
    this.lineasInterceptadas = 42;
    this.amenazaFiltracion = 35; // %
    this.sospechaBicameral = 25; // %
    this.lealtadSr5 = 90; // %
    this.lealtadSr8 = 55; // %
    this.apagonInteligencia = false;
    this.operacionesEjecutadas = [];
    this.historialCables = [
      { id: 1, emisor: "Señor 8", texto: "Líneas de 12 ministros y 8 jueces de Comodoro Py operativas con duplicación de SIM.", fecha: "Semana 1" },
      { id: 2, emisor: "Ciberespionaje", texto: "Granja de 50 módems en Constitución lista para repeler operetas opositoras.", fecha: "Semana 1" }
    ];
    this.carpetasSecretas = [
      { id: "carp_juez_federal", objetivo: "Juez Federal Comodoro Py", contenido: "Fotos en crucero por el Caribe con contratista de obra pública", estado: "Archivada" },
      { id: "carp_jefe_bloque", objetivo: "Jefe de Bloque Opositor", contenido: "Facturas apócrifas de consultora fantasma por US$ 400.000", estado: "Lista para usar" },
      { id: "carp_lider_sindical", objetivo: "Secretario General de Transporte", contenido: "Mansión en country de Pilar a nombre de chofer testaferro", estado: "Lista para usar" }
    ];
    this.destinoFinal = null;
  }

  ejecutarOperacionNegra(opId, motor) {
    const op = OPERACIONES_NEGRAS[opId];
    if (!op) return { exito: false, motivo: "Operación inexistente" };

    if (this.apagonInteligencia) {
      return {
        exito: false,
        motivo: "Apagón de Inteligencia activo: los servicios no reciben fondos y se niegan a operar."
      };
    }

    if (this.fondosReservados < op.costoFondos) {
      return {
        exito: false,
        motivo: `Fondos insuficientes: se requieren US$ ${(op.costoFondos / 1000000).toFixed(1)} M en efectivo.`
      };
    }

    // Descontar fondos
    this.fondosReservados -= op.costoFondos;
    this.amenazaFiltracion = Math.min(100, this.amenazaFiltracion + 10);
    this.sospechaBicameral = Math.min(100, this.sospechaBicameral + 12);

    // Calcular probabilidad de éxito
    // Éxito depende de lealtadSr8 y amenaza de filtración actual
    const factorRiesgo = op.riesgoFiltracion + (this.amenazaFiltracion > 60 ? 25 : 0) - (this.lealtadSr8 > 70 ? 15 : 0);
    const dado = Math.random() * 100;
    const esExito = dado >= factorRiesgo;

    let resultado = null;
    if (esExito) {
      resultado = op.efectoExito;
      this.operacionesEjecutadas.push({ id: op.id, fecha: Date.now(), exito: true });

      // Aplicar impactos en motor si existe
      if (motor?.termometroCriollo) {
        if (resultado.roscaGobernadores) motor.termometroCriollo.roscaGobernadores = Math.min(100, Math.max(0, motor.termometroCriollo.roscaGobernadores + resultado.roscaGobernadores));
        if (resultado.mechaSocial) motor.termometroCriollo.mechaSocial = Math.min(100, Math.max(0, motor.termometroCriollo.mechaSocial + resultado.mechaSocial));
      }
      if (motor?.saludSupervivencia) {
        if (resultado.paranoia) motor.saludSupervivencia.paranoia = Math.min(100, Math.max(0, motor.saludSupervivencia.paranoia + resultado.paranoia));
      }
      if (motor?.aprobacionSectores) {
        if (resultado.sindical) motor.aprobacionSectores.trabajo = Math.max(5, motor.aprobacionSectores.trabajo + resultado.sindical);
      }

      this.historialCables.unshift({
        id: Date.now(),
        emisor: "Señor 5",
        texto: `Operación exitosa: ${op.nombre}. ${resultado.relato.substring(0, 90)}...`,
        fecha: "Hoy"
      });
    } else {
      resultado = op.efectoFallo;
      this.operacionesEjecutadas.push({ id: op.id, fecha: Date.now(), exito: false });
      this.amenazaFiltracion = Math.min(100, this.amenazaFiltracion + 30);
      this.sospechaBicameral = Math.min(100, this.sospechaBicameral + 25);

      if (motor?.saludSupervivencia) {
        if (resultado.paranoia) motor.saludSupervivencia.paranoia = Math.min(100, motor.saludSupervivencia.paranoia + resultado.paranoia);
      }
      if (motor?.termometroCriollo) {
        if (resultado.mechaSocial) motor.termometroCriollo.mechaSocial = Math.min(100, motor.termometroCriollo.mechaSocial + resultado.mechaSocial);
      }
      if (motor?.aprobacionSectores) {
        if (resultado.claseMedia) motor.aprobacionSectores.claseMedia = Math.max(5, motor.aprobacionSectores.claseMedia + resultado.claseMedia);
      }

      this.historialCables.unshift({
        id: Date.now(),
        emisor: "ALERTA SIDE",
        texto: `FILTRACIÓN GRAVE en ${op.nombre}: ${resultado.relato.substring(0, 90)}...`,
        fecha: "Hoy"
      });
    }

    return {
      operacion: op,
      exito: esExito,
      fondosRestantes: this.fondosReservados,
      amenazaFiltracion: this.amenazaFiltracion,
      sospechaBicameral: this.sospechaBicameral,
      relato: esExito ? op.efectoExito.relato : op.efectoFallo.relato
    };
  }

  gastarFondos(usoId, motor) {
    const uso = USOS_FONDOS_RESERVADOS[usoId];
    if (!uso) return { exito: false, motivo: "Gasto inexistente" };

    if (this.fondosReservados < uso.costo) {
      return {
        exito: false,
        motivo: `Fondos insuficientes: se requieren US$ ${(uso.costo / 1000000).toFixed(1)} M en efectivo.`
      };
    }

    this.fondosReservados -= uso.costo;
    this.sospechaBicameral = Math.min(100, this.sospechaBicameral + (uso.impactoSospechaBicameral || 10));

    if (uso.beneficioAmenazaFiltracion) {
      this.amenazaFiltracion = Math.max(5, this.amenazaFiltracion + uso.beneficioAmenazaFiltracion);
    }

    if (motor) {
      if (uso.beneficioRosca && motor.termometroCriollo) {
        motor.termometroCriollo.roscaGobernadores = Math.min(100, motor.termometroCriollo.roscaGobernadores + uso.beneficioRosca);
      }
      if (uso.reduccionMecha && motor.termometroCriollo) {
        motor.termometroCriollo.mechaSocial = Math.max(5, motor.termometroCriollo.mechaSocial + uso.reduccionMecha);
      }
      if (uso.beneficioImagen && motor.aprobacionSectores) {
        motor.aprobacionSectores.claseMedia = Math.min(100, motor.aprobacionSectores.claseMedia + uso.beneficioImagen);
      }
      if (usoId === 'sobresueldo_juez_federal' && motor.expedienteJudicial) {
        // Alivia temporalmente la causa en Comodoro Py
        motor.expedienteJudicial.fianzaMonto = Math.max(0, motor.expedienteJudicial.fianzaMonto - 1000000);
      }
    }

    this.historialCables.unshift({
      id: Date.now(),
      emisor: "Tesorería 25 de Mayo",
      texto: `Giro de US$ ${(uso.costo / 1000000).toFixed(1)} M para ${uso.nombre}. Fondos: US$ ${(this.fondosReservados / 1000000).toFixed(1)} M.`,
      fecha: "Hoy"
    });

    return {
      exito: true,
      uso: uso,
      fondosRestantes: this.fondosReservados,
      sospechaBicameral: this.sospechaBicameral,
      relato: uso.relato
    };
  }

  resolverCitacionBicameral(estrategiaId, motor) {
    const estr = ESTRATEGIAS_BICAMERAL[estrategiaId] || ESTRATEGIAS_BICAMERAL.enviar_sr5_declarar;

    let exito = false;
    let relato = "";

    if (estrategiaId === 'enviar_sr5_declarar') {
      exito = this.lealtadSr5 >= estr.requisitoLealtadSr5;
      if (exito) {
        this.sospechaBicameral = Math.max(10, this.sospechaBicameral - 30);
        relato = estr.relatoExito;
      } else {
        this.sospechaBicameral = 95;
        this.apagonInteligencia = true;
        relato = estr.relatoFallo;
      }
    } else if (estrategiaId === 'bloqueo_fueros_secreto_estado') {
      exito = this.lealtadSr5 >= estr.requisitoLealtadSr5;
      this.apagonInteligencia = true; // fondos congelados
      if (exito) {
        relato = estr.relatoExito;
      } else {
        relato = estr.relatoFallo;
        if (motor?.saludSupervivencia) motor.saludSupervivencia.paranoia = Math.min(100, motor.saludSupervivencia.paranoia + 30);
      }
    } else if (estrategiaId === 'operacion_valija_bicameral') {
      if (this.fondosReservados >= estr.costoFondos) {
        this.fondosReservados -= estr.costoFondos;
        exito = Math.random() < 0.8;
        if (exito) {
          this.sospechaBicameral = 15;
          relato = estr.relatoExito;
        } else {
          this.sospechaBicameral = 100;
          relato = estr.relatoFallo;
        }
      } else {
        exito = false;
        relato = "No tenés los US$ 2.5 M en efectivo para la valija. Los legisladores avanzan con la imputación.";
      }
    }

    return {
      estrategia: estr,
      exito: exito,
      sospechaBicameral: this.sospechaBicameral,
      apagonInteligencia: this.apagonInteligencia,
      relato: relato
    };
  }

  evaluarLeyBoomerang(motor) {
    // Si la amenaza de filtración es muy alta o lealtad del Señor 8 cayó
    if (this.lealtadSr8 < 40 && this.fondosReservados < 3000000) {
      return EVENTOS_BOOMERANG_SIDE.extorsion_sr8;
    }
    if (this.amenazaFiltracion > 65) {
      return EVENTOS_BOOMERANG_SIDE.mano_obra_desocupada;
    }
    if (this.operacionesEjecutadas.length >= 3) {
      return EVENTOS_BOOMERANG_SIDE.doble_juego_embajadas;
    }
    return null;
  }

  determinarDestinoFinal(motor) {
    if (this.apagonInteligencia) {
      this.destinoFinal = DESTINOS_INTELIGENCIA_FINAL.apagon_republicano_ciego;
    } else if (this.amenazaFiltracion > 60 || this.lealtadSr8 < 40) {
      this.destinoFinal = DESTINOS_INTELIGENCIA_FINAL.victima_del_carpetazo_interno;
    } else {
      this.destinoFinal = DESTINOS_INTELIGENCIA_FINAL.el_titiritero_de_las_sombras;
    }
    return this.destinoFinal;
  }

  obtenerResumen() {
    let dest = this.destinoFinal;
    if (!dest) {
      if (this.apagonInteligencia) dest = DESTINOS_INTELIGENCIA_FINAL.apagon_republicano_ciego;
      else if (this.amenazaFiltracion > 60 || this.lealtadSr8 < 40) dest = DESTINOS_INTELIGENCIA_FINAL.victima_del_carpetazo_interno;
      else dest = DESTINOS_INTELIGENCIA_FINAL.el_titiritero_de_las_sombras;
    }

    return {
      fondosReservados: this.fondosReservados,
      lineasInterceptadas: this.lineasInterceptadas,
      amenazaFiltracion: this.amenazaFiltracion,
      sospechaBicameral: this.sospechaBicameral,
      lealtadSr5: this.lealtadSr5,
      lealtadSr8: this.lealtadSr8,
      apagonInteligencia: this.apagonInteligencia,
      operacionesEjecutadasCount: this.operacionesEjecutadas.length,
      carpetasCount: this.carpetasSecretas.length,
      cablesRecientes: this.historialCables.slice(0, 3),
      destinoFinal: dest
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ESTRUCTURA_CASA_SIDE,
    USOS_FONDOS_RESERVADOS,
    OPERACIONES_NEGRAS,
    EVENTOS_BOOMERANG_SIDE,
    DILEMAS_INTELIGENCIA,
    ESTRATEGIAS_BICAMERAL,
    DESTINOS_INTELIGENCIA_FINAL,
    SistemaInteligenciaSIDE
  };
}

if (typeof window !== 'undefined') {
  window.ESTRUCTURA_CASA_SIDE = ESTRUCTURA_CASA_SIDE;
  window.USOS_FONDOS_RESERVADOS = USOS_FONDOS_RESERVADOS;
  window.OPERACIONES_NEGRAS = OPERACIONES_NEGRAS;
  window.EVENTOS_BOOMERANG_SIDE = EVENTOS_BOOMERANG_SIDE;
  window.DILEMAS_INTELIGENCIA = DILEMAS_INTELIGENCIA;
  window.ESTRATEGIAS_BICAMERAL = ESTRATEGIAS_BICAMERAL;
  window.DESTINOS_INTELIGENCIA_FINAL = DESTINOS_INTELIGENCIA_FINAL;
  window.SistemaInteligenciaSIDE = SistemaInteligenciaSIDE;
}
