// entorno_cercano.js - Sistema de Termómetro de Entorno Cercano, Afectos y Vínculos
// Representa la red personal de afectos y relaciones del personaje cuando es adolescente
// o cuando no ocupa un cargo público (Familia, Pareja, Amigos, Entrenador y Entorno Formativo/Barrial).

(function() {
  const ENTORNO_CERCANO = {
    // =========================================================================
    // 1. FAMILIA DIRECTA
    // =========================================================================
    mama: {
      id: "mama",
      nombre: "Mamá (Hogar & Familia)",
      rol: "Madre & Contención Familiar",
      categoria: "familia",
      icono: "fa-solid fa-house-chimney-user",
      color: "amber",
      generarReaccion: function(decision, fase, perfilAdol) {
        const txt = (decision?.texto || "").toLowerCase();
        const id = decision?.id || "";

        if (fase === 'cuna') {
          if (id === 'estudios_academicos' || txt.includes('estudio') || txt.includes('examen') || txt.includes('facultad') || txt.includes('abanderado') || txt.includes('colegio')) {
            return {
              postura: "bancan",
              badge: "💚 Orgullo de mamá",
              texto: "¡Hijo querido, qué orgullo! Estudiar y formarte es la única herencia que nadie te va a poder sacar nunca en la vida. Me quedo tranquila viéndote comprometido con tus libros."
            };
          } else if (id === 'deporte_federado' || txt.includes('deporte') || txt.includes('club') || txt.includes('entrenamiento')) {
            return {
              postura: "neutros",
              badge: "⚠️ No descuides las materias",
              texto: "Me alegra muchísimo que hagas deporte y tengas disciplina física hijo, pero por favor no me descuides las carpetas ni las materias que después andamos a las corridas en diciembre."
            };
          } else {
            return {
              postura: "bardean",
              badge: "💔 Preocupación materna",
              texto: "Hijo, me alegro que tengas amigos y te despejes, pero no podés llegar a las mil de la noche un día de semana. Cuidate mucho y dormí bien que estás creciendo."
            };
          }
        } else {
          // Fase Militante / Territorial
          if (txt.includes('represion') || txt.includes('desalojo') || txt.includes('expropiacion') || txt.includes('toma') || txt.includes('choque') || txt.includes('goma')) {
            return {
              postura: "bardean",
              badge: "💔 Angustia por tu seguridad",
              texto: "Hijo por favor cuidate la espalda, me da pánico que te repriman o que quedes pegado en una causa policial. Ayudar a la gente humilde está bien, pero pensá en tu futuro."
            };
          } else {
            return {
              postura: "bancan",
              badge: "💚 Alivio y bendición",
              texto: "Me alegra verte sano y metido en cosas nobles hijo. Nunca te olvides de tus valores de casa y no te dejes marear por promesas de gente que no conocés."
            };
          }
        }
      }
    },

    papa: {
      id: "papa",
      nombre: "Papá (Familia & Trabajo)",
      rol: "Padre & Cultura del Esfuerzo",
      categoria: "familia",
      icono: "fa-solid fa-user-tie",
      color: "sky",
      generarReaccion: function(decision, fase, perfilAdol) {
        const txt = (decision?.texto || "").toLowerCase();
        const id = decision?.id || "";

        if (fase === 'cuna') {
          if (id === 'estudios_academicos' || txt.includes('estudio') || txt.includes('tecnicatura') || txt.includes('carrera')) {
            return {
              postura: "bancan",
              badge: "📚 Cultura del esfuerzo",
              texto: "El estudio paga siempre. En este país el que no tiene un oficio serio o un título universitario la rema en dulce de leche. Meté cabeza que vas bien."
            };
          } else if (id === 'deporte_federado' || txt.includes('deporte') || txt.includes('club') || txt.includes('entrenamiento')) {
            return {
              postura: "bancan",
              badge: "⚽ Fuerza y carácter",
              texto: "Poné la pierna fuerte y aprendé a bancar al compañero. El club te curte el lomo y te enseña que nadie te regala nada. Bien jugado."
            };
          } else {
            return {
              postura: "neutros",
              badge: "⚖️ Advertencia de constancia",
              texto: "Está bien relajarse con los amigos un rato, pero no te me duermas en los laureles. Los hábitos que no construís a tu edad después te pasan factura de grande."
            };
          }
        } else {
          if (txt.includes('cooperativa') || txt.includes('trabajo') || txt.includes('redes') || txt.includes('oficio')) {
            return {
              postura: "bancan",
              badge: "🛠️ Dignidad del laburo",
              texto: "El trabajo dignifica y la gente lo agradece. Si vas a militar, hacelo con proyectos concretos y no con consignas vacías que no le llenan la heladera a nadie."
            };
          } else {
            return {
              postura: "neutros",
              badge: "👁️ Ojo con los chantas",
              texto: "Tené cuidado con los vivos que te aplauden de frente y te usan de escudo cuando las papas queman. En el barrio se sabe quién labura y quién es puro humo."
            };
          }
        }
      }
    },

    hermano: {
      id: "hermano",
      nombre: "Hermano/a (Familia)",
      rol: "Cómplice de Hogar",
      categoria: "familia",
      icono: "fa-solid fa-people-roof",
      color: "indigo",
      generarReaccion: function(decision, fase, perfilAdol) {
        const id = decision?.id || "";
        if (id === 'estudios_academicos') {
          return {
            postura: "neutros",
            badge: "🤓 Gaste cariñoso",
            texto: "¡Bien ahí Don Intelectual! Igual no te agrandes tanto que en casa los platos después de cenar te tocan lavarlos a vos igual eh."
          };
        } else if (id === 'deporte_federado') {
          return {
            postura: "bancan",
            badge: "⚽ Te banca en la tribuna",
            texto: "¡El sábado te voy a ver jugar al club! Si hacés un gol dedícamelo a mí, y traé alfajores del buffet a la vuelta."
          };
        } else {
          return {
            postura: "bancan",
            badge: "🤝 Aguante de hermanos",
            texto: "Te banco a muerte con lo que decidiste. Sabés que cualquier cosa que necesites me avisás y hacemos rancho aparte."
          };
        }
      }
    },

    // =========================================================================
    // 2. PAREJA (SI TIENE O SI ESTÁ SOLTERO/A)
    // =========================================================================
    pareja_activa: {
      id: "pareja",
      nombre: "Tu Pareja (Camila / Lucas)",
      rol: "Noviazgo & Vínculo Afectivo",
      categoria: "pareja",
      icono: "fa-solid fa-heart",
      color: "rose",
      condicion: "con_pareja",
      generarReaccion: function(decision, fase, perfilAdol) {
        const txt = (decision?.texto || "").toLowerCase();
        const id = decision?.id || "";

        if (fase === 'cuna') {
          if (id === 'vida_social_salud' || txt.includes('vinculo') || txt.includes('amigo') || txt.includes('relacion')) {
            return {
              postura: "bancan",
              badge: "💖 Amor & Compañerismo",
              texto: "Gordi, me encanta que te hagas tiempo para los dos y podamos merendar o salir a caminar sin andar a las corridas. Te banco en todas."
            };
          } else {
            return {
              postura: "bardean",
              badge: "💔 Reclama tiempo juntos",
              texto: "Me alegro mil de que te esfuerces tanto, pero me clavás el visto ocho horas seguidas y el finde te la pasás concentrado. ¿Cuándo nos vemos nosotros?"
            };
          }
        } else {
          if (txt.includes('asamblea') || txt.includes('barrio') || txt.includes('noche') || txt.includes('milit')) {
            return {
              postura: "bardean",
              badge: "💔 Celos de la militancia",
              texto: "Gordi, ¿tu única novia es la unidad básica? Vivís de plenario en plenario y cancelás todas las cenas. Hace dos semanas que no charlamos tranquilos."
            };
          } else {
            return {
              postura: "bancan",
              badge: "💖 Aguante incondicional",
              texto: "Te acompaño a la volanteada y después nos vamos a comer algo rico. Me encanta verte con tanta pasión, pero no te olvides de mí."
            };
          }
        }
      }
    },

    soltero_libre: {
      id: "soltero",
      nombre: "Sin Pareja Formal (Soltería Libre)",
      rol: "Soltería & Autonomía Personal",
      categoria: "pareja",
      icono: "fa-solid fa-heart-crack",
      color: "slate",
      condicion: "sin_pareja",
      generarReaccion: function(decision, fase, perfilAdol) {
        return {
          postura: "bancan",
          badge: "🕊️ Cero dramas afectivos",
          texto: "Cero reclamos sentimentales ni escenas de celos. Los pibes te joden para que te pongas de novio, pero vos disfrutás de no tener que dar explicaciones de horarios a nadie y meterle 100% a tus proyectos."
        };
      }
    },

    // =========================================================================
    // 3. AMISTADES & GRUPO DE PARES
    // =========================================================================
    mejor_amigo: {
      id: "mejor_amigo",
      nombre: "Nico (Tu Mejor Amigo)",
      rol: "Amigo de Fierro de la Infancia",
      categoria: "amigos",
      icono: "fa-solid fa-handshake",
      color: "emerald",
      generarReaccion: function(decision, fase, perfilAdol) {
        const id = decision?.id || "";
        const txt = (decision?.texto || "").toLowerCase();

        if (id === 'vida_social_salud' || txt.includes('amigo') || txt.includes('pares') || txt.includes('salud')) {
          return {
            postura: "bancan",
            badge: "🤝 Lealtad incondicional",
            texto: "¡Esa es mi bestia! El viernes cae asado y torneo de Play. No te rescates nunca amigo, los verdaderos amigos están en las buenas y en las malas."
          };
        } else if (id === 'estudios_academicos') {
          return {
            postura: "bardean",
            badge: "⚠️ Reclama que no te cortes",
            texto: "Che fantasma, ¿te comió el personaje de alumno ejemplar? Hace dos semanas que no asomás la cabeza por la esquina. Pasate a tomar unos mates aunque sea."
          };
        } else {
          return {
            postura: "neutros",
            badge: "🤜 Te hace la segunda",
            texto: "Te banco con lo que decidiste encarar hermano. Mientras no te olvides de dónde saliste, yo te hago la segunda en lo que sea."
          };
        }
      }
    },

    grupo_pibes: {
      id: "grupo_pibes",
      nombre: "Los Pibes del Grupo / La Esquina",
      rol: "Grupo de Pares del Barrio",
      categoria: "amigos",
      icono: "fa-solid fa-users",
      color: "teal",
      generarReaccion: function(decision, fase, perfilAdol) {
        const id = decision?.id || "";
        if (id === 'deporte_federado') {
          return {
            postura: "bancan",
            badge: "⚽ La banda en la tribuna",
            texto: "¡Copamos la tribuna del club el sábado con los bombos amigo! Si te cobran penal pedila vos que no te tiembla el pulso."
          };
        } else if (id === 'estudios_academicos') {
          return {
            postura: "neutros",
            badge: "📖 Respeto al bocho",
            texto: "Bien ahí quemando pestañas. Pasá los resúmenes para el examen que la mitad del curso se va a marzo derecho."
          };
        } else {
          return {
            postura: "bancan",
            badge: "🔥 La banda te banca",
            texto: "Nosotros te bancamos siempre. Si vos estás firme, el grupo te cuida la espalda en cualquier lado."
          };
        }
      }
    },

    // =========================================================================
    // 4. ENTRENADOR & DEPORTES (SI TIENE CLUB O SI HACE LIBRE)
    // =========================================================================
    entrenador_club: {
      id: "entrenador_club",
      nombre: "Profe Gómez (DT del Club de Barrio)",
      rol: "Director Técnico & Preparador Físico",
      categoria: "entrenador",
      icono: "fa-solid fa-futbol",
      color: "green",
      condicion: "con_entrenador",
      generarReaccion: function(decision, fase, perfilAdol) {
        const id = decision?.id || "";
        const txt = (decision?.texto || "").toLowerCase();

        if (id === 'deporte_federado' || txt.includes('deporte') || txt.includes('club') || txt.includes('fisico') || txt.includes('entrena')) {
          return {
            postura: "bancan",
            badge: "⚽ Camiseta titular asegurada",
            texto: "¡Así se entrena, carajo! Con esta entrega física y esta constancia en las prácticas, el sábado tenés la camiseta titular asegurada. A no aflojar."
          };
        } else if (id === 'estudios_academicos') {
          return {
            postura: "bardean",
            badge: "⚠️ Advertencia de banco de suplentes",
            texto: "Pibe, el que no viene a entrenar en la semana mira el partido desde el banco el fin de semana. En este club nadie tiene coronita por más talento que tenga."
          };
        } else {
          return {
            postura: "neutros",
            badge: "🏃 Cuidá el físico",
            texto: "Cuidá las comidas y no te quedes despierto hasta tarde antes de los partidos. El talento sin aire y sin piernas no dura más de 20 minutos."
          };
        }
      }
    },

    gimnasio_libre: {
      id: "gimnasio_libre",
      nombre: "Actividad Física Libre / Gimnasio",
      rol: "Entrenamiento Recreativo sin DT",
      categoria: "entrenador",
      icono: "fa-solid fa-dumbbell",
      color: "cyan",
      condicion: "sin_entrenador",
      generarReaccion: function(decision, fase, perfilAdol) {
        return {
          postura: "bancan",
          badge: "💪 Ritmo y salud propia",
          texto: "Hacés deporte por tu cuenta, salís a correr o vas al gimnasio cuando te dan los tiempos. Cero presión de un DT que te grite en la cancha, manejás tu salud a tu propio ritmo."
        };
      }
    },

    // =========================================================================
    // 5. ÁMBITO EDUCATIVO / COLEGIO (FASE CUNA - ADOLESCENCIA)
    // =========================================================================
    preceptor_escuela: {
      id: "preceptor",
      nombre: "Preceptor Walter (Colegio Secundario)",
      rol: "Preceptoría & Convivencia Escolar",
      categoria: "escuela",
      icono: "fa-solid fa-clipboard-user",
      color: "purple",
      faseRequerida: "cuna",
      generarReaccion: function(decision, fase, perfilAdol) {
        const id = decision?.id || "";
        if (id === 'estudios_academicos') {
          return {
            postura: "bancan",
            badge: "📋 Ficha intachable",
            texto: "Da gusto tener alumnos que cumplen con los horarios y no acumulan amonestaciones. Seguí con esta conducta que terminás el año con promedio impecable."
          };
        } else {
          return {
            postura: "neutros",
            badge: "⚠️ Ojo con el límite de faltas",
            texto: "Te tengo en la mira con las llegadas tarde en la primera hora. Acordate que a las 20 faltas perdés la regularidad y no hay certificado médico que te salve."
          };
        }
      }
    },

    profesora_rossi: {
      id: "profe_escuela",
      nombre: "Profesora Rossi (Historia & Literatura)",
      rol: "Cuerpo Docente de Secundaria",
      categoria: "escuela",
      icono: "fa-solid fa-graduation-cap",
      color: "blue",
      faseRequerida: "cuna",
      generarReaccion: function(decision, fase, perfilAdol) {
        const id = decision?.id || "";
        if (id === 'estudios_academicos') {
          return {
            postura: "bancan",
            badge: "🎓 Mención académica",
            texto: "Se nota cuando un joven lee con sentido crítico y tiene inquietudes intelectuales. Excelente entrega de trabajos prácticos, tenés futuro."
          };
        } else {
          return {
            postura: "bardean",
            badge: "📚 A diciembre si no lee",
            texto: "Muy lindo el chamuyo y la labia en los pasillos, pero los contenidos curriculares se rinden en la hoja. Si no estudiás, nos vemos en la mesa de examen."
          };
        }
      }
    },

    // =========================================================================
    // 6. ÁMBITO TERRITORIAL & MILITANTE (FASE MILITANTE / SIN CARGO PÚBLICO)
    // =========================================================================
    companero_militancia: {
      id: "companero_militancia",
      nombre: "Compañero de Agrupación (La Juventud)",
      rol: "Militancia Territorial & Volanteadas",
      categoria: "barrio",
      icono: "fa-solid fa-bullhorn",
      color: "orange",
      faseRequerida: "militante",
      generarReaccion: function(decision, fase) {
        const txt = (decision?.texto || "").toLowerCase();
        if (txt.includes('toma') || txt.includes('expropia') || txt.includes('lucha') || txt.includes('calle')) {
          return {
            postura: "bancan",
            badge: "🚩 Mística en la calle",
            texto: "¡Tremendo aguante compañero! Nos cuidamos la espalda en la calle y bancamos la parada juntos. La juventud tiene que empujar sin tibiezas."
          };
        } else {
          return {
            postura: "neutros",
            badge: "⚖️ Debate en asamblea",
            texto: "Compañero, discutimos la medida en el plenario de anoche. Algunos querían ir más a fondo, pero te bancamos la conducción táctica."
          };
        }
      }
    },

    don_tito_puntero: {
      id: "referente_barrial",
      nombre: "Don Tito (Referente Barrial / Comedor)",
      rol: "Referente Histórico del Territorio",
      categoria: "barrio",
      icono: "fa-solid fa-people-carry-box",
      color: "amber",
      faseRequerida: "militante",
      generarReaccion: function(decision, fase) {
        const txt = (decision?.texto || "").toLowerCase();
        if (txt.includes('cooperativa') || txt.includes('bolson') || txt.includes('asistencia') || txt.includes('redes')) {
          return {
            postura: "bancan",
            badge: "🏘️ Respeto territorial",
            texto: "Acá en el barrio el que camina la calle y trae soluciones reales para la gente tiene futuro. El pibe tiene pasta, sabe escuchar a los más viejos."
          };
        } else {
          return {
            postura: "neutros",
            badge: "👁️ Midiendo la espalda",
            texto: "Cuidado con prometer cosas que después no bajan del municipio. En el barrio la palabra vale más que cualquier firma en un papel membretado."
          };
        }
      }
    },

    rival_agrupacion: {
      id: "rival_agrupacion",
      nombre: "Rival de Agrupación Opositora",
      rol: "Disputa de Pasillo & Asambleas",
      categoria: "barrio",
      icono: "fa-solid fa-masks-theater",
      color: "pink",
      faseRequerida: "militante",
      generarReaccion: function(decision, fase) {
        return {
          postura: "bardean",
          badge: "🎭 Chicana de asamblea",
          texto: "Mucho discurso para la tribuna y mucha foto para las redes, pero cuando hay que embarrarse de verdad desaparecen. Veremos cuánto les dura el acting."
        };
      }
    },

    dona_rosa_vecina: {
      id: "vecinos_barrio",
      nombre: "Doña Rosa (Vecina & Almacenera)",
      rol: "Comercio de Cuadra & Vecindario",
      categoria: "barrio",
      icono: "fa-solid fa-shop",
      color: "lime",
      faseRequerida: "militante",
      generarReaccion: function(decision, fase) {
        const txt = (decision?.texto || "").toLowerCase();
        if (txt.includes('corte') || txt.includes('toma') || txt.includes('desalojo_violento')) {
          return {
            postura: "bardean",
            badge: "⚠️ Queja de comerciantes",
            texto: "A mí me parece bien que ayuden al barrio, pero si cortan la avenida o pegan afiches en la persiana del negocio me perjudican las ventas de todo el día."
          };
        } else {
          return {
            postura: "bancan",
            badge: "🛒 Bendición vecinal",
            texto: "Qué alegría ver a los chicos del barrio ocupándose de los problemas reales. Siempre comprás acá y sos educado, tenés mi apoyo."
          };
        }
      }
    }
  };

  /**
   * Genera la lista de reacciones del entorno cercano (Familia, Pareja, Amigos, Entrenador y Escuela/Barrio).
   * @param {Object} params
   * @param {string} params.fase - 'cuna' o 'militante' (o fase actual)
   * @param {Object} params.opcionElegida - Medida tomada en el dilema
   * @param {Object} [params.perfilAdolescente] - Stats de juventud
   * @param {Object} [params.configEntorno] - { tienePareja: boolean, tieneEntrenador: boolean }
   * @returns {Object} { lista, bancan, bardean, neutros, conteo, config }
   */
  function obtenerReaccionesEntornoCercano(params = {}) {
    const fase = params.fase || 'cuna';
    const opcionElegida = params.opcionElegida || { texto: "" };
    const perfilAdol = params.perfilAdolescente || { estudios: 74, saludFisica: 79, saludMental: 73, relaciones: 71, deportes: 76 };
    
    // Configuración de estado afectivo y deportivo (fijado por la suerte de la vida o provisto)
    let cfgFuente = params.configEntorno;
    if (!cfgFuente && typeof window !== 'undefined' && window.motorJuego && window.motorJuego.vidaPersonal) {
      cfgFuente = window.motorJuego.vidaPersonal;
    }
    if (!cfgFuente && typeof window !== 'undefined' && window._configEntorno) {
      cfgFuente = window._configEntorno;
    }

    const config = Object.assign({
      tienePareja: true,
      nombrePareja: "Camila",
      tieneEntrenador: true,
      nombreEntrenador: "Profe Gómez",
      suerte: 72,
      categoriaSuerte: "Con Buena Estrella",
      sorteadoPorDestino: true
    }, cfgFuente || {});

    const lista = [];
    const bancan = [];
    const bardean = [];
    const neutros = [];

    for (const [key, fig] of Object.entries(ENTORNO_CERCANO)) {
      // Filtrar según fase requerida
      if (fig.faseRequerida && fig.faseRequerida !== fase) {
        continue;
      }

      // Filtrar según condición de pareja
      if (fig.condicion === 'con_pareja' && !config.tienePareja) continue;
      if (fig.condicion === 'sin_pareja' && config.tienePareja) continue;

      // Filtrar según condición de entrenador
      if (fig.condicion === 'con_entrenador' && !config.tieneEntrenador) continue;
      if (fig.condicion === 'sin_entrenador' && config.tieneEntrenador) continue;

      const reac = fig.generarReaccion(opcionElegida, fase, perfilAdol);
      let nombreFig = fig.nombre;
      if (fig.id === 'pareja' && config.nombrePareja) {
        nombreFig = `Tu Pareja (${config.nombrePareja})`;
      }

      const card = {
        id: fig.id,
        nombre: nombreFig,
        rol: fig.rol,
        categoria: fig.categoria,
        icono: fig.icono,
        color: fig.color,
        postura: reac.postura, // 'bancan', 'bardean', 'neutros'
        badge: reac.badge,
        texto: reac.texto,
        destacado: true
      };

      lista.push(card);
      if (reac.postura === 'bancan') {
        bancan.push(card);
      } else if (reac.postura === 'bardean') {
        bardean.push(card);
      } else {
        neutros.push(card);
      }
    }

    const conteo = {
      bancan: bancan.length,
      bardean: bardean.length,
      neutros: neutros.length,
      total: lista.length
    };

    return {
      lista,
      bancan,
      bardean,
      neutros,
      todas: lista,
      conteo,
      config
    };
  }

  // Exportación dual Node / Browser
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      ENTORNO_CERCANO,
      obtenerReaccionesEntornoCercano
    };
  }

  if (typeof window !== 'undefined') {
    window.ENTORNO_CERCANO = ENTORNO_CERCANO;
    window.obtenerReaccionesEntornoCercano = obtenerReaccionesEntornoCercano;
  }
})();
