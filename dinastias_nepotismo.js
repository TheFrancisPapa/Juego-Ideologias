/**
 * DINASTIAS_NEPOTISMO.JS
 * =============================================================================
 * Simulación del Sistema de Dinastías y Nepotismo en la Política Argentina:
 * - El Árbol Genealógico: Los 4 Roles del Clan Familiar (Primera Dama/Cónyuge,
 *   El Heredero/Delfín de Sangre, El Hermano/"El Jefe" y Parientes Incómodos/Cajas Oscuras).
 * - El Índice de Nepotismo Estatal y las Variables Familiares (Lealtad, Capacidad, Radioactividad).
 * - Mecánica de Sucesión Cruzada (La Fórmula Conyugal y el Peligro del Doble Comando).
 * - Los 3 Dilemas Dinásticos Jugables (La Valija en Ezeiza, El Choque en Libertador y El Testamento en Los Arcos).
 * - Mecánica de Reencarnación Dinástica (Jugar con tu Heredero: Multiplicador de Apellido +20%,
 *   La Sombra del Prócer y Las Deudas del Pasado).
 * - La Pantalla del Clan Familiar (El Living de Olivos y Resoluciones Domésticas).
 * =============================================================================
 */

// 1. LOS 4 ROLES DEL CLAN FAMILIAR
const ROLES_CLAN_FAMILIAR = {
  conyuge: {
    id: "conyuge",
    nombre: "La Primera Dama / Esposo (El Cogobierno)",
    icono: "fa-solid fa-gem",
    color: "pink",
    descripcion: "No es un cargo protocolar decorativo; es tu alter ego político. Cogobierna desde el dormitorio, maneja el veto a ministros y representa la sucesión cruzada.",
    arquetipos: {
      militante: {
        id: "militante",
        nombre: "La Esposa / Esposo Militante (El Doble Comando)",
        subtitulo: "Formación política propia, territorio en el Conurbano y poder de veto en Olivos",
        icono: "fa-solid fa-bullhorn",
        descripcion: "Tiene formación política propia, arma sus propios actos en el conurbano y te veta a ministros en la cena de Olivos. Si tu popularidad cae, es tu sucesora natural para saltarse la prohibición de reelección.",
        lealtadBase: 72,
        capacidadBase: 75,
        radioactividadBase: 38,
        cargoDefault: "Presidenta de la Fundación Social & Jefa de Bloque",
        conflictoDefault: "Exige vetar la designación del Ministro de Salud porque es amigo de tu exesposa y desconfía de su lealtad partidaria.",
        beneficios: "+15% Movilización en actos de masas; blindaje frente a gobernadores rivales.",
        peligro: "Guerra de alcoba y fractura del bloque oficialista si intenta volar con alas propias."
      },
      farandula: {
        id: "farandula",
        nombre: "La Pareja de la Farándula (El Blindaje Pop)",
        subtitulo: "Actriz, modelo o vedette: la mesa de Mirtha y revistas del corazón",
        icono: "fa-solid fa-camera-retro",
        descripcion: "Actriz, modelo o figura del espectáculo. No entiende de macroeconomía, pero te sienta en la mesa de Mirtha Legrand y en las revistas de chismes, humanizando tu figura ante el electorado despolitizado.",
        lealtadBase: 65,
        capacidadBase: 25,
        radioactividadBase: 30,
        cargoDefault: "Primera Dama Protocolar / Embajadora de Buena Voluntad",
        conflictoDefault: "Contratos de sponsoreo con marcas que litigan contra el Estado y reclamo de custodia de 6 custodios para eventos de moda en Punta del Este.",
        beneficios: "+12% Imagen positiva en clase media no politizada y blindaje en programas de chimentos.",
        peligro: "Un divorcio en pleno mandato cuesta el 15% de imagen positiva y denuncias por división de bienes no declarados."
      }
    }
  },

  heredero: {
    id: "heredero",
    nombre: "El Heredero / Delfín de Sangre (La Continuidad)",
    icono: "fa-solid fa-crown",
    color: "amber",
    descripcion: "Tu hijo/a mayor, al que querés preparar para que herede la gobernación o la banca familiar.",
    arquetipos: {
      militante_trinchera: {
        id: "militante_trinchera",
        nombre: "El Militante de Trinchera",
        subtitulo: "Universidad pública, oratoria setentista y agrupación juvenil partidaria",
        icono: "fa-solid fa-fist-raised",
        descripcion: "Estudió en la universidad pública, maneja la agrupación juvenil del partido, duerme en unidades básicas y habla con léxico setentista. Su objetivo es radicalizar el movimiento y depurar traidores.",
        lealtadBase: 95,
        capacidadBase: 58,
        radioactividadBase: 48,
        cargoDefault: "Diputado Nacional & Líder de la Juventud Militante",
        conflictoDefault: "Tomó una facultad con bombos y declaró que las empresas privatizadas deben ser estatizadas sin indemnización.",
        beneficios: "Fidelidad ideológica incondicional y 100% de presencia en la calle.",
        peligro: "Asusta a los empresarios, a los mercados y a los votantes de centro moderado."
      },
      nene_de_oro: {
        id: "nene_de_oro",
        nombre: "El 'Nene de Oro' (El Playboy de Nordelta)",
        subtitulo: "Fiestas en yates, autos deportivos y causas penales tapadas por la policía",
        icono: "fa-solid fa-car-side",
        descripcion: "No le interesa la política; le gustan las fiestas en yates, los autos deportivos y los negocios inmobiliarios rápidos. Es una fábrica de causas penales por contrabando, lavado de dinero y choques en estado de ebriedad que tenés que tapar con la policía local.",
        lealtadBase: 90,
        capacidadBase: 18,
        radioactividadBase: 72,
        cargoDefault: "Subsecretario de Asuntos Estratégicos con Chofer Oficial",
        conflictoDefault: "Se filtró una foto suya de vacaciones en Ibiza en un yate privado con empresarios contratistas del Estado.",
        beneficios: "Contactos con la noche porteña y círculos de negocios rápidos.",
        peligro: "Genera allanamientos sorpresivos de Comodoro Py y repudio generalizado en redes."
      }
    }
  },

  hermano: {
    id: "hermano",
    nombre: "El Hermano / Hermana ('El Jefe' de la Corte)",
    icono: "fa-solid fa-user-secret",
    color: "purple",
    descripcion: "Tu cordón umbilical psicológico. La persona con la que hablás a las 2 de la mañana cuando no confiás ni en tu propia sombra.",
    arquetipo: {
      id: "el_jefe",
      nombre: "'El Jefe' de la Corte Presidencial",
      subtitulo: "Secretaría General de la Presidencia: la lapicera real y el filtro de Olivos",
      icono: "fa-solid fa-key",
      ubicacionEstado: "Secretaría General de la Presidencia",
      descripcion: "Maneja la agenda oficial, decide quién pisa la quinta de Olivos y quién queda afuera, y administra los fondos reservados para eventos especiales. Si un ministro le cae mal a tu hermano/a, ese ministro está despedido en menos de 48 horas.",
      lealtadBase: 98,
      capacidadBase: 82,
      radioactividadBase: 62,
      cargoDefault: "Secretario/a General de la Presidencia",
      conflictoDefault: "Bloqueó el ingreso de tres ministros clave a Olivos y maneja los sobres de los fondos reservados sin rendición de cuentas.",
      beneficios: "Lealtad pétrea a prueba de balas y ejecución fulminante de órdenes.",
      peligro: "Aislamiento del Presidente en un microclima paranoico y purgas constantes de aliados."
    }
  },

  parientes_incomodos: {
    id: "parientes_incomodos",
    nombre: "Los Parientes Incómodos (Primos, Cuñados y Sobrinos)",
    icono: "fa-solid fa-people-roof",
    color: "emerald",
    descripcion: "No van a ministerios visibles: el Estado argentino tiene cajas oscuras históricas reservadas para la parentela.",
    cajasOscuras: [
      {
        id: "registro_automotor",
        nombre: "Dirección del Registro Nacional de la Propiedad Automotor",
        tipo: "Recaudación pura en efectivo y sellados arancelarios",
        recaudacionMensualEstimada: "$120 Millones",
        riesgoComodoroPy: "Auditoría por asignación discrecional sin concurso"
      },
      {
        id: "aduanas_fronterizas",
        nombre: "Dirección de Aduanas en Pasos Fronterizos Provinciales",
        tipo: "Control discrecional de depósitos fiscales y contenedores",
        recaudacionMensualEstimada: "$250 Millones",
        riesgoComodoroPy: "Escándalos de contrabando de mercadería y valijas VIP"
      },
      {
        id: "loterias_casinos",
        nombre: "Agencia de Lotería y Casinos Provinciales",
        tipo: "Flujo nocturno de fichas y tragamonedas",
        recaudacionMensualEstimada: "$180 Millones",
        riesgoComodoroPy: "Causas por lavado de activos y financiamiento de campañas"
      },
      {
        id: "consulados_europa",
        nombre: "Consulados y Agregadurías en París, Roma y Madrid",
        tipo: "Sueldos en euros y viáticos diplomáticos vitalicios",
        recaudacionMensualEstimada: "€45.000 / mes",
        riesgoComodoroPy: "Denuncias por ñoquis de cancillería viviendo en Europa"
      }
    ],
    arquetipo: {
      id: "cunado_operativo",
      nombre: "El Cuñado Operativo y los Primos Provinciales",
      subtitulo: "Los que administran las cajas chicas, los sellos y las habilitaciones",
      icono: "fa-solid fa-stamp",
      descripcion: "Parientes ubicados en posiciones estratégicas sin exposición pública que recaudan para la corona familiar.",
      lealtadBase: 80,
      capacidadBase: 42,
      radioactividadBase: 55,
      cargoDefault: "Director del Registro Seccional Automotor N° 4",
      conflictoDefault: "El diario La Nación prepara una nota sobre las 6 propiedades y dos haras que compró en un año a través de sociedades fantasma.",
      beneficios: "Caja líquida permanente sin pasar por la Tesorería General.",
      peligro: "Tapas de diarios del domingo con fotos de mansiones y allanamientos."
    }
  }
};

// 2. RESOLUCIONES DOMÉSTICAS DEL LIVING DE OLIVOS
const RESOLUCIONES_DOMESTICAS_LIVING = {
  dar_la_caja: {
    id: "dar_la_caja",
    nombre: "Nombrar a tu sobrino de 23 años como Director del Banco Nación",
    etiquetaBoton: "[DAR LA CAJA]",
    icono: "fa-solid fa-building-columns",
    color: "amber",
    costoPolitico: "Escándalo mediático y pedidos de interpelación parlamentaria",
    impacto: {
      nepotismoDelta: +15,
      lealtadClanDelta: +12,
      radioactividadDelta: +18,
      capacidadGestionDelta: -10,
      relato: "Tu sobrino de 23 años jura como Director del Banco Nación en el Salón Blanco con su novia y 4 amigos de la facultad. La bancada opositora presenta un pedido de interpelación urgente en Diputados por designación ilegítima."
    }
  },

  blindaje: {
    id: "blindaje",
    nombre: "Anotar a tu hijo en el 2° lugar de la lista de diputados para darle fueros",
    etiquetaBoton: "[BLINDAJE]",
    icono: "fa-solid fa-shield-halved",
    color: "sky",
    costoPolitico: "Furia en la militancia histórica desplazada y repudio editorial",
    impacto: {
      nepotismoDelta: +10,
      fuerosOtorgadosHijo: true,
      radioactividadDelta: +12,
      broncaMilitanciaDelta: +20,
      relato: "Desplazás al jefe histórico de la JP para ubicar a tu hijo con fueros parlamentarios preventivos. En el comité tiran huevos contra las gigantografías de campaña."
    }
  },

  tregua_conyugal: {
    id: "tregua_conyugal",
    nombre: "Ceder al pedido de tu cónyuge y echar al Ministro de Salud antes del asado",
    etiquetaBoton: "[TREGUA CONYUGAL]",
    icono: "fa-solid fa-bed",
    color: "rose",
    costoPolitico: "Crisis de gabinete imprevista y renuncia de secretarios técnicos",
    impacto: {
      lealtadConyugeDelta: +20,
      tensionClanDelta: -25,
      crisisGabineteDelta: +15,
      capacidadGestionDelta: -8,
      relato: "A las 23:45 hs del sábado, el vocero anuncia la 'renuncia por motivos personales' del ministro. El gabinete entra en pánico y la UMP queda en estado deliberativo."
    }
  },

  cortar_cabezas: {
    id: "cortar_cabezas",
    nombre: "Pedirle la renuncia a tu cuñado para frenar la tapa del domingo",
    etiquetaBoton: "[CORTAR CABEZAS]",
    icono: "fa-solid fa-scissors",
    color: "red",
    costoPolitico: "Guerra de alcoba: tu pareja te echa del cuarto principal y amenaza con hablar",
    impacto: {
      nepotismoDelta: -18,
      radioactividadDelta: -20,
      lealtadConyugeDelta: -30,
      tensionClanDelta: +35,
      relato: "Tu cuñado deja el cargo puteando a los gritos por los pasillos. Tu cónyuge te deja las valijas en el pasillo de Olivos y te advierte que 'la familia no perdona traiciones'."
    }
  }
};

// 3. DILEMAS DINÁSTICOS JUGABLES
const DILEMAS_DINASTICOS_JUGABLES = {
  dilema_cunado_valija_ezeiza: {
    id: "dilema_cunado_valija_ezeiza",
    titulo: "El Cuñado Atrapado con la Valija en Ezeiza",
    subtitulo: "Domingo 04:30 AM • Vuelo privado de Miami • US$ 800.000 en efectivo",
    icono: "fa-solid fa-suitcase-rolling",
    color: "amber",
    hecho: "El hermano de la Primera Dama aterriza en un vuelo privado de Miami. El escáner de la Aduana detecta cuatro valijas sin declarar con US$ 800.000 en billetes termosellados y relojes de lujo. El jefe de turno llama por línea reservada: «Presidente, tenemos las valijas retenidas pero afuera ya hay dos cronistas de guardia de un canal de cable».",
    opciones: [
      {
        id: "dejar_pasar_borrar_videos",
        texto: "Ordenar que lo dejen pasar de inmediato y borrar las grabaciones del escáner",
        subtitulo: "Salvás la plata del clan y evitás el decomiso inmediato",
        impacto: {
          nepotismoDelta: +15,
          lealtadClanDelta: +20,
          riesgoComodoroPyDelta: +30,
          relato: "El cuñado sale por pista privada con las valijas. A las 48 horas un empleado aduanero despechado filtra el video de seguridad a TN y Comodoro Py abre una megacausa por contrabando agravado y lavado."
        }
      },
      {
        id: "detener_y_tuitear_etica",
        texto: "Dejar que la Aduana lo detenga y salir por Twitter a decir que «la ley es pareja para todos»",
        subtitulo: "Gesto de ética republicana ante la sociedad y la prensa",
        impacto: {
          imagenEticaDelta: +8,
          lealtadConyugeDelta: -35,
          tensionClanDelta: +40,
          relato: "Subís en las encuestas de ética pública; tu cónyuge te declara la guerra en Olivos, te echa del cuarto principal y la familia política amenaza con filtrar cuentas y sociedades offshore a la prensa."
        }
      },
      {
        id: "operativo_side_falso",
        texto: "Mandar a la SIDE a armar un operativo falso: declarar «operación encubierta de inteligencia»",
        subtitulo: "Tapar el contrabando bajo el secreto de Estado de la Ley de Inteligencia",
        impacto: {
          fondosReservadosConsumidos: 20,
          bicameralAlerta: true,
          relato: "Agentes de la SIDE requisan las valijas alegando seguridad nacional. La Comisión Bicameral de Inteligencia te cita de urgencia bajo juramento y la oposición presenta pedido de juicio político."
        }
      },
      {
        id: "donacion_medica_hospital",
        texto: "Hacer que el cuñado declare que el dinero era una donación médica para un hospital provincial",
        subtitulo: "Coartada desesperada e inverosímil para zafar del juzgado",
        impacto: {
          radioactividadDelta: +25,
          viralBlenderParodia: true,
          relato: "El parche es tan ridículo que Blender y los streamers le dedican especiales de 2 horas. El vocero presidencial tartamudea en la conferencia de las 9 AM y el país se ríe a carcajadas."
        }
      }
    ]
  },

  dilema_choque_heredero_libertador: {
    id: "dilema_choque_heredero_libertador",
    titulo: "El Choque del Heredero en Avenida Libertador",
    subtitulo: "Sábado 05:00 AM • Camioneta alemana de US$ 120.000 • 1.8 g/l de alcoholemia",
    icono: "fa-solid fa-car-burst",
    color: "rose",
    hecho: "Tu hijo de 24 años, al que nombraste Asesor con rango de Secretario de Estado, choca una camioneta alemana de US$ 120.000 contra tres autos estacionados en Palermo. El test da 1.8 g/l. Hay dos heridos leves y un grupo de testigos grabando cómo el pibe insulta a la Policía de la Ciudad gritando: «¡No saben quién soy yo, manga de secos!».",
    opciones: [
      {
        id: "indemnizar_efectivo_victimas",
        texto: "Mandar al Ministro de Seguridad a negociar con las víctimas e indemnizarlas en efectivo antes de la denuncia",
        subtitulo: "Comprar el silencio inmediato con sobres de fondos reservados",
        impacto: {
          gastosReservadosEfectivo: 50000,
          radioactividadDelta: +15,
          pedidoDestitucionMinistro: true,
          relato: "Las víctimas firman el acuerdo confidencial, pero los videos de los transeúntes ya explotan en TikTok y la oposición exige la destitución inmediata del Ministro de Seguridad por usar recursos públicos."
        }
      },
      {
        id: "renuncia_en_vivo_rehabilitacion",
        texto: "Obligar a tu hijo a renunciar en vivo, pedir disculpas públicas y enviarlo a rehabilitación",
        subtitulo: "Autoridad paterna implacable para cortar la sangría política",
        impacto: {
          imagenEticaDelta: +6,
          lealtadHijoDelta: -40,
          relato: "El chico renuncia llorando por cadena nacional; entra en un cuadro depresivo agudo y, por resentimiento, empieza a filtrar audios íntimos de la intimidad de Olivos a periodistas del Grupo Clarín."
        }
      },
      {
        id: "acusar_cama_policial",
        texto: "Acusar a la Policía de la Ciudad de «armar una cama política opositora contra un joven inocente»",
        subtitulo: "Polarización bélica contra el Gobierno de la Ciudad",
        impacto: {
          polarizacionNucleoDuroDelta: +10,
          radioactividadDelta: +30,
          relato: "Tu núcleo duro aplaude la teoría de la conspiración, pero para el 80% del electorado quedás como un monarca soberbio que defiende a los hijos del poder por encima de las leyes de tránsito."
        }
      },
      {
        id: "fuga_dorada_ginebra",
        texto: "Designarlo de urgencia en una misión diplomática en Ginebra y subirlo a un avión esa misma tarde",
        subtitulo: "Inmunidad diplomática exprés para congelar la causa porteña",
        impacto: {
          inmunidadDiplomaticaHijo: true,
          radioactividadDelta: +35,
          titularFugaDorada: true,
          relato: "El joven aborda el vuelo de Swiss con pasaporte diplomático. Al día siguiente los canales de noticias titulan en rojo furioso: «FUGA DORADA: EL HIJO DEL PRESIDENTE ASILADO EN SUIZA CON SUELDO EN FRANCOS»."
        }
      }
    ]
  },

  dilema_testamento_sanatorio_los_arcos: {
    id: "dilema_testamento_sanatorio_los_arcos",
    titulo: "El Testamento en el Sanatorio (La Pelea de Buitres)",
    subtitulo: "Terapia Intensiva • 79 Años • Infarto Masivo y Pronóstico Reservado",
    icono: "fa-solid fa-bed-pulse",
    color: "purple",
    hecho: "Sufriste un infarto masivo y estás intubado en la suite presidencial del Sanatorio Los Arcos. En la sala de espera privada se desata una guerra encarnizada: de un lado, tu última esposa de 36 años; del otro lado, tus tres hijos del primer matrimonio y tu hermano operador. Ambos bandos tienen escribanos públicos con documentos distintos para hacerte firmar la cesión de los derechos políticos, las cuentas offshore y el control de la lista sábana del partido.",
    opciones: [
      {
        id: "firmar_a_conyuge_actual",
        texto: "Firmar el traspaso del control político exclusivo a tu Cónyuge Actual",
        subtitulo: "Continuidad directa a través de tu última pareja",
        impacto: {
          herederoDesignado: "conyuge",
          fracturaPartidaria: true,
          relato: "Tu pareja asume la conducción del gobierno interino y la candidatura; tus hijos convocan a una conferencia de prensa en el Hotel Savoy denunciando que «el Presidente fue drogado y manipulado por una usurpadora», quebrando el bloque en dos."
        }
      },
      {
        id: "repartir_hijos_y_hermano",
        texto: "Firmar la herencia en partes iguales entre tus Hijos y tu Hermano",
        subtitulo: "Preservar el linaje de sangre histórico del clan fundacional",
        impacto: {
          herederoDesignado: "hijos_hermano",
          guerraCajasInterna: true,
          relato: "Blindás la sangre histórica del clan, pero desatás una guerra caníbal entre ellos por ver quién maneja la caja de Vialidad Nacional y los registros automotores. La gestión se paraliza entre acusaciones cruzadas de traición."
        }
      },
      {
        id: "negarse_el_que_quiera_conducir",
        texto: "Negarte a firmar nada y decir con tu último aliento: «El que quiera conducir, que gane las elecciones»",
        subtitulo: "Postura histórica de caudillo inapelable",
        impacto: {
          herederoDesignado: "anarquia",
          vacioDePoder: true,
          relato: "Muere el líder sin dejar heredero ungido. El movimiento entra en una anarquía total de sucesión con asambleas a las trompadas en el PJ y un dirigente novato aprovecha el vacío para barrer con toda la dinastía."
        }
      }
    ]
  }
};

// 4. LOS 3 HEREDEROS PARA REENCARNACIÓN DINÁSTICA (JUGAR CON TU HEREDERO)
const HEREDEROS_REENCARNACION_DINASTICA = {
  heredero_primera_dama: {
    id: "heredero_primera_dama",
    nombre: "La Ex-Primera Dama (52 Años)",
    edad: 52,
    rol: "Senadora Nacional en ejercicio y jefa del bloque mayoritario",
    icono: "fa-solid fa-venus",
    color: "pink",
    avatarIcono: "fa-solid fa-crown",
    herencia: "Conserva el 85% de los votantes leales del difunto y la llegada directa al Vaticano.",
    pasivo: "Hereda 8 causas judiciales en Comodoro Py por enriquecimiento ilícito de la pareja y bienes no declarados.",
    multiplicadorApellido: 20,
    estadisticas: {
      coronarias: 75,
      digestivo: 80,
      cabeza: 70,
      vigorPublico: 65,
      roscaGobernadores: 60,
      mechaSocial: 45
    },
    citaInaugural: "«Vengo a continuar la obra del hombre que transformó la patria. Que nadie confunda dolor con debilidad.»"
  },

  heredero_delfin_hijo: {
    id: "heredero_delfin_hijo",
    nombre: "El Hijo Mayor 'El Delfín' (33 Años)",
    edad: 33,
    rol: "Diputado Nacional y líder de la juventud militante",
    icono: "fa-solid fa-bolt",
    color: "sky",
    avatarIcono: "fa-solid fa-child-reaching",
    herencia: "Vigor físico al 100%, popularidad masiva en streaming y redes sociales.",
    pasivo: "Cero respeto de los gobernadores tradicionales del norte; lo ven como a un novato mimado sin calle ni territorio.",
    multiplicadorApellido: 20,
    estadisticas: {
      coronarias: 95,
      digestivo: 90,
      cabeza: 60,
      vigorPublico: 98,
      roscaGobernadores: 25,
      mechaSocial: 55
    },
    citaInaugural: "«Los que creían que con la muerte de mi viejo se terminaba el proyecto no entendieron nada. Ahora empieza lo nuestro.»"
  },

  heredero_hermano_jefe: {
    id: "heredero_hermano_jefe",
    nombre: "El Hermano 'El Jefe' (58 Años)",
    edad: 58,
    rol: "Operador subterráneo y presidente del Partido Provincial",
    icono: "fa-solid fa-user-secret",
    color: "purple",
    avatarIcono: "fa-solid fa-chess-knight",
    herencia: "Maneja las cajas negras, los punteros del conurbano y los acuerdos con jueces federales.",
    pasivo: "Carisma cero; no puede encabezar una boleta porque su imagen negativa supera el 70%.",
    multiplicadorApellido: 20,
    estadisticas: {
      coronarias: 60,
      digestivo: 55,
      cabeza: 85,
      vigorPublico: 50,
      roscaGobernadores: 85,
      mechaSocial: 40
    },
    citaInaugural: "«Dejen las lágrimas para la televisión. Acá hay que pagar aguinaldos y ordenar las listas antes del viernes a la medianoche.»"
  }
};

// 5. EFECTOS DE LA SANGRE EN LA NUEVA VIDA
const EFECTOS_SANGRE_NUEVA_VIDA = {
  multiplicador_apellido: {
    nombre: "El Multiplicador de Apellido",
    icono: "fa-solid fa-id-card-clip",
    efecto: "+20% Piso Electoral Garantizado de por vida",
    descripcion: "Llevar el apellido legendario del prócer te otorga un tercio del electorado cautivo sin importar los errores o escándalos iniciales."
  },
  sombra_del_procer: {
    nombre: "La Sombra del Prócer",
    icono: "fa-solid fa-monument",
    efecto: "Comparación implacable de la prensa y militancia",
    descripcion: "«El padre resolvía las crisis con muñeca de acero; el hijo es una caricatura sin carácter.» Cada titubeo te cuesta el doble."
  },
  deudas_del_pasado: {
    nombre: "Las Deudas del Pasado",
    icono: "fa-solid fa-skull-crossbones",
    efecto: "Transferencia de enemigos históricos de la generación previa",
    descripcion: "Banqueros, capos sindicales y jueces federales a los que tu antecesor pisó ahora buscan venganza inmediata contra vos."
  }
};

// =========================================================================
// CLASE SISTEMA DE DINASTÍAS Y NEPOTISMO INTEGRADA
// =========================================================================
class SistemaDinastiasNepotismo {
  constructor(motor = null) {
    this.motor = motor;

    // Fichas de los 4 Roles del Clan
    this.clan = {
      conyuge: {
        tipo: "conyuge",
        arquetipo: "militante",
        nombre: "Primera Dama",
        lealtad: 68,
        capacidad: 70,
        radioactividad: 35,
        cargo: "Presidenta de la Fundación Social & Jefa de Bloque",
        conflicto: "Exige vetar la designación del Ministro de Salud porque es amigo de tu exesposa.",
        vetoActivo: true
      },
      heredero: {
        tipo: "heredero",
        arquetipo: "nene_de_oro",
        nombre: 'Hijo Mayor ("El Delfín")',
        lealtad: 92,
        capacidad: 18,
        radioactividad: 65,
        cargo: "Subsecretario de Juventud & Asuntos Estratégicos",
        conflicto: "Se filtró una foto suya de vacaciones en Ibiza en un yate privado con amigos contratistas.",
        fueros: false
      },
      hermano: {
        tipo: "hermano",
        arquetipo: "el_jefe",
        nombre: 'El Hermano ("El Jefe")',
        lealtad: 98,
        capacidad: 82,
        radioactividad: 60,
        cargo: "Secretario General de la Presidencia",
        conflicto: "Filtra el acceso a Olivos y maneja los sobres de los fondos reservados sin rendición de cuentas.",
        filtroOlivosActivo: true
      },
      parientes: {
        tipo: "parientes_incomodos",
        arquetipo: "cunado_operativo",
        nombre: "Cuñado y Primos Provinciales",
        lealtad: 80,
        capacidad: 45,
        radioactividad: 55,
        cargo: "Director del Registro Automotor Seccional N° 4",
        conflicto: "El diario La Nación prepara una nota sobre las 6 propiedades que compró en un año a través de sociedades fantasma.",
        cajaOscuraId: "registro_automotor"
      }
    };

    // Variables de Monitoreo Dinástico
    this.indiceNepotismoEstatal = 42; // 0 a 100%
    this.tensionClanScore = 65;       // 0 a 100 (Tensión elevada inicial)
    this.alertaFOPEA = true;
    this.testaferrosAsignados = 4;
    this.sucesionCruzadaActiva = false;
    this.dobleComandoActivo = false;
    this.primerCaballeroActivo = false;
    this.multiplicadorApellidoActivo = false;
    this.herederoReencarnado = null;
    this.historialResoluciones = [];
    this.dilemasResueltos = {};
  }

  // 1. CÁLCULO DINÁMICO DEL ÍNDICE DE NEPOTISMO
  calcularIndiceNepotismo() {
    let base = 25;
    // Si los parientes manejan cajas oscuras
    if (this.clan.parientes.cargo) base += 15;
    // Si el hijo tiene cargo con baja capacidad técnica
    if (this.clan.heredero.capacidad < 30) base += 12;
    // Si el hermano es Secretario General
    if (this.clan.hermano.cargo) base += 10;
    // Testaferros sumados
    base += Math.min(25, this.testaferrosAsignados * 3);

    this.indiceNepotismoEstatal = Math.max(0, Math.min(100, Math.round(base)));
    this.alertaFOPEA = this.indiceNepotismoEstatal >= 40 || this.clan.parientes.radioactividad >= 60;
    return this.indiceNepotismoEstatal;
  }

  // 2. EVALUACIÓN DEL ESTADO DE TENSIÓN FAMILIAR
  obtenerEstadoTension() {
    if (this.tensionClanScore >= 80) return "GUERRA DE ALCOBA";
    if (this.tensionClanScore >= 55) return "TENSIÓN ELEVADA";
    if (this.tensionClanScore >= 30) return "DISPUTA DE CAJAS";
    return "PAZ FAMILIAR";
  }

  // 3. OBTENER SNAPSHOT PARA EL LIVING DE OLIVOS
  obtenerSnapshotLivingOlivos(motor = this.motor) {
    this.calcularIndiceNepotismo();
    return {
      estadoClan: this.obtenerEstadoTension(),
      tensionScore: this.tensionClanScore,
      indiceNepotismoEstatal: this.indiceNepotismoEstatal,
      alertaFOPEA: this.alertaFOPEA,
      sucesionCruzadaActiva: this.sucesionCruzadaActiva,
      dobleComandoActivo: this.dobleComandoActivo,
      testaferrosAsignados: this.testaferrosAsignados,
      clan: { ...this.clan },
      resolucionesDisponibles: Object.values(RESOLUCIONES_DOMESTICAS_LIVING),
      dilemasDisponibles: Object.values(DILEMAS_DINASTICOS_JUGABLES),
      herederosDisponibles: Object.values(HEREDEROS_REENCARNACION_DINASTICA)
    };
  }

  // 4. EJECUTAR RESOLUCIÓN DOMÉSTICA DEL LIVING DE OLIVOS
  ejecutarResolucionDomestica(resolucionId, motor = this.motor) {
    const res = RESOLUCIONES_DOMESTICAS_LIVING[resolucionId];
    if (!res) throw new Error(`Resolución doméstica inválida: ${resolucionId}`);

    const imp = res.impacto;
    if (imp.nepotismoDelta) this.indiceNepotismoEstatal = Math.max(0, Math.min(100, this.indiceNepotismoEstatal + imp.nepotismoDelta));
    if (imp.tensionClanDelta) this.tensionClanScore = Math.max(0, Math.min(100, this.tensionClanScore + imp.tensionClanDelta));
    if (imp.lealtadClanDelta) {
      this.clan.heredero.lealtad = Math.min(100, this.clan.heredero.lealtad + imp.lealtadClanDelta);
      this.clan.parientes.lealtad = Math.min(100, this.clan.parientes.lealtad + imp.lealtadClanDelta);
    }
    if (imp.lealtadConyugeDelta) {
      this.clan.conyuge.lealtad = Math.max(0, Math.min(100, this.clan.conyuge.lealtad + imp.lealtadConyugeDelta));
    }
    if (imp.radioactividadDelta) {
      this.clan.parientes.radioactividad = Math.max(0, Math.min(100, this.clan.parientes.radioactividad + imp.radioactividadDelta));
      this.clan.heredero.radioactividad = Math.max(0, Math.min(100, this.clan.heredero.radioactividad + imp.radioactividadDelta));
    }
    if (imp.capacidadGestionDelta) {
      this.clan.heredero.capacidad = Math.max(0, Math.min(100, this.clan.heredero.capacidad + imp.capacidadGestionDelta));
    }
    if (imp.fuerosOtorgadosHijo) {
      this.clan.heredero.fueros = true;
    }

    // Impacto colateral en el motor del juego si existe
    if (motor && motor.termometroCriollo) {
      if (imp.crisisGabineteDelta) motor.termometroCriollo.roscaGobernadores = Math.max(0, motor.termometroCriollo.roscaGobernadores - 10);
      if (imp.broncaMilitanciaDelta) motor.termometroCriollo.mechaSocial = Math.min(100, motor.termometroCriollo.mechaSocial + 8);
    }

    this.historialResoluciones.push({
      id: res.id,
      nombre: res.nombre,
      timestamp: Date.now(),
      relato: imp.relato
    });

    this.calcularIndiceNepotismo();
    return {
      exito: true,
      resolucion: res,
      relato: imp.relato,
      indiceNepotismoEstatal: this.indiceNepotismoEstatal,
      estadoClan: this.obtenerEstadoTension()
    };
  }

  // 5. ACTIVAR SUCESIÓN CRUZADA (FÓRMULA CONYUGAL)
  activarSucesionCruzada(motor = this.motor) {
    this.sucesionCruzadaActiva = true;
    this.dobleComandoActivo = true;
    this.primerCaballeroActivo = true;

    // Efectos de traspaso sin fricción pero con doble comando
    if (motor) {
      if (motor.saludSupervivencia) {
        motor.saludSupervivencia.nombreMandatario = `${this.clan.conyuge.nombre} (Presidenta Constitucional)`;
        motor.saludSupervivencia.coronarias = Math.min(100, motor.saludSupervivencia.coronarias + 15); // Alivio coronario del cónyuge
      }
      if (motor.termometroCriollo) {
        motor.termometroCriollo.roscaGobernadores = Math.max(0, motor.termometroCriollo.roscaGobernadores - 12); // Desconfianza de caciques
      }
    }

    return {
      exito: true,
      titulo: "FÓRMULA CONYUGAL ACTIVADA: EL DOBLE COMANDO EN OLIVOS",
      relato: "Tu cónyuge jura ante la Asamblea Legislativa como Presidenta de la Nación. Vos asumís la jefatura del movimiento desde el quincho de Olivos como 'Primer Caballero'. A los seis meses los ministros no saben a quién responder y la prensa titula: «¿QUIÉN MANDA EN LA ROSADA?».",
      sucesionCruzadaActiva: true,
      dobleComandoActivo: true
    };
  }

  // 6. RESOLVER DILEMA DINÁSTICO JUGABLE
  resolverDilemaDinastico(dilemaId, opcionIdx = 0, motor = this.motor) {
    const dilema = DILEMAS_DINASTICOS_JUGABLES[dilemaId];
    if (!dilema) throw new Error(`Dilema dinástico no encontrado: ${dilemaId}`);

    const opcion = dilema.opciones[opcionIdx];
    if (!opcion) throw new Error(`Opción inválida ${opcionIdx} para dilema ${dilemaId}`);

    const imp = opcion.impacto;
    if (imp.nepotismoDelta) this.indiceNepotismoEstatal = Math.max(0, Math.min(100, this.indiceNepotismoEstatal + imp.nepotismoDelta));
    if (imp.tensionClanDelta) this.tensionClanScore = Math.max(0, Math.min(100, this.tensionClanScore + imp.tensionClanDelta));
    if (imp.lealtadClanDelta) this.clan.parientes.lealtad = Math.min(100, this.clan.parientes.lealtad + imp.lealtadClanDelta);
    if (imp.lealtadConyugeDelta) this.clan.conyuge.lealtad = Math.max(0, Math.min(100, this.clan.conyuge.lealtad + imp.lealtadConyugeDelta));
    if (imp.lealtadHijoDelta) this.clan.heredero.lealtad = Math.max(0, Math.min(100, this.clan.heredero.lealtad + imp.lealtadHijoDelta));
    if (imp.radioactividadDelta) this.clan.heredero.radioactividad = Math.min(100, this.clan.heredero.radioactividad + imp.radioactividadDelta);
    if (imp.inmunidadDiplomaticaHijo) this.clan.heredero.fueros = true;

    // Impactos en el motor
    if (motor) {
      if (imp.imagenEticaDelta && motor.termometroCriollo) {
        motor.termometroCriollo.mechaSocial = Math.max(0, motor.termometroCriollo.mechaSocial - imp.imagenEticaDelta);
      }
      if (imp.riesgoComodoroPyDelta && motor.sistemaComodoroPy) {
        motor.sistemaComodoroPy.avanzarFaseProcesal(motor);
      }
    }

    this.dilemasResueltos[dilemaId] = {
      opcionId: opcion.id,
      opcionTexto: opcion.texto,
      relato: imp.relato,
      timestamp: Date.now()
    };

    this.calcularIndiceNepotismo();
    return {
      dilemaId,
      opcionSeleccionada: opcion,
      relato: imp.relato,
      indiceNepotismoEstatal: this.indiceNepotismoEstatal,
      estadoClan: this.obtenerEstadoTension()
    };
  }

  // 7. MECÁNICA DE REENCARNACIÓN DINÁSTICA (JUGAR CON TU HEREDERO)
  reencarnarEnHeredero(herederoId, motor = this.motor) {
    const her = HEREDEROS_REENCARNACION_DINASTICA[herederoId];
    if (!her) throw new Error(`Heredero de dinastía no encontrado: ${herederoId}`);

    this.herederoReencarnado = her;
    this.multiplicadorApellidoActivo = true;

    if (motor) {
      // Reconfigurar salud y perfil biológico en salud_supervivencia
      if (motor.saludSupervivencia) {
        motor.saludSupervivencia.muertePolitica = null; // Resucita la línea institucional
        motor.saludSupervivencia.esSucesor = true;
        motor.saludSupervivencia.nombreMandatario = her.nombre;
        motor.saludSupervivencia.edad = her.edad;
        motor.saludSupervivencia.coronarias = her.estadisticas.coronarias;
        motor.saludSupervivencia.digestivo = her.estadisticas.digestivo;
        motor.saludSupervivencia.cabeza = her.estadisticas.cabeza;
        motor.saludSupervivencia.vigorPublico = her.estadisticas.vigorPublico;
      }

      // Reconfigurar rosca y termómetro
      if (motor.termometroCriollo) {
        motor.termometroCriollo.roscaGobernadores = her.estadisticas.roscaGobernadores;
        motor.termometroCriollo.mechaSocial = her.estadisticas.mechaSocial;
      }
    }

    return {
      exito: true,
      heredero: her,
      multiplicadorApellidoPisoPct: her.multiplicadorApellido,
      efectosSangre: EFECTOS_SANGRE_NUEVA_VIDA,
      relato: `¡Larga vida a la Dinastía! Has reencarnado como ${her.nombre}. ${her.citaInaugural} Cuentas con un piso electoral garantizado del +${her.multiplicadorApellido}% por tu apellido legendario.`
    };
  }
}

// Exportación para Node.js y Navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ROLES_CLAN_FAMILIAR,
    RESOLUCIONES_DOMESTICAS_LIVING,
    DILEMAS_DINASTICOS_JUGABLES,
    HEREDEROS_REENCARNACION_DINASTICA,
    EFECTOS_SANGRE_NUEVA_VIDA,
    SistemaDinastiasNepotismo
  };
}

if (typeof window !== 'undefined') {
  window.ROLES_CLAN_FAMILIAR = ROLES_CLAN_FAMILIAR;
  window.RESOLUCIONES_DOMESTICAS_LIVING = RESOLUCIONES_DOMESTICAS_LIVING;
  window.DILEMAS_DINASTICOS_JUGABLES = DILEMAS_DINASTICOS_JUGABLES;
  window.HEREDEROS_REENCARNACION_DINASTICA = HEREDEROS_REENCARNACION_DINASTICA;
  window.EFECTOS_SANGRE_NUEVA_VIDA = EFECTOS_SANGRE_NUEVA_VIDA;
  window.SistemaDinastiasNepotismo = SistemaDinastiasNepotismo;
}
