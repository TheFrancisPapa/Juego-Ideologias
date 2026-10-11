let _saludModule = {};
let _origenesModule = {};
let _justiciaModule = {};
let _inteligenciaModule = {};
let _geopoliticaModule = {};
let _gabineteModule = {};
let _mediosPoliticosModule = {};
let _crisisEstallidoModule = {};
let _evacuacionModule = {};
let _retornoModule = {};
let _macroBCRAModule = {};
let _ecuacionUnificadaModule = {};
let _roscaFederalModule = {};
let _dinastiasModule = {};
let _ritmoSemanalModule = {};
let _legislativoModule = {};
if (typeof require !== 'undefined') {
  try {
    _saludModule = require('./salud_supervivencia.js');
  } catch (e) {}
  try {
    _origenesModule = require('./origenes_relaciones.js');
  } catch (e) {}
  try {
    _legislativoModule = require('./sistema_legislativo.js');
  } catch (e) {}
  try {
    _justiciaModule = require('./comodoro_py_justicia.js');
  } catch (e) {}
  try {
    _inteligenciaModule = require('./side_inteligencia.js');
  } catch (e) {}
  try {
    _geopoliticaModule = require('./geopolitica_cancilleria.js');
  } catch (e) {}
  try {
    _gabineteModule = require('./gabinete_ministros.js');
  } catch (e) {}
  try {
    _mediosPoliticosModule = require('./prensa_pauta_medios.js');
  } catch (e) {}
  try {
    _crisisEstallidoModule = require('./sala_crisis_estallido.js');
  } catch (e) {}
  try {
    _evacuacionModule = require('./caida_evacuacion_expresidente.js');
  } catch (e) {}
  try {
    _retornoModule = require('./operativo_retorno_expresidente.js');
  } catch (e) {}
  try {
    _macroBCRAModule = require('./calesita_macroeconomia_bcra.js');
  } catch (e) {}
  try {
    _ecuacionUnificadaModule = require('./ecuacion_unificada_simulador.js');
  } catch (e) {}
  try {
    _roscaFederalModule = require('./rosca_federal_provincias.js');
  } catch (e) {}
  try {
    _dinastiasModule = require('./dinastias_nepotismo.js');
  } catch (e) {}
  try {
    _ritmoSemanalModule = require('./ritmo_cadena_semanal.js');
  } catch (e) {}
}

const ARQUETIPOS_EDAD = (typeof window !== 'undefined' && window.ARQUETIPOS_EDAD) || _saludModule.ARQUETIPOS_EDAD || {};
const CATALOGO_MUERTES = (typeof window !== 'undefined' && window.CATALOGO_MUERTES) || _saludModule.CATALOGO_MUERTES || {};
const SUCESORES_PRESIDENCIALES = (typeof window !== 'undefined' && window.SUCESORES_PRESIDENCIALES) || _saludModule.SUCESORES_PRESIDENCIALES || {};
const DILEMAS_SALUD = (typeof window !== 'undefined' && window.DILEMAS_SALUD) || _saludModule.DILEMAS_SALUD || [];
const evaluarMuertePolitica = (typeof window !== 'undefined' && window.evaluarMuertePolitica) || _saludModule.evaluarMuertePolitica || (() => null);
const COEFICIENTE_OLIVOS = (typeof window !== 'undefined' && window.COEFICIENTE_OLIVOS) || _saludModule.COEFICIENTE_OLIVOS || {};
const BARRAS_FISIOLOGICAS = (typeof window !== 'undefined' && window.BARRAS_FISIOLOGICAS) || _saludModule.BARRAS_FISIOLOGICAS || {};
const FASES_BIOLOGICAS_DIRIGENTE = (typeof window !== 'undefined' && window.FASES_BIOLOGICAS_DIRIGENTE) || _saludModule.FASES_BIOLOGICAS_DIRIGENTE || {};
const EQUIPO_UMP_MEDICOS = (typeof window !== 'undefined' && window.EQUIPO_UMP_MEDICOS) || _saludModule.EQUIPO_UMP_MEDICOS || {};
const DILEMAS_QUIROFANO = (typeof window !== 'undefined' && window.DILEMAS_QUIROFANO) || _saludModule.DILEMAS_QUIROFANO || {};
const CATALOGO_ENFERMEDADES_PODER = (typeof window !== 'undefined' && window.CATALOGO_ENFERMEDADES_PODER) || _saludModule.CATALOGO_ENFERMEDADES_PODER || {};
const OPCIONES_BRINDIS_CUMPLEANOS = (typeof window !== 'undefined' && window.OPCIONES_BRINDIS_CUMPLEANOS) || _saludModule.OPCIONES_BRINDIS_CUMPLEANOS || {};
const ACCIONES_BOTIQUIN_UMP = (typeof window !== 'undefined' && window.ACCIONES_BOTIQUIN_UMP) || _saludModule.ACCIONES_BOTIQUIN_UMP || {};
const SistemaSaludSupervivencia = (typeof window !== 'undefined' && window.SistemaSaludSupervivencia) || _saludModule.SistemaSaludSupervivencia || null;

const ORIGENES_CUNA = (typeof window !== 'undefined' && window.ORIGENES_CUNA) || _origenesModule.ORIGENES_CUNA || {};
const CARGOS_BARRO = (typeof window !== 'undefined' && window.CARGOS_BARRO) || _origenesModule.CARGOS_BARRO || {};
const RANGOS_PRESIDENTE = (typeof window !== 'undefined' && window.RANGOS_PRESIDENTE) || _origenesModule.RANGOS_PRESIDENTE || {};
const DILEMAS_CRECIMIENTO = (typeof window !== 'undefined' && window.DILEMAS_CRECIMIENTO) || _origenesModule.DILEMAS_CRECIMIENTO || [];
const DILEMA_VENTA_ALMA = (typeof window !== 'undefined' && window.DILEMA_VENTA_ALMA) || _origenesModule.DILEMA_VENTA_ALMA || null;
const TABLERO_RELACIONES = (typeof window !== 'undefined' && window.TABLERO_RELACIONES) || _origenesModule.TABLERO_RELACIONES || {};
const simularEleccionConUrnas = (typeof window !== 'undefined' && window.simularEleccionConUrnas) || _origenesModule.simularEleccionConUrnas || (() => null);
const ATRIBUTOS_BASE_DEF = (typeof window !== 'undefined' && window.ATRIBUTOS_BASE_DEF) || _origenesModule.ATRIBUTOS_BASE_DEF || {};
const VIRTUDES_CRIOLLAS = (typeof window !== 'undefined' && window.VIRTUDES_CRIOLLAS) || _origenesModule.VIRTUDES_CRIOLLAS || {};
const DEFECTOS_CRIOLLOS = (typeof window !== 'undefined' && window.DEFECTOS_CRIOLLOS) || _origenesModule.DEFECTOS_CRIOLLOS || {};
const NOMBRES_DIRIGENTES_ARGENTINOS = (typeof window !== 'undefined' && window.NOMBRES_DIRIGENTES_ARGENTINOS) || _origenesModule.NOMBRES_DIRIGENTES_ARGENTINOS || [];
const generarFichaMatricularDirigente = (typeof window !== 'undefined' && window.generarFichaMatricularDirigente) || _origenesModule.generarFichaMatricularDirigente || (() => null);
const TRAMOS_DESBLOQUEO_LEGAL = (typeof window !== 'undefined' && window.TRAMOS_DESBLOQUEO_LEGAL) || _origenesModule.TRAMOS_DESBLOQUEO_LEGAL || {};
const DILEMAS_HITOS_LEGALES = (typeof window !== 'undefined' && window.DILEMAS_HITOS_LEGALES) || _origenesModule.DILEMAS_HITOS_LEGALES || [];
const generarNotificacionEstadoCivico = (typeof window !== 'undefined' && window.generarNotificacionEstadoCivico) || _origenesModule.generarNotificacionEstadoCivico || (() => null);
const evaluarHitoDesbloqueoLegal = (typeof window !== 'undefined' && window.evaluarHitoDesbloqueoLegal) || _origenesModule.evaluarHitoDesbloqueoLegal || (() => null);

const VIAS_NORMATIVAS = (typeof window !== 'undefined' && window.VIAS_NORMATIVAS) || _legislativoModule.VIAS_NORMATIVAS || {};
const IMPACTOS_PRACTICAS_LEGALES_12AXES = (typeof window !== 'undefined' && window.IMPACTOS_PRACTICAS_LEGALES_12AXES) || _legislativoModule.IMPACTOS_PRACTICAS_LEGALES_12AXES || {};
const NORMAS_EN_TRAMITE_INICIALES = (typeof window !== 'undefined' && window.NORMAS_EN_TRAMITE_INICIALES) || _legislativoModule.NORMAS_EN_TRAMITE_INICIALES || [];
const ACCIONES_NORMATIVAS = (typeof window !== 'undefined' && window.ACCIONES_NORMATIVAS) || _legislativoModule.ACCIONES_NORMATIVAS || {};
const DILEMAS_LEGISLATIVOS = (typeof window !== 'undefined' && window.DILEMAS_LEGISLATIVOS) || _legislativoModule.DILEMAS_LEGISLATIVOS || [];
const SistemaLegislativo = (typeof window !== 'undefined' && window.SistemaLegislativo) || _legislativoModule.SistemaLegislativo || null;


const FASES_PROCESALES = (typeof window !== 'undefined' && window.FASES_PROCESALES) || _justiciaModule.FASES_PROCESALES || {};
const FAUNA_COMODORO_PY = (typeof window !== 'undefined' && window.FAUNA_COMODORO_PY) || _justiciaModule.FAUNA_COMODORO_PY || {};
const DILEMAS_JUDICIALES = (typeof window !== 'undefined' && window.DILEMAS_JUDICIALES) || _justiciaModule.DILEMAS_JUDICIALES || [];
const ESTRATEGIAS_DESAFUERO = (typeof window !== 'undefined' && window.ESTRATEGIAS_DESAFUERO) || _justiciaModule.ESTRATEGIAS_DESAFUERO || {};
const ACCIONES_EZEIZA = (typeof window !== 'undefined' && window.ACCIONES_EZEIZA) || _justiciaModule.ACCIONES_EZEIZA || {};
const DESTINOS_JUDICIALES = (typeof window !== 'undefined' && window.DESTINOS_JUDICIALES) || _justiciaModule.DESTINOS_JUDICIALES || {};
const SistemaComodoroPy = (typeof window !== 'undefined' && window.SistemaComodoroPy) || _justiciaModule.SistemaComodoroPy || null;

const ESTRUCTURA_CASA_SIDE = (typeof window !== 'undefined' && window.ESTRUCTURA_CASA_SIDE) || _inteligenciaModule.ESTRUCTURA_CASA_SIDE || {};
const USOS_FONDOS_RESERVADOS = (typeof window !== 'undefined' && window.USOS_FONDOS_RESERVADOS) || _inteligenciaModule.USOS_FONDOS_RESERVADOS || {};
const OPERACIONES_NEGRAS = (typeof window !== 'undefined' && window.OPERACIONES_NEGRAS) || _inteligenciaModule.OPERACIONES_NEGRAS || {};
const EVENTOS_BOOMERANG_SIDE = (typeof window !== 'undefined' && window.EVENTOS_BOOMERANG_SIDE) || _inteligenciaModule.EVENTOS_BOOMERANG_SIDE || {};
const DILEMAS_INTELIGENCIA = (typeof window !== 'undefined' && window.DILEMAS_INTELIGENCIA) || _inteligenciaModule.DILEMAS_INTELIGENCIA || [];
const ESTRATEGIAS_BICAMERAL = (typeof window !== 'undefined' && window.ESTRATEGIAS_BICAMERAL) || _inteligenciaModule.ESTRATEGIAS_BICAMERAL || {};
const DESTINOS_INTELIGENCIA_FINAL = (typeof window !== 'undefined' && window.DESTINOS_INTELIGENCIA_FINAL) || _inteligenciaModule.DESTINOS_INTELIGENCIA_FINAL || {};
const SistemaInteligenciaSIDE = (typeof window !== 'undefined' && window.SistemaInteligenciaSIDE) || _inteligenciaModule.SistemaInteligenciaSIDE || null;

const FUERZAS_INTERNACIONALES = (typeof window !== 'undefined' && window.FUERZAS_INTERNACIONALES) || _geopoliticaModule.FUERZAS_INTERNACIONALES || {};
const FAUNA_DIPLOMATICA = (typeof window !== 'undefined' && window.FAUNA_DIPLOMATICA) || _geopoliticaModule.FAUNA_DIPLOMATICA || {};
const ACCIONES_DIPLOMATICAS = (typeof window !== 'undefined' && window.ACCIONES_DIPLOMATICAS) || _geopoliticaModule.ACCIONES_DIPLOMATICAS || {};
const EVENTOS_EXTREMOS_GEOPOLITICA = (typeof window !== 'undefined' && window.EVENTOS_EXTREMOS_GEOPOLITICA) || _geopoliticaModule.EVENTOS_EXTREMOS_GEOPOLITICA || {};
const DILEMAS_GEOPOLITICA = (typeof window !== 'undefined' && window.DILEMAS_GEOPOLITICA) || _geopoliticaModule.DILEMAS_GEOPOLITICA || [];
const DESTINOS_GEOPOLITICA_FINAL = (typeof window !== 'undefined' && window.DESTINOS_GEOPOLITICA_FINAL) || _geopoliticaModule.DESTINOS_GEOPOLITICA_FINAL || {};
const SistemaGeopolitica = (typeof window !== 'undefined' && window.SistemaGeopolitica) || _geopoliticaModule.SistemaGeopolitica || null;

const CARTERAS_GABINETE = (typeof window !== 'undefined' && window.CARTERAS_GABINETE) || _gabineteModule.CARTERAS_GABINETE || {};
const INCIDENTES_PASILLO = (typeof window !== 'undefined' && window.INCIDENTES_PASILLO) || _gabineteModule.INCIDENTES_PASILLO || {};
const ACCIONES_GABINETE = (typeof window !== 'undefined' && window.ACCIONES_GABINETE) || _gabineteModule.ACCIONES_GABINETE || {};
const DILEMAS_GABINETE = (typeof window !== 'undefined' && window.DILEMAS_GABINETE) || _gabineteModule.DILEMAS_GABINETE || [];
const DESTINOS_GABINETE_FINAL = (typeof window !== 'undefined' && window.DESTINOS_GABINETE_FINAL) || _gabineteModule.DESTINOS_GABINETE_FINAL || {};
const SistemaGabinete = (typeof window !== 'undefined' && window.SistemaGabinete) || _gabineteModule.SistemaGabinete || null;

const ESQUEMAS_PAUTA = (typeof window !== 'undefined' && window.ESQUEMAS_PAUTA) || _mediosPoliticosModule.ESQUEMAS_PAUTA || {};
const BOLSILLOS_MEDIOS = (typeof window !== 'undefined' && window.BOLSILLOS_MEDIOS) || _mediosPoliticosModule.BOLSILLOS_MEDIOS || {};
const FAUNA_ACREDITADOS = (typeof window !== 'undefined' && window.FAUNA_ACREDITADOS) || _mediosPoliticosModule.FAUNA_ACREDITADOS || {};
const RESPUESTAS_CONFERENCIA = (typeof window !== 'undefined' && window.RESPUESTAS_CONFERENCIA) || _mediosPoliticosModule.RESPUESTAS_CONFERENCIA || {};
const ENTREVISTAS_PRIME_TIME = (typeof window !== 'undefined' && window.ENTREVISTAS_PRIME_TIME) || _mediosPoliticosModule.ENTREVISTAS_PRIME_TIME || {};
const ACCIONES_TACTICAS_PRENSA = (typeof window !== 'undefined' && window.ACCIONES_TACTICAS_PRENSA) || _mediosPoliticosModule.ACCIONES_TACTICAS_PRENSA || {};
const DILEMAS_MEDIOS = (typeof window !== 'undefined' && window.DILEMAS_MEDIOS) || _mediosPoliticosModule.DILEMAS_MEDIOS || [];
const DESTINOS_MEDIOS_FINAL = (typeof window !== 'undefined' && window.DESTINOS_MEDIOS_FINAL) || _mediosPoliticosModule.DESTINOS_MEDIOS_FINAL || {};
const SistemaPrensaMedios = (typeof window !== 'undefined' && window.SistemaPrensaMedios) || _mediosPoliticosModule.SistemaPrensaMedios || null;

const FASES_MECHA_ESTALLIDO = (typeof window !== 'undefined' && window.FASES_MECHA_ESTALLIDO) || _crisisEstallidoModule.FASES_MECHA_ESTALLIDO || {};
const FAUNA_EMERGENCIA = (typeof window !== 'undefined' && window.FAUNA_EMERGENCIA) || _crisisEstallidoModule.FAUNA_EMERGENCIA || {};
const DECISIONES_SALA_CRISIS = (typeof window !== 'undefined' && window.DECISIONES_SALA_CRISIS) || _crisisEstallidoModule.DECISIONES_SALA_CRISIS || {};
const DILEMAS_SALA_CRISIS = (typeof window !== 'undefined' && window.DILEMAS_SALA_CRISIS) || _crisisEstallidoModule.DILEMAS_SALA_CRISIS || [];
const DESTINOS_CRISIS_FINAL = (typeof window !== 'undefined' && window.DESTINOS_CRISIS_FINAL) || _crisisEstallidoModule.DESTINOS_CRISIS_FINAL || {};
const SistemaSalaCrisis = (typeof window !== 'undefined' && window.SistemaSalaCrisis) || _crisisEstallidoModule.SistemaSalaCrisis || null;

const TRES_PATAS_COLAPSO = (typeof window !== 'undefined' && window.TRES_PATAS_COLAPSO) || _evacuacionModule.TRES_PATAS_COLAPSO || {};
const OPCIONES_RENUNCIA_FORZADA = (typeof window !== 'undefined' && window.OPCIONES_RENUNCIA_FORZADA) || _evacuacionModule.OPCIONES_RENUNCIA_FORZADA || {};
const RUTAS_ESCAPE_ROSADA = (typeof window !== 'undefined' && window.RUTAS_ESCAPE_ROSADA) || _evacuacionModule.RUTAS_ESCAPE_ROSADA || {};
const PRESIDENTES_EXPRESS_ASAMBLEA = (typeof window !== 'undefined' && window.PRESIDENTES_EXPRESS_ASAMBLEA) || _evacuacionModule.PRESIDENTES_EXPRESS_ASAMBLEA || {};
const DESTINOS_EXPRESIDENTE = (typeof window !== 'undefined' && window.DESTINOS_EXPRESIDENTE) || _evacuacionModule.DESTINOS_EXPRESIDENTE || {};
const REPORTE_FUERZA_AEREA_BASE = (typeof window !== 'undefined' && window.REPORTE_FUERZA_AEREA_BASE) || _evacuacionModule.REPORTE_FUERZA_AEREA_BASE || {};
const SistemaCaidaEvacuacion = (typeof window !== 'undefined' && window.SistemaCaidaEvacuacion) || _evacuacionModule.SistemaCaidaEvacuacion || null;

const FASES_OPERATIVO_RETORNO = (typeof window !== 'undefined' && window.FASES_OPERATIVO_RETORNO) || _retornoModule.FASES_OPERATIVO_RETORNO || {};
const ECOSISTEMA_DIGITAL_RETORNO = (typeof window !== 'undefined' && window.ECOSISTEMA_DIGITAL_RETORNO) || _retornoModule.ECOSISTEMA_DIGITAL_RETORNO || {};
const TRES_ALIANZAS_PERDON = (typeof window !== 'undefined' && window.TRES_ALIANZAS_PERDON) || _retornoModule.TRES_ALIANZAS_PERDON || {};
const DILEMAS_OPERATIVO_RETORNO = (typeof window !== 'undefined' && window.DILEMAS_OPERATIVO_RETORNO) || _retornoModule.DILEMAS_OPERATIVO_RETORNO || {};
const ACCIONES_BUNKER_RETORNO = (typeof window !== 'undefined' && window.ACCIONES_BUNKER_RETORNO) || _retornoModule.ACCIONES_BUNKER_RETORNO || {};
const ESCENAS_VICTORIA_RETORNO = (typeof window !== 'undefined' && window.ESCENAS_VICTORIA_RETORNO) || _retornoModule.ESCENAS_VICTORIA_RETORNO || {};
const SistemaOperativoRetorno = (typeof window !== 'undefined' && window.SistemaOperativoRetorno) || _retornoModule.SistemaOperativoRetorno || null;

const FASES_CALESITA_CAMBIARIA = (typeof window !== 'undefined' && window.FASES_CALESITA_CAMBIARIA) || _macroBCRAModule.FASES_CALESITA_CAMBIARIA || {};
const TABLERO_SEMAFOROS_BCRA = (typeof window !== 'undefined' && window.TABLERO_SEMAFOROS_BCRA) || _macroBCRAModule.TABLERO_SEMAFOROS_BCRA || {};
const TRAMPAS_POLITICA_ECONOMICA = (typeof window !== 'undefined' && window.TRAMPAS_POLITICA_ECONOMICA) || _macroBCRAModule.TRAMPAS_POLITICA_ECONOMICA || {};
const DILEMAS_MACRO_EXTREMOS = (typeof window !== 'undefined' && window.DILEMAS_MACRO_EXTREMOS) || _macroBCRAModule.DILEMAS_MACRO_EXTREMOS || {};
const ACCIONES_MESA_DINERO = (typeof window !== 'undefined' && window.ACCIONES_MESA_DINERO) || _macroBCRAModule.ACCIONES_MESA_DINERO || {};
const CABLES_URGENTES_MESA = (typeof window !== 'undefined' && window.CABLES_URGENTES_MESA) || _macroBCRAModule.CABLES_URGENTES_MESA || [];
const SistemaMacroCalesitaBCRA = (typeof window !== 'undefined' && window.SistemaMacroCalesitaBCRA) || _macroBCRAModule.SistemaMacroCalesitaBCRA || null;

const FASES_INTEGRADAS_SIMULADOR = (typeof window !== 'undefined' && window.FASES_INTEGRADAS_SIMULADOR) || _ecuacionUnificadaModule.FASES_INTEGRADAS_SIMULADOR || {};
const SEMANA_CRITICA_VIERNES_NEGRO = (typeof window !== 'undefined' && window.SEMANA_CRITICA_VIERNES_NEGRO) || _ecuacionUnificadaModule.SEMANA_CRITICA_VIERNES_NEGRO || {};
const SistemaEcuacionUnificada = (typeof window !== 'undefined' && window.SistemaEcuacionUnificada) || _ecuacionUnificadaModule.SistemaEcuacionUnificada || null;

const LIGAS_PROVINCIALES = (typeof window !== 'undefined' && window.LIGAS_PROVINCIALES) || _roscaFederalModule.LIGAS_PROVINCIALES || {};
const PALANCAS_FINANCIERAS_EJECUTIVO = (typeof window !== 'undefined' && window.PALANCAS_FINANCIERAS_EJECUTIVO) || _roscaFederalModule.PALANCAS_FINANCIERAS_EJECUTIVO || {};
const calcularAlgoritmoCorteBoleta = (typeof window !== 'undefined' && window.calcularAlgoritmoCorteBoleta) || _roscaFederalModule.calcularAlgoritmoCorteBoleta || (() => null);
const DILEMAS_FEDERALES_EXTREMOS = (typeof window !== 'undefined' && window.DILEMAS_FEDERALES_EXTREMOS) || _roscaFederalModule.DILEMAS_FEDERALES_EXTREMOS || {};
const ACCIONES_ROSCA_FEDERAL = (typeof window !== 'undefined' && window.ACCIONES_ROSCA_FEDERAL) || _roscaFederalModule.ACCIONES_ROSCA_FEDERAL || {};
const SistemaRoscaFederal = (typeof window !== 'undefined' && window.SistemaRoscaFederal) || _roscaFederalModule.SistemaRoscaFederal || null;

const ROLES_CLAN_FAMILIAR = (typeof window !== 'undefined' && window.ROLES_CLAN_FAMILIAR) || _dinastiasModule.ROLES_CLAN_FAMILIAR || {};
const RESOLUCIONES_DOMESTICAS_LIVING = (typeof window !== 'undefined' && window.RESOLUCIONES_DOMESTICAS_LIVING) || _dinastiasModule.RESOLUCIONES_DOMESTICAS_LIVING || {};
const DILEMAS_DINASTICOS_JUGABLES = (typeof window !== 'undefined' && window.DILEMAS_DINASTICOS_JUGABLES) || _dinastiasModule.DILEMAS_DINASTICOS_JUGABLES || {};
const HEREDEROS_REENCARNACION_DINASTICA = (typeof window !== 'undefined' && window.HEREDEROS_REENCARNACION_DINASTICA) || _dinastiasModule.HEREDEROS_REENCARNACION_DINASTICA || {};
const EFECTOS_SANGRE_NUEVA_VIDA = (typeof window !== 'undefined' && window.EFECTOS_SANGRE_NUEVA_VIDA) || _dinastiasModule.EFECTOS_SANGRE_NUEVA_VIDA || {};
const SistemaDinastiasNepotismo = (typeof window !== 'undefined' && window.SistemaDinastiasNepotismo) || _dinastiasModule.SistemaDinastiasNepotismo || null;

const MODOS_RITMO_SEMANAL = (typeof window !== 'undefined' && window.MODOS_RITMO_SEMANAL) || _ritmoSemanalModule.MODOS_RITMO_SEMANAL || {};
const DIAS_SEMANA_SECUENCIA = (typeof window !== 'undefined' && window.DIAS_SEMANA_SECUENCIA) || _ritmoSemanalModule.DIAS_SEMANA_SECUENCIA || [];
const DILEMAS_ENCADENADOS_SEMANA = (typeof window !== 'undefined' && window.DILEMAS_ENCADENADOS_SEMANA) || _ritmoSemanalModule.DILEMAS_ENCADENADOS_SEMANA || {};
const calcularRadarHipocresiaSemanal = (typeof window !== 'undefined' && window.calcularRadarHipocresiaSemanal) || _ritmoSemanalModule.calcularRadarHipocresiaSemanal || (() => null);
const SistemaRitmoCadenaSemanal = (typeof window !== 'undefined' && window.SistemaRitmoCadenaSemanal) || _ritmoSemanalModule.SistemaRitmoCadenaSemanal || null;

class MotorJuego {

  constructor() {
    this.reiniciar();
  }

  reiniciar() {
    this.carrera = 'militante';
    this.faseActual = 'militante';
    this.indiceDilema = 0;
    this.dilemasFase = [];
    this.totalRespuestas = 0;

    // Banderas de decisiones del jugador (para ramificar eventos futuros)
    this.flags = {};

    // Almacenamiento de sumas y cantidades por eje para promedio exacto
    this.axisSum = {};
    this.axisN = {};
    this.vector12Axes = {};

    for (const k in DOCE_EJES) {
      this.axisSum[k] = 0;
      this.axisN[k] = 0;
      this.vector12Axes[k] = null; // null = sin datos suficientes aún
    }

    // Tablero Macroeconómico de la República Argentina
    this.macroeconomia = {
      inflacionMensual: 4.2,      // % mensual
      riesgoPais: 1250,           // puntos básicos
      reservasNetasBCRA: -1500,   // millones de USD
      resultadoFiscalPBI: 0.1,    // % del PBI (positivo = superávit)
      pobreza: 44.0               // % de la población
    };
    this.macro = this.macroeconomia;

    // El Termómetro Criollo: Medidores invisibles y dinámicos del humor y poder real
    this.termometroCriollo = {
      dolarBlue: 1280,             // Precio del dólar paralelo en la City ($)
      mechaSocial: 40,             // 0 a 100% de tensión callejera
      reservasBCRA: 2200,          // Millones de USD disponibles
      roscaGobernadores: 55,       // % de alineamiento de gobernadores y bloques provinciales
      humorAfaScaloneta: 65        // 0 a 100% de humor del fútbol y la AFA
    };
    this.climaxCrisis = false;

    // Reloj de Vida, Desgaste del Sillón y Supervivencia Política
    if (SistemaSaludSupervivencia) {
      this.saludSupervivencia = new SistemaSaludSupervivencia({
        arquetipo: 'maduro_carrera',
        edad: 55,
        coronarias: 75,
        paranoia: 30,
        seguridad: 65,
        medicoTipo: 'cardenal_medicina',
        diasEnPoder: 0,
        nombreMandatario: "El Maduro de Carrera (55 Años)"
      });
    } else {
      this.saludSupervivencia = {
        arquetipo: 'maduro_carrera',
        edad: 55,
        coronarias: 75,
        paranoia: 30,
        seguridad: 65,
        digestivo: 68,
        cabeza: 70,
        vigorPublico: 70,
        medicoTipo: 'cardenal_medicina',
        diasEnPoder: 0,
        muertePolitica: null,
        historialClinico: [],
        esSucesor: false,
        sucesorActual: null,
        nombreMandatario: "El Maduro de Carrera (55 Años)"
      };
    }

    // Aprobación de los 6 sectores de la sociedad argentina (0 a 100)
    this.aprobacionSectores = {
      trabajo: 50,
      productivo: 50,
      claseMedia: 50,
      estadoCiencia: 50,
      seguridadJusticia: 50,
      frenteExterno: 50
    };

    this.historialDecisiones = [];
    this.derrotaElectoral = false;

    // 3 Modos de Inicio: 'cuna', 'barro', 'presidente'
    this.modoInicio = 'presidente';
    this.origenElegido = null;
    this.cargoBarroElegido = null;
    this.rangoPresidenteElegido = null;
    this.fichaMatricular = null;

    // El Tablero de Relaciones: Amigos, Interesados y Peligrosos
    this.relaciones = {};
    if (TABLERO_RELACIONES) {
      for (const k in TABLERO_RELACIONES) {
        this.relaciones[k] = { ...TABLERO_RELACIONES[k] };
      }
    }
    this.eleccionUrnasActual = null;
    this.expedienteJudicial = SistemaComodoroPy ? new SistemaComodoroPy() : null;
    this.sistemaSIDE = SistemaInteligenciaSIDE ? new SistemaInteligenciaSIDE() : null;
    this.sistemaGeopolitica = SistemaGeopolitica ? new SistemaGeopolitica() : null;
    this.sistemaGabinete = SistemaGabinete ? new SistemaGabinete() : null;
    this.sistemaMedios = SistemaPrensaMedios ? new SistemaPrensaMedios() : null;
    this.sistemaCrisis = SistemaSalaCrisis ? new SistemaSalaCrisis() : null;
    this.sistemaEvacuacion = SistemaCaidaEvacuacion ? new SistemaCaidaEvacuacion() : null;
    this.sistemaRetorno = SistemaOperativoRetorno ? new SistemaOperativoRetorno() : null;
    this.sistemaMacroBCRA = SistemaMacroCalesitaBCRA ? new SistemaMacroCalesitaBCRA() : null;
    if (this.sistemaMacroBCRA) {
      this.sistemaMacroBCRA.sincronizarConMotor(this);
    }
    this.sistemaEcuacionUnificada = SistemaEcuacionUnificada ? new SistemaEcuacionUnificada() : null;
    this.sistemaRoscaFederal = SistemaRoscaFederal ? new SistemaRoscaFederal() : null;
    if (this.sistemaRoscaFederal) {
      this.sistemaRoscaFederal.sincronizarConMotor(this);
    }
    this.sistemaDinastias = SistemaDinastiasNepotismo ? new SistemaDinastiasNepotismo(this) : null;
    this.sistemaRitmoSemanal = SistemaRitmoCadenaSemanal ? new SistemaRitmoCadenaSemanal('equilibrado') : null;
    this.sistemaLegislativo = SistemaLegislativo ? new SistemaLegislativo() : null;
    if (this.sistemaLegislativo) {
      this.sistemaLegislativo.sincronizarConMotor(this);
    }
  }


  iniciarPartida(carrera, arquetipoId = 'maduro_carrera') {
    this.reiniciar();
    this.carrera = carrera;
    this.faseActual = carrera;

    if (ARQUETIPOS_EDAD && ARQUETIPOS_EDAD[arquetipoId]) {
      const arq = ARQUETIPOS_EDAD[arquetipoId];
      this.saludSupervivencia.arquetipo = arq.id;
      this.saludSupervivencia.edad = arq.edadInicial;
      this.saludSupervivencia.coronarias = arq.coronarias;
      this.saludSupervivencia.paranoia = arq.paranoia;
      this.saludSupervivencia.seguridad = arq.seguridad;
      this.saludSupervivencia.nombreMandatario = arq.nombre;
      if (arq.roscaInicialMod) {
        this.termometroCriollo.roscaGobernadores = Math.max(0, Math.min(100, this.termometroCriollo.roscaGobernadores + arq.roscaInicialMod));
      }
    }

    this.cargarDilemasDeFase(this.faseActual);
  }

  iniciarModoCuna(origenId = 'cuna_popular') {
    this.reiniciar();
    this.carrera = 'cuna';
    this.faseActual = 'cuna';
    this.modoInicio = 'cuna';

    const orig = ORIGENES_CUNA[origenId] || ORIGENES_CUNA.cuna_popular;
    this.origenElegido = orig;
    this.saludSupervivencia.arquetipo = 'pibe_disruptivo';
    this.saludSupervivencia.edad = orig.edadInicial !== undefined ? orig.edadInicial : 0;
    this.saludSupervivencia.coronarias = 100;
    this.saludSupervivencia.paranoia = 5;
    this.saludSupervivencia.seguridad = 50;
    this.saludSupervivencia.nombreMandatario = `Joven de ${orig.nombre}`;

    if (orig.modificadores) {
      for (const s in orig.modificadores) {
        if (this.aprobacionSectores[s] !== undefined) {
          this.aprobacionSectores[s] = Math.max(5, Math.min(95, this.aprobacionSectores[s] + orig.modificadores[s]));
        } else if (this.termometroCriollo[s] !== undefined) {
          this.termometroCriollo[s] += orig.modificadores[s];
        }
      }
    }

    if (orig.vectorEjesBase) {
      for (const e in orig.vectorEjesBase) {
        if (this.axisSum[e] !== undefined) {
          this.axisSum[e] += orig.vectorEjesBase[e];
          this.axisN[e] += 1;
          this.vector12Axes[e] = orig.vectorEjesBase[e];
        }
      }
    }

    this.cargarDilemasDeFase('cuna');
    return orig;
  }

  iniciarModoBarro(cargoId = 'concejal_conurbano', edad = null) {
    this.reiniciar();
    this.carrera = 'militante';
    this.faseActual = 'militante';
    this.modoInicio = 'barro';

    const cargo = CARGOS_BARRO[cargoId] || CARGOS_BARRO.concejal_conurbano;
    this.cargoBarroElegido = cargo;

    const edadCalc = edad || Math.floor(cargo.edadRango[0] + Math.random() * (cargo.edadRango[1] - cargo.edadRango[0] + 1));
    this.saludSupervivencia.arquetipo = edadCalc < 40 ? 'pibe_maravilla' : 'maduro_carrera';
    this.saludSupervivencia.edad = edadCalc;
    this.saludSupervivencia.coronarias = edadCalc < 40 ? 90 : 75;
    this.saludSupervivencia.paranoia = 30;
    this.saludSupervivencia.seguridad = 60;
    this.saludSupervivencia.nombreMandatario = `${cargo.nombre} (${edadCalc} Años)`;

    if (cargo.modificadores) {
      for (const s in cargo.modificadores) {
        if (this.aprobacionSectores[s] !== undefined) {
          this.aprobacionSectores[s] = Math.max(5, Math.min(95, this.aprobacionSectores[s] + cargo.modificadores[s]));
        } else if (this.termometroCriollo[s] !== undefined) {
          this.termometroCriollo[s] += cargo.modificadores[s];
        }
      }
    }

    this.cargarDilemasDeFase('militante');
    return cargo;
  }

  iniciarModoPresidente(rangoId = 'candidato_aparato', edad = null) {
    this.reiniciar();
    this.carrera = 'presidente';
    this.faseActual = 'presidente';
    this.modoInicio = 'presidente';

    const rango = RANGOS_PRESIDENTE[rangoId] || RANGOS_PRESIDENTE.candidato_aparato;
    this.rangoPresidenteElegido = rango;

    const edadCalc = edad || Math.floor(rango.edadRango[0] + Math.random() * (rango.edadRango[1] - rango.edadRango[0] + 1));
    this.saludSupervivencia.arquetipo = rangoId === 'pibe_disruptivo' ? 'pibe_maravilla' : (rangoId === 'patriarca_retornado' ? 'caudillo_historico' : 'maduro_carrera');
    this.saludSupervivencia.edad = edadCalc;
    this.saludSupervivencia.coronarias = rango.coronarias;
    this.saludSupervivencia.paranoia = rango.paranoia;
    this.saludSupervivencia.seguridad = rango.seguridad;
    this.saludSupervivencia.nombreMandatario = `${rango.nombre}`;

    if (rango.modificadores) {
      for (const s in rango.modificadores) {
        if (this.termometroCriollo[s] !== undefined) {
          this.termometroCriollo[s] += rango.modificadores[s];
        }
      }
    }

    this.cargarDilemasDeFase('presidente');
    return rango;
  }

  generarFichaMatricular(opciones = {}) {
    if (typeof generarFichaMatricularDirigente === 'function') {
      return generarFichaMatricularDirigente(opciones);
    }
    return null;
  }

  confirmarFichaPersonaje(ficha) {
    if (!ficha) return null;

    // Sincronizar el arranque de la partida según el modo de la ficha
    if (ficha.modo === 'cuna') {
      const origId = (ficha.origen && ficha.origen.id) || 'cuna_popular';
      this.iniciarModoCuna(origId);
    } else if (ficha.modo === 'barro') {
      this.iniciarModoBarro('concejal_conurbano', ficha.edad);
    } else {
      this.iniciarModoPresidente('candidato_aparato', ficha.edad);
    }

    this.fichaMatricular = ficha;

    // Sobrescribir datos del dirigente en salud, termómetro y perfil
    if (ficha.nombre) {
      this.saludSupervivencia.nombreMandatario = ficha.nombre;
    }
    if (ficha.edad !== undefined) {
      this.saludSupervivencia.edad = ficha.edad;
    }
    if (ficha.atributos && ficha.atributos.chasis) {
      this.saludSupervivencia.coronarias = Math.min(100, Math.max(30, ficha.atributos.chasis));
    }
    if (ficha.atributos && ficha.atributos.rosca) {
      this.termometroCriollo.roscaGobernadores = Math.min(100, Math.max(10, ficha.atributos.rosca));
    }
    if (ficha.origen) {
      this.origenElegido = ficha.origen;
    }

    return this.fichaMatricular;
  }

  obtenerFichaMatricular() {
    return this.fichaMatricular;
  }

  pactarConRelacion(relacionId) {
    if (!this.relaciones[relacionId]) return null;
    const rel = this.relaciones[relacionId];
    rel.estado = 'pactado';
    rel.pactado = true;

    if (relacionId === 'puntero_tano') {
      rel.fiscalesAportados = 15;
      this.termometroCriollo.roscaGobernadores = Math.min(100, this.termometroCriollo.roscaGobernadores + 15);
      this.termometroCriollo.mechaSocial = Math.max(0, this.termometroCriollo.mechaSocial - 15);
      this.saludSupervivencia.paranoia = Math.min(100, this.saludSupervivencia.paranoia + 10);
    } else if (relacionId === 'financista_nico') {
      this.termometroCriollo.reservasBCRA += 800;
      this.termometroCriollo.dolarBlue = Math.max(900, this.termometroCriollo.dolarBlue - 150);
      this.saludSupervivencia.paranoia = Math.min(100, this.saludSupervivencia.paranoia + 15);
    } else if (relacionId === 'comisario_bonaerense') {
      this.saludSupervivencia.seguridad = Math.min(100, this.saludSupervivencia.seguridad + 20);
      this.aprobacionSectores.seguridadJusticia = Math.min(95, this.aprobacionSectores.seguridadJusticia + 15);
      this.saludSupervivencia.paranoia = Math.min(100, this.saludSupervivencia.paranoia + 10);
    } else if (relacionId === 'barra_brava_club') {
      this.termometroCriollo.humorAfaScaloneta = Math.min(100, this.termometroCriollo.humorAfaScaloneta + 15);
      this.saludSupervivencia.seguridad = Math.min(100, this.saludSupervivencia.seguridad + 10);
      this.termometroCriollo.mechaSocial = Math.max(0, this.termometroCriollo.mechaSocial - 5);
    } else if (relacionId === 'operador_comodoro_py') {
      this.saludSupervivencia.paranoia = Math.max(0, this.saludSupervivencia.paranoia - 20);
      this.termometroCriollo.roscaGobernadores = Math.min(100, this.termometroCriollo.roscaGobernadores + 15);
    }

    return { exito: true, relacion: rel };
  }

  romperPactoConRelacion(relacionId) {
    if (!this.relaciones[relacionId]) return null;
    const rel = this.relaciones[relacionId];
    rel.estado = 'traicionado';
    rel.pactado = false;

    if (relacionId === 'puntero_tano') {
      rel.fiscalesAportados = 0;
      this.termometroCriollo.mechaSocial = Math.min(100, this.termometroCriollo.mechaSocial + 20);
      this.termometroCriollo.roscaGobernadores = Math.max(0, this.termometroCriollo.roscaGobernadores - 20);
    } else if (relacionId === 'financista_nico') {
      this.termometroCriollo.dolarBlue += 180;
      this.macroeconomia.riesgoPais += 150;
      this.saludSupervivencia.paranoia = Math.min(100, this.saludSupervivencia.paranoia + 25);
    } else if (relacionId === 'comisario_bonaerense') {
      this.saludSupervivencia.seguridad = Math.max(5, this.saludSupervivencia.seguridad - 35);
      this.aprobacionSectores.seguridadJusticia = Math.max(5, this.aprobacionSectores.seguridadJusticia - 20);
    } else if (relacionId === 'barra_brava_club') {
      this.saludSupervivencia.seguridad = Math.max(5, this.saludSupervivencia.seguridad - 20);
      this.termometroCriollo.mechaSocial = Math.min(100, this.termometroCriollo.mechaSocial + 15);
    } else if (relacionId === 'operador_comodoro_py') {
      this.saludSupervivencia.paranoia = Math.min(100, this.saludSupervivencia.paranoia + 35);
      this.aprobacionSectores.claseMedia = Math.max(5, this.aprobacionSectores.claseMedia - 15);
    }

    return { exito: true, relacion: rel, costoRuptura: rel.costoRuptura || rel.peligro };
  }

  ejecutarEleccionUrnas(configOpciones = {}) {
    const res = simularEleccionConUrnas(this, configOpciones);
    this.eleccionUrnasActual = res;
    return res;
  }

  evaluarAvanceJudicial() {
    if (!this.expedienteJudicial) return null;
    return this.expedienteJudicial.evaluarAvance(this);
  }

  resolverDesafueroRecinto(estrategiaId = 'doctrina_pichetto') {
    if (!this.expedienteJudicial) return null;
    return this.expedienteJudicial.resolverDesafuero(this, estrategiaId);
  }

  ejecutarAccionCarcelEzeiza(accionId = 'hacerse_fuerte_penal') {
    if (!this.expedienteJudicial) return null;
    return this.expedienteJudicial.ejecutarAccionEzeiza(this, accionId);
  }

  ejecutarOperacionNegraSIDE(opId) {
    if (!this.sistemaSIDE) return null;
    return this.sistemaSIDE.ejecutarOperacionNegra(opId, this);
  }

  gastarFondosReservadosSIDE(usoId) {
    if (!this.sistemaSIDE) return null;
    return this.sistemaSIDE.gastarFondos(usoId, this);
  }

  resolverCitacionBicameralSIDE(estrategiaId) {
    if (!this.sistemaSIDE) return null;
    return this.sistemaSIDE.resolverCitacionBicameral(estrategiaId, this);
  }

  evaluarLeyBoomerangSIDE() {
    if (!this.sistemaSIDE) return null;
    return this.sistemaSIDE.evaluarLeyBoomerang(this);
  }

  ejecutarAccionDiplomatica(accionId) {
    if (!this.sistemaGeopolitica) return null;
    return this.sistemaGeopolitica.ejecutarAccionDiplomatica(accionId, this);
  }

  evaluarEventosExtremosGeopolitica() {
    if (!this.sistemaGeopolitica) return [];
    return this.sistemaGeopolitica.evaluarEventosExtremos(this);
  }

  ejecutarAccionGabinete(accionId, payload = {}) {
    if (!this.sistemaGabinete) return null;
    return this.sistemaGabinete.ejecutarAccion(accionId, payload, this);
  }

  resolverRenunciaGabinete(ministroId, resolucion = 'rechazar') {
    if (!this.sistemaGabinete) return null;
    return this.sistemaGabinete.resolverRenuncia(ministroId, resolucion, this);
  }

  evaluarGuerraPasilloGabinete() {
    if (!this.sistemaGabinete) return [];
    return this.sistemaGabinete.evaluarGuerraPasillo(this);
  }

  ejecutarAccionMedios(accionId) {
    if (!this.sistemaMedios) return null;
    return this.sistemaMedios.ejecutarAccionTactica(accionId, this);
  }

  ejecutarConferenciaPrensa(acreditadoId, respuestaId) {
    if (!this.sistemaMedios) return null;
    return this.sistemaMedios.ejecutarRespuestaConferencia(acreditadoId, respuestaId, this);
  }

  ejecutarEntrevistaPrimeTime(programaId, estrategiaId) {
    if (!this.sistemaMedios) return null;
    return this.sistemaMedios.someterseAEntrevista(programaId, estrategiaId, this);
  }

  cambiarEsquemaPauta(nuevoEsquema) {
    if (!this.sistemaMedios) return null;
    return this.sistemaMedios.cambiarEsquemaPauta(nuevoEsquema, this);
  }

  toggleBolsilloPauta(bolsilloId) {
    if (!this.sistemaMedios) return null;
    return this.sistemaMedios.toggleBolsillo(bolsilloId, this);
  }

  ejecutarAccionCrisis(decisionId) {
    if (!this.sistemaCrisis) return null;
    return this.sistemaCrisis.ejecutarDecisionCrisis(decisionId, this);
  }

  declararEstadoDeSitio() {
    if (!this.sistemaCrisis) return null;
    return this.sistemaCrisis.declararEstadoDeSitio(this);
  }

  // MÉTODOS DE CAÍDA PRESIDENCIAL, EVACUACIÓN Y EXPRESIDENTE
  evaluarColapsoPresidencial() {
    if (!this.sistemaEvacuacion) return null;
    return this.sistemaEvacuacion.evaluarUmbralColapso(this);
  }

  forzarColapsoInstitucional(motivo = "Colapso del frente interno") {
    if (!this.sistemaEvacuacion) return null;
    return this.sistemaEvacuacion.forzarColapsoInstitucional(this, motivo);
  }

  ejecutarRenunciaPresidencial(tipoRenunciaId) {
    if (!this.sistemaEvacuacion) return null;
    return this.sistemaEvacuacion.ejecutarRenuncia(tipoRenunciaId, this);
  }

  ejecutarEscapeRosada(rutaEscapeId) {
    if (!this.sistemaEvacuacion) return null;
    return this.sistemaEvacuacion.ejecutarEscapeRosada(rutaEscapeId, this);
  }

  simularAsambleaLegislativa() {
    if (!this.sistemaEvacuacion) return null;
    return this.sistemaEvacuacion.simularAsambleaLegislativa(this);
  }

  definirDestinoExpresidente(destinoId) {
    if (!this.sistemaEvacuacion) return null;
    return this.sistemaEvacuacion.definirDestinoExpresidente(destinoId, this);
  }

  // MÉTODOS DE OPERATIVO RETORNO Y BÚNKER DE EXPRESIDENTE
  iniciarOperativoRetorno(datosExpresidente = null) {
    if (!this.sistemaRetorno) return null;
    return this.sistemaRetorno.inicializarDesdeExpresidente(this, datosExpresidente);
  }

  avanzarFaseRetorno(nuevaFase) {
    if (!this.sistemaRetorno) return null;
    return this.sistemaRetorno.avanzarFase(nuevaFase, this);
  }

  ejecutarAccionBunkerRetorno(accionId) {
    if (!this.sistemaRetorno) return null;
    return this.sistemaRetorno.ejecutarAccionBunker(accionId, this);
  }

  resolverAlianzaRetorno(aliadoId, aceptar = true) {
    if (!this.sistemaRetorno) return null;
    return this.sistemaRetorno.resolverAlianzaPerdon(aliadoId, aceptar, this);
  }

  resolverDilemaRetorno(dilemaId, opcionId) {
    if (!this.sistemaRetorno) return null;
    return this.sistemaRetorno.resolverDilemaRetorno(dilemaId, opcionId, this);
  }

  evaluarVictoriaRetorno() {
    if (!this.sistemaRetorno) return null;
    return this.sistemaRetorno.evaluarVictoriaRetorno(this);
  }

  // MÉTODOS DE LA CALESITA MACROECONÓMICA Y MESA DE DINERO DEL BCRA
  ejecutarAccionMesaDinero(accionId) {
    if (!this.sistemaMacroBCRA) return null;
    return this.sistemaMacroBCRA.ejecutarAccionMesa(accionId, this);
  }

  activarTrampaEconomica(trampaId) {
    if (!this.sistemaMacroBCRA) return null;
    return this.sistemaMacroBCRA.activarTrampa(trampaId, this);
  }

  resolverDilemaMacro(dilemaId, opcionId) {
    if (!this.sistemaMacroBCRA) return null;
    return this.sistemaMacroBCRA.resolverDilemaMacro(dilemaId, opcionId, this);
  }

  dispararPinaHistorica() {
    if (!this.sistemaMacroBCRA) return null;
    return this.sistemaMacroBCRA.dispararPinaHistorica(this);
  }

  evaluarDiagnosticoMacro() {
    if (!this.sistemaMacroBCRA) return null;
    return this.sistemaMacroBCRA.generarDiagnosticoMacro(this);
  }

  calcularIntencionVotoUnificada(variables = {}) {
    if (!this.sistemaEcuacionUnificada) return null;
    return this.sistemaEcuacionUnificada.calcularIntencionVoto(this, variables);
  }

  calcularMechaSocialUnificada(variables = {}) {
    if (!this.sistemaEcuacionUnificada) return null;
    return this.sistemaEcuacionUnificada.calcularMechaSocial(this, variables);
  }

  ejecutarResolucionSemanaCritica(opcionId) {
    if (!this.sistemaEcuacionUnificada) return null;
    return this.sistemaEcuacionUnificada.ejecutarResolucionSemanaCritica(opcionId, this);
  }

  obtenerEstadoPantallaSillon() {
    if (!this.sistemaEcuacionUnificada) return null;
    return this.sistemaEcuacionUnificada.obtenerEstadoPantallaSillon(this);
  }

  ejecutarAccionRoscaFederal(accionId) {
    if (!this.sistemaRoscaFederal) return null;
    return this.sistemaRoscaFederal.ejecutarAccionRosca(accionId, this);
  }

  resolverDilemaFederal(dilemaId, opcionId) {
    if (!this.sistemaRoscaFederal) return null;
    return this.sistemaRoscaFederal.resolverDilemaFederal(dilemaId, opcionId, this);
  }

  aplicarCorteBoleta(votoAparatoLocal, ligaId, imagenPresidencial) {
    if (!this.sistemaRoscaFederal) return null;
    return this.sistemaRoscaFederal.aplicarCorteBoleta(votoAparatoLocal, ligaId, imagenPresidencial);
  }

  obtenerTableroRoscaFederal() {
    if (!this.sistemaRoscaFederal) return null;
    return this.sistemaRoscaFederal.obtenerEstadoTableroControl(this);
  }

  // =========================================================================
  // MÉTODOS DE FISIOLOGÍA POLÍTICA, RELOJ VITAL Y UNIDAD MÉDICA PRESIDENCIAL
  // =========================================================================

  calcularCoeficienteOlivos() {
    if (this.saludSupervivencia && typeof this.saludSupervivencia.calcularCoeficienteOlivos === 'function') {
      return this.saludSupervivencia.calcularCoeficienteOlivos(this);
    }
    return { multiplicador: 1.5, id: 'presidente_paz', nombre: 'Como Presidente en Paz' };
  }

  avanzarRelojVital(dias = 7) {
    if (this.saludSupervivencia && typeof this.saludSupervivencia.avanzarRelojVital === 'function') {
      return this.saludSupervivencia.avanzarRelojVital(dias, this);
    }
    return null;
  }

  ejecutarAccionBotiquinUMP(accionId) {
    if (this.saludSupervivencia && typeof this.saludSupervivencia.ejecutarAccionBotiquin === 'function') {
      return this.saludSupervivencia.ejecutarAccionBotiquin(accionId, this);
    }
    return null;
  }

  resolverDilemaQuirofano(lugarId) {
    if (this.saludSupervivencia && typeof this.saludSupervivencia.resolverDilemaQuirofano === 'function') {
      return this.saludSupervivencia.resolverDilemaQuirofano(lugarId, this);
    }
    return null;
  }

  resolverBrindisCumpleanos(opcionId) {
    if (this.saludSupervivencia && typeof this.saludSupervivencia.resolverBrindisCumpleanos === 'function') {
      return this.saludSupervivencia.resolverBrindisCumpleanos(opcionId, this);
    }
    return null;
  }

  obtenerDashboardUMP() {
    if (this.saludSupervivencia && typeof this.saludSupervivencia.obtenerDashboardUMP === 'function') {
      return this.saludSupervivencia.obtenerDashboardUMP(this);
    }
    return null;
  }

  obtenerReporteCumpleanos() {
    if (this.saludSupervivencia && typeof this.saludSupervivencia.generarReporteCumpleanos === 'function') {
      return this.saludSupervivencia.generarReporteCumpleanos(this);
    }
    return null;
  }

  // =========================================================================
  // MÉTODOS DE DINASTÍAS, NEPOTISMO Y LIVING DE OLIVOS
  // =========================================================================
  obtenerSnapshotLivingOlivos() {
    if (!this.sistemaDinastias) return null;
    return this.sistemaDinastias.obtenerSnapshotLivingOlivos(this);
  }

  ejecutarResolucionDomestica(resolucionId) {
    if (!this.sistemaDinastias) return null;
    return this.sistemaDinastias.ejecutarResolucionDomestica(resolucionId, this);
  }

  resolverDilemaDinastico(dilemaId, opcionIdx = 0) {
    if (!this.sistemaDinastias) return null;
    return this.sistemaDinastias.resolverDilemaDinastico(dilemaId, opcionIdx, this);
  }

  activarSucesionCruzada() {
    if (!this.sistemaDinastias) return null;
    return this.sistemaDinastias.activarSucesionCruzada(this);
  }

  reencarnarEnHeredero(herederoId) {
    if (!this.sistemaDinastias) return null;
    return this.sistemaDinastias.reencarnarEnHeredero(herederoId, this);
  }

  configurarRitmoSemanal(ritmoId) {
    if (this.sistemaRitmoSemanal) {
      this.sistemaRitmoSemanal.configurarRitmo(ritmoId);
      return this.sistemaRitmoSemanal.configModo;
    }
    return null;
  }

  obtenerDilemaSemanalDelDia() {
    if (this.sistemaRitmoSemanal) {
      return this.sistemaRitmoSemanal.obtenerDilemaDelDia(this);
    }
    return null;
  }

  registrarDecisionSemanal(opcion) {
    if (!this.sistemaRitmoSemanal) return null;
    this.aplicarDecision(opcion);
    return this.sistemaRitmoSemanal.registrarDecisionDiaria(opcion, this);
  }

  obtenerBalanceSemanal() {
    if (!this.sistemaRitmoSemanal) return null;
    return this.sistemaRitmoSemanal.obtenerBalanceSemanal(this);
  }

  avanzarSiguienteSemana() {
    if (!this.sistemaRitmoSemanal) return null;
    return this.sistemaRitmoSemanal.avanzarSiguienteSemana(this);
  }

  obtenerSnapshotRitmoSemanal() {
    if (!this.sistemaRitmoSemanal) return null;
    return this.sistemaRitmoSemanal.obtenerSnapshot();
  }

  // =========================================================================
  // ÁRBOL DE DESBLOQUEO LEGAL Y POLÍTICO (HITOS POR EDAD)
  // =========================================================================
  obtenerTramoLegalActual(edad = this.edad) {
    const edadNum = Number(edad !== undefined ? edad : (this.edad || 35));
    let tramoKey = "cuna_jardin";
    if (edadNum >= 70) tramoKey = "regimen_patriarca_domiciliaria";
    else if (edadNum >= 30) tramoKey = "sillon_rivadavia_senado";
    else if (edadNum >= 25) tramoKey = "camara_baja_diputados";
    else if (edadNum >= 18) tramoKey = "mayoria_plena_militancia";
    else if (edadNum >= 16) tramoKey = "voto_joven_juvenil";
    else if (edadNum >= 13) tramoKey = "autonomia_medica";
    else if (edadNum >= 6) tramoKey = "primaria_club";
    return TRAMOS_DESBLOQUEO_LEGAL[tramoKey] || null;
  }

  obtenerNotificacionEstadoCivico(edad = this.edad) {
    const personaje = this.fichaMatricular || {
      nombre: this.candidato || "Carlos 'El Vasco' Etchegoyen",
      edad: Number(edad !== undefined ? edad : (this.edad || 35))
    };
    const causas = this.expedienteJudicial ? this.expedienteJudicial.causasAbiertas : [];
    return generarNotificacionEstadoCivico(personaje, edad, causas);
  }

  obtenerDilemasHitosLegales() {
    return DILEMAS_HITOS_LEGALES || [];
  }

  verificarDesbloqueoConstitucional(edadActual, edadPrevia = 0) {
    return evaluarHitoDesbloqueoLegal(edadActual, edadPrevia);
  }

  // =========================================================================
  // BOTONERA NORMATIVA: LOS 4 CAMINOS DEL PODER (SISTEMA LEGISLATIVO)
  // =========================================================================
  obtenerSnapshotLegislativo() {
    if (!this.sistemaLegislativo) return null;
    return this.sistemaLegislativo.obtenerSnapshotLegislativo();
  }

  obtenerTableroNormas() {
    if (!this.sistemaLegislativo) return null;
    return this.sistemaLegislativo.obtenerTableroNormas();
  }

  ejecutarAccionNormativa(idAccion, params = {}) {
    if (!this.sistemaLegislativo) return null;
    return this.sistemaLegislativo.ejecutarAccionNormativa(idAccion, params);
  }

  destrabarComisionLegislativa(idNorma, monto) {
    if (!this.sistemaLegislativo) return null;
    return this.sistemaLegislativo.destrabarComision(idNorma, monto);
  }

  simularVotacionParticularNorma(idNorma) {
    if (!this.sistemaLegislativo) return null;
    return this.sistemaLegislativo.simularVotacionEnParticular(idNorma);
  }

  obtenerDilemasLegislativos() {
    return DILEMAS_LEGISLATIVOS || [];
  }

  resolverDilemaLegislativo(idDilema, idOpcion) {
    if (!this.sistemaLegislativo) return null;
    return this.sistemaLegislativo.resolverDilemaLegislativo(idDilema, idOpcion);
  }

  cargarDilemasDeFase(fase) {
    this.faseActual = fase;
    this.indiceDilema = 0;

    if (fase === 'cuna') {
      this.dilemasFase = [...DILEMAS_CRECIMIENTO];
      return;
    }

    const base = [...(DILEMAS_DATA[fase] || [])];
    if (fase === 'militante' && DILEMA_VENTA_ALMA) {
      const combinados = [];
      for (let i = 0; i < base.length; i++) {
        combinados.push(base[i]);
        if (i === 3) {
          combinados.push(DILEMA_VENTA_ALMA);
        }
      }
      if (!combinados.includes(DILEMA_VENTA_ALMA)) combinados.push(DILEMA_VENTA_ALMA);
      this.dilemasFase = combinados;
    } else if (fase === 'diputado') {
      const dJudicial = DILEMAS_JUDICIALES.find(d => d.id === 'jud_arrepentido_cuadernos');
      if (dJudicial) {
        const combinados = [];
        for (let i = 0; i < base.length; i++) {
          combinados.push(base[i]);
          if (i === 2) {
            combinados.push(dJudicial);
          }
        }
        if (!combinados.includes(dJudicial)) combinados.push(dJudicial);
        this.dilemasFase = combinados;
      } else {
        this.dilemasFase = base;
      }
    } else if (fase === 'presidente') {
      const combinados = [];
      let saludIdx = 0;
      const dAllanamiento = DILEMAS_JUDICIALES.find(d => d.id === 'jud_allanamiento_6am');
      const dSIDE1 = DILEMAS_INTELIGENCIA.find(d => d.id === 'dilema_dnu_fondos_reservados');
      const dSIDE2 = DILEMAS_INTELIGENCIA.find(d => d.id === 'dilema_hackeo_ruso_bariloche');
      const dSIDE3 = DILEMAS_INTELIGENCIA.find(d => d.id === 'dilema_atentado_copitos');
      const dGeo1 = DILEMAS_GEOPOLITICA.find(d => d.id === 'dilema_swap_apriete_washington');
      const dGeo2 = DILEMAS_GEOPOLITICA.find(d => d.id === 'dilema_licitacion_hidrovia');
      const dGeo3 = DILEMAS_GEOPOLITICA.find(d => d.id === 'dilema_mision_fmi_rodrigazo');
      const dGab1 = DILEMAS_GABINETE.find(d => d.id === 'dilema_gabinete_yate_mediterraneo');
      const dGab2 = DILEMAS_GABINETE.find(d => d.id === 'dilema_gabinete_choque_economia_seguridad');
      const dGab3 = DILEMAS_GABINETE.find(d => d.id === 'dilema_gabinete_operativo_clamor_estrella');
      const dMed1 = DILEMAS_MEDIOS.find(d => d.id === 'dilema_medios_cronica_comedor');
      const dMed2 = DILEMAS_MEDIOS.find(d => d.id === 'dilema_medios_camara_oculta_valijero');
      const dMed3 = DILEMAS_MEDIOS.find(d => d.id === 'dilema_medios_conferencia_fiesta_olivos');
      const dCrisis1 = DILEMAS_SALA_CRISIS.find(d => d.id === 'dilema_crisis_saqueo_moreno');
      const dCrisis2 = DILEMAS_SALA_CRISIS.find(d => d.id === 'dilema_crisis_asedio_olivos');
      const dCrisis3 = DILEMAS_SALA_CRISIS.find(d => d.id === 'dilema_crisis_motin_policial');
      for (let i = 0; i < base.length; i++) {
        combinados.push(base[i]);
        if ((i === 3 || i === 8 || i === 14 || i === 20) && DILEMAS_SALUD && saludIdx < DILEMAS_SALUD.length) {
          combinados.push(DILEMAS_SALUD[saludIdx]);
          saludIdx++;
        }
        if (i === 5 && dAllanamiento) {
          combinados.push(dAllanamiento);
        }
        if (i === 6 && dSIDE1) {
          combinados.push(dSIDE1);
        }
        if (i === 7 && dGeo1) {
          combinados.push(dGeo1);
        }
        if (i === 8 && dGab1) {
          combinados.push(dGab1);
        }
        if (i === 9 && dMed1) {
          combinados.push(dMed1);
        }
        if (i === 10 && dCrisis1) {
          combinados.push(dCrisis1);
        }
        if (i === 11 && dSIDE2) {
          combinados.push(dSIDE2);
        }
        if (i === 12 && dGeo2) {
          combinados.push(dGeo2);
        }
        if (i === 13 && dGab2) {
          combinados.push(dGab2);
        }
        if (i === 14 && dMed2) {
          combinados.push(dMed2);
        }
        if (i === 15 && dCrisis2) {
          combinados.push(dCrisis2);
        }
        if (i === 16 && dSIDE3) {
          combinados.push(dSIDE3);
        }
        if (i === 17 && dGeo3) {
          combinados.push(dGeo3);
        }
        if (i === 18 && dGab3) {
          combinados.push(dGab3);
        }
        if (i === 19 && dMed3) {
          combinados.push(dMed3);
        }
        if (i === 21 && dCrisis3) {
          combinados.push(dCrisis3);
        }
      }
      this.dilemasFase = combinados;
    } else {
      this.dilemasFase = base;
    }
  }

  obtenerDilemaActual() {
    if (this.indiceDilema >= this.dilemasFase.length) {
      return null;
    }

    const item = this.dilemasFase[this.indiceDilema];

    // Si es un dilema dinámico conectado que depende de una decisión previa
    if (item.requiereFlag && typeof item.generarContextoDinamico === 'function') {
      const contextoDinamico = item.generarContextoDinamico(this.flags);
      return {
        id: item.id,
        etapaBadge: item.etapaBadge,
        area: item.area,
        titulo: contextoDinamico.titulo,
        descripcion: contextoDinamico.desc,
        explicacion: contextoDinamico.explicacion,
        opciones: contextoDinamico.opciones
      };
    }

    return item;
  }

  aplicarDecision(opcion) {
    this.totalRespuestas++;

    // 1. Guardar flags para eventos conectados posteriores
    if (opcion.setFlags) {
      for (const k in opcion.setFlags) {
        this.flags[k] = opcion.setFlags[k];
      }
    }

    // 2. Convergencia del vector de 12 ejes: promedio exacto solo por las veces que se tocó cada eje
    if (opcion.impacto12Axes) {
      for (const eje in opcion.impacto12Axes) {
        if (this.axisSum[eje] !== undefined) {
          const val = opcion.impacto12Axes[eje];
          this.axisSum[eje] += val;
          this.axisN[eje] += 1;
          this.vector12Axes[eje] = Math.round(this.axisSum[eje] / this.axisN[eje]);
          this.vector12Axes[eje] = Math.max(0, Math.min(100, this.vector12Axes[eje]));
        }
      }
    }

    // 3. Impacto en sectores sociales
    if (opcion.impactoSectores) {
      for (const sec in opcion.impactoSectores) {
        if (this.aprobacionSectores[sec] !== undefined) {
          const delta = opcion.impactoSectores[sec];
          this.aprobacionSectores[sec] = Math.max(5, Math.min(95, this.aprobacionSectores[sec] + delta));
        }
      }
    }

    // 4. Impacto en variables macroeconómicas
    if (opcion.impactoMacro) {
      const m = opcion.impactoMacro;
      const dInf = m.inflacionMensual !== undefined ? m.inflacionMensual : m.inflacion;
      if (dInf !== undefined) {
        this.macroeconomia.inflacionMensual = Math.max(0.5, Math.min(45.0, Math.round((this.macroeconomia.inflacionMensual + dInf) * 10) / 10));
      }
      if (m.riesgoPais !== undefined) {
        this.macroeconomia.riesgoPais = Math.max(300, Math.min(3500, this.macroeconomia.riesgoPais + m.riesgoPais));
      }
      const dRes = m.reservasNetasBCRA !== undefined ? m.reservasNetasBCRA : m.reservas;
      if (dRes !== undefined) {
        this.macroeconomia.reservasNetasBCRA += dRes;
      }
      const dFisc = m.resultadoFiscalPBI !== undefined ? m.resultadoFiscalPBI : m.fiscal;
      if (dFisc !== undefined) {
        this.macroeconomia.resultadoFiscalPBI = Math.max(-8.0, Math.min(5.0, Math.round((this.macroeconomia.resultadoFiscalPBI + dFisc) * 10) / 10));
      }
      if (m.pobreza !== undefined) {
        this.macroeconomia.pobreza = Math.max(15.0, Math.min(70.0, Math.round((this.macroeconomia.pobreza + m.pobreza) * 10) / 10));
      }
    }

    // 5. Impacto en el Termómetro Criollo y Efecto Dominó
    if (opcion.impactoCriollo) {
      const c = opcion.impactoCriollo;
      if (c.dolarBlue !== undefined) this.termometroCriollo.dolarBlue += c.dolarBlue;
      if (c.mechaSocial !== undefined) this.termometroCriollo.mechaSocial += c.mechaSocial;
      if (c.reservasBCRA !== undefined) this.termometroCriollo.reservasBCRA += c.reservasBCRA;
      if (c.roscaGobernadores !== undefined) this.termometroCriollo.roscaGobernadores += c.roscaGobernadores;
      if (c.humorAfaScaloneta !== undefined) this.termometroCriollo.humorAfaScaloneta += c.humorAfaScaloneta;
    }

    // Efecto dominó orgánico según macro y sectores:
    if (opcion.impactoMacro) {
      const m = opcion.impactoMacro;
      if (m.riesgoPais && m.riesgoPais > 0) {
        this.termometroCriollo.dolarBlue += Math.round(m.riesgoPais * 0.35);
      } else if (m.riesgoPais && m.riesgoPais < 0) {
        this.termometroCriollo.dolarBlue = Math.max(950, this.termometroCriollo.dolarBlue + Math.round(m.riesgoPais * 0.2));
      }
      if (m.reservasNetasBCRA !== undefined) {
        this.termometroCriollo.reservasBCRA += m.reservasNetasBCRA;
      }
      const dInf = m.inflacionMensual !== undefined ? m.inflacionMensual : 0;
      if (dInf > 0) {
        let deltaMecha = Math.round(dInf * 4);
        // Si el humor de AFA y Scaloneta es alto (>=70), amortigua 15% del mal humor social
        if (this.termometroCriollo.humorAfaScaloneta >= 70) {
          deltaMecha = Math.round(deltaMecha * 0.85);
        } else if (this.termometroCriollo.humorAfaScaloneta < 30) {
          deltaMecha = Math.round(deltaMecha * 1.25);
        }
        this.termometroCriollo.mechaSocial += deltaMecha;
      }
    }

    // Clamping de variables del Termómetro Criollo
    this.termometroCriollo.mechaSocial = Math.max(0, Math.min(100, this.termometroCriollo.mechaSocial));
    this.termometroCriollo.roscaGobernadores = Math.max(0, Math.min(100, this.termometroCriollo.roscaGobernadores));
    this.termometroCriollo.humorAfaScaloneta = Math.max(0, Math.min(100, this.termometroCriollo.humorAfaScaloneta));
    this.termometroCriollo.dolarBlue = Math.max(900, Math.min(6500, this.termometroCriollo.dolarBlue));

    // Detección de Clímax de Crisis (si la mecha supera el 85%)
    this.climaxCrisis = this.termometroCriollo.mechaSocial >= 85;

    // 6. Reloj de Vida y Desgaste del Sillón
    if (this.faseActual === 'cuna') {
      const dilemaActual = this.dilemasFase[this.indiceDilema];
      if (dilemaActual && dilemaActual.id === 'juv_15_anos') {
        this.saludSupervivencia.edad = 15;
      } else if (dilemaActual && dilemaActual.id === 'juv_18_anos') {
        this.saludSupervivencia.edad = 18;
      }
    } else {
      this.saludSupervivencia.diasEnPoder += 60; // ~2 meses por decisión
      if (this.saludSupervivencia.diasEnPoder % 360 === 0) {
        this.saludSupervivencia.edad += 1;
      }
    }

    if (opcion.impactoSalud) {
      const s = opcion.impactoSalud;
      if (s.coronarias !== undefined) this.saludSupervivencia.coronarias += s.coronarias;
      if (s.paranoia !== undefined) this.saludSupervivencia.paranoia += s.paranoia;
      if (s.seguridad !== undefined) this.saludSupervivencia.seguridad += s.seguridad;
    }

    // Desgaste biológico continuo de la gestión argentina
    if (this.termometroCriollo.mechaSocial >= 75) {
      this.saludSupervivencia.coronarias -= 4;
      this.saludSupervivencia.paranoia += 4;
    } else if (this.termometroCriollo.mechaSocial >= 60) {
      this.saludSupervivencia.coronarias -= 2;
      this.saludSupervivencia.paranoia += 2;
    }

    if (this.termometroCriollo.dolarBlue > 1500) {
      this.saludSupervivencia.coronarias -= 2;
    }
    if (this.macroeconomia.riesgoPais > 1400) {
      this.saludSupervivencia.paranoia += 3;
    }

    // Clamping de salud
    this.saludSupervivencia.coronarias = Math.max(0, Math.min(100, this.saludSupervivencia.coronarias));
    this.saludSupervivencia.paranoia = Math.max(0, Math.min(100, this.saludSupervivencia.paranoia));
    this.saludSupervivencia.seguridad = Math.max(0, Math.min(100, this.saludSupervivencia.seguridad));

    // Evaluar si se dispara una muerte política
    const posibleMuerte = evaluarMuertePolitica(this.saludSupervivencia, this);
    if (posibleMuerte && !this.saludSupervivencia.muertePolitica) {
      this.saludSupervivencia.muertePolitica = posibleMuerte;
    }

    // 7. Actualización del Expediente Judicial en Comodoro Py
    if (opcion.impactoJudicial && this.expedienteJudicial) {
      if (opcion.impactoJudicial.avanceCausa > 0) {
        for (let i = 0; i < opcion.impactoJudicial.avanceCausa; i++) {
          this.expedienteJudicial.avanzarFaseProcesal(this);
        }
      }
    }
    if (this.expedienteJudicial) {
      this.evaluarAvanceJudicial();
    }

    // 8. Actualización del Sistema de Inteligencia (SIDE / Fondos Reservados)
    if (opcion.impactoInteligencia && this.sistemaSIDE) {
      if (opcion.impactoInteligencia.fondosDelta) {
        this.sistemaSIDE.fondosReservados = Math.max(0, this.sistemaSIDE.fondosReservados + opcion.impactoInteligencia.fondosDelta);
      }
      if (opcion.impactoInteligencia.fondosGanados) {
        this.sistemaSIDE.fondosReservados += opcion.impactoInteligencia.fondosGanados;
      }
      if (opcion.impactoInteligencia.sospechaBicameral) {
        this.sistemaSIDE.sospechaBicameral = Math.min(100, Math.max(0, this.sistemaSIDE.sospechaBicameral + opcion.impactoInteligencia.sospechaBicameral));
      }
      if (opcion.impactoInteligencia.amenazaFiltracion) {
        this.sistemaSIDE.amenazaFiltracion = Math.min(100, Math.max(0, this.sistemaSIDE.amenazaFiltracion + opcion.impactoInteligencia.amenazaFiltracion));
      }
      if (opcion.impactoInteligencia.apagonInteligencia !== undefined) {
        this.sistemaSIDE.apagonInteligencia = opcion.impactoInteligencia.apagonInteligencia;
      }
      if (opcion.impactoInteligencia.lealtadSr5) {
        this.sistemaSIDE.lealtadSr5 = Math.min(100, Math.max(0, this.sistemaSIDE.lealtadSr5 + opcion.impactoInteligencia.lealtadSr5));
      }
      if (opcion.impactoInteligencia.lealtadSr8) {
        this.sistemaSIDE.lealtadSr8 = Math.min(100, Math.max(0, this.sistemaSIDE.lealtadSr8 + opcion.impactoInteligencia.lealtadSr8));
      }
    }

    // 9. Actualización del Sistema de Geopolítica (Palacio San Martín / Cancillería)
    if (opcion.impactoGeopolitica && this.sistemaGeopolitica) {
      const g = opcion.impactoGeopolitica;
      if (g.barometroAlineamiento !== undefined) {
        this.sistemaGeopolitica.barometroAlineamiento = Math.max(-100, Math.min(100, this.sistemaGeopolitica.barometroAlineamiento + g.barometroAlineamiento));
      }
      if (g.semaforoSwap) {
        this.sistemaGeopolitica.semaforoSwap = g.semaforoSwap;
      }
      if (g.posicionFMI) {
        this.sistemaGeopolitica.posicionFMI = g.posicionFMI;
      }
      if (g.diasVencimientoFMI !== undefined) {
        this.sistemaGeopolitica.diasVencimientoFMI = g.diasVencimientoFMI;
      }
      if (g.relacionBrasil !== undefined) {
        this.sistemaGeopolitica.relacionBrasil = Math.max(-100, Math.min(100, this.sistemaGeopolitica.relacionBrasil + g.relacionBrasil));
      }
      if (g.tensionEmbargosNY !== undefined) {
        this.sistemaGeopolitica.tensionEmbargosNY = Math.max(0, Math.min(100, this.sistemaGeopolitica.tensionEmbargosNY + g.tensionEmbargosNY));
      }
    }
    if (this.sistemaGeopolitica) {
      this.evaluarEventosExtremosGeopolitica();
    }

    // 10. Actualización del Sistema de Gabinete Nacional (Salón Blanco / Internas de Palacio)
    if (opcion.impactoGabinete && this.sistemaGabinete) {
      const gab = opcion.impactoGabinete;
      if (gab.ministroId && this.sistemaGabinete.ministros[gab.ministroId]) {
        const m = this.sistemaGabinete.ministros[gab.ministroId];
        if (gab.lealtadDelta !== undefined) {
          m.lealtad = Math.max(0, Math.min(100, m.lealtad + gab.lealtadDelta));
        }
        if (gab.desgasteDelta !== undefined) {
          m.desgaste = Math.max(0, Math.min(100, m.desgaste + gab.desgasteDelta));
        }
        if (gab.eficaciaDelta !== undefined) {
          m.eficacia = Math.max(0, Math.min(100, m.eficacia + gab.eficaciaDelta));
        }
        if (gab.pesoPolitico) {
          m.pesoPolitico = gab.pesoPolitico;
        }
        if (gab.estadoPasillo) {
          m.estadoPasillo = gab.estadoPasillo;
        }
        if (gab.renuncia) {
          if (!m.renunciaPresentada) {
            m.renunciaPresentada = true;
            if (!this.sistemaGabinete.renunciasActivas.includes(m.id)) {
              this.sistemaGabinete.renunciasActivas.push(m.id);
            }
            this.sistemaGabinete.agregarIncidente('Renuncia Indeclinable', `${m.titular} presentó su renuncia tras el terremoto de la medida.`);
          }
        }
        if (m.lealtad < 25 && !m.renunciaPresentada) {
          m.renunciaPresentada = true;
          if (!this.sistemaGabinete.renunciasActivas.includes(m.id)) {
            this.sistemaGabinete.renunciasActivas.push(m.id);
          }
          this.sistemaGabinete.agregarIncidente('Renuncia a Disposición', `El ministro ${m.titular} puso su renuncia a consideración tras el deterioro de la lealtad.`);
        }
      }
      if (gab.todosLealtadDelta !== undefined) {
        for (const k in this.sistemaGabinete.ministros) {
          const m = this.sistemaGabinete.ministros[k];
          m.lealtad = Math.max(0, Math.min(100, m.lealtad + gab.todosLealtadDelta));
        }
      }
      if (gab.todosDesgasteDelta !== undefined) {
        for (const k in this.sistemaGabinete.ministros) {
          const m = this.sistemaGabinete.ministros[k];
          m.desgaste = Math.max(0, Math.min(100, m.desgaste + gab.todosDesgasteDelta));
        }
      }
    }
    if (this.sistemaGabinete) {
      this.evaluarGuerraPasilloGabinete();
    }

    // 11. Actualización del Sistema de Prensa, Medios y Pauta Oficial
    if (opcion.impactoMedios && this.sistemaMedios) {
      const m = opcion.impactoMedios;
      if (m.blindajeDelta !== undefined) {
        this.sistemaMedios.blindajeMediatico = Math.max(0, Math.min(100, this.sistemaMedios.blindajeMediatico + m.blindajeDelta));
      }
      if (m.granjasTrollsDelta !== undefined) {
        this.sistemaMedios.granjasTrollsCapacidad = Math.max(0, Math.min(100, this.sistemaMedios.granjasTrollsCapacidad + m.granjasTrollsDelta));
      }
      if (m.pautaBarraniM !== undefined) {
        this.sistemaMedios.pautaBarraniM += m.pautaBarraniM;
      }
      if (m.fopeaRepudio) {
        this.sistemaMedios.alertasFopeaCount++;
      }
      if (m.relato) {
        this.sistemaMedios.agregarOperacion("Cobertura de Decisión", m.relato);
      }
    }

    // 12. Actualización de Sala de Crisis & Estallido Social
    if (opcion.impactoCrisis && this.sistemaCrisis) {
      const cr = opcion.impactoCrisis;
      if (cr.focosDelta !== undefined) {
        this.sistemaCrisis.focosSaqueoActivos = Math.max(0, this.sistemaCrisis.focosSaqueoActivos + cr.focosDelta);
      }
      if (cr.accesosDelta !== undefined) {
        this.sistemaCrisis.accesosCortados = Math.max(0, this.sistemaCrisis.accesosCortados + cr.accesosDelta);
      }
      if (cr.municionDelta !== undefined) {
        this.sistemaCrisis.municionAntidisturbios = Math.max(0, Math.min(100, this.sistemaCrisis.municionAntidisturbios + cr.municionDelta));
      }
      if (cr.fondosDelta !== undefined) {
        this.sistemaCrisis.fondosEmergenciaGastadosM += cr.fondosDelta;
      }
      if (cr.muertosCivilesDelta !== undefined) {
        this.sistemaCrisis.muertosCivilesCrisis += cr.muertosCivilesDelta;
      }
      if (cr.protocoloForzado) {
        this.sistemaCrisis.protocoloHelicoptero = cr.protocoloForzado;
      }
      if (cr.relato) {
        this.sistemaCrisis.agregarAlerta(cr.relato, cr.muertosCivilesDelta > 0 ? "urgente" : "alerta");
        this.sistemaCrisis.historialDecisiones.push({ decision: opcion.texto, relato: cr.relato });
      }
    }
    if (this.sistemaCrisis) {
      this.sistemaCrisis.sincronizarConMotor(this);
    }
    if (this.sistemaEvacuacion) {
      this.sistemaEvacuacion.evaluarUmbralColapso(this);
    }
    if (this.sistemaMacroBCRA) {
      this.sistemaMacroBCRA.sincronizarConMotor(this);
      this.sistemaMacroBCRA.cobrarPeajesPendientes(this);
    }

    this.historialDecisiones.push(opcion);
    this.indiceDilema++;
  }

  asumirSucesor(sucesorId) {
    const suc = SUCESORES_PRESIDENCIALES[sucesorId] || SUCESORES_PRESIDENCIALES.vicepresidente_enemigo;
    this.saludSupervivencia.esSucesor = true;
    this.saludSupervivencia.sucesorActual = suc;
    this.saludSupervivencia.muertePolitica = null; // Reanuda la continuidad institucional
    this.saludSupervivencia.nombreMandatario = suc.nombre;

    if (suc.modificadores) {
      const m = suc.modificadores;
      if (m.saludCoronarias !== undefined) this.saludSupervivencia.coronarias = m.saludCoronarias;
      if (m.paranoiaMental !== undefined) this.saludSupervivencia.paranoia = m.paranoiaMental;
      if (m.seguridadBlindaje !== undefined) this.saludSupervivencia.seguridad = m.seguridadBlindaje;
      if (m.roscaGobernadores !== undefined) {
        this.termometroCriollo.roscaGobernadores = Math.max(0, Math.min(100, this.termometroCriollo.roscaGobernadores + m.roscaGobernadores));
      }
      if (m.mechaSocial !== undefined) {
        this.termometroCriollo.mechaSocial = Math.max(0, Math.min(100, this.termometroCriollo.mechaSocial + m.mechaSocial));
      }
      if (m.estatismoDelta !== undefined && this.vector12Axes.estatismo !== null) {
        this.vector12Axes.estatismo = Math.max(0, Math.min(100, this.vector12Axes.estatismo + m.estatismoDelta));
      }
    }
    return suc;
  }

  esFinDeFase() {
    return this.indiceDilema >= this.dilemasFase.length;
  }

  // CÁLCULO ELECTORAL BASADO EN LA REGLA REAL DE LA CONSTITUCIÓN NACIONAL (ARTS. 97 Y 98 CN)
  calcularResultadoEleccion() {
    // Votan los sectores con base social en urnas:
    // Trabajo (35%), Clase Media (40%), Productivo (25%)
    const votoTrabajo = this.aprobacionSectores.trabajo || 50;
    const votoClaseMedia = this.aprobacionSectores.claseMedia || 50;
    const votoProductivo = this.aprobacionSectores.productivo || 50;

    let porcentajeVotoTotal = (votoTrabajo * 0.35) + (votoClaseMedia * 0.40) + (votoProductivo * 0.25);
    porcentajeVotoTotal = Math.round(porcentajeVotoTotal * 10) / 10;

    // Estimación del rival opositor según descontento
    const segundoVotos = Math.max(28.0, Math.min(48.0, Math.round((100 - porcentajeVotoTotal - 8) * 10) / 10));
    const diferencia = Math.round((porcentajeVotoTotal - segundoVotos) * 10) / 10;

    // Regla electoral de la CN (Arts. 97 y 98):
    // 1. Más del 45% de los votos afirmativos
    // 2. 40% o más con diferencia mayor a 10 puntos respecto al segundo
    const ganaPrimeraVuelta = (porcentajeVotoTotal >= 45.0) || (porcentajeVotoTotal >= 40.0 && diferencia > 10.0);

    let esBalotaje = false;
    let ganaBalotaje = false;
    let votosBalotaje = 0;

    if (!ganaPrimeraVuelta) {
      esBalotaje = true;
      // En balotaje polarizado, los sectores de seguridad, mercado y ciencia se vuelcan
      const factorBalotaje = (
        (this.aprobacionSectores.seguridadJusticia || 50) * 0.15 +
        (this.aprobacionSectores.estadoCiencia || 50) * 0.15 +
        (this.aprobacionSectores.frenteExterno || 50) * 0.10
      );
      votosBalotaje = Math.round((porcentajeVotoTotal * 0.70 + factorBalotaje * 0.30 + 10) * 10) / 10;
      votosBalotaje = Math.min(65.0, Math.max(35.0, votosBalotaje));
      ganaBalotaje = votosBalotaje >= 50.0;
    }

    const ganoFinal = ganaPrimeraVuelta || ganaBalotaje;

    return {
      votos: porcentajeVotoTotal,
      segundoVotos: segundoVotos,
      diferencia: diferencia,
      ganaPrimeraVuelta: ganaPrimeraVuelta,
      esBalotaje: esBalotaje,
      votosBalotaje: votosBalotaje,
      ganaBalotaje: ganaBalotaje,
      gano: ganoFinal,
      aprobacionPorSector: { ...this.aprobacionSectores },
      macroeconomia: { ...this.macroeconomia }
    };
  }

  avanzarSiguienteFase() {
    if (this.faseActual === 'cuna') {
      this.saludSupervivencia.edad = 25; // Salto a edad adulta legal (Art. 48 CN)
      this.cargarDilemasDeFase('militante');
      return 'militante';
    } else if (this.faseActual === 'militante') {
      this.cargarDilemasDeFase('diputado');
      return 'diputado';
    } else if (this.faseActual === 'diputado') {
      this.cargarDilemasDeFase('presidente');
      return 'presidente';
    } else {
      return 'fin_mandato';
    }
  }

  // ALGORITMO DE DISTANCIA VECTORIAL (Solo evalúa ejes con datos suficientes)
  calcularCompatibilidad(vectorObjetivo) {
    let sumDiff = 0;
    let ejesEvaluados = 0;

    for (const k in DOCE_EJES) {
      // Solo comparar si el eje fue tocado por el jugador y existe en el objetivo
      if (this.axisN[k] > 0 && vectorObjetivo[k] !== undefined) {
        ejesEvaluados++;
        const uVal = this.vector12Axes[k];
        const pVal = vectorObjetivo[k];

        let diff = Math.abs(uVal - pVal);
        if ((uVal < 50 && pVal > 50) || (uVal > 50 && pVal < 50)) {
          diff *= 1.25; // Penalización por contradicción de polos
        }
        sumDiff += diff;
      }
    }

    if (ejesEvaluados === 0) return 50;

    const maxDist = ejesEvaluados * 100 * 1.25;
    return Math.max(0, Math.min(100, Math.round((1 - (sumDiff / maxDist)) * 100)));
  }

  // REPORTE FINAL CON CALIBRACIÓN EXACTA EN LOS 12 EJES
  generarDiagnosticoFinal() {
    // 1. Ideologías Doctrinales
    const rankingIdeologias = IDEOLOGIAS_DB.map(ideol => {
      const targetVec = {
        estatismo: (ideol.coords.E + 100) / 2,         // E: -100 Estatismo (0) <---> +100 Privatización/Mercado (100)
        regulacion: (ideol.coords.E + 100) / 2,        // E: -100 Regulación (0) <---> +100 Desregulación (100)
        comercio: (ideol.coords.E + 100) / 2,          // E: -100 Proteccionismo (0) <---> +100 Libre Comercio (100)
        institucionalidad: (ideol.coords.A + 100) / 2, // A: -100 Republicano (0) <---> +100 Personalismo/Decretismo (100)
        seguridad: 100 - ((ideol.coords.A + 100) / 2), // A: +100 Orden Público (0) <---> -100 Garantismo (100)
        valores: (ideol.coords.S + 100) / 2,           // S: -100 Progresismo (0) <---> +100 Conservadurismo (100)
        laicismo: (ideol.coords.S + 100) / 2,          // S: -100 Laicismo (0) <---> +100 Sostenimiento Culto (100)
        geopolitica: (ideol.coords.N + 100) / 2,       // N: -100 Occidental (0) <---> +100 Tercera Posición/Soberanismo (100)
        defensa: 100 - ((ideol.coords.N + 100) / 2),   // N: +100 Gasto Militar (0) <---> -100 Desarme/Pacifismo (100)
        inmigracion: 100 - ((ideol.coords.N + 100) / 2), // N: +100 Control Estricto (0) <---> -100 Puertas Abiertas (100)
        ambiente: (ideol.coords.V + 100) / 2,          // V: -100 Productivismo (0) <---> +100 Ecologismo (100)
        federalismo: 50
      };
      return { ...ideol, afinidad: this.calcularCompatibilidad(targetVec) };
    }).sort((a, b) => b.afinidad - a.afinidad);

    // Detección de perfil mixto si el top 2 está muy parejo
    const diffTop1Top2 = (rankingIdeologias[0]?.afinidad || 0) - (rankingIdeologias[1]?.afinidad || 0);
    const esPerfilMixto = diffTop1Top2 <= 3;

    // 2. Modelo / Período Histórico Argentino
    const rankingPeriodos = PERIODOS_ARGENTINOS.map(p => {
      return { ...p, afinidad: this.calcularCompatibilidad(p.vector) };
    }).sort((a, b) => b.afinidad - a.afinidad);

    // 3. Presidente o Líder Argentino
    const rankingLideres = LIDERES_ARGENTINOS.map(l => {
      return { ...l, afinidad: this.calcularCompatibilidad(l.vector) };
    }).sort((a, b) => b.afinidad - a.afinidad);

    return {
      vector12: { ...this.vector12Axes },
      axisN: { ...this.axisN },
      macroeconomia: { ...this.macroeconomia },
      termometroCriollo: { ...this.termometroCriollo },
      saludSupervivencia: { ...this.saludSupervivencia },
      climaxCrisis: this.climaxCrisis,
      modoInicio: this.modoInicio,
      origenElegido: this.origenElegido,
      cargoBarroElegido: this.cargoBarroElegido,
      rangoPresidenteElegido: this.rangoPresidenteElegido,
      fichaMatricular: this.fichaMatricular,
      relaciones: { ...this.relaciones },
      eleccionUrnas: this.eleccionUrnasActual,
      eleccionUrnasActual: this.eleccionUrnasActual,
      expedienteJudicial: this.expedienteJudicial ? this.expedienteJudicial.obtenerResumen() : null,
      sistemaSIDE: this.sistemaSIDE ? this.sistemaSIDE.obtenerResumen() : null,
      sistemaGeopolitica: this.sistemaGeopolitica ? this.sistemaGeopolitica.obtenerResumen() : null,
      destinoGeopoliticaFinal: this.sistemaGeopolitica ? this.sistemaGeopolitica.diagnosticarDestinoFinal(this) : null,
      sistemaGabinete: this.sistemaGabinete ? this.sistemaGabinete.obtenerResumen() : null,
      destinoGabineteFinal: this.sistemaGabinete ? this.sistemaGabinete.diagnosticarDestinoFinal(this) : null,
      sistemaMedios: this.sistemaMedios ? this.sistemaMedios.obtenerResumen() : null,
      destinoMediosFinal: this.sistemaMedios ? this.sistemaMedios.diagnosticarDestinoFinal(this) : null,
      sistemaCrisis: this.sistemaCrisis ? this.sistemaCrisis.obtenerResumen() : null,
      destinoCrisisFinal: this.sistemaCrisis ? this.sistemaCrisis.diagnosticarDestinoFinal(this) : null,
      sistemaEvacuacion: this.sistemaEvacuacion ? this.sistemaEvacuacion.obtenerResumen() : null,
      destinoExpresidenteFinal: this.sistemaEvacuacion ? this.sistemaEvacuacion.diagnosticarDestinoFinal(this) : null,
      sistemaRetorno: this.sistemaRetorno ? this.sistemaRetorno.obtenerResumen() : null,
      victoriaRetornoFinal: this.sistemaRetorno ? this.sistemaRetorno.evaluarVictoriaRetorno(this) : null,
      sistemaMacroBCRA: this.sistemaMacroBCRA ? this.sistemaMacroBCRA.obtenerResumen() : null,
      destinoMacroFinal: this.sistemaMacroBCRA ? this.sistemaMacroBCRA.generarDiagnosticoMacro(this) : null,
      sistemaEcuacionUnificada: this.sistemaEcuacionUnificada ? this.sistemaEcuacionUnificada.obtenerResumen(this) : null,
      sistemaRoscaFederal: this.sistemaRoscaFederal ? this.sistemaRoscaFederal.obtenerResumen(this) : null,
      sistemaDinastias: this.sistemaDinastias ? this.sistemaDinastias.obtenerSnapshotLivingOlivos(this) : null,
      sistemaRitmoSemanal: this.sistemaRitmoSemanal ? this.sistemaRitmoSemanal.obtenerSnapshot() : null,
      balanceSemanalFinal: this.sistemaRitmoSemanal ? this.sistemaRitmoSemanal.obtenerBalanceSemanal(this) : null,
      sistemaLegislativo: this.sistemaLegislativo ? this.sistemaLegislativo.obtenerSnapshotLegislativo() : null,
      notificacionEstadoCivico: this.obtenerNotificacionEstadoCivico(),
      topIdeologia: rankingIdeologias[0],
      segundaIdeologia: rankingIdeologias[1],
      esPerfilMixto: esPerfilMixto,
      antipodaIdeologia: rankingIdeologias[rankingIdeologias.length - 1],
      topPeriodo: rankingPeriodos[0],
      topLider: rankingLideres[0],
      rankingLideres: rankingLideres
    };
  }
}

if (typeof window !== 'undefined') {
  window.motorJuego = new MotorJuego();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    MotorJuego,
    FASES_MECHA_ESTALLIDO,
    FAUNA_EMERGENCIA,
    DECISIONES_SALA_CRISIS,
    DILEMAS_SALA_CRISIS,
    DESTINOS_CRISIS_FINAL,
    SistemaSalaCrisis,
    TRES_PATAS_COLAPSO,
    OPCIONES_RENUNCIA_FORZADA,
    RUTAS_ESCAPE_ROSADA,
    PRESIDENTES_EXPRESS_ASAMBLEA,
    DESTINOS_EXPRESIDENTE,
    REPORTE_FUERZA_AEREA_BASE,
    SistemaCaidaEvacuacion,
    FASES_OPERATIVO_RETORNO,
    ECOSISTEMA_DIGITAL_RETORNO,
    TRES_ALIANZAS_PERDON,
    DILEMAS_OPERATIVO_RETORNO,
    ACCIONES_BUNKER_RETORNO,
    ESCENAS_VICTORIA_RETORNO,
    SistemaOperativoRetorno,
    FASES_CALESITA_CAMBIARIA,
    TABLERO_SEMAFOROS_BCRA,
    TRAMPAS_POLITICA_ECONOMICA,
    DILEMAS_MACRO_EXTREMOS,
    ACCIONES_MESA_DINERO,
    CABLES_URGENTES_MESA,
    SistemaMacroCalesitaBCRA,
    FASES_INTEGRADAS_SIMULADOR,
    SEMANA_CRITICA_VIERNES_NEGRO,
    SistemaEcuacionUnificada,
    LIGAS_PROVINCIALES,
    PALANCAS_FINANCIERAS_EJECUTIVO,
    calcularAlgoritmoCorteBoleta,
    DILEMAS_FEDERALES_EXTREMOS,
    ACCIONES_ROSCA_FEDERAL,
    SistemaRoscaFederal,
    COEFICIENTE_OLIVOS,
    BARRAS_FISIOLOGICAS,
    FASES_BIOLOGICAS_DIRIGENTE,
    EQUIPO_UMP_MEDICOS,
    DILEMAS_QUIROFANO,
    CATALOGO_ENFERMEDADES_PODER,
    OPCIONES_BRINDIS_CUMPLEANOS,
    ACCIONES_BOTIQUIN_UMP,
    SistemaSaludSupervivencia,
    ROLES_CLAN_FAMILIAR,
    RESOLUCIONES_DOMESTICAS_LIVING,
    DILEMAS_DINASTICOS_JUGABLES,
    HEREDEROS_REENCARNACION_DINASTICA,
    EFECTOS_SANGRE_NUEVA_VIDA,
    SistemaDinastiasNepotismo,
    ATRIBUTOS_BASE_DEF,
    VIRTUDES_CRIOLLAS,
    DEFECTOS_CRIOLLOS,
    NOMBRES_DIRIGENTES_ARGENTINOS,
    generarFichaMatricularDirigente,
    MODOS_RITMO_SEMANAL,
    DIAS_SEMANA_SECUENCIA,
    DILEMAS_ENCADENADOS_SEMANA,
    calcularRadarHipocresiaSemanal,
    SistemaRitmoCadenaSemanal,
    TRAMOS_DESBLOQUEO_LEGAL,
    DILEMAS_HITOS_LEGALES,
    generarNotificacionEstadoCivico,
    evaluarHitoDesbloqueoLegal,
    VIAS_NORMATIVAS,
    IMPACTOS_PRACTICAS_LEGALES_12AXES,
    NORMAS_EN_TRAMITE_INICIALES,
    ACCIONES_NORMATIVAS,
    DILEMAS_LEGISLATIVOS,
    SistemaLegislativo
  };
}


