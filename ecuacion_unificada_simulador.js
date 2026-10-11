// ecuacion_unificada_simulador.js - La Ecuación Unificada del Simulador Político y Macroeconómico
// Modela los vasos comunicantes: [Decisión Económica] -> [Macro (BCRA/IPC)] -> [Mecha Social & Urnas] -> [Muro de Medios]
// Incluye el Algoritmo de Votos en Tiempo Real, la Fórmula de Mecha Social, las 4 Fases Integradas y el Simulador de Semana Crítica.

/**
 * 1. LAS 4 FASES INTEGRADAS: MACRO, CALLE, URNAS Y MEDIOS
 */
const FASES_INTEGRADAS_SIMULADOR = {
  fase_1: {
    numero: 1,
    id: "fase_1_primavera",
    nombre: "1. La Dulce Primavera",
    subtitulo: "Dólar anclado, atraso cambiario y cuotas sin interés",
    macro: {
      bcraIntervencion: "Quema US$ 50 M/día",
      brechaCambiaria: 12,
      ipcMensual: 2.1,
      consumo: "Récord histórico",
      reservasNetas: 4800,
      tasaNominalAnual: 38
    },
    mechaSocial: 15,
    estadoMecha: "Paz Chicha (Tranquilidad total)",
    sondeoElectoral: {
      oficialismo: 52.0,
      oposicion: 31.5,
      indecisos: 16.5,
      veredicto: "Ganás en primera vuelta",
      votoBolsillo: +12.5
    },
    vozDeLaCalle: {
      personajeId: "pibe_delivery",
      nombre: "Braian (El Pibe de PedidosYa)",
      perfil: "Repartidor de 22 años en moto",
      icono: "fa-solid fa-motorcycle",
      badge: "🛵 18 Cuotas y Finde en la Costa",
      testimonio: "Cambié la moto por una 150cc en 18 cuotas fijas y me fui el finde a la costa. Se re mueve el laburo."
    },
    muroDeMedios: [
      { canal: "TN", badge: "ECONOMÍA", texto: "Boom de consumo: récord de viajes a Brasil y ventas récord de electrodomésticos." },
      { canal: "LN+", badge: "POLÍTICA", texto: "El sendero virtuoso de la estabilidad: confianza en los mercados y salarios en alza." },
      { canal: "Crónica TV", badge: "PLACA ROJA", texto: "EXPLOTAN LAS RUTAS: NO ENTRA UN ALFILER EN MAR DEL PLATA // SE AGOTARON LAS SOMBRILLAS." },
      { canal: "Carajo Stream", badge: "EN VIVO", texto: "LLOREN ZURDOS: ARGENTINA POTENCIA MIENTRAS LA OPOSICIÓN SE MUERDE LA LENGUA." }
    ]
  },

  fase_2: {
    numero: 2,
    id: "fase_2_asfixia",
    nombre: "2. La Asfixia Externa",
    subtitulo: "Carry Trade, bicicleta financiera y goteo de dólares",
    macro: {
      bcraIntervencion: "Interviene con US$ 120 M para contener la brecha",
      brechaCambiaria: 45,
      ipcMensual: 5.4,
      consumo: "Selectivo y estancado",
      reservasNetas: 800,
      tasaNominalAnual: 85
    },
    mechaSocial: 48,
    estadoMecha: "Tensión Urbana (Malhumor silencioso)",
    sondeoElectoral: {
      oficialismo: 41.0,
      oposicion: 42.5,
      indecisos: 16.5,
      veredicto: "Balotaje ajustado al filo de la cornisa",
      votoBolsillo: -2.4
    },
    vozDeLaCalle: {
      personajeId: "carnicero",
      nombre: "Tito (El Carnicero de Barrio)",
      perfil: "Comerciante a la calle en Quilmes",
      icono: "fa-solid fa-drumstick-bite",
      badge: "🥩 Picada Común en 1 Cuota",
      testimonio: "El flete me vino con aumento preventivo por si sube el Blue. La gente entra, pide medio kilo de picada común y me paga con tarjeta de crédito en una cuota."
    },
    muroDeMedios: [
      { canal: "Ámbito / Cronista", badge: "FINANZAS", texto: "Tensión en el mercado cambiario: el BCRA intervino con US$ 120 M para contener la brecha." },
      { canal: "C5N", badge: "DENUNCIA", texto: "La fuga silenciosa: los amigos del poder hacen carry trade mientras la producción se frena." },
      { canal: "A24", badge: "ALERTA", texto: "SE PICÓ EL BLUE: CUEVAS ALLANADAS EN LA CITY Y SUSPENDEN LA VENTA DE MATERIALES DE CONSTRUCCIÓN." },
      { canal: "Pedro Rosemblat (Gelatina)", badge: "STREAMING", texto: "Celebraron el veranito de dos meses y ahora estamos contando los dólares con una pinza de depilar." }
    ]
  },

  fase_3: {
    numero: 3,
    id: "fase_3_olla_presion",
    nombre: "3. La Olla a Presión",
    subtitulo: "Zoológico cambiario, cepo duro y desabastecimiento",
    macro: {
      bcraIntervencion: "Bóveda exhausta / SIRA paralizado",
      brechaCambiaria: 95,
      ipcMensual: 11.4,
      consumo: "Desplome de ventas de alimentos",
      reservasNetas: -3000,
      tasaNominalAnual: 115
    },
    mechaSocial: 78,
    estadoMecha: "Alerta de Saqueo (Zona de alarma)",
    sondeoElectoral: {
      oficialismo: 28.0,
      oposicion: 54.0,
      indecisos: 18.0,
      veredicto: "Derrumbe electoral del oficialismo",
      votoBolsillo: -14.2
    },
    vozDeLaCalle: {
      personajeId: "jubilada_pami",
      nombre: "Nélida (La Jubilada en la Farmacia)",
      perfil: "Docente jubilada de 72 años",
      icono: "fa-solid fa-pills",
      badge: "💊 Sin Precio para los Remedios",
      testimonio: "En la farmacia me dicen que no hay precio para las pastillas del corazón porque son importadas. En el súper el paquete de arroz cambió de precio entre que lo agarré de la góndola y llegué a la caja."
    },
    muroDeMedios: [
      { canal: "Crónica TV", badge: "PLACA ROJA", texto: "NO ALCANZA PARA EL MORFI // FALTAN CAFÉ, CUBIERTAS Y REMEDIOS // ¿QUIÉN REMARCA EN LA SOMBRA?" },
      { canal: "LN+", badge: "URGENTE", texto: "Derrumbe de reservas y falta de insumos industriales: automotrices suspenden turnos en Córdoba." },
      { canal: "C5N", badge: "CRISIS", texto: "EL COSTO DEL PLAN CORPORATIVO: COMEDORES DESBORDADOS Y HELADERAS VACÍAS." },
      { canal: "Neura (Tronco)", badge: "STREAMING", texto: "¡ES UNA JODA! ¡NO PUEDO COMPRAR UN REPUESTO PARA EL AUTO PORQUE NO HAY PRECIO! ¡VAYAN A LABURAR!" }
    ]
  },

  fase_4: {
    numero: 4,
    id: "fase_4_pina_historica",
    nombre: "4. La Piña Histórica",
    subtitulo: "Devaluación forzada, pass-through y licuación salarial",
    macro: {
      bcraIntervencion: "Salto cambiario oficial forzado +65%",
      brechaCambiaria: 25,
      ipcMensual: 22.8,
      consumo: "Parálisis y huida al dólar",
      reservasNetas: 1200,
      tasaNominalAnual: 140
    },
    mechaSocial: 94,
    estadoMecha: "Desborde Institucional (Riesgo de colapso / Helicóptero)",
    sondeoElectoral: {
      oficialismo: 16.0,
      oposicion: 68.0,
      indecisos: 16.0,
      veredicto: "Cadáver político en las urnas",
      votoBolsillo: -28.6
    },
    vozDeLaCalle: {
      personajeId: "colectivero",
      nombre: "Jorge (El Colectivero del Conurbano)",
      perfil: "Chofer de línea interurbana de 45 años",
      icono: "fa-solid fa-bus",
      badge: "🚌 Bronca Caliente en el Bondi",
      testimonio: "La gente sube al bondi con ganas de matar a alguien. Aumentó el boleto, aumentó la nafta y en la cabecera nos tiraron cascotazos anoche. Esto explota en cualquier momento."
    },
    muroDeMedios: [
      { canal: "Crónica TV", badge: "SIRENA POLICIAL", texto: "EL PAÍS EN LLAMAS // CACEROLAZOS EN CABALLITO Y CORRIDAS EN LA MATANZA // A CUÁNTO SE FUE EL DÓLAR." },
      { canal: "TN", badge: "INFORME", texto: "Pérdida histórica del poder adquisitivo: guía para entender el impacto del salto cambiario en tarifas y prepagas." },
      { canal: "C5N", badge: "ALERTA", texto: "RODRIGAZO DEL SIGLO XXI: EL GOBIERNO ENTREGÓ EL BOLSILLO DEL PUEBLO AL MERCADO." },
      { canal: "El Gordo Dan (X)", badge: "X / TWITTER", texto: "Los tibios que no aguantan la transición no merecen el futuro. Esto se arregla con sangre, sudor y orden." }
    ]
  }
};

/**
 * 2. SIMULADOR DE UNA SEMANA CRÍTICA (PASO A PASO JUGABLE)
 * Escenario: Faltan 14 días para las Elecciones Legislativas. Transición Fase 2 a Fase 3.
 */
const SEMANA_CRITICA_VIERNES_NEGRO = {
  semana: 42,
  edad: 54,
  diasParaUrnas: 14,
  tipoEleccion: "Elecciones Legislativas Nacionales (Provincia de Buenos Aires)",
  estadoInicial: {
    reservasNetas: 320, // Millones de USD (Queda aire para 3 días)
    dolarOficial: 1025,
    dolarBlue: 1620,
    brechaCambiaria: 58.0,
    inflacionProyectada: 7.8,
    tasaBCRA: 85.0,
    pasesLeliqsRatio: 2.8,
    mechaSocial: 64.0,
    mechaEstado: "Tensión latente en el AMBA",
    sondeo: {
      oficialismo: 34.2,
      oposicion: 36.8,
      indecisos: 12.0,
      votoBolsillo: -4.8,
      diagnostico: "Empate técnico al borde del abismo"
    }
  },

  evento: {
    id: "viernes_negro_city",
    titulo: "El Viernes Negro en la City",
    hora: "11:30 AM",
    descripcion: "A las 11:30 AM, tres bancos mayoristas deciden no renovar sus títulos de deuda en pesos y demandan US$ 450 millones para girar dividendos al exterior. El Dólar Blue salta $120 en 40 minutos en las cuevas de la calle Florida y los canales de noticias ponen el graph de la cotización en rojo parpadeante."
  },

  titularesEnVivoIniciales: [
    { canal: "Crónica TV", badge: "PLACA ROJA", hora: "11:42", texto: "HERVIDERO EN LA CITY: EL BLUE METIÓ SALTO HISTÓRICO" },
    { canal: "TN", badge: "ECONOMÍA", hora: "12:04", texto: "Comercios retienen stock en Once a la espera de precios de referencia." },
    { canal: "C5N", badge: "URGENTE", hora: "12:15", texto: "Guerra financiera contra el gobierno a dos semanas de las elecciones." },
    { canal: "El Gordo Dan (X)", badge: "X / TWITTER", hora: "12:20", texto: "Vayan a fondo con los especuladores. Si dudan ahora, nos comen crudos." }
  ],

  opciones: {
    opcion_a: {
      id: "opcion_a",
      letra: "A",
      titulo: "«Quemar las Naves» (Vender las últimas reservas y frenar el Blue)",
      accion: "Ordenás al Banco Central salir a reventar US$ 250 millones de reservas líquidas en el mercado secundario (MEP) y subís la tasa de interés al 120% anual.",
      impactos: {
        dolarBlueNuevo: 1560,
        dolarBlueDelta: -60,
        dolarOficialNuevo: 1025,
        reservasNetasNuevas: -80,
        reservasDelta: -400,
        tasaBCRANueva: 120.0,
        inflacionNueva: 8.2,
        brechaCambiariaNueva: 52.2,
        mechaSocialNueva: 58.0,
        sondeoNuevo: {
          oficialismo: 35.8,
          oposicion: 36.0,
          indecisos: 11.2,
          votoBolsillo: -3.2,
          diagnostico: "Alivio efímero: te mantenés con chances para el domingo electoral"
        },
        titularesMedios: [
          { canal: "LN+", badge: "MERCADOS", texto: "El Central intervino con firmeza y frenó la maniobra especulativa de los bancos." },
          { canal: "TN", badge: "FINANZAS", texto: "Respiro en el dólar antes del cierre del mercado: cuánto rinde ahora el plazo fijo." }
        ],
        relato: "El Dólar Blue retrocede $60; las Reservas Netas quedan en -US$ 80 M (técnicamente en quiebra cambiaria). La mecha social baja a 58% y la intención de voto sube a 35.8%, manteniéndote con chances para el domingo electoral."
      }
    },

    opcion_b: {
      id: "opcion_b",
      letra: "B",
      titulo: "«El Salto Inevitable» (Devaluar el oficial un 25% hoy mismo)",
      accion: "Asumís que no tenés reservas para frenar la corrida; devaluás el tipo de cambio oficial a $1.280 antes de que abra el mercado para cerrar la brecha con el Blue.",
      impactos: {
        dolarOficialNuevo: 1280,
        dolarBlueNuevo: 1640,
        dolarBlueDelta: +20,
        reservasNetasNuevas: 320,
        reservasDelta: 0,
        tasaBCRANueva: 95.0,
        inflacionNueva: 16.5,
        brechaCambiariaNueva: 28.1,
        mechaSocialNueva: 88.0,
        sondeoNuevo: {
          oficialismo: 22.4,
          oposicion: 48.5,
          indecisos: 14.1,
          votoBolsillo: -16.6,
          diagnostico: "Catástrofe electoral asegurada y cacerolazos masivos"
        },
        titularesMedios: [
          { canal: "Crónica TV", badge: "PLACA ROJA", texto: "DEVALUAZO ASESINO A DOS SEMANAS DE VOTAR: EL KILO DE PAN SE FUE A LAS NUBES." },
          { canal: "C5N", badge: "URGENTE", texto: "Traición electoral: pulverizan el sueldo de los laburantes por orden del Fondo Monetario." }
        ],
        relato: "Cuidás las reservas líquidas pero la inflación del mes salta a 16.5% en 72 horas por el traslado a precios de los alimentos. La mecha social vuela a 88% (alerta roja de cacerolazos) y tu intención de voto se desploma a 22.4%."
      }
    },

    opcion_c: {
      id: "opcion_c",
      letra: "C",
      titulo: "«La Cacería y el Torniquete» (Cepo soviético y allanamientos con policía)",
      accion: "Bloqueás la compra de dólares a todas las empresas por 30 días, cerrás el grifo a importaciones y mandás a la Policía Federal e inspectores de ARCA a allanar 15 cuevas en la City Porteña en vivo para la televisión.",
      impactos: {
        dolarOficialNuevo: 1025,
        dolarBlueNuevo: 1890,
        dolarBlueDelta: +270,
        reservasNetasNuevas: 320,
        reservasDelta: 0,
        tasaBCRANueva: 85.0,
        inflacionNueva: 10.5,
        brechaCambiariaNueva: 84.4,
        mechaSocialNueva: 72.0,
        sondeoNuevo: {
          oficialismo: 31.0,
          oposicion: 41.2,
          indecisos: 12.8,
          votoBolsillo: -8.0,
          diagnostico: "Polarización: retenés el núcleo duro pero perdés por completo el centro"
        },
        titularesMedios: [
          { canal: "Carajo Stream", badge: "OPERATIVO", texto: "CUEVAS CLAUSURADAS Y FINANCIEROS EN CANA: SE TERMINÓ EL CURRO DE LA CITY." },
          { canal: "Ámbito Financiero", badge: "COMERCIO", texto: "Freno total al comercio exterior: alertan por parálisis en la cadena de suministros industriales." }
        ],
        relato: "Las reservas no se tocan pero el mercado informal se paraliza sin precio de referencia formal; los mayoristas frenan entregas de mercadería y la brecha salta al 85%. La mecha sube a 72% y el voto se polariza en 31.0%."
      }
    },

    opcion_d: {
      id: "opcion_d",
      letra: "D",
      titulo: "«El Plan Platita de Emergencia» (Bono con emisión y control de precios)",
      accion: "Ignorás el frente cambiario, ordenás emitir un billón de pesos para depositar un bono de emergencia de $150.000 a todos los titulares de planes sociales y jubilados, y mandás militantes a controlar precios en las cadenas de hipermercados.",
      impactos: {
        dolarOficialNuevo: 1025,
        dolarBlueNuevo: 1900,
        dolarBlueDelta: +280,
        reservasNetasNuevas: 280,
        reservasDelta: -40,
        tasaBCRANueva: 85.0,
        inflacionNueva: 13.8,
        brechaCambiariaNueva: 85.4,
        mechaSocialNueva: 62.0,
        sondeoNuevo: {
          oficialismo: 36.2,
          oposicion: 37.5,
          indecisos: 10.3,
          votoBolsillo: -2.8,
          diagnostico: "Sumás votos en el Conurbano y Norte pero repudio en centros urbanos"
        },
        titularesMedios: [
          { canal: "C5N", badge: "POLÍTICA", texto: "Alivio directo al bolsillo de las familias para amortiguar la especulación financiera." },
          { canal: "LN+", badge: "EDITORIAL", texto: "Demencial emisión electoral: el gobierno rifa el futuro para no perder la elección legislativa." }
        ],
        relato: "Inyectás dinero en la calle; la brecha vuela y el Blue toca $1.900. La mecha social se contiene en 62% por el alivio en los barrios vulnerables y sumás votos en el Gran Buenos Aires (36.2%), pagándolo con inflación futura."
      }
    }
  }
};

/**
 * 3. CLASE PRINCIPAL: SistemaEcuacionUnificada
 * Ejecuta los cálculos continuos de la fórmula unificada de votos, mecha social y vasos comunicantes.
 */
class SistemaEcuacionUnificada {
  constructor() {
    this.activo = true;
    this.faseActual = 1; // 1, 2, 3 o 4
    this.semanaCriticaResuelta = false;
    this.opcionSemanaElegida = null;
    this.estadoSemanaCritica = JSON.parse(JSON.stringify(SEMANA_CRITICA_VIERNES_NEGRO));
    this.historialVasos = [];
  }

  /**
   * A. ALGORITMO DE VOTOS EN TIEMPO REAL (Vt)
   * Vt = Piso Duro + Delta Poder Adquisitivo - (k1 * IPC) - (k2 * Brecha) + Blindaje Mediático +- RNG
   */
  calcularIntencionVoto(motor = null, variables = {}) {
    // 1. Piso Duro (20% a 35%)
    let pisoDuro = variables.pisoDuro !== undefined ? variables.pisoDuro : 32.0;
    if (motor && motor.aprobacionSectores && variables.pisoDuro === undefined) {
      const promSectores = (
        (motor.aprobacionSectores.trabajo || 50) * 0.4 +
        (motor.aprobacionSectores.claseMedia || 50) * 0.35 +
        (motor.aprobacionSectores.productivo || 50) * 0.25
      );
      // Mapeo lineal de 0-100 a rango 20% - 35%
      pisoDuro = 20.0 + (promSectores / 100) * 15.0;
    }
    pisoDuro = Math.min(35.0, Math.max(20.0, Math.round(pisoDuro * 10) / 10));

    // 2. Delta Poder Adquisitivo (hasta +15% en Fase 1 "Dulce Primavera")
    let deltaPoderAdquisitivo = variables.deltaPoderAdquisitivo !== undefined ? variables.deltaPoderAdquisitivo : 0;
    const faseMacro = (motor && motor.sistemaMacroBCRA) ? motor.sistemaMacroBCRA.faseCalesita : this.faseActual;
    if (deltaPoderAdquisitivo === 0) {
      if (faseMacro === 1) deltaPoderAdquisitivo = +12.0;
      else if (faseMacro === 2) deltaPoderAdquisitivo = -2.0;
      else if (faseMacro === 3) deltaPoderAdquisitivo = -10.0;
      else if (faseMacro === 4) deltaPoderAdquisitivo = -22.0;
    }
    deltaPoderAdquisitivo = Math.min(15.0, Math.max(-25.0, deltaPoderAdquisitivo));

    // 3. Penalización por Inflación: k1 = 1.2 por cada punto de IPC mensual > 4%
    const ipc = variables.ipc !== undefined ? variables.ipc : (
      motor?.sistemaMacroBCRA?.inflacionMensual || motor?.macroeconomia?.inflacionMensual || 4.2
    );
    const excesoIPC = Math.max(0, ipc - 4.0);
    const k1 = 1.2;
    const penalizacionIPC = Math.round(excesoIPC * k1 * 10) / 10;

    // 4. Penalización por Brecha Cambiaria: k2 * Brecha > 50%
    const brecha = variables.brecha !== undefined ? variables.brecha : (
      motor?.sistemaMacroBCRA?.brechaCambiaria || (motor?.termometroCriollo ? Math.round(((motor.termometroCriollo.dolarBlue - 1050) / 1050) * 100) : 25)
    );
    const excesoBrecha = Math.max(0, brecha - 50.0);
    const k2 = 0.15; // 0.15% de voto restado por cada punto de brecha sobre 50
    const penalizacionBrecha = Math.round(excesoBrecha * k2 * 10) / 10;

    // 5. Blindaje Mediático (pauta oficial amortigua hasta +4%)
    let blindajeMediatico = variables.blindajeMediatico !== undefined ? variables.blindajeMediatico : 1.5;
    if (motor && motor.sistemaMedios) {
      const blindajeVal = motor.sistemaMedios.blindajeMediatico !== undefined ? motor.sistemaMedios.blindajeMediatico : (motor.sistemaMedios.blindajeOficial || 30);
      blindajeMediatico = (blindajeVal / 100) * 4.0;
    }
    blindajeMediatico = Math.min(4.0, Math.max(0, Math.round(blindajeMediatico * 10) / 10));

    // 6. RNG: variabilidad de sondeos (+- 1.5%)
    const rng = variables.rng !== undefined ? variables.rng : (
      Math.round(((Math.random() * 3.0) - 1.5) * 10) / 10
    );

    // VOTO FINAL VT
    let votoOficialista = pisoDuro + deltaPoderAdquisitivo - penalizacionIPC - penalizacionBrecha + blindajeMediatico + rng;
    votoOficialista = Math.min(75.0, Math.max(10.0, Math.round(votoOficialista * 10) / 10));

    // Indecisos y oposición
    const indecisos = Math.min(22.0, Math.max(8.0, Math.round((14.0 + (penalizacionIPC * 0.2) - (blindajeMediatico * 0.5)) * 10) / 10));
    let votoOposicion = Math.round((100.0 - votoOficialista - indecisos) * 10) / 10;
    if (votoOposicion < 15.0) {
      votoOposicion = 15.0;
      votoOficialista = Math.round((100.0 - votoOposicion - indecisos) * 10) / 10;
    }

    const votoBolsillo = Math.round((deltaPoderAdquisitivo - penalizacionIPC - penalizacionBrecha) * 10) / 10;

    return {
      votoOficialista,
      votoOposicion,
      indecisos,
      pisoDuro,
      deltaPoderAdquisitivo,
      penalizacionIPC,
      penalizacionBrecha,
      blindajeMediatico,
      rng,
      votoBolsillo,
      formulaDesglose: `V_t = ${pisoDuro}% (Piso) + ${deltaPoderAdquisitivo}% (Poder Adq.) - ${penalizacionIPC}% (IPC) - ${penalizacionBrecha}% (Brecha) + ${blindajeMediatico}% (Blindaje) + (${rng}% RNG) = ${votoOficialista}%`
    };
  }

  /**
   * B. FÓRMULA DE LA MECHA SOCIAL (Mt, 0% a 100%)
   * Mt = (Tarifazos Acumulados * 0.3) + (IPC Alimentos * 0.4) + Cortes Suministro - (Gasto Social * 0.2)
   */
  calcularMechaSocial(motor = null, variables = {}) {
    const tarifazos = variables.tarifazos !== undefined ? variables.tarifazos : 45.0;
    const ipcAlimentos = variables.ipcAlimentos !== undefined ? variables.ipcAlimentos : (
      (motor?.sistemaMacroBCRA?.inflacionMensual || motor?.macroeconomia?.inflacionMensual || 5.0) * 1.25
    );
    const cortesSuministro = variables.cortesSuministro !== undefined ? variables.cortesSuministro : 20.0;
    const gastoSocial = variables.gastoSocial !== undefined ? variables.gastoSocial : 35.0;

    let mecha = (tarifazos * 0.3) + (ipcAlimentos * 0.4) + cortesSuministro - (gastoSocial * 0.2);
    mecha = Math.min(100.0, Math.max(0.0, Math.round(mecha * 10) / 10));

    let estado = "Paz Chicha";
    let descripcion = "La gente se queja en Twitter y en la cena familiar, pero nadie sale a la calle.";
    let color = "emerald";

    if (mecha >= 90.0) {
      estado = "Desborde Institucional";
      descripcion = "Asedio a la Rosada, paro general por tiempo indeterminado y helicóptero con turbinas en marcha.";
      color = "rose";
    } else if (mecha >= 71.0) {
      estado = "Alerta de Saqueo";
      descripcion = "Cacerolazos masivos a las 21:30 hs y persianas bajas en supermercados del Conurbano.";
      color = "orange";
    } else if (mecha >= 41.0) {
      estado = "Tensión Urbana";
      descripcion = "Paros sectoriales, protestas en el Obelisco y asambleas en facultades públicas.";
      color = "amber";
    }

    return {
      mecha,
      estado,
      descripcion,
      color,
      componentes: {
        tarifazos: Math.round(tarifazos * 0.3 * 10) / 10,
        ipcAlimentos: Math.round(ipcAlimentos * 0.4 * 10) / 10,
        cortesSuministro: Math.round(cortesSuministro * 10) / 10,
        alivioGastoSocial: Math.round(gastoSocial * 0.2 * 10) / 10
      }
    };
  }

  /**
   * Determina la fase integrada actual (1 a 4).
   */
  determinarFaseIntegrada(motor = null) {
    let fNum = 1;
    if (motor && motor.sistemaMacroBCRA) {
      fNum = motor.sistemaMacroBCRA.faseCalesita;
    } else {
      fNum = this.faseActual;
    }

    const key = `fase_${fNum}`;
    return FASES_INTEGRADAS_SIMULADOR[key] || FASES_INTEGRADAS_SIMULADOR.fase_1;
  }

  /**
   * Ejecuta la resolución de una opción en el Simulador de Semana Crítica.
   */
  ejecutarResolucionSemanaCritica(opcionId, motor = null) {
    const opt = this.estadoSemanaCritica.opciones[opcionId];
    if (!opt) {
      return { exito: false, mensaje: `Opción '${opcionId}' desconocida.` };
    }

    this.semanaCriticaResuelta = true;
    this.opcionSemanaElegida = opcionId;

    const imp = opt.impactos;

    // Actualizar estado interno de la semana
    this.estadoSemanaCritica.estadoInicial.reservasNetas = imp.reservasNetasNuevas;
    this.estadoSemanaCritica.estadoInicial.dolarBlue = imp.dolarBlueNuevo;
    this.estadoSemanaCritica.estadoInicial.dolarOficial = imp.dolarOficialNuevo;
    this.estadoSemanaCritica.estadoInicial.tasaBCRA = imp.tasaBCRANueva;
    this.estadoSemanaCritica.estadoInicial.inflacionProyectada = imp.inflacionNueva;
    this.estadoSemanaCritica.estadoInicial.brechaCambiaria = imp.brechaCambiariaNueva;
    this.estadoSemanaCritica.estadoInicial.mechaSocial = imp.mechaSocialNueva;
    this.estadoSemanaCritica.estadoInicial.sondeo = imp.sondeoNuevo;

    // Impactar en el motor del juego si está presente
    if (motor) {
      if (motor.sistemaMacroBCRA) {
        motor.sistemaMacroBCRA.dolarOficial = imp.dolarOficialNuevo;
        motor.sistemaMacroBCRA.dolarBlue = imp.dolarBlueNuevo;
        motor.sistemaMacroBCRA.reservasNetas = imp.reservasNetasNuevas;
        motor.sistemaMacroBCRA.tasaNominalAnual = imp.tasaBCRANueva;
        motor.sistemaMacroBCRA.inflacionMensual = imp.inflacionNueva;
        motor.sistemaMacroBCRA.actualizarCotizaciones();
      }

      if (motor.termometroCriollo) {
        motor.termometroCriollo.dolarBlue = imp.dolarBlueNuevo;
        motor.termometroCriollo.mechaSocial = imp.mechaSocialNueva;
      }

      if (motor.macroeconomia) {
        motor.macroeconomia.inflacionMensual = imp.inflacionNueva;
        motor.macroeconomia.reservasNetasBCRA = imp.reservasNetasNuevas;
      }
    }

    const reporte = {
      exito: true,
      opcion: opt,
      estadoResultante: this.estadoSemanaCritica.estadoInicial,
      titulares: imp.titularesMedios,
      relato: imp.relato
    };

    this.historialVasos.push({
      fecha: new Date().toISOString(),
      opcionId,
      titulo: opt.titulo,
      mechaResultante: imp.mechaSocialNueva,
      votoResultante: imp.sondeoNuevo.oficialismo,
      dolarBlueResultante: imp.dolarBlueNuevo
    });

    return reporte;
  }

  /**
   * Genera el snapshot completo para "La Pantalla del Sillón" (Despacho Presidencial).
   */
  obtenerEstadoPantallaSillon(motor = null) {
    const macroBCRA = motor?.sistemaMacroBCRA;
    const termCriollo = motor?.termometroCriollo;
    const macroGral = motor?.macroeconomia;

    const dolarOficial = macroBCRA?.dolarOficial || this.estadoSemanaCritica.estadoInicial.dolarOficial;
    const dolarBlue = macroBCRA?.dolarBlue || termCriollo?.dolarBlue || this.estadoSemanaCritica.estadoInicial.dolarBlue;
    const brecha = macroBCRA?.brechaCambiaria || this.estadoSemanaCritica.estadoInicial.brechaCambiaria;
    const reservasNetas = macroBCRA?.reservasNetas || macroGral?.reservasNetasBCRA || this.estadoSemanaCritica.estadoInicial.reservasNetas;
    const inflacion = macroBCRA?.inflacionMensual || macroGral?.inflacionMensual || this.estadoSemanaCritica.estadoInicial.inflacionProyectada;
    const tasa = macroBCRA?.tasaNominalAnual || this.estadoSemanaCritica.estadoInicial.tasaBCRA;
    const pases = macroBCRA?.bolaPasivosBillones !== undefined ? `${macroBCRA.bolaPasivosBillones} B` : "2.8x Base Monetaria";

    // Ecuación de votos y mecha en tiempo real
    const votoCalc = this.calcularIntencionVoto(motor, { brecha, ipc: inflacion });
    const mechaCalc = this.calcularMechaSocial(motor, { ipcAlimentos: inflacion * 1.25 });

    const faseIntegrada = this.determinarFaseIntegrada(motor);

    return {
      semana: this.estadoSemanaCritica.semana,
      edad: motor?.jugador?.edad || this.estadoSemanaCritica.edad,
      diasParaUrnas: this.estadoSemanaCritica.diasParaUrnas,
      tipoEleccion: this.estadoSemanaCritica.tipoEleccion,
      faseIntegrada,
      macro: {
        dolarOficial,
        dolarBlue,
        brecha,
        reservasNetas,
        inflacion,
        tasa,
        pases
      },
      humorSocialYVotos: {
        mechaSocial: mechaCalc.mecha,
        mechaEstado: mechaCalc.estado,
        mechaColor: mechaCalc.color,
        sondeo: {
          oficialismo: votoCalc.votoOficialista,
          oposicion: votoCalc.votoOposicion,
          indecisos: votoCalc.indecisos,
          votoBolsillo: votoCalc.votoBolsillo
        },
        formulaDesglose: votoCalc.formulaDesglose
      },
      muroDeMedios: this.semanaCriticaResuelta && this.opcionSemanaElegida
        ? this.estadoSemanaCritica.opciones[this.opcionSemanaElegida].impactos.titularesMedios
        : this.estadoSemanaCritica.titularesEnVivoIniciales,
      eventoPendiente: this.estadoSemanaCritica.evento,
      opciones: this.estadoSemanaCritica.opciones,
      resuelta: this.semanaCriticaResuelta,
      opcionElegida: this.opcionSemanaElegida
    };
  }

  obtenerResumen(motor = null) {
    return {
      faseActual: this.faseActual,
      semanaCriticaResuelta: this.semanaCriticaResuelta,
      opcionSemanaElegida: this.opcionSemanaElegida,
      historialVasosCount: this.historialVasos.length,
      snapshotActual: this.obtenerEstadoPantallaSillon(motor)
    };
  }
}

// Exportación modular para Node.js y navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    FASES_INTEGRADAS_SIMULADOR,
    SEMANA_CRITICA_VIERNES_NEGRO,
    SistemaEcuacionUnificada
  };
} else if (typeof window !== 'undefined') {
  window.FASES_INTEGRADAS_SIMULADOR = FASES_INTEGRADAS_SIMULADOR;
  window.SEMANA_CRITICA_VIERNES_NEGRO = SEMANA_CRITICA_VIERNES_NEGRO;
  window.SistemaEcuacionUnificada = SistemaEcuacionUnificada;
}
