/**
 * CAIDA_EVACUACION_EXPRESIDENTE.JS
 * =============================================================================
 * Simulación del Clímax Institucional Argentino:
 * - El Umbral del Colapso (Las Tres Patas Rotas: Rebelión Territorial,
 *   Amotinamiento de Seguridad y Traición del Propio Bloque).
 * - La Renuncia Forzada (Tres Maneras de Romper la Lapicera).
 * - Minijuego / Secuencia de Escape de la Rosada (H-01, Aduana Taylor, SAME).
 * - La Ruleta de la Asamblea Legislativa (Ley 20.972 de Acefalía y Presidentes Express).
 * - La Vida Después del Poder (El Expresidente Sigue Vivo: Exilio Dorado,
 *   Penitencia en San Vicente u Operativo Retorno con Streaming y Senaduría).
 * - Reporte Confidencial de la Fuerza Aérea Argentina (Sikorsky H-01).
 * =============================================================================
 */

// 1. EL UMBRAL DEL COLAPSO: LAS TRES PATAS ROTAS
const TRES_PATAS_COLAPSO = {
  rebelion_territorial: {
    id: "rebelion_territorial",
    nombre: "La Rebelión Territorial (Las Cuasimonedas)",
    subtitulo: "Los gobernadores cortan el teléfono, retienen fondos y emiten bonos provinciales",
    icono: "fa-solid fa-money-bill-wave",
    color: "amber",
    cuasimonedasDefault: ["Patacones (PBA)", "LECOP (Nación)", "BOCADE (Tucumán/Cuyo)", "Chachos (La Rioja)"],
    descripcion: "Los mandatarios provinciales de los distritos centrales suspenden la transferencia de recaudación de impuestos directos, declaran el default interno y emiten sus propias cuasimonedas para pagar sueldos estatales y proveedores municipales.",
    citaGobernador: "«Si el Presidente no nos gira los giros coparticipables antes del viernes, el lunes pagamos los sueldos con bonos provinciales y que Balcarce 50 se arregle sola.»",
    impactoFiscal: "Parálisis total del sistema de pagos federal y cesación de pagos interna de facto."
  },

  amotinamiento_seguridad: {
    id: "amotinamiento_seguridad",
    nombre: "El Amotinamiento de la Seguridad (La Casa Militar Cede)",
    subtitulo: "La infantería agota los gases en Diagonal Norte y las FF.AA. invocan la Ley 24.059",
    icono: "fa-solid fa-shield-halved",
    color: "rose",
    minutosParaElDesborde: 20,
    descripcion: "El Jefe de la Casa Militar entra al despacho pálido y con el uniforme desabrochado: la Policía Federal se replegó a los patios internos, se agotaron los cartuchos de gas lacrimógeno en Diagonal Norte y las Fuerzas Armadas se niegan a intervenir invocando la Ley de Seguridad Interior.",
    citaCasaMilitar: "«Doctor, las rejas de Paseo Colón y Balcarce no aguantan más de veinte minutos. O sube a la terraza ahora o entran al despacho con usted adentro.»",
    impactoOperativo: "Vacío total de la custodia presidencial en el perímetro de la Plaza de Mayo."
  },

  traicion_bloque: {
    id: "traicion_bloque",
    nombre: "La Traición del Propio Bloque (La Carpeta de Cuero)",
    subtitulo: "Tus propios ministros y jefes parlamentarios exigen la renuncia antes de las 18:00 hs",
    icono: "fa-solid fa-handshake-slash",
    color: "red",
    horaLimite: "18:00 hs",
    descripcion: "Tu Ministro del Interior y el Presidente de la Cámara de Diputados cruzan la explanada escoltados por custodios de civil, entran al despacho con una carpeta de cuero negra y te piden la firma inmediata con voz temblorosa pero irrevocable para 'salvar la República y al partido'.",
    citaTraicion: "«Hasta acá llegamos, doctor. Si no firma antes de las seis de la tarde, la multitud toma la Rosada y no garantizamos su integridad física ni la de su familia.»",
    impactoPolitico: "Pérdida absoluta de la mayoría parlamentaria y aislamiento terminal en Balcarce 50."
  }
};

// 2. LA RENUNCIA FORZADA: TRES MANERAS DE ROMPER LA LAPICERA
const OPCIONES_RENUNCIA_FORZADA = {
  martir_institucional: {
    id: "martir_institucional",
    nombre: "Opción A: El Mártir Institucional",
    subtitulo: "«Para evitar el derramamiento de sangre de compatriotas»",
    icono: "fa-solid fa-dove",
    color: "sky",
    tono: "Solemne, resignado y republicano",
    textoCarta: "«Renuncio indeclinablemente a la Primera Magistratura de la Nación con la serena convicción de que ningún mandato ni ambición personal vale una sola gota de sangre de un compatriota en las calles de la República. Que la historia juzgue con ecuanimidad y perspectiva lo que las pasiones desbordadas de la coyuntura hoy impiden comprender. Entrego el porvenir a la Asamblea Legislativa.»",
    consecuencia: "Calma transitoria en las puertas de la Rosada. Evita linchamiento físico directo, pero sella para siempre el mote de 'mandatario tibio que entregó el timón a la primera turbulencia'.",
    modificadores: {
      salud: -5,
      paranoia: -15,
      capitalPoliticoResidual: 20,
      nucleoDuroRetorno: 10,
      estigmaTibieza: true
    }
  },

  carta_bomba: {
    id: "carta_bomba",
    nombre: "Opción B: La Carta Bomba",
    subtitulo: "«Derrocado por el golpismo corporativo, financiero y mediático»",
    icono: "fa-solid fa-bomb",
    color: "rose",
    tono: "Combativo, revanchista y de trinchera",
    textoCarta: "«No renuncio ante la voluntad soberana del pueblo: denuncio que me derroca una conspiración infame articulada entre banqueros inescrupulosos, gobernadores extorsionadores, multimedios concentrados y los traidores de mi propio espacio que negociaron la entrega de la Patria a cambio de impunidad judicial. Hoy festejan en los directorios de las corporaciones; mañana la historia los pondrá en su lugar. ¡Volveremos!»",
    consecuencia: "La Plaza de Mayo arde en batallas campales entre bandos enfrentados. Rompe todo pacto de transición pacífica, pero consolida un 'núcleo duro de acero' (15-20%) que sostendrá la leyenda del líder derrocado para el futuro operativo retorno.",
    modificadores: {
      salud: -15,
      paranoia: 25,
      capitalPoliticoResidual: 40,
      nucleoDuroRetorno: 35,
      odioCorporativo: true
    }
  },

  atrincherarse_despacho: {
    id: "atrincherarse_despacho",
    nombre: "Opción C: Atrincherarse en el Despacho",
    subtitulo: "«¡De acá me sacan únicamente con las patas para adelante!»",
    icono: "fa-solid fa-lock",
    color: "red",
    tono: "Desesperado, furioso y fuera de sí",
    textoCarta: "«[NO HAY CARTA] El mandatario trabó la puerta de cedro del despacho con dos sillones franceses, bebió whisky de malta con la banda presidencial colocada y exigió por los altoparlantes que la infantería 'dispare a discreción contra los conspiradores'. A las 19:15 hs, la Casa Militar forzó la cerradura con un cerrajero de urgencia y médicos del SAME le suministraron un sedante intramuscular. El Vicepresidente asumió invocando 'incapacidad psicofísica temporal sobreviniente'.»",
    consecuencia: "Escándalo psiquiátrico de escala global transmitido en vivo por las cadenas internacionales. Evacuación en camilla bajo los efectos del haloperidol. Pérdida inmediata de toda dignidad institucional.",
    modificadores: {
      salud: -35,
      paranoia: 50,
      capitalPoliticoResidual: 5,
      nucleoDuroRetorno: 5,
      juicioInsania: true
    }
  }
};

// 3. EL MINIJUEGO / SECUENCIA DE ESCAPE DE LA ROSADA (LAS TRES RUTAS)
const RUTAS_ESCAPE_ROSADA = {
  helipuerto_h01: {
    id: "helipuerto_h01",
    nombre: "Ruta 1: El Helipuerto de Balcarce 50 (Sikorsky H-01 / S-76)",
    subtitulo: "La foto histórica en el cielo del Río de la Plata",
    icono: "fa-solid fa-helicopter",
    color: "rose",
    dificultad: "Alta exposición mediática",
    riesgoFisico: "Medio (cascotazos a fuselaje)",
    relatoDetallado: "Subís por la estrecha escalera de caracol hacia el techo de la Casa Rosada con el viento azotándote el rostro y el olor a humo de goma quemada subiendo desde Paseo Colón. El Sikorsky H-01 tiene las turbinas rugiendo al límite. Una lluvia de cascotes y proyectiles caseros impacta ruidosamente contra el fuselaje blanco. Dos custodios de la Casa Militar te empujan de cabeza al interior de la cabina mientras el piloto tira del colectivo hacia arriba. El helicóptero se inclina hacia la izquierda, libra las antenas de la Rosada y asciende hacia el horizonte sobre el Río de la Plata mientras las cámaras de los fotógrafos capturan la silueta que definirá una era.",
    destinoIntermedio: "Residencia Presidencial de Olivos (para empacar en 30 minutos) y posterior repliegue aéreo.",
    efectoFoto: "Portada histórica de Clarín, La Nación, The New York Times y Le Monde.",
    modificadores: {
      salud: -10,
      danioAeronave: "Impactos en fuselaje inferior y ventanilla derecha astillada",
      fotoHistoricaInmortal: true
    }
  },

  tunel_aduana_taylor: {
    id: "tunel_aduana_taylor",
    nombre: "Ruta 2: El Túnel Secreto de la Aduana Taylor",
    subtitulo: "Laberinto colonial subterráneo y escape fluvial por el río",
    icono: "fa-solid fa-dungeon",
    color: "amber",
    dificultad: "Sigilo subterráneo y humedad histórica",
    riesgoFisico: "Bajo (infiltración protegida)",
    relatoDetallado: "Descendés por los sótanos húmedos de Balcarce 50 escoltado por dos agentes con linternas tácticas, atravesando las galerías abovedadas de ladrillo colonial construidas sobre la vieja Aduana Taylor bajo la traza de Paseo Colón. El eco sordo de las bombas de estruendo retumba como truenos lejanos entre las paredes de barro y cal. Salís por una compuerta metálica disimulada hacia la Dársena Sur de Puerto Madero, donde una lancha semirrígida de Prefectura Naval espera con los dos motores fueraborda regulando en la penumbra. Destino inmediato: cruzar a Carmelo (Uruguay) o adentrarse en los riachos del Delta del Tigre.",
    destinoIntermedio: "Embarcación fluvial clandestina rumbo a aguas jurisdiccionales uruguayas o isla del Delta.",
    efectoFoto: "Cero fotografías en el aire; pero la oposición denuncia 'fuga de forajido por las cloacas'.",
    modificadores: {
      salud: -5,
      danioAeronave: "Sin uso aéreo",
      auraFugitivo: true
    }
  },

  ambulancia_same: {
    id: "ambulancia_same",
    nombre: "Ruta 3: El Operativo Camuflaje (Ambulancia del SAME)",
    subtitulo: "Camilla de urgencia, oxígeno falso y ruleta entre la multitud",
    icono: "fa-solid fa-truck-medical",
    color: "emerald",
    dificultad: "Máxima tensión cardíaca",
    riesgoFisico: "Alto si se descubre la sábana",
    relatoDetallado: "Te recuestan en una camilla de rescate en el playón de Rivadavia, cubierto con una sábana blanca hasta la frente y con una máscara de oxígeno empañada. El médico jefe enciende las balizas rojas y la sirena de alta potencia: '¡Abran paso, código rojo por infarto agudo de un oficial de granaderos!'. El móvil corta la marea humana de Diagonal Sur a paso de hombre. Por los cristales polarizados ves las caras desencajadas de los manifestantes golpeando los guardabarros. Dos cuadras asfixiantes donde una sola mirada atenta pudo desatar un linchamiento, hasta que el móvil acelera a fondo por avenida 9 de Julio despejada.",
    destinoIntermedio: "Sanatorio privado de alta complejidad en Recoleta bajo nombre ficticio.",
    efectoFoto: "Foto confusa en redes de una camilla anónima; sospecha popular de simulación médica.",
    modificadores: {
      salud: -20,
      danioAeronave: "Sin uso aéreo",
      crisisHipertensiva: true
    }
  }
};

// 4. LA ASAMBLEA LEGISLATIVA (LEY 20.972 DE ACEFALÍA & PRESIDENTES EXPRESS)
const PRESIDENTES_EXPRESS_ASAMBLEA = {
  titular_senado_breve: {
    id: "titular_senado_breve",
    nombre: "El Titular del Senado («El Breve»)",
    orden: 1,
    duracion: "48 Horas de Pánico",
    icono: "fa-solid fa-hourglass-start",
    color: "slate",
    perfil: "Asume de madrugada con ojeras monumentales, traje arrugado y cara de circunstancias ante un recinto a medio llenar. Jura con la mano temblando sobre la Biblia. Su único acto de gobierno es firmar un decreto de asueto bancario y administrativo nacional por 72 horas para frenar la corrida cambiaria, tomar dos pastillas sublinguales para la arritmia y convocar a la Asamblea Legislativa antes de que la multitud le queme el despacho.",
    citaHistorica: "«Solo vine a cumplir con el mandato estricto de la Constitución Nacional y evitar una guerra fratricida.»",
    medidaEstrella: "Feriado cambiario de emergencia y asueto administrativo.",
    finalMandato: "Entrega la banda sin pena ni gloria en la sesión especial de la Asamblea."
  },

  caudillo_cuyo_epico: {
    id: "caudillo_cuyo_epico",
    nombre: "El Caudillo de Cuyo / San Luis («El Épico»)",
    orden: 2,
    duracion: "7 Días de Euforia y Default",
    icono: "fa-solid fa-bolt",
    color: "amber",
    perfil: "Ingresa al Salón Blanco con un traje cruzado impecable a rayas, melena engominada y una sonrisa triunfal de oreja a oreja. Jura mientras la barra en las galerías canta la marcha peronista a todo pulmón. En su discurso inaugural anuncia de pie la suspensión inmediata de los pagos de la deuda externa («¡No pagaremos un solo centavo de usura a los acreedores internacionales!»), provocando la ovación de pie de todo el Congreso. Promete crear 1 millón de puestos de trabajo en 90 días e imprimir una nueva moneda soberana: «El Argentino». A los cinco días los gobernadores del PJ le cortan el apoyo político por teléfono; se toma el avión presidencial a la residencia de Chapadmalal para pasear en la playa y renuncia por fax desde la costa bonaerense.",
    citaHistorica: "«¡Primero están los trabajadores y los niños de la Patria, después los buitres de Wall Street!»",
    medidaEstrella: "Declaración del default de la deuda externa e intento de lanzar la moneda 'El Argentino'.",
    finalMandato: "Renuncia por fax desde el Complejo Presidencial de Chapadmalal."
  },

  presidente_diputados_relampago: {
    id: "presidente_diputados_relampago",
    nombre: "El Presidente de Diputados («El Interino Relámpago»)",
    orden: 3,
    duracion: "36 Horas de Rosca y Pizza Fría",
    icono: "fa-solid fa-pizza-slice",
    color: "orange",
    perfil: "Un veterano de la rosca legislativa que jamás quiso sentarse en ese sillón. Jura a las tres de la mañana en una oficina anexa con dos secretarios de testigos. Come porciones de fugazzeta fría de la pizzería Güerrín mientras doce gobernadores se desgañitan por altavoz en una conferencia telefónica cruzada. No duerme un solo minuto, se lava la cara en la bacha del baño del Senado y se saca la banda presidencial con alivio apenas los barones del Conurbano y la oposición sellan el pacto definitivo.",
    citaHistorica: "«Les juro por la memoria de mi vieja que yo el lunes quería estar pescando dorado en Corrientes.»",
    medidaEstrella: "Caja de pizza sobre el escritorio de Rivadavia y teléfono descolgado.",
    finalMandato: "Pasa el mando al candidato de consenso en cuanto firman las dos Cámaras."
  },

  piloto_tormentas_negociador: {
    id: "piloto_tormentas_negociador",
    nombre: "El Piloto de Tormentas («El Gran Negociador»)",
    orden: 4,
    duracion: "Completa el Mandato (A Sangre, Fuego y Devaluación)",
    icono: "fa-solid fa-anchor",
    color: "emerald",
    perfil: "El caudillo bonaerense o patriarca del interior curtido en mil tempestades políticas. Asume con el respaldo unánime de la CGT, los bancos, los capitanes de la industria de la UIA y el Episcopado. Sin pestañear, decreta la pesificación asimétrica (1 dólar = 1,40 pesos + CER), la devaluación del 200%, retenciones extraordinarias al agro y la creación de 2 millones de planes sociales de emergencia para calmar el Conurbano. La tormenta se aquieta a sangre, fuego y emisión monetaria. Logra estabilizar el cementerio, apaga el fuego y convoca a elecciones anticipadas con un candidato propio.",
    citaHistorica: "«El que depositó dólares, recibirá dólares... o lo que la capacidad real de pago de la Nación permita abonar.»",
    medidaEstrella: "Pesificación asimétrica, devaluación del 200% y subsidios universales de contención social.",
    finalMandato: "Culmina la transición institucional y entrega el bastón al nuevo mandatario electo."
  }
};

// 5. LA VIDA DESPUÉS DEL PODER: EL EXPRESIDENTE SIGUE VIVO
const DESTINOS_EXPRESIDENTE = {
  exilio_dorado: {
    id: "exilio_dorado",
    nombre: "El Exilio Dorado (Punta del Este, Madrid o Miami)",
    subtitulo: "Almuerzos en La Huella, conferencias de 20.000 USD y la sombra de Interpol",
    icono: "fa-solid fa-plane-departure",
    color: "sky",
    ubicacion: "Barrio de Salamanca (Madrid) / La Barra (Punta del Este)",
    relatoDetallado: "Piso señorial en el Barrio de Salamanca en Madrid o mansión sobre la playa en La Barra (Punta del Este). Almuerzos de cuatro horas en paradores exclusivos, conferencias remuneradas a 20.000 dólares para CEOs corporativos sobre 'Liderazgo y Gestión en Tiempos de Caos' y publicación de tus memorias tituladas 'Los Días del Vértigo: Mi Verdad'. El único sobresalto: cada dos años un fiscal federal de Comodoro Py solicita una circular roja a Interpol y tus abogados te exigen no hacer escalas aéreas en países sin tratado de extradición.",
    anosTranscurridos: 4,
    impactoSalud: 20, // Se recupera con el sol y la tranquilidad
    impactoParanoia: -10,
    impactoCapitalPolitico: 15,
    causasComodoroPy: "4 exhortos internacionales cajoneados",
    citaExpresidente: "«En la Argentina los que te aplauden a la mañana son los que te prenden fuego el auto a la noche. Desde Europa la perspectiva histórica es mucho más serena.»"
  },

  penitencia_conurbano: {
    id: "penitencia_conurbano",
    nombre: "El Convento y el Conurbano Profundo (Penitencia Popular)",
    subtitulo: "Huerta en San Vicente, visitas de militantes leales y pastillas para la presión",
    icono: "fa-solid fa-house-chimney",
    color: "amber",
    ubicacion: "Chacra modesta en San Vicente / Quinta de Cañuelas",
    relatoDetallado: "Retiro espiritual en una chacra con arboleda antigua en San Vicente o quinta discreta en Cañuelas. Silencio de radio absoluto ante los movileros de televisión. Te dedicás a podar limoneros, cuidar gallinas ponedoras y tomar mate amargo en el porche mirando el atardecer. Los domingos por la tarde caen viejos secretarios de Estado y militantes históricos con una docena de medialunas de grasa para recordar los viejos tiempos de gloria. Tomás Losartán 50mg todas las mañanas y mantenés un perfil tan bajo que Comodoro Py prefiere no agitar tu expediente.",
    anosTranscurridos: 3,
    impactoSalud: 10,
    impactoParanoia: -25,
    impactoCapitalPolitico: 25,
    causasComodoroPy: "1 causa suspendida por prescripción parcial",
    citaExpresidente: "«El poder es una droga prestada; el barro de la quinta es lo único propio. Acá los tomates no te piden ministerios ni te extorsionan con la coparticipación.»"
  },

  operativo_retorno_streaming: {
    id: "operativo_retorno_streaming",
    nombre: "El Operativo Retorno (Streaming de la Trinchera & Senaduría)",
    subtitulo: "Mate en vivo a los 65 años, fueros a los 68 y candidatura presidencial a los 72",
    icono: "fa-solid fa-tower-broadcast",
    color: "rose",
    ubicacion: "Estudio de streaming propio en Recoleta / Despacho en el Senado",
    relatoDetallado: "A los 65 años prendés una cámara web desde el living de tu departamento. Con un termo bajo el brazo y una bandera argentina de seda de fondo, transmitís tres horas por semana en YouTube, Twitch y TikTok destrozando a tus sucesores con ironías demoledoras: 'Con nosotros la gente comía asado todos los domingos, ahora no les alcanza ni para la polenta'. Acumulás medio millón de seguidores y un 15% de núcleo duro incondicional. A los 68 años ganás la banca de Senador Nacional por tu provincia de origen (obteniendo fueros vitalicios según el Art. 69 CN). Y a los 72 años, con el pelo completamente blanco y una multitud encendida cantando sobre la 9 de Julio, lanzás la fórmula con un solo eslogan: '¡VOLVEREMOS!'.",
    anosTranscurridos: 7,
    impactoSalud: -15, // La rosca desgasta el corazón
    impactoParanoia: 20,
    impactoCapitalPolitico: 45,
    causasComodoroPy: "Blindado por fueros constitucionales en el Senado",
    citaExpresidente: "«Dijeron que estaba muerto y enterrado. En la política argentina, el cementerio es solo la sala de espera para el próximo turno de gobierno.»"
  }
};

// 6. PLANTILLA BASE DEL REPORTE DE LA FUERZA AÉREA ARGENTINA (H-01)
const REPORTE_FUERZA_AEREA_BASE = {
  unidad: "Brigada Aérea I - Agrupación Aérea Presidencial (Hangar Olivos / Aeroparque)",
  aeronave: "Sikorsky S-76B Spirit (Matrícula Militar H-01)",
  tripulacion: "Comandante Mayor FAA + Copiloto + 2 Custodios de Casa Militar",
  horaDespegue: "19:52 hs (Hora Oficial Argentina)",
  puntoDespegue: "Techo Casa Rosada (Coordenadas: 34°36'30\"S 58°22'14\"W)",
  condicionesClimaticas: "Cielo cubierto por humo negro de neumáticos; ráfagas cruzadas de 42 km/h del Río de la Plata.",
  danioReportado: "Múltiples impactos de proyectiles y cascotes en el fuselaje ventral; compuerta derecha abollada; aviónica operativa.",
  presionArterialMandatario: "19 / 12 mmHg (Crisis hipertensiva aguda asistida con sedante sublingual por médico presidencial).",
  situacionPlazaMayo: "Perímetro perimetral vulnerado, 18 focos ígneos activos sobre Paseo Colón, Salón Blanco con barricadas.",
  situacionFinanciera: "Dólar sin cotización en pizarras; Banco Central de la República Argentina bajo feriado bancario por 72 horas."
};

/**
 * CLASE PRINCIPAL: SistemaCaidaEvacuacion
 * Gestiona el umbral del colapso, la renuncia, la ruta de escape, la asamblea legislativa y el epílogo del expresidente.
 */
class SistemaCaidaEvacuacion {
  constructor() {
    this.estadoColapso = {
      rebelionTerritorialActiva: false,
      amotinamientoSeguridadActivo: false,
      traicionBloqueActiva: false,
      umbralAlcanzado: false,
      detonantePrincipal: null
    };

    this.cuasimonedasEmitidas = [];
    this.renunciaElegida = null;
    this.rutaEscapeElegida = null;
    this.asambleaSecuencia = [];
    this.presidenteDefinitivo = null;
    this.destinoExpresidenteElegido = null;
    this.reporteEvacuacion = null;
    this.edadPosterior = 0;
    this.causasAbiertasComodoroPy = 3;
    this.historialCaida = [];
    this.congelamientoTemporalActivo = false;
  }

  /**
   * Evalúa si las tres patas del poder se quebraron simultáneamente o si la situación es terminal.
   */
  evaluarUmbralColapso(motor = null) {
    if (!motor) return { umbralAlcanzado: false };

    const tc = motor.termometroCriollo || { mechaSocial: 50, escalaPiquete: 50, fugaDolares: 50 };
    const macro = motor.macroeconomia || { reservas: 25000, inflacion: 10, riesgoPais: 1200 };
    const salud = motor.saludSupervivencia || { salud: 50, paranoia: 50, rosca: 50, seguridad: 50 };
    const crisis = motor.sistemaCrisis || null;

    // 1. Pata 1: Rebelión Territorial (Cuasimonedas)
    // Se activa por reservas bajas, hiperinflación o mecha muy alta
    if (macro.reservas < 12000 || macro.inflacion >= 45 || tc.mechaSocial >= 82) {
      if (!this.estadoColapso.rebelionTerritorialActiva) {
        this.estadoColapso.rebelionTerritorialActiva = true;
        this.registrarCuasimoneda("Patacones (Provincia de Buenos Aires)", "Buenos Aires");
        this.registrarCuasimoneda("LECOP (Emisión de Emergencia)", "Nacional");
        this.historialCaida.push({
          evento: "Rebelión Territorial",
          detalle: "Los gobernadores cortaron la línea con la Rosada y pagan aguinaldos con Patacones."
        });
      }
    }

    // 2. Pata 2: Amotinamiento de Seguridad
    // Se activa si la seguridad es crítica, la mecha supera el 88% o hay desborde en crisis
    const mechaCrisis = tc.mechaSocial !== undefined ? tc.mechaSocial : 50;
    if (salud.seguridad <= 22 || mechaCrisis >= 88 || (crisis && crisis.protocoloHelicoptero === 'despegue_evacuacion')) {
      if (!this.estadoColapso.amotinamientoSeguridadActivo) {
        this.estadoColapso.amotinamientoSeguridadActivo = true;
        this.historialCaida.push({
          evento: "Amotinamiento de Seguridad",
          detalle: "Infantería sin munición en Diagonal Norte y FF.AA. invocando Ley 24.059."
        });
      }
    }

    // 3. Pata 3: Traición del Propio Bloque
    // Se activa si la rosca política está por el piso, la paranoia es extrema o el gabinete colapsó
    const gabinete = motor.sistemaGabinete || null;
    const bajasGabinete = (gabinete && Array.isArray(gabinete.renunciasActivas)) ? gabinete.renunciasActivas.length : 0;
    const muertosCrisis = (crisis && typeof crisis.muertosCivilesCrisis === 'number') ? crisis.muertosCivilesCrisis : 0;
    if (salud.rosca <= 25 || salud.paranoia >= 80 || bajasGabinete >= 2 || muertosCrisis >= 2) {
      if (!this.estadoColapso.traicionBloqueActiva) {
        this.estadoColapso.traicionBloqueActiva = true;
        this.historialCaida.push({
          evento: "Traición del Bloque",
          detalle: "Jefes de bloque del Congreso trajeron la carpeta de cuero exigiendo la renuncia antes de las 18:00 hs."
        });
      }
    }

    // Evaluación del trípode del poder
    const patasRotasCount = (this.estadoColapso.rebelionTerritorialActiva ? 1 : 0) +
                            (this.estadoColapso.amotinamientoSeguridadActivo ? 1 : 0) +
                            (this.estadoColapso.traicionBloqueActiva ? 1 : 0);

    const esTerminalPorMecha = mechaCrisis >= 95 && salud.seguridad <= 20;
    const esTerminalPorProtocolo = crisis && crisis.protocoloHelicoptero === 'despegue_evacuacion';

    if (patasRotasCount === 3 || esTerminalPorMecha || esTerminalPorProtocolo) {
      this.estadoColapso.umbralAlcanzado = true;
      this.estadoColapso.detonantePrincipal = esTerminalPorProtocolo ? "Orden de evacuación inmediata" :
                                              (esTerminalPorMecha ? "Asedio total a Casa Rosada" : "Ruptura simultánea de las Tres Patas del Poder");
      this.congelamientoTemporalActivo = true;
    }

    return {
      umbralAlcanzado: this.estadoColapso.umbralAlcanzado,
      patasRotasCount,
      rebelionTerritorial: this.estadoColapso.rebelionTerritorialActiva,
      amotinamientoSeguridad: this.estadoColapso.amotinamientoSeguridadActivo,
      traicionBloque: this.estadoColapso.traicionBloqueActiva,
      detonante: this.estadoColapso.detonantePrincipal
    };
  }

  /**
   * Fuerza el colapso institucional manualmente (para escenarios cinemáticos o decisiones límite).
   */
  forzarColapsoInstitucional(motor = null, motivo = "Colapso del frente interno") {
    this.estadoColapso.rebelionTerritorialActiva = true;
    this.estadoColapso.amotinamientoSeguridadActivo = true;
    this.estadoColapso.traicionBloqueActiva = true;
    this.estadoColapso.umbralAlcanzado = true;
    this.estadoColapso.detonantePrincipal = motivo;
    this.congelamientoTemporalActivo = true;
    this.registrarCuasimoneda("Patacones (Provincia de Buenos Aires)", "Buenos Aires");
    this.registrarCuasimoneda("BOCADE (Cuyo/Noroeste)", "Provincias del Interior");

    this.historialCaida.push({
      evento: "Colapso Institucional Forzado",
      detalle: motivo
    });

    return this.evaluarUmbralColapso(motor);
  }

  /**
   * Registra una cuasimoneda emitida por las provincias rebeldes.
   */
  registrarCuasimoneda(nombre, provincia) {
    if (!this.cuasimonedasEmitidas.find(c => c.nombre === nombre)) {
      this.cuasimonedasEmitidas.push({
        nombre,
        provincia,
        fecha: "Hora cero del estallido"
      });
    }
  }

  /**
   * Ejecuta la firma o negación de la carta de renuncia.
   */
  ejecutarRenuncia(tipoRenunciaId, motor = null) {
    const config = OPCIONES_RENUNCIA_FORZADA[tipoRenunciaId] || OPCIONES_RENUNCIA_FORZADA.martir_institucional;
    this.renunciaElegida = config;

    if (motor && motor.saludSupervivencia) {
      if (config.modificadores.salud) motor.saludSupervivencia.salud = Math.max(5, Math.min(100, motor.saludSupervivencia.salud + config.modificadores.salud));
      if (config.modificadores.paranoia) motor.saludSupervivencia.paranoia = Math.max(0, Math.min(100, motor.saludSupervivencia.paranoia + config.modificadores.paranoia));
    }

    if (motor && motor.termometroCriollo) {
      if (tipoRenunciaId === 'carta_bomba') {
        motor.termometroCriollo.mechaSocial = 100;
        motor.termometroCriollo.humorSocial = Math.max(0, motor.termometroCriollo.humorSocial - 25);
      } else if (tipoRenunciaId === 'martir_institucional') {
        motor.termometroCriollo.mechaSocial = Math.max(40, motor.termometroCriollo.mechaSocial - 20);
      }
    }

    this.historialCaida.push({
      evento: "Firma de Renuncia",
      tipo: config.nombre,
      detalle: config.subtitulo
    });

    return {
      exito: true,
      renuncia: config,
      relato: config.consecuencia
    };
  }

  /**
   * Ejecuta la secuencia de escape de la Casa Rosada (H-01, Aduana Taylor o Ambulancia SAME).
   */
  ejecutarEscapeRosada(rutaEscapeId, motor = null) {
    const config = RUTAS_ESCAPE_ROSADA[rutaEscapeId] || RUTAS_ESCAPE_ROSADA.helipuerto_h01;
    this.rutaEscapeElegida = config;

    if (motor && motor.saludSupervivencia) {
      if (config.modificadores.salud) motor.saludSupervivencia.salud = Math.max(5, Math.min(100, motor.saludSupervivencia.salud + config.modificadores.salud));
    }

    // Generar el reporte oficial de evacuación de la FAA
    this.reporteEvacuacion = this.generarReporteFuerzaAerea(motor);

    this.historialCaida.push({
      evento: "Escape de Balcarce 50",
      ruta: config.nombre,
      detalle: config.subtitulo
    });

    return {
      exito: true,
      ruta: config,
      reporte: this.reporteEvacuacion,
      relato: config.relatoDetallado
    };
  }

  /**
   * Simula la ruleta de la Asamblea Legislativa (Ley 20.972 de Acefalía).
   * Hace pasar por el carrusel a los 4 presidentes express hasta el Piloto de Tormentas.
   */
  simularAsambleaLegislativa(motor = null) {
    const p1 = PRESIDENTES_EXPRESS_ASAMBLEA.titular_senado_breve;
    const p2 = PRESIDENTES_EXPRESS_ASAMBLEA.caudillo_cuyo_epico;
    const p3 = PRESIDENTES_EXPRESS_ASAMBLEA.presidente_diputados_relampago;
    const p4 = PRESIDENTES_EXPRESS_ASAMBLEA.piloto_tormentas_negociador;

    this.asambleaSecuencia = [p1, p2, p3, p4];
    this.presidenteDefinitivo = p4;

    this.historialCaida.push({
      evento: "Asamblea Legislativa (Ley 20.972)",
      secuencia: ["Titular del Senado (48 hs)", "Caudillo de Cuyo (7 días)", "Presidente de Diputados (36 hs)", "Piloto de Tormentas (Consolidado)"],
      detalle: "La Asamblea Legislativa coronó al Piloto de Tormentas para estabilizar el frente cambiario y social."
    });

    return {
      secuencia: this.asambleaSecuencia,
      presidenteDefinitivo: this.presidenteDefinitivo,
      ley: "Ley 20.972 de Acefalía Presidencial",
      resumen: "Tras 10 días de vértigo institucional, 4 presidentes y el default de la deuda, el Piloto de Tormentas asumió con plenos poderes decretando la pesificación asimétrica y convocando a elecciones anticipadas."
    };
  }

  /**
   * Define el destino vital del mandatario como expresidente (no hay Game Over).
   */
  definirDestinoExpresidente(destinoId, motor = null) {
    const config = DESTINOS_EXPRESIDENTE[destinoId] || DESTINOS_EXPRESIDENTE.operativo_retorno_streaming;
    this.destinoExpresidenteElegido = config;

    // Actualizar edad y salud del personaje
    if (motor && motor.saludSupervivencia) {
      const edadActual = motor.saludSupervivencia.edad || 52;
      this.edadPosterior = edadActual + config.anosTranscurridos;
      motor.saludSupervivencia.edad = this.edadPosterior;
      motor.saludSupervivencia.salud = Math.max(10, Math.min(100, motor.saludSupervivencia.salud + config.impactoSalud));
      motor.saludSupervivencia.paranoia = Math.max(5, Math.min(100, motor.saludSupervivencia.paranoia + config.impactoParanoia));
    }

    this.historialCaida.push({
      evento: "Vida Posterior como Expresidente",
      destino: config.nombre,
      edadFinal: this.edadPosterior,
      detalle: config.subtitulo
    });

    return {
      exito: true,
      destino: config,
      edadPosterior: this.edadPosterior,
      relato: config.relatoDetallado
    };
  }

  /**
   * Genera el reporte oficial confidencial de la Fuerza Aérea Argentina.
   */
  generarReporteFuerzaAerea(motor = null) {
    const ruta = this.rutaEscapeElegida || RUTAS_ESCAPE_ROSADA.helipuerto_h01;
    const salud = motor && motor.saludSupervivencia ? motor.saludSupervivencia : { salud: 45, paranoia: 65, edad: 54 };
    const macro = motor && motor.macroeconomia ? motor.macroeconomia : { riesgoPais: 2850, inflacion: 35 };

    const presionSistolica = Math.min(22, Math.max(16, Math.round(18 + (salud.paranoia / 25))));
    const presionDiastolica = Math.min(14, Math.max(10, Math.round(11 + (salud.paranoia / 35))));

    return {
      ...REPORTE_FUERZA_AEREA_BASE,
      rutaEjecutada: ruta.nombre,
      aeronaveUtilizada: ruta.id === 'helipuerto_h01' ? "Sikorsky S-76B Spirit (H-01)" : (ruta.id === 'tunel_aduana_taylor' ? "Lancha Semirrígida PNA Hurricane" : "Móvil 14 SAME Mercedes Sprinter"),
      danioReportado: ruta.modificadores.danioAeronave || "Sin daños aéreos",
      presionArterialMandatario: `${presionSistolica} / ${presionDiastolica} mmHg (Crisis hipertensiva asistida en tránsito)`,
      edadMandatarioEnVuelo: `${salud.edad} Años`,
      riesgoPaisMomentoDespegue: `${Math.max(2500, macro.riesgoPais)} pts`,
      fotografiaHistoricaTomada: ruta.id === 'helipuerto_h01'
    };
  }

  /**
   * Diagnóstico final consolidado para la pantalla de resultados del motor.
   */
  diagnosticarDestinoFinal(motor = null) {
    if (!this.destinoExpresidenteElegido) {
      // Auto-diagnóstico basado en el perfil del jugador si no pasó por la elección manual
      const salud = motor && motor.saludSupervivencia ? motor.saludSupervivencia : { paranoia: 50, rosca: 50 };
      if (salud.paranoia >= 70) {
        this.destinoExpresidenteElegido = DESTINOS_EXPRESIDENTE.penitencia_conurbano;
      } else if (salud.rosca >= 60) {
        this.destinoExpresidenteElegido = DESTINOS_EXPRESIDENTE.operativo_retorno_streaming;
      } else {
        this.destinoExpresidenteElegido = DESTINOS_EXPRESIDENTE.exilio_dorado;
      }
    }

    return {
      estadoColapso: { ...this.estadoColapso },
      cuasimonedas: [...this.cuasimonedasEmitidas],
      renuncia: this.renunciaElegida || OPCIONES_RENUNCIA_FORZADA.martir_institucional,
      escape: this.rutaEscapeElegida || RUTAS_ESCAPE_ROSADA.helipuerto_h01,
      asamblea: this.asambleaSecuencia.length > 0 ? this.asambleaSecuencia : [PRESIDENTES_EXPRESS_ASAMBLEA.piloto_tormentas_negociador],
      presidenteDefinitivo: this.presidenteDefinitivo || PRESIDENTES_EXPRESS_ASAMBLEA.piloto_tormentas_negociador,
      destinoExpresidente: this.destinoExpresidenteElegido,
      reporteFAA: this.reporteEvacuacion || this.generarReporteFuerzaAerea(motor),
      edadPosterior: this.edadPosterior || ((motor && motor.saludSupervivencia ? motor.saludSupervivencia.edad : 55) + 4)
    };
  }

  /**
   * Resumen para almacenamiento y serialización.
   */
  obtenerResumen() {
    return {
      umbralAlcanzado: this.estadoColapso.umbralAlcanzado,
      rebelionTerritorialActiva: this.estadoColapso.rebelionTerritorialActiva,
      amotinamientoSeguridadActivo: this.estadoColapso.amotinamientoSeguridadActivo,
      traicionBloqueActiva: this.estadoColapso.traicionBloqueActiva,
      detonantePrincipal: this.estadoColapso.detonantePrincipal,
      cuasimonedasEmitidasCount: this.cuasimonedasEmitidas.length,
      renunciaElegidaId: this.renunciaElegida ? this.renunciaElegida.id : null,
      rutaEscapeElegidaId: this.rutaEscapeElegida ? this.rutaEscapeElegida.id : null,
      destinoExpresidenteId: this.destinoExpresidenteElegido ? this.destinoExpresidenteElegido.id : null,
      edadPosterior: this.edadPosterior,
      asambleaFinalizada: this.asambleaSecuencia.length > 0,
      historialCaidaCount: this.historialCaida.length
    };
  }
}

// Exportación modular para Node.js y navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TRES_PATAS_COLAPSO,
    OPCIONES_RENUNCIA_FORZADA,
    RUTAS_ESCAPE_ROSADA,
    PRESIDENTES_EXPRESS_ASAMBLEA,
    DESTINOS_EXPRESIDENTE,
    REPORTE_FUERZA_AEREA_BASE,
    SistemaCaidaEvacuacion
  };
} else if (typeof window !== 'undefined') {
  window.TRES_PATAS_COLAPSO = TRES_PATAS_COLAPSO;
  window.OPCIONES_RENUNCIA_FORZADA = OPCIONES_RENUNCIA_FORZADA;
  window.RUTAS_ESCAPE_ROSADA = RUTAS_ESCAPE_ROSADA;
  window.PRESIDENTES_EXPRESS_ASAMBLEA = PRESIDENTES_EXPRESS_ASAMBLEA;
  window.DESTINOS_EXPRESIDENTE = DESTINOS_EXPRESIDENTE;
  window.REPORTE_FUERZA_AEREA_BASE = REPORTE_FUERZA_AEREA_BASE;
  window.SistemaCaidaEvacuacion = SistemaCaidaEvacuacion;
}
