/**
 * CALESITA_MACROECONOMIA_BCRA.JS
 * =============================================================================
 * Simulación del Motor Macroeconómico Argentino:
 * - Las Cuatro Estaciones de la Calesita Cambiaria:
 *     1. La Dulce Primavera (El "Dame Dos" y la Riqueza Ficticia)
 *     2. La Asfixia Externa y el Carry Trade ("La Bicicleta Financiera")
 *     3. La Olla a Presión y el Zoológico Cambiario
 *     4. La Piña Inevitable (El Estallido y el Reseteo)
 * - El Tablero de Instrumentos del Banco Central (5 Semáforos Críticos):
 *     Reservas Netas, Brecha Cambiaria, Inflación Mensual, Tasa Nominal y TCRM.
 * - Las Tres Trampas Clásicas de la Política Económica:
 *     Planchar el Dólar, La Bicicleta Financiera y El Zoológico de Parches.
 * - Los 3 Dilemas Macroeconómicos Extremos (4 opciones c/u):
 *     1. El Paro de los Silobolsas en la Pampa Húmeda
 *     2. El Dólar Tarjeta y la Fuga de las Vacaciones
 *     3. La Bola de Deuda en Pesos (La Bomba de las Letras)
 * - La Pantalla de la Mesa de Dinero del BCRA (Mesa de Operaciones en Vivo):
 *     Cotizaciones en tiempo real, cables de la City y botonera de intervención.
 * =============================================================================
 */

// 1. LAS CUATRO ESTACIONES DE LA CALESITA CAMBIARIA
const FASES_CALESITA_CAMBIARIA = {
  fase_primavera: {
    id: "fase_primavera",
    numero: 1,
    nombre: "Fase 1: La Dulce Primavera",
    subtitulo: "El «Dame Dos» y la Riqueza Ficticia",
    icono: "fa-solid fa-sun",
    color: "emerald",
    mecanismo: "Tipo de cambio oficial como ancla antiinflacionaria. El dólar sube al 1% mensual mientras los sueldos en paritarias suben al 3%.",
    ilusionSocial: "Clase media en Miami, Cancún y Río; compras masivas de termos Stanley y iPhones en cuotas; recitales en River y bodegones porteños colmados en 20 minutos.",
    costoOculto: "El país se vuelve carísimo en dólares para exportar y regalado para importar. La industria pierde competitividad y la cuenta corriente entra en rojo hemorrágico.",
    valoresTipicos: {
      brecha: 12,
      inflacion: 2.1,
      tcrm: 72, // Muy atrasado
      intervencionDiariaUSD: -25
    }
  },

  fase_asfixia: {
    id: "fase_asfixia",
    numero: 2,
    nombre: "Fase 2: La Asfixia Externa",
    subtitulo: "El Carry Trade y «La Bicicleta Financiera»",
    icono: "fa-solid fa-bicycle",
    color: "amber",
    mecanismo: "Tasas de interés siderales en pesos para frenar la fuga al dólar. Fondos de Wall Street traen dólares, los colocan a tasa en pesos, ganan 45% en USD y preparan la salida coordinada.",
    ilusionSocial: "Déficit récord en la balanza turística («Dólar Tarjeta»). El BCRA quema 100 millones diarios en silencio para que el oficial no se mueva un centavo.",
    costoOculto: "El Dólar Blue y el CCL se despegan violentamente del oficial: nace la temida Brecha Cambiaria que paraliza la inversión real.",
    valoresTipicos: {
      brecha: 55,
      inflacion: 6.8,
      tcrm: 82,
      intervencionDiariaUSD: -95
    }
  },

  fase_olla_presion: {
    id: "fase_olla_presion",
    numero: 3,
    nombre: "Fase 3: La Olla a Presión",
    subtitulo: "El Zoológico Cambiario y la Bola de Letras",
    icono: "fa-solid fa-fire-burner",
    color: "rose",
    mecanismo: "Reservas netas tocan cero. El gobierno se niega a devaluar antes de votar y aprieta el cepo con un zoológico de tipos de cambio diferenciales y trabas a las importaciones.",
    ilusionSocial: "Nacen el Dólar Soja, Dólar Malbec, Dólar Qatar, Dólar Coldplay y Dólar Tecno. Remarcación semanal de precios y góndolas con etiquetas encimadas.",
    costoOculto: "Faltan neumáticos, café, insumos médicos y autopartes en Córdoba. La bola de Leliqs y Pases crece a ritmo exponencial absorbiendo la emisión sin respaldo.",
    valoresTipicos: {
      brecha: 110,
      inflacion: 14.2,
      tcrm: 88,
      intervencionDiariaUSD: -140
    }
  },

  fase_pina_historica: {
    id: "fase_pina_historica",
    numero: 4,
    nombre: "Fase 4: La Piña Inevitable",
    subtitulo: "El Estallido Cambiario y el Reseteo del Ciclo",
    icono: "fa-solid fa-burst",
    color: "red",
    mecanismo: "La corrida no se aguanta más. A las 9:55 AM los bancos no renuevan letras, el FMI suspende desembolsos y la bóveda de Reconquista 266 se queda sin billetes.",
    ilusionSocial: "Salto cambiario forzado de golpe (+60% a +100%). Pass-through fulminante: nafta, fideos y remedios se duplican en 10 días. El salario real cae 25 puntos en un trimestre.",
    costoOculto: "Recesión profunda y quiebras masivas de comercios con stocks caros.",
    renacimiento: "Argentina queda 'regalada' para el mundo. Extranjeros cruzan la frontera a vaciar supermercados en Mendoza y Misiones; el campo liquida cosechas a ritmo récord y el BCRA vuelve a acumular dólares... para iniciar una nueva Fase 1.",
    valoresTipicos: {
      brecha: 22,
      inflacion: 26.5,
      tcrm: 125, // Muy competitivo
      intervencionDiariaUSD: +180
    }
  }
};

// 2. EL TABLERO DE INSTRUMENTOS DEL BANCO CENTRAL (SEMÁFOROS)
const TABLERO_SEMAFOROS_BCRA = {
  reservasNetas: {
    nombre: "Reservas Netas BCRA",
    unidad: "US$ Millones",
    icono: "fa-solid fa-vault",
    seguro: { min: 6000, label: "Seguro (> US$ 6.000 M)", clase: "text-emerald-400" },
    alarma: { min: 0, max: 2000, label: "Zona de Alarma (US$ 0 a 2.000 M)", clase: "text-amber-400" },
    catastrofe: { max: 0, label: "Catástrofe Inminente (Negativas: Usando encajes o swap)", clase: "text-rose-400" },
    evaluar: (val) => {
      if (val >= 6000) return "seguro";
      if (val >= 0) return "alarma";
      return "catastrofe";
    }
  },

  brechaCambiaria: {
    nombre: "Brecha Cambiaria (Blue vs. Oficial)",
    unidad: "%",
    icono: "fa-solid fa-arrows-split-up-and-left",
    seguro: { max: 20, label: "Seguro (< 20%)", clase: "text-emerald-400" },
    alarma: { min: 45, max: 80, label: "Zona de Alarma (45% a 80%)", clase: "text-amber-400" },
    catastrofe: { min: 100, label: "Catástrofe Inminente (> 100%: Freno total a exportaciones)", clase: "text-rose-400" },
    evaluar: (val) => {
      if (val < 25) return "seguro";
      if (val < 85) return "alarma";
      return "catastrofe";
    }
  },

  inflacionMensual: {
    nombre: "Inflación Mensual (IPC)",
    unidad: "% mensual",
    icono: "fa-solid fa-arrow-trend-up",
    seguro: { max: 2.5, label: "Seguro (< 2.5%)", clase: "text-emerald-400" },
    alarma: { min: 5.0, max: 9.0, label: "Zona de Alarma (5.0% a 9.0%)", clase: "text-amber-400" },
    catastrofe: { min: 12.0, label: "Catástrofe Inminente (> 12%: Dispersión absoluta)", clase: "text-rose-400" },
    evaluar: (val) => {
      if (val <= 3.0) return "seguro";
      if (val < 10.0) return "alarma";
      return "catastrofe";
    }
  },

  tasaInteres: {
    nombre: "Tasa de Interés Nominal (TNA / Leliq)",
    unidad: "% TNA",
    icono: "fa-solid fa-percent",
    seguro: { label: "Neutra vs IPC", clase: "text-emerald-400" },
    alarma: { label: "IPC + 15 pts (Bicicleta en marcha)", clase: "text-amber-400" },
    catastrofe: { label: "Tasa Estratosférica (> 90%: Bola duplica base en 90 días)", clase: "text-rose-400" },
    evaluar: (val, inflacion) => {
      const tasaMensual = val / 12;
      if (tasaMensual <= inflacion + 1) return "seguro";
      if (val < 95) return "alarma";
      return "catastrofe";
    }
  },

  tcrm: {
    nombre: "Tipo de Cambio Real Multilateral (TCRM)",
    unidad: "Puntos (Base 100)",
    icono: "fa-solid fa-scale-balanced",
    seguro: { min: 100, max: 115, label: "Seguro (100 a 115 pts: Competitivo)", clase: "text-emerald-400" },
    alarma: { min: 80, max: 90, label: "Zona de Alarma (80 a 90 pts: Atraso evidente)", clase: "text-amber-400" },
    catastrofe: { max: 75, label: "Catástrofe Inminente (< 75 pts: Atraso cambiario terminal)", clase: "text-rose-400" },
    evaluar: (val) => {
      if (val >= 98) return "seguro";
      if (val >= 78) return "alarma";
      return "catastrofe";
    }
  }
};

// 3. LAS TRES TRAMPAS CLÁSICAS DE LA POLÍTICA ECONÓMICA
const TRAMPAS_POLITICA_ECONOMICA = {
  trampa_planchar_dolar: {
    id: "trampa_planchar_dolar",
    nombre: "Planchar el Dólar para Ganar la Elección",
    icono: "fa-solid fa-anchor",
    color: "sky",
    queHaces: "Faltan 4 meses para las elecciones. Ordenás al presidente del BCRA quemar 80 millones de dólares diarios de las reservas para clavar el dólar oficial.",
    beneficioInmediato: "La inflación se plancha transitoriamente, las paritarias le ganan a los precios y ganás la elección por 4 puntos.",
    peajePosterior: "El lunes siguiente a votar, el mercado sabe que te quedaste sin reservas; se desata una corrida de tres semanas que te obliga a devaluar el doble de lo evitado.",
    impactoInmediato: { reservasDelta: -1600, inflacionDelta: -1.8, tcrmDelta: -12, popularidadDelta: +10 },
    peajeDiferido: { reservasDelta: -900, inflacionDelta: +8.5, brechaDelta: +35, devaluacionForzada: 45 }
  },

  trampa_bicicleta_financiera: {
    id: "trampa_bicicleta_financiera",
    nombre: "La «Bicicleta Financiera» de Fondos Amigos",
    icono: "fa-solid fa-money-bill-transfer",
    color: "amber",
    queHaces: "Subís la tasa de interés al 110% en pesos y prometés a financistas de Wall Street que no vas a mover el tipo de cambio oficial por 180 días.",
    beneficioInmediato: "Entran US$ 5.000 millones frescos del exterior que engordan transitoriamente las reservas; los diarios titulan 'Confianza ciega de los mercados'.",
    peajePosterior: "Al día 180, los fondos cobran capital + intereses en pesos (45% en dólares limpios) y van todos juntos a ventanilla a comprar dólares para girar a NY. El BCRA quiebra en 72 horas.",
    impactoInmediato: { reservasDelta: +4500, tasaDelta: +35, mechaSocialDelta: -10, popularidadDelta: +8 },
    peajeDiferido: { reservasDelta: -6500, brechaDelta: +60, inflacionDelta: +12.0, quiebraTecnicaBCRA: true }
  },

  trampa_zoologico_parches: {
    id: "trampa_zoologico_parches",
    nombre: "El «Zoológico de Parches» y el Dólar Diferencial",
    icono: "fa-solid fa-tags",
    color: "purple",
    queHaces: "El campo no liquida por el atraso cambiario. En vez de devaluar para todos, inventás un 'Dólar Soja Especial' a 35 días a precio inflado.",
    beneficioInmediato: "El campo liquida US$ 4.000 millones en un mes y te salva las papas para pagarle el vencimiento al FMI.",
    peajePosterior: "Tenés que emitir una montaña de pesos sin respaldo para pagar la soja preferencial; los pesos sobrantes se van al Blue y la brecha rompe récords históricos.",
    impactoInmediato: { reservasDelta: +3800, emisionBillones: +2.8, popularidadDelta: +5 },
    peajeDiferido: { brechaDelta: +45, inflacionDelta: +6.5, blueDelta: +250 }
  }
};

// 4. LOS 3 DILEMAS MACROECONÓMICOS EXTREMOS (4 OPCIONES C/U)
const DILEMAS_MACRO_EXTREMOS = {
  dilema_silobolsas_pampa: {
    id: "dilema_silobolsas_pampa",
    titulo: "Dilema 1: El Paro de los Silobolsas en la Pampa Húmeda",
    icono: "fa-solid fa-wheat-awn",
    detonante: "Es mayo y los productores tienen guardadas 18 millones de toneladas de soja en silobolsas plásticos. Exigen una baja inmediata de 10 puntos en retenciones o devaluación del oficial; si no, no liquidan un solo grano y el Banco Central se queda sin dólares comerciales para el invierno.",
    opciones: [
      {
        id: "bajar_retenciones_decreto",
        texto: "Opción 1: Ceder al reclamo y bajar retenciones por decreto",
        etiqueta: "Ceder al campo / Agujero fiscal",
        icono: "fa-solid fa-hand-holding-dollar",
        color: "amber",
        impacto: {
          reservasDelta: +3500,
          deficitFiscalDelta: -1.8,
          mechaSocialDelta: +10,
          relato: "El campo liquida US$ 3.500 millones en tres semanas y las reservas respiran. Sin embargo, Economía pierde recaudación de golpe y el déficit fiscal te explota a fin de mes."
        }
      },
      {
        id: "dolar_soja_4_temporal",
        texto: "Opción 2: Crear un «Dólar Soja 4» temporal a 30 días con bono compensador",
        etiqueta: "Parche cambiario / Emisión monetaria",
        icono: "fa-solid fa-tags",
        color: "purple",
        impacto: {
          reservasDelta: +4200,
          inflacionDelta: +3.5,
          brechaDelta: +25,
          relato: "Destrabás la liquidación inmediata de granos, pero emitís una masa monetaria sideral que presiona directamente sobre los precios de los alimentos en la góndola."
        }
      },
      {
        id: "arca_allanamientos_multas",
        texto: "Opción 3: Mandar inspectores de ARCA y fuerzas federales a allanar acopios y multar",
        etiqueta: "Choque frontal / Paro agropecuario",
        icono: "fa-solid fa-shield-halved",
        color: "rose",
        impacto: {
          reservasDelta: -600,
          mechaSocialDelta: +25,
          desabastecimientoAlimentos: true,
          relato: "Aplausos de los sectores más duros de la militancia. La Mesa de Enlace declara paro por tiempo indeterminado, corta rutas cerealeras y desabastece de carne y leche a las grandes ciudades."
        }
      },
      {
        id: "prestamo_puente_bancos_extranjeros",
        texto: "Opción 4: No intervenir y financiar el bache con un préstamo puente de bancos internacionales",
        etiqueta: "Deuda en dólares al 13% / Soberanía intacta",
        icono: "fa-solid fa-building-columns",
        color: "sky",
        impacto: {
          reservasDelta: +2000,
          riesgoPaisDelta: +180,
          deudaExternaDolaresM: +2500,
          relato: "Mantenés la autoridad sin arrodillarte ante las patronales rurales; pagás una tasa usuraria del 13% en dólares que hipoteca el presupuesto del año siguiente."
        }
      }
    ]
  },

  dilema_dolar_tarjeta: {
    id: "dilema_dolar_tarjeta",
    titulo: "Dilema 2: El Dólar Tarjeta y la Fuga de las Vacaciones",
    icono: "fa-solid fa-plane-departure",
    detonante: "Arranca diciembre y 1.200.000 argentinos compraron paquetes turísticos para veranear en Brasil, Uruguay y Europa. El gasto proyecta una salida de US$ 1.800 millones en 60 días, vaciando los últimos dólares del Banco Central en plena temporada estival.",
    opciones: [
      {
        id: "recargo_100_turismo",
        texto: "Opción 1: Clavar un recargo impositivo del 100% al turismo en el exterior (Percepciones)",
        etiqueta: "Frenar sangría / Furia de clase media",
        icono: "fa-solid fa-ban",
        color: "rose",
        impacto: {
          reservasDelta: +1200,
          blueDelta: +140,
          aprobacionClaseMedia: -25,
          relato: "Frenás en seco el drenaje de divisas del BCRA. La clase media explota de furia, las agencias de viajes quiebran masivamente y el Dólar Blue salta 15% por la compra de billetes físicos."
        }
      },
      {
        id: "prohibir_cuotas_exterior",
        texto: "Opción 2: Prohibir el financiamiento en cuotas de pasajes internacionales y consumos afuera",
        etiqueta: "Tijera financiera / Cancelación en redes",
        icono: "fa-solid fa-credit-card",
        color: "amber",
        impacto: {
          reservasDelta: +600,
          aprobacionJovenes: -15,
          relato: "Reducís la sangría sin aumentar impuestos directos; los jóvenes y familias de clase media te cancelan en redes sociales acusándote de encerrar a la población dentro del país."
        }
      },
      {
        id: "subsidiar_turismo_swap_chino",
        texto: "Opción 3: Dejar el esquema libre y subsidiar los dólares turísticos con el swap chino",
        etiqueta: "Paz de verano / Devaluación en marzo",
        icono: "fa-solid fa-umbrella-beach",
        color: "emerald",
        impacto: {
          reservasDelta: -1800,
          popularidadDelta: +8,
          devaluacionPostVeranoRiesgo: 95,
          relato: "Verano en paz social y sensación de normalidad para la clase media. En marzo el Banco Central queda con reservas netas en menos US$ 7.000 millones y la devaluación post-vacaciones es inevitable."
        }
      },
      {
        id: "exclusivo_dolares_propios_cuenta",
        texto: "Opción 4: Obligar a pagar consumos en el exterior exclusivamente con dólares propios de cuentas bancarias",
        etiqueta: "Blindaje de reservas / Fantasma del corralito",
        icono: "fa-solid fa-lock",
        color: "sky",
        impacto: {
          reservasDelta: +1800,
          caidaDepositosDolares: true,
          paranoiaFinancieraDelta: +30,
          relato: "Blindás las reservas del Estado al 100%; los bancos denuncian caída de depósitos en dólares por desconfianza ciudadana y se reactiva el fantasma del «corralito»."
        }
      }
    ]
  },

  dilema_bomba_letras: {
    id: "dilema_bomba_letras",
    titulo: "Dilema 3: La Bola de Deuda en Pesos (La Bomba de las Letras)",
    icono: "fa-solid fa-bomb",
    detonante: "Los pasivos remunerados del Banco Central (Leliqs/Pases/Lecaps) alcanzan tres veces la Base Monetaria total. Cada 30 días, el pago de intereses equivale a dos presupuestos nacionales de educación. Si bajás la tasa, la plata corre al dólar; si la subís, la deuda crece a velocidad supersónica.",
    opciones: [
      {
        id: "plan_bonex_compulsivo",
        texto: "Opción 1: «El Plan Bonex»: Canjear compulsivamente los plazos fijos por un bono a 10 años",
        etiqueta: "Borrón y cuenta nueva / Destrucción de confianza",
        icono: "fa-solid fa-hammer",
        color: "red",
        impacto: {
          bolaPasivosEliminada: true,
          crisisBancariaTotal: true,
          mechaSocialDelta: +40,
          relato: "Desarmás la bomba de pesos de un plumazo y frenás la hiperinflación. Sin embargo, destruís la confianza del sistema bancario por dos décadas y la gente sale a romper las sucursales con mazas."
        }
      },
      {
        id: "licuacion_salvaje_tasa",
        texto: "Opción 2: «La Licuación Salvaje»: Bajar la tasa a la mitad y dejar que la inflación devore los pesos",
        etiqueta: "Licuadora inflacionaria / Salarios en el piso",
        icono: "fa-solid fa-blender",
        color: "rose",
        impacto: {
          inflacionDelta: +15.0,
          salarioRealDelta: -25,
          mechaSocialDelta: +30,
          relato: "La deuda del BCRA se vuelve insignificante en términos reales en 6 meses. La inflación salta al 25% mensual, los jubilados pierden la mitad de su poder de compra y los gremios declaran huelgas rotativas."
        }
      },
      {
        id: "megacredito_wall_street_usd",
        texto: "Opción 3: Pedir un megacrédito internacional de US$ 15.000 millones para recomprar los pesos",
        etiqueta: "Dolarizar la deuda / Riesgo de default soberano",
        icono: "fa-solid fa-earth-americas",
        color: "amber",
        impacto: {
          deudaDolaresNuevaM: +15000,
          inflacionDelta: -2.0,
          soberaniaEmbargosRiesgo: 80,
          relato: "Rescatás la deuda sin shock inflacionario ni confiscación de depósitos; transformás una deuda en pesos (que podés imprimir) en una deuda en dólares con fondos de Wall Street que pueden embargarte el país."
        }
      },
      {
        id: "patear_canjes_cer_linked",
        texto: "Opción 4: Patear los vencimientos de las letras para el siguiente mandato mediante canjes indexados",
        etiqueta: "Campo minado al sucesor / La calesita sigue",
        icono: "fa-solid fa-forward",
        color: "emerald",
        impacto: {
          alivioInmediato: true,
          herenciaPesadaRiesgo: 100,
          relato: "Descomprimís tu gestión inmediata entregando bonos atados a inflación (CER) o al dólar oficial (Dólar Linked); le dejás un campo minado imposible al próximo presidente."
        }
      }
    ]
  }
};

// 5. ACCIONES DIRECTAS DE LA MESA DE DINERO DEL BCRA
const ACCIONES_MESA_DINERO = {
  vender_fieles_mep: {
    id: "vender_fieles_mep",
    nombre: "[VENDER FIELES] Reventar el precio del MEP con reservas",
    icono: "fa-solid fa-fire",
    color: "rose",
    descripcion: "Sacar US$ 100 M de las reservas líquidas para intervenir en bonos AL30 y planchar la cotización del MEP.",
    impacto: {
      reservasDelta: -100,
      mepDelta: -45,
      blueDelta: -30,
      brechaDelta: -4,
      relato: "La mesa de dinero vende US$ 100 millones en los últimos 20 minutos de rueda. El dólar MEP retrocede $ 45 y los brokers de la City frenan las órdenes de compra."
    }
  },

  tasa_arriba_800bps: {
    id: "tasa_arriba_800bps",
    nombre: "[TASA ARRIBA] Subir tasa de política monetaria 800 bps",
    icono: "fa-solid fa-arrow-up-right-dots",
    color: "amber",
    descripcion: "Fijar la tasa de letras y plazos fijos 800 puntos básicos más arriba para tentar a los ahorristas a quedarse en pesos.",
    impacto: {
      tasaDelta: +8,
      blueDelta: -25,
      actividadDelta: -3,
      bolaPasivosDelta: +0.6,
      relato: "El Directorio del BCRA saca resolución de emergencia subiendo la tasa. Los bancos elevan el plazo fijo al instante; se frena la corrida pero la bola de pasivos remunerados engorda."
    }
  },

  operativo_arca_florida: {
    id: "operativo_arca_florida",
    nombre: "[AFIP / ARCA] Mandar 40 inspectores y perros a la calle Florida",
    icono: "fa-solid fa-shield-dog",
    color: "purple",
    descripcion: "Saturar la City porteña con brigadas de la Policía Federal y sabuesos de ARCA para paralizar las cuevas financieras.",
    impacto: {
      blueParalizado: true,
      blueDelta: +20, // Sube por iliquidez
      paranoiaCity: +35,
      relato: "Sirenas y chalecos fosforescentes en peatonal Florida y San Martín. Las cuevas cierran las persianas y apagan los grupos de WhatsApp; el Blue queda sin precio de referencia formal por 48 horas."
    }
  },

  dejar_correr_blue: {
    id: "dejar_correr_blue",
    nombre: "[DEJAR CORRER] No intervenir y cuidar los dólares líquidos",
    icono: "fa-solid fa-shield",
    color: "slate",
    descripcion: "Dejar que el mercado convalide el precio del Blue sin gastar un solo dólar de las reservas para el pago de importaciones.",
    impacto: {
      reservasDelta: 0,
      blueDelta: +65,
      brechaDelta: +6,
      relato: "El Banco Central cruza los brazos y no pone un dólar en la plaza. El Blue salta $ 65 marcando un nuevo récord, pero la bóveda de Reconquista 266 conserva cada dólar líquido intacto."
    }
  }
};

// 6. CABLES URGENTES DE LA MESA DE DINERO
const CABLES_URGENTES_MESA = [
  "«Tres bancos privados y dos fondos extranjeros no renuevan letras hoy. Exigen liquidar $ 420.000 M al cierre. Tensión en ventanilla.»",
  "«El FMI filtra a agencias internacionales que revisará el cumplimiento de metas de reservas netas antes del próximo desembolso.»",
  "«El Dólar Cripto en Binance y Lemon cotiza $ 60 arriba del Blue anticipando una apertura caliente mañana a las 10:00 hs.»",
  "«Las cerealeras de Rosario frenan la liquidación de camiones en los puertos esperando una corrección del tipo de cambio oficial.»",
  "«Empresas automotrices suspenden 1.400 operarios por falta de pago de importaciones mediante el sistema de licencias SIRA/SEDI.»",
  "«Colas de dos cuadras en casas de cambio del microcentro porteño tras un rumor de devaluación para el próximo lunes.»"
];

/**
 * CLASE PRINCIPAL: SistemaMacroCalesitaBCRA
 * Modela las 4 fases de la calesita, el tablero de 5 semáforos,
 * la pantalla en vivo de la mesa de operaciones del BCRA y las trampas económicas.
 */
class SistemaMacroCalesitaBCRA {
  constructor() {
    this.activo = true;
    this.faseCalesita = 1; // 1: Primavera, 2: Asfixia, 3: Olla Presión, 4: Piña Histórica
    this.ciclosCompletados = 0;

    // Cotizaciones cambiarias ($ ARS) - Inicio en Fase 1 (Primavera)
    this.dolarOficial = 1050;
    this.dolarMep = 1180;
    this.dolarBlue = 1240;
    this.brechaCambiaria = 18.0; // % sobre el oficial (< 20% seguro)

    // Reservas del Banco Central (US$ M)
    this.reservasBrutas = 28500;
    this.reservasNetas = 4500; // Positivas en Fase 1
    this.intervencionDiariaUSD = -25;

    // Vencimientos con el Fondo Monetario Internacional
    this.diasVencimientoFMI = 8;
    this.montoVencimientoFMI = 1890; // US$ M

    // Tablero Macroeconómico Integral
    this.inflacionMensual = 4.2; // % mensual
    this.tasaNominalAnual = 75;  // % TNA
    this.tcrm = 88;              // 100 es equilibrio neutro
    this.bolaPasivosBillones = 35.4; // Multiplo de la Base Monetaria

    // Trampas activadas y peajes diferidos
    this.trampasActivadas = {
      trampa_planchar_dolar: false,
      trampa_bicicleta_financiera: false,
      trampa_zoologico_parches: false
    };
    this.peajesPendientes = [];

    // Zoológico Cambiario activo
    this.zoologicoDolares = [
      { nombre: "Dólar Mayorista Oficial", cotizacion: 1050, tipo: "base" },
      { nombre: "Dólar Tarjeta / Turista (+60%)", cotizacion: 1680, tipo: "recargo" },
      { nombre: "Dólar MEP / Bolsa", cotizacion: 1480, tipo: "financiero" },
      { nombre: "Dólar Blue (Cuevas)", cotizacion: 1560, tipo: "paralelo" },
      { nombre: "Dólar Soja Especial", cotizacion: 1320, tipo: "diferencial" },
      { nombre: "Dólar Coldplay / Cultural", cotizacion: 1420, tipo: "diferencial" }
    ];

    // Estado del Minuto a Minuto de la Mesa
    this.minutosCierreMercado = 78;
    this.horaMesa = "13:42 hs";
    this.cableUrgente = CABLES_URGENTES_MESA[0];

    // Historial de eventos y piñas
    this.historialCalesita = [];
    this.historialOperaciones = [];
  }

  /**
   * Sincroniza variables desde el motor principal.
   */
  sincronizarConMotor(motor) {
    if (!motor) return;
    if (motor.macroeconomia) {
      if (typeof motor.macroeconomia.inflacionMensual === 'number') {
        this.inflacionMensual = motor.macroeconomia.inflacionMensual;
      }
      if (typeof motor.macroeconomia.reservasNetasBCRA === 'number') {
        this.reservasNetas = motor.macroeconomia.reservasNetasBCRA;
        this.reservasBrutas = Math.max(15000, this.reservasNetas + 25500);
      }
    }
    if (motor.termometroCriollo && typeof motor.termometroCriollo.dolarBlue === 'number') {
      this.dolarBlue = motor.termometroCriollo.dolarBlue;
      this.actualizarCotizaciones();
    }
    this.evaluarTransicionFase();
  }

  /**
   * Recalcula la brecha cambiaria y las cotizaciones relativas.
   */
  actualizarCotizaciones() {
    this.brechaCambiaria = Math.round(((this.dolarBlue - this.dolarOficial) / this.dolarOficial) * 100);
    this.dolarMep = Math.round(this.dolarBlue * 0.94);
    
    // Sincronizar zoológico
    this.zoologicoDolares[0].cotizacion = this.dolarOficial;
    this.zoologicoDolares[1].cotizacion = Math.round(this.dolarOficial * 1.6);
    this.zoologicoDolares[2].cotizacion = this.dolarMep;
    this.zoologicoDolares[3].cotizacion = this.dolarBlue;
    this.zoologicoDolares[4].cotizacion = Math.round(this.dolarOficial * 1.25);
    this.zoologicoDolares[5].cotizacion = Math.round(this.dolarOficial * 1.35);
  }

  /**
   * Evalúa la transición automática entre las 4 fases de la calesita.
   */
  evaluarTransicionFase() {
    const fasePrevia = this.faseCalesita;

    if (this.reservasNetas < -4000 && this.brechaCambiaria > 85) {
      this.faseCalesita = 4; // Piña Inevitable
    } else if ((this.reservasNetas <= 0 && this.brechaCambiaria > 60) || this.brechaCambiaria > 70) {
      this.faseCalesita = 3; // Olla a Presión
    } else if (this.brechaCambiaria > 30 || this.tasaNominalAnual > 80 || this.reservasNetas < 2000) {
      this.faseCalesita = 2; // Asfixia Externa
    } else {
      this.faseCalesita = 1; // Dulce Primavera
    }

    if (this.faseCalesita !== fasePrevia) {
      const fObj = Object.values(FASES_CALESITA_CAMBIARIA).find(f => f.numero === this.faseCalesita);
      this.historialCalesita.push({
        fase: this.faseCalesita,
        nombre: fObj ? fObj.nombre : `Fase ${this.faseCalesita}`,
        motivo: `Transición por Reservas Netas (US$ ${this.reservasNetas}M) y Brecha (${this.brechaCambiaria}%)`
      });
    }

    return this.faseCalesita;
  }

  /**
   * Devuelve el semáforo y diagnóstico de los 5 indicadores críticos.
   */
  obtenerDiagnosticoSemaforos() {
    return {
      reservasNetas: {
        valor: this.reservasNetas,
        estado: TABLERO_SEMAFOROS_BCRA.reservasNetas.evaluar(this.reservasNetas),
        info: TABLERO_SEMAFOROS_BCRA.reservasNetas
      },
      brechaCambiaria: {
        valor: this.brechaCambiaria,
        estado: TABLERO_SEMAFOROS_BCRA.brechaCambiaria.evaluar(this.brechaCambiaria),
        info: TABLERO_SEMAFOROS_BCRA.brechaCambiaria
      },
      inflacionMensual: {
        valor: this.inflacionMensual,
        estado: TABLERO_SEMAFOROS_BCRA.inflacionMensual.evaluar(this.inflacionMensual),
        info: TABLERO_SEMAFOROS_BCRA.inflacionMensual
      },
      tasaInteres: {
        valor: this.tasaNominalAnual,
        estado: TABLERO_SEMAFOROS_BCRA.tasaInteres.evaluar(this.tasaNominalAnual, this.inflacionMensual),
        info: TABLERO_SEMAFOROS_BCRA.tasaInteres
      },
      tcrm: {
        valor: this.tcrm,
        estado: TABLERO_SEMAFOROS_BCRA.tcrm.evaluar(this.tcrm),
        info: TABLERO_SEMAFOROS_BCRA.tcrm
      }
    };
  }

  /**
   * Ejecuta una de las 4 acciones de la Mesa de Dinero del BCRA.
   */
  ejecutarAccionMesa(accionId, motor = null) {
    const accion = ACCIONES_MESA_DINERO[accionId];
    if (!accion) return { exito: false, mensaje: "Acción no encontrada." };

    const imp = accion.impacto;

    if (imp.reservasDelta) {
      this.reservasNetas += imp.reservasDelta;
      this.reservasBrutas = Math.max(15000, this.reservasBrutas + imp.reservasDelta);
      if (motor && motor.macroeconomia) {
        motor.macroeconomia.reservasNetasBCRA = this.reservasNetas;
      }
    }

    if (imp.blueDelta) {
      this.dolarBlue = Math.max(900, this.dolarBlue + imp.blueDelta);
      if (motor && motor.termometroCriollo) {
        motor.termometroCriollo.dolarBlue = this.dolarBlue;
      }
    }

    if (imp.tasaDelta) {
      this.tasaNominalAnual = Math.min(180, this.tasaNominalAnual + imp.tasaDelta);
    }

    if (imp.bolaPasivosDelta) {
      this.bolaPasivosBillones += imp.bolaPasivosDelta;
    }

    this.minutosCierreMercado = Math.max(5, this.minutosCierreMercado - 18);
    const horaInt = 13 + Math.floor((120 - this.minutosCierreMercado) / 60);
    const minInt = (120 - this.minutosCierreMercado) % 60;
    this.horaMesa = `${horaInt}:${minInt < 10 ? '0' + minInt : minInt} hs`;

    // Rotar cable urgente
    const idxRand = Math.floor(Math.random() * CABLES_URGENTES_MESA.length);
    this.cableUrgente = CABLES_URGENTES_MESA[idxRand];

    this.actualizarCotizaciones();
    this.evaluarTransicionFase();

    this.historialOperaciones.push({
      accion: accion.nombre,
      hora: this.horaMesa,
      relato: imp.relato
    });

    return {
      exito: true,
      accion,
      relato: imp.relato,
      estado: this.obtenerResumen()
    };
  }

  /**
   * Activa una de las Tres Trampas Clásicas.
   */
  activarTrampa(trampaId, motor = null) {
    const trampa = TRAMPAS_POLITICA_ECONOMICA[trampaId];
    if (!trampa) return { exito: false, mensaje: "Trampa no encontrada." };

    this.trampasActivadas[trampaId] = true;
    const inm = trampa.impactoInmediato;

    if (inm.reservasDelta) {
      this.reservasNetas += inm.reservasDelta;
      this.reservasBrutas = Math.max(15000, this.reservasBrutas + inm.reservasDelta);
      if (motor && motor.macroeconomia) motor.macroeconomia.reservasNetasBCRA = this.reservasNetas;
    }
    if (inm.inflacionDelta) {
      this.inflacionMensual = Math.max(0.5, this.inflacionMensual + inm.inflacionDelta);
      if (motor && motor.macroeconomia) motor.macroeconomia.inflacionMensual = this.inflacionMensual;
    }
    if (inm.tcrmDelta) {
      this.tcrm += inm.tcrmDelta;
    }
    if (inm.tasaDelta) {
      this.tasaNominalAnual += inm.tasaDelta;
    }

    // Registrar peaje para el futuro
    this.peajesPendientes.push({
      trampaId,
      nombre: trampa.nombre,
      peajeDiferido: trampa.peajeDiferido,
      turnosRestantes: 2
    });

    this.actualizarCotizaciones();
    this.evaluarTransicionFase();

    return {
      exito: true,
      trampa,
      mensajeBeneficio: trampa.beneficioInmediato,
      advertenciaPeaje: trampa.peajePosterior
    };
  }

  /**
   * Cobra peajes diferidos cuando se cumple el plazo de la trampa.
   */
  cobrarPeajesPendientes(motor = null) {
    if (this.peajesPendientes.length === 0) return [];
    const cobrados = [];

    for (let i = this.peajesPendientes.length - 1; i >= 0; i--) {
      const p = this.peajesPendientes[i];
      p.turnosRestantes--;
      if (p.turnosRestantes <= 0) {
        const peaje = p.peajeDiferido;
        if (peaje.reservasDelta) {
          this.reservasNetas += peaje.reservasDelta;
          this.reservasBrutas = Math.max(10000, this.reservasBrutas + peaje.reservasDelta);
          if (motor && motor.macroeconomia) motor.macroeconomia.reservasNetasBCRA = this.reservasNetas;
        }
        if (peaje.inflacionDelta) {
          this.inflacionMensual += peaje.inflacionDelta;
          if (motor && motor.macroeconomia) motor.macroeconomia.inflacionMensual = this.inflacionMensual;
        }
        if (peaje.brechaDelta) {
          this.dolarBlue = Math.round(this.dolarBlue * (1 + peaje.brechaDelta / 100));
          if (motor && motor.termometroCriollo) motor.termometroCriollo.dolarBlue = this.dolarBlue;
        }
        if (peaje.devaluacionForzada) {
          this.dolarOficial = Math.round(this.dolarOficial * (1 + peaje.devaluacionForzada / 100));
        }

        cobrados.push(p);
        this.peajesPendientes.splice(i, 1);
      }
    }

    this.actualizarCotizaciones();
    this.evaluarTransicionFase();
    return cobrados;
  }

  /**
   * Resuelve uno de los 3 dilemas macroeconómicos extremos.
   */
  resolverDilemaMacro(dilemaId, opcionId, motor = null) {
    const dilema = DILEMAS_MACRO_EXTREMOS[dilemaId];
    if (!dilema) return { exito: false, mensaje: "Dilema macro no encontrado." };

    const opcion = dilema.opciones.find(o => o.id === opcionId);
    if (!opcion) return { exito: false, mensaje: "Opción de dilema no válida." };

    const imp = opcion.impacto;

    if (imp.reservasDelta) {
      this.reservasNetas += imp.reservasDelta;
      this.reservasBrutas = Math.max(15000, this.reservasBrutas + imp.reservasDelta);
      if (motor && motor.macroeconomia) motor.macroeconomia.reservasNetasBCRA = this.reservasNetas;
    }
    if (imp.inflacionDelta) {
      this.inflacionMensual = Math.max(0.5, this.inflacionMensual + imp.inflacionDelta);
      if (motor && motor.macroeconomia) motor.macroeconomia.inflacionMensual = this.inflacionMensual;
    }
    if (imp.blueDelta) {
      this.dolarBlue += imp.blueDelta;
      if (motor && motor.termometroCriollo) motor.termometroCriollo.dolarBlue = this.dolarBlue;
    }
    if (imp.brechaDelta) {
      this.dolarBlue = Math.round(this.dolarOficial * (1 + (this.brechaCambiaria + imp.brechaDelta) / 100));
      if (motor && motor.termometroCriollo) motor.termometroCriollo.dolarBlue = this.dolarBlue;
    }
    if (imp.mechaSocialDelta && motor && motor.termometroCriollo) {
      motor.termometroCriollo.mechaSocial = Math.max(0, Math.min(100, motor.termometroCriollo.mechaSocial + imp.mechaSocialDelta));
    }
    if (imp.riesgoPaisDelta && motor && motor.macroeconomia) {
      motor.macroeconomia.riesgoPais = Math.max(400, motor.macroeconomia.riesgoPais + imp.riesgoPaisDelta);
    }
    if (imp.bolaPasivosEliminada) {
      this.bolaPasivosBillones = 0;
    }

    this.actualizarCotizaciones();
    this.evaluarTransicionFase();

    return {
      exito: true,
      dilema,
      opcion,
      relato: imp.relato
    };
  }

  /**
   * Dispara el desenlace de la Fase 4: La Piña Inevitable y resetea el ciclo.
   */
  dispararPinaHistorica(motor = null) {
    this.faseCalesita = 4;
    const saltoOficialPct = 0.75; // +75% de devaluación en una rueda
    this.dolarOficial = Math.round(this.dolarOficial * (1 + saltoOficialPct));
    this.dolarBlue = Math.round(this.dolarOficial * 1.22); // La brecha se achica al 22% por salto oficial
    this.inflacionMensual = Math.min(35.0, this.inflacionMensual + 14.5);
    this.tcrm = 125; // Salto de competitividad cambiaria

    // Acumulación de reservas post-estallido (reseteo del ciclo)
    this.reservasNetas = Math.min(4500, Math.max(1200, this.reservasNetas + 4000));
    this.reservasBrutas = this.reservasNetas + 24000;
    this.ciclosCompletados += 1;

    if (motor) {
      if (motor.macroeconomia) {
        motor.macroeconomia.inflacionMensual = this.inflacionMensual;
        motor.macroeconomia.reservasNetasBCRA = this.reservasNetas;
        motor.macroeconomia.pobreza = Math.min(58, motor.macroeconomia.pobreza + 7);
      }
      if (motor.termometroCriollo) {
        motor.termometroCriollo.dolarBlue = this.dolarBlue;
        motor.termometroCriollo.mechaSocial = Math.min(100, motor.termometroCriollo.mechaSocial + 25);
      }
    }

    this.actualizarCotizaciones();

    return {
      exito: true,
      fase: FASES_CALESITA_CAMBIARIA.fase_pina_historica,
      dolarOficialNuevo: this.dolarOficial,
      dolarBlueNuevo: this.dolarBlue,
      inflacionNueva: this.inflacionMensual,
      tcrmNuevo: this.tcrm,
      ciclos: this.ciclosCompletados,
      relato: "Salto cambiario oficial del 75%. El pass-through a precios es inmediato: nafta, fideos y remedios se duplican. El salario real cae 25 puntos en un trimestre pero Argentina queda regalada para el mundo y el campo empieza a liquidar."
    };
  }

  /**
   * Genera el diagnóstico macroeconómico final para la pantalla de resultados.
   */
  generarDiagnosticoMacro(motor = null) {
    const semaforos = this.obtenerDiagnosticoSemaforos();
    const faseInfo = Object.values(FASES_CALESITA_CAMBIARIA).find(f => f.numero === this.faseCalesita) || FASES_CALESITA_CAMBIARIA.fase_asfixia;

    let veredictoHistorico = "";
    if (this.ciclosCompletados >= 2) {
      veredictoHistorico = "El Gran Jinete de la Calesita: Atravesaste 2 o más colapsos cambiarios completos, convalidando el eterno retorno del péndulo argentino.";
    } else if (this.faseCalesita === 4) {
      veredictoHistorico = "El Reseteo Doloroso: Concluiste el mandato en plena devaluación forzada; la historia te juzga con la amargura del bolsillo licuado.";
    } else if (this.faseCalesita === 1) {
      veredictoHistorico = "La Dulce Ilusión Transitoria: Terminaste en plena primavera con dólar anclado y consumo récord; el peaje le queda intacto al siguiente presidente.";
    } else {
      veredictoHistorico = "El Malabarista de la Olla a Presión: Contuviste la brecha y el cepo sin que te vuele la tapa por el aire, al filo de la cornisa diaria.";
    }

    return {
      faseFinal: faseInfo,
      ciclosCompletados: this.ciclosCompletados,
      semaforos,
      dolarOficial: this.dolarOficial,
      dolarBlue: this.dolarBlue,
      brechaCambiaria: this.brechaCambiaria,
      reservasNetas: this.reservasNetas,
      tcrm: this.tcrm,
      inflacionMensual: this.inflacionMensual,
      veredictoHistorico
    };
  }

  /**
   * Resumen para serialización y UI.
   */
  obtenerResumen() {
    return {
      activo: this.activo,
      faseCalesita: this.faseCalesita,
      ciclosCompletados: this.ciclosCompletados,
      dolarOficial: this.dolarOficial,
      dolarMep: this.dolarMep,
      dolarBlue: this.dolarBlue,
      brechaCambiaria: this.brechaCambiaria,
      reservasBrutas: this.reservasBrutas,
      reservasNetas: this.reservasNetas,
      intervencionDiariaUSD: this.intervencionDiariaUSD,
      diasVencimientoFMI: this.diasVencimientoFMI,
      montoVencimientoFMI: this.montoVencimientoFMI,
      inflacionMensual: this.inflacionMensual,
      tasaNominalAnual: this.tasaNominalAnual,
      tcrm: this.tcrm,
      bolaPasivosBillones: this.bolaPasivosBillones,
      minutosCierreMercado: this.minutosCierreMercado,
      horaMesa: this.horaMesa,
      cableUrgente: this.cableUrgente,
      trampasActivadas: { ...this.trampasActivadas },
      peajesPendientesCount: this.peajesPendientes.length,
      zoologicoDolares: [ ...this.zoologicoDolares ],
      historialOperacionesCount: this.historialOperaciones.length
    };
  }
}

// Exportación modular para Node.js y navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    FASES_CALESITA_CAMBIARIA,
    TABLERO_SEMAFOROS_BCRA,
    TRAMPAS_POLITICA_ECONOMICA,
    DILEMAS_MACRO_EXTREMOS,
    ACCIONES_MESA_DINERO,
    CABLES_URGENTES_MESA,
    SistemaMacroCalesitaBCRA
  };
} else if (typeof window !== 'undefined') {
  window.FASES_CALESITA_CAMBIARIA = FASES_CALESITA_CAMBIARIA;
  window.TABLERO_SEMAFOROS_BCRA = TABLERO_SEMAFOROS_BCRA;
  window.TRAMPAS_POLITICA_ECONOMICA = TRAMPAS_POLITICA_ECONOMICA;
  window.DILEMAS_MACRO_EXTREMOS = DILEMAS_MACRO_EXTREMOS;
  window.ACCIONES_MESA_DINERO = ACCIONES_MESA_DINERO;
  window.CABLES_URGENTES_MESA = CABLES_URGENTES_MESA;
  window.SistemaMacroCalesitaBCRA = SistemaMacroCalesitaBCRA;
}
