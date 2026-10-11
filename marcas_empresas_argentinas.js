// marcas_empresas_argentinas.js - Catálogo de marcas, corporaciones, lobbies y plataformas de Argentina
// AVISO LEGAL Y SÁTIRA:
// Las menciones a empresas, plataformas y figuras corporativas constituyen una parodia sociopolítica ficcional.
// Reflejan arquetipos del debate público sobre consumo, servicios públicos y poder económico en Argentina.

const MARCAS_ARGENTINAS = {
  // ========================================================
  // 1. FINTECHS, BILLETERAS Y BANCOS
  // ========================================================
  mercado_libre: {
    id: "mercado_libre",
    nombre: "Mercado Libre / Mercado Pago",
    icono: "fa-solid fa-handshake",
    sector: "Fintech & Comercio Electrónico",
    figuraLobby: "Marcos Galperin",
    representa: "El monopolio indiscutido del comercio electrónico y los cobros cotidianos. El almacén, el verdulero y el pibe de Rappi viven atados a su código QR.",
    quilomboFondo: "La guerra total contra los bancos tradicionales (MODO) por la interoperabilidad obligatoria de los QR con tarjeta y las retenciones impositivas automáticas de ARCA (ex AFIP).",
    dilemaGobierno: "Si le exigís abrir sus sistemas a los bancos o le metés impuestos a los saldos remunerados, Galperin tuitea contra el atraso del país y los usuarios te bardean porque les complicás pagar en el súper; si no hacés nada, las entidades bancarias te traban las líneas de crédito productivo acusando competencia desleal.",
    quejaUsuario: "Puse tres mangos a rendir en Mercado Pago para que no se los coma la inflación y me clavaron una retención de ingresos brutos que ni sé de qué provincia es. Te afanan por respirar."
  },

  modo_bancos: {
    id: "modo_bancos",
    nombre: "MODO (Consorcio de Bancos Tradicionales)",
    icono: "fa-solid fa-building-columns",
    sector: "Banca Tradicional (Galicia, Macro, Santander, BBVA, Nación)",
    figuraLobby: "Asociación de Bancos Argentinos (ADEBA / ABA)",
    representa: "El contraataque coordinado de la banca tradicional para frenar el avance arrollador de las aplicaciones financieras independientes.",
    quilomboFondo: "Descuentos agresivos en supermercados y farmacias financiados a pérdida para sacarle usuarios a las fintech, mientras los cajeros automáticos se quedan sin billetes físicos en fines de semana largos.",
    dilemaGobierno: "Regular a las fintech para nivelar la cancha con los bancos o dejar que el sistema digital desplace a las sucursales bancarias provocando despidos de trabajadores bancarios.",
    quejaUsuario: "Los bancos te cobran comisiones de mantenimiento astronómicas y el fin de semana largo vas al cajero y ninguno tiene billetes porque no cargan efectivo."
  },

  // ========================================================
  // 2. ENERGÍA Y COMBUSTIBLES
  // ========================================================
  edesur_edenor: {
    id: "edesur_edenor",
    nombre: "Edesur & Edenor",
    icono: "fa-solid fa-bolt",
    sector: "Distribución Eléctrica del AMBA",
    figuraLobby: "Asociación de Distribuidores de Energía Eléctrica (ADEERA)",
    representa: "El terror de la clase media urbana en diciembre y enero. Los transformadores explotando en las esquinas y los cortes de 72 horas con 39 grados de térmica.",
    quilomboFondo: "Facturas con aumentos exorbitantes por quita de subsidios, cuadrillas tercerizadas que no dan abasto y desinversión crónica en cables de media y baja tensión.",
    dilemaGobierno: "Si las multás fuerte y amenazás con quitarles la concesión, judicializan el reclamo, apagan cuadrillas y los cortes se alargan; si les convalidás tarifazos para que inviertan, la gente sale a cacerolear a la avenida con las heladeras vacías.",
    quejaUsuario: "Tercer día sin luz en Lanús. Tuve que tirar 80 lucas de mercadería que tenía en el freezer y a mi vieja de 80 años la tenemos que bajar por la escalera a oscuras. Las boletas las cobran al día, pero no aparece una cuadrilla ni de casualidad."
  },

  ypf_combustibles: {
    id: "ypf_combustibles",
    nombre: "YPF (y petroleras Shell / Axion)",
    icono: "fa-solid fa-gas-pump",
    sector: "Hidrocarburos y Refinación",
    figuraLobby: "Cámara de Exploración y Producción de Hidrocarburos (CEPH)",
    representa: "El marcapasos de la inflación argentina. Aumento en el surtidor a las 00:00 hs = suba del flete, del pan, de la carne y del transporte en menos de 48 horas.",
    quilomboFondo: "Las colas de cuatro cuadras de autos en las estaciones de servicio la noche previa al aumento del 1° de mes, o las estaciones del interior que cuelgan las mangueras por 'falta de cupo' de gasoil para la cosecha.",
    dilemaGobierno: "¿Usar a YPF como ancla artificial para que no salte el IPC (desfinanciando las inversiones en Vaca Muerta) o liberar el precio internacional y fumarse el impacto directo en toda la canasta básica?",
    quejaUsuario: "Hacés dos horas de cola a las once de la noche para cargar antes de que cambie la pizarra a las 12 y cuando llegás al surtidor te clavan el cono naranja porque se quedaron sin nafta súper."
  },

  // ========================================================
  // 3. TELECOMUNICACIONES Y ENTRETENIMIENTO
  // ========================================================
  telecom_flow_telecentro: {
    id: "telecom_flow_telecentro",
    nombre: "Personal Flow (Telecom) & Telecentro",
    icono: "fa-solid fa-wifi",
    sector: "Telecomunicaciones e Internet Hogareña",
    figuraLobby: "Grandes Operadores de Medios y Telecomunicaciones",
    representa: "Los dueños de la conectividad en los hogares. El servicio que todo el mundo necesita para laburar o estudiar pero que nadie puede pagar sin putear cuando llega la factura mensual.",
    quilomboFondo: "La 'trampa del abono': te duplican la tarifa sin aviso y tenés que pasar 45 minutos al teléfono amenazando con darte de baja para que te activen la 'promoción de retención por 6 meses'.",
    dilemaGobierno: "Si regulás los aumentos declarando a internet como servicio público esencial, las empresas frenan el tendido de fibra óptica y van a la Corte Suprema; si las dejás libres, las familias tienen que elegir entre pagar internet o la comida del mes.",
    quejaUsuario: "Llamé tres veces para dar de baja el cable porque no lo mira nadie y me pasean de operadora en operadora. Me aumentaron un 30% de prepo y si querés cortar te dicen que tenés que ir a una sucursal en la loma del orto a devolver el módem."
  },

  streaming_dolar_tarjeta: {
    id: "streaming_dolar_tarjeta",
    nombre: "Plataformas de Streaming (Netflix, Spotify, Disney+, Max)",
    icono: "fa-solid fa-play",
    sector: "Entretenimiento Digital y Dólar Tarjeta",
    figuraLobby: "Multinacionales de Contenido & Procesadores de Pago",
    representa: "El termómetro del dólar cotidiano. El consumo de ocio que la gente se niega a soltar hasta el último minuto de una crisis económica.",
    quilomboFondo: "El resumen de la tarjeta de crédito. La suscripción base dice $4.000 pero en el resumen terminás pagando el doble por la catarata de percepciones impositivas (IVA, Ganancias, Ingresos Brutos y tasas provinciales).",
    dilemaGobierno: "Sacar los recargos impositivos al streaming para aliviar a la clase media (a costa de perder recaudación fiscal en dólares) o mantenerlos y soportar la indignación de millones de usuarios.",
    quejaUsuario: "Contratás un plan básico que la publicidad te dice 4.500 pesos y en el resumen de la tarjeta te caen 10 lucas por percepciones de AFIP, impuesto país fantasma y sellos de la provincia. Te cobran un impuesto por mirar una película un domingo a la noche."
  },

  // ========================================================
  // 4. TRANSPORTE Y LOGÍSTICA
  // ========================================================
  grupo_dota_colectivos: {
    id: "grupo_dota_colectivos",
    nombre: "Grupo DOTA y Cámaras de Colectivos (AAETA, CEAP)",
    icono: "fa-solid fa-bus",
    sector: "Transporte Automotor Urbano de Pasajeros",
    figuraLobby: "Empresarios de Líneas de Colectivos del AMBA",
    representa: "Los gigantes del transporte automotor que mueven a 10 millones de personas por día en el AMBA.",
    quilomboFondo: "Las 'medidas de fuerza patronales': no sacan los coches a la calle después de las 21 hs o reducen frecuencias al 50% en hora pico extorsionando a la Secretaría de Transporte para que gire los fondos de subsidios adeudados.",
    dilemaGobierno: "Ceder a las transferencias de emergencia para que la gente no se quede varada en Retiro bajo la lluvia o multar y quitar licencias a las empresas de transporte, arriesgándote a un apagón total de colectivos por semanas.",
    quejaUsuario: "Parada del 28 en Puente La Noria: 50 minutos esperando con frío porque 'las frecuencias están reducidas'. Pasaron tres bondis juntos con las luces apagadas y no frenó ninguno. Viajamos como animales."
  },

  aerolineas_argentinas: {
    id: "aerolineas_argentinas",
    nombre: "Aerolíneas Argentinas",
    icono: "fa-solid fa-plane",
    sector: "Línea Aérea de Bandera & Conectividad Federal",
    figuraLobby: "Sindicatos Aeronáuticos (APLA / Pablo Biró) vs. Cámaras Low Cost",
    representa: "El símbolo histórico de la grieta. La 'soberanía de los cielos que conecta rutas no comerciales del interior' vs. 'el barril sin fondo deficitario capturado por la casta de pilotos'.",
    quilomboFondo: "Los paros salvajes encubiertos como 'asambleas informativas' del gremio de pilotos en vísperas de vacaciones de invierno o fines de semana largos, dejando a 40.000 pasajeros durmiendo en el piso de Aeroparque.",
    dilemaGobierno: "Privatizar la aerolínea de bandera (dejando sin vuelos a ciudades chicas del interior y enfrentando un paro nacional del transporte) o mantenerla en la órbita estatal cubriendo el déficit con fondos del Tesoro.",
    quejaUsuario: "Ahorraste todo el año para llevar a tus hijos a Bariloche y llegás al aeropuerto y te clavan una asamblea sorpresiva de pilotos. Cuatro días tirados en el piso de Aeroparque comiendo sándwiches de 10 lucas."
  },

  // ========================================================
  // 5. CONSUMO MASIVO, SUPERMERCADOS Y ALIMENTICIAS
  // ========================================================
  grandes_supermercados: {
    id: "grandes_supermercados",
    nombre: "Grandes Cadenas de Supermercados (Coto, Carrefour, Jumbo / Disco)",
    icono: "fa-solid fa-cart-shopping",
    sector: "Retail y Distribución de Consumo Masivo",
    figuraLobby: "Alfredo Coto / Asociación de Supermercados Unidos (ASU)",
    representa: "El campo de batalla semanal de la familia argentina. Las trampas de las promociones cruzadas y las ofertas engañosas.",
    quilomboFondo: "Las promociones inentendibles ('Llevás 4 y en la segunda unidad tenés 70% de descuento pagando con tarjeta de banco X exclusivo de 14 a 17 hs'), los precios inflados antes del Hot Sale y las góndolas con productos básicos bajo candado o con alarma antirrobo (café, queso en barra, carne envasada).",
    dilemaGobierno: "Mandar inspectores a clausurar sucursales por desabastecimiento o sobreprecios (generando titulares de guerra comercial) o dejar que remarquen libremente y que la calle estalle de bronca contra la pérdida del poder adquisitivo.",
    quejaUsuario: "Vas a buscar un frasco de café o dos bifes y tenés que pedirle al repositor que te abra la vitrina con llave como si fueras a comprar un Rolex de oro. Te tratan de delincuente mientras te cobran el triple que el mes pasado."
  },

  grandes_alimenticias: {
    id: "grandes_alimenticias",
    nombre: "Grandes Alimenticias (Arcor, Molinos Río de la Plata, Mastellone / La Serenísima)",
    icono: "fa-solid fa-wheat-awn",
    sector: "Industria Alimenticia Concentrada",
    figuraLobby: "Coordinadora de las Industrias de Productos Alimenticios (COPAL)",
    representa: "Los dueños de las primeras marcas de comida, fideos, aceites, lácteos y golosinas en todo el país.",
    quilomboFondo: "La 'reduflación' (achicar el paquete de galletitas de 120g a 95g manteniendo el mismo precio) y el freno de entregas a los mayoristas cuando hay rumores de devaluación o cambios en el tipo de cambio oficial.",
    dilemaGobierno: "Congelar listas de precios y aplicar la Ley de Abastecimiento arriesgando faltantes en góndola o tolerar la remarcación preventiva y reduflación corporativa.",
    quejaUsuario: "Comprás el paquete de galletitas de siempre, te sale más caro y cuando lo abrís viene por la mitad lleno de aire. Le bajaron 25 gramos y te cobran como si fueran bombones suizos."
  }
};

// Helper para obtener marcas relevantes según el texto de una decisión
function detectarMarcasEnDecision(decision) {
  const decTxt = (decision?.texto || "").toLowerCase();
  const encontradas = [];

  for (const key in MARCAS_ARGENTINAS) {
    const marca = MARCAS_ARGENTINAS[key];
    const matchNombre = decTxt.includes(marca.nombre.toLowerCase().split(' ')[0]);
    const matchKeywords = (
      (key === 'mercado_libre' && (decTxt.includes('qr') || decTxt.includes('billetera') || decTxt.includes('fintech') || decTxt.includes('galperin') || decTxt.includes('mercado pago'))) ||
      (key === 'edesur_edenor' && (decTxt.includes('luz') || decTxt.includes('apagón') || decTxt.includes('edesur') || decTxt.includes('edenor') || decTxt.includes('cuadrilla') || decTxt.includes('calor'))) ||
      (key === 'ypf_combustibles' && (decTxt.includes('nafta') || decTxt.includes('combustible') || decTxt.includes('ypf') || decTxt.includes('surtidor') || decTxt.includes('gasoil'))) ||
      (key === 'telecom_flow_telecentro' && (decTxt.includes('internet') || decTxt.includes('fibra') || decTxt.includes('cable') || decTxt.includes('telecom') || decTxt.includes('telecentro') || decTxt.includes('módem'))) ||
      (key === 'streaming_dolar_tarjeta' && (decTxt.includes('streaming') || decTxt.includes('netflix') || decTxt.includes('spotify') || decTxt.includes('dólar tarjeta') || decTxt.includes('percepciones'))) ||
      (key === 'grupo_dota_colectivos' && (decTxt.includes('colectivo') || decTxt.includes('bondi') || decTxt.includes('dota') || decTxt.includes('frecuencia') || decTxt.includes('transporte'))) ||
      (key === 'aerolineas_argentinas' && (decTxt.includes('aerolínea') || decTxt.includes('vuelo') || decTxt.includes('piloto') || decTxt.includes('aeroparque') || decTxt.includes('avión'))) ||
      (key === 'grandes_supermercados' && (decTxt.includes('supermercado') || decTxt.includes('coto') || decTxt.includes('góndola') || decTxt.includes('carrefour') || decTxt.includes('alimento'))) ||
      (key === 'grandes_alimenticias' && (decTxt.includes('alimento') || decTxt.includes('galletita') || decTxt.includes('arcor') || decTxt.includes('molinos') || decTxt.includes('reduflación') || decTxt.includes('aceite')))
    );

    if (matchNombre || matchKeywords) {
      encontradas.push(marca);
    }
  }

  return encontradas;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MARCAS_ARGENTINAS, detectarMarcasEnDecision };
}
