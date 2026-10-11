// ritmo_cadena_semanal.js - Sistema de Ritmo de Juego (1, 3 o 7 Decisiones por Semana)
// Encadenamiento Diario Dinámico, Calendario Semanal y Radar de Hipocresía

// =========================================================================
// 1. LOS 3 MODOS DE RITMO SEMANAL ("LA VELOCIDAD DEL DESGASTE")
// =========================================================================
const MODOS_RITMO_SEMANAL = {
  decreto: {
    id: "decreto",
    numero: 1,
    nombre: "[1] MODO DECRETO (1 DECISIÓN POR SEMANA)",
    titulo: "MODO DECRETO",
    subtitulo: "Resolvés únicamente el hecho troncal de cada año biológico",
    decisionesPorSemana: 1,
    diasActivos: [0], // Solo Lunes
    icono: "fa-solid fa-bolt",
    color: "amber",
    tiempoEstimado: "10 a 15 minutos",
    badge: "Modo Decreto (1 decis/sem)",
    dinamica: "Resolvés únicamente el hecho troncal de cada año biológico.",
    duracion: "Partida relámpago de 10 a 15 minutos (ideal para previas y Discord).",
    efecto: "Ves saltos macroeconómicos bruscos y el veredicto ideológico vuela.",
    nivelRoast: "Condensa tus contradicciones en titulares brutales sin anestesia.",
    descripcion: "Resolvés únicamente el hecho troncal de cada año biológico. Partida relámpago de 10 a 15 minutos."
  },

  parlamentario: {
    id: "parlamentario",
    numero: 3,
    nombre: "[3] MODO PARLAMENTARIO (3 DECISIONES: LUNES - MIÉRCOLES - VIERNES) [RECOMENDADO]",
    titulo: "MODO PARLAMENTARIO",
    subtitulo: "Lunes (La Medida) ──> Miércoles (La Reacción) ──> Viernes (El Parche)",
    decisionesPorSemana: 3,
    diasActivos: [0, 2, 4], // Lunes, Miércoles, Viernes
    icono: "fa-solid fa-scale-balanced",
    color: "sky",
    tiempoEstimado: "25 a 35 minutos",
    badge: "Modo Parlamentario (3 decis/sem) [Recomendado]",
    dinamica: "Lunes (La Medida) ──> Miércoles (La Reacción) ──> Viernes (El Parche).",
    duracion: "Partida media de 25 a 35 minutos.",
    efecto: "Podés intentar tapar con la mano izquierda lo que rompiste con la derecha antes del cierre de los mercados.",
    nivelRoast: "Te expone como un negociador contradictorio o un bombero pirómano.",
    descripcion: "Lunes (La Medida) ──> Miércoles (La Reacción) ──> Viernes (El Parche). Partida media de 25 a 35 minutos."
  },

  trinchera: {
    id: "trinchera",
    numero: 7,
    nombre: "[7] MODO TRINCHERA (7 DECISIONES: LUNES A DOMINGO DÍA POR DÍA)",
    titulo: "MODO TRINCHERA",
    subtitulo: "Una decisión por día hábil y fin de semana • Minuto a minuto",
    decisionesPorSemana: 7,
    diasActivos: [0, 1, 2, 3, 4, 5, 6], // Lunes a Domingo completo
    icono: "fa-solid fa-fire",
    color: "rose",
    tiempoEstimado: "45 a 60 minutos",
    badge: "Modo Trinchera (7 decis/sem)",
    dinamica: "Una decisión por día hábil y fin de semana.",
    duracion: "Partida inmersiva de 45 a 60 minutos.",
    efecto: "Efecto dominó implacable: lo que firmás a las 08:00 AM del lunes te explota en la vereda el martes a la madrugada.",
    nivelRoast: "Radiografía forense de tus 12 ejes: no hay forma de esconder nada.",
    descripcion: "Una decisión por día hábil y fin de semana. Partida inmersiva de 45 a 60 minutos."
  }
};

// Alias semánticos y numéricos
MODOS_RITMO_SEMANAL.express = MODOS_RITMO_SEMANAL.decreto;
MODOS_RITMO_SEMANAL["1"] = MODOS_RITMO_SEMANAL.decreto;
MODOS_RITMO_SEMANAL.equilibrado = MODOS_RITMO_SEMANAL.parlamentario;
MODOS_RITMO_SEMANAL["3"] = MODOS_RITMO_SEMANAL.parlamentario;
MODOS_RITMO_SEMANAL.hardcore = MODOS_RITMO_SEMANAL.trinchera;
MODOS_RITMO_SEMANAL["7"] = MODOS_RITMO_SEMANAL.trinchera;

// =========================================================================
// 2. SECUENCIA DIARIA DE LA SEMANA (LUNES A DOMINGO)
// =========================================================================
const DIAS_SEMANA_SECUENCIA = [
  {
    diaId: "lunes",
    diaNumero: 1,
    tagDia: "LUN 04",
    fechaTxt: "Lunes 04 de Octubre (08:30 AM)",
    nombre: "Lunes",
    faseTema: "La Gran Medida",
    subtitulo: "El Decreto Troncal de Inicio de Semana",
    alertaPredictiva: "Privatizás energía y tarifazo",
    icono: "fa-solid fa-file-signature",
    color: "sky"
  },
  {
    diaId: "martes",
    diaNumero: 2,
    tagDia: "MAR 05",
    fechaTxt: "Martes 05 de Octubre (08:30 AM)",
    nombre: "Martes",
    faseTema: "La Reacción en la Calle",
    subtitulo: "Marcha Sindical, Piquete & Protocolo de Seguridad",
    alertaPredictiva: "Infantería y gases en la 9 de Julio",
    icono: "fa-solid fa-bullhorn",
    color: "amber"
  },
  {
    diaId: "miercoles",
    diaNumero: 3,
    tagDia: "MIÉ 06",
    fechaTxt: "Miércoles 06 de Octubre (08:30 AM)",
    nombre: "Miércoles",
    faseTema: "El Compensador Social (La Contradicción)",
    subtitulo: "Aumento Salarial, Tarjeta SUBE o Bono de Emergencia",
    alertaPredictiva: "¿Suba de salario mínimo?",
    icono: "fa-solid fa-hand-holding-dollar",
    color: "emerald"
  },
  {
    diaId: "jueves",
    diaNumero: 4,
    tagDia: "JUE 07",
    fechaTxt: "Jueves 07 de Octubre (08:30 AM)",
    nombre: "Jueves",
    faseTema: "La Rebelión Empresaria",
    subtitulo: "UIA, Pymes, Solicitada en Diarios & Negociación en Olivos",
    alertaPredictiva: "Presión de la UIA por costos",
    icono: "fa-solid fa-building",
    color: "purple"
  },
  {
    diaId: "viernes",
    diaNumero: 5,
    tagDia: "VIE 08",
    fechaTxt: "Viernes 08 de Octubre (08:30 AM)",
    nombre: "Viernes",
    faseTema: "La Corrida Bancaria & La City",
    subtitulo: "Salto del Dólar Blue, Tasa del BCRA & Allanamientos de ARCA",
    alertaPredictiva: "Amenaza de corrida de los bancos",
    icono: "fa-solid fa-money-bill-trend-up",
    color: "rose"
  },
  {
    diaId: "sabado",
    diaNumero: 6,
    tagDia: "SÁB 09",
    fechaTxt: "Sábado 09 de Octubre (08:30 AM)",
    nombre: "Sábado",
    faseTema: "La Rosca Política de Fin de Semana",
    subtitulo: "Gobernadores Feudales, Senado & Chequera de ATN",
    alertaPredictiva: "Cena con gobernadores del norte",
    icono: "fa-solid fa-handshake-simple",
    color: "indigo"
  },
  {
    diaId: "domingo",
    diaNumero: 7,
    tagDia: "DOM 10",
    fechaTxt: "Domingo 10 de Octubre (21:00 PM)",
    nombre: "Domingo",
    faseTema: "El Almuerzo de TV & Prime Time",
    subtitulo: "Mesa de Mirtha Legrand o Streaming: ¿Liberal o Populista?",
    alertaPredictiva: "Almuerzo televisivo y roast",
    icono: "fa-solid fa-tv",
    color: "pink"
  }
];

// =========================================================================
// 3. DILEMAS ENCADENADOS SEMANALES (CONSECUENCIAS TRIDIMENSIONALES)
// =========================================================================
const DILEMAS_ENCADENADOS_SEMANA = {
  // --- LUNES (DÍA 1): LA GRAN MEDIDA ---
  dilema_lunes_gran_medida: {
    id: "dilema_lunes_gran_medida",
    diaId: "lunes",
    etapaBadge: "Lunes 04 de Octubre (08:30 AM) • Despacho Presidencial",
    area: "Energía & Tarifas Públicas",
    titulo: "La Crisis de Suministro Eléctrico y el Decreto Troncal",
    antecedenteAyer: "Las distribuidoras eléctricas amenazan con cortes masivos por falta de inversión y déficit de tarifas tras años de congelamiento. El gabinete económico te presenta el decreto de shock sobre el escritorio.",
    descripcion: "Las distribuidoras eléctricas anuncian cortes masivos por falta de inversión y déficit de tarifas. Firmar la medida troncal condicionará toda la semana política.",
    explicacion: {
      queMide: "Shock desregulador de mercado vs. estatización con control obrero vs. gradualismo segmentado.",
      siFavor: "Atrae capitales o calma a las masas según el polo elegido.",
      siContra: "La decisión condicionará de forma inmediata la reacción de la calle del martes."
    },
    opciones: [
      {
        id: "lunes_privatizar_liberar",
        texto: "[OPCIÓN A] FIRMAR DECRETO PRIVATIZANDO CONTROL TOTAL Y LIBERANDO TARIFAS AL 100%",
        consecuenciaCalle: "Las facturas se triplican en 24 horas y los gremios convocan a paro de emergencia.",
        consecuenciaManana: "Paro masivo de la CTA y cortes totales frente a Economía el martes a la mañana.",
        impacto12AxesTexto: "+25% Libre Mercado (Eje 1) | +20% Concesión Privada (Eje 9)",
        impacto12Axes: { comercio: 75, estatismo: 85, regulacion: 85 },
        impactoSectores: { productivo: +20, trabajo: -20, claseMedia: -15 },
        impactoMacro: { inflacionMensual: +2.8, riesgoPais: -90, fiscal: +0.6 },
        impactoCriollo: { mechaSocial: +25, dolarBlue: -40 },
        impactoSalud: { coronarias: -3, paranoia: +5 },
        setFlags: { medida_lunes: "privatizacion", tarifazo_lunes: true },
        resumenMedida: "Privatización total y liberación tarifaria (+25% Mercado)",
        operasteComo: "Margaret Thatcher (Liberación total de tarifas)"
      },
      {
        id: "lunes_estatizar_congelar",
        texto: "[OPCIÓN B] ESTATIZAR LAS DISTRIBUIDORAS, CONGELAR TARIFAS Y CUBRIR DÉFICIT CON EMISIÓN",
        consecuenciaCalle: "Alivio inmediato en los bolsillos populares, pero cacerolazos en centros urbanos.",
        consecuenciaManana: "Amenaza de demandas millonarias en el CIADI y fuga de capitales de petroleras.",
        impacto12AxesTexto: "+25% Estatismo (Eje 1) | +20% Control de Precios (Eje 9)",
        impacto12Axes: { estatismo: 15, regulacion: 15, comercio: 25 },
        impactoSectores: { trabajo: +20, claseMedia: +10, productivo: -25 },
        impactoMacro: { inflacionMensual: +3.5, riesgoPais: +180, fiscal: -1.2 },
        impactoCriollo: { mechaSocial: -15, dolarBlue: +110 },
        impactoSalud: { coronarias: -2, paranoia: +10 },
        setFlags: { medida_lunes: "estatizacion", subsidio_lunes: true },
        resumenMedida: "Estatización y congelamiento tarifario (+25% Estatismo)",
        operasteComo: "Juan Domingo Perón (Estatización y congelamiento)"
      },
      {
        id: "lunes_segmentacion_gradual",
        texto: "[OPCIÓN C] SEGMENTACIÓN GRADUAL: TARIFA PLENA SÓLO A COUNTRIES Y SUBSIDIO A TRABAJADORES",
        consecuenciaCalle: "Malestar difuso en la clase media que siente que paga la fiesta de los demás.",
        consecuenciaManana: "Marcha con velas frente a Olivos de sectores medios urbanos.",
        impacto12AxesTexto: "+15% Pragmatismo (Eje 12) | +10% Centralismo (Eje 3)",
        impacto12Axes: { estatismo: 50, valores: 55, institucionalidad: 60 },
        impactoSectores: { claseMedia: 0, trabajo: +5, productivo: -5 },
        impactoMacro: { inflacionMensual: +0.8, riesgoPais: +20, fiscal: +0.2 },
        impactoCriollo: { mechaSocial: +5, roscaGobernadores: +10 },
        impactoSalud: { coronarias: 0, paranoia: 0 },
        setFlags: { medida_lunes: "gradualismo" },
        resumenMedida: "Segmentación gradualista de subsidios (Centro / Cautela)",
        operasteComo: "Arturo Illia (Cautela gradualista)"
      }
    ]
  },

  // --- MARTES (DÍA 2): LA REACCIÓN EN LA CALLE (DEPENDE DEL LUNES) ---
  dilema_martes_calle: {
    id: "dilema_martes_calle",
    diaId: "martes",
    etapaBadge: "Martes 05 de Octubre (08:30 AM) • Despacho Presidencial",
    area: "Seguridad & Espacio Público",
    generarContexto: (flags) => {
      const eraPrivatizacion = flags.medida_lunes === 'privatizacion';
      const eraEstatizacion = flags.medida_lunes === 'estatizacion';

      if (eraPrivatizacion) {
        return {
          antecedenteAyer: "Las facturas se triplicaron en 24 horas tras el decreto del lunes. La CTA y piqueteros cortaron la 9 de Julio quemando neumáticos frente a Economía. La clase media y los gremios colapsaron los accesos a la Capital.",
          titulo: "Paro de la CTA, Quema de Cubiertas y Tarifazo en la 9 de Julio",
          descripcion: "Paro de la CTA y cortes totales en el centro porteño repudiando el tarifazo. Hay quema de neumáticos frente al Ministerio de Economía y tensión extrema con la policía.",
          opcionA_texto: "[OPCIÓN A] MANDAR INFANTERÍA CON HIDRANTES Y APLICAR PROTOCOLO ESTRICTO DE VEREDA",
          opcionB_texto: "[OPCIÓN B] ABRIR MESA DE DIÁLOGO EN CASA ROSADA SIN CEDER EN LAS TARIFAS",
          opcionC_texto: "[OPCIÓN C] RETROTRAER TARIFAS A CLUBES DE BARRIO Y JUBILADOS PARA FRACTURAR LA MARCHA"
        };
      } else if (eraEstatizacion) {
        return {
          antecedenteAyer: "La estatización del lunes desató cacerolazos en centros urbanos y amenaza de juicio en el CIADI. Las cámaras empresarias acusan al gobierno de giro chavista y amenazan con paro patronal.",
          titulo: "Cacerolazo en Recoleta & Solicitada de Embajadas por Expropiación",
          descripcion: "Cacerolazos masivos en los centros urbanos y solicitada de cámaras empresariales internacionales denunciando confiscación ilegítima.",
          opcionA_texto: "[OPCIÓN A] DENUNCIAR GOLPE BLANDO CORPORATIVO Y LLENAR PLAZA DE MAYO CON MICROS",
          opcionB_texto: "[OPCIÓN B] RECIBIR A LOS EMBAJADORES EN CANCILLERÍA PROMETIENDO BONOS SOBERANOS",
          opcionC_texto: "[OPCIÓN C] CREAR EMPRESA MIXTA CON CAPITALES LOCALES PARA CALMAR LAS AGUAS"
        };
      } else {
        return {
          antecedenteAyer: "La clase media urbana siente que el gradualismo la castiga con impuestos sin darle ningún beneficio. Se concentran con velas frente a la Quinta de Olivos.",
          titulo: "Marcha de la Clase Media por la Segmentación Tarifaria",
          descripcion: "Manifestación pacífica pero ruidosa de comerciantes y profesionales frente a los portones de la Quinta de Olivos.",
          opcionA_texto: "[OPCIÓN A] DEJAR QUE PROTESTEN SIN CUSTODIA POLICIAL PARA EVITAR FOTOS DE REPRESIÓN",
          opcionB_texto: "[OPCIÓN B] ANUNCIAR TARIFA SOCIAL DE EMERGENCIA PARA MONOTRIBUTISTAS",
          opcionC_texto: "[OPCIÓN C] CONFERENCIA DEL VOCERO DESCALIFICANDO LA MARCHA COMO OPERETA"
        };
      }
    },
    opcionesGenericas: [
      {
        id: "martes_mano_dura",
        texto: "[OPCIÓN A] ORDENAR A INFANTERÍA APLICAR PROTOCOLO DE SEGURIDAD CON HIDRANTES",
        consecuenciaCalle: "Despejás la calle con gases lacrimógenos; 8 heridos internados y repudio de organismos de DDHH.",
        consecuenciaManana: "La CGT convoca a plenario urgente y la clase media cacerolea en Caballito por los heridos.",
        impacto12AxesTexto: "+25% Mano Dura / Punición (Eje 4) | +15% Centralismo (Eje 3)",
        impacto12Axes: { seguridad: 80, institucionalidad: 40, valores: 75 },
        impactoSectores: { claseMedia: +10, seguridadJusticia: +20, trabajo: -25 },
        impactoMacro: { riesgoPais: -30 },
        impactoCriollo: { mechaSocial: +20, humorAfaScaloneta: -10 },
        impactoSalud: { coronarias: -6, paranoia: +12, seguridad: -8 },
        setFlags: { respuesta_martes: "represion_mano_dura" },
        resumenMedida: "Infantería y gases en la 9 de Julio (+25% Punición)",
        operasteComo: "Patricia Bullrich (Protocolo de hidrantes en veredas)"
      },
      {
        id: "martes_mesa_dialogo",
        texto: "[OPCIÓN B] RECIBIR A LOS SINDICALISTAS EN ROSADA Y OFRECER MESA DE DIÁLOGO",
        consecuenciaCalle: "Levantan los cortes del centro porteño, pero te exigen congelamiento de tarifas para el viernes.",
        consecuenciaManana: "Los diarios de negocios titulan que el gobierno titubea ante los piquetes.",
        impacto12AxesTexto: "+15% Rosca Barrani (Eje 12) | +10% Institucionalidad (Eje 3)",
        impacto12Axes: { institucionalidad: 70, estatismo: 55, comercio: 50 },
        impactoSectores: { trabajo: +10, productivo: -5, claseMedia: -5 },
        impactoMacro: { fiscal: -0.2 },
        impactoCriollo: { roscaGobernadores: +15, mechaSocial: -10 },
        impactoSalud: { coronarias: +2, paranoia: -5 },
        setFlags: { respuesta_martes: "dialogo_rosca" },
        resumenMedida: "Mesa de diálogo y apaciguamiento (+15% Rosca)",
        operasteComo: "Alberto Fernández (Mesa de concertación y café)"
      },
      {
        id: "martes_concesion_parcial",
        texto: "[OPCIÓN C] RETROTRAER TARIFAS A JUBILADOS Y CLUBES PARA AISLAR A PIQUETEROS",
        consecuenciaCalle: "Quebrás el frente opositor: los clubes festejan y los piqueteros quedan solos en la calle.",
        consecuenciaManana: "Economía avisa que el agujero fiscal del mes aumentó en $ 45.000 millones.",
        impacto12AxesTexto: "+20% Pragmatismo (Eje 12) | +15% Estatismo Social (Eje 1)",
        impacto12Axes: { valores: 45, estatismo: 60, comercio: 65 },
        impactoSectores: { claseMedia: +15, trabajo: +15, productivo: -10 },
        impactoMacro: { fiscal: -0.4, inflacionMensual: +0.4 },
        impactoCriollo: { mechaSocial: -18, dolarBlue: +25 },
        impactoSalud: { coronarias: -1, paranoia: +2 },
        setFlags: { respuesta_martes: "alivio_parcial" },
        resumenMedida: "Alivio parcial y división opositora (+20% Pragmatismo)",
        operasteComo: "Sergio Massa (Alivio segmentado de emergencia)"
      }
    ]
  },

  // --- MIÉRCOLES (DÍA 3): EL COMPENSADOR SOCIAL (LA CONTRADICCIÓN) ---
  dilema_miercoles_compensador: {
    id: "dilema_miercoles_compensador",
    diaId: "miercoles",
    etapaBadge: "Miércoles 06 de Octubre (08:30 AM) • Despacho Presidencial",
    area: "Ingresos & Asistencia Social",
    antecedenteAyer: "La Infantería desalojó el corte de la CTA con camiones hidrantes. Hay 8 manifestantes internados, la CGT convocó a plenario urgente y la clase media cacerolea en Caballito por las boletas de luz.",
    titulo: "El Dilema del Miércoles: «El Compensador Social»",
    descripcion: "Tu Ministro de Trabajo entra con dos carpetas y te dice: «Presidente, si no tiramos un centro hoy a la tarde, el viernes nos clavan un paro general de transporte y no se mueve ni una bicicleta».",
    explicacion: {
      queMide: "Giro populista compensador vs. disciplina fiscal de hierro vs. prebenda a gremios clave.",
      siFavor: "Desactiva el paro general y calma a los usuarios de trenes y colectivos.",
      siContra: "Provoca la furia inmediata de la UIA y las pymes el jueves."
    },
    opciones: [
      {
        id: "miercoles_aumento_salario_sube",
        texto: "[OPCIÓN A] DUPLICAR EL SALARIO MÍNIMO Y METER SUBSIDIO A LA TARJETA SUBE POR DECRETO",
        consecuenciaCalle: "Desactivás el paro de transporte y calmás a los usuarios de trenes.",
        consecuenciaManana: "La UIA y las pymes se declaran en emergencia patronal.",
        impacto12AxesTexto: "+20% Estatismo (Eje 1) | +15% Sindicalismo (Eje 8)",
        impacto12Axes: { estatismo: 15, trabajo: 85, valores: 30 },
        impactoSectores: { trabajo: +30, claseMedia: +15, productivo: -30 },
        impactoMacro: { fiscal: -1.5, inflacionMensual: +3.2 },
        impactoCriollo: { mechaSocial: -25, dolarBlue: +85 },
        impactoSalud: { coronarias: +4, paranoia: -10 },
        setFlags: { compensador_miercoles: "aumento_masivo_salarios" },
        resumenMedida: "¿Suba de salario mínimo? (+20% Estatismo)",
        operasteComo: "Juan Domingo Perón (Aumento masivo por decreto)",
        tendenciaEnCurso: "Giro Populista de Pánico"
      },
      {
        id: "miercoles_ortodoxia_dura",
        texto: "[OPCIÓN B] RATIFICAR EL RUMBO: «EL QUE QUIERA AUMENTO, QUE NEGOCIE POR PRODUCTIVIDAD»",
        consecuenciaCalle: "Se ratifica el paro de 48 hs de transporte para el viernes.",
        consecuenciaManana: "Wall Street celebra la firmeza fiscal y bajan los bonos soberanos.",
        impacto12AxesTexto: "+25% Libre Mercado (Eje 1) | +20% Mano Dura Patronal (Eje 8)",
        impacto12Axes: { comercio: 85, estatismo: 85, valores: 70 },
        impactoSectores: { productivo: +25, trabajo: -25, claseMedia: -20 },
        impactoMacro: { fiscal: +0.8, inflacionMensual: -0.5, riesgoPais: -60 },
        impactoCriollo: { mechaSocial: +30, dolarBlue: -35 },
        impactoSalud: { coronarias: -8, paranoia: +15, seguridad: -10 },
        setFlags: { compensador_miercoles: "ortodoxia_cero_plata" },
        resumenMedida: "Ratificación de rumbo ortodoxo (+25% Mercado)",
        operasteComo: "Margaret Thatcher (Intransigencia ante sindicatos)",
        tendenciaEnCurso: "Ajuste Ortodoxo a Ciegas"
      },
      {
        id: "miercoles_bono_negro_uta",
        texto: "[OPCIÓN C] PAGAR UN BONO EN NEGRO DE $ 80.000 SÓLO PARA EL GREMIO DE COLECTIVEROS (UTA)",
        consecuenciaCalle: "Hay colectivos el viernes; los docentes y médicos te declaran la guerra.",
        consecuenciaManana: "Se pudre la interna dentro de la CGT entre gremios amigos y rebeldes.",
        impacto12AxesTexto: "+30% Rosca Barrani / Pragmatismo (Eje 12) | -15% Institucionalidad",
        impacto12Axes: { estatismo: 50, valores: 65, institucionalidad: 35 },
        impactoSectores: { trabajo: +15, claseMedia: -10, productivo: -10 },
        impactoMacro: { fiscal: -0.5, inflacionMensual: +1.0 },
        impactoCriollo: { roscaGobernadores: +15, mechaSocial: -10 },
        impactoSalud: { coronarias: +2, paranoia: -2 },
        setFlags: { compensador_miercoles: "bono_uta" },
        resumenMedida: "Bono exclusivo a colectiveros (+30% Rosca Barrani)",
        operasteComo: "Carlos Menem / Sergio Massa (Prebenda sectorial dividida)",
        tendenciaEnCurso: "Rosca Barrani de Supervivencia"
      }
    ]
  },

  // --- JUEVES (DÍA 4): LA REBELIÓN EMPRESARIA (GENERA POR EL MIÉRCOLES) ---
  dilema_jueves_empresarios: {
    id: "dilema_jueves_empresarios",
    diaId: "jueves",
    etapaBadge: "Jueves 07 de Octubre (08:30 AM) • Despacho Presidencial",
    area: "Industria & Costos Laborales",
    antecedenteAyer: "El aumento salarial y el subsidio SUBE del miércoles frenaron el paro de transporte, pero provocaron la furia total del empresariado. La UIA sacó una solicitada en diarios denunciando quiebra inminente.",
    generarContexto: (flags) => {
      return {
        antecedenteAyer: "La Unión Industrial Argentina (UIA) y las pymes sacaron una solicitada diciendo que con el aumento decretado quiebran 5.000 fábricas y congelan contrataciones.",
        titulo: "La Presión de la UIA y la Solicitada de Quiebra Patronal",
        descripcion: "La Unión Industrial Argentina (UIA) y las pymes sacan una solicitada diciendo que con ese aumento salarial quiebran 5.000 fábricas y congelan contrataciones.",
        opcionA_texto: "[OPCIÓN A] REUNIÓN SECRETA EN OLIVOS: EXENCIONES IMPOSITIVAS Y SUBSIDIOS A CAMBIO DE NO DESPEDIR",
        opcionB_texto: "[OPCIÓN B] AMENAZAR A LA UIA CON ABRIR IMPORTACIONES CHINAS SI REMARCAN PRECIOS",
        opcionC_texto: "[OPCIÓN C] LÍNEA DE CRÉDITO DEL BANCO NACIÓN A TASA REGALADA PARA PAGAR SUELDOS"
      };
    },
    opcionesGenericas: [
      {
        id: "jueves_pacto_olivos_subsidios",
        texto: "[OPCIÓN A] REUNIÓN SECRETA EN OLIVOS: EXENCIONES IMPOSITIVAS Y SUBSIDIOS AL COMBUSTIBLE",
        consecuenciaCalle: "Las fábricas no despiden empleados, pero Economía avisa que rompiste la meta fiscal.",
        consecuenciaManana: "Los bancos ven el déficit y preparan corrida cambiaria para el viernes.",
        impacto12AxesTexto: "+25% Rosca Barrani / Pragmatismo (Eje 12) | +15% Corporativismo",
        impacto12Axes: { estatismo: 65, comercio: 40, valores: 60 },
        impactoSectores: { productivo: +25, trabajo: 0, claseMedia: -15 },
        impactoMacro: { fiscal: -0.9, riesgoPais: +40 },
        impactoCriollo: { roscaGobernadores: +15, dolarBlue: +50 },
        impactoSalud: { coronarias: -3, paranoia: +8 },
        setFlags: { acuerdo_jueves: "subsidio_uia_olivos" },
        resumenMedida: "Presión de la UIA por costos (+25% Corporativismo)",
        operasteComo: "Corporativista Clásico (Pacto de Olivos y exenciones)",
        tendenciaEnCurso: "Corporativismo de Quincho"
      },
      {
        id: "jueves_apertura_castigo",
        texto: "[OPCIÓN B] AMENAZAR A LA UIA CON ABRIR IMPORTACIONES CHINAS CON ARANCEL CERO",
        consecuenciaCalle: "Los supermercados frenan remarcaciones por pánico, pero la industria para plantas.",
        consecuenciaManana: "La UIA te declara la guerra política y retira su apoyo parlamentario.",
        impacto12AxesTexto: "+25% Libre Comercio (Eje 9) | +20% Mano Dura Patronal",
        impacto12Axes: { comercio: 85, estatismo: 60, valores: 35 },
        impactoSectores: { productivo: -30, claseMedia: +20, trabajo: -15 },
        impactoMacro: { inflacionMensual: -1.0, riesgoPais: +80 },
        impactoCriollo: { mechaSocial: +10, dolarBlue: -20 },
        impactoSalud: { coronarias: -4, paranoia: +10 },
        setFlags: { acuerdo_jueves: "apertura_importaciones" },
        resumenMedida: "Apertura de importaciones como castigo (+25% Comercio)",
        operasteComo: "Domingo Cavallo (Apertura como ancla disciplinadora)",
        tendenciaEnCurso: "Disciplina por Shock Comercial"
      },
      {
        id: "jueves_credito_banco_nacion",
        texto: "[OPCIÓN C] LANZAR LÍNEA DE CRÉDITO DEL BANCO NACIÓN A TASA REGALADA",
        consecuenciaCalle: "Las pymes descuentan cheques de sueldos y pagan la quincena sin quejas.",
        consecuenciaManana: "El Banco Central tiene que esterilizar \$ 200.000 millones de pesos extra.",
        impacto12AxesTexto: "+20% Estatismo Bancario (Eje 1) | +15% Crédito Productivo",
        impacto12Axes: { estatismo: 30, institucionalidad: 50, valores: 40 },
        impactoSectores: { productivo: +15, trabajo: +15, claseMedia: +5 },
        impactoMacro: { fiscal: -0.5, inflacionMensual: +1.2 },
        impactoCriollo: { mechaSocial: -8, dolarBlue: +35 },
        impactoSalud: { coronarias: +1, paranoia: -2 },
        setFlags: { acuerdo_jueves: "credito_banco_nacion" },
        resumenMedida: "Crédito blando del Banco Nación (+20% Estatismo Bancario)",
        operasteComo: "Aldo Ferrer (Nacionalismo bancario productivo)",
        tendenciaEnCurso: "Bicicleta Productiva Estatal"
      }
    ]
  },

  // --- VIERNES (DÍA 5): LA CORRIDA BANCARIA & LA CITY ---
  dilema_viernes_corrida: {
    id: "dilema_viernes_corrida",
    diaId: "viernes",
    etapaBadge: "Viernes 08 de Octubre (08:30 AM) • Despacho Presidencial",
    area: "Mercado Cambiario & BCRA",
    antecedenteAyer: "Economía confirmó que se rompió la meta fiscal para pagar los acuerdos del miércoles y jueves. Las mesas de dinero de la City olfatean emisión y salieron a dolarizarse en masa.",
    titulo: "La Corrida Bancaria y el Salto del Dólar Blue a $ 1.480",
    descripcion: "El dólar blue salta $80 porque el mercado ve que el gobierno gasta de más y emite para pagar los subsidios del miércoles y jueves. Los zócalos de TV prenden la alarma en rojo.",
    explicacion: {
      queMide: "Allanamientos de ARCA vs. super-tasa del BCRA vs. venta de reservas.",
      siFavor: "Frena la disparada cambiaria antes del cierre del viernes a las 15:00 hs.",
      siContra: "Aumenta la tasa de interés o sacrifica reservas escasas."
    },
    opciones: [
      {
        id: "viernes_allanar_cuevas_arca",
        texto: "[OPCIÓN A] MANDAR POLICÍA E INSPECTORES DE ARCA A ALLANAR DIEZ CUEVAS EN CALLE FLORIDA",
        consecuenciaCalle: "Las cuevas bajan las persianas; se paraliza el blue pero explota la brecha informal.",
        consecuenciaManana: "Los operadores financieros te declaran la guerra y retiran depósitos en pesos.",
        impacto12AxesTexto: "+20% Control Estatal (Eje 1) | +15% Centralismo / Decretos (Eje 3)",
        impacto12Axes: { estatismo: 25, seguridad: 75, comercio: 20 },
        impactoSectores: { seguridadJusticia: +15, productivo: -20, claseMedia: -15 },
        impactoMacro: { riesgoPais: +120 },
        impactoCriollo: { dolarBlue: -60, mechaSocial: +10 },
        impactoSalud: { coronarias: -5, paranoia: +15 },
        setFlags: { cierre_viernes: "allanamiento_cuevas" },
        resumenMedida: "Amenaza de corrida de los bancos (+20% Control Estatal)",
        operasteComo: "Guillermo Moreno (Policía y clausuras en la City)",
        tendenciaEnCurso: "Apretón Policial Cambiario"
      },
      {
        id: "viernes_suba_tasa_bcra",
        texto: "[OPCIÓN B] SUBIR LA TASA DEL BCRA AL 95% ANUAL PARA TENTAR A LOS BANCOS A QUEDARSE EN PESOS",
        consecuenciaCalle: "Se frena el dólar al costo de paralizar las cuotas de tarjetas y el consumo popular.",
        consecuenciaManana: "La bola de pasivos remunerados del Banco Central se duplica en 30 días.",
        impacto12AxesTexto: "+20% Financiarización (Eje 9) | +15% Ortodoxia Monetaria",
        impacto12Axes: { comercio: 70, estatismo: 65, institucionalidad: 55 },
        impactoSectores: { productivo: -25, trabajo: -15, claseMedia: -10 },
        impactoMacro: { inflacionMensual: +1.8, fiscal: -0.8 },
        impactoCriollo: { dolarBlue: -90, mechaSocial: +8 },
        impactoSalud: { coronarias: -6, paranoia: +8 },
        setFlags: { cierre_viernes: "suba_tasa_bcra" },
        resumenMedida: "Suba brutal de tasa del BCRA (+20% Financiarización)",
        operasteComo: "Federico Sturzenegger (Súper-tasas y bola de letras)",
        tendenciaEnCurso: "Bicicleta Financiera Desesperada"
      },
      {
        id: "viernes_quemar_reservas_bonos",
        texto: "[OPCIÓN C] INTERVENIR VENDIENDO US$ 250 MILLONES EN BONOS PARA CLAVAR LA BRECHA",
        consecuenciaCalle: "El dólar retrocede \$ 40 y el gobierno festeja en Twitter antes del fin de semana.",
        consecuenciaManana: "El FMI manda un cable urgente advirtiendo que violaste el acuerdo de reservas.",
        impacto12AxesTexto: "+20% Intervención Cambiaria | -US$ 250M Reservas",
        impacto12Axes: { comercio: 50, estatismo: 50, institucionalidad: 45 },
        impactoSectores: { claseMedia: +10, productivo: +5, trabajo: 0 },
        impactoMacro: { reservasNetasBCRA: -250, riesgoPais: +50 },
        impactoCriollo: { reservasBCRA: -250, dolarBlue: -75 },
        impactoSalud: { coronarias: -8, paranoia: +20 },
        setFlags: { cierre_viernes: "venta_reservas" },
        resumenMedida: "Venta masiva de reservas netas (-US$ 250M)",
        operasteComo: "Martín Redrado (Poder de fuego en el MULC)",
        tendenciaEnCurso: "Rifa de Reservas Netas"
      }
    ]
  },

  // --- SÁBADO (DÍA 6): LA ROSCA POLÍTICA DE FIN DE SEMANA ---
  dilema_sabado_rosca: {
    id: "dilema_sabado_rosca",
    diaId: "sabado",
    etapaBadge: "Sábado 09 de Octubre (08:30 AM) • Despacho Presidencial",
    area: "Provincias & Gobernabilidad",
    antecedenteAyer: "El Banco Central logró frenar el dólar a costa de tasas o reservas. Pero los gobernadores del norte huelen debilidad y se juntaron en un asado en Santiago del Estero para armar bloque opositor.",
    titulo: "La Rosca Política: Exigencias de los Gobernadores en el Senado",
    descripcion: "Los gobernadores del norte te exigen una tajada de los fondos para no trabarte las leyes ni los pliegos de jueces en el Senado. El emisario espera respuesta antes del domingo.",
    explicacion: {
      queMide: "Giro de ATN discrecionales vs. mano dura federal vs. reparto de cargos.",
      siFavor: "Asegura la lealtad espartana de 8 senadores propios para el lunes que viene.",
      siContra: "Destruye el superávit fiscal y te ata a los caudillos provinciales."
    },
    opciones: [
      {
        id: "sabado_girar_atn_gobernadores",
        texto: "[OPCIÓN A] GIRAR FONDOS DISCRECIONALES (ATN) PARA OBRAS PÚBLICAS A CAMBIO DE LEALTAD",
        consecuenciaCalle: "Paz federal: los gobernadores ordenan a sus senadores levantar la mano a favor.",
        consecuenciaManana: "Los intendentes del conurbano se enteran y te reclaman la misma tajada para el domingo.",
        impacto12AxesTexto: "+20% Rosca Barrani (Eje 12) | +10% Centralismo (Eje 3)",
        impacto12Axes: { estatismo: 60, valores: 65, institucionalidad: 35 },
        impactoSectores: { trabajo: +10, claseMedia: -15, productivo: -5 },
        impactoMacro: { fiscal: -0.6, inflacionMensual: +0.6 },
        impactoCriollo: { roscaGobernadores: +30, mechaSocial: -10 },
        impactoSalud: { coronarias: +3, paranoia: -10 },
        setFlags: { rosca_sabado: "giro_atn" },
        resumenMedida: "Cena con gobernadores del norte (+20% Rosca Barrani)",
        operasteComo: "Néstor Kirchner (Chequera y látigo con los gobernadores)",
        tendenciaEnCurso: "Alianza Feudal de Billetera"
      },
      {
        id: "sabado_apriete_coparticipacion",
        texto: "[OPCIÓN B] AMENAZARLOS CON CORTARLES EL GOTEO DE COPARTICIPACIÓN SI VOTAN EN CONTRA",
        consecuenciaCalle: "Los gobernadores amenazan con no pagar sueldos docentes y prender fuego sus provincias.",
        consecuenciaManana: "Los senadores provinciales forman un interbloque rebelde dispuesto a voltearte decretos.",
        impacto12AxesTexto: "+20% Mano Dura Federal (Eje 4) | +15% Centralismo",
        impacto12Axes: { seguridad: 70, centralismo: 85, valores: 70 },
        impactoSectores: { claseMedia: +10, trabajo: -20, productivo: -10 },
        impactoMacro: { fiscal: +0.4 },
        impactoCriollo: { roscaGobernadores: -35, mechaSocial: +25 },
        impactoSalud: { coronarias: -10, paranoia: +25, seguridad: -15 },
        setFlags: { rosca_sabado: "apriete_federal" },
        resumenMedida: "Apriete y corte de coparticipación (+20% Mano Dura Federal)",
        operasteComo: "Javier Milei (Cero ATN y asfixia a los mandatarios)",
        tendenciaEnCurso: "Guerra Total contra las Provincias"
      },
      {
        id: "sabado_reparto_cargos_nacionales",
        texto: "[OPCIÓN C] OFRECERLES EMBAJADAS Y EL MANEJO DE REGISTROS AUTOMOTORES A SUS FAMILIARES",
        consecuenciaCalle: "Acuerdo subterráneo en silencio; nadie hace ruido y los votos aparecen en el recinto.",
        consecuenciaManana: "Los diarios opositores filtran la designación de un primo feudal en Cancillería.",
        impacto12AxesTexto: "+25% Nepotismo de Rosca (Eje 12) | -20% Institucionalidad",
        impacto12Axes: { institucionalidad: 40, estatismo: 55, valores: 60 },
        impactoSectores: { claseMedia: -10, trabajo: +5 },
        impactoMacro: {},
        impactoCriollo: { roscaGobernadores: +20, paranoia: +5 },
        impactoSalud: { coronarias: 0, paranoia: +10 },
        setFlags: { rosca_sabado: "reparto_cargos" },
        resumenMedida: "Reparto de embajadas y cajas (+25% Nepotismo)",
        operasteComo: "Eduardo Duhalde (Reparto de ministerios y territorio)",
        tendenciaEnCurso: "Loteo del Estado Nacional"
      }
    ]
  },

  // --- DOMINGO (DÍA 7): EL ALMUERZO DE TV & BALANCE PRIME TIME ---
  dilema_domingo_tv: {
    id: "dilema_domingo_tv",
    diaId: "domingo",
    etapaBadge: "Domingo 10 de Octubre (21:00 PM) • Prime Time & Streaming",
    area: "Medios & Retórica en Prime Time",
    antecedenteAyer: "Pactaste o peleaste con los gobernadores. La semana cierra con un país agitado y llega la hora de dar la cara frente a las cámaras de televisión en el programa de mayor rating.",
    titulo: "El Almuerzo Televisivo y el Roast de Tus Contradicciones",
    descripcion: "Te sentás en la mesa de Mirtha Legrand o en un programa de streaming de prime time. Te preguntan: «Presidente, usted el lunes privatizó y el miércoles duplicó salarios: ¿es liberal de libre mercado o es populista?».",
    explicacion: {
      queMide: "Cintura retórica criolla vs. dogmatismo ideológico intransigente.",
      siFavor: "Cierra la semana consolidando tu imagen frente a la opinión pública.",
      siContra: "Deja al descubierto las incongruencias acumuladas en los 7 días de gestión."
    },
    opciones: [
      {
        id: "domingo_chicana_pragmatica",
        texto: "[OPCIÓN A] RESPONDER CON CHICANA PRAGMÁTICA: «YO SOY EL QUE RESUELVE PROBLEMAS SIN MIRAR LIBROS»",
        consecuenciaCalle: "La frase se hace viral en TikTok y memes; la clase media te festeja la cintura política.",
        consecuenciaManana: "Los economistas liberales y marxistas te acusan de no tener ningún plan coherente.",
        impacto12AxesTexto: "+15% Pragmatismo / Camaleonismo (Eje 12)",
        impacto12Axes: { valores: 60, estatismo: 50, institucionalidad: 45 },
        impactoSectores: { claseMedia: +10, trabajo: +15, productivo: +5 },
        impactoMacro: {},
        impactoCriollo: { humorAfaScaloneta: +15, roscaGobernadores: +10 },
        impactoSalud: { coronarias: +5, paranoia: -5 },
        setFlags: { retorica_domingo: "chicana_pragmatica" },
        resumenMedida: "Almuerzo televisivo y roast (+15% Pragmatismo)",
        operasteComo: "Carlos Menem (Cintura criolla y simpatía mediática)",
        tendenciaEnCurso: "Camaleón del Poder Real"
      },
      {
        id: "domingo_defensa_dogmatica_mercado",
        texto: "[OPCIÓN B] REAFIRMAR EL RUMBO DE SHOCK: «LOS PARCHES FUERON TÁCTICOS; EL SHOCK ES SAGRADO»",
        consecuenciaCalle: "Tus votantes duros te aplauden de pie; el resto de la población se prepara para más ajuste.",
        consecuenciaManana: "Los mercados abren el lunes con suba de bonos y calma cambiaria.",
        impacto12AxesTexto: "+15% Ortodoxia de Mercado (Eje 1) | +10% Dogmatismo",
        impacto12Axes: { comercio: 80, estatismo: 80, valores: 70 },
        impactoSectores: { productivo: +20, trabajo: -20, claseMedia: -10 },
        impactoMacro: { riesgoPais: -30 },
        impactoCriollo: { mechaSocial: +12, dolarBlue: -25 },
        impactoSalud: { coronarias: -3, paranoia: +8 },
        setFlags: { retorica_domingo: "defensa_mercado" },
        resumenMedida: "Reafirmación dogmática de shock (+15% Mercado)",
        operasteComo: "Javier Milei (Defensa a ultranza del dogma económico)",
        tendenciaEnCurso: "Ortodoxia Pura sin Concesiones"
      },
      {
        id: "domingo_reivindicar_justicia_social",
        texto: "[OPCIÓN C] REIVINDICAR LA JUSTICIA SOCIAL: «JAMÁS VOY A DEJAR AL PUEBLO A MERCED DE CORPORACIONES»",
        consecuenciaCalle: "Aplauso cerrado de sindicatos y movimientos sociales; tu piso electoral se blinda.",
        consecuenciaManana: "La City y los bancos descuentan más inflación y aumentan la tasa de corte.",
        impacto12AxesTexto: "+15% Populismo Discursivo (Eje 1) | +10% Soberanía Popular",
        impacto12Axes: { estatismo: 25, trabajo: 80, valores: 30 },
        impactoSectores: { trabajo: +20, claseMedia: +10, productivo: -20 },
        impactoMacro: { riesgoPais: +60 },
        impactoCriollo: { mechaSocial: -15, dolarBlue: +40 },
        impactoSalud: { coronarias: +3, paranoia: -5 },
        setFlags: { retorica_domingo: "reivindicacion_popular" },
        resumenMedida: "Discurso combativo popular (+15% Populismo)",
        operasteComo: "Cristina Kirchner (Retórica combativa y polarización)",
        tendenciaEnCurso: "Polarización Popular de Trinchera"
      }
    ]
  }
};

// =========================================================================
// 4. EL RADAR DE HIPOCRESÍA Y CONTRADICCIONES DE FIN DE SEMANA
// =========================================================================

function calcularRadarHipocresiaSemanal(decisionesSemana = [], motor = null) {
  if (!decisionesSemana || decisionesSemana.length === 0) {
    return {
      decisionesTomadas: 0,
      totalSemana: 0,
      itemsContradiccion: [
        "* El Lunes no tomaste medidas troncales.",
        "* La semana transcurrió sin definiciones en la botonera de Olivos."
      ],
      pragmatismoBarraniPct: 50,
      coherenciaIdeologicaPct: 50,
      arquetipoSemanal: "EL OBSERVADOR INMÓVIL",
      subtituloArquetipo: "Sin definiciones en la botonera de Olivos",
      resumenPais: ["* La semana transcurrió en calma chicha sin decretos relevantes."],
      varianzaDetectada: 0
    };
  }

  const itemsContradiccion = [];
  const valoresEstatismo = [];
  const valoresMercado = [];

  decisionesSemana.forEach((dec) => {
    const diaNom = dec.diaNombre || 'Día';
    const imp = dec.impacto12Axes || {};
    if (imp.estatismo !== undefined) valoresEstatismo.push(imp.estatismo);
    if (imp.comercio !== undefined) valoresMercado.push(imp.comercio);

    if (dec.operasteComo) {
      itemsContradiccion.push(`* El ${diaNom} operaste como ${dec.operasteComo}.`);
    } else if (dec.resumenMedida) {
      itemsContradiccion.push(`* El ${diaNom}: ${dec.resumenMedida}`);
    }
  });

  // Calcular varianza
  let varianzaTotal = 0;
  if (valoresEstatismo.length >= 2) {
    const minE = Math.min(...valoresEstatismo);
    const maxE = Math.max(...valoresEstatismo);
    varianzaTotal += (maxE - minE);
  }
  if (valoresMercado.length >= 2) {
    const minM = Math.min(...valoresMercado);
    const maxM = Math.max(...valoresMercado);
    varianzaTotal += (maxM - minM);
  }

  let pragmatismoBarraniPct = 50;
  if (decisionesSemana.length >= 2) {
    pragmatismoBarraniPct = Math.min(95, Math.max(15, Math.round(35 + (varianzaTotal * 0.45))));
  }
  const coherenciaIdeologicaPct = 100 - pragmatismoBarraniPct;

  let arquetipoSemanal = 'EL EQUILIBRISTA DEL PÉNDULO NACIONAL';
  let subtituloArquetipo = 'Alternando un día mercado y un día estatismo';

  if (pragmatismoBarraniPct >= 75) {
    arquetipoSemanal = 'EL ILUSIONISTA DEL SILLÓN (Variante Menemista / Massista)';
    subtituloArquetipo = 'Privatizaste como Margaret Thatcher y aumentaste salarios como Juan Domingo Perón';
  } else if (pragmatismoBarraniPct >= 60) {
    arquetipoSemanal = 'EL BOMBERO PIRÓMANO DEL CONURBANO';
    subtituloArquetipo = 'Prendés fuego la calle con tarifazos y luego repartís plata para que no te linchen';
  } else if (coherenciaIdeologicaPct >= 75) {
    arquetipoSemanal = 'EL FUNDAMENTALISTA DOGMÁTICO DE TRINCHERA';
    subtituloArquetipo = 'Mantiene el rumbo sin dudar aunque vuelen helicópteros sobre la Rosada';
  } else {
    arquetipoSemanal = 'EL PRAGMÁTICO DEL ASFALTO';
    subtituloArquetipo = 'Gobierna con el diario del lunes y apaga incendios de a uno';
  }

  const resumenPais = [];
  const dolarActual = motor?.termometroCriollo?.dolarBlue || 1480;
  const mechaActual = motor?.termometroCriollo?.mechaSocial || 68;
  const reservasActuales = motor?.macroeconomia?.reservasNetasBCRA || 1200;

  // 1. Energía y luz
  const privatizoLunes = decisionesSemana.some(d => d.id === 'lunes_privatizar_liberar');
  if (privatizoLunes) {
    resumenPais.push("* La luz funciona, pero sale una fortuna para los usuarios comunes.");
  } else {
    resumenPais.push("* El servicio eléctrico continúa con cortes intermitentes y tarifas pisadas.");
  }

  // 2. Seguridad y heridos
  const reprimioMartes = decisionesSemana.some(d => d.id === 'martes_mano_dura');
  if (reprimioMartes) {
    resumenPais.push("* Hubo 14 heridos por balas de goma y camiones hidrantes el martes.");
  } else {
    resumenPais.push("* La policía evitó la confrontación directa pero la 9 de Julio fue intransitable.");
  }

  // 3. Dólar y mercado
  if (dolarActual > 1400) {
    resumenPais.push(`* El dólar terminó en alza ($ ${dolarActual}) por los parches fiscales del fin de semana.`);
  } else {
    resumenPais.push(`* El dólar blue cerró en calma relativa a $ ${dolarActual}.`);
  }

  return {
    decisionesTomadas: decisionesSemana.length,
    totalSemana: decisionesSemana.length,
    itemsContradiccion,
    pragmatismoBarraniPct,
    coherenciaIdeologicaPct,
    arquetipoSemanal,
    subtituloArquetipo,
    resumenPais,
    varianzaDetectada: varianzaTotal
  };
}

// =========================================================================
// 5. CLASE PRINCIPAL: SISTEMA DE RITMO Y CADENA SEMANAL
// =========================================================================
class SistemaRitmoCadenaSemanal {
  constructor(ritmoId = 'parlamentario') {
    this.configurarRitmo(ritmoId);
    this.reiniciar();
  }

  reiniciar() {
    this.semanaActual = 1;
    this.diaPasoActual = 0; // Índice en diasActivos
    this.historialSemanaActual = [];
    this.historialSemanasCompletadas = [];
    this.balanceSemanalActual = null;
    this.flagsSemana = {};
  }

  configurarRitmo(ritmoId) {
    const modo = MODOS_RITMO_SEMANAL[ritmoId] || MODOS_RITMO_SEMANAL.parlamentario;
    this.ritmoId = modo.id;
    this.configModo = modo;
    this.decisionesPorSemana = modo.decisionesPorSemana;
    this.diasActivos = modo.diasActivos;
  }

  obtenerDiaActualInfo() {
    const indiceDiaSecuencia = this.diasActivos[this.diaPasoActual] !== undefined
      ? this.diasActivos[this.diaPasoActual]
      : 0;
    return DIAS_SEMANA_SECUENCIA[indiceDiaSecuencia] || DIAS_SEMANA_SECUENCIA[0];
  }

  /**
   * Genera los 7 casilleros de la tira semanal con sus estados:
   * 'HECHO', 'ACTIVO ★', 'PENDI.', 'BALANCE FINAL'
   */
  obtenerTiraCalendarioSemanal() {
    return DIAS_SEMANA_SECUENCIA.map((diaDef, idx) => {
      const estaActivoHoy = this.diasActivos[this.diaPasoActual] === idx;
      const yaPaso = this.diasActivos.some((aIdx, pIdx) => aIdx === idx && pIdx < this.diaPasoActual);
      const decisionTomada = this.historialSemanaActual.find(d => d.diaId === diaDef.diaId);

      let estado = 'PENDI.';
      let estadoTxt = 'Pendiente';
      let resumenBadge = diaDef.alertaPredictiva;

      if (idx === 6) {
        estado = 'BALANCE';
        estadoTxt = 'Balance Final';
        resumenBadge = 'Almuerzo televisivo y roast';
      } else if (yaPaso && decisionTomada) {
        estado = 'HECHO';
        estadoTxt = 'Hecho';
        resumenBadge = decisionTomada.resumenMedida || diaDef.alertaPredictiva;
      } else if (estaActivoHoy) {
        estado = 'ACTIVO';
        estadoTxt = 'Activo ★';
        resumenBadge = diaDef.alertaPredictiva;
      }

      return {
        ...diaDef,
        indice: idx,
        estado,
        estadoTxt,
        resumenBadge,
        estaActivoHoy,
        yaPaso
      };
    });
  }

  /**
   * Genera las líneas del Monitor Dinámico de Contradicción en Curso
   */
  obtenerRadarContradiccionEnCurso(opcionSeleccionada = null) {
    const lineas = [];
    this.historialSemanaActual.forEach((dec) => {
      const diaNom = dec.diaNombre ? dec.diaNombre.toUpperCase() : 'DÍA';
      if (dec.operasteComo) {
        lineas.push(`* ${diaNom}: Operaste como ${dec.operasteComo}`);
      } else if (dec.resumenMedida) {
        lineas.push(`* ${diaNom}: ${dec.resumenMedida}`);
      }
    });

    if (lineas.length === 0) {
      lineas.push("* LUNES: Aún no has firmado ningún decreto troncal en la semana.");
    }

    let tendenciaTxt = 'Equilibrio pragmático en curso';
    if (opcionSeleccionada && opcionSeleccionada.tendenciaEnCurso) {
      tendenciaTxt = `Si elegís esta opción, el sistema te computa "${opcionSeleccionada.tendenciaEnCurso}".`;
    } else if (this.historialSemanaActual.length > 0) {
      const ultima = this.historialSemanaActual[this.historialSemanaActual.length - 1];
      if (ultima.tendenciaEnCurso) {
        tendenciaTxt = `Tendencia acumulada: "${ultima.tendenciaEnCurso}".`;
      }
    }

    return {
      lineas,
      tendenciaEnCurso: tendenciaTxt
    };
  }

  /**
   * Obtiene el dilema correspondiente al día de la semana actual.
   */
  obtenerDilemaDelDia(motor = null) {
    const diaInfo = this.obtenerDiaActualInfo();
    const diaId = diaInfo.diaId;

    let claveDilema = 'dilema_lunes_gran_medida';
    if (diaId === 'martes') claveDilema = 'dilema_martes_calle';
    else if (diaId === 'miercoles') claveDilema = 'dilema_miercoles_compensador';
    else if (diaId === 'jueves') claveDilema = 'dilema_jueves_empresarios';
    else if (diaId === 'viernes') claveDilema = 'dilema_viernes_corrida';
    else if (diaId === 'sabado') claveDilema = 'dilema_sabado_rosca';
    else if (diaId === 'domingo') claveDilema = 'dilema_domingo_tv';

    const plantilla = DILEMAS_ENCADENADOS_SEMANA[claveDilema];
    if (!plantilla) return null;

    const flagsCombinadas = { ...this.flagsSemana, ...(motor ? motor.flags : {}) };

    let titulo = plantilla.titulo;
    let descripcion = plantilla.descripcion;
    let antecedenteAyer = plantilla.antecedenteAyer || "Comienza la jornada de gobierno en el despacho de Balcarce 50.";
    let opciones = plantilla.opciones ? [...plantilla.opciones] : [];

    if (typeof plantilla.generarContexto === 'function') {
      const ctx = plantilla.generarContexto(flagsCombinadas);
      titulo = ctx.titulo;
      descripcion = ctx.descripcion;
      if (ctx.antecedenteAyer) antecedenteAyer = ctx.antecedenteAyer;
      opciones = plantilla.opcionesGenericas.map((op, idx) => {
        const textoCustom = idx === 0 ? ctx.opcionA_texto : (idx === 1 ? ctx.opcionB_texto : ctx.opcionC_texto);
        return {
          ...op,
          texto: textoCustom || op.texto
        };
      });
    }

    const tiraCalendario = this.obtenerTiraCalendarioSemanal();
    const radarContradiccion = this.obtenerRadarContradiccionEnCurso();

    return {
      id: `${plantilla.id}_sem${this.semanaActual}`,
      etapaBadge: `Semana ${this.semanaActual} • ${diaInfo.nombre} (${this.diaPasoActual + 1}/${this.decisionesPorSemana}): ${diaInfo.faseTema}`,
      area: plantilla.area,
      titulo,
      descripcion,
      antecedenteAyer,
      explicacion: plantilla.explicacion,
      opciones,
      diaInfo,
      semanaActual: this.semanaActual,
      pasoActual: this.diaPasoActual + 1,
      totalPasos: this.decisionesPorSemana,
      tiraCalendario,
      radarContradiccion
    };
  }

  /**
   * Registra la decisión del día actual y avanza el paso de la semana.
   */
  registrarDecisionDiaria(opcion, motor = null) {
    const diaInfo = this.obtenerDiaActualInfo();

    const registro = {
      ...opcion,
      diaId: diaInfo.diaId,
      diaNombre: diaInfo.nombre,
      faseTema: diaInfo.faseTema,
      semana: this.semanaActual,
      timestamp: Date.now()
    };

    this.historialSemanaActual.push(registro);

    if (opcion.setFlags) {
      for (const k in opcion.setFlags) {
        this.flagsSemana[k] = opcion.setFlags[k];
      }
    }

    this.diaPasoActual++;
    const finSemana = this.diaPasoActual >= this.decisionesPorSemana;

    if (finSemana) {
      this.balanceSemanalActual = calcularRadarHipocresiaSemanal(this.historialSemanaActual, motor);
    }

    return {
      finSemana,
      diaPasoActual: this.diaPasoActual,
      decisionesPorSemana: this.decisionesPorSemana,
      balanceSemanal: this.balanceSemanalActual
    };
  }

  esFinDeSemana() {
    return this.diaPasoActual >= this.decisionesPorSemana;
  }

  obtenerBalanceSemanal(motor = null) {
    if (!this.balanceSemanalActual) {
      this.balanceSemanalActual = calcularRadarHipocresiaSemanal(this.historialSemanaActual, motor);
    }
    return this.balanceSemanalActual;
  }

  avanzarSiguienteSemana(motor = null) {
    if (this.balanceSemanalActual) {
      this.historialSemanasCompletadas.push({
        semana: this.semanaActual,
        balance: this.balanceSemanalActual,
        decisiones: [...this.historialSemanaActual]
      });
    }

    // Avanzar reloj vital biológico en salud
    if (motor && typeof motor.avanzarRelojVital === 'function') {
      motor.avanzarRelojVital(7);
    }

    this.semanaActual++;
    this.diaPasoActual = 0;
    this.historialSemanaActual = [];
    this.balanceSemanalActual = null;
    this.flagsSemana = {};

    return this.semanaActual;
  }

  obtenerSnapshot() {
    return {
      ritmoId: this.ritmoId,
      configModo: this.configModo,
      semanaActual: this.semanaActual,
      diaPasoActual: this.diaPasoActual,
      decisionesPorSemana: this.decisionesPorSemana,
      diaActualInfo: this.obtenerDiaActualInfo(),
      esFinDeSemana: this.esFinDeSemana(),
      tiraCalendario: this.obtenerTiraCalendarioSemanal(),
      radarContradiccion: this.obtenerRadarContradiccionEnCurso(),
      historialSemanaActual: [...this.historialSemanaActual],
      balanceSemanalActual: this.balanceSemanalActual
    };
  }
}

// =========================================================================
// 6. EXPORTACIONES (COMMONJS & NAVEGADOR)
// =========================================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    MODOS_RITMO_SEMANAL,
    DIAS_SEMANA_SECUENCIA,
    DILEMAS_ENCADENADOS_SEMANA,
    calcularRadarHipocresiaSemanal,
    SistemaRitmoCadenaSemanal
  };
}

if (typeof window !== 'undefined') {
  window.MODOS_RITMO_SEMANAL = MODOS_RITMO_SEMANAL;
  window.DIAS_SEMANA_SECUENCIA = DIAS_SEMANA_SECUENCIA;
  window.DILEMAS_ENCADENADOS_SEMANA = DILEMAS_ENCADENADOS_SEMANA;
  window.calcularRadarHipocresiaSemanal = calcularRadarHipocresiaSemanal;
  window.SistemaRitmoCadenaSemanal = SistemaRitmoCadenaSemanal;
}
