// rosca_federal_provincias.js - El Mapa de las 4 Ligas Provinciales, la Bimoneda de la Rosca y el Tijeretazo
// Modela la geopolítica interna argentina: el Senado de la Nación, los gobernadores, ATN vs. Quórum y corte de boleta.

/**
 * 1. EL MAPA DE LAS 4 LIGAS PROVINCIALES
 */
const LIGAS_PROVINCIALES = {
  norte_grande: {
    id: "norte_grande",
    nombre: "Liga del Norte Grande (Los Feudales / El Chaco Seco)",
    provincias: ["Formosa", "Santiago del Estero", "Catamarca", "La Rioja", "Tucumán", "Chaco", "Jujuy", "Salta"],
    senadoresTotales: 14,
    diputadosAproximados: 32,
    dependenciaCoparticipacionPct: 85,
    empleoPublicoPct: 70,
    lealtadInicial: 72,
    estadoInicial: "COMPRADA",
    costoMensualATN: 45000, // Millones de pesos
    descripcion: "Mandatarios con reelección indefinida o hegemonía legislativa local. Mercenarios legislativos de supervivencia: votan cualquier ley a cambio de ATN para sueldos y dos obras viales.",
    puntoDebil: "El 85% de sus presupuestos depende de la coparticipación nacional y de los ATN. Tienen hasta un 70% de empleo público formal en sus distritos.",
    reclamoActivo: "Formosa y Santiago del Estero exigen reactivar obras de acueductos y fondos para el pago de aguinaldos."
  },

  region_centro: {
    id: "region_centro",
    nombre: "Región Centro y Pampa Húmeda (Los Productivos / El Cordobesismo)",
    provincias: ["Córdoba", "Santa Fe", "Entre Ríos", "Mendoza"],
    senadoresTotales: 8,
    diputadosAproximados: 48,
    dependenciaCoparticipacionPct: 45,
    empleoPublicoPct: 32,
    lealtadInicial: 38,
    estadoInicial: "TENSA",
    costoMensualATN: 12000,
    descripcion: "Provincias con músculo agroindustrial y puertos exportadores. Rechazan de plano la suba de retenciones. Forman bloques bisagra o monobloques que cobran peaje legislativo voto por voto.",
    puntoDebil: "El déficit crónico de las Cajas de Jubilaciones provinciales no transferidas al ANSES y las obras troncales de rutas productivas (Ruta 9, Ruta 34, Hidrovía).",
    reclamoActivo: "Los diputados de Santa Fe y Córdoba amenazan con rechazar el Presupuesto si se tocan las retenciones o no se giran fondos a cajas previsionales."
  },

  bloque_patagonico: {
    id: "bloque_patagonico",
    nombre: "El Bloque Patagónico (Los Dueños del Frío y la Energía)",
    provincias: ["Neuquén", "Chubut", "Río Negro", "Santa Cruz", "Tierra del Fuego"],
    senadoresTotales: 10,
    diputadosAproximados: 25,
    dependenciaCoparticipacionPct: 55,
    empleoPublicoPct: 45,
    lealtadInicial: 15,
    estadoInicial: "EN REBELDÍA",
    costoMensualATN: 18000,
    descripcion: "Poca población pero control absoluto del subsuelo (Vaca Muerta, gas, pesca, represas hidroeléctricas). Su poder de chantaje: 'Cerrar la llave del gas' y frenar la salida de crudo hacia Buenos Aires.",
    puntoDebil: "Dependencia de reembolsos por puertos patagónicos, régimen de promoción fueguino y pago al día de regalías hidrocarburíferas coparticipables.",
    reclamoActivo: "Exigen restitución del subsidio a la tarifa de gas por zona fría y la prórroga de concesiones de hidroeléctricas del Comahue."
  },

  amba_gigantes: {
    id: "amba_gigantes",
    nombre: "Los Dos Gigantes del AMBA (PBA vs. CABA: 45% del Padrón)",
    provincias: ["Provincia de Buenos Aires", "Ciudad Autónoma de Buenos Aires"],
    senadoresTotales: 6,
    diputadosAproximados: 95,
    dependenciaCoparticipacionPct: 35,
    empleoPublicoPct: 28,
    lealtadInicial: 45,
    estadoInicial: "GUERRA DE TRINCHERAS",
    costoMensualATN: 60000,
    descripcion: "PBA es el 38% del padrón electoral; fábrica de marchas y cacerolazos hacia la Rosada. CABA es la vidriera institucional que litiga en la Corte Suprema por los puntos de coparticipación quitados.",
    puntoDebil: "PBA estalla si se frena la asistencia a comedores y fondos del conurbano; CABA exige billones por sentencias firmes de la Corte Suprema.",
    reclamoActivo: "PBA exige fondo de fortalecimiento fiscal del Conurbano; CABA exige ejecución del embargo por coparticipación."
  }
};

/**
 * 2. LA BIMONEDA DE LA ROSCA: PALANCAS FINANCIERAS DEL EJECUTIVO
 */
const PALANCAS_FINANCIERAS_EJECUTIVO = {
  goteo_coparticipacion: {
    id: "goteo_coparticipacion",
    nombre: "Demorar el Goteo Diario de Coparticipación",
    icono: "fa-solid fa-faucet-drip",
    tipo: "apriete",
    descripcion: "Retener por 48 a 72 horas las transferencias automáticas complementarias del Banco Nación para que los gobernadores sufran en la previa al pago de aguinaldos.",
    impacto: {
      roscaFederalDelta: -15,
      presionGobernadoresDelta: +25,
      cajaFiscalAhorro: 18000,
      relato: "Las transferencias se frenan el viernes a la tarde. Dos gobernadores patagónicos y uno del norte no pueden pagar aguinaldos en fecha y convocan a conferencias de prensa de urgencia."
    }
  },

  atn_discrecionales: {
    id: "atn_discrecionales",
    nombre: "Liberar Aportes del Tesoro Nacional (ATN)",
    icono: "fa-solid fa-money-bill-wave",
    tipo: "alivio",
    descripcion: "Girar fondos de emergencia discrecionales del Ministerio del Interior a las cuentas provinciales para comprar el voto de 2 senadores en la sesión nocturna.",
    impacto: {
      roscaFederalDelta: +20,
      senadoresGanados: 2,
      costoFiscalMillones: 15000,
      relato: "El Ministro del Interior firma la resolución de ATN a las 18:30 hs. El gobernador beneficiado levanta el teléfono y ordena a su bancada sentarse a dar quórum."
    }
  },

  pisar_obra_publica: {
    id: "pisar_obra_publica",
    nombre: "Pisar Desembolsos de Vialidad y Vivienda",
    icono: "fa-solid fa-trowel-bricks",
    tipo: "apriete",
    descripcion: "Frenar certificados de obra de puentes y rutas troncales. El gobernador debe afrontar los piquetes de la UOCRA en la puerta de la Casa de Gobierno provincial.",
    impacto: {
      roscaFederalDelta: -10,
      tensionUocra: +30,
      ahorroObraPublica: 24000,
      relato: "Se paralizan 14 obras viales en el centro y norte del país. La UOCRA corta los accesos a las capitales provinciales y los gobernadores piden audiencia urgente en Balcarce 50."
    }
  },

  cajas_previsionales: {
    id: "cajas_previsionales",
    nombre: "Asfixiar las Cajas Previsionales No Transferidas",
    icono: "fa-solid fa-vault",
    tipo: "extorsion",
    descripcion: "Suspender los giros de ANSES para compensar el déficit previsional de Córdoba, Santa Fe y Entre Ríos, forzándolos a pagar jubilaciones con fondos provinciales propios.",
    impacto: {
      roscaFederalDelta: -25,
      rebeldiaCentro: +40,
      bloqueBisagraEnfurecido: true,
      relato: "La Región Centro forma un bloque unificado de 48 diputados para votar en contra de todas las iniciativas del Ejecutivo hasta que se normalicen los giros previsionales."
    }
  }
};

/**
 * 3. LA MECÁNICA DEL CORTE DE BOLETA (EL TIJERETAZO)
 */
function calcularAlgoritmoCorteBoleta(votoAparatoLocal, lealtadGobernador, imagenPresidencial) {
  // Cuanto menor es la lealtad y menor la imagen presidencial, mayor es el tijeretazo
  const deslealtadPct = Math.max(0, 100 - lealtadGobernador);
  const castigoImagen = Math.max(0, 50 - imagenPresidencial);

  // Coeficiente de corte de boleta: del 5% al 65%
  let coeficienteCorte = (deslealtadPct * 0.4) + (castigoImagen * 0.5);
  coeficienteCorte = Math.min(65.0, Math.max(5.0, Math.round(coeficienteCorte * 10) / 10));

  const votoPresidencialResultante = Math.max(10.0, Math.round((votoAparatoLocal * (1 - (coeficienteCorte / 100))) * 10) / 10);

  return {
    votoLocalGobernador: votoAparatoLocal,
    coeficienteCortePct: coeficienteCorte,
    votoPresidencialEfectivo: votoPresidencialResultante,
    traicionDetectada: coeficienteCorte >= 25.0,
    relato: coeficienteCorte >= 35.0
      ? `Operativo Tijera Furioso: Los punteros repartieron la boleta local casa por casa recortando el cuerpo presidencial con trincheta. El gobernador sacó ${votoAparatoLocal}%, pero tu lista presidencial quedó en un mísero ${votoPresidencialResultante}%.`
      : `Lealtad Razonable: El aparato provincial repartió la boleta completa en la mayoría de los circuitos. El corte de boleta fue de apenas ${coeficienteCorte}%.`
  };
}

/**
 * 4. DILEMAS FEDERALES EXTREMOS
 */
const DILEMAS_FEDERALES_EXTREMOS = {
  dilema_quorum_3am: {
    id: "dilema_quorum_3am",
    titulo: "El Chantaje del Quórum de las 3:00 AM en el Senado",
    icono: "fa-solid fa-clock",
    escenario: "Se vota en el Senado la Ley de Reforma Impositiva exigida por el FMI. La votación está empatada en 36 a 36. Faltan cinco minutos y el senador clave de una provincia patagónica está 'encerrado en el baño'. Su gobernador llama al teléfono rojo: «Presidente, mi senador no sale del baño hasta que el Banco Nación no libere $15.000 M de ATN para sueldos estatales y no me firme la prórroga de la concesión de las represas por 30 años».",
    opciones: [
      {
        id: "firmar_atn_homebanking",
        letra: "A",
        titulo: "Firmar la transferencia de ATN por home banking oficial en el acto",
        descripcion: "Liberar los $15.000 M inmediatamente para que el senador salga del baño y vote a favor.",
        impacto: {
          leyAprobada: true,
          senadoresDelta: +1,
          metaFiscalRuptura: true,
          roscaGobernadoresDelta: +10,
          relato: "El senador sale del baño acomodándose la corbata, vota a favor y la ley se aprueba 37 a 36. Al día siguiente, el Ministro de Economía te avisa que se rompió la meta fiscal del mes y los restantes 23 gobernadores hacen fila exigiendo el mismo trato."
        }
      },
      {
        id: "rechazar_extorsion_caer_ley",
        letra: "B",
        titulo: "Rechazar la extorsión y dejar que la ley se caiga",
        descripcion: "Mantener la línea de conducta institucional: no negociar bajo apriete de bancas.",
        impacto: {
          leyAprobada: false,
          riesgoPaisDelta: +300,
          fmiSuspendeDesembolso: true,
          autoridadMoral: +15,
          relato: "El tablero se cierra 36 a 36 con el senador ausente. El proyecto se rechaza; el FMI suspende el desembolso trimestral, el Riesgo País salta 300 puntos y los bonos de deuda se desploman en Wall Street."
        }
      },
      {
        id: "apriete_side_pasillo",
        letra: "C",
        titulo: "Mandar a la SIDE a apretar al legislador en el pasillo",
        descripcion: "Tu operador de inteligencia le muestra al senador fotos de departamentos no declarados en Miami.",
        impacto: {
          leyAprobada: true,
          escandaloSIDE: true,
          renunciaSenadorPosterior: true,
          relato: "El operador de la SIDE intercepta al senador saliendo del baño y le muestra una carpeta confidencial. Vota a favor pálido y temblando; a las 48 horas renuncia a la banca denunciando extorsión del Poder Ejecutivo por cadena de medios."
        }
      },
      {
        id: "salida_intermedia_promesa_obra",
        letra: "D",
        titulo: "Ofrecer una salida intermedia (Compromiso de obra sin plata líquida)",
        descripcion: "Prometer incluir la represa provincial en el presupuesto del año siguiente sin desembolso presente.",
        impacto: {
          leyAprobada: Math.random() > 0.5,
          lealtadPatagoniaDelta: -5,
          relato: "El gobernador no confía en promesas verbales. Tras una llamada áspera de 20 minutos, el senador se abstiene: la ley queda empatada y el Vicepresidente debe desempatar en un clima de tensión terminal."
        }
      }
    ]
  },

  dilema_valvula_petroleo: {
    id: "dilema_valvula_petroleo",
    titulo: "La Rebelión de la Válvula de Petróleo en Comodoro Rivadavia",
    icono: "fa-solid fa-oil-well",
    escenario: "Para cumplir el equilibrio fiscal, el Ministerio de Economía retiene por 60 días los subsidios al transporte y la energía de la Patagonia. Los gobernadores del sur se atrincheran en Comodoro Rivadavia junto al sindicato de petroleros y dan un ultimátum de 24 horas: «Si no bajan los fondos retenidos, bajamos las palancas de bombeo de crudo hacia las refinerías de Buenos Aires».",
    opciones: [
      {
        id: "intervenir_gendarmeria_pozos",
        letra: "A",
        titulo: "Enviar a la Gendarmería Nacional a intervenir los pozos por la fuerza",
        descripcion: "Militarizar las cabeceras de oleoductos y garantizar el bombeo de crudo bajo custodia federal.",
        impacto: {
          desabastecimientoNafta: true,
          paroPetroleroIndefinido: true,
          mechaSocialDelta: +20,
          relato: "Gendarmería copa las válvulas de bombeo pero el gremio petrolero decreta paro total por tiempo indeterminado y corta la Ruta 3. En cuatro días no hay nafta en las estaciones de servicio del país y se forman colas de seis cuadras."
        }
      },
      {
        id: "ceder_girar_fondos_intereses",
        letra: "B",
        titulo: "Ceder al reclamo y girar el 100% de los fondos retenidos con intereses",
        descripcion: "Acatar la exigencia patagónica para evitar la parálisis energética nacional.",
        impacto: {
          pazEnergetica: true,
          perdidaAutoridadPresidencial: true,
          costoFiscalMillones: 32000,
          relato: "Se transfieren los fondos de urgencia y los gobernadores levantan la medida entre aplausos. La prensa opositora titula: 'El Presidente se arrodilló ante los caudillos del sur' y los caciques de otras regiones toman nota del método."
        }
      },
      {
        id: "amparo_corte_suprema_embargo",
        letra: "C",
        titulo: "Presentar un amparo urgente ante la Corte Suprema para embargar cuentas provinciales",
        descripcion: "Judicializar el conflicto denunciando sedición y retención indebida de recursos estratégicos.",
        impacto: {
          conflictoJudicialLargo: true,
          camionesVarados: true,
          relato: "El Procurador del Tesoro presenta una medida cautelar en el cuarto piso de Tribunales. La Corte tarda dos semanas en expedirse mientras los camiones cisterna quedan varados y el precio del barril criollo se dispara."
        }
      },
      {
        id: "dividir_bloque_ofrecer_ypf",
        letra: "D",
        titulo: "Dividir el bloque patagónico ofreciéndole la presidencia de YPF a Neuquén",
        descripcion: "Pactar con el gobernador de la provincia que controla Vaca Muerta para quebrar la unidad regional.",
        impacto: {
          fracturaPatagonica: true,
          neuquenAliado: true,
          guerraChubutSantaCruz: true,
          relato: "El gobernador de Neuquén acepta colocar a su hombre de confianza al frente de YPF y ordena reactivar el bombeo de inmediato. Chubut y Santa Cruz lo acusan de traidor y te declaran la guerra en el Senado para siempre."
        }
      }
    ]
  },

  dilema_tijeretazo_veda: {
    id: "dilema_tijeretazo_veda",
    titulo: "El Descubrimiento del 'Tijeretazo' en Plena Veda Electoral",
    icono: "fa-solid fa-scissors",
    escenario: "Viernes previo a las elecciones legislativas. Rige la veda electoral. Militantes leales en la Tercera Sección Electoral allanan de hecho un local partidario de un intendente aliado y encuentran 150.000 boletas cortadas: la lista local a concejales e intendente está prolijamente abrochada a la boleta del candidato presidencial opositor, mientras tus boletas descansan en bolsas de consorcio.",
    opciones: [
      {
        id: "confrontar_intendente_amenaza",
        letra: "A",
        titulo: "Confrontar al intendente y exigirle boleta completa bajo amenaza de corte de fondos",
        descripcion: "Llamarlo a su celular privado y amenazarlo con paralizarle todas las obras y ATN del municipio.",
        impacto: {
          traicionConfirmada: true,
          perdidaVotosSeccion: 8.5,
          relato: "El intendente jura por sus hijos que 'fue un error de dos punteros zonales'. El domingo te traiciona igual: su lista gana por 20 puntos en su distrito y tu fórmula presidencial sufre una sangría histórica de votos."
        }
      },
      {
        id: "denuncia_penal_clausura_local",
        letra: "B",
        titulo: "Denunciarlo penalmente ante la Justicia Electoral y clausurar el local con policía",
        descripcion: "Llevar escribanos públicos, filmar las bolsas con boletas cortadas y convocar a los canales de TV.",
        impacto: {
          escandaloMediosVeda: true,
          rupturaEspacioLocal: true,
          fiscalesDesercion: true,
          relato: "Móviles de televisión en vivo transmiten las cajas con boletas mutiladas en la vereda. El intendente rompe con tu espacio a 48 hs de votar y ordena a sus 3.000 fiscales fiscalizar directamente para la lista opositora."
        }
      },
      {
        id: "operativo_emergencia_fondos_side",
        letra: "C",
        titulo: "Financiar un operativo de emergencia casa por casa con boleta pura",
        descripcion: "Girar fondos reservados de urgencia para contratar remises y repartir tu boleta completa durante la noche.",
        impacto: {
          costoFondosReservados: 8500,
          amortiguacionCorte: +6.0,
          relato: "Durante la madrugada del sábado, 400 remises y militantes recorren el municipio repartiendo sobres con la boleta completa y un volante explicativo. Amortiguás la mitad del tijeretazo, pero a un costo financiero brutal."
        }
      },
      {
        id: "tragar_veneno_silencio",
        letra: "D",
        titulo: "Tragar el veneno en silencio y esperar el resultado del domingo",
        descripcion: "Evitar el escándalo público que desmoralice a los fiscales propios y cobrar la factura después de las urnas.",
        impacto: {
          derrotaLegislativaDistrito: true,
          intendenteReelecto: true,
          votoPresidencialLicuado: true,
          relato: "Guardás silencio para no generar pánico electoral. El domingo el intendente festeja su reelección con el 54% de los votos en el búnker municipal; tu lista presidencial apenas araña el 22%, consolidando tu debilidad en el Conurbano."
        }
      }
    ]
  }
};

/**
 * 5. ACCIONES INMEDIATAS DEL TABLERO DE LA ROSCA FEDERAL
 */
const ACCIONES_ROSCA_FEDERAL = {
  firmar_atn_catamarca: {
    id: "firmar_atn_catamarca",
    nombre: "[FIRMAR ATN] Liberar $ 8.000 M a Catamarca para el voto 35",
    icono: "fa-solid fa-file-signature",
    color: "amber",
    descripcion: "Girar ATN de urgencia para destrabar el voto afirmativo de la senadora por Catamarca en la sesión de esta noche.",
    impacto: {
      senadoresDelta: +1,
      fondosATNGastados: 8000,
      lealtadNorteDelta: +8,
      relato: "El Ministro del Interior firma la transferencia de $ 8.000 millones. La senadora catamarqueña confirma su voto afirmativo y se sienta en su banca."
    }
  },

  concesion_vialidad_rionegro: {
    id: "concesion_vialidad_rionegro",
    nombre: "[CONCESIÓN] Ceder la delegación de Vialidad Nacional a Río Negro para el voto 36",
    icono: "fa-solid fa-road",
    color: "sky",
    descripcion: "Entregarle el control de contratos viales y cargos en el distrito provincial al gobernador de Río Negro para asegurar el voto 36.",
    impacto: {
      senadoresDelta: +1,
      lealtadPatagoniaDelta: +12,
      cajaPoliticaCedida: true,
      relato: "El gobernador rionegrino ubica a su primo al frente del distrito de Vialidad Nacional. El senador por Río Negro anuncia por radio que votará a favor del proyecto."
    }
  },

  apretar_caja_neuquen: {
    id: "apretar_caja_neuquen",
    nombre: "[APRETAR CAJA] Demorar 48 hs el goteo de coparticipación a Neuquén por la rebelión",
    icono: "fa-solid fa-hand-holding-dollar",
    color: "rose",
    descripcion: "Cerrar el grifo transitorio a las regalías y coparticipación para doblegar la resistencia del gobernador de Neuquén.",
    impacto: {
      tensionPetrolera: +35,
      lealtadPatagoniaDelta: -20,
      quorumenRiesgo: true,
      relato: "Neuquén amanece con las cuentas del Banco Provincia bloqueadas por transferencias pendientes. El gobernador convoca a los intendentes de Vaca Muerta y amenaza con apagar las turbinas."
    }
  },

  ir_al_choque_cadena: {
    id: "ir_al_choque_cadena",
    nombre: "[IR AL CHOQUE] Denunciar a los gobernadores rebeldes por extorsión en Cadena Nacional",
    icono: "fa-solid fa-bullhorn",
    color: "purple",
    descripcion: "Hablarle directamente al pueblo desde el Salón Blanco denunciando a los mandatarios provinciales como extorsionadores del Presupuesto.",
    impacto: {
      polarizacionOpinionPublica: +25,
      senadoresRupturaTotal: true,
      bloqueFederalEnemigo: true,
      relato: "Cadena nacional a las 21:00 hs: 'No voy a negociar con los señores feudales que toman de rehenes a los argentinos'. Los 24 gobernadores se reúnen de emergencia por Zoom y firman un documento conjunto de repudio."
    }
  }
};

/**
 * 6. CLASE PRINCIPAL: SistemaRoscaFederal
 * Gestiona el mapa de las 4 ligas provinciales, la bimoneda de la rosca,
 * el poroteo del quórum en el Senado (meta: 37 senadores) y la mecánica de corte de boleta.
 */
class SistemaRoscaFederal {
  constructor() {
    this.activo = true;
    this.quorumObjetivo = 37; // Mayoría absoluta en el Senado de 72 miembros
    this.votosFavorAsegurados = 34; // Oficialismo + aliados leales
    this.votosContraDuros = 32;     // Oposición dura
    this.indecisosClave = [
      { id: "senador_rionegro", provincia: "Río Negro", liga: "bloque_patagonico", pedido: "Puente sobre el Río Negro y fondos para INVAP", estado: "extorsionando" },
      { id: "senadora_catamarca", provincia: "Catamarca", liga: "norte_grande", pedido: "Exenciones impositivas para mineras de litio y $8k M en ATN", estado: "extorsionando" },
      { id: "senador_corrientes", provincia: "Corrientes", liga: "region_centro", pedido: "Nombramiento de dos jueces federales en Paso de los Libres", estado: "extorsionando" }
    ];

    // Estado dinámico de las 4 Ligas
    this.ligas = JSON.parse(JSON.stringify(LIGAS_PROVINCIALES));

    // Registro de fondos ATN ejecutados
    this.totalATNRepartidos = 75000; // Millones de pesos
    this.historialOperacionesRosca = [];
    this.dilemasResueltos = {};
  }

  /**
   * Sincroniza con el motor del juego.
   */
  sincronizarConMotor(motor = null) {
    if (!motor) return;
    if (motor.termometroCriollo) {
      // Ajuste de lealtad federal según roscaGobernadores del termómetro criollo
      const rosca = motor.termometroCriollo.roscaGobernadores || 50;
      this.ligas.norte_grande.lealtadInicial = Math.min(100, Math.max(20, rosca + 15));
      this.ligas.region_centro.lealtadInicial = Math.min(100, Math.max(10, rosca - 15));
      this.ligas.bloque_patagonico.lealtadInicial = Math.min(100, Math.max(5, rosca - 35));
    }
  }

  /**
   * Ejecuta una acción de rosca federal.
   */
  ejecutarAccionRosca(accionId, motor = null) {
    const acc = ACCIONES_ROSCA_FEDERAL[accionId];
    if (!acc) return { exito: false, mensaje: `Acción '${accionId}' desconocida.` };

    const imp = acc.impacto;

    if (imp.senadoresDelta) {
      this.votosFavorAsegurados = Math.min(72, this.votosFavorAsegurados + imp.senadoresDelta);
    }
    if (imp.fondosATNGastados) {
      this.totalATNRepartidos += imp.fondosATNGastados;
    }
    if (imp.lealtadNorteDelta) {
      this.ligas.norte_grande.lealtadInicial = Math.min(100, Math.max(0, this.ligas.norte_grande.lealtadInicial + imp.lealtadNorteDelta));
    }
    if (imp.lealtadPatagoniaDelta) {
      this.ligas.bloque_patagonico.lealtadInicial = Math.min(100, Math.max(0, this.ligas.bloque_patagonico.lealtadInicial + imp.lealtadPatagoniaDelta));
    }
    if (imp.senadoresRupturaTotal) {
      this.votosContraDuros += 4;
      this.votosFavorAsegurados = Math.max(20, this.votosFavorAsegurados - 3);
    }

    if (motor && motor.termometroCriollo) {
      if (imp.tensionPetrolera) motor.termometroCriollo.mechaSocial = Math.min(100, motor.termometroCriollo.mechaSocial + 15);
      if (imp.polarizacionOpinionPublica) motor.termometroCriollo.roscaGobernadores = Math.max(10, motor.termometroCriollo.roscaGobernadores - 20);
    }

    this.historialOperacionesRosca.push({
      id: accionId,
      nombre: acc.nombre,
      timestamp: new Date().toISOString(),
      relato: imp.relato
    });

    return {
      exito: true,
      accion: acc,
      votosFavorActuales: this.votosFavorAsegurados,
      quorumAlcanzado: this.votosFavorAsegurados >= this.quorumObjetivo,
      relato: imp.relato
    };
  }

  /**
   * Resuelve uno de los dilemas federales extremos.
   */
  resolverDilemaFederal(dilemaId, opcionId, motor = null) {
    const dil = DILEMAS_FEDERALES_EXTREMOS[dilemaId];
    if (!dil) return { exito: false, mensaje: `Dilema '${dilemaId}' desconocido.` };

    const opt = dil.opciones.find(o => o.id === opcionId);
    if (!opt) return { exito: false, mensaje: `Opción '${opcionId}' desconocida.` };

    const imp = opt.impacto;
    this.dilemasResueltos[dilemaId] = opcionId;

    if (imp.senadoresDelta) {
      this.votosFavorAsegurados = Math.min(72, this.votosFavorAsegurados + imp.senadoresDelta);
    }
    if (imp.costoFiscalMillones) {
      this.totalATNRepartidos += imp.costoFiscalMillones;
    }
    if (imp.mechaSocialDelta && motor && motor.termometroCriollo) {
      motor.termometroCriollo.mechaSocial = Math.min(100, motor.termometroCriollo.mechaSocial + imp.mechaSocialDelta);
    }

    return {
      exito: true,
      dilema: dil,
      opcion: opt,
      votosFavorActuales: this.votosFavorAsegurados,
      relato: imp.relato
    };
  }

  /**
   * Aplica la mecánica del corte de boleta para elecciones provinciales / legislativas.
   */
  aplicarCorteBoleta(votoAparatoLocal = 54.0, ligaId = "norte_grande", imagenPresidencial = 42.0) {
    const lealtad = this.ligas[ligaId] ? this.ligas[ligaId].lealtadInicial : 50.0;
    return calcularAlgoritmoCorteBoleta(votoAparatoLocal, lealtad, imagenPresidencial);
  }

  /**
   * Retorna el snapshot completo para "La Pantalla de la Rosca Federal" (Salón de los Escudos).
   */
  obtenerEstadoTableroControl(motor = null) {
    this.sincronizarConMotor(motor);
    const faltanVotos = Math.max(0, this.quorumObjetivo - this.votosFavorAsegurados);

    return {
      semana: motor?.jugador?.semana || 18,
      quorumObjetivo: this.quorumObjetivo,
      votosFavorAsegurados: this.votosFavorAsegurados,
      votosContraDuros: this.votosContraDuros,
      faltanVotos,
      quorumAlcanzado: faltanVotos === 0,
      ligas: { ...this.ligas },
      indecisosClave: [ ...this.indecisosClave ],
      totalATNRepartidos: this.totalATNRepartidos,
      historialOperaciones: [ ...this.historialOperacionesRosca ],
      accionesDisponibles: Object.values(ACCIONES_ROSCA_FEDERAL)
    };
  }

  obtenerResumen(motor = null) {
    return {
      quorumObjetivo: this.quorumObjetivo,
      votosFavorAsegurados: this.votosFavorAsegurados,
      quorumAlcanzado: this.votosFavorAsegurados >= this.quorumObjetivo,
      totalATNRepartidos: this.totalATNRepartidos,
      operacionesCount: this.historialOperacionesRosca.length,
      snapshot: this.obtenerEstadoTableroControl(motor)
    };
  }
}

// Exportación modular para Node.js y navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    LIGAS_PROVINCIALES,
    PALANCAS_FINANCIERAS_EJECUTIVO,
    calcularAlgoritmoCorteBoleta,
    DILEMAS_FEDERALES_EXTREMOS,
    ACCIONES_ROSCA_FEDERAL,
    SistemaRoscaFederal
  };
} else if (typeof window !== 'undefined') {
  window.LIGAS_PROVINCIALES = LIGAS_PROVINCIALES;
  window.PALANCAS_FINANCIERAS_EJECUTIVO = PALANCAS_FINANCIERAS_EJECUTIVO;
  window.calcularAlgoritmoCorteBoleta = calcularAlgoritmoCorteBoleta;
  window.DILEMAS_FEDERALES_EXTREMOS = DILEMAS_FEDERALES_EXTREMOS;
  window.ACCIONES_ROSCA_FEDERAL = ACCIONES_ROSCA_FEDERAL;
  window.SistemaRoscaFederal = SistemaRoscaFederal;
}
