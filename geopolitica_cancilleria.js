// geopolitica_cancilleria.js - Cancillería, Geopolítica, Deuda Externa y el Tablero Internacional

// =========================================================================
// 1. LAS 4 FUERZAS DEL TABLERO INTERNACIONAL (PALACIO SAN MARTÍN)
// =========================================================================
const FUERZAS_INTERNACIONALES = {
  fmi: {
    id: "fmi",
    nombre: "El Fondo Monetario Internacional (FMI)",
    subtitulo: "Auditores de traje gris exigiendo ajuste fiscal de hierro y reservas",
    sede: "Washington D.C. / Suite 402 Four Seasons Recoleta",
    icono: "fa-solid fa-landmark",
    color: "blue",
    queQuiere: "Superávit primario de hierro, devaluación para unificar el tipo de cambio, acumulación de reservas y eliminación total de subsidios a tarifas.",
    suArma: "Los desembolsos trimestrales. Si aprueban la revisión técnica (Staff-Level Agreement), entra la plata para pagarles sus propios vencimientos. Si te bajan el pulgar, entrás en atrasos (arrears), el Riesgo País salta a 2.500 puntos y los bonos argentinos se desploman en Wall Street.",
    perfil: "Vigilancia tecnocrática que no mira el costo social en las calles."
  },

  embajada_eeuu: {
    id: "embajada_eeuu",
    nombre: "La Embajada de EE.UU. (El Virreinato del Palacio Bosch)",
    subtitulo: "El Embajador en Palacio Bosch, el Tesoro y el Comando Sur",
    sede: "Palacio Bosch, Palermo Chico, Buenos Aires",
    icono: "fa-solid fa-flag-usa",
    color: "indigo",
    queQuiere: "Alineamiento incondicional con Occidente e Israel, neutralización de la influencia china en el cono sur, control de la Hidrovía del Paraná y que no le entregues el litio ni la tecnología 5G a Huawei.",
    suArma: "El poder de veto en el directorio del FMI, el respaldo del Tesoro norteamericano y la llegada directa al Comando Sur. Si te portás bien, te abren una reunión bilateral de 15 minutos en Washington; si te desvías, te frenan créditos del BID y del Banco Mundial.",
    perfil: "Poder hegemónico occidental y control geopolítico hemisférico."
  },

  china_pboc: {
    id: "china_pboc",
    nombre: "La República Popular China (El Dragón Financiero)",
    subtitulo: "El Swap de yuanes del PBOC, el litio, represas y antena en Neuquén",
    sede: "Pekín / Banco Popular de China (PBOC)",
    icono: "fa-solid fa-dragon",
    color: "red",
    queQuiere: "Garantía de suministro de alimentos (soja y carne) y minerales (litio y cobre), continuidad de las represas de Santa Cruz y libre acceso para infraestructura estratégica (redes de telefonía, puertos en Tierra del Fuego y la estación espacial en Neuquén).",
    suArma: "El Swap de Monedas (PBOC). Son los yuanes que inflan artificialmente las reservas brutas del Banco Central y te permiten pagar importaciones sin gastar dólares. Si te ponés picante ideológicamente contra el Partido Comunista, te apagan el tramo activo del swap y te dejan el BCRA con reservas netas en rojo furioso.",
    perfil: "Pragmatismo milenario, créditos atados a infraestructura y recursos."
  },

  brasil_itamaraty: {
    id: "brasil_itamaraty",
    nombre: "Brasil e Itamaraty (El Hermano Mayor)",
    subtitulo: "Socio comercial #1, industria automotriz y gasoducto de Vaca Muerta",
    sede: "Brasilia / Palacio de Itamaraty",
    icono: "fa-solid fa-handshake-angle",
    color: "emerald",
    queQuiere: "Respeto irrestricto al Mercosur, integración energética (comprarte el gas de Vaca Muerta barato) y que no le inundes el mercado local con devaluaciones sorpresa ni aranceles unilaterales.",
    suArma: "Cerrar la frontera a las exportaciones automotrices argentinas o retacear el apoyo diplomático en foros globales. Si te peleás con el presidente de Brasil, la industria metalmecánica de Córdoba y Pacheco frena las plantas en 48 horas.",
    perfil: "Diplomacia de estado permanente y locomotora industrial de la región."
  }
};

// =========================================================================
// 2. LA FAUNA DE LA DIPLOMACIA Y LAS MISIONES
// =========================================================================
const FAUNA_DIPLOMATICA = {
  jefe_mision_fmi: {
    id: "jefe_mision_fmi",
    nombre: "El Jefe de Misión del FMI",
    apodo: "El Técnico Europeo de Traje Gris",
    residencia: "Suite 402, Four Seasons de Recoleta",
    icono: "fa-solid fa-calculator",
    color: "slate",
    descripcion: "Se instala en una suite del Four Seasons durante 10 días. No le importan las elecciones de tu provincia ni si hay gente en la calle; solo mira una planilla de Excel. Si los números no cierran, te mira sobre los anteojos y te dice: 'Deberán calibrar el tipo de cambio y acelerar el sendero tarifario'.",
    fraseTipica: "Las metas de acumulación de reservas son vinculantes, señor Presidente."
  },

  embajador_eeuu: {
    id: "embajador_eeuu",
    nombre: "El Embajador Norteamericano",
    apodo: "El Virrey de Palermo Chico",
    residencia: "Palacio Bosch, Avenida del Libertador",
    icono: "fa-solid fa-martini-glass-citrus",
    color: "blue",
    descripcion: "Amable, va a la Fiesta de la Vendimia, come asado con gobernadores peronistas y radicales, pero una vez al mes cruza a la Rosada para dejar un non-paper: una lista de empresas chinas que no deberías dejar entrar a la licitación del Río Paraná si querés el visto bueno de la Casa Blanca.",
    fraseTipica: "Valoramos profundamente la amistad, pero nos preocupa la presencia de actores extrarregionales en el Atlántico Sur."
  },

  enlace_pekin: {
    id: "enlace_pekin",
    nombre: "El Enlace de Negocios de Pekín",
    apodo: "El Dragón Silencioso",
    residencia: "Torre de Retiro / Embajada en Crisólogo Larralde",
    icono: "fa-solid fa-mug-hot",
    color: "red",
    descripcion: "Habla castellano perfecto con tono ceremonioso. Nunca levanta la voz. Te invita a tomar té y te recuerda con cortesía milenaria que si suspendés las obras de las represas patagónicas por cuestiones ambientales, el Banco Central de Pekín activará la cláusula de reclamo de pago inmediato del swap completo.",
    fraseTipica: "Nuestra asociación estratégica integral se basa en el cumplimiento incondicional de los acuerdos firmados."
  },

  jueza_ny: {
    id: "jueza_ny",
    nombre: "La Jueza de Nueva York",
    apodo: "El Fantasma de Griesa & Preska",
    residencia: "Tribunal del Distrito Sur de Manhattan, NY",
    icono: "fa-solid fa-gavel",
    color: "amber",
    descripcion: "Maneja los juicios de los fondos buitre por expropiaciones pasadas (YPF, cupones PBI). Cada 6 meses saca una orden de embargo contra activos del Estado: aviones presidenciales, cuentas del Banco Nación en Manhattan o fragatas militares si tocan puertos internacionales.",
    fraseTipica: "La República Argentina no goza de inmunidad soberana sobre activos comerciales embargables."
  },

  canciller_brasil: {
    id: "canciller_brasil",
    nombre: "El Diplomático de Itamaraty",
    apodo: "El Hermano de San Pablo",
    residencia: "Embajada de Brasil, Cerrito y Arroyo",
    icono: "fa-solid fa-truck-ramp-box",
    color: "emerald",
    descripcion: "Representa el poder de la FIESP (industriales paulistas) y el agronegocio de Mato Grosso. Te ofrece comprar todo el gas de Vaca Muerta, pero te exige a cambio no devaluar por sorpresa ni meterle trabas aduaneras a los autopartes de San Pablo.",
    fraseTipica: "El Mercosur no es una opción de gobierno, es un destino geopolítico inexorable."
  }
};

// =========================================================================
// 3. ACCIONES DIPLOMÁTICAS DIRECTAS (LA ROSCA GLOBAL)
// =========================================================================
const ACCIONES_DIPLOMATICAS = {
  pedir_waiver_fmi: {
    id: "pedir_waiver_fmi",
    nombre: "Pedir 'Waiver' de Emergencia al FMI",
    subtitulo: "Enviar al Ministro a Washington a implorar clemencia fiscal",
    icono: "fa-solid fa-hand-holding-dollar",
    color: "blue",
    descripcion: "Admitir ante el directorio del FMI que no se cumplieron las metas de reservas ni déficit fiscal y solicitar un perdón técnico para no entrar en mora automática.",
    impacto: {
      riesgoPais: -100,
      posicionFMI: "waiver_solicitado",
      diasVencimientoFMI: 45,
      claseMedia: -10,
      soberania: -20,
      mechaSocial: +10,
      barometroAlineamiento: +15,
      relato: "El Ministro viaja a Washington con una carta de intención corregida. El staff técnico concede el perdón temporal, pero exige acelerar la quita de subsidios de gas y electricidad."
    }
  },

  activar_tramo_swap_china: {
    id: "activar_tramo_swap_china",
    nombre: "Reclamar Activación de Tramo del Swap a Pekín",
    subtitulo: "Inyectar yuanes frescos para financiar importaciones sin quemar dólares",
    icono: "fa-solid fa-coins",
    color: "red",
    descripcion: "Solicitar al Banco Popular de China la conversión de un nuevo tramo de yuanes a liquidez utilizable para el comercio exterior.",
    impacto: {
      reservasBCRA: +1000,
      reservasNetasBCRA: +800,
      semaforoSwap: "verde",
      barometroAlineamiento: -20,
      tensionEmbargosNY: +10,
      productivo: +10,
      relato: "El PBOC autoriza la activación de 5.000 millones de yuanes (aprox. US$ 700 M). El Banco Central respira ante los importadores, pero Washington envía una nota de preocupación formal."
    }
  },

  audiencia_reservada_palacio_bosch: {
    id: "audiencia_reservada_palacio_bosch",
    nombre: "Audiencia Reservada en Palacio Bosch (EE.UU.)",
    subtitulo: "Negociar el veto de Washington a cambio de concesiones estratégicas",
    icono: "fa-solid fa-shield-halved",
    color: "indigo",
    descripcion: "Reunión secreta con el embajador estadounidense para comprometer cooperación hemisférica a cambio de su voto favorable en los directorios del FMI y el BID.",
    impacto: {
      riesgoPais: -150,
      posicionFMI: "staff_level_agreement",
      barometroAlineamiento: +25,
      semaforoSwap: "amarillo",
      trabajo: -5,
      relato: "En un salón del Palacio Bosch, el Embajador garantiza el pulgar arriba del Tesoro en el FMI. A cambio, se firma un acta para suspender la licitación de 5G a empresas chinas."
    }
  },

  cumbre_bilateral_itamaraty: {
    id: "cumbre_bilateral_itamaraty",
    nombre: "Cumbre Bilateral de Descompresión con Brasil",
    subtitulo: "Destrabar aduanas, exportaciones automotrices y envíos de gas",
    icono: "fa-solid fa-handshake",
    color: "emerald",
    descripcion: "Encuentro bilateral con el Presidente de Brasil para armonizar aranceles y garantizar la provisión de autopartes y compra de trigo.",
    impacto: {
      relacionBrasil: +30,
      productivo: +15,
      trabajo: +10,
      riesgoPais: -50,
      mechaSocial: -5,
      relato: "Foto sonriente en Brasilia. Se firma un protocolo para agilizar el cruce de camiones en Paso de los Libres y se garantiza el suministro de gas argentino a San Pablo."
    }
  }
};

// =========================================================================
// 4. MECÁNICAS DE CONSECUENCIA GEOPOLÍTICA EXTREMA (EVENTOS / CISNES NEGROS)
// =========================================================================
const EVENTOS_EXTREMOS_GEOPOLITICA = {
  embargo_exterior_fragata: {
    id: "embargo_exterior_fragata",
    nombre: "El Embargo en el Exterior (La Fragata 2.0)",
    subtitulo: "Fallo adverso en Nueva York por el juicio de expropiaciones",
    icono: "fa-solid fa-plane-slash",
    gatillo: { tensionEmbargosNYMayorA: 75 },
    descripcion: "Un fondo buitre obtiene una orden ejecutiva de la jueza de Manhattan. Un juez ordena retener el avión presidencial en un aeropuerto europeo durante una gira oficial.",
    impacto: {
      seguridad: -20,
      paranoia: +25,
      riesgoPais: +350,
      mechaSocial: +15,
      claseMedia: -15
    },
    relato: "¡ESCÁNDALO EN EL AEROPUERTO INTERNACIONAL! La policía aeronáutica europea faja el Tango 01 por orden judicial de Nueva York. El Presidente y su comitiva deben regresar a Buenos Aires en un vuelo de línea comercial con escala. Crónica TV pone el zócalo: 'VARADOS EN EL MUNDO: NOS EMBARGARON HASTA LAS VALIJAS'."
  },

  bloqueo_sanitario_soja: {
    id: "bloqueo_sanitario_soja",
    nombre: "El Bloqueo Sanitario de la Soja en Shanghái",
    subtitulo: "Pekín retalia con barreras fitozoosanitarias por declaraciones hostiles",
    icono: "fa-solid fa-wheat-awn-circle-exclamation",
    gatillo: { semaforoRojoYOccidente: true },
    descripcion: "Las aduanas chinas 'detectan una plaga microscópica' en los barcos de soja argentina en el puerto de Shanghái y frenan 20 buques cerealeros. Se frena el ingreso de 1.200 millones de dólares.",
    impacto: {
      productivo: -25,
      reservasBCRA: -1200,
      reservasNetasBCRA: -1200,
      dolarBlue: +180,
      riesgoPais: +200
    },
    relato: "¡20 BUQUES CEREALEROS RETENIDOS EN SHANGHÁI! Pekín denuncia 'parásitos desconocidos' en las bodegas argentinas. Las exportaciones quedan congeladas en alta mar y las cerealeras de Rosario suspenden las liquidaciones en el mercado cambiario."
  },

  suspension_mercosur: {
    id: "suspension_mercosur",
    nombre: "La Suspensión del Mercosur y la Parálisis Automotriz",
    subtitulo: "Guerra arancelaria con Brasil y corte de compras de trigo",
    icono: "fa-solid fa-ban",
    gatillo: { relacionBrasilMenorA: -40 },
    descripcion: "Aplicás aranceles unilaterales o insultás al gobierno brasileño. Itamaraty retalia frenando la compra de trigo argentino y piezas automotrices.",
    impacto: {
      trabajo: -20,
      productivo: -20,
      mechaSocial: +25,
      inflacionMensual: +1.5,
      dolarBlue: +120
    },
    relato: "¡CRISIS TOTAL EN EL MERCOSUR! Brasil frena el ingreso de trigo argentino. Las terminales automotrices de General Pacheco y Ferreyra suspenden a 15.000 operarios por falta de motores brasileños. Productores rurales queman bolsas de cereal en la Ruta 2."
  },

  waiver_humillante_washington: {
    id: "waiver_humillante_washington",
    nombre: "El 'Waiver' Humillante en Washington",
    subtitulo: "Incumplimiento de reservas y carta de sumisión al FMI",
    icono: "fa-solid fa-person-praying",
    gatillo: { waiverSolicitado: true },
    descripcion: "Incumpliste la meta de acumulación de reservas por tercer trimestre consecutivo. El Ministro de Economía tiene que viajar a Washington a firmar una carta de sumisión admitiendo 'desvíos de conducta fiscal'.",
    impacto: {
      claseMedia: -15,
      soberania: -20,
      mechaSocial: +15,
      coronarias: -8
    },
    relato: "¡CARTA DE SUMISIÓN ANTE EL FONDO! El Ministro de Economía se presenta ante el staff del FMI admitiendo 'desvíos graves en el sendero de gasto'. Crónica TV clava la placa roja: 'DE RODILLAS EN EL NORTE: FUIMOS A PEDIR PERDÓN'."
  }
};

// =========================================================================
// 5. DILEMAS GEOPOLÍTICOS DE 4 CAMINOS: ENTRE WASHINGTON Y PEKÍN
// =========================================================================
const DILEMAS_GEOPOLITICA = [
  {
    id: "dilema_swap_apriete_washington",
    etapaBadge: "Palacio San Martín • Deuda y Superpotencias",
    area: "Geopolítica y Soberanía Exterior",
    fase: "presidente",
    titulo: "El Vencimiento del Swap y el Apriete de Washington",
    descripcion: "Vencen 5.000 millones de dólares del tramo activado del Swap Chino. Si no se renuevan, el Banco Central entra en cesación de pagos externa en 72 horas. A la par, el Departamento de Estado norteamericano te ofrece interceder ante el FMI para darte un crédito extraordinario, con una condición: desmantelar la Estación Espacial China en Bajada del Agrio (Neuquén) y suspender la compra de aviones de combate de origen no occidental.",
    explicacion: {
      queMide: "Mide el alineamiento estratégico entre la hegemonía militar de EE.UU. y el pulmón financiero de Pekín.",
      siDeAcuerdo: "Aceptar a EE.UU. te da el paraguas del FMI pero rompe la relación comercial con tu principal comprador de soja y te deja en rojo de yuanes.",
      siEnContra: "Priorizar a China te ata al régimen de Pekín y desata la furia de los mercados occidentales y Wall Street."
    },
    opciones: [
      {
        texto: "Opción A: Aceptar la exigencia de EE.UU. y romper el acuerdo de la Base de Neuquén. Washington celebra; el FMI gira un puente de liquidez. Pekín cancela compras de soja y exige reintegro del swap.",
        etiqueta: "Alineamiento Occidental / Ruptura China",
        impacto12Axes: { diplomacia: 90, soberania: 30, libre_mercado: 75, estatismo: 25 },
        impactoSectores: { productivo: -20, frenteExterno: +15, trabajo: -10, claseMedia: -10 },
        impactoMacro: { reservasNetasBCRA: -1800, riesgoPais: -150 },
        impactoCriollo: { reservasBCRA: -1500, dolarBlue: +120 },
        impactoSalud: { paranoia: +15, coronarias: -5 },
        impactoGeopolitica: { barometroAlineamiento: +40, semaforoSwap: "rojo", posicionFMI: "staff_level_agreement", tensionEmbargosNY: -15 }
      },
      {
        texto: "Opción B: Viajar de urgencia a Pekín a arrodillarte ante el Partido Comunista. Te sacás la foto en Tiananmén, renuevan el swap por 3 años; EE.UU. frena al FMI y el Riesgo País sube 400 puntos.",
        etiqueta: "Eje Beijing / Multipolar",
        impacto12Axes: { diplomacia: 15, soberania: 40, estatismo: 80, libre_mercado: 25 },
        impactoSectores: { productivo: +20, frenteExterno: -25, estadoCiencia: +15, claseMedia: -15 },
        impactoMacro: { reservasNetasBCRA: +2500, riesgoPais: +400 },
        impactoCriollo: { reservasBCRA: +2200, dolarBlue: +80 },
        impactoSalud: { paranoia: +20, coronarias: -5 },
        impactoGeopolitica: { barometroAlineamiento: -45, semaforoSwap: "verde", posicionFMI: "en_mora", tensionEmbargosNY: +25 }
      },
      {
        texto: "Opción C: Pagar el vencimiento con las últimas reservas de oro y dólares físicos del BCRA. No le debés pleitesía a ninguno; dejás la caja en -US$ 8.000 M y el blue salta 25% antes del lunes.",
        etiqueta: "Soberanía / Vaciado de Reservas",
        impacto12Axes: { diplomacia: 50, soberania: 85, libre_mercado: 50, estatismo: 50 },
        impactoSectores: { frenteExterno: +10, claseMedia: -25, trabajo: -20, productivo: -15 },
        impactoMacro: { reservasNetasBCRA: -5000, inflacionMensual: +6.5, riesgoPais: +350 },
        impactoCriollo: { reservasBCRA: -4500, dolarBlue: +320, mechaSocial: +25 },
        impactoSalud: { paranoia: +25, coronarias: -15 },
        impactoGeopolitica: { barometroAlineamiento: 0, semaforoSwap: "amarillo", posicionFMI: "revision_pendiente" }
      },
      {
        texto: "Opción D: Declarar una 'reestructuración unilateral' del swap y congelar el pago. Ganás tiempo financiero; China corta el crédito a importaciones y las automotrices frenan plantas.",
        etiqueta: "Moratoria Unilateral / Cierre Comercial",
        impacto12Axes: { diplomacia: 25, soberania: 70, libre_mercado: 20, proteccionismo: 80 },
        impactoSectores: { productivo: -30, trabajo: -20, frenteExterno: -20, estadoCiencia: -5 },
        impactoMacro: { reservasNetasBCRA: +500, inflacionMensual: +3.0, riesgoPais: +250 },
        impactoCriollo: { reservasBCRA: +300, dolarBlue: +150, mechaSocial: +15 },
        impactoSalud: { paranoia: +30, coronarias: -8 },
        impactoGeopolitica: { barometroAlineamiento: -10, semaforoSwap: "rojo", relacionBrasil: -20 }
      }
    ]
  },

  {
    id: "dilema_licitacion_hidrovia",
    etapaBadge: "Palacio San Martín • Vías Navegables y Geopolítica",
    area: "Geopolítica y Soberanía Fluvial",
    fase: "presidente",
    titulo: "La Licitación de la Hidrovía del Paraná (Ruta de la Soja y el Contrabando)",
    descripcion: "Vence la concesión del dragado y balizamiento de la Hidrovía Paraná-Paraguay, por donde sale el 80% de las exportaciones agroindustriales del país y por donde entra la mayor parte de la droga del cono sur. Se presentan tres ofertas finales: un consorcio chino estatal, una empresa belga-holandesa aliada de EE.UU. y un consorcio de gobernadores peronistas que quieren una empresa estatal provincial.",
    explicacion: {
      queMide: "Mide si entregás el control logístico a potencias extranjeras a cambio de dólares o si asumís el costo de una gestión estatal o dividida.",
      siDeAcuerdo: "Adjudicar a China o a Europa/EE.UU. abarata costos pero genera alineamientos geopolíticos irreversibles.",
      siEnContra: "Estatizarla complace a los gobernadores ribereños pero colapsa la logística exportadora por falta de dragas modernas."
    },
    opciones: [
      {
        texto: "Opción A: Adjudicar a la empresa estatal de Pekín (Menor costo de dragado). Las cerealeras bajan costos y China garantiza compras récord; la Embajada de EE.UU. alerta y la DEA suspende cooperación.",
        etiqueta: "Dragado Chino / Alerta Washington",
        impacto12Axes: { diplomacia: 20, libre_mercado: 60, estatismo: 30, soberania: 35 },
        impactoSectores: { productivo: +25, seguridadJusticia: -20, frenteExterno: -15, trabajo: +10 },
        impactoMacro: { reservasNetasBCRA: +800, riesgoPais: +100 },
        impactoCriollo: { reservasBCRA: +700, roscaGobernadores: -10 },
        impactoSalud: { paranoia: +15, seguridad: -10 },
        impactoGeopolitica: { barometroAlineamiento: -35, semaforoSwap: "verde", tensionEmbargosNY: +10 }
      },
      {
        texto: "Opción B: Adjudicar al consorcio europeo con monitoreo de la Guardia Costera de EE.UU. Felicitaciones del Comando Sur y apoyo en el FMI; sindicatos portuarios (SOMU) declaran paro fluvial indefinido.",
        etiqueta: "Consorcio Occidental / Paro Fluvial",
        impacto12Axes: { diplomacia: 85, seguridad: 75, libre_mercado: 70, estatismo: 25 },
        impactoSectores: { frenteExterno: +25, trabajo: -25, seguridadJusticia: +15, productivo: -10 },
        impactoMacro: { riesgoPais: -120 },
        impactoCriollo: { mechaSocial: +20, dolarBlue: -40, roscaGobernadores: -15 },
        impactoSalud: { paranoia: +10, coronarias: -5 },
        impactoGeopolitica: { barometroAlineamiento: +35, posicionFMI: "staff_level_agreement" }
      },
      {
        texto: "Opción C: Estatizar la Hidrovía bajo control conjunto de Nación y los Gobernadores Ribereños. Blindás la rosca federal; el dragado se vuelve lento e ineficiente y buques de gran calado encallan.",
        etiqueta: "Estatización Provincial / Rosca Federal",
        impacto12Axes: { diplomacia: 50, federalismo: 85, estatismo: 85, libre_mercado: 15 },
        impactoSectores: { productivo: -25, trabajo: +20, estadoCiencia: +15, frenteExterno: -15 },
        impactoMacro: { resultadoFiscalPBI: -0.4, reservasNetasBCRA: -400 },
        impactoCriollo: { roscaGobernadores: +30, reservasBCRA: -350, dolarBlue: +60 },
        impactoSalud: { paranoia: -10, coronarias: -5 },
        impactoGeopolitica: { barometroAlineamiento: -5, relacionBrasil: -15 }
      },
      {
        texto: "Opción D: Dividir la concesión en tramos para conformar a todos. Dragado norte a europeos, sur a chinos, peaje al Estado; laberinto judicial, nadie invierte y peajes suben 40%.",
        etiqueta: "Salomónica / Laberinto Judicial",
        impacto12Axes: { diplomacia: 50, federalismo: 50, estatismo: 50, libre_mercado: 50 },
        impactoSectores: { productivo: -15, claseMedia: -10, frenteExterno: -10, trabajo: -5 },
        impactoMacro: { inflacionMensual: +0.6, riesgoPais: +80 },
        impactoCriollo: { roscaGobernadores: -5, mechaSocial: +10 },
        impactoSalud: { paranoia: +20, coronarias: -8 },
        impactoGeopolitica: { barometroAlineamiento: 0, semaforoSwap: "amarillo" }
      }
    ]
  },

  {
    id: "dilema_mision_fmi_rodrigazo",
    etapaBadge: "Palacio San Martín • Negociación con el FMI",
    area: "FMI y Estabilización Económica",
    fase: "presidente",
    titulo: "La Misión del FMI y el Fantasma del 'Rodrigazo'",
    descripcion: "El FMI exige para la 8ª revisión que el Banco Central deje de intervenir en la brecha cambiaria y convalide una devaluación del tipo de cambio oficial del 30% en un solo día, sumado a la eliminación total de los subsidios a la luz y al gas. Sin esto, no hay desembolso para pagarle al propio Fondo la semana entrante.",
    explicacion: {
      queMide: "Mide si te subordinás a las recetas ortodoxas de shock del Fondo o si ensayás alternativas heterodoxas o de mora técnica.",
      siDeAcuerdo: "Devaluar y tarifar cumple el Excel del FMI pero enciende la mecha de la calle y licúa los salarios de inmediato.",
      siEnContra: "Defaultear o buscar prestamistas alternativos evita el ajuste pero te aísla de los mercados internacionales o compromete recursos estratégicos."
    },
    opciones: [
      {
        texto: "Opción A: Devaluar el 30% el lunes a las 10:00 AM y cortar los subsidios de un plumazo. El Fondo aprueba y gira dólares; inflación salta al 18% mensual y la CGT convoca a paro general histórico.",
        etiqueta: "Shock Ortodoxo / Rodrigazo",
        impacto12Axes: { libre_mercado: 90, estatismo: 15, diplomacia: 80, justicia: 40 },
        impactoSectores: { trabajo: -35, claseMedia: -30, productivo: +15, frenteExterno: +25 },
        impactoMacro: { inflacionMensual: +12.0, reservasNetasBCRA: +2800, resultadoFiscalPBI: +1.2, riesgoPais: -200, pobreza: +5.0 },
        impactoCriollo: { dolarBlue: +450, mechaSocial: +40, reservasBCRA: +2500 },
        impactoSalud: { coronarias: -20, paranoia: +25 },
        impactoGeopolitica: { posicionFMI: "staff_level_agreement", barometroAlineamiento: +25, diasVencimientoFMI: 90 }
      },
      {
        texto: "Opción B: Rechazar el ajuste, no devaluar y entrar en mora técnica con el organismo. Rebeldía antiimperialista; bancos internacionales cierran cartas de crédito y el país es declarado deudor insolvente.",
        etiqueta: "Mora Técnica / Rebelión al Fondo",
        impacto12Axes: { libre_mercado: 10, estatismo: 90, soberania: 90, diplomacia: 15 },
        impactoSectores: { trabajo: +20, frenteExterno: -40, productivo: -30, claseMedia: -20 },
        impactoMacro: { riesgoPais: +950, reservasNetasBCRA: -1500, inflacionMensual: +4.0 },
        impactoCriollo: { dolarBlue: +500, mechaSocial: +15, reservasBCRA: -1200 },
        impactoSalud: { paranoia: +35, coronarias: -10 },
        impactoGeopolitica: { posicionFMI: "en_mora", barometroAlineamiento: -30, tensionEmbargosNY: +35 }
      },
      {
        texto: "Opción C: Ofrecer un 'Ajuste Alternativo': congelar salarios públicos y jubilaciones en vez de tocar el dólar. Dólar planchado sin salto inmediato del IPC; conflicto social permanente con estatales y jubilados.",
        etiqueta: "Licuadora Salarial / Dólar Fijo",
        impacto12Axes: { libre_mercado: 60, estatismo: 40, diplomacia: 50, justicia: 25 },
        impactoSectores: { trabajo: -30, estadoCiencia: -30, claseMedia: -15, productivo: +5 },
        impactoMacro: { resultadoFiscalPBI: +0.9, inflacionMensual: -0.8, riesgoPais: +50, pobreza: +3.0 },
        impactoCriollo: { mechaSocial: +30, dolarBlue: +40 },
        impactoSalud: { paranoia: +20, coronarias: -12 },
        impactoGeopolitica: { posicionFMI: "waiver_solicitado", barometroAlineamiento: +10 }
      },
      {
        texto: "Opción D: Pagar el vencimiento con triangulación de fondos prestados por un país árabe o fondo soberano. Esquivás la devaluación; tasa usuraria del 14% anual empeñando regalías futuras de Vaca Muerta.",
        etiqueta: "Préstamo Árabe / Empeño de Regalías",
        impacto12Axes: { diplomacia: 40, soberania: 30, libre_mercado: 50, estatismo: 60 },
        impactoSectores: { frenteExterno: +10, productivo: -10, estadoCiencia: -15, claseMedia: +5 },
        impactoMacro: { reservasNetasBCRA: +1500, riesgoPais: +180 },
        impactoCriollo: { reservasBCRA: +1300, dolarBlue: -30, roscaGobernadores: -10 },
        impactoSalud: { paranoia: +25, coronarias: -8 },
        impactoGeopolitica: { posicionFMI: "al_dia", barometroAlineamiento: -10, diasVencimientoFMI: 60 }
      }
    ]
  }
];

// =========================================================================
// 6. DESTINOS GEOPOLÍTICOS FINALES (EPÍLOGO INTERNACIONAL)
// =========================================================================
const DESTINOS_GEOPOLITICA_FINAL = {
  satelite_washington: {
    id: "satelite_washington",
    nombre: "El Satélite Incondicional de Washington",
    icono: "fa-solid fa-flag-usa",
    color: "indigo",
    subtitulo: "Alineamiento ciego con Occidente y reverencia al FMI",
    relato: "Terminaste tu mandato como el alumno ejemplar del Departamento de Estado y el FMI. Te aplauden en el Council of the Americas y te invitan a dar conferencias en Georgetown, pero Pekín te cerró los puertos de soja, dejaste al país sin soberanía sobre sus vías navegables y las bases científicas patagónicas quedaron bajo inspección foránea."
  },

  colonia_pekin: {
    id: "colonia_pekin",
    nombre: "La Factoría Austral del Dragón",
    icono: "fa-solid fa-dragon",
    color: "red",
    subtitulo: "Dependencia total del Swap de Pekín y la órbita euroasiática",
    relato: "Salvaste las reservas quemando yuanes del PBOC y entregaste represas, puertos y litio al Partido Comunista. En Wall Street te declararon deudor insolvente y la jueza de Manhattan ordenó embargar cuentas oficiales, pero en Pekín te recibieron con alfombra roja milenaria y té ceremonial."
  },

  aislacionismo_default: {
    id: "aislacionismo_default",
    nombre: "El Aislacionismo del Default y la Fragata Perdida",
    icono: "fa-solid fa-skull-crossbones",
    color: "slate",
    subtitulo: "Peleado con el FMI, con Washington, con China y con Brasil",
    relato: "Lograste el milagro de enemistarte simultáneamente con las dos superpotencias, quebrar el Mercosur y defaultear con el FMI. El Riesgo País tocó los 3.000 puntos básicos, tus aviones oficiales no pueden aterrizar en Europa sin ser incautados por acreedores buitre y las cartas de crédito argentinas cotizan a precio de liquidación."
  },

  malabarista_no_alineamiento: {
    id: "malabarista_no_alineamiento",
    nombre: "El Malabarista del No-Alineamiento Criollo",
    icono: "fa-solid fa-scale-balanced",
    color: "emerald",
    subtitulo: "Equilibrio pragmático entre superpotencias sin entregar la llave del país",
    relato: "Jugaste al límite entre el té ceremonial de Pekín y los asados diplomáticos del Palacio Bosch. Le cobraste a los dos, pagaste lo justo al FMI para evitar el abismo y mantuviste abierta la frontera industrial con Brasil. Ninguna superpotencia te ama incondicionalmente, pero ninguna se animó a bajarte la palanca."
  }
};

// =========================================================================
// 7. SISTEMA DE GESTIÓN GEOPOLÍTICA Y CANCILLERÍA (CLASE MOTOR)
// =========================================================================
class SistemaGeopolitica {
  constructor() {
    this.semaforoSwap = "verde"; // 'verde' | 'amarillo' | 'rojo'
    this.barometroAlineamiento = 0; // -100 (Multipolar/China) a +100 (Occidente/EEUU)
    this.posicionFMI = "revision_pendiente"; // 'al_dia', 'revision_pendiente', 'staff_level_agreement', 'en_mora', 'waiver_solicitado'
    this.diasVencimientoFMI = 11;
    this.relacionBrasil = 50; // -100 a +100
    this.tensionEmbargosNY = 25; // 0 a 100
    this.reservasSwapYuanes = 5000; // Millones de USD equivalentes

    this.audienciasPendientes = [
      {
        id: "aud_eeuu",
        fuerzaId: "embajada_eeuu",
        titulo: "Embajador de EE.UU. (Palacio Bosch)",
        motivo: "Preocupación por licitación de radares en el sur y avance de redes chinas",
        urgencia: "alta"
      },
      {
        id: "aud_china",
        fuerzaId: "china_pboc",
        titulo: "Consejero Comercial Chino (PBOC)",
        motivo: "Seguimiento de las represas de Santa Cruz y tramo activo del swap",
        urgencia: "media"
      },
      {
        id: "aud_fmi",
        fuerzaId: "fmi",
        titulo: "Misión del FMI (Suite 402 Four Seasons)",
        motivo: "Esperando borrador del sendero fiscal y sinceramiento tarifario",
        urgencia: "crítica"
      },
      {
        id: "aud_brasil",
        fuerzaId: "brasil_itamaraty",
        titulo: "Canciller de Brasil (Itamaraty)",
        motivo: "Alerta por aranceles automotrices y compra de gas de Vaca Muerta",
        urgencia: "media"
      }
    ];

    this.cablesDiplomaticos = [
      {
        id: "cable_inicial",
        emisor: "Embajada en Washington",
        clasificacion: "SECRETO / URGENTE",
        hora: "10:15 AM",
        texto: "La Corte de Apelaciones de NY fijó audiencia por el embargo de activos de YPF. Si no se presenta garantía de US$ 1.000 M el viernes, embargan cuentas del Tesoro."
      }
    ];

    this.eventosDisparados = [];
  }

  agregarCable(emisor, texto, clasificacion = "CONFIDENCIAL") {
    this.cablesDiplomaticos.unshift({
      id: "cable_" + Date.now(),
      emisor,
      clasificacion,
      hora: new Date().toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" }),
      texto
    });
    if (this.cablesDiplomaticos.length > 8) {
      this.cablesDiplomaticos.pop();
    }
  }

  ejecutarAccionDiplomatica(accionId, motor) {
    const accion = ACCIONES_DIPLOMATICAS[accionId];
    if (!accion) return { exito: false, mensaje: "Acción no encontrada." };

    const imp = accion.impacto;
    if (imp.riesgoPais && motor && motor.macroeconomia) {
      motor.macroeconomia.riesgoPais = Math.max(300, motor.macroeconomia.riesgoPais + imp.riesgoPais);
    }
    if (imp.reservasBCRA && motor && motor.termometroCriollo) {
      motor.termometroCriollo.reservasBCRA += imp.reservasBCRA;
    }
    if (imp.reservasNetasBCRA && motor && motor.macroeconomia) {
      motor.macroeconomia.reservasNetasBCRA += imp.reservasNetasBCRA;
    }
    if (imp.dolarBlue && motor && motor.termometroCriollo) {
      motor.termometroCriollo.dolarBlue = Math.max(900, motor.termometroCriollo.dolarBlue + imp.dolarBlue);
    }
    if (imp.mechaSocial && motor && motor.termometroCriollo) {
      motor.termometroCriollo.mechaSocial = Math.max(0, Math.min(100, motor.termometroCriollo.mechaSocial + imp.mechaSocial));
    }
    if (imp.claseMedia && motor && motor.aprobacionSectores) {
      motor.aprobacionSectores.claseMedia = Math.max(5, Math.min(95, motor.aprobacionSectores.claseMedia + imp.claseMedia));
    }
    if (imp.productivo && motor && motor.aprobacionSectores) {
      motor.aprobacionSectores.productivo = Math.max(5, Math.min(95, motor.aprobacionSectores.productivo + imp.productivo));
    }
    if (imp.trabajo && motor && motor.aprobacionSectores) {
      motor.aprobacionSectores.trabajo = Math.max(5, Math.min(95, motor.aprobacionSectores.trabajo + imp.trabajo));
    }

    // Actualizaciones de estado interno de Cancillería
    if (imp.posicionFMI) this.posicionFMI = imp.posicionFMI;
    if (imp.diasVencimientoFMI !== undefined) this.diasVencimientoFMI = imp.diasVencimientoFMI;
    if (imp.semaforoSwap) this.semaforoSwap = imp.semaforoSwap;
    if (imp.barometroAlineamiento !== undefined) {
      this.barometroAlineamiento = Math.max(-100, Math.min(100, this.barometroAlineamiento + imp.barometroAlineamiento));
    }
    if (imp.relacionBrasil !== undefined) {
      this.relacionBrasil = Math.max(-100, Math.min(100, this.relacionBrasil + imp.relacionBrasil));
    }
    if (imp.tensionEmbargosNY !== undefined) {
      this.tensionEmbargosNY = Math.max(0, Math.min(100, this.tensionEmbargosNY + imp.tensionEmbargosNY));
    }

    this.agregarCable("Cancillería / Misión", `Acción ejecutada: ${accion.nombre}. ${imp.relato}`, "DESPACHO OFICIAL");

    return {
      exito: true,
      accion: accion,
      relato: imp.relato
    };
  }

  evaluarEventosExtremos(motor) {
    const eventosDisparadosAhora = [];

    // 1. Embargo Exterior (Fragata 2.0)
    const riesgo = motor ? motor.macroeconomia.riesgoPais : 1200;
    if (!this.eventosDisparados.includes("embargo_exterior_fragata")) {
      if (this.tensionEmbargosNY >= 75 || (riesgo > 2200 && this.posicionFMI === "en_mora")) {
        const ev = EVENTOS_EXTREMOS_GEOPOLITICA.embargo_exterior_fragata;
        this.eventosDisparados.push("embargo_exterior_fragata");
        this.aplicarImpactoEvento(ev, motor);
        eventosDisparadosAhora.push(ev);
        this.agregarCable("Consulado en Europa", ev.relato, "ALERTA ROJA");
      }
    }

    // 2. Bloqueo Sanitario de Soja
    if (!this.eventosDisparados.includes("bloqueo_sanitario_soja")) {
      if (this.semaforoSwap === "rojo" || (this.barometroAlineamiento > 70 && motor && motor.macroeconomia.reservasNetasBCRA < -2000)) {
        const ev = EVENTOS_EXTREMOS_GEOPOLITICA.bloqueo_sanitario_soja;
        this.eventosDisparados.push("bloqueo_sanitario_soja");
        this.aplicarImpactoEvento(ev, motor);
        eventosDisparadosAhora.push(ev);
        this.agregarCable("Agregaduría en Pekín", ev.relato, "ALERTA COMERCIAL");
      }
    }

    // 3. Suspensión del Mercosur
    if (!this.eventosDisparados.includes("suspension_mercosur")) {
      if (this.relacionBrasil <= -40) {
        const ev = EVENTOS_EXTREMOS_GEOPOLITICA.suspension_mercosur;
        this.eventosDisparados.push("suspension_mercosur");
        this.aplicarImpactoEvento(ev, motor);
        eventosDisparadosAhora.push(ev);
        this.agregarCable("Embajada en Brasilia", ev.relato, "CRISIS DIPLOMÁTICA");
      }
    }

    // 4. Waiver Humillante
    if (!this.eventosDisparados.includes("waiver_humillante_washington")) {
      if (this.posicionFMI === "waiver_solicitado") {
        const ev = EVENTOS_EXTREMOS_GEOPOLITICA.waiver_humillante_washington;
        this.eventosDisparados.push("waiver_humillante_washington");
        this.aplicarImpactoEvento(ev, motor);
        eventosDisparadosAhora.push(ev);
        this.agregarCable("Misión en Washington", ev.relato, "POLÍTICA FISCAL");
      }
    }

    return eventosDisparadosAhora;
  }

  aplicarImpactoEvento(evento, motor) {
    if (!evento || !motor) return;
    const imp = evento.impacto;
    if (imp.riesgoPais) motor.macroeconomia.riesgoPais = Math.min(3500, motor.macroeconomia.riesgoPais + imp.riesgoPais);
    if (imp.reservasBCRA) motor.termometroCriollo.reservasBCRA += imp.reservasBCRA;
    if (imp.reservasNetasBCRA) motor.macroeconomia.reservasNetasBCRA += imp.reservasNetasBCRA;
    if (imp.dolarBlue) motor.termometroCriollo.dolarBlue = Math.min(6500, motor.termometroCriollo.dolarBlue + imp.dolarBlue);
    if (imp.mechaSocial) motor.termometroCriollo.mechaSocial = Math.min(100, motor.termometroCriollo.mechaSocial + imp.mechaSocial);
    if (imp.inflacionMensual) motor.macroeconomia.inflacionMensual = Math.min(45.0, Math.round((motor.macroeconomia.inflacionMensual + imp.inflacionMensual) * 10) / 10);
    if (imp.productivo && motor.aprobacionSectores.productivo !== undefined) {
      motor.aprobacionSectores.productivo = Math.max(5, motor.aprobacionSectores.productivo + imp.productivo);
    }
    if (imp.trabajo && motor.aprobacionSectores.trabajo !== undefined) {
      motor.aprobacionSectores.trabajo = Math.max(5, motor.aprobacionSectores.trabajo + imp.trabajo);
    }
    if (imp.claseMedia && motor.aprobacionSectores.claseMedia !== undefined) {
      motor.aprobacionSectores.claseMedia = Math.max(5, motor.aprobacionSectores.claseMedia + imp.claseMedia);
    }
    if (imp.seguridad && motor.saludSupervivencia) {
      motor.saludSupervivencia.seguridad = Math.max(0, motor.saludSupervivencia.seguridad + imp.seguridad);
    }
    if (imp.paranoia && motor.saludSupervivencia) {
      motor.saludSupervivencia.paranoia = Math.min(100, motor.saludSupervivencia.paranoia + imp.paranoia);
    }
    if (imp.coronarias && motor.saludSupervivencia) {
      motor.saludSupervivencia.coronarias = Math.max(0, motor.saludSupervivencia.coronarias + imp.coronarias);
    }
  }

  diagnosticarDestinoFinal(motor) {
    const riesgo = motor ? motor.macroeconomia.riesgoPais : 1200;

    // Caso 1: Aislacionismo y Default
    if (this.posicionFMI === "en_mora" && (riesgo >= 2200 || this.eventosDisparados.includes("embargo_exterior_fragata"))) {
      return DESTINOS_GEOPOLITICA_FINAL.aislacionismo_default;
    }

    // Caso 2: Satélite Incondicional de Washington
    if (this.barometroAlineamiento >= 50) {
      return DESTINOS_GEOPOLITICA_FINAL.satelite_washington;
    }

    // Caso 3: Factoría Austral de Pekín
    if (this.barometroAlineamiento <= -50) {
      return DESTINOS_GEOPOLITICA_FINAL.colonia_pekin;
    }

    // Caso 4: El Malabarista del No-Alineamiento Criollo
    return DESTINOS_GEOPOLITICA_FINAL.malabarista_no_alineamiento;
  }

  obtenerResumen() {
    return {
      semaforoSwap: this.semaforoSwap,
      barometroAlineamiento: this.barometroAlineamiento,
      posicionFMI: this.posicionFMI,
      diasVencimientoFMI: this.diasVencimientoFMI,
      relacionBrasil: this.relacionBrasil,
      tensionEmbargosNY: this.tensionEmbargosNY,
      reservasSwapYuanes: this.reservasSwapYuanes,
      cablesCount: this.cablesDiplomaticos.length,
      eventosDisparados: [...this.eventosDisparados]
    };
  }
}

// Compatibilidad de exportación dual
if (typeof window !== "undefined") {
  window.FUERZAS_INTERNACIONALES = FUERZAS_INTERNACIONALES;
  window.FAUNA_DIPLOMATICA = FAUNA_DIPLOMATICA;
  window.ACCIONES_DIPLOMATICAS = ACCIONES_DIPLOMATICAS;
  window.EVENTOS_EXTREMOS_GEOPOLITICA = EVENTOS_EXTREMOS_GEOPOLITICA;
  window.DILEMAS_GEOPOLITICA = DILEMAS_GEOPOLITICA;
  window.DESTINOS_GEOPOLITICA_FINAL = DESTINOS_GEOPOLITICA_FINAL;
  window.SistemaGeopolitica = SistemaGeopolitica;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    FUERZAS_INTERNACIONALES,
    FAUNA_DIPLOMATICA,
    ACCIONES_DIPLOMATICAS,
    EVENTOS_EXTREMOS_GEOPOLITICA,
    DILEMAS_GEOPOLITICA,
    DESTINOS_GEOPOLITICA_FINAL,
    SistemaGeopolitica
  };
}
