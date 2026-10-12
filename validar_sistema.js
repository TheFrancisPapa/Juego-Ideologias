// validar_sistema.js - Suite completa de verificación y validación técnica
// Ejecutar con: node validar_sistema.js

const assert = require('assert');

console.log("=================================================================");
console.log("🚀 INICIANDO AUDITORÍA Y VALIDACIÓN DEL SISTEMA POLÍTICO ARGENTINO");
console.log("=================================================================\n");

let testsPasados = 0;
let testsTotales = 0;

function test(nombre, fn) {
  testsTotales++;
  try {
    fn();
    console.log(`  ✅ [PASS] ${nombre}`);
    testsPasados++;
  } catch (err) {
    console.error(`  ❌ [FAIL] ${nombre}:`, err.message);
  }
}

// 1. CARGA DE MÓDULOS
console.log("📦 1. CARGA DE MÓDULOS DEL PROYECTO...");
const { DOCE_EJES, PERIODOS_ARGENTINOS, LIDERES_ARGENTINOS } = require('./doce_ejes.js');
const { IDEOLOGIAS_DB } = require('./ideologias.js');
const { SECTORES_ARG } = require('./sectores.js');
const { DILEMAS_DATA } = require('./dilemas.js');
const {
  SistemaLegislativo,
  VIAS_NORMATIVAS,
  IMPACTOS_PRACTICAS_LEGALES_12AXES,
  NORMAS_EN_TRAMITE_INICIALES,
  ACCIONES_NORMATIVAS,
  DILEMAS_LEGISLATIVOS
} = require('./sistema_legislativo.js');
const { GLOSARIO, procesarTextoConGlosario, escaparRegExp } = require('./glosario.js');
const { FAMOSOS_ARGENTINOS, obtenerReaccionesFamosos } = require('./famosos_argentinos.js');
const { CLASICOS_ARGENTINOS, OTROS_DEPORTES_ARGENTINOS } = require('./clasicos_futbol_argentino.js');
const { MARCAS_ARGENTINAS, detectarMarcasEnDecision } = require('./marcas_empresas_argentinas.js');
const { MEDIOS_ARGENTINOS, generarMuroDeMedios } = require('./medios_argentinos.js');
const { CIUDADANOS_ARGENTINOS, obtenerVocesDeLaCalle } = require('./voz_de_la_calle.js');
const { ENTORNO_CERCANO, obtenerReaccionesEntornoCercano } = require('./entorno_cercano.js');
const {
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
} = require('./salud_supervivencia.js');
const {
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
} = require('./origenes_relaciones.js');

const {
  FASES_PROCESALES,
  FAUNA_COMODORO_PY,
  DILEMAS_JUDICIALES,
  ESTRATEGIAS_DESAFUERO,
  ACCIONES_EZEIZA,
  DESTINOS_JUDICIALES,
  SistemaComodoroPy
} = require('./comodoro_py_justicia.js');
const {
  ESTRUCTURA_CASA_SIDE,
  USOS_FONDOS_RESERVADOS,
  OPERACIONES_NEGRAS,
  EVENTOS_BOOMERANG_SIDE,
  DILEMAS_INTELIGENCIA,
  ESTRATEGIAS_BICAMERAL,
  DESTINOS_INTELIGENCIA_FINAL,
  SistemaInteligenciaSIDE
} = require('./side_inteligencia.js');
const {
  FUERZAS_INTERNACIONALES,
  FAUNA_DIPLOMATICA,
  ACCIONES_DIPLOMATICAS,
  EVENTOS_EXTREMOS_GEOPOLITICA,
  DILEMAS_GEOPOLITICA,
  DESTINOS_GEOPOLITICA_FINAL,
  SistemaGeopolitica
} = require('./geopolitica_cancilleria.js');
const {
  CARTERAS_GABINETE,
  INCIDENTES_PASILLO,
  ACCIONES_GABINETE,
  DILEMAS_GABINETE,
  DESTINOS_GABINETE_FINAL,
  SistemaGabinete
} = require('./gabinete_ministros.js');
const {
  ESQUEMAS_PAUTA,
  BOLSILLOS_MEDIOS,
  FAUNA_ACREDITADOS,
  RESPUESTAS_CONFERENCIA,
  ENTREVISTAS_PRIME_TIME,
  ACCIONES_TACTICAS_PRENSA,
  DILEMAS_MEDIOS,
  DESTINOS_MEDIOS_FINAL,
  SistemaPrensaMedios
} = require('./prensa_pauta_medios.js');

// Hacer globales las dependencias que espera MotorJuego
global.DOCE_EJES = DOCE_EJES;
global.DILEMAS_DATA = DILEMAS_DATA;
global.IDEOLOGIAS_DB = IDEOLOGIAS_DB;
global.PERIODOS_ARGENTINOS = PERIODOS_ARGENTINOS;
global.LIDERES_ARGENTINOS = LIDERES_ARGENTINOS;
global.ARQUETIPOS_EDAD = ARQUETIPOS_EDAD;
global.CATALOGO_MUERTES = CATALOGO_MUERTES;
global.SUCESORES_PRESIDENCIALES = SUCESORES_PRESIDENCIALES;
global.DILEMAS_SALUD = DILEMAS_SALUD;
global.evaluarMuertePolitica = evaluarMuertePolitica;
global.ORIGENES_CUNA = ORIGENES_CUNA;
global.CARGOS_BARRO = CARGOS_BARRO;
global.RANGOS_PRESIDENTE = RANGOS_PRESIDENTE;
global.DILEMAS_CRECIMIENTO = DILEMAS_CRECIMIENTO;
global.DILEMA_VENTA_ALMA = DILEMA_VENTA_ALMA;
global.TABLERO_RELACIONES = TABLERO_RELACIONES;
global.MUERTES_ASCENSO = MUERTES_ASCENSO;
global.simularEleccionConUrnas = simularEleccionConUrnas;
global.FASES_PROCESALES = FASES_PROCESALES;
global.FAUNA_COMODORO_PY = FAUNA_COMODORO_PY;
global.DILEMAS_JUDICIALES = DILEMAS_JUDICIALES;
global.ESTRATEGIAS_DESAFUERO = ESTRATEGIAS_DESAFUERO;
global.ACCIONES_EZEIZA = ACCIONES_EZEIZA;
global.DESTINOS_JUDICIALES = DESTINOS_JUDICIALES;
global.SistemaComodoroPy = SistemaComodoroPy;

global.ESTRUCTURA_CASA_SIDE = ESTRUCTURA_CASA_SIDE;
global.USOS_FONDOS_RESERVADOS = USOS_FONDOS_RESERVADOS;
global.OPERACIONES_NEGRAS = OPERACIONES_NEGRAS;
global.EVENTOS_BOOMERANG_SIDE = EVENTOS_BOOMERANG_SIDE;
global.DILEMAS_INTELIGENCIA = DILEMAS_INTELIGENCIA;
global.ESTRATEGIAS_BICAMERAL = ESTRATEGIAS_BICAMERAL;
global.DESTINOS_INTELIGENCIA_FINAL = DESTINOS_INTELIGENCIA_FINAL;
global.SistemaInteligenciaSIDE = SistemaInteligenciaSIDE;

global.FUERZAS_INTERNACIONALES = FUERZAS_INTERNACIONALES;
global.FAUNA_DIPLOMATICA = FAUNA_DIPLOMATICA;
global.ACCIONES_DIPLOMATICAS = ACCIONES_DIPLOMATICAS;
global.EVENTOS_EXTREMOS_GEOPOLITICA = EVENTOS_EXTREMOS_GEOPOLITICA;
global.DILEMAS_GEOPOLITICA = DILEMAS_GEOPOLITICA;
global.DESTINOS_GEOPOLITICA_FINAL = DESTINOS_GEOPOLITICA_FINAL;
global.SistemaGeopolitica = SistemaGeopolitica;

global.CARTERAS_GABINETE = CARTERAS_GABINETE;
global.INCIDENTES_PASILLO = INCIDENTES_PASILLO;
global.ACCIONES_GABINETE = ACCIONES_GABINETE;
global.DILEMAS_GABINETE = DILEMAS_GABINETE;
global.DESTINOS_GABINETE_FINAL = DESTINOS_GABINETE_FINAL;
global.SistemaGabinete = SistemaGabinete;

global.ESQUEMAS_PAUTA = ESQUEMAS_PAUTA;
global.BOLSILLOS_MEDIOS = BOLSILLOS_MEDIOS;
global.FAUNA_ACREDITADOS = FAUNA_ACREDITADOS;
global.RESPUESTAS_CONFERENCIA = RESPUESTAS_CONFERENCIA;
global.ENTREVISTAS_PRIME_TIME = ENTREVISTAS_PRIME_TIME;
global.ACCIONES_TACTICAS_PRENSA = ACCIONES_TACTICAS_PRENSA;
global.DILEMAS_MEDIOS = DILEMAS_MEDIOS;
global.DESTINOS_MEDIOS_FINAL = DESTINOS_MEDIOS_FINAL;
global.SistemaPrensaMedios = SistemaPrensaMedios;

const {
  FASES_MECHA_ESTALLIDO,
  FAUNA_EMERGENCIA,
  DECISIONES_SALA_CRISIS,
  DILEMAS_SALA_CRISIS,
  DESTINOS_CRISIS_FINAL,
  SistemaSalaCrisis
} = require('./sala_crisis_estallido.js');

global.FASES_MECHA_ESTALLIDO = FASES_MECHA_ESTALLIDO;
global.FAUNA_EMERGENCIA = FAUNA_EMERGENCIA;
global.DECISIONES_SALA_CRISIS = DECISIONES_SALA_CRISIS;
global.DILEMAS_SALA_CRISIS = DILEMAS_SALA_CRISIS;
global.DESTINOS_CRISIS_FINAL = DESTINOS_CRISIS_FINAL;
global.SistemaSalaCrisis = SistemaSalaCrisis;

const {
  TRES_PATAS_COLAPSO,
  OPCIONES_RENUNCIA_FORZADA,
  RUTAS_ESCAPE_ROSADA,
  PRESIDENTES_EXPRESS_ASAMBLEA,
  DESTINOS_EXPRESIDENTE,
  REPORTE_FUERZA_AEREA_BASE,
  SistemaCaidaEvacuacion
} = require('./caida_evacuacion_expresidente.js');

global.TRES_PATAS_COLAPSO = TRES_PATAS_COLAPSO;
global.OPCIONES_RENUNCIA_FORZADA = OPCIONES_RENUNCIA_FORZADA;
global.RUTAS_ESCAPE_ROSADA = RUTAS_ESCAPE_ROSADA;
global.PRESIDENTES_EXPRESS_ASAMBLEA = PRESIDENTES_EXPRESS_ASAMBLEA;
global.DESTINOS_EXPRESIDENTE = DESTINOS_EXPRESIDENTE;
global.REPORTE_FUERZA_AEREA_BASE = REPORTE_FUERZA_AEREA_BASE;
global.SistemaCaidaEvacuacion = SistemaCaidaEvacuacion;

const {
  FASES_OPERATIVO_RETORNO,
  ECOSISTEMA_DIGITAL_RETORNO,
  TRES_ALIANZAS_PERDON,
  DILEMAS_OPERATIVO_RETORNO,
  ACCIONES_BUNKER_RETORNO,
  ESCENAS_VICTORIA_RETORNO,
  SistemaOperativoRetorno
} = require('./operativo_retorno_expresidente.js');

global.FASES_OPERATIVO_RETORNO = FASES_OPERATIVO_RETORNO;
global.ECOSISTEMA_DIGITAL_RETORNO = ECOSISTEMA_DIGITAL_RETORNO;
global.TRES_ALIANZAS_PERDON = TRES_ALIANZAS_PERDON;
global.DILEMAS_OPERATIVO_RETORNO = DILEMAS_OPERATIVO_RETORNO;
global.ACCIONES_BUNKER_RETORNO = ACCIONES_BUNKER_RETORNO;
global.ESCENAS_VICTORIA_RETORNO = ESCENAS_VICTORIA_RETORNO;
global.SistemaOperativoRetorno = SistemaOperativoRetorno;

const {
  FASES_CALESITA_CAMBIARIA,
  TABLERO_SEMAFOROS_BCRA,
  TRAMPAS_POLITICA_ECONOMICA,
  DILEMAS_MACRO_EXTREMOS,
  ACCIONES_MESA_DINERO,
  CABLES_URGENTES_MESA,
  SistemaMacroCalesitaBCRA
} = require('./calesita_macroeconomia_bcra.js');

global.FASES_CALESITA_CAMBIARIA = FASES_CALESITA_CAMBIARIA;
global.TABLERO_SEMAFOROS_BCRA = TABLERO_SEMAFOROS_BCRA;
global.TRAMPAS_POLITICA_ECONOMICA = TRAMPAS_POLITICA_ECONOMICA;
global.DILEMAS_MACRO_EXTREMOS = DILEMAS_MACRO_EXTREMOS;
global.ACCIONES_MESA_DINERO = ACCIONES_MESA_DINERO;
global.CABLES_URGENTES_MESA = CABLES_URGENTES_MESA;
global.SistemaMacroCalesitaBCRA = SistemaMacroCalesitaBCRA;

const {
  FASES_INTEGRADAS_SIMULADOR,
  SEMANA_CRITICA_VIERNES_NEGRO,
  SistemaEcuacionUnificada
} = require('./ecuacion_unificada_simulador.js');

global.FASES_INTEGRADAS_SIMULADOR = FASES_INTEGRADAS_SIMULADOR;
global.SEMANA_CRITICA_VIERNES_NEGRO = SEMANA_CRITICA_VIERNES_NEGRO;
global.SistemaEcuacionUnificada = SistemaEcuacionUnificada;

const {
  LIGAS_PROVINCIALES,
  PALANCAS_FINANCIERAS_EJECUTIVO,
  calcularAlgoritmoCorteBoleta,
  DILEMAS_FEDERALES_EXTREMOS,
  ACCIONES_ROSCA_FEDERAL,
  SistemaRoscaFederal
} = require('./rosca_federal_provincias.js');

global.LIGAS_PROVINCIALES = LIGAS_PROVINCIALES;
global.PALANCAS_FINANCIERAS_EJECUTIVO = PALANCAS_FINANCIERAS_EJECUTIVO;
global.calcularAlgoritmoCorteBoleta = calcularAlgoritmoCorteBoleta;
global.DILEMAS_FEDERALES_EXTREMOS = DILEMAS_FEDERALES_EXTREMOS;
global.ACCIONES_ROSCA_FEDERAL = ACCIONES_ROSCA_FEDERAL;
global.SistemaRoscaFederal = SistemaRoscaFederal;

const {
  ROLES_CLAN_FAMILIAR,
  RESOLUCIONES_DOMESTICAS_LIVING,
  DILEMAS_DINASTICOS_JUGABLES,
  HEREDEROS_REENCARNACION_DINASTICA,
  EFECTOS_SANGRE_NUEVA_VIDA,
  SistemaDinastiasNepotismo
} = require('./dinastias_nepotismo.js');

global.ROLES_CLAN_FAMILIAR = ROLES_CLAN_FAMILIAR;
global.RESOLUCIONES_DOMESTICAS_LIVING = RESOLUCIONES_DOMESTICAS_LIVING;
global.DILEMAS_DINASTICOS_JUGABLES = DILEMAS_DINASTICOS_JUGABLES;
global.HEREDEROS_REENCARNACION_DINASTICA = HEREDEROS_REENCARNACION_DINASTICA;
global.EFECTOS_SANGRE_NUEVA_VIDA = EFECTOS_SANGRE_NUEVA_VIDA;
global.SistemaDinastiasNepotismo = SistemaDinastiasNepotismo;

const { MotorJuego } = require('./motor.js');

console.log("  -> Módulos cargados correctamente.\n");

// 2. PRUEBAS DE LOS 12 EJES Y NORMALIZACIÓN
console.log("🧭 2. VERIFICACIÓN DE EJES NORMALIZADOS Y MATRIZ IDEOLÓGICA...");

const EJES_VALIDOS = Object.keys(DOCE_EJES);
assert.strictEqual(EJES_VALIDOS.length, 12, "Deben existir exactamente 12 ejes.");

test("Los 12 ejes normalizados están correctamente definidos", () => {
  const esperados = [
    'federalismo', 'institucionalidad', 'seguridad', 'inmigracion',
    'defensa', 'geopolitica', 'estatismo', 'regulacion',
    'comercio', 'laicismo', 'valores', 'ambiente'
  ];
  for (const e of esperados) {
    assert.ok(DOCE_EJES[e], `Falta el eje ${e}`);
    assert.ok(DOCE_EJES[e].nombre, `Eje ${e} sin nombre`);
    assert.ok(DOCE_EJES[e].poloA && DOCE_EJES[e].poloB, `Eje ${e} sin polos`);
  }
});

test("No existen claves obsoletas de ejes en dilemas ni líderes", () => {
  const obsoletos = ['economia', 'controle', 'tecnologia', 'moral', 'religiao', 'imigracao', 'diplomacia', 'intervencao'];
  
  // Revisar líderes
  for (const lider of LIDERES_ARGENTINOS) {
    for (const k in lider.vector) {
      assert.ok(!obsoletos.includes(k), `Líder ${lider.nombre} usa clave obsoleta: ${k}`);
      assert.ok(EJES_VALIDOS.includes(k), `Líder ${lider.nombre} usa eje desconocido: ${k}`);
    }
  }

  // Revisar dilemas
  for (const fase in DILEMAS_DATA) {
    for (const dilema of DILEMAS_DATA[fase]) {
      for (const op of (dilema.opciones || [])) {
        if (op.impacto12Axes) {
          for (const k in op.impacto12Axes) {
            assert.ok(!obsoletos.includes(k), `Dilema ${dilema.id} en ${fase} usa clave obsoleta: ${k}`);
            assert.ok(EJES_VALIDOS.includes(k), `Dilema ${dilema.id} en ${fase} usa eje desconocido: ${k}`);
          }
        }
      }
    }
  }
});

test("Cobertura equilibrada de los 12 ejes en dilemas", () => {
  const contadorEjes = {};
  for (const k of EJES_VALIDOS) contadorEjes[k] = 0;

  for (const fase in DILEMAS_DATA) {
    for (const d of DILEMAS_DATA[fase]) {
      for (const op of (d.opciones || [])) {
        if (op.impacto12Axes) {
          for (const k in op.impacto12Axes) {
            contadorEjes[k]++;
          }
        }
      }
    }
  }

  // Verificar que ningún eje quede desatendido (mínimo 4 apariciones)
  for (const k of EJES_VALIDOS) {
    assert.ok(contadorEjes[k] >= 4, `El eje ${k} tiene muy pocas apariciones: ${contadorEjes[k]}`);
  }
});

test("Todos los sectores afectados en dilemas son válidos", () => {
  const sectoresValidos = Object.keys(SECTORES_ARG);
  for (const fase in DILEMAS_DATA) {
    for (const d of DILEMAS_DATA[fase]) {
      for (const op of (d.opciones || [])) {
        if (op.impactoSectores) {
          for (const sec in op.impactoSectores) {
            assert.ok(sectoresValidos.includes(sec), `Sector inválido ${sec} en dilema ${d.id}`);
          }
        }
      }
    }
  }
});

// 3. PRUEBAS DE CÁLCULO DE PROMEDIO Y EJE ECOLÓGICO EN EL MOTOR
console.log("\n⚙️ 3. VERIFICACIÓN DEL MOTOR: PROMEDIOS, EJE ECOLÓGICO Y TABLERO MACRO...");

test("El cálculo de promedios divide por axisN y reporta null si axisN es 0", () => {
  const motor = new MotorJuego();
  motor.reiniciar();

  // Antes de responder, todos los ejes son null y axisN es 0
  for (const k of EJES_VALIDOS) {
    assert.strictEqual(motor.vector12Axes[k], null, `Eje ${k} debe iniciar en null`);
    assert.strictEqual(motor.axisN[k], 0, `Eje ${k} debe tener axisN = 0`);
  }

  // Aplicar una decisión que sólo afecte ambiente (valor 80)
  motor.aplicarDecision({
    impacto12Axes: { ambiente: 80 },
    impactoSectores: {},
    impactoMacro: {}
  });

  assert.strictEqual(motor.axisN.ambiente, 1);
  assert.strictEqual(motor.vector12Axes.ambiente, 80);
  assert.strictEqual(motor.vector12Axes.defensa, null, "Eje defensa no tocado debe seguir en null");

  // Aplicar segunda decisión sobre ambiente con valor 20
  motor.aplicarDecision({
    impacto12Axes: { ambiente: 20 },
    impactoSectores: {},
    impactoMacro: {}
  });

  assert.strictEqual(motor.axisN.ambiente, 2);
  assert.strictEqual(motor.vector12Axes.ambiente, 50, "Promedio exacto (80+20)/2 debe ser 50");
});

test("El eje ecológico en generarDiagnosticoFinal mapea correctamente (no invertido)", () => {
  const motor = new MotorJuego();
  motor.reiniciar();

  // Simulamos un jugador 100% ecologista
  motor.aplicarDecision({
    impacto12Axes: { ambiente: 100, estatismo: 80 },
    impactoSectores: {},
    impactoMacro: {}
  });

  const diag = motor.generarDiagnosticoFinal();
  assert.ok(diag.topIdeologia, "Debe generar topIdeologia");
  assert.strictEqual(diag.vector12.ambiente, 100);
});

test("El tablero macroeconómico en vivo actualiza indicadores correctamente", () => {
  const motor = new MotorJuego();
  motor.reiniciar();

  const inicialInflacion = motor.macroeconomia.inflacionMensual;
  const inicialRiesgo = motor.macroeconomia.riesgoPais;
  const inicialReservas = motor.macroeconomia.reservasNetasBCRA;
  const inicialFiscal = motor.macroeconomia.resultadoFiscalPBI;

  motor.aplicarDecision({
    impacto12Axes: { comercio: 80 },
    impactoSectores: {},
    impactoMacro: {
      inflacionMensual: -0.5,
      riesgoPais: -100,
      reservasNetasBCRA: +500,
      resultadoFiscalPBI: +0.2
    }
  });

  assert.strictEqual(motor.macroeconomia.inflacionMensual, Math.round((inicialInflacion - 0.5) * 10) / 10);
  assert.strictEqual(motor.macroeconomia.riesgoPais, inicialRiesgo - 100);
  assert.strictEqual(motor.macroeconomia.reservasNetasBCRA, inicialReservas + 500);
  assert.strictEqual(motor.macroeconomia.resultadoFiscalPBI, Math.round((inicialFiscal + 0.2) * 10) / 10);
});

test("Dilemas intermedios tienen costos de tibieza (sin centro gratis)", () => {
  // Comprobar que opciones intermedias penalizan o cobran costos fiscales/sectores
  let opcionesIntermediasPenalizadas = 0;
  for (const fase in DILEMAS_DATA) {
    for (const d of DILEMAS_DATA[fase]) {
      const opciones = d.opciones || (typeof d.generarContextoDinamico === 'function' ? d.generarContextoDinamico({}).opciones : []);
      if (opciones && opciones.length >= 3) {
        const intermedia = opciones[1]; // normalmente la del medio
        const tieneCostoSector = intermedia.impactoSectores && Object.values(intermedia.impactoSectores).some(v => v < 0);
        const tieneCostoMacro = intermedia.impactoMacro && (intermedia.impactoMacro.resultadoFiscalPBI < 0 || intermedia.impactoMacro.riesgoPais > 0 || (intermedia.impactoMacro.fiscal !== undefined && intermedia.impactoMacro.fiscal < 0));
        if (tieneCostoSector || tieneCostoMacro) {
          opcionesIntermediasPenalizadas++;
        }
      }
    }
  }
  assert.ok(opcionesIntermediasPenalizadas >= 10, "Debe haber opciones intermedias con costos explícitos de tibieza");
});

// 4. PRUEBAS DEL SISTEMA LEGISLATIVO Y CONSTITUCIONAL
console.log("\n⚖️ 4. VERIFICACIÓN CONSTITUCIONAL (ARTS. 40, 48, 83, 89, 99 INC. 3)...");

const leg = new SistemaLegislativo();

test("Quórum legal diferenciado en Diputados (129) y Senadores (37)", () => {
  assert.strictEqual(leg.bancasDiputados.total, 257);
  assert.strictEqual(leg.bancasSenadores.total, 72);

  const resDip = leg.simularVotacionDiputados({ categoria: "general" }, { productivo: 60, trabajo: 40 });
  assert.ok(resDip.presentes >= 129, "Debe alcanzar quórum en Diputados (129)");

  const resSen = leg.simularVotacionSenadores({ categoria: "general" }, { gobernadores: 55, frenteExterno: 50 });
  assert.ok(resSen.presentes >= 37, "Debe alcanzar quórum en Senadores (37)");
});

test("DNU: materias prohibidas (penal, tributario, electoral) activan alerta cautelar (Art. 99 inc. 3)", () => {
  const dnuPenal = leg.evaluarDNU({
    titulo: "DNU Régimen Penal Juvenil",
    materia: "penal"
  }, { seguridadJusticia: 40 });

  assert.strictEqual(dnuPenal.constitucionalidadPrimaFacie, false);
  assert.ok(dnuPenal.alertaCautelarJudicial, "Debe activar alerta de cautelar judicial");
  assert.strictEqual(dnuPenal.estado, "Frenado por Cautelar Judicial Inconstitucional");

  const dnuValido = leg.evaluarDNU({
    titulo: "DNU Emergencia Ferroviaria",
    materia: "infraestructura"
  }, { seguridadJusticia: 60 });

  assert.strictEqual(dnuValido.constitucionalidadPrimaFacie, true);
  assert.strictEqual(dnuValido.alertaCautelarJudicial, false);
});

test("Consulta Popular convocada por el PEN es no vinculante (Art. 40 párr. 2 CN)", () => {
  const consulta = leg.simularConsultaPopular({
    titulo: "Consulta Popular sobre Privatización Ferroviaria"
  }, { claseMedia: 55, trabajo: 45, productivo: 60 });

  assert.strictEqual(consulta.tipo, "consulta_popular_no_vinculante");
  assert.strictEqual(consulta.vinculante, false);
  assert.ok(consulta.detalle.includes("no vinculante"), "Debe indicar expresamente el carácter no vinculante");
  assert.ok(consulta.porcentajeParticipacion >= 0 && consulta.porcentajeParticipacion <= 100);
});

test("Veto Presidencial e insistencia con 2/3 (Art. 83 CN)", () => {
  // Simular veto con oposición muy fuerte (debe derribar veto con 2/3)
  const vetoDerribado = leg.simularVetoPresidencial({
    titulo: "Ley de Financiamiento Universitario"
  }, "total", { estadoCiencia: 10, claseMedia: 20 });

  assert.strictEqual(vetoDerribado.tipo, "veto_presidencial");
  assert.ok(vetoDerribado.insistenciaLograda, "Con baja aprobación la oposición debe alcanzar 2/3");
  assert.strictEqual(vetoDerribado.vetoFirme, false);

  // Simular veto con aprobación oficialista alta (blindaje del tercio)
  const vetoFirme = leg.simularVetoPresidencial({
    titulo: "Ley de Aumento de Jubilaciones"
  }, "total", { estadoCiencia: 85, claseMedia: 80, productivo: 85 });

  assert.strictEqual(vetoFirme.vetoFirme, true);
  assert.strictEqual(vetoFirme.insistenciaLograda, false);
});

// 5. PRUEBAS DE GLOSARIO, PARODIA DE FAMOSOS Y SÁTIRA
console.log("\n📚 5. VERIFICACIÓN DE GLOSARIO, PARODIA DE FAMOSOS Y SÁTIRA...");

test("Glosario reemplaza términos en una sola pasada respetando límites de palabras", () => {
  const texto = "El Artículo 89 exige haber nacido o ser hijo de ciudadano nativo para la Presidencia.";
  const procesado = procesarTextoConGlosario(texto);

  assert.ok(procesado.includes("glosario-termino"), "Debe inyectar la clase glosario-termino");
  assert.ok(procesado.includes("data-termino="), "Debe incluir el atributo data-termino");
});

test("Glosario incluye términos constitucionales, institucionales y plataformas modernas", () => {
  const terminos = Object.keys(GLOSARIO);
  assert.ok(terminos.includes("artículo 89"), "Debe tener Artículo 89");
  assert.ok(terminos.includes("artículo 40"), "Debe tener Artículo 40");
  assert.ok(terminos.includes("artículo 99 inciso 3"), "Debe tener Artículo 99 inc. 3");
  assert.ok(terminos.includes("disney+"), "Debe tener Disney+");
  assert.ok(terminos.includes("max"), "Debe tener Max");
  assert.ok(terminos.includes("flow"), "Debe tener Flow");
});

test("Generación de reacciones de famosos funciona con sátira y sin errores", () => {
  const reacs = obtenerReaccionesFamosos(
    { texto: "Apertura total de importaciones e inserción al libre comercio", impacto12Axes: { comercio: 90, estatismo: 85 } },
    { libre_comercio: true },
    { comercio: 90, estatismo: 85 }
  );

  assert.ok(reacs.length >= 2, "Debe generar al menos 2 reacciones");
  for (const r of reacs) {
    assert.ok(r.nombre, "Debe tener nombre de famoso");
    assert.ok(r.comentario, "Debe tener comentario");
    assert.ok(["banca", "bardea", "neutro", "ironico"].includes(r.tipo), "Tipo de reacción válido");
  }
});

test("Dato histórico de César Lolo Regueiro está corregido (Gimnasia vs Boca 2022)", () => {
  const clasicoLaPlata = CLASICOS_ARGENTINOS.find(c => c.id === "platense");
  assert.ok(clasicoLaPlata, "Debe existir el clásico platense");
  // Verificar que el clásico platense no confunda la muerte de Regueiro como un choque con Estudiantes
  assert.ok(
    !clasicoLaPlata.antecedentesCriticos.includes("muerte de César 'Lolo' Regueiro en 2022 por la represión policial contra el Pincha"),
    "No debe atribuir falsamente el partido de 2022 a Estudiantes"
  );
  assert.ok(
    clasicoLaPlata.antecedentesCriticos.includes("Gimnasia vs. Boca"),
    "Debe especificar que ocurrió durante Gimnasia vs. Boca en el Bosque"
  );
});

test("Muro de Medios genera titulares, zócalos y placas rojas dinámicas para Escenario A y B", () => {
  // Escenario A: Ajuste / Represión
  const escA = generarMuroDeMedios({
    texto: "Represión a un piquete en la 9 de Julio + liberación del precio de los combustibles y prepagas.",
    impacto12Axes: { seguridad: 75, estatismo: 70 }
  });
  assert.ok(escA.length >= 3, "Debe generar al menos 3 medios principales");
  const cronicaA = escA.find(m => m.id === "cronica");
  assert.ok(cronicaA, "Crónica TV debe estar presente");
  assert.ok(cronicaA.titular.includes("LLUVIA DE PALOS"), "Titular de Crónica para represión");
  assert.ok(cronicaA.subZocalo.includes("NAFTA SE FUE AL CARAJO"), "Sub-zócalo de nafta");

  const lnA = escA.find(m => m.id === "ln_mas");
  assert.ok(lnA, "LN+ debe cubrir la medida");
  assert.ok(lnA.titular.includes("ORDEN EN LA CALLE"), "LN+ debe titular orden");

  const c5nA = escA.find(m => m.id === "c5n");
  assert.ok(c5nA, "C5N debe cubrir la medida");
  assert.ok(c5nA.titular.includes("CRACIA DE HAMBRE"), "C5N debe denunciar ajuste");

  // Escenario B: Intervención / Estatismo / Bono
  const escB = generarMuroDeMedios({
    texto: "Congelamiento de tarifas por 180 días + bono financiado con un nuevo impuesto a las grandes billeteras virtuales.",
    impacto12Axes: { estatismo: 25, regulacion: 30 }
  });
  const cronicaB = escB.find(m => m.id === "cronica");
  assert.ok(cronicaB.titular.includes("FRENAN EL TARIFAZO"), "Crónica frena el tarifazo");

  const c5nB = escB.find(m => m.id === "c5n");
  assert.ok(c5nB.titular.includes("ALIVIO AL BOLSILLO"), "C5N celebra alivio");

  const lnB = escB.find(m => m.id === "ln_mas");
  assert.ok(lnB.titular.includes("GIRO POPULISTA"), "LN+ advierte giro populista");
});

test("Muro de Medios incluye cobertura deportiva (TyC Sports / ESPN) ante temas de fútbol y SAD", () => {
  const escFutbol = generarMuroDeMedios({
    texto: "Habilitación de las Sociedades Anónimas Deportivas (SAD) en los clubes de fútbol.",
    impacto12Axes: { estatismo: 80 }
  });
  const tyc = escFutbol.find(m => m.id === "tyc_sports");
  assert.ok(tyc, "TyC Sports debe activarse ante temas de fútbol");
  assert.ok(tyc.titular.includes("FÚTBOL EN PIE DE GUERRA"), "TyC debe titular sobre fútbol");
});

test("La Voz de la Calle cuenta con los 8 arquetipos ciudadanos clave de la vida cotidiana", () => {
  const arquetiposEsperados = [
    "carnicero", "pibe_delivery", "jubilada_pami", "estudiante_publico",
    "colectivero", "taxista", "changarin", "mama_comercio"
  ];
  for (const id of arquetiposEsperados) {
    const c = CIUDADANOS_ARGENTINOS[id];
    assert.ok(c, `Arquetipo ${id} debe existir`);
    assert.ok(c.nombre, `Arquetipo ${id} debe tener nombre`);
    assert.ok(c.perfil, `Arquetipo ${id} debe tener perfil`);
    assert.ok(c.icono, `Arquetipo ${id} debe tener ícono`);
    assert.ok(c.lugar, `Arquetipo ${id} debe tener lugar o móvil`);
    assert.strictEqual(typeof c.generarDicho, 'function', `Arquetipo ${id} debe tener función generarDicho`);
  }
});

test("La Voz de la Calle reacciona en forma cruzada y con matices reales ante transporte y combustibles", () => {
  const decisionTransporte = {
    texto: "Desregulación total de tarifas de transporte y combustibles",
    impacto12Axes: { estatismo: 20 }
  };
  const voces = obtenerVocesDeLaCalle(null, decisionTransporte);
  assert.ok(voces.length >= 3, "Debe devolver al menos 3 testimonios");

  // Verificar que el mapa completo de arquetipos evaluó la medida con su ángulo particular
  const todas = voces.todas;
  assert.ok(todas, "Debe incluir el mapa completo de voces");
  assert.ok(todas.pibe_delivery.texto.includes("combustible") || todas.pibe_delivery.texto.includes("tanque"),
    "Delivery debe sufrir el costo del tanque");
  assert.ok(todas.colectivero.texto.includes("SUBE") || todas.colectivero.texto.includes("pasajero") || todas.colectivero.texto.includes("tarifazo"),
    "Colectivero debe dar la cara con los pasajeros");
  assert.ok(todas.estudiante_publico.texto.includes("SUBE") || todas.estudiante_publico.texto.includes("viajar"),
    "Estudiante debe sufrir la recarga de SUBE");
  assert.ok(todas.carnicero.texto.includes("flete") || todas.carnicero.texto.includes("mostrador"),
    "Carnicero traslada el aumento del flete al mostrador");
});

test("La Voz de la Calle refleja el impacto barrial directo ante salud, obra pública y aplicaciones", () => {
  // 1. Salud y medicamentos
  const decSalud = { texto: "Recorte del 100% de medicamentos del PAMI y revisión del vademécum", impacto12Axes: { estatismo: 30 } };
  const vocesSalud = obtenerVocesDeLaCalle(null, decSalud);
  assert.ok(vocesSalud.todas.jubilada_pami.texto.includes("pastilla") || vocesSalud.todas.jubilada_pami.texto.includes("remedios"),
    "Jubilada sufre por medicamentos");
  assert.strictEqual(vocesSalud.todas.jubilada_pami.humor, "bronca");

  // 2. Parálisis de obra pública
  const decObra = { texto: "Freno total y definitivo a las obras públicas nacionales", impacto12Axes: { estatismo: 15 } };
  const vocesObra = obtenerVocesDeLaCalle(null, decObra);
  assert.ok(vocesObra.todas.changarin.texto.includes("obra") || vocesObra.todas.changarin.texto.includes("olla"),
    "Changarin sufre parálisis de obra");
  assert.strictEqual(vocesObra.todas.changarin.humor, "bronca");

  // 3. Desregulación de aplicaciones
  const decTaxi = { texto: "Desregulación total de aplicaciones de viajes como Uber y Didi", impacto12Axes: { regulacion: 80 } };
  const vocesTaxi = obtenerVocesDeLaCalle(null, decTaxi);
  assert.ok(vocesTaxi.todas.taxista.texto.includes("Uber") || vocesTaxi.todas.taxista.texto.includes("licencia"),
    "Taxista denuncia deslealtad de aplicaciones");
  assert.strictEqual(vocesTaxi.todas.taxista.humor, "bronca");
});

test("Los 8 Dilemas y Quilombos Típicos están integrados y conectados con TV, Famosos y La Calle", () => {
  const catalogoOcho = [
    { id: "pres_prepagas_salud", palabraTV: "PREPAGAS", palabraCalle: "copago" },
    { id: "pres_alquileres_vivienda", palabraTV: "ALQUILER", palabraCalle: "alquiler" },
    { id: "pres_taxis_uber", palabraTV: "UBER", palabraCalle: "licencia" },
    { id: "pres_recitales_estadios", palabraTV: "SHOW", palabraCalle: "infierno" },
    { id: "pres_paritarias_docentes", palabraTV: "CLASES", palabraCalle: "docente" },
    { id: "pres_imputabilidad_menores", palabraTV: "IMPUTABILIDAD", palabraCalle: "orden" },
    { id: "pres_marcha_universidades", palabraTV: "UNIVERSITAR", palabraCalle: "universidad" },
    { id: "pres_tierras_patagonia_extranjeros", palabraTV: "PATAGONIA", palabraCalle: "calle" }
  ];

  catalogoOcho.forEach(item => {
    const dilema = DILEMAS_DATA.presidente.find(d => d.id === item.id);
    assert.ok(dilema, `Dilema ${item.id} debe existir en Fase Presidente`);
    assert.strictEqual(dilema.opciones.length, 3, `Dilema ${item.id} debe tener 3 opciones calibradas`);

    // Probar conexión con TV (Muro de Medios)
    const muro = generarMuroDeMedios(dilema.opciones[0]);
    assert.ok(muro.length >= 3, `Debe generar zócalos para ${item.id}`);
    const hayTitularTematico = muro.some(m => m.titular.toUpperCase().includes(item.palabraTV));
    assert.ok(hayTitularTematico, `Zócalos de TV deben incluir cobertura de ${item.palabraTV} en ${item.id}`);

    // Probar conexión con Streamers / Famosos
    const famosos = obtenerReaccionesFamosos(null, dilema.opciones[0]);
    assert.ok(famosos.length > 0, `Debe generar reacciones de figuras públicas para ${item.id}`);

    // Probar conexión con La Voz de la Calle
    const calle = obtenerVocesDeLaCalle(null, dilema.opciones[0]);
    assert.ok(calle.length >= 3, `Debe generar testimonios ciudadanos para ${item.id}`);
  });
});

test("Punto 5: Clásicos del Fútbol, SAD, Otros Deportes y Reacción Dinámica ante Visitantes", () => {
  // 1. Clásicos del Interior y Ascenso
  assert.ok(Array.isArray(CLASICOS_ARGENTINOS) && CLASICOS_ARGENTINOS.length >= 19, "Deben existir al menos 19 clásicos mapeados");
  const tucuman = CLASICOS_ARGENTINOS.find(c => c.id === "clasico_tucumano");
  assert.ok(tucuman, "Debe existir el Clásico Tucumano");
  assert.ok(tucuman.termometroSocial.includes("La Ciudadela") && tucuman.termometroSocial.includes("25 de Mayo"), "Clásico tucumano debe reflejar La Ciudadela y 25 de Mayo");

  const salta = CLASICOS_ARGENTINOS.find(c => c.id === "triangular_salta");
  assert.ok(salta, "Debe existir el Triangular de la Furia Salteña");
  assert.ok(salta.nombre.includes("Triangular") && salta.rivales.includes("Juventud Antoniana"), "Debe incluir a los tres grandes salteños");

  const cuyo = CLASICOS_ARGENTINOS.find(c => c.id === "cuyo");
  assert.ok(cuyo.termometroSocial.includes("Daniel Vila") && cuyo.antecedentesCriticos.includes("trapitos"), "Clásico cuyano debe referenciar a Daniel Vila y trapitos");

  // 2. Otros Deportes Argentinos
  assert.ok(OTROS_DEPORTES_ARGENTINOS.automovilismo_tc, "Debe existir TC (Ford vs Chevrolet)");
  assert.ok(OTROS_DEPORTES_ARGENTINOS.rugby_san_isidro, "Debe existir Rugby San Isidro (CASI vs SIC)");
  assert.ok(OTROS_DEPORTES_ARGENTINOS.basquet_liga_nacional, "Debe existir Básquet Liga Nacional (Atenas vs Peñarol/Ferro)");
  assert.ok(OTROS_DEPORTES_ARGENTINOS.boxeo_luna_park, "Debe existir Boxeo (Luna Park vs Párense de Manos)");

  // 3. Dilema de las SAD
  const sadDil = DILEMAS_DATA.presidente.find(d => d.id === "pres_sad_futbol");
  assert.ok(sadDil, "Debe existir el dilema pres_sad_futbol");
  assert.strictEqual(sadDil.opciones.length, 3, "pres_sad_futbol debe tener 3 opciones calibradas");
  assert.ok(sadDil.opciones.some(o => o.texto.includes("50+1")), "Debe existir la opción del modelo mixto 50+1");

  // 4. Reacción cruzada ante la vuelta de visitantes
  const clasicosDil = DILEMAS_DATA.presidente.find(d => d.id === "pres_clasicos_disturbios");
  assert.ok(clasicosDil, "Debe existir el dilema pres_clasicos_disturbios");
  const opcionVisitantes = clasicosDil.opciones.find(o => o.id === "vuelta_visitantes_control");
  assert.ok(opcionVisitantes, "Debe existir la opción vuelta_visitantes_control");

  // TyC Sports
  const graphTyc = MEDIOS_ARGENTINOS.tyc_sports.generarGraph(opcionVisitantes);
  assert.strictEqual(graphTyc.titular, "VUELVEN LOS VISITANTES: ¿FIESTA POPULAR O EMBOSCADA ANUNCIADA EN LOS PEAJES?");

  // Famosos: El Gordo Dan y Chiqui Tapia
  const reacDan = FAMOSOS_ARGENTINOS.gordo_dan.generarReaccion(opcionVisitantes);
  assert.ok(reacDan.texto.includes("descampado"), "Gordo Dan debe reaccionar contra barras en descampado");
  assert.strictEqual(reacDan.texto, "Que se caguen a trompadas entre ellos en el descampado si quieren. No le pongas un solo policía de la gente honesta para cuidar a cuatro delincuentes con bombos.");

  const reacTapia = FAMOSOS_ARGENTINOS.chiqui_tapia.generarReaccion(opcionVisitantes);
  assert.ok(reacTapia.texto.includes("pasión no se privatiza"), "Chiqui Tapia debe bancar la fiesta del fútbol");
  assert.strictEqual(reacTapia.texto, "El fútbol argentino es de su gente y de sus hinchas. La pasión no se privatiza ni se prohíbe. Un gran paso para la familia.");

  // La Voz de la Calle: Jorge el colectivero
  const dichoJorge = CIUDADANOS_ARGENTINOS.colectivero.generarDicho(opcionVisitantes);
  assert.ok(dichoJorge.texto.includes("cancha de Chicago"), "Jorge debe advertir por el bondi en la cancha de Chicago");
  assert.strictEqual(dichoJorge.texto, "Me toca manejar el bondi que pasa por la cancha de Chicago un domingo con visitantes... voy a terminar con todos los vidrios rotos y la recaudación afanada.");
});

test("Punto 6: Marcas, Empresas, Plataformas y Crisis Energética/Fintech", () => {
  // 1. Catálogo de Marcas y Lobbies Corporativos
  const marcasKeys = Object.keys(MARCAS_ARGENTINAS);
  assert.strictEqual(marcasKeys.length, 10, "Deben existir exactamente 10 marcas y plataformas clave");
  
  // Fintech & Bancos
  assert.ok(MARCAS_ARGENTINAS.mercado_libre && MARCAS_ARGENTINAS.modo_bancos, "Deben existir Mercado Libre y MODO");
  assert.ok(MARCAS_ARGENTINAS.mercado_libre.quejaUsuario.includes("Mercado Pago"), "Queja de Mercado Pago debe reflejar retención de ingresos brutos");
  
  // Energía & Combustibles
  assert.ok(MARCAS_ARGENTINAS.edesur_edenor && MARCAS_ARGENTINAS.ypf_combustibles, "Deben existir Edesur/Edenor e YPF");
  assert.ok(MARCAS_ARGENTINAS.edesur_edenor.quejaUsuario.includes("Lanús"), "Queja de Edesur debe reflejar 3 días sin luz en Lanús");
  
  // Telecomunicaciones & Streaming
  assert.ok(MARCAS_ARGENTINAS.telecom_flow_telecentro && MARCAS_ARGENTINAS.streaming_dolar_tarjeta, "Deben existir Telecom Flow y Streaming");
  assert.ok(MARCAS_ARGENTINAS.telecom_flow_telecentro.quejaUsuario.includes("módem"), "Queja de telecomunicaciones debe reflejar la devolución del módem");
  
  // Transporte & Logística
  assert.ok(MARCAS_ARGENTINAS.grupo_dota_colectivos && MARCAS_ARGENTINAS.aerolineas_argentinas, "Deben existir Grupo DOTA y Aerolíneas Argentinas");
  assert.ok(MARCAS_ARGENTINAS.grupo_dota_colectivos.quejaUsuario.includes("Puente La Noria"), "Queja de DOTA debe reflejar la línea 28 en Puente La Noria");
  
  // Consumo masivo & Supermercados
  assert.ok(MARCAS_ARGENTINAS.grandes_supermercados && MARCAS_ARGENTINAS.grandes_alimenticias, "Deben existir Supermercados y Alimenticias");
  assert.ok(MARCAS_ARGENTINAS.grandes_alimenticias.quilomboFondo.includes("reduflación"), "Alimenticias deben contemplar la reduflación");

  // 2. Dilemas Jugables: Gran Apagón y Guerra del QR
  const apagonDil = DILEMAS_DATA.presidente.find(d => d.id === "pres_apagon_verano_tarifas");
  assert.ok(apagonDil, "Debe existir el dilema del Apagón del Verano en Fase Presidente");
  assert.strictEqual(apagonDil.opciones.length, 3, "pres_apagon_verano_tarifas debe tener 3 opciones calibradas");

  const qrDil = DILEMAS_DATA.presidente.find(d => d.id === "pres_guerra_fintech_modo");
  assert.ok(qrDil, "Debe existir el dilema de la Guerra del QR en Fase Presidente");
  assert.strictEqual(qrDil.opciones.length, 3, "pres_guerra_fintech_modo debe tener 3 opciones calibradas");

  // 3. Reacciones de Medios ante la desregulación en el apagón
  const opcDesregulaApagon = apagonDil.opciones.find(o => o.id === "desregulacion_cuadrillas_privadas");
  assert.ok(opcDesregulaApagon, "Debe existir la opción desregulacion_cuadrillas_privadas");

  const graphCronica = MEDIOS_ARGENTINOS.cronica.generarGraph(opcDesregulaApagon);
  assert.ok(graphCronica.titular.includes("EL VERANO DE LAS VELAS"), "Crónica debe titular EL VERANO DE LAS VELAS ante desregulación del apagón");

  const graphGelatina = MEDIOS_ARGENTINOS.gelatina.generarGraph(opcDesregulaApagon);
  assert.ok(graphGelatina.titular.includes("capitalismo a oscuras") && graphGelatina.titular.includes("velas"), "Gelatina debe titular sobre el capitalismo a oscuras y velas");
  assert.ok(graphGelatina.subZocalo.includes("helado") && graphGelatina.subZocalo.includes("dólares"), "Pedro Rosemblat debe burlarse del helado derretido en dólares");

  // 4. Figuras Públicas Corporativas: Marcos Galperin y Alfredo Coto
  const opcQRObligatorio = qrDil.opciones.find(o => o.id === "interoperabilidad_obligatoria_bcra");
  const reacGalperin = FAMOSOS_ARGENTINOS.marcos_galperin.generarReaccion(opcQRObligatorio);
  assert.strictEqual(reacGalperin.tipo, "bardea", "Galperin debe bardear la interoperabilidad forzosa");
  assert.ok(reacGalperin.texto.includes("burócratas") && reacGalperin.texto.includes("innovación"), "Galperin debe tuitear contra los burócratas");

  const opcControlPrecios = { texto: "Inspección masiva de la Secretaría de Comercio y clausura de supermercados por aumentos abusivos" };
  const reacCoto = FAMOSOS_ARGENTINOS.alfredo_coto.generarReaccion(opcControlPrecios);
  assert.strictEqual(reacCoto.tipo, "bardea", "Alfredo Coto debe bardear los controles e inspectores");
  assert.ok(reacCoto.texto.includes("carnicería en el Once") && reacCoto.texto.includes("góndola"), "Alfredo Coto debe recordar su carnicería en el Once");

  // 5. La Voz de la Calle (Quejas de Lanús, Mercado Pago, Puente La Noria y Módem)
  const dichoLuz = CIUDADANOS_ARGENTINOS.carnicero.generarDicho(opcDesregulaApagon);
  assert.strictEqual(dichoLuz.texto, "Tercer día sin luz en Lanús. Tuve que tirar 80 lucas de mercadería que tenía en el freezer y a mi vieja de 80 años la tenemos que bajar por la escalera a oscuras. Las boletas las cobran al día, pero no aparece una cuadrilla ni de casualidad.");

  const dichoQR = CIUDADANOS_ARGENTINOS.pibe_delivery.generarDicho(opcQRObligatorio);
  assert.strictEqual(dichoQR.texto, "Puse tres mangos a rendir en Mercado Pago para que no se los coma la inflación y me clavaron una retención de ingresos brutos que ni sé de qué provincia es. Te afanan por respirar.");

  const opcDOTA = { texto: "Las cámaras de colectivos reducen frecuencias nocturnas y guardan coches por atraso en subsidios del transporte" };
  const dichoDOTA = CIUDADANOS_ARGENTINOS.colectivero.generarDicho(opcDOTA);
  assert.strictEqual(dichoDOTA.texto, "Parada del 28 en Puente La Noria: 50 minutos esperando con frío porque 'las frecuencias están reducidas'. Pasaron tres bondis juntos con las luces apagadas y no frenó ninguno. Viajamos como animales.");

  const opcTelecom = { texto: "Aumento desregulado en las facturas de telecomunicaciones, abonos de telefonía celular y plataformas de streaming" };
  const dichoModem = CIUDADANOS_ARGENTINOS.estudiante_publico.generarDicho(opcTelecom);
  assert.strictEqual(dichoModem.texto, "Llamé tres veces para dar de baja el cable porque no lo mira nadie y me pasean de operadora en operadora. Me aumentaron un 30% de prepo y si querés cortar te dicen que tenés que ir a una sucursal en la loma del orto a devolver el módem.");
});

// 6. SIMULACIÓN COMPLETA DE PARTIDA
console.log("\n🎮 6. SIMULACIÓN INTEGRAL DE UNA PARTIDA (3 FASES)...");

test("Simulación completa de Fase 1 (Militante), Fase 2 (Diputado) y Fase 3 (Presidente)", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('militante');

  // Recorrer Fase Militante
  while (motor.obtenerDilemaActual()) {
    const dil = motor.obtenerDilemaActual();
    const opcion = dil.opciones[0];
    motor.aplicarDecision(opcion);
  }
  assert.ok(motor.esFinDeFase(), "Debe finalizar fase militante");

  // Avanzar a Fase Diputado
  motor.cargarDilemasDeFase('diputado');
  while (motor.obtenerDilemaActual()) {
    const dil = motor.obtenerDilemaActual();
    const opcion = dil.opciones[1] || dil.opciones[0];
    motor.aplicarDecision(opcion);
  }
  assert.ok(motor.esFinDeFase(), "Debe finalizar fase diputado");

  // Avanzar a Fase Presidente
  motor.cargarDilemasDeFase('presidente');
  while (motor.obtenerDilemaActual()) {
    const dil = motor.obtenerDilemaActual();
    const opcion = dil.opciones[0];
    motor.aplicarDecision(opcion);
  }
  assert.ok(motor.esFinDeFase(), "Debe finalizar fase presidente");

  // Diagnóstico Final
  const diag = motor.generarDiagnosticoFinal();
  assert.ok(diag.topIdeologia, "Debe tener topIdeologia");
  assert.ok(diag.topLider, "Debe tener topLider");
  assert.ok(diag.topPeriodo, "Debe tener topPeriodo");
  assert.ok(diag.macroeconomia, "Debe tener tablero macroeconómico");
  
  console.log(`    📊 Top Ideología diagnosticada: "${diag.topIdeologia.nombre}" (${diag.topIdeologia.afinidad}%)`);
  console.log(`    🇦🇷 Top Líder afín: "${diag.topLider.nombre}" (${diag.topLider.afinidad}%)`);
  console.log(`    📜 Top Período afín: "${diag.topPeriodo.nombre}" (${diag.topPeriodo.afinidad}%)`);
  console.log(`    📈 Inflación final: ${diag.macroeconomia.inflacionMensual}% mensual | Riesgo País: ${diag.macroeconomia.riesgoPais} pts`);
});

test("Perfil de referencia Pro-Mercado posiciona arriba a líderes de mercado (Macri, Milei, Menem, Roca)", () => {
  const mLib = new MotorJuego();
  mLib.iniciarPartida('militante');
  ['militante', 'diputado', 'presidente'].forEach(fase => {
    mLib.cargarDilemasDeFase(fase);
    while (!mLib.esFinDeFase()) {
      const d = mLib.obtenerDilemaActual();
      const mejor = d.opciones.slice().sort((a,b) => {
        const vA = (a.impacto12Axes?.estatismo || 50) + (a.impacto12Axes?.regulacion || 50);
        const vB = (b.impacto12Axes?.estatismo || 50) + (b.impacto12Axes?.regulacion || 50);
        return vB - vA;
      })[0];
      mLib.aplicarDecision(mejor);
    }
  });
  const diag = mLib.generarDiagnosticoFinal();
  const top4Lideres = diag.rankingLideres.slice(0, 4).map(l => l.nombre);
  assert.ok(
    top4Lideres.some(l => l.includes("Macri") || l.includes("Milei") || l.includes("Menem") || l.includes("Roca")),
    `El podio superior liberal debe incluir a Macri, Milei, Menem o Roca. Podio: ${top4Lideres.join(', ')}`
  );
  assert.ok(diag.vector12.estatismo >= 65, `Estatismo debe ser alto (>=65 = pro-mercado): ${diag.vector12.estatismo}`);
});

test("Perfil de referencia Pro-Estado posiciona arriba a líderes populares/nacionales (Kirchner, Perón, Yrigoyen)", () => {
  const mEst = new MotorJuego();
  mEst.iniciarPartida('militante');
  ['militante', 'diputado', 'presidente'].forEach(fase => {
    mEst.cargarDilemasDeFase(fase);
    while (!mEst.esFinDeFase()) {
      const d = mEst.obtenerDilemaActual();
      const mejor = d.opciones.slice().sort((a,b) => {
        const vA = (a.impacto12Axes?.estatismo || 50) + (a.impacto12Axes?.regulacion || 50);
        const vB = (b.impacto12Axes?.estatismo || 50) + (b.impacto12Axes?.regulacion || 50);
        return vA - vB;
      })[0];
      mEst.aplicarDecision(mejor);
    }
  });
  const diag = mEst.generarDiagnosticoFinal();
  const top4Lideres = diag.rankingLideres.slice(0, 4).map(l => l.nombre);
  assert.ok(
    top4Lideres.some(l => l.includes("Kirchner") || l.includes("Perón") || l.includes("Yrigoyen")),
    `El podio superior estatista debe incluir a Kirchner, Perón o Yrigoyen. Podio: ${top4Lideres.join(', ')}`
  );
  assert.ok(diag.vector12.estatismo <= 35, `Estatismo debe ser bajo (<=35 = pro-estado): ${diag.vector12.estatismo}`);
});

// 7. VERIFICACIÓN DEL TERMÓMETRO CRIOLLO, MEGA-DILEMAS, CISNES NEGROS Y FAUNA EXTREMA
console.log("\n🔥 7. VERIFICACIÓN DEL TERMÓMETRO CRIOLLO, MEGA-DILEMAS, CISNES NEGROS Y FAUNA EXTREMA...");

test("El Termómetro Criollo inicia calibrado y procesa efecto dominó y Scaloneta", () => {
  const motor = new MotorJuego();
  motor.reiniciar();

  // 1. Valores iniciales
  assert.strictEqual(motor.termometroCriollo.dolarBlue, 1280, "Dólar Blue inicial debe ser 1280");
  assert.strictEqual(motor.termometroCriollo.mechaSocial, 40, "Mecha Social inicial debe ser 40%");
  assert.strictEqual(motor.termometroCriollo.reservasBCRA, 2200, "Reservas BCRA iniciales deben ser USD 2200M");
  assert.strictEqual(motor.termometroCriollo.roscaGobernadores, 55, "Rosca inicial debe ser 55%");
  assert.strictEqual(motor.termometroCriollo.humorAfaScaloneta, 65, "Humor AFA inicial debe ser 65%");
  assert.strictEqual(motor.climaxCrisis, false, "Inicialmente no hay clímax de crisis");

  // 2. Efecto dominó: riesgo país impacta en dólar blue
  motor.aplicarDecision({
    texto: "Ajuste de shock",
    impacto12Axes: { estatismo: 80 },
    impactoSectores: {},
    impactoMacro: { riesgoPais: +200 },
    impactoCriollo: { mechaSocial: +10 }
  });

  // Dólar Blue debe subir por el efecto dominó de riesgo país (+200 * 0.35 = +70)
  assert.ok(motor.termometroCriollo.dolarBlue >= 1350, `Dólar blue debió subir con riesgo país: ${motor.termometroCriollo.dolarBlue}`);
  assert.strictEqual(motor.termometroCriollo.mechaSocial, 50, "Mecha Social debió subir a 50%");

  // 3. Amortiguador Scaloneta: humorAfaScaloneta >= 70 amortigua 15% del impacto inflacionario
  motor.termometroCriollo.humorAfaScaloneta = 80;
  const mechaPrevia = motor.termometroCriollo.mechaSocial;
  motor.aplicarDecision({
    texto: "Tarifazo mitigado",
    impacto12Axes: {},
    impactoSectores: {},
    impactoMacro: { inflacionMensual: +2.0 }, // Delta nominal = round(2.0 * 4) = 8. Amortiguado 15% = round(8 * 0.85) = 7
    impactoCriollo: {}
  });
  const aumento = motor.termometroCriollo.mechaSocial - mechaPrevia;
  assert.strictEqual(aumento, 7, `Aumento con Scaloneta debió ser 7pts amortiguado (obtenido ${aumento})`);

  // 4. Detonación de Clímax de Crisis cuando mechaSocial >= 85
  motor.aplicarDecision({
    texto: "Megadevaluación y represión",
    impacto12Axes: {},
    impactoSectores: {},
    impactoMacro: {},
    impactoCriollo: { mechaSocial: +35 } // 57 + 35 = 92% (>= 85)
  });
  assert.ok(motor.termometroCriollo.mechaSocial >= 85, `Mecha Social debe superar 85%: ${motor.termometroCriollo.mechaSocial}`);
  assert.strictEqual(motor.climaxCrisis, true, "Clímax de crisis debe estar activo (true)");

  // 5. Diagnóstico final incluye termómetro criollo y clímax de crisis
  const diag = motor.generarDiagnosticoFinal();
  assert.ok(diag.termometroCriollo, "Diagnóstico final debe incluir termometroCriollo");
  assert.strictEqual(diag.climaxCrisis, true, "Diagnóstico final debe reportar climaxCrisis true");
});

test("Fauna Incontrolable: Los 5 personajes extremos están definidos y generan reacciones satíricas", () => {
  const extremos = ['gobernador_feudal', 'burocrata_cgt', 'conductora_magazine', 'guillermo_aquino', 'l_gante'];
  for (const key of extremos) {
    assert.ok(FAMOSOS_ARGENTINOS[key], `Falta personaje extremo: ${key}`);
    const fam = FAMOSOS_ARGENTINOS[key];
    assert.ok(fam.nombre, `Personaje ${key} sin nombre`);
    assert.ok(fam.rol, `Personaje ${key} sin rol`);
    assert.ok(fam.usuario, `Personaje ${key} sin usuario`);
    assert.ok(typeof fam.generarReaccion === 'function', `Personaje ${key} sin generarReaccion`);

    // Probar generación de reacción ante medida de ajuste
    const rAjuste = fam.generarReaccion({ texto: "Ajuste fiscal severo y represión de marchas" }, {}, {});
    assert.ok(rAjuste.texto && rAjuste.texto.length > 5, `Reacción de ${key} vacía`);
    assert.ok(rAjuste.badge, `Reacción de ${key} sin badge`);
    assert.ok(rAjuste.tipo, `Reacción de ${key} sin tipo`);

    // Probar generación ante estatismo
    const rEstado = fam.generarReaccion({ texto: "Estatización y subsidios populares" }, {}, {});
    assert.ok(rEstado.texto && rEstado.texto.length > 5, `Reacción de ${key} vacía ante estado`);
    assert.ok(rEstado.badge, `Reacción de ${key} sin badge ante estado`);
  }
});

test("La Trinchera Real: Las 5 voces vulnerables están definidas y generan testimonios de la vida real", () => {
  const voces = ['comedor_comunitario', 'pensionado_discapacidad', 'enfermera_hospital', 'pyme_textil', 'productor_agropecuario'];
  for (const key of voces) {
    assert.ok(CIUDADANOS_ARGENTINOS[key], `Falta voz vulnerable: ${key}`);
    const voz = CIUDADANOS_ARGENTINOS[key];
    assert.ok(voz.nombre, `Voz ${key} sin nombre`);
    assert.ok(voz.perfil, `Voz ${key} sin perfil`);
    assert.ok(voz.lugar, `Voz ${key} sin lugar`);
    assert.ok(typeof voz.generarDicho === 'function', `Voz ${key} sin generarDicho`);

    const t1 = voz.generarDicho({ texto: "Liberación de tarifas y corte de medicamentos" }, {}, {});
    assert.ok(t1.texto && t1.texto.length > 10, `Testimonio de ${key} vacío`);
    assert.ok(t1.badge, `Testimonio de ${key} sin badge`);
    assert.ok(t1.humor, `Testimonio de ${key} sin humor`);

    const t2 = voz.generarDicho({ texto: "Aumento de retenciones y control de precios" }, {}, {});
    assert.ok(t2.texto && t2.texto.length > 10, `Testimonio 2 de ${key} vacío`);
    assert.ok(t2.badge, `Testimonio 2 de ${key} sin badge`);
  }
});

test("Mega-Dilemas de 4 Caminos: Cada uno tiene 4 opciones y costos cruzados en Termómetro Criollo", () => {
  const megaDilemas = [
    'pres_epidemia_repelente_dengue',
    'pres_corrida_cambiaria_viernes',
    'pres_marcha_jubilados_congreso'
  ];

  for (const id of megaDilemas) {
    const d = DILEMAS_DATA.presidente.find(item => item.id === id);
    assert.ok(d, `Falta mega-dilema ${id} en DILEMAS_DATA.presidente`);
    assert.strictEqual(d.opciones.length, 4, `Mega-dilema ${id} debe tener exactamente 4 opciones`);

    for (let i = 0; i < d.opciones.length; i++) {
      const op = d.opciones[i];
      assert.ok(op.texto, `Opción ${i} de ${id} sin texto`);
      assert.ok(op.impactoCriollo, `Opción ${i} de ${id} debe tener impactoCriollo`);
      assert.ok(op.impacto12Axes, `Opción ${i} de ${id} debe tener impacto12Axes`);
      assert.ok(op.impactoSectores, `Opción ${i} de ${id} debe tener impactoSectores`);
      assert.ok(op.impactoMacro, `Opción ${i} de ${id} debe tener impactoMacro`);
    }
  }
});

test("Cisnes Negros Criollos: Los 4 eventos falopa están integrados en Fase Presidente", () => {
  const cisnes = [
    'cisne_carpinchos_nordelta',
    'cisne_recital_indio_solari',
    'cisne_pelea_movil_cronica',
    'cisne_corte_fibra_toninas'
  ];

  for (const id of cisnes) {
    const c = DILEMAS_DATA.presidente.find(item => item.id === id);
    assert.ok(c, `Falta cisne negro ${id} en DILEMAS_DATA.presidente`);
    assert.ok(c.opciones && c.opciones.length >= 2, `Cisne negro ${id} sin suficientes opciones`);
    for (const op of c.opciones) {
      assert.ok(op.impactoCriollo, `Opción de ${id} debe tener impactoCriollo`);
      assert.ok(op.impacto12Axes, `Opción de ${id} debe tener impacto12Axes`);
    }
  }
});

// 8. VERIFICACIÓN DEL RELOJ DE VIDA, DESGASTE DEL SILLÓN, MUERTES POLÍTICAS Y SUCESIÓN
console.log("\n🩺 8. VERIFICACIÓN DEL RELOJ DE VIDA, DESGASTE DEL SILLÓN, MUERTES POLÍTICAS Y SUCESIÓN...");

test("Arquetipos de Edad: Los 3 perfiles biológicos configuran salud, paranoia y rosca", () => {
  const arquetipos = ['pibe_maravilla', 'maduro_carrera', 'caudillo_historico'];
  for (const id of arquetipos) {
    assert.ok(ARQUETIPOS_EDAD[id], `Falta arquetipo ${id}`);
    const arq = ARQUETIPOS_EDAD[id];
    assert.ok(arq.nombre, `Arquetipo ${id} sin nombre`);
    assert.ok(arq.edadInicial >= 40, `Edad inicial inválida en ${id}`);
    assert.ok(arq.coronarias > 0 && arq.coronarias <= 100, `Coronarias inválidas en ${id}`);
    assert.ok(arq.paranoia >= 0 && arq.paranoia <= 100, `Paranoia inválida en ${id}`);
    assert.ok(arq.seguridad >= 0 && arq.seguridad <= 100, `Seguridad inválida en ${id}`);
  }

  // Comprobar inicialización del Pibe Maravilla
  const motorPibe = new MotorJuego();
  motorPibe.iniciarPartida('presidente', 'pibe_maravilla');
  assert.strictEqual(motorPibe.saludSupervivencia.arquetipo, 'pibe_maravilla');
  assert.strictEqual(motorPibe.saludSupervivencia.edad, 42);
  assert.strictEqual(motorPibe.saludSupervivencia.coronarias, 95);
  assert.strictEqual(motorPibe.saludSupervivencia.paranoia, 10);
  assert.strictEqual(motorPibe.saludSupervivencia.seguridad, 50);
  assert.strictEqual(motorPibe.termometroCriollo.roscaGobernadores, 45); // 55 - 10

  // Comprobar inicialización del Caudillo Histórico
  const motorCaudillo = new MotorJuego();
  motorCaudillo.iniciarPartida('presidente', 'caudillo_historico');
  assert.strictEqual(motorCaudillo.saludSupervivencia.arquetipo, 'caudillo_historico');
  assert.strictEqual(motorCaudillo.saludSupervivencia.edad, 68);
  assert.strictEqual(motorCaudillo.saludSupervivencia.coronarias, 52);
  assert.strictEqual(motorCaudillo.saludSupervivencia.paranoia, 58);
  assert.strictEqual(motorCaudillo.saludSupervivencia.seguridad, 80);
  assert.strictEqual(motorCaudillo.termometroCriollo.roscaGobernadores, 70); // 55 + 15
});

test("Catálogo de 13 Muertes Políticas Argentinas (10 Presidenciales + 3 de Ascenso): Formatos, zócalos, relatos y epitafios", () => {
  const muertesEsperadas = [
    'infarto_quincho_olivos', 'acv_sesion_maratonica', 'complicacion_quirurgica',
    'learjet_tormenta_litoral', 'helicoptero_estancia', 'intoxicacion_bodegon',
    'falla_custodia_multitud', 'nismaneo_bano', 'emboscada_autopista',
    'patriarca_inmortal',
    'balacera_comite', 'ajuste_plata_campana', 'susto_femoral'
  ];

  assert.strictEqual(Object.keys(CATALOGO_MUERTES).length, 13, "Deben existir exactamente 13 muertes políticas (10 presidenciales + 3 de ascenso)");

  for (const id of muertesEsperadas) {
    assert.ok(CATALOGO_MUERTES[id], `Falta muerte ${id} en CATALOGO_MUERTES`);
    const m = CATALOGO_MUERTES[id];
    assert.ok(m.titulo && m.titulo.length > 5, `Muerte ${id} sin título`);
    assert.ok(m.categoria, `Muerte ${id} sin categoría`);
    assert.ok(m.icono, `Muerte ${id} sin icono`);
    assert.ok(m.descripcionCorta, `Muerte ${id} sin descripcionCorta`);
    assert.ok(m.relatoDetallado && m.relatoDetallado.length > 50, `Muerte ${id} sin relato detallado`);
    assert.ok(m.placaCronica && (m.placaCronica.includes('PLACA ROJA') || m.placaCronica.includes('PLACA NEGRA')), `Muerte ${id} placa de Crónica inválida`);
    assert.ok(m.titularLaNacion && m.titularLaNacion.length > 10, `Muerte ${id} sin titular de La Nación`);
    assert.ok(m.titularPagina12 && m.titularPagina12.length > 10, `Muerte ${id} sin titular de Página 12`);
    assert.ok(m.epitafio && m.epitafio.length > 10, `Muerte ${id} sin epitafio`);
    assert.ok(m.legadoPopular && m.legadoPopular.length > 10, `Muerte ${id} sin legadoPopular`);
  }
});

test("Evaluador de Desgaste Biológico y Disparador de Muertes Políticas", () => {
  // 1. ACV en sesión maratónica por coronarias en 0 y alta mecha social
  const m1 = evaluarMuertePolitica({ coronarias: 0, paranoia: 50, seguridad: 50, edad: 55 }, { termometroCriollo: { mechaSocial: 80, dolarBlue: 1300 } });
  assert.strictEqual(m1.id, 'acv_sesion_maratonica');

  // 2. Infarto en quincho de Olivos por coronarias en 0 y mecha baja
  const m2 = evaluarMuertePolitica({ coronarias: 0, paranoia: 50, seguridad: 50, edad: 55 }, { termometroCriollo: { mechaSocial: 40, dolarBlue: 1200 } });
  assert.strictEqual(m2.id, 'infarto_quincho_olivos');

  // 3. Falla de custodia en multitud por seguridad crítica <= 5
  const m3 = evaluarMuertePolitica({ coronarias: 60, paranoia: 30, seguridad: 4, edad: 50 }, { termometroCriollo: { mechaSocial: 50 } });
  assert.strictEqual(m3.id, 'falla_custodia_multitud');

  // 4. Nismaneo en baño por seguridad crítica con paranoia alta
  const m4 = evaluarMuertePolitica({ coronarias: 60, paranoia: 80, seguridad: 4, edad: 50 }, { termometroCriollo: { mechaSocial: 50 } });
  assert.strictEqual(m4.id, 'nismaneo_bano');

  // 5. Victoria Definitiva: El Patriarca Inmortal (El Final Menem a los 78+ con mecha baja y coronarias vivas)
  const m5 = evaluarMuertePolitica({ coronarias: 35, paranoia: 40, seguridad: 70, edad: 80 }, { termometroCriollo: { mechaSocial: 30 } });
  assert.strictEqual(m5.id, 'patriarca_inmortal');

  // 6. Desgaste en el motor tras decisión estresante
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'maduro_carrera');
  motor.expedienteJudicial = null; // Aísla la prueba de desgaste biológico sin interferencia procesal
  const corInicial = motor.saludSupervivencia.coronarias;
  const parInicial = motor.saludSupervivencia.paranoia;

  // Elevar mecha social por encima de 75 y blue por encima de 1500
  motor.termometroCriollo.mechaSocial = 80;
  motor.termometroCriollo.dolarBlue = 1600;
  motor.macroeconomia.riesgoPais = 1500;

  motor.aplicarDecision({
    impacto12Axes: {},
    impactoSectores: {},
    impactoMacro: {},
    impactoCriollo: {},
    impactoSalud: { coronarias: -5, paranoia: +5, seguridad: 0 }
  });

  // Corazón debió perder 5 (impactoSalud) + 4 (mecha>=75) + 2 (blue>1500) = 11
  assert.strictEqual(motor.saludSupervivencia.coronarias, corInicial - 11);
  // Paranoia debió ganar 5 (impactoSalud) + 4 (mecha>=75) + 3 (riesgoPais>1400) = 12
  assert.strictEqual(motor.saludSupervivencia.paranoia, parInicial + 12);
  // Días en poder debieron avanzar 60
  assert.strictEqual(motor.saludSupervivencia.diasEnPoder, 60);
});

test("Dilemas Médicos y de Seguridad: Integración en Rotación Presidencial y opciones graduadas", () => {
  assert.strictEqual(DILEMAS_SALUD.length, 4, "Deben existir 4 dilemas médicos de supervivencia");

  const esperados = [
    'med_presion_cadena_nacional',
    'med_cambio_chofer_custodia',
    'med_cirugia_bypass_urgente',
    'med_asado_sindical_mollejas'
  ];

  for (const id of esperados) {
    const d = DILEMAS_SALUD.find(item => item.id === id);
    assert.ok(d, `Falta dilema de salud: ${id}`);
    assert.strictEqual(d.opciones.length, 3, `Dilema ${id} debe tener 3 opciones graduadas`);
    for (const op of d.opciones) {
      assert.ok(op.impactoSalud, `Opción de ${id} debe tener impactoSalud`);
      assert.ok(op.impactoSalud.coronarias !== undefined, `Opción de ${id} sin coronarias`);
      assert.ok(op.impactoSalud.paranoia !== undefined, `Opción de ${id} sin paranoia`);
      assert.ok(op.impactoSalud.seguridad !== undefined, `Opción de ${id} sin seguridad`);
    }
  }

  // Verificar que al iniciar fase 'presidente' se intercalan
  const motor = new MotorJuego();
  motor.cargarDilemasDeFase('presidente');
  for (const id of esperados) {
    const hallado = motor.dilemasFase.some(item => item.id === id);
    assert.ok(hallado, `Dilema de salud ${id} no fue intercalado en motor.dilemasFase`);
  }
});

test("Mecánica de Sucesión Presidencial y Continuidad de Mandato", () => {
  const sucesores = ['vicepresidente_enemigo', 'conyuge_heredera', 'ministro_economista'];
  for (const id of sucesores) {
    assert.ok(SUCESORES_PRESIDENCIALES[id], `Falta sucesor ${id}`);
    const suc = SUCESORES_PRESIDENCIALES[id];
    assert.ok(suc.nombre, `Sucesor ${id} sin nombre`);
    assert.ok(suc.rol, `Sucesor ${id} sin rol`);
    assert.ok(suc.modificadores, `Sucesor ${id} sin modificadores`);
    assert.ok(suc.citaInaugural, `Sucesor ${id} sin citaInaugural`);
  }

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'caudillo_historico');

  // Simular fallecimiento
  motor.saludSupervivencia.muertePolitica = CATALOGO_MUERTES.infarto_quincho_olivos;
  assert.ok(motor.saludSupervivencia.muertePolitica);

  // Asumir como Vicepresidente
  const sucElegido = motor.asumirSucesor('vicepresidente_enemigo');
  assert.strictEqual(sucElegido.id, 'vicepresidente_enemigo');
  assert.strictEqual(motor.saludSupervivencia.esSucesor, true);
  assert.strictEqual(motor.saludSupervivencia.sucesorActual.id, 'vicepresidente_enemigo');
  assert.strictEqual(motor.saludSupervivencia.muertePolitica, null, "Al asumir sucesor debe levantarse la muerte y reanudar el mandato");
  assert.strictEqual(motor.saludSupervivencia.coronarias, 85);
  assert.strictEqual(motor.saludSupervivencia.paranoia, 20);
  assert.strictEqual(motor.saludSupervivencia.seguridad, 75);
  // Rosca con gobernadores debió sumar +30 (Caudillo arrancó en 70 + 30 = 100 max)
  assert.strictEqual(motor.termometroCriollo.roscaGobernadores, 100);

  // Diagnóstico final debe incluir saludSupervivencia
  const diag = motor.generarDiagnosticoFinal();
  assert.ok(diag.saludSupervivencia, "Diagnóstico final debe incluir saludSupervivencia");
  assert.strictEqual(diag.saludSupervivencia.esSucesor, true);
});

test("El Reloj Vital: Coeficiente Olivos y escala temporal de envejecimiento acelerado", () => {
  assert.strictEqual(COEFICIENTE_OLIVOS.llano_exilio.multiplicador, 1.0);
  assert.strictEqual(COEFICIENTE_OLIVOS.legislador.multiplicador, 1.2);
  assert.strictEqual(COEFICIENTE_OLIVOS.presidente_paz.multiplicador, 1.5);
  assert.strictEqual(COEFICIENTE_OLIVOS.presidente_crisis.multiplicador, 2.5);

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'maduro_carrera');
  const sys = motor.saludSupervivencia;

  // En paz
  motor.termometroCriollo.mechaSocial = 35;
  motor.termometroCriollo.dolarBlue = 1200;
  motor.macroeconomia.riesgoPais = 1100;
  motor.climaxCrisis = false;
  const coefPaz = sys.calcularCoeficienteOlivos(motor);
  assert.strictEqual(coefPaz.multiplicador, 1.5, "Presidente en paz debe tener multiplicador 1.5");

  // En crisis
  motor.termometroCriollo.mechaSocial = 75;
  const coefCrisis = sys.calcularCoeficienteOlivos(motor);
  assert.strictEqual(coefCrisis.multiplicador, 2.5, "Presidente en crisis debe tener multiplicador 2.5");

  // Avance del reloj vital: 7 días de juego con multiplicador 2.5 envejece 2.5 años
  const edadPrevia = sys.edad;
  const resReloj = sys.avanzarRelojVital(7, motor);
  assert.strictEqual(resReloj.coeficiente.multiplicador, 2.5);
  assert.strictEqual(sys.edad, edadPrevia + 2.5, "Debe envejecer 2.5 años con Coeficiente Olivos de crisis");
  assert.strictEqual(resReloj.huboCumpleanos, true, "A los 7 días de juego debe disparar el evento de cumpleaños");
});

test("Las 4 Barras de Fisiología Política: Coronarias, Digestivo, Cabeza y Vigor Público", () => {
  const barrasEsperadas = ['coronarias', 'digestivo', 'cabeza', 'vigorPublico'];
  for (const b of barrasEsperadas) {
    assert.ok(BARRAS_FISIOLOGICAS[b], `Falta barra fisiológica: ${b}`);
    const obj = BARRAS_FISIOLOGICAS[b];
    assert.ok(obj.nombre && obj.nombre.length > 3, `Barra ${b} sin nombre`);
    assert.ok(obj.desgaste && obj.desgaste.length > 5, `Barra ${b} sin desgaste`);
    assert.ok(obj.regenera && obj.regenera.length > 5, `Barra ${b} sin regenera`);
    assert.ok(obj.consecuenciaCritica && obj.consecuenciaCritica.length > 5, `Barra ${b} sin consecuencia`);
  }

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'maduro_carrera');
  const sys = motor.saludSupervivencia;

  assert.ok(sys.coronarias >= 0 && sys.coronarias <= 100);
  assert.ok(sys.digestivo >= 0 && sys.digestivo <= 100);
  assert.ok(sys.cabeza >= 0 && sys.cabeza <= 100);
  assert.ok(sys.vigorPublico >= 0 && sys.vigorPublico <= 100);
  // Paranoia vinculada inversamente a cabeza
  assert.strictEqual(sys.paranoia, 100 - sys.cabeza, "Paranoia debe ser 100 - cabeza");
});

test("Las 4 Fases Biológicas del Dirigente según la edad", () => {
  const fases = ['joven_promesa', 'animal_raza', 'caudillo_veterano', 'patriarca_eterno'];
  for (const f of fases) {
    assert.ok(FASES_BIOLOGICAS_DIRIGENTE[f], `Falta fase biológica: ${f}`);
    const obj = FASES_BIOLOGICAS_DIRIGENTE[f];
    assert.ok(obj.titulo && obj.titulo.length > 3, `Fase ${f} sin título`);
    assert.ok(obj.ventajas && obj.ventajas.length > 5, `Fase ${f} sin ventajas`);
    assert.ok(obj.vulnerabilidades && obj.vulnerabilidades.length > 5, `Fase ${f} sin vulnerabilidades`);
  }

  const sys = new SistemaSaludSupervivencia({ edad: 38 });
  assert.strictEqual(sys.obtenerFaseBiologica().id, 'joven_promesa');

  sys.edad = 52;
  assert.strictEqual(sys.obtenerFaseBiologica().id, 'animal_raza');

  sys.edad = 66;
  assert.strictEqual(sys.obtenerFaseBiologica().id, 'caudillo_veterano');

  sys.edad = 82;
  assert.strictEqual(sys.obtenerFaseBiologica().id, 'patriarca_eterno');
});

test("La Unidad Médica Presidencial (UMP), Dilema del Quirófano y Botiquín de Emergencia", () => {
  // Médicos
  assert.ok(EQUIPO_UMP_MEDICOS.cardenal_medicina, "Debe existir El Cardenal de la Medicina");
  assert.ok(EQUIPO_UMP_MEDICOS.doctor_militante, "Debe existir El Doctor Militante");

  // Quirófano
  const quirofanos = ['hospital_publico', 'sanatorio_privado', 'vuelo_sanitario_eeuu'];
  for (const q of quirofanos) {
    assert.ok(DILEMAS_QUIROFANO[q], `Falta opción de quirófano: ${q}`);
    assert.ok(DILEMAS_QUIROFANO[q].nombre && DILEMAS_QUIROFANO[q].efectoPolitico);
  }

  // Botiquín
  const acciones = ['subir_dosis', 'pedir_licencia', 'tapar_parte', 'cirugia_express'];
  for (const a of acciones) {
    assert.ok(ACCIONES_BOTIQUIN_UMP[a], `Falta acción de botiquín: ${a}`);
    assert.ok(ACCIONES_BOTIQUIN_UMP[a].nombre && ACCIONES_BOTIQUIN_UMP[a].relato);
  }

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'maduro_carrera');
  const corPrevia = motor.saludSupervivencia.coronarias;

  // Probar [SUBIR LA DOSIS]
  const resDosis = motor.ejecutarAccionBotiquinUMP('subir_dosis');
  assert.ok(resDosis.exito);
  assert.strictEqual(motor.saludSupervivencia.coronarias, corPrevia + 8);
  assert.ok(resDosis.relato.includes("comprimido sublingual"));

  // Probar Quirófano Sanatorio Privado
  const resQui = motor.resolverDilemaQuirofano('sanatorio_privado');
  assert.ok(resQui.exito);
  assert.strictEqual(motor.saludSupervivencia.stentColocado, true);
});

test("Catálogo de Enfermedades del Poder, Chequeo Anual y Brindis de Cumpleaños", () => {
  const enfermedadesEsperadas = [
    'colon_negociacion',
    'sindrome_rivotril',
    'arritmia_helicoptero',
    'paranoia_mozo',
    'neumonia_corte_cinta'
  ];
  for (const e of enfermedadesEsperadas) {
    assert.ok(CATALOGO_ENFERMEDADES_PODER[e], `Falta enfermedad del poder: ${e}`);
    const obj = CATALOGO_ENFERMEDADES_PODER[e];
    assert.ok(obj.nombre && obj.nombre.length > 5, `Enfermedad ${e} sin nombre`);
    assert.ok(obj.sintomas && obj.sintomas.length > 10, `Enfermedad ${e} sin síntomas`);
    assert.ok(obj.efectoJuego && obj.efectoJuego.length > 10, `Enfermedad ${e} sin efectoJuego`);
  }

  // Brindis de cumpleaños
  const brindisEsperados = ['asado_con_tropa', 'chequeo_silencio', 'fiesta_vip_farandula'];
  for (const b of brindisEsperados) {
    assert.ok(OPCIONES_BRINDIS_CUMPLEANOS[b], `Falta opción de brindis: ${b}`);
    assert.ok(OPCIONES_BRINDIS_CUMPLEANOS[b].titulo && OPCIONES_BRINDIS_CUMPLEANOS[b].relato);
  }

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'caudillo_historico');

  // Ejecutar brindis Asado con la Tropa
  const roscaPrevia = motor.termometroCriollo.roscaGobernadores;
  const resBrindis = motor.resolverBrindisCumpleanos('asado_con_tropa');
  assert.ok(resBrindis.exito);
  assert.strictEqual(motor.termometroCriollo.roscaGobernadores, Math.min(100, roscaPrevia + 10));
  assert.ok(resBrindis.relato.includes("cordero patagónico"));

  // Snapshot UMP Dashboard
  const dash = motor.obtenerDashboardUMP();
  assert.ok(dash);
  assert.ok(dash.paciente === "Presidente de la Nación");
  assert.ok(dash.signos.presionTexto);
  assert.ok(dash.barras.coronarias.valor !== undefined);
  assert.ok(dash.barras.digestivo.valor !== undefined);
  assert.ok(dash.barras.cabeza.valor !== undefined);
  assert.ok(dash.barras.vigorPublico.valor !== undefined);
});

// 9. VERIFICACIÓN DE ORÍGENES, TABLERO DE RELACIONES, URNAS PONDERADAS Y ASCENSO
console.log("\n🏛️ 9. VERIFICACIÓN DE TRES PUNTOS DE PARTIDA, TABLERO DE RELACIONES Y URNAS PONDERADAS...");

test("Tres Puntos de Partida: Modo Cuna (0 Años), Modo Barro (28-48 Años) y Modo Presidente", () => {
  // 1. Orígenes de Cuna
  assert.ok(ORIGENES_CUNA.cuna_oro, "Debe existir cuna_oro");
  assert.ok(ORIGENES_CUNA.cuna_popular, "Debe existir cuna_popular");
  assert.ok(ORIGENES_CUNA.dinastia_feudal, "Debe existir dinastia_feudal");

  // Iniciar Modo Cuna - Cuna de Oro
  const motorCunaOro = new MotorJuego();
  motorCunaOro.iniciarModoCuna('cuna_oro');
  assert.strictEqual(motorCunaOro.modoInicio, 'cuna');
  assert.strictEqual(motorCunaOro.faseActual, 'cuna');
  assert.strictEqual(motorCunaOro.saludSupervivencia.edad, 0);
  assert.strictEqual(motorCunaOro.origenElegido.id, 'cuna_oro');
  // Modificador de cuna de oro: claseMedia +15 (50 + 15 = 65)
  assert.strictEqual(motorCunaOro.aprobacionSectores.claseMedia, 65);
  // Modificador dólar blue: -50 (1280 - 50 = 1230)
  assert.strictEqual(motorCunaOro.termometroCriollo.dolarBlue, 1230);

  // Iniciar Modo Cuna - Cuna Popular
  const motorCunaPop = new MotorJuego();
  motorCunaPop.iniciarModoCuna('cuna_popular');
  assert.strictEqual(motorCunaPop.saludSupervivencia.edad, 0);
  // Trabajo +25 (50 + 25 = 75)
  assert.strictEqual(motorCunaPop.aprobacionSectores.trabajo, 75);
  // Mecha social -10 (40 - 10 = 30)
  assert.strictEqual(motorCunaPop.termometroCriollo.mechaSocial, 30);

  // Iniciar Modo Cuna - Dinastía Feudal
  const motorFeudal = new MotorJuego();
  motorFeudal.iniciarModoCuna('dinastia_feudal');
  // Rosca gobernadores +30 (55 + 30 = 85)
  assert.strictEqual(motorFeudal.termometroCriollo.roscaGobernadores, 85);

  // 2. Cargos del Barro
  assert.ok(CARGOS_BARRO.concejal_conurbano, "Debe existir concejal_conurbano");
  assert.ok(CARGOS_BARRO.intendente_interior, "Debe existir intendente_interior");
  assert.ok(CARGOS_BARRO.diputado_provincial, "Debe existir diputado_provincial");

  const motorBarro = new MotorJuego();
  motorBarro.iniciarModoBarro('concejal_conurbano');
  assert.strictEqual(motorBarro.modoInicio, 'barro');
  assert.strictEqual(motorBarro.faseActual, 'militante');
  assert.strictEqual(motorBarro.cargoBarroElegido.id, 'concejal_conurbano');
  assert.ok(motorBarro.saludSupervivencia.edad >= 28 && motorBarro.saludSupervivencia.edad <= 48);

  // 3. Rangos de Presidente
  assert.ok(RANGOS_PRESIDENTE.pibe_disruptivo, "Debe existir pibe_disruptivo");
  assert.ok(RANGOS_PRESIDENTE.candidato_aparato, "Debe existir candidato_aparato");
  assert.ok(RANGOS_PRESIDENTE.patriarca_retornado, "Debe existir patriarca_retornado");

  const motorPibe = new MotorJuego();
  motorPibe.iniciarModoPresidente('pibe_disruptivo');
  assert.strictEqual(motorPibe.modoInicio, 'presidente');
  assert.strictEqual(motorPibe.faseActual, 'presidente');
  assert.strictEqual(motorPibe.rangoPresidenteElegido.id, 'pibe_disruptivo');
  assert.ok(motorPibe.saludSupervivencia.edad >= 31 && motorPibe.saludSupervivencia.edad <= 35);
});

test("Dilemas de Crecimiento (15 y 18 Años) y Dilema de Venta del Alma", () => {
  assert.strictEqual(DILEMAS_CRECIMIENTO.length, 2, "Deben existir 2 dilemas de crecimiento juvenil");
  const d15 = DILEMAS_CRECIMIENTO.find(d => d.id === 'juv_15_anos');
  const d18 = DILEMAS_CRECIMIENTO.find(d => d.id === 'juv_18_anos');
  assert.ok(d15, "Debe existir juv_15_anos");
  assert.ok(d18, "Debe existir juv_18_anos");
  assert.strictEqual(d15.opciones.length, 3, "juv_15_anos debe tener 3 opciones");
  assert.strictEqual(d18.opciones.length, 3, "juv_18_anos debe tener 3 opciones");

  // Verificar carga en fase 'cuna'
  const motor = new MotorJuego();
  motor.iniciarModoCuna('cuna_oro');
  assert.strictEqual(motor.dilemasFase.length, 2);
  assert.strictEqual(motor.dilemasFase[0].id, 'juv_15_anos');
  assert.strictEqual(motor.dilemasFase[1].id, 'juv_18_anos');

  // Aplicar primera decisión juvenil
  motor.aplicarDecision(d15.opciones[0]);
  assert.strictEqual(motor.saludSupervivencia.edad, 15, "Tras primer dilema juvenil debe tener 15 años");

  // Aplicar segunda decisión juvenil
  motor.aplicarDecision(d18.opciones[0]);
  assert.strictEqual(motor.saludSupervivencia.edad, 18, "Tras segundo dilema juvenil debe tener 18 años");

  // Avanzar a siguiente fase
  const avanzable = motor.avanzarSiguienteFase();
  assert.strictEqual(avanzable, 'militante');
  assert.strictEqual(motor.faseActual, 'militante');
  assert.strictEqual(motor.saludSupervivencia.edad, 25, "Al saltar a militante debe tener 25 años");

  // Verificar que el dilema de la Lista Sábana está presente en fase militante
  assert.ok(DISEÑO_VENTA_ALMA = DILEMA_VENTA_ALMA, "DILEMA_VENTA_ALMA debe estar exportado");
  assert.strictEqual(DILEMA_VENTA_ALMA.id, 'asc_lista_sabana_padrino');
  assert.strictEqual(DILEMA_VENTA_ALMA.opciones.length, 3);
  const estaPresente = motor.dilemasFase.some(d => d.id === 'asc_lista_sabana_padrino');
  assert.ok(estaPresente, "DILEMA_VENTA_ALMA debe estar incorporado en los dilemas de fase militante");
});

test("Tablero de Relaciones Faústicas: Los 5 Personajes, Pactos y Traiciones", () => {
  const personajesEsperados = [
    'puntero_tano',
    'financista_nico',
    'comisario_bonaerense',
    'barra_brava_club',
    'operador_comodoro_py'
  ];

  for (const id of personajesEsperados) {
    const p = TABLERO_RELACIONES[id];
    assert.ok(p, `Falta personaje ${id} en TABLERO_RELACIONES`);
    assert.ok(p.nombre, `Personaje ${id} sin nombre`);
    assert.ok(p.apodo, `Personaje ${id} sin apodo`);
    assert.ok(p.rol, `Personaje ${id} sin rol`);
    assert.ok(p.icono, `Personaje ${id} sin icono`);
    assert.ok(p.territorio, `Personaje ${id} sin territorio`);
    assert.ok(p.beneficio, `Personaje ${id} sin beneficio`);
    assert.ok(p.costoOculto, `Personaje ${id} sin costoOculto`);
    assert.ok(p.riesgoExplosion, `Personaje ${id} sin riesgoExplosion`);
    assert.strictEqual(p.pactado, false, `Personaje ${id} debe arrancar sin pactar`);
    assert.ok(p.modificadoresPacto, `Personaje ${id} sin modificadoresPacto`);
    assert.ok(p.costoRuptura, `Personaje ${id} sin costoRuptura`);
  }

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'pibe_maravilla');

  // Pactar con El Tano
  const resTano = motor.pactarConRelacion('puntero_tano');
  assert.strictEqual(resTano.exito, true);
  assert.strictEqual(motor.relaciones.puntero_tano.pactado, true);
  assert.strictEqual(motor.relaciones.puntero_tano.fiscalesAportados, 15);
  // Mecha social debió bajar 15 (40 - 15 = 25)
  assert.strictEqual(motor.termometroCriollo.mechaSocial, 25);
  // Paranoia sube 10 (10 inicial + 10 pacto = 20)
  assert.strictEqual(motor.saludSupervivencia.paranoia, 20);

  // Pactar con Nico
  const resNico = motor.pactarConRelacion('financista_nico');
  assert.strictEqual(resNico.exito, true);
  assert.strictEqual(motor.relaciones.financista_nico.pactado, true);
  // Dólar blue debió bajar 150 (1280 - 150 = 1130)
  assert.strictEqual(motor.termometroCriollo.dolarBlue, 1130);

  // Romper pacto con El Tano
  const resRomper = motor.romperPactoConRelacion('puntero_tano');
  assert.strictEqual(resRomper.exito, true);
  assert.strictEqual(motor.relaciones.puntero_tano.pactado, false);
  // Mecha social sube por traición (+20: 25 + 20 = 45)
  assert.strictEqual(motor.termometroCriollo.mechaSocial, 45);
});

test("Sistema de Urnas Ponderadas: Fórmula, Fiscales, Voto Heladera y Escándalo de Veda", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  // Test 1: Con fiscales activos, baja inflación y contra-opereta
  motor.termometroCriollo.roscaGobernadores = 80; // Garantiza fiscales
  motor.macroeconomia.inflacionMensual = 2.0; // Voto heladera favorable (+3%)

  const sim1 = simularEleccionConUrnas(motor, {
    forzarFiscales: true,
    respuestaVeda: 'contraopereta'
  });

  assert.ok(sim1.pisoDuro > 0, "Piso duro debe ser mayor a 0");
  assert.strictEqual(sim1.tieneFiscales, true, "Debe tener fiscales");
  assert.strictEqual(sim1.boletasRobadas, 0, "Con fiscales no hay robo de boletas");
  assert.strictEqual(sim1.modHeladera, 3.0, "Inflación 2% debe dar +3% de voto heladera");
  assert.strictEqual(sim1.modVeda, 1.0, "Contraopereta debe sumar +1% de veda");
  assert.strictEqual(typeof sim1.votoFinal, 'number');
  assert.strictEqual(typeof sim1.segundoVotos, 'number');
  assert.ok(sim1.votoFinal >= 15 && sim1.votoFinal <= 65);

  // Test 2: Sin fiscales (robo de boletas) y alta inflación (castigo)
  motor.macroeconomia.inflacionMensual = 12.0; // Castigo de -9%
  motor.termometroCriollo.roscaGobernadores = 20;

  const sim2 = simularEleccionConUrnas(motor, {
    forzarFiscales: false,
    respuestaVeda: 'desmentir'
  });

  assert.strictEqual(sim2.tieneFiscales, false, "Sin fiscales");
  assert.ok(sim2.boletasRobadas >= 4 && sim2.boletasRobadas <= 9, "Robo de boletas debe oscilar entre 4% y 9%");
  assert.strictEqual(sim2.modHeladera, -9.0, "Inflación >= 10% debe castigar con -9%");
  assert.strictEqual(sim2.modVeda, -1.0, "Desmentida creíble resta -1%");

  // Test 3: Ejecutar desde el Motor y almacenar en eleccionUrnasActual
  const resultadoMotor = motor.ejecutarEleccionUrnas({ respuestaVeda: 'ignorar' });
  assert.ok(resultadoMotor, "Debe devolver resultado de urna");
  assert.strictEqual(resultadoMotor.modVeda, -3.0, "Ignorar veda cuesta -3%");
  assert.ok(motor.eleccionUrnasActual, "Debe guardar eleccionUrnasActual en motor");
});

test("Muertes de Ascenso en el Barro: Estructura, Placas y Diagnóstico Completo", () => {
  const muertesBarro = ['balacera_comite', 'ajuste_plata_campana', 'susto_femoral'];

  for (const id of muertesBarro) {
    const m = MUERTES_ASCENSO[id];
    assert.ok(m, `Falta muerte de ascenso: ${id}`);
    assert.strictEqual(m.categoria, 'ascenso_violento');
    assert.ok(m.titulo && m.titulo.length > 5);
    assert.ok(m.icono);
    assert.ok(m.descripcionCorta);
    assert.ok(m.relatoDetallado && m.relatoDetallado.length > 50);
    assert.ok(m.placaCronica && m.placaCronica.includes('PLACA ROJA'));
    assert.ok(m.titularLaNacion);
    assert.ok(m.titularPagina12);
    assert.ok(m.epitafio);
    assert.ok(m.legadoPopular);

    // Debe estar replicada en CATALOGO_MUERTES
    assert.ok(CATALOGO_MUERTES[id], `Muerte ${id} no está en CATALOGO_MUERTES`);
  }

  // Diagnóstico final completo con modo, origen, cargo, rango y relaciones
  const motor = new MotorJuego();
  motor.iniciarModoCuna('cuna_popular');
  motor.pactarConRelacion('comisario_bonaerense');
  motor.ejecutarEleccionUrnas({ respuestaVeda: 'ignorar' });

  const diag = motor.generarDiagnosticoFinal();
  assert.strictEqual(diag.modoInicio, 'cuna');
  assert.strictEqual(diag.origenElegido.id, 'cuna_popular');
  assert.ok(diag.relaciones, "Diagnóstico debe incluir relaciones");
  assert.strictEqual(diag.relaciones.comisario_bonaerense.pactado, true);
  assert.ok(diag.eleccionUrnas, "Diagnóstico debe incluir eleccionUrnas");
});

// 10. VERIFICACIÓN DE COMODORO PY, FUEROS, EXPEDIENTES Y VIDA EN EZEIZA
console.log("\n⚖️ 10. VERIFICACIÓN DE COMODORO PY, FUEROS PARLAMENTARIOS Y VIDA EN EZEIZA...");

test("Fases Procesales de una Causa y la Fauna de Comodoro Py (Los 4 Arquetipos)", () => {
  const fasesEsperadas = [
    'denuncia_mediatica',
    'imputacion_inhibicion',
    'indagatoria_escalinatas',
    'procesamiento_simple',
    'procesamiento_preventiva',
    'pedido_desafuero',
    'juicio_oral_casacion'
  ];

  for (let i = 0; i < fasesEsperadas.length; i++) {
    const id = fasesEsperadas[i];
    assert.ok(FASES_PROCESALES[id], `Falta fase procesal ${id}`);
    const f = FASES_PROCESALES[id];
    assert.strictEqual(f.orden, i + 1, `Orden incorrecto para fase ${id}`);
    assert.ok(f.nombre, `Fase ${id} sin nombre`);
    assert.ok(f.subtitulo, `Fase ${id} sin subtítulo`);
    assert.ok(f.icono, `Fase ${id} sin icono`);
    assert.ok(f.color, `Fase ${id} sin color`);
    assert.ok(f.descripcion, `Fase ${id} sin descripción`);
    assert.ok(f.riesgoProcesal > 0, `Fase ${id} sin riesgoProcesal`);
  }

  const arquetiposEsperados = [
    'juez_garrochero',
    'fiscal_halcon',
    'operador_monje_negro',
    'abogado_penalista_estrella'
  ];

  for (const id of arquetiposEsperados) {
    assert.ok(FAUNA_COMODORO_PY[id], `Falta personaje judicial ${id}`);
    const a = FAUNA_COMODORO_PY[id];
    assert.ok(a.nombre, `Personaje ${id} sin nombre`);
    assert.ok(a.apodo, `Personaje ${id} sin apodo`);
    assert.ok(a.rol, `Personaje ${id} sin rol`);
    assert.ok(a.icono, `Personaje ${id} sin icono`);
    assert.ok(a.descripcion, `Personaje ${id} sin descripción`);
    assert.ok(a.comoOpera, `Personaje ${id} sin comoOpera`);
    assert.ok(a.monedaDeCambio, `Personaje ${id} sin monedaDeCambio`);
    assert.ok(a.tarifaRosca > 0, `Personaje ${id} sin tarifaRosca`);
  }
});

test("Mecánica del Cajón Judicial y Ley de la Física Política en Retiro", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  assert.ok(motor.expedienteJudicial, "Motor debe inicializar expedienteJudicial");
  assert.strictEqual(motor.expedienteJudicial.faseActual, 'denuncia_mediatica');
  assert.strictEqual(motor.expedienteJudicial.inhibicionBienes, false);

  // Escenario 1: Imagen alta (>55%) -> La causa duerme por problemas de agenda
  motor.aprobacionSectores.claseMedia = 70;
  motor.aprobacionSectores.trabajo = 65;
  motor.aprobacionSectores.productivo = 65;
  const resAlta = motor.evaluarAvanceJudicial();
  assert.strictEqual(resAlta.avance, 0);
  assert.ok(resAlta.motivo.includes('agenda') || resAlta.motivo.includes('popularidad'));
  assert.strictEqual(motor.expedienteJudicial.faseActual, 'denuncia_mediatica');

  // Escenario 2: Pacto con Ledesma (operador Comodoro Py) -> Causa planchada en el cajón
  motor.pactarConRelacion('operador_comodoro_py');
  motor.aprobacionSectores.claseMedia = 25; // Aun con baja imagen
  motor.termometroCriollo.mechaSocial = 85;
  const resLedesma = motor.evaluarAvanceJudicial();
  assert.strictEqual(resLedesma.avance, 0);
  assert.ok(resLedesma.motivo.includes('Ledesma') || resLedesma.motivo.includes('cajón'));

  // Escenario 3: Romper con Ledesma y crisis (mecha >= 70 o baja imagen) -> El juez desempolva el expediente
  motor.romperPactoConRelacion('operador_comodoro_py');
  const resDesempolve = motor.evaluarAvanceJudicial();
  assert.strictEqual(resDesempolve.avance, 1);
  assert.strictEqual(motor.expedienteJudicial.faseActual, 'imputacion_inhibicion');
  assert.strictEqual(motor.expedienteJudicial.inhibicionBienes, true, "En imputación se decretan inhibiciones");

  // Continuar avance forzado
  motor.expedienteJudicial.avanzarFaseProcesal(motor);
  assert.strictEqual(motor.expedienteJudicial.faseActual, 'indagatoria_escalinatas');
});

test("El Escudo de los Fueros y Pedido de Desafuero en el Recinto (Arts. 68 y 69 CN)", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('diputado', 'maduro_carrera');

  assert.strictEqual(motor.expedienteJudicial.fuerosActivos, true);

  // 1. Doctrina Histórica (Pichetto) con alta rosca: Blindado por el Senado
  motor.termometroCriollo.roscaGobernadores = 65;
  const resPichettoExito = motor.resolverDesafueroRecinto('doctrina_pichetto');
  assert.strictEqual(resPichettoExito.exito, true);
  assert.strictEqual(resPichettoExito.fuerosActivos, true);
  assert.strictEqual(resPichettoExito.enEzeiza, false);
  assert.ok(resPichettoExito.relato.includes('Blindado por el Senado'));

  // 2. Doctrina Pichetto con rosca destrozada: Desafuero aprobado y cárcel
  motor.termometroCriollo.roscaGobernadores = 20;
  const resPichettoFallo = motor.resolverDesafueroRecinto('doctrina_pichetto');
  assert.strictEqual(resPichettoFallo.exito, false);
  assert.strictEqual(resPichettoFallo.fuerosActivos, false);
  assert.strictEqual(resPichettoFallo.enEzeiza, true);

  // 3. Carpetazo a la oposición a medianoche
  const motor2 = new MotorJuego();
  motor2.iniciarPartida('diputado', 'maduro_carrera');
  motor2.termometroCriollo.roscaGobernadores = 50;
  const resCarpetazo = motor2.resolverDesafueroRecinto('carpetazo_oposicion');
  assert.strictEqual(resCarpetazo.exito, true);
  assert.ok(resCarpetazo.relato.includes('quórum'));
});

test("Dilemas Procesales Extremos: El Arrepentido y El Allanamiento Sorpresa", () => {
  assert.strictEqual(DILEMAS_JUDICIALES.length, 2, "Deben existir 2 dilemas judiciales extremos");
  const dCuadernos = DILEMAS_JUDICIALES.find(d => d.id === 'jud_arrepentido_cuadernos');
  const dAllanamiento = DILEMAS_JUDICIALES.find(d => d.id === 'jud_allanamiento_6am');
  assert.ok(dCuadernos, "Debe existir jud_arrepentido_cuadernos");
  assert.ok(dAllanamiento, "Debe existir jud_allanamiento_6am");

  assert.strictEqual(dCuadernos.opciones.length, 3);
  assert.strictEqual(dAllanamiento.opciones.length, 3);

  for (const op of [...dCuadernos.opciones, ...dAllanamiento.opciones]) {
    assert.ok(op.impactoJudicial, "Opción judicial debe tener impactoJudicial");
    assert.ok(op.impacto12Axes, "Opción debe tener impacto12Axes");
    assert.ok(op.impactoSectores, "Opción debe tener impactoSectores");
    assert.ok(op.impactoSalud, "Opción debe tener impactoSalud");
  }

  // Verificar intercalado en fase 'diputado'
  const motorDip = new MotorJuego();
  motorDip.iniciarPartida('diputado', 'maduro_carrera');
  const estaCuadernos = motorDip.dilemasFase.some(d => d.id === 'jud_arrepentido_cuadernos');
  assert.ok(estaCuadernos, "jud_arrepentido_cuadernos debe estar intercalado en fase diputado");

  // Verificar intercalado en fase 'presidente'
  const motorPres = new MotorJuego();
  motorPres.iniciarPartida('presidente', 'candidato_aparato');
  const estaAllanamiento = motorPres.dilemasFase.some(d => d.id === 'jud_allanamiento_6am');
  assert.ok(estaAllanamiento, "jud_allanamiento_6am debe estar intercalado en fase presidente");

  // Aplicar opción con avance procesal
  const parInicial = motorDip.saludSupervivencia.paranoia;
  motorDip.aplicarDecision(dCuadernos.opciones[0]); // Opción A tiene avanceCausa: +1
  assert.ok(motorDip.saludSupervivencia.paranoia >= parInicial);
});

test("Vida Carcelaria en Ezeiza (IRIC / VIP) y los Tres Destinos Finales en la Justicia", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  // Enviar a Ezeiza
  motor.expedienteJudicial.enEzeiza = true;
  motor.expedienteJudicial.fuerosActivos = false;

  // 1. Acción: Hacerse fuerte en el penal
  const resPenal = motor.ejecutarAccionCarcelEzeiza('hacerse_fuerte_penal');
  assert.strictEqual(resPenal.enEzeiza, true);
  assert.ok(resPenal.moralPabellon > 50);
  assert.ok(resPenal.relato.includes('jefe político'));

  // 2. Acción: Certificado médico trucho para prisión domiciliaria
  const resDomiciliaria = motor.ejecutarAccionCarcelEzeiza('certificado_medico_domiciliaria');
  assert.strictEqual(resDomiciliaria.enDomiciliaria, true);
  assert.strictEqual(resDomiciliaria.enEzeiza, false);
  assert.ok(resDomiciliaria.relato.includes('domiciliaria'));

  // 3. Los Tres Destinos Finales
  assert.ok(DESTINOS_JUDICIALES.condena_firme);
  assert.ok(DESTINOS_JUDICIALES.fallo_madrugada);
  assert.ok(DESTINOS_JUDICIALES.prescripcion_biologica);

  assert.ok(DESTINOS_JUDICIALES.condena_firme.epitafioJudicial);
  assert.ok(DESTINOS_JUDICIALES.fallo_madrugada.epitafioJudicial);
  assert.ok(DESTINOS_JUDICIALES.prescripcion_biologica.epitafioJudicial);

  // Forzar Prescripción Biológica (Esquema Menem) tras 12 años
  motor.expedienteJudicial.aniosEnProceso = 13;
  motor.expedienteJudicial.enEzeiza = false;
  const resPrescrip = motor.evaluarAvanceJudicial();
  assert.ok(motor.expedienteJudicial.destinoFinal);
  assert.strictEqual(motor.expedienteJudicial.destinoFinal.id, 'prescripcion_biologica');

  // Diagnóstico final debe incluir expedienteJudicial
  const diag = motor.generarDiagnosticoFinal();
  assert.ok(diag.expedienteJudicial, "Diagnóstico final debe incluir expedienteJudicial");
  assert.strictEqual(diag.expedienteJudicial.destinoFinal.id, 'prescripcion_biologica');
});

// 11. VERIFICACIÓN DE "LA CASA" (CALLE 25 DE MAYO), LA SIDE Y FONDOS RESERVADOS
console.log("\n🕵️ 11. VERIFICACIÓN DE 'LA CASA' (CALLE 25 DE MAYO), LA SIDE Y FONDOS RESERVADOS...");

test("Estructura de 'La Casa' (Calle 25 de Mayo): Señor 5, Señor 8 y 4 Brazos Operativos", () => {
  assert.ok(ESTRUCTURA_CASA_SIDE.sr5, "Debe existir Señor 5");
  assert.ok(ESTRUCTURA_CASA_SIDE.sr8, "Debe existir Señor 8");
  assert.strictEqual(ESTRUCTURA_CASA_SIDE.sr5.codigo, "Señor 5");
  assert.strictEqual(ESTRUCTURA_CASA_SIDE.sr8.codigo, "Señor 8");
  assert.ok(ESTRUCTURA_CASA_SIDE.sr5.lealtadBase > 80, "Señor 5 debe tener alta lealtad inicial");
  assert.ok(ESTRUCTURA_CASA_SIDE.sr8.lealtadBase <= 60, "Señor 8 debe tener lealtad moderada/autonomía");

  const brazos = ['agencia_exterior', 'ciberespionaje_granjas', 'contrainteligencia', 'inorganicos'];
  for (const b of brazos) {
    assert.ok(ESTRUCTURA_CASA_SIDE.brazosOperativos[b], `Falta brazo operativo ${b}`);
    assert.ok(ESTRUCTURA_CASA_SIDE.brazosOperativos[b].nombre, `Brazo ${b} sin nombre`);
    assert.ok(ESTRUCTURA_CASA_SIDE.brazosOperativos[b].icono, `Brazo ${b} sin icono`);
    assert.ok(ESTRUCTURA_CASA_SIDE.brazosOperativos[b].especialidad, `Brazo ${b} sin especialidad`);
  }
});

test("Fondos Reservados: Los 5 Usos Directos y el Peligro de la Comisión Bicameral", () => {
  const usosEsperados = [
    'comprar_tapa_domingo',
    'operacion_banelco',
    'financiar_granjas_trolls',
    'sobresueldo_juez_federal',
    'calmar_inorganicos'
  ];

  for (const u of usosEsperados) {
    const uso = USOS_FONDOS_RESERVADOS[u];
    assert.ok(uso, `Falta uso de fondos reservados: ${u}`);
    assert.ok(uso.costo > 0, `Uso ${u} debe tener costo en dólares`);
    assert.ok(uso.descripcion, `Uso ${u} debe tener descripción`);
    assert.ok(uso.relato, `Uso ${u} debe tener relato`);
    assert.ok(uso.impactoSospechaBicameral > 0, `Uso ${u} debe aumentar sospecha bicameral`);
  }

  // Simular gasto de fondos y aumento de sospecha
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');
  assert.ok(motor.sistemaSIDE, "MotorJuego debe instanciar sistemaSIDE");

  const fondosIniciales = motor.sistemaSIDE.fondosReservados;
  const resGasto = motor.gastarFondosReservadosSIDE('comprar_tapa_domingo');
  assert.strictEqual(resGasto.exito, true);
  assert.ok(resGasto.fondosRestantes < fondosIniciales);
  assert.ok(resGasto.sospechaBicameral > 25);
  assert.ok(resGasto.relato.includes('domingo'));
});

test("El Menú de Operaciones Negras y la Ley del Boomerang de los Espías", () => {
  const opsEsperadas = [
    'pinchadura_linea',
    'carpetazo_preventivo',
    'plantado_pruebas',
    'operacion_desgaste',
    'mensaje_manija'
  ];

  for (const opId of opsEsperadas) {
    const op = OPERACIONES_NEGRAS[opId];
    assert.ok(op, `Falta operación negra ${opId}`);
    assert.ok(op.nombre, `Operación ${opId} sin nombre`);
    assert.ok(op.objetivo, `Operación ${opId} sin objetivo`);
    assert.ok(op.costoFondos > 0, `Operación ${opId} sin costo`);
    assert.ok(op.riesgoFiltracion > 0, `Operación ${opId} sin riesgo`);
    assert.ok(op.efectoExito, `Operación ${opId} sin efectoExito`);
    assert.ok(op.efectoFallo, `Operación ${opId} sin efectoFallo`);
  }

  // Ley del Boomerang
  assert.ok(EVENTOS_BOOMERANG_SIDE.extorsion_sr8, "Debe existir evento extorsión del Señor 8");
  assert.ok(EVENTOS_BOOMERANG_SIDE.doble_juego_embajadas, "Debe existir evento doble juego de embajadas");
  assert.ok(EVENTOS_BOOMERANG_SIDE.mano_obra_desocupada, "Debe existir evento mano de obra desocupada");

  // Evaluar Boomerang con Señor 8 resentido
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');
  motor.sistemaSIDE.lealtadSr8 = 30;
  motor.sistemaSIDE.fondosReservados = 1000000;
  const boom = motor.evaluarLeyBoomerangSIDE();
  assert.ok(boom, "Debe detonar evento boomerang");
  assert.strictEqual(boom.id, 'extorsion_sr8');
});

test("Los 3 Dilemas de Inteligencia e Intercalado en Mandato Presidencial", () => {
  assert.strictEqual(DILEMAS_INTELIGENCIA.length, 3, "Deben existir 3 dilemas de inteligencia");
  const dDNU = DILEMAS_INTELIGENCIA.find(d => d.id === 'dilema_dnu_fondos_reservados');
  const dChats = DILEMAS_INTELIGENCIA.find(d => d.id === 'dilema_hackeo_ruso_bariloche');
  const dAtentado = DILEMAS_INTELIGENCIA.find(d => d.id === 'dilema_atentado_copitos');

  assert.ok(dDNU, "Falta dilema_dnu_fondos_reservados");
  assert.ok(dChats, "Falta dilema_hackeo_ruso_bariloche");
  assert.ok(dAtentado, "Falta dilema_atentado_copitos");

  assert.strictEqual(dDNU.opciones.length, 3);
  assert.strictEqual(dChats.opciones.length, 3);
  assert.strictEqual(dAtentado.opciones.length, 3);

  // Verificar intercalado en fase 'presidente'
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');
  const tieneDNU = motor.dilemasFase.some(d => d.id === 'dilema_dnu_fondos_reservados');
  const tieneChats = motor.dilemasFase.some(d => d.id === 'dilema_hackeo_ruso_bariloche');
  const tieneAtentado = motor.dilemasFase.some(d => d.id === 'dilema_atentado_copitos');

  assert.ok(tieneDNU, "dilema_dnu_fondos_reservados debe estar intercalado en presidente");
  assert.ok(tieneChats, "dilema_hackeo_ruso_bariloche debe estar intercalado en presidente");
  assert.ok(tieneAtentado, "dilema_atentado_copitos debe estar intercalado en presidente");

  // Aplicar opción A del DNU (Valija en el Senado)
  motor.aplicarDecision(dDNU.opciones[0]);
  assert.ok(motor.sistemaSIDE.sospechaBicameral > 25);
});

test("Citación de la Bicameral, Apagón de Servicios y Diagnóstico Final de la SIDE", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  // 1. Responder citación enviando al Señor 5
  motor.sistemaSIDE.lealtadSr5 = 85;
  const resBicameral = motor.resolverCitacionBicameralSIDE('enviar_sr5_declarar');
  assert.strictEqual(resBicameral.exito, true);
  assert.strictEqual(resBicameral.apagonInteligencia, false);

  // 2. Apagón de Inteligencia
  motor.sistemaSIDE.apagonInteligencia = true;
  const intentoOp = motor.ejecutarOperacionNegraSIDE('pinchadura_linea');
  assert.strictEqual(intentoOp.exito, false);
  assert.ok(intentoOp.motivo.includes('Apagón de Inteligencia'));

  // 3. Tres Destinos Finales
  assert.ok(DESTINOS_INTELIGENCIA_FINAL.el_titiritero_de_las_sombras);
  assert.ok(DESTINOS_INTELIGENCIA_FINAL.victima_del_carpetazo_interno);
  assert.ok(DESTINOS_INTELIGENCIA_FINAL.apagon_republicano_ciego);

  // Diagnóstico final debe incluir sistemaSIDE
  const diag = motor.generarDiagnosticoFinal();
  assert.ok(diag.sistemaSIDE, "Diagnóstico final debe incluir sistemaSIDE");
  assert.ok(diag.sistemaSIDE.destinoFinal, "Debe contener destinoFinal de inteligencia");
  assert.strictEqual(diag.sistemaSIDE.destinoFinal.id, 'apagon_republicano_ciego');
});

// 12. VERIFICACIÓN DE CANCILLERÍA, GEOPOLÍTICA Y EL TABLERO INTERNACIONAL
console.log("\n🌐 12. VERIFICACIÓN DE CANCILLERÍA, GEOPOLÍTICA Y EL TABLERO INTERNACIONAL...");

test("Las 4 Fuerzas del Tablero Internacional y la Fauna Diplomática", () => {
  // 1. Las 4 Fuerzas Internacionales
  assert.ok(FUERZAS_INTERNACIONALES.fmi, "Falta El Fondo Monetario Internacional (FMI)");
  assert.ok(FUERZAS_INTERNACIONALES.embajada_eeuu, "Falta La Embajada de EE.UU. (Palacio Bosch)");
  assert.ok(FUERZAS_INTERNACIONALES.china_pboc, "Falta La República Popular China (PBOC)");
  assert.ok(FUERZAS_INTERNACIONALES.brasil_itamaraty, "Falta Brasil e Itamaraty");

  assert.ok(FUERZAS_INTERNACIONALES.fmi.queQuiere && FUERZAS_INTERNACIONALES.fmi.suArma);
  assert.ok(FUERZAS_INTERNACIONALES.embajada_eeuu.queQuiere && FUERZAS_INTERNACIONALES.embajada_eeuu.suArma);
  assert.ok(FUERZAS_INTERNACIONALES.china_pboc.queQuiere && FUERZAS_INTERNACIONALES.china_pboc.suArma);
  assert.ok(FUERZAS_INTERNACIONALES.brasil_itamaraty.queQuiere && FUERZAS_INTERNACIONALES.brasil_itamaraty.suArma);

  // 2. La Fauna Diplomática
  assert.ok(FAUNA_DIPLOMATICA.jefe_mision_fmi, "Falta El Técnico Europeo de Traje Gris (FMI)");
  assert.ok(FAUNA_DIPLOMATICA.embajador_eeuu, "Falta El Virrey de Palermo Chico (EE.UU.)");
  assert.ok(FAUNA_DIPLOMATICA.enlace_pekin, "Falta El Enlace de Negocios de Pekín");
  assert.ok(FAUNA_DIPLOMATICA.jueza_ny, "Falta La Jueza de Nueva York (Griesa/Preska)");
  assert.ok(FAUNA_DIPLOMATICA.canciller_brasil, "Falta El Diplomático de Itamaraty");
});

test("Variables Geopolíticas y la Clase SistemaGeopolitica", () => {
  const geo = new SistemaGeopolitica();
  assert.strictEqual(geo.semaforoSwap, "verde", "Semáforo del swap inicia en verde");
  assert.strictEqual(geo.barometroAlineamiento, 0, "Barómetro de alineamiento inicia en 0 (equilibrio)");
  assert.strictEqual(geo.posicionFMI, "revision_pendiente", "Posición del FMI inicia en revisión pendiente");
  assert.strictEqual(geo.diasVencimientoFMI, 11, "Días para vencimiento FMI inicia en 11");
  assert.strictEqual(geo.relacionBrasil, 50, "Relación con Brasil inicia en 50");
  assert.strictEqual(geo.tensionEmbargosNY, 25, "Tensión de embargos inicia en 25");

  // Cables diplomáticos
  assert.ok(geo.cablesDiplomaticos.length > 0, "Debe inicializarse con cable diplomático inicial");
  geo.agregarCable("Consulado", "Alerta por aranceles", "URGENTE");
  assert.strictEqual(geo.cablesDiplomaticos[0].emisor, "Consulado");

  // Audiencias pendientes
  assert.strictEqual(geo.audienciasPendientes.length, 4, "Deben existir 4 audiencias diplomáticas en el despacho");

  const resumen = geo.obtenerResumen();
  assert.ok(resumen.semaforoSwap && resumen.posicionFMI && resumen.cablesCount !== undefined);
});

test("Los 3 Mega-Dilemas Geopolíticos de 4 Caminos e Intercalado Presidencial", () => {
  assert.strictEqual(DILEMAS_GEOPOLITICA.length, 3, "Deben existir exactamente 3 dilemas geopolíticos");
  const dSwap = DILEMAS_GEOPOLITICA.find(d => d.id === 'dilema_swap_apriete_washington');
  const dHidrovia = DILEMAS_GEOPOLITICA.find(d => d.id === 'dilema_licitacion_hidrovia');
  const dFMI = DILEMAS_GEOPOLITICA.find(d => d.id === 'dilema_mision_fmi_rodrigazo');

  assert.ok(dSwap, "Falta dilema_swap_apriete_washington");
  assert.ok(dHidrovia, "Falta dilema_licitacion_hidrovia");
  assert.ok(dFMI, "Falta dilema_mision_fmi_rodrigazo");

  // Cada mega-dilema debe tener exactamente 4 opciones de decisión
  assert.strictEqual(dSwap.opciones.length, 4, "El dilema del Swap debe tener 4 opciones");
  assert.strictEqual(dHidrovia.opciones.length, 4, "El dilema de la Hidrovía debe tener 4 opciones");
  assert.strictEqual(dFMI.opciones.length, 4, "El dilema del FMI debe tener 4 opciones");

  // Verificar intercalado en el mandato presidencial
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');
  const tieneSwap = motor.dilemasFase.some(d => d.id === 'dilema_swap_apriete_washington');
  const tieneHidrovia = motor.dilemasFase.some(d => d.id === 'dilema_licitacion_hidrovia');
  const tieneFMI = motor.dilemasFase.some(d => d.id === 'dilema_mision_fmi_rodrigazo');

  assert.ok(tieneSwap, "dilema_swap_apriete_washington debe estar intercalado en la presidencia");
  assert.ok(tieneHidrovia, "dilema_licitacion_hidrovia debe estar intercalado en la presidencia");
  assert.ok(tieneFMI, "dilema_mision_fmi_rodrigazo debe estar intercalado en la presidencia");

  // Aplicar Opción A del Swap (Romper con China, alinearse con Washington)
  motor.aplicarDecision(dSwap.opciones[0]);
  assert.strictEqual(motor.sistemaGeopolitica.semaforoSwap, "rojo", "Swap debe quedar en rojo al romper con Pekín");
  assert.strictEqual(motor.sistemaGeopolitica.posicionFMI, "staff_level_agreement", "FMI debe aprobar staff level agreement");
  assert.ok(motor.sistemaGeopolitica.barometroAlineamiento > 25, "Barómetro debe virar fuertemente a Occidente");
});

test("Acciones Diplomáticas Directas y Eventos Geopolíticos Extremos", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  // 1. Acciones Diplomáticas Directas
  assert.ok(ACCIONES_DIPLOMATICAS.pedir_waiver_fmi, "Falta pedir_waiver_fmi");
  assert.ok(ACCIONES_DIPLOMATICAS.activar_tramo_swap_china, "Falta activar_tramo_swap_china");
  assert.ok(ACCIONES_DIPLOMATICAS.audiencia_reservada_palacio_bosch, "Falta audiencia_reservada_palacio_bosch");
  assert.ok(ACCIONES_DIPLOMATICAS.cumbre_bilateral_itamaraty, "Falta cumbre_bilateral_itamaraty");

  const resAccion = motor.ejecutarAccionDiplomatica('activar_tramo_swap_china');
  assert.strictEqual(resAccion.exito, true, "Activación de swap debe ejecutarse con éxito");
  assert.strictEqual(motor.sistemaGeopolitica.semaforoSwap, "verde");

  // 2. Eventos Extremos (Fragata 2.0 y Mercosur)
  assert.ok(EVENTOS_EXTREMOS_GEOPOLITICA.embargo_exterior_fragata);
  assert.ok(EVENTOS_EXTREMOS_GEOPOLITICA.bloqueo_sanitario_soja);
  assert.ok(EVENTOS_EXTREMOS_GEOPOLITICA.suspension_mercosur);
  assert.ok(EVENTOS_EXTREMOS_GEOPOLITICA.waiver_humillante_washington);

  // Provocar tensión extrema de embargos en NY
  motor.sistemaGeopolitica.tensionEmbargosNY = 85;
  const evs = motor.evaluarEventosExtremosGeopolitica();
  assert.ok(evs.some(e => e.id === 'embargo_exterior_fragata'), "Debe detonarse el embargo en el exterior (Fragata 2.0)");

  // Provocar colapso de relación con Brasil
  motor.sistemaGeopolitica.relacionBrasil = -60;
  const evs2 = motor.evaluarEventosExtremosGeopolitica();
  assert.ok(evs2.some(e => e.id === 'suspension_mercosur'), "Debe detonarse la suspensión del Mercosur");
});

test("Destinos Geopolíticos Finales y Diagnóstico Integrado", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  // Cuatro destinos finales
  assert.ok(DESTINOS_GEOPOLITICA_FINAL.satelite_washington);
  assert.ok(DESTINOS_GEOPOLITICA_FINAL.colonia_pekin);
  assert.ok(DESTINOS_GEOPOLITICA_FINAL.aislacionismo_default);
  assert.ok(DESTINOS_GEOPOLITICA_FINAL.malabarista_no_alineamiento);

  // Diagnóstico final debe incluir sistemaGeopolitica y destinoGeopoliticaFinal
  const diag = motor.generarDiagnosticoFinal();
  assert.ok(diag.sistemaGeopolitica, "Diagnóstico final debe incluir resumen de Cancillería");
  assert.ok(diag.destinoGeopoliticaFinal, "Diagnóstico final debe incluir destino geopolítico");
  assert.strictEqual(diag.destinoGeopoliticaFinal.id, 'malabarista_no_alineamiento', "Perfil inicial equilibrado diagnostica Malabarista");
});

// 13. PRUEBAS DEL SISTEMA DE GABINETE NACIONAL, INTERNAS DE PALACIO Y FUSIBLES POLÍTICOS
console.log("\n🏛️ 13. AUDITORÍA DEL GABINETE NACIONAL, INTERNAS Y FUSIBLES POLÍTICOS...");

test("Los 6 Asientos Calientes de la Casa Rosada y Fauna de Pasillo", () => {
  const carterasEsperadas = ['economia', 'jefe_gabinete', 'interior', 'seguridad', 'capital_humano', 'legal_tecnica'];
  for (const c of carterasEsperadas) {
    assert.ok(CARTERAS_GABINETE[c], `Falta la cartera ${c}`);
    assert.ok(CARTERAS_GABINETE[c].cargo, `Cartera ${c} sin cargo`);
    assert.ok(CARTERAS_GABINETE[c].apodo, `Cartera ${c} sin apodo`);
    assert.ok(CARTERAS_GABINETE[c].titular, `Cartera ${c} sin titular inicial`);
    assert.ok(CARTERAS_GABINETE[c].padrino, `Cartera ${c} sin padrino`);
    assert.ok(['bajo', 'medio', 'alto'].includes(CARTERAS_GABINETE[c].pesoPolitico), `Peso político inválido en ${c}`);
  }

  // Dinámicas de pasillo
  assert.ok(INCIDENTES_PASILLO.off_the_record, "Falta incidente off_the_record");
  assert.ok(INCIDENTES_PASILLO.pisar_expediente, "Falta incidente pisar_expediente");
  assert.ok(INCIDENTES_PASILLO.segundas_lineas, "Falta incidente segundas_lineas");
  assert.ok(INCIDENTES_PASILLO.renuncia_a_disposicion, "Falta incidente renuncia_a_disposicion");
  assert.ok(INCIDENTES_PASILLO.carta_ocho_carillas, "Falta incidente carta_ocho_carillas");
});

test("Inicialización del SistemaGabinete y Estado de Ministros", () => {
  const sis = new SistemaGabinete();
  assert.ok(sis.ministros.economia, "Debe inicializar Min. Economía");
  assert.ok(sis.ministros.jefe_gabinete, "Debe inicializar Jefe de Gabinete");
  assert.ok(sis.ministros.interior, "Debe inicializar Min. Interior");
  assert.ok(sis.ministros.seguridad, "Debe inicializar Min. Seguridad");
  assert.ok(sis.ministros.capital_humano, "Debe inicializar Min. Capital Humano");
  assert.ok(sis.ministros.legal_tecnica, "Debe inicializar Sec. Legal y Técnica");

  const mEco = sis.ministros.economia;
  assert.strictEqual(mEco.lealtad, 50, "Lealtad base economía debe ser 50");
  assert.strictEqual(mEco.desgaste, 45, "Desgaste base economía debe ser 45");
  assert.strictEqual(mEco.eficacia, 65, "Eficacia base economía debe ser 65");
  assert.strictEqual(mEco.fusibleQuemado, false, "Inicialmente no debe estar quemado");
  assert.strictEqual(sis.renunciasActivas.length, 0, "No debe haber renuncias activas iniciales");
});

test("Dilemas de Gabinete de 4 Caminos e Intercalado en Mandato", () => {
  assert.strictEqual(DILEMAS_GABINETE.length, 3, "Deben existir exactamente 3 dilemas de gabinete");
  const dYate = DILEMAS_GABINETE.find(d => d.id === 'dilema_gabinete_yate_mediterraneo');
  const dChoque = DILEMAS_GABINETE.find(d => d.id === 'dilema_gabinete_choque_economia_seguridad');
  const dClamor = DILEMAS_GABINETE.find(d => d.id === 'dilema_gabinete_operativo_clamor_estrella');

  assert.ok(dYate, "Falta dilema_gabinete_yate_mediterraneo");
  assert.ok(dChoque, "Falta dilema_gabinete_choque_economia_seguridad");
  assert.ok(dClamor, "Falta dilema_gabinete_operativo_clamor_estrella");

  assert.strictEqual(dYate.opciones.length, 4, "Dilema Yate debe tener 4 opciones");
  assert.strictEqual(dChoque.opciones.length, 4, "Dilema Choque debe tener 4 opciones");
  assert.strictEqual(dClamor.opciones.length, 4, "Dilema Clamor debe tener 4 opciones");

  // Verificar intercalado en motor
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');
  const tieneYate = motor.dilemasFase.some(d => d.id === 'dilema_gabinete_yate_mediterraneo');
  const tieneChoque = motor.dilemasFase.some(d => d.id === 'dilema_gabinete_choque_economia_seguridad');
  const tieneClamor = motor.dilemasFase.some(d => d.id === 'dilema_gabinete_operativo_clamor_estrella');

  assert.ok(tieneYate, "dilema Yate debe estar intercalado");
  assert.ok(tieneChoque, "dilema Choque debe estar intercalado");
  assert.ok(tieneClamor, "dilema Clamor debe estar intercalado");

  // Aplicar opción del dilema de Clamor que detona renuncia
  const lealtadPre = motor.sistemaGabinete.ministros.economia.lealtad;
  motor.aplicarDecision(dClamor.opciones[1]); // Opción B: Intervenir ministerio
  assert.ok(motor.sistemaGabinete.ministros.economia.lealtad < lealtadPre, "Lealtad de economía debe caer");
  assert.ok(motor.sistemaGabinete.ministros.economia.renunciaPresentada, "Debe detonar renuncia de economía");
  assert.ok(motor.sistemaGabinete.renunciasActivas.includes('economia'), "Economía debe estar en renunciasActivas");
});

test("Acciones Tácticas del Gabinete, Renuncias y Eyeción de Fusibles", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  assert.ok(ACCIONES_GABINETE.echar_fusible_ministro);
  assert.ok(ACCIONES_GABINETE.cumbre_olivos_medialunas);
  assert.ok(ACCIONES_GABINETE.girar_atn_gobernadores);
  assert.ok(ACCIONES_GABINETE.carpetazo_disciplinador_side);

  // 1. Cumbre de Olivos
  const resCumbre = motor.ejecutarAccionGabinete('cumbre_olivos_medialunas');
  assert.strictEqual(resCumbre.exito, true);

  // 2. Giro de ATN
  motor.sistemaGabinete.ministros.interior.lealtad = 20;
  motor.sistemaGabinete.ministros.interior.renunciaPresentada = true;
  motor.sistemaGabinete.renunciasActivas.push('interior');
  const resATN = motor.ejecutarAccionGabinete('girar_atn_gobernadores');
  assert.strictEqual(resATN.exito, true);
  assert.strictEqual(motor.sistemaGabinete.ministros.interior.renunciaPresentada, false, "ATN frena la renuncia del Interior");

  // 3. Echar fusible (Fusilamiento político)
  const resEchar = motor.ejecutarAccionGabinete('echar_fusible_ministro', { ministroId: 'capital_humano' });
  assert.strictEqual(resEchar.exito, true);
  assert.strictEqual(motor.sistemaGabinete.fusiblesQuemadosCount, 1, "Debe incrementar fusibles quemados");
  assert.notStrictEqual(motor.sistemaGabinete.ministros.capital_humano.titular, CARTERAS_GABINETE.capital_humano.titular, "Debe nombrarse un sucesor");

  // 4. Resolver renuncia
  motor.sistemaGabinete.ministros.seguridad.renunciaPresentada = true;
  motor.sistemaGabinete.renunciasActivas.push('seguridad');
  const resRechazo = motor.resolverRenunciaGabinete('seguridad', 'rechazar');
  assert.strictEqual(resRechazo.exito, true);
  assert.strictEqual(motor.sistemaGabinete.ministros.seguridad.renunciaPresentada, false, "Rechazar ratifica al ministro");
});

test("Destinos de Gabinete Finales y Diagnóstico Integrado", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  assert.ok(DESTINOS_GABINETE_FINAL.titiritero_salon_blanco);
  assert.ok(DESTINOS_GABINETE_FINAL.rehen_ministros_pato_rengo);
  assert.ok(DESTINOS_GABINETE_FINAL.cementerio_fusibles);
  assert.ok(DESTINOS_GABINETE_FINAL.gobierno_de_coalicion_armonica);

  // Diagnóstico general
  const diag = motor.generarDiagnosticoFinal();
  assert.ok(diag.sistemaGabinete, "Diagnóstico final debe incluir resumen de Gabinete");
  assert.ok(diag.destinoGabineteFinal, "Diagnóstico final debe incluir destino final de Gabinete");

  // Si quemamos 3 fusibles
  motor.sistemaGabinete.fusiblesQuemadosCount = 3;
  const destQuemado = motor.sistemaGabinete.diagnosticarDestinoFinal(motor);
  assert.strictEqual(destQuemado.id, 'cementerio_fusibles', "3 fusibles quemados debe dar Cementerio de Fusibles");
});

// 14. PRUEBAS DEL SISTEMA DE MEDIOS, PAUTA OFICIAL, CONFERENCIAS Y ENTREVISTAS TRAMPA
console.log("\n📺 14. AUDITORÍA DE MEDIOS, PAUTA OFICIAL, CONFERENCIAS 9 AM Y PRIME TIME...");

test("Esquemas de Pauta Oficial y los 4 Bolsillos Mediáticos", () => {
  assert.ok(ESQUEMAS_PAUTA.pauta_cero, "Falta pauta_cero");
  assert.ok(ESQUEMAS_PAUTA.esquema_tradicional, "Falta esquema_tradicional");
  assert.ok(ESQUEMAS_PAUTA.pauta_barrani_ypf, "Falta pauta_barrani_ypf");

  const bolsillosEsperados = ['multimedios_concentrados', 'ecosistema_militante', 'frente_streaming', 'radios_interior'];
  for (const b of bolsillosEsperados) {
    assert.ok(BOLSILLOS_MEDIOS[b], `Falta el bolsillo ${b}`);
    assert.ok(BOLSILLOS_MEDIOS[b].nombre, `Bolsillo ${b} sin nombre`);
    assert.ok(BOLSILLOS_MEDIOS[b].siPagas, `Bolsillo ${b} sin siPagas`);
    assert.ok(BOLSILLOS_MEDIOS[b].siCortas, `Bolsillo ${b} sin siCortas`);
  }

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');
  assert.ok(motor.sistemaMedios, "Motor debe inicializar sistemaMedios");

  // Cambiar a Pauta Cero
  const resPautaCero = motor.cambiarEsquemaPauta('pauta_cero');
  assert.strictEqual(resPautaCero.exito, true);
  assert.strictEqual(motor.sistemaMedios.esquemaPauta, 'pauta_cero');
  assert.strictEqual(motor.sistemaMedios.pautaPresupuestoFormalM, 0);

  // Toggle de bolsillo
  const resToggle = motor.toggleBolsilloPauta('frente_streaming');
  assert.strictEqual(resToggle.exito, true);
  assert.strictEqual(motor.sistemaMedios.bolsillosFinanciados.frente_streaming, true);
});

test("Conferencia Matutina de las 9:00 AM y Fauna de Acreditados", () => {
  const acreditadosEsperados = ['militante_comunitaria', 'cronista_tradicional', 'tiracentros_amigo', 'pasante_bloomberg'];
  for (const a of acreditadosEsperados) {
    assert.ok(FAUNA_ACREDITADOS[a], `Falta acreditado ${a}`);
    assert.ok(FAUNA_ACREDITADOS[a].pregunta, `Acreditado ${a} sin pregunta`);
  }

  const respuestasEsperadas = ['domada_ironica', 'tecnicismo_aburrido', 'contraataque_personal', 'respuesta_institucional'];
  for (const r of respuestasEsperadas) {
    assert.ok(RESPUESTAS_CONFERENCIA[r], `Falta respuesta ${r}`);
  }

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  // Ejecutar respuesta irónica ("Fin")
  const blindajePre = motor.sistemaMedios.blindajeMediatico;
  const resConf = motor.ejecutarConferenciaPrensa('cronista_tradicional', 'domada_ironica');
  assert.strictEqual(resConf.exito, true);
  assert.ok(motor.sistemaMedios.granjasTrollsCapacidad > 60, "Domada debe subir capacidad de granjas");
});

test("Entrevistas Trampa del Prime Time y Ruleta Rusa", () => {
  const programasEsperados = ['mesaza_domingo', 'mano_a_mano_halcon', 'tribunal_fuego', 'stream_relajado'];
  for (const p of programasEsperados) {
    assert.ok(ENTREVISTAS_PRIME_TIME[p], `Falta programa ${p}`);
    assert.ok(ENTREVISTAS_PRIME_TIME[p].trampa, `Programa ${p} sin trampa`);
    assert.ok(ENTREVISTAS_PRIME_TIME[p].opcionesEstrategia.length >= 2, `Programa ${p} debe tener al menos 2 estrategias`);
  }

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  // Someterse a la Mesaza de Mirtha Legrand
  const resEntrevista = motor.ejecutarEntrevistaPrimeTime('mesaza_domingo', 'conocer_precio');
  assert.strictEqual(resEntrevista.exito, true);
  assert.ok(['triunfo', 'derrota'].includes(resEntrevista.resultado));
});

test("Dilemas Mediáticos de 4 Caminos e Intercalado en Mandato", () => {
  assert.strictEqual(DILEMAS_MEDIOS.length, 3, "Deben existir exactamente 3 dilemas de medios");
  const dCronica = DILEMAS_MEDIOS.find(d => d.id === 'dilema_medios_cronica_comedor');
  const dValijero = DILEMAS_MEDIOS.find(d => d.id === 'dilema_medios_camara_oculta_valijero');
  const dFiesta = DILEMAS_MEDIOS.find(d => d.id === 'dilema_medios_conferencia_fiesta_olivos');

  assert.ok(dCronica, "Falta dilema_medios_cronica_comedor");
  assert.ok(dValijero, "Falta dilema_medios_camara_oculta_valijero");
  assert.ok(dFiesta, "Falta dilema_medios_conferencia_fiesta_olivos");

  assert.strictEqual(dCronica.opciones.length, 4, "Dilema Crónica debe tener 4 opciones");
  assert.strictEqual(dValijero.opciones.length, 4, "Dilema Valijero debe tener 4 opciones");
  assert.strictEqual(dFiesta.opciones.length, 4, "Dilema Fiesta debe tener 4 opciones");

  // Verificar intercalado en el mandato presidencial
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');
  const tieneCronica = motor.dilemasFase.some(d => d.id === 'dilema_medios_cronica_comedor');
  const tieneValijero = motor.dilemasFase.some(d => d.id === 'dilema_medios_camara_oculta_valijero');
  const tieneFiesta = motor.dilemasFase.some(d => d.id === 'dilema_medios_conferencia_fiesta_olivos');

  assert.ok(tieneCronica, "dilema Crónica debe estar intercalado");
  assert.ok(tieneValijero, "dilema Valijero debe estar intercalado");
  assert.ok(tieneFiesta, "dilema Fiesta debe estar intercalado");

  // Aplicar Opción B del dilema de la Fiesta (pedir perdón)
  const blindajePre = motor.sistemaMedios.blindajeMediatico;
  motor.aplicarDecision(dFiesta.opciones[1]);
  assert.ok(motor.sistemaMedios.blindajeMediatico >= blindajePre, "Pedir perdón amortigua el blindaje mediático");
});

test("Acciones Tácticas de Prensa, Destinos Finales y Diagnóstico Integrado", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  // Acciones tácticas
  assert.ok(ACCIONES_TACTICAS_PRENSA.bajar_noticia_pauta_ypf);
  assert.ok(ACCIONES_TACTICAS_PRENSA.trending_topic_distraccion);
  assert.ok(ACCIONES_TACTICAS_PRENSA.cadena_nacional_tapada);
  assert.ok(ACCIONES_TACTICAS_PRENSA.audiencia_privada_director_clarin);

  const resAccion = motor.ejecutarAccionMedios('trending_topic_distraccion');
  assert.strictEqual(resAccion.exito, true);

  // Destinos finales
  assert.ok(DESTINOS_MEDIOS_FINAL.hegemonia_comunicacional);
  assert.ok(DESTINOS_MEDIOS_FINAL.pacto_circulo_rojo);
  assert.ok(DESTINOS_MEDIOS_FINAL.pauta_cero_trinchera);
  assert.ok(DESTINOS_MEDIOS_FINAL.linchamiento_prime_time);

  // Diagnóstico final
  const diag = motor.generarDiagnosticoFinal();
  assert.ok(diag.sistemaMedios, "Diagnóstico final debe incluir resumen de medios");
  assert.ok(diag.destinoMediosFinal, "Diagnóstico final debe incluir destino final de medios");

  // Si configuramos Pauta Cero
  motor.sistemaMedios.esquemaPauta = 'pauta_cero';
  const destPautaCero = motor.sistemaMedios.diagnosticarDestinoFinal(motor);
  assert.strictEqual(destPautaCero.id, 'pauta_cero_trinchera', "Pauta Cero diagnostica El Espartano sin Sobres");
});

// 15. PRUEBAS DE SALA DE CRISIS, ESTALLIDO SOCIAL, ESTADO DE SITIO Y HELICÓPTERO
console.log("\n🚨 15. AUDITORÍA DE SALA DE CRISIS, ESTALLIDO SOCIAL, ESTADO DE SITIO Y HELICÓPTERO...");

test("Fases de la Mecha y Fauna de la Emergencia", () => {
  assert.ok(FASES_MECHA_ESTALLIDO.fase_rumor, "Falta fase_rumor");
  assert.ok(FASES_MECHA_ESTALLIDO.fase_saqueos, "Falta fase_saqueos");
  assert.ok(FASES_MECHA_ESTALLIDO.fase_cacerolazo, "Falta fase_cacerolazo");
  assert.ok(FASES_MECHA_ESTALLIDO.fase_convergencia, "Falta fase_convergencia");

  const personajes = [
    'supermercadista_terraza',
    'intendente_zona_liberada',
    'senora_balcon_cacerolera',
    'jefe_policia_acuartelado',
    'camionero_alimentos'
  ];
  for (const p of personajes) {
    assert.ok(FAUNA_EMERGENCIA[p], `Falta personaje ${p}`);
    assert.ok(FAUNA_EMERGENCIA[p].palanca, `Personaje ${p} sin palanca`);
    assert.ok(FAUNA_EMERGENCIA[p].conducta, `Personaje ${p} sin conducta`);
  }

  const crisis = new SistemaSalaCrisis();
  assert.strictEqual(crisis.obtenerFaseActual(55).id, 'fase_rumor');
  assert.strictEqual(crisis.obtenerFaseActual(78).id, 'fase_saqueos');
  assert.strictEqual(crisis.obtenerFaseActual(89).id, 'fase_cacerolazo');
  assert.strictEqual(crisis.obtenerFaseActual(98).id, 'fase_convergencia');
});

test("El Botón Rojo: Estado de Sitio (Art. 23 CN) y Escenarios de Resolución", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  // Caso 1: Freno de Hierro (mecha moderada / 70%)
  motor.termometroCriollo.mechaSocial = 70;
  const resHierro = motor.declararEstadoDeSitio();
  assert.strictEqual(resHierro.exito, true);
  assert.strictEqual(resHierro.escenario, 'freno_de_hierro');
  assert.ok(motor.sistemaCrisis.estadoDeSitioActivo, "Estado de sitio debe estar activo");
  assert.ok(motor.sistemaCrisis.riesgoComodoroPyLesaHumanidad > 0, "Debe generar riesgo en Comodoro Py");

  // Caso 2: El Bumerán 2001 (mecha explosiva / 90%)
  const motor2 = new MotorJuego();
  motor2.iniciarPartida('presidente', 'candidato_aparato');
  motor2.termometroCriollo.mechaSocial = 92;
  const resBumeran = motor2.declararEstadoDeSitio();
  assert.strictEqual(resBumeran.exito, true);
  assert.strictEqual(resBumeran.escenario, 'bumeran_2001');
  assert.strictEqual(motor2.termometroCriollo.mechaSocial, 100, "Mecha sube a 100 con el bumerán");
  assert.strictEqual(motor2.sistemaCrisis.protocoloHelicoptero, 'turbinas_calientes');
});

test("Los Tres Dilemas Extremos de Sala de Crisis e Intercalado en Mandato", () => {
  assert.strictEqual(DILEMAS_SALA_CRISIS.length, 3, "Deben existir exactamente 3 dilemas de sala de crisis");
  const dMoreno = DILEMAS_SALA_CRISIS.find(d => d.id === 'dilema_crisis_saqueo_moreno');
  const dOlivos = DILEMAS_SALA_CRISIS.find(d => d.id === 'dilema_crisis_asedio_olivos');
  const dMotin = DILEMAS_SALA_CRISIS.find(d => d.id === 'dilema_crisis_motin_policial');

  assert.ok(dMoreno, "Falta dilema_crisis_saqueo_moreno");
  assert.ok(dOlivos, "Falta dilema_crisis_asedio_olivos");
  assert.ok(dMotin, "Falta dilema_crisis_motin_policial");

  assert.strictEqual(dMoreno.opciones.length, 4, "Dilema Moreno debe tener 4 opciones");
  assert.strictEqual(dOlivos.opciones.length, 4, "Dilema Olivos debe tener 4 opciones");
  assert.strictEqual(dMotin.opciones.length, 4, "Dilema Motín debe tener 4 opciones");

  // Verificar intercalado
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');
  const tieneMoreno = motor.dilemasFase.some(d => d.id === 'dilema_crisis_saqueo_moreno');
  const tieneOlivos = motor.dilemasFase.some(d => d.id === 'dilema_crisis_asedio_olivos');
  const tieneMotin = motor.dilemasFase.some(d => d.id === 'dilema_crisis_motin_policial');

  assert.ok(tieneMoreno, "Dilema Moreno debe estar intercalado");
  assert.ok(tieneOlivos, "Dilema Olivos debe estar intercalado");
  assert.ok(tieneMotin, "Dilema Motín debe estar intercalado");

  // Aplicar Opción A de Moreno (Gendarmería)
  motor.aplicarDecision(dMoreno.opciones[0]);
  assert.ok(motor.sistemaCrisis.historialDecisiones.length > 0, "Decisión debe registrarse en historial de crisis");
});

test("Decisiones de Emergencia de Sala de Crisis y Protocolo de Helicóptero", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');
  motor.termometroCriollo.mechaSocial = 85;

  // Alivio de bolsones
  const resBolsones = motor.ejecutarAccionCrisis('alivio_social_bolsones');
  assert.strictEqual(resBolsones.exito, true);
  assert.ok(motor.sistemaCrisis.fondosEmergenciaGastadosM >= 20000);

  // Pacto con intendentes
  const resIntendentes = motor.ejecutarAccionCrisis('girar_atn_intendentes');
  assert.strictEqual(resIntendentes.exito, true);
  assert.strictEqual(motor.sistemaCrisis.pactoIntendentesFirmado, true);

  // Reabastecer cartuchos
  const resCartuchos = motor.ejecutarAccionCrisis('reabastecer_municion_gendarmeria');
  assert.strictEqual(resCartuchos.exito, true);
  assert.ok(motor.sistemaCrisis.municionAntidisturbios >= 80);

  // Evaluar evacuación de helicóptero
  motor.termometroCriollo.mechaSocial = 99;
  motor.saludSupervivencia.seguridad = 10;
  const evac = motor.sistemaCrisis.evaluarProtocoloHelicoptero(motor);
  assert.strictEqual(evac.evacuar, true);
  assert.strictEqual(motor.sistemaCrisis.protocoloHelicoptero, 'despegue_evacuacion');
});

test("Destinos Finales del Estallido Social y Diagnóstico Integrado", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  assert.ok(DESTINOS_CRISIS_FINAL.paz_social_republicana);
  assert.ok(DESTINOS_CRISIS_FINAL.estado_de_sitio_autoritario);
  assert.ok(DESTINOS_CRISIS_FINAL.estallido_convergente_helicoptero);
  assert.ok(DESTINOS_CRISIS_FINAL.pacto_extorsivo_conurbano);

  const diag = motor.generarDiagnosticoFinal();
  assert.ok(diag.sistemaCrisis, "Diagnóstico final debe incluir resumen de crisis");
  assert.ok(diag.destinoCrisisFinal, "Diagnóstico final debe incluir destino final de crisis");
  assert.strictEqual(diag.destinoCrisisFinal.id, 'paz_social_republicana');

  // Si hubo evacuación
  motor.sistemaCrisis.protocoloHelicoptero = 'despegue_evacuacion';
  const destHelicoptero = motor.sistemaCrisis.diagnosticarDestinoFinal(motor);
  assert.strictEqual(destHelicoptero.id, 'estallido_convergente_helicoptero');
});

// 16. AUDITORÍA DE CAÍDA PRESIDENCIAL, EVACUACIÓN EN HELICÓPTERO (H-01), ASAMBLEA Y EXPRESIDENTE
console.log("\n🚁 16. AUDITORÍA DE CAÍDA PRESIDENCIAL, EVACUACIÓN H-01, ASAMBLEA Y VIDA DE EXPRESIDENTE...");

test("Las Tres Patas Rotas y el Umbral del Colapso Institucional", () => {
  assert.ok(TRES_PATAS_COLAPSO.rebelion_territorial, "Debe existir rebelión territorial");
  assert.ok(TRES_PATAS_COLAPSO.amotinamiento_seguridad, "Debe existir amotinamiento de seguridad");
  assert.ok(TRES_PATAS_COLAPSO.traicion_bloque, "Debe existir traición de bloque");

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  // Inicialmente no debe haber umbral alcanzado
  const estadoIni = motor.evaluarColapsoPresidencial();
  assert.strictEqual(estadoIni.umbralAlcanzado, false, "Al inicio no debe haber colapso");

  // Forzar colapso con variables críticas (reservas bajas, seguridad baja, rosca nula)
  motor.macroeconomia.reservas = 8000;
  motor.saludSupervivencia.seguridad = 15;
  motor.saludSupervivencia.rosca = 10;
  motor.termometroCriollo.mechaSocial = 92;

  const colapso = motor.evaluarColapsoPresidencial();
  assert.strictEqual(colapso.umbralAlcanzado, true, "Debe detonarse el umbral de colapso");
  assert.strictEqual(colapso.patasRotasCount, 3, "Deben estar las 3 patas rotas");
  assert.strictEqual(motor.sistemaEvacuacion.cuasimonedasEmitidas.length >= 2, true, "Deben haberse emitido cuasimonedas");
});

test("Las Tres Maneras de Romper la Lapicera (Renuncia Forzada)", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  // 1. Mártir institucional
  const resMartir = motor.ejecutarRenunciaPresidencial('martir_institucional');
  assert.strictEqual(resMartir.exito, true);
  assert.strictEqual(resMartir.renuncia.id, 'martir_institucional');
  assert.strictEqual(motor.sistemaEvacuacion.renunciaElegida.id, 'martir_institucional');

  // 2. Carta bomba
  const resBomba = motor.ejecutarRenunciaPresidencial('carta_bomba');
  assert.strictEqual(resBomba.exito, true);
  assert.strictEqual(resBomba.renuncia.id, 'carta_bomba');
  assert.strictEqual(motor.termometroCriollo.mechaSocial, 100, "Carta bomba sube mecha a 100%");

  // 3. Atrincherarse en el despacho
  const resAtrincherar = motor.ejecutarRenunciaPresidencial('atrincherarse_despacho');
  assert.strictEqual(resAtrincherar.exito, true);
  assert.strictEqual(resAtrincherar.renuncia.modificadores.juicioInsania, true);
});

test("El Minijuego / Secuencia de Escape de la Rosada (Las Tres Rutas)", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  assert.ok(RUTAS_ESCAPE_ROSADA.helipuerto_h01);
  assert.ok(RUTAS_ESCAPE_ROSADA.tunel_aduana_taylor);
  assert.ok(RUTAS_ESCAPE_ROSADA.ambulancia_same);

  // Probar ruta 1 (H-01)
  const resHeli = motor.ejecutarEscapeRosada('helipuerto_h01');
  assert.strictEqual(resHeli.exito, true);
  assert.strictEqual(resHeli.ruta.id, 'helipuerto_h01');
  assert.ok(resHeli.reporte, "Debe generar reporte oficial de la FAA");
  assert.strictEqual(resHeli.reporte.fotografiaHistoricaTomada, true, "H-01 genera foto histórica");

  // Probar ruta 2 (Aduana Taylor)
  const resTunel = motor.ejecutarEscapeRosada('tunel_aduana_taylor');
  assert.strictEqual(resTunel.exito, true);
  assert.strictEqual(resTunel.ruta.modificadores.auraFugitivo, true);

  // Probar ruta 3 (Ambulancia SAME)
  const resSAME = motor.ejecutarEscapeRosada('ambulancia_same');
  assert.strictEqual(resSAME.exito, true);
  assert.strictEqual(resSAME.ruta.modificadores.crisisHipertensiva, true);
});

test("La Ruleta de la Asamblea Legislativa (Ley 20.972 de Acefalía)", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  assert.ok(PRESIDENTES_EXPRESS_ASAMBLEA.titular_senado_breve);
  assert.ok(PRESIDENTES_EXPRESS_ASAMBLEA.caudillo_cuyo_epico);
  assert.ok(PRESIDENTES_EXPRESS_ASAMBLEA.presidente_diputados_relampago);
  assert.ok(PRESIDENTES_EXPRESS_ASAMBLEA.piloto_tormentas_negociador);

  const resAsamblea = motor.simularAsambleaLegislativa();
  assert.strictEqual(resAsamblea.secuencia.length, 4, "Debe pasar por los 4 mandatarios express");
  assert.strictEqual(resAsamblea.presidenteDefinitivo.id, 'piloto_tormentas_negociador');
  assert.ok(resAsamblea.secuencia[1].medidaEstrella.includes("default"), "Caudillo declara default");
});

test("La Vida Después del Poder (El Expresidente Sigue Vivo & Diagnóstico)", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');
  const edadInicial = motor.saludSupervivencia.edad;

  assert.ok(DESTINOS_EXPRESIDENTE.exilio_dorado);
  assert.ok(DESTINOS_EXPRESIDENTE.penitencia_conurbano);
  assert.ok(DESTINOS_EXPRESIDENTE.operativo_retorno_streaming);

  // Elegir operativo retorno
  const epilogo = motor.definirDestinoExpresidente('operativo_retorno_streaming');
  assert.strictEqual(epilogo.exito, true);
  assert.strictEqual(epilogo.destino.id, 'operativo_retorno_streaming');
  assert.strictEqual(motor.saludSupervivencia.edad > edadInicial, true, "El expresidente suma edad biológica");
  assert.strictEqual(epilogo.edadPosterior, motor.saludSupervivencia.edad);

  // Diagnóstico final del motor
  const diag = motor.generarDiagnosticoFinal();
  assert.ok(diag.sistemaEvacuacion, "Diagnóstico final debe incluir resumen de evacuación");
  assert.ok(diag.destinoExpresidenteFinal, "Diagnóstico final debe incluir destino de expresidente");
  assert.strictEqual(diag.destinoExpresidenteFinal.destinoExpresidente.id, 'operativo_retorno_streaming');
  assert.ok(diag.destinoExpresidenteFinal.reporteFAA, "Diagnóstico final debe incluir reporte FAA");
});

// 17. AUDITORÍA DE OPERATIVO RETORNO, TRINCHERA DIGITAL, FUEROS Y VICTORIA TRIUNFAL
console.log("\n👑 17. AUDITORÍA DE OPERATIVO RETORNO, TRINCHERA DIGITAL, FUEROS Y VICTORIA TRIUNFAL...");

test("Las 4 Fases del Retorno Histórico y Avance Progresivo", () => {
  assert.ok(FASES_OPERATIVO_RETORNO.fase_desierto);
  assert.ok(FASES_OPERATIVO_RETORNO.fase_batalla_cultural);
  assert.ok(FASES_OPERATIVO_RETORNO.fase_refugio_fueros);
  assert.ok(FASES_OPERATIVO_RETORNO.fase_jugada_maestra);

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  const inicio = motor.iniciarOperativoRetorno();
  assert.ok(inicio);
  assert.strictEqual(motor.sistemaRetorno.faseActual, 1);

  // Avanzar a Fase 2 (Batalla Cultural)
  const f2 = motor.avanzarFaseRetorno(2);
  assert.strictEqual(f2.faseNumero, 2);
  assert.strictEqual(motor.sistemaRetorno.faseActual, 2);

  // Avanzar a Fase 3 (Refugio de Fueros) -> Activa fueros constitucionales
  const f3 = motor.avanzarFaseRetorno(3);
  assert.strictEqual(f3.faseNumero, 3);
  assert.strictEqual(motor.sistemaRetorno.fuerosSenado, true, "Fase 3 otorga fueros en el Senado");
  assert.strictEqual(motor.sistemaRetorno.causasPenales.estadoCasacion, "congelada_por_fueros");
});

test("La Trinchera Digital: Stream Propio, Archivo Positivo y Gira de Living", () => {
  assert.ok(ECOSISTEMA_DIGITAL_RETORNO.stream_instituto);
  assert.ok(ECOSISTEMA_DIGITAL_RETORNO.archivo_positivo_tiktok);
  assert.ok(ECOSISTEMA_DIGITAL_RETORNO.gira_living_rival);

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');
  motor.iniciarOperativoRetorno();

  const audInicial = motor.sistemaRetorno.audienciaDigital;
  const nostInicial = motor.sistemaRetorno.indiceNostalgiaPopular;

  const resStream = motor.ejecutarAccionBunkerRetorno('transmitir_streaming_vivo');
  assert.strictEqual(resStream.exito, true);
  assert.ok(motor.sistemaRetorno.audienciaDigital > audInicial, "Debe aumentar audiencia digital");
  assert.ok(motor.sistemaRetorno.indiceNostalgiaPopular > nostInicial, "Debe aumentar nostalgia popular");
});

test("Las Tres Alianzas del Perdón: Gobernadores Feudales, CGT y Dirigente Traidor", () => {
  assert.ok(TRES_ALIANZAS_PERDON.gobernadores_feudales);
  assert.ok(TRES_ALIANZAS_PERDON.cupula_sindical);
  assert.ok(TRES_ALIANZAS_PERDON.dirigente_traidor);

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');
  motor.iniciarOperativoRetorno();

  // Pacto con Gobernadores
  const resGob = motor.resolverAlianzaRetorno('gobernadores_feudales', true);
  assert.strictEqual(resGob.exito, true);
  assert.strictEqual(motor.sistemaRetorno.alianzasFirmadas.gobernadores_feudales, true);

  // Pacto con CGT
  const resCGT = motor.resolverAlianzaRetorno('cupula_sindical', true);
  assert.strictEqual(resCGT.exito, true);
  assert.strictEqual(motor.sistemaRetorno.alianzasFirmadas.cupula_sindical, true);

  // Pacto con Dirigente Traidor / Moderado
  const resTraidor = motor.resolverAlianzaRetorno('dirigente_traidor', true);
  assert.strictEqual(resTraidor.exito, true);
  assert.strictEqual(motor.sistemaRetorno.alianzasFirmadas.dirigente_traidor, true);
});

test("Los 3 Dilemas del Retorno: Teorema del Títere, Juez de Casación y Rebelión de los Pibes", () => {
  assert.ok(DILEMAS_OPERATIVO_RETORNO.dilema_teorema_titere);
  assert.ok(DILEMAS_OPERATIVO_RETORNO.dilema_pacto_confiteria);
  assert.ok(DILEMAS_OPERATIVO_RETORNO.dilema_rebelion_pibes);

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');
  motor.iniciarOperativoRetorno();

  // Dilema 1: Resolver con Opción B (Teorema del Títere: Vicepresidencia)
  const d1 = motor.resolverDilemaRetorno('dilema_teorema_titere', 'dedo_magico_titere');
  assert.strictEqual(d1.exito, true);
  assert.strictEqual(motor.sistemaRetorno.estrategiaElectoral, 'titere_vice');

  // Dilema 2: Resolver con Opción A (Pacto en las Sombras)
  const d2 = motor.resolverDilemaRetorno('dilema_pacto_confiteria', 'pacto_sombras_operador');
  assert.strictEqual(d2.exito, true);
  assert.strictEqual(motor.sistemaRetorno.fuerosSenado, true);

  // Dilema 3: Resolver con Opción C (Salomónico con contratos)
  const d3 = motor.resolverDilemaRetorno('dilema_rebelion_pibes', 'salomonico_contratos');
  assert.strictEqual(d3.exito, true);
  assert.ok(d3.relato.includes("cintura política"));
});

test("Búnker del Retorno, Acciones Directas, Victoria Triunfal y Diagnóstico Integrado", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');
  motor.iniciarOperativoRetorno();

  // Ejecutar acciones del búnker
  motor.ejecutarAccionBunkerRetorno('cenar_gobernadores_quincho');
  motor.ejecutarAccionBunkerRetorno('anunciar_candidatura_senador');
  motor.ejecutarAccionBunkerRetorno('publicar_video_dedazo');

  // Cerrar alianzas
  motor.resolverAlianzaRetorno('gobernadores_feudales', true);
  motor.resolverAlianzaRetorno('dirigente_traidor', true);
  motor.sistemaRetorno.indiceNostalgiaPopular = 75;

  // Evaluar victoria
  const vic = motor.evaluarVictoriaRetorno();
  assert.strictEqual(vic.triunfo, true, "Debe alcanzar la victoria del retorno");
  assert.ok(vic.escena.placaCronica.includes("RESUCITÓ EL DOCTOR"));
  assert.ok(motor.sistemaRetorno.edadActual >= 68, "Reasume con edad avanzada");

  // Diagnóstico final del motor
  const diag = motor.generarDiagnosticoFinal();
  assert.ok(diag.sistemaRetorno, "Diagnóstico final debe incluir sistemaRetorno");
  assert.ok(diag.victoriaRetornoFinal, "Diagnóstico final debe incluir victoriaRetornoFinal");
  assert.strictEqual(diag.victoriaRetornoFinal.triunfo, true);
});

// 18. VERIFICACIÓN DEL MOTOR MACROECONÓMICO, CALESITA CAMBIARIA Y MESA DE DINERO DEL BCRA
console.log("\n💵 18. VERIFICACIÓN DEL MOTOR MACROECONÓMICO, CALESITA CAMBIARIA Y MESA DE DINERO DEL BCRA...");

test("Las Cuatro Estaciones de la Calesita Cambiaria y Transiciones de Fase", () => {
  const fases = ['fase_primavera', 'fase_asfixia', 'fase_olla_presion', 'fase_pina_historica'];
  for (const f of fases) {
    const faseObj = FASES_CALESITA_CAMBIARIA[f];
    assert.ok(faseObj, `Falta fase de la calesita: ${f}`);
    assert.ok(faseObj.nombre, `Fase ${f} sin nombre`);
    assert.ok(faseObj.subtitulo, `Fase ${f} sin subtitulo`);
    assert.ok(faseObj.mecanismo, `Fase ${f} sin mecanismo`);
    assert.ok(faseObj.ilusionSocial, `Fase ${f} sin ilusionSocial`);
    assert.ok(faseObj.costoOculto, `Fase ${f} sin costoOculto`);
    assert.ok(faseObj.valoresTipicos, `Fase ${f} sin valoresTipicos`);
  }

  const sys = new SistemaMacroCalesitaBCRA();
  assert.strictEqual(sys.faseCalesita, 1, "Debe iniciar en Fase 1 (Primavera)");

  // Transición a Fase 2 (Asfixia Externa por suba de brecha / tasa)
  sys.brechaCambiaria = 45;
  sys.tasaNominalAnual = 85;
  sys.evaluarTransicionFase();
  assert.strictEqual(sys.faseCalesita, 2, "Debe pasar a Fase 2 (Asfixia Externa)");

  // Transición a Fase 3 (Olla a Presión por reservas netas cero y brecha > 65%)
  sys.reservasNetas = -500;
  sys.brechaCambiaria = 75;
  sys.evaluarTransicionFase();
  assert.strictEqual(sys.faseCalesita, 3, "Debe pasar a Fase 3 (Olla a Presión)");

  // Transición a Fase 4 (Piña Inevitable por reservas netas en colapso y brecha > 90%)
  sys.reservasNetas = -4500;
  sys.brechaCambiaria = 95;
  sys.evaluarTransicionFase();
  assert.strictEqual(sys.faseCalesita, 4, "Debe pasar a Fase 4 (Piña Inevitable)");
});

test("Tablero de Instrumentos del Banco Central y Evaluación de Semáforos", () => {
  const semaforosEsperados = ['reservasNetas', 'brechaCambiaria', 'inflacionMensual', 'tasaInteres', 'tcrm'];
  for (const s of semaforosEsperados) {
    const sem = TABLERO_SEMAFOROS_BCRA[s];
    assert.ok(sem, `Falta semáforo ${s}`);
    assert.ok(sem.nombre, `Semáforo ${s} sin nombre`);
    assert.ok(sem.icono, `Semáforo ${s} sin icono`);
    assert.ok(sem.seguro, `Semáforo ${s} sin definición seguro`);
    assert.ok(sem.alarma, `Semáforo ${s} sin definición alarma`);
    assert.ok(sem.catastrofe, `Semáforo ${s} sin definición catastrofe`);
    assert.strictEqual(typeof sem.evaluar, 'function', `Semáforo ${s} debe tener método evaluar`);
  }

  const sys = new SistemaMacroCalesitaBCRA();
  // Caso seguro
  sys.reservasNetas = 7500;
  sys.brechaCambiaria = 15;
  sys.inflacionMensual = 2.0;
  sys.tcrm = 105;
  let diag = sys.obtenerDiagnosticoSemaforos();
  assert.strictEqual(diag.reservasNetas.estado, 'seguro');
  assert.strictEqual(diag.brechaCambiaria.estado, 'seguro');
  assert.strictEqual(diag.inflacionMensual.estado, 'seguro');
  assert.strictEqual(diag.tcrm.estado, 'seguro');

  // Caso catástrofe
  sys.reservasNetas = -2500;
  sys.brechaCambiaria = 110;
  sys.inflacionMensual = 14.5;
  sys.tcrm = 70;
  diag = sys.obtenerDiagnosticoSemaforos();
  assert.strictEqual(diag.reservasNetas.estado, 'catastrofe');
  assert.strictEqual(diag.brechaCambiaria.estado, 'catastrofe');
  assert.strictEqual(diag.inflacionMensual.estado, 'catastrofe');
  assert.strictEqual(diag.tcrm.estado, 'catastrofe');
});

test("Las Tres Trampas Clásicas de la Política Económica y Cobro de Peajes", () => {
  const trampas = ['trampa_planchar_dolar', 'trampa_bicicleta_financiera', 'trampa_zoologico_parches'];
  for (const t of trampas) {
    const tr = TRAMPAS_POLITICA_ECONOMICA[t];
    assert.ok(tr, `Falta trampa ${t}`);
    assert.ok(tr.nombre, `Trampa ${t} sin nombre`);
    assert.ok(tr.queHaces, `Trampa ${t} sin queHaces`);
    assert.ok(tr.beneficioInmediato, `Trampa ${t} sin beneficioInmediato`);
    assert.ok(tr.peajePosterior, `Trampa ${t} sin peajePosterior`);
    assert.ok(tr.impactoInmediato, `Trampa ${t} sin impactoInmediato`);
    assert.ok(tr.peajeDiferido, `Trampa ${t} sin peajeDiferido`);
  }

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');
  assert.ok(motor.sistemaMacroBCRA, "MotorJuego debe instanciar sistemaMacroBCRA");

  // Activar trampa de planchar el dólar
  const resTrampa = motor.activarTrampaEconomica('trampa_planchar_dolar');
  assert.strictEqual(resTrampa.exito, true);
  assert.strictEqual(motor.sistemaMacroBCRA.trampasActivadas.trampa_planchar_dolar, true);
  assert.strictEqual(motor.sistemaMacroBCRA.peajesPendientes.length, 1);

  // Cobrar peaje diferido
  motor.sistemaMacroBCRA.peajesPendientes[0].turnosRestantes = 1;
  const peajesCobrados = motor.sistemaMacroBCRA.cobrarPeajesPendientes(motor);
  assert.strictEqual(peajesCobrados.length, 1);
  assert.strictEqual(motor.sistemaMacroBCRA.peajesPendientes.length, 0);
});

test("Los 3 Dilemas Macroeconómicos Extremos (4 opciones c/u)", () => {
  const dilemas = ['dilema_silobolsas_pampa', 'dilema_dolar_tarjeta', 'dilema_bomba_letras'];
  for (const d of dilemas) {
    const dil = DILEMAS_MACRO_EXTREMOS[d];
    assert.ok(dil, `Falta dilema macro ${d}`);
    assert.ok(dil.titulo, `Dilema ${d} sin título`);
    assert.ok(dil.detonante, `Dilema ${d} sin detonante`);
    assert.strictEqual(dil.opciones.length, 4, `Dilema ${d} debe tener exactamente 4 opciones`);
    for (const op of dil.opciones) {
      assert.ok(op.id, `Opción sin id en ${d}`);
      assert.ok(op.texto, `Opción sin texto en ${d}`);
      assert.ok(op.etiqueta, `Opción sin etiqueta en ${d}`);
      assert.ok(op.impacto, `Opción sin impacto en ${d}`);
    }
  }

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  // Resolver Dilema 1 (Silobolsas) con Opción 2 (Dólar Soja 4)
  const resD1 = motor.resolverDilemaMacro('dilema_silobolsas_pampa', 'dolar_soja_4_temporal');
  assert.strictEqual(resD1.exito, true);
  assert.ok(resD1.relato.includes("liquidación inmediata"));

  // Resolver Dilema 2 (Dólar Tarjeta) con Opción 1 (Recargo 100%)
  const resD2 = motor.resolverDilemaMacro('dilema_dolar_tarjeta', 'recargo_100_turismo');
  assert.strictEqual(resD2.exito, true);
  assert.ok(resD2.relato.includes("Frenás en seco"));

  // Resolver Dilema 3 (Bomba de Letras) con Opción 2 (Licuación salvaje)
  const resD3 = motor.resolverDilemaMacro('dilema_bomba_letras', 'licuacion_salvaje_tasa');
  assert.strictEqual(resD3.exito, true);
  assert.ok(resD3.relato.includes("insignificante en términos reales"));
});

test("Pantalla de la Mesa de Dinero del BCRA, Acciones Inmediatas y Piña Histórica", () => {
  const acciones = ['vender_fieles_mep', 'tasa_arriba_800bps', 'operativo_arca_florida', 'dejar_correr_blue'];
  for (const a of acciones) {
    const acc = ACCIONES_MESA_DINERO[a];
    assert.ok(acc, `Falta acción de mesa de dinero ${a}`);
    assert.ok(acc.nombre, `Acción ${a} sin nombre`);
    assert.ok(acc.descripcion, `Acción ${a} sin descripción`);
    assert.ok(acc.impacto, `Acción ${a} sin impacto`);
  }

  assert.ok(CABLES_URGENTES_MESA.length >= 5, "Deben existir al menos 5 cables de la City");

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  // Ejecutar intervención de la mesa
  const resAccion = motor.ejecutarAccionMesaDinero('vender_fieles_mep');
  assert.strictEqual(resAccion.exito, true);
  assert.ok(motor.sistemaMacroBCRA.historialOperaciones.length > 0);

  // Disparar La Piña Histórica y verificar salto cambiario
  const oficialAntes = motor.sistemaMacroBCRA.dolarOficial;
  const resPina = motor.dispararPinaHistorica();
  assert.strictEqual(resPina.exito, true);
  assert.ok(motor.sistemaMacroBCRA.dolarOficial > oficialAntes, "Dólar oficial debe subir bruscamente");
  assert.strictEqual(motor.sistemaMacroBCRA.faseCalesita, 4, "Debe estar en Fase 4 (Piña Inevitable)");
  assert.ok(motor.sistemaMacroBCRA.ciclosCompletados >= 1, "Debe computar el ciclo completado");

  // Diagnóstico final integrado
  const diag = motor.generarDiagnosticoFinal();
  assert.ok(diag.sistemaMacroBCRA, "Diagnóstico final debe incluir sistemaMacroBCRA");
  assert.ok(diag.destinoMacroFinal, "Diagnóstico final debe incluir destinoMacroFinal");
  assert.ok(diag.destinoMacroFinal.veredictoHistorico, "Debe generar veredicto histórico");
});

console.log("\n📊 19. AUDITORÍA DE LA ECUACIÓN UNIFICADA, 4 FASES, SEMANA CRÍTICA Y PANTALLA DEL SILLÓN...");

test("Las Cuatro Fases Integradas: Macro, Calle, Urnas y Muro de Medios", () => {
  const fasesKeys = ['fase_1', 'fase_2', 'fase_3', 'fase_4'];
  for (const k of fasesKeys) {
    const f = FASES_INTEGRADAS_SIMULADOR[k];
    assert.ok(f, `Falta ${k} en FASES_INTEGRADAS_SIMULADOR`);
    assert.ok(f.nombre, `${k} sin nombre`);
    assert.ok(f.subtitulo, `${k} sin subtitulo`);
    assert.ok(f.macro, `${k} sin datos macro`);
    assert.ok(typeof f.mechaSocial === 'number', `${k} sin mechaSocial numérica`);
    assert.ok(f.sondeoElectoral && typeof f.sondeoElectoral.oficialismo === 'number', `${k} sin sondeo oficialista`);
    assert.ok(f.vozDeLaCalle && f.vozDeLaCalle.testimonio, `${k} sin voz de la calle`);
    assert.ok(Array.isArray(f.muroDeMedios) && f.muroDeMedios.length >= 4, `${k} debe tener al menos 4 titulares de medios`);
  }

  // Comprobar correspondencia sociológica exacta de las voces de la calle
  assert.strictEqual(FASES_INTEGRADAS_SIMULADOR.fase_1.vozDeLaCalle.personajeId, "pibe_delivery");
  assert.ok(FASES_INTEGRADAS_SIMULADOR.fase_1.vozDeLaCalle.testimonio.includes("18 cuotas"));

  assert.strictEqual(FASES_INTEGRADAS_SIMULADOR.fase_2.vozDeLaCalle.personajeId, "carnicero");
  assert.ok(FASES_INTEGRADAS_SIMULADOR.fase_2.vozDeLaCalle.testimonio.includes("picada común"));

  assert.strictEqual(FASES_INTEGRADAS_SIMULADOR.fase_3.vozDeLaCalle.personajeId, "jubilada_pami");
  assert.ok(FASES_INTEGRADAS_SIMULADOR.fase_3.vozDeLaCalle.testimonio.includes("pastillas del corazón"));

  assert.strictEqual(FASES_INTEGRADAS_SIMULADOR.fase_4.vozDeLaCalle.personajeId, "colectivero");
  assert.ok(FASES_INTEGRADAS_SIMULADOR.fase_4.vozDeLaCalle.testimonio.includes("ganas de matar a alguien"));
});

test("Algoritmo de Votos en Tiempo Real (Ecuación Unificada de Vasos Comunicantes)", () => {
  const ecuacion = new SistemaEcuacionUnificada();

  // Escenario 1: Primavera Económica (baja inflación, brecha baja, poder adquisitivo alto)
  const votoPrimavera = ecuacion.calcularIntencionVoto(null, {
    deltaPoderAdquisitivo: +14,
    ipc: 2.1,
    brecha: 12,
    blindajeMediatico: 3.5,
    rng: 0
  });
  assert.ok(votoPrimavera.votoOficialista >= 48, "En primavera el voto oficialista debe superar el 48%");
  assert.strictEqual(votoPrimavera.penalizacionIPC, 0, "Con IPC 2.1% (<= 4%) no debe haber penalización por inflación");
  assert.strictEqual(votoPrimavera.penalizacionBrecha, 0, "Con brecha 12% (<= 50%) no debe haber penalización por brecha");

  // Escenario 2: Crisis Inflacionaria y Brecha Desbocada (IPC 12%, Brecha 90%)
  const votoCrisis = ecuacion.calcularIntencionVoto(null, {
    deltaPoderAdquisitivo: -10,
    ipc: 12.0,
    brecha: 90.0,
    blindajeMediatico: 1.0,
    rng: 0
  });
  assert.ok(votoCrisis.penalizacionIPC >= 9.0, "IPC 12% debe restar al menos 9.6 pts (k1 = 1.2)");
  assert.ok(votoCrisis.penalizacionBrecha >= 5.0, "Brecha 90% (> 50%) debe restar al menos 6.0 pts (k2 = 0.15)");
  assert.ok(votoCrisis.votoOficialista < 25, "En crisis severa el voto debe caer por debajo de 25%");
  assert.ok(votoCrisis.formulaDesglose.includes("V_t ="), "Debe generar desglose legible de la fórmula");
});

test("Fórmula de la Mecha Social (0% a 100%) y Umbrales de Desborde", () => {
  const ecuacion = new SistemaEcuacionUnificada();

  // Escenario Paz Chicha
  const mechaBaja = ecuacion.calcularMechaSocial(null, {
    tarifazos: 10,
    ipcAlimentos: 15,
    cortesSuministro: 5,
    gastoSocial: 60
  });
  assert.ok(mechaBaja.mecha <= 40, "Mecha debe estar en escala de Paz Chicha");
  assert.strictEqual(mechaBaja.estado, "Paz Chicha");

  // Escenario Tensión Urbana
  const mechaMedia = ecuacion.calcularMechaSocial(null, {
    tarifazos: 50,
    ipcAlimentos: 35,
    cortesSuministro: 25,
    gastoSocial: 30
  });
  assert.ok(mechaMedia.mecha >= 41 && mechaMedia.mecha <= 70, "Debe ser Tensión Urbana");
  assert.strictEqual(mechaMedia.estado, "Tensión Urbana");

  // Escenario Alerta de Saqueo
  const mechaAlta = ecuacion.calcularMechaSocial(null, {
    tarifazos: 80,
    ipcAlimentos: 70,
    cortesSuministro: 40,
    gastoSocial: 20
  });
  assert.ok(mechaAlta.mecha >= 71 && mechaAlta.mecha <= 89, "Debe ser Alerta de Saqueo");
  assert.strictEqual(mechaAlta.estado, "Alerta de Saqueo");

  // Escenario Desborde Institucional
  const mechaExtrema = ecuacion.calcularMechaSocial(null, {
    tarifazos: 100,
    ipcAlimentos: 95,
    cortesSuministro: 60,
    gastoSocial: 10
  });
  assert.ok(mechaExtrema.mecha >= 90, "Debe superar 90% para Desborde Institucional");
  assert.strictEqual(mechaExtrema.estado, "Desborde Institucional");
});

test("Simulador de la Semana Crítica: El Viernes Negro en la City (4 Opciones)", () => {
  assert.strictEqual(SEMANA_CRITICA_VIERNES_NEGRO.semana, 42);
  assert.strictEqual(SEMANA_CRITICA_VIERNES_NEGRO.diasParaUrnas, 14);
  assert.strictEqual(SEMANA_CRITICA_VIERNES_NEGRO.estadoInicial.reservasNetas, 320);
  assert.strictEqual(SEMANA_CRITICA_VIERNES_NEGRO.estadoInicial.brechaCambiaria, 58.0);

  const opciones = ['opcion_a', 'opcion_b', 'opcion_c', 'opcion_d'];
  for (const o of opciones) {
    const opt = SEMANA_CRITICA_VIERNES_NEGRO.opciones[o];
    assert.ok(opt, `Falta opción ${o}`);
    assert.ok(opt.titulo, `Opción ${o} sin título`);
    assert.ok(opt.accion, `Opción ${o} sin acción`);
    assert.ok(opt.impactos, `Opción ${o} sin impactos`);
    assert.ok(opt.impactos.titularesMedios.length >= 2, `Opción ${o} sin titulares de medios`);
  }

  // Comprobar especificidades de cada opción
  // Opción A: Quemar las Naves (Blue baja a $1560, reservas a -US$ 80M, votos 35.8%)
  const optA = SEMANA_CRITICA_VIERNES_NEGRO.opciones.opcion_a.impactos;
  assert.strictEqual(optA.dolarBlueNuevo, 1560);
  assert.strictEqual(optA.reservasNetasNuevas, -80);
  assert.strictEqual(optA.sondeoNuevo.oficialismo, 35.8);

  // Opción B: Salto Inevitable (Oficial $1280, inflación 16.5%, mecha 88%, votos 22.4%)
  const optB = SEMANA_CRITICA_VIERNES_NEGRO.opciones.opcion_b.impactos;
  assert.strictEqual(optB.dolarOficialNuevo, 1280);
  assert.strictEqual(optB.inflacionNueva, 16.5);
  assert.strictEqual(optB.mechaSocialNueva, 88.0);
  assert.strictEqual(optB.sondeoNuevo.oficialismo, 22.4);

  // Opción C: Cacería y Torniquete (Brecha 84.4%, mecha 72%, votos 31.0%)
  const optC = SEMANA_CRITICA_VIERNES_NEGRO.opciones.opcion_c.impactos;
  assert.strictEqual(optC.mechaSocialNueva, 72.0);
  assert.strictEqual(optC.sondeoNuevo.oficialismo, 31.0);

  // Opción D: Plan Platita (Blue $1900, mecha 62%, votos 36.2%)
  const optD = SEMANA_CRITICA_VIERNES_NEGRO.opciones.opcion_d.impactos;
  assert.strictEqual(optD.dolarBlueNuevo, 1900);
  assert.strictEqual(optD.mechaSocialNueva, 62.0);
  assert.strictEqual(optD.sondeoNuevo.oficialismo, 36.2);
});

test("La Pantalla del Sillón: Snapshot del Despacho e Integración con Motor", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  assert.ok(motor.sistemaEcuacionUnificada, "Motor debe tener sistemaEcuacionUnificada instanciado");

  // Obtener snapshot antes de resolver
  const snapshotAntes = motor.obtenerEstadoPantallaSillon();
  assert.ok(snapshotAntes, "Debe retornar snapshot");
  assert.strictEqual(snapshotAntes.semana, 42);
  assert.strictEqual(snapshotAntes.diasParaUrnas, 14);
  assert.ok(snapshotAntes.macro.dolarOficial, "Snapshot debe incluir dólar oficial");
  assert.ok(snapshotAntes.humorSocialYVotos.sondeo, "Snapshot debe incluir sondeo");
  assert.ok(snapshotAntes.muroDeMedios.length >= 4, "Snapshot debe incluir titulares de medios en tiempo real");

  // Resolver la semana crítica con Opción A
  const resultado = motor.ejecutarResolucionSemanaCritica('opcion_a');
  assert.strictEqual(resultado.exito, true);
  assert.strictEqual(resultado.opcion.id, 'opcion_a');
  assert.strictEqual(motor.termometroCriollo.dolarBlue, 1560, "Debe sincronizar Dólar Blue en Termómetro Criollo");
  assert.strictEqual(motor.termometroCriollo.mechaSocial, 58, "Debe sincronizar Mecha Social en Termómetro Criollo");

  // Diagnóstico final con Ecuación Unificada
  const diag = motor.generarDiagnosticoFinal();
  assert.ok(diag.sistemaEcuacionUnificada, "Diagnóstico final debe incluir sistemaEcuacionUnificada");
  assert.strictEqual(diag.sistemaEcuacionUnificada.semanaCriticaResuelta, true);
});

console.log("\n🏛️ 20. AUDITORÍA DE LA ROSCA FEDERAL, LIGAS PROVINCIALES, QUÓRUM Y TIJERETAZO...");

test("Las Cuatro Ligas Provinciales y Senadores en Juego", () => {
  const ligasKeys = ['norte_grande', 'region_centro', 'bloque_patagonico', 'amba_gigantes'];
  for (const k of ligasKeys) {
    const l = LIGAS_PROVINCIALES[k];
    assert.ok(l, `Falta liga provincial ${k}`);
    assert.ok(l.nombre, `${k} sin nombre`);
    assert.ok(Array.isArray(l.provincias) && l.provincias.length >= 2, `${k} debe tener al menos 2 provincias`);
    assert.ok(typeof l.senadoresTotales === 'number' && l.senadoresTotales > 0, `${k} debe tener senadores totales`);
    assert.ok(typeof l.dependenciaCoparticipacionPct === 'number', `${k} sin dependencia de coparticipación`);
    assert.ok(l.puntoDebil, `${k} sin punto débil descripto`);
    assert.ok(l.reclamoActivo, `${k} sin reclamo activo`);
  }

  // Comprobar especificidades de cada liga
  assert.strictEqual(LIGAS_PROVINCIALES.norte_grande.senadoresTotales, 14);
  assert.strictEqual(LIGAS_PROVINCIALES.norte_grande.dependenciaCoparticipacionPct, 85);
  assert.ok(LIGAS_PROVINCIALES.norte_grande.provincias.includes("Formosa"));

  assert.strictEqual(LIGAS_PROVINCIALES.region_centro.senadoresTotales, 8);
  assert.ok(LIGAS_PROVINCIALES.region_centro.puntoDebil.includes("Cajas de Jubilaciones"));

  assert.strictEqual(LIGAS_PROVINCIALES.bloque_patagonico.senadoresTotales, 10);
  assert.ok(LIGAS_PROVINCIALES.bloque_patagonico.descripcion.includes("llave del gas"));

  assert.strictEqual(LIGAS_PROVINCIALES.amba_gigantes.senadoresTotales, 6);
  assert.ok(LIGAS_PROVINCIALES.amba_gigantes.descripcion.includes("padrón"));
});

test("La Bimoneda de la Rosca: Palancas Financieras del Ejecutivo", () => {
  const palancas = ['goteo_coparticipacion', 'atn_discrecionales', 'pisar_obra_publica', 'cajas_previsionales'];
  for (const p of palancas) {
    const pal = PALANCAS_FINANCIERAS_EJECUTIVO[p];
    assert.ok(pal, `Falta palanca financiera ${p}`);
    assert.ok(pal.nombre, `Palanca ${p} sin nombre`);
    assert.ok(pal.descripcion, `Palanca ${p} sin descripción`);
    assert.ok(pal.impacto && pal.impacto.relato, `Palanca ${p} sin impacto o relato`);
  }
});

test("La Mecánica del Tijeretazo: Algoritmo de Corte de Boleta", () => {
  // Escenario 1: Traición furiosa (gobernador desleal 15% lealtad, imagen presidencial 30%)
  const corteAlto = calcularAlgoritmoCorteBoleta(58.0, 15.0, 30.0);
  assert.ok(corteAlto.coeficienteCortePct >= 35.0, "Con baja lealtad e imagen el corte debe superar el 35%");
  assert.strictEqual(corteAlto.traicionDetectada, true, "Debe detectar traición en las urnas");
  assert.ok(corteAlto.votoPresidencialEfectivo < 35.0, "El voto presidencial debe quedar severamente licuado");
  assert.ok(corteAlto.relato.includes("trincheta"), "Debe relatar el corte con trincheta");

  // Escenario 2: Lealtad plena y aparato alineado (lealtad 85%, imagen 55%)
  const corteBajo = calcularAlgoritmoCorteBoleta(52.0, 85.0, 55.0);
  assert.ok(corteBajo.coeficienteCortePct <= 15.0, "Con alta lealtad el corte debe ser mínimo");
  assert.strictEqual(corteBajo.traicionDetectada, false);
  assert.ok(corteBajo.votoPresidencialEfectivo >= 44.0, "El voto presidencial debe conservarse");
});

test("Dilemas Federales Extremos (4 Opciones Cada Uno)", () => {
  const dilemas = ['dilema_quorum_3am', 'dilema_valvula_petroleo', 'dilema_tijeretazo_veda'];
  for (const d of dilemas) {
    const dil = DILEMAS_FEDERALES_EXTREMOS[d];
    assert.ok(dil, `Falta dilema federal ${d}`);
    assert.ok(dil.titulo, `Dilema ${d} sin título`);
    assert.ok(dil.escenario, `Dilema ${d} sin escenario`);
    assert.strictEqual(dil.opciones.length, 4, `Dilema ${d} debe tener exactamente 4 opciones`);
    const letras = dil.opciones.map(o => o.letra);
    assert.deepStrictEqual(letras, ['A', 'B', 'C', 'D'], `Dilema ${d} debe tener letras A, B, C, D`);
  }

  // Comprobar especificidades de los dilemas
  const d1 = DILEMAS_FEDERALES_EXTREMOS.dilema_quorum_3am;
  assert.ok(d1.escenario.includes("baño"), "Dilema 1 debe incluir al senador en el baño");
  assert.ok(d1.opciones[0].impacto.senadoresDelta === 1, "Opción A debe sumar 1 senador");

  const d2 = DILEMAS_FEDERALES_EXTREMOS.dilema_valvula_petroleo;
  assert.ok(d2.escenario.includes("Comodoro Rivadavia"), "Dilema 2 debe situarse en Comodoro Rivadavia");
  assert.ok(d2.opciones.some(o => o.id === "dividir_bloque_ofrecer_ypf"), "Debe existir opción de dividir el bloque con YPF");

  const d3 = DILEMAS_FEDERALES_EXTREMOS.dilema_tijeretazo_veda;
  assert.ok(d3.escenario.includes("150.000 boletas cortadas"), "Dilema 3 debe mencionar las 150k boletas cortadas");
});

test("La Pantalla de la Rosca Federal, Quórum del Senado (34/37) e Integración con Motor", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'candidato_aparato');

  assert.ok(motor.sistemaRoscaFederal, "Motor debe tener sistemaRoscaFederal instanciado");

  // Tablero de control
  const tab = motor.obtenerTableroRoscaFederal();
  assert.ok(tab, "Debe generar tablero de rosca federal");
  assert.strictEqual(tab.quorumObjetivo, 37, "El quórum del Senado debe ser 37 senadores");
  assert.strictEqual(tab.votosFavorAsegurados, 34, "Debe iniciar con 34 votos a favor asegurados");
  assert.strictEqual(tab.faltanVotos, 3, "Deben faltar exactamente 3 votos para el quórum");
  assert.strictEqual(tab.indecisosClave.length, 3, "Deben existir 3 senadores indecisos clave");

  // Ejecutar Acción de Rosca 1: Firmar ATN Catamarca (+1 voto)
  const resAcc = motor.ejecutarAccionRoscaFederal('firmar_atn_catamarca');
  assert.strictEqual(resAcc.exito, true);
  assert.strictEqual(motor.sistemaRoscaFederal.votosFavorAsegurados, 35, "Votos deben subir a 35");

  // Resolver Dilema Federal 1 con Opción A (+1 voto)
  const resDil = motor.resolverDilemaFederal('dilema_quorum_3am', 'firmar_atn_homebanking');
  assert.strictEqual(resDil.exito, true);
  assert.strictEqual(motor.sistemaRoscaFederal.votosFavorAsegurados, 36, "Votos deben subir a 36");

  // Ejecutar Acción de Rosca 2: Concesión Río Negro (+1 voto para alcanzar quórum 37)
  const resAcc2 = motor.ejecutarAccionRoscaFederal('concesion_vialidad_rionegro');
  assert.strictEqual(resAcc2.exito, true);
  assert.strictEqual(motor.sistemaRoscaFederal.votosFavorAsegurados, 37, "Votos deben alcanzar el quórum de 37");
  assert.strictEqual(resAcc2.quorumAlcanzado, true, "Debe consagrar el quórum");

  // Diagnóstico final integrado
  const diag = motor.generarDiagnosticoFinal();
  assert.ok(diag.sistemaRoscaFederal, "Diagnóstico final debe incluir sistemaRoscaFederal");
  assert.strictEqual(diag.sistemaRoscaFederal.quorumAlcanzado, true);
});

// 21. AUDITORÍA DEL SISTEMA DE DINASTÍAS Y NEPOTISMO, LIVING DE OLIVOS Y REENCARNACIÓN FAMILIAR
console.log("\n👑 21. AUDITORÍA DEL SISTEMA DE DINASTÍAS Y NEPOTISMO, LIVING DE OLIVOS Y REENCARNACIÓN...");

test("Los 4 Roles del Clan Familiar y sus arquetipos están definidos y calibrados", () => {
  const rolesEsperados = ['conyuge', 'heredero', 'hermano', 'parientes_incomodos'];
  for (const rId of rolesEsperados) {
    const rol = ROLES_CLAN_FAMILIAR[rId];
    assert.ok(rol, `Falta rol del clan: ${rId}`);
    assert.ok(rol.nombre && rol.nombre.length > 5);
    assert.ok(rol.icono);
    assert.ok(rol.descripcion);
  }

  // A. La Primera Dama / Esposo (El Cogobierno)
  const conyuge = ROLES_CLAN_FAMILIAR.conyuge;
  assert.ok(conyuge.arquetipos.militante, "Falta arquetipo Esposa Militante");
  assert.ok(conyuge.arquetipos.farandula, "Falta arquetipo Pareja de la Farándula");
  assert.strictEqual(conyuge.arquetipos.militante.lealtadBase, 72);
  assert.strictEqual(conyuge.arquetipos.farandula.lealtadBase, 65);

  // B. El Heredero / Delfín de Sangre (La Continuidad)
  const heredero = ROLES_CLAN_FAMILIAR.heredero;
  assert.ok(heredero.arquetipos.militante_trinchera, "Falta Militante de Trinchera");
  assert.ok(heredero.arquetipos.nene_de_oro, "Falta Nene de Oro");
  assert.strictEqual(heredero.arquetipos.militante_trinchera.lealtadBase, 95);
  assert.strictEqual(heredero.arquetipos.nene_de_oro.capacidadBase, 18);

  // C. El Hermano / Hermana ('El Jefe' de la Corte)
  const hermano = ROLES_CLAN_FAMILIAR.hermano;
  assert.ok(hermano.arquetipo, "Falta arquetipo de El Jefe");
  assert.strictEqual(hermano.arquetipo.ubicacionEstado, "Secretaría General de la Presidencia");
  assert.strictEqual(hermano.arquetipo.lealtadBase, 98);

  // D. Los Parientes Incómodos y Cajas Oscuras
  const parientes = ROLES_CLAN_FAMILIAR.parientes_incomodos;
  assert.strictEqual(parientes.cajasOscuras.length, 4, "Deben existir 4 cajas oscuras históricas");
  const idsCajas = parientes.cajasOscuras.map(c => c.id);
  assert.ok(idsCajas.includes("registro_automotor"));
  assert.ok(idsCajas.includes("aduanas_fronterizas"));
  assert.ok(idsCajas.includes("loterias_casinos"));
  assert.ok(idsCajas.includes("consulados_europa"));
});

test("Variables Familiares e Índice Dinámico de Nepotismo Estatal", () => {
  const sis = new SistemaDinastiasNepotismo();
  assert.ok(sis.clan.conyuge, "Falta cónyuge en clan");
  assert.ok(sis.clan.heredero, "Falta heredero en clan");
  assert.ok(sis.clan.hermano, "Falta hermano en clan");
  assert.ok(sis.clan.parientes, "Falta parientes en clan");

  // Verificar variables individuales (Lealtad, Capacidad, Radioactividad)
  for (const k in sis.clan) {
    const m = sis.clan[k];
    assert.ok(m.lealtad >= 0 && m.lealtad <= 100, `Lealtad inválida para ${k}`);
    assert.ok(m.capacidad >= 0 && m.capacidad <= 100, `Capacidad inválida para ${k}`);
    assert.ok(m.radioactividad >= 0 && m.radioactividad <= 100, `Radioactividad inválida para ${k}`);
    assert.ok(m.cargo, `Cargo ausente para ${k}`);
    assert.ok(m.conflicto, `Conflicto ausente para ${k}`);
  }

  // Cálculo de índice de nepotismo estatal
  const nep = sis.calcularIndiceNepotismo();
  assert.ok(nep >= 35 && nep <= 100, "Índice de nepotismo debe reflejar la estructura copada");
  assert.strictEqual(sis.alertaFOPEA, true, "Nepotismo inicial debe activar alerta de FOPEA");

  // Estados de tensión
  assert.strictEqual(sis.obtenerEstadoTension(), "TENSIÓN ELEVADA");
  sis.tensionClanScore = 85;
  assert.strictEqual(sis.obtenerEstadoTension(), "GUERRA DE ALCOBA");
  sis.tensionClanScore = 40;
  assert.strictEqual(sis.obtenerEstadoTension(), "DISPUTA DE CAJAS");
  sis.tensionClanScore = 15;
  assert.strictEqual(sis.obtenerEstadoTension(), "PAZ FAMILIAR");
});

test("Mecánica de Sucesión Cruzada (La Fórmula Conyugal y Doble Comando)", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente');

  const res = motor.activarSucesionCruzada();
  assert.strictEqual(res.exito, true);
  assert.strictEqual(res.sucesionCruzadaActiva, true);
  assert.strictEqual(res.dobleComandoActivo, true);
  assert.strictEqual(motor.sistemaDinastias.sucesionCruzadaActiva, true);
  assert.strictEqual(motor.sistemaDinastias.primerCaballeroActivo, true);
  assert.ok(motor.saludSupervivencia.nombreMandatario.includes("Presidenta Constitucional"));
});

test("Los Tres Dilemas Dinásticos Jugables y Ramificaciones", () => {
  const dilemasEsperados = [
    'dilema_cunado_valija_ezeiza',
    'dilema_choque_heredero_libertador',
    'dilema_testamento_sanatorio_los_arcos'
  ];

  for (const dId of dilemasEsperados) {
    const d = DILEMAS_DINASTICOS_JUGABLES[dId];
    assert.ok(d, `Falta dilema dinástico: ${dId}`);
    assert.ok(d.titulo);
    assert.ok(d.hecho);
    assert.ok(d.opciones.length >= 3);
  }

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente');

  // Dilema 1: Dejar pasar valija y borrar videos
  const r1 = motor.resolverDilemaDinastico('dilema_cunado_valija_ezeiza', 0);
  assert.ok(r1.relato.includes("contrabando agravado"));
  assert.ok(motor.sistemaDinastias.clan.parientes.lealtad >= 95);

  // Dilema 2: Fuga dorada a Ginebra
  const r2 = motor.resolverDilemaDinastico('dilema_choque_heredero_libertador', 3);
  assert.strictEqual(motor.sistemaDinastias.clan.heredero.fueros, true);
  assert.ok(r2.relato.includes("FUGA DORADA"));

  // Dilema 3: Firmar a Cónyuge Actual
  const r3 = motor.resolverDilemaDinastico('dilema_testamento_sanatorio_los_arcos', 0);
  assert.ok(r3.relato.includes("usurpadora"));
});

test("Living de Olivos y las 4 Resoluciones Domésticas", () => {
  const resEsperadas = ['dar_la_caja', 'blindaje', 'tregua_conyugal', 'cortar_cabezas'];
  for (const rId of resEsperadas) {
    const r = RESOLUCIONES_DOMESTICAS_LIVING[rId];
    assert.ok(r, `Falta resolución doméstica: ${rId}`);
    assert.ok(r.nombre);
    assert.ok(r.etiquetaBoton);
    assert.ok(r.impacto);
  }

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente');

  // 1. Dar la Caja: Nombrar sobrino en Banco Nación
  const rDarCaja = motor.ejecutarResolucionDomestica('dar_la_caja');
  assert.strictEqual(rDarCaja.exito, true);
  assert.ok(rDarCaja.relato.includes("Banco Nación"));

  // 2. Blindaje: Hijo en lista de diputados
  const rBlindaje = motor.ejecutarResolucionDomestica('blindaje');
  assert.strictEqual(rBlindaje.exito, true);
  assert.strictEqual(motor.sistemaDinastias.clan.heredero.fueros, true);

  // 3. Cortar Cabezas: Renuncia del cuñado
  const rCortar = motor.ejecutarResolucionDomestica('cortar_cabezas');
  assert.strictEqual(rCortar.exito, true);
  assert.ok(rCortar.relato.includes("valijas"));
});

test("Mecánica de Reencarnación Dinástica (Jugar con tu Heredero)", () => {
  const herederosEsperados = ['heredero_primera_dama', 'heredero_delfin_hijo', 'heredero_hermano_jefe'];
  for (const hId of herederosEsperados) {
    const h = HEREDEROS_REENCARNACION_DINASTICA[hId];
    assert.ok(h, `Falta heredero: ${hId}`);
    assert.ok(h.nombre);
    assert.ok(h.rol);
    assert.ok(h.herencia);
    assert.ok(h.pasivo);
    assert.strictEqual(h.multiplicadorApellido, 20, "Multiplicador de apellido debe ser 20%");
    assert.ok(h.estadisticas.coronarias !== undefined);
  }

  // Efectos de sangre
  assert.ok(EFECTOS_SANGRE_NUEVA_VIDA.multiplicador_apellido);
  assert.ok(EFECTOS_SANGRE_NUEVA_VIDA.sombra_del_procer);
  assert.ok(EFECTOS_SANGRE_NUEVA_VIDA.deudas_del_pasado);

  const motor = new MotorJuego();
  motor.iniciarPartida('presidente');

  // Simular muerte del presidente
  motor.saludSupervivencia.muertePolitica = { titulo: "Infarto Masivo", placaCronica: "[PLACA NEGRA]" };
  assert.ok(motor.saludSupervivencia.muertePolitica);

  // Reencarnar en el Hijo Mayor ("El Delfín")
  const reenc = motor.reencarnarEnHeredero('heredero_delfin_hijo');
  assert.strictEqual(reenc.exito, true);
  assert.strictEqual(reenc.multiplicadorApellidoPisoPct, 20);
  assert.strictEqual(motor.saludSupervivencia.muertePolitica, null, "La reencarnación debe reanudar la continuidad");
  assert.strictEqual(motor.saludSupervivencia.nombreMandatario, "El Hijo Mayor 'El Delfín' (33 Años)");
  assert.strictEqual(motor.saludSupervivencia.edad, 33);
  assert.strictEqual(motor.saludSupervivencia.vigorPublico, 98);
  assert.strictEqual(motor.termometroCriollo.roscaGobernadores, 25);

  // Snapshot y Diagnóstico final integrado
  const snap = motor.obtenerSnapshotLivingOlivos();
  assert.ok(snap, "Snapshot living olivos debe existir");
  assert.strictEqual(snap.resolucionesDisponibles.length, 4);

  const diag = motor.generarDiagnosticoFinal();
  assert.ok(diag.sistemaDinastias, "Diagnóstico final debe incluir sistemaDinastias");
  assert.strictEqual(diag.sistemaDinastias.herederosDisponibles.length, 3);
});

// =========================================================================
// 22. PRUEBAS DE CREACIÓN DE PERSONAJE, ARQUETIPOS DE CUNA Y FICHA MATRICULAR (SEN)
// =========================================================================
console.log("\n🪪 22. VERIFICACIÓN DE CREACIÓN DE PERSONAJE, ARQUETIPOS DE CUNA Y FICHA MATRICULAR (SEN)...");

test("Los 5 Arquetipos de Cuna Socioeconómica y sus Pasivos/Atributos", () => {
  const arquetiposEsperados = [
    'cuna_oro', 'patriciado_porteno',
    'cuna_popular', 'barro_conurbano',
    'dinastia_feudal',
    'clase_media_universitaria',
    'chacarero_gringo'
  ];

  for (const aId of arquetiposEsperados) {
    const arq = ORIGENES_CUNA[aId];
    assert.ok(arq, `Debe existir arquetipo o alias: ${aId}`);
    assert.ok(arq.nombre);
    assert.ok(arq.origenEscuela, `Debe definir origenEscuela: ${aId}`);
    assert.ok(arq.ventajasPartida, `Debe definir ventajasPartida: ${aId}`);
    assert.ok(arq.pasivosOcultos, `Debe definir pasivosOcultos: ${aId}`);
    assert.ok(arq.atributosBase, `Debe definir atributosBase: ${aId}`);
    assert.ok(arq.patrimonioEntorno, `Debe definir patrimonioEntorno: ${aId}`);
    assert.ok(arq.patrimonioEntorno.cajaInicio);
    assert.ok(arq.patrimonioEntorno.operador);
    assert.ok(arq.patrimonioEntorno.vinculoJudicial);
  }

  // Comprobar especificidades de diseño
  assert.strictEqual(ORIGENES_CUNA.patriciado_porteno.atributosBase.calle, 10, "Cuna de oro debe tener Calle 10");
  assert.strictEqual(ORIGENES_CUNA.barro_conurbano.atributosBase.calle, 95, "Barro conurbano debe tener Calle 95");
  assert.strictEqual(ORIGENES_CUNA.dinastia_feudal.atributosBase.rosca, 95, "Dinastía feudal debe tener Rosca 95");
  assert.strictEqual(ORIGENES_CUNA.clase_media_universitaria.atributosBase.labia, 90, "Clase media universitaria debe tener Labia 90");
  assert.strictEqual(ORIGENES_CUNA.chacarero_gringo.atributosBase.chasis, 90, "Chacarero gringo debe tener Chasis 90");
});

test("Atributos Base del Dirigente (Escala 1 a 100) y Escrúpulos Morales Inversos", () => {
  const atribKeys = ['labia', 'rosca', 'calle', 'chasis', 'escrupulos'];
  for (const k of atribKeys) {
    const def = ATRIBUTOS_BASE_DEF[k];
    assert.ok(def, `Debe existir definición de atributo base: ${k}`);
    assert.ok(def.nombre);
    assert.ok(def.icono);
    assert.ok(def.descripcion);
    assert.strictEqual(typeof def.comentarioRango, 'function');
  }

  // Probar rango de escrúpulos morales (inverso: 100 moralista, 0 maquiavélico)
  const esc = ATRIBUTOS_BASE_DEF.escrupulos;
  assert.ok(esc.comentarioRango(85).includes("moral republicana") || esc.comentarioRango(85).includes("aprietes"));
  assert.ok(esc.comentarioRango(20).includes("psicópata") || esc.comentarioRango(20).includes("maquiavélico"));
});

test("Catálogo de Virtudes Criollas (6 Rasgos Positivos Jugables)", () => {
  const virtudesEsperadas = [
    'estomago_amianto',
    'piloto_tormentas',
    'tigre_recinto',
    'pintor_aldea',
    'amigo_juez',
    'billetera_barrani'
  ];

  for (const vId of virtudesEsperadas) {
    const v = VIRTUDES_CRIOLLAS[vId];
    assert.ok(v, `Falta virtud criolla: ${vId}`);
    assert.ok(v.nombre);
    assert.ok(v.icono);
    assert.ok(v.descripcion);
    assert.ok(v.efectoMecanico);
    assert.ok(v.resumenEfecto);
  }

  assert.ok(VIRTUDES_CRIOLLAS.estomago_amianto.resumenEfecto.includes("gástrica"));
  assert.ok(VIRTUDES_CRIOLLAS.piloto_tormentas.resumenEfecto.includes("Rosca x2"));
  assert.ok(VIRTUDES_CRIOLLAS.tigre_recinto.resumenEfecto.includes("+5%"));
  assert.ok(VIRTUDES_CRIOLLAS.amigo_juez.resumenEfecto.includes("10 años"));
});

test("Catálogo de Defectos Criollos / Bombas de Tiempo (6 Rasgos Negativos)", () => {
  const defectosEsperados = [
    'bocon_medianoche',
    'golosina_caja',
    'familiero_cronico',
    'complejo_procer',
    'panico_helicoptero',
    'debilidad_alcoba'
  ];

  for (const dId of defectosEsperados) {
    const d = DEFECTOS_CRIOLLOS[dId];
    assert.ok(d, `Falta defecto criollo: ${dId}`);
    assert.ok(d.nombre);
    assert.ok(d.icono);
    assert.ok(d.descripcion);
    assert.ok(d.efectoMecanico);
    assert.ok(d.resumenEfecto);
  }

  assert.ok(DEFECTOS_CRIOLLOS.bocon_medianoche.resumenEfecto.includes("2 AM"));
  assert.ok(DEFECTOS_CRIOLLOS.golosina_caja.resumenEfecto.includes("15%"));
  assert.ok(DEFECTOS_CRIOLLOS.familiero_cronico.resumenEfecto.includes("Cuñado"));
  assert.ok(DEFECTOS_CRIOLLOS.panico_helicoptero.resumenEfecto.includes("cacerolazos"));
});

test("Generador de Ficha Matricular de Candidato (SEN)", () => {
  // 1. Modo Cuna (0 Años)
  const fCuna = generarFichaMatricularDirigente({ modo: 'cuna', origenId: 'dinastia_feudal' });
  assert.strictEqual(fCuna.modo, 'cuna');
  assert.strictEqual(fCuna.edad, 0);
  assert.ok(fCuna.cargoInicial.includes("Nacimiento") || fCuna.cargoInicial.includes("Maternidad"));
  assert.strictEqual(fCuna.origen.id, 'dinastia_feudal');
  assert.strictEqual(fCuna.virtudes.length, 2);
  assert.strictEqual(fCuna.defectos.length, 2);
  assert.notStrictEqual(fCuna.virtudes[0].id, fCuna.virtudes[1].id, "Las virtudes no deben repetirse");
  assert.notStrictEqual(fCuna.defectos[0].id, fCuna.defectos[1].id, "Los defectos no deben repetirse");

  // 2. Modo Barro (28 a 48 Años)
  const fBarro = generarFichaMatricularDirigente({ modo: 'barro', origenId: 'barro_conurbano' });
  assert.strictEqual(fBarro.modo, 'barro');
  assert.ok(fBarro.edad >= 28 && fBarro.edad <= 48, `Edad debe estar entre 28 y 48: ${fBarro.edad}`);
  assert.ok(fBarro.cargoInicial.length > 0);
  assert.strictEqual(fBarro.origen.id, 'cuna_popular');

  // 3. Modo Presidente (30 a 75 Años)
  const fPres = generarFichaMatricularDirigente({ modo: 'presidente', origenId: 'patriciado_porteno' });
  assert.strictEqual(fPres.modo, 'presidente');
  assert.ok(fPres.edad >= 30, `Edad presidente debe ser >= 30: ${fPres.edad}`);
  assert.ok(fPres.cargoInicial.includes("Presidente"));
  assert.strictEqual(fPres.origen.id, 'cuna_oro');

  // Atributos en rangos válidos
  for (const k of ['labia', 'rosca', 'calle', 'chasis', 'escrupulos']) {
    assert.ok(fPres.atributos[k] >= 1 && fPres.atributos[k] <= 100, `Atributo ${k} debe estar entre 1 y 100`);
  }
});

test("Integración de Ficha Matricular con MotorJuego y Sincronización", () => {
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente');

  assert.strictEqual(motor.obtenerFichaMatricular(), null, "Inicialmente no debe haber ficha");

  // Generar ficha personalizada
  const ficha = motor.generarFichaMatricular({
    modo: 'barro',
    nombre: 'Dr. Horacio "El Pibe" Zabaleta',
    edad: 42,
    origenId: 'barro_conurbano',
    labia: 70,
    rosca: 85,
    calle: 95,
    chasis: 70,
    escrupulos: 25,
    virtud1: 'estomago_amianto',
    virtud2: 'piloto_tormentas',
    defecto1: 'bocon_medianoche',
    defecto2: 'golosina_caja'
  });

  assert.ok(ficha, "Ficha generada debe existir");
  assert.strictEqual(ficha.nombre, 'Dr. Horacio "El Pibe" Zabaleta');
  assert.strictEqual(ficha.atributos.calle, 95);
  assert.strictEqual(ficha.virtudes[0].id, 'estomago_amianto');
  assert.strictEqual(ficha.defectos[0].id, 'bocon_medianoche');

  // Confirmar ficha en motor
  const fConfirmada = motor.confirmarFichaPersonaje(ficha);
  assert.strictEqual(fConfirmada, ficha);
  assert.strictEqual(motor.obtenerFichaMatricular(), ficha);
  assert.strictEqual(motor.saludSupervivencia.nombreMandatario, 'Dr. Horacio "El Pibe" Zabaleta');
  assert.strictEqual(motor.saludSupervivencia.edad, 42);
  assert.strictEqual(motor.saludSupervivencia.coronarias, 70);
  assert.strictEqual(motor.termometroCriollo.roscaGobernadores, 85);

  // Diagnóstico final debe incluir fichaMatricular
  const diag = motor.generarDiagnosticoFinal();
  assert.ok(diag.fichaMatricular, "Diagnóstico final debe contener fichaMatricular");
  assert.strictEqual(diag.fichaMatricular.nombre, 'Dr. Horacio "El Pibe" Zabaleta');
});

// =========================================================================
// 23. VERIFICACIÓN DEL ÁRBOL DE DESBLOQUEO LEGAL Y POLÍTICO (HITOS POR EDAD)
// =========================================================================
console.log("\n📜 23. VERIFICACIÓN DEL ÁRBOL DE DESBLOQUEO LEGAL Y POLÍTICO (HITOS POR EDAD, CCyC, VOTO JOVEN, PENAL JUVENIL, CN Y DOMICILIARIA)...");

test("Catálogo de 8 Tramos de Desbloqueo Legal (0 a 70+ Años): Marco legal real, fases vitales y mecánicas", () => {
  const tramosKeys = Object.keys(TRAMOS_DESBLOQUEO_LEGAL);
  assert.strictEqual(tramosKeys.length, 8, "Deben existir exactamente 8 tramos de edad legal");

  // 1. Cuna y Jardín (0 a 5)
  const cuna = TRAMOS_DESBLOQUEO_LEGAL.cuna_jardin;
  assert.strictEqual(cuna.edadMin, 0);
  assert.strictEqual(cuna.edadMax, 5);
  assert.ok(cuna.marcoLegal.includes("26.206"), "Debe citar Ley 26.206 de educación inicial");
  assert.ok(cuna.capacidadesDesbloqueadas.some(c => c.includes("RASGOS PASIVOS")));

  // 2. Primaria y Club (6 a 12)
  const primaria = TRAMOS_DESBLOQUEO_LEGAL.primaria_club;
  assert.strictEqual(primaria.edadMin, 6);
  assert.strictEqual(primaria.edadMax, 12);
  assert.ok(primaria.mecanicaSimulador.includes("Primeros Dilemas Morales"));

  // 3. Autonomía Médica (13 a 15)
  const autoMed = TRAMOS_DESBLOQUEO_LEGAL.autonomia_medica;
  assert.strictEqual(autoMed.edadMin, 13);
  assert.strictEqual(autoMed.edadMax, 15);
  assert.ok(autoMed.marcoLegal.includes("Art. 26"), "Debe citar Art. 26 CCyC de autonomía médica progresiva");

  // 4. Voto Joven y Régimen Penal Juvenil (16 y 17)
  const votoJov = TRAMOS_DESBLOQUEO_LEGAL.voto_joven_juvenil;
  assert.strictEqual(votoJov.edadMin, 16);
  assert.strictEqual(votoJov.edadMax, 17);
  assert.ok(votoJov.marcoLegal.includes("26.774"), "Debe citar Ley 26.774 de Voto Joven");
  assert.ok(votoJov.marcoLegal.includes("22.278"), "Debe citar Ley 22.278 de Régimen Penal Juvenil");

  // 5. Mayoría Plena & El Barro de la Militancia (18 a 24)
  const mayoria = TRAMOS_DESBLOQUEO_LEGAL.mayoria_plena_militancia;
  assert.strictEqual(mayoria.edadMin, 18);
  assert.strictEqual(mayoria.edadMax, 24);
  assert.ok(mayoria.marcoLegal.includes("Art. 25 CCyC"), "Debe citar Art. 25 CCyC de mayoría de edad plena");

  // 6. Cámara Baja / Diputado Nacional (25 a 29)
  const diputados = TRAMOS_DESBLOQUEO_LEGAL.camara_baja_diputados;
  assert.strictEqual(diputados.edadMin, 25);
  assert.strictEqual(diputados.edadMax, 29);
  assert.ok(diputados.marcoLegal.includes("Art. 48"), "Debe citar Art. 48 CN para Diputados");

  // 7. El Sillón de Rivadavia & Senado (30 a 69)
  const presidente = TRAMOS_DESBLOQUEO_LEGAL.sillon_rivadavia_senado;
  assert.strictEqual(presidente.edadMin, 30);
  assert.strictEqual(presidente.edadMax, 69);
  assert.ok(presidente.marcoLegal.includes("Arts. 55 y 89"), "Debe citar Arts. 55 y 89 CN");

  // 8. El Régimen del Patriarca & Prisión Domiciliaria (70+)
  const patriarca = TRAMOS_DESBLOQUEO_LEGAL.regimen_patriarca_domiciliaria;
  assert.strictEqual(patriarca.edadMin, 70);
  assert.ok(patriarca.marcoLegal.includes("Art. 10 CP"), "Debe citar Art. 10 CP");
  assert.ok(patriarca.marcoLegal.includes("24.660"), "Debe citar Ley 24.660 de prisión domiciliaria");
});

test("Los 5 Dilemas de Hitos Constitucionales Jugables (16, 18, 25, 30 y 70 Años)", () => {
  assert.strictEqual(DILEMAS_HITOS_LEGALES.length, 5, "Deben existir exactamente 5 dilemas de hitos");

  const h16 = DILEMAS_HITOS_LEGALES.find(d => d.edadHito === 16);
  assert.ok(h16, "Dilema de 16 años debe existir");
  assert.strictEqual(h16.opciones.length, 3);
  assert.strictEqual(h16.opciones[0].id, "militante_base");
  assert.strictEqual(h16.opciones[1].id, "abstencion_cinica");
  assert.strictEqual(h16.opciones[2].id, "rompehuelgas_orden");
  assert.strictEqual(h16.opciones[0].actaTutelar, true);

  const h18 = DILEMAS_HITOS_LEGALES.find(d => d.edadHito === 18);
  assert.ok(h18, "Dilema de 18 años debe existir");
  assert.strictEqual(h18.opciones.length, 3);
  assert.strictEqual(h18.opciones[0].id, "firmar_acta_plata");
  assert.strictEqual(h18.opciones[0].cajaBarrani, 150000);
  assert.strictEqual(h18.opciones[1].id, "impugnar_gendarmeria");

  const h25 = DILEMAS_HITOS_LEGALES.find(d => d.edadHito === 25);
  assert.ok(h25, "Dilema de 25 años debe existir");
  assert.strictEqual(h25.opciones.length, 3);
  assert.strictEqual(h25.opciones[0].id, "dar_quorum_polideportivo");
  assert.strictEqual(h25.opciones[0].obrasTerritoriales, 500000000);
  assert.strictEqual(h25.opciones[1].id, "caer_sesion_disciplina");

  const h30 = DILEMAS_HITOS_LEGALES.find(d => d.edadHito === 30);
  assert.ok(h30, "Dilema de 30 años debe existir");
  assert.strictEqual(h30.opciones.length, 3);
  assert.strictEqual(h30.opciones[0].id, "lanzar_candidatura_presidencial");
  assert.strictEqual(h30.opciones[1].id, "senador_fueros_provinciales");

  const h70 = DILEMAS_HITOS_LEGALES.find(d => d.edadHito === 70);
  assert.ok(h70, "Dilema de 70 años debe existir");
  assert.strictEqual(h70.opciones.length, 3);
  assert.strictEqual(h70.opciones[0].id, "activar_domiciliaria_pileta");
  assert.strictEqual(h70.opciones[1].id, "martir_ezeiza_vip");
  assert.strictEqual(h70.opciones[2].id, "asilo_diplomatico_exterior");
});

test("Generador de Notificación de Estado Cívico (Ministerio del Interior) y Formato ASCII", () => {
  const notif25 = generarNotificacionEstadoCivico({ nombre: "Carlos 'El Vasco' Etchegoyen" }, 25, []);
  assert.ok(notif25, "La notificación debe generarse");
  assert.strictEqual(notif25.ciudadano, "Carlos 'El Vasco' Etchegoyen");
  assert.strictEqual(notif25.edadAlcanzada, 25);
  assert.ok(notif25.capacidadesDesbloqueadas.some(c => c.includes("Art. 48 CN")));
  assert.ok(notif25.capacidadesBloqueadas.some(c => c.includes("Art. 55 CN")));
  assert.ok(notif25.capacidadesBloqueadas.some(c => c.includes("Art. 89 CN")));
  assert.ok(notif25.fichaAscii.includes("MINISTERIO DEL INTERIOR - NOTIFICACIÓN DE ESTADO CÍVICO"));
  assert.ok(notif25.fichaAscii.includes("Carlos 'El Vasco' Etchegoyen"));

  // Notificación a los 16 años (acta tutelar / régimen penal juvenil)
  const notif16 = generarNotificacionEstadoCivico({ nombre: "Lucas Militante" }, 16, []);
  assert.strictEqual(notif16.edadAlcanzada, 16);
  assert.ok(notif16.capacidadesDesbloqueadas.some(c => c.includes("Ley 26.774")));
  assert.ok(notif16.capacidadesDesbloqueadas.some(c => c.includes("Ley 22.278")));

  // Notificación a los 71 años (prisión domiciliaria Art. 10 CP / Art. 32 Ley 24.660)
  const notif71 = generarNotificacionEstadoCivico({ nombre: "Don Américo Patriarca" }, 71, []);
  assert.strictEqual(notif71.edadAlcanzada, 71);
  assert.ok(notif71.capacidadesDesbloqueadas.some(c => c.includes("PRISIÓN DOMICILIARIA")));
});

test("Integración del Árbol de Desbloqueo Legal con MotorJuego y Evaluación de Hitos", () => {
  const motor = new MotorJuego();
  motor.iniciarModoCuna('cuna_oro');

  // Evaluar tramos según edad
  const tramo0 = motor.obtenerTramoLegalActual(0);
  assert.strictEqual(tramo0.id, "cuna_jardin");

  const tramo16 = motor.obtenerTramoLegalActual(16);
  assert.strictEqual(tramo16.id, "voto_joven_juvenil");

  const tramo25 = motor.obtenerTramoLegalActual(25);
  assert.strictEqual(tramo25.id, "camara_baja_diputados");

  const tramo72 = motor.obtenerTramoLegalActual(72);
  assert.strictEqual(tramo72.id, "regimen_patriarca_domiciliaria");

  // Cruzar hitos de edad
  const hitoCruza18 = motor.verificarDesbloqueoConstitucional(18, 17);
  assert.ok(hitoCruza18, "Debe detectar cruce del hito de 18 años");
  assert.strictEqual(hitoCruza18.hitoEdad, 18);
  assert.strictEqual(hitoCruza18.dilemaHito.id, "hito_18_anos");

  const hitoCruza30 = motor.verificarDesbloqueoConstitucional(30, 28);
  assert.ok(hitoCruza30, "Debe detectar cruce del hito de 30 años");
  assert.strictEqual(hitoCruza30.hitoEdad, 30);
  assert.strictEqual(hitoCruza30.dilemaHito.id, "hito_30_anos");

  // Obtener notificación desde motor
  const notifMotor = motor.obtenerNotificacionEstadoCivico(25);
  assert.ok(notifMotor.fichaAscii.includes("MINISTERIO DEL INTERIOR"));
  assert.strictEqual(notifMotor.edadAlcanzada, 25);
});

// =========================================================================
// 24. AUDITORÍA DE LA BOTONERA NORMATIVA, CONGRESO, DNU, VETO Y REFORMA (ART. 30 CN)
// =========================================================================
console.log("\n🏛️ 24. AUDITORÍA DE LA BOTONERA NORMATIVA, CONGRESO, DNU (LEY 26.122), VETO Y REFORMA CONSTITUCIONAL (ART. 30 CN)...");

test("Los 4 Caminos del Poder (VIAS_NORMATIVAS) y Catálogo de Impactos en 12 Ejes", () => {
  const vias = Object.keys(VIAS_NORMATIVAS);
  assert.strictEqual(vias.length, 4, "Deben existir exactamente 4 vías normativas de poder");
  assert.ok(VIAS_NORMATIVAS.congreso, "Debe existir Vía Congreso");
  assert.ok(VIAS_NORMATIVAS.dnu, "Debe existir El DNU");
  assert.ok(VIAS_NORMATIVAS.veto, "Debe existir El Veto");
  assert.ok(VIAS_NORMATIVAS.reforma_constitucional, "Debe existir La Reforma Constitucional");

  // Impactos en 12 ejes
  const imp = IMPACTOS_PRACTICAS_LEGALES_12AXES;
  assert.ok(imp.dnu_masivo, "Debe existir DNU masivo");
  assert.strictEqual(imp.dnu_masivo.ejeAfectado, "Eje 3 (Autoridad)");
  assert.ok(imp.dnu_masivo.impacto12Axes.centralismo >= 70);

  assert.ok(imp.debate_comisiones, "Debe existir Debate de Comisiones");
  assert.strictEqual(imp.debate_comisiones.ejeAfectado, "Eje 3 (Autoridad)");
  assert.ok(imp.debate_comisiones.impacto12Axes.institucionalidad >= 75);

  assert.ok(imp.comprar_votos_caja, "Debe existir Comprar Votos con Cargos y ATN");
  assert.strictEqual(imp.comprar_votos_caja.ejeAfectado, "Eje 12 (Método)");
  assert.ok(imp.comprar_votos_caja.impacto12Axes.pragmatismoMetodo >= 80);

  assert.ok(imp.vetar_gasto_social, "Debe existir Vetar Leyes de Gasto");
  assert.strictEqual(imp.vetar_gasto_social.ejeAfectado, "Eje 1 (Economía)");

  assert.ok(imp.reeleccion_constitucion, "Debe existir Reelección en Constitución");
  assert.strictEqual(imp.reeleccion_constitucion.ejeAfectado, "Eje 3 (Autoridad)");
  assert.ok(imp.reeleccion_constitucion.impacto12Axes.caudillismo >= 85);
});

test("Tablero de Normas en Trámite, Comisiones, Caballo de Troya y Desguace", () => {
  const leg = new SistemaLegislativo();
  const snap = leg.obtenerSnapshotLegislativo();

  assert.strictEqual(snap.balanceDiputados.total, 257);
  assert.strictEqual(snap.balanceDiputados.quorumSesion, 129);
  assert.strictEqual(snap.balanceDiputados.dosTerciosTotales, 172);

  assert.strictEqual(snap.balanceSenado.total, 72);
  assert.strictEqual(snap.balanceSenado.quorumSesion, 37);
  assert.strictEqual(snap.balanceSenado.dosTerciosTotales, 48);

  assert.ok(snap.normasEnTramite.length >= 5, "Deben existir al menos 5 normas iniciales en trámite");

  // Destrabar comisión de reforma laboral con fondos
  const resDestrabe = leg.destrabarComision("reforma_laboral", 12000000000);
  assert.ok(resDestrabe.exito, "Debe destrabar la comisión");
  assert.strictEqual(resDestrabe.norma.comisionDestrabada, true);

  // Simular desguace en particular
  const resDesguace = leg.simularVotacionEnParticular("reforma_laboral");
  assert.ok(resDesguace.exito, "Debe ejecutar la votación en particular");
  assert.ok(resDesguace.articulosCaidos >= 8, "Debe voltear artículos estratégicos");
});

test("El DNU bajo la Ley 26.122 (Comisión Bicameral) y Cautelares Judiciales", () => {
  const leg = new SistemaLegislativo();

  // DNU con materia prohibida (penal)
  const dnuPenal = leg.evaluarDNU({ titulo: "DNU Régimen Penal", materia: "penal" });
  assert.strictEqual(dnuPenal.esValido, false);
  assert.strictEqual(dnuPenal.alertaCautelarJudicial, true);
  assert.strictEqual(dnuPenal.estado, "Frenado por Cautelar Judicial Inconstitucional");

  // DNU válido con Ley 26.122
  const dnuValido = leg.evaluarDNU({ titulo: "DNU Desregulación Comercial", materia: "comercio" });
  assert.strictEqual(dnuValido.esValido, true);
  assert.strictEqual(dnuValido.alertaCautelarJudicial, false);
  assert.ok(dnuValido.ley26122, "Debe contener el marco de la Ley 26.122");
  assert.ok(dnuValido.ley26122.reglaConstitucional.includes("AMBAS Cámaras"));
});

test("El Veto Presidencial y la Insistencia con Dos Tercios (Art. 83 CN)", () => {
  const leg = new SistemaLegislativo();

  // Veto con apoyo oficialista (queda firme)
  const vetoFirme = leg.simularVetoPresidencial({ titulo: "Ley de Gasto" }, "total", { claseMedia: 60 });
  assert.strictEqual(vetoFirme.tipo, "veto_presidencial");
  assert.strictEqual(vetoFirme.tipoVeto, "total");
  assert.strictEqual(vetoFirme.vetoFirme, true);

  // Veto con oposición desbordada (derribado por 2/3)
  const vetoDerribado = leg.simularVetoPresidencial({ titulo: "Ley de Gasto" }, "total", { claseMedia: 10 });
  assert.strictEqual(vetoDerribado.insistenciaLograda, true);
  assert.ok(vetoDerribado.votosDiputados >= 172, "Diputados debe alcanzar los 2/3 (172)");
  assert.ok(vetoDerribado.votosSenadores >= 48, "Senadores debe alcanzar los 2/3 (48)");
});

test("La Reforma Constitucional (El Botón Nuclear - Art. 30 CN) y Acciones Normativas", () => {
  const leg = new SistemaLegislativo();

  // Acción 1: Redactar proyecto normal y Caballo de Troya
  const resProyecto = leg.ejecutarAccionNormativa("redactar_proyecto", { subtipo: "caballo_de_troya" });
  assert.ok(resProyecto.exito);
  assert.ok(resProyecto.mensaje.includes("Caballo de Troya"));
  assert.strictEqual(resProyecto.norma.caballoDeTroyaIncluido, true);

  // Acción 2: Meter DNU
  const resDnu = leg.ejecutarAccionNormativa("meter_dnu", { materia: "energia" });
  assert.ok(resDnu.exito);
  assert.strictEqual(resDnu.norma.tipo, "dnu");

  // Acción 3: Aplicar Veto
  const resVeto = leg.ejecutarAccionNormativa("aplicar_veto", { subtipo: "total" });
  assert.ok(resVeto.exito);

  // Acción 4: Botón Constitución (poroteo insuficiente vs pacto forzado)
  const resConstInsuf = leg.ejecutarAccionNormativa("boton_constitucion", { forzarPacto: false });
  assert.strictEqual(resConstInsuf.exito, false);
  assert.ok(resConstInsuf.mensaje.includes("Poroteo insuficiente"));

  const resConstPacto = leg.ejecutarAccionNormativa("boton_constitucion", { forzarPacto: true });
  assert.strictEqual(resConstPacto.exito, true);
  assert.strictEqual(leg.procesoConstituyente.estado, "ley_necesidad_aprobada");
});

test("Los 3 Dilemas Legislativos Jugables y Resolución con MotorJuego", () => {
  assert.strictEqual(DILEMAS_LEGISLATIVOS.length, 3, "Deben existir exactamente 3 dilemas legislativos jugables");

  const d1 = DILEMAS_LEGISLATIVOS.find(d => d.id === "dilema_dnu_omnibus");
  assert.ok(d1, "Dilema 1 (DNU Ómnibus) debe existir");
  assert.strictEqual(d1.opciones.length, 3);
  assert.strictEqual(d1.opciones[0].id, "firmar_dnu_completo");
  assert.strictEqual(d1.opciones[1].id, "dividir_proyectos_congreso");
  assert.strictEqual(d1.opciones[2].id, "negociar_facultades_delegadas");

  const d2 = DILEMAS_LEGISLATIVOS.find(d => d.id === "dilema_veto_jubilatorio");
  assert.ok(d2, "Dilema 2 (Veto Jubilatorio) debe existir");
  assert.strictEqual(d2.opciones.length, 3);
  assert.strictEqual(d2.opciones[0].id, "veto_total_represion");
  assert.strictEqual(d2.opciones[1].id, "comprar_heroes_veto");
  assert.strictEqual(d2.opciones[2].id, "promulgacion_parcial_financiamiento");

  const d3 = DILEMAS_LEGISLATIVOS.find(d => d.id === "dilema_pacto_reforma");
  assert.ok(d3, "Dilema 3 (Pacto Reforma) debe existir");
  assert.strictEqual(d3.opciones.length, 3);
  assert.strictEqual(d3.opciones[0].id, "firmar_pacto_olivos");
  assert.strictEqual(d3.opciones[1].id, "rechazar_consulta_popular");
  assert.strictEqual(d3.opciones[2].id, "acatar_limite_heredero");

  // Resolver dilema legislativo a través del motor
  const motor = new MotorJuego();
  motor.iniciarPartida('presidente', 'maduro_carrera');

  const resDilema = motor.resolverDilemaLegislativo("dilema_dnu_omnibus", "firmar_dnu_completo");
  assert.ok(resDilema, "Debe resolver el dilema");
  assert.strictEqual(resDilema.dilemaId, "dilema_dnu_omnibus");
  assert.ok(resDilema.operasteComo.includes("Milei") || resDilema.operasteComo.includes("Menem"));

  // Snapshot legislativo desde el motor y diagnóstico final
  const snap = motor.obtenerSnapshotLegislativo();
  assert.ok(snap, "Snapshot legislativo debe existir");
  assert.strictEqual(snap.balanceDiputados.total, 257);

  const diag = motor.generarDiagnosticoFinal();
  assert.ok(diag.sistemaLegislativo, "Diagnóstico final debe incluir sistemaLegislativo");
  assert.ok(diag.notificacionEstadoCivico, "Diagnóstico final debe incluir notificacionEstadoCivico");
});

test("El Desempate Vicepresidencial en el Senado (Art. 57 CN - 'Mi voto no es positivo') y Lobbies Corporativos", () => {
  const leg = new SistemaLegislativo();

  // 1. Simulación directa del desempate vicepresidencial (Art. 57 CN)
  const desempateLeal = leg.simularDesempateVicepresidencial(null, true);
  assert.strictEqual(desempateLeal.empateSenado, "36 a 36");
  assert.strictEqual(desempateLeal.votoVicepositivo, true);
  assert.strictEqual(desempateLeal.votoFinalVice, "AFIRMATIVO");
  assert.strictEqual(desempateLeal.leyAprobada, true);
  assert.ok(desempateLeal.articuloConstitucional.includes("Art. 57"));

  // 2. Voto no positivo (Estilo Cobos 2008)
  const desempateRebelde = leg.simularDesempateVicepresidencial(null, false);
  assert.strictEqual(desempateRebelde.votoVicepositivo, false);
  assert.strictEqual(desempateRebelde.votoFinalVice, "NO POSITIVO");
  assert.strictEqual(desempateRebelde.leyAprobada, false);
  assert.ok(desempateRebelde.fraseHistorica.includes("mi voto no es positivo"));

  // 3. Verificación de catálogo de marcas y lobbies corporativos ampliados
  const { MARCAS_ARGENTINAS, LOBBIES_CORPORATIVOS_ARG } = require('./marcas_empresas_argentinas.js');
  assert.strictEqual(Object.keys(MARCAS_ARGENTINAS).length, 10, "Catálogo base debe mantener 10 marcas");
  assert.ok(LOBBIES_CORPORATIVOS_ARG.grupo_clarin, "Debe existir Grupo Clarín en lobbies corporativos");
  assert.ok(LOBBIES_CORPORATIVOS_ARG.vicentin_agro, "Debe existir Vicentin en lobbies corporativos");
  assert.ok(LOBBIES_CORPORATIVOS_ARG.farmacity_quintana, "Debe existir Farmacity en lobbies corporativos");
  assert.ok(LOBBIES_CORPORATIVOS_ARG.techint_rocca, "Debe existir Techint en lobbies corporativos");
});

console.log("\n🔊 25. VERIFICACIÓN DEL MOTOR DE AUDIO PROCEDURAL CRIOLLO (WEB AUDIO API)...");

test("Motor de Audio Procedural Criollo (Web Audio API & Sonidos del Sillón)", () => {
  const { AudioCriollo, audioCriollo } = require('./sonidos_sillon.js');
  assert.ok(AudioCriollo, "Clase AudioCriollo debe existir");
  assert.ok(audioCriollo, "Instancia singleton audioCriollo debe existir");
  assert.strictEqual(typeof audioCriollo.reproducirSello, 'function');
  assert.strictEqual(typeof audioCriollo.reproducirPlacaCronica, 'function');
  assert.strictEqual(typeof audioCriollo.reproducirCampanaCity, 'function');
  assert.strictEqual(typeof audioCriollo.reproducirLatido, 'function');
  assert.strictEqual(typeof audioCriollo.reproducirFlash, 'function');
  assert.strictEqual(typeof audioCriollo.reproducirClick, 'function');
  assert.strictEqual(typeof audioCriollo.toggleSilencio, 'function');
  assert.strictEqual(typeof audioCriollo.estaSilenciado, 'function');

  // En entorno Node (sin AudioContext) no debe lanzar excepciones no controladas
  assert.doesNotThrow(() => {
    audioCriollo.reproducirSello();
    audioCriollo.reproducirPlacaCronica();
    audioCriollo.reproducirCampanaCity();
    audioCriollo.reproducirLatido();
    audioCriollo.reproducirFlash();
    audioCriollo.reproducirClick();
  }, "La ejecución en headless Node no debe fallar");

  const estadoPre = audioCriollo.estaSilenciado();
  const estadoPost = audioCriollo.toggleSilencio();
  assert.strictEqual(estadoPost, !estadoPre);
  audioCriollo.toggleSilencio(); // volver al estado original
});

// =========================================================================
// 26. VERIFICACIÓN DEL TERMÓMETRO DE ENTORNO CERCANO, AFECTOS Y VÍNCULOS
// =========================================================================
console.log("\n❤️ 26. VERIFICACIÓN DEL TERMÓMETRO DE ENTORNO CERCANO, AFECTOS Y VÍNCULOS (FAMILIA, PAREJA, AMIGOS, ENTRENADOR Y TERRITORIO)...");

test("Catálogo de Figuras del Entorno Cercano (Familia, Pareja, Amigos, Entrenador, Escuela y Territorio)", () => {
  assert.ok(ENTORNO_CERCANO.mama, "Debe existir Mamá");
  assert.ok(ENTORNO_CERCANO.papa, "Debe existir Papá");
  assert.ok(ENTORNO_CERCANO.hermano, "Debe existir Hermano/a");
  assert.ok(ENTORNO_CERCANO.pareja_activa, "Debe existir Pareja Activa");
  assert.ok(ENTORNO_CERCANO.soltero_libre, "Debe existir Soltería Libre");
  assert.ok(ENTORNO_CERCANO.mejor_amigo, "Debe existir Mejor Amigo");
  assert.ok(ENTORNO_CERCANO.grupo_pibes, "Debe existir Grupo de Amigos");
  assert.ok(ENTORNO_CERCANO.entrenador_club, "Debe existir Entrenador del Club");
  assert.ok(ENTORNO_CERCANO.gimnasio_libre, "Debe existir Actividad Física Libre");
  assert.ok(ENTORNO_CERCANO.preceptor_escuela, "Debe existir Preceptor de Escuela");
  assert.ok(ENTORNO_CERCANO.profesora_rossi, "Debe existir Profesora de Escuela");
  assert.ok(ENTORNO_CERCANO.companero_militancia, "Debe existir Compañero de Militancia");
  assert.ok(ENTORNO_CERCANO.don_tito_puntero, "Debe existir Don Tito Referente Barrial");
  assert.ok(ENTORNO_CERCANO.rival_agrupacion, "Debe existir Rival de Agrupación");
  assert.ok(ENTORNO_CERCANO.dona_rosa_vecina, "Debe existir Doña Rosa Vecina Almacenera");
});

test("Generación Reactiva del Termómetro de Entorno Cercano en Adolescencia (Fase Cuna) y Toggles de Pareja/DT", () => {
  const decEstudio = { id: "estudios_academicos", texto: "Priorizar el estudio riguroso, lectura y promedio escolar" };

  // Caso 1: Con pareja y con entrenador
  const res1 = obtenerReaccionesEntornoCercano({
    fase: 'cuna',
    opcionElegida: decEstudio,
    configEntorno: { tienePareja: true, tieneEntrenador: true }
  });

  assert.ok(res1.lista.length >= 7, "Debe generar al menos 7 figuras del entorno adolescente");
  assert.ok(res1.conteo.bancan >= 1, "Debe haber quienes bancan");
  assert.strictEqual(res1.conteo.total, res1.lista.length, "Total debe coincidir con lista");
  
  const tieneCamila = res1.lista.some(f => f.id === 'pareja');
  const tieneDT = res1.lista.some(f => f.id === 'entrenador_club');
  assert.ok(tieneCamila, "Debe incluir a la pareja formal cuando tienePareja es true");
  assert.ok(tieneDT, "Debe incluir al DT del club cuando tieneEntrenador es true");

  // Caso 2: Soltero y deporte libre
  const res2 = obtenerReaccionesEntornoCercano({
    fase: 'cuna',
    opcionElegida: decEstudio,
    configEntorno: { tienePareja: false, tieneEntrenador: false }
  });

  const tieneSoltero = res2.lista.some(f => f.id === 'soltero');
  const tieneGymLibre = res2.lista.some(f => f.id === 'gimnasio_libre');
  assert.ok(tieneSoltero, "Debe incluir estado de soltero libre cuando tienePareja es false");
  assert.ok(tieneGymLibre, "Debe incluir deporte libre cuando tieneEntrenador es false");
  assert.strictEqual(res2.lista.some(f => f.id === 'pareja'), false, "No debe figurar pareja cuando tienePareja es false");
  assert.strictEqual(res2.lista.some(f => f.id === 'entrenador_club'), false, "No debe figurar DT cuando tieneEntrenador es false");
});

test("Generación Reactiva en Militancia (Sin Cargo Público) y Métodos Institucionales en MotorJuego", () => {
  const decMilitante = { id: "cooperativa", texto: "Cooperativa de autoconstrucción donde las familias paguen el lote en cuotas" };

  const resMil = obtenerReaccionesEntornoCercano({
    fase: 'militante',
    opcionElegida: decMilitante,
    configEntorno: { tienePareja: true, tieneEntrenador: true }
  });

  assert.ok(resMil.lista.length >= 7, "Debe generar figuras de territorio y vínculos en militancia");
  assert.ok(resMil.lista.some(f => f.id === 'referente_barrial'), "Debe incluir a Don Tito");
  assert.ok(resMil.lista.some(f => f.id === 'companero_militancia'), "Debe incluir a compañero de militancia");
  assert.ok(resMil.lista.some(f => f.id === 'rival_agrupacion'), "Debe incluir a rival de agrupación");

  // Métodos en MotorJuego: ocupaCargoPublico y esAdolescente
  const motor = new MotorJuego();
  motor.faseActual = 'cuna';
  motor.saludSupervivencia.edad = 15;
  assert.strictEqual(motor.ocupaCargoPublico(), false, "En cuna no ocupa cargo público");
  assert.strictEqual(motor.esAdolescente(), true, "A los 15 años en cuna es adolescente");

  motor.faseActual = 'militante';
  motor.saludSupervivencia.edad = 20;
  assert.strictEqual(motor.ocupaCargoPublico(), false, "En militancia no ocupa cargo público");
  assert.strictEqual(motor.esAdolescente(), false, "A los 20 años en militancia no es adolescente");

  motor.faseActual = 'diputado';
  assert.strictEqual(motor.ocupaCargoPublico(), true, "Como diputado SÍ ocupa cargo público");

  motor.faseActual = 'presidente';
  assert.strictEqual(motor.ocupaCargoPublico(), true, "Como presidente SÍ ocupa cargo público");
});

test("Métricas y Números Granulares de Desarrollo Adolescente (No limitados a múltiplos de 5)", () => {
  const motor = new MotorJuego();
  motor.iniciarModoCuna('cuna_popular');

  // Verificar que el baseline contiene números no múltiplos de 5
  const statsCuna = Object.values(motor.perfilAdolescente);
  const noMultiplo5Baseline = statsCuna.some(v => v % 5 !== 0);
  assert.ok(noMultiplo5Baseline, "El perfil inicial debe contener métricas orgánicas no múltiplos de 5");

  // Verificar que las opciones de DILEMAS_CRECIMIENTO tienen impactos variados
  const d15 = DILEMAS_CRECIMIENTO.find(d => d.id === 'juv_15_anos');
  const d18 = DILEMAS_CRECIMIENTO.find(d => d.id === 'juv_18_anos');
  
  const todosImpactos = [];
  [...d15.opciones, ...d18.opciones].forEach(opc => {
    if (opc.impactoAdolescente) {
      Object.values(opc.impactoAdolescente).forEach(v => todosImpactos.push(v));
    }
  });

  const noMultiplo5Impactos = todosImpactos.filter(v => v !== 0 && v % 5 !== 0);
  assert.ok(noMultiplo5Impactos.length >= 10, "Debe haber una amplia mayoría de impactos que no sean múltiplos de 5");

  // Aplicar decisión y corroborar aplicación limpia
  const opcEstudio = d15.opciones.find(o => o.id === 'centro_estudiantes');
  const prevEstudios = motor.perfilAdolescente.estudios;
  motor.aplicarDecision(opcEstudio);
  assert.strictEqual(motor.perfilAdolescente.estudios, prevEstudios + opcEstudio.impactoAdolescente.estudios);
  assert.strictEqual(motor.perfilAdolescente.estudios % 5 !== 0, true, "El valor final de estudios debe ser un número orgánico");
});

console.log("\n=================================================================");

console.log(`🏁 RESULTADO FINAL: ${testsPasados} de ${testsTotales} pruebas PASADAS`);
console.log("=================================================================\n");

if (testsPasados === testsTotales) {
  process.exit(0);
} else {
  process.exit(1);
}
