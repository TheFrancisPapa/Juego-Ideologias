// glosario.js - Diccionario de términos políticos, constitucionales, económicos y mediáticos de Argentina
// Implementación optimizada en una sola pasada con regex unicode y soporte táctil móvil

const GLOSARIO = {
  // CONSTITUCIÓN NACIONAL & INSTITUCIONES
  "constitución nacional": {
    titulo: "Constitución de la Nación Argentina",
    def: "Ley suprema de la República Argentina que consagra los derechos fundamentales, la división de poderes, el sistema representativo, republicano y federal, y los límites del ejercicio público."
  },
  "artículo 89": {
    titulo: "Artículo 89 CN (Requisitos Presidenciales)",
    def: "Exige: 'Haber nacido en el territorio argentino, o ser hijo de ciudadano nativo, habiendo nacido en país extranjero; y las demás calidades exigidas para ser elegido senador' (remite al Art. 55 CN: 30 años de edad cumplidos y 6 años de ciudadanía en ejercicio)."
  },
  "artículo 55": {
    titulo: "Artículo 55 CN (Calidades para ser Elegido Senador)",
    def: "Exige: tener la edad de 30 años cumplidos, haber sido 6 años ciudadano de la Nación, disfrutar de una renta anual de 2000 pesos fuertes o su equivalente, y ser natural de la provincia o con 2 años de residencia inmediata."
  },
  "artículo 48": {
    titulo: "Artículo 48 CN (Requisitos para Diputados Nacionales)",
    def: "Exige: haber cumplido la edad de 25 años al asumir, poseer 4 años de ciudadanía en ejercicio, y ser natural de la provincia que lo elija o certificar 2 años de residencia inmediata."
  },
  "artículo 50": {
    titulo: "Artículo 50 CN (Mandato de Diputados)",
    def: "Fija el mandato de los diputados en 4 años con reelección indefinida permitida. La Cámara se renueva por mitades cada 2 años en comicios legislativos nacionales."
  },
  "artículo 54": {
    titulo: "Artículo 54 CN (Composición del Senado)",
    def: "Establece 3 senadores por cada provincia y 3 por la CABA (72 bancas en total), correspondiendo 2 a la fuerza política con mayor cantidad de votos y 1 a la primera minoría."
  },
  "artículo 56": {
    titulo: "Artículo 56 CN (Mandato y Renovación del Senado)",
    def: "Fija el mandato de los senadores en 6 años con reelección indefinida. La Cámara Alta se renueva por tercios cada 2 años (8 distritos por turno electoral)."
  },
  "artículo 40": {
    titulo: "Artículo 40 CN (Consulta Popular / Plebiscito)",
    def: "Doble vía: Si la convoca el Congreso a iniciativa de Diputados, es vinculante (la ley queda promulgada automáticamente si vota la mayoría). Si la convoca el Presidente de la Nación, es no vinculante (brinda impulso popular y presión política, pero no suple al Congreso)."
  },
  "artículo 83": {
    titulo: "Artículo 83 CN (Veto Presidencial e Insistencia)",
    def: "El Presidente puede vetar total o parcialmente una ley aprobada por el Congreso. El proyecto vuelve a la cámara de origen y solo puede convertirse en ley si ambas cámaras insisten con mayoría agravada de dos tercios (2/3) de los votos."
  },
  "artículo 99": {
    titulo: "Artículo 99 Inciso 3 CN (DNU y Materias Vedadas)",
    def: "Faculta al PEN a dictar Decretos de Necesidad y Urgencia solo en circunstancias excepcionales, prohibiendo de forma expresa y bajo nulidad absoluta dictar DNU en materia penal, tributaria, electoral o de partidos políticos."
  },
  "artículo 99 inciso 3": {
    titulo: "Artículo 99 Inciso 3 CN (DNU y Materias Vedadas)",
    def: "Faculta al PEN a dictar Decretos de Necesidad y Urgencia solo en circunstancias excepcionales, prohibiendo de forma expresa y bajo nulidad absoluta dictar DNU en materia penal, tributaria, electoral o de partidos políticos."
  },
  "artículo 93": {
    titulo: "Artículo 93 CN (Juramento Presidencial)",
    def: "Juramento solemne ante la Asamblea Legislativa donde el mandatario jura desempeñar el cargo con lealtad y patriotismo, observando y haciendo observar fielmente la Constitución Nacional."
  },
  "cámara de diputados": {
    titulo: "Cámara de Diputados de la Nación (HCDN)",
    def: "Cámara baja que representa al pueblo de la Nación (257 bancas distribuidas por población). Quórum reglamentario: 129 diputados presentes para sesionar (Art. 64 CN)."
  },
  "senado de la nación": {
    titulo: "Honorable Senado de la Nación (HCSN)",
    def: "Cámara alta que representa a las 24 jurisdicciones en pie de igualdad federal (72 bancas). Quórum reglamentario: 37 senadores presentes para sesionar."
  },
  "decreto de necesidad y urgencia": {
    titulo: "Decreto de Necesidad y Urgencia (DNU)",
    def: "Herramienta excepcional del Poder Ejecutivo con fuerza de ley inmediata, sujeta al control de la Comisión Bicameral Permanente (Ley 26.122) y a revisión judicial."
  },
  "dnu": {
    titulo: "Decreto de Necesidad y Urgencia (DNU)",
    def: "Acto de alcance general dictado por el Presidente que rige desde su publicación oficial, pero no puede regular materia penal, tributaria ni electoral."
  },
  "boleta única de papel": {
    titulo: "Boleta Única de Papel (BUP)",
    def: "Sistema electoral donde todos los candidatos figuran en una única papeleta oficial sellada por la mesa de votación, eliminando el robo, rotura o faltante de boletas tradicionales."
  },

  // ECONOMÍA, TRABAJO & FINANZAS
  "déficit fiscal": {
    titulo: "Déficit Fiscal",
    def: "Situación financiera en la que los gastos del Estado superan a sus ingresos genuinos por recaudación tributaria durante un período fiscal."
  },
  "banco central": {
    titulo: "Banco Central de la República Argentina (BCRA)",
    def: "Autoridad rectora monetaria que emite el peso de curso legal, custodia las reservas internacionales de divisas y regula la liquidez bancaria del país."
  },
  "retenciones al agro": {
    titulo: "Retenciones al Agro (Derechos de Exportación)",
    def: "Tributo que cobra el Estado sobre el valor FOB de las cosechas exportadas (soja, trigo, maíz) antes de salir de los puertos nacionales."
  },
  "aranceles de importación": {
    titulo: "Aranceles de Importación",
    def: "Gravamen tributario aduanero a los bienes fabricados en el exterior que ingresan al país, utilizado para recaudar o proteger a la industria nacional local."
  },
  "paritarias": {
    titulo: "Paritarias Salariales",
    def: "Negociación formal y periódica regulada por ley entre los sindicatos de trabajadores y las cámaras empresarias para fijar remuneraciones y condiciones de trabajo."
  },
  "expropiación": {
    titulo: "Expropiación por Utilidad Pública",
    def: "Poder de imperio estatal consagrado en el Art. 17 CN que permite transferir bienes privados al dominio público mediando indemnización previa y ley expresa del Congreso."
  },
  "fmi": {
    titulo: "Fondo Monetario Internacional (FMI)",
    def: "Organismo financiero multilateral de crédito de última instancia que exige metas fiscales, monetarias y de reservas ante desequilibrios de balanza de pagos."
  },
  "coparticipación federal": {
    titulo: "Coparticipación Federal de Impuestos",
    def: "Régimen constitucional automático de distribución de tributos recaudados por la Nación hacia las 23 provincias y la CABA (Art. 75 inc. 2 CN)."
  },
  "cuasimonedas": {
    titulo: "Cuasimonedas Provinciales",
    def: "Bonos de emergencia emitidos por gobiernos subnacionales (ej. Patacones, Lecop o Chachos) con poder cancelatorio local forzoso ante el desabastecimiento de pesos."
  },
  "fondo de cese laboral": {
    titulo: "Fondo de Cese Laboral",
    def: "Mecanismo indemnizatorio alternativo (modelo UOCRA) donde el empleador realiza aportes mensuales acumulativos, sustituyendo las indemnizaciones por despido sin causa."
  },
  "cepo cambiario": {
    titulo: "Cepo Cambiario",
    def: "Restricción gubernamental que limita o prohíbe la libre compra y venta de divisas extranjeras, generando múltiples tipos de cambio (oficial, blue, MEP, CCL)."
  },
  "vaca muerta": {
    titulo: "Formación Geológica Vaca Muerta",
    def: "Cuenca neuquina hidrocarburífera no convencional: 2ª reserva mundial de gas shale y 4ª de petróleo shale, motor estratégico de autoabastecimiento y divisas."
  },
  "ley de glaciares": {
    titulo: "Ley de Glaciares (Ley 26.639)",
    def: "Norma de presupuestos mínimos que protege a los glaciares y al ambiente periglaciar como reservas estratégicas de agua dulce, prohibiendo la explotación minera en sus zonas de influencia."
  },
  "ley de alquileres": {
    titulo: "Régimen Legal de Alquileres Urbanos",
    def: "Marco regulatorio de los contratos de locación habitacional sobre plazos mínimos, fórmulas de actualización de precios y garantías exigidas a inquilinos."
  },

  // SEGURIDAD, JUSTICIA & SOCIEDAD
  "fuerzas federales": {
    titulo: "Fuerzas Federales de Seguridad",
    def: "Cuerpos policiales y de seguridad de jurisdicción nacional: Gendarmería Nacional, Prefectura Naval Argentina, Policía Federal Argentina (PFA) y Policía de Seguridad Aeroportuaria (PSA)."
  },
  "ley de seguridad interior": {
    titulo: "Ley de Seguridad Interior (Ley 24.059)",
    def: "Marco legal que veda a las Fuerzas Armadas (Ejército, Armada, Fuerza Aérea) intervenir en tareas de patrullaje o represión policial en territorio civil interno salvo estado de sitio o apoyo logístico."
  },
  "pistolas taser": {
    titulo: "Pistolas Taser (Dispositivos Electrónicos de Control)",
    def: "Armas de letalidad reducida que lanzan dardos con descargas eléctricas controladas para neutralizar temporalmente a personas violentas sin herirlas de bala."
  },
  "manteros": {
    titulo: "Comercio Ambulante e Informal ('Manteros')",
    def: "Comerciantes informales que despliegan mercadería en mantas sobre veredas y paseos peatonales, generando controversia con comerciantes registrados y peatones."
  },
  "edad de imputabilidad": {
    titulo: "Régimen Penal Juvenil & Edad de Imputabilidad",
    def: "Edad mínima legal (actualmente fijada en 16 años por el régimen 22.278) a partir de la cual una persona puede ser juzgada y condenada penalmente por la justicia ordinaria."
  },
  "sad": {
    titulo: "Sociedades Anónimas Deportivas (SAD)",
    def: "Modelo empresarial en el que los clubes deportivos permiten el ingreso de capitales privados con fines de lucro y paquete accionario, frente a la histórica forma de Asociaciones Civiles sin Fines de Lucro."
  },
  "monopolio": {
    titulo: "Monopolio Comercial",
    def: "Estructura de mercado donde un único oferente abastece un bien o servicio esencial sin sustitutos cercanos, fijando precios y condiciones de comercialización."
  },
  "estado de sitio": {
    titulo: "Estado de Sitio (Art. 23 CN)",
    def: "Medida constitucional de excepción ante conmoción interior grave o ataque exterior que suspende temporalmente garantías individuales y permite al PEN arrestar o trasladar ciudadanos."
  },

  // MEDIOS DE COMUNICACIÓN, STREAMING & TECNOLOGÍA
  "ln+": {
    titulo: "La Nación Más (LN+)",
    def: "Canal de noticias de televisión por cable y señal digital del diario La Nación, con fuerte programación política, editorial y económica en el prime time argentino."
  },
  "disney+": {
    titulo: "Disney+ (The Walt Disney Company)",
    def: "Plataforma de streaming que absorbió el catálogo de Star+ y las transmisiones en vivo de ESPN para América Latina, concentrando eventos deportivos y entretenimiento global."
  },
  "max": {
    titulo: "Max (ex HBO Max - Warner Bros. Discovery)",
    def: "Plataforma de streaming audiovisual por suscripción con contenidos de HBO, Discovery y producciones cinematográficas internacionales."
  },
  "tyc sports": {
    titulo: "Torneos y Competencias Sports (TyC Sports)",
    def: "Canal argentino de televisión por cable pionero en la cobertura exclusiva de deportes nacionales, transmisiones de la Selección Argentina y torneos de AFA."
  },
  "deportv": {
    titulo: "DeporTV (Señal Pública de Deportes)",
    def: "Canal público de televisión digital abierta dedicado al deporte argentino federal, amateur, formativo y paralímpico."
  },
  "flow": {
    titulo: "Telecom Flow",
    def: "Plataforma digital argentina de televisión por cable y streaming on-demand de Telecom Argentina, con amplia cobertura en hogares urbanos."
  },
  "telecentro": {
    titulo: "Telecentro",
    def: "Empresa argentina de telecomunicaciones que provee servicios de televisión por cable, telefonía fija y acceso a internet por fibra óptica y cablemódem en el AMBA."
  },
  "directv": {
    titulo: "DirecTV Latinoamérica (Vrio Corp)",
    def: "Proveedor líder de televisión satelital y streaming con cobertura en todo el territorio argentino continental e islas, reconocido por sus transmisiones deportivas exclusivas."
  },

  // MARCAS, PLATAFORMAS & CONSUMO COTIDIANO (PUNTO 6)
  "reduflación": {
    titulo: "Reduflación (Shrinkflation)",
    def: "Práctica comercial de reducir el tamaño, peso o cantidad de un producto envasado manteniendo o aumentando su precio en góndola para disimular la inflación real."
  },
  "interoperabilidad qr": {
    titulo: "Interoperabilidad de Códigos QR",
    def: "Regulación del Banco Central que obliga a los lectores QR comerciales a aceptar pagos con tarjeta de crédito y débito de cualquier billetera virtual o entidad bancaria sin discriminación."
  },
  "dólar tarjeta": {
    titulo: "Dólar Tarjeta / Dólar Turista",
    def: "Tipo de cambio aplicado a los consumos en moneda extranjera y plataformas de streaming en el exterior, compuesto por el dólar oficial más recargos por percepciones de Ganancias, Bienes Personales e IVA."
  },
  "servicio público esencial": {
    titulo: "Servicio Público Esencial",
    def: "Calificación jurídica que impone al Estado el deber de regular tarifas, garantizar calidad continua y limitar medidas de fuerza sindicales o empresarias para no interrumpir prestaciones básicas como energía, transporte o conectividad."
  },
  "arca": {
    titulo: "ARCA (Agencia de Recaudación y Control Aduanero)",
    def: "Organismo autárquico creado como sucesor de la AFIP, encargado de la recaudación tributaria nacional, fiscalización impositiva y control aduanero en las fronteras."
  },
  "edesur": {
    titulo: "Edesur (Empresa Distribuidora Sur)",
    def: "Concesionaria privada del servicio de distribución eléctrica en la zona sur de la Ciudad de Buenos Aires y doce partidos del Gran Buenos Aires, foco recurrente de reclamos por cortes en verano."
  },
  "mercado pago": {
    titulo: "Mercado Pago",
    def: "Fintech y billetera digital líder de Mercado Libre en Argentina y América Latina, pionera en pagos con código QR, rendimientos de saldos diarios y terminales de cobro Point."
  }
};

// Función de escape seguro para patrones RegExp
function escaparRegExp(cadena) {
  return cadena.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Compilar regex única en una sola pasada ordenada por longitud descendente
let _regexGlosarioCompilada = null;

function compilarRegexGlosario() {
  if (_regexGlosarioCompilada) return _regexGlosarioCompilada;
  if (typeof window !== 'undefined') {
    if (typeof GLOSARIO_MEDIOS !== 'undefined') Object.assign(GLOSARIO, GLOSARIO_MEDIOS);
    if (typeof GLOSARIO_DEPORTES !== 'undefined') Object.assign(GLOSARIO, GLOSARIO_DEPORTES);
  }
  const terminos = Object.keys(GLOSARIO).sort((a, b) => b.length - a.length);
  const patron = terminos.map(escaparRegExp).join('|');
  // Usar lookarounds unicode para respetar acentos y números en una sola pasada
  _regexGlosarioCompilada = new RegExp(`(?<![\\p{L}\\p{N}])(${patron})(?![\\p{L}\\p{N}])`, 'giu');
  return _regexGlosarioCompilada;
}

// Inyectar etiquetas del glosario en una sola pasada segura sin anidamiento ni bugs de acento
function procesarTextoConGlosario(texto) {
  if (!texto || typeof texto !== 'string') return '';
  const regex = compilarRegexGlosario();
  return texto.replace(regex, (coincidencia) => {
    const clave = coincidencia.toLowerCase();
    if (!GLOSARIO[clave]) return coincidencia;
    return `<span class="glosario-termino border-b-2 border-dotted border-amber-400 text-amber-200 cursor-pointer font-medium hover:bg-amber-400/10 px-0.5 rounded transition-colors select-none" data-termino="${clave}">${coincidencia}</span>`;
  });
}

// Inicializar listeners del glosario con soporte mouse y táctil (móvil/tablets)
function activarListenersGlosario() {
  const tooltip = document.getElementById('glossary-tooltip');
  const title = document.getElementById('tooltip-title');
  const desc = document.getElementById('tooltip-desc');
  if (!tooltip || !title || !desc) return;

  const elementos = document.querySelectorAll('.glosario-termino');

  function mostrarTooltip(elemento, clienteX, clienteY) {
    const key = elemento.getAttribute('data-termino');
    const data = GLOSARIO[key];
    if (!data) return;

    title.innerText = data.titulo;
    desc.innerText = data.def;
    tooltip.classList.remove('hidden');

    const rect = elemento.getBoundingClientRect();
    const tooltipWidth = 320;
    let left = clienteX || (rect.left + rect.width / 2);
    let top = (clienteY || rect.bottom) + 12;

    // Ajustar si se desborda por la derecha de la pantalla
    if (left + tooltipWidth / 2 > window.innerWidth - 12) {
      left = window.innerWidth - tooltipWidth / 2 - 12;
    }
    // Ajustar si se desborda por la izquierda
    if (left - tooltipWidth / 2 < 12) {
      left = tooltipWidth / 2 + 12;
    }

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    tooltip.style.transform = 'translateX(-50%)';
  }

  function ocultarTooltip() {
    tooltip.classList.add('hidden');
  }

  elementos.forEach(el => {
    // Hover para desktop
    el.addEventListener('mouseenter', (e) => {
      mostrarTooltip(el, e.clientX, e.clientY);
    });
    el.addEventListener('mouseleave', () => {
      ocultarTooltip();
    });

    // Touch y Click para teléfonos móviles
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!tooltip.classList.contains('hidden') && tooltip.getAttribute('data-active-termino') === el.getAttribute('data-termino')) {
        ocultarTooltip();
        tooltip.removeAttribute('data-active-termino');
      } else {
        tooltip.setAttribute('data-active-termino', el.getAttribute('data-termino'));
        mostrarTooltip(el, e.clientX, e.clientY);
      }
    });

    el.addEventListener('touchstart', (e) => {
      e.stopPropagation();
      const touch = e.touches[0];
      if (touch) {
        tooltip.setAttribute('data-active-termino', el.getAttribute('data-termino'));
        mostrarTooltip(el, touch.clientX, touch.clientY);
      }
    }, { passive: true });
  });

  // Cerrar tooltip al tocar en cualquier otra parte de la pantalla (solo registrar una vez)
  if (typeof window !== 'undefined' && !window._glosarioDocumentListenersActivos) {
    window._glosarioDocumentListenersActivos = true;
    if (typeof document !== 'undefined' && typeof document.addEventListener === 'function') {
      document.addEventListener('click', (e) => {
        const tt = document.getElementById('glossary-tooltip');
        if (!tt) return;
        if (!e.target.closest('.glosario-termino') && !e.target.closest('#glossary-tooltip')) {
          tt.classList.add('hidden');
          tt.removeAttribute('data-active-termino');
        }
      });
      document.addEventListener('touchstart', (e) => {
        const tt = document.getElementById('glossary-tooltip');
        if (!tt) return;
        if (!e.target.closest('.glosario-termino') && !e.target.closest('#glossary-tooltip')) {
          tt.classList.add('hidden');
          tt.removeAttribute('data-active-termino');
        }
      }, { passive: true });
    }
  }
}

if (typeof window !== 'undefined') {
  window.GLOSARIO = GLOSARIO;
  window.procesarTextoConGlosario = procesarTextoConGlosario;
  window.escaparRegExp = escaparRegExp;
  window.activarListenersGlosario = activarListenersGlosario;
}

// Exportar para entornos Node si aplica
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GLOSARIO, procesarTextoConGlosario, escaparRegExp, activarListenersGlosario };
}
