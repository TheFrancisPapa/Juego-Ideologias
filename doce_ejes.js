// doce_ejes.js - Modelo de 12 ejes políticos enfocado en el ecosistema argentino
// y catálogo exhaustivo de presidentes, figuras y períodos históricos de la historia argentina

const DOCE_EJES = {
  federalismo: {
    id: "federalismo",
    nombre: "Estructura del Estado",
    poloA: { nombre: "Federalismo Provincial", desc: "Autonomía de las provincias, coparticipación justa y descentralización de recursos" },
    poloB: { nombre: "Centralismo Porteño / Nacional", desc: "Concentración de recursos y decisiones estratégicas en el gobierno central" },
    icono: "fa-solid fa-sitemap"
  },
  institucionalidad: {
    id: "institucionalidad",
    nombre: "Representación y Mandato",
    poloA: { nombre: "Institucionalismo Republicano", desc: "Congreso activo, frenos y contrapesos, alternancia y debate parlamentario" },
    poloB: { nombre: "Personalismo y Decretismo", desc: "Uso intensivo de DNU, concentración del mando en el Ejecutivo y verticalismo" },
    icono: "fa-solid fa-check-to-slot"
  },
  seguridad: {
    id: "seguridad",
    nombre: "Orden Público y Seguridad",
    poloA: { nombre: "Orden Público y Disuasión", desc: "Protocolos estrictos contra cortes de calle, uso de fuerzas federales y penas severas" },
    poloB: { nombre: "Garantismo y Derechos Civiles", desc: "Prioridad del derecho a la protesta social, debido proceso y contención civil" },
    icono: "fa-solid fa-shield-halved"
  },
  inmigracion: {
    id: "inmigracion",
    nombre: "Inmigración y Soberanía",
    poloA: { nombre: "Control Migratorio Estricto", desc: "Expulsión rápida de delincuentes extranjeros y aranceles a no residentes en servicios públicos" },
    poloB: { nombre: "Integración y Puertas Abiertas", desc: "Radicación simplificada, libre acceso universal a salud/educación e integración regional" },
    icono: "fa-solid fa-passport"
  },
  defensa: {
    id: "defensa",
    nombre: "Defensa Nacional y Malvinas",
    poloA: { nombre: "Reequipamiento y Disuasión Militar", desc: "Modernización de las Fuerzas Armadas, control del Atlántico Sur y presupuesto de Defensa" },
    poloB: { nombre: "Diplomacia Civil y Desarme", desc: "Reclamo pacífico en foros multilaterales de la ONU y primacía del gasto social sobre el militar" },
    icono: "fa-solid fa-handshake"
  },
  geopolitica: {
    id: "geopolitica",
    nombre: "Geopolítica y Alianzas",
    poloA: { nombre: "Alineamiento Occidental", desc: "Alianza prioritaria con Estados Unidos, Israel y las democracias liberales atlánticas" },
    poloB: { nombre: "Multipolarismo y Tercera Posición", desc: "Autonomía soberana no alineada, vínculos con BRICS, América Latina y el Sur Global" },
    icono: "fa-solid fa-globe"
  },
  estatismo: {
    id: "estatismo",
    nombre: "Empresas Públicas y Propiedad",
    poloA: { nombre: "Estatismo y Rol Empresario", desc: "YPF, ferrocarriles, energía y recursos estratégicos bajo control de empresas del Estado" },
    poloB: { nombre: "Privatización y Capital Privado", desc: "Privatizaciones, concesiones, sociedades anónimas y retiro del Estado del rol empresario" },
    icono: "fa-solid fa-building-columns"
  },
  regulacion: {
    id: "regulacion",
    nombre: "Precios, Moneda y Mercados",
    poloA: { nombre: "Regulación e Intervención Estatal", desc: "Controles de precios, cepo cambiario, subsidios a servicios y alquileres regulados" },
    poloB: { nombre: "Libre Mercado y Desregulación", desc: "Precios libres por oferta y demanda, libertad contractual, flotación y fin de subsidios" },
    icono: "fa-solid fa-scale-balanced"
  },
  comercio: {
    id: "comercio",
    nombre: "Industria y Comercio Exterior",
    poloA: { nombre: "Proteccionismo y Desarrollo Nacional", desc: "Aranceles a la importación para resguardar la industria local, empleo fabril y PYMES" },
    poloB: { nombre: "Apertura Comercial Irrestricta", desc: "Baja total de aranceles para abaratar costos, libre importación e inserción global" },
    icono: "fa-solid fa-ship"
  },
  laicismo: {
    id: "laicismo",
    nombre: "Culto y Estado",
    poloA: { nombre: "Laicismo Estricto", desc: "Separación tajante de Iglesia y Estado, fin de asignaciones a jerarquías y educación 100% laica" },
    poloB: { nombre: "Sostenimiento del Culto", desc: "Artículo 2 de la Constitución, financiamiento a escuelas parroquiales y cooperación religiosa" },
    icono: "fa-solid fa-church"
  },
  valores: {
    id: "valores",
    nombre: "Derechos y Agenda Social",
    poloA: { nombre: "Progresismo Sociocultural", desc: "Ampliación de derechos de minorías, diversidad, enfoque de género y libertades civiles" },
    poloB: { nombre: "Conservadurismo Tradicional", desc: "Preservación de la familia tradicional, orden moral comunitario y valores históricos" },
    icono: "fa-solid fa-masks-theater"
  },
  ambiente: {
    id: "ambiente",
    nombre: "Desarrollo y Medioambiente",
    poloA: { nombre: "Productivismo y Extractivismo", desc: "Explotación a fondo de hidrocarburos, litio, minería y agro para maximizar exportaciones" },
    poloB: { nombre: "Conservación y Ecologismo", desc: "Ley de Glaciares y Humedales estricta, moratoria al desmonte y transición ecológica" },
    icono: "fa-solid fa-leaf"
  }
};

// MODELOS DE GOBIERNO DE LA HISTORIA ARGENTINA (Épocas y Administraciones)
const PERIODOS_ARGENTINOS = [
  {
    id: "modelo-agroexportador-80",
    nombre: "Generación del '80 (Roca / Pellegrini, 1880-1916)",
    tipo: "Modelo Histórico Argentino",
    descripcion: "Liberalismo económico abierto al mundo, auge agroexportador, laicismo escolar (Ley 1420), pero con un régimen político conservador y voto cantado.",
    vector: { federalismo: 70, institucionalidad: 75, seguridad: 20, inmigracion: 90, defensa: 30, geopolitica: 20, estatismo: 85, regulacion: 85, comercio: 90, laicismo: 15, valores: 65, ambiente: 25 }
  },
  {
    id: "radicalismo-irigoyen",
    nombre: "Radicalismo Popular (Hipólito Yrigoyen, 1916-1922, 1928-1930)",
    tipo: "Modelo Histórico Argentino",
    descripcion: "Primera presidencia con voto secreto y popular (Ley Sáenz Peña). Creación de YPF estatal, neutralidad en conflictos bélicos y causa popular frente al régimen conservador.",
    vector: { federalismo: 40, institucionalidad: 30, seguridad: 50, inmigracion: 65, defensa: 70, geopolitica: 80, estatismo: 35, regulacion: 40, comercio: 45, laicismo: 60, valores: 50, ambiente: 45 }
  },
  {
    id: "alvear-prosperidad",
    nombre: "Radicalismo Institucional (Marcelo T. de Alvear, 1922-1928)",
    tipo: "Modelo Histórico Argentino",
    descripcion: "Auge económico, diplomacia cosmopolita de prestigio, respeto estricto a las formas parlamentarias, profesionalización del Estado y fomento a la aviación militar.",
    vector: { federalismo: 50, institucionalidad: 15, seguridad: 40, inmigracion: 75, defensa: 45, geopolitica: 30, estatismo: 50, regulacion: 65, comercio: 60, laicismo: 40, valores: 45, ambiente: 35 }
  },
  {
    id: "primer-peronismo",
    nombre: "Justicialismo Histórico (Primer Peronismo, 1946-1955)",
    tipo: "Modelo Histórico Argentino",
    descripcion: "Estatización de ferrocarriles, teléfonos y Banco Central. Plan Quinquenal, industrialización por sustitución de importaciones, derechos laborales y Tercera Posición.",
    vector: { federalismo: 65, institucionalidad: 45, seguridad: 30, inmigracion: 60, defensa: 40, geopolitica: 85, estatismo: 20, regulacion: 15, comercio: 15, laicismo: 60, valores: 55, ambiente: 35 }
  },
  {
    id: "desarrollismo-frondizi",
    nombre: "Desarrollismo (Arturo Frondizi, 1958-1962)",
    tipo: "Modelo Histórico Argentino",
    descripcion: "Batalla del petróleo con contratos privados, radicación masiva de industrias automotrices y químicas multinacionales, integración tecnológica y mediación internacional.",
    vector: { federalismo: 50, institucionalidad: 35, seguridad: 45, inmigracion: 65, defensa: 60, geopolitica: 55, estatismo: 65, regulacion: 55, comercio: 60, laicismo: 40, valores: 40, ambiente: 15 }
  },
  {
    id: "republicanismo-illia",
    nombre: "Austeridad Republicana (Arturo Illia, 1963-1966)",
    tipo: "Modelo Histórico Argentino",
    descripcion: "Defensa estricta de la división de poderes, Ley de Medicamentos, récord de presupuesto educativo (23% del presupuesto nacional), anulación de contratos petroleros lesivos y desendeudamiento.",
    vector: { federalismo: 35, institucionalidad: 15, seguridad: 75, inmigracion: 70, defensa: 85, geopolitica: 35, estatismo: 35, regulacion: 35, comercio: 35, laicismo: 30, valores: 35, ambiente: 55 }
  },
  {
    id: "dictadura-1976",
    nombre: "Proceso de Reorganización Nacional (Dictadura, 1976-1983)",
    tipo: "Régimen Autoritario de Facto",
    descripcion: "Extremo autoritario del espectro: terrorismo de Estado, disolución del Congreso, represión clandestina, reforma financiera de Martínez de Hoz, endeudamiento y guerra de Malvinas.",
    vector: { federalismo: 85, institucionalidad: 95, seguridad: 5, inmigracion: 20, defensa: 15, geopolitica: 25, estatismo: 75, regulacion: 75, comercio: 85, laicismo: 90, valores: 95, ambiente: 15 }
  },
  {
    id: "retorno-democracia-alfonsin",
    nombre: "Primavera Democrática (Raúl Alfonsín, 1983-1989)",
    tipo: "Modelo Histórico Argentino",
    descripcion: "Juicio a las Juntas Militares, defensa irrenunciable de los derechos humanos, Plan Austral, tratados de paz limítrofes y consolidación democrática bajo tensiones carapintadas.",
    vector: { federalismo: 40, institucionalidad: 15, seguridad: 80, inmigracion: 75, defensa: 85, geopolitica: 40, estatismo: 35, regulacion: 30, comercio: 40, laicismo: 25, valores: 25, ambiente: 50 }
  },
  {
    id: "convertibilidad-menem",
    nombre: "Neoliberalismo de los '90 (Carlos Menem, 1989-1999)",
    tipo: "Modelo Histórico Argentino",
    descripcion: "Ley de Convertibilidad (1 a 1), privatizaciones masivas de empresas públicas (YPF, Entel, gas, luz), desregulación comercial y 'relaciones carnales' con Estados Unidos.",
    vector: { federalismo: 55, institucionalidad: 50, seguridad: 35, inmigracion: 70, defensa: 50, geopolitica: 15, estatismo: 90, regulacion: 90, comercio: 90, laicismo: 65, valores: 60, ambiente: 30 }
  },
  {
    id: "alianza-delarua",
    nombre: "Gobierno de la Alianza (Fernando de la Rúa, 1999-2001)",
    tipo: "Modelo Histórico Argentino",
    descripcion: "Defensa inflexible de la convertibilidad, ajuste fiscal (déficit cero), blindaje y megacanje, que derivó en la crisis social, el corralito bancario y la renuncia de 2001.",
    vector: { federalismo: 50, institucionalidad: 40, seguridad: 30, inmigracion: 60, defensa: 60, geopolitica: 25, estatismo: 75, regulacion: 80, comercio: 75, laicismo: 45, valores: 50, ambiente: 40 }
  },
  {
    id: "kirchnerismo-nestor-cristina",
    nombre: "Kirchnerismo (Néstor y Cristina Kirchner, 2003-2015)",
    tipo: "Modelo Histórico Argentino",
    descripcion: "Reestatización de YPF, Aerolíneas y AFJP. Cancelación de deuda con el FMI, subsidios masivos a energía y transporte, moratorias jubilatorias, matrimonio igualitario y Unasur.",
    vector: { federalismo: 60, institucionalidad: 45, seguridad: 65, inmigracion: 85, defensa: 80, geopolitica: 85, estatismo: 20, regulacion: 20, comercio: 20, laicismo: 25, valores: 15, ambiente: 50 }
  },
  {
    id: "cambiemos-macri",
    nombre: "Cambiemos (Mauricio Macri, 2015-2019)",
    tipo: "Modelo Histórico Argentino",
    descripcion: "Salida del cepo cambiario, inserción inteligente al mundo occidental, eliminación de retenciones al agro, acuerdo crediticio con el FMI y choque de gradualismo tarifario.",
    vector: { federalismo: 45, institucionalidad: 25, seguridad: 30, inmigracion: 50, defensa: 50, geopolitica: 20, estatismo: 75, regulacion: 75, comercio: 80, laicismo: 45, valores: 50, ambiente: 45 }
  },
  {
    id: "frente-de-todos-alberto",
    nombre: "Frente de Todos (Alberto Fernández, 2019-2023)",
    tipo: "Modelo Histórico Argentino",
    descripcion: "Gestión de la pandemia con cuarentena (ASPO), cepo cambiario estricto, ley de Interrupción Voluntaria del Embarazo (IVE), gasoducto de Vaca Muerta y fuerte inflación.",
    vector: { federalismo: 55, institucionalidad: 45, seguridad: 60, inmigracion: 75, defensa: 75, geopolitica: 70, estatismo: 30, regulacion: 20, comercio: 30, laicismo: 20, valores: 15, ambiente: 45 }
  },
  {
    id: "libertarismo-milei",
    nombre: "Liberalismo Libertario (Javier Milei, 2023-presente)",
    tipo: "Modelo Actual Argentino",
    descripcion: "Déficit fiscal cero innegociable, motosierra al gasto estatal, desregulación de la economía mediante DNU, libre mercado, combate al colectivismo y alineamiento total con EE.UU. e Israel.",
    vector: { federalismo: 50, institucionalidad: 55, seguridad: 20, inmigracion: 40, defensa: 40, geopolitica: 15, estatismo: 95, regulacion: 95, comercio: 95, laicismo: 50, valores: 80, ambiente: 30 }
  }
];

// FIGURAS POLÍTICAS HISTÓRICAS DE ARGENTINA
const LIDERES_ARGENTINOS = [
  {
    id: "san-martin",
    nombre: "José de San Martín",
    rol: "Padre de la Patria y Libertador",
    periodo: "1778–1850",
    descripcion: "Austeridad republicana incorruptible, disciplina militar estricta, rechazo absoluto a la guerra civil entre hermanos y defensa sagrada de la independencia americana.",
    vector: { federalismo: 55, institucionalidad: 35, seguridad: 25, inmigracion: 60, defensa: 30, geopolitica: 90, estatismo: 50, regulacion: 45, comercio: 50, laicismo: 55, valores: 65, ambiente: 45 }
  },
  {
    id: "juan-manuel-de-rosas",
    nombre: "Juan Manuel de Rosas",
    rol: "Gobernador de Buenos Aires & Encargado de Relaciones Exteriores",
    periodo: "1793–1877",
    descripcion: "Restaurador de las Leyes: Ley de Aduanas proteccionista, defensa irreductible de la soberanía ante los bloqueos navales de Francia e Inglaterra, y orden público férreo.",
    vector: { federalismo: 25, institucionalidad: 90, seguridad: 10, inmigracion: 25, defensa: 25, geopolitica: 85, estatismo: 50, regulacion: 25, comercio: 15, laicismo: 90, valores: 90, ambiente: 40 }
  },
  {
    id: "domingo-f-sarmiento",
    nombre: "Domingo Faustino Sarmiento",
    rol: "Presidente & Gran Educador",
    periodo: "1811–1888",
    descripcion: "Educación pública común, laica y gratuita para todos. Admiración por el modelo cívico de EE.UU., fomento de la ciencia, ferrocarriles, telégrafos y modernización.",
    vector: { federalismo: 65, institucionalidad: 35, seguridad: 30, inmigracion: 85, defensa: 40, geopolitica: 45, estatismo: 75, regulacion: 65, comercio: 75, laicismo: 15, valores: 35, ambiente: 15 }
  },
  {
    id: "julio-a-roca",
    nombre: "Julio Argentino Roca",
    rol: "Presidente de la Nación en dos mandatos (1880-1886, 1898-1904)",
    periodo: "1843–1914",
    descripcion: "Arquitecto del Estado nacional moderno: federalización de Buenos Aires, Ley 1420 de educación laica, paz territorial, moneda unificada y liderazgo conservador.",
    vector: { federalismo: 70, institucionalidad: 70, seguridad: 15, inmigracion: 90, defensa: 20, geopolitica: 25, estatismo: 80, regulacion: 85, comercio: 85, laicismo: 15, valores: 60, ambiente: 20 }
  },
  {
    id: "hipolito-yrigoyen",
    nombre: "Hipólito Yrigoyen",
    rol: "Primer Presidente Popular Radical",
    periodo: "1852–1933",
    descripcion: "Líder de masas plebeyo y austero. Defensor de la soberanía popular frente al fraude oligárquico, creación de YPF estatal y neutralismo internacional inquebrantable.",
    vector: { federalismo: 40, institucionalidad: 25, seguridad: 50, inmigracion: 70, defensa: 75, geopolitica: 85, estatismo: 35, regulacion: 35, comercio: 40, laicismo: 60, valores: 50, ambiente: 45 }
  },
  {
    id: "marcelo-t-alvear",
    nombre: "Marcelo Torcuato de Alvear",
    rol: "Presidente de la Nación (1922-1928)",
    periodo: "1868–1942",
    descripcion: "Radicalismo institucional y dialoguista. Prosperidad económica de los 'años locos', prestigio diplomático internacional, respeto al Congreso y creación de la Fábrica Militar de Aviones.",
    vector: { federalismo: 50, institucionalidad: 15, seguridad: 40, inmigracion: 75, defensa: 45, geopolitica: 30, estatismo: 50, regulacion: 65, comercio: 60, laicismo: 40, valores: 45, ambiente: 35 }
  },
  {
    id: "juan-domingo-peron",
    nombre: "Juan Domingo Perón",
    rol: "Presidente Constitucional en tres mandatos & Creador del Justicialismo",
    periodo: "1895–1974",
    descripcion: "Conductor estratégico del movimiento obrero argentino: comunidad organizada, justicia social, soberanía política, independencia económica y Tercera Posición.",
    vector: { federalismo: 65, institucionalidad: 45, seguridad: 35, inmigracion: 60, defensa: 40, geopolitica: 85, estatismo: 20, regulacion: 20, comercio: 20, laicismo: 60, valores: 55, ambiente: 35 }
  },
  {
    id: "arturo-illia",
    nombre: "Arturo Umberto Illia",
    rol: "Presidente de la Nación (UCR)",
    periodo: "1900–1983",
    descripcion: "Símbolo de decencia cívica, honestidad y apego republicano. Destinó el 23% del presupuesto nacional a educación, sancionó la Ley de Medicamentos y anuló contratos petroleros lesivos.",
    vector: { federalismo: 35, institucionalidad: 15, seguridad: 75, inmigracion: 70, defensa: 85, geopolitica: 35, estatismo: 35, regulacion: 35, comercio: 35, laicismo: 30, valores: 35, ambiente: 55 }
  },
  {
    id: "raul-alfonsin",
    nombre: "Raúl Alfonsín",
    rol: "Presidente del Retorno Democrático",
    periodo: "1927–2009",
    descripcion: "Padre de la democracia moderna: Juicio a las Juntas Militares, defensa innegociable de los derechos humanos, Estado de derecho y justicia social reformista.",
    vector: { federalismo: 40, institucionalidad: 15, seguridad: 80, inmigracion: 75, defensa: 85, geopolitica: 40, estatismo: 35, regulacion: 30, comercio: 40, laicismo: 25, valores: 25, ambiente: 50 }
  },
  {
    id: "carlos-menem",
    nombre: "Carlos Saúl Menem",
    rol: "Presidente de la Década del '90",
    periodo: "1930–2021",
    descripcion: "Líder peronista que giró hacia el libre mercado: estabilidad cambiaria absoluta (1 a 1), privatizaciones a gran escala, indultos y apertura de importaciones.",
    vector: { federalismo: 55, institucionalidad: 50, seguridad: 35, inmigracion: 70, defensa: 50, geopolitica: 20, estatismo: 90, regulacion: 90, comercio: 90, laicismo: 65, valores: 60, ambiente: 30 }
  },
  {
    id: "nestor-kirchner",
    nombre: "Néstor Kirchner",
    rol: "Presidente de la Nación (2003-2007)",
    periodo: "1950–2010",
    descripcion: "Gobernó con superávits gemelos al inicio, renegoció la deuda externa con quita histórica, descolgó los cuadros de la dictadura y reactivó las paritarias y la industria.",
    vector: { federalismo: 55, institucionalidad: 40, seguridad: 60, inmigracion: 80, defensa: 75, geopolitica: 85, estatismo: 30, regulacion: 30, comercio: 25, laicismo: 35, valores: 25, ambiente: 45 }
  },
  {
    id: "mauricio-macri",
    nombre: "Mauricio Macri",
    rol: "Presidente de la Nación (2015-2019)",
    periodo: "1959–presente",
    descripcion: "Líder de Cambiemos y fundador de PRO: apertura a mercados internacionales, eliminación de retenciones agropecuarias, modernización de infraestructura y apego republicano.",
    vector: { federalismo: 45, institucionalidad: 25, seguridad: 30, inmigracion: 50, defensa: 50, geopolitica: 20, estatismo: 75, regulacion: 75, comercio: 80, laicismo: 45, valores: 50, ambiente: 45 }
  },
  {
    id: "javier-milei",
    nombre: "Javier Milei",
    rol: "Presidente de la Nación (2023-presente)",
    periodo: "1970–presente",
    descripcion: "Economista liberal libertario: superávit fiscal como regla innegociable, desregulación de mercados, alineamiento con EE.UU./Israel y combate frontal al estatismo.",
    vector: { federalismo: 50, institucionalidad: 55, seguridad: 20, inmigracion: 40, defensa: 40, geopolitica: 15, estatismo: 95, regulacion: 95, comercio: 95, laicismo: 50, valores: 80, ambiente: 30 }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DOCE_EJES, PERIODOS_ARGENTINOS, LIDERES_ARGENTINOS };
}
