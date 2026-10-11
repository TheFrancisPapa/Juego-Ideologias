// prensa_pauta_medios.js - Sistema de Medios, Pauta Oficial, Conferencias y Entrevistas Trampa
// Simulación integral de la guerra comunicacional, blindaje, trolls y prime time en Argentina.

// =========================================================================
// 1. LOS ESQUEMAS DE PAUTA Y LOS BOLSILOS A ALIMENTAR
// =========================================================================

const ESQUEMAS_PAUTA = {
  pauta_cero: {
    id: "pauta_cero",
    nombre: "Pauta Cero / Motosierra",
    icono: "fa-solid fa-scissors",
    color: "rose",
    descripcion: "Ahorrás millones de fondos públicos, pero los grandes multimedios te declaran la guerra total en prime time y te buscan causas todos los domingos.",
    costoMensualM: 0,
    blindajeBase: 20,
    riesgoGuerraMediatica: 85,
    relato: "Cortaste la pauta formal al 100%. Las empresas periodísticas recortan sueldos y te declaran enemigo público #1."
  },

  esquema_tradicional: {
    id: "esquema_tradicional",
    nombre: "El Esquema Tradicional",
    icono: "fa-solid fa-money-bill-wave",
    color: "amber",
    descripcion: "Repartís contratos publicitarios a los grandes grupos para tener coberturas amables, editoriales benévolas y tapas de diario blindadas.",
    costoMensualM: 800,
    blindajeBase: 70,
    riesgoGuerraMediatica: 15,
    relato: "Pauta fluida y en regla. Los multimedios destacan la baja de la inflación núcleo y titulan con calma institucional."
  },

  pauta_barrani_ypf: {
    id: "pauta_barrani_ypf",
    nombre: "La Pauta Barrani / YPF & Bancos",
    icono: "fa-solid fa-gas-pump",
    color: "purple",
    descripcion: "Desvías pauta institucional de YPF, Banco Nación, Loterías y eventos culturales a streamers y periodistas amigos sin pasar por el presupuesto formal.",
    costoMensualM: 350,
    blindajeBase: 55,
    riesgoComodoroPy: 65,
    relato: "Canales paralelos de financiamiento. Granjas de influencers contentos, pero la oposición te prepara una denuncia por malversación."
  }
};

const BOLSILLOS_MEDIOS = {
  multimedios_concentrados: {
    id: "multimedios_concentrados",
    nombre: "Multimedios Concentrados (Clarín, La Nación, Infobae)",
    icono: "fa-solid fa-newspaper",
    color: "blue",
    alcance: "Portales líderes, prensa gráfica de domingo y TV abierta",
    costoMensualM: 350,
    siPagas: "Cubren marchas en página 18, destacan la 'disciplina fiscal' y mandan cronistas complacientes a las giras oficiales.",
    siCortas: "Tres investigaciones de tu patrimonio en tapa de domingo, zócalo con 'CRISIS' en tipografía catástrofe y lupa sobre cada licitación."
  },

  ecosistema_militante: {
    id: "ecosistema_militante",
    nombre: "Ecosistema C5N, Crónica & Medios Populares",
    icono: "fa-solid fa-tv",
    color: "rose",
    alcance: "Cable de noticias 24 hs, sindicatos y barriadas del Conurbano",
    costoMensualM: 200,
    siPagas: "Bajan la intensidad del drama social y mandan los móviles a cubrir perritos perdidos o notas de color.",
    siCortas: "Placa roja permanente, móvil en vivo desde comedores vacíos y sirena policial de fondo las 24 horas del día."
  },

  frente_streaming: {
    id: "frente_streaming",
    nombre: "El Frente de Streaming (Olga, Luzu, Neura, Blender, Carajo)",
    icono: "fa-solid fa-headset",
    color: "indigo",
    alcance: "Juventud, YouTube en vivo, TikTok y votantes centennials",
    costoMensualM: 150,
    siPagas: "Clips virales de 15 segundos en TikTok donde quedás como un líder carismático, relajado, auténtico y cercano.",
    siCortas: "Memes destructivos, jingles burlándose de tus tics faciales y recortes fuera de contexto que te destruyen el voto joven."
  },

  radios_interior: {
    id: "radios_interior",
    nombre: "Radios y Diarios del Interior (El Silenciador Federal)",
    icono: "fa-solid fa-tower-broadcast",
    color: "emerald",
    alcance: "Red informativa provincial en las 23 provincias y municipios",
    costoMensualM: 100,
    siPagas: "Paz informativa en el interior y caudillos provinciales tranquilos.",
    siCortas: "Los gobernadores te cobran la factura al día siguiente en el Senado votándote en contra los pliegos de jueces y embajadores."
  }
};

// =========================================================================
// 2. LA CONFERENCIA MATUTINA DE LAS 9:00 AM (EL PAREDÓN DE LA ROSADA)
// =========================================================================

const FAUNA_ACREDITADOS = {
  militante_comunitaria: {
    id: "militante_comunitaria",
    nombre: "El Militante de Radio Comunitaria",
    medio: "FM La Voz Barrial / Radio Trinchera",
    icono: "fa-solid fa-bullhorn",
    color: "rose",
    estilo: "Discurso de 4 minutos con voz indignada sobre la soberanía, la represión a los manteros y el precio del kilo de pan.",
    peligro: "Hacerte perder los estribos para que lo mandes a callar en vivo y convertirte en tendencia por 'ataque a la libertad de prensa'.",
    pregunta: "¿Cómo duerme a la noche sabiendo que los abuelos comen arroz partido mientras el gobierno le paga millones a los usureros de Wall Street?"
  },

  cronista_tradicional: {
    id: "cronista_tradicional",
    nombre: "La Cronista de Diario Tradicional",
    medio: "Diario de Gran Tirada / Cable Histórico",
    icono: "fa-solid fa-microphone",
    color: "blue",
    estilo: "Educada, sonriente, pero con una navaja bajo el saco. Pregunta con tono calmo sobre nepotismo y trompadas en Olivos.",
    peligro: "Desarmar tu relato oficial con un dato administrativo o judicial inapelable.",
    pregunta: "Vocero, ¿por qué el cuñado del ministro fue designado asesor con sueldo de subsecretario y si es verdad que anoche hubo gritos en Olivos?"
  },

  tiracentros_amigo: {
    id: "tiracentros_amigo",
    nombre: "El Ensobrado Amigo (El Tiracentros)",
    medio: "Portal Paraoficial / Red de Streaming Patriota",
    icono: "fa-solid fa-face-smile-wink",
    color: "emerald",
    estilo: "Admiración servil. Te deja la pelota picando en el área chica para que te luzcas con un monólogo.",
    peligro: "Quedar en ridículo por la obviedad del arreglo; el resto de la sala se ríe y murmura en vivo.",
    pregunta: "¿Cómo hace el Presidente para sostener semejante ritmo patriótico de 18 horas diarias a pesar del sabotaje golpista de la oposición?"
  },

  pasante_bloomberg: {
    id: "pasante_bloomberg",
    nombre: "El Pasante de Agencia Internacional",
    medio: "Reuters / Bloomberg / EFE",
    icono: "fa-solid fa-globe",
    color: "indigo",
    estilo: "Frío, técnico y en inglés neutro. Pregunta sobre reservas netas, default o devaluación inminente.",
    peligro: "Si contestás mal, se desploman las acciones de empresas argentinas en Wall Street a las 9:30 AM.",
    pregunta: "Con reservas netas negativas, ¿el Banco Central planea aplicar un desdoblamiento cambiario antes del cierre de mercados de este viernes?"
  }
};

const RESPUESTAS_CONFERENCIA = {
  domada_ironica: {
    id: "domada_ironica",
    nombre: "La Domada Irónica (Estilo 'Fin')",
    icono: "fa-solid fa-wand-magic-sparkles",
    color: "purple",
    descripcion: "Descalificar la pregunta con sarcasmo veloz, mirar a la cámara y rematar en una sola palabra seca.",
    impacto: {
      granjasTrollsDelta: +20,
      blindajeDelta: -10,
      claseMediaDelta: -5,
      relato: "El vocero clavó la mirada, esbozó una sonrisa de desprecio y remató: 'Fin'. La militancia digital lo convirtió en tendencia #1; ADEPA y FOPEA emitieron un comunicado de repudio."
    }
  },

  tecnicismo_aburrido: {
    id: "tecnicismo_aburrido",
    nombre: "El Tecnicismo Aburrido de 8 Minutos",
    icono: "fa-solid fa-book-open",
    color: "slate",
    descripcion: "Leer resoluciones del Boletín Oficial, series desestacionalizadas y coeficientes salariales con tono monocorde.",
    impacto: {
      blindajeDelta: +10,
      mechaSocialDelta: -5,
      relato: "Tras cuatro minutos de lectura de índices de precios mayoristas, los tres canales de cable levantaron el móvil en vivo por falta de rating. Escándalo desactivado."
    }
  },

  contraataque_personal: {
    id: "contraataque_personal",
    nombre: "El Contraataque Personal ('¿Quién te paga?')",
    icono: "fa-solid fa-crosshairs",
    color: "rose",
    descripcion: "Preguntarle al periodista cuánto cobra de pauta en su provincia o sacarle al aire una foto de su pasado militante.",
    impacto: {
      granjasTrollsDelta: +25,
      blindajeDelta: -25,
      paranoiaDelta: +15,
      relato: "El vocero le espetó: '¿Por qué no le contás a la audiencia los $5 millones de pauta que cobrás de una gobernación feudal?'. La sala estalló en murmullos; FOPEA declaró alerta roja."
    }
  },

  respuesta_institucional: {
    id: "respuesta_institucional",
    nombre: "La Respuesta Institucional Evasiva",
    icono: "fa-solid fa-building-columns",
    color: "sky",
    descripcion: "Contestar con corrección política y evasivas clásicas ('Estamos evaluando todas las alternativas en el marco de la ley').",
    impacto: {
      blindajeDelta: -5,
      mechaSocialDelta: +2,
      relato: "Una respuesta tibia llena de lugares comunes. La cronista sonrió triunfal y los canales clavaron zócalo en pantalla: 'EL GOBIERNO TITUBEA Y NO ACLARA EL ESCÁNDALO'."
    }
  }
};

// =========================================================================
// 3. LAS ENTREVISTAS TRAMPA (EL TOUR DEL PRIME TIME)
// =========================================================================

const ENTREVISTAS_PRIME_TIME = {
  mesaza_domingo: {
    id: "mesaza_domingo",
    nombre: "La Mesaza del Domingo",
    conductor: "Mirtha Legrand / Juana Viale",
    canal: "El Trece",
    icono: "fa-solid fa-utensils",
    color: "amber",
    audiencia: "Clase media tradicional, abuelas y familias de domingo",
    trampa: "Te sirven lomo con papas rústicas y, mientras masticás, te clavan la mirada: 'Dígame, Presidente, ¿usted sabe cuánto cuesta un kilo de queso cremoso en el súper? Porque la gente no llega a fin de mes'.",
    riesgoDanio: "Medio-Alto: Si titubeás con los precios de la comida, quedás como un oligarca desconectado de la realidad ante 3 millones de personas.",
    opcionesEstrategia: [
      {
        id: "conocer_precio",
        nombre: "Tirar precio exacto de oferta en supermercado chino",
        exito: 80,
        relatoExito: "Dijiste el precio al centavo y remataste con un consejo de ahorro. Mirtha asintió con aprobación: 'Es un hombre que camina la calle'.",
        relatoFallo: "Tiraste un precio de hace tres años. Juana te corrigió al aire y las redes te liquidaron con memes de desconexión social."
      },
      {
        id: "filosofar_inflacion",
        nombre: "Salir por la tangente con teoría monetaria",
        exito: 50,
        relatoExito: "Explicaste la emisión y el rezago monetario con tanta claridad que la mesa quedó en silencio respetuoso.",
        relatoFallo: "Mirtha te interrumpió con un golpe en la mesa: 'No me hable de Milton Friedman, querido, le pregunté por el queso cremoso'."
      }
    ]
  },

  mano_a_mano_halcon: {
    id: "mano_a_mano_halcon",
    nombre: "El Mano a Mano del Halcón",
    conductor: "Eduardo Feinmann / Jonatan Viale",
    canal: "LN+ / A24",
    icono: "fa-solid fa-tv",
    color: "blue",
    audiencia: "Núcleo duro antipopulista, inversores y votantes de orden",
    trampa: "Media hora felicitándote por el déficit cero y la mano dura en la calle. Cuando te relajaste y sonreís, te bajan una pantalla táctil: 'Mire este contrato de Transporte con su socio de la juventud. ¿Esto no es casta, Presidente?'.",
    riesgoDanio: "Crítico: Te matan en tu propia cancha; tu núcleo duro entra en crisis de fe y desilusión.",
    opcionesEstrategia: [
      {
        id: "desconocimiento_auditoria",
        nombre: "Anunciar auditoría inmediata y suspensión del contrato",
        exito: 75,
        relatoExito: "Mostraste reflejos de hierro. El conductor celebró tu implacabilidad moral: 'Esto ningún gobierno anterior se animó a hacerlo'.",
        relatoFallo: "Tartamudeaste intentando justificar la idoneidad del socio. El conductor te remató: 'Presidente, no me decepcione'."
      },
      {
        id: "enfrentar_periodista",
        nombre: "Cuestionar la fuente de la filtración en vivo",
        exito: 40,
        relatoExito: "Desnudaste que la carpeta venía de un operador judicial despechado y diste vuelta la mesa.",
        relatoFallo: "El periodista sacó las fojas firmadas del maletín y el rating trepó a 7 puntos en LN+."
      }
    ]
  },

  tribunal_fuego: {
    id: "tribunal_fuego",
    nombre: "El Tribunal del Fuego",
    conductor: "Panel de Duro de Domar / C5N",
    canal: "C5N",
    icono: "fa-solid fa-fire",
    color: "rose",
    audiencia: "Oposición movilizada, sindicatos y militancia combativa",
    trampa: "Emboscada romana. El conductor no te deja terminar una frase, los 4 panelistas te gritan al unísono y en el zócalo ponen: 'EL MODELO DE HAMBRE NO CIERRA SIN PALOS'.",
    riesgoDanio: "Extremo: Si aguantás con aplomo sumás puntos de coraje cívico; si te quebrás o te levantás, te persiguen hasta el auto y te liquidan.",
    opcionesEstrategia: [
      {
        id: "estoicismo_sereno",
        nombre: "Mantener calma zen y sonreír ante cada provocación",
        exito: 70,
        relatoExito: "No caíste en ninguna chicana. Los panelistas quedaron desbordados y tu imagen de estadista creció en sectores independientes.",
        relatoFallo: "Te subió la presión, te pusiste colorado y pegaste un portazo. Saliste en cámara corriendo por el pasillo."
      },
      {
        id: "pelea_cuerpo_a_cuerpo",
        nombre: "Bajar al fango y discutirles a los gritos",
        exito: 45,
        relatoExito: "Metiste tres frases para la historia y desarticulaste el coro con datos demoledores de gestiones pasadas.",
        relatoFallo: "El programa fue un griterío incomprensible; Crónica puso en placa roja: 'EL PRESIDENTE SE AGARRÓ A LAS PIÑAS EN LA TELE'."
      }
    ]
  },

  stream_relajado: {
    id: "stream_relajado",
    nombre: "El Stream Relajado de Living",
    conductor: "Alejandro Fantino (Neura) o Migue Granados (Olga)",
    canal: "YouTube / Twitch / Streams",
    icono: "fa-solid fa-couch",
    color: "purple",
    audiencia: "Comunidad sub-35, consumidores de podcast y redes",
    trampa: "Living entre amigos, fernet con coca, sin corbata. Te confiás, tirás una anécdota pasada de tono sobre un líder internacional o un gobernador, y el recorte de 15 segundos se vuelve crisis diplomática.",
    riesgoDanio: "Ruleta Rusa: 50% clip épico y viral / 50% conflicto con Brasil o Comodoro Py.",
    opcionesEstrategia: [
      {
        id: "filosofia_barrial",
        nombre: "Hablar de música, fútbol y anécdotas de juventud",
        exito: 85,
        relatoExito: "Fuiste auténtico. El clip de vos cantando un tema de rock nacional cosechó 8 millones de reproducciones en TikTok.",
        relatoFallo: "Tiraste un chiste de mal gusto sobre la suegra de un gobernador y se convirtió en escándalo nacional."
      },
      {
        id: "confesion_politica",
        nombre: "Contar intimidades de la rosca en Olivos",
        exito: 35,
        relatoExito: "La gente valoró la honestidad brutal y sentiste un salto de popularidad orgánica.",
        relatoFallo: "Revelaste que a un ministro 'le cuesta arrancar a la mañana'. El ministro presentó renuncia a la media hora."
      }
    ]
  }
};

// =========================================================================
// 4. ACCIONES TÁCTICAS DE PRENSA & OPERACIONES DIGITALES
// =========================================================================

const ACCIONES_TACTICAS_PRENSA = {
  bajar_noticia_pauta_ypf: {
    id: "bajar_noticia_pauta_ypf",
    nombre: "Bajar Noticia con Pauta de YPF",
    icono: "fa-solid fa-arrow-down-wide-short",
    color: "blue",
    descripcion: "Girar una partida de auspicios de empresas estatales a dos portales líderes para bajar un título incómodo de la portada.",
    costoPautaM: 120,
    impacto: {
      blindajeDelta: +15,
      pautaBarraniM: +120,
      relato: "Llamado a la gerencia comercial de los portales: se activó un banner de YPF y la noticia del salto inflacionario pasó al fondo del home."
    }
  },

  trending_topic_distraccion: {
    id: "trending_topic_distraccion",
    nombre: "Operativo Trending Topic de Distracción",
    icono: "fa-solid fa-hashtag",
    color: "purple",
    descripcion: "Activar granjas de trolls y cuentas afines para copar X/TikTok con un escándalo de la farándula o un chat filtrado de la oposición.",
    costoPautaM: 50,
    impacto: {
      granjasTrollsDelta: +15,
      mechaSocialDelta: -5,
      relato: "Las granjas metieron 40.000 tuits en 45 minutos. El país entero habla del video íntimo de un diputado opositor y se olvidó de la suba de la nafta."
    }
  },

  cadena_nacional_tapada: {
    id: "cadena_nacional_tapada",
    nombre: "Cadena Nacional de 40 Minutos",
    icono: "fa-solid fa-bullhorn",
    color: "rose",
    descripcion: "Obligar a toda la radio y televisión del país a transmitir un mensaje presidencial sorpresa en pleno prime time para tapar un informe periodístico.",
    costoPautaM: 0,
    impacto: {
      blindajeDelta: +10,
      mechaSocialDelta: +15,
      paranoiaDelta: +10,
      relato: "A las 21:59 sonó el Himno Nacional en todas las señales de aire y cable. El programa de investigación no pudo salir al aire, pero sonaron cacerolazos en Recoleta y Caballito."
    }
  },

  audiencia_privada_director_clarin: {
    id: "audiencia_privada_director_clarin",
    nombre: "Almuerzo Reservado en Puerto Madero",
    icono: "fa-solid fa-champagne-glasses",
    color: "amber",
    descripcion: "Sentarse a comer con el CEO del multimedios líder para negociar una tregua editorial a cambio de licitaciones de telecomunicaciones.",
    costoPautaM: 200,
    impacto: {
      blindajeDelta: +25,
      roscaGobernadoresDelta: -10,
      relato: "Dos horas de almuerzo en Puerto Madero con salmón y vino caro. El multimedios garantiza tapa de domingo con foco en el 'orden fiscal'."
    }
  }
};

// =========================================================================
// 5. DILEMAS MEDIÁTICOS DE 4 CAMINOS
// =========================================================================

const DILEMAS_MEDIOS = [
  {
    id: "dilema_medios_cronica_comedor",
    etapaBadge: "Prensa • Zócalo en Vivo",
    area: "Medios / Cobertura Social / Crisis Callejera",
    fase: "presidente",
    titulo: "El Móvil de Crónica en el Comedor de San Martín",
    descripcion: "Un móvil en vivo de Crónica TV enfoca a una mujer llorando con una cacerola vacía en la puerta de un comedor barrial cerrado por falta de presupuesto. De fondo, los chicos del barrio cantan contra tu gobierno. El programa marca picos de 6.5 puntos de rating y las redes empiezan a hervir con hashtags de renuncia.",
    explicacion: {
      queMide: "Mide cómo reaccionás ante la televisión de impacto popular en vivo: si hacés beneficencia teatral, atacás a la víctima o apretás al medio.",
      siDeAcuerdo: "Mandar alimentos apaga el zócalo pero incentiva 50 tomas simultáneas pidiendo cámara.",
      siEnContra: "Atacar a la mujer te consolida con el ala dura pero te deja como un monstruo ante la sociedad."
    },
    opciones: [
      {
        texto: "Opción A: Mandar dos camiones del Ejército cargados de alimentos secos en vivo al lugar. Crónica clava zócalo 'LLEGARON LOS VÍVERES'; los movimientos sociales de 10 provincias te arman cortes simultáneos exigiendo el mismo show mediático.",
        etiqueta: "Show de Asistencia / Efecto Contagio",
        impacto12Axes: { estatismo: 75, populismo: 80, pragmatismo: 70 },
        impactoSectores: { trabajo: +15, claseMedia: -10, productivo: -10 },
        impactoMacro: { resultadoFiscalPBI: -0.2 },
        impactoCriollo: { mechaSocial: -10, roscaGobernadores: +10 },
        impactoSalud: { coronarias: -5 },
        impactoMedios: { blindajeDelta: +10, relato: "Crónica transmitió la descarga de bolsas de harina con música emotiva de fondo." }
      },
      {
        texto: "Opción B: Tuitear que el comedor está trucho y que la señora es una militante rentada de la oposición. Tus militantes festejan la desmentida; la mujer muestra la personería jurídica al aire y tu imagen se derrumba por insensibilidad.",
        etiqueta: "Guerra en Redes / Bumerán Televisivo",
        impacto12Axes: { institucionalidad: 30, empatia: 15, seguridad: 75 },
        impactoSectores: { claseMedia: -25, trabajo: -30, seguridadJusticia: +10 },
        impactoMacro: { riesgoPais: +40 },
        impactoCriollo: { mechaSocial: +30, dolarBlue: +20 },
        impactoSalud: { paranoia: +25, coronarias: -8 },
        impactoMedios: { granjasTrollsDelta: +20, blindajeDelta: -25, relato: "El tuit presidencial fue catalogado de crueldad por los canales de noticias." }
      },
      {
        texto: "Opción C: Llamar al dueño del canal y amenazar con cortarle los contratos de publicidad de empresas del Estado. El productor levanta el móvil en 4 minutos; el dueño te anota la cuenta para cobrártela al triple en la próxima licitación.",
        etiqueta: "Apriete Telefónico / Deuda con el Círculo Rojo",
        impacto12Axes: { institucionalidad: 20, pragmatismo: 85, republicano: 15 },
        impactoSectores: { claseMedia: -10, grandesEmpresas: +10 },
        impactoMacro: { riesgoPais: +10 },
        impactoCriollo: { mechaSocial: +5 },
        impactoSalud: { paranoia: +15 },
        impactoMedios: { blindajeDelta: +15, pautaBarraniM: +80, relato: "El móvil se cortó de golpe por 'problemas satelitales' y mandaron tanda de YPF." }
      },
      {
        texto: "Opción D: Ignorar el hecho y no hacer ninguna declaración. La imagen de la cacerola vacía da la vuelta al mundo en agencias internacionales; el dólar blue sube 30 pesos por clima de desborde y vacío de poder.",
        etiqueta: "Silencio Absoluto / Corrida Cambiaria",
        impacto12Axes: { institucionalidad: 45, pragmatismo: 30 },
        impactoSectores: { claseMedia: -20, trabajo: -15 },
        impactoMacro: { riesgoPais: +60, inflacionMensual: +0.6 },
        impactoCriollo: { mechaSocial: +25, dolarBlue: +35 },
        impactoSalud: { paranoia: +20, coronarias: -10 },
        impactoMedios: { blindajeDelta: -20, relato: "El silencio de Olivos fue leído como debilidad por los mercados y la televisión." }
      }
    ]
  },

  {
    id: "dilema_medios_camara_oculta_valijero",
    etapaBadge: "Prensa • Opereta de Domingo",
    area: "Medios / Corrupción / Comodoro Py",
    fase: "presidente",
    titulo: "La Cámara Oculta del Valijero en el Estacionamiento",
    descripcion: "Un programa de investigación periodística anuncia para el domingo a las 22:00 hs la emisión de una cámara oculta donde se ve a tu Secretario de Obras Públicas recibiendo una caja de zapatos con 100.000 dólares termosellados de parte de un contratista de pavimento en el subsuelo de un shopping de Pilar.",
    explicacion: {
      queMide: "Mide tu manejo ante una prueba en video flagrante de corrupción: si purgas al funcionario, censurás la señal o comprás la cinta con fondos reservados.",
      siDeAcuerdo: "Echar al secretario salva tu investidura pero lo empuja a cantar como arrepentido en Comodoro Py.",
      siEnContra: "Censurar o comprar la cinta te deja rehén de los espías y los dueños de los canales."
    },
    opciones: [
      {
        texto: "Opción A: Echar al Secretario por decreto el domingo a las 20:00 hs (antes de que empiece el programa). Frenás el golpe directo; el exfuncionario va a Comodoro Py el lunes a la mañana y se acoge a la ley del arrepentido denunciando que la plata era para vos.",
        etiqueta: "Purga Preventiva / Amenaza de Arrepentido",
        impacto12Axes: { justicia: 70, institucionalidad: 65, pragmatismo: 50 },
        impactoSectores: { claseMedia: +10, seguridadJusticia: -15 },
        impactoMacro: { riesgoPais: +30 },
        impactoCriollo: { mechaSocial: +10, roscaGobernadores: -10 },
        impactoSalud: { paranoia: +30, coronarias: -8 },
        impactoMedios: { blindajeDelta: +15, relato: "Echaste al funcionario antes del graph. La prensa no pudo atribuirte complicidad directa." }
      },
      {
        texto: "Opción B: Operar con un juez amigo de Comodoro Py para dictar una medida cautelar que prohíba emitir el video. El video no sale por TV de aire; se filtra en minutos por Telegram y Reddit, ADEPA denuncia censura previa de dictadura y se desata el Efecto Streisand.",
        etiqueta: "Medida Cautelar / Efecto Streisand Total",
        impacto12Axes: { justicia: 15, institucionalidad: 20, autoritarismo: 85 },
        impactoSectores: { claseMedia: -35, trabajo: -20 },
        impactoMacro: { riesgoPais: +110 },
        impactoCriollo: { mechaSocial: +35, dolarBlue: +50 },
        impactoSalud: { paranoia: +35, coronarias: -12 },
        impactoMedios: { blindajeDelta: -40, fopeaRepudio: true, relato: "La pantalla quedó en negro 10 minutos por la orden judicial. El escándalo se multiplicó por diez en redes." }
      },
      {
        texto: "Opción C: Copar la parada con una Cadena Nacional sorpresa a la misma hora del programa. Obligás a todos los canales a transmitir un mensaje tuyo sobre historia económica; la gente sale a cacerolear a los balcones y el informe sale a la medianoche con récord de rating.",
        etiqueta: "Cadena Nacional de Prepo / Cacerolazo en Balcones",
        impacto12Axes: { institucionalidad: 30, populismo: 70, pragmatismo: 40 },
        impactoSectores: { claseMedia: -30, trabajo: -10 },
        impactoMacro: { riesgoPais: +50 },
        impactoCriollo: { mechaSocial: +25, dolarBlue: +30 },
        impactoSalud: { paranoia: +25, coronarias: -10 },
        impactoMedios: { blindajeDelta: -15, relato: "La cadena tapó el programa pero detonó un cacerolazo histórico en los centros urbanos." }
      },
      {
        texto: "Opción D: Comprar la cinta original al canal por US$ 500.000 de fondos reservados de la SIDE. La investigación nunca sale a la luz y el periodista estrella dice al aire que 'la denuncia no tenía sustento'; el dueño del canal te guarda la copia en su caja fuerte para extorsionarte todo el mandato.",
        etiqueta: "Compra de Cinta SIDE / Rehén del Multimedios",
        impacto12Axes: { institucionalidad: 15, pragmatismo: 90, justicia: 20 },
        impactoSectores: { claseMedia: +5, seguridadJusticia: -20 },
        impactoMacro: { reservasNetasBCRA: -1 },
        impactoCriollo: { mechaSocial: -10 },
        impactoSalud: { paranoia: +30, coronarias: -5 },
        impactoMedios: { blindajeDelta: +30, pautaBarraniM: +250, relato: "La investigación fue archivada en el canal bajo el rótulo de 'inconsistente'. Sos rehén del dueño del grupo." }
      }
    ]
  },

  {
    id: "dilema_medios_conferencia_fiesta_olivos",
    etapaBadge: "Prensa • Paredón de las 9 AM",
    area: "Medios / Ética Pública / Fiestón en Olivos",
    fase: "presidente",
    titulo: "La Pregunta Bomba en la Conferencia de las 9:00 AM",
    descripcion: "Una periodista acreditada levanta la mano y suelta la bomba en vivo: 'Vocero, tenemos confirmación de que la Primera Dama festejó su cumpleaños anoche en la Quinta de Olivos con 40 invitados, banda de cumbia y champagne importado, mientras rige el decreto de austeridad nacional y ahorro energético firmado por este gobierno. ¿Qué tiene para decirle a los argentinos que no pueden prender el aire acondicionado?'.",
    explicacion: {
      queMide: "Mide el control de crisis ante una transgresión de la propia regla moral del gobierno.",
      siDeAcuerdo: "Mentir da unas horas de tregua pero te inmola cuando salgan las fotos.",
      siEnContra: "Pedir perdón apaga el fuero penal pero exhibe debilidad ante el círculo rojo."
    },
    opciones: [
      {
        texto: "Opción A: Negarlo categóricamente y calificarlo como 'una burda opereta de los servicios residuales'. Ganás 3 horas de aire; al mediodía se filtran las fotos en alta definición brindando al lado de la pileta de Olivos y quedás expuesto como un mentiroso ante todo el país.",
        etiqueta: "Negación Cerrada / Filtración Demoledora",
        impacto12Axes: { institucionalidad: 20, verdad: 15, cinismo: 85 },
        impactoSectores: { claseMedia: -35, trabajo: -20 },
        impactoMacro: { riesgoPais: +70 },
        impactoCriollo: { mechaSocial: +30, dolarBlue: +45 },
        impactoSalud: { paranoia: +35, coronarias: -12 },
        impactoMedios: { blindajeDelta: -35, relato: "Las fotos de las copas de champagne en Olivos se convirtieron en la portada de todos los diarios del país." }
      },
      {
        texto: "Opción B: Admitir el error, pedir perdón de rodillas ante la cámara y anunciar la donación del sueldo del mes a un hospital pediátrico. Desarmás la causa penal por incumplimiento; tus enemigos te huelen débil, la oposición te presenta juicio político y Blender te dedica un sketch demoledor.",
        etiqueta: "Perdón Público / Debilidad Expuesta",
        impacto12Axes: { institucionalidad: 70, humildad: 80, pragmatismo: 50 },
        impactoSectores: { claseMedia: -10, trabajo: -5, saludPublica: +15 },
        impactoMacro: { riesgoPais: +20 },
        impactoCriollo: { mechaSocial: -5, roscaGobernadores: -15 },
        impactoSalud: { coronarias: -5, paranoia: +15 },
        impactoMedios: { blindajeDelta: +10, relato: "El pedido de disculpas amortiguó la causa penal, pero los humoristas hicieron un festín con la humillación." }
      },
      {
        texto: "Opción C: Echarle la culpa a la Primera Dama ('Fue una imprudencia de mi pareja que yo desconocía por estar trabajando'). Salvas la investidura presidencial; quedás como un canalla moral ante toda la sociedad, tu pareja te deja en un escándalo de divorcio y los programas de chismes copan la agenda dos meses.",
        etiqueta: "Escudo Conyugal / Escándalo de Farándula",
        impacto12Axes: { institucionalidad: 40, etica: 20, pragmatismo: 75 },
        impactoSectores: { claseMedia: -25, mujeresFamilias: -35 },
        impactoMacro: { riesgoPais: +30 },
        impactoCriollo: { mechaSocial: +15 },
        impactoSalud: { paranoia: +30, coronarias: -15 },
        impactoMedios: { blindajeDelta: -15, relato: "Los canales de chismes coparon las 24 horas del aire discutiendo el divorcio y los audios de la Primera Dama." }
      },
      {
        texto: "Opción D: Retirarte del atril sin decir una sola palabra y dar por terminada la conferencia de prensa. El silencio retumba en todo el país; Crónica clava zócalo parpadeante: 'HUIDA HISTÓRICA: EL VOCERO SE FUE CORRIENDO ANTE EL FIESTÓN DE OLIVOS'.",
        etiqueta: "Huida del Atril / Zócalo de Furia",
        impacto12Axes: { cobardia: 85, institucionalidad: 20, pragmatismo: 25 },
        impactoSectores: { claseMedia: -30, trabajo: -25 },
        impactoMacro: { riesgoPais: +90 },
        impactoCriollo: { mechaSocial: +35, dolarBlue: +60 },
        impactoSalud: { paranoia: +40, coronarias: -14 },
        impactoMedios: { blindajeDelta: -30, relato: "El video del funcionario cerrando la carpeta y escapando de la sala acumuló 12 millones de vistas en 2 horas." }
      }
    ]
  }
];

// =========================================================================
// 6. DESTINOS FINALES DE MEDIOS & COMUNICACIÓN
// =========================================================================

const DESTINOS_MEDIOS_FINAL = {
  hegemonia_comunicacional: {
    id: "hegemonia_comunicacional",
    nombre: "El Zar de las Granjas Digitales",
    icono: "fa-solid fa-microchip",
    color: "purple",
    subtitulo: "Dominio aplastante del algoritmo y neutralización del prime time",
    relato: "Hiciste de la comunicación un arte bélico contemporáneo. Tu ejército de trolls copó X y TikTok, los streams bailaron a tu ritmo y los multimedios tradicionales tuvieron que plegarse a tu agenda para no quebrar. Nadie pudo armarte una opereta sin terminar cancelado antes de medianoche."
  },

  pacto_circulo_rojo: {
    id: "pacto_circulo_rojo",
    nombre: "El Mandatario Ensobrado",
    icono: "fa-solid fa-newspaper",
    color: "amber",
    subtitulo: "Convivencia pacífica a base de pauta formal, subsidios y tapas a favor",
    relato: "Elegiste el camino clásico de la política criolla: la pauta oficial corrió como agua bendita por los despachos de los grandes multimedios. Tus crisis se titularon como 'desafíos macroeconómicos', tus desatinos pasaron a la página 22 y los movileros cubrieron inauguraciones de plazas con sonrisas."
  },

  pauta_cero_trinchera: {
    id: "pauta_cero_trinchera",
    nombre: "El Espartano sin Sobres",
    icono: "fa-solid fa-shield-halved",
    color: "rose",
    subtitulo: "Guerra frontal a muerte contra los monopolios periodísticos",
    relato: "No les pusiste un solo peso de pauta y te hicieron pagar cada segundo de tu mandato con sangre en vivo por televisión. Te inventaron parientes, te escudriñaron la basura y te clavaron placas rojas sin piedad. Sobreviviste a fuerza de trinchera ideológica, pero saliste con el lomo lleno de cicatrices mediáticas."
  },

  linchamiento_prime_time: {
    id: "linchamiento_prime_time",
    nombre: "La Víctima del Zócalo Catástrofe",
    icono: "fa-solid fa-skull",
    color: "red",
    subtitulo: "Devorado por las cámaras ocultas, los panelistas y la indignación televisiva",
    relato: "La televisión te devoró vivo. Cada domingo a la noche un programa de investigación te tiraba un ministro por la ventana, cada mañana el móvil en vivo mostraba a un vecino llorando por tus medidas y tus respuestas en el atril solo sirvieron para alimentar los jingles burlescos de los streamers. Fuiste un producto más de la picadora de carne del rating."
  }
};

// =========================================================================
// 7. CLASE SISTEMA DE PRENSA & MEDIOS
// =========================================================================

class SistemaPrensaMedios {
  constructor() {
    this.esquemaPauta = "esquema_tradicional";
    this.blindajeMediatico = 65; // 0 a 100%
    this.pautaPresupuestoFormalM = 800;
    this.pautaBarraniM = 0;
    this.granjasTrollsCapacidad = 60; // 0 a 100%
    this.gafesPresidencialesCount = 0;
    this.alertasFopeaCount = 0;

    this.bolsillosFinanciados = {
      multimedios_concentrados: true,
      ecosistema_militante: false,
      frente_streaming: true,
      radios_interior: true
    };

    this.historialOperaciones = [
      {
        id: "op_inicial",
        titulo: "Grifo de Pauta Habilitado",
        hora: "09:00 AM",
        texto: "Distribución tradicional de pauta a Clarín, La Nación e Infobae. Los móviles de la mañana cubren temas de tránsito y clima."
      }
    ];

    this.titularDelMomento = "Tensión en el Conurbano: Los precios de los lácteos saltaron 12% en una semana.";
  }

  agregarOperacion(titulo, texto) {
    this.historialOperaciones.unshift({
      id: "op_" + Date.now(),
      titulo,
      hora: new Date().toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" }),
      texto
    });
    if (this.historialOperaciones.length > 8) {
      this.historialOperaciones.pop();
    }
  }

  cambiarEsquemaPauta(nuevoEsquema, motor = null) {
    if (!ESQUEMAS_PAUTA[nuevoEsquema]) return { exito: false, mensaje: "Esquema inválido." };
    this.esquemaPauta = nuevoEsquema;
    const cfg = ESQUEMAS_PAUTA[nuevoEsquema];
    this.blindajeMediatico = Math.max(5, Math.min(95, cfg.blindajeBase));

    if (nuevoEsquema === "pauta_cero") {
      for (const k in this.bolsillosFinanciados) {
        this.bolsillosFinanciados[k] = false;
      }
      this.pautaPresupuestoFormalM = 0;
      if (motor && motor.macroeconomia) {
        motor.macroeconomia.resultadoFiscalPBI = +(motor.macroeconomia.resultadoFiscalPBI + 0.3).toFixed(2);
      }
    } else if (nuevoEsquema === "esquema_tradicional") {
      this.bolsillosFinanciados.multimedios_concentrados = true;
      this.bolsillosFinanciados.radios_interior = true;
      this.pautaPresupuestoFormalM = cfg.costoMensualM;
    } else if (nuevoEsquema === "pauta_barrani_ypf") {
      this.bolsillosFinanciados.frente_streaming = true;
      this.pautaBarraniM += 150;
      this.granjasTrollsCapacidad = Math.min(100, this.granjasTrollsCapacidad + 25);
    }

    this.agregarOperacion("Cambio de Pauta", cfg.relato);
    return { exito: true, esquema: cfg };
  }

  toggleBolsillo(bolsilloId, motor = null) {
    const b = BOLSILLOS_MEDIOS[bolsilloId];
    if (!b) return { exito: false, mensaje: "Bolsillo inválido." };

    const actual = !!this.bolsillosFinanciados[bolsilloId];
    this.bolsillosFinanciados[bolsilloId] = !actual;

    if (this.bolsillosFinanciados[bolsilloId]) {
      this.blindajeMediatico = Math.min(100, this.blindajeMediatico + 15);
      if (bolsilloId === "multimedios_concentrados") {
        this.titularDelMomento = "Gobierno ratifica rumbo económico con apoyo de sectores productivos.";
      }
      this.agregarOperacion("Fondeo Habilitado", `Se reactivaron los contratos de publicidad para ${b.nombre}.`);
    } else {
      this.blindajeMediatico = Math.max(5, this.blindajeMediatico - 20);
      if (bolsilloId === "multimedios_concentrados") {
        this.titularDelMomento = "DURÍSIMA INVESTIGACIÓN: Advierten severas inconsistencias en declaraciones juradas del PEN.";
      }
      this.agregarOperacion("Corte de Grifo", `Se suspendieron todos los aportes publicitarios a ${b.nombre}.`);
    }

    return { exito: true, activo: this.bolsillosFinanciados[bolsilloId], bolsillo: b };
  }

  ejecutarRespuestaConferencia(acreditadoId, respuestaId, motor = null) {
    const acr = FAUNA_ACREDITADOS[acreditadoId];
    const rta = RESPUESTAS_CONFERENCIA[respuestaId];
    if (!acr || !rta) return { exito: false, mensaje: "Acreditado o respuesta no encontrados." };

    // Aplicar impactos
    if (rta.impacto.blindajeDelta) {
      this.blindajeMediatico = Math.max(0, Math.min(100, this.blindajeMediatico + rta.impacto.blindajeDelta));
    }
    if (rta.impacto.granjasTrollsDelta) {
      this.granjasTrollsCapacidad = Math.max(0, Math.min(100, this.granjasTrollsCapacidad + rta.impacto.granjasTrollsDelta));
    }
    if (rta.id === "contraataque_personal") {
      this.alertasFopeaCount++;
    }

    if (motor) {
      if (motor.termometroCriollo && rta.impacto.mechaSocialDelta) {
        motor.termometroCriollo.mechaSocial = Math.max(0, Math.min(100, motor.termometroCriollo.mechaSocial + rta.impacto.mechaSocialDelta));
      }
      if (motor.saludSupervivencia && rta.impacto.paranoiaDelta) {
        motor.saludSupervivencia.paranoia = Math.max(0, Math.min(100, motor.saludSupervivencia.paranoia + rta.impacto.paranoiaDelta));
      }
    }

    const relato = `Preguntó ${acr.nombre} (${acr.medio}): '${acr.pregunta}'. Respuesta: ${rta.nombre}. ${rta.impacto.relato}`;
    this.agregarOperacion("Conferencia 9 AM", relato);
    return { exito: true, acreditado: acr, respuesta: rta, relato };
  }

  someterseAEntrevista(programaId, estrategiaId, motor = null) {
    const prog = ENTREVISTAS_PRIME_TIME[programaId];
    if (!prog) return { exito: false, mensaje: "Programa no encontrado." };

    const est = prog.opcionesEstrategia.find(e => e.id === estrategiaId) || prog.opcionesEstrategia[0];
    const dado = Math.floor(Math.random() * 100);
    const exito = dado < est.exito;

    if (exito) {
      this.blindajeMediatico = Math.min(100, this.blindajeMediatico + 20);
      this.titularDelMomento = `Gran impacto tras el paso del Presidente por ${prog.nombre}.`;
      if (motor && motor.termometroCriollo) {
        motor.termometroCriollo.mechaSocial = Math.max(0, motor.termometroCriollo.mechaSocial - 8);
      }
      this.agregarOperacion("Triunfo en Prime Time", est.relatoExito);
      return { exito: true, resultado: "triunfo", relato: est.relatoExito, programa: prog };
    } else {
      this.blindajeMediatico = Math.max(5, this.blindajeMediatico - 25);
      this.gafesPresidencialesCount++;
      this.titularDelMomento = `PAPELÓN EN VIVO: Fuerte cruce y traspié en el piso de ${prog.nombre}.`;
      if (motor && motor.saludSupervivencia) {
        motor.saludSupervivencia.paranoia = Math.min(100, motor.saludSupervivencia.paranoia + 15);
      }
      if (motor && motor.termometroCriollo) {
        motor.termometroCriollo.mechaSocial = Math.min(100, motor.termometroCriollo.mechaSocial + 10);
      }
      this.agregarOperacion("Derrota en Prime Time", est.relatoFallo);
      return { exito: true, resultado: "derrota", relato: est.relatoFallo, programa: prog };
    }
  }

  ejecutarAccionTactica(accionId, motor = null) {
    const accion = ACCIONES_TACTICAS_PRENSA[accionId];
    if (!accion) return { exito: false, mensaje: "Acción no encontrada." };

    if (accion.impacto.blindajeDelta) {
      this.blindajeMediatico = Math.max(0, Math.min(100, this.blindajeMediatico + accion.impacto.blindajeDelta));
    }
    if (accion.impacto.granjasTrollsDelta) {
      this.granjasTrollsCapacidad = Math.max(0, Math.min(100, this.granjasTrollsCapacidad + accion.impacto.granjasTrollsDelta));
    }
    if (accion.impacto.pautaBarraniM) {
      this.pautaBarraniM += accion.impacto.pautaBarraniM;
    }

    if (motor) {
      if (motor.termometroCriollo && accion.impacto.mechaSocialDelta) {
        motor.termometroCriollo.mechaSocial = Math.max(0, Math.min(100, motor.termometroCriollo.mechaSocial + accion.impacto.mechaSocialDelta));
      }
      if (motor.saludSupervivencia && accion.impacto.paranoiaDelta) {
        motor.saludSupervivencia.paranoia = Math.max(0, Math.min(100, motor.saludSupervivencia.paranoia + accion.impacto.paranoiaDelta));
      }
    }

    this.agregarOperacion("Acción de Medios", accion.impacto.relato);
    return { exito: true, accion, relato: accion.impacto.relato };
  }

  diagnosticarDestinoFinal(motor = null) {
    // 1. El Zar de las Granjas Digitales
    if (this.granjasTrollsCapacidad >= 75 && this.esquemaPauta === "pauta_barrani_ypf") {
      return DESTINOS_MEDIOS_FINAL.hegemonia_comunicacional;
    }

    // 2. El Espartano sin Sobres (Pauta Cero)
    if (this.esquemaPauta === "pauta_cero") {
      return DESTINOS_MEDIOS_FINAL.pauta_cero_trinchera;
    }

    // 3. Víctima del Zócalo Catástrofe
    if (this.blindajeMediatico < 35 || this.gafesPresidencialesCount >= 3) {
      return DESTINOS_MEDIOS_FINAL.linchamiento_prime_time;
    }

    // 4. El Mandatario Ensobrado (Pacto con el Círculo Rojo)
    return DESTINOS_MEDIOS_FINAL.pacto_circulo_rojo;
  }

  obtenerResumen() {
    return {
      esquemaPauta: this.esquemaPauta,
      blindajeMediatico: this.blindajeMediatico,
      pautaPresupuestoFormalM: this.pautaPresupuestoFormalM,
      pautaBarraniM: this.pautaBarraniM,
      granjasTrollsCapacidad: this.granjasTrollsCapacidad,
      gafesPresidencialesCount: this.gafesPresidencialesCount,
      alertasFopeaCount: this.alertasFopeaCount,
      bolsillosFinanciados: { ...this.bolsillosFinanciados },
      titularDelMomento: this.titularDelMomento,
      operacionesCount: this.historialOperaciones.length
    };
  }
}

// Compatibilidad de exportación dual
if (typeof window !== "undefined") {
  window.ESQUEMAS_PAUTA = ESQUEMAS_PAUTA;
  window.BOLSILLOS_MEDIOS = BOLSILLOS_MEDIOS;
  window.FAUNA_ACREDITADOS = FAUNA_ACREDITADOS;
  window.RESPUESTAS_CONFERENCIA = RESPUESTAS_CONFERENCIA;
  window.ENTREVISTAS_PRIME_TIME = ENTREVISTAS_PRIME_TIME;
  window.ACCIONES_TACTICAS_PRENSA = ACCIONES_TACTICAS_PRENSA;
  window.DILEMAS_MEDIOS = DILEMAS_MEDIOS;
  window.DESTINOS_MEDIOS_FINAL = DESTINOS_MEDIOS_FINAL;
  window.SistemaPrensaMedios = SistemaPrensaMedios;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    ESQUEMAS_PAUTA,
    BOLSILLOS_MEDIOS,
    FAUNA_ACREDITADOS,
    RESPUESTAS_CONFERENCIA,
    ENTREVISTAS_PRIME_TIME,
    ACCIONES_TACTICAS_PRENSA,
    DILEMAS_MEDIOS,
    DESTINOS_MEDIOS_FINAL,
    SistemaPrensaMedios
  };
}
