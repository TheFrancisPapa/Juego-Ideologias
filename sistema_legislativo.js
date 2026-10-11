// sistema_legislativo.js - Sistema parlamentario bicameral argentino & Botonera Normativa de los 4 Caminos del Poder
// Rigor institucional conforme a los Arts. 30, 40, 48, 50, 54, 55, 56, 64, 77-84, 89 y 99 inc. 3 de la Constitución Nacional,
// Ley 26.122 (Régimen Legal de los DNU y Comisión Bicameral Permanente) y Ley 24.660.

// =========================================================================
// 1. LOS 4 CAMINOS DEL PODER (LA CAJA DE HERRAMIENTAS LEGAL)
// =========================================================================
const VIAS_NORMATIVAS = {
  congreso: {
    id: "congreso",
    nombre: "Vía Congreso (Leyes y Reformas)",
    subtitulo: "Lenta, cara de rosquear, pero blindada ante la Justicia Federal",
    icono: "fa-solid fa-landmark",
    color: "sky",
    descripcion: "El camino ordinario de la Constitución. Requiere pasar por comisiones dictaminadoras, pagar peajes a gobernadores y sortear el desguace del articulado en particular. Si se aprueba, tiene legitimidad democrática y blindaje frente a cautelares.",
    riesgoJudicial: "Bajo (Seguridad jurídica plena)",
    velocidad: "Lenta (Meses o años; riesgo de cajoneo)"
  },
  dnu: {
    id: "dnu",
    nombre: "El D.N.U. (Decreto Rápido)",
    subtitulo: "Inmediato, autocrático, vigilado por Bicameral y amparos judiciales",
    icono: "fa-solid fa-bolt",
    color: "amber",
    descripcion: "Artículo 99, Inciso 3 de la Constitución Nacional. Sale publicado a las 00:00 hs en el Boletín Oficial y rige de inmediato con fuerza de ley. Materias vedadas: Penal, Tributaria, Electoral y Partidos Políticos. La Comisión Bicameral (Ley 26.122) lo vigila: sigue vivo si al menos UNA cámara no lo rechaza.",
    riesgoJudicial: "Muy Alto (Lluvia de medidas cautelares en 48 hs)",
    velocidad: "Inmediata (Domingo Olivos, lunes Boletín Oficial)"
  },
  veto: {
    id: "veto",
    nombre: "El Veto Presidencial (Freno Ejecutivo)",
    subtitulo: "Total o parcial con promulgación parcial. El Congreso puede insistir con 2/3",
    icono: "fa-solid fa-ban",
    color: "rose",
    descripcion: "Artículo 83 de la Constitución Nacional. Escudo protector cuando la oposición aprueba leyes que rompen el programa fiscal. Si la oposición junta dos tercios (2/3) de los votos presentes en ambas Cámaras, pulveriza el veto y estás obligado a promulgar.",
    riesgoJudicial: "Medio (Litigios por cláusulas de financiamiento suspendidas)",
    velocidad: "Plazo constitucional de 10 días hábiles"
  },
  reforma_constitucional: {
    id: "reforma_constitucional",
    nombre: "La Reforma Constitucional (El Botón Nuclear)",
    subtitulo: "2/3 de miembros totales, elección de constituyentes y refundación o suicidio político",
    icono: "fa-solid fa-radiation",
    color: "purple",
    descripcion: "Artículo 30 de la Constitución Nacional. Paso 1: Ley de Necesidad con dos tercios (2/3) de miembros TOTALES del Congreso (172 Diputados, 48 Senadores). Paso 2: Elección nacional de Convencionales Constituyentes en urnas. Paso 3: Convención en Santa Fe/Paraná. Si la oposición gana la convención, te recorta tus facultades.",
    riesgoJudicial: "Supremo (Apertura del orden supremo de la Nación)",
    velocidad: "Proceso histórico de 6 a 18 meses"
  }
};

// =========================================================================
// 2. CATÁLOGO DE IMPACTOS DE PRÁCTICAS LEGALES EN LOS 12 EJES
// =========================================================================
const IMPACTOS_PRACTICAS_LEGALES_12AXES = {
  dnu_masivo: {
    id: "dnu_masivo",
    practica: "Gobernar por DNU masivos",
    ejeAfectado: "Eje 3 (Autoridad)",
    desplazamiento: "+30% Centralismo / Autocracia",
    impacto12Axes: { centralismo: 75, autocracia: 70, institucionalidad: 30 },
    detalle: "Tratás al Congreso de la Nación como un estorbo burocrático y concentrás la botonera en Olivos."
  },
  debate_comisiones: {
    id: "debate_comisiones",
    practica: "Respetar el debate de comisiones",
    ejeAfectado: "Eje 3 (Autoridad)",
    desplazamiento: "+25% Institucionalismo Republicano",
    impacto12Axes: { institucionalidad: 80, centralismo: 35, legalismo: 75 },
    detalle: "Aceptás los tiempos lentos de la república y sometés los proyectos al tamiz de los bloques."
  },
  comprar_votos_caja: {
    id: "comprar_votos_caja",
    practica: "Comprar votos con cargos y ATN",
    ejeAfectado: "Eje 12 (Método)",
    desplazamiento: "+35% Rosca Barrani / Pragmatismo",
    impacto12Axes: { pragmatismoMetodo: 85, purezaDoctrinal: 20 },
    detalle: "El contenido de las leyes se compra en efectivo con la billetera de la obra pública y contratos de asesores."
  },
  vetar_gasto_social: {
    id: "vetar_gasto_social",
    practica: "Vetar leyes de gasto social",
    ejeAfectado: "Eje 1 (Economía)",
    desplazamiento: "+20% Libre Mercado / Disciplina Fiscal",
    impacto12Axes: { libreMercado: 75, estatismo: 25 },
    detalle: "Priorizás el Excel del superávit fiscal sobre la temperatura de la calle y los reclamos jubilatorios."
  },
  reeleccion_constitucion: {
    id: "reeleccion_constitucion",
    practica: "Poner la reelección en la Constitución",
    ejeAfectado: "Eje 3 (Autoridad)",
    desplazamiento: "+40% Caudillismo / Hegemonía",
    impacto12Axes: { centralismo: 85, caudillismo: 90, alternanciaRepublicana: 15 },
    detalle: "Buscás permanencia vitalicia en el sillón refundando las reglas del pacto democrático."
  }
};

// =========================================================================
// 3. ESTADO DE NORMAS CLAVE EN TRÁMITE (TABLERO PARLAMENTARIO)
// =========================================================================
const NORMAS_EN_TRAMITE_INICIALES = [
  {
    id: "dnu_70_2026",
    titulo: "DNU N° 70/2026 (Emergencia Pública y Desregulación Económica)",
    tipo: "dnu",
    materia: "desregulacion_general",
    articulos: 350,
    vigencia: "VIGENTE",
    detalleVigencia: "Aprobado en Diputados / Pendiente de tratamiento en Senado (Vigente por Ley 26.122)",
    frenteJudicial: "4 Medidas cautelares frenando el capítulo de privatizaciones y reforma laboral.",
    camaraTratadaDiputados: true,
    camaraTratadaSenado: false,
    rechazadoPorDiputados: false,
    rechazadoPorSenado: false,
    amparosActivos: 4,
    bloqueadoJudicialmente: false
  },
  {
    id: "reforma_laboral",
    titulo: "Proyecto de Reforma Laboral y Modernización Productiva",
    tipo: "ley_congreso",
    materia: "laboral",
    articulos: 120,
    vigencia: "EN TRÁMITE",
    estado: "Trabado en la Comisión de Legislación del Trabajo (Presidencia opositora).",
    costoDestrabeObras: 12000000000,
    destrabeDescripcion: "$ 12.000 M en obras viales para la provincia del presidente de comisión.",
    comisionDestrabada: false,
    mediaSancionDiputados: false,
    sancionDefinitivaSenado: false
  },
  {
    id: "presupuesto_nacional",
    titulo: "Ley de Presupuesto General de la Administración Nacional",
    tipo: "ley_congreso",
    materia: "presupuestaria",
    articulos: 95,
    vigencia: "EN COMISIÓN",
    estado: "En debate de comisiones con 45 modificaciones pedidas por gobernadores provinciales.",
    modificacionesGobernadores: 45,
    caballoDeTroyaIncluido: false,
    desguaceArticulado: false
  },
  {
    id: "aumento_jubilatorio",
    titulo: "Ley de Movilidad y Aumento de Emergencia Previsional (12% + Inflación)",
    tipo: "ley_sancionada",
    materia: "previsional",
    articulos: 8,
    vigencia: "SANCIONADA POR CONGRESO - PENDIENTE DE PROMULGACIÓN O VETO",
    estado: "Aprobada por amplia mayoría opositora en ambas Cámaras. Déficit fiscal estimado: 1.4% PBI.",
    plazoVetoDias: 10,
    vetadoPorPresidente: false,
    insistenciaDosTercios: false
  },
  {
    id: "necesidad_reforma",
    titulo: "Ley de Necesidad de Reforma Constitucional (Art. 30 CN)",
    tipo: "reforma_constitucional",
    materia: "constitucional",
    articulos: 4,
    vigencia: "EN POROTEO DE 2/3",
    estado: "Poroteo de dos tercios de miembros totales: Diputados 108/172 | Senado 31/48.",
    diputadosAlcanzados: 108,
    diputadosRequeridos: 172,
    senadoresAlcanzados: 31,
    senadoresRequeridos: 48,
    leyNecesidadAprobada: false,
    convencionRealizada: false
  }
];

// =========================================================================
// 4. BOTONES DE ACCIÓN NORMATIVA (DESPACHO PRESIDENCIAL)
// =========================================================================
const ACCIONES_NORMATIVAS = {
  redactar_proyecto: {
    id: "redactar_proyecto",
    nombre: "REDACTAR PROYECTO",
    subtitulo: "Enviar Ley con tratamiento de urgencia o Caballo de Troya camuflado",
    icono: "fa-solid fa-file-signature",
    costoRosca: 20,
    descripcion: "Presentás un proyecto de fondo o un articulado camuflado en comisiones a las 4 AM.",
    opcionesSubtipo: ["urgencia_ordinaria", "caballo_de_troya"]
  },
  meter_dnu: {
    id: "meter_dnu",
    nombre: "METER D.N.U.",
    subtitulo: "Firmar Decreto de Necesidad y Urgencia con vigencia inmediata",
    icono: "fa-solid fa-feather-pointed",
    costoRosca: 35,
    descripcion: "Firmás el decreto en Olivos un domingo a la noche invocando emergencia terminal.",
    opcionesSubtipo: ["desregulacion_omnibus", "intervencion_ente"]
  },
  aplicar_veto: {
    id: "aplicar_veto",
    nombre: "APLICAR VETO",
    subtitulo: "Vetar totalmente o parcialmente leyes de gasto aprobadas anoche",
    icono: "fa-solid fa-stamp",
    costoRosca: 25,
    descripcion: "Devolvés la ley al Congreso para blindar el equilibrio fiscal o comprás el tercio de bloqueo.",
    opcionesSubtipo: ["veto_total", "veto_parcial", "comprar_heroes_veto"]
  },
  boton_constitucion: {
    id: "boton_constitucion",
    nombre: "BOTÓN CONSTITUCIÓN",
    subtitulo: "Iniciar poroteo de 2/3 para Ley de Necesidad de Reforma Constitucional",
    icono: "fa-solid fa-atom",
    costoRosca: 50,
    descripcion: "El botón nuclear: buscás los dos tercios totales para habilitar la Convención Constituyente.",
    opcionesSubtipo: ["pacto_politico", "consulta_popular"]
  }
};

// =========================================================================
// 5. DILEMAS LEGISLATIVOS JUGABLES (LOS 3 MEGA-DILEMAS NORMATIVOS)
// =========================================================================
const DILEMAS_LEGISLATIVOS = [
  {
    id: "dilema_dnu_omnibus",
    titulo: "El DNU Ómnibus de Desregulación (350 Artículos)",
    area: "Desregulación y Poder Ejecutivo",
    situacion: "El Ministro de Desregulación te trae una carpeta con un DNU gigante que deroga 80 leyes de un solo plumazo: reforma laboral, privatización de trenes, liberación de alquileres y desregulación de prepagas. Si va por el Congreso tarda tres años; por DNU entra en vigencia mañana a la mañana.",
    explicacion: {
      queMide: "Velocidad autocrática por decreto vs. debate institucional vs. facultades delegadas con gobernadores.",
      siFavor: "Permite cambiar la economía en 24 horas asumiendo el riesgo de amparos y rechazo bicameral.",
      siContra: "La vía parlamentaria es lenta y costosa pero ofrece seguridad jurídica definitiva."
    },
    opciones: [
      {
        id: "firmar_dnu_completo",
        letra: "A",
        nombreRol: "Firmar el DNU Completo el Domingo a la Noche",
        texto: "Firmar el decreto ómnibus íntegro en Olivos para publicación inmediata a las 00:00 hs.",
        efectoTextual: "Desregulás la economía en 24 horas; la CGT presenta un amparo judicial, la Bicameral se autoconvoca para voltearlo y las prepagas aumentan un 70% en una semana.",
        impacto12Axes: { centralismo: 80, libreMercado: 85, institucionalidad: 25 },
        impactoSectores: { productivo: +20, trabajo: -25, claseMedia: -15 },
        impactoMacro: { desregulacion: +35, inflacionMensual: +1.5 },
        impactoCriollo: { mechaSocial: +15, roscaGobernadores: -20 },
        impactoJudicial: { cautelaresNuevas: 3, amparoCGT: true },
        operasteComo: "Javier Milei (DNU 70/2023) / Carlos Menem (DNU 2284/91)"
      },
      {
        id: "dividir_proyectos_congreso",
        letra: "B",
        nombreRol: "Dividir el Contenido y Mandar Proyectos de Ley al Congreso",
        texto: "Desdoblar el decreto en 4 proyectos de ley y enviarlos por mesa de entradas del Congreso.",
        efectoTextual: "Respetás la institucionalidad y ganás seguridad jurídica; los diputados te exigen repartir 40 cargos y retocar 200 artículos antes de dar quórum.",
        impacto12Axes: { institucionalidad: 85, centralismo: 30, legalismo: 80 },
        impactoSectores: { productivo: +5, trabajo: 0, claseMedia: +5 },
        impactoMacro: { desregulacion: +10 },
        impactoCriollo: { mechaSocial: -5, roscaGobernadores: +15 },
        impactoJudicial: { cautelaresNuevas: 0 },
        operasteComo: "Raúl Alfonsín (Trámite parlamentario clásico de comisiones)"
      },
      {
        id: "negociar_facultades_delegadas",
        letra: "C",
        nombreRol: "Negociar con los Gobernadores una Ley de Facultades Delegadas",
        texto: "Ceder fondos coparticipables y obras públicas a las provincias a cambio de que el Congreso declare la Emergencia Económica con facultades delegadas.",
        efectoTextual: "Les das obras públicas y coparticipación a cambio de que el Congreso te vote una 'Emergencia Económica' por un año que te permita legislar por decreto legalmente.",
        impacto12Axes: { pragmatismoMetodo: 85, federalismo: 70, centralismo: 55 },
        impactoSectores: { productivo: +15, trabajo: -10, claseMedia: 0 },
        impactoMacro: { desregulacion: +25, deficitFiscal: +0.4 },
        impactoCriollo: { mechaSocial: +5, roscaGobernadores: +30 },
        impactoJudicial: { cautelaresNuevas: 0, leyBasesDelegada: true },
        operasteComo: "Eduardo Duhalde (Ley 25.561 de Emergencia Pública) / Ley Bases 2024"
      }
    ]
  },

  {
    id: "dilema_veto_jubilatorio",
    titulo: "El Veto al Aumento Jubilatorio y los Dos Tercios",
    area: "Equilibrio Fiscal vs. Conflicto Previsional",
    situacion: "La oposición unificada en Diputados y Senadores te aprobó por amplia mayoría una ley que aumenta las jubilaciones un 12% y actualiza el bono mínimo por inflación. El impacto fiscal representa un déficit del 1.4% del PBI. Si no la vetás, el FMI suspende el programa de desembolsos.",
    explicacion: {
      queMide: "Disciplina fiscal del Excel vs. costo social de la calle vs. compra del tercio de bloqueo.",
      siFavor: "El veto blindado preserva el superávit pero dinamita la imagen positiva en jubilados.",
      siContra: "La promulgación descalabra el programa monetario ante los organismos internacionales."
    },
    opciones: [
      {
        id: "veto_total_represion",
        letra: "A",
        nombreRol: "Veto Total y Blindaje en el Congreso",
        texto: "Firmar el veto total inmediato con mensaje de riesgo de equilibrio fiscal y ordenar vallado policial en el Congreso.",
        efectoTextual: "Blindás el superávit fiscal; los jubilados y la izquierda marchan al Congreso todos los miércoles, la policía tira gases y tu imagen positiva cae 7 puntos.",
        impacto12Axes: { libreMercado: 80, ordenSeguridad: 75, estatismo: 20 },
        impactoSectores: { productivo: +10, trabajo: -20, claseMedia: -15 },
        impactoMacro: { deficitFiscal: -1.4, riesgoPais: -40 },
        impactoCriollo: { mechaSocial: +25, cacerolazos: +15 },
        impactoSalud: { coronarias: -8, paranoia: +10 },
        operasteComo: "Domingo Cavallo (Veto al 82% móvil) / Javier Milei (Veto Previsional 2024)"
      },
      {
        id: "comprar_heroes_veto",
        letra: "B",
        nombreRol: "Comprar a los 'Héroes del Veto' para Evitar los Dos Tercios",
        texto: "Invitar a 8 diputados radicales y provinciales a cenar asado a la Quinta de Olivos, ofreciéndoles contratos y fondos para sus distritos para bloquear los 2/3.",
        efectoTextual: "Vetás la ley e invitás a 8 diputados a cenar asado a Olivos ofreciéndoles contratos y fondos territoriales. Cambian su voto y el Congreso no llega a los dos tercios. Crónica titula: 'EL ASADO DE LA INFAMIA'.",
        impacto12Axes: { pragmatismoMetodo: 90, institucionalidad: 30 },
        impactoSectores: { productivo: +5, trabajo: -15, claseMedia: -10 },
        impactoMacro: { deficitFiscal: -1.2, gastoCajaBarrani: +500000000 },
        impactoCriollo: { mechaSocial: +18, roscaGobernadores: +25, escandaloMedios: +20 },
        impactoSalud: { coronarias: -5, digestivo: -10 },
        operasteComo: "El Asado de Olivos con los 87 'Héroes' / Negociaciones del Pacto de Olivos"
      },
      {
        id: "promulgacion_parcial_financiamiento",
        letra: "C",
        nombreRol: "Promulgación Parcial con Cláusula de Financiamiento",
        texto: "Promulgar la ley tachando el plazo de pago y congelando su aplicación hasta que el Congreso vote de dónde sacar los recursos tributarios.",
        efectoTextual: "Promulgás el aumento pero congelás su aplicación hasta que el Congreso vote de dónde sacar los recursos tributarios; judicializás el conflicto y te comés miles de juicios por reajuste previsional.",
        impacto12Axes: { legalismo: 65, institucionalidad: 60, pragmatismoMetodo: 60 },
        impactoSectores: { productivo: 0, trabajo: -5, claseMedia: -5 },
        impactoMacro: { deficitFiscal: -0.3 },
        impactoCriollo: { mechaSocial: +8, roscaGobernadores: +5 },
        impactoJudicial: { juiciosPrevisionales: +2500 },
        operasteComo: "Mauricio Macri (Reparación Histórica judicializada) / Cristina Kirchner (Ley 82% móvil)"
      }
    ]
  },

  {
    id: "dilema_pacto_reforma",
    titulo: "El Pacto Secreto para la Reforma Constitucional",
    area: "El Botón Nuclear (Art. 30 CN)",
    situacion: "Estás terminando tu segundo mandato con 52% de imagen positiva. Tus senadores no alcanzan los dos tercios para declarar la necesidad de reforma de la Constitución. El líder del principal partido opositor te pide una reunión a solas en un quincho privado: 'Te voto los dos tercios para habilitar la reelección en la Convención Constituyente, pero a cambio me creás el cargo de Jefe de Gabinete con control administrativo, le das autonomía a mi provincia y me nombrás a tres jueces en la Corte Suprema.'",
    explicacion: {
      queMide: "Pacto de refundación hegemónica vs. consulta popular plebiscitaria vs. alternancia republicana.",
      siFavor: "Permite abrir la Constitución y habilitar la permanencia de por vida pagando con cargos clave.",
      siContra: "La consulta popular es un salto al vacío que te consagra o sepulta tu gobierno ese mismo domingo."
    },
    opciones: [
      {
        id: "firmar_pacto_olivos",
        letra: "A",
        nombreRol: "Firmar el Pacto y Convocar a la Constituyente",
        texto: "Firmar el acuerdo reservado en el quincho, votar la Ley de Necesidad con 2/3 y convocar a la Convención en Santa Fe.",
        efectoTextual: "Se aprueba la ley de reforma con aplausos; habilitás tu candidatura eterna, pero el cogobierno con tu rival debilita tu autoridad y la prensa denuncia un 'Pacto de Impunidad'.",
        impacto12Axes: { centralismo: 85, caudillismo: 90, pragmatismoMetodo: 85, alternanciaRepublicana: 10 },
        impactoSectores: { productivo: +5, trabajo: 0, claseMedia: -10 },
        impactoMacro: { riesgoPais: +20 },
        impactoCriollo: { roscaGobernadores: +35, escandaloMedios: +25 },
        pactoConstituyenteFirmado: true,
        operasteComo: "Carlos Menem y Raúl Alfonsín (Pacto de Olivos 1993 / Reforma 1994)"
      },
      {
        id: "rechazar_consulta_popular",
        letra: "B",
        nombreRol: "Rechazar el Pacto y Convocar a una Consulta Popular Vinculante",
        texto: "Rechazar el reparto de jueces y llevar la necesidad de reforma al voto popular directo en las urnas.",
        efectoTextual: "Presionás al Congreso sometiendo la reforma al voto directo popular; si ganás, obligás a los legisladores a votar los dos tercios bajo presión social; si perdés la consulta, tu presidencia se termina ese mismo domingo.",
        impacto12Axes: { participacionPolitica: 90, caudillismo: 70, institucionalidad: 50 },
        impactoSectores: { trabajo: +10, claseMedia: 0, productivo: -10 },
        impactoMacro: { dolarBlue: +45 },
        impactoCriollo: { mechaSocial: +20, climaElectoral: +30 },
        consultaPopularPlebiscito: true,
        operasteComo: "Plebiscito del Canal de Beagle 1984 / Apuestas a todo o nada"
      },
      {
        id: "acatar_limite_heredero",
        letra: "C",
        nombreRol: "Acatar el Límite Constitucional y Ungir a un Heredero",
        texto: "Respetar los dos mandatos de la Constitución, anunciar que no buscarás la reelección y elegir a tu sucesor con la lapicera.",
        efectoTextual: "Respetás la alternancia republicana; evitás el escándalo histórico, pero perdés la lapicera del Ejecutivo y pasás a depender de la lealtad de tu sucesor.",
        impacto12Axes: { institucionalidad: 90, alternanciaRepublicana: 90, caudillismo: 25 },
        impactoSectores: { productivo: +10, claseMedia: +15, trabajo: 0 },
        impactoMacro: { riesgoPais: -30, dolarBlue: -15 },
        impactoCriollo: { roscaGobernadores: -15, mechaSocial: -10 },
        transicionDemocratica: true,
        operasteComo: "Transición Constitucional Republicana / Néstor Kirchner a Cristina Kirchner (2007)"
      }
    ]
  }
];

// =========================================================================
// 6. CLASE SISTEMA LEGISLATIVO & BOTONERA NORMATIVA
// =========================================================================
class SistemaLegislativo {
  constructor() {
    this.reiniciarCongreso();
  }

  reiniciarCongreso() {
    // Cámara de Diputados: 257 bancas (Quórum para sesionar: 129, Art. 64 CN | 2/3 totales: 172, Art. 30 CN)
    this.diputados = {
      total: 257,
      quorumSesion: 129,
      dosTerciosTotales: 172,
      oficialismo: 85,
      aliados: 55,
      neutros: 35,
      oposicion: 82
    };

    // Cámara de Senadores: 72 bancas (Quórum para sesionar: 37, Art. 64 CN | 2/3 totales: 48, Art. 30 CN)
    // 3 senadores por cada uno de los 24 distritos (2 mayoría, 1 primera minoría - Art. 54 CN)
    this.senadores = {
      total: 72,
      quorumSesion: 37,
      dosTerciosTotales: 48,
      oficialismo: 22,
      aliados: 18,
      neutros: 10,
      oposicion: 22
    };

    this.bancasDiputados = this.diputados;
    this.bancasSenadores = this.senadores;
    this.estadoParlamentario = "SESIONES ORDINARIAS";
    this.normasEnTramite = JSON.parse(JSON.stringify(NORMAS_EN_TRAMITE_INICIALES));
    this.historialLeyes = [];
    this.historialAccionesNormativas = [];
    this.cautelaresActivas = 4;
    this.procesoConstituyente = {
      estado: "inactivo", // inactivo, ley_necesidad_aprobada, convencionales_electos, constitucion_jurada, rechazada
      etapa: 0,
      poroteoDiputados: 108,
      poroteoSenadores: 31,
      eleccionConvencionGanada: false,
      reformasAprobadas: []
    };
    this.motor = null;
  }

  sincronizarConMotor(motor) {
    this.motor = motor;
  }

  // Calibrar la composición del Congreso según el caudal electoral de la presidencia
  calibrarConElecciones(resultadoEleccion) {
    const votos = resultadoEleccion?.votos || 45;

    // Cámara de Diputados (257) - Renovación por mitades (Art. 50 CN)
    const factorOficialista = Math.min(0.42, Math.max(0.28, (votos * 0.75) / 100));
    this.diputados.oficialismo = Math.round(257 * factorOficialista);
    this.diputados.aliados = Math.round(257 * 0.18);
    this.diputados.neutros = Math.round(257 * 0.14);
    this.diputados.oposicion = 257 - (this.diputados.oficialismo + this.diputados.aliados + this.diputados.neutros);

    // Cámara de Senadores (72) - Renovación por tercios (Art. 56 CN)
    const factorSenado = Math.min(0.38, Math.max(0.22, ((votos - 5) * 0.65) / 100));
    this.senadores.oficialismo = Math.round(72 * factorSenado);
    this.senadores.aliados = Math.round(72 * 0.22);
    this.senadores.neutros = Math.round(72 * 0.20);
    this.senadores.oposicion = 72 - (this.senadores.oficialismo + this.senadores.aliados + this.senadores.neutros);

    this.bancasDiputados = this.diputados;
    this.bancasSenadores = this.senadores;
  }

  // Simular tratamiento ordinario de una ley en ambas Cámaras (Arts. 77 a 84 CN)
  simularVotacionLey(dilema, opcionElegida = {}, aprobacionSectores = {}) {
    const decTxt = (opcionElegida.texto || "").toLowerCase();
    const imp12 = opcionElegida.impacto12Axes || {};

    let afinidadAliados = 0.50;
    let afinidadNeutros = 0.40;

    if ((opcionElegida.impactoSectores?.productivo || 0) > 0) afinidadAliados += 0.20;
    if ((opcionElegida.impactoSectores?.claseMedia || 0) > 0) afinidadNeutros += 0.15;

    if ((imp12.regulacion || 50) > 75 || (imp12.estatismo || 50) > 80) {
      afinidadNeutros -= 0.20;
    }

    if (decTxt.includes("federal") || decTxt.includes("coparticip") || decTxt.includes("provincia")) {
      afinidadAliados += 0.25;
      afinidadNeutros += 0.30;
    }

    afinidadAliados = Math.max(0.15, Math.min(0.90, afinidadAliados));
    afinidadNeutros = Math.max(0.10, Math.min(0.85, afinidadNeutros));

    // Diputados (257)
    const dipOficAFavor = this.diputados.oficialismo;
    const dipAliadosAFavor = Math.round(this.diputados.aliados * afinidadAliados);
    const dipNeutrosAFavor = Math.round(this.diputados.neutros * afinidadNeutros);
    const dipOposAFavor = Math.round(this.diputados.oposicion * 0.08);

    const totalDiputadosAFavor = dipOficAFavor + dipAliadosAFavor + dipNeutrosAFavor + dipOposAFavor;
    const totalDiputadosEnContra = this.diputados.total - totalDiputadosAFavor;
    const pasoDiputados = totalDiputadosAFavor >= 129;

    // Senadores (72)
    let totalSenadoresAFavor = 0;
    let totalSenadoresEnContra = 72;
    let pasoSenadores = false;
    let senOficAFavor = 0;
    let senAliadosAFavor = 0;
    let senNeutrosAFavor = 0;
    let senOposAFavor = 0;

    if (pasoDiputados) {
      senOficAFavor = this.senadores.oficialismo;
      senAliadosAFavor = Math.round(this.senadores.aliados * (afinidadAliados * 0.95));
      senNeutrosAFavor = Math.round(this.senadores.neutros * afinidadNeutros);
      senOposAFavor = Math.round(this.senadores.oposicion * 0.05);

      totalSenadoresAFavor = senOficAFavor + senAliadosAFavor + senNeutrosAFavor + senOposAFavor;
      totalSenadoresEnContra = this.senadores.total - totalSenadoresAFavor;
      pasoSenadores = totalSenadoresAFavor >= 37;
    }

    const resultadoFinal = {
      tipo: "ley_congreso",
      tituloLey: dilema?.titulo || "Proyecto de Ley",
      aprobada: pasoDiputados && pasoSenadores,
      diputados: {
        aFavor: totalDiputadosAFavor,
        enContra: totalDiputadosEnContra,
        quorumpasado: pasoDiputados,
        detalle: {
          oficialismo: dipOficAFavor,
          aliados: dipAliadosAFavor,
          neutros: dipNeutrosAFavor,
          oposicion: dipOposAFavor
        }
      },
      senadores: {
        aFavor: totalSenadoresAFavor,
        enContra: totalSenadoresEnContra,
        quorumpasado: pasoSenadores,
        detalle: {
          oficialismo: senOficAFavor,
          aliados: senAliadosAFavor,
          neutros: senNeutrosAFavor,
          oposicion: senOposAFavor
        }
      }
    };

    this.historialLeyes.push(resultadoFinal);
    return resultadoFinal;
  }

  simularVotacionDiputados(dilema, opcionElegida, aprobacionSectores) {
    const res = this.simularVotacionLey(dilema, opcionElegida || {}, aprobacionSectores || {});
    return {
      presentes: 257,
      quorum: 129,
      aFavor: res.diputados.aFavor,
      enContra: res.diputados.enContra,
      aprobada: res.diputados.quorumpasado
    };
  }

  simularVotacionSenadores(dilema, opcionElegida, aprobacionSectores) {
    const res = this.simularVotacionLey(dilema, opcionElegida || {}, aprobacionSectores || {});
    return {
      presentes: 72,
      quorum: 37,
      aFavor: res.senadores.aFavor,
      enContra: res.senadores.enContra,
      aprobada: res.senadores.quorumpasado
    };
  }

  // Evaluar validez constitucional de un Decreto DNU (Art. 99 inc. 3 CN y Ley 26.122)
  evaluarDNU(dilema, opcionElegida = {}) {
    const txt = ((dilema?.titulo || "") + " " + (dilema?.materia || "") + " " + (opcionElegida?.texto || "") + " " + (dilema?.area || "")).toLowerCase();

    // Veda expresa del Art. 99 inc. 3: penal, tributaria, electoral o partidos políticos
    const mat = (dilema?.materia || "").toLowerCase();
    const esPenal = mat === "penal" || txt.includes("penal") || txt.includes("delito") || txt.includes("imputabilidad") || txt.includes("cárcel");
    const esTributario = mat === "tributaria" || mat === "tributario" || txt.includes("retenciones") || txt.includes("impuesto") || txt.includes("tribut") || txt.includes("arancel");
    const esElectoral = mat === "electoral" || mat === "partidos" || mat === "partido" || txt.includes("electoral") || txt.includes("boleta única") || txt.includes("partido político") || txt.includes("comicios");

    if (esPenal || esTributario || esElectoral) {
      const materia = esPenal ? "materia penal" : (esTributario ? "materia tributaria" : "materia electoral y de partidos políticos");
      const textoAlerta = `Inconstitucionalidad manifiesta: El Art. 99 inc. 3 de la Constitución prohíbe expresamente dictar DNU en ${materia}. La Justicia Federal / Corte Suprema dictó una medida cautelar suspensiva inmediata.`;
      this.cautelaresActivas += 1;
      return {
        esValido: false,
        constitucionalidadPrimaFacie: false,
        esMateriaVedada: true,
        materiaProhibida: materia,
        alertaCautelarJudicial: true,
        estado: "Frenado por Cautelar Judicial Inconstitucional",
        alertaJudicial: textoAlerta,
        mensaje: textoAlerta,
        ley26122: {
          comisionBicameral: "Rechazo unánime por inconstitucionalidad manifiesta",
          vigenciaPrecaria: false
        }
      };
    }

    // Régimen Ley 26.122: El DNU sigue vivo mientras al menos UNA de las dos Cámaras NO lo rechace por mayoría absoluta
    const textoValido = "DNU promulgado en el Boletín Oficial. Rige de inmediato conforme Art. 99 inc. 3 CN y pasa a revisión de la Comisión Bicameral Permanente (Ley 26.122).";
    return {
      esValido: true,
      constitucionalidadPrimaFacie: true,
      esMateriaVedada: false,
      alertaCautelarJudicial: false,
      estado: "Vigente - En Revisión Bicameral",
      alertaJudicial: textoValido,
      mensaje: textoValido,
      ley26122: {
        comisionBicameral: "Bicameral Permanente conformada (8 diputados y 8 senadores). El DNU sigue vigente mientras no lo rechacen ambas Cámaras.",
        vigenciaPrecaria: true,
        reglaConstitucional: "Para derogar un DNU se requiere el rechazo expreso por mayoría absoluta de AMBAS Cámaras."
      }
    };
  }

  // Simular Consulta Popular Presidencial (Art. 40 párr. 2 CN - NO VINCULANTE)
  simularConsultaPopular(dilema, opcionElegida, aprobacionSectores) {
    let sectores = aprobacionSectores;
    if (!sectores && opcionElegida && (opcionElegida.trabajo !== undefined || opcionElegida.claseMedia !== undefined)) {
      sectores = opcionElegida;
    }
    sectores = sectores || {};

    let votosFavor = (
      (sectores.trabajo || 50) * 0.25 +
      (sectores.claseMedia || 50) * 0.30 +
      (sectores.productivo || 50) * 0.20 +
      (sectores.estadoCiencia || 50) * 0.15 +
      (sectores.seguridadJusticia || 50) * 0.10
    );

    votosFavor = Math.round((votosFavor + (Math.random() * 8 - 4)) * 10) / 10;
    votosFavor = Math.max(25, Math.min(85, votosFavor));
    const votosContra = Math.round((100 - votosFavor) * 10) / 10;
    const ganoPlebiscito = votosFavor >= 50.0;

    const resultado = {
      tipo: "consulta_popular_no_vinculante",
      vinculante: false,
      esVinculante: false,
      tituloLey: dilema?.titulo || "Iniciativa del Poder Ejecutivo",
      aprobada: ganoPlebiscito,
      porcentajeFavor: votosFavor,
      porcentajeContra: votosContra,
      porcentajeParticipacion: 76.5,
      participacionPadron: 76.5,
      detalle: "El Art. 40 párr. 2 de la Constitución Nacional establece que la consulta popular convocada por el Presidente de la Nación es no vinculante. El voto no es obligatorio y el Congreso no queda compelido a sancionar.",
      efectoPolitico: ganoPlebiscito
        ? "Triunfo popular en las urnas: Por ser de convocatoria presidencial es NO VINCULANTE (Art. 40 párr. 2 CN). No obliga formalmente al Congreso, pero la contundencia del respaldo cívico condiciona fuertemente el debate legislativo y debilita la resistencia opositora."
        : "Rechazo ciudadano en las urnas: La derrota popular deja sin respaldo al Poder Ejecutivo y sepulta la iniciativa legislativa."
    };

    this.historialLeyes.push(resultado);
    return resultado;
  }

  // Simular Veto Presidencial y trámite de insistencia parlamentaria (Art. 83 CN)
  simularVetoPresidencial(dilema, tipoVeto = "total", aprobacionSectores = {}) {
    const descontentoGeneral = aprobacionSectores.claseMedia !== undefined ? (100 - aprobacionSectores.claseMedia) / 100 : 0.5;

    let afinesOposicionDip = this.diputados.oposicion + Math.round(this.diputados.neutros * (0.5 + descontentoGeneral * 0.5));
    let afinesOposicionSen = this.senadores.oposicion + Math.round(this.senadores.neutros * (0.6 + descontentoGeneral * 0.4));

    if (descontentoGeneral >= 0.70) {
      afinesOposicionDip += Math.round(this.diputados.aliados * 0.75) + 30;
      afinesOposicionSen += Math.round(this.senadores.aliados * 0.75) + 10;
    }

    const insistenciaDiputados = afinesOposicionDip >= 172; // 2/3 de 257
    const insistenciaSenadores = afinesOposicionSen >= 48;  // 2/3 de 72
    const vetoDerribado = insistenciaDiputados && insistenciaSenadores;

    const res = {
      tipo: "veto_presidencial",
      tipoVeto: tipoVeto,
      vetoFirme: !vetoDerribado,
      insistenciaLograda: vetoDerribado,
      votosDiputados: afinesOposicionDip,
      votosSenadores: afinesOposicionSen,
      detalle: vetoDerribado
        ? "El Congreso alcanzó los dos tercios (2/3) en ambas Cámaras (Art. 83 CN) y promulgó la ley contra la voluntad presidencial."
        : "El blindaje del tercio oficialista impidió que la oposición alcanzara los dos tercios. El veto presidencial quedó firme."
    };

    this.historialLeyes.push(res);
    return res;
  }

  // Ejecutar una de las 4 acciones normativas de la botonera
  ejecutarAccionNormativa(idAccion, params = {}) {
    const accionDef = ACCIONES_NORMATIVAS[idAccion];
    if (!accionDef) throw new Error(`Acción normativa no reconocida: ${idAccion}`);

    let resultado = { idAccion, nombre: accionDef.nombre, exito: true, mensaje: "", timestamp: Date.now() };

    switch (idAccion) {
      case "redactar_proyecto": {
        const esCaballoTroya = params.subtipo === "caballo_de_troya";
        const nuevoProyecto = {
          id: `ley_usr_${Date.now()}`,
          titulo: params.titulo || (esCaballoTroya ? "Reforma Tributaria camuflada en Ley de Presupuesto (4:00 AM)" : "Proyecto de Modernización Estatal"),
          tipo: "ley_congreso",
          materia: params.materia || "impositiva",
          articulos: params.articulos || (esCaballoTroya ? 3 : 45),
          vigencia: "EN COMISIÓN",
          estado: esCaballoTroya ? "Camuflado en artículos transitorios de presupuesto" : "Trabado en comisión dictaminadora",
          caballoDeTroyaIncluido: esCaballoTroya
        };
        this.normasEnTramite.unshift(nuevoProyecto);
        resultado.mensaje = esCaballoTroya
          ? "Metiste el Caballo de Troya: reforma camuflada en dos incisos de presupuesto a las 4 AM sin levantar la perdiz en los medios."
          : "Proyecto enviado al Congreso con tratamiento de urgencia. Entra en el peaje de comisiones.";
        resultado.norma = nuevoProyecto;
        break;
      }

      case "meter_dnu": {
        const evalDnu = this.evaluarDNU({
          titulo: params.titulo || "DNU Desregulación de Entes Reguladores y Tarifas",
          materia: params.materia || "servicios_publicos"
        });
        const nuevoDnu = {
          id: `dnu_usr_${Date.now()}`,
          titulo: params.titulo || "DNU Desregulación de Entes Reguladores y Tarifas",
          tipo: "dnu",
          materia: params.materia || "servicios_publicos",
          articulos: params.articulos || 85,
          vigencia: evalDnu.constitucionalidadPrimaFacie ? "VIGENTE" : "FRENADO POR CAUTELAR",
          frenteJudicial: evalDnu.constitucionalidadPrimaFacie ? "1 amparo de asociaciones de consumidores" : "Inconstitucionalidad declarada de oficio",
          amparosActivos: evalDnu.constitucionalidadPrimaFacie ? 1 : 4
        };
        this.normasEnTramite.unshift(nuevoDnu);
        resultado.mensaje = evalDnu.mensaje;
        resultado.evaluacion = evalDnu;
        resultado.norma = nuevoDnu;
        break;
      }

      case "aplicar_veto": {
        const normaPrevisional = this.normasEnTramite.find(n => n.id === "aumento_jubilatorio") || this.normasEnTramite[0];
        const resVeto = this.simularVetoPresidencial({ titulo: normaPrevisional.titulo }, params.subtipo || "total");
        if (normaPrevisional) {
          normaPrevisional.vetadoPorPresidente = true;
          normaPrevisional.vigencia = resVeto.vetoFirme ? "VETADA - VETO FIRME" : "PROMULGADA POR INSISTENCIA DE 2/3";
        }
        resultado.mensaje = resVeto.vetoFirme
          ? `Veto ${params.subtipo || "total"} aplicado con éxito. El tercio de bloqueo en Diputados impidió la insistencia opositora.`
          : `El Congreso juntó los dos tercios en ambas Cámaras (Art. 83 CN) y pulverizó tu veto. Ley promulgada de oficio.`;
        resultado.detalleVeto = resVeto;
        break;
      }

      case "boton_constitucion": {
        // Mecánica de Reforma Constitucional (Art. 30 CN)
        const dip = this.diputados.oficialismo + this.diputados.aliados;
        const sen = this.senadores.oficialismo + this.senadores.aliados;
        const alcanzaDip = dip >= 172;
        const alcanzaSen = sen >= 48;
        const alcanzaAmbas = alcanzaDip && alcanzaSen;

        this.procesoConstituyente.poroteoDiputados = dip;
        this.procesoConstituyente.poroteoSenadores = sen;

        if (alcanzaAmbas || params.forzarPacto) {
          this.procesoConstituyente.estado = "ley_necesidad_aprobada";
          this.procesoConstituyente.etapa = 1;
          resultado.mensaje = "¡Ley de Necesidad de Reforma declarada por el Congreso con 2/3 de miembros totales (Art. 30 CN)! Se convocan elecciones generales de Convencionales Constituyentes.";
        } else {
          resultado.mensaje = `Poroteo insuficiente para el Botón Nuclear: Contás con ${dip}/172 Diputados y ${sen}/48 Senadores. Necesitás un pacto político o someter la reforma a una Consulta Popular.`;
          resultado.exito = false;
        }
        resultado.procesoConstituyente = this.procesoConstituyente;
        break;
      }
    }

    this.historialAccionesNormativas.push(resultado);
    return resultado;
  }

  // Destrabe de comisiones trabadas con fondos viales o coparticipación
  destrabarComision(idNorma, montoFondos = 12000000000) {
    const norma = this.normasEnTramite.find(n => n.id === idNorma);
    if (!norma) return { exito: false, mensaje: "Norma no encontrada en trámite" };

    norma.comisionDestrabada = true;
    norma.estado = "Destrabada de comisión tras giro de fondos viales. Pasa al recinto para votación general y particular.";
    return {
      exito: true,
      norma,
      mensaje: `Destrabaste la Comisión tras girar $ ${(montoFondos / 1000000).toLocaleString('es-AR')} M en obras viales. La oposición firmó dictamen de mayoría.`
    };
  }

  // Votación en particular (Desguace del articulado por bloques provinciales)
  simularVotacionEnParticular(idNorma) {
    const norma = this.normasEnTramite.find(n => n.id === idNorma);
    if (!norma) return { exito: false, mensaje: "Norma no encontrada" };

    const articulosCaidos = Math.floor(Math.random() * 15) + 8;
    norma.desguaceArticulado = true;
    norma.estado = `Ley aprobada en general, pero desguazada en particular: los bloques provinciales voltearon ${articulosCaidos} artículos clave de privatizaciones y facultades delegadas.`;

    return {
      exito: true,
      norma,
      articulosCaidos,
      mensaje: `Desguace parlamentario: Los gobernadores votaron a favor en general pero voltearon ${articulosCaidos} incisos estratégicos a las 5:00 AM.`
    };
  }

  // Resolver dilema normativo jugable
  resolverDilemaLegislativo(idDilema, idOpcion) {
    const dilema = DILEMAS_LEGISLATIVOS.find(d => d.id === idDilema);
    if (!dilema) throw new Error(`Dilema legislativo no encontrado: ${idDilema}`);

    const opcion = dilema.opciones.find(o => o.id === idOpcion);
    if (!opcion) throw new Error(`Opción no encontrada: ${idOpcion}`);

    if (this.motor) {
      if (typeof this.motor.aplicarDecision === 'function') {
        this.motor.aplicarDecision(opcion);
      }
    }

    const resultado = {
      dilemaId: idDilema,
      dilemaTitulo: dilema.titulo,
      opcionId: idOpcion,
      opcionTexto: opcion.texto,
      efectoTextual: opcion.efectoTextual,
      operasteComo: opcion.operasteComo,
      timestamp: Date.now()
    };

    return resultado;
  }

  // Snapshot integral de la pantalla legislativa (Tablero de Iniciativas y Normas)
  obtenerSnapshotLegislativo() {
    return {
      estadoParlamentario: this.estadoParlamentario,
      balanceDiputados: {
        oficialismo: this.diputados.oficialismo,
        aliados: this.diputados.aliados,
        neutros: this.diputados.neutros,
        oposicion: this.diputados.oposicion,
        total: 257,
        quorumSesion: 129,
        dosTerciosTotales: 172,
        textoDisplay: `${this.diputados.oficialismo + this.diputados.aliados} / 257`
      },
      balanceSenado: {
        oficialismo: this.senadores.oficialismo,
        aliados: this.senadores.aliados,
        neutros: this.senadores.neutros,
        oposicion: this.senadores.oposicion,
        total: 72,
        quorumSesion: 37,
        dosTerciosTotales: 48,
        textoDisplay: `${this.senadores.oficialismo + this.senadores.aliados} / 72`
      },
      normasEnTramite: this.normasEnTramite,
      cautelaresActivas: this.cautelaresActivas,
      viasNormativas: VIAS_NORMATIVAS,
      accionesNormativas: ACCIONES_NORMATIVAS,
      dilemasLegislativos: DILEMAS_LEGISLATIVOS,
      impactos12Axes: IMPACTOS_PRACTICAS_LEGALES_12AXES,
      procesoConstituyente: this.procesoConstituyente
    };
  }

  obtenerTableroNormas() {
    return this.obtenerSnapshotLegislativo();
  }
}

// =========================================================================
// EXPORTS: CommonJS y Browser Window
// =========================================================================
if (typeof window !== 'undefined') {
  window.VIAS_NORMATIVAS = VIAS_NORMATIVAS;
  window.IMPACTOS_PRACTICAS_LEGALES_12AXES = IMPACTOS_PRACTICAS_LEGALES_12AXES;
  window.NORMAS_EN_TRAMITE_INICIALES = NORMAS_EN_TRAMITE_INICIALES;
  window.ACCIONES_NORMATIVAS = ACCIONES_NORMATIVAS;
  window.DILEMAS_LEGISLATIVOS = DILEMAS_LEGISLATIVOS;
  window.SistemaLegislativo = SistemaLegislativo;
  window.sistemaLegislativo = new SistemaLegislativo();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    VIAS_NORMATIVAS,
    IMPACTOS_PRACTICAS_LEGALES_12AXES,
    NORMAS_EN_TRAMITE_INICIALES,
    ACCIONES_NORMATIVAS,
    DILEMAS_LEGISLATIVOS,
    SistemaLegislativo
  };
}
