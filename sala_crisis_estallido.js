/**
 * SALA_CRISIS_ESTALLIDO.JS
 * =============================================================================
 * Simulación de Sala de Crisis, Estallido Social, Escala del Desborde,
 * Fauna de la Emergencia, Estado de Sitio (Art. 23 CN) y Protocolo de Helicóptero.
 * Subsuelo de la Casa Rosada y Mapa del AMBA en Llamas.
 * =============================================================================
 */

// 1. LA ESCALA DEL DESBORDE: LAS 4 FASES DE LA MECHA
const FASES_MECHA_ESTALLIDO = {
  fase_rumor: {
    id: "fase_rumor",
    nombre: "Fase 1: El Rumor y la Psicosis Digital",
    subtitulo: "Psicosis en redes y pánico en los almacenes",
    mechaMin: 50,
    mechaMax: 74,
    nivel: 1,
    icono: "fa-solid fa-mobile-screen-button",
    color: "amber",
    detonante: "Grupos de WhatsApp y canales anónimos de Telegram difunden audios de voz con tono de pánico: 'Chicas, cierren los negocios que vienen 200 en moto bajando por la avenida'.",
    consecuencias: "Los comerciantes bajan las persianas a las 14:00 hs por prevención; las líneas de colectivos reducen frecuencias por miedo a piedrazos y la economía real se frena en seco sin que todavía haya caído una sola piedra.",
    alertaSonora: "Notificaciones incesantes de WhatsApp y persianas de chapa cerrándose a los golpes."
  },

  fase_saqueos: {
    id: "fase_saqueos",
    nombre: "Fase 2: Saqueos Focalizados y Ataques Piraña",
    subtitulo: "Góndolas vaciadas, fuego en accesos y comerciantes armados",
    mechaMin: 75,
    mechaMax: 84,
    nivel: 2,
    icono: "fa-solid fa-fire",
    color: "orange",
    detonante: "Bandas organizadas en camionetas y motos revientan las persianas metálicas de supermercados chinos, distribuidoras y cadenas de electrodomésticos en Moreno, La Matanza, Gran Rosario y Córdoba.",
    consecuencias: "Los comerciantes defienden sus locales con armas cortas y escopetas de caza desde las terrazas. Si un tiro mata a un manifestante o vecino, el conflicto pasa de robo a pueblada comunitaria en minutos.",
    alertaSonora: "Sirenas lejanas de bomberos, disparos aislados de escopeta y humo negro de neumáticos sobre la autopista."
  },

  fase_cacerolazo: {
    id: "fase_cacerolazo",
    nombre: "Fase 3: El Cacerolazo de Clase Media",
    subtitulo: "Furia urbana en esquinas tradicionales y asedio a Olivos",
    mechaMin: 85,
    mechaMax: 94,
    nivel: 3,
    icono: "fa-solid fa-bell",
    color: "rose",
    detonante: "A las 21:30 hs, tras los noticieros de televisión, empieza un repiqueteo seco de cucharas contra cacerolas Essen en los balcones de Caballito, Belgrano, Recoleta, Mar del Plata y Rosario.",
    consecuencias: "En 40 minutos la gente baja a la calle, corta avenidas con banderas argentinas y reposeras, y marcha a la Quinta de Olivos y el Congreso. La clase media no tiene jefes con quién negociar ni le teme al gas lacrimógeno.",
    alertaSonora: "Metal contra metal ensordecedor, bocinazos al unísono y cánticos exigiendo renuncias masivas."
  },

  fase_convergencia: {
    id: "fase_convergencia",
    nombre: "Fase 4: La Convergencia Total",
    subtitulo: "Piquetes, cacerolas y barras en Plaza de Mayo: asedio total",
    mechaMin: 95,
    mechaMax: 100,
    nivel: 4,
    icono: "fa-solid fa-triangle-exclamation",
    color: "red",
    detonante: "El peor escenario de la historia argentina: la protesta de la clase media se une en Plaza de Mayo con las columnas de los desocupados, partidos de izquierda y las barras bravas de la zona sur.",
    consecuencias: "150.000 personas rodean las vallas de seguridad de la Casa Rosada. La infantería se queda sin postas de goma y los gases lacrimógenos empiezan a meterse por los conductos de ventilación del despacho presidencial.",
    alertaSonora: "Detonaciones continuas de perdigones de goma, estruendo de bombas de estruendo y el rugido de turbinas en el helipuerto."
  }
};

// 2. LA FAUNA DE LA EMERGENCIA (5 PERSONAJES CLAVE)
const FAUNA_EMERGENCIA = {
  supermercadista_terraza: {
    id: "supermercadista_terraza",
    nombre: "El Supermercadista en la Terraza",
    rol: "Dueño de autoservicio atrincherado",
    icono: "fa-solid fa-person-rifle",
    color: "rose",
    ubicacion: "Cuartel V, Moreno / Laferrere",
    conducta: "Pasa la noche sobre la losa del techo con su familia y empleados, empuñando una escopeta 12/70 y dos pistolas 9mm para evitar que le revienten el portón.",
    palanca: "Si mata a un asaltante, la televisión transmite la muerte en vivo; si la policía no llega a rescatarlo, su familia es linchada y su local queda reducido a cenizas.",
    exigencia: "Presencia inmediata de un móvil policial o Gendarmería antes de que abra fuego sobre la multitud.",
    cita: "'Yo trabajé 30 años sin domingos. El primero que pase la reja no sale caminando'."
  },

  intendente_zona_liberada: {
    id: "intendente_zona_liberada",
    nombre: "El Intendente 'Zona Liberada'",
    rol: "Cacique territorial del Conurbano",
    icono: "fa-solid fa-user-secret",
    color: "amber",
    ubicacion: "Municipio de la Tercera Sección Electoral",
    conducta: "Apaga los monitores del Centro de Monitoreo de cámaras de seguridad y le da franco preventivo a la patrulla de prevención comunitaria.",
    palanca: "Mensaje cifrado a la Casa Rosada: 'Presidente, no puedo contener a la gente sin 5.000 millones de pesos en efectivo para bolsones de comida y contratos de urgencia ya'.",
    exigencia: "Giro discrecional de fondos del Tesoro Nacional sin rendición previa ante el Tribunal de Cuentas.",
    cita: "'Si no me bajan la plata antes de las seis de la tarde, la gente camina sola hacia la autopista'."
  },

  senora_balcon_cacerolera: {
    id: "senora_balcon_cacerolera",
    nombre: "La Señora del Balcón (La Cacerolera Furiosa)",
    rol: "Indignación vecinal de Clase Media",
    icono: "fa-solid fa-utensils",
    color: "sky",
    ubicacion: "Avenida Santa Fe y Callao / Acoyte y Rivadavia",
    conducta: "Profesional jubilada que jamás pisó un comité ni cobró un plan social. Golpea una sartén oxidada con un cucharón de madera en la esquina de su casa.",
    palanca: "Es inmune a las acusaciones de 'golpismo rentado'. Si le mandás a la policía a dispersarla, los canales de noticias transmiten un escándalo moral que te voltea tres ministros.",
    exigencia: "Frenar tarifazos, bajar la inflación y que renuncien los funcionarios cuestionados.",
    cita: "'¡A mí nadie me trajo en micro, vine con mi propia cacerola y de acá no me saca nadie!'"
  },

  jefe_policia_acuartelado: {
    id: "jefe_policia_acuartelado",
    nombre: "El Jefe de Policía Acuartelado",
    rol: "Comisario General en Rebeldía Salarial",
    icono: "fa-solid fa-shield-halved",
    color: "blue",
    ubicacion: "Comisaría 1ª y Jefatura Departamental",
    conducta: "Aprovecha la conmoción para amotinar suboficiales en el patio de la central, haciendo sonar las sirenas de 80 patrulleros al unísono.",
    palanca: "'Los móviles no tienen nafta y el personal está sobrepasado'. Exige duplicar el sueldo de los agentes de uniforme antes de salir a despejar las calles.",
    exigencia: "Firma urgente de un decreto de recomposición salarial y la renuncia del Ministro de Seguridad.",
    cita: "'No vamos a salir a poner el pecho contra los vecinos por dos mangos con cincuenta'."
  },

  camionero_alimentos: {
    id: "camionero_alimentos",
    nombre: "El Camionero de los Alimentos",
    rol: "Chofer de Semirremolque Varado",
    icono: "fa-solid fa-truck-moving",
    color: "emerald",
    ubicacion: "Rotonda de San Justo / Ruta Nacional 3",
    conducta: "Conduce un camión con acoplado cargado con lácteos y harina, detenido en una barricada de neumáticos en llamas rodeada por 200 personas con palos.",
    palanca: "Si le abren las compuertas y le saquean la carga, el gremio de Camioneros paraliza el transporte de combustible y caudales en todo el país.",
    exigencia: "Despliegue de un pelotón de Gendarmería Nacional para escoltar el camión y garantizar el corredor logístico.",
    cita: "'Si tocan una caja de mercadería, mañana no entra un litro de nafta a ninguna estación del país'."
  }
};

// 3. DECISIONES DE EMERGENCIA DE LA SALA DE CRISIS (SUBSUELO DE LA ROSADA)
const DECISIONES_SALA_CRISIS = {
  boton_rojo_estado_sitio: {
    id: "boton_rojo_estado_sitio",
    nombre: "Firmar DNU de Estado de Sitio (Art. 23 CN)",
    icono: "fa-solid fa-skull-crossbones",
    color: "rose",
    descripcion: "Suspender las garantías constitucionales en todo el territorio nacional, imponer toque de queda nocturno a las 22:00 hs y autorizar detenciones preventivas directas.",
    riesgo: "Crítico: Si la sociedad busca orden, frena el caos con bota militar; si está furiosa por el ajuste, detona el Bumerán 2001 y la caída del gobierno."
  },

  alivio_social_bolsones: {
    id: "alivio_social_bolsones",
    nombre: "Girar $20.000 M de Emergencia para Bolsones y Comedores",
    icono: "fa-solid fa-box-open",
    color: "emerald",
    costoMillones: 20000,
    descripcion: "Compra directa a distribuidoras y reparto urgente de alimentos secos, leche y carne a comedores comunitarios del conurbano y grandes ciudades.",
    impacto: "Baja la mecha social 12 puntos y calma los saqueos piraña en almacenes, pero desgasta el déficit fiscal y los mercados desconfían."
  },

  relevo_ministro_seguridad: {
    id: "relevo_ministro_seguridad",
    nombre: "Pedirle la Renuncia Inmediata al Ministro de Seguridad",
    icono: "fa-solid fa-user-xmark",
    color: "amber",
    descripcion: "Entregar al responsable de la represión como fusible político para calmar a los organismos de derechos humanos y a la cúpula policial amotinada.",
    impacto: "Descomprime la tensión mediática y frena el motín policial a cambio de un relevo de mando, pero exhibe debilidad ante la oposición."
  },

  cadena_nacional_paz: {
    id: "cadena_nacional_paz",
    nombre: "Hablar al País en Cadena Nacional de Concordia",
    icono: "fa-solid fa-microphone-lines",
    color: "sky",
    descripcion: "Transmitir en vivo desde el sillón de Rivadavia a las 21:00 hs. Reconocer la angustia de los precios, convocar a una mesa de diálogo y pedir prudencia.",
    impacto: "Si el blindaje mediático es alto, aplaca a la clase media indecisa; si la mecha supera el 85%, el discurso es tapado por cacerolazos históricos."
  },

  girar_atn_intendentes: {
    id: "girar_atn_intendentes",
    nombre: "Ceder al Apriete: Girar $5.000 M a los Intendentes del Conurbano",
    icono: "fa-solid fa-hand-holding-dollar",
    color: "purple",
    costoMillones: 5000,
    descripcion: "Enviar Aportes del Tesoro Nacional (ATN) sin control a los caciques del Gran Buenos Aires para que reactiven patrullas y contengan a sus punteros.",
    impacto: "Apaga 8 focos de saqueo en el conurbano en cuestión de horas, pero quedás hipotecado políticamente ante el aparato territorial peronista."
  },

  reabastecer_municion_gendarmeria: {
    id: "reabastecer_municion_gendarmeria",
    nombre: "Reabastecer Cartuchos Antidisturbios de Fuerzas Federales",
    icono: "fa-solid fa-truck-ramp-box",
    color: "indigo",
    costoMillones: 3500,
    descripcion: "Envío aéreo express de cartuchos de goma, gases lacrimógenos y camiones hidrantes para reforzar el cordón defensivo de Plaza de Mayo y el Congreso.",
    impacto: "Eleva la munición antidisturbios al 80% y evita el desborde cuerpo a cuerpo, pero eleva el riesgo de incidentes con heridos de gravedad."
  }
};

// 4. LOS TRES DILEMAS EXTREMOS DE SALA DE CRISIS (4 CAMINOS)
const DILEMAS_SALA_CRISIS = [
  {
    id: "dilema_crisis_saqueo_moreno",
    area: "emergencia_social",
    etapaBadge: "Sala de Crisis • Subsuelo de la Rosada",
    titulo: "El Saqueo al Hipermercado Mayorista en Moreno",
    descripcion: "Unas 400 personas con las caras tapadas derriban el portón trasero de un híper mayorista en Moreno. Hay incendios de tarimas en la playa de estacionamiento y disparos cruzados entre los vigiladores privados y los atacantes. Adentro del predio quedan 30 cajeras y clientes encerrados en las cámaras frigoríficas pidiendo auxilio desesperado por videollamada a canales de noticias.",
    explicacion: "El intendente local no atiende el teléfono y la comisaría de la zona informa que sus 4 móviles están 'averiados'. Cada minuto que pasa sin orden presidencial acerca el local a una tragedia con muertos en vivo.",
    opciones: [
      {
        id: "opt_moreno_gendarmeria_choque",
        texto: "Ordenar a la Gendarmería Nacional entrar con gases y postas de goma a recuperar el predio",
        impacto12: { ordenPublico: 18, estadoDeDerecho: -10, soberaniaNacional: 5 },
        impactoCriollo: { mechaSocial: -10 },
        impactoSalud: { seguridad: 10, paranoia: 15 },
        impactoCrisis: {
          municionDelta: -25,
          focosDelta: -3,
          muertosCivilesDelta: 1,
          relato: "La Gendarmería recuperó el predio en 25 minutos y rescató a las 30 cajeras. Sin embargo, hubo disparos cruzados con 4 heridos de bala no identificada y la oposición presentó una denuncia penal por represión salvaje."
        }
      },
      {
        id: "opt_moreno_cordon_perimetral",
        texto: "Ordenar un cordón perimetral externo y dejar que vacíen las góndolas sin intervenir adentro",
        impacto12: { ordenPublico: -15, estadoDeDerecho: -12, mercadoLibre: -10 },
        impactoCriollo: { mechaSocial: 8 },
        impactoMacro: { riesgoPais: 70 },
        impactoCrisis: {
          focosDelta: 2,
          relato: "Evitaste muertos en el local y los rehenes salieron ilesos una vez terminado el asedio. Pero las cámaras de televisión transmitieron en vivo cómo se llevaban electrodomésticos en changuitos y la sensación de anarquía liquidó la autoridad oficial."
        }
      },
      {
        id: "opt_moreno_compra_urgencia_víveres",
        texto: "Autorizar al Ministerio de Capital Humano a comprar de urgencia toda la mercadería del local y repartirla",
        impacto12: { estatismo: 15, pragmatismo: 12, mercadoLibre: -15 },
        impactoMacro: { deficitFiscalPct: 0.3, reservasNetasBCRA: -150 },
        impactoCriollo: { mechaSocial: -14 },
        impactoCrisis: {
          fondosDelta: 8000,
          relato: "Transformaste el saqueo en una entrega comunitaria ordenada de víveres. La tensión en Moreno bajó al instante, pero los intendentes vecinos te acusaron de premiar la violencia y al día siguiente tuviste asedios en 15 mayoristas más."
        }
      },
      {
        id: "opt_moreno_negociar_punteros",
        texto: "Mandar a la Policía Bonaerense a negociar con los punteros que comandan el ataque",
        impacto12: { pragmatismo: 15, republicanismo: -15, ordenPublico: -8 },
        impactoCriollo: { roscaGobernadores: 10, mechaSocial: -6 },
        impactoCrisis: {
          fondosDelta: 3000,
          focosDelta: -1,
          relato: "Levantaste el asedio entregando vales de combustible y bolsones a tres referentes barriales. Salvaste el local, pero quedaste como rehén extorsivo del aparato punteril para el resto de la crisis."
        }
      }
    ]
  },

  {
    id: "dilema_crisis_asedio_olivos",
    area: "emergencia_social",
    etapaBadge: "Sala de Crisis • Subsuelo de la Rosada",
    titulo: "El Asedio a Olivos a la Medianoche",
    descripcion: "Unas 20.000 personas con cacerolas, pitos y carteles cortan la Avenida Maipú frente a la Quinta Presidencial de Olivos. Derriban el primer vallado de contención sobre la vereda y empiezan a golpear el histórico portón principal verde de hierro con palos y adoquines, exigiendo tu renuncia a los gritos.",
    explicacion: "En el interior del complejo, la guardia de Granaderos a Caballo se parapeta detrás de los árboles y la Casa Militar tiene encendidas las luces de la pista de aterrizaje del helicóptero presidencial.",
    opciones: [
      {
        id: "opt_olivos_megafono_cara_a_cara",
        texto: "Salir en persona al portón con un megáfono a hablar cara a cara con la multitud",
        impacto12: { corajeTemerario: 25, liderazgoDirecto: 20, institucionalidad: -5 },
        impactoSalud: { coronarias: -8, paranoia: -10, seguridad: -15 },
        impactoCriollo: { mechaSocial: -15 },
        impactoCrisis: {
          relato: "Gesto de coraje temerario que congeló la agresión por varios minutos. Escuchaste los insultos de frente, diste la mano a varios vecinos y la masa empezó a desconcentrar, aunque te ligaste un encendedor que te cortó la ceja izquierda."
        }
      },
      {
        id: "opt_olivos_hidrantes_gases",
        texto: "Ordenar a la Guardia Presidencial disparar camiones hidrantes con agua química y gases",
        impacto12: { ordenPublico: 18, represionEstatal: 20, estadoDeDerecho: -10 },
        impactoSalud: { seguridad: 15, paranoia: 15 },
        impactoCriollo: { mechaSocial: 12 },
        impactoCrisis: {
          focosDelta: 3,
          municionDelta: -15,
          relato: "Dispersaste la avenida en 10 minutos. Los manifestantes se replegaron rompiendo vidrieras de bancos en Vicente López y los canales de televisión titularon: 'Gases lacrimógenos en Olivos contra familias y jubilados'."
        }
      },
      {
        id: "opt_olivos_evacuacion_helicoptero",
        texto: "Evacuar la Quinta de urgencia en el helicóptero presidencial hacia la Casa Rosada",
        impacto12: { cobardiaEstrategica: 20, supervivencia: 25, ordenPublico: -20 },
        impactoSalud: { seguridad: 25, paranoia: 25, coronarias: -12 },
        impactoCriollo: { mechaSocial: 20 },
        impactoCrisis: {
          protocoloForzado: "despegue_evacuacion",
          relato: "Garantizaste tu integridad física inmediata. Pero el despegue nocturno fue grabado por miles de teléfonos celulares, se viralizó en minutos como 'LA FUGA EN HELICÓPTERO' y la renuncia empezó a ser exigida por todos los bloques parlamentarios."
        }
      },
      {
        id: "opt_olivos_apagar_luces_silencio",
        texto: "Apagar todas las luces del complejo, no responder y dejar que golpeen las rejas hasta que se cansen",
        impacto12: { tibieza: 15, pasividad: 20, autoridad: -20 },
        impactoMacro: { riesgoPais: 110 },
        impactoSalud: { paranoia: 20, coronarias: -6 },
        impactoCriollo: { mechaSocial: 5 },
        impactoCrisis: {
          relato: "Evitaste el choque violento directo. Sin embargo, la imagen de la residencia presidencial a oscuras mientras retumbaban las cacerolas transmitió un vacío de poder absoluto y los mercados abrieron al día siguiente con derrumbe total."
        }
      }
    ]
  },

  {
    id: "dilema_crisis_motin_policial",
    area: "emergencia_social",
    etapaBadge: "Sala de Crisis • Subsuelo de la Rosada",
    titulo: "El Motín Policial de la Comisaría 1ª",
    descripcion: "En medio de la ola de saqueos y cacerolazos, 1.200 suboficiales de la policía provincial se acuartelan en la central de policía, hacen sonar las sirenas de decenas de patrulleros al unísono y se niegan a salir a la calle si no se triplica el valor del servicio adicional y se expulsa al Ministro de Seguridad de inmediato.",
    explicacion: "Sin la policía en las esquinas, 4 millones de personas en los cordones urbanos quedan desamparadas ante bandas armadas que ya circulan en camiones por las arterias comerciales.",
    opciones: [
      {
        id: "opt_motin_ceder_aumento_echar_ministro",
        texto: "Ceder al reclamo corporativo, firmar el aumento salarial por decreto y echar al Ministro de Seguridad",
        impacto12: { corporativismoPolicial: 20, pragmatismo: 15, autoridad: -15 },
        impactoMacro: { deficitFiscalPct: 0.4 },
        impactoCriollo: { mechaSocial: -8 },
        impactoCrisis: {
          focosDelta: -5,
          relato: "Los policías prendieron las balizas y salieron a patrullar de inmediato, pacificando las zonas calientes. Pero al día siguiente los gremios de salud, docentes y judiciales pararon el país exigiendo exactamente el mismo 150% de aumento."
        }
      },
      {
        id: "opt_motin_desarmar_con_gendarmeria",
        texto: "Mandar a la Gendarmería Nacional a rodear la central y desarmar a los policías amotinados",
        impacto12: { autoridadCivil: 25, ordenPublico: 10, riesgoGuerraInterna: 25 },
        impactoSalud: { paranoia: 25, coronarias: -10 },
        impactoCrisis: {
          muertosCivilesDelta: 2,
          municionDelta: -30,
          relato: "Reafirmaste la autoridad del poder civil sobre las fuerzas armadas. Sin embargo, se desató un tiroteo en la puerta de la departamental con bajas entre uniformados que puso al país al borde de una guerra civil armada."
        }
      },
      {
        id: "opt_motin_exoneracion_masiva",
        texto: "Declarar la exoneración masiva y baja deshonrosa de todos los policías amotinados",
        impacto12: { purgaInstitucional: 25, republicanismo: 15, ordenPublico: -25 },
        impactoCriollo: { mechaSocial: 18 },
        impactoCrisis: {
          focosDelta: 6,
          relato: "Castigaste la extorsión policial con severidad republicana. El costo fue atroz: dejaste 4 millones de habitantes en zona completamente liberada durante 48 horas mientras los delincuentes desvalijaban cuadras enteras sin resistencia."
        }
      },
      {
        id: "opt_motin_bono_parche_dialogo",
        texto: "Prometer una mesa de diálogo a 72 horas con un bono transitorio en efectivo no remunerativo",
        impacto12: { parcheCriollo: 20, tibieza: 15, ordenPublico: -5 },
        impactoMacro: { reservasNetasBCRA: -80 },
        impactoCriollo: { mechaSocial: 2 },
        impactoCrisis: {
          relato: "Parche clásico argentino para ganar tiempo. La policía salió a patrullar a desgano, mirando para otro lado ante incidentes menores, y la mecha social continuó al rojo vivo esperando el vencimiento del plazo."
        }
      }
    ]
  }
];

// 5. DESTINOS FINALES DEL ESTALLIDO SOCIAL
const DESTINOS_CRISIS_FINAL = {
  paz_social_republicana: {
    id: "paz_social_republicana",
    nombre: "Pacificación Institucional & Salida Democrática",
    subtitulo: "La tormenta fue contenida sin estado de sitio ni sangre en las calles",
    color: "emerald",
    icono: "fa-solid fa-dove",
    relato: "Lograste apagar la mecha antes del punto de no retorno. Los focos de saqueo fueron contenidos con auxilio alimentario veloz y la clase media guardó las cacerolas tras acuerdos de estabilización. Tu autoridad quedó magullada por la tensión, pero la Casa Rosada no fue vulnerada y el helicóptero presidencial nunca tuvo que encender sus motores."
  },

  estado_de_sitio_autoritario: {
    id: "estado_de_sitio_autoritario",
    nombre: "El Freno de Hierro: Orden Marcial y Resaca Judicial",
    subtitulo: "La paz de los cementerios bajo el Artículo 23 de la Constitución",
    color: "amber",
    icono: "fa-solid fa-shield-halved",
    relato: "Apretaste el botón rojo y las Fuerzas Federales barrieron las avenidas a culatazos limpios. El toque de queda a las 22:00 hs congeló los saqueos, pero a un costo democrático brutal: miles de arrestos arbitrarios, comisarías colapsadas y una seguidilla de denuncias por privación ilegítima de la libertad que te esperan en los juzgados de Comodoro Py apenas dejes el sillón de Rivadavia."
  },

  estallido_convergente_helicoptero: {
    id: "estallido_convergente_helicoptero",
    nombre: "La Evacuación por Terraza: El Síndrome 2001",
    subtitulo: "El despegue del Sikorsky H-01 entre columnas de humo",
    color: "rose",
    icono: "fa-solid fa-helicopter",
    relato: "La convergencia total barrió las vallas de Plaza de Mayo. Cuando la infantería se quedó sin cartuchos y los gases empezaron a filtrarse por los ventiluces del despacho presidencial, la Casa Militar te tomó del brazo hacia la azotea. El helicóptero H-01 despegó entre piedras que golpeaban el fuselaje, mientras en los televisores del mundo se transmitía la caída de tu gobierno en vivo."
  },

  pacto_extorsivo_conurbano: {
    id: "pacto_extorsivo_conurbano",
    nombre: "El Virreinato de los Barones: Gobierno de Rodillas",
    subtitulo: "La Casa Rosada intervenida de facto por intendentes y comisarios",
    color: "purple",
    icono: "fa-solid fa-handcuffs",
    relato: "Para evitar que te prendieran fuego el conurbano y te amotinaran las comisarías, entregaste la chequera del Estado a los caciques territoriales y a la cúpula policial. Seguís durmiendo en Olivos, pero cada decisión de gabinete tiene que ser visada por tres intendentes y el jefe de calle. Compraste tu supervivencia física al costo de convertirte en una figura decorativa."
  }
};

// 6. CLASE PRINCIPAL: SISTEMA SALA DE CRISIS & ESTALLIDO SOCIAL
class SistemaSalaCrisis {
  constructor() {
    this.focosSaqueoActivos = 3;
    this.accesosCortados = 1;
    this.efectivosDesplegados = 8500;
    this.municionAntidisturbios = 45; // Porcentaje
    this.protocoloHelicoptero = "turbinas_frias"; // "turbinas_frias", "precalentando", "turbinas_calientes", "despegue_evacuacion"
    this.estadoDeSitioActivo = false;
    this.toqueDeQuedaHora = "22:00";
    this.fondosEmergenciaGastadosM = 0;
    this.muertosCivilesCrisis = 0;
    this.riesgoComodoroPyLesaHumanidad = 0;
    this.pactoIntendentesFirmado = false;
    this.cadenaNacionalRealizada = false;
    this.ministroSeguridadRenunciado = false;

    // Bitácora de alertas militares en tiempo real
    this.alertasFeed = [
      { hora: "21:10 hs", texto: "Reportan audios de WhatsApp alertando sobre saqueos en La Matanza y Moreno.", nivel: "alerta" },
      { hora: "21:35 hs", texto: "Comerciantes bajan persianas metálicas en avenidas principales del conurbano.", nivel: "info" }
    ];

    this.historialDecisiones = [];
  }

  agregarAlerta(texto, nivel = "alerta") {
    const ahora = new Date();
    const hs = ahora.getHours().toString().padStart(2, '0');
    const min = ahora.getMinutes().toString().padStart(2, '0');
    this.alertasFeed.unshift({ hora: `${hs}:${min} hs`, texto, nivel });
    if (this.alertasFeed.length > 15) {
      this.alertasFeed.pop();
    }
  }

  obtenerFaseActual(mechaSocial = 50) {
    if (mechaSocial >= 95) return FASES_MECHA_ESTALLIDO.fase_convergencia;
    if (mechaSocial >= 85) return FASES_MECHA_ESTALLIDO.fase_cacerolazo;
    if (mechaSocial >= 75) return FASES_MECHA_ESTALLIDO.fase_saqueos;
    return FASES_MECHA_ESTALLIDO.fase_rumor;
  }

  sincronizarConMotor(motor) {
    if (!motor || !motor.termometroCriollo) return;
    const mecha = motor.termometroCriollo.mechaSocial;

    // Actualización dinámica de focos y accesos según mecha
    if (mecha >= 95) {
      this.focosSaqueoActivos = Math.max(this.focosSaqueoActivos, 18);
      this.accesosCortados = Math.max(this.accesosCortados, 7);
      this.protocoloHelicoptero = "turbinas_calientes";
    } else if (mecha >= 85) {
      this.focosSaqueoActivos = Math.max(this.focosSaqueoActivos, 12);
      this.accesosCortados = Math.max(this.accesosCortados, 5);
      this.protocoloHelicoptero = "precalentando";
    } else if (mecha >= 75) {
      this.focosSaqueoActivos = Math.max(this.focosSaqueoActivos, 7);
      this.accesosCortados = Math.max(this.accesosCortados, 3);
      if (this.protocoloHelicoptero !== "turbinas_calientes") {
        this.protocoloHelicoptero = "precalentando";
      }
    } else if (mecha < 60) {
      this.focosSaqueoActivos = Math.min(this.focosSaqueoActivos, 2);
      this.accesosCortados = Math.min(this.accesosCortados, 1);
      this.protocoloHelicoptero = "turbinas_frias";
    }

    // Desgaste de munición si hay focos activos
    if (this.focosSaqueoActivos > 8 && this.municionAntidisturbios > 10) {
      this.municionAntidisturbios = Math.max(5, this.municionAntidisturbios - 4);
    }
  }

  declararEstadoDeSitio(motor = null) {
    if (this.estadoDeSitioActivo) {
      return { exito: false, mensaje: "El Estado de Sitio ya se encuentra formalmente declarado por DNU." };
    }

    this.estadoDeSitioActivo = true;
    let mecha = motor && motor.termometroCriollo ? motor.termometroCriollo.mechaSocial : 75;

    // Evaluación del Bumerán 2001 vs Freno de Hierro
    // Si la mecha social es >= 88% o el humor social es furibundo contra el ajuste: BUMERÁN 2001
    const esBumeran = mecha >= 88;

    if (esBumeran) {
      // ESCENARIO B: EL BUMERÁN 2001
      this.protocoloHelicoptero = "turbinas_calientes";
      this.muertosCivilesCrisis += 4;
      this.focosSaqueoActivos += 6;
      this.accesosCortados = 8;
      this.municionAntidisturbios = Math.max(0, this.municionAntidisturbios - 30);
      this.riesgoComodoroPyLesaHumanidad += 35;

      if (motor) {
        if (motor.termometroCriollo) {
          motor.termometroCriollo.mechaSocial = 100;
        }
        if (motor.saludSupervivencia) {
          motor.saludSupervivencia.paranoia = 100;
          motor.saludSupervivencia.coronarias = Math.max(5, motor.saludSupervivencia.coronarias - 25);
          motor.saludSupervivencia.seguridad = Math.max(0, motor.saludSupervivencia.seguridad - 30);
        }
        if (motor.vector12Axes && motor.vector12Axes.autoritarismo !== null) {
          motor.vector12Axes.autoritarismo = Math.min(100, motor.vector12Axes.autoritarismo + 25);
        }
      }

      const relatoBumeran = "Firmaste el DNU de Estado de Sitio y anunciaste el toque de queda. La respuesta popular fue fulminante: a las 22:30 hs miles de familias salieron a los balcones al grito de '¡Estado de sitio, las pelotas!'. La multitud desbordó las avenidas, hubo choques brutales con las Fuerzas Federales y Plaza de Mayo fue sitiada. Las turbinas del H-01 se encendieron al máximo en la terraza.";
      this.agregarAlerta("¡DESBORDE TOTAL! La clase media desafió el Estado de Sitio en las calles.", "urgente");
      this.historialDecisiones.push({ decision: "Estado de Sitio (Bumerán 2001)", relato: relatoBumeran });
      return { exito: true, escenario: "bumeran_2001", relato: relatoBumeran };
    } else {
      // ESCENARIO A: EL FRENO DE HIERRO
      this.focosSaqueoActivos = Math.max(1, this.focosSaqueoActivos - 8);
      this.accesosCortados = Math.max(1, this.accesosCortados - 3);
      this.riesgoComodoroPyLesaHumanidad += 25;

      if (motor) {
        if (motor.termometroCriollo) {
          motor.termometroCriollo.mechaSocial = Math.max(20, motor.termometroCriollo.mechaSocial - 25);
        }
        if (motor.saludSupervivencia) {
          motor.saludSupervivencia.seguridad = Math.min(95, motor.saludSupervivencia.seguridad + 20);
          motor.saludSupervivencia.paranoia = Math.min(95, motor.saludSupervivencia.paranoia + 15);
        }
        if (motor.vector12Axes && motor.vector12Axes.autoritarismo !== null) {
          motor.vector12Axes.autoritarismo = Math.min(100, motor.vector12Axes.autoritarismo + 20);
        }
      }

      const relatoHierro = "Las Fuerzas Federales coparon los accesos y las avenidas con blindados y tanquetas hidrantes. El toque de queda a las 22:00 hs congeló los saqueos y se registraron más de 800 detenciones preventivas. El orden fue restablecido a un costo autoritario altísimo y con futuras causas penales en los juzgados de Retiro.";
      this.agregarAlerta("Estado de Sitio operativo: Fuerzas Federales controlan los accesos al Conurbano.", "info");
      this.historialDecisiones.push({ decision: "Estado de Sitio (Freno de Hierro)", relato: relatoHierro });
      return { exito: true, escenario: "freno_de_hierro", relato: relatoHierro };
    }
  }

  ejecutarDecisionCrisis(decisionId, motor = null) {
    const dec = DECISIONES_SALA_CRISIS[decisionId];
    if (!dec) return { exito: false, mensaje: "Decisión de crisis no válida." };

    if (decisionId === "boton_rojo_estado_sitio") {
      return this.declararEstadoDeSitio(motor);
    }

    if (decisionId === "alivio_social_bolsones") {
      this.fondosEmergenciaGastadosM += dec.costoMillones;
      this.focosSaqueoActivos = Math.max(1, this.focosSaqueoActivos - 5);
      if (motor) {
        if (motor.termometroCriollo) {
          motor.termometroCriollo.mechaSocial = Math.max(10, motor.termometroCriollo.mechaSocial - 15);
        }
        if (motor.macroeconomia) {
          motor.macroeconomia.deficitFiscalPct += 0.3;
          motor.macroeconomia.reservasNetasBCRA -= 200;
        }
      }
      const relato = "Se giraron $20.000 M para compra de emergencia de alimentos y logística. Los comedores del conurbano abrieron sus puertas y el clima de pillaje en almacenes de barrio retrocedió sensiblemente.";
      this.agregarAlerta("Alivio alimentario de emergencia distribuido en 450 comedores comunitarios.", "info");
      this.historialDecisiones.push({ decision: dec.nombre, relato });
      return { exito: true, decision: dec, relato };
    }

    if (decisionId === "relevo_ministro_seguridad") {
      this.ministroSeguridadRenunciado = true;
      if (motor) {
        if (motor.termometroCriollo) {
          motor.termometroCriollo.mechaSocial = Math.max(15, motor.termometroCriollo.mechaSocial - 8);
        }
        if (motor.sistemaGabinete && motor.sistemaGabinete.ministros.seguridad) {
          motor.sistemaGabinete.eyectarMinistro("seguridad", motor);
        }
      }
      const relato = "Le pediste la renuncia indeclinable al Ministro de Seguridad. El gesto descomprimió la furia contra la represión policial y pacificó el conurbano por 24 horas, aunque la oposición lo celebró como una victoria propia.";
      this.agregarAlerta("El Ministro de Seguridad presentó su renuncia indeclinable ante el Presidente.", "alerta");
      this.historialDecisiones.push({ decision: dec.nombre, relato });
      return { exito: true, decision: dec, relato };
    }

    if (decisionId === "cadena_nacional_paz") {
      this.cadenaNacionalRealizada = true;
      let mecha = motor && motor.termometroCriollo ? motor.termometroCriollo.mechaSocial : 70;
      let relato = "";
      if (mecha > 85) {
        relato = "Hablaste al país desde el sillón presidencial con tono de concordia. Sin embargo, apenas apareció tu imagen en pantalla, el cacerolazo en los barrios tapó la transmisión oficial y los zócalos de TV reflejaron la bronca social.";
        this.agregarAlerta("Cacerolazo ensordecedor durante la Cadena Nacional en las grandes ciudades.", "alerta");
      } else {
        if (motor && motor.termometroCriollo) {
          motor.termometroCriollo.mechaSocial = Math.max(15, motor.termometroCriollo.mechaSocial - 10);
        }
        relato = "Tu mensaje de serenidad y apertura al diálogo conmovió a los sectores moderados. La clase media indecisa decidió no bajar a las esquinas y se abrió una tregua comunitaria.";
        this.agregarAlerta("Cadena Nacional completada: sectores moderados llaman a la calma.", "info");
      }
      this.historialDecisiones.push({ decision: dec.nombre, relato });
      return { exito: true, decision: dec, relato };
    }

    if (decisionId === "girar_atn_intendentes") {
      this.pactoIntendentesFirmado = true;
      this.fondosEmergenciaGastadosM += dec.costoMillones;
      this.focosSaqueoActivos = Math.max(1, this.focosSaqueoActivos - 8);
      if (motor) {
        if (motor.termometroCriollo) {
          motor.termometroCriollo.mechaSocial = Math.max(15, motor.termometroCriollo.mechaSocial - 12);
          motor.termometroCriollo.roscaGobernadores = Math.min(100, motor.termometroCriollo.roscaGobernadores + 20);
        }
        if (motor.macroeconomia) {
          motor.macroeconomia.reservasNetasBCRA -= 100;
        }
      }
      const relato = "Se transfirieron $5.000 M directos a los intendentes de la Tercera Sección. En dos horas, los punteros salieron a la calle, los centros de monitoreo volvieron a prender las cámaras y los focos de saqueo se extinguieron.";
      this.agregarAlerta("Pacto con intendentes sellado: patrullas municipales vuelven a circular.", "info");
      this.historialDecisiones.push({ decision: dec.nombre, relato });
      return { exito: true, decision: dec, relato };
    }

    if (decisionId === "reabastecer_municion_gendarmeria") {
      this.municionAntidisturbios = Math.min(100, this.municionAntidisturbios + 45);
      this.fondosEmergenciaGastadosM += dec.costoMillones;
      if (motor && motor.saludSupervivencia) {
        motor.saludSupervivencia.seguridad = Math.min(100, motor.saludSupervivencia.seguridad + 15);
      }
      const relato = "Llegó el puente aéreo con 30.000 cartuchos de posta de goma y granadas de gas de fabricación militar. Las brigadas de contención en Plaza de Mayo reforzaron las vallas y tienen capacidad de fuego no letal garantizada.";
      this.agregarAlerta("Munición antidisturbios restablecida al 90% en la guarnición metropolitana.", "info");
      this.historialDecisiones.push({ decision: dec.nombre, relato });
      return { exito: true, decision: dec, relato };
    }

    return { exito: false, mensaje: "Acción de emergencia no implementada." };
  }

  evaluarProtocoloHelicoptero(motor = null) {
    const mecha = motor && motor.termometroCriollo ? motor.termometroCriollo.mechaSocial : 50;
    const seg = motor && motor.saludSupervivencia ? motor.saludSupervivencia.seguridad : 50;

    if (mecha >= 98 && seg <= 15) {
      this.protocoloHelicoptero = "despegue_evacuacion";
      return {
        evacuar: true,
        motivo: "Asedio terminal a la Casa Rosada sin munición y riesgo directo a la integridad del Presidente."
      };
    }
    return { evacuar: false };
  }

  diagnosticarDestinoFinal(motor = null) {
    const mecha = motor && motor.termometroCriollo ? motor.termometroCriollo.mechaSocial : 50;

    // 1. Evacuación por terraza (Helicóptero 2001)
    if (this.protocoloHelicoptero === "despegue_evacuacion" || mecha >= 95) {
      return DESTINOS_CRISIS_FINAL.estallido_convergente_helicoptero;
    }

    // 2. Freno de Hierro (Estado de Sitio)
    if (this.estadoDeSitioActivo) {
      return DESTINOS_CRISIS_FINAL.estado_de_sitio_autoritario;
    }

    // 3. Pacto con Barones del Conurbano
    if (this.pactoIntendentesFirmado && this.fondosEmergenciaGastadosM >= 5000) {
      return DESTINOS_CRISIS_FINAL.pacto_extorsivo_conurbano;
    }

    // 4. Pacificación Republicana
    return DESTINOS_CRISIS_FINAL.paz_social_republicana;
  }

  obtenerResumen() {
    return {
      focosSaqueoActivos: this.focosSaqueoActivos,
      accesosCortados: this.accesosCortados,
      efectivosDesplegados: this.efectivosDesplegados,
      municionAntidisturbios: this.municionAntidisturbios,
      protocoloHelicoptero: this.protocoloHelicoptero,
      estadoDeSitioActivo: this.estadoDeSitioActivo,
      fondosEmergenciaGastadosM: this.fondosEmergenciaGastadosM,
      muertosCivilesCrisis: this.muertosCivilesCrisis,
      riesgoComodoroPyLesaHumanidad: this.riesgoComodoroPyLesaHumanidad,
      alertasFeedCount: this.alertasFeed.length,
      historialDecisionesCount: this.historialDecisiones.length
    };
  }
}

// Exportación modular para Node.js y navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    FASES_MECHA_ESTALLIDO,
    FAUNA_EMERGENCIA,
    DECISIONES_SALA_CRISIS,
    DILEMAS_SALA_CRISIS,
    DESTINOS_CRISIS_FINAL,
    SistemaSalaCrisis
  };
} else if (typeof window !== 'undefined') {
  window.FASES_MECHA_ESTALLIDO = FASES_MECHA_ESTALLIDO;
  window.FAUNA_EMERGENCIA = FAUNA_EMERGENCIA;
  window.DECISIONES_SALA_CRISIS = DECISIONES_SALA_CRISIS;
  window.DILEMAS_SALA_CRISIS = DILEMAS_SALA_CRISIS;
  window.DESTINOS_CRISIS_FINAL = DESTINOS_CRISIS_FINAL;
  window.SistemaSalaCrisis = SistemaSalaCrisis;
}
