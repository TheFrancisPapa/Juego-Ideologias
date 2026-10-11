// ecosistema_ampliado.js - Canales deportivos, cableoperadores, plataformas de streaming, multinacionales y rivalidades de otros deportes

const ECOSISTEMA_AMPLIADO = {
  // 1. CANALES DEPORTIVOS ARGENTINOS & PACK FÚTBOL
  canalesDeportivos: {
    tyc_sports: {
      nombre: "TyC Sports (Torneos y Competencias)",
      tipo: "Canal Deportivo por Cable",
      perfil: "El canal tradicional del deporte argentino: Selección Argentina, Copa Argentina, ascenso, básquet, vóley y debate al mediodía.",
      debate: "Disputa por los derechos de televisación del ascenso y torneos federales frente al streaming."
    },
    espn_argentina: {
      nombre: "ESPN Argentina (Disney)",
      tipo: "Señal Deportiva Internacional / Local",
      perfil: "Transmisiones de Copa Libertadores, Champions League, Fórmula 1, tenis y programas de debate estelar (F90).",
      debate: "Fuerte influencia en la agenda del fútbol grande y tensiones corporativas de concentración de medios."
    },
    tnt_sports: {
      nombre: "TNT Sports (Warner Bros. Discovery)",
      tipo: "Señal del Pack Fútbol Premium",
      perfil: "Transmisión exclusiva y en alta definición de los partidos de la Liga Profesional de Fútbol mediante suscripción paga.",
      debate: "Debate permanente sobre el costo del abono mensual para los hinchas laburantes vs. gratuidad estatal."
    },
    fox_sports: {
      nombre: "Fox Sports Argentina",
      tipo: "Canal Deportivo",
      perfil: "Transmisiones de Copa Libertadores, automovilismo internacional y deportes de combate.",
      debate: "Competencia de licencias y desconcentración de señales ordenada en su momento por el Estado."
    },
    deportv: {
      nombre: "DeporTV",
      tipo: "Canal Estatal Público Deportivo",
      perfil: "Canal público digital dedicado al deporte femenino, deportes paralímpicos, automovilismo federal y disciplinas amateurs.",
      debate: "¿Sostener financiamiento estatal para visibilizar deportes sin rating comercial o cerrar la señal por déficit?"
    }
  },

  // 2. CABLEOPERADORES Y TELECOMUNICACIONES
  cableoperadores: {
    flow: {
      nombre: "Flow (Telecom Argentina)",
      tipo: "Plataforma de TV en vivo y On Demand",
      perfil: "Líder en cable e internet por fibra óptica, con enorme penetración en hogares de clase media urbana.",
      debate: "Debate por la regulación o desregulación de tarifas de internet como servicio público esencial."
    },
    directv: {
      nombre: "DirecTV Argentina / DGO (Vrio Corp)",
      tipo: "Televisión Satelital y Streaming",
      perfil: "Llega a todos los rincones del país donde no hay cableado, fuerte presencia en el interior rural y partidos exclusivos.",
      debate: "Monopolio satelital en zonas aisladas y derechos de copas internacionales."
    },
    telecentro: {
      nombre: "Telecentro",
      tipo: "Operador de Triple Play (Cable, Internet, Telefonía)",
      perfil: "Fuerte arraigo en el Conurbano bonaerense y CABA con ofertas de bajo costo para sectores populares y medios.",
      debate: "Guerra de precios, saturación del ancho de banda y tendido de fibra en barrios populosos."
    }
  },

  // 3. PLATAFORMAS GLOBALES DE STREAMING & MÚSICA
  plataformasStreaming: {
    netflix: {
      nombre: "Netflix",
      perfil: "El gigante del streaming de series y películas; debate recurrente sobre el 'Impuesto Netflix' (IVA + percepción de moneda extranjera en tarjetas de crédito)."
    },
    disney_plus: {
      nombre: "Disney+ / Star+",
      perfil: "Concentra todo el entretenimiento familiar y los deportes en vivo de ESPN; cuestionado por reguladores por posición dominante."
    },
    max: {
      nombre: "Max (HBO Max)",
      perfil: "Producciones de alta gama, cine internacional y la Champions League en vivo en varios países de la región."
    },
    spotify: {
      nombre: "Spotify",
      perfil: "Consumo masivo de música y podcasts; epicentro del fenómeno del trap argentino, RKT y cumbia; debates por regalías a músicos locales."
    }
  },

  // 4. GRANDES EMPRESAS NACIONALES Y MULTINACIONALES EN ARGENTINA
  empresasClave: {
    ypf: {
      nombre: "YPF (Yacimientos Petrolíferos Fiscales)",
      tipo: "Energía & Petróleo (Empresa mixta bajo control estatal)",
      perfil: "Motor de Vaca Muerta y soberanía de combustibles. Eje de debate: ¿51% en manos del Estado o privatización total para atraer gigantes como Chevron o Exxon?"
    },
    techint: {
      nombre: "Grupo Techint (Paolo Rocca)",
      tipo: "Multinacional Siderúrgica & Construcción",
      perfil: "El mayor grupo industrial de origen argentino. Productor clave de caños sin costura para gasoductos; tensiones por apertura de importaciones de acero chino."
    },
    mercado_libre: {
      nombre: "Mercado Libre (Marcos Galperin)",
      tipo: "Tecnología, E-commerce & Fintech",
      perfil: "La empresa más valiosa de la historia argentina. Símbolo del libre mercado, innovación y conflicto gremial histórico con el sindicato de Camioneros y bancarios."
    },
    arcor: {
      nombre: "Grupo Arcor (Luis Pagani)",
      tipo: "Multinacional Alimenticia Nacional",
      perfil: "Líder en golosinas y alimentos envasados en toda América Latina. Sensible a costos energéticos, tipo de cambio y controles de precios de góndola."
    },
    toyota_argentina: {
      nombre: "Toyota Argentina (Zárate)",
      tipo: "Multinacional Automotriz",
      perfil: "Exportadora récord de la camioneta Hilux a toda la región. Modelo de acuerdos de productividad flexibles con el sindicato SMATA."
    }
  },

  // 5. CLÁSICOS Y RIVALIDADES EN OTROS DEPORTES ARGENTINOS
  rivalidadesOtrosDeportes: [
    {
      deporte: "Básquetbol (Liga Nacional / CABB)",
      clasico: "Peñarol vs. Quilmes de Mar del Plata",
      picantismo: "PELIGRO MÁXIMO (10/10 en Básquet)",
      detalle: "El clásico más caliente y tradicional del básquet argentino. Divide a Mar del Plata: el 'Milrayitas' múltiple campeón de América frente al 'Cervecero'. Pasión de tribunas con banderas, cantos y choques en el Polideportivo Islas Malvinas."
    },
    {
      deporte: "Básquetbol de Córdoba",
      clasico: "Atenas de Córdoba vs. Instituto / Hindú",
      picantismo: "HISTÓRICO (9/10)",
      detalle: "El 'Griego' de barrio General Bustos (el más ganador de la historia) frente a 'La Gloria' de Alta Córdoba. Pasión y orgullo cordobés."
    },
    {
      deporte: "Automovilismo (Turismo Carretera - ACTC)",
      clasico: "Ford vs. Chevrolet (y el duelo con Dodge y Torino)",
      picantismo: "CULTURA POPULAR (10/10)",
      detalle: "La mayor rivalidad mecánica de América. Familias enteras donde se hereda la marca del óvalo o del chivo. Hinchadas con banderas en las tribunas de los autódromos y cargadas en las rutas."
    },
    {
      deporte: "Hockey sobre Césped (Torneo Metropolitano AHBA)",
      clasico: "Lomas Athletic vs. San Fernando / Club Ciudad vs. GEBA",
      picantismo: "ALTO EN HOCKEY (8.5/10)",
      detalle: "Choques de tradición en las canchas de agua. Rivalidades históricas entre clubes fundadores del deporte en Buenos Aires."
    },
    {
      deporte: "Polo (Triple Corona AAP)",
      clasico: "La Dolfina (Adolfo Cambiaso) vs. Ellerstina (Familia Pieres)",
      picantismo: "MÁXIMA JERARQUÍA MUNDIAL (10/10)",
      detalle: "El Superclásico del polo mundial. Enfrenta a los cuartetos de 40 goles de hándicap en la Cancha 1 de Palermo. Duelo de cría, montas y liderazgo deportivo."
    },
    {
      deporte: "Rugby (URBA Top 12)",
      clasico: "CASI vs. SIC (San Isidro)",
      picantismo: "HISTÓRICO EN RUGBY (9/10)",
      detalle: "La capital del rugby argentino dividida en San Isidro: el Club Atlético de San Isidro (la 'Academia') frente al San Isidro Club (el 'Zanjero'). Duelo de estilos y pasión comunitaria."
    }
  ]
};

// Exportación modular para Node.js y navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ECOSISTEMA_AMPLIADO };
}

if (typeof window !== 'undefined') {
  window.ECOSISTEMA_AMPLIADO = ECOSISTEMA_AMPLIADO;
}
