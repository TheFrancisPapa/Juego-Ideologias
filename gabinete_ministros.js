// gabinete_ministros.js - Gabinete Nacional, Internas de Palacio, Fusibles Políticos y Guerra Sucia en Olivos

// =========================================================================
// 1. LOS 6 ASIENTOS CALIENTES DE LA CASA ROSADA
// =========================================================================
const CARTERAS_GABINETE = {
  economia: {
    id: "economia",
    cargo: "Ministro de Economía",
    apodo: "El Fusible Mayor",
    titular: "Lic. Martín Caputto",
    icono: "fa-solid fa-chart-line",
    color: "emerald",
    padrino: "Wall Street & Asociación de Bancos (ADEBA)",
    pesoPolitico: "alto", // bajo, medio, alto
    rol: "Administra la inflación, la recaudación fiscal, el tipo de cambio y la negociación con el FMI.",
    peligro: "Su ego es infinito. Todos se autoperciben salvadores de la patria y futuros presidentes. Si le va bien te hace sombra; si le va mal, tenés que inmolarlo para evitar que el fuego te llegue al pecho.",
    lealtadBase: 50,
    desgasteBase: 45,
    eficaciaBase: 65,
    estadoPasillo: "Operando en off contra el Ministro del Interior por partidas presupuestarias."
  },

  jefe_gabinete: {
    id: "jefe_gabinete",
    cargo: "Jefe de Gabinete de Ministros",
    apodo: "El Pararrayos de la Gestión",
    titular: "Dr. Guillermo Posse",
    icono: "fa-solid fa-briefcase",
    color: "indigo",
    padrino: "Aparato partidario & Círculo íntimo presidencial",
    pesoPolitico: "medio",
    rol: "Firma las Decisiones Administrativas, reparte la pauta oficial y pone la cara ante el Congreso una vez por mes en el informe de gestión.",
    peligro: "Controla qué expedientes llegan a tu escritorio y cuáles duermen en un cajón. Si se alía con la oposición, te paraliza la administración pública sin que te enteres.",
    lealtadBase: 80,
    desgasteBase: 30,
    eficaciaBase: 60,
    estadoPasillo: "Filtrando expedientes críticos y monitoreando el flujo de pauta a medios."
  },

  interior: {
    id: "interior",
    cargo: "Ministro del Interior",
    apodo: "El Valijero Federal",
    titular: "Dr. Lisandro Francos",
    icono: "fa-solid fa-map-location-dot",
    color: "amber",
    padrino: "Bloque de Gobernadores Feudales & Caudillos del Norte",
    pesoPolitico: "alto",
    rol: "Rosquea con los 24 gobernadores. Su herramienta principal son los Aportes del Tesoro Nacional (ATN) y los fondos para obras públicas provinciales.",
    peligro: "Para cerrar acuerdos en el Senado, suele prometerles a los gobernadores fondos que Economía no tiene autorizados, detonando peleas a los gritos en Olivos.",
    lealtadBase: 60,
    desgasteBase: 40,
    eficaciaBase: 70,
    estadoPasillo: "Con carta de renuncia a disposición redactada en el maletín por falta de ATN."
  },

  seguridad: {
    id: "seguridad",
    cargo: "Ministro de Seguridad",
    apodo: "El Halcón de la Calle",
    titular: "Dra. Patricia Bullrich",
    icono: "fa-solid fa-shield-halved",
    color: "rose",
    padrino: "Ninguno (Tropas propias de las fuerzas y rating televisivo)",
    pesoPolitico: "alto",
    rol: "Maneja a las cuatro fuerzas federales (PFA, Gendarmería, Prefectura y PSA). Aplica los protocolos de orden público en los puentes y accesos.",
    peligro: "Es adicto a las cámaras de televisión. Con tal de sumar rating y perfil de mano dura, puede mandar a reprimir una protesta menor y dejarte heridos graves o un muerto en vivo por TV.",
    lealtadBase: 75,
    desgasteBase: 55,
    eficaciaBase: 80,
    estadoPasillo: "Pidiendo autorización urgente para desalojar el Puente Pueyrredón con hidrantes."
  },

  capital_humano: {
    id: "capital_humano",
    cargo: "Ministro de Capital Humano / Desarrollo Social",
    apodo: "La Olla a Presión",
    titular: "Lic. Sandra Pettovello",
    icono: "fa-solid fa-hand-holding-hand",
    color: "purple",
    padrino: "Movimientos territoriales & Cáritas / Iglesia Católica",
    pesoPolitico: "medio",
    rol: "Maneja el reparto de comida a comedores comunitarios, los programas de empleo y la contención de los movimientos sociales.",
    peligro: "Es el cargo más ingrato del Estado. Si corta la intermediación de los punteros, le acampan 50.000 personas en la 9 de Julio; si les gira la plata, el ala dura lo acusa de financiar a los enemigos.",
    lealtadBase: 70,
    desgasteBase: 65,
    eficaciaBase: 50,
    estadoPasillo: "Bajo asedio piquetero con 30.000 manifestantes rodeando el ministerio."
  },

  legal_tecnica: {
    id: "legal_tecnica",
    cargo: "Secretario Legal y Técnico",
    apodo: "La Pluma de la República",
    titular: "Dr. Carlos Zannini",
    icono: "fa-solid fa-pen-fancy",
    color: "sky",
    padrino: "Estudios jurídicos de la City & Corte Suprema",
    pesoPolitico: "bajo",
    rol: "El guardián de la firma presidencial. Revisa cada coma de los DNU y decretos para que no terminen anulados por la Justicia o con imputación penal.",
    peligro: "Si es demasiado purista, te frena todas las medidas audaces por 'inconstitucionales'; si es un obsecuente que te firma cualquier cosa, te deja servido a un procesamiento en Comodoro Py.",
    lealtadBase: 85,
    desgasteBase: 25,
    eficaciaBase: 85,
    estadoPasillo: "Revisando tres DNU con lupa para evitar cautelares de jueces contenciosos."
  }
};

// =========================================================================
// 2. DINÁMICAS DE PASILLO Y GUERRA FRÍA EN OLIVOS
// =========================================================================
const INCIDENTES_PASILLO = {
  off_the_record: {
    id: "off_the_record",
    nombre: "Operación en 'Off the Record' por WhatsApp",
    descripcion: "Un ministro filtra audios y planillas internas desde el baño de la Casa Rosada a columnistas de Clarín y La Nación para destrozar la imagen de un compañero de mesa.",
    impacto: { paranoia: +15, mechaSocial: +5, desgasteGeneral: +10 }
  },

  pisar_expediente: {
    id: "pisar_expediente",
    nombre: "Pisar el Expediente (El Boicot Burocrático)",
    descripcion: "Economía congela deliberadamente la partida presupuestaria para insumos de emergencia, buscando que la crisis haga caer al Ministro de Capital Humano.",
    impacto: { eficaciaGeneral: -15, mechaSocial: +10, claseMedia: -10 }
  },

  segundas_lineas: {
    id: "segundas_lineas",
    nombre: "El Caballo de Troya de las Segundas Líneas",
    descripcion: "Para compensar a un aliado, nombraste viceministros enemigos. El ministro no puede dar una orden en su propio edificio porque los directores de carrera le responden a su rival.",
    impacto: { eficaciaGeneral: -20, paranoia: +20 }
  },

  renuncia_a_disposicion: {
    id: "renuncia_a_disposicion",
    nombre: "La 'Renuncia a Disposición' del Domingo a las 22:00 hs",
    descripcion: "Un ministro manda carta formal al despacho: no se quiere ir, pero exige la cabeza de su rival o el control de la caja, amenazando con romper el bloque legislativo.",
    impacto: { paranoia: +20, coronarias: -5, dolarBlue: +40 }
  },

  carta_ocho_carillas: {
    id: "carta_ocho_carillas",
    nombre: "La Renuncia Indeclinable con Carta de 8 Carillas",
    descripcion: "Un ministro renuncia en Twitter un viernes a las 23:00 hs denunciando 'fuerzas oscuras' en Olivos. El dólar blue salta 12% el lunes y el FMI posterga desembolsos.",
    impacto: { dolarBlue: +120, riesgoPais: +180, coronarias: -15, paranoia: +30, mechaSocial: +15 }
  }
};

// =========================================================================
// 3. ACCIONES TÁCTICAS DEL PRESIDENTE EN GABINETE
// =========================================================================
const ACCIONES_GABINETE = {
  echar_fusible_ministro: {
    id: "echar_fusible_ministro",
    nombre: "Pedir la Renuncia al Ministro Fusible",
    subtitulo: "Inmolar al funcionario más desgastado para descomprimir la crisis",
    icono: "fa-solid fa-user-xmark",
    color: "rose",
    descripcion: "Entregar la cabeza de un ministro a la prensa y a los mercados para resetear el termómetro de desgaste público y ganar dos meses de oxígeno político.",
    efecto: "Descomprime el desgaste público pero quema tropas en el Congreso si tenía peso político propio."
  },

  cumbre_olivos_medialunas: {
    id: "cumbre_olivos_medialunas",
    nombre: "Cumbre de Olivos con Foto y Medialunas",
    subtitulo: "Encerrar a todos un domingo a las 17 hs y forzar una tregua armada",
    icono: "fa-solid fa-handshake",
    color: "amber",
    descripcion: "Encerrar a los 6 ministros en la Quinta de Olivos, servir café amargo y medialunas, y obligarlos a sacarse una foto sonriendo juntos para calmar la tapa del lunes.",
    impacto: { paranoia: -15, lealtadGeneral: +10, desgasteGeneral: -10, relato: "Foto de unidad en el quincho de Olivos. Los ministros sonríen forzadamente para las cámaras y prometen una tregua de 30 días en los medios." }
  },

  girar_atn_gobernadores: {
    id: "girar_atn_gobernadores",
    nombre: "Girar Aportes del Tesoro (ATN) a las Provincias",
    subtitulo: "Desembolsar US$ 50M para blindar los acuerdos del Ministro del Interior",
    icono: "fa-solid fa-money-bill-transfer",
    color: "emerald",
    descripcion: "Abrir la billetera discrecional de ATN para los gobernadores aliados. Desactiva la renuncia de Interior y garantiza votos para leyes clave en el Senado.",
    impacto: { reservasBCRA: -50, reservasNetasBCRA: -50, roscaGobernadores: +15, lealtadInterior: +25, relato: "Se giran fondos de emergencia a cinco gobernadores patagónicos y norteños. El Ministro del Interior archiva su carta de renuncia y el bloque del Senado queda blindado." }
  },

  carpetazo_disciplinador_side: {
    id: "carpetazo_disciplinador_side",
    nombre: "Carpetazo Disciplinador desde la SIDE",
    subtitulo: "Mandar al Señor 5 a exhibir escuchas y cuentas al ministro rebelde",
    icono: "fa-solid fa-user-secret",
    color: "purple",
    descripcion: "Usar la inteligencia del Estado para poner en caja a un ministro insubordinado mostrándole grabaciones telefónicas comprometedoras.",
    impacto: { lealtadMinistro: +30, paranoia: +15, amenazaFiltracion: +10, relato: "El Señor 5 visita al ministro rebelde en su propio despacho. Diez minutos después, el funcionario sale a ratificar su alineamiento incondicional con el Presidente." }
  }
};

// =========================================================================
// 4. DILEMAS DE GABINETE DE 4 CAMINOS
// =========================================================================
const DILEMAS_GABINETE = [
  {
    id: "dilema_gabinete_yate_mediterraneo",
    etapaBadge: "Salón Blanco • Escándalo y Fuego Amigo",
    area: "Gabinete / Ética Pública / Conurbano",
    fase: "presidente",
    titulo: "El Escándalo del Yate y la Subsecretaria Rebelde",
    descripcion: "Aparecen fotos filtradas en redes sociales de un viceministro clave de Desarrollo Social navegando en un yate de lujo en el Mediterráneo con una modelo en pleno invierno, mientras en el Conurbano los comedores comunitarios denuncian falta de entrega de alimentos secos. El viceministro es el hijo del principal cacique peronista de la Tercera Sección Electoral, quien te garantiza la paz territorial y los votos en la Legislatura.",
    explicacion: {
      queMide: "Mide si priorizás la moral republicana y la opinión pública o la protección de tu alianza territorial con los barones del Conurbano.",
      siDeAcuerdo: "Echar al funcionario de inmediato apaga el fuego mediático pero rompe el pacto con el cacique que controla la calle.",
      siEnContra: "Blindarlo salva la rosca territorial pero pulveriza tu credibilidad moral y te expone a semanas de escarnio televisivo."
    },
    opciones: [
      {
        texto: "Opción A: Echarlo de una patada por decreto antes del mediodía y pedir disculpas públicas. Frenás el sangrado en redes; el cacique corta alimentos en 40 municipios y te clava un acampe de 30.000 personas en Olivos.",
        etiqueta: "Purga Ética / Furia Territorial",
        impacto12Axes: { justicia: 85, institucionalidad: 85, pragmatismo: 20 },
        impactoSectores: { claseMedia: +20, trabajo: -25, seguridadJusticia: +10 },
        impactoMacro: { riesgoPais: -30 },
        impactoCriollo: { mechaSocial: +35, roscaGobernadores: -20 },
        impactoSalud: { paranoia: +15, coronarias: -8 },
        impactoGabinete: { ministroId: "capital_humano", lealtadDelta: -25, desgasteDelta: +30 }
      },
      {
        texto: "Opción B: Respaldarlo diciendo que 'era un viaje privado pagado con su patrimonio anterior'. Mantenés la alianza territorial; Crónica TV clava placa roja parpadeante 24 hs y tu imagen cae 8 puntos.",
        etiqueta: "Blindaje Feudal / Escarnio Público",
        impacto12Axes: { justicia: 15, institucionalidad: 20, pragmatismo: 85 },
        impactoSectores: { claseMedia: -30, trabajo: +10, estadoCiencia: -15 },
        impactoMacro: { riesgoPais: +80 },
        impactoCriollo: { mechaSocial: +10, roscaGobernadores: +15, dolarBlue: +40 },
        impactoSalud: { paranoia: +20, coronarias: -10 },
        impactoGabinete: { ministroId: "capital_humano", lealtadDelta: +20, desgasteDelta: +45 }
      },
      {
        texto: "Opción C: Mandarlo a pedir licencia por 'razones de salud' hasta que pase la tormenta. Salida tibia clásica; se descubre que sigue cobrando el sueldo y la indignación se traslada directo hacia tu persona.",
        etiqueta: "Licencia Médica / Salida Tibia",
        impacto12Axes: { justicia: 40, institucionalidad: 45, pragmatismo: 50 },
        impactoSectores: { claseMedia: -15, trabajo: -10 },
        impactoMacro: { riesgoPais: +30 },
        impactoCriollo: { mechaSocial: +15, dolarBlue: +20 },
        impactoSalud: { paranoia: +25, coronarias: -5 },
        impactoGabinete: { ministroId: "capital_humano", desgasteDelta: +20 }
      },
      {
        texto: "Opción D: Intervenir toda la secretaría con tropas de la SIDE y sacarle la caja de cuajo. Te quedás con miles de millones de pesos; desatás guerra de guerrillas interna con carpetazos que paraliza la gestión 3 meses.",
        etiqueta: "Intervención SIDE / Caja Central",
        impacto12Axes: { institucionalidad: 30, seguridad: 80, justicia: 50 },
        impactoSectores: { trabajo: -15, claseMedia: +5, seguridadJusticia: +15 },
        impactoMacro: { resultadoFiscalPBI: +0.2 },
        impactoCriollo: { mechaSocial: +20, roscaGobernadores: -15 },
        impactoSalud: { paranoia: +35, coronarias: -8 },
        impactoGabinete: { ministroId: "capital_humano", lealtadDelta: -40, eficaciaDelta: -30 }
      }
    ]
  },

  {
    id: "dilema_gabinete_choque_economia_seguridad",
    etapaBadge: "Salón Blanco • Guerra de Pasillos",
    area: "Economía vs. Seguridad / Orden Público",
    fase: "presidente",
    titulo: "El Choque entre Economía y Seguridad en la 9 de Julio",
    descripcion: "El Ministro de Economía anuncia un recorte del 50% en los subsidios al transporte. Las agrupaciones de izquierda y piqueteras convocan a un corte total del centro porteño. El Ministro de Seguridad quiere salir con hidrantes, perros y balas de goma a desalojar los puentes para mostrar orden. El Ministro del Interior te pide por favor frenar la represión porque está a punto de cerrar los votos para el presupuesto con bloques provinciales en el Congreso.",
    explicacion: {
      queMide: "Mide si privilegiás la exhibición de mano dura y despeje de calles o la muñeca política legislativa en el Congreso.",
      siDeAcuerdo: "Avalar la represión despeja el tránsito pero detona heridos en vivo y rompe el quórum del presupuesto.",
      siEnContra: "Frenar a la Policía salva la ley en el Congreso pero regala la calle, colapsa la ciudad y desata la furia del ala dura de Seguridad."
    },
    opciones: [
      {
        texto: "Opción A: Darle luz verde total a Seguridad para despejar la avenida. La 9 de Julio queda liberada en 40 minutos; 18 heridos en vivo por TV y diputados aliados del Interior votan en contra del presupuesto.",
        etiqueta: "Mano Dura / Caída del Presupuesto",
        impacto12Axes: { seguridad: 90, orden: 90, institucionalidad: 40 },
        impactoSectores: { seguridadJusticia: +25, claseMedia: +10, trabajo: -30 },
        impactoMacro: { riesgoPais: +120 },
        impactoCriollo: { mechaSocial: +30, roscaGobernadores: -25 },
        impactoSalud: { coronarias: -12, paranoia: +20 },
        impactoGabinete: { ministroId: "seguridad", lealtadDelta: +25, desgasteDelta: +35 }
      },
      {
        texto: "Opción B: Ordenar a la Policía mantenerse en las veredas y dejar marchar. Cero violencia y salvás la ley; la Ciudad colapsa 12 hs, automovilistas se agarran a piñas y Seguridad amenaza con renunciar en vivo por LN+.",
        etiqueta: "Contención Pasiva / Rebelión de Seguridad",
        impacto12Axes: { seguridad: 20, justicia: 70, pragmatismo: 75 },
        impactoSectores: { trabajo: +15, claseMedia: -30, seguridadJusticia: -25 },
        impactoMacro: { riesgoPais: -40 },
        impactoCriollo: { mechaSocial: -10, roscaGobernadores: +20 },
        impactoSalud: { paranoia: +25, coronarias: -8 },
        impactoGabinete: { ministroId: "seguridad", lealtadDelta: -35, desgasteDelta: +20 }
      },
      {
        texto: "Opción C: Convocar a los líderes de la protesta a una mesa de diálogo en Interior. Descomprimís la calle sin gases; piqueteros exigen paritarias y Economía advierte que ceder rompe el acuerdo con el FMI.",
        etiqueta: "Mesa de Diálogo / Alerta FMI",
        impacto12Axes: { institucionalidad: 70, estatismo: 65, libre_mercado: 35 },
        impactoSectores: { trabajo: +20, productivo: -15, frenteExterno: -20 },
        impactoMacro: { resultadoFiscalPBI: -0.3, inflacionMensual: +0.8 },
        impactoCriollo: { mechaSocial: -15, roscaGobernadores: +10 },
        impactoSalud: { coronarias: -5, paranoia: +10 },
        impactoGabinete: { ministroId: "economia", lealtadDelta: -25, desgasteDelta: +20 }
      },
      {
        texto: "Opción D: Hacerte el desentendido y viajar a una inauguración al interior. Esquivás el costo inmediato; la interna escala a insultos por Twitter oficial y la prensa titula 'Vacío de poder en Balcarce 50'.",
        etiqueta: "Viaje al Interior / Vacío de Poder",
        impacto12Axes: { institucionalidad: 30, pragmatismo: 40 },
        impactoSectores: { claseMedia: -20, trabajo: -15 },
        impactoMacro: { riesgoPais: +90 },
        impactoCriollo: { mechaSocial: +25, dolarBlue: +60 },
        impactoSalud: { paranoia: +30, coronarias: -10 },
        impactoGabinete: { ministroId: "jefe_gabinete", desgasteDelta: +30 }
      }
    ]
  },

  {
    id: "dilema_gabinete_operativo_clamor_estrella",
    etapaBadge: "Salón Blanco • Sombra Presidencial",
    area: "Economía / Ambición Presidencial",
    fase: "presidente",
    titulo: "El 'Operativo Clamor' del Ministro Estrella",
    descripcion: "Tu Ministro de Economía encadena dos meses de baja de inflación. El círculo rojo empresarial, la televisión y 8 gobernadores lo perfilan abiertamente como el candidato natural a Presidente para el próximo turno, ignorando por completo tu liderazgo. En un programa de prime-time, cuando le preguntan si quiere ser presidente, sonríe y dice: 'Estoy enfocado en la gestión, pero nunca hay que cerrarle la puerta al destino'.",
    explicacion: {
      queMide: "Mide cómo administrás la sombra política de un ministro exitoso: si aceptás el rol de mandatario en retirada o si lo saboteás para preservar tu centralidad.",
      siDeAcuerdo: "Ungirlo preserva la calma del mercado pero te convierte de inmediato en un 'pato rengo' al que nadie atiende el teléfono.",
      siEnContra: "Cortarle las alas reafirma tu autoridad pero arriesga una renuncia estruendosa que dispare el dólar y el pánico financiero."
    },
    opciones: [
      {
        texto: "Opción A: Felicitarlo públicamente y ungirlo como tu delfín político. Mantenés calma en los mercados; pasás a ser un 'pato rengo', los ministros dejan de atenderte a vos y se alinean directo con él.",
        etiqueta: "Delfín Político / Pato Rengo",
        impacto12Axes: { institucionalidad: 70, libre_mercado: 75, pragmatismo: 80 },
        impactoSectores: { productivo: +20, frenteExterno: +15, claseMedia: +10 },
        impactoMacro: { riesgoPais: -120, reservasNetasBCRA: +500 },
        impactoCriollo: { dolarBlue: -60, roscaGobernadores: -20 },
        impactoSalud: { paranoia: +30, coronarias: -5 },
        impactoGabinete: { ministroId: "economia", lealtadDelta: +10, pesoPolitico: "alto" }
      },
      {
        texto: "Opción B: Intervenirle el ministerio nombrándole un viceministro propio para recortarle poder. Recuperás la botonera; el ministro presenta renuncia indeclinable por celos y el dólar sube $80 en una tarde.",
        etiqueta: "Intervención de Celos / Renuncia y Corrida",
        impacto12Axes: { institucionalidad: 40, libre_mercado: 40, estatismo: 60 },
        impactoSectores: { productivo: -25, claseMedia: -20, frenteExterno: -20 },
        impactoMacro: { riesgoPais: +220, inflacionMensual: +2.5 },
        impactoCriollo: { dolarBlue: +180, mechaSocial: +20 },
        impactoSalud: { coronarias: -18, paranoia: +25 },
        impactoGabinete: { ministroId: "economia", lealtadDelta: -60, renuncia: true }
      },
      {
        texto: "Opción C: Armarle una campaña de desgaste en redes con granjas de trolls de la SIDE. Le bajás el perfil mediático; el ministro sospecha de Olivos, se corta solo y empieza a operar contra tus leyes.",
        etiqueta: "Guerrilla de Trolls / Fuego Amigo",
        impacto12Axes: { seguridad: 70, institucionalidad: 30, justicia: 30 },
        impactoSectores: { claseMedia: -10, estadoCiencia: -10 },
        impactoMacro: { riesgoPais: +50 },
        impactoCriollo: { mechaSocial: +10, roscaGobernadores: -10 },
        impactoSalud: { paranoia: +35, coronarias: -8 },
        impactoGabinete: { ministroId: "economia", lealtadDelta: -45, desgasteDelta: +30 }
      },
      {
        texto: "Opción D: Obligarlo a anunciar aumentos de tarifas antipáticos. Lo usás de escudo humano ante la clase media; el plan económico pierde credibilidad y la inflación vuelve a subir al mes siguiente.",
        etiqueta: "Escudo Humano / Desgaste Tarifario",
        impacto12Axes: { libre_mercado: 60, justicia: 35, pragmatismo: 50 },
        impactoSectores: { claseMedia: -30, trabajo: -20, productivo: +5 },
        impactoMacro: { inflacionMensual: +3.0, resultadoFiscalPBI: +0.8 },
        impactoCriollo: { mechaSocial: +25, dolarBlue: +90 },
        impactoSalud: { coronarias: -10, paranoia: +15 },
        impactoGabinete: { ministroId: "economia", desgasteDelta: +45, lealtadDelta: -20 }
      }
    ]
  }
];

// =========================================================================
// 5. DESTINOS FINALES DEL GABINETE (EPÍLOGO DE PALACIO)
// =========================================================================
const DESTINOS_GABINETE_FINAL = {
  titiritero_salon_blanco: {
    id: "titiritero_salon_blanco",
    nombre: "El Titiritero del Salón Blanco",
    icono: "fa-solid fa-chess-king",
    color: "amber",
    subtitulo: "Control férreo de las internas y gabinete disciplinado hasta el final",
    relato: "Lograste lo que pocos presidentes consiguieron: tus ministros se odiaban a muerte pero ninguno se animó a sacar los pies del plato. Manejaste la caja con pulso de cirujano, sacrificaste fusibles en el momento exacto y mantuviste la autoridad intacta hasta el último día de tu mandato."
  },

  rehen_ministros_pato_rengo: {
    id: "rehen_ministros_pato_rengo",
    nombre: "El Rehén de los Ministros (El Pato Rengo)",
    icono: "fa-solid fa-crown",
    color: "rose",
    subtitulo: "Gabinete insubordinado que te arrebató la botonera del poder",
    relato: "Tus ministros construyeron sus propios proyectos presidenciales a costa de tu espalda. En el segundo año de mandato ya nadie te consultaba nada; los gobernadores cerraban directo con Interior y el FMI hablaba a solas con Economía. Terminaste como un espectador protocolar en el Salón de los Bustos."
  },

  cementerio_fusibles: {
    id: "cementerio_fusibles",
    nombre: "El Cementerio de Fusibles",
    icono: "fa-solid fa-skull-crossbones",
    color: "slate",
    subtitulo: "Récord histórico de renuncias, cartas incendiarias y purgas",
    relato: "Echaste a más ministros que cualquier presidente desde el regreso de la democracia. Cada corrida bancaria o cacerolazo te costaba una cabeza ministerial. Te quedaste sin cuadros técnicos leales, nadie quería agarrar una cartera en llamas y las cartas de 8 carillas en Twitter se convirtieron en el folclore de tu gobierno."
  },

  gobierno_de_coalicion_armonica: {
    id: "gobierno_de_coalicion_armonica",
    nombre: "El Equilibrista de la Coalición",
    icono: "fa-solid fa-scale-balanced",
    color: "emerald",
    subtitulo: "Convivencia pragmática y reparto de cajas sin estallidos",
    relato: "No fuiste un líder autoritario ni te dejaste pasar por encima. Repartiste ATN cuando la mecha subía, dejaste que Seguridad tuviera sus cámaras sin pasarse de la raya y contuviste a Economía con metas cumplidas. Un gabinete heterogéneo que sobrevivió al barro criollo."
  }
};

// =========================================================================
// 6. CLASE SISTEMA DE GABINETE
// =========================================================================
class SistemaGabinete {
  constructor() {
    this.ministros = {};
    for (const k in CARTERAS_GABINETE) {
      const c = CARTERAS_GABINETE[k];
      this.ministros[k] = {
        ...c,
        lealtad: c.lealtadBase,
        desgaste: c.desgasteBase,
        eficacia: c.eficaciaBase,
        pesoPolitico: c.pesoPolitico,
        fusibleQuemado: false,
        renunciaPresentada: false
      };
    }

    this.renunciasActivas = [];
    this.incidentesHistorial = [
      {
        id: "inc_inicial",
        titulo: "Disputa por Fondos de Obras",
        hora: "09:30 AM",
        texto: "Economía frenó la firma de transferencias a provincias; el Ministro del Interior amenaza con faltar a la reunión de gabinete."
      }
    ];
    this.fusiblesQuemadosCount = 0;
  }

  agregarIncidente(titulo, texto) {
    this.incidentesHistorial.unshift({
      id: "inc_" + Date.now(),
      titulo,
      hora: new Date().toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" }),
      texto
    });
    if (this.incidentesHistorial.length > 8) {
      this.incidentesHistorial.pop();
    }
  }

  ejecutarAccion(accionId, payload = {}, motor = null) {
    const accion = ACCIONES_GABINETE[accionId];
    if (!accion) return { exito: false, mensaje: "Acción no encontrada." };

    if (accionId === "echar_fusible_ministro") {
      const minId = payload.ministroId || "economia";
      const m = this.ministros[minId];
      if (!m) return { exito: false, mensaje: "Ministro no encontrado." };

      this.fusiblesQuemadosCount++;
      const exTitular = m.titular;
      m.titular = "Interino a Designar";
      m.desgaste = 10;
      m.lealtad = 80;
      m.eficacia = 50;
      m.fusibleQuemado = true;
      m.renunciaPresentada = false;
      this.renunciasActivas = this.renunciasActivas.filter(id => id !== minId);

      if (motor) {
        if (motor.termometroCriollo) {
          motor.termometroCriollo.mechaSocial = Math.max(0, motor.termometroCriollo.mechaSocial - 15);
          if (m.pesoPolitico === "alto") {
            motor.termometroCriollo.roscaGobernadores = Math.max(0, motor.termometroCriollo.roscaGobernadores - 20);
          }
        }
        if (motor.macroeconomia && minId === "economia") {
          motor.macroeconomia.riesgoPais = Math.max(400, motor.macroeconomia.riesgoPais - 80);
        }
        if (motor.saludSupervivencia) {
          motor.saludSupervivencia.paranoia = Math.min(100, motor.saludSupervivencia.paranoia + 10);
        }
      }

      const relato = `¡PURGA MINISTERIAL! Le pediste la renuncia a ${exTitular} al frente de ${m.cargo}. Los canales de noticias cortan transmisión con placa roja. La mecha social baja temporalmente, pero los sectores afines a su figura prometen revancha en el Congreso.`;
      this.agregarIncidente("Renuncia Exigida", relato);

      return {
        exito: true,
        accion,
        ministro: m,
        relato
      };
    }

    if (accionId === "cumbre_olivos_medialunas") {
      for (const k in this.ministros) {
        this.ministros[k].lealtad = Math.min(100, this.ministros[k].lealtad + 10);
        this.ministros[k].desgaste = Math.max(0, this.ministros[k].desgaste - 10);
      }
      if (motor && motor.saludSupervivencia) {
        motor.saludSupervivencia.paranoia = Math.max(0, motor.saludSupervivencia.paranoia - 15);
      }
      const relato = accion.impacto.relato;
      this.agregarIncidente("Cumbre de Olivos", relato);
      return { exito: true, accion, relato };
    }

    if (accionId === "girar_atn_gobernadores") {
      if (this.ministros.interior) {
        this.ministros.interior.lealtad = Math.min(100, this.ministros.interior.lealtad + 25);
        this.ministros.interior.renunciaPresentada = false;
        this.renunciasActivas = this.renunciasActivas.filter(id => id !== "interior");
      }
      if (motor) {
        if (motor.termometroCriollo) {
          motor.termometroCriollo.reservasBCRA = Math.max(0, motor.termometroCriollo.reservasBCRA - 50);
          motor.termometroCriollo.roscaGobernadores = Math.min(100, motor.termometroCriollo.roscaGobernadores + 15);
        }
        if (motor.macroeconomia) {
          motor.macroeconomia.reservasNetasBCRA -= 50;
        }
      }
      const relato = accion.impacto.relato;
      this.agregarIncidente("Giro de ATN", relato);
      return { exito: true, accion, relato };
    }

    if (accionId === "carpetazo_disciplinador_side") {
      const minId = payload.ministroId || "interior";
      const m = this.ministros[minId];
      if (m) {
        m.lealtad = Math.min(100, m.lealtad + 30);
      }
      if (motor && motor.saludSupervivencia) {
        motor.saludSupervivencia.paranoia = Math.min(100, motor.saludSupervivencia.paranoia + 15);
      }
      if (motor && motor.sistemaSIDE) {
        motor.sistemaSIDE.amenazaFiltracion = Math.min(100, motor.sistemaSIDE.amenazaFiltracion + 10);
      }
      const relato = accion.impacto.relato;
      this.agregarIncidente("Operación de Inteligencia", relato);
      return { exito: true, accion, relato };
    }

    return { exito: false, mensaje: "Acción no reconocida." };
  }

  resolverRenuncia(ministroId, resolucion = "rechazar", motor = null) {
    const m = this.ministros[ministroId];
    if (!m) return { exito: false, mensaje: "Ministro no encontrado." };

    if (resolucion === "aceptar") {
      return this.ejecutarAccion("echar_fusible_ministro", { ministroId }, motor);
    } else if (resolucion === "rechazar") {
      m.renunciaPresentada = false;
      m.lealtad = Math.min(100, m.lealtad + 15);
      m.desgaste = Math.min(100, m.desgaste + 15);
      this.renunciasActivas = this.renunciasActivas.filter(id => id !== ministroId);
      const relato = `Ratificaste a ${m.titular} al frente de ${m.cargo}. El funcionario sale empoderado pero sus rivales internos encienden los teléfonos de los periodistas.`;
      this.agregarIncidente("Renuncia Rechazada", relato);
      return { exito: true, ministro: m, relato };
    } else {
      // suspender en análisis
      m.desgaste = Math.min(100, m.desgaste + 20);
      if (motor && motor.saludSupervivencia) {
        motor.saludSupervivencia.paranoia = Math.min(100, motor.saludSupervivencia.paranoia + 15);
      }
      const relato = `Dejaste la renuncia de ${m.titular} 'en análisis'. Los medios titulan 'Gabinete en crisis total y parálisis ejecutiva'.`;
      this.agregarIncidente("Renuncia en Suspenso", relato);
      return { exito: true, ministro: m, relato };
    }
  }

  evaluarGuerraPasillo(motor = null) {
    const alertas = [];
    for (const k in this.ministros) {
      const m = this.ministros[k];
      // Lealtad baja (<25%): Filtración o renuncia
      if (m.lealtad < 25 && !m.renunciaPresentada && !this.renunciasActivas.includes(k)) {
        m.renunciaPresentada = true;
        this.renunciasActivas.push(k);
        const relato = `¡RENUNCIA A DISPOSICIÓN! ${m.titular} (${m.cargo}) presentó carta de renuncia a consideración exigiendo la salida de sus rivales.`;
        alertas.push({ tipo: "renuncia", ministroId: k, relato });
        this.agregarIncidente("Alerta de Renuncia", relato);
      }
      // Desgaste alto (>85%): Desgaste social y radioactividad
      if (m.desgaste > 85) {
        if (motor && motor.termometroCriollo) {
          motor.termometroCriollo.mechaSocial = Math.min(100, motor.termometroCriollo.mechaSocial + 2);
        }
      }
    }
    return alertas;
  }

  diagnosticarDestinoFinal(motor = null) {
    let sumaLealtad = 0;
    let sumaDesgaste = 0;
    let count = 0;

    for (const k in this.ministros) {
      sumaLealtad += this.ministros[k].lealtad;
      sumaDesgaste += this.ministros[k].desgaste;
      count++;
    }

    const promedioLealtad = Math.round(sumaLealtad / count);
    const promedioDesgaste = Math.round(sumaDesgaste / count);

    // Caso 1: Cementerio de Fusibles
    if (this.fusiblesQuemadosCount >= 3) {
      return DESTINOS_GABINETE_FINAL.cementerio_fusibles;
    }

    // Caso 2: Pato Rengo (los ministros le coparon el gobierno)
    if (promedioLealtad < 40 || (this.ministros.economia && this.ministros.economia.pesoPolitico === "alto" && this.ministros.economia.lealtad < 35)) {
      return DESTINOS_GABINETE_FINAL.rehen_ministros_pato_rengo;
    }

    // Caso 3: Titiritero del Salón Blanco
    if (promedioLealtad >= 70 && promedioDesgaste < 60) {
      return DESTINOS_GABINETE_FINAL.titiritero_salon_blanco;
    }

    // Caso 4: Coalición Armónica
    return DESTINOS_GABINETE_FINAL.gobierno_de_coalicion_armonica;
  }

  obtenerResumen() {
    return {
      ministros: { ...this.ministros },
      renunciasActivas: [...this.renunciasActivas],
      fusiblesQuemadosCount: this.fusiblesQuemadosCount,
      incidentesCount: this.incidentesHistorial.length
    };
  }
}

// Compatibilidad de exportación dual
if (typeof window !== "undefined") {
  window.CARTERAS_GABINETE = CARTERAS_GABINETE;
  window.INCIDENTES_PASILLO = INCIDENTES_PASILLO;
  window.ACCIONES_GABINETE = ACCIONES_GABINETE;
  window.DILEMAS_GABINETE = DILEMAS_GABINETE;
  window.DESTINOS_GABINETE_FINAL = DESTINOS_GABINETE_FINAL;
  window.SistemaGabinete = SistemaGabinete;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    CARTERAS_GABINETE,
    INCIDENTES_PASILLO,
    ACCIONES_GABINETE,
    DILEMAS_GABINETE,
    DESTINOS_GABINETE_FINAL,
    SistemaGabinete
  };
}
