// voz_de_la_calle.js - El termómetro social directo del ciudadano de a pie
// AVISO: Testimonios satíricos y representativos de la vida cotidiana argentina
// ante las medidas de gobierno tomadas por el jugador.

function _valEjeCalle(decision, ...claves) {
  if (!decision || !decision.impacto12Axes) return 50;
  for (const c of claves) {
    if (decision.impacto12Axes[c] !== undefined) return decision.impacto12Axes[c];
  }
  return 50;
}

const CIUDADANOS_ARGENTINOS = {
  // ========================================================
  // 1. EL CARNICERO / COMERCIANTE DE BARRIO
  // ========================================================
  carnicero: {
    id: "carnicero",
    nombre: "Tito (El Carnicero de Barrio)",
    perfil: "Dueño de carnicería a la calle (Mataderos / Quilmes)",
    icono: "fa-solid fa-drumstick-bite",
    lugar: "Batea de carnicería barrial",
    generarDicho: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const recesionOTarifazoLuz = decTxt.includes("luz") || decTxt.includes("energía") || decTxt.includes("tarifa") || _valEjeCalle(decision, 'estatismo') > 65 || (decision?.impactoSectores?.claseMedia || 0) < -10;
      const fleteONafta = decTxt.includes("nafta") || decTxt.includes("combustible") || decTxt.includes("transporte");
      const congelamientoOInspectores = decTxt.includes("precios") || decTxt.includes("congel") || decTxt.includes("inspector") || decTxt.includes("clausur");
      const reactivaConsumoOBono = decTxt.includes("bono") || decTxt.includes("salario") || (decision?.impactoSectores?.claseMedia || 0) > 10;

      if (decTxt.includes("apagón") || decTxt.includes("edesur") || decTxt.includes("edenor") || decTxt.includes("vela") || decTxt.includes("cuadrilla")) {
        return {
          humor: "bronca",
          badge: "🥩 3 días sin luz en Lanús",
          texto: "Tercer día sin luz en Lanús. Tuve que tirar 80 lucas de mercadería que tenía en el freezer y a mi vieja de 80 años la tenemos que bajar por la escalera a oscuras. Las boletas las cobran al día, pero no aparece una cuadrilla ni de casualidad."
        };
      } else if (congelamientoOInspectores) {
        return {
          humor: "bronca",
          badge: "🥩 Clausuran al último orejón",
          texto: "Me vienen a clausurar a mí que soy el último orejón del tarro. Que vayan al Mercado Central o a los frigoríficos a ver quién remarca. A mí la media res me llega con aumento todas las semanas; si no remarco, cierro la persiana."
        };
      } else if (fleteONafta) {
        return {
          humor: "bronca",
          badge: "🥩 Flete por las nubes",
          texto: "El flete me cobra el doble para traerme la mercadería; tengo que trasladarlo al mostrador sí o sí. La gente no tiene un mango y yo no puedo regalar la media res."
        };
      } else if (recesionOTarifazoLuz) {
        return {
          humor: "bronca",
          badge: "🥩 Un millón y medio de luz",
          texto: "Me vino un millón y medio de luz. Decime cómo carajo hago. ¿Qué querés que haga, que apague la batea y venda la carne podrida? La gente entra, mira la pizarra, suspira y se lleva 200 gramos de alitas. Así no llego a fin de mes ni en pedo."
        };
      } else if (reactivaConsumoOBono) {
        return {
          humor: "alivio",
          badge: "🥩 El asadito del fin de semana",
          texto: "Se nota cuando cobran el bono: el primer fin de semana te limpian el vacío y el asado. El tema es que dura cinco días; después del 10 volvemos a la picada común y al menudo."
        };
      } else {
        return {
          humor: "resignacion",
          badge: "🥩 Mostrador paralizado",
          texto: "No entra un alma, viejo. Prendo las heladeras por turnos para que no me mate la boleta. Te piden tres bifes contados y que le saques hasta la grasa. La calle está muerta."
        };
      }
    }
  },

  // ========================================================
  // 2. EL PIBE DE PEDIDOSYA / RAPPI EN MOTO
  // ========================================================
  pibe_delivery: {
    id: "pibe_delivery",
    nombre: "Braian (El Pibe de PedidosYa / Rappi)",
    perfil: "Repartidor en moto de 22 años (La Matanza / CABA)",
    icono: "fa-solid fa-motorcycle",
    lugar: "Esquina esperando pedidos con la mochila térmica",
    generarDicho: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const regulaApps = decTxt.includes("regular") || decTxt.includes("sindicat") || decTxt.includes("aporte") || decTxt.includes("monotributo");
      const subeNafta = decTxt.includes("nafta") || decTxt.includes("combustible") || decTxt.includes("desregul");
      const manoDuraRobo = decTxt.includes("seguridad") || decTxt.includes("polic") || decTxt.includes("patruller") || decTxt.includes("cárcel") || _valEjeCalle(decision, 'seguridad') > 65;

      if (decTxt.includes("qr") || decTxt.includes("mercado pago") || decTxt.includes("billetera") || decTxt.includes("retenci")) {
        return {
          humor: "bronca",
          badge: "🛵 Retención a los ahorros",
          texto: "Puse tres mangos a rendir en Mercado Pago para que no se los coma la inflación y me clavaron una retención de ingresos brutos que ni sé de qué provincia es. Te afanan por respirar."
        };
      } else if (regulaApps) {
        return {
          humor: "bronca",
          badge: "🛵 Dejenme laburar tranquilo",
          texto: "¿Aportes obligatorios para bancar a un gordo sindicalista que no anduvo en moto en su vida? Ni en pedo. A mí dejenmé pedalear tranquilo. Yo me pago el monotributo y gano según lo que laburo. Si me meten trabas, no como."
        };
      } else if (subeNafta) {
        return {
          humor: "bronca",
          badge: "🛵 La nafta me come la ganancia",
          texto: "Llenar el tanque de la 110 antes era un vuelto; ahora laburo tres horas nada más que para pagar el combustible del día. Si sigue subiendo tengo que salir en bicicleta de nuevo."
        };
      } else if (manoDuraRobo) {
        return {
          humor: "alivio",
          badge: "🛵 Al fin orden en la calle",
          texto: "Al fin, loco. Salís a las once de la noche a entregar dos hamburguesas a La Matanza o a San Martín y no sabés si volvés a tu casa o terminás en una zanja por una moto de mierda. Que los metan en cana a todos."
        };
      } else {
        return {
          humor: "resignacion",
          badge: "🛵 Ruteando todo el día",
          texto: "Ruteo doce horas esquivando pozos y piquetes. Salís a ganarte el mango y entre los impuestos y la inseguridad te limpian antes de llegar a tu casa. Zona picante total."
        };
      }
    }
  },

  // ========================================================
  // 3. LA JUBILADA EN LA COLA DEL PAMI / FARMACIA
  // ========================================================
  jubilada_pami: {
    id: "jubilada_pami",
    nombre: "Nélida (La Jubilada en la Farmacia del PAMI)",
    perfil: "Docente jubilada de 72 años, viuda (Caballito / Lanús)",
    icono: "fa-solid fa-pills",
    lugar: "Fila de la farmacia del PAMI",
    generarDicho: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const copagoPrepaga = decTxt.includes("prepaga") || decTxt.includes("copago") || decTxt.includes("médic");
      const huelgaDocente = decTxt.includes("docente") || decTxt.includes("fonid") || decTxt.includes("ctera");
      const recortaRemediosOJubilacion = decTxt.includes("medicament") || decTxt.includes("pami") || decTxt.includes("jubilad") || _valEjeCalle(decision, 'estatismo') > 65 || (decision?.impactoSectores?.trabajo || 0) < 0;
      const bonoDiscrecional = decTxt.includes("bono");
      const frenaAumentos = decTxt.includes("congel") || decTxt.includes("freno") || decTxt.includes("subsidio");

      if (copagoPrepaga) {
        return {
          humor: "bronca",
          badge: "💊 El copago es una estafa",
          texto: "Fui al cardiólogo con la orden que me descuentan de la pensión y la secretaria me dice 'son 8.000 pesos de plus ético en mano'. ¿Qué plus? Si ya pagué la cuota. Me volví llorando a casa sin la receta."
        };
      } else if (huelgaDocente) {
        return {
          humor: "bronca",
          badge: "💊 37 años frente al aula",
          texto: "Aporté 37 años de maestra frente al grado. Ver a las docentes teniendo que parar porque les licúan el sueldo y les sacan el FONID me parte el alma. La educación no es un gasto, es el futuro."
        };
      } else if (recortaRemediosOJubilacion && !frenaAumentos) {
        return {
          humor: "bronca",
          badge: "💊 Nos matan en cuotas",
          texto: "Aporté 37 años de maestra, nene. ¿Y para qué? Para estar acá parada desde las 7 de la mañana mendigando un descuento para los remedios de la presión. Tuve que dejar las pastillas y las gotas para los ojos porque si compro los medicamentos no pago el gas. Nos están matando en cuotas."
        };
      } else if (bonoDiscrecional) {
        return {
          humor: "bronca",
          badge: "💊 Limosna que no alcanza",
          texto: "El bono es una limosna para tapar el parche. A fin de mes no me alcanza ni para comprar un kilo de merluza. Queremos lo que nos corresponde por ley, no que nos tiren dos pesos cuando hay elecciones."
        };
      } else if (frenaAumentos) {
        return {
          humor: "alivio",
          badge: "💊 Una buena por Dios",
          texto: "Una buena, por Dios. Por lo menos este mes puedo ir a la farmacia sin el corazón en la boca de cuánto me van a cobrar en la caja. Con lo que cuesta todo, cualquier descuentito es un respiro para los viejos."
        };
      } else {
        return {
          humor: "resignacion",
          badge: "💊 Vivir a mate cocido",
          texto: "Aporté 35 años sin faltar un solo día al colegio. Tengo que elegir qué pastilla tomar un día sí y un día no. Es una vergüenza lo que nos hacen."
        };
      }
    }
  },

  // ========================================================
  // 4. EL ESTUDIANTE DE LA UNIVERSIDAD PÚBLICA
  // ========================================================
  estudiante_publico: {
    id: "estudiante_publico",
    nombre: "Lucas (El Estudiante de la Universidad Pública)",
    perfil: "Estudiante de Medicina / UBA de 21 años (Pensión / CABA)",
    icono: "fa-solid fa-graduation-cap",
    lugar: "Parada de colectivo en Ciudad Universitaria",
    generarDicho: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const recortaUniOArancel = decTxt.includes("universidad") || decTxt.includes("arancel") || decTxt.includes("conicet") || decTxt.includes("facultad");
      const aliviaAlquilerOBoleto = decTxt.includes("alquiler") || decTxt.includes("boleto") || decTxt.includes("estudiantil") || decTxt.includes("sube");
      const reprimeMarcha = decTxt.includes("reprim") || decTxt.includes("marcha") || decTxt.includes("toma") || _valEjeCalle(decision, 'seguridad') > 70;
      const subeTransporte = decTxt.includes("transporte") || decTxt.includes("nafta") || decTxt.includes("colectivo") || decTxt.includes("tarifa");

      if (decTxt.includes("telecom") || decTxt.includes("flow") || decTxt.includes("telecentro") || decTxt.includes("cable") || decTxt.includes("módem") || decTxt.includes("streaming")) {
        return {
          humor: "bronca",
          badge: "📺 La trampa del módem",
          texto: "Llamé tres veces para dar de baja el cable porque no lo mira nadie y me pasean de operadora en operadora. Me aumentaron un 30% de prepo y si querés cortar te dicen que tenés que ir a una sucursal en la loma del orto a devolver el módem."
        };
      } else if (recortaUniOArancel) {
        return {
          humor: "bronca",
          badge: "📚 La universidad no se toca",
          texto: "Si arancelan la facultad, media camada se queda afuera. Somos la primera generación universitaria de la familia, nos rompemos el lomo laburando en un call center para pagar los apuntes y venir a cursar a la noche. No vamos a entregar la universidad pública."
        };
      } else if (reprimeMarcha) {
        return {
          humor: "bronca",
          badge: "📚 Palos a los libros",
          texto: "Gases y palos a pibes con mochilas y libros. Ese es el modelo de país que tienen: ignorantes para que nadie les discuta nada."
        };
      } else if (aliviaAlquilerOBoleto) {
        return {
          humor: "alivio",
          badge: "📚 Respiro para la SUBE",
          texto: "Un respiro real. La SUBE me liquidaba la semana: me tomo dos bondis y el tren para llegar a Ciudad Universitaria. Con esto por lo menos no tengo que elegir entre viajar o almorzar."
        };
      } else if (subeTransporte) {
        return {
          humor: "bronca",
          badge: "📚 La SUBE no da abasto",
          texto: "Tengo que elegir si voy a cursar los cinco días o me quedo leyendo en casa porque la SUBE no da abasto. Comer arroz con lo que haya ya era duro, ahora ni viajar podemos."
        };
      } else {
        return {
          humor: "resignacion",
          badge: "📚 No da más el bolsillo",
          texto: "El alquiler me come el 70% del sueldo del call center y comparto un dos ambientes con dos amigos. No da más el bolsillo, te lo juro."
        };
      }
    }
  },

  // ========================================================
  // 5. EL COLECTIVERO DEL CONURBANO
  // ========================================================
  colectivero: {
    id: "colectivero",
    nombre: "Jorge (El Colectivero del Conurbano)",
    perfil: "Chofer de línea interurbana de 45 años (Puente Pueyrredón / GBA)",
    icono: "fa-solid fa-bus",
    lugar: "Cabina de colectivo en hora pico",
    generarDicho: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const subeBoleto = decTxt.includes("boleto") || decTxt.includes("tarifa") || decTxt.includes("transporte") || decTxt.includes("sube") || decTxt.includes("nafta");
      const liberaPiquete = decTxt.includes("corte") || decTxt.includes("piquet") || decTxt.includes("protocolo") || decTxt.includes("puente") || _valEjeCalle(decision, 'seguridad') > 65;
      const congelaParitarias = decTxt.includes("paritaria") || decTxt.includes("salario") || decTxt.includes("sueldo");

      if (decTxt.includes("dota") || decTxt.includes("frecuencia") || (decTxt.includes("colectivo") && decTxt.includes("reduc"))) {
        return {
          humor: "bronca",
          badge: "🚌 Parada del 28 en Puente La Noria",
          texto: "Parada del 28 en Puente La Noria: 50 minutos esperando con frío porque 'las frecuencias están reducidas'. Pasaron tres bondis juntos con las luces apagadas y no frenó ninguno. Viajamos como animales."
        };
      } else if (decTxt.includes("visitante") || decTxt.includes("cancha")) {
        return {
          humor: "bronca",
          badge: "🚌 Vidrios rotos los domingos",
          texto: "Me toca manejar el bondi que pasa por la cancha de Chicago un domingo con visitantes... voy a terminar con todos los vidrios rotos y la recaudación afanada."
        };
      } else if (subeBoleto && !liberaPiquete) {
        return {
          humor: "bronca",
          badge: "🚌 Pongo la cara por el tarifazo",
          texto: "El que pone la jeta con el pasajero puteando soy yo arriba del bondi. Apoyan la SUBE, ven que les descuenta una fortuna y te miran como si vos fueras el dueño de la empresa. La gente viaja con una bronca que en cualquier momento te vuelan un diente."
        };
      } else if (liberaPiquete) {
        return {
          humor: "alivio",
          badge: "🚌 Por fin se puede laburar",
          texto: "Por fin se puede laburar. Tardaba tres horas para cruzar el Puente Pueyrredón con 40 grados y la gente desmayándose adentro del coche. Que reclamen en la vereda, yo tengo que cumplir el recorrido."
        };
      } else if (congelaParitarias) {
        return {
          humor: "bronca",
          badge: "🚌 Que camine todo el mundo",
          texto: "Las empresas cobran el subsidio, aumentan el pasaje, pero a nosotros nos pagan con escalas del año pasado. Si no aparece la guita en el recibo, se guardan los coches y que camine todo el mundo."
        };
      } else {
        return {
          humor: "resignacion",
          badge: "🚌 La calle es un infierno",
          texto: "La calle es un infierno. Metés nueve horas esquivando pozos gigantes, cortes y piedrazos en las cabeceras de noche. Los baches me arruinan la columna."
        };
      }
    }
  },

  // ========================================================
  // 6. EL TAXISTA TRADICIONAL DE PARADA
  // ========================================================
  taxista: {
    id: "taxista",
    nombre: "Osvaldo (El Taxista Tradicional de Parada)",
    perfil: "Dueño de licencia de taxi de 58 años (Retiro / CABA)",
    icono: "fa-solid fa-taxi",
    lugar: "Parada de taxi en Retiro",
    generarDicho: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const desregulaApps = decTxt.includes("app") || decTxt.includes("uber") || decTxt.includes("desregul") || decTxt.includes("libre mercado");
      const frenaApps = decTxt.includes("prohib") || decTxt.includes("clausur") || decTxt.includes("control");
      const subeGncORepuestos = decTxt.includes("gnc") || decTxt.includes("gas") || decTxt.includes("nafta") || decTxt.includes("combustible");

      if (desregulaApps) {
        return {
          humor: "bronca",
          badge: "🚕 Traición a los tacheros",
          texto: "Es una traición. Yo pagué la licencia, tengo registro profesional, pago desinfección, seguro para terceros transportados y VTV semestral. Cae un pibe con un auto chocado de provincia sin habilitación y me roba el viaje en la puerta de Retiro. Nos entregaron a las multinacionales."
        };
      } else if (frenaApps) {
        return {
          humor: "alivio",
          badge: "🚕 La ley tiene que ser pareja",
          texto: "Excelente. La ley tiene que ser pareja para todos. El que quiera llevar pasajeros que pinte el techo de amarillo, saque el registro que corresponde y pague los impuestos acá, no afuera."
        };
      } else if (subeGncORepuestos) {
        return {
          humor: "bronca",
          badge: "🚕 El embrague sale un millón",
          texto: "Hacerle embrague al Corsa me sale un millón de mangos. Si sube el gas y la bajada de bandera no rinde, el taxi no es más negocio. Nos quedamos a vivir arriba del auto para cambiar la plata."
        };
      } else {
        return {
          humor: "resignacion",
          badge: "🚕 La calle está muerta",
          texto: "Las aplicaciones son ilegales y a mí me piden hasta el ADN para circular. La calle está muerta, la gente camina diez cuadras antes de parar un taxi."
        };
      }
    }
  },

  // ========================================================
  // 7. EL CHANGARÍN / ALBAÑIL DE OBRAS CHICAS
  // ========================================================
  changarin: {
    id: "changarin",
    nombre: "El Rulo (Albañil y Changarín)",
    perfil: "Albañil de obras chicas de 35 años (2do cordón del Conurbano)",
    icono: "fa-solid fa-trowel-bricks",
    lugar: "Esquina esperando changa de albañilería",
    generarDicho: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const reactivaCredito = decTxt.includes("crédito") || decTxt.includes("procrear") || decTxt.includes("refacc") || decTxt.includes("reactiv") || decTxt.includes("inversión en obra");
      const frenaObra = decTxt.includes("obra") || decTxt.includes("freno") || decTxt.includes("ajuste") || decTxt.includes("parális") || _valEjeCalle(decision, 'estatismo') > 65;
      const subeComida = decTxt.includes("alimento") || decTxt.includes("precio") || decTxt.includes("inflac") || decTxt.includes("carne");

      if (frenaObra && !reactivaCredito) {
        return {
          humor: "bronca",
          badge: "🧱 Se secó la calle por completo",
          texto: "No suena el teléfono, jefe. El vecino que iba a levantar una pieza o techar el garaje te dice 'aguantame que no sé qué va a pasar'. Y de la obra pública ni hablar, echaron a todos. Se secó la calle por completo. Si no hay changa ni obra, a la noche no hay olla."
        };
      } else if (reactivaCredito) {
        return {
          humor: "alivio",
          badge: "🧱 Empezó a moverse la rueda",
          texto: "Empezó a moverse de nuevo. Con los laburos de refacción me salieron dos changas de pintura y un baño para hacer. Con que la gente tenga un mango para arreglar la casa o reactiven la obra, a nosotros nos cambia la vida."
        };
      } else if (subeComida) {
        return {
          humor: "bronca",
          badge: "🧱 Tres bolsas de fideos y chau",
          texto: "Cobro la changa del día, voy al chino y dejo todo en tres bolsas de fideos y dos paquetes de arroz. No me alcanza ni para comprarle galletitas a los pibes. Así no se aguanta."
        };
      } else {
        return {
          humor: "resignacion",
          badge: "🧱 Si no laburo, no hay olla",
          texto: "Se paró la rueda, maestro. No sale una changa de plomería ni revoque. La guita del día no rinde nada, si hoy no agarro una pala a la noche no hay olla."
        };
      }
    }
  },

  // ========================================================
  // 8. LA MAMÁ DEL CONURBANO / EMPLEADA DE COMERCIO
  // ========================================================
  mama_comercio: {
    id: "mama_comercio",
    nombre: "Marcela (Mamá del Conurbano / Empleada de Comercio)",
    perfil: "Cajera de shopping y madre soltera de 32 años (Morón / San Justo)",
    icono: "fa-solid fa-basket-shopping",
    lugar: "Parada de colectivo volviendo del trabajo de noche",
    generarDicho: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const paroDocente = decTxt.includes("docente") || decTxt.includes("fonid") || decTxt.includes("ctera");
      const alquilerExpensas = decTxt.includes("alquiler") || decTxt.includes("expensa");
      const quitaSubsidiosTarifas = decTxt.includes("tarifa") || decTxt.includes("luz") || decTxt.includes("agua") || decTxt.includes("gas") || _valEjeCalle(decision, 'estatismo') > 65;
      const patrullerosSeguridad = decTxt.includes("patruller") || decTxt.includes("polic") || decTxt.includes("seguridad") || _valEjeCalle(decision, 'seguridad') > 65;
      const canastaEscolar = decTxt.includes("escolar") || decTxt.includes("canasta") || decTxt.includes("precios") || decTxt.includes("bono");

      if (paroDocente) {
        return {
          humor: "bronca",
          badge: "🛒 Los chicos sin clases",
          texto: "Otra vez paro de docentes y los chicos en casa sin clases. No tengo con quién dejarlos para ir a cumplir horario en el shopping. Entiendo el reclamo, pero a nosotras si no vamos a laburar nos descuentan el día."
        };
      } else if (alquilerExpensas) {
        return {
          humor: "bronca",
          badge: "🛒 Expensas más caras que el alquiler",
          texto: "Me venció el contrato en Morón y me piden una locura. Entre el alquiler y las expensas del edificio se me va el sueldo completo. Hago malabares para que a los pibes no les falte el plato de comida."
        };
      } else if (quitaSubsidiosTarifas && !patrullerosSeguridad) {
        return {
          humor: "bronca",
          badge: "🛒 Si pago la luz, no comen carne",
          texto: "Me vino 80 mil de agua y 120 mil de luz en un dos ambientes de Morón. ¿De dónde carajo saco esa plata? Gano lo justo y necesario. Si pago los servicios, los chicos este mes no comen carne."
        };
      } else if (patrullerosSeguridad) {
        return {
          humor: "alivio",
          badge: "🛒 Al menos se ve un patrullero",
          texto: "Por lo menos bajo del tren a las 9 de la noche y veo un patrullero en la plaza. Antes tenías que caminar cinco cuadras corriendo con el celular metido en la bombacha por miedo a que te peguen un tiro."
        };
      } else if (canastaEscolar) {
        return {
          humor: "alivio",
          badge: "🛒 Una ayuda tremenda con los útiles",
          texto: "Una ayuda tremenda. Comprar tres cartucheras y dos repuestos de hojas era un sueldo entero. Ojalá controlen que los negocios realmente tengan el stock."
        };
      } else {
        return {
          humor: "resignacion",
          badge: "🛒 Hago malabares con los pibes",
          texto: "Hago malabares todos los meses. La cuota del colegio parroquial y las zapatillas son incomprables. Vuelvo del laburo con el Jesús en la boca en la estación."
        };
      }
    }
  },

  // ========================================================
  // 9. LA TRINCHERA POPULAR Y SECTORES VULNERABLES
  // ========================================================
  comedor_comunitario: {
    id: "comedor_comunitario",
    nombre: "Marta (Titular de Comedor Comunitario)",
    perfil: "Cocinera comunitaria de 42 años (La Matanza / Isidro Casanova)",
    icono: "fa-solid fa-bowl-rice",
    lugar: "Patio de tierra del comedor barrial",
    generarDicho: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const recortaAlimentos = decTxt.includes("alimento") || decTxt.includes("comedor") || decTxt.includes("plan") || decTxt.includes("polenta") || decTxt.includes("asistencia");

      if (recortaAlimentos) {
        return {
          humor: "bronca",
          badge: "🍲 La olla no se apaga",
          texto: "Si me cortás el reparto de fideos secos y polenta, yo tengo que mirar a 120 pibes del barrio a la cara y decirles que hoy no hay merienda. No nos vengan con que somos fantasmas. Vengan acá a embarrarse los zapatos antes de firmar con la lapicera en un escritorio con aire acondicionado."
        };
      } else {
        return {
          humor: "resignacion",
          badge: "🍲 Haciendo malabares en el barrio",
          texto: "Hacemos magia con tres bolsas de fideos y alitas de pollo. Cada semana se suman cinco familias más que no llegan a fin de mes. Si el Estado se borra, el barrio queda a la deriva."
        };
      }
    }
  },

  pensionado_discapacidad: {
    id: "pensionado_discapacidad",
    nombre: "Carlos (El Pensionado por Discapacidad)",
    perfil: "Extrabajador metalúrgico de 58 años (Córdoba Capital)",
    icono: "fa-solid fa-wheelchair",
    lugar: "Puerta de delegación de ANSES",
    generarDicho: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const trabaPension = decTxt.includes("pensión") || decTxt.includes("discapacidad") || decTxt.includes("trámite") || decTxt.includes("auditoría") || decTxt.includes("anses");

      if (trabaPension) {
        return {
          humor: "bronca",
          badge: "♿ La pensión no es un privilegio",
          texto: "Me suspendieron la pensión porque faltaba un papel sellado que no me entregan en la oficina hace ocho meses. El trámite es por internet, pero en mi barrio no hay señal y el celular no me anda. Si no cobro la pensión, este mes no pago el alquiler de la pieza."
        };
      } else {
        return {
          humor: "resignacion",
          badge: "♿ Esperando el turno",
          texto: "La plata de la pensión se me va en remedios y pañales. Los trámites digitales son para gente sana de la Capital, a los viejos rotos del interior nos dejan tirados."
        };
      }
    }
  },

  enfermera_hospital: {
    id: "enfermera_hospital",
    nombre: "Silvana (La Enfermera de Guardia)",
    perfil: "Enfermera de guardia de 36 años (Hospital Provincial / Gran Rosario)",
    icono: "fa-solid fa-user-nurse",
    lugar: "Pasillo de guardia colapsada",
    generarDicho: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const colapsoSalud = decTxt.includes("salud") || decTxt.includes("hospital") || decTxt.includes("guardia") || decTxt.includes("dengue") || decTxt.includes("repelente");

      if (colapsoSalud) {
        return {
          humor: "bronca",
          badge: "🏥 Guardia al borde del colapso",
          texto: "Hago doble guardia de 24 horas para llegar a fin de mes. Tenemos tres gasas, no hay suero y los familiares te quieren cagar a trompadas porque la sala de espera está colapsada. Cuando en la tele dicen que 'los hospitales funcionan con normalidad', me dan ganas de revolear el tensiómetro por la ventana."
        };
      } else {
        return {
          humor: "resignacion",
          badge: "🏥 Haciendo guardia",
          texto: "Ponemos el pecho con dos gasas y agujas contadas. No hay insumos y la violencia en la sala de espera te quema la cabeza."
        };
      }
    }
  },

  pyme_textil: {
    id: "pyme_textil",
    nombre: "Darío (El Pyme Textil de Flores)",
    perfil: "Dueño de taller de confección textil de 50 años (Flores / Once)",
    icono: "fa-solid fa-scissors",
    lugar: "Galpón textil con máquinas de coser paradas",
    generarDicho: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const aperturaImportaciones = decTxt.includes("importaci") || decTxt.includes("arancel") || decTxt.includes("textil") || decTxt.includes("china") || decTxt.includes("abrir");

      if (aperturaImportaciones) {
        return {
          humor: "bronca",
          badge: "🧵 Competencia desleal",
          texto: "Abrís las importaciones de ropa china y me fundís en tres semanas. Yo pago cargas sociales, ingresos brutos, alquiler de galpón y seguro de caución. Si entran remeras a dos dólares, echo a los ocho empleados que tengo y bajo la persiana para siempre."
        };
      } else {
        return {
          humor: "resignacion",
          badge: "🧵 Máquinas paradas",
          texto: "El costo de las telas y la luz nos ahoga. Si no defienden la industria nacional, acá no queda un solo taller en pie."
        };
      }
    }
  },

  productor_agropecuario: {
    id: "productor_agropecuario",
    nombre: "Beto (El Productor Agropecuario de Chacra Chica)",
    perfil: "Chacarero de 200 hectáreas de 55 años (Pergamino / Zona Núcleo)",
    icono: "fa-solid fa-tractor",
    lugar: "Al pie del silobolsa en el campo",
    generarDicho: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const retencionesOExigenciaLiquidacion = decTxt.includes("retenci") || decTxt.includes("grano") || decTxt.includes("agro") || decTxt.includes("dólar") || decTxt.includes("campo") || decTxt.includes("silobolsa");

      if (retencionesOExigenciaLiquidacion) {
        return {
          humor: "bronca",
          badge: "🌾 El grano en el silobolsa",
          texto: "Me clavás 33% de retenciones, me cobrás el gasoil al valor más alto de la región y después venís a pedir que liquide los granos rápido para salvarle las papas al Banco Central. Con sequía o inundación no me subsidia nadie. Los granos se quedan en el silobolsa hasta que cierren los números."
        };
      } else {
        return {
          humor: "resignacion",
          badge: "🌾 En la tranquera",
          texto: "El campo labura bajo el sol y la lluvia arriesgando todo el capital. Si el gobierno no baja los impuestos y unifica el dólar, no se mueve una tonelada de soja."
        };
      }
    }
  }
};

// Generador de testimonios cruzados según la temática de la decisión
function obtenerVocesDeLaCalle(dilemaId, opcionElegida, flags, vector) {
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

  // Calcular impacto temático para priorizar a los más afectados
  const candidatosPrioritarios = [];

  // Prepagas, copagos, medicamentos y salud
  if (decTxt.includes("prepaga") || decTxt.includes("copago") || decTxt.includes("médic") || decTxt.includes("medicament") || decTxt.includes("pami") || decTxt.includes("jubilad") || decTxt.includes("salud")) {
    candidatosPrioritarios.push("jubilada_pami", "mama_comercio", "carnicero");
  }

  // Alquileres, contratos y expensas
  if (decTxt.includes("alquiler") || decTxt.includes("expensa") || decTxt.includes("inquilino") || decTxt.includes("vivienda")) {
    candidatosPrioritarios.push("estudiante_publico", "mama_comercio", "carnicero");
  }

  // Taxis, remises, plataformas y transporte de pasajeros
  if (decTxt.includes("app") || decTxt.includes("uber") || decTxt.includes("taxi") || decTxt.includes("transporte de pasajeros") || decTxt.includes("monotributo")) {
    candidatosPrioritarios.push("taxista", "pibe_delivery", "colectivero");
  }

  // Mega-recitales, estadios, shows y trapitos
  if (decTxt.includes("recital") || decTxt.includes("estadio") || decTxt.includes("trapito") || decTxt.includes("show") || decTxt.includes("decibel")) {
    candidatosPrioritarios.push("mama_comercio", "taxista", "colectivero");
  }

  // Docentes, paritarias, FONID y ciclo lectivo
  if (decTxt.includes("docente") || decTxt.includes("fonid") || decTxt.includes("ctera") || decTxt.includes("clase") || decTxt.includes("presentismo")) {
    candidatosPrioritarios.push("jubilada_pami", "mama_comercio", "colectivero");
  }

  // Menores, baja de imputabilidad, cárceles y delitos
  if (decTxt.includes("imputabilidad") || decTxt.includes("menor") || decTxt.includes("penal") || decTxt.includes("cárcel") || decTxt.includes("delit") || decTxt.includes("seguridad")) {
    candidatosPrioritarios.push("pibe_delivery", "mama_comercio", "taxista");
  }

  // Universidad pública, aranceles y auditorías
  if (decTxt.includes("universidad") || decTxt.includes("arancel") || decTxt.includes("sigen") || decTxt.includes("facultad") || decTxt.includes("estudiantil")) {
    candidatosPrioritarios.push("estudiante_publico", "mama_comercio");
  }

  // Tierras rurales, soberanía, Patagonia y glaciares
  if (decTxt.includes("tierra") || decTxt.includes("patagonia") || decTxt.includes("glaciar") || decTxt.includes("parque nacional") || decTxt.includes("extranjero")) {
    candidatosPrioritarios.push("changarin", "carnicero", "estudiante_publico");
  }

  // Transporte, combustibles y tarifas generales
  if (decTxt.includes("transporte") || decTxt.includes("nafta") || decTxt.includes("combustible") || decTxt.includes("colectivo") || decTxt.includes("boleto") || decTxt.includes("sube")) {
    candidatosPrioritarios.push("pibe_delivery", "colectivero", "estudiante_publico", "carnicero");
  }

  // Comida, canasta y precios
  if (decTxt.includes("carne") || decTxt.includes("alimento") || decTxt.includes("precio") || decTxt.includes("asado")) {
    candidatosPrioritarios.push("carnicero", "changarin", "mama_comercio");
  }

  // Todos los arquetipos evaluados
  const todasLasVoces = {};
  for (const [key, c] of Object.entries(CIUDADANOS_ARGENTINOS)) {
    const res = c.generarDicho(decision, flagMap, vecMap);
    todasLasVoces[key] = {
      id: c.id,
      nombre: c.nombre,
      perfil: c.perfil,
      icono: c.icono,
      lugar: c.lugar,
      humor: res.humor,
      badge: res.badge,
      texto: res.texto
    };
  }

  // Desduplicar prioritarios y completar hasta 4 testimonios
  const todosKeys = Object.keys(CIUDADANOS_ARGENTINOS);
  const unicos = [...new Set([...candidatosPrioritarios, ...todosKeys.sort(() => 0.5 - Math.random())])].slice(0, 4);

  const seleccionados = unicos.map(k => todasLasVoces[k]).filter(Boolean);

  // Devolver Array compatible con .forEach, adosando mapa completo
  const resultado = [...seleccionados];
  resultado.todas = todasLasVoces;

  return resultado;
}

if (typeof window !== 'undefined') {
  window.CIUDADANOS_ARGENTINOS = CIUDADANOS_ARGENTINOS;
  window.obtenerVocesDeLaCalle = obtenerVocesDeLaCalle;
}

// Exportación para entornos Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CIUDADANOS_ARGENTINOS, obtenerVocesDeLaCalle };
}
