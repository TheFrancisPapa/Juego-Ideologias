// famosos_argentinos.js - Mapeo de figuras y arquetipos de opinión pública de Argentina
// AVISO LEGAL Y CREATIVO:
// Todas las intervenciones de figuras públicas en este simulador constituyen una parodia política ficcional y satírica.
// Representan arquetipos caricaturizados de corrientes de opinión pública con fines exclusivamente lúdicos, didácticos y de divulgación cívica.

function _svgAvatar(iniciales, bg = '%231e293b', fg = '%2338bdf8') {
  return "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' rx='50' fill='" + bg + "'/><text x='50' y='55' font-size='34' font-family='sans-serif' font-weight='bold' fill='" + fg + "' text-anchor='middle' dominant-baseline='middle'>" + iniciales + "</text></svg>";
}

// Helper interno para consultar ejes normalizados o sus alias
function _valEje(decision, ...claves) {
  if (!decision || !decision.impacto12Axes) return 50;
  for (const c of claves) {
    if (decision.impacto12Axes[c] !== undefined) return decision.impacto12Axes[c];
  }
  return 50;
}

const FAMOSOS_ARGENTINOS = {
  // ==========================================
  // EJE 1: IZQUIERDA Y PROGRESISMO COMBATIVO
  // ==========================================
  myriam_bregman: {
    nombre: "Myriam Bregman",
    usuario: "@myriambregman",
    instagram: "@myriambregman",
    rol: "Diputada PTS / Frente de Izquierda (Parodia)",
    ejeCultural: "izquierda",
    avatar: _svgAvatar('MB', '%23831843', '%23f472b6'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esLuchaObrero = decTxt.includes("salario") || decTxt.includes("huelga") || decTxt.includes("desalojo") || decTxt.includes("obrero") || (decision?.impactoSectores?.trabajo || 0) > 10;
      const esRepresionOAjuste = decTxt.includes("reprim") || decTxt.includes("patruller") || decTxt.includes("polic") || decTxt.includes("despido") || decTxt.includes("plan") || decTxt.includes("ajuste") || decTxt.includes("decreto") || decTxt.includes("dnu") || _valEje(decision, 'seguridad') > 65 || _valEje(decision, 'estatismo') > 65;

      if (esLuchaObrero && !esRepresionOAjuste) {
        return {
          tipo: "banca",
          badge: "🚩 Conquista en las calles",
          texto: "Toda conquista es fruto de la clase trabajadora organizada en las calles. Esto no es una concesión del poder, es un triunfo de la movilización popular."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "🔥 Denuncia en el Congreso",
          texto: "Gatillo fácil, palos para los jubilados y exenciones para los grandes empresarios. Un régimen de hambre que solo se sostiene con represión patronal."
        };
      }
    }
  },

  julia_mengolini: {
    nombre: "Julia Mengolini",
    usuario: "@juliamengo",
    instagram: "@juliamengolini_",
    rol: "Directora Futurock & Periodista (Parodia)",
    ejeCultural: "izquierda_cultural",
    avatar: _svgAvatar('JM', '%23581c87', '%23c084fc'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const apoyaCulturaOComunidad = decTxt.includes("cultura") || decTxt.includes("festival") || decTxt.includes("arte") || decTxt.includes("género") || decTxt.includes("salario") || (decision?.impactoSectores?.cultura || 0) > 5 || _valEje(decision, 'estatismo') < 35;
      const recortaCulturaOSalud = decTxt.includes("incaa") || decTxt.includes("cine") || (decTxt.includes("festival") && decTxt.includes("recort")) || (decision?.impactoSectores?.cultura || 0) < 0 || _valEje(decision, 'estatismo') > 70;

      if (apoyaCulturaOComunidad && !recortaCulturaOSalud) {
        return {
          tipo: "banca",
          badge: "📻 Celebración en Futurock",
          texto: "Hermoso ver que todavía hay espacio para la alegría, el arte y la construcción comunitaria. Lloren los rancios de siempre."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "⚡ Furor al aire",
          texto: "Un gobierno de varones tristes y resentidos que odian el arte, a las mujeres y a la gente pasándola bien. Más mediocres no se consiguen."
        };
      }
    }
  },

  ofelia_fernandez: {
    nombre: "Ofelia Fernández",
    usuario: "@OfeFernandez_",
    instagram: "@ofefernandez",
    rol: "Militante Generacional & Ex Legisladora (Parodia)",
    ejeCultural: "izquierda_joven",
    avatar: _svgAvatar('OF', '%23064e3b', '%2334d399'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const aliviaJovenes = decTxt.includes("alquiler") || decTxt.includes("boleto") || decTxt.includes("estudiantil") || decTxt.includes("universidad") || decTxt.includes("educación") || decTxt.includes("salario") || (decision?.impactoSectores?.trabajo || 0) > 10 || _valEje(decision, 'estatismo') < 35;
      const precarizaOArancela = decTxt.includes("inmobiliari") || decTxt.includes("arancel") || (decTxt.includes("desregul") && decTxt.includes("alquiler")) || decTxt.includes("cine") || _valEje(decision, 'estatismo') > 65;

      if (aliviaJovenes && !precarizaOArancela) {
        return {
          tipo: "banca",
          badge: "✊ Banco generacional",
          texto: "Una para los pibes que no llegan a fin de mes ni para pagar una pieza compartida. Pelear sirve, aunque a los viejos meados les dé alergia."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "💥 Descargo viral",
          texto: "Se reciben de soretes todos los días. Condenan a una generación entera a vivir hacinada y precarizada mientras festejan en Twitter con avatares de anime."
        };
      }
    }
  },

  pedro_rosemblat: {
    nombre: "Pedro Rosemblat",
    usuario: "@PepeRosemblat",
    instagram: "@pedrorosemblat",
    rol: "Conductor Gelatina / El Cadete (Parodia)",
    ejeCultural: "progresismo_humor",
    avatar: _svgAvatar('PR', '%231e3a8a', '%2360a5fa'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const recortaSocial = (decision?.impactoSectores?.estadoCiencia || 0) < -10 || (decision?.impactoSectores?.cultura || 0) < 0 || decTxt.includes("universidad") || decTxt.includes("cine") || decTxt.includes("cultura") || _valEje(decision, 'estatismo') > 65;
      const esEstatista = _valEje(decision, 'estatismo') < 40 || (decision?.impactoSectores?.trabajo || 0) > 10;

      if (recortaSocial) {
        return {
          tipo: "bardea",
          badge: "🎯 Sarcasmo en Gelatina",
          texto: "Tranquilos todos: recortaron el presupuesto de las universidades y del cine, ahora sí baja el kilo de arroz. Unos estadistas de primer nivel."
        };
      } else if (esEstatista) {
        return {
          tipo: "banca",
          badge: "✌️ Fábrica de jingles",
          texto: "¿Y el shock de alegría popular? Un paso necesario para reconstruir el tejido social y devolverle un poco de dignidad a la gente."
        };
      } else {
        return {
          tipo: "ironico",
          badge: "📻 Advertencia militante",
          texto: "Tiraron dos migajas para que no prenda fuego la esquina, pero ojo que mañana te meten tres tarifazos por la colectora."
        };
      }
    }
  },

  dillom: {
    nombre: "Dillom",
    usuario: "@dillom666",
    instagram: "@rip.dillom",
    rol: "Músico & Productor Urbano (Parodia)",
    ejeCultural: "cultura_urbana",
    avatar: _svgAvatar('DL', '%23450a0a', '%23f87171'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const censuraOCultura = decTxt.includes("cultura") || decTxt.includes("festival") || decTxt.includes("cine") || decTxt.includes("arte") || (decision?.impactoSectores?.cultura || 0) < 0 || _valEje(decision, 'seguridad') > 70;
      if (censuraOCultura) {
        return {
          tipo: "bardea",
          badge: "🔥 RIP Gang al hueso",
          texto: "Mucho protocolo, mucha gorra, pero son los mismos ortibas caretas de siempre. La cultura les pasa por arriba igual."
        };
      } else {
        return {
          tipo: "ironico",
          badge: "🎤 Comentario filoso",
          texto: "Hagan lo que quieran con sus planillas, la movida real está en las calles y no les pertenece."
        };
      }
    }
  },

  juan_grabois: {
    nombre: "Juan Grabois",
    usuario: "@JuanGrabois",
    instagram: "@juangrabois",
    rol: "Dirigente Social Frente Patria Grande (Parodia)",
    ejeCultural: "movimientos_sociales",
    avatar: _svgAvatar('JG', '%2314532d', '%2386efac'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const ajustaPopulares = (decision?.impactoSectores?.movimientosSociales || 0) < -10 || decTxt.includes("corte") || decTxt.includes("piquete") || decTxt.includes("comedor") || _valEje(decision, 'seguridad') > 70;
      if (ajustaPopulares) {
        return {
          tipo: "bardea",
          badge: "💣 Bronca en la trinchera popular",
          texto: "Ajustan a los que no tienen para comer mientras se arrodillan con los especuladores financieros. Esta crueldad no pasa gratis, la dignidad de los humildes no se negocia."
        };
      } else {
        return {
          tipo: "banca",
          badge: "🌾 Tierra, Techo y Trabajo",
          texto: "Un piso elemental de justicia social. Si no hay redistribución real y tierra para el que la trabaja, la paz social es una farsa de los countries."
        };
      }
    }
  },

  // ==========================================
  // EJE 2: PERONISMO DOCTRINARIO Y NACIONALISMO
  // ==========================================
  guillermo_moreno: {
    nombre: "Guillermo Moreno",
    usuario: "@morenoparalavic",
    instagram: "@guillermomoreno_ok",
    rol: "Dirigente Peronista & Doctrinario (Parodia)",
    ejeCultural: "peronismo_clasico",
    avatar: _svgAvatar('GM', '%231e3a8a', '%2360a5fa'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const peronismoEconomico = decTxt.includes("precio") || decTxt.includes("retenci") || decTxt.includes("industria") || _valEje(decision, 'estatismo') < 45 || _valEje(decision, 'comercio') < 40;
      const libreMercadoODeval = decTxt.includes("devalu") || decTxt.includes("libre") || decTxt.includes("desregul") || decTxt.includes("carne") || _valEje(decision, 'estatismo') > 65 || _valEje(decision, 'comercio') > 65;

      if (peronismoEconomico && !libreMercadoODeval) {
        return {
          tipo: "banca",
          badge: "🇦🇷 Doctrina en La Hora de Moreno",
          texto: "¡Viste que cuando agarrás la birome y le ponés los puntos a tres vivos las cosas se ordenan! Eso es peronismo puro: precios justos y morfi barato para el pueblo."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "💣 Furia mayorista",
          texto: "¡Bestia! ¡Le quitaste el asado a la mesa de los argentinos! Sos un anarcocapitalista de cotillón que no sabe cuánto cuesta un kilo de falda. ¡Un desastre mayúsculo!"
        };
      }
    }
  },

  diego_brancatelli: {
    nombre: "Diego Brancatelli",
    usuario: "@diegobranca",
    instagram: "@diegobrancatelli",
    rol: "Periodista Militante & Panelista C5N (Parodia)",
    ejeCultural: "peronismo_mediatico",
    avatar: _svgAvatar('DB', '%231e3a8a', '%2393c5fd'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const obraOBono = decTxt.includes("obra") || decTxt.includes("bono") || decTxt.includes("jubilad") || decTxt.includes("salario") || decTxt.includes("conurbano") || decTxt.includes("congel") || (decision?.impactoSectores?.claseMedia || 0) > 0 || (decision?.impactoSectores?.trabajo || 0) > 0 || _valEje(decision, 'estatismo') < 35;
      const tarifazoORecorte = decTxt.includes("tarifazo") || ((decTxt.includes("tarifa") || decTxt.includes("luz") || decTxt.includes("gas")) && (decTxt.includes("aumento") || decTxt.includes("suba") || decTxt.includes("recort"))) || decTxt.includes("comedor") || decTxt.includes("ajuste") || (decision?.impactoSectores?.claseMedia || 0) < -10 || _valEje(decision, 'estatismo') > 65;

      if (obraOBono && !tarifazoORecorte) {
        return {
          tipo: "banca",
          badge: "✌️ Orgullo nacional y popular",
          texto: "¡Esto es gobernar de cara al pueblo! El asfalto, la cloaca y la dignidad no se negocian. Aplaudan de pie la justicia social."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "🔥 Furia en el panel de TV",
          texto: "¡Es una masacre social! Apagan las heladeras en La Matanza, no tienen corazón ni vergüenza. Están gobernando para el country de Pilar."
        };
      }
    }
  },

  tomas_rebord: {
    nombre: "Tomás Rebord",
    usuario: "@tomasrebord",
    instagram: "@tomasrebord",
    rol: "Conductor Blender / El Método (Parodia)",
    ejeCultural: "peronismo_mistico",
    avatar: _svgAvatar('TR', '%2314532d', '%234ade80'),
    generarReaccion: function(decision, flags, vector) {
      const esEstatistaOSoberano = _valEje(decision, 'estatismo') < 45 || _valEje(decision, 'geopolitica') > 60;
      if (esEstatistaOSoberano) {
        return {
          tipo: "banca",
          badge: "🎙️ Cine doctrinario en Blender",
          texto: "Mirá esta maniobra doctrinaria. Cine puro, amigos. La grandeza de la Patria no entra en una planilla de Excel. Procedan con la mística intacta."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "🔥 Liquidación en El Método",
          texto: "Una entrega miserable a cielo abierto. Ni para clavar un ajuste con dignidad les da el cuero. Son empleados de mostrador jugando al TEG."
        };
      }
    }
  },

  santiago_cuneo: {
    nombre: "Santiago Cúneo",
    usuario: "@SantiagoCuneo",
    instagram: "@cuneooficial",
    rol: "Conductor Canal 22 / Uno Más Uno Tres (Parodia)",
    ejeCultural: "nacionalismo_combate",
    avatar: _svgAvatar('SC', '%237f1d1d', '%23fca5a5'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const soberanoNacional = _valEje(decision, 'geopolitica') > 65 || decTxt.includes("malvinas") || decTxt.includes("soberan");
      if (soberanoNacional) {
        return {
          tipo: "banca",
          badge: "🇦🇷 Bandera Nacional al frente",
          texto: "¡Así se defiende el suelo patrio, carajo! Contra los piratas ingleses y los lacayos del colonialismo, mano firme o nada."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "💣 Ráfaga de furia criolla",
          texto: "¡Gararcas, cipayos, traidores a la Patria! Están rifando la República a precio de liquidación. ¡No van a poder caminar por la calle, caraduras!"
        };
      }
    }
  },

  cristina_kirchner: {
    nombre: "Cristina Fernández de Kirchner",
    usuario: "@CFKArgentina",
    instagram: "@cristinafkirchner",
    rol: "Lideresa Justicialista & Ex Presidenta (Parodia)",
    ejeCultural: "peronismo_conduccion",
    avatar: _svgAvatar('CFK', '%231e3a8a', '%23bfdbfe'),
    generarReaccion: function(decision, flags, vector) {
      const esProEstado = _valEje(decision, 'estatismo') < 40;
      if (esProEstado) {
        return {
          tipo: "banca",
          badge: "✌️ Carta magistral desde el Instituto Patria",
          texto: "Gobernar no es arrodillarse ante las corporaciones concentradas ni ante el Fondo Monetario. Gobernar es defender el poder adquisitivo de las mayorías con coraje y convicción doctrinaria."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "📑 Análisis crítico y demoledor",
          texto: "Es el mismo libreto neoliberal fracasado de los años noventa y del 2015. Vienen a saquear el patrimonio estatal y condenar a tres generaciones al endeudamiento serial. Hágase cargo de la catástrofe que genera."
        };
      }
    }
  },

  // ==========================================
  // EJE 3: DERECHA CULTURAL Y LIBERTARIA RADICAL
  // ==========================================
  agustin_laje: {
    nombre: "Agustín Laje",
    usuario: "@AgustinLaje",
    instagram: "@agustinlaje",
    rol: "Escritor & Teórico Anti-Woke (Parodia)",
    ejeCultural: "derecha_cultural",
    avatar: _svgAvatar('AL', '%23312e81', '%23818cf8'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const batallaCultural = decTxt.includes("social") || decTxt.includes("esi") || decTxt.includes("género") || decTxt.includes("ministerio") || decTxt.includes("cine") || decTxt.includes("incaa") || decTxt.includes("cultura") || decTxt.includes("fondo") || (decision?.impactoSectores?.cultura || 0) < 0;
      const cedeGlobalismo = /\b(onu|naciones unidas|agenda 2030|globalismo)\b/i.test(decTxt) || (decTxt.includes("género") && !decTxt.includes("cerrar") && !decTxt.includes("elimin"));

      if (batallaCultural && !cedeGlobalismo) {
        return {
          tipo: "banca",
          badge: "⚔️ Batalla cultural ganada",
          texto: "Un golpe demoledor a la hegemonía gramsciana y a las corporaciones ideológicas que parasitaron al Estado. La verdad y el sentido común empiezan a prevalecer."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "🛡️ Denuncia anti-globalista",
          texto: "Una capitulación vergonzosa ante la agenda globalista. Traicionaron a su electorado para arrodillarse ante burócratas internacionales."
        };
      }
    }
  },

  manuel_adorni: {
    nombre: "Manuel Adorni",
    usuario: "@madorni",
    instagram: "@madorni",
    rol: "Economista & Portavoz Liberal (Parodia)",
    ejeCultural: "liberalismo_ortodoxo",
    avatar: _svgAvatar('MA', '%231e293b', '%2394a3b8'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const achicaEstado = decTxt.includes("privatiz") || decTxt.includes("cerr") || decTxt.includes("fondo") || decTxt.includes("incaa") || decTxt.includes("ente") || decTxt.includes("gasto") || _valEje(decision, 'estatismo') > 65;
      const subeImpuestos = decTxt.includes("impuesto") || decTxt.includes("retenci") || decTxt.includes("gasto político") || _valEje(decision, 'estatismo') < 35;

      if (achicaEstado && !subeImpuestos) {
        return {
          tipo: "banca",
          badge: "📉 Comunicado matutino",
          texto: "Se cerró definitivamente una estructura que le costaba millones de dólares al contribuyente para financiar militancia. Fin."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "❌ Alerta fiscal",
          texto: "Un delirio fiscal que atenta contra el esfuerzo de 47 millones de argentinos. No hay plata para financiar privilegios. Fin."
        };
      }
    }
  },

  gordo_dan: {
    nombre: "Daniel Parisini ('El Gordo Dan')",
    usuario: "@GordoDan_",
    instagram: "@elgordodan",
    rol: "Conductor La Misa / Carajo (Parodia)",
    ejeCultural: "derecha_redes",
    avatar: _svgAvatar('GD', '%237f1d1d', '%23f87171'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();

      if (decTxt.includes("visitante") || (decTxt.includes("hinchada") && decTxt.includes("cancha"))) {
        return {
          tipo: "bardea",
          badge: "🦁 Cero piedad con las barras",
          texto: "Que se caguen a trompadas entre ellos en el descampado si quieren. No le pongas un solo policía de la gente honesta para cuidar a cuatro delincuentes con bombos."
        };
      }

      const esRadicalLibertario = _valEje(decision, 'estatismo') > 65 || _valEje(decision, 'seguridad') > 65 || decTxt.includes("cerr") || decTxt.includes("privat") || decTxt.includes("patruller");
      const esTibio = _valEje(decision, 'estatismo') < 45 || decTxt.includes("consenso") || decTxt.includes("diálogo");

      if (esRadicalLibertario) {
        return {
          tipo: "banca",
          badge: "🦁 DOMADOS EN VIVO",
          texto: "DOMADOS. LLOREN, LLOREN MÁS FUERTE QUE ME NUTRE. Esto es exactamente lo que votamos. Hermoso día para estar vivos."
        };
      } else if (esTibio) {
        return {
          tipo: "bardea",
          badge: "⚡ Furia anticasta",
          texto: "TIBIOS DE MIERDA. Les tiembla el pulso ante tres zurdos gritando en una esquina. Acelerá a fondo o te pasan por arriba."
        };
      } else {
        return {
          tipo: "ironico",
          badge: "👀 Ojo con la tibieza",
          texto: "Te estamos mirando fijo. Un milímetro de concesión a la casta y se te prende fuego el feed. Proceda con convicción."
        };
      }
    }
  },

  baby_etchecopar: {
    nombre: "Baby Etchecopar",
    usuario: "@angeletchecopar",
    instagram: "@babyetchecoparok",
    rol: "Conductor Basta Baby / Radio Rivadavia (Parodia)",
    ejeCultural: "indignacion_callejera",
    avatar: _svgAvatar('BE', '%23451a03', '%23f59e0b'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const ordenYPolicia = decTxt.includes("corte") || decTxt.includes("desaloj") || decTxt.includes("trapito") || decTxt.includes("polic") || decTxt.includes("patruller") || _valEje(decision, 'seguridad') > 65;
      const masImpuestos = decTxt.includes("inmobiliari") || decTxt.includes("patente") || decTxt.includes("impuesto") || (decision?.impactoSectores?.claseMedia || 0) < -10;

      if (ordenYPolicia && !masImpuestos) {
        return {
          tipo: "banca",
          badge: "💥 Al fin mano dura",
          texto: "¡Al fin! Quiero salir a la calle sin que me apriete un guacho en cada esquina con un balde y un trapo. El país es de la gente honesta, carajo."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "🤬 Indignación al aire",
          texto: "¡Hijos de puta! Me rompí el lomo 50 años para comprarme un auto y ahora me cobran como si fuera Rockefeller. Son todos iguales, cambian de collar pero son el mismo perro."
        };
      }
    }
  },

  eduardo_feinmann: {
    nombre: "Eduardo Feinmann",
    usuario: "@edufeiok",
    instagram: "@eduardofeinmann",
    rol: "Conductor LN+ & Radio Mitre (Parodia)",
    ejeCultural: "derecha_orden",
    avatar: _svgAvatar('EF', '%230f172a', '%2338bdf8'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esManoDura = _valEje(decision, 'seguridad') > 65 || decTxt.includes("protocolo") || decTxt.includes("corte") || decTxt.includes("patruller") || decTxt.includes("orden");
      if (esManoDura) {
        return {
          tipo: "banca",
          badge: "⚖️ El imperio de la ley",
          texto: "El imperio de la ley, señores. Los fondos públicos no pueden ser un aguantadero de vagos. Más patrulleros y menos privilegios."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "🔥 Bronca al aire",
          texto: "Esto es un mamarracho populista. ¿Hasta cuándo los contribuyentes honestos van a pagarle la fiesta a los que cortan la calle?"
        };
      }
    }
  },

  cinthia_fernandez: {
    nombre: "Cinthia Fernández",
    usuario: "@cinthifernandez",
    instagram: "@cinthia_fernandez_",
    rol: "Panelista & Militante por la Seguridad (Parodia)",
    ejeCultural: "mano_dura_popular",
    avatar: _svgAvatar('CF', '%23581c87', '%23e879f9'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const manoDura = _valEje(decision, 'seguridad') > 65 || decTxt.includes("cárcel") || decTxt.includes("patruller") || decTxt.includes("polic") || decTxt.includes("delit");
      if (manoDura) {
        return {
          tipo: "banca",
          badge: "🚨 Cárcel o bala ya",
          texto: "Bala y zanja para los delincuentes, cárcel ya. Defiendan a la gente de bien que sale a laburar a las 5 de la mañana con miedo."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "💥 Furia total",
          texto: "¡Garantistas de mierda! Defienden más a los chorros que a las madres que laburan. Dan asco absoluto."
        };
      }
    }
  },

  ramiro_marra: {
    nombre: "Ramiro Marra",
    usuario: "@RAMIROMARRA",
    instagram: "@ramiro_marra",
    rol: "Trader Financiero & Dirigente Liberal (Parodia)",
    ejeCultural: "liberalismo_financiero",
    avatar: _svgAvatar('RM', '%23451a03', '%23f59e0b'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esLibreMercadoOContraPiquete = _valEje(decision, 'regulacion') > 65 || _valEje(decision, 'estatismo') > 65 || decTxt.includes("piquet") || decTxt.includes("cine") || decTxt.includes("patruller");
      if (esLibreMercadoOContraPiquete) {
        return {
          tipo: "banca",
          badge: "📈 Mercado y orden",
          texto: "Excelente medida. La plata tiene que ir a cuidar a los vecinos que laburan, no a películas que no mira nadie. Comprate un bono y dejá de llorar."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "📉 Alerta piquete",
          texto: "Los piqueteros tienen que ir presos, corta la bocha. No jodan más a la gente que produce y genera riqueza."
        };
      }
    }
  },

  sergio_tronco: {
    nombre: "Sergio 'Tronco' Figliuolo",
    usuario: "@tronco__",
    instagram: "@tronco_ok",
    rol: "Conductor Neura Media (Parodia)",
    ejeCultural: "indignacion_neura",
    avatar: _svgAvatar('ST', '%231e293b', '%23f59e0b'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const aflojaAlPrivado = _valEje(decision, 'estatismo') > 60 || _valEje(decision, 'seguridad') > 65 || decTxt.includes("patruller");
      if (aflojaAlPrivado) {
        return {
          tipo: "banca",
          badge: "🎙️ Descargo en Neura",
          texto: "¡Basta de joder a la gente normal! Déjennos vivir, producir y andar en paz sin mantener parásitos."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "⚡ Grito al micrófono",
          texto: "¿Me estás cargando? Otra regulación inventada por un tipo que en su vida pagó una quincena de sueldos. Son de manual."
        };
      }
    }
  },

  marcos_galperin: {
    nombre: "Marcos Galperin",
    usuario: "@marcos_galperin",
    instagram: "@marcosgalperin",
    rol: "Fundador de Mercado Libre (Parodia)",
    ejeCultural: "empresariado_tech",
    avatar: _svgAvatar('MG', '%231e3a8a', '%23facc15'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esCompetitivo = _valEje(decision, 'regulacion') > 60 || _valEje(decision, 'comercio') > 60 || _valEje(decision, 'estatismo') >= 65 || decTxt.includes("cerr") || decTxt.includes("privatiz");
      if (esCompetitivo) {
        return {
          tipo: "banca",
          badge: "🚀 Competencia e innovación",
          texto: "Cuando dejás competir al talento y bajás las trabas arcaicas, el ecosistema despega solo. Las trabas burocráticas solo protegen privilegios de amigos del poder."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "📉 Crítica al intervencionismo",
          texto: "Increíble cómo insisten con recetas del siglo pasado. La innovación y el capital fluyen hacia donde hay previsibilidad, no hacia donde te imponen cepos y regulaciones obsoletas."
        };
      }
    }
  },

  javier_milei: {
    nombre: "Javier Milei",
    usuario: "@JMilei",
    instagram: "@javiermilei",
    rol: "Líder Libertario & Presidente de la Nación (Parodia)",
    ejeCultural: "anarcocapitalismo",
    avatar: _svgAvatar('JM', '%23451a03', '%23f59e0b'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esLibertario = _valEje(decision, 'estatismo') >= 65 || decTxt.includes("cerr") || decTxt.includes("motosierra") || decTxt.includes("déficit") || decTxt.includes("privatiz");
      if (esLibertario) {
        return {
          tipo: "banca",
          badge: "🦁 Motosierra y Déficit Cero",
          texto: "¡VIVA LA LIBERTAD CARAJO! No hay plata para financiar la orgía del gasto público de la casta política empobrecedora. El equilibrio fiscal no se negocia bajo ninguna circunstancia."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "🔥 Denuncia de colectivismo empobrecedor",
          texto: "Comunistas de mierda, no entienden que el Estado es el pedófilo en el jardín de infantes con los nenes encadenados. Todo lo que toca el Estado lo destruye. ¡AFUERA!"
        };
      }
    }
  },

  // ==========================================
  // EJE 4: CENTRO REPUBLICANO, DATOS Y "COREA DEL CENTRO"
  // ==========================================
  ernesto_tenembaum: {
    nombre: "Ernesto Tenembaum",
    usuario: "@ertenembaum",
    instagram: "@ernesto_tenembaum",
    rol: "Conductor Radio Con Vos (Parodia)",
    ejeCultural: "centro_analitico",
    avatar: _svgAvatar('ET', '%2314532d', '%2386efac'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const consensoODatos = decTxt.includes("diálogo") || decTxt.includes("consenso") || decTxt.includes("acuerdo") || decTxt.includes("informe");
      const polarizaODecreto = decTxt.includes("decreto") || decTxt.includes("dnu") || decTxt.includes("enemigo") || decTxt.includes("prensa") || decTxt.includes("patruller") && decTxt.includes("cine");

      if (consensoODatos && !polarizaODecreto) {
        return {
          tipo: "banca",
          badge: "🕊️ Racionalidad y consenso",
          texto: "Una bocanada de racionalidad en medio del griterío. Cuando la política dialoga y mira los datos en lugar de las encuestas, el país respira."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "⚠️ Alerta institucional",
          texto: "El manual del populismo clásico: buscar un enemigo para tapar la falta de gestión y violentar las reglas republicanas. Muy preocupante."
        };
      }
    }
  },

  maria_odonnell: {
    nombre: "María O'Donnell",
    usuario: "@odonnellmaria",
    instagram: "@mariaodonnell50",
    rol: "Conductora De Acá en Más / Urbana Play (Parodia)",
    ejeCultural: "centro_periodismo",
    avatar: _svgAvatar('MO', '%230e7490', '%2367e8f9'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const transparencia = decTxt.includes("transparencia") || decTxt.includes("licitaci") || decTxt.includes("informe") || decTxt.includes("rendici");
      const abusoDNUOJusticia = decTxt.includes("decreto") || decTxt.includes("dnu") || decTxt.includes("juez") || decTxt.includes("congreso") || (decision?.materia && ['penal', 'tributario', 'electoral'].includes(decision.materia));

      if (transparencia && !abusoDNUOJusticia) {
        return {
          tipo: "banca",
          badge: "🔍 Rendición de cuentas",
          texto: "Un estándar de acceso a la información y rendición de cuentas que debería ser la norma en cualquier democracia moderna."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "⚖️ Retroceso republicano",
          texto: "Un retroceso institucional muy grave. La discrecionalidad del Ejecutivo erosiona la confianza y sienta un precedente peligroso."
        };
      }
    }
  },

  nelson_castro: {
    nombre: "Nelson Castro",
    usuario: "@nelsocastro",
    instagram: "@nelsoncastrooficial",
    rol: "Conductor TN & Radio Rivadavia (Parodia)",
    ejeCultural: "centro_republicano",
    avatar: _svgAvatar('NC', '%231e293b', '%2394a3b8'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const apegoLey = _valEje(decision, 'institucionalidad') > 65 && !decTxt.includes("decreto") && !decTxt.includes("dnu");
      if (apegoLey) {
        return {
          tipo: "banca",
          badge: "📜 Elogio al marco constitucional",
          texto: "El apego a la Constitución y la prudencia republicana son el único camino civilizado. Bien por priorizar la institucionalidad sobre el personalismo."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "⚠️ Alerta médica y republicana",
          texto: "Estamos ante una preocupante señal de soberbia gubernamental. Gobernar por decreto y soslayar al parlamento es un síntoma de autoritarismo que la sociedad no debe convalidar."
        };
      }
    }
  },

  jonatan_viale: {
    nombre: "Jonatan Viale",
    usuario: "@JonatanViale",
    instagram: "@jonatanviale",
    rol: "Conductor TN / ¿La Ves? (Parodia)",
    ejeCultural: "editorial_centro_derecha",
    avatar: _svgAvatar('JV', '%231e293b', '%2338bdf8'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const aflojaAlContribuyente = _valEje(decision, 'estatismo') > 60 || decTxt.includes("ajuste") || decTxt.includes("patruller");
      if (aflojaAlContribuyente) {
        return {
          tipo: "banca",
          badge: "📺 ¿La ves o no la ves?",
          texto: "El tema es simple: ¿le sacás el pie de la cabeza al que labura o seguís financiando joda? Parece que acá alguien por fin prendió la luz en la Rosada."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "📉 Editorial en pizarra",
          texto: "No la ven, muchachos. Te clavan otra resolución, le pegan a la clase media y después te explican que es por tu bien. Insólito."
        };
      }
    }
  },

  mauricio_macri: {
    nombre: "Mauricio Macri",
    usuario: "@mauriciomacri",
    instagram: "@mauriciomacri",
    rol: "Fundador de PRO & Ex Presidente (Parodia)",
    ejeCultural: "centro_derecha_pro",
    avatar: _svgAvatar('MM', '%231e3a8a', '%23facc15'),
    generarReaccion: function(decision, flags, vector) {
      const esProMercado = _valEje(decision, 'estatismo') > 65;
      if (esProMercado) {
        return {
          tipo: "banca",
          badge: "🟡 El cambio no se negocia",
          texto: "El cambio profundo requiere coraje, convicción y equipo. Es el único camino para salir del populismo que nos aisló del mundo durante veinte años. Hay que apoyar sin mezquindades."
        };
      } else {
        return {
          tipo: "ironico",
          badge: "🟡 Advertencia institucional",
          texto: "El rumbo económico puede ser el correcto, pero sin calidad institucional, respeto a la división de poderes y capacidad de gestión profesional, las inversiones reales no van a venir."
        };
      }
    }
  },

  mario_pergolini: {
    nombre: "Mario Pergolini",
    usuario: "@mpergoliniok",
    instagram: "@mario_pergolini",
    rol: "Pionero de Medios & CEO Vorterix (Parodia)",
    ejeCultural: "tecnologia_audiovisual",
    avatar: _svgAvatar('MP', '%231e293b', '%23e2e8f0'),
    generarReaccion: function(decision, flags, vector) {
      return {
        tipo: "ironico",
        badge: "📡 Visión digital Vorterix",
        texto: "Sigan discutiendo con el código de 1853 mientras la IA ya les liquidó la mitad de los empleos y los pibes miran streams de cuatro segundos. Están en otra galaxia."
      };
    }
  },

  // ==========================================
  // EJE 5: POPULAR, BARRIO Y ESPECTÁCULO MASIVO
  // ==========================================
  beto_casella: {
    nombre: "Beto Casella",
    usuario: "@elbetocasella",
    instagram: "@elbetocasella",
    rol: "Conductor Bendita TV & Radio Continental (Parodia)",
    ejeCultural: "barrio_popular",
    avatar: _svgAvatar('BC', '%23134e4a', '%232dd4bf'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const cuidaAlLaburante = decTxt.includes("transporte") || decTxt.includes("club") || decTxt.includes("bondi") || (decision?.impactoSectores?.claseMedia || 0) > 0;
      const cancheroOSoberbio = decTxt.includes("canchero") || decTxt.includes("soberbia") || decTxt.includes("decreto") || (decision?.impactoSectores?.claseMedia || 0) < -10;

      if (cuidaAlLaburante && !cancheroOSoberbio) {
        return {
          tipo: "banca",
          badge: "⚽ Aguante el club de barrio",
          texto: "Bien ahí, muchachos. No le compliquen más la vida al tipo que sale a ganarse el mango. El club de barrio y el bondi no se tocan."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "📺 El informe de Bendita",
          texto: "Mucho cartel y poca calle. Bajen dos cambios que la soberbia en la política dura lo que un pedo en una canasta. La gente se cansa."
        };
      }
    }
  },

  lali_esposito: {
    nombre: "Lali Espósito",
    usuario: "@lalioficial",
    instagram: "@lali",
    rol: "Artista Pop & Referente Cultural (Parodia)",
    ejeCultural: "cultura_popular",
    avatar: _svgAvatar('LE', '%23831843', '%23f472b6'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const apoyaCultura = decTxt.includes("cultura") || decTxt.includes("salud") || decTxt.includes("educación") || decTxt.includes("arte") || (decision?.impactoSectores?.cultura || 0) > 5;
      const atacaCultura = decTxt.includes("cine") || decTxt.includes("incaa") || decTxt.includes("festival") || decTxt.includes("artista") || (decision?.impactoSectores?.cultura || 0) < 0 || _valEje(decision, 'estatismo') > 75;

      if (apoyaCultura && !atacaCultura) {
        return {
          tipo: "banca",
          badge: "💖 Orgullo popular",
          texto: "Qué orgullo nuestra gente, nuestro arte y nuestros derechos. Nadie nos va a sacar la alegría ni las ganas de pelear por lo nuestro."
        };
      } else if (atacaCultura) {
        return {
          tipo: "bardea",
          badge: "💥 Descargo frontal",
          texto: "Qué peligroso, qué triste. Festejan dejar a la gente sin laburo y sin cultura. Dan pena."
        };
      } else {
        return {
          tipo: "ironico",
          badge: "✨ Mirada pop",
          texto: "Que no se olviden de que atrás de cada número hay personas reales tratando de vivir y de soñar con alegría."
        };
      }
    }
  },

  chiche_gelblung: {
    nombre: "Chiche Gelblung",
    usuario: "@chichegelblung",
    instagram: "@chichegelblung_oficial",
    rol: "Conductor Crónica HD / 70.20.Hoy (Parodia)",
    ejeCultural: "cronica_sensacionalismo",
    avatar: _svgAvatar('CG', '%23991b1b', '%23fca5a5'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const manoDuraPatrulleros = decTxt.includes("patruller") || decTxt.includes("delit") || decTxt.includes("polic") || decTxt.includes("espos") || _valEje(decision, 'seguridad') > 65;
      const desordenOProtesta = decTxt.includes("colaps") || decTxt.includes("tierra de nadie") || decTxt.includes("concesi") || _valEje(decision, 'seguridad') < 40;

      if (manoDuraPatrulleros) {
        return {
          tipo: "banca",
          badge: "🚨 Alerta Crónica",
          texto: "Está perfecto. Si no mostrás fuerza, te comen crudo. El argentino quiere ver patrulleros y gente esposada, no discursos técnicos."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "🔴 Placa roja de indignación",
          texto: "Un bochorno total. La Ciudad es tierra de nadie, los vecinos están rehenes y el gobierno está tomando mate en la Rosada. Papelón."
        };
      }
    }
  },

  migue_granados: {
    nombre: "Migue Granados",
    usuario: "@miguegranados",
    instagram: "@miguegranados",
    rol: "Conductor de Olga / Soñé que Volaba (Parodia)",
    ejeCultural: "ocio_humor",
    avatar: _svgAvatar('MG', '%237c2d12', '%23fb923c'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const tocaConsumoOcio = (decision?.impactoSectores?.claseMedia || 0) < -10 || (decision?.impactoMacro?.inflacionMensual || 0) > 0.5 || decTxt.includes("carne") || decTxt.includes("tarifa") || decTxt.includes("alcohol");
      if (tocaConsumoOcio) {
        return {
          tipo: "bardea",
          badge: "🍕 Catarsis en Olga",
          texto: "Che, pará, ¿me estás jodiendo? Dejen vivir un poco, boludo. Si me tocás el fernet y el asado del domingo se pudre todo mal, eh."
        };
      } else {
        return {
          tipo: "ironico",
          badge: "😂 Risas en el stream",
          texto: "Jajajaja no podés tirar esa medida, es un delirio total. Me encanta lo rota que está esta gente, banco fuerte la locura."
        };
      }
    }
  },

  nico_occhiato: {
    nombre: "Nico Occhiato",
    usuario: "@NicolasOcchiato",
    instagram: "@nicoocchiato",
    rol: "Director de Luzu TV & Productor (Parodia)",
    ejeCultural: "streaming_joven",
    avatar: _svgAvatar('NO', '%230f172a', '%2338bdf8'),
    generarReaccion: function(decision, flags, vector) {
      const frenaEmprendimiento = _valEje(decision, 'regulacion') < 40 || (decision?.impactoSectores?.productivo || 0) < -10;
      if (frenaEmprendimiento) {
        return {
          tipo: "bardea",
          badge: "📺 Queja de la comunidad Luzu",
          texto: "Chicos, así es imposible emprender. Queremos meter laburo, generar proyectos nuevos y te caen con tres trabas insólitas. No nos peguen más."
        };
      } else {
        return {
          tipo: "banca",
          badge: "🚀 Apoyo al laburo joven",
          texto: "Esto es clave para la comunidad. Hay que abrir puertas para que la gente cree contenido y labure tranquila. Bien ahí."
        };
      }
    }
  },

  moria_casan: {
    nombre: "Moria Casán",
    usuario: "@Moria_Casan",
    instagram: "@moria_laone",
    rol: "La One & Diva Iconoclasta (Parodia)",
    ejeCultural: "farandula_iconoclasta",
    avatar: _svgAvatar('MC', '%23701a75', '%23f472b6'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      if (decTxt.includes("patruller") || decTxt.includes("cine") || decTxt.includes("seguridad")) {
        return {
          tipo: "ironico",
          badge: "💋 Mucho decorado",
          texto: "Mucho patrullero para tapar el embole nacional, mi amor. Son un decorado que se cae a pedazos. Besito en la frente a todos."
        };
      } else {
        return {
          tipo: "ironico",
          badge: "💋 Lengua karateca",
          texto: "¿Qué se creen, mi amor? Son todos un cotillón barato del conurbano. Si van a hacer ajuste o quilombo, háganlo con glamour, no con esa cara de velorio."
        };
      }
    }
  },

  carlos_maslaton: {
    nombre: "Carlos Maslatón",
    usuario: "@CarlosMaslaton",
    instagram: "@carlosmaslaton",
    rol: "Analista Financiero Bullish & Forista (Parodia)",
    ejeCultural: "finanzas_barani",
    avatar: _svgAvatar('CM', '%2314532d', '%234ade80'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      if (decTxt.includes("cine") || decTxt.includes("incaa") || decTxt.includes("cultura")) {
        return {
          tipo: "ironico",
          badge: "⚖️ M2 y agregados",
          texto: "Discusión marginal, la plata de la cultura no mueve el amperímetro del M2 ni de los agregados monetarios. Proceda con el bull market."
        };
      }
      const esBullMarket = (decision?.impactoMacro?.reservas || 0) > 0 || _valEje(decision, 'comercio') > 60;
      if (esBullMarket) {
        return {
          tipo: "banca",
          badge: "🐂 BULL MARKET TOTAL",
          texto: "Proceda, 100% barrani y alcista. El mercado argentino descuenta triunfo total del capitalismo popular. No me vengan con el catastrofismo de la Rosada."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "🐻 Masacre monetaria",
          texto: "Deplorable maniobra de comunismo soviético. Están secando la plaza y destruyendo el circulante. Terminan en hiperinflación o default del balance."
        };
      }
    }
  },

  carlos_melconian: {
    nombre: "Carlos Melconian",
    usuario: "@CarlosMelconian",
    instagram: "@melconiancarlos",
    rol: "Economista & Asesor Macroeconómico (Parodia)",
    ejeCultural: "macro_ortodoxa",
    avatar: _svgAvatar('CM', '%230f172a', '%2394a3b8'),
    generarReaccion: function(decision, flags, vector) {
      const tieneConsistencia = (decision?.impactoMacro?.inflacionMensual || 0) <= 0;
      if (tieneConsistencia) {
        return {
          tipo: "banca",
          badge: "🍝 Fideo con tuco",
          texto: "Acá pusiste la pata en el barro. Sin magia, esto es fideo con tuco: si no tenés reservas en el Central, no inventés el tiro libre al ángulo. Bien encaminado."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "⚽ Fuera de juego",
          texto: "Te comiste el amague en el área chica, papá. Con esta tasa y sin ancla te pegás un palo contra el paredón en tres semanas. Aflojá con el dibujo."
        };
      }
    }
  },

  jorge_rial: {
    nombre: "Jorge Rial",
    usuario: "@rialjorge",
    instagram: "@jrial",
    rol: "Conductor Argenzuela / Radio 10 (Parodia)",
    ejeCultural: "chimentos_politica",
    avatar: _svgAvatar('JR', '%230f172a', '%2338bdf8'),
    generarReaccion: function(decision, flags, vector) {
      return {
        tipo: "ironico",
        badge: "💣 Bomba en Argenzuela",
        texto: "Tengo los chats de dos ministros a los gritos en Olivos. El clima es un hervidero y ya hay uno preparando la renuncia en el baúl. No digan que no avisé."
      };
    }
  },

  yanina_latorre: {
    nombre: "Yanina Latorre",
    usuario: "@yanilatorre",
    instagram: "@yanilatorre",
    rol: "Panelista & Conductora LAM (Parodia)",
    ejeCultural: "farandula_chismes",
    avatar: _svgAvatar('YL', '%23831843', '%23f472b6'),
    generarReaccion: function(decision, flags, vector) {
      return {
        tipo: "bardea",
        badge: "💅 Primicia de pasillo",
        texto: "¡Amooor, son un papelón andante! Se matan en los grupos de WhatsApp mientras fingen que está todo bien. No resisten un archivo de 24 horas, son de cuarta."
      };
    }
  },

  alfredo_casero: {
    nombre: "Alfredo Casero",
    usuario: "@agencialavieja",
    instagram: "@alfredocasero.ok",
    rol: "Actor & Humorista Visceral (Parodia)",
    ejeCultural: "indignacion_flan",
    avatar: _svgAvatar('AC', '%23451a03', '%23f59e0b'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const pideGasto = _valEje(decision, 'estatismo') < 40 || decTxt.includes("subsidio") || decTxt.includes("aumento");
      if (pideGasto) {
        return {
          tipo: "bardea",
          badge: "🍮 ¡QUIEREN FLAN!",
          texto: "¡QUIEREN FLAN! ¡LA CASA SE ESTÁ INCENDIANDO Y LOS HIJOS DE PUTA PIDEN FLAN! ¡NO HAY PLATA PARA FLAN, ENTIENDAN DE UNA VEZ!"
        };
      } else {
        return {
          tipo: "banca",
          badge: "🪵 Palo y a la bolsa",
          texto: "Por fin alguien que no les da flan con crema a los que no laburan. Córtenla con la joda que el laburante no da más."
        };
      }
    }
  },

  mirtha_legrand: {
    nombre: "Mirtha Legrand",
    usuario: "@mirthalegrand",
    instagram: "@mirthalegrand",
    rol: "Diva de los Almuerzos & Decana de la TV (Parodia)",
    ejeCultural: "television_clasica",
    avatar: _svgAvatar('ML', '%23701a75', '%23e9d5ff'),
    generarReaccion: function(decision, flags, vector) {
      return {
        tipo: "ironico",
        badge: "💎 Mesaza dominical",
        texto: "Yo no soy rencorosa, pero tengo memoria. ¿A ustedes les parece bien esta confrontación permanente? Como te ven te tratan, y si te ven mal, te maltratan."
      };
    }
  },

  susana_gimenez: {
    nombre: "Susana Giménez",
    usuario: "@Su_Gimenez",
    instagram: "@gimenezsuok",
    rol: "Diva Máxima del Entretenimiento (Parodia)",
    ejeCultural: "television_entretenimiento",
    avatar: _svgAvatar('SG', '%23713f12', '%23fef08a'),
    generarReaccion: function(decision, flags, vector) {
      return {
        tipo: "ironico",
        badge: "✨ ¡Qué amoroso!",
        texto: "¡Ay, mi amor, qué lío que tienen armado! Yo no entiendo nada de economía, pero viajo y veo que en otros países la gente gasta tranquila y no se pelea tanto. ¡Qué disparate!"
      };
    }
  },

  guillermo_francella: {
    nombre: "Guillermo Francella",
    usuario: "@g_francella_ok",
    instagram: "@francella_fans",
    rol: "Actor Popular Argentino (Parodia)",
    ejeCultural: "cine_popular",
    avatar: _svgAvatar('GF', '%231e3a8a', '%2393c5fd'),
    generarReaccion: function(decision, flags, vector) {
      return {
        tipo: "ironico",
        badge: "☕ Hermosa mañana, ¿verdad?",
        texto: "A ver... hay que tener paciencia, viejo. No se puede arreglar un desastre de cuarenta años en tres meses. Dejemos laburar un poco a ver qué pasa."
      };
    }
  },

  esteban_trebucq: {
    nombre: "Esteban Trebucq",
    usuario: "@trebuqok",
    instagram: "@trebucq",
    rol: "Conductor LN+ / El Pelado de la Calle (Parodia)",
    ejeCultural: "calle_periodismo",
    avatar: _svgAvatar('ET', '%230f172a', '%2338bdf8'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      if (decTxt.includes("precios") || decTxt.includes("carne") || decTxt.includes("supermercado")) {
        return {
          tipo: "bardea",
          badge: "🎙️ Micrófono en la parada de bondi",
          texto: "Andá a preguntarle a la señora en González Catán si le alcanza para el kilo de milanesas. No les da el cuero para mirar a la gente a los ojos, viejo."
        };
      } else {
        return {
          tipo: "ironico",
          badge: "🎤 Crónica al hueso",
          texto: "La gente en la calle está con la soga al cuello. El laburante no te pide subsidios ni planes: te pide que no lo mates a impuestos."
        };
      }
    }
  },

  viviana_canosa: {
    nombre: "Viviana Canosa",
    usuario: "@vivicanosaok",
    instagram: "@vivianacanosaok",
    rol: "Conductora & Periodista de Opinión (Parodia)",
    ejeCultural: "opinion_visceral",
    avatar: _svgAvatar('VC', '%23831843', '%23f472b6'),
    generarReaccion: function(decision, flags, vector) {
      return {
        tipo: "bardea",
        badge: "🔥 Editorial apasionada",
        texto: "Están destruyendo a la familia, a los valores y al sentido común. Se olvidaron de Dios y de la Patria para negociar sillones en un café coqueto. Me dan pena."
      };
    }
  },

  santi_maratea: {
    nombre: "Santi Maratea",
    usuario: "@santimaratea",
    instagram: "@santimaratea",
    rol: "Influencer de Fideicomisos & Colectas (Parodia)",
    ejeCultural: "colectas_redes",
    avatar: _svgAvatar('SM', '%23064e3b', '%2334d399'),
    generarReaccion: function(decision, flags, vector) {
      return {
        tipo: "ironico",
        badge: "📱 Colecta solidaria",
        texto: "Che, amigos, si armamos una vaquita entre todos por Mercado Pago compramos la deuda con los bonistas y nos dejamos de romper las bolas un rato, ¿no rinde?"
      };
    }
  },

  flavio_azzaro: {
    nombre: "Flavio Azzaro",
    usuario: "@FlavioAzzaro",
    instagram: "@flavioazzaro",
    rol: "Periodista Deportivo & Streamer AZZ (Parodia)",
    ejeCultural: "futbol_stream",
    avatar: _svgAvatar('FA', '%230f172a', '%2338bdf8'),
    generarReaccion: function(decision, flags, vector) {
      return {
        tipo: "bardea",
        badge: "⚽ El show de AZZ",
        texto: "¡Son unos fantasmas, muchachos! No tienen un solo tipo que sepa parar la pelota. Te arman una jugada para la tribuna y se comen tres goles de contra."
      };
    }
  },

  rodolfo_barili: {
    nombre: "Rodolfo Barili",
    usuario: "@barilirodolfo",
    instagram: "@rodolfobarili",
    rol: "Conductor de Telefe Noticias (Parodia)",
    ejeCultural: "noticiero_central",
    avatar: _svgAvatar('RB', '%230f172a', '%2360a5fa'),
    generarReaccion: function(decision, flags, vector) {
      return {
        tipo: "ironico",
        badge: "📺 Así están las cosas",
        texto: "Así están las cosas, país. Una jornada de enorme tensión que define el bolsillo y el futuro de millones de compatriotas. Resta saber si habrá paz o más conflicto."
      };
    }
  },

  voceria_presidencial: {
    nombre: "Vocería Presidencial",
    usuario: "@VoceriaOficial_Fic",
    instagram: "@voceriapresidencia",
    rol: "Conferencia Oficial en Casa Rosada (Parodia)",
    ejeCultural: "institucional_oficial",
    avatar: _svgAvatar('VP', '%231e293b', '%2394a3b8'),
    generarReaccion: function(decision, flags, vector) {
      return {
        tipo: "banca",
        badge: "🏛️ Sala de Conferencias",
        texto: "Estimados, muy buenos días a todos. La medida comunicada responde de manera estricta al mandato soberano encomendado por las urnas. Siguiente pregunta, por favor."
      };
    }
  },

  // ==========================================
  // EJE DEPORTIVO Y DIRIGENCIAL DEL FÚTBOL
  // ==========================================
  chiqui_tapia: {
    nombre: "Claudio 'Chiqui' Tapia",
    usuario: "@chiquitapia",
    instagram: "@chiquitapia",
    rol: "Presidente de la AFA & Campeón del Mundo (Parodia)",
    ejeCultural: "dirigencia_afa",
    avatar: _svgAvatar('CT', '%231e3a8a', '%2338bdf8'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      if (decTxt.includes("visitante")) {
        return {
          tipo: "banca",
          badge: "🏆 La Casa del Fútbol",
          texto: "El fútbol argentino es de su gente y de sus hinchas. La pasión no se privatiza ni se prohíbe. Un gran paso para la familia."
        };
      } else if (decTxt.includes("sad") || decTxt.includes("sociedad anónima") || decTxt.includes("intervenci")) {
        if (decTxt.includes("asociación civil") || decTxt.includes("blindar") || decTxt.includes("50+1")) {
          return {
            tipo: "banca",
            badge: "🏆 Defensa de las Asociaciones Civiles",
            texto: "Los clubes son de los socios y no de fondos buitres extranjeros. En este predio se formaron los campeones del mundo. No traten de entenderla."
          };
        } else {
          return {
            tipo: "bardea",
            badge: "⚽ Alerta en Viamonte",
            texto: "Si tocan la personería de la AFA o meten la IGJ, la FIFA nos desafilia y la Conmebol para la Libertadores. Cuidado con dinamitar el fútbol campeón mundial."
          };
        }
      } else {
        return {
          tipo: "ironico",
          badge: "🏆 Gestión AFA",
          texto: "Nosotros gestionamos para los 47 millones de argentinos y los clubes de todas las provincias. Sigan hablando mientras nosotros bordamos estrellas."
        };
      }
    }
  },

  juan_roman_riquelme: {
    nombre: "Juan Román Riquelme",
    usuario: "@BocaJrsOficial",
    instagram: "@bocajrsoficial",
    rol: "Presidente de Boca Juniors & 10 Histórico (Parodia)",
    ejeCultural: "cultura_club_popular",
    avatar: _svgAvatar('JRR', '%231e3a8a', '%23facc15'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      if (decTxt.includes("sad") || decTxt.includes("sociedad anónima") || decTxt.includes("privatiz") || decTxt.includes("igj")) {
        return {
          tipo: "bardea",
          badge: "🧉 Mate en mano",
          texto: "El club es de los hinchas. Nosotros amamos al club. Si vienen de afuera con billeteras millonarias es para hacer sus negocios, no para cuidar a los pibes de las inferiores. Está clarísimo."
        };
      } else if (decTxt.includes("visitante") || decTxt.includes("cancha")) {
        return {
          tipo: "banca",
          badge: "🧉 La Bombonera late",
          texto: "El hincha quiere ir a la cancha a cantar y alentar a su equipo. Cuando la cancha está llena de las dos hinchadas es una fiesta que no existe en ninguna otra parte del mundo."
        };
      } else {
        return {
          tipo: "ironico",
          badge: "🧉 Mirá qué lindo",
          texto: "Nosotros estamos muy tranquilos y muy felices. Cuidamos al socio y ganamos títulos. Los demás que sigan inventando problemas en la tele."
        };
      }
    }
  },

  juan_sebastian_veron: {
    nombre: "Juan Sebastián Verón ('La Brujita')",
    usuario: "@EdelpOficial",
    instagram: "@estudiantesdelaplata",
    rol: "Presidente de Estudiantes de La Plata (Parodia)",
    ejeCultural: "gestion_mixta_moderna",
    avatar: _svgAvatar('JSV', '%23991b1b', '%23f8fafc'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      if (decTxt.includes("50+1") || decTxt.includes("mixto") || (decTxt.includes("inversión") && decTxt.includes("club"))) {
        return {
          tipo: "banca",
          badge: "🔴⚪ Modelo Mixto e Infraestructura",
          texto: "Hay que salir de la trampa del blanco o negro. Si un socio estratégico pone 50 millones de dólares para estadio e inferiores sin quitarle la personería al socio, el club vuela. En Europa se hace así."
        };
      } else if (decTxt.includes("sad") && decTxt.includes("privatiz")) {
        return {
          tipo: "ironico",
          badge: "🔴⚪ Modernización con identidad",
          texto: "No se puede regalar el club como una empresa de galletitas, pero tampoco podemos seguir con dirigentes feudales que no pueden pagar la luz del polideportivo."
        };
      } else {
        return {
          tipo: "ironico",
          badge: "🔴⚪ La escuela de City Bell",
          texto: "Trabajo, educación para los juveniles y planificación a largo plazo. Los gritos y la demagogia no construyen un centro de alto rendimiento."
        };
      }
    }
  },

  andres_fassi: {
    nombre: "Andrés Fassi",
    usuario: "@CATalleresdecba",
    instagram: "@tallerescbaoficial",
    rol: "Presidente de Talleres de Córdoba (Parodia)",
    ejeCultural: "corporativo_aperturista",
    avatar: _svgAvatar('AF', '%230f172a', '%2338bdf8'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      if (decTxt.includes("sad") || decTxt.includes("inversión") || decTxt.includes("igj") || decTxt.includes("intervenci")) {
        return {
          tipo: "banca",
          badge: "💼 Debate estructural del fútbol",
          texto: "No le tengamos miedo al capital ni a la transparencia. El fútbol argentino está empobrecido y rehén de cuatro caudillos. Talleres demostró que con gestión corporativa e inversión seria se compite de igual a igual en el continente."
        };
      } else if (decTxt.includes("blindar") || decTxt.includes("asociación civil")) {
        return {
          tipo: "bardea",
          badge: "💼 Crítica al statu quo",
          texto: "Blindar la mediocridad es condenar a los clubes a la quiebra encubierta y a la reventa de juveniles por migajas. El mundo avanzó 40 años mientras acá defendemos estructuras feudales."
        };
      } else {
        return {
          tipo: "ironico",
          badge: "💼 Gestión Córdoba",
          texto: "El modelo es sustentabilidad financiera, patrimonio propio y superávit operativo. Lo demás es relato para sostener privilegios de escritorio."
        };
      }
    }
  },

  // ==========================================
  // EJE CORPORATIVO, PLATAFORMAS & CONSUMO
  // ==========================================
  marcos_galperin: {
    nombre: "Marcos Galperin",
    usuario: "@marcos_galperin",
    instagram: "@marcosgalperin",
    rol: "Fundador de Mercado Libre / Unicornio Tecnológico (Parodia)",
    ejeCultural: "empresariado_tech",
    avatar: _svgAvatar('MG', '%23facc15', '%231e3a8a'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const tocaFintech = decTxt.includes("qr") || decTxt.includes("interoperab") || decTxt.includes("billetera") || decTxt.includes("mercado pago") || decTxt.includes("retenci") || decTxt.includes("arca") || decTxt.includes("afip");

      if (tocaFintech) {
        if (decTxt.includes("interoperabilidad") || decTxt.includes("obligatoria") || decTxt.includes("estatal") || decTxt.includes("impuesto") || decTxt.includes("congel")) {
          return {
            tipo: "bardea",
            badge: "🐦 Tweet desde Uruguay",
            texto: "Increíble el afán de los burócratas por destruir lo único que funciona en este país. Regulando el aire y la innovación desde 1945. Suerte con eso."
          };
        } else {
          return {
            tipo: "banca",
            badge: "🚀 Innovación & Capital",
            texto: "El libre comercio y la tecnología siempre terminan ganando contra el atraso corporativo. A seguir democratizando el comercio y los pagos digitales."
          };
        }
      } else if (_valEje(decision, 'estatismo') > 65 || decTxt.includes("privatiz") || decTxt.includes("desregul")) {
        return {
          tipo: "banca",
          badge: "🚀 Reglas claras",
          texto: "Menos burocracia, más competencia y reglas claras de mercado. Es el único camino para salir de la decadencia secular de Argentina."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "🐦 Reflexión liberal",
          texto: "La adicción fiscal y regulatoria de la política argentina es incurable. Cuando el mundo avanza hacia la inteligencia artificial acá discuten cómo cazar en el zoológico."
        };
      }
    }
  },

  alfredo_coto: {
    nombre: "Alfredo Coto",
    usuario: "@CotoOficial_Fic",
    instagram: "@coto_ar",
    rol: "Patriarca Supermercadista & Carnicero Histórico (Parodia)",
    ejeCultural: "retail_empresariado",
    avatar: _svgAvatar('AC', '%23b91c1c', '%23fef08a'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const tocaSupermercado = decTxt.includes("supermercado") || decTxt.includes("góndola") || decTxt.includes("precio") || decTxt.includes("carne") || decTxt.includes("alimento") || decTxt.includes("inspección") || decTxt.includes("clausur");

      if (tocaSupermercado) {
        if (decTxt.includes("control") || decTxt.includes("inspecc") || decTxt.includes("clausur") || decTxt.includes("multa") || decTxt.includes("congel")) {
          return {
            tipo: "bardea",
            badge: "🥩 Coto yo te conozco",
            texto: "A ver muchachos, yo empecé con una carnicería en el Once y me conozco todos los costos de memoria. Si me mandás inspectores me frenás la logística y al otro día no tenés carne en la góndola. Déjense de joder."
          };
        } else {
          return {
            tipo: "banca",
            badge: "🛒 Volumen y Logística",
            texto: "Coto yo te conozco. Hay que competir, bajar el costo impositivo y abastecer a la gente. Con laburo y volumen los precios se acomodan solos."
          };
        }
      } else {
        return {
          tipo: "ironico",
          badge: "🥩 En la trinchera del súper",
          texto: "Acá no hay misterios: hay que abrir las persianas a las 7 de la mañana, descargar los camiones y no asustarse con las tormentas políticas. El país se saca adelante trabajando."
        };
      }
    }
  },

  // ==========================================
  // FAUNA EXTREMA: ROSCA FEUDAL, SINDICAL Y POPULAR
  // ==========================================
  gobernador_feudal: {
    nombre: "Gobernador del Norte Feudal (Gildo / Zamora / Jalil)",
    usuario: "@GobernadorNorte_Fic",
    instagram: "@gobernacion_norte",
    rol: "Patriarca Provincial & Dueño del Empleo Público (Parodia)",
    ejeCultural: "rosca_feudal",
    avatar: _svgAvatar('GF', '%2314532d', '%2386efac'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const recortaProvincia = decTxt.includes("recort") && (decTxt.includes("obra") || decTxt.includes("coparticipaci") || decTxt.includes("transferencia") || decTxt.includes("provincia"));
      const daFondos = decTxt.includes("fondo") || decTxt.includes("subsidio") || decTxt.includes("coparticipaci") || decTxt.includes("acuerdo federal") || decTxt.includes("bono");

      if (recortaProvincia) {
        return {
          tipo: "bardea",
          badge: "🏛️ Amenaza en el Senado",
          texto: "Todo muy lindo con la teoría económica de la Capital, doctor. Pero acá los sueldos se pagan con coparticipación. Si no baja la partida el viernes, mis cuatro senadores le votan en contra hasta el feriado de Pascua."
        };
      } else if (daFondos) {
        return {
          tipo: "banca",
          badge: "🏛️ Rosca Federal Blindada",
          texto: "Un hombre de palabra. Cuente con los votos de nuestra provincia para blindar el paquete fiscal. La gobernabilidad se construye con hechos."
        };
      } else {
        return {
          tipo: "ironico",
          badge: "🏛️ Pulso de los caudillos",
          texto: "La Capital Federal siempre mirando su ombligo. Sin el interior profundo no hay país ni quórum en el Congreso."
        };
      }
    }
  },

  burocrata_cgt: {
    nombre: "El Burócrata de la CGT (Daer / Moyano)",
    usuario: "@SecretariadoCGT_Fic",
    instagram: "@cgt_oficial_fic",
    rol: "Jerarca Sindical & Camionero Histórico (Parodia)",
    ejeCultural: "corporacion_sindical",
    avatar: _svgAvatar('CGT', '%231e3a8a', '%2360a5fa'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const atacaSindicato = decTxt.includes("laboral") || decTxt.includes("obra social") || decTxt.includes("huelga") || decTxt.includes("esencial") || decTxt.includes("multa");
      const cedeParitaria = decTxt.includes("paritaria") || decTxt.includes("bono") || decTxt.includes("salario") || decTxt.includes("convenio");

      if (atacaSindicato) {
        return {
          tipo: "bardea",
          badge: "🚚 Camiones cruzados en Panamericana",
          texto: "Están jugando con fuego al lado de un tanque de nafta. No miden las consecuencias. En 15 minutos te cruzo los camiones en Panamericana y el lunes no entra un litro de leche a la Ciudad. Prueben gobernar sin nosotros."
        };
      } else if (cedeParitaria) {
        return {
          tipo: "banca",
          badge: "🤝 Paz Social Firmada",
          texto: "Saludamos la madurez de la patronal y del gobierno. Mientras el bolsillo de los afiliados no se toque, la paz social está garantizada."
        };
      } else {
        return {
          tipo: "ironico",
          badge: "☕ Café en Azopardo",
          texto: "Los ministros pasan, las corporaciones sindicales quedan. No nos busquen la lengua."
        };
      }
    }
  },

  conductora_magazine: {
    nombre: "Conductora de Magazine Matutino (Georgina / Carmen / Mariana)",
    usuario: "@MagazineEnVivo_Fic",
    instagram: "@manana_en_vivo",
    rol: "Diva Matutina & Empatía Doméstica (Parodia)",
    ejeCultural: "television_manana",
    avatar: _svgAvatar('MM', '%23be185d', '%23fbcfe8'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const angustiaConsumo = decTxt.includes("alimento") || decTxt.includes("precio") || decTxt.includes("carne") || decTxt.includes("remedio") || decTxt.includes("medicament") || decTxt.includes("tarifa") || decTxt.includes("apagón");
      const alivioDomestico = decTxt.includes("crédito") || decTxt.includes("bono") || decTxt.includes("remedio gratis") || decTxt.includes("jubilad") || decTxt.includes("alivio");

      if (angustiaConsumo && !alivioDomestico) {
        return {
          tipo: "bardea",
          badge: "🍳 Llanto en vivo con la cacerola",
          texto: "¡Chicos, no se puede vivir así! ¿Cómo le explico a la señora Rosa que no puede comprar medio kilo de pan lactal? ¡Alguien tiene que tener un poco de piedad por este país!"
        };
      } else if (alivioDomestico) {
        return {
          tipo: "banca",
          badge: "✨ Mensaje de Graciela de Caseros",
          texto: "¡Ay, qué alivio! Me escribe Graciela de Caseros llorando porque al fin va a poder cambiar el calefón. Festejemos una, mi amor."
        };
      } else {
        return {
          tipo: "ironico",
          badge: "🍳 Cocinando en vivo",
          texto: "Miren lo que es esta tarta de acelga, chicos. Para hacerla tuvimos que pedir un préstamo en el banco. ¡Qué locura!"
        };
      }
    }
  },

  guillermo_aquino: {
    nombre: "Guillermo Aquino",
    usuario: "@droganacional",
    instagram: "@aquino_guille",
    rol: "Humorista & Cínico de Trinchera (Parodia)",
    ejeCultural: "cinismo_millennial",
    avatar: _svgAvatar('GA', '%230f172a', '%23f59e0b'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const medidaDesesperada = decTxt.includes("congel") || decTxt.includes("control") || decTxt.includes("bono") || decTxt.includes("esperanza") || decTxt.includes("dnu");
      const ajusteCrudo = decTxt.includes("ajuste") || decTxt.includes("desregul") || decTxt.includes("mercado") || decTxt.includes("privatiz");

      if (medidaDesesperada && !ajusteCrudo) {
        return {
          tipo: "bardea",
          badge: "🎬 Sketch neurótico al límite",
          texto: "Mirá ese anuncio, hermano. Tiene la misma credibilidad que tu ex diciendo que cambió. Estamos esperando el impacto del meteorito tomando mate cocido vencido."
        };
      } else if (ajusteCrudo) {
        return {
          tipo: "ironico",
          badge: "🎬 Que sobreviva el más fuerte",
          texto: "Pusieron el país en modo 'que sobreviva el más fuerte' mientras los algoritmos nos venden zapatillas que salen lo mismo que un monoambiente en Lanús."
        };
      } else {
        return {
          tipo: "bardea",
          badge: "🎬 Ansiedad existencial",
          texto: "No hay forma de que esto termine bien, pero al menos tenemos memes y taquicardia para bancar la semana."
        };
      }
    }
  },

  l_gante: {
    nombre: "Elián Valenzuela ('L-Gante')",
    usuario: "@Lgante_Keloke",
    instagram: "@lgante_keloke",
    rol: "Referente RKT & Cumbia 420 (Parodia)",
    ejeCultural: "rkt_barrio",
    avatar: _svgAvatar('LG', '%23854d0e', '%23facc15'),
    generarReaccion: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const operativosBarrio = decTxt.includes("operativo") || decTxt.includes("polic") || decTxt.includes("satur") || decTxt.includes("documento") || decTxt.includes("seguridad");
      const fiestaPopular = decTxt.includes("recital") || decTxt.includes("cancha") || decTxt.includes("cumbia") || decTxt.includes("fiesta");

      if (operativosBarrio && !fiestaPopular) {
        return {
          tipo: "bardea",
          badge: "🔊 RKT desde General Rodríguez",
          texto: "Ponen sirenas para asustar giles y a los pibes que van a laburar los paran cada dos cuadras a pedir documento. En el barrio nos conocemos todos, rescatensé un toque."
        };
      } else if (fiestaPopular) {
        return {
          tipo: "banca",
          badge: "🔊 La cumbia no se mancha perri",
          texto: "La cumbia no se mancha, perri. Pa' los pibes del fondo que la pelean todos los días, un poco de fiesta viene de diez."
        };
      } else {
        return {
          tipo: "ironico",
          badge: "🔊 420 pa' los negros",
          texto: "Mucha corbata, mucho chamuyo fino en la tele, pero en el barrio la realidad se mide en la calle y con la gente."
        };
      }
    }
  }
};

// Generador de reacciones de Famosos tras cada decisión.
// Devuelve un Array compatible con .forEach y .length, pero enriquecido con:
// .conteo = { bancan, bardean, neutros, total }
// .bancan = [...]
// .bardean = [...]
// .neutros = [...]
// .todas = [...]
function obtenerReaccionesFamosos(dilemaId, opcionElegida, flags, vector) {
  // Manejo flexible de parámetros si el primer argumento es la opción
  let decision = opcionElegida;
  let flagMap = flags || {};
  let vecMap = vector || {};

  if (dilemaId && typeof dilemaId === 'object' && dilemaId.texto !== undefined) {
    decision = dilemaId;
    flagMap = opcionElegida || {};
    vecMap = flags || {};
  } else if (!decision && typeof dilemaId === 'object') {
    decision = dilemaId;
  }

  decision = decision || { texto: "" };
  const decTxt = (decision.texto || "").toLowerCase();

  // Evaluar a TODOS los famosos para tener dinamismo numérico real
  const todas = [];
  const bancan = [];
  const bardean = [];
  const neutros = [];

  for (const [key, fam] of Object.entries(FAMOSOS_ARGENTINOS)) {
    const reac = fam.generarReaccion(decision, flagMap, vecMap);
    const item = {
      clave: key,
      nombre: fam.nombre,
      usuario: fam.usuario,
      instagram: fam.instagram,
      rol: fam.rol,
      ejeCultural: fam.ejeCultural,
      avatar: fam.avatar,
      tipo: reac.tipo, // 'banca', 'bardea', 'ironico', 'neutro'
      badge: reac.badge,
      comentario: reac.texto
    };

    todas.push(item);
    if (reac.tipo === 'banca') {
      bancan.push(item);
    } else if (reac.tipo === 'bardea') {
      bardean.push(item);
    } else {
      neutros.push(item);
    }
  }

  // Seleccionar destacadas prioritarias según palabras clave temáticas
  const scoreMap = {};
  for (const item of todas) {
    let score = 1;
    const k = item.clave;

    // Triggers temáticos directos
    if ((decTxt.includes("qr") || decTxt.includes("fintech") || decTxt.includes("mercado pago") || decTxt.includes("galperin") || decTxt.includes("banco")) &&
        ["marcos_galperin", "manuel_adorni", "gordo_dan", "carlos_maslaton", "pedro_rosemblat"].includes(k)) {
      score += 15;
    }
    if ((decTxt.includes("supermercado") || decTxt.includes("góndola") || decTxt.includes("alimento") || decTxt.includes("coto")) &&
        ["alfredo_coto", "guillermo_moreno", "esteban_trebucq", "migue_granados"].includes(k)) {
      score += 15;
    }
    if ((decTxt.includes("apagón") || decTxt.includes("edesur") || decTxt.includes("vela") || decTxt.includes("cuadrilla")) &&
        ["pedro_rosemblat", "baby_etchecopar", "chiche_gelblung", "diego_brancatelli"].includes(k)) {
      score += 15;
    }

    // Triggers temáticos directos
    if ((decTxt.includes("visitante") || decTxt.includes("cancha") || decTxt.includes("fútbol") || decTxt.includes("sad") || decTxt.includes("club") || decTxt.includes("afa")) &&
        ["chiqui_tapia", "gordo_dan", "juan_roman_riquelme", "juan_sebastian_veron", "andres_fassi", "flavio_azzaro"].includes(k)) {
      score += 15;
    }

    // Triggers temáticos directos
    if ((decTxt.includes("cine") || decTxt.includes("incaa") || decTxt.includes("cultura")) &&
        ["lali_esposito", "julia_mengolini", "pedro_rosemblat", "agustin_laje", "manuel_adorni", "gordo_dan", "carlos_maslaton"].includes(k)) {
      score += 10;
    }
    if ((decTxt.includes("patruller") || decTxt.includes("seguridad") || decTxt.includes("polic") || decTxt.includes("cárcel")) &&
        ["baby_etchecopar", "chiche_gelblung", "cinthia_fernandez", "eduardo_feinmann", "myriam_bregman", "moria_casan"].includes(k)) {
      score += 10;
    }
    if ((decTxt.includes("decreto") || decTxt.includes("dnu") || decTxt.includes("congreso")) &&
        ["maria_odonnell", "ernesto_tenembaum", "nelson_castro", "manuel_adorni"].includes(k)) {
      score += 10;
    }
    if ((decTxt.includes("carne") || decTxt.includes("precio") || decTxt.includes("alimento") || decTxt.includes("asado")) &&
        ["guillermo_moreno", "migue_granados", "esteban_trebucq"].includes(k)) {
      score += 10;
    }
    if ((decTxt.includes("piquete") || decTxt.includes("corte")) &&
        ["ramiro_marra", "juan_grabois", "sergio_tronco", "eduardo_feinmann"].includes(k)) {
      score += 10;
    }
    if ((decTxt.includes("alquiler") || decTxt.includes("estudiantil") || decTxt.includes("joven")) &&
        ["ofelia_fernandez", "nico_occhiato", "myriam_bregman"].includes(k)) {
      score += 10;
    }
    if ((decTxt.includes("jubilad") || decTxt.includes("tarifa") || decTxt.includes("conurbano")) &&
        ["diego_brancatelli", "beto_casella"].includes(k)) {
      score += 10;
    }
    scoreMap[k] = score;
  }

  // Ordenar destacadas: mezcla balanceada de quienes bancan, bardean e irónicos
  const bancanSort = [...bancan].sort((a, b) => (scoreMap[b.clave] || 0) - (scoreMap[a.clave] || 0));
  const bardeanSort = [...bardean].sort((a, b) => (scoreMap[b.clave] || 0) - (scoreMap[a.clave] || 0));
  const neutrosSort = [...neutros].sort((a, b) => (scoreMap[b.clave] || 0) - (scoreMap[a.clave] || 0));

  const destacadas = [];
  if (bancanSort[0]) destacadas.push(bancanSort[0]);
  if (bardeanSort[0]) destacadas.push(bardeanSort[0]);
  if (bancanSort[1]) destacadas.push(bancanSort[1]);
  if (bardeanSort[1]) destacadas.push(bardeanSort[1]);
  if (neutrosSort[0]) destacadas.push(neutrosSort[0]);
  if (bancanSort[2]) destacadas.push(bancanSort[2]);

  // Si aún hay menos de 4, completar con las de mayor score
  if (destacadas.length < 4) {
    const restantes = todas.filter(t => !destacadas.some(d => d.clave === t.clave))
                           .sort((a, b) => (scoreMap[b.clave] || 0) - (scoreMap[a.clave] || 0));
    for (const r of restantes) {
      if (destacadas.length >= 4) break;
      destacadas.push(r);
    }
  }

  // Crear resultado como Array nativo para total compatibilidad hacia atrás
  const resultado = [...destacadas];

  // Adosar metadatos de termómetro numérico
  resultado.conteo = {
    bancan: bancan.length,
    bardean: bardean.length,
    neutros: neutros.length,
    total: todas.length
  };
  resultado.bancan = bancan;
  resultado.bardean = bardean;
  resultado.neutros = neutros;
  resultado.todas = todas;
  resultado.porcentajeApoyo = Math.round((bancan.length / Math.max(1, bancan.length + bardean.length)) * 100);

  return resultado;
}

// Exportación para entornos Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { FAMOSOS_ARGENTINOS, obtenerReaccionesFamosos };
}
