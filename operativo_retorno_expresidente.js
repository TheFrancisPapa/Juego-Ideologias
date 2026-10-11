/**
 * OPERATIVO_RETORNO_EXPRESIDENTE.JS
 * =============================================================================
 * Simulación del Operativo Retorno en la Política Argentina:
 * - Las 4 Fases del Retorno Histórico (Travesía del Desierto, Batalla Cultural,
 *   Refugio de los Fueros y La Jugada Maestra).
 * - La Trinchera Digital: Stream Propio ("El Instituto"), Archivo Positivo en TikTok
 *   y Gira de Living por Canales Rivales.
 * - Las Tres Alianzas del Perdón (Gobernadores Feudales, CGT y el Dirigente Traidor).
 * - Los 3 Dilemas del Retorno (El Teorema del Títere, El Pacto con Casación y
 *   La Rebelión de los Pibes vs. La Billetera de los Intendentes).
 * - Búnker del Retorno (Instituto Patria / Quinta de Pilar).
 * - La Victoria del Retorno: Reasunción triunfal, alfombra roja y Placa Roja de Crónica.
 * =============================================================================
 */

// 1. LAS 4 FASES DEL RETORNO HISTÓRICO
const FASES_OPERATIVO_RETORNO = {
  fase_desierto: {
    id: "fase_desierto",
    faseNumero: 1,
    nombre: "Fase 1: La Travesía del Desierto",
    aniosPoscaida: "Años 1 al 3 poscaída",
    icono: "fa-solid fa-tree",
    color: "slate",
    objetivo: "No ir preso en Comodoro Py y no desgastarse hablando de más en los medios.",
    tactica: "Silencio táctico absoluto. Dejás que los voceros de segunda línea tiren chicanas en Twitter. Te mostrás en fotos filtradas regando plantas en San Vicente, leyendo biografías de próceres y jugando con tus nietos.",
    efectoPsicologico: "La sociedad descarga toda la furia en el mandatario de turno. Con cada devaluación del nuevo presidente, tu gobierno anterior parece un poco menos desastroso.",
    citaFase: "«En la política argentina, el mejor discurso es el que no se pronuncia mientras tu rival se prende fuego solo.»"
  },

  fase_batalla_cultural: {
    id: "fase_batalla_cultural",
    faseNumero: 2,
    nombre: "Fase 2: La Trinchera Digital y el Mito Nostálgico",
    aniosPoscaida: "Años 3 al 5 poscaída",
    icono: "fa-solid fa-tower-broadcast",
    color: "rose",
    objetivo: "Conquistar a la juventud que era muy chica cuando te fuiste y reconstruir el núcleo duro militante.",
    tactica: "Lanzamiento de un libro autobiográfico de 600 páginas que agota doce ediciones en la Feria del Libro y desembarco masivo en plataformas de streaming con termo, mate y zócalos fluorescentes.",
    efectoPsicologico: "El eslogan implícito cala hondo: '¿Te acordás cuando el sueldo alcanzaba para comprar zapatillas y llenar el tanque? No era magia: era gestión'.",
    citaFase: "«Para los pibes de 18 años, nuestro gobierno ya no es una gestión: es una mitología dorada.»"
  },

  fase_refugio_fueros: {
    id: "fase_refugio_fueros",
    faseNumero: 3,
    nombre: "Fase 3: La Banca Protectora en el Senado",
    aniosPoscaida: "Años 5 al 6 poscaída",
    icono: "fa-solid fa-landmark",
    color: "amber",
    objetivo: "Conseguir inmunidad constitucional de arresto (Art. 69 CN), caja legislativa y centralidad política.",
    tactica: "Candidatura a Senador Nacional por tu provincia natal o la Provincia de Buenos Aires. Aunque pierdas la general, saliendo segundo entrás por la minoría.",
    efectoPsicologico: "Comodoro Py frena todas las órdenes de detención inmediata. Tu despacho del Senado se convierte en el búnker real donde los gobernadores hacen fila para pedir la bendición.",
    citaFase: "«Con fueros en el bolsillo y teléfono en el despacho, hasta los jueces de instrucción te atienden con respeto.»"
  },

  fase_jugada_maestra: {
    id: "fase_jugada_maestra",
    faseNumero: 4,
    nombre: "Fase 4: La Jugada Maestra",
    aniosPoscaida: "Año electoral presidencial",
    icono: "fa-solid fa-chess-king",
    color: "emerald",
    objetivo: "Recuperar la botonera del Poder Ejecutivo Nacional y volver a cruzar la explanada de Balcarce 50.",
    tactica: "Bifurcación estratégica: Candidatura heroica personal a todo o nada, o aplicación del Teorema del Candidato Títere (ungir a un moderado gris como presidente mientras retenés el poder real como vice).",
    efectoPsicologico: "La polarización llega a su clímax: o salvación nacional o resurrección del viejo régimen.",
    citaFase: "«La historia no se repite, pero rima con los mismos acordes de la marcha.»"
  }
};

// 2. LA TRINCHERA DIGITAL: STREAMING Y BATALLA NOSTÁLGICA
const ECOSISTEMA_DIGITAL_RETORNO = {
  stream_instituto: {
    id: "stream_instituto",
    nombre: "El Stream Propio («El Instituto»)",
    plataforma: "YouTube, Twitch y Kick",
    icono: "fa-solid fa-microphone-lines",
    color: "rose",
    formato: "Estudio propio con iluminación de neón cálida, mate con termo de acero, biblioteca de fondo y pizarrón.",
    audienciaMedia: "120.000 espectadores en vivo constantes",
    mecanica: "Hablás a cámara en remera, respondés preguntas de pibes de 18 años y analizás la inflación del presidente de turno con gráficos sencillos y chicanas mordaces.",
    efecto: "Consolida un núcleo duro fanático y saltea el cerco de los canales de aire.",
    modificadores: { audiencia: +250000, nostalgia: +15, lealtadPibes: +20 }
  },

  archivo_positivo_tiktok: {
    id: "archivo_positivo_tiktok",
    nombre: "El Ejército de TikTok («El Archivo Positivo»)",
    plataforma: "TikTok e Instagram Reels",
    icono: "fa-brands fa-tiktok",
    color: "purple",
    formato: "Clips vertiginosos de viejos discursos y cadenas nacionales musicalizados con trap, lofi y synthwave.",
    audienciaMedia: "3.5 millones de reproducciones por video",
    mecanica: "Para los adolescentes que solo vivieron la recesión del nuevo presidente, tus conferencias de hace siete años parecen el Imperio Romano: asado todos los fines de semana y cuotas sin interés.",
    efecto: "Desarma la imagen negativa entre los menores de 25 años.",
    modificadores: { audiencia: +500000, nostalgia: +25, imagenJoven: +30 }
  },

  gira_living_rival: {
    id: "gira_living_rival",
    nombre: "La Gira de Living en Territorio Rival",
    plataforma: "Neura, Olga, Blender o Canal Opositor",
    icono: "fa-solid fa-couch",
    color: "amber",
    formato: "Visita sorpresa al piso de un conductor opositor en horario central.",
    audienciaMedia: "Trend topic número uno durante 72 horas",
    mecanica: "No vas a confrontar: vas en tono de abuelo sabio, te reís de tus propios memes, admitís dos errores menores para desarmar y rematás con la pregunta letal: 'Pero decime la verdad... ¿la gente hoy vive mejor que antes?'.",
    efecto: "Destroza el relato oficialista y seduce al voto moderado e indeciso.",
    modificadores: { nostalgia: +20, votosCentro: +15, paranoiaGobierno: +30 }
  }
};

// 3. LAS TRES ALIANZAS DEL PERDÓN (TRAGAR SAPOS GIGANTES)
const TRES_ALIANZAS_PERDON = {
  gobernadores_feudales: {
    id: "gobernadores_feudales",
    actor: "Los Gobernadores Feudales del Interior",
    icono: "fa-solid fa-landmark-dome",
    color: "amber",
    rencorPasado: "Te cortaron el teléfono durante la crisis terminal, retuvieron la coparticipación y emitieron sus propios bonos provinciales (Patacones, Bocades) dejándote caer solo.",
    exigenciaParaSubirse: "Manejo exclusivo de los fondos de obra pública de sus provincias, tres ministerios nacionales de peso (Interior, Transporte, Obras Públicas) y el compromiso irrevocable de no pisarles las listas locales de diputados.",
    beneficioAlianza: "Aportan el aparato territorial de fiscales en 14 provincias y garantizan 35 senadores nacionales leales.",
    costoRechazo: "Te juegan en contra en las PASO y esconden tus boletas en el interior.",
    estado: "pendiente"
  },

  cupula_sindical: {
    id: "cupula_sindical",
    actor: "La Cúpula Sindical (CGT / Camioneros / Transporte)",
    icono: "fa-solid fa-people-group",
    color: "sky",
    rencorPasado: "Te clavaron tres paros generales por tiempo indeterminado en tus últimos seis meses de gestión y marcharon a la Plaza de Mayo con los piqueteros.",
    exigenciaParaSubirse: "Blindaje absoluto e intocable de las cajas de las obras sociales sindicales, paritarias libres sin techo fijado por Economía y la Secretaría de Trabajo para un dirigente propio.",
    beneficioAlianza: "Paz social garantizada durante el primer año de reasunción y movilización de 100.000 afiliados al acto de cierre de campaña en la avenida 9 de Julio.",
    costoRechazo: "Amenaza de huelgas preventivas y boicot al transporte en el día del comicio.",
    estado: "pendiente"
  },

  dirigente_traidor: {
    id: "dirigente_traidor",
    actor: "El Dirigente «Traidor» / Moderado",
    icono: "fa-solid fa-handshake",
    color: "emerald",
    rencorPasado: "El exministro o jefe de bancada que desfiló por todos los programas de TV de la noche declarando que tu ciclo político estaba 'muerto, agotado y sepultado'.",
    exigenciaParaSubirse: "Que le otorgues la candidatura principal de la fórmula presidencial (o la Jefatura de Gabinete con plenos poderes) y una foto sonriente en tu living comiendo medialunas para exhibir 'unidad nacional'.",
    beneficioAlianza: "Rompe el techo electoral del 42%, desarma la resistencia de la clase media urbana y te permite ganar en primera vuelta sin ir a balotaje.",
    costoRechazo: "Se presenta como candidato de una tercera vía y divide el voto peronista/opositor.",
    estado: "pendiente"
  }
};

// 4. LOS 3 DILEMAS JUGABLES DEL OPERATIVO RETORNO
const DILEMAS_OPERATIVO_RETORNO = {
  dilema_teorema_titere: {
    id: "dilema_teorema_titere",
    titulo: "Dilema 1: El Candidato Propio vs. El Teorema del Títere",
    icono: "fa-solid fa-chess-knight",
    faseRequerida: 4,
    escenario: "Las encuestas para la elección presidencial muestran que tu intención de voto dura es del 38% (te alcanza para ganar la primera vuelta caminando), pero tu techo electoral no supera el 42% por el rechazo de la clase media urbana tradicional: en un balotaje contra cualquier rival unificado, perdés 55 a 45.",
    opciones: [
      {
        id: "candidatura_heroica",
        texto: "Opción A (La Candidatura Heroica a Presidente): Ir vos mismo como cabeza de fórmula bancando la doctrina pura. «La patria no se negocia».",
        etiqueta: "A todo o nada / Doctrina pura",
        icono: "fa-solid fa-crown",
        color: "rose",
        impacto: {
          estrategiaElectoral: "personalista",
          riesgoBalotaje: 85,
          lealtadMilitante: +30,
          votoModerado: -20,
          relato: "Encabezás la fórmula con épica revolucionaria. Si la oposición se fractura en tres podés ganar en primera vuelta; si se unen para el balotaje, una derrota estrecha entierra tu leyenda definitivamente."
        }
      },
      {
        id: "dedo_magico_titere",
        texto: "Opción B (El Dedo Mágico: Poner a un Moderado de Fachada): Elegir por video un sábado a la mañana a un exrival moderado para presidente y anotarte vos como Vicepresidente.",
        etiqueta: "El Teorema del Títere / Balotaje asegurado",
        icono: "fa-solid fa-hand-point-right",
        color: "emerald",
        impacto: {
          estrategiaElectoral: "titere_vice",
          riesgoBalotaje: 15,
          votoModerado: +35,
          lealtadMilitante: -10,
          guerraInternaFutura: true,
          relato: "Jugada de ajedrez magistral. La fórmula gana en primera vuelta con el 48% sumando a los indecisos. Retenés el 70% del poder real en el Senado, aunque a los seis meses el presidente querrá volar solo."
        }
      },
      {
        id: "guardian_senado",
        texto: "Opción C (El Guardián del Senado): No integrar la fórmula presidencial, bendecir al candidato del aparato y quedarte como Presidente Provisional del Senado.",
        etiqueta: "Blindaje judicial / Poder en las sombras",
        icono: "fa-solid fa-landmark",
        color: "amber",
        impacto: {
          estrategiaElectoral: "guardian_senado",
          riesgoBalotaje: 40,
          impunidadJudicial: +40,
          poderPresidencialDirecto: -30,
          relato: "Te asegurás fueros vitalicios, control total de los pliegos de jueces federales y caja del Senado. Si el nuevo presidente fracasa, la culpa es de él; si triunfa, te jubila con diplomacia."
        }
      }
    ]
  },

  dilema_pacto_confiteria: {
    id: "dilema_pacto_confiteria",
    titulo: "Dilema 2: El Pacto de la Confitería con el Juez de Casación",
    icono: "fa-solid fa-gavel",
    faseRequerida: 3,
    escenario: "A cuatro meses de las elecciones legislativas donde encabezás la lista a Senadores Nacionales, la Sala IV de la Cámara Federal de Casación Penal tiene en su despacho la confirmación de una condena a 6 años de prisión con inhabilitación perpetua por una vieja causa de contratos viales. Si la firman antes del cierre de listas, no podés ser candidato.",
    opciones: [
      {
        id: "pacto_sombras_operador",
        texto: "Opción A (Pactar en las Sombras a través del Operador Judicial): Enviar a tu operador de confianza a reunirse en un subsuelo de Recoleta con el camarista para prometerle el pliego de su hijo como juez federal.",
        etiqueta: "Rosca judicial / Congelamiento de causa",
        icono: "fa-solid fa-user-secret",
        color: "slate",
        impacto: {
          causaCongelada: true,
          fuerosAsegurados: true,
          costoEtico: "Favores en la Magistratura",
          relato: "El camarista sufre una 'descompensación médica' providencial y posterga la audiencia para el año próximo. Entrás al Senado, jurás con fueros y la causa duerme en el cajón por diez años."
        }
      },
      {
        id: "guerra_abierta_lawfare",
        texto: "Opción B (La Guerra Abierta: Denunciar Lawfare y Proscripción): Romper el silencio en cadena de streaming, mostrar las fotos del juez jugando al paddle con el ministro de Justicia y convocar a tribunales.",
        etiqueta: "Polarización militante / Choque frontal",
        icono: "fa-solid fa-fire-flame-curved",
        color: "rose",
        impacto: {
          epicaMilitante: +35,
          falloAcelerado: true,
          amparoInternacional: true,
          relato: "La militancia rodea Comodoro Py bajo una lluvia torrencial. El tribunal, herido en su orgullo, firma la condena en tiempo récord. Quedás al borde de la inhabilitación apelando de urgencia a la Corte Suprema."
        }
      },
      {
        id: "paso_costado_dinastia",
        texto: "Opción C (El Paso al Costado Temporal): Retirar tu candidatura y poner en tu lugar a tu cónyuge o hijo/a para que la dinastía familiar retenga la banca.",
        etiqueta: "Plan dinástico / Riesgo domiciliario",
        icono: "fa-solid fa-people-roof",
        color: "amber",
        impacto: {
          bancaDinastica: true,
          sinFuerosPersonales: true,
          prisionDomiciliariaRiesgo: 70,
          relato: "Tu hijo jura la banca de Senador con ovación en las galerías, pero vos quedás sin fueros en tu quinta esperando que un juez federal te libre orden de detención domiciliaria con tobillera electrónica."
        }
      }
    ]
  },

  dilema_rebelion_pibes: {
    id: "dilema_rebelion_pibes",
    titulo: "Dilema 3: La Rebelión de los Pibes vs. La Billetera de los Intendentes",
    icono: "fa-solid fa-users-gear",
    faseRequerida: 3,
    escenario: "Faltan 48 horas para el cierre formal de listas de candidatos para tu regreso al Congreso. Tu agrupación juvenil de streaming y redes te exige que los primeros puestos sean para influencers militantes y universitarios que bancaron la resistencia. Por otro lado, los barones del Conurbano te ponen la pistola sobre la mesa: «Si no van nuestros secretarios de gobierno en la lista, te escondemos las boletas en las mesas de la Tercera Sección».",
    opciones: [
      {
        id: "entregar_a_barones",
        texto: "Opción A (Entregarle la Lista a los Barones Territoriales): Llenar las bancas con los punteros de los intendentes y mandar a los influencers al puesto 18 (donde no entra nadie).",
        etiqueta: "Aparato y micros / Furia juvenil",
        icono: "fa-solid fa-bus",
        color: "amber",
        impacto: {
          fiscalizacionAparato: 100,
          furiaStreamers: true,
          perdidaEngagement: -50,
          relato: "El aparato territorial funciona como un reloj suizo el domingo: miles de micros y fiscales leales. Pero los jóvenes te acusan de claudicación doctrinaria y tus directos de streaming pierden la mitad de audiencia."
        }
      },
      {
        id: "romper_con_aparato",
        texto: "Opción B (Romper con el Aparato y Llevar Pura Tropa Propia): Imponer a tus militantes de confianza y a los cuadros de redes en todos los puestos expectables.",
        etiqueta: "Doctrina pura / Boleta cortada",
        icono: "fa-solid fa-hashtag",
        color: "rose",
        impacto: {
          purezaDoctrinaria: 100,
          corteBoletaIntendentes: -8,
          boletasFaltantes: true,
          relato: "Las listas brillan de juventud militante. Pero el domingo los intendentes reparten la tijera en los barrios: sacás 8 puntos menos de lo esperado por robo sistemático de boletas en los cuartos oscuros."
        }
      },
      {
        id: "salomonico_contratos",
        texto: "Opción C (El Salomónico y los Contratos de Asesores): Poner a los candidatos de los intendentes como titulares y a los pibes de las redes como suplentes, compensándolos con 50 contratos de asesores en el Senado.",
        etiqueta: "La muñeca criolla / Todos adentro",
        icono: "fa-solid fa-hand-holding-dollar",
        color: "emerald",
        impacto: {
          unidadEquilibrada: true,
          fiscalizacionAparato: 85,
          engagementDigital: 90,
          relato: "Clásica obra de arte de la cintura política peronista. Nadie queda eufórico, pero los intendentes fiscalizan con ganas y los streamers cobran sueldos legislativos para seguir agitando en TikTok."
        }
      }
    ]
  }
};

// 5. ACCIONES DIRECTAS DEL BÚNKER DEL RETORNO
const ACCIONES_BUNKER_RETORNO = {
  transmitir_streaming_vivo: {
    id: "transmitir_streaming_vivo",
    nombre: "Transmitir en Vivo Desarmando el Plan Económico",
    icono: "fa-solid fa-tower-broadcast",
    categoria: "digital",
    color: "rose",
    descripcion: "Prender cámara a las 20:00 hs con termo y pizarra explicando la devaluación del presidente actual.",
    impacto: { nostalgiaDelta: +10, audienciaDelta: +150000, relato: "El streaming explota con 145.000 concurrentes. El hashtag #ConElEstabamosMejor es tendencia mundial." }
  },

  cenar_gobernadores_quincho: {
    id: "cenar_gobernadores_quincho",
    nombre: "Cenar en Secreto con los Gobernadores del Norte",
    icono: "fa-solid fa-utensils",
    categoria: "territorial",
    color: "amber",
    descripcion: "Asado a puertas cerradas en un quincho de San Isidro para sellar el pacto de gobernabilidad futura.",
    impacto: { gobernadoresDelta: +3, roscaDelta: +15, relato: "Tres mandatarios provinciales cierran filas con tu liderazgo a cambio de promesas de coparticipación." }
  },

  anunciar_candidatura_senador: {
    id: "anunciar_candidatura_senador",
    nombre: "Anunciar Candidatura a Senador Nacional",
    icono: "fa-solid fa-bullhorn",
    categoria: "electoral",
    color: "sky",
    descripcion: "Lanzar la campaña oficial por la Provincia de Buenos Aires para blindar la impunidad con fueros.",
    impacto: { fuerosAlcanzados: true, faseNueva: 3, relato: "Acto multitudinario en un estadio cubierto de Lanús. Te consolidás como el dueño excluyente de la oposición." }
  },

  publicar_video_dedazo: {
    id: "publicar_video_dedazo",
    nombre: "Publicar el Video del Dedazo (Fórmula Presidencial)",
    icono: "fa-solid fa-video",
    categoria: "estrategica",
    color: "emerald",
    descripcion: "Video grabado de 12 minutos anunciando la fórmula para octubre y consagrando la jugada maestra.",
    impacto: { jugadaMaestraActivada: true, faseNueva: 4, relato: "A las 09:00 hs de un sábado feriado publicás el video en redes. Los canales de TV cortan su programación en shock." }
  }
};

// 6. ESCENAS DE LA VICTORIA DEL RETORNO
const ESCENAS_VICTORIA_RETORNO = {
  traspaso_triunfal: {
    titulo: "La Victoria del Retorno: Cruzar la Puerta de Balcarce 50 Otra Vez",
    subtitulo: "El día del traspaso de mando ante la ovación de la Asamblea Legislativa",
    placaCronica: "[PLACA ROJA] RESUCITÓ EL DOCTOR: VOLVIÓ COMO SI NUNCA SE HUBIERA IDO // ARDEN LOS MERCADOS Y LLORAN EN EL PANEL DE TV",
    edadReasuncion: 68,
    relatoDetallado: "El presidente saliente, con las ojeras hundidas y la corbata desanudada tras el fracaso estrepitoso de su administración, te espera pálido de pie en el Salón Blanco de la Casa Rosada. Entrás caminando sobre la alfombra roja con 68 años, el pelo blanco peinado hacia atrás y una sonrisa serena que destila revancha histórica. Con mano temblorosa, tu predecesor te entrega el bastón de mando labrado por Pallarols y te coloca la banda presidencial celeste y blanca. Afuera, la Plaza de Mayo desborda con 200.000 banderas flameando al ritmo de los bombos. Comodoro Py archiva tus últimas tres causas por 'inexistencia de delito sobreviniente' y el Embajador de EE.UU. es el primero en pedir audiencia para felicitarte.",
    titularLaNacion: "Histórica reasunción: el expresidente consuma su regreso al poder con amplio respaldo popular.",
    titularPagina12: "La fiesta de la democracia: una multitud colmó la Plaza de Mayo para celebrar la vuelta del líder.",
    legadoRetorno: "El único dirigente político que se fue en helicóptero o forzado por la multitud y volvió cruzando la puerta grande en andas del pueblo."
  }
};

/**
 * CLASE PRINCIPAL: SistemaOperativoRetorno
 * Gestiona el búnker de operaciones del expresidente, las 4 fases históricas,
 * la trinchera de streaming, las 3 alianzas del perdón y la victoria final.
 */
class SistemaOperativoRetorno {
  constructor() {
    this.activo = false;
    this.faseActual = 1; // 1: Desierto, 2: Streaming, 3: Fueros, 4: Jugada Maestra
    this.edadActual = 60;
    this.indiceNostalgiaPopular = 55; // 0 a 100%
    this.audienciaDigital = 350000;
    this.audienciaTikTok = 1200000;
    this.gobernadoresAliados = 4;
    this.intendentesAliados = 8;
    this.alianzasFirmadas = {
      gobernadores_feudales: false,
      cupula_sindical: false,
      dirigente_traidor: false
    };
    this.fuerosSenado = false;
    this.causasPenales = {
      procesamientos: 6,
      condenasFirmes: 0,
      estadoCasacion: "en_tramite"
    };
    this.libroEdiciones = 8;
    this.estrategiaElectoral = null; // 'personalista', 'titere_vice', 'guardian_senado'
    this.historialOperativo = [];
    this.victoriaAlcanzada = false;
  }

  /**
   * Inicializa el modo de Operativo Retorno a partir del estado de expresidente del motor.
   */
  inicializarDesdeExpresidente(motor = null, datosExpresidente = null) {
    this.activo = true;
    const salud = motor && motor.saludSupervivencia ? motor.saludSupervivencia : { edad: 58 };
    const inflacionVal = (motor && motor.macroeconomia && typeof motor.macroeconomia.inflacionMensual === 'number')
      ? motor.macroeconomia.inflacionMensual
      : ((motor && motor.macroeconomia && typeof motor.macroeconomia.inflacion === 'number') ? motor.macroeconomia.inflacion : 10);
    this.indiceNostalgiaPopular = Math.min(90, Math.max(45, Math.round(50 + (inflacionVal * 1.5))));

    this.historialOperativo.push({
      evento: "Inicio del Operativo Retorno",
      detalle: `El expresidente abre su búnker con ${this.edadActual} años y un índice de nostalgia del ${this.indiceNostalgiaPopular}%.`
    });

    return {
      fase: this.faseActual,
      edad: this.edadActual,
      nostalgia: this.indiceNostalgiaPopular,
      audiencia: this.audienciaDigital
    };
  }

  /**
   * Avanza de fase dentro del operativo retorno.
   */
  avanzarFase(nuevaFase, motor = null) {
    if (nuevaFase < 1 || nuevaFase > 4) return null;
    this.faseActual = nuevaFase;
    this.edadActual += (nuevaFase === 4 ? 2 : 1);
    if (motor && motor.saludSupervivencia) {
      motor.saludSupervivencia.edad = this.edadActual;
    }

    if (nuevaFase === 3) {
      this.fuerosSenado = true;
      this.causasPenales.estadoCasacion = "congelada_por_fueros";
    }

    const infoFase = Object.values(FASES_OPERATIVO_RETORNO).find(f => f.faseNumero === nuevaFase);
    this.historialOperativo.push({
      evento: `Avance a ${infoFase ? infoFase.nombre : 'Fase ' + nuevaFase}`,
      detalle: infoFase ? infoFase.objetivo : ''
    });

    return infoFase;
  }

  /**
   * Ejecuta una acción directa del búnker.
   */
  ejecutarAccionBunker(accionId, motor = null) {
    const accion = ACCIONES_BUNKER_RETORNO[accionId];
    if (!accion) return { exito: false, mensaje: "Acción no reconocida." };

    if (accion.impacto.nostalgiaDelta) {
      this.indiceNostalgiaPopular = Math.min(100, Math.max(0, this.indiceNostalgiaPopular + accion.impacto.nostalgiaDelta));
    }
    if (accion.impacto.audienciaDelta) {
      this.audienciaDigital += accion.impacto.audienciaDelta;
    }
    if (accion.impacto.gobernadoresDelta) {
      this.gobernadoresAliados = Math.min(24, this.gobernadoresAliados + accion.impacto.gobernadoresDelta);
    }
    if (accion.impacto.fuerosAlcanzados) {
      this.fuerosSenado = true;
      this.causasPenales.estadoCasacion = "congelada_por_fueros";
    }
    if (accion.impacto.faseNueva) {
      this.avanzarFase(accion.impacto.faseNueva, motor);
    }

    this.historialOperativo.push({
      evento: accion.nombre,
      detalle: accion.impacto.relato
    });

    return {
      exito: true,
      accion,
      relato: accion.impacto.relato,
      estadoActual: this.obtenerResumen()
    };
  }

  /**
   * Resuelve una de las Tres Alianzas del Perdón.
   */
  resolverAlianzaPerdon(aliadoId, aceptar = true, motor = null) {
    const alianza = TRES_ALIANZAS_PERDON[aliadoId];
    if (!alianza) return { exito: false, mensaje: "Aliado no válido." };

    if (aceptar) {
      this.alianzasFirmadas[aliadoId] = true;
      alianza.estado = "firmada";
      if (aliadoId === "gobernadores_feudales") {
        this.gobernadoresAliados = Math.min(24, this.gobernadoresAliados + 6);
        this.indiceNostalgiaPopular += 8;
      } else if (aliadoId === "cupula_sindical") {
        this.indiceNostalgiaPopular += 10;
        if (motor && motor.saludSupervivencia) motor.saludSupervivencia.seguridad += 15;
      } else if (aliadoId === "dirigente_traidor") {
        this.indiceNostalgiaPopular += 12;
      }
      this.historialOperativo.push({
        evento: `Pacto Sellado: ${alianza.actor}`,
        detalle: alianza.beneficioAlianza
      });
      return { exito: true, firmada: true, relato: alianza.beneficioAlianza };
    } else {
      this.alianzasFirmadas[aliadoId] = false;
      alianza.estado = "rechazada";
      this.historialOperativo.push({
        evento: `Ruptura con ${alianza.actor}`,
        detalle: alianza.costoRechazo
      });
      return { exito: true, firmada: false, relato: alianza.costoRechazo };
    }
  }

  /**
   * Resuelve uno de los dilemas jugables del retorno.
   */
  resolverDilemaRetorno(dilemaId, opcionId, motor = null) {
    const dilema = DILEMAS_OPERATIVO_RETORNO[dilemaId];
    if (!dilema) return { exito: false, mensaje: "Dilema no encontrado." };

    const opcion = dilema.opciones.find(o => o.id === opcionId);
    if (!opcion) return { exito: false, mensaje: "Opción no válida." };

    if (opcion.impacto.estrategiaElectoral) {
      this.estrategiaElectoral = opcion.impacto.estrategiaElectoral;
    }
    if (opcion.impacto.fuerosAsegurados) {
      this.fuerosSenado = true;
      this.causasPenales.estadoCasacion = "congelada_por_fueros";
    }
    if (opcion.impacto.epicaMilitante) {
      this.indiceNostalgiaPopular = Math.min(100, this.indiceNostalgiaPopular + 15);
    }
    if (opcion.impacto.sinFuerosPersonales) {
      this.fuerosSenado = false;
    }

    this.historialOperativo.push({
      evento: `Resolución de ${dilema.titulo}`,
      opcion: opcion.etiqueta,
      detalle: opcion.impacto.relato
    });

    return {
      exito: true,
      dilema,
      opcion,
      relato: opcion.impacto.relato
    };
  }

  /**
   * Evalúa y consagra la Victoria del Retorno (cruzar Balcarce 50 otra vez).
   */
  evaluarVictoriaRetorno(motor = null) {
    const tieneAlianzasMinimas = (this.alianzasFirmadas.gobernadores_feudales || this.alianzasFirmadas.dirigente_traidor);
    const tieneNostalgiaSuficiente = this.indiceNostalgiaPopular >= 65;
    const esFaseFinal = this.faseActual >= 3;

    if (tieneAlianzasMinimas && tieneNostalgiaSuficiente && esFaseFinal) {
      this.victoriaAlcanzada = true;
      this.edadActual = Math.max(68, this.edadActual);
      if (motor && motor.saludSupervivencia) {
        motor.saludSupervivencia.edad = this.edadActual;
      }
      return {
        triunfo: true,
        escena: ESCENAS_VICTORIA_RETORNO.traspaso_triunfal,
        edad: this.edadActual
      };
    }

    return {
      triunfo: false,
      motivo: "Faltan cerrar alianzas territoriales o el índice de nostalgia popular aún no superó el 65%."
    };
  }

  /**
   * Obtiene las alertas de la mañana para la pantalla del búnker.
   */
  obtenerAlertasManana() {
    return [
      "El editorial de Jonatan Viale en LN+ te dedicó 25 minutos alertando sobre tu inminente vuelta.",
      "El Embajador de EE.UU. mandó un emisario a pedir un café reservado en Belgrano Chico.",
      `Tu libro 'Mi Verdad' va por la ${this.libroEdiciones}ª reimpresión en todas las librerías del país.`,
      `El dólar blue del gobierno actual subió un 14% ayer: tu índice de nostalgia trepó a ${this.indiceNostalgiaPopular}%.`,
      this.fuerosSenado ? "Comodoro Py notificó la suspensión preventiva de todas las audiencias por fueros constitucionales." : "Un fiscal federal solicitó fecha para audiencia de elevación a juicio oral."
    ];
  }

  /**
   * Resumen para diagnósticos y serialización.
   */
  obtenerResumen() {
    return {
      activo: this.activo,
      faseActual: this.faseActual,
      edadActual: this.edadActual,
      indiceNostalgiaPopular: this.indiceNostalgiaPopular,
      audienciaDigital: this.audienciaDigital,
      audienciaTikTok: this.audienciaTikTok,
      gobernadoresAliados: this.gobernadoresAliados,
      intendentesAliados: this.intendentesAliados,
      fuerosSenado: this.fuerosSenado,
      alianzasFirmadas: { ...this.alianzasFirmadas },
      causasPenales: { ...this.causasPenales },
      estrategiaElectoral: this.estrategiaElectoral,
      libroEdiciones: this.libroEdiciones,
      victoriaAlcanzada: this.victoriaAlcanzada,
      historialCount: this.historialOperativo.length
    };
  }
}

// Exportación modular para Node.js y navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    FASES_OPERATIVO_RETORNO,
    ECOSISTEMA_DIGITAL_RETORNO,
    TRES_ALIANZAS_PERDON,
    DILEMAS_OPERATIVO_RETORNO,
    ACCIONES_BUNKER_RETORNO,
    ESCENAS_VICTORIA_RETORNO,
    SistemaOperativoRetorno
  };
} else if (typeof window !== 'undefined') {
  window.FASES_OPERATIVO_RETORNO = FASES_OPERATIVO_RETORNO;
  window.ECOSISTEMA_DIGITAL_RETORNO = ECOSISTEMA_DIGITAL_RETORNO;
  window.TRES_ALIANZAS_PERDON = TRES_ALIANZAS_PERDON;
  window.DILEMAS_OPERATIVO_RETORNO = DILEMAS_OPERATIVO_RETORNO;
  window.ACCIONES_BUNKER_RETORNO = ACCIONES_BUNKER_RETORNO;
  window.ESCENAS_VICTORIA_RETORNO = ESCENAS_VICTORIA_RETORNO;
  window.SistemaOperativoRetorno = SistemaOperativoRetorno;
}
