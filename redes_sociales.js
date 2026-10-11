// redes_sociales.js - Motor dinámico de repercusiones en Redes Sociales (X/Twitter, Instagram, Facebook)

const REDES_CONFIG = {
  twitter: {
    nombre: "X (Twitter)",
    icono: "fa-brands fa-x-twitter",
    color: "text-white",
    bgColor: "bg-black/90",
    descripcion: "La trinchera de la rosca política, los hilos de datos duros, los trolls, los trending topics y las chicanas minuto a minuto."
  },
  instagram: {
    nombre: "Instagram",
    icono: "fa-brands fa-instagram",
    color: "text-pink-400",
    bgColor: "bg-pink-950/40",
    descripcion: "Historias, placas estéticas, reels virales de streamers y quejas de jóvenes y comerciantes por el costo de vida."
  },
  facebook: {
    nombre: "Facebook",
    icono: "fa-brands fa-facebook",
    color: "text-blue-400",
    bgColor: "bg-blue-950/40",
    descripcion: "Grupos de vecinos barriales, reclamos de jubilados, quejas por baches e inseguridad y memes familiares."
  }
};

// Generador de posts y debates simulados según la decisión tomada
function generarFeedRedes(dilemaId, opcionElegida, vectorActual) {
  const posts = [];

  // 1. Post de X (Twitter) - Picanteada política / Trending Topic
  if (opcionElegida.impacto12Axes) {
    const esProMercado = (opcionElegida.impacto12Axes.controle || 50) > 60 || (opcionElegida.impacto12Axes.economia || 50) > 60;
    const esProEstado = (opcionElegida.impacto12Axes.controle || 50) < 40 || (opcionElegida.impacto12Axes.economia || 50) < 40;
    const esManoDura = (opcionElegida.impacto12Axes.poder || 50) < 35;

    if (esProMercado) {
      posts.push({
        red: "twitter",
        usuario: "@MileiTermico_VLLC",
        handle: "LibertadOculta",
        verificado: true,
        tiempo: "Hace 4m",
        texto: "DOMADÍSIMOS. El gobierno metió una medida histórica cortando privilegios de raíz. No la ven ni cuadrada. CINE TOTAL 🚬🦁 #VLLC #Adentro",
        likes: "14.2K",
        retweets: "3.8K"
      });
      posts.push({
        red: "twitter",
        usuario: "@MilitanteNacional",
        handle: "PatriaSiColoniaNo",
        verificado: false,
        tiempo: "Hace 2m",
        texto: "Entrega total de la soberanía. Están rifando el país para beneficiar a cuatro amigos especuladores. El pueblo en la calle les va a poner el freno. 🇦🇷✌️",
        likes: "9.5K",
        retweets: "2.1K"
      });
    } else if (esProEstado) {
      posts.push({
        red: "twitter",
        usuario: "@CompaneroDeBase",
        handle: "JusticiaSocialOK",
        verificado: true,
        tiempo: "Hace 5m",
        texto: "Por fin una medida a favor del pueblo laburante y no de los especuladores financieros. El Estado tiene que estar presente donde el mercado abandona. ✊✌️",
        likes: "11.8K",
        retweets: "2.9K"
      });
      posts.push({
        red: "twitter",
        usuario: "@InversorMerval",
        handle: "MercadosArg",
        verificado: true,
        tiempo: "Hace 3m",
        texto: "Riesgo país al alza (+80 pts) tras el anuncio oficial. Más gasto público y emisión implican inflación asegurada en 6 meses. La historia se repite.",
        likes: "7.1K",
        retweets: "1.4K"
      });
    } else if (esManoDura) {
      posts.push({
        red: "twitter",
        usuario: "@VecinosPorElOrden",
        handle: "BastaDePiquetes",
        verificado: false,
        tiempo: "Hace 6m",
        texto: "¡Excelente! El que corta no cobra y el que comete delito va preso. Queremos transitar libres a nuestros trabajos sin que nos extorsionen.",
        likes: "18.4K",
        retweets: "5.2K"
      });
      posts.push({
        red: "twitter",
        usuario: "@DDHH_Colectivo",
        handle: "GarantiasYa",
        verificado: true,
        tiempo: "Hace 1m",
        texto: "Repudiamos la criminalización de la protesta social. La respuesta a la falta de trabajo no pueden ser los palos y las balas de goma.",
        likes: "8.3K",
        retweets: "2.7K"
      });
    } else {
      posts.push({
        red: "twitter",
        usuario: "@RoscaPolitica24",
        handle: "AnalistaFederal",
        verificado: true,
        tiempo: "Hace 3m",
        texto: "Jugada de ajedrez en la Casa Rosada: el Presidente busca el centro del ring político para descolocar tanto a los halcones como a la oposición dura.",
        likes: "5.6K",
        retweets: "890"
      });
    }
  }

  // 2. Post de Instagram - Placa gráfica y reacción visual de jóvenes/streamers
  posts.push({
    red: "instagram",
    usuario: "data_joven_ar",
    tiempo: "Hace 12m",
    tipoMedia: "Reel / Placa Informativa",
    texto: "ÚLTIMO MOMENTO 🚨 Tras las medidas anunciadas hoy, así reaccionaron los precios y el dólar. ¿Llegas a fin de mes o se complica? Dejanos tu comentario 👇",
    comentariosTop: [
      "valentina.baires: 'Hermano, no puedo ni comprar medio kilo de queso y siguen peleando por leyes'",
      "franco_dev: 'Menos mal que laburo para afuera, el que vive en pesos está liquidado'",
      "santi.mza: 'Banco la medida, había que ordenar el desastre'"
    ],
    likes: "45.890"
  });

  // 3. Post de Facebook - Grupos de vecinos barriales y jubilados
  posts.push({
    red: "facebook",
    grupo: "Vecinos Autoconvocados y Jubilados en Acción",
    usuario: "Mirta Gladys Fernández",
    tiempo: "Hace 18m",
    texto: "Buenas tardes al grupo. Espero que los concejales y el presidente piensen en los jubilados que cobramos la mínima. Con los remedios y la luz se nos va toda la jubilación. ¡Por favor un poco de empatía por los abuelos! Compartan si están de acuerdo 🙏👵🇦🇷",
    interacciones: "842 'Me entristece' • 512 comentarios • 1.200 compartidos"
  });

  return posts;
}
