// medios_argentinos.js - Sistema dinámico de Zócalos de TV, Placas Rojas y Streaming
// AVISO LEGAL Y SÁTIRA:
// Todas las placas, graphs y zócalos de medios son parodias ficcionales de la cobertura periodística argentina
// con fines exclusivamente lúdicos, didácticos y de divulgación cívica.

function _valEjeMedio(decision, ...claves) {
  if (!decision || !decision.impacto12Axes) return 50;
  for (const c of claves) {
    if (decision.impacto12Axes[c] !== undefined) return decision.impacto12Axes[c];
  }
  return 50;
}

const MEDIOS_ARGENTINOS = {
  // ========================================================
  // 1. CANALES DE NOTICIAS (La TV de aire y cable)
  // ========================================================
  cronica: {
    id: "cronica",
    nombre: "Crónica TV",
    tipo: "Canal de Noticias Popular",
    formato: "tv_noticias",
    estiloVisual: "placa_roja",
    sesgo: "popular_bizarro",
    generarGraph: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const tocaFutbol = decTxt.includes("sad") || decTxt.includes("fútbol") || decTxt.includes("club") || decTxt.includes("afa");
      const esPiquete9DeJulio = decTxt.includes("piquete") || (decTxt.includes("9 de julio") && decTxt.includes("repres"));
      const esCongelamientoBono = decTxt.includes("congelamiento de tarifas") || decTxt.includes("billeteras virtuales");
      const esAjusteOManoDura = _valEjeMedio(decision, 'seguridad') > 60 || _valEjeMedio(decision, 'estatismo') > 60 || decTxt.includes("reprim") || decTxt.includes("corte") || decTxt.includes("ajuste") || decTxt.includes("nafta") || decTxt.includes("desregul");

      if (tocaFutbol) {
        return {
          badge: "🚨 PLACA ROJA",
          countdown: "Faltan 73 días para el verano",
          titular: "BOMBAZO EN EL FÚTBOL: ¿SE VIENEN LAS SOCIEDADES ANÓNIMAS O SE PUDRE TODO?",
          subZocalo: "LOS HINCHAS COPAN LA SEDE: 'EL CLUB ES DE LOS SOCIOS, NO DE LOS BANQUEROS'"
        };
      } else if (esPiquete9DeJulio) {
        return {
          badge: "🚨 PLACA ROJA",
          countdown: "Faltan 73 días para el verano",
          titular: "LLUVIA DE PALOS EN EL OBELISCO // GAS PIMIENTA HASTA PARA LAS PALOMAS",
          subZocalo: "LA NAFTA SE FUE AL CARAJO: LLENAR EL TANQUE CUESTA UN RIÑÓN Y MEDIO"
        };
      } else if (esCongelamientoBono) {
        return {
          badge: "🚨 PLACA ROJA",
          countdown: "13°C en San Justo · Humedad 88%",
          titular: "FRENAN EL TARIFAZO: LAS EMPRESAS LLORAN POR LA GUITA",
          subZocalo: "TIRARON UN HUESO: EL BONO ALCANZA PARA TRES KILOS DE ASADO Y MEDIA SODA"
        };
      } else if (decTxt.includes("prepaga") || decTxt.includes("copago") || decTxt.includes("médicos")) {
        return {
          badge: "🚨 PLACA ROJA",
          countdown: "14°C en Villa Crespo · Presión 1013 hPa",
          titular: "COPAGO BARRANI: VAS AL MÉDICO Y TE COBRAN HASTA POR RESPIRAR // LAS PREPAGAS SE LLENAN DE GUITA",
          subZocalo: "CLASE MEDIA EN LLAMAS: PAGAN CUOTAS MILLONARIAS Y TIENEN QUE PONER GUITA EXTRA EN EL MOSTRADOR"
        };
      } else if (decTxt.includes("alquiler") || decTxt.includes("expensa")) {
        return {
          badge: "🚨 PLACA ROJA",
          countdown: "Faltan 62 días para cobrar el aguinaldo",
          titular: "EXPENSAS DE ORO: UN DOS AMBIENTES CUESTA MÁS QUE VIVIR EN MIAMI // TE ECHAN A LA CALLE",
          subZocalo: "EL ENCARGADO GANA MÁS QUE EL MÉDICO Y LOS PROPIETARIOS PIDEN DÓLARES CONTANTE Y SONANTE"
        };
      } else if (decTxt.includes("taxi") || decTxt.includes("uber") || decTxt.includes("didi") || decTxt.includes("cabify")) {
        return {
          badge: "🚨 PLACA ROJA",
          countdown: "Móvil en vivo desde Costanera Norte",
          titular: "BATALLA CAMPAL EN AEROPARQUE: PARAGUAS, ÁCIDO Y GOMAS QUEMADAS // UBER TRUCHO VS TACHERO CALIENTE",
          subZocalo: "CORTE TOTAL EN COSTANERA: 'EL EMBRAGUE SALE UN PALO Y ESTOS VIENEN CON AUTOS TRUCHOS'"
        };
      } else if (decTxt.includes("recital") || decTxt.includes("estadio") || decTxt.includes("trapito") || decTxt.includes("show")) {
        return {
          badge: "🚨 PLACA ROJA",
          countdown: "23:45 hs · No duerme nadie",
          titular: "VIBRAN LAS PAREDES: 10 NOCHES DE CUMBIA Y TRAPITOS QUE TE AFANAN HASTA EL AUXILIO",
          subZocalo: "FURIA VECINAL: NO PUEDEN DORMIR HASTA LAS 3 AM Y LES COBRAN 20 LUCAS POR ESTACIONAR EN LA PUERTA"
        };
      } else if (decTxt.includes("docente") || decTxt.includes("fonid") || decTxt.includes("ctera") || decTxt.includes("clase")) {
        return {
          badge: "🚨 PLACA ROJA",
          countdown: "Faltan 5 días para el ciclo lectivo",
          titular: "PELIGRA EL INICIO DE CLASES: CTERA METE PARO // LOS PIBES EN LA CALLE Y LOS PADRES AL BORDE DEL ATAQUE",
          subZocalo: "GUERRA POR EL FONID: ¿DECLARAN LA ESENCIALIDAD O OTRA VEZ LOS PIBES SIN ESCUELA?"
        };
      } else if (decTxt.includes("imputabilidad") || decTxt.includes("menor") || decTxt.includes("penitenciari")) {
        return {
          badge: "🚨 PLACA ROJA",
          countdown: "Móvil en vivo en San Justo",
          titular: "CHORROS DE 13 AÑOS: ¿A LA CÁRCEL O A LA PLAZA? // ARDE EL CONURBANO POR LA INSEGURIDAD",
          subZocalo: "CLAMOR POPULAR: CANSADOS DE LOS ASALTOS PIDEN ENCIERRO EFECTIVO O CASTIGO A LOS PADRES"
        };
      } else if (decTxt.includes("universidad") || decTxt.includes("arancel") || decTxt.includes("sigen") || decTxt.includes("facultad")) {
        return {
          badge: "🚨 PLACA ROJA",
          countdown: "Plaza de Mayo colapsada",
          titular: "MARCHA UNIVERSITARIA: 800 MIL EN LA CALLE // ¿ARANCELAN A LOS DE AFUERA O SE APAGA LA LUZ EN LA UBA?",
          subZocalo: "RECTORES VS CASA ROSADA: AUDITORÍAS DE LA SIGEN, AULAS A OSCURAS Y CLASES PÚBLICAS"
        };
      } else if (decTxt.includes("tierra") || decTxt.includes("patagonia") || decTxt.includes("glaciar")) {
        return {
          badge: "🚨 PLACA ROJA",
          countdown: "Alerta en Bariloche y El Bolsón",
          titular: "VENDEN LA PATAGONIA: UN GRINGO SE QUEDA CON LOS GLACIARES // CORTE EN LA RUTA 40",
          subZocalo: "150 MIL HECTÁREAS EN JUEGO: ¿INVERSIÓN MULTIMILLONARIA O REGALO DE LA SOBERANÍA NACIONAL?"
        };
      } else if (decTxt.includes("apagón") || decTxt.includes("edesur") || decTxt.includes("edenor") || decTxt.includes("vela") || (decTxt.includes("calor") && decTxt.includes("luz")) || decTxt.includes("cuadrilla")) {
        return {
          badge: "🚨 PLACA ROJA",
          countdown: "41° de térmica · Presión insoportable",
          titular: "EL VERANO DE LAS VELAS: 41 GRADOS Y QUEBRARON LAS HELADERÍAS // EDESUR NO ATIENDE",
          subZocalo: "CORTES EN LA DELLEPIANE CON QUEMA DE COLCHONES: LOS VECINOS TIRAN LA CARNE PODRIDA"
        };
      } else if (decTxt.includes("qr") || decTxt.includes("mercado pago") || decTxt.includes("modo") || decTxt.includes("billetera")) {
        return {
          badge: "🚨 PLACA ROJA",
          countdown: "Colapso en la caja del supermercado",
          titular: "GUERRA DEL QR: ¿CON QUÉ CARAJO PAGAMOS EL PAN EN EL ALMACÉN? // PELEA DE MILLONARIOS",
          subZocalo: "GALPERIN VS LOS BANCOS: EL JUBILADO NO PUEDE COMPRAR DOS FACTURAS Y LE CLAVAN RETENCIONES"
        };
      } else if (esAjusteOManoDura) {
        return {
          badge: "🚨 PLACA ROJA",
          countdown: "Faltan 73 días para el verano",
          titular: "LLUVIA DE PALOS EN EL OBELISCO // GAS PIMIENTA HASTA PARA LAS PALOMAS",
          subZocalo: "LA NAFTA SE FUE AL CARAJO: LLENAR EL TANQUE CUESTA UN RIÑÓN Y MEDIO"
        };
      } else {
        return {
          badge: "🚨 PLACA ROJA",
          countdown: "13°C en San Justo · Humedad 88%",
          titular: "FRENAN EL TARIFAZO: LAS EMPRESAS LLORAN POR LA GUITA",
          subZocalo: "TIRARON UN HUESO: EL BONO ALCANZA PARA TRES KILOS DE ASADO Y MEDIA SODA"
        };
      }
    }
  },

  c5n: {
    id: "c5n",
    nombre: "C5N",
    tipo: "Señal de Noticias por Cable",
    formato: "tv_noticias",
    estiloVisual: "c5n_dramatico",
    sesgo: "oposicion_popular",
    generarGraph: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esPiquete9DeJulio = decTxt.includes("piquete") || (decTxt.includes("9 de julio") && decTxt.includes("repres"));
      const esCongelamientoBono = decTxt.includes("congelamiento de tarifas") || decTxt.includes("billeteras virtuales");
      const esAjusteOManoDura = _valEjeMedio(decision, 'seguridad') > 60 || _valEjeMedio(decision, 'estatismo') > 60 || decTxt.includes("reprim") || decTxt.includes("corte") || decTxt.includes("ajuste") || decTxt.includes("nafta") || decTxt.includes("desregul") || decTxt.includes("patruller");

      if (esPiquete9DeJulio) {
        return {
          badge: "⚡ ALERTA C5N",
          extra: "MÓVIL EN CONSTITUCIÓN",
          titular: "CRACIA DE HAMBRE: CACEROLAZOS Y CACERÍAS POLICIALES EN LA 9 DE JULIO",
          subZocalo: "El negocio de las petroleras y la salud: pulverizan el sueldo de la clase trabajadora por orden del FMI"
        };
      } else if (esCongelamientoBono) {
        return {
          badge: "✌️ ALIVIO AL BOLSILLO",
          extra: "MÓVIL EN VIVO",
          titular: "ALIVIO AL BOLSILLO: EL ESTADO LE PONE FRENO A LA VORACIDAD CORPORATIVA",
          subZocalo: "Las fintech deberán aportar para sostener a los sectores vulnerables tras años de ganancias extraordinarias"
        };
      } else if (decTxt.includes("prepaga") || decTxt.includes("copago") || decTxt.includes("médicos")) {
        return {
          badge: "⚡ ALERTA C5N",
          extra: "MÓVIL EN SANATORIO PRIVADO",
          titular: "CRACIA DE SALUD: DESREGULAN PREPAGAS Y DEJAN MORIR A LA CLASE MEDIA",
          subZocalo: "Empresas cartelizadas cobran copagos extorsivos mientras vacían las cartillas de atención"
        };
      } else if (decTxt.includes("alquiler") || decTxt.includes("expensa")) {
        return {
          badge: "⚡ ALERTA C5N",
          extra: "MÓVIL EN CABALLITO",
          titular: "INQUILINOS DESESPERADOS: EL NEGOCIO INMOBILIARIO EXPULSA FAMILIAS A LA CALLE",
          subZocalo: "Contratos leoninos en dólares y expensas impagables pulverizan el salario de los trabajadores"
        };
      } else if (decTxt.includes("taxi") || decTxt.includes("uber") || decTxt.includes("didi") || decTxt.includes("cabify")) {
        return {
          badge: "⚡ ALERTA C5N",
          extra: "MÓVIL EN AEROPARQUE",
          titular: "GOLPE AL TRANSPORTE: PRECARIZACIÓN SALVAJE Y ENTREGA A MULTINACIONALES DE APPS",
          subZocalo: "Desamparo total para choferes tradicionales mientras las plataformas fugan dividendos al exterior"
        };
      } else if (decTxt.includes("recital") || decTxt.includes("estadio") || decTxt.includes("trapito") || decTxt.includes("show")) {
        return {
          badge: "⚡ ALERTA C5N",
          extra: "MÓVIL EN VILLA CRESPO",
          titular: "NEGOCIADO PRIVADO VS DERECHO AL DESCANSO: VECINOS REHENES DEL MEGA-SHOW",
          subZocalo: "La especulación de las productoras internacionales pasa por encima de la salud barrial"
        };
      } else if (decTxt.includes("docente") || decTxt.includes("fonid") || decTxt.includes("ctera") || decTxt.includes("clase")) {
        return {
          badge: "⚡ ALERTA C5N",
          extra: "MÓVIL EN EL PALACIO PIZZURNO",
          titular: "DESFINANCIAMIENTO EDUCATIVO: EL GOBIERNO PONE EN JAQUE EL FUTURO DE LOS HIJOS DEL PUEBLO",
          subZocalo: "Eliminan el FONID y aprietan con declarar esencialidad para quebrar la huelga docente"
        };
      } else if (decTxt.includes("imputabilidad") || decTxt.includes("menor") || decTxt.includes("penitenciari")) {
        return {
          badge: "⚡ ALERTA C5N",
          extra: "MÓVIL EN TRIBUNALES",
          titular: "CRIMINALIZACIÓN DE LA JUVENTUD: QUIEREN ENCARCELAR A PIBES MIENTRAS RECORTAN EDUCACIÓN",
          subZocalo: "Organismos de DDHH advierten sobre violación de tratados internacionales y cárceles colapsadas"
        };
      } else if (decTxt.includes("universidad") || decTxt.includes("arancel") || decTxt.includes("sigen") || decTxt.includes("facultad")) {
        return {
          badge: "⚡ ALERTA C5N",
          extra: "MÓVIL EN PLAZA DE MAYO",
          titular: "DEFENSA HISTÓRICA DE LA UNIVERSIDAD PÚBLICA: MULTITUDINARIA MARCHA CONTRA EL AHOGO",
          subZocalo: "Aulas a oscuras y docentes bajo la línea de pobreza: la comunidad educativa de pie"
        };
      } else if (decTxt.includes("tierra") || decTxt.includes("patagonia") || decTxt.includes("glaciar")) {
        return {
          badge: "⚡ ALERTA C5N",
          extra: "MÓVIL EN BARILOCHE",
          titular: "ENTREGA SOBERANA: REMATAN NUESTROS RÍOS Y GLACIARES AL MEJOR POSTOR",
          subZocalo: "DNU para que magnates extranjeros compren reservas estratégicas de agua dulce en la cordillera"
        };
      } else if (esAjusteOManoDura) {
        return {
          badge: "⚡ ALERTA C5N",
          extra: "MÓVIL EN CONSTITUCIÓN",
          titular: "CRACIA DE HAMBRE: CACEROLAZOS Y CACERÍAS POLICIALES EN LA 9 DE JULIO",
          subZocalo: "El negocio de las petroleras y la salud: pulverizan el sueldo de la clase trabajadora por orden del FMI"
        };
      } else {
        return {
          badge: "✌️ ALIVIO AL BOLSILLO",
          extra: "MÓVIL EN VIVO",
          titular: "ALIVIO AL BOLSILLO: EL ESTADO LE PONE FRENO A LA VORACIDAD CORPORATIVA",
          subZocalo: "Las fintech deberán aportar para sostener a los sectores vulnerables tras años de ganancias extraordinarias"
        };
      }
    }
  },

  ln_mas: {
    id: "ln_mas",
    nombre: "LN+ (La Nación Más)",
    tipo: "Señal de Noticias por Cable",
    formato: "tv_noticias",
    estiloVisual: "ln_sobrio",
    sesgo: "afinidad_liberal",
    generarGraph: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esPiquete9DeJulio = decTxt.includes("piquete") || (decTxt.includes("9 de julio") && decTxt.includes("repres"));
      const esCongelamientoBono = decTxt.includes("congelamiento de tarifas") || decTxt.includes("billeteras virtuales");
      const esAjusteOManoDura = _valEjeMedio(decision, 'seguridad') > 60 || _valEjeMedio(decision, 'estatismo') > 60 || decTxt.includes("reprim") || decTxt.includes("corte") || decTxt.includes("ajuste") || decTxt.includes("nafta") || decTxt.includes("desregul") || decTxt.includes("patruller");

      if (esPiquete9DeJulio) {
        return {
          badge: "📈 LN+ MERCADOS",
          extra: "DÓLAR: $1.340 · RIESGO PAÍS: A LA BAJA",
          titular: "ORDEN EN LA CALLE Y SINCERAMIENTO: SE RESTABLECE LA CIRCULACIÓN TRAS AÑOS DE CAOS",
          subZocalo: "El fin de los subsidios distorsivos: cómo impacta en las metas de equilibrio fiscal y reservas"
        };
      } else if (esCongelamientoBono) {
        return {
          badge: "⚠️ ALERTA ECONÓMICA",
          extra: "INCERTIDUMBRE EN LA CITY",
          titular: "GIRO POPULISTA: VUELVE EL CEPO A LAS TARIFAS Y PREOCUPA LA REACCIÓN DE LOS MERCADOS",
          subZocalo: "Castigo a la inversión privada: el nuevo impuesto golpea a las empresas tecnológicas más innovadoras"
        };
      } else if (decTxt.includes("prepaga") || decTxt.includes("copago") || decTxt.includes("médicos")) {
        return {
          badge: "📈 LN+ MERCADOS",
          extra: "SECTOR SALUD",
          titular: "SINCERAMIENTO DE PREPAGAS: BUSCAN FRENAR EL DESABASTECIMIENTO TRAS AÑOS DE RETRASO",
          subZocalo: "Equipamiento de última generación y fin de las listas de espera en clínicas privadas"
        };
      } else if (decTxt.includes("alquiler") || decTxt.includes("expensa")) {
        return {
          badge: "📈 LN+ MERCADOS",
          extra: "PROPIEDADES",
          titular: "LIBRE CONTRATACIÓN: LA OFERTA DE ALQUILERES SE RECUPERA TRAS EL FRACASO DE LA LEY ESTATAL",
          subZocalo: "Vuelven los departamentos al mercado y los precios comienzan a estabilizarse por competencia"
        };
      } else if (decTxt.includes("taxi") || decTxt.includes("uber") || decTxt.includes("didi") || decTxt.includes("cabify")) {
        return {
          badge: "📈 LN+ MERCADOS",
          extra: "MOVILIDAD URBANA",
          titular: "BATALLA CONTRA LAS CORPORACIONES: TAXISTAS BLOQUEAN TRASLADOS Y USUARIOS ELIGEN LIBERTAD",
          subZocalo: "El avance de las aplicaciones de transporte desafía el anacrónico monopolio de licencias"
        };
      } else if (decTxt.includes("recital") || decTxt.includes("estadio") || decTxt.includes("trapito") || decTxt.includes("show")) {
        return {
          badge: "📈 LN+ CIUDAD",
          extra: "POLICÍA DE LA CIUDAD",
          titular: "RÉCORD DE TURISMO Y ESPECTÁCULOS: LA INDUSTRIA CULTURAL INYECTA MILLONES EN LA CIUDAD",
          subZocalo: "Piden operativos de orden urbano para conciliar el éxito de los shows con los vecinos"
        };
      } else if (decTxt.includes("docente") || decTxt.includes("fonid") || decTxt.includes("ctera") || decTxt.includes("clase")) {
        return {
          badge: "📈 LN+ POLÍTICA",
          extra: "CICLO LECTIVO",
          titular: "FIRMEZA EN EL AULA: EXIGEN PRESENTISMO DOCENTE Y DECLARAN ESENCIAL LA EDUCACIÓN",
          subZocalo: "Poner fin a la toma de rehenes de los alumnos: cada día de clase cuenta para el futuro"
        };
      } else if (decTxt.includes("imputabilidad") || decTxt.includes("menor") || decTxt.includes("penitenciari")) {
        return {
          badge: "📈 LN+ SEGURIDAD",
          extra: "TRIBUNALES",
          titular: "FIN DE LA IMPUNIDAD: AVANZA LA BAJA DE IMPUTABILIDAD PARA DELITOS GRAVES",
          subZocalo: "Respuesta al clamor de las víctimas: menores armados deberán responder penalmente como adultos"
        };
      } else if (decTxt.includes("universidad") || decTxt.includes("arancel") || decTxt.includes("sigen") || decTxt.includes("facultad")) {
        return {
          badge: "📈 LN+ INSTITUCIONAL",
          extra: "TRANSPARENCIA",
          titular: "AUDITORÍAS Y CONTROL DEL GASTO: EXIGEN TRANSPARENCIA EN EL MANEJO DE FONDOS UNIVERSITARIOS",
          subZocalo: "La SIGEN entra a las facultades para auditar el uso de los recursos de todos los contribuyentes"
        };
      } else if (decTxt.includes("tierra") || decTxt.includes("patagonia") || decTxt.includes("glaciar")) {
        return {
          badge: "📈 LN+ INVERSIONES",
          extra: "DESARROLLO REGIONAL",
          titular: "INVERSIONES HISTÓRICAS: CAPITALES GLOBALES DESEMBARCAN EN PROYECTOS TECNOLÓGICOS EN LA PATAGONIA",
          subZocalo: "Compromiso de 500 millones de dólares para infraestructura y empleo en zonas despobladas"
        };
      } else if (esAjusteOManoDura) {
        return {
          badge: "📈 LN+ MERCADOS",
          extra: "DÓLAR: $1.340 · RIESGO PAÍS: A LA BAJA",
          titular: "ORDEN EN LA CALLE Y SINCERAMIENTO: SE RESTABLECE LA CIRCULACIÓN TRAS AÑOS DE CAOS",
          subZocalo: "El fin de los subsidios distorsivos: cómo impacta en las metas de equilibrio fiscal y reservas"
        };
      } else {
        return {
          badge: "⚠️ ALERTA ECONÓMICA",
          extra: "INCERTIDUMBRE EN LA CITY",
          titular: "GIRO POPULISTA: VUELVE EL CEPO A LAS TARIFAS Y PREOCUPA LA REACCIÓN DE LOS MERCADOS",
          subZocalo: "Castigo a la inversión privada: el nuevo impuesto golpea a las empresas tecnológicas más innovadoras"
        };
      }
    }
  },

  tn: {
    id: "tn",
    nombre: "TN (Todo Noticias)",
    tipo: "Señal de Noticias por Cable",
    formato: "tv_noticias",
    estiloVisual: "tn_servicio",
    sesgo: "periodismo_servicio",
    generarGraph: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esAjusteOManoDura = _valEjeMedio(decision, 'seguridad') > 60 || _valEjeMedio(decision, 'estatismo') > 60 || decTxt.includes("reprim") || decTxt.includes("corte") || decTxt.includes("ajuste") || decTxt.includes("nafta");

      if (esAjusteOManoDura) {
        return {
          badge: "📺 GUÍA TN",
          extra: "PANTALLA PARTIDA 4X4 · TRÁNSITO EN VIVO",
          titular: "GUÍA TN: CUÁNTO COSTARÁ LA NAFTA Y CÓMO IMPACTA EN EL TRANSPORTE Y ALIMENTOS",
          subZocalo: "Tensión en el centro porteño: desvíos, demoras y cortes en los principales accesos a la Ciudad"
        };
      } else {
        return {
          badge: "📺 GUÍA TN",
          extra: "DÓNDE ANOTARSE · CRONOGRAMA DE PAGOS",
          titular: "CONGELAN TARIFAS HASTA EL INVIERNO: QUIÉNES COBRAN EL BONO Y DÓNDE ANOTARSE",
          subZocalo: "Peligro de cortes de luz: qué advierten las distribuidoras ante el freno de inversiones"
        };
      }
    }
  },

  a24: {
    id: "a24",
    nombre: "A24",
    tipo: "Señal de Noticias de Actualidad",
    formato: "tv_noticias",
    estiloVisual: "a24_urgente",
    sesgo: "sensacionalismo_rosca",
    generarGraph: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esAjusteOManoDura = _valEjeMedio(decision, 'seguridad') > 60 || _valEjeMedio(decision, 'estatismo') > 60 || decTxt.includes("reprim") || decTxt.includes("corte") || decTxt.includes("ajuste");

      if (esAjusteOManoDura) {
        return {
          badge: "🔴 ÚLTIMO MOMENTO",
          extra: "TENSIÓN EN CASA ROSADA",
          titular: "SE PICÓ LA CALLE: CORRIDAS, DETENIDOS Y AMENAZA DE PARO GENERAL DE LA CGT",
          subZocalo: "La interna secreta del gabinete: ministros al borde de la renuncia por el costo político"
        };
      } else {
        return {
          badge: "🔴 ÚLTIMO MOMENTO",
          extra: "REBELIÓN EMPRESARIA",
          titular: "BOMBAZO FISCAL: IMPUESTO SORPRESA A LAS CUENTAS DIGITALES Y REBELIÓN EN REDES",
          subZocalo: "Furia en el sector financiero: ¿se viene una fuga masiva de billeteras virtuales a Uruguay?"
        };
      }
    }
  },

  // ========================================================
  // 2. CANALES DE STREAMING (La batalla cultural joven)
  // ========================================================
  neura: {
    id: "neura",
    nombre: "Neura Media (Tronco / Fantino)",
    tipo: "Canal de Streaming",
    formato: "streaming",
    estiloVisual: "streaming_neura",
    sesgo: "indignacion_neura",
    generarGraph: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esAjusteOManoDura = _valEjeMedio(decision, 'seguridad') > 60 || _valEjeMedio(decision, 'estatismo') > 60 || decTxt.includes("corte") || decTxt.includes("polic") || decTxt.includes("patruller");

      if (esAjusteOManoDura) {
        return {
          badge: "🎙️ YOUTUBE LIVE",
          extra: "🔴 88k EN VIVO · MICRÓFONO AL ROJO",
          titular: "SE LES TERMINÓ LA JODA: LA POLICÍA DESALOJÓ LA 9 DE JULIO Y TRONCO SE VOLVIÓ LOCO AL AIRE",
          subZocalo: "Fantino: 'Basta de romanticismo con los piquetes, en ningún país normal te frenan la avenida principal'"
        };
      } else {
        return {
          badge: "🎙️ YOUTUBE LIVE",
          extra: "🔴 95k EN VIVO · FURIA AL AIRE",
          titular: "¿ESTAMOS TODOS LOCOS? OTRA VEZ LA MÁQUINA DE COBRAR IMPUESTOS // FANTINO: 'ESTO TERMINA EN GUERRA CIVIL'",
          subZocalo: "Tronco al borde del infarto contra las regulaciones: '¡Dejen de inventar impuestos, manga de parásitos!'"
        };
      }
    }
  },

  carajo: {
    id: "carajo",
    nombre: "Carajo Stream (La Misa / El Gordo Dan)",
    tipo: "Canal de Streaming Libertario",
    formato: "streaming",
    estiloVisual: "streaming_carajo",
    sesgo: "militancia_digital",
    generarGraph: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esAjusteOManoDura = _valEjeMedio(decision, 'estatismo') > 60 || _valEjeMedio(decision, 'seguridad') > 60 || decTxt.includes("privat") || decTxt.includes("cerr") || decTxt.includes("patruller");

      if (esAjusteOManoDura) {
        return {
          badge: "🦁 CARAJO STREAM",
          extra: "🔴 142k EN VIVO · CHAT EN LLAMAS",
          titular: "DOMADOS LOS ZURDOS EN VIVO: PROTOCOLO AL PALO Y LLANTO DESESPERADO DE BELLIBONI",
          subZocalo: "Chat explotado de fueguitos y donaciones: 'Acelerá que les duele, cine absoluto'"
        };
      } else {
        return {
          badge: "🦁 CARAJO STREAM",
          extra: "🔴 110k EN VIVO · ALERTA TRAICIÓN",
          titular: "TRAICIÓN HISTÓRICA: CEDIERON ANTE LOS PARÁSITOS Y CLAVARON UN IMPUESTO COMUNISTA. ANDATE A TU CASA",
          subZocalo: "Gordo Dan a los gritos: 'Tibios, socialistas de cotillón, no entienden que nos votaron para dinamitar todo'"
        };
      }
    }
  },

  gelatina: {
    id: "gelatina",
    nombre: "Gelatina (Pedro Rosemblat)",
    tipo: "Canal de Streaming",
    formato: "streaming",
    estiloVisual: "streaming_gelatina",
    sesgo: "humor_politico",
    generarGraph: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esAjusteOManoDura = _valEjeMedio(decision, 'estatismo') > 60 || _valEjeMedio(decision, 'seguridad') > 60 || decTxt.includes("ajuste") || decTxt.includes("cine");

      if (decTxt.includes("apagón") || decTxt.includes("edesur") || decTxt.includes("vela") || decTxt.includes("cuadrilla") || (decTxt.includes("calor") && decTxt.includes("tarifa"))) {
        return {
          badge: "☕ GELATINA",
          extra: "FÁBRICA DE JINGLES EN VIVO",
          titular: "El capitalismo a oscuras: te liberaron las tarifas para que aprendas a vivir con velas y linternas",
          subZocalo: "Rosemblat: 'Se te derritió el helado y te cobran en dólares, una genialidad invisible del mercado'"
        };
      } else if (decTxt.includes("qr") || decTxt.includes("mercado pago") || decTxt.includes("galperin")) {
        return {
          badge: "☕ GELATINA",
          extra: "CAFÉ DE ESPECIALIDAD AL AIRE",
          titular: "Galperin tuitea desde la reposera mientras a vos te rebotan la compra de dos empanadas",
          subZocalo: "Debate en vivo: 'La batalla cultural del QR donde los bancos y Mercado Libre se pelean y la ligás vos'"
        };
      } else if (esAjusteOManoDura) {
        return {
          badge: "☕ GELATINA",
          extra: "FÁBRICA DE JINGLES EN VIVO",
          titular: "Festejan en Wall Street mientras te tiran gases en el Metrobus: el show de la libertad a palos",
          subZocalo: "Fábrica de Jingles en vivo musicalizando el desastre económico nacional"
        };
      } else {
        return {
          badge: "☕ GELATINA",
          extra: "CAFÉ DE ESPECIALIDAD AL AIRE",
          titular: "Tiraron una curita para una herida de bala: el bono te paga una merienda y media",
          subZocalo: "Rosemblat: 'Al menos las fintech van a poner un peso, aunque les agarre un ataque de pánico moral'"
        };
      }
    }
  },

  blender: {
    id: "blender",
    nombre: "Blender",
    tipo: "Canal de Streaming",
    formato: "streaming",
    estiloVisual: "streaming_blender",
    sesgo: "ironia_posmoderna",
    generarGraph: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esAjusteOManoDura = _valEjeMedio(decision, 'estatismo') > 60 || _valEjeMedio(decision, 'seguridad') > 60 || decTxt.includes("ajuste");

      if (esAjusteOManoDura) {
        return {
          badge: "📺 BLENDER",
          extra: "HAY ALGO AHÍ · CINE PURO",
          titular: "Si te vas a morir de hambre hacelo sin cortar la calle: manual de etiqueta para el ajuste",
          subZocalo: "Rebord y equipo analizan: 'Una entrega coreografiada a cielo abierto, cine posmoderno de primer nivel'"
        };
      } else {
        return {
          badge: "📺 BLENDER",
          extra: "MEMES AL ROJO VIVO",
          titular: "Aumentó la birra pero te congelaron la luz: balance positivo para quedarse encerrado jugando a la play",
          subZocalo: "Debate existencial sobre si el bono alcanza para un fernet con coca o medio atado de fasos"
        };
      }
    }
  },

  olga: {
    id: "olga",
    nombre: "Olga (Migue Granados / Soñé que Volaba)",
    tipo: "Canal de Streaming",
    formato: "streaming",
    estiloVisual: "streaming_olga",
    sesgo: "ocio_cotidiano",
    generarGraph: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esAjusteOManoDura = _valEjeMedio(decision, 'estatismo') > 60 || decTxt.includes("nafta") || decTxt.includes("tarifa") || decTxt.includes("carne");

      if (esAjusteOManoDura) {
        return {
          badge: "🍕 OLGA EN VIVO",
          extra: "BANDA EN VIVO · VIDRIO A LA CALLE",
          titular: "¿Cuánto gastás para salir un sábado? La cuenta imposible para llenar el tanque e ir a cenar",
          subZocalo: "Migue Granados comiendo medialunas: 'Dejen vivir en paz un fin de semana, boludo, no sean tan ortibas'"
        };
      } else {
        return {
          badge: "🍕 OLGA EN VIVO",
          extra: "LÍNEAS ABIERTAS AL PÚBLICO",
          titular: "Con el bono me compro tres alfajores y un café: abrimos líneas para que nos cuenten en qué delirio se gastan la plata",
          subZocalo: "Llamados de oyentes contando las compras más insólitas que hicieron a fin de mes"
        };
      }
    }
  },

  luzu: {
    id: "luzu",
    nombre: "Luzu TV (Nico Occhiato / Nadie Dice Nada)",
    tipo: "Canal de Streaming",
    formato: "streaming",
    estiloVisual: "streaming_luzu",
    sesgo: "jovenes_urbano",
    generarGraph: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esAjusteOManoDura = _valEjeMedio(decision, 'estatismo') > 60 || decTxt.includes("alquiler") || decTxt.includes("nafta");

      if (esAjusteOManoDura) {
        return {
          badge: "🚀 LUZU TV",
          extra: "NADIE DICE NADA · WHATSAPP AL AIRE",
          titular: "Imposible mudarse solo: el debate sobre cómo carajo hacer para no vivir con tus viejos hasta los 40",
          subZocalo: "La mesa de Nadie Dice Nada en catarsis total por los alquileres y las expensas"
        };
      } else {
        return {
          badge: "🚀 LUZU TV",
          extra: "AUDIOVIRALES · COMUNIDAD LUZU",
          titular: "Nos cayó plata en la cuenta: confesiones de compras impulsivas innecesarias que hacemos con los bonos",
          subZocalo: "El chat de WhatsApp colapsado con screenshots de compras de ropa y entradas a recitales"
        };
      }
    }
  },

  // ========================================================
  // 3. SEÑALES DEPORTIVAS (Cuando el deporte y la política chocan)
  // ========================================================
  tyc_sports: {
    id: "tyc_sports",
    nombre: "TyC Sports",
    tipo: "Señal Deportiva Líder",
    formato: "deportes",
    estiloVisual: "deporte_tyc",
    sesgo: "debate_futbolero",
    generarGraph: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const tocaFutbol = decTxt.includes("sad") || decTxt.includes("club") || decTxt.includes("fútbol") || decTxt.includes("afa") || decTxt.includes("asociación");

      if (decTxt.includes("visitante")) {
        return {
          badge: "⚽ DEBATE AL ROJO VIVO",
          extra: "MÓVIL EN PEAJES",
          titular: "VUELVEN LOS VISITANTES: ¿FIESTA POPULAR O EMBOSCADA ANUNCIADA EN LOS PEAJES?",
          subZocalo: "La AFA celebra el regreso del folclore pero la policía advierte por cruces armados en los peajes"
        };
      } else if (tocaFutbol) {
        return {
          badge: "⚽ DEBATE AL ROJO VIVO",
          extra: "MÓVIL EN VIAMONTE",
          titular: "EL FÚTBOL EN PIE DE GUERRA: ¿PELIGRA EL CLÁSICO O SE JUEGA A PUERTAS CERRADAS?",
          subZocalo: "Escándalo en AFA: dirigentes denuncian aprietes del gobierno nacional y amenazan con parar la fecha"
        };
      } else {
        return {
          badge: "⚽ DEBATE AL ROJO VIVO",
          extra: "PULSO DE LOS CLUBES",
          titular: "BOCHORNO EN LA CANCHA: ¿CÓMO AFECTA LA CRISIS A LAS ENTRADAS Y LA CUOTA SOCIAL?",
          subZocalo: "Hinchas furiosos en la puerta del club: 'No llegamos a fin de mes y nos aumentan la popular'"
        };
      }
    }
  },

  espn: {
    id: "espn",
    nombre: "ESPN Argentina (F90 / Vignolo)",
    tipo: "Señal Deportiva Internacional",
    formato: "deportes",
    estiloVisual: "deporte_espn",
    sesgo: "editorial_solemne",
    generarGraph: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const tocaFutbol = decTxt.includes("sad") || decTxt.includes("club") || decTxt.includes("fútbol") || decTxt.includes("afa");

      if (decTxt.includes("visitante")) {
        return {
          badge: "🎙️ F90 EDITORIAL",
          extra: "PAUSA DRAMÁTICA DEL POLLO",
          titular: "¿ESTAMOS PREPARADOS PARA LA VUELTA DE LOS VISITANTES? EL MIEDO EN LAS RUTAS",
          subZocalo: "Vignolo: 'Ojalá sea una fiesta de las dos hinchadas, pero si hay un solo muerto en un peaje, no aprendimos nada'"
        };
      } else if (tocaFutbol) {
        return {
          badge: "🎙️ F90 EDITORIAL",
          extra: "PAUSA DRAMÁTICA DEL POLLO",
          titular: "MOMENTO BISAGRA: ¿QUÉ LE ESTÁN HACIENDO A NUESTRO FÚTBOL?",
          subZocalo: "Vignolo: 'Si le sacás el club a la gente de barrio, matás la esencia de este juego. No entiendan todo con guita'"
        };
      } else {
        return {
          badge: "🎙️ F90 EDITORIAL",
          extra: "DEBATE EN LA MESA",
          titular: "EL PULSO DEL VESTUARIO: 'CUANDO EL PAÍS SE PRENDE FUEGO, EN LA CANCHA SE SIENTE'",
          subZocalo: "Debate profundo en la mesa sobre el rol social y barrial de las instituciones deportivas"
        };
      }
    }
  },

  // ========================================================
  // 4. RADIOS CLAVE (El pulso de la mañana)
  // ========================================================
  radio_mitre: {
    id: "radio_mitre",
    nombre: "Radio Mitre (AM 790)",
    tipo: "Radio AM Primera Mañana",
    formato: "radio",
    estiloVisual: "radio_mitre",
    sesgo: "alarma_republicana",
    generarGraph: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esAjusteOManoDura = _valEjeMedio(decision, 'seguridad') > 60 || decTxt.includes("corte") || decTxt.includes("piquet");

      if (esAjusteOManoDura) {
        return {
          badge: "📻 MITRE AM 790",
          extra: "7:05 AM · AL AIRE",
          titular: "7:05 AM. La República en vilo: 14 cortes simultáneos convierten la Ciudad en una trampa mortal mientras el gobierno titubea.",
          subZocalo: "Eduardo Feinmann: 'El derecho a circular no se negocia, señores. Los piqueteros no pueden ser los dueños de la calle.'"
        };
      } else {
        return {
          badge: "📻 MITRE AM 790",
          extra: "7:12 AM · ECONOMÍA",
          titular: "Alarma económica: advierten que el congelamiento de tarifas provocará desabastecimiento en el mediano plazo.",
          subZocalo: "Informe del equipo económico de Mitre: 'Otra vez las recetas que fundieron al país y ahuyentan inversiones.'"
        };
      }
    }
  },

  radio_rivadavia: {
    id: "radio_rivadavia",
    nombre: "Radio Rivadavia (AM 630)",
    tipo: "Radio AM Vecinal",
    formato: "radio",
    estiloVisual: "radio_rivadavia",
    sesgo: "indignacion_callejera",
    generarGraph: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esManoDura = _valEjeMedio(decision, 'seguridad') > 60 || decTxt.includes("polic") || decTxt.includes("orden");

      if (esManoDura) {
        return {
          badge: "📻 RIVADAVIA AM 630",
          extra: "BASTA BABY · MICRÓFONO AL TACHERO",
          titular: "Basta de contemplaciones: no se puede gobernar con miedo al carpetazo mientras los laburantes son rehenes de las mafias.",
          subZocalo: "Baby Etchecopar: 'Quiero ver a los policías cuidando al laburante, basta de financiar a los que viven del Estado.'"
        };
      } else {
        return {
          badge: "📻 RIVADAVIA AM 630",
          extra: "REBELIÓN FISCAL PYME",
          titular: "Rebelión fiscal en vivo: comerciantes y pymes llaman a no pagar el nuevo impuesto a billeteras digitales.",
          subZocalo: "Llamados desesperados de comerciantes que no dan abasto con la presión tributaria voraz."
        };
      }
    }
  },

  el_destape_radio: {
    id: "el_destape_radio",
    nombre: "El Destape Radio (AM 1070)",
    tipo: "Radio AM Nacional y Popular",
    formato: "radio",
    estiloVisual: "radio_destape",
    sesgo: "denuncia_soberana",
    generarGraph: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esAjuste = _valEjeMedio(decision, 'estatismo') > 60 || decTxt.includes("nafta") || decTxt.includes("tarifa") || decTxt.includes("ajuste");

      if (esAjuste) {
        return {
          badge: "📻 EL DESTAPE AM 1070",
          extra: "EDITORIAL DE NAVARRO",
          titular: "Comenzó el plan de entrega: las petroleras festejan el tarifazo mientras el pueblo resiste en las calles.",
          subZocalo: "Roberto Navarro: 'Están aplicando el ajuste más brutal de la historia con represión planificada.'"
        };
      } else {
        return {
          badge: "📻 EL DESTAPE AM 1070",
          extra: "JUSTICIA DISTRIBUTIVA",
          titular: "Freno histórico a los especuladores: las grandes fortunas deberán financiar la emergencia social.",
          subZocalo: "Navarro: 'La única salida es redistribuir la riqueza concentrada por las corporaciones financieras.'"
        };
      }
    }
  },

  urbana_play: {
    id: "urbana_play",
    nombre: "Urbana Play (FM 104.3)",
    tipo: "Radio FM Urbana & Actualidad",
    formato: "radio",
    estiloVisual: "radio_urbana",
    sesgo: "progresismo_urbano",
    generarGraph: function(decision, flags, vector) {
      const decTxt = (decision?.texto || "").toLowerCase();
      const esAjuste = _valEjeMedio(decision, 'estatismo') > 60 || decTxt.includes("ajuste") || decTxt.includes("nafta");

      if (esAjuste) {
        return {
          badge: "📻 URBANA PLAY FM 104.3",
          extra: "DE ACÁ EN MÁS · SALUD MENTAL",
          titular: "¿Cómo sobrellevar la angustia del bolsillo? Hablamos con economistas y psicólogos sobre el impacto del nuevo paquete de medidas.",
          subZocalo: "María O'Donnell y Andy Kusnetzoff: 'El impacto emocional de la incertidumbre en las familias urbanas.'"
        };
      } else {
        return {
          badge: "📻 URBANA PLAY FM 104.3",
          extra: "MOVILIDAD Y SERVICIOS",
          titular: "Tarifas congeladas y bonos de emergencia: el debate sobre la sustentabilidad y el consumo joven.",
          subZocalo: "Especialistas en sustentabilidad analizan el impacto en la transición energética y los servicios públicos."
        };
      }
    }
  }
};

// Generador de Muro de Medios (Selecciona el Trío Canónico + Opcional Deportivo/Radio)
function generarMuroDeMedios(decision, flags, vector) {
  decision = decision || { texto: "" };
  const decTxt = (decision.texto || "").toLowerCase();
  const esAjusteOManoDura = _valEjeMedio(decision, 'seguridad') > 60 || _valEjeMedio(decision, 'estatismo') > 60 || decTxt.includes("reprim") || decTxt.includes("corte") || decTxt.includes("ajuste") || decTxt.includes("nafta") || decTxt.includes("desregul") || decTxt.includes("patruller");
  const tocaFutbol = decTxt.includes("sad") || decTxt.includes("club") || decTxt.includes("fútbol") || decTxt.includes("afa") || decTxt.includes("asociación");

  // 1. Canal Oficialista / Afín
  const canalAfinId = esAjusteOManoDura ? "ln_mas" : "c5n";

  // 2. Canal Opositor Frontal
  const canalOpositorId = esAjusteOManoDura ? "c5n" : "ln_mas";

  // 3. Crónica TV (Placa Roja)
  const canalCronicaId = "cronica";

  // 4. Stream Irreverente (según sesgo temático)
  let streamId = "carajo";
  if (!esAjusteOManoDura) {
    streamId = "gelatina";
  } else if (decTxt.includes("birra") || decTxt.includes("asado") || decTxt.includes("carne")) {
    streamId = "olga";
  } else if (decTxt.includes("cine") || decTxt.includes("cultura")) {
    streamId = "blender";
  } else if (decTxt.includes("alquiler") || decTxt.includes("joven")) {
    streamId = "luzu";
  }

  // Medios seleccionados principales (el Trío + Stream o Deporte)
  const seleccionKeys = [canalAfinId, canalOpositorId, canalCronicaId];
  if (tocaFutbol) {
    seleccionKeys.push("tyc_sports");
  } else {
    seleccionKeys.push(streamId);
  }

  // Desduplicar manteniendo orden
  const unicos = [...new Set(seleccionKeys)];

  // Procesar todos los medios para permitir zapping
  const todos = {};
  for (const [k, m] of Object.entries(MEDIOS_ARGENTINOS)) {
    const graph = m.generarGraph(decision, flags, vector);
    todos[k] = {
      id: m.id,
      nombre: m.nombre,
      tipo: m.tipo,
      formato: m.formato,
      estiloVisual: m.estiloVisual,
      sesgo: m.sesgo,
      badge: graph.badge,
      countdown: graph.countdown || null,
      extra: graph.extra || null,
      titular: graph.titular,
      subZocalo: graph.subZocalo
    };
  }

  const destacados = unicos.map(k => todos[k]).filter(Boolean);

  // Devolver array con las tarjetas destacadas + propiedad con el universo completo para zapping
  const resultado = [...destacados];
  resultado.todos = todos;
  resultado.esAjusteOManoDura = esAjusteOManoDura;
  resultado.tocaFutbol = tocaFutbol;

  return resultado;
}

// Exportación compatible para Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MEDIOS_ARGENTINOS, generarMuroDeMedios };
}
