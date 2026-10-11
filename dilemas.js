// dilemas.js - Árbol de decisiones y eventos encadenados con los 12 ejes políticos normalizados
// Ejes: federalismo, institucionalidad, seguridad, inmigracion, defensa, geopolitica, estatismo, regulacion, comercio, laicismo, valores, ambiente
// Sectores: trabajo, productivo, claseMedia, estadoCiencia, seguridadJusticia, frenteExterno
// Impacto Macro: inflacionMensual, riesgoPais, reservasNetasBCRA, resultadoFiscalPBI, pobreza

const DILEMAS_DATA = {
  // ETAPA 1: CONCEJAL / REFERENTE SOCIAL BARRIAL
  militante: [
    {
      id: "mil_tierra",
      etapaBadge: "Fase 1: Concejal / Referente Barrial",
      area: "Tierra, Vivienda & Propiedad",
      titulo: "Toma de terrenos baldíos por 200 familias sin techo",
      descripcion: "Familias en situación de vulnerabilidad extrema acampan en un predio abandonado reclamando lotes con servicios. Vecinos linderos exigen el desalojo urgente con las fuerzas federales.",
      explicacion: {
        queMide: "Eje Estatismo (Público vs. Privado) y Eje Seguridad (Garantismo/Social vs. Orden/Punitivismo).",
        siDeAcuerdo: "Respaldar o urbanizar la toma prioriza el derecho a la vivienda sobre la especulación inmobiliaria.",
        siEnContra: "Ordenar el desalojo defiende el derecho a la propiedad privada y el imperio de la ley."
      },
      opciones: [
        {
          id: "expropiar",
          texto: "Respaldar incondicionalmente la toma y exigir la expropiación del predio para urbanización popular.",
          setFlags: { toma_tierra: "expropiada" },
          impacto12Axes: { estatismo: 15, regulacion: 20, seguridad: 80, institucionalidad: 70, valores: 25 },
          impactoSectores: { trabajo: 25, productivo: -25, claseMedia: -15, estadoCiencia: 10, seguridadJusticia: -20, frenteExterno: -15 },
          impactoMacro: { riesgoPais: +70, resultadoFiscalPBI: -0.2, pobreza: -0.3 }
        },
        {
          id: "cooperativa",
          texto: "Esquema intermedio: cooperativa de autoconstrucción donde las familias paguen el lote en cuotas y el municipio financie las redes.",
          setFlags: { toma_tierra: "cooperativa" },
          impacto12Axes: { estatismo: 45, regulacion: 50, seguridad: 55, institucionalidad: 40, valores: 45 },
          impactoSectores: { trabajo: 10, productivo: -10, claseMedia: 5, estadoCiencia: 5, seguridadJusticia: 0, frenteExterno: 0 },
          impactoMacro: { resultadoFiscalPBI: -0.1, riesgoPais: +10 }
        },
        {
          id: "desalojo_pacifico",
          texto: "Intimar al desalojo pacífico en 48 horas y ofrecerles albergue temporal municipal con asistencia social.",
          setFlags: { toma_tierra: "desalojo_suave" },
          impacto12Axes: { estatismo: 65, regulacion: 65, seguridad: 35, institucionalidad: 30, valores: 55 },
          impactoSectores: { trabajo: -15, productivo: 15, claseMedia: 15, estadoCiencia: -5, seguridadJusticia: 15, frenteExterno: 5 },
          impactoMacro: { riesgoPais: -20, resultadoFiscalPBI: -0.05 }
        },
        {
          id: "desalojo_policial",
          texto: "Ordenar el desalojo inmediato con la policía y procesar penalmente a los cabecillas de la usurpación.",
          setFlags: { toma_tierra: "desalojo_duro" },
          impacto12Axes: { estatismo: 85, regulacion: 80, seguridad: 10, institucionalidad: 50, valores: 75 },
          impactoSectores: { trabajo: -30, productivo: 25, claseMedia: 10, estadoCiencia: -15, seguridadJusticia: 30, frenteExterno: 10 },
          impactoMacro: { riesgoPais: -40, resultadoFiscalPBI: 0 }
        }
      ]
    },

    // SUCESO DERIVADO DE LA TOMA DE TIERRAS
    {
      id: "mil_tierra_consecuencia",
      etapaBadge: "Fase 1: Suceso Derivado",
      area: "Consecuencia Urbana y Social",
      titulo: "Repercusiones tras la resolución del predio tomado",
      requiereFlag: "toma_tierra",
      generarContextoDinamico: function(flags) {
        if (flags.toma_tierra === "expropiada") {
          return {
            titulo: "Crisis de confianza inmobiliaria y nuevas ocupaciones",
            desc: "Al haberse expropiado el terreno, otras agrupaciones intentan ocupar dos predios más en la zona. Desarrolladores privados frenan inversiones inmobiliarias en el municipio denunciando inseguridad jurídica.",
            explicacion: {
              queMide: "Eje Estatismo y Regulación (Planificación comunitaria vs. Seguridad de inversión privada).",
              siDeAcuerdo: "Planificar suelo urbano comunal por encima de la renta del mercado.",
              siEnContra: "Poner un límite terminante para devolver previsibilidad al mercado inmobiliario."
            },
            opciones: [
              {
                texto: "Declarar la emergencia habitacional y crear un Banco Municipal de Tierras con todos los baldíos ociosos.",
                impacto12Axes: { estatismo: 10, regulacion: 15, seguridad: 75, institucionalidad: 65 },
                impactoSectores: { trabajo: 20, productivo: -30, claseMedia: -15, estadoCiencia: 15, seguridadJusticia: -10, frenteExterno: -15 },
                impactoMacro: { riesgoPais: +80, resultadoFiscalPBI: -0.15 }
              },
              {
                texto: "Trazar una línea roja: la expropiación fue una excepción única; frenar cualquier nueva toma.",
                impacto12Axes: { estatismo: 55, regulacion: 60, seguridad: 35, institucionalidad: 40 },
                impactoSectores: { trabajo: -10, productivo: 15, claseMedia: 15, estadoCiencia: 0, seguridadJusticia: 15, frenteExterno: 5 },
                impactoMacro: { riesgoPais: -30 }
              }
            ]
          };
        } else if (flags.toma_tierra === "desalojo_duro") {
          return {
            titulo: "Cortes de avenidas por repudio al desalojo policial",
            desc: "Organizaciones sociales y gremios marchan repudiando el desalojo forzoso y bloquean el acceso al centro comercial de la ciudad.",
            explicacion: {
              queMide: "Eje Seguridad (Uso punitivo de la fuerza policial vs. Concesión ante la protesta).",
              siDeAcuerdo: "Mantener el orden público cueste lo que cueste.",
              siEnContra: "Desescalar el conflicto mediante ayuda social de emergencia."
            },
            opciones: [
              {
                texto: "Abrir centros de asistencia social y ofrecer subsidios de alquiler urgente a los desalojados.",
                impacto12Axes: { estatismo: 40, regulacion: 45, seguridad: 60, institucionalidad: 40 },
                impactoSectores: { trabajo: 20, productivo: -10, claseMedia: 5, estadoCiencia: 10, seguridadJusticia: -10, frenteExterno: 0 },
                impactoMacro: { resultadoFiscalPBI: -0.05 }
              },
              {
                texto: "Mantener la postura inflexible: despejar los cortes con camiones hidrantes y aplicar multas.",
                impacto12Axes: { estatismo: 80, regulacion: 80, seguridad: 10, institucionalidad: 50 },
                impactoSectores: { trabajo: -25, productivo: 20, claseMedia: 15, estadoCiencia: -10, seguridadJusticia: 25, frenteExterno: 5 },
                impactoMacro: { riesgoPais: -20 }
              }
            ]
          };
        } else {
          return {
            titulo: "Desarrollo del proyecto cooperativo municipal",
            desc: "Las familias cooperativistas solicitan ahora fondos públicos para tender las redes de agua potable y luz eléctrica.",
            explicacion: {
              queMide: "Eje Estatismo y Gasto Comunitario.",
              siDeAcuerdo: "El municipio debe financiar la infraestructura de servicios.",
              siEnContra: "Los servicios deben ser licitados y pagados por los propios frentistas."
            },
            opciones: [
              {
                texto: "Financiar el tendido de agua y luz con fondos municipales de emergencia.",
                impacto12Axes: { estatismo: 35, regulacion: 40, institucionalidad: 45 },
                impactoSectores: { trabajo: 15, productivo: -10, claseMedia: 5, estadoCiencia: 10, seguridadJusticia: 5, frenteExterno: 0 },
                impactoMacro: { resultadoFiscalPBI: -0.1 }
              },
              {
                texto: "Exigir que las empresas prestatarias privadas financien las obras mediante cobro en facturas.",
                impacto12Axes: { estatismo: 70, regulacion: 70, institucionalidad: 35 },
                impactoSectores: { trabajo: -10, productivo: 15, claseMedia: 10, estadoCiencia: 0, seguridadJusticia: 5, frenteExterno: 5 },
                impactoMacro: { resultadoFiscalPBI: 0 }
              }
            ]
          };
        }
      }
    },

    // DILEMA 3: ESPACIO PÚBLICO Y VENTA AMBULANTE (MANTEROS VS COMERCIO FORMAL)
    {
      id: "mil_manteros",
      etapaBadge: "Fase 1: Concejal / Referente Barrial",
      area: "Espacio Público, Comercio & Subsistencia",
      titulo: "Conflicto en la Peatonal: Manteros y venta ambulante vs. Comerciantes Frentistas",
      descripcion: "Cientos de manteros y puesteros informales ocupan las veredas de los centros comerciales del municipio vendiendo indumentaria y tecnología a precios populares. La Cámara de Comercio local exige el desalojo inmediato aduciendo pago de alquileres, impuestos y competencia desleal, mientras los trabajadores de la calle afirman que es su único sustento.",
      explicacion: {
        queMide: "Eje Regulación (Formalidad vs. Economía popular) y Eje Seguridad (Orden vs. Garantismo).",
        siDeAcuerdo: "Regular y contener la actividad informal reconociendo la precariedad laboral.",
        siEnContra: "Desalojar y sancionar la venta callejera ilegal para proteger al comercio formal."
      },
      opciones: [
        {
          texto: "Reubicar a los manteros en un galpón ferial municipal techado, tramitarles Monotributo Social y subsidiar los primeros 6 meses.",
          impacto12Axes: { estatismo: 45, regulacion: 40, seguridad: 50, comercio: 40, institucionalidad: 35 },
          impactoSectores: { trabajo: 15, productivo: 5, claseMedia: 10, estadoCiencia: 5, seguridadJusticia: 10, frenteExterno: 0 },
          impactoMacro: { resultadoFiscalPBI: -0.05 }
        },
        {
          texto: "Desalojo policial inmediato de veredas, decomiso de mercadería y clausura a los depósitos clandestinos que los abastecen.",
          impacto12Axes: { estatismo: 75, regulacion: 80, seguridad: 15, comercio: 75, institucionalidad: 45 },
          impactoSectores: { trabajo: -25, productivo: 25, claseMedia: 15, estadoCiencia: -5, seguridadJusticia: 25, frenteExterno: 5 },
          impactoMacro: { riesgoPais: -10 }
        },
        {
          texto: "Libre venta ambulante: demarcar espacios en las veredas y permitirles trabajar sin persecución policial.",
          impacto12Axes: { estatismo: 25, regulacion: 15, seguridad: 85, comercio: 20, institucionalidad: 70 },
          impactoSectores: { trabajo: 25, productivo: -25, claseMedia: -15, estadoCiencia: 5, seguridadJusticia: -20, frenteExterno: -5 },
          impactoMacro: { riesgoPais: +20 }
        }
      ]
    },

    // DILEMA 4: SEGURIDAD BARRIAL (PISTOLAS TASER Y VIGILANCIA BIOMÉTRICA)
    {
      id: "mil_taser_seguridad",
      etapaBadge: "Fase 1: Concejal / Referente Barrial",
      area: "Seguridad Ciudadana & Prevención",
      titulo: "¿Pistolas Taser y cámaras con inteligencia artificial en plazas o alarmas comunitarias?",
      descripcion: "Vecinos autoconvocados y comerciantes reclaman dotar a la policía de prevención local con pistolas Taser y cámaras de reconocimiento facial con inteligencia artificial en paradas de colectivos y centros comerciales tras una ola de arrebatos callejeros. Organizaciones barriales y centros juveniles rechazan la medida denunciando estigmatización y riesgo de gatillo fácil.",
      explicacion: {
        queMide: "Eje Seguridad (Punitivismo y tecnología de control vs. Garantismo y prevención social).",
        siDeAcuerdo: "La tecnología biométrica y las armas de electrochoque reducen delitos violentos y protegen al ciudadano honesto.",
        siEnContra: "La vigilancia masiva criminaliza la juventud de barrios populares e invade la privacidad."
      },
      opciones: [
        {
          texto: "Adquirir pistolas Taser para todos los efectivos locales e instalar cámaras con reconocimiento facial biométrico en plazas y estaciones.",
          impacto12Axes: { seguridad: 15, institucionalidad: 55, valores: 70 },
          impactoSectores: { trabajo: -20, productivo: 20, claseMedia: 20, estadoCiencia: -5, seguridadJusticia: 35, frenteExterno: 10 },
          impactoMacro: { riesgoPais: -10 }
        },
        {
          texto: "Rechazar las armas de electrochoque y cámaras biométricas; invertir en postas sanitarias barriales, polideportivos y alarmas vecinales participativas.",
          impacto12Axes: { seguridad: 80, institucionalidad: 25, valores: 25 },
          impactoSectores: { trabajo: 25, productivo: -15, claseMedia: 5, estadoCiencia: 15, seguridadJusticia: -20, frenteExterno: -5 },
          impactoMacro: { resultadoFiscalPBI: -0.05 }
        },
        {
          texto: "Protocolo restrictivo: cámaras sólo en bancos y centros comerciales céntricos con autorización judicial, prohibiendo el uso de Taser.",
          impacto12Axes: { seguridad: 50, institucionalidad: 30, valores: 50 },
          impactoSectores: { trabajo: 0, productivo: 5, claseMedia: 10, estadoCiencia: 5, seguridadJusticia: 5, frenteExterno: 0 },
          impactoMacro: { resultadoFiscalPBI: -0.02 }
        }
      ]
    }
  ],

  // ETAPA 2: DIPUTADO NACIONAL
  diputado: [
    {
      id: "dip_retenciones",
      etapaBadge: "Fase 2: Congreso de la Nación",
      area: "Impuestos & Agroindustria",
      materia: "tributaria",
      titulo: "Ley de Retenciones al Agro y Emergencia Alimentaria",
      descripcion: "El Poder Ejecutivo propone subir fuertemente las retenciones al agro sobre las cosechas para financiar una tarjeta alimentaria de emergencia ante la inflación en los supermercados.",
      explicacion: {
        queMide: "Eje Comercio (Proteccionismo de precios internos vs. Libre comercio) y Eje Estatismo.",
        siDeAcuerdo: "Desacoplar precios internacionales para garantizar comida accesible en la mesa argentina.",
        siEnContra: "Proteger el incentivo productivo del campo sin confiscar la renta de los productores."
      },
      opciones: [
        {
          id: "subir_retenciones",
          texto: "Aprobar el aumento de retenciones al agro y crear una Junta Nacional de Granos estatal.",
          setFlags: { ley_campo: "alta_retencion" },
          impacto12Axes: { comercio: 15, estatismo: 15, regulacion: 15, geopolitica: 75 },
          impactoSectores: { trabajo: 25, productivo: -35, claseMedia: -10, estadoCiencia: 15, seguridadJusticia: -5, frenteExterno: -25 },
          impactoMacro: { inflacionMensual: -0.8, riesgoPais: +120, reservasNetasBCRA: -400, resultadoFiscalPBI: +0.4, pobreza: -0.5 }
        },
        {
          id: "retenciones_segmentadas",
          texto: "Aprobar retenciones segmentadas: proteger a pequeños chacareros familiares y cobrar solo a grandes exportadoras.",
          setFlags: { ley_campo: "segmentada" },
          impacto12Axes: { comercio: 35, estatismo: 40, regulacion: 40, geopolitica: 60 },
          impactoSectores: { trabajo: 10, productivo: -15, claseMedia: 5, estadoCiencia: 10, seguridadJusticia: 0, frenteExterno: -10 },
          impactoMacro: { inflacionMensual: -0.3, riesgoPais: +30, resultadoFiscalPBI: +0.1 }
        },
        {
          id: "bajar_iva",
          texto: "Rechazar las retenciones y proponer compensar eliminando el IVA de los alimentos de la canasta básica.",
          setFlags: { ley_campo: "baja_iva" },
          impacto12Axes: { comercio: 70, estatismo: 65, regulacion: 70, geopolitica: 35 },
          impactoSectores: { trabajo: -5, productivo: 20, claseMedia: 20, estadoCiencia: -5, seguridadJusticia: 5, frenteExterno: 10 },
          impactoMacro: { inflacionMensual: -0.5, riesgoPais: -30, resultadoFiscalPBI: -0.3, pobreza: -0.4 }
        },
        {
          id: "cero_retenciones",
          texto: "Rechazar de plano y votar retenciones cero con total libertad de exportación comercial.",
          setFlags: { ley_campo: "cero_retenciones" },
          impacto12Axes: { comercio: 95, estatismo: 85, regulacion: 90, geopolitica: 15 },
          impactoSectores: { trabajo: -25, productivo: 35, claseMedia: -10, estadoCiencia: -20, seguridadJusticia: 5, frenteExterno: 25 },
          impactoMacro: { inflacionMensual: +1.2, riesgoPais: -90, reservasNetasBCRA: +800, resultadoFiscalPBI: -0.6, pobreza: +0.9 }
        }
      ]
    },

    // EVENTO DERIVADO DEL CAMPO
    {
      id: "dip_campo_consecuencia",
      etapaBadge: "Fase 2: Suceso Derivado",
      area: "Respuesta del Sector Agroexportador",
      titulo: "Reacción en los puertos y liquidación de divisas",
      requiereFlag: "ley_campo",
      generarContextoDinamico: function(flags) {
        if (flags.ley_campo === "alta_retencion") {
          return {
            titulo: "Paro agropecuario patronal y retención de silobolsas",
            desc: "Las entidades rurales declaran un cese de comercialización de granos y frenan la liquidación de dólares en el Banco Central. La cotización de la divisa se dispara.",
            explicacion: {
              queMide: "Eje Regulación y Estatismo.",
              siDeAcuerdo: "Aplicar la ley de abastecimiento e inspeccionar acopios.",
              siEnContra: "Ofrecer una compensación o incentivo cambiario para destrabar dólares."
            },
            opciones: [
              {
                texto: "Aplicar la Ley de Abastecimiento, clausurar puertos que especulen y cobrar multas millonarias.",
                impacto12Axes: { regulacion: 10, estatismo: 10, institucionalidad: 65 },
                impactoSectores: { trabajo: 20, productivo: -30, claseMedia: -15, estadoCiencia: 10, seguridadJusticia: 10, frenteExterno: -20 },
                impactoMacro: { riesgoPais: +150, reservasNetasBCRA: -500, inflacionMensual: +1.5 }
              },
              {
                texto: "Abrir una tregua y ofrecer un tipo de cambio diferencial transitorio para que liquiden las cosechas.",
                impacto12Axes: { regulacion: 50, estatismo: 55, institucionalidad: 45 },
                impactoSectores: { trabajo: -10, productivo: 20, claseMedia: 5, estadoCiencia: 5, seguridadJusticia: 0, frenteExterno: 15 },
                impactoMacro: { reservasNetasBCRA: +600, riesgoPais: -40, inflacionMensual: +0.6 }
              }
            ]
          };
        } else {
          return {
            titulo: "Récord de siembra pero reclamos de financiamiento social",
            desc: "El campo liquida cosechas récord y entra fuerte cantidad de divisas, pero la caída de recaudación estatal genera reclamos en hospitales y comedores.",
            explicacion: {
              queMide: "Eje Estatismo y Regulación (Austeridad vs. Gasto en Salud y Educación).",
              siDeAcuerdo: "Confiar en que el crecimiento privado financiará el bienestar futuro.",
              siEnContra: "Crear un fondo solidario temporal para evitar tensiones en los barrios."
            },
            opciones: [
              {
                texto: "Mantener el rumbo de baja tributaria y pedir a las familias paciencia mientras la economía crece.",
                impacto12Axes: { regulacion: 85, estatismo: 85, institucionalidad: 40 },
                impactoSectores: { trabajo: -20, productivo: 25, claseMedia: 5, estadoCiencia: -15, seguridadJusticia: 5, frenteExterno: 20 },
                impactoMacro: { riesgoPais: -60, resultadoFiscalPBI: -0.2 }
              },
              {
                texto: "Crear un aporte solidario voluntario con incentivos fiscales para financiar la emergencia de salud.",
                impacto12Axes: { regulacion: 55, estatismo: 55, institucionalidad: 35 },
                impactoSectores: { trabajo: 10, productivo: 0, claseMedia: 10, estadoCiencia: 10, seguridadJusticia: 5, frenteExterno: 10 },
                impactoMacro: { resultadoFiscalPBI: +0.1, riesgoPais: +15 }
              }
            ]
          };
        }
      }
    },

    // DILEMA 3: REFORMA LABORAL (FONDO DE CESE VS INDEMNIZACIONES)
    {
      id: "dip_reforma_laboral",
      etapaBadge: "Fase 2: Congreso de la Nación",
      area: "Leyes Laborales & Modelo Sindical",
      titulo: "Reforma Laboral en el Congreso: ¿Fondo de Cese Laboral estilo UOCRA o Multas a Empleadores?",
      descripcion: "Cámaras empresariales y pymes presentan un proyecto para reemplazar la indemnización tradicional y eliminar las multas por trabajo no registrado mediante un Fondo de Cese Laboral optativo. La CGT, gremios industriales y la izquierda convocan a un paro nacional frente al Palacio del Congreso advirtiendo que abaratará el despido.",
      explicacion: {
        queMide: "Eje Regulación (Flexibilización contractual vs. Protección laboral) y Eje Estatismo.",
        siDeAcuerdo: "Reducir la litigiosidad y los costos laborales estimula la inversión y ayuda a que las pymes tomen empleados en blanco.",
        siEnContra: "El derecho laboral debe proteger a la parte más vulnerable; debilitar la indemnización desprotege a las familias."
      },
      opciones: [
        {
          texto: "Aprobar el Fondo de Cese Laboral optativo por convenio colectivo y eliminar multas judiciales para incentivar el blanqueo en pymes.",
          impacto12Axes: { regulacion: 80, estatismo: 75, comercio: 75, institucionalidad: 40 },
          impactoSectores: { trabajo: -30, productivo: 35, claseMedia: 15, estadoCiencia: -10, seguridadJusticia: 10, frenteExterno: 25 },
          impactoMacro: { riesgoPais: -80, inflacionMensual: -0.2, pobreza: +0.3 }
        },
        {
          texto: "Rechazar el proyecto de plano: aumentar indemnizaciones por despido sin causa y reforzar las inspecciones de la Secretaría de Trabajo.",
          impacto12Axes: { regulacion: 15, estatismo: 20, comercio: 25, institucionalidad: 55 },
          impactoSectores: { trabajo: 35, productivo: -35, claseMedia: -15, estadoCiencia: 15, seguridadJusticia: -10, frenteExterno: -25 },
          impactoMacro: { riesgoPais: +90, inflacionMensual: +0.4, pobreza: -0.2 }
        },
        {
          texto: "Régimen exclusivo para micropymes de hasta 5 trabajadores con tarifa plana de aportes, manteniendo la indemnización en grandes empresas.",
          impacto12Axes: { regulacion: 50, estatismo: 50, comercio: 50, institucionalidad: 35 },
          impactoSectores: { trabajo: 5, productivo: 10, claseMedia: 15, estadoCiencia: 5, seguridadJusticia: 5, frenteExterno: 10 },
          impactoMacro: { riesgoPais: -20, resultadoFiscalPBI: -0.05 }
        }
      ]
    },

    // DILEMA 4: RECURSOS NATURALES Y LITIO (LEY DE GLACIARES VS MEGA MINERÍA)
    {
      id: "dip_glaciares_mineria",
      etapaBadge: "Fase 2: Congreso de la Nación",
      area: "Recursos Naturales, Litio & Medio Ambiente",
      titulo: "Minería Cordillerana y Litio: ¿Ley de Glaciares o Régimen de Inversiones Mineras?",
      descripcion: "Gobernadores de provincias cordilleranas y del Norte Grande exigen modificar la Ley de Glaciares para destrabar proyectos de cobre, oro y litio por más de 15.000 millones de dólares. Asambleas ambientales y pueblos originarios acampan en el Congreso denunciando que se arriesgan las fuentes de agua dulce de los valles productivos.",
      explicacion: {
        queMide: "Eje Ambiente (Extractivismo productivista vs. Sustentabilidad ecológica) y Eje Comercio.",
        siDeAcuerdo: "La minería moderna y el litio son imprescindibles para que Argentina consiga las divisas necesarias para el desarrollo.",
        siEnContra: "El agua y los glaciares valen más que el oro; no se puede hipotecar el ecosistema futuro por rentabilidad inmediata."
      },
      opciones: [
        {
          texto: "Aprobar la flexibilización de la Ley de Glaciares y dar estabilidad fiscal por 30 años a las multinacionales mineras para generar exportaciones.",
          impacto12Axes: { ambiente: 15, comercio: 90, estatismo: 80, regulacion: 80, federalismo: 20 },
          impactoSectores: { trabajo: 5, productivo: 35, claseMedia: -10, estadoCiencia: -15, seguridadJusticia: 10, frenteExterno: 35 },
          impactoMacro: { reservasNetasBCRA: +1200, riesgoPais: -100, resultadoFiscalPBI: +0.3 }
        },
        {
          texto: "Blindar la Ley de Glaciares prohibiendo la megaminería a cielo abierto y declarar al litio recurso estratégico nacional bajo empresa estatal.",
          impacto12Axes: { ambiente: 85, comercio: 20, estatismo: 15, regulacion: 20, federalismo: 70 },
          impactoSectores: { trabajo: 20, productivo: -30, claseMedia: 10, estadoCiencia: 25, seguridadJusticia: -5, frenteExterno: -30 },
          impactoMacro: { reservasNetasBCRA: -300, riesgoPais: +80, resultadoFiscalPBI: -0.1 }
        },
        {
          texto: "Autorizar proyectos exclusivamente con canon ambiental del 20% destinado a obras de agua potable y plebiscito vinculante en cada municipio afectado.",
          impacto12Axes: { ambiente: 55, comercio: 55, estatismo: 50, regulacion: 45, federalismo: 40 },
          impactoSectores: { trabajo: 10, productivo: 10, claseMedia: 15, estadoCiencia: 10, seguridadJusticia: 5, frenteExterno: 10 },
          impactoMacro: { reservasNetasBCRA: +400, riesgoPais: -20 }
        }
      ]
    },

    // DILEMA 5: REFORMA POLÍTICA (BOLETA ÚNICA DE PAPEL)
    {
      id: "dip_boleta_unica",
      etapaBadge: "Fase 2: Congreso de la Nación",
      area: "Reforma Política & Transparencia Electoral",
      materia: "electoral",
      titulo: "Reforma del Sistema Electoral: ¿Boleta Única de Papel (BUP) o Boleta Tradicional Partidaria?",
      descripcion: "Se somete a votación un proyecto histórico para reemplazar la tradicional boleta sábana por la Boleta Única de Papel en todas las elecciones nacionales. Bloques opositores aseguran que erradica el robo de boletas y el clientelismo, mientras dirigentes territoriales sostienen que desarticula la militancia partidaria organizada.",
      explicacion: {
        queMide: "Eje Institucionalidad (Transparencia electoral e imparcialidad vs. Estructura de partidos y pragmatismo de aparato).",
        siDeAcuerdo: "La Boleta Única asegura que el votante encuentre a todos los candidatos en el cuarto oscuro sin depender de fiscales pagos.",
        siEnContra: "La boleta partidaria refleja la fuerza militante de las agrupaciones políticas y evita que el dinero y los medios decidan la elección."
      },
      opciones: [
        {
          texto: "Aprobar la Boleta Única de Papel a nivel nacional y prohibir el financiamiento privado corporativo en campañas electorales.",
          impacto12Axes: { institucionalidad: 10, valores: 45, regulacion: 40 },
          impactoSectores: { trabajo: 10, productivo: 10, claseMedia: 30, estadoCiencia: 15, seguridadJusticia: 15, frenteExterno: 15 },
          impactoMacro: { riesgoPais: -30 }
        },
        {
          texto: "Rechazar el proyecto: mantener la boleta partidaria tradicional que reivindica el trabajo territorial de los partidos populares.",
          impacto12Axes: { institucionalidad: 70, valores: 60, regulacion: 70 },
          impactoSectores: { trabajo: 15, productivo: -10, claseMedia: -20, estadoCiencia: 5, seguridadJusticia: -10, frenteExterno: -5 },
          impactoMacro: { riesgoPais: +20 }
        },
        {
          texto: "Implementar Boleta Única de Papel pero autorizar el casillero de lista completa para preservar el arrastre de los frentes políticos.",
          impacto12Axes: { institucionalidad: 40, valores: 50, regulacion: 55 },
          impactoSectores: { trabajo: 5, productivo: 5, claseMedia: 10, estadoCiencia: 10, seguridadJusticia: 5, frenteExterno: 5 },
          impactoMacro: { riesgoPais: -10 }
        }
      ]
    }
  ],

  // ETAPA 3: PRESIDENCIA DE LA NACIÓN
  presidente: [
    // 1. TRANSPORTE
    {
      id: "pres_transporte",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Servicios Públicos & Movilidad",
      titulo: "Dilema sobre el Sistema de Transporte Ferroviario y Colectivos",
      descripcion: "El sistema de trenes y colectivos demanda 2.500 millones de dólares anuales en subsidios del Estado. Las tarifas congeladas generan un enorme déficit fiscal y el FMI exige resolver la cuenta.",
      explicacion: {
        queMide: "Eje Estatismo (Público vs. Privado) y Eje Regulación (Control tarifario vs. Libre Mercado).",
        siDeAcuerdo: "Cortar el déficit de raíz y permitir que la competencia privada modernice las flotas.",
        siEnContra: "El transporte es un salario indirecto del trabajador y un servicio de integración social que debe garantizar el Estado."
      },
      opciones: [
        {
          id: "estatizar_subsidiar",
          texto: "Mantener la gestión 100% pública y garantizar el boleto subsidiado accesible a las clases populares.",
          setFlags: { modelo_transporte: "estatal" },
          impacto12Axes: { estatismo: 10, regulacion: 15, comercio: 30, institucionalidad: 50 },
          impactoSectores: { trabajo: 30, productivo: -25, claseMedia: -5, estadoCiencia: 25, seguridadJusticia: -5, frenteExterno: -30 },
          impactoMacro: { resultadoFiscalPBI: -0.5, inflacionMensual: -0.3, riesgoPais: +100 }
        },
        {
          id: "mixto",
          texto: "Esquema mixto: concesionar ramales comerciales pero mantener la infraestructura de vías en manos del Estado con tarifa media.",
          setFlags: { modelo_transporte: "mixto" },
          impacto12Axes: { estatismo: 50, regulacion: 50, comercio: 50, institucionalidad: 40 },
          impactoSectores: { trabajo: 0, productivo: 10, claseMedia: 5, estadoCiencia: 5, seguridadJusticia: 5, frenteExterno: 10 },
          impactoMacro: { resultadoFiscalPBI: -0.1, riesgoPais: -10 }
        },
        {
          id: "privatizar_rutas",
          texto: "Privatizar por completo las líneas, eliminar subsidios y liberar tarifas a lo que dicte el costo real.",
          setFlags: { modelo_transporte: "privatizado" },
          impacto12Axes: { estatismo: 85, regulacion: 85, comercio: 80, institucionalidad: 50 },
          impactoSectores: { trabajo: -30, productivo: 25, claseMedia: -15, estadoCiencia: -20, seguridadJusticia: 5, frenteExterno: 30 },
          impactoMacro: { resultadoFiscalPBI: +0.6, inflacionMensual: +1.4, riesgoPais: -90, pobreza: +0.8 }
        },
        {
          id: "desregulacion_abierta",
          texto: "Desregulación abierta total: libre ingreso de combis, autos particulares y apps sin licencias ni permisos estatales.",
          setFlags: { modelo_transporte: "desregulado" },
          impacto12Axes: { estatismo: 90, regulacion: 95, comercio: 90, institucionalidad: 60 },
          impactoSectores: { trabajo: -35, productivo: 25, claseMedia: 10, estadoCiencia: -25, seguridadJusticia: 5, frenteExterno: 35 },
          impactoMacro: { resultadoFiscalPBI: +0.5, inflacionMensual: +0.8, riesgoPais: -70 }
        }
      ]
    },

    // CONSECUENCIA TRANSPORTE
    {
      id: "pres_transporte_consecuencia",
      etapaBadge: "Fase 3: Suceso Derivado",
      area: "Impacto en las Calles y el Presupuesto",
      titulo: "Repercusión del nuevo modelo de transporte",
      requiereFlag: "modelo_transporte",
      generarContextoDinamico: function(flags) {
        if (flags.modelo_transporte === "privatizado" || flags.modelo_transporte === "desregulado") {
          return {
            titulo: "Tarifazo y ola de protestas de usuarios y sindicatos",
            desc: "Al eliminarse los subsidios, el valor del boleto se cuadruplicó de la noche a la mañana. La CGT y federaciones estudiantiles convocan a un paro de actividades y bloqueos en las estaciones.",
            explicacion: {
              queMide: "Eje Seguridad (Uso de fuerzas federales vs. Tarifa social segmentada).",
              siDeAcuerdo: "Sostener la reforma estructural sin dar el brazo a torcer frente a presiones.",
              siEnContra: "Crear una tarifa social segmentada para amortiguar el impacto en los trabajadores."
            },
            opciones: [
              {
                texto: "Crear una Tarifa Social protegida para jubilados y trabajadores que cobren el salario mínimo.",
                impacto12Axes: { estatismo: 60, regulacion: 55, seguridad: 55, institucionalidad: 40 },
                impactoSectores: { trabajo: 15, productivo: -5, claseMedia: 15, estadoCiencia: 5, seguridadJusticia: 0, frenteExterno: 10 },
                impactoMacro: { resultadoFiscalPBI: -0.15, riesgoPais: +15 }
              },
              {
                texto: "Desplegar a las Fuerzas Federales en estaciones, aplicar protocolo antipiquetes y no retroceder un milímetro.",
                impacto12Axes: { estatismo: 85, regulacion: 90, seguridad: 10, institucionalidad: 60 },
                impactoSectores: { trabajo: -35, productivo: 25, claseMedia: 5, estadoCiencia: -15, seguridadJusticia: 35, frenteExterno: 25 },
                impactoMacro: { riesgoPais: -30, inflacionMensual: 0 }
              }
            ]
          };
        } else {
          return {
            titulo: "Presión del FMI y advertencia por la meta de déficit fiscal",
            desc: "El sostenimiento de los subsidios estatales al boleto puso al país al límite de la meta de déficit acordada con el FMI. Los mercados amenazan con subir el riesgo país si no hay ajuste alternativo.",
            explicacion: {
              queMide: "Eje Geopolítica y Comercio (Metas internacionales vs. Gasto soberano).",
              siDeAcuerdo: "Ajustar otras áreas del Estado para cumplir con el programa financiero internacional.",
              siEnContra: "Desafiar al FMI y financiar el transporte con emisión monetaria o impuestos a la riqueza."
            },
            opciones: [
              {
                texto: "Recortar contratos en ministerios y publicidad oficial para compensar el gasto en transporte.",
                impacto12Axes: { estatismo: 55, regulacion: 55, geopolitica: 35, institucionalidad: 40 },
                impactoSectores: { trabajo: 5, productivo: 15, claseMedia: 15, estadoCiencia: -15, seguridadJusticia: 5, frenteExterno: 20 },
                impactoMacro: { resultadoFiscalPBI: +0.2, riesgoPais: -50 }
              },
              {
                texto: "Repudiar el condicionamiento del FMI y defender el modelo soberano frente a los acreedores externos.",
                impacto12Axes: { estatismo: 15, regulacion: 15, geopolitica: 85, institucionalidad: 65 },
                impactoSectores: { trabajo: 25, productivo: -25, claseMedia: -15, estadoCiencia: 20, seguridadJusticia: -5, frenteExterno: -40 },
                impactoMacro: { riesgoPais: +280, reservasNetasBCRA: -500, inflacionMensual: +2.0 }
              }
            ]
          };
        }
      }
    },

    // 1. PREPAGAS Y EL "COPAGO BARRANI" (QUILOMBO COTIDIANO)
    {
      id: "pres_prepagas_salud",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Salud Privada, Medicamentos & Copagos",
      titulo: "La bomba de las Prepagas y el 'Copago Barrani'",
      descripcion: "Las empresas de medicina prepaga aplican aumentos acumulados por encima de la inflación argumentando atraso tecnológico e insumos importados. Como respuesta, los médicos y sanatorios privados empiezan a cobrar 'copagos éticos' en efectivo en el mostrador para atender, dejando a la clase media pagando cuotas millonarias y teniendo que poner guita extra en mano.",
      explicacion: {
        queMide: "Eje Estatismo (Público vs. Privado) y Eje Regulación (Precios libres vs. Control estatal).",
        siDeAcuerdo: "La libertad de precios asegura insumos médicos de última generación e inversión privada.",
        siEnContra: "La salud es un derecho básico de las familias; no se puede permitir la cartelización ni copagos salvajes."
      },
      opciones: [
        {
          id: "desregulacion_prepagas",
          texto: "Desregulación total: Dejar que el mercado fije libremente cuotas y acuerdos entre médicos y empresas sin intervención estatal.",
          impacto12Axes: { estatismo: 90, regulacion: 90, comercio: 80, valores: 60 },
          impactoSectores: { claseMedia: -30, productivo: 25, trabajo: -20, estadoCiencia: -15, frenteExterno: 15 },
          impactoMacro: { inflacionMensual: +0.6, resultadoFiscalPBI: +0.1, riesgoPais: -30, pobreza: +0.4 }
        },
        {
          id: "tope_salarial_ripte",
          texto: "Tope por índice salarial: Sacar una resolución de la Superintendencia que ate los aumentos exclusivamente a la variación del RIPTE (salarios formales).",
          impacto12Axes: { estatismo: 35, regulacion: 20, comercio: 35, valores: 40 },
          impactoSectores: { claseMedia: 25, productivo: -20, trabajo: 15, estadoCiencia: 10, frenteExterno: -10 },
          impactoMacro: { inflacionMensual: -0.3, resultadoFiscalPBI: 0, riesgoPais: +20 }
        },
        {
          id: "estatizacion_auditoria",
          texto: "Estatización de la fiscalización y auditoría obligatoria de costos: Obligar por decreto a abrir las estructuras de costos de las prepagas bajo amenaza de intervención.",
          impacto12Axes: { estatismo: 15, regulacion: 10, comercio: 20, institucionalidad: 65 },
          impactoSectores: { claseMedia: -10, productivo: -35, trabajo: 20, estadoCiencia: 20, seguridadJusticia: -15 },
          impactoMacro: { inflacionMensual: -0.1, resultadoFiscalPBI: -0.1, riesgoPais: +60 }
        }
      ]
    },

    // 2. NUEVO: RÉGIMEN CAMBIARIO Y MONETARIO (DOLARIZACIÓN VS CEPO VS FLOTACIÓN)
    {
      id: "pres_cepo_dolarizacion",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Política Monetaria, Divisas & Inflación",
      titulo: "¿Dolarización y liquidación del Banco Central, Flotación Libre o Cepo Cambiario?",
      descripcion: "La persistencia de la inflación y la brecha cambiaria obligan a definir el régimen monetario supremo de la República. El debate enfrenta la dolarización oficial de la economía con rescate de pesos, un esquema de flotación administrada con acumulación de reservas, o un cepo cambiario integral que obligue a liquidar dólares al tipo de cambio oficial.",
      explicacion: {
        queMide: "Eje Estatismo (Moneda nacional estatal vs. Dolarización privada) y Eje Regulación (Cepo vs. Mercado libre).",
        siDeAcuerdo: "Eliminar el peso y el BCRA para liquidar la inflación argentina de una vez y para siempre.",
        siEnContra: "Conservar la soberanía monetaria nacional para hacer política anticíclica y proteger la industria."
      },
      opciones: [
        {
          texto: "Dolarización total de la economía, cierre definitivo del Banco Central (BCRA) y libre competencia de monedas de curso legal.",
          impacto12Axes: { estatismo: 90, regulacion: 90, comercio: 95, geopolitica: 10, institucionalidad: 45 },
          impactoSectores: { trabajo: -20, productivo: 30, claseMedia: 25, estadoCiencia: -30, seguridadJusticia: 10, frenteExterno: 40 },
          impactoMacro: { inflacionMensual: -2.5, riesgoPais: -200, reservasNetasBCRA: -1000, resultadoFiscalPBI: +0.4, pobreza: +0.6 }
        },
        {
          texto: "Flotación cambiaria libre con tasa de interés real positiva, saneamiento del balance del BCRA y acumulación paulatina de reservas.",
          impacto12Axes: { estatismo: 60, regulacion: 65, comercio: 75, geopolitica: 30, institucionalidad: 25 },
          impactoSectores: { trabajo: 5, productivo: 20, claseMedia: 15, estadoCiencia: 5, seguridadJusticia: 10, frenteExterno: 25 },
          impactoMacro: { inflacionMensual: -0.6, riesgoPais: -80, reservasNetasBCRA: +900, resultadoFiscalPBI: +0.2, pobreza: -0.4 }
        },
        {
          texto: "Cepo cambiario estricto, liquidación obligatoria de exportaciones y desdoblamiento cambiario con dólar ahorro y turista administrado.",
          impacto12Axes: { estatismo: 15, regulacion: 5, comercio: 15, geopolitica: 75, institucionalidad: 60 },
          impactoSectores: { trabajo: 20, productivo: -30, claseMedia: -20, estadoCiencia: 15, seguridadJusticia: -5, frenteExterno: -35 },
          impactoMacro: { inflacionMensual: +1.8, riesgoPais: +180, reservasNetasBCRA: -600, resultadoFiscalPBI: -0.3, pobreza: +1.2 }
        }
      ]
    },

    // 3. NUEVO: MALVINAS, ANTÁRTIDA Y DEFENSA NACIONAL
    {
      id: "pres_malvinas_defensa",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Soberanía de Malvinas, Antártida & Defensa Nacional",
      titulo: "¿Reequipamiento de las FF.AA. con cazas supersónicos y base antártica o desarme pacifista?",
      descripcion: "El reclamo irrenunciable sobre las Islas Malvinas y la proyección sobre el Sector Antártico argentino exigen definiciones presupuestarias. Se debate la compra de cazas supersónicos F-16 de origen estadounidense y la instalación de una Base Naval Integrada en Ushuaia con cooperación occidental, frente a sectores que exigen no alinearse con la OTAN y priorizar la inversión sanitaria y educativa.",
      explicacion: {
        queMide: "Eje Defensa (Fuerzas armadas disuasivas vs. Desmilitarización) y Eje Geopolítica (Alineamiento occidental vs. Multipolar/No alineado).",
        siDeAcuerdo: "La soberanía territorial y los recursos del Atlántico Sur no se defienden con discursos, sino con poder disuasivo real.",
        siEnContra: "Argentina debe sostener una diplomacia de paz neutral; gastar millones en armas complace al Pentágono y descuida el hospital público."
      },
      opciones: [
        {
          texto: "Comprar los cazas supersónicos, construir la Base Naval en Ushuaia y alinearse estratégicamente con Estados Unidos y la OTAN.",
          impacto12Axes: { defensa: 10, geopolitica: 10, comercio: 80, institucionalidad: 40, federalismo: 45 },
          impactoSectores: { trabajo: -15, productivo: 15, claseMedia: 5, estadoCiencia: -10, seguridadJusticia: 40, frenteExterno: 35 },
          impactoMacro: { resultadoFiscalPBI: -0.3, riesgoPais: -40, reservasNetasBCRA: -300 }
        },
        {
          texto: "Reequipamiento defensivo multilateral y soberano: radares y buques fabricados por astilleros nacionales (Tandanor y FADEA) sin tutelaje de potencias.",
          impacto12Axes: { defensa: 25, geopolitica: 60, comercio: 35, estatismo: 30, federalismo: 30 },
          impactoSectores: { trabajo: 20, productivo: 10, claseMedia: 15, estadoCiencia: 30, seguridadJusticia: 25, frenteExterno: -10 },
          impactoMacro: { resultadoFiscalPBI: -0.2, reservasNetasBCRA: -100 }
        },
        {
          texto: "Doctrina pacifista y neutralista: presupuesto militar mínimo para emergencias civiles y enfocar todo el esfuerzo en la vía diplomática en la ONU.",
          impacto12Axes: { defensa: 85, geopolitica: 70, comercio: 50, institucionalidad: 30, estatismo: 60 },
          impactoSectores: { trabajo: 15, productivo: -5, claseMedia: 10, estadoCiencia: 15, seguridadJusticia: -30, frenteExterno: 0 },
          impactoMacro: { resultadoFiscalPBI: +0.2, riesgoPais: +10 }
        }
      ]
    },

    // 4. NUEVO: INMIGRACIÓN, SALUD PÚBLICA Y UNIVERSIDADES A NO RESIDENTES
    {
      id: "pres_inmigracion_salud_educacion",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Fronteras, Salud Pública & Educación para no Residentes",
      titulo: "¿Arancelar salud y universidades públicas a extranjeros no residentes o gratuidad universal histórica?",
      descripcion: "Hospitales provinciales de frontera (en Salta, Jujuy y Formosa) y universidades nacionales reciben miles de pacientes y estudiantes extranjeros sin residencia formal en el país. Gobernadores del norte impulsan el cobro de aranceles médicos y educativos para aliviar sus presupuestos sanitarios, mientras agrupaciones de derechos humanos invocan el preámbulo constitucional: 'para todos los hombres del mundo que quieran habitar el suelo argentino'.",
      explicacion: {
        queMide: "Eje Inmigración (Restricción/Arancelamiento vs. Integración universal) y Eje Federalismo.",
        siDeAcuerdo: "La prioridad de los recursos tributarios de los argentinos debe ser para los ciudadanos y residentes que pagan impuestos.",
        siEnContra: "La tradición humanista argentina garantiza salud y educación universal y refuerza la hermandad latinoamericana."
      },
      opciones: [
        {
          texto: "Arancelar el 100% de la atención médica no urgente y las carreras universitarias a extranjeros no residentes, exigiendo seguro de salud obligatorio al ingresar al país.",
          impacto12Axes: { inmigracion: 15, federalismo: 25, valores: 70, institucionalidad: 40, regulacion: 60 },
          impactoSectores: { trabajo: -10, productivo: 20, claseMedia: 25, estadoCiencia: 5, seguridadJusticia: 20, frenteExterno: -10 },
          impactoMacro: { resultadoFiscalPBI: +0.15, riesgoPais: 0 }
        },
        {
          texto: "Esquema de reciprocidad internacional bilateral: atención y educación gratuitas sólo para ciudadanos de países vecinos que otorguen el mismo trato a los argentinos.",
          impacto12Axes: { inmigracion: 45, federalismo: 40, valores: 55, institucionalidad: 30, regulacion: 50 },
          impactoSectores: { trabajo: 0, productivo: 10, claseMedia: 15, estadoCiencia: 10, seguridadJusticia: 10, frenteExterno: 10 },
          impactoMacro: { resultadoFiscalPBI: +0.05 }
        },
        {
          texto: "Ratificar la gratuidad universal irrestricta consagrada en la Constitución: atender y educar a todos sin distinción de nacionalidad ni residencia.",
          impacto12Axes: { inmigracion: 90, federalismo: 70, valores: 20, institucionalidad: 50, regulacion: 35 },
          impactoSectores: { trabajo: 20, productivo: -15, claseMedia: -10, estadoCiencia: 25, seguridadJusticia: -15, frenteExterno: -5 },
          impactoMacro: { resultadoFiscalPBI: -0.1, riesgoPais: +15 }
        }
      ]
    },

    // 5. NUEVO: RÉGIMEN PENAL JUVENIL Y EDAD DE IMPUTABILIDAD
    {
      id: "pres_imputabilidad_menores",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Seguridad Ciudadana & Régimen Penal Juvenil",
      materia: "penal",
      titulo: "Baja de la edad de imputabilidad y crisis penitenciaria",
      descripcion: "Un asalto violento en el conurbano bonaerense cometido por dos menores de 14 años con múltiples antecedentes reabre la indignación social. La oposición y los medios masivos exigen tratar de urgencia la baja de la edad de imputabilidad penal a los 13 o 14 años.",
      explicacion: {
        queMide: "Eje Seguridad (Punitivismo riguroso vs. Garantismo y contención juvenil) e Institucionalidad.",
        siDeAcuerdo: "El que comete delitos de adultos debe pagar condenas de adultos; fin a la impunidad biológica.",
        siEnContra: "Bajar la edad viola tratados internacionales y colapsa las cárceles; se requiere prevención socioeducativa."
      },
      opciones: [
        {
          id: "baja_imputabilidad_13",
          texto: "Bajar la edad a 13 años con régimen carcelario efectivo: Enviar el proyecto al Congreso para juzgar a menores de 13 a 16 como adultos en delitos graves y ordenar la construcción de centros de detención juvenil de máxima seguridad.",
          impacto12Axes: { seguridad: 10, institucionalidad: 50, valores: 85 },
          impactoSectores: { seguridadJusticia: 40, claseMedia: 25, productivo: 20, trabajo: -25, estadoCiencia: -25, frenteExterno: -15 },
          impactoMacro: { riesgoPais: -15, resultadoFiscalPBI: -0.1 }
        },
        {
          id: "contencion_socioeducativa",
          texto: "Mantener el régimen actual y enfocarse en contención socio-educativa: Vetar la discusión punitiva e inyectar presupuesto en institutos de rehabilitación, escuelas técnicas barriales y centros de desintoxicación de adicciones.",
          impacto12Axes: { seguridad: 85, institucionalidad: 30, valores: 15 },
          impactoSectores: { seguridadJusticia: -30, claseMedia: -20, productivo: -15, trabajo: 25, estadoCiencia: 30, frenteExterno: 10 },
          impactoMacro: { resultadoFiscalPBI: -0.15, riesgoPais: +20 }
        },
        {
          id: "responsabilidad_padres",
          texto: "Responsabilidad civil y penal compartida con los padres o tutores: No encarcelar a los chicos en prisiones comunes, pero quitar beneficios sociales, embargar ingresos y aplicar trabajo comunitario obligatorio a los adultos responsables del menor.",
          impacto12Axes: { seguridad: 45, institucionalidad: 40, valores: 55 },
          impactoSectores: { seguridadJusticia: 15, claseMedia: 15, productivo: 10, trabajo: -5, estadoCiencia: 5, frenteExterno: 5 },
          impactoMacro: { resultadoFiscalPBI: 0 }
        }
      ]
    },

    // 6. NUEVO: LEY DE ALQUILERES Y DERECHO A LA VIVIENDA
    {
      id: "pres_alquileres_vivienda",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Mercado Inmobiliario & Acceso a la Vivienda",
      titulo: "Alquileres por las nubes y expensas impagables",
      descripcion: "El fin de semana vencen miles de contratos de locación. En las grandes ciudades, los propietarios exigen contratos en dólares o actualizaciones bimestrales por IPC. A la par, las expensas aumentaron un 150% en un año por servicios y paritarias del gremio de encargados (SUTERH), haciendo que mantener un 2 ambientes cueste más de expensas que de alquiler.",
      explicacion: {
        queMide: "Eje Regulación (Libre pacto contractual vs. Regulación y protección al inquilino) y Eje Estatismo.",
        siDeAcuerdo: "La desregulación devuelve departamentos al mercado y la mayor oferta frena el aumento de precios por competencia.",
        siEnContra: "El inquilino es la parte débil; la vivienda no es una mercancía financiera y el Estado debe regular los aumentos."
      },
      opciones: [
        {
          id: "libre_pacto_alquileres",
          texto: "Libre pacto irrestricto: Desregulación absoluta de contratos de alquiler y ratificar libre pacto en cualquier moneda o plazo.",
          impacto12Axes: { regulacion: 95, estatismo: 90, comercio: 85, valores: 65 },
          impactoSectores: { claseMedia: 10, productivo: 35, trabajo: -25, estadoCiencia: -15, frenteExterno: 25 },
          impactoMacro: { inflacionMensual: -0.2, riesgoPais: -40, resultadoFiscalPBI: 0, pobreza: +0.4 }
        },
        {
          id: "ley_alquileres_estricta",
          texto: "Ley de Alquileres estricta con tope y prórroga forzosa: Imponer contratos mínimos de 3 años, actualización anual indexada y congelamiento transitorio de expensas comunes.",
          impacto12Axes: { regulacion: 10, estatismo: 15, comercio: 15, valores: 25 },
          impactoSectores: { claseMedia: -10, productivo: -35, trabajo: 25, estadoCiencia: 15, frenteExterno: -25 },
          impactoMacro: { inflacionMensual: +0.4, riesgoPais: +70, pobreza: -0.2 }
        },
        {
          id: "subsidio_fiscal_propietarios",
          texto: "Subsidio fiscal a propietarios y créditos blandos para garantías: Dar exenciones de Bienes Personales a quienes alquilen en pesos y subsidiar seguros de caución estatales.",
          impacto12Axes: { regulacion: 50, estatismo: 45, comercio: 50, valores: 50 },
          impactoSectores: { claseMedia: 20, productivo: 15, trabajo: 10, estadoCiencia: 5, frenteExterno: 5 },
          impactoMacro: { resultadoFiscalPBI: -0.2, riesgoPais: +10 }
        }
      ]
    },

    // 'LA GUERRA DE LA CALLE': TAXIS VS. UBER, DIDI Y CABIFY (QUILOMBO URBANO)
    {
      id: "pres_taxis_uber",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Transporte Urbano, Plataformas Digitales & Movilidad",
      titulo: "'La guerra de la calle': Taxis vs. Uber, Didi y Cabify",
      descripcion: "El gremio de taxistas bloquea los accesos a Aeroparque, Retiro y el microcentro tras una semana de incidentes violentos y autos de aplicaciones 'cazados' y rayados con ácido. Exigen el bloqueo judicial de las apps y el secuestro inmediato de autos no habilitados.",
      explicacion: {
        queMide: "Eje Regulación (Desregulación digital vs. Corporativismo de licencias) y Eje Seguridad/Orden.",
        siDeAcuerdo: "La tecnología y la libre competencia benefician a millones de pasajeros con mejores precios y servicio.",
        siEnContra: "La competencia desleal destruye el capital de choferes con licencias oficiales y precariza el trabajo sin aportes."
      },
      opciones: [
        {
          id: "desregulacion_apps_transporte",
          texto: "Blanqueo y desregulación total del transporte de pasajeros: Legalizar por completo todas las plataformas, eliminar el cupo de licencias de taxi y desregular tarifas.",
          impacto12Axes: { regulacion: 95, estatismo: 90, seguridad: 50, comercio: 90 },
          impactoSectores: { claseMedia: 25, productivo: 25, trabajo: -30, seguridadJusticia: -10, frenteExterno: 20 },
          impactoMacro: { inflacionMensual: -0.1, riesgoPais: -20 }
        },
        {
          id: "mano_dura_apps",
          texto: "Mano dura contra las apps: Ordenar el bloqueo de las IP de las apps en servidores locales, aplicar multas millonarias y exigir registro profesional y VTV comercial obligatoria para todo conductor.",
          impacto12Axes: { regulacion: 10, estatismo: 25, seguridad: 25, comercio: 15 },
          impactoSectores: { claseMedia: -20, productivo: -25, trabajo: 20, seguridadJusticia: 20, frenteExterno: -20 },
          impactoMacro: { inflacionMensual: +0.2, riesgoPais: +30 }
        },
        {
          id: "regimen_mixto_taxis",
          texto: "Régimen mixto con tasa compensatoria: Crear un fondo fiduciario donde cada viaje por app pague una tasa del 5% destinada a subsidiar la renovación de la flota de taxis tradicionales.",
          impacto12Axes: { regulacion: 50, estatismo: 50, seguridad: 45, comercio: 50 },
          impactoSectores: { claseMedia: 5, productivo: 5, trabajo: 5, seguridadJusticia: 5, frenteExterno: 0 },
          impactoMacro: { resultadoFiscalPBI: 0, riesgoPais: 0 }
        }
      ]
    },

    // MEGA-RECITALES Y ESTADIOS VS. FURIA VECINAL (QUILOMBO URBANO)
    {
      id: "pres_recitales_estadios",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Cultura, Convivencia Urbana & Espacio Público",
      titulo: "Mega-recitales y estadios vs. Furia vecinal",
      descripcion: "Una productora internacional agenda 10 fechas consecutivas en un estadio barrial (tipo River, Vélez o Movistar Arena en Villa Crespo). Los vecinos denuncian vibraciones estructurales en sus edificios, calles colapsadas por trapitos que cobran fortuna para estacionar y batucadas hasta las 3 de la mañana en días hábiles.",
      explicacion: {
        queMide: "Eje Regulación (Industria del entretenimiento vs. Normas de convivencia) y Eje Seguridad.",
        siDeAcuerdo: "La industria del espectáculo genera empleo, turismo internacional y actividad económica en gastronomía.",
        siEnContra: "El derecho al descanso, la seguridad barrial y la paz vecinal están por encima del negocio de una productora."
      },
      opciones: [
        {
          id: "priorizar_shows_turismo",
          texto: "Priorizar el negocio cultural y turismo: Avalar las fechas, desestimar los reclamos ambientales y declarar los recitales de interés turístico nacional.",
          impacto12Axes: { regulacion: 85, estatismo: 75, comercio: 80, ambiente: 20 },
          impactoSectores: { productivo: 30, claseMedia: -20, trabajo: 10, estadoCiencia: -5, seguridadJusticia: -20 },
          impactoMacro: { reservasNetasBCRA: +50, riesgoPais: -10 }
        },
        {
          id: "clausura_relocalizacion_shows",
          texto: "Clausura preventiva o relocalización forzada a la periferia: Prohibir shows en estadios ubicados en zonas densamente pobladas y obligar a trasladarlos a autódromos o descampados del conurbano.",
          impacto12Axes: { regulacion: 15, estatismo: 30, comercio: 20, ambiente: 85 },
          impactoSectores: { productivo: -30, claseMedia: 20, trabajo: -15, estadoCiencia: 10, seguridadJusticia: 15 },
          impactoMacro: { reservasNetasBCRA: -40, riesgoPais: +20 }
        },
        {
          id: "saturacion_policial_trapitos",
          texto: "Operativo de saturación y límite de decibeles con multas al segundo show: Poner a la policía a barrer a los trapitos, exigir insonorización técnica y poner toque de queda sonoro estricto a las 23:00 hs.",
          impacto12Axes: { regulacion: 50, estatismo: 50, seguridad: 25, institucionalidad: 30 },
          impactoSectores: { productivo: 10, claseMedia: 10, trabajo: 5, seguridadJusticia: 20, estadoCiencia: 5 },
          impactoMacro: { resultadoFiscalPBI: -0.05 }
        }
      ]
    },

    // 7. CULTO, LAICISMO Y BIOÉTICA
    {
      id: "pres_culto_educacion_laica",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Cultura, Valores, Culto & Bioética",
      titulo: "Separación Iglesia-Estado, Subsidios a Colegios Confesionales y Eutanasia",
      descripcion: "Llega a tu despacho presidencial un proyecto sancionado por el Congreso que elimina todo financiamiento estatal al culto religioso, suprime los subsidios a colegios confesionales (católicos y evangélicos) e introduce la eutanasia voluntaria legal.",
      explicacion: {
        queMide: "Eje Laicismo (Laico estricto vs. Confesional) y Eje Valores (Progresismo civil vs. Tradicionalismo religioso).",
        siDeAcuerdo: "Laicismo republicano absoluto, neutralidad estatal y libertades de autodeterminación individual.",
        siEnContra: "Defensa de la libertad religiosa, contención comunitaria de parroquias y colegios, y valores provida."
      },
      opciones: [
        {
          texto: "Promulgar la ley con orgullo: separación estricta de Iglesia y Estado, educación 100% laica y libertades civiles plenas.",
          impacto12Axes: { laicismo: 10, valores: 15, institucionalidad: 20, estatismo: 60 },
          impactoSectores: { trabajo: 10, productivo: 0, claseMedia: 15, estadoCiencia: 25, seguridadJusticia: -15, frenteExterno: 15 },
          impactoMacro: { resultadoFiscalPBI: +0.1, riesgoPais: -10 }
        },
        {
          texto: "Promulgar la ley pero preservando los subsidios a hogares de ancianos, comedores parroquiales y escuelas de barrios humildes.",
          impacto12Axes: { laicismo: 40, valores: 40, institucionalidad: 30, estatismo: 50 },
          impactoSectores: { trabajo: 10, productivo: 5, claseMedia: 15, estadoCiencia: 10, seguridadJusticia: 0, frenteExterno: 5 },
          impactoMacro: { resultadoFiscalPBI: 0 }
        },
        {
          texto: "Vetar el artículo de eutanasia para proteger la vida biológica y promulgar exclusivamente la reestructuración de cultos.",
          impacto12Axes: { laicismo: 60, valores: 70, institucionalidad: 40, estatismo: 55 },
          impactoSectores: { trabajo: -5, productivo: 0, claseMedia: 5, estadoCiencia: -10, seguridadJusticia: 10, frenteExterno: -5 },
          impactoMacro: { resultadoFiscalPBI: 0 }
        },
        {
          texto: "Vetar el proyecto por completo mediante decreto: defender la libertad religiosa, el ideario tradicional y los colegios de gestión comunitaria.",
          impacto12Axes: { laicismo: 90, valores: 90, institucionalidad: 60, estatismo: 50 },
          impactoSectores: { trabajo: -15, productivo: -5, claseMedia: -10, estadoCiencia: -25, seguridadJusticia: 25, frenteExterno: -15 },
          impactoMacro: { riesgoPais: +10 }
        }
      ]
    },

    // 8. DEPORTIVO: LA GUERRA DE LAS SAD (SOCIEDADES ANÓNIMAS DEPORTIVAS)
    {
      id: "pres_sad_futbol",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Deporte Nacional, Negocio del Fútbol & Modelo de Clubes",
      titulo: "La Guerra de las SAD: ¿Intervención a la AFA, Blindaje de Clubes o Modelo '50+1'?",
      descripcion: "Un fondo de inversión de Medio Oriente acuerda la compra del 70% del fútbol de un histórico club en quiebra. La AFA suspende al club del torneo local y la Conmebol frena su participación internacional, desatando la mayor pulseada entre el Estado, los inversores y la dirigencia del fútbol.",
      explicacion: {
        queMide: "Eje Estatismo (Asociaciones Civiles sin fines de lucro vs. Sociedades Anónimas comerciales) y Eje Comercio.",
        siDeAcuerdo: "Inversión privada millonaria para modernizar estadios y competir contra el poder económico de Brasil y Europa.",
        siEnContra: "El club es de los socios; los clubes de barrio cumplen una función social comunitaria que las SA destruirían."
      },
      opciones: [
        {
          id: "intervencion_afa_sad",
          texto: "Intervención directa a la AFA por la IGJ: Nombrar un interventor estatal en la calle Viamonte para garantizar la personería de las SAD.",
          setFlags: { modelo_clubes: "sad_decreto" },
          impacto12Axes: { estatismo: 90, regulacion: 90, comercio: 95, institucionalidad: 70 },
          impactoSectores: { trabajo: -25, productivo: 35, claseMedia: -10, estadoCiencia: -15, seguridadJusticia: 15, frenteExterno: 35 },
          impactoMacro: { reservasNetasBCRA: +600, riesgoPais: -60 }
        },
        {
          id: "blindaje_asociaciones_civiles",
          texto: "Blindaje total de las Asociaciones Civiles por ley: Prohibir por ley cualquier figura societaria ajena a la asociación sin fines de lucro y otorgar subsidios a clubes quebrados.",
          setFlags: { modelo_clubes: "social_protegido" },
          impacto12Axes: { estatismo: 15, regulacion: 15, comercio: 20, institucionalidad: 40 },
          impactoSectores: { trabajo: 30, productivo: -30, claseMedia: 15, estadoCiencia: 15, seguridadJusticia: -5, frenteExterno: -30 },
          impactoMacro: { riesgoPais: +50, reservasNetasBCRA: -150 }
        },
        {
          id: "modelo_mixto_50_mas_1",
          texto: "El modelo mixto '50+1': Permitir que los clubes creen empresas mixtas con privados donde la Asociación Civil retenga el 51% del control político.",
          setFlags: { modelo_clubes: "optativo" },
          impacto12Axes: { estatismo: 50, regulacion: 50, comercio: 55, institucionalidad: 30 },
          impactoSectores: { trabajo: 10, productivo: 15, claseMedia: 20, estadoCiencia: 10, seguridadJusticia: 5, frenteExterno: 15 },
          impactoMacro: { reservasNetasBCRA: +250, riesgoPais: -15 }
        }
      ]
    },

    // CONSECUENCIA SAD
    {
      id: "pres_sad_consecuencia",
      etapaBadge: "Fase 3: Suceso Derivado",
      area: "Impacto en el Fútbol Argentino",
      titulo: "Repercusión del fallo sobre el modelo de clubes",
      requiereFlag: "modelo_clubes",
      generarContextoDinamico: function(flags) {
        if (flags.modelo_clubes === "sad_decreto") {
          return {
            titulo: "Llegada de grupos inversores y resistencia de hinchas y socios",
            desc: "Corporaciones internacionales inician tratativas para adquirir dos clubes tradicionales de la Primera Nacional prometiendo traer figuras y modernizar estadios. Sin embargo, agrupaciones de socios toman las sedes pacíficamente denunciando que se cerrarán las escuelas de básquet, hockey y natación.",
            explicacion: {
              queMide: "Eje Institucionalidad y Seguridad.",
              siDeAcuerdo: "Respaldar los contratos firmados para dar seguridad jurídica a la inversión extranjera.",
              siEnContra: "Obligar a los inversores a sostener las disciplinas sociales y barriales sin excepción."
            },
            opciones: [
              {
                texto: "Dictar norma complementaria: obligar a las SAD a transferir un 25% de sus ingresos a las disciplinas amateurs y becas sociales del club.",
                impacto12Axes: { estatismo: 60, regulacion: 35, institucionalidad: 40 },
                impactoSectores: { trabajo: 15, productivo: 10, claseMedia: 20, estadoCiencia: 5, seguridadJusticia: 5, frenteExterno: 10 },
                impactoMacro: { riesgoPais: +10 }
              },
              {
                texto: "Ratificar plena libertad comercial: los dueños deciden qué deportes son rentables sin intromisión del Estado.",
                impacto12Axes: { estatismo: 90, regulacion: 90, institucionalidad: 50 },
                impactoSectores: { trabajo: -25, productivo: 25, claseMedia: -10, estadoCiencia: -15, seguridadJusticia: 15, frenteExterno: 25 },
                impactoMacro: { riesgoPais: -30 }
              }
            ]
          };
        } else {
          return {
            titulo: "Reclamo federal de clubes del interior y deportistas olímpicos",
            desc: "Al cerrarse la puerta a las SAD, los dirigentes deportivos de instituciones del Torneo Federal A y de la Primera Nacional, junto a atletas de natación, remo y judo, presentan un petitorio conjunto exigiendo aumentar los fondos del ENARD para costear traslados y mantener abiertos sus predios.",
            explicacion: {
              queMide: "Eje Federalismo y Estatismo.",
              siDeAcuerdo: "El Estado federal debe garantizar la igualdad de oportunidades deportivas para los pibes de todas las provincias.",
              siEnContra: "El deporte debe sustentarse con cuotas societarias y mecenazgo privado de empresas locales."
            },
            opciones: [
              {
                texto: "Aumentar un 50% las partidas del ENARD y crear un Fondo Federal de Infraestructura Deportiva para las provincias.",
                impacto12Axes: { estatismo: 25, federalismo: 15, regulacion: 40 },
                impactoSectores: { trabajo: 20, productivo: -15, claseMedia: 15, estadoCiencia: 20, seguridadJusticia: 0, frenteExterno: -15 },
                impactoMacro: { resultadoFiscalPBI: -0.15 }
              },
              {
                texto: "Impulsar una Ley Nacional de Mecenazgo Deportivo: deducciones impositivas a empresas privadas que sponsoreen clubes del interior.",
                impacto12Axes: { estatismo: 70, federalismo: 40, regulacion: 70 },
                impactoSectores: { trabajo: 5, productivo: 20, claseMedia: 15, estadoCiencia: 5, seguridadJusticia: 5, frenteExterno: 15 },
                impactoMacro: { resultadoFiscalPBI: -0.05, riesgoPais: -15 }
              }
            ]
          };
        }
      }
    },

    // 9. AUTOMOVILISMO: TC/ACTC/RALLY VS FÓRMULA 1
    {
      id: "pres_f1_deportes",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Automovilismo & Pasión Fierrera",
      titulo: "El rugir de los motores: ¿Invertir en la Fórmula 1 o subsidiar autódromos del interior para el Turismo Carretera y el Rally?",
      descripcion: "Promotores internacionales exigen 40 millones de dólares estatales para reasfaltar el Autódromo de Buenos Aires y traer la Fórmula 1. Al mismo tiempo, la ACTC, el Turismo Carretera (TC), el Turismo Nacional y el Rally Argentino en las provincias reclaman subsidiar el combustible de competición y poner en valor autódromos del interior federal.",
      explicacion: {
        queMide: "Eje Federalismo vs. Centralismo y Eje Comercio (Vidriera global vs. Pasión popular de talleres de provincias).",
        siDeAcuerdo: "Proyectar la marca país ante 500 millones de espectadores globales, turismo receptivo y divisas.",
        siEnContra: "El automovilismo argentino es el segundo deporte más popular; apoya a las pymes metalmecánicas y economías regionales."
      },
      opciones: [
        {
          texto: "Priorizar la Fórmula 1 con aporte estatal: devolver al país a la élite del deporte mundial como motor de divisas y prestigio internacional.",
          impacto12Axes: { federalismo: 80, comercio: 85, estatismo: 55, geopolitica: 15 },
          impactoSectores: { trabajo: -5, productivo: 25, claseMedia: 15, estadoCiencia: -10, seguridadJusticia: 5, frenteExterno: 30 },
          impactoMacro: { resultadoFiscalPBI: -0.1, riesgoPais: -20, reservasNetasBCRA: +150 }
        },
        {
          texto: "Fórmula 1 sólo con inversión 100% privada, y destinar apoyo estatal a los circuitos federales de la ACTC, Turismo Carretera y el Rally.",
          impacto12Axes: { federalismo: 15, comercio: 60, estatismo: 60, geopolitica: 50 },
          impactoSectores: { trabajo: 15, productivo: 20, claseMedia: 20, estadoCiencia: 5, seguridadJusticia: 5, frenteExterno: 15 },
          impactoMacro: { resultadoFiscalPBI: -0.05, reservasNetasBCRA: +50 }
        },
        {
          texto: "Austeridad total en automovilismo: cero fondos públicos a carreras de autos y redirigir partidas a transporte público y salud.",
          impacto12Axes: { federalismo: 50, comercio: 40, estatismo: 40, geopolitica: 60 },
          impactoSectores: { trabajo: 20, productivo: -20, claseMedia: -5, estadoCiencia: 15, seguridadJusticia: -5, frenteExterno: -15 },
          impactoMacro: { resultadoFiscalPBI: +0.1 }
        }
      ]
    },

    // 10. POLIDEPORTIVO: BÁSQUET, HOCKEY, TENIS, POLO
    {
      id: "pres_polideportivo_federal",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Desarrollo Polideportivo & Deporte Comunitario",
      titulo: "Distribución del Fondo Nacional del Deporte: ¿Básquet, Hockey, Tenis o Polo?",
      descripcion: "Llega al Poder Ejecutivo la partida presupuestaria deportiva. La Confederación Argentina de Basquetbol (CABB) pide subsidiar traslados de la Liga Federal; la Confederación Argentina de Hockey (CAH) pide canchas sintéticas públicas; la Asociación Argentina de Tenis (AAT) becas juveniles; y la Asociación Argentina de Polo (AAP) facilidades para exportar caballos de alta competencia.",
      explicacion: {
        queMide: "Eje Estatismo (Gasto social inclusivo vs. Libre autofinanciamiento) y Federalismo.",
        siDeAcuerdo: "Priorizar el básquet barrial, el hockey social y el tenis público para sacar a los jóvenes de la calle.",
        siEnContra: "Facilitar el negocio de exportación y dejar que los deportes se autosustenten."
      },
      opciones: [
        {
          texto: "Priorizar al básquetbol federal (CABB) y el hockey comunitario (CAH): construir canchas y parqués municipales en barrios vulnerables.",
          impacto12Axes: { estatismo: 20, federalismo: 20, regulacion: 35, valores: 30 },
          impactoSectores: { trabajo: 25, productivo: -15, claseMedia: 15, estadoCiencia: 15, seguridadJusticia: 5, frenteExterno: -10 },
          impactoMacro: { resultadoFiscalPBI: -0.08 }
        },
        {
          texto: "Plan de equilibrio: fondo rotatorio para la Liga Federal de Básquet, torneos AAT y desgravación impositiva para la exportación de caballos de polo.",
          impacto12Axes: { estatismo: 55, federalismo: 40, regulacion: 55, comercio: 65 },
          impactoSectores: { trabajo: 10, productivo: 20, claseMedia: 15, estadoCiencia: 10, seguridadJusticia: 5, frenteExterno: 15 },
          impactoMacro: { resultadoFiscalPBI: -0.04, reservasNetasBCRA: +50 }
        },
        {
          texto: "Retiro total del Estado: que cada federación se autofinancie con derechos de televisación, cuotas y sponsors privados.",
          impacto12Axes: { estatismo: 85, federalismo: 60, regulacion: 85, comercio: 85 },
          impactoSectores: { trabajo: -20, productivo: 25, claseMedia: -5, estadoCiencia: -20, seguridadJusticia: 5, frenteExterno: 25 },
          impactoMacro: { resultadoFiscalPBI: +0.08 }
        }
      ]
    },

    // 11. PAUTA OFICIAL Y MEDIOS
    {
      id: "pres_medios_streaming",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Comunicación, Pauta Oficial & Batalla Cultural",
      titulo: "¿Pauta Oficial cero y cierre de la Televisión Pública o sostenimiento de los medios tradicionales?",
      descripcion: "Cadenas de televisión tradicionales (Telefe, El Trece, América TV, C5N, TN, LN+ y Canal 9) reclaman pauta oficial para sostener el empleo de periodistas y camarógrafos, mientras se debate el futuro de la Televisión Pública. Al mismo tiempo, canales de streaming (Olga, Luzu TV, Blender, Vorterix, AZZ) ganan audiencias masivas.",
      explicacion: {
        queMide: "Eje Estatismo y Regulación (Pauta estatal y medios públicos vs. Cero subsidio y mercado libre de audiencias).",
        siDeAcuerdo: "Fin del financiamiento con dinero público; que cada medio compita por su audiencia privada.",
        siEnContra: "La pauta publicitaria democrática y la Televisión Pública garantizan pluralismo y llegan donde el streaming privado no llega."
      },
      opciones: [
        {
          id: "pauta_cero",
          texto: "Cero pauta oficial del Estado, privatizar o cerrar la Televisión Pública y trasladar la comunicación presidencial a canales digitales abiertos.",
          setFlags: { politica_medios: "pauta_cero" },
          impacto12Axes: { estatismo: 90, regulacion: 90, comercio: 80, institucionalidad: 50 },
          impactoSectores: { trabajo: -20, productivo: 20, claseMedia: 10, estadoCiencia: -25, seguridadJusticia: 10, frenteExterno: 25 },
          impactoMacro: { resultadoFiscalPBI: +0.15, riesgoPais: -20 }
        },
        {
          id: "pauta_transparente",
          texto: "Mantener la Televisión Pública con perfil cultural/federal y regular la pauta por ley auditada según rating comprobado.",
          setFlags: { politica_medios: "regulada" },
          impacto12Axes: { estatismo: 50, regulacion: 50, comercio: 50, institucionalidad: 25 },
          impactoSectores: { trabajo: 10, productivo: 5, claseMedia: 15, estadoCiencia: 15, seguridadJusticia: 0, frenteExterno: 5 },
          impactoMacro: { resultadoFiscalPBI: -0.05 }
        },
        {
          id: "pauta_fuerte_estatal",
          texto: "Fortalecer a los medios públicos (TV Pública, Radio Nacional) y pauta estratégica para blindar la soberanía informativa frente a las corporaciones.",
          setFlags: { politica_medios: "estatal_fuerte" },
          impacto12Axes: { estatismo: 10, regulacion: 15, comercio: 25, institucionalidad: 65 },
          impactoSectores: { trabajo: 20, productivo: -20, claseMedia: -10, estadoCiencia: 25, seguridadJusticia: -5, frenteExterno: -20 },
          impactoMacro: { resultadoFiscalPBI: -0.2, riesgoPais: +30 }
        }
      ]
    },

    // 12. SEGURIDAD EN CLÁSICOS (CORREGIDO ERROR HISTÓRICO DE GIMNASIA VS BOCA 2022)
    {
      id: "pres_clasicos_disturbios",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Seguridad Pública & Grandes Clásicos",
      titulo: "Fin de semana de Clásicos al rojo vivo: ¿Público visitante, mano dura o suspensión?",
      descripcion: "Se aproxima una fecha histórica con duelos de máxima tensión: el Superclásico (Boca Juniors vs. River Plate), el Clásico Rosarino (Rosario Central vs. Newell's), el Clásico de Avellaneda (Racing vs. Independiente), el Clásico Cordobés (Talleres vs. Belgrano) y el Clásico Platense (Estudiantes vs. Gimnasia). Informes de inteligencia alertan sobre emboscadas de barras bravas y riesgo de desborde policial en accesos.",
      explicacion: {
        queMide: "Eje Seguridad (Mano dura punitiva en espectáculos vs. Folclore y prevención comunitaria).",
        siDeAcuerdo: "Prohibir visitantes, control biométrico estricto y militarizar los accesos a los estadios.",
        siEnContra: "El fútbol es la mayor fiesta popular; la solución es la depuración policial y la inteligencia contra el crimen organizado."
      },
      opciones: [
        {
          id: "militarizacion_total",
          texto: "Tolerancia cero: desplegar a las Fuerzas Federales, aplicar derecho de admisión biométrico estricto y procesar penalmente a dirigentes vinculados a barras.",
          setFlags: { seguridad_clasicos: "militarizado" },
          impacto12Axes: { seguridad: 10, institucionalidad: 45, valores: 70 },
          impactoSectores: { trabajo: -20, productivo: 20, claseMedia: 20, estadoCiencia: -5, seguridadJusticia: 35, frenteExterno: 15 },
          impactoMacro: { riesgoPais: -15 }
        },
        {
          id: "vuelta_visitantes_control",
          texto: "Vuelven los hinchas visitantes a todas las canchas con financiamiento de seguridad a cargo de los clubes: devolver el folclore de ambas hinchadas.",
          setFlags: { seguridad_clasicos: "visitantes_libres" },
          impacto12Axes: { seguridad: 75, institucionalidad: 55, valores: 35 },
          impactoSectores: { trabajo: 25, productivo: 10, claseMedia: -10, estadoCiencia: 10, seguridadJusticia: -25, frenteExterno: -5 },
          impactoMacro: { riesgoPais: +10 }
        },
        {
          id: "suspension_preventiva",
          texto: "Exigir jugar los clásicos de máxima peligrosidad (Rosarino y Superclásico) a puertas cerradas o en estadios neutrales sin hinchadas.",
          setFlags: { seguridad_clasicos: "puertas_cerradas" },
          impacto12Axes: { seguridad: 30, institucionalidad: 40, valores: 55 },
          impactoSectores: { trabajo: -30, productivo: -20, claseMedia: 5, estadoCiencia: -5, seguridadJusticia: 15, frenteExterno: -10 },
          impactoMacro: { riesgoPais: 0 }
        }
      ]
    },

    // CONSECUENCIA CLÁSICOS
    {
      id: "pres_clasicos_consecuencia",
      etapaBadge: "Fase 3: Suceso Derivado",
      area: "Consecuencias en las Calles y Tribunales",
      titulo: "El día después del clásico más caliente",
      requiereFlag: "seguridad_clasicos",
      generarContextoDinamico: function(flags) {
        if (flags.seguridad_clasicos === "visitantes_libres") {
          return {
            titulo: "Batalla campal en los accesos y escándalo mediático",
            desc: "La vuelta de visitantes terminó en graves disturbios: choques en estaciones de tren y una emboscada con heridos en la previa del clásico. La oposición exige interpelar a las autoridades de seguridad.",
            explicacion: {
              queMide: "Eje Seguridad e Institucionalidad.",
              siDeAcuerdo: "Clausurar estadios por tiempo indeterminado y quitar puntos a los clubes involucrados.",
              siEnContra: "Asumir la falla operativa policial y no castigar a las instituciones sociales."
            },
            opciones: [
              {
                texto: "Clausura inmediata de estadios por 5 fechas y quita de 6 puntos a los clubes que albergaron barras.",
                impacto12Axes: { seguridad: 15, institucionalidad: 45 },
                impactoSectores: { trabajo: -25, productivo: 10, claseMedia: 15, estadoCiencia: 5, seguridadJusticia: 30, frenteExterno: 10 }
              },
              {
                texto: "Reestructurar la cúpula policial responsable del operativo y mantener los estadios abiertos a los socios.",
                impacto12Axes: { seguridad: 65, institucionalidad: 30 },
                impactoSectores: { trabajo: 15, productivo: 5, claseMedia: 5, estadoCiencia: 10, seguridadJusticia: -15, frenteExterno: 0 }
              }
            ]
          };
        } else if (flags.seguridad_clasicos === "militarizado") {
          return {
            titulo: "Cero incidentes graves, pero quejas por demoras y estado policial",
            desc: "El megaoperativo evitó muertes, pero miles de familias debieron esperar tres horas bajo el sol por los retenes biométricos masivos.",
            explicacion: {
              queMide: "Eje Seguridad vs. Libertades civiles.",
              siDeAcuerdo: "El orden y la vida valen más que 2 horas de fila.",
              siEnContra: "Modernizar la tecnología para no tratar a los hinchas genuinos como sospechosos."
            },
            opciones: [
              {
                texto: "Mantener el protocolo estricto: la paz social y la vida no se negocian ante el delito.",
                impacto12Axes: { seguridad: 10, institucionalidad: 55 },
                impactoSectores: { trabajo: -10, productivo: 20, claseMedia: 15, estadoCiencia: 0, seguridadJusticia: 30, frenteExterno: 15 }
              },
              {
                texto: "Agilizar los ingresos con lectores faciales automáticos en molinetes para no perjudicar a las familias.",
                impacto12Axes: { seguridad: 45, institucionalidad: 35 },
                impactoSectores: { trabajo: 10, productivo: 15, claseMedia: 20, estadoCiencia: 15, seguridadJusticia: 10, frenteExterno: 10 }
              }
            ]
          };
        } else {
          return {
            titulo: "Furia de socios en las sedes por jugar a puertas cerradas",
            desc: "Miles de socios protestan en las sedes reclamando por la cuota social que pagan todos los meses sin poder entrar a alentar.",
            explicacion: {
              queMide: "Eje Seguridad y Derechos societarios.",
              siDeAcuerdo: "La seguridad pública está por encima de los intereses de los clubes.",
              siEnContra: "Dar marcha atrás y devolver el ingreso a los abonados y socios al día."
            },
            opciones: [
              {
                texto: "Reabrir los estadios para la próxima fecha exclusivamente para socios al día sin venta de generales.",
                impacto12Axes: { seguridad: 50, institucionalidad: 35 },
                impactoSectores: { trabajo: 20, productivo: 10, claseMedia: 20, estadoCiencia: 5, seguridadJusticia: 5, frenteExterno: 5 }
              },
              {
                texto: "Ratificar la sanción: hasta que los clubes no entreguen la lista de barras a la Justicia no vuelve el público.",
                impacto12Axes: { seguridad: 15, institucionalidad: 55 },
                impactoSectores: { trabajo: -20, productivo: -10, claseMedia: 5, estadoCiencia: -5, seguridadJusticia: 25, frenteExterno: 0 }
              }
            ]
          };
        }
      }
    },

    // 13. TELECOMUNICACIONES, STREAMING & PLATAFORMAS GLOBALES
    {
      id: "pres_telecom_streaming",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Economía Digital, Telecomunicaciones & Multinacionales",
      titulo: "¿Regulación de tarifas de Cable e Internet o libre mercado para atraer gigantes tecnológicos?",
      descripcion: "Cableoperadores (Flow, DirecTV, Telecentro) y señales deportivas (TyC Sports, ESPN, TNT Sports) reclaman libertad tarifaria y baja de impuestos a plataformas globales (Netflix, Disney+, Max, Spotify). Multinacionales y empresas tecnológicas exigen desregulación, mientras asociaciones de usuarios denuncian aumentos desmedidos en hogares.",
      explicacion: {
        queMide: "Eje Regulación (Servicio público esencial vs. Libre competencia de mercado) y Eje Estatismo.",
        siDeAcuerdo: "Atraer inversiones en fibra óptica 5G y tecnología sin asfixiar a las empresas privadas.",
        siEnContra: "Garantizar que el acceso a internet, la cultura y el entretenimiento sean asequibles a todas las familias."
      },
      opciones: [
        {
          texto: "Desregulación total de tarifas: eliminar el carácter de servicio público, dar libre disponibilidad de dólares y quitar trabas a plataformas de streaming.",
          impacto12Axes: { regulacion: 90, estatismo: 90, comercio: 90, geopolitica: 15 },
          impactoSectores: { trabajo: -20, productivo: 35, claseMedia: -10, estadoCiencia: -15, seguridadJusticia: 5, frenteExterno: 35 },
          impactoMacro: { riesgoPais: -60, reservasNetasBCRA: +300, inflacionMensual: +0.4 }
        },
        {
          texto: "Esquema de tarifa social obligatoria: exigir a Flow, Telecentro y DirecTV un abono básico universal accesible, liberando los planes premium y corporativos.",
          impacto12Axes: { regulacion: 50, estatismo: 55, comercio: 60, geopolitica: 45 },
          impactoSectores: { trabajo: 15, productivo: 10, claseMedia: 20, estadoCiencia: 10, seguridadJusticia: 5, frenteExterno: 10 },
          impactoMacro: { riesgoPais: -10, resultadoFiscalPBI: 0 }
        },
        {
          texto: "Intervenir el mercado: declarar internet y cable como servicio público esencial no negociable, congelar tarifas y crear una plataforma estatal alternativa de streaming gratuito.",
          impacto12Axes: { regulacion: 10, estatismo: 15, comercio: 20, geopolitica: 80 },
          impactoSectores: { trabajo: 25, productivo: -30, claseMedia: 10, estadoCiencia: 25, seguridadJusticia: -5, frenteExterno: -35 },
          impactoMacro: { riesgoPais: +90, reservasNetasBCRA: -250, resultadoFiscalPBI: -0.2 }
        }
      ]
    },

    // 14. UNIVERSIDADES PÚBLICAS Y MARCHA FEDERAL
    // PARITARIAS DOCENTES Y EL INICIO DEL CICLO LECTIVO (QUILOMBO INSTITUCIONAL)
    {
      id: "pres_paritarias_docentes",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Educación Básica, Paritarias & Presupuesto Federal",
      titulo: "Paritarias Docentes y el inicio del ciclo lectivo",
      descripcion: "A una semana de la fecha oficial para que arranquen las clases, la confederación de gremios docentes (CTERA) rechaza la oferta salarial del 12% escalonado y anuncia un paro nacional de 72 horas con movilización si no se restituye el Fondo Nacional de Incentivo Docente (FONID).",
      explicacion: {
        queMide: "Eje Estatismo (Gasto docente y coparticipación vs. Ajuste fiscal) y Eje Institucionalidad (Declarar esencialidad vs. Derecho a huelga).",
        siDeAcuerdo: "La educación no puede interrumpirse; los días de clase perdidos hipotecan el futuro de los chicos.",
        siEnContra: "Sin salarios dignos ni fondos federales no hay educación de calidad; el derecho a huelga es innegociable."
      },
      opciones: [
        {
          id: "pagar_docentes_fonid",
          texto: "Pagar lo que piden y transferir fondos docentes del FONID a las provincias: Reabrir la paritaria docente, girar partidas extraordinarias y garantizar clases en fecha.",
          impacto12Axes: { estatismo: 15, regulacion: 30, federalismo: 25, valores: 30 },
          impactoSectores: { trabajo: 30, productivo: -20, claseMedia: 15, estadoCiencia: 25, seguridadJusticia: -5 },
          impactoMacro: { resultadoFiscalPBI: -0.3, inflacionMensual: +0.2, riesgoPais: +40 }
        },
        {
          id: "educacion_servicio_esencial",
          texto: "Declarar la educación como servicio público esencial no interrumpible: Prohibir el paro por decreto o ley exprés, obligando al 75% de las guardias docentes en las aulas bajo apercibimiento de descuento y quita de personería gremial.",
          impacto12Axes: { estatismo: 85, regulacion: 80, seguridad: 25, institucionalidad: 60 },
          impactoSectores: { trabajo: -35, productivo: 20, claseMedia: 20, estadoCiencia: -30, seguridadJusticia: 25 },
          impactoMacro: { resultadoFiscalPBI: +0.2, riesgoPais: -30 }
        },
        {
          id: "plus_presentismo_docente",
          texto: "Puntaje extra y plus salarial por presentismo estricto: No negociar con la cúpula sindical y depositar directamente un bono por día trabajado en la cuenta de cada maestro que no adhiera a la medida de fuerza.",
          impacto12Axes: { estatismo: 60, regulacion: 65, institucionalidad: 45, valores: 60 },
          impactoSectores: { trabajo: -10, productivo: 10, claseMedia: 10, estadoCiencia: -5, seguridadJusticia: 10 },
          impactoMacro: { resultadoFiscalPBI: -0.1, riesgoPais: -10 }
        }
      ]
    },

    // EL CONFLICTO UNIVERSITARIO: ARANCELES, AUDITORÍAS Y EXTRANJEROS (QUILOMBO INSTITUCIONAL)
    {
      id: "pres_marcha_universidades",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Educación Superior, Ciencia & Movilización Social",
      titulo: "El conflicto universitario: Aranceles, auditorías y extranjeros",
      descripcion: "Las universidades públicas nacionales se declaran en cesación de pagos por las facturas de luz, gas e insumos de laboratorios. La Federación Universitaria convoca a una Marcha Federal Universitaria a Plaza de Mayo. Sectores oficialistas proponen empezar a cobrar aranceles a estudiantes extranjeros no residentes o cobrarle una matrícula a quienes tarden más del doble de la carrera en recibirse.",
      explicacion: {
        queMide: "Eje Estatismo y Educación Pública (Ascenso social y gratuidad vs. Control fiscal y auditorías).",
        siDeAcuerdo: "El presupuesto universitario debe auditarse exhaustivamente; no puede haber privilegios corporativos sin rendición de cuentas.",
        siEnContra: "La educación pública gratuita es la columna vertebral del desarrollo argentino y orgullo de la clase media."
      },
      opciones: [
        {
          id: "arancel_extranjeros_auditoria",
          texto: "Arancelamiento a extranjeros y estudiantes crónicos + Auditoría integral: Decretar que extranjeros sin residencia permanente paguen cuota mensual y cobrar tasa por rematriculación a quienes aprueben menos de 2 materias por año.",
          impacto12Axes: { estatismo: 85, regulacion: 85, inmigracion: 15, valores: 70 },
          impactoSectores: { estadoCiencia: -45, claseMedia: -25, trabajo: -20, productivo: 25, seguridadJusticia: 20, frenteExterno: 15 },
          impactoMacro: { resultadoFiscalPBI: +0.3, riesgoPais: -30 }
        },
        {
          id: "actualizacion_automatica_ipc",
          texto: "Actualización presupuestaria automática por inflación: Ceder de inmediato al reclamo de rectores y transferir todas las partidas de gastos de funcionamiento y salarios docentes atados al IPC.",
          impacto12Axes: { estatismo: 15, regulacion: 25, institucionalidad: 20, valores: 20 },
          impactoSectores: { estadoCiencia: 45, claseMedia: 35, trabajo: 20, productivo: -20, seguridadJusticia: -10, frenteExterno: -15 },
          impactoMacro: { resultadoFiscalPBI: -0.4, inflacionMensual: +0.3, riesgoPais: +50 }
        },
        {
          id: "giro_condicionado_sigen",
          texto: "Giro condicionado a auditoría previa de la SIGEN/AGN: Aceptar transferir los fondos mes a mes, pero exigiendo la presencia permanente de inspectores del Tesoro en cada facultad para auditar cada designación y factura.",
          impacto12Axes: { estatismo: 50, regulacion: 50, institucionalidad: 30, valores: 45 },
          impactoSectores: { estadoCiencia: 10, claseMedia: 15, productivo: 10, trabajo: 5, seguridadJusticia: 10, frenteExterno: 5 },
          impactoMacro: { resultadoFiscalPBI: -0.1, riesgoPais: -10 }
        }
      ]
    },

    // 15. ASISTENCIA SOCIAL, PIQUETES Y TRIBUNALES
    {
      id: "pres_planes_sociales_justicia",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Asistencia Social, Poder Judicial & Movimientos Sociales",
      titulo: "¿Quitar intermediarios piqueteros o aumentar el Salario Mínimo frente a las marchas?",
      descripcion: "Causas en los tribunales federales investigan extorsiones de dirigentes piqueteros a beneficiarios de planes sociales. Dirigentes amenazan con cortes en la Avenida 9 de Julio exigiendo duplicar el Salario Mínimo, Vital y Móvil (SMVM).",
      explicacion: {
        queMide: "Eje Seguridad (Orden público y judicialización de intermediarios) y Eje Estatismo (Gasto social directo vs. Austeridad).",
        siDeAcuerdo: "Empoderar a la gente eliminando a los intermediarios y judicializar la extorsión en la calle.",
        siEnContra: "Los comedores comunitarios contienen el hambre de millones; no se puede recortar en plena recesión."
      },
      opciones: [
        {
          texto: "Eliminar a todos los intermediarios piqueteros, bancarizar el 100% de la ayuda directo a las madres de familia y denunciar extorsiones en tribunales.",
          impacto12Axes: { estatismo: 50, regulacion: 60, seguridad: 20, institucionalidad: 30 },
          impactoSectores: { trabajo: -15, productivo: 25, claseMedia: 25, estadoCiencia: -5, seguridadJusticia: 35, frenteExterno: 20 },
          impactoMacro: { resultadoFiscalPBI: +0.2, riesgoPais: -40, pobreza: -0.2 }
        },
        {
          texto: "Convocar al Consejo del Salario, acordar un aumento escalonado del SMVM y subsidiar directamente a los comedores barriales comunitarios.",
          impacto12Axes: { estatismo: 25, regulacion: 25, seguridad: 65, institucionalidad: 40 },
          impactoSectores: { trabajo: 30, productivo: -20, claseMedia: 10, estadoCiencia: 15, seguridadJusticia: -10, frenteExterno: -15 },
          impactoMacro: { resultadoFiscalPBI: -0.2, inflacionMensual: +0.4, pobreza: -0.6 }
        },
        {
          texto: "Corte total de planes a quienes bloqueen calles y despejar con camiones hidrantes: el derecho a circular es sagrado.",
          impacto12Axes: { estatismo: 80, regulacion: 85, seguridad: 5, institucionalidad: 60 },
          impactoSectores: { trabajo: -35, productivo: 30, claseMedia: 15, estadoCiencia: -20, seguridadJusticia: 40, frenteExterno: 25 },
          impactoMacro: { resultadoFiscalPBI: +0.3, riesgoPais: -30 }
        }
      ]
    },

    // 16. NARCOTRÁFICO EN ROSARIO
    {
      id: "pres_rosario_narcotrafico",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Seguridad Interior & Crimen Organizado",
      titulo: "Emergencia en Rosario: ¿Intervención con las Fuerzas Armadas o Comando de Fuerzas Federales?",
      descripcion: "Ataques armados del narcotráfico contra civiles y colectiveros paralizan Rosario. Sectores reclaman modificar la Ley de Seguridad Interior para que el Ejército patrulle los barrios calientes, mientras juristas alertan sobre la militarización.",
      explicacion: {
        queMide: "Eje Seguridad (Punitivismo militarizado vs. Institucionalidad democrática y prevención civil).",
        siDeAcuerdo: "Ante el terrorismo narco no hay lugar para tibiezas; las Fuerzas Armadas deben recuperar el territorio.",
        siEnContra: "El Ejército debe dedicarse a la defensa exterior; usarlos internamente viola la ley y desprofesionaliza a las fuerzas."
      },
      opciones: [
        {
          texto: "Enviar proyecto urgente al Congreso para reformar la Ley de Seguridad Interior y desplegar tropas del Ejército Argentino en barrios calientes.",
          impacto12Axes: { seguridad: 10, defensa: 20, institucionalidad: 60, federalismo: 60 },
          impactoSectores: { trabajo: -20, productivo: 20, claseMedia: 20, estadoCiencia: -10, seguridadJusticia: 40, frenteExterno: 15 },
          impactoMacro: { riesgoPais: -20 }
        },
        {
          texto: "Desplegar un megaoperativo de Fuerzas Federales (Gendarmería y Prefectura), aislar penitenciarios corruptos en cárceles y nombrar jueces de choque.",
          impacto12Axes: { seguridad: 30, defensa: 50, institucionalidad: 25, federalismo: 35 },
          impactoSectores: { trabajo: 5, productivo: 15, claseMedia: 25, estadoCiencia: 10, seguridadJusticia: 30, frenteExterno: 15 },
          impactoMacro: { riesgoPais: -30 }
        },
        {
          texto: "Abordaje social y financiero: urbanización de villas, centros de adicciones y rastreo de lavado de dinero en financieras del microcentro.",
          impacto12Axes: { seguridad: 75, defensa: 80, institucionalidad: 30, estatismo: 30 },
          impactoSectores: { trabajo: 25, productivo: -15, claseMedia: 10, estadoCiencia: 25, seguridadJusticia: -10, frenteExterno: -5 },
          impactoMacro: { resultadoFiscalPBI: -0.15, riesgoPais: +10 }
        }
      ]
    },

    // 17. FEDERALISMO FISCAL Y CUASIMONEDAS
    {
      id: "pres_federalismo_cuasimonedas",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Federalismo Fiscal, Coparticipación & Cuasimonedas",
      titulo: "Rebelión de los Gobernadores: ¿Retención de fondos y Cuasimonedas provinciales o Pacto Fiscal?",
      descripcion: "El Ministerio de Economía retiene transferencias discrecionales a las provincias para lograr superávit. En respuesta, un bloque de gobernadores amenaza con emitir cuasimonedas y retener petróleo y gas federal.",
      explicacion: {
        queMide: "Eje Federalismo (Centralismo de la Rosada vs. Autonomía provincial) y Eje Estatismo.",
        siDeAcuerdo: "La Nación no puede ceder ante el déficit crónico de feudos provinciales; el equilibrio fiscal manda.",
        siEnContra: "Las provincias generan los recursos del país; asfixiarlas viola el pacto fundacional federal."
      },
      opciones: [
        {
          texto: "Firmeza total: cero fondos discrecionales, impugnar judicialmente cuasimonedas y descontar deudas con fondos coparticipables.",
          impacto12Axes: { federalismo: 85, estatismo: 75, regulacion: 80, institucionalidad: 50 },
          impactoSectores: { trabajo: -20, productivo: 25, claseMedia: 10, estadoCiencia: -20, seguridadJusticia: 20, frenteExterno: 25 },
          impactoMacro: { resultadoFiscalPBI: +0.4, riesgoPais: -50 }
        },
        {
          texto: "Convocar a un Pacto Fiscal Federal: destrabar partidas coparticipables a cambio de auditorías provinciales y baja de Ingresos Brutos.",
          impacto12Axes: { federalismo: 40, estatismo: 55, regulacion: 60, institucionalidad: 20 },
          impactoSectores: { trabajo: 10, productivo: 20, claseMedia: 20, estadoCiencia: 10, seguridadJusticia: 10, frenteExterno: 15 },
          impactoMacro: { resultadoFiscalPBI: +0.1, riesgoPais: -30 }
        },
        {
          texto: "Ceder y transferir las partidas reclamadas con obras públicas para asegurar los votos de los senadores provinciales en el Congreso.",
          impacto12Axes: { federalismo: 10, estatismo: 25, regulacion: 35, institucionalidad: 55 },
          impactoSectores: { trabajo: 20, productivo: -20, claseMedia: -10, estadoCiencia: 15, seguridadJusticia: -5, frenteExterno: -20 },
          impactoMacro: { resultadoFiscalPBI: -0.4, riesgoPais: +80, inflacionMensual: +0.5 }
        }
      ]
    },

    // 18. ENERGÍA Y VACA MUERTA
    {
      id: "pres_energia_vaca_muerta",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Matriz Energética, Vaca Muerta & Tarifas del AMBA",
      titulo: "La Disputa por Vaca Muerta: ¿Tarifas dolarizadas de exportación o 'Barril Criollo' subsidiado?",
      descripcion: "Récord de producción en Vaca Muerta. Petroleras reclaman dolarizar tarifas y eliminar subsidios para exportar GNL a gran escala. Sin embargo, tarifazos del 300% en las facturas de luz y gas provocan quejas en la clase media e industrias.",
      explicacion: {
        queMide: "Eje Estatismo y Regulación (Precios internacionales desregulados vs. Subsidio y soberanía en pesos).",
        siDeAcuerdo: "Pagar el costo real de la energía garantiza autoabastecimiento, fin de cortes de luz e inversiones masivas.",
        siEnContra: "La energía de Vaca Muerta es de los argentinos; debe abastecer primero a las familias y fábricas a precios accesibles."
      },
      opciones: [
        {
          texto: "Dolarización plena de tarifas: precios internacionales de libre mercado para que las petroleras inviertan y exporten gas al mundo.",
          impacto12Axes: { estatismo: 85, regulacion: 90, comercio: 90, ambiente: 20 },
          impactoSectores: { trabajo: -25, productivo: 35, claseMedia: -15, estadoCiencia: -15, seguridadJusticia: 5, frenteExterno: 35 },
          impactoMacro: { resultadoFiscalPBI: +0.5, reservasNetasBCRA: +1500, riesgoPais: -110, inflacionMensual: +1.6, pobreza: +0.6 }
        },
        {
          texto: "Tarifa pesificada 'Barril Criollo': congelar tarifas para familias y pymes, exigiendo a petroleras abastecer al mercado local a bajo costo antes de exportar.",
          impacto12Axes: { estatismo: 15, regulacion: 10, comercio: 20, ambiente: 45 },
          impactoSectores: { trabajo: 30, productivo: -25, claseMedia: 15, estadoCiencia: 20, seguridadJusticia: -5, frenteExterno: -30 },
          impactoMacro: { resultadoFiscalPBI: -0.5, reservasNetasBCRA: -400, riesgoPais: +120, inflacionMensual: -0.5 }
        },
        {
          texto: "Segmentación rigurosa: tarifa social subsidiada para sectores vulnerables y clase media baja, y tarifa plena sin subsidio para grandes industrias y countries.",
          impacto12Axes: { estatismo: 50, regulacion: 50, comercio: 55, ambiente: 35 },
          impactoSectores: { trabajo: 10, productivo: 15, claseMedia: 20, estadoCiencia: 10, seguridadJusticia: 5, frenteExterno: 10 },
          impactoMacro: { resultadoFiscalPBI: +0.1, riesgoPais: -30, reservasNetasBCRA: +300 }
        }
      ]
    },
    // VENTA DE TIERRAS RURALES A EXTRANJEROS VS. SOBERANÍA DE RECURSOS (QUILOMBO INSTITUCIONAL)
    {
      id: "pres_tierras_patagonia_extranjeros",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Soberanía Territorial, Recursos Naturales & Geopolítica",
      titulo: "Venta de tierras rurales a extranjeros vs. Soberanía de recursos",
      descripcion: "Un multimillonario extranjero del rubro tecnológico ofrece comprar 150.000 hectáreas en la Patagonia cordillerana con glaciares, nacientes de ríos y reservas de agua dulce para desarrollar un proyecto ecológico privado y un centro de investigación espacial. La Ley de Tierras vigente impide la operación por superar los límites de zona de frontera.",
      explicacion: {
        queMide: "Eje Geopolítica (Occidente/Inversión extranjera vs. Soberanía nacional) y Eje Ambiente (Propiedad privada vs. Bienes comunes del Estado).",
        siDeAcuerdo: "La llegada de divisas e inversión tecnológica internacional reactiva zonas despobladas y atrae al mundo.",
        siEnContra: "El agua dulce, glaciares y zonas de frontera son estratégicos para la seguridad y no pueden enajenarse a extranjeros."
      },
      opciones: [
        {
          id: "derogar_ley_tierras_dnu",
          texto: "Derogar restricciones de la Ley de Tierras por DNU y autorizar la venta en la Patagonia a cambio de 500 millones de dólares de inversión.",
          impacto12Axes: { geopolitica: 15, comercio: 90, estatismo: 85, ambiente: 20, defensa: 30 },
          impactoSectores: { frenteExterno: 35, productivo: 30, trabajo: -15, claseMedia: -10, estadoCiencia: -20, seguridadJusticia: -15 },
          impactoMacro: { reservasNetasBCRA: +500, riesgoPais: -80, resultadoFiscalPBI: +0.1 }
        },
        {
          id: "rechazar_expropiar_parque",
          texto: "Rechazar la oferta y expropiar las tierras adyacentes para Parque Nacional: Denegar la autorización y blindar toda la cuenca hídrica bajo protección estricta del Estado.",
          impacto12Axes: { geopolitica: 85, comercio: 15, estatismo: 15, ambiente: 90, defensa: 85 },
          impactoSectores: { frenteExterno: -35, productivo: -25, trabajo: 15, claseMedia: 10, estadoCiencia: 30, seguridadJusticia: 15 },
          impactoMacro: { reservasNetasBCRA: -100, riesgoPais: +90, resultadoFiscalPBI: -0.1 }
        },
        {
          id: "concesion_temporal_investigacion",
          texto: "Esquema de concesión temporal de uso sin transferencia de dominio: Rechazar la venta de la tierra pero otorgar una concesión a 30 años exclusivamente para investigación científica bajo supervisión de Parques Nacionales.",
          impacto12Axes: { geopolitica: 50, comercio: 50, estatismo: 50, ambiente: 45, defensa: 55 },
          impactoSectores: { frenteExterno: 10, productivo: 15, trabajo: 5, claseMedia: 5, estadoCiencia: 15, seguridadJusticia: 5 },
          impactoMacro: { reservasNetasBCRA: +150, riesgoPais: -20, resultadoFiscalPBI: 0 }
        }
      ]
    },

    // ========================================================
    // PUNTO 6: MARCAS, EMPRESAS Y PLATAFORMAS (LOBBIES Y CONSUMO)
    // ========================================================
    {
      id: "pres_apagon_verano_tarifas",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Crisis de Servicios Públicos, Energía & Tarifas",
      titulo: "Guerra Total: El Apagón del Verano y el Dólar Tarjeta",
      descripcion: "Una ola de calor de 41 grados azota la Capital y el Gran Buenos Aires durante cinco días seguidos. Edesur y Edenor colapsan: hay 400.000 usuarios sin luz, el agua no sube a los tanques y los vecinos cortan la Autopista Dellepiane y la General Paz quemando colchones. Al mismo tiempo, las plataformas de streaming y las empresas de telecomunicaciones anuncian un tarifazo del 40% retroactivo al mes anterior.",
      explicacion: {
        queMide: "Eje Estatismo y Regulación (Intervención de servicios públicos vs. Desregulación y mercado).",
        siDeAcuerdo: "El Estado debe intervenir las distribuidoras, congelar tarifas y garantizar el suministro básico como derecho humano.",
        siEnContra: "Los cortes son consecuencia de años de tarifas congeladas; solo la rentabilidad y cuadrillas privadas devolverán la inversión."
      },
      opciones: [
        {
          id: "intervencion_distribuidoras",
          texto: "Intervención de emergencia a las distribuidoras y congelamiento de tarifas: El Estado asume el control operativo de Edesur y Edenor, suspende aumentos de telecomunicaciones y streaming y envía cuadrillas públicas.",
          setFlags: { apagon_gestion: "intervencion" },
          impacto12Axes: { estatismo: 15, regulacion: 10, comercio: 20, institucionalidad: 35 },
          impactoSectores: { trabajo: 25, productivo: -20, claseMedia: 25, estadoCiencia: 10, seguridadJusticia: -10, frenteExterno: -25 },
          impactoMacro: { riesgoPais: +85, resultadoFiscalPBI: -0.2, inflacionMensual: -0.4 }
        },
        {
          id: "sancion_subsidio_directo",
          texto: "Sanción económica masiva y subsidio directo en la factura al usuario: Multar a las concesionarias con cifras récord y aplicar un bono de compensación en la boleta financiado por el Tesoro.",
          setFlags: { apagon_gestion: "multa_bono" },
          impacto12Axes: { estatismo: 45, regulacion: 40, comercio: 45, institucionalidad: 55 },
          impactoSectores: { trabajo: 10, productivo: 5, claseMedia: 20, estadoCiencia: -5, seguridadJusticia: 10, frenteExterno: 0 },
          impactoMacro: { riesgoPais: +20, resultadoFiscalPBI: -0.3, inflacionMensual: 0.1 }
        },
        {
          id: "desregulacion_cuadrillas_privadas",
          texto: "Desregulación plena y libre contratación de cuadrillas privadas: Convalidar la suba de tarifas para fondear inversiones y autorizar a consorcios y municipios a contratar servicio técnico privado independiente.",
          setFlags: { apagon_gestion: "mercado_libre" },
          impacto12Axes: { estatismo: 85, regulacion: 90, comercio: 85, institucionalidad: 60 },
          impactoSectores: { trabajo: -20, productivo: 30, claseMedia: -25, estadoCiencia: -10, seguridadJusticia: 10, frenteExterno: 25 },
          impactoMacro: { riesgoPais: -65, resultadoFiscalPBI: +0.2, inflacionMensual: +1.2 }
        }
      ]
    },

    {
      id: "pres_guerra_fintech_modo",
      etapaBadge: "Fase 3: Presidencia de la Nación",
      area: "Finanzas Digitales, Competencia Bancaria & Medios de Pago",
      titulo: "La Guerra del QR: Mercado Pago vs. Los Bancos Tradicionales (MODO)",
      descripcion: "Guerra abierta por la interoperabilidad del QR con tarjeta de crédito. Los bancos tradicionales (MODO) denuncian cartelización y exigen que Mercado Pago abra sus lectores a todas las billeteras sin comisiones abusivas. Marcos Galperin amenaza con suspender servicios de cobro en comercios de cercanía y tuitea contra el atraso financiero del país si el Banco Central lo obliga a ceder su red.",
      explicacion: {
        queMide: "Eje Regulación y Estatismo (Intervención antitrust para competencia vs. Protección de propiedad de plataformas privadas).",
        siDeAcuerdo: "El Banco Central debe forzar la interoperabilidad sin trabas para evitar monopolios y proteger al usuario.",
        siEnContra: "Quien invirtió en poner los lectores y desarrollar la tecnología tiene derecho a fijar sus condiciones sin imposición estatal."
      },
      opciones: [
        {
          id: "interoperabilidad_obligatoria_bcra",
          texto: "Interoperabilidad obligatoria inmediata por resolución del BCRA: Exigir apertura total del QR para todas las tarjetas sin comisiones extra para garantizar competencia justa.",
          setFlags: { fintech_qr: "interoperable" },
          impacto12Axes: { regulacion: 25, estatismo: 40, institucionalidad: 65, comercio: 45 },
          impactoSectores: { productivo: 20, claseMedia: 15, trabajo: 10, estadoCiencia: 5, frenteExterno: -10 },
          impactoMacro: { riesgoPais: +15, resultadoFiscalPBI: 0 }
        },
        {
          id: "libre_competencia_galperin",
          texto: "Libre competencia y defensa de la red privada: Permitir a Mercado Pago preservar exclusividad sobre su infraestructura premiando la innovación y la inversión tecnológica.",
          setFlags: { fintech_qr: "privado_libre" },
          impacto12Axes: { regulacion: 85, estatismo: 85, institucionalidad: 50, comercio: 85 },
          impactoSectores: { productivo: 15, claseMedia: -10, trabajo: -10, estadoCiencia: 10, frenteExterno: 25 },
          impactoMacro: { riesgoPais: -30, resultadoFiscalPBI: 0 }
        },
        {
          id: "qr_estatal_banco_nacion",
          texto: "Crear un QR estatal unificado y gratuito a través del Banco Nación: Plataforma pública de cobros digitales con arancel cero para almacenes, ferias y comercios de barrio.",
          setFlags: { fintech_qr: "qr_estatal" },
          impacto12Axes: { regulacion: 20, estatismo: 15, institucionalidad: 45, comercio: 25 },
          impactoSectores: { productivo: -10, claseMedia: 15, trabajo: 25, estadoCiencia: 15, frenteExterno: -20 },
          impactoMacro: { riesgoPais: +45, resultadoFiscalPBI: -0.1 }
        }
      ]
    },

    // ========================================================
    // MEGA-DILEMAS DE 4 CAMINOS: SIN SALIDA LIMPIA
    // ========================================================
    {
      id: "pres_epidemia_repelente_dengue",
      etapaBadge: "Fase 3: Crisis de Salud y Suministro",
      area: "Epidemia de Dengue, Desabastecimiento & Farmacias",
      titulo: "Quilombo A: La Epidemia del Verano y la Falta Absoluta de Repelente",
      descripcion: "Brote récord de dengue. Los hospitales están al límite, las farmacias y supermercados no tienen una sola lata de repelente (Off/Raid) y en Mercado Libre una unidad se revende a 25 veces su valor real. Las fábricas locales dicen que no tienen plástico para los envases ni el principio activo importado.",
      explicacion: {
        queMide: "Eje Regulación, Salud Pública y Comercio Exterior.",
        siDeAcuerdo: "La emergencia sanitaria exige abrir aduanas sin trabas burocráticas o intervenir la producción para frenar la especulación.",
        siEnContra: "Relajar controles de ANMAT pone en riesgo la toxicidad pública y fijar precios quiebra a los fabricantes."
      },
      opciones: [
        {
          id: "liberar_importaciones_sin_anmat",
          texto: "Liberar importaciones de urgencia a costo cero y permitir que entre cualquier repelente extranjero sin registro de ANMAT: Aparece stock en 72 horas y baja el precio, pero la industria farmacéutica local te declara la guerra y ANMAT alerta por toxicidad.",
          impacto12Axes: { regulacion: 80, estatismo: 85, comercio: 90, institucionalidad: 35 },
          impactoSectores: { claseMedia: 20, productivo: -20, trabajo: -15, estadoCiencia: -25, frenteExterno: 20 },
          impactoMacro: { inflacionMensual: -0.2 },
          impactoCriollo: { mechaSocial: -10, dolarBlue: +25 }
        },
        {
          id: "intervenir_fabrica_precios_maximos",
          texto: "Intervenir la fábrica nacional principal e imponer precios máximos por decreto: Festejo popular y en C5N, pero la empresa frena las líneas de producción acusando inviabilidad económica y el desabastecimiento se vuelve total.",
          impacto12Axes: { regulacion: 10, estatismo: 15, comercio: 15, institucionalidad: 30 },
          impactoSectores: { claseMedia: -20, productivo: -30, trabajo: 20, estadoCiencia: 15, frenteExterno: -25 },
          impactoMacro: { inflacionMensual: +0.4 },
          impactoCriollo: { mechaSocial: +20, dolarBlue: +40, reservasBCRA: -50 }
        },
        {
          id: "distribuir_laboratorios_publicos_comedores",
          texto: "Distribuir repelente fabricado por laboratorios públicos provinciales solo en escuelas y comedores: Blindás a los sectores más vulnerables, pero la clase media porteña y de grandes urbes estalla de bronca al ver que no hay stock comercial.",
          impacto12Axes: { regulacion: 35, estatismo: 30, comercio: 35, institucionalidad: 60 },
          impactoSectores: { claseMedia: -15, productivo: 5, trabajo: 25, estadoCiencia: 30, frenteExterno: 0 },
          impactoMacro: { resultadoFiscalPBI: -0.1 },
          impactoCriollo: { mechaSocial: +5, roscaGobernadores: +15 }
        },
        {
          id: "no_intervenir_manga_larga",
          texto: "No intervenir y pedir por cadena nacional que la gente use ropa de manga larga y ponga espirales: Los mercados celebran la no distorsión de precios, pero te convertís en meme nacional, Crónica pone contador de mosquitos en vivo y tu imagen se desploma.",
          impacto12Axes: { regulacion: 95, estatismo: 95, comercio: 95, institucionalidad: 70 },
          impactoSectores: { claseMedia: -30, productivo: 20, trabajo: -20, estadoCiencia: -10, frenteExterno: 10 },
          impactoMacro: { riesgoPais: -15 },
          impactoCriollo: { mechaSocial: +25, dolarBlue: 0 }
        }
      ]
    },

    {
      id: "pres_corrida_cambiaria_viernes",
      etapaBadge: "Fase 3: Alerta en la City",
      area: "Mercado Cambiario, Dólar Blue & Reservas",
      titulo: "Quilombo B: La Fuga Cambiaria del Viernes a las 14:30 hs",
      descripcion: "Se filtra un rumor de que el Fondo Monetario no girará los desembolsos pactados. En las cuevas de la calle Florida el Dólar Blue salta 15% en 40 minutos, los exportadores frenan las liquidaciones en el puerto de Rosario y los bancos reportan colas de ahorristas queriendo retirar billetes por ventanilla.",
      explicacion: {
        queMide: "Eje Estatismo, Comercio Exterior y Régimen Cambiario.",
        siDeAcuerdo: "Defender las reservas o frenar la corrida requiere medidas audaces de mercado o autoridad fiscal.",
        siEnContra: "Toda intervención desesperada alimenta el pánico bancario o hipoteca el crédito productivo."
      },
      opciones: [
        {
          id: "allanar_cuevas_florida_policia",
          texto: "Mandar a la Policía Federal y a inspectores de ARCA a allanar las cuevas de microcentro en vivo: Muestra autoridad en TV, pero el mercado informal se congela, no hay precio de referencia, los comercios suspenden ventas y el pánico se duplica el lunes.",
          impacto12Axes: { regulacion: 15, estatismo: 25, institucionalidad: 35, seguridad: 75 },
          impactoSectores: { productivo: -20, claseMedia: -15, trabajo: -10, seguridadJusticia: 25, frenteExterno: -30 },
          impactoMacro: { riesgoPais: +95, inflacionMensual: +1.0 },
          impactoCriollo: { dolarBlue: +180, mechaSocial: +15, reservasBCRA: 0 }
        },
        {
          id: "quemar_reservas_intervencion_bcra",
          texto: "Quemar 400 millones de dólares de las reservas netas en el mercado para planchar el tipo de cambio: Frenás la corrida hasta las 15:00 hs, pero el BCRA queda con reservas negativas récord y el FMI amenaza con romper relaciones.",
          impacto12Axes: { regulacion: 40, estatismo: 40, comercio: 40, institucionalidad: 50 },
          impactoSectores: { productivo: 10, claseMedia: 15, trabajo: 5, seguridadJusticia: 0, frenteExterno: -35 },
          impactoMacro: { reservasNetasBCRA: -400, riesgoPais: +110 },
          impactoCriollo: { dolarBlue: -60, mechaSocial: -5, reservasBCRA: -400 }
        },
        {
          id: "tasa_interes_140_pesos",
          texto: "Subir la tasa de interés de los plazos fijos al 140% anual para retener los pesos: Los ahorristas dejan la plata quieta en el banco por la tasa récord, pero ahogás todo el crédito a pymes, el descubierto se vuelve impagable y paralizás la producción.",
          impacto12Axes: { regulacion: 35, estatismo: 55, comercio: 50, institucionalidad: 60 },
          impactoSectores: { productivo: -30, claseMedia: 5, trabajo: -20, estadoCiencia: -10, frenteExterno: 10 },
          impactoMacro: { inflacionMensual: +1.5, riesgoPais: +40 },
          impactoCriollo: { dolarBlue: -20, mechaSocial: +10, reservasBCRA: +50 }
        },
        {
          id: "dejar_flotar_dolar_libre",
          texto: "Dejar que el dólar busque libremente su techo sin tocar una sola reserva: Protegés las reservas del Banco Central, pero la nafta, los fideos y los lácteos aumentan 20% el sábado a la mañana y la CGT anuncia de urgencia un paro general para el martes.",
          impacto12Axes: { regulacion: 90, estatismo: 90, comercio: 90, institucionalidad: 65 },
          impactoSectores: { productivo: 20, claseMedia: -30, trabajo: -35, estadoCiencia: -15, frenteExterno: 30 },
          impactoMacro: { inflacionMensual: +2.8, riesgoPais: -20 },
          impactoCriollo: { dolarBlue: +240, mechaSocial: +30, reservasBCRA: 0 }
        }
      ]
    },

    {
      id: "pres_marcha_jubilados_congreso",
      etapaBadge: "Fase 3: Tensión en las Calles",
      area: "Previsión Social, Movilización Popular & Protocolo de Seguridad",
      titulo: "Quilombo C: La Marcha de los Jubilados frente al Congreso",
      descripcion: "Miles de jubilados, acompañados por agrupaciones universitarias y partidos de izquierda, marchan hacia el Palacio Legislativo para repudiar el veto a una ley de aumento previsional. Cortan por completo la Avenida Entre Ríos y la Avenida de Mayo en plena hora pico de un miércoles de lluvia.",
      explicacion: {
        queMide: "Eje Seguridad, Institucionalidad y Gasto Previsional.",
        siDeAcuerdo: "El orden público en las avenidas es innegociable y los vetos deben sostenerse con equilibrio fiscal.",
        siEnContra: "Reprimir a adultos mayores quiebra la legitimidad moral de cualquier gobierno democrático."
      },
      opciones: [
        {
          id: "protocolo_antipiquete_hidrantes",
          texto: "Aplicar el protocolo antipiquetes a rajatabla con camiones hidrantes e infantería: El tránsito queda liberado en 30 minutos, pero las cámaras de TV transmiten a una jubilada de 78 años cayendo al piso por gases y estalla el repudio moral en redes.",
          impacto12Axes: { seguridad: 15, institucionalidad: 40, valores: 70 },
          impactoSectores: { trabajo: -25, claseMedia: -20, seguridadJusticia: 35, productivo: 15, frenteExterno: -15 },
          impactoMacro: { riesgoPais: -10 },
          impactoCriollo: { mechaSocial: +25, roscaGobernadores: -10 }
        },
        {
          id: "dejar_acampar_congreso",
          texto: "Dejar que ocupen la calle, rodeen el Congreso y acampen hasta ser recibidos: Cero violencia institucional, pero el centro de la Ciudad colapsa 10 horas seguidas, colectiveros y taxistas se amotinan y los medios te tildan de gobierno débil.",
          impacto12Axes: { seguridad: 80, institucionalidad: 50, valores: 30 },
          impactoSectores: { trabajo: 20, claseMedia: -20, seguridadJusticia: -30, productivo: -15, frenteExterno: 0 },
          impactoMacro: { riesgoPais: +20 },
          impactoCriollo: { mechaSocial: -5, roscaGobernadores: -5 }
        },
        {
          id: "comitiva_salon_blanco_bono",
          texto: "Recibir a una comitiva de jubilados en el Salón Blanco y prometer un bono extraordinario a 30 días: Descomprimís la marcha pacíficamente sin represión, pero el ministro de Economía te presenta la renuncia porque no tiene fondos sin emitir dinero.",
          impacto12Axes: { estatismo: 25, regulacion: 35, institucionalidad: 60, valores: 45 },
          impactoSectores: { trabajo: 30, claseMedia: 15, productivo: -15, estadoCiencia: 10, frenteExterno: -20 },
          impactoMacro: { resultadoFiscalPBI: -0.3, inflacionMensual: +0.6, riesgoPais: +45 },
          impactoCriollo: { mechaSocial: -20, reservasBCRA: -100, dolarBlue: +50 }
        },
        {
          id: "vallas_ambulancias_mate_cocido",
          texto: "Desviar la columna con vallas a 300 metros y enviar ambulancias y puestos de mate cocido para desgastar la protesta: Neutralizás el choque violento, pero la izquierda denuncia cerco represivo encubierto y los comerciantes pierden el día de ventas.",
          impacto12Axes: { seguridad: 50, institucionalidad: 65, valores: 50 },
          impactoSectores: { trabajo: -5, claseMedia: 5, seguridadJusticia: 15, productivo: -10, frenteExterno: 5 },
          impactoMacro: { resultadoFiscalPBI: 0 },
          impactoCriollo: { mechaSocial: +5, roscaGobernadores: +5 }
        }
      ]
    },

    // ========================================================
    // CISNES NEGROS CRIOLLOS Y EVENTOS FALOPA
    // ========================================================
    {
      id: "cisne_carpinchos_nordelta",
      etapaBadge: "Fase 3: Cisne Negro Criollo",
      area: "Fauna Silvestre, Humedales & Clases Sociales",
      titulo: "Cisne Negro: Los Carpinchos copan Nordelta (Edición Masiva)",
      descripcion: "Una manada de 600 carpinchos rompe los alambrados de countries de Tigre, ataca perros de raza y corta las rotondas principales. Vecinos indignados exigen abatirlos mientras grupos ecologistas hacen barricadas en la entrada.",
      explicacion: {
        queMide: "Eje Ambiente y Valores (Derecho de propiedad vs. Bienestar animal y humedales).",
        siDeAcuerdo: "La fauna autóctona de los humedales del Delta tiene precedencia histórica sobre countries privados.",
        siEnContra: "La propiedad privada y la seguridad de las familias no pueden ceder ante animales silvestres descontrolados."
      },
      opciones: [
        {
          id: "proteger_carpinchos_fauna",
          texto: "Protegerlos por decreto como fauna intocable y multar a los countries: Furor de ambientalistas y memes en redes, pero indignación total de propietarios y vecinos de altos ingresos.",
          impacto12Axes: { ambiente: 10, valores: 25, estatismo: 40 },
          impactoSectores: { productivo: -10, claseMedia: -15, estadoCiencia: 25, trabajo: 10 },
          impactoCriollo: { mechaSocial: -5, humorAfaScaloneta: +10 }
        },
        {
          id: "trasladar_humedales_costo_fiscal",
          texto: "Montar operativo de biólogos y trasladarlos a humedales del Delta: Solución técnica impecable pero con un costo fiscal millonario que te recrimina el Ministerio de Economía.",
          impacto12Axes: { ambiente: 30, institucionalidad: 70, estatismo: 50 },
          impactoSectores: { productivo: 5, claseMedia: 10, estadoCiencia: 15, trabajo: 5 },
          impactoMacro: { resultadoFiscalPBI: -0.05 },
          impactoCriollo: { mechaSocial: -5 }
        },
        {
          id: "zona_liberada_nordelta_privados",
          texto: "Declarar zona de conflicto vecinal privado y dejar que la seguridad de los countries resuelva: Cero costo para el Estado, pero denuncian cacería ilegal y Crónica transmite en vivo la batalla carpincho.",
          impacto12Axes: { ambiente: 85, valores: 75, regulacion: 85 },
          impactoSectores: { productivo: 10, claseMedia: -10, estadoCiencia: -20, trabajo: -5 },
          impactoCriollo: { mechaSocial: +10, humorAfaScaloneta: -5 }
        }
      ]
    },

    {
      id: "cisne_recital_indio_solari",
      etapaBadge: "Fase 3: Cisne Negro Criollo",
      area: "Cultura de Masas, Ferrocarriles & Seguridad Federal",
      titulo: "Cisne Negro: Recital Clandestino del Indio Solari",
      descripcion: "Se corre el rumor por Telegram de que el Indio Solari tocará en un descampado de Olavarría o Tandil. 350.000 personas viajan en micros y trenes sin boleto. La Ruta Nacional 3 y 226 están paralizadas.",
      explicacion: {
        queMide: "Eje Seguridad, Cultura Popular y Transporte.",
        siDeAcuerdo: "Evitar una tragedia de masas exige desplegar a las Fuerzas Federales y subsidiar la evacuación.",
        siEnContra: "El Estado no debe financiar eventos ilegales privados ni arriesgar a la policía en descampados."
      },
      opciones: [
        {
          id: "gendarmeria_cortar_rutas",
          texto: "Mandar a la Gendarmería a cortar las rutas provinciales e impedir el avance: Muestra orden estricto, pero hay riesgo inminente de batalla campal en peajes y pueblos bonaerenses.",
          impacto12Axes: { seguridad: 15, institucionalidad: 55, valores: 75 },
          impactoSectores: { seguridadJusticia: 30, trabajo: -25, claseMedia: -10, productivo: -10 },
          impactoCriollo: { mechaSocial: +25, roscaGobernadores: -10 }
        },
        {
          id: "operativo_emergencia_transporte",
          texto: "Montar operativo de seguridad y salud de emergencia fletando trenes adicionales: Garantizás la paz y evitás muertes, pero el costo de transporte y hospitales satura el gasto público del mes.",
          impacto12Axes: { seguridad: 65, institucionalidad: 50, estatismo: 30 },
          impactoSectores: { seguridadJusticia: -10, trabajo: 30, claseMedia: 5, productivo: 10 },
          impactoMacro: { resultadoFiscalPBI: -0.1 },
          impactoCriollo: { mechaSocial: -15, humorAfaScaloneta: +15 }
        },
        {
          id: "desconocer_evento_responsabilidad_intendente",
          texto: "Desconocer el evento y transferir la responsabilidad penal 100% al intendente local: Cero costo para la Nación, pero si hay desbordes la oposición te acusa de abandono de personas.",
          impacto12Axes: { federalismo: 15, seguridad: 70, institucionalidad: 40 },
          impactoSectores: { seguridadJusticia: -20, trabajo: -10, claseMedia: -15, productivo: -5 },
          impactoCriollo: { mechaSocial: +15, roscaGobernadores: -25 }
        }
      ]
    },

    {
      id: "cisne_pelea_movil_cronica",
      etapaBadge: "Fase 3: Cisne Negro Criollo",
      area: "Medios en Vivo, Espacio Público & Sentido Común",
      titulo: "Cisne Negro: Pelea Viral en un Móvil de Crónica",
      descripcion: "Un móvil en vivo en la estación Constitución termina a las piñas entre un terraplanista, un pastor evangélico y tres manteros senegaleses. El video tiene 20 millones de vistas en TikTok y es tendencia global.",
      explicacion: {
        queMide: "Eje Institucionalidad, Seguridad y Libertad de Expresión.",
        siDeAcuerdo: "El orden en las terminales de transporte es prioridad y la ley se aplica sin mirar las cámaras.",
        siEnContra: "El show mediático callejero no amerita saturación policial ni involucramiento del gabinete nacional."
      },
      opciones: [
        {
          id: "policia_detiene_a_todos",
          texto: "La Policía Federal interviene y detiene a todos los involucrados en vivo: Despejás el andén de inmediato, pero organismos de DDHH te acusan de racismo y exceso policial televisado.",
          impacto12Axes: { seguridad: 20, institucionalidad: 50, valores: 65 },
          impactoSectores: { seguridadJusticia: 25, trabajo: -15, claseMedia: 10 },
          impactoCriollo: { mechaSocial: +5 }
        },
        {
          id: "no_intervenir_rating_cronica",
          texto: "No intervenir y dejar que Crónica marque 9 puntos de rating: Cero costo político directo, pero la oposición te tilda de estado fallido que mira la tele mientras el país se desmorona.",
          impacto12Axes: { seguridad: 80, institucionalidad: 40, valores: 40 },
          impactoSectores: { seguridadJusticia: -20, trabajo: 5, claseMedia: -10 },
          impactoCriollo: { mechaSocial: -5, humorAfaScaloneta: +5 }
        },
        {
          id: "ministro_tuitea_burlas",
          texto: "El Ministro de Seguridad sale a tuitear en vivo con memes burlándose de la pelea: Furor en cuentas libertarias y miles de retuits, pero los editoriales de LN+ y Clarín destrozan la investidura oficial.",
          impacto12Axes: { institucionalidad: 20, valores: 80, seguridad: 50 },
          impactoSectores: { seguridadJusticia: -10, claseMedia: -20, estadoCiencia: -10 },
          impactoCriollo: { mechaSocial: +10, dolarBlue: 0 }
        }
      ]
    },

    {
      id: "cisne_corte_fibra_toninas",
      etapaBadge: "Fase 3: Cisne Negro Criollo",
      area: "Infraestructura Crítica, Conectividad & Soberanía Digital",
      titulo: "Cisne Negro: Corte de Fibra Óptica por Roedores en Las Toninas",
      descripcion: "Roedores o un cardumen rompen el cable submarino de fibra óptica en Las Toninas. 60% del país se queda sin WhatsApp, Mercado Pago ni home banking por 14 horas.",
      explicacion: {
        queMide: "Eje Regulación, Infraestructura Estratégica y Telecomunicaciones.",
        siDeAcuerdo: "La infraestructura crítica digital debe tener respaldo estatal y contingencia obligatoria.",
        siEnContra: "Un accidente fortuito no debe convertirse en otra excusa para subsidios o multas confiscatorias."
      },
      opciones: [
        {
          id: "emergencia_nacional_resarcimiento_telcos",
          texto: "Declarar emergencia nacional de telecomunicaciones y obligar a las telcos a resarcir a los usuarios: Gran alivio popular y en comercios, pero las empresas frenan inversiones en 5G y van a la Justicia.",
          impacto12Axes: { regulacion: 20, estatismo: 25, comercio: 35 },
          impactoSectores: { productivo: -15, claseMedia: 25, trabajo: 20, frenteExterno: -20 },
          impactoCriollo: { mechaSocial: -10, dolarBlue: +15 }
        },
        {
          id: "apelar_paciencia_desconectarse",
          texto: "Apelar a la paciencia y decir por vocería que 'hace bien desconectarse': Cero costo fiscal, pero cuando vuelve la señal te linchan en Twitter y los bancos te culpan por pérdidas de 80 millones de dólares.",
          impacto12Axes: { regulacion: 85, estatismo: 85, institucionalidad: 45 },
          impactoSectores: { productivo: -20, claseMedia: -25, trabajo: -15, estadoCiencia: -10 },
          impactoCriollo: { mechaSocial: +25 }
        },
        {
          id: "subsidio_satelital_prioritario",
          texto: "Subsidiar de urgencia enlaces satelitales prioritarios para hospitales y bancos: Mantener operativos los servicios esenciales sin estatizar nada, con un desembolso moderado de fondos reservados.",
          impacto12Axes: { regulacion: 50, estatismo: 50, institucionalidad: 70 },
          impactoSectores: { productivo: 15, claseMedia: 10, estadoCiencia: 20, trabajo: 5 },
          impactoMacro: { resultadoFiscalPBI: -0.05 },
          impactoCriollo: { mechaSocial: -5, reservasBCRA: -30 }
        }
      ]
    }
  ]
};

if (typeof window !== 'undefined') {
  window.DILEMAS_DATA = DILEMAS_DATA;
}

// Exportar para entornos Node
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DILEMAS_DATA };
}
