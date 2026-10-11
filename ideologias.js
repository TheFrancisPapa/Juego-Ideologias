// ideologias.js - Base de datos vectorial calibrada de ideologías políticas
// Coordenadas normalizadas de -100 a +100 en 5 dimensiones:
// E (Económico): -100 Estatismo/Colectivismo <---> +100 Libre Mercado/Capitalismo
// A (Autoridad/Estado): -100 Anarquía/Libertario <---> +100 Totalitarismo/Orden Estricto
// S (Social/Cultural): -100 Progresismo/Secular <---> +100 Conservadurismo/Moral Tradicional
// N (Nacional/Geopolítico): -100 Internacionalismo/Globalismo <---> +100 Soberanismo/Nacionalismo
// V (Ecológico/Ambiental): -100 Productivismo/Extractivismo <---> +100 Ecología profunda/Sustentabilidad

const IDEOLOGIAS_DB = [
  // --- FAMILIA LIBERAL Y LIBERTARIA ---
  {
    nombre: "Anarcocapitalismo",
    categoria: "Libertarismo Radical",
    descripcion: "Propugna la abolición total del Estado, dejando toda la provisión de bienes, justicia y seguridad en manos del libre mercado y la propiedad privada irrestricta.",
    coords: { E: 100, A: -100, S: -20, N: -70, V: -40 },
    cita: "La libertad de mercado sin intermediarios estatales es el único orden moral y eficiente."
  },
  {
    nombre: "Liberalismo Clásico",
    categoria: "Liberalismo",
    descripcion: "Defiende un Estado mínimo enfocado en proteger derechos individuales, propiedad privada, imperio de la ley y libre comercio.",
    coords: { E: 80, A: -40, S: -30, N: -40, V: -20 },
    cita: "El gobierno más justo es aquel que gobierna lo menos indispensable."
  },
  {
    nombre: "Minarquismo",
    categoria: "Libertarismo",
    descripcion: "Sostiene que el Estado debe existir exclusivamente para administrar justicia, policía y defensa nacional (Estado gendarme).",
    coords: { E: 90, A: -70, S: -20, N: -30, V: -30 },
    cita: "El Estado solo tiene derecho a existir como guardián nocturno de la propiedad."
  },
  {
    nombre: "Ordoliberalismo",
    categoria: "Economía Social de Mercado",
    descripcion: "Corriente que promueve el libre mercado pero con un Estado fuerte que actúe como árbitro estricto para evitar monopolios y garantizar competencia leal.",
    coords: { E: 45, A: 10, S: -10, N: -20, V: 10 },
    cita: "Mercados libres, pero con un marco de reglas inviolables dictadas por el Estado."
  },
  {
    nombre: "Socioliberalismo (Liberalismo Progresista)",
    categoria: "Centro-Izquierda Liberal",
    descripcion: "Combina la economía de mercado y la libertad de empresa con políticas públicas de igualdad de oportunidades, educación pública y libertades cívicas amplias.",
    coords: { E: 10, A: -30, S: -75, N: -60, V: 40 },
    cita: "La verdadera libertad solo existe si todos cuentan con un piso básico de oportunidades."
  },

  // --- FAMILIA SOCIALISTA Y COMUNISTA ---
  {
    nombre: "Socialdemocracia",
    categoria: "Reformismo Democrático",
    descripcion: "Sistema que defiende una economía mixta con fuerte Estado de bienestar, salud y educación universales, regulación laboral y respeto a las instituciones democráticas.",
    coords: { E: -45, A: -20, S: -60, N: -40, V: 50 },
    cita: "Tanto mercado como sea posible, tanto Estado como sea necesario."
  },
  {
    nombre: "Socialismo Democrático",
    categoria: "Socialismo Reformista",
    descripcion: "Busca superar el capitalismo a través de la vía electoral, promoviendo la propiedad cooperativa o pública de medios estratégicos y una profunda redistribución.",
    coords: { E: -70, A: -10, S: -70, N: -50, V: 60 },
    cita: "Democratizar la economía con la misma fuerza con que se democratizó el voto."
  },
  {
    nombre: "Marxismo-Leninismo",
    categoria: "Comunismo Revolucionario",
    descripcion: "Promueve la vanguardia del proletariado, la planificación centralizada de la economía por el Estado y la supresión de la propiedad privada de los medios de producción.",
    coords: { E: -95, A: 85, S: -40, N: -20, V: -30 },
    cita: "La emancipación de la clase obrera a través del control estatal absoluto de la producción."
  },
  {
    nombre: "Trotskismo",
    categoria: "Marxismo Revolucionario",
    descripcion: "Postula la revolución permanente a escala internacional, la democracia obrera y el rechazo a la burocratización estatal.",
    coords: { E: -95, A: 40, S: -70, N: -90, V: 20 },
    cita: "La revolución no puede detenerse dentro de las fronteras de un solo país."
  },

  // --- FAMILIA ANARQUISTA ---
  {
    nombre: "Anarcocomunismo",
    categoria: "Anarquismo Social",
    descripcion: "Aboga por la abolición simultánea del Estado y del capitalismo, organizando la sociedad en comunas autónomas y autogestión basada en la ayuda mutua.",
    coords: { E: -100, A: -100, S: -85, N: -90, V: 70 },
    cita: "De cada cual según sus capacidades, a cada cual según sus necesidades, sin gobernantes ni amos."
  },
  {
    nombre: "Anarcosindicalismo",
    categoria: "Anarquismo de los Trabajadores",
    descripcion: "Plantea que los sindicatos autogestionados por los propios obreros deben ser el motor para abolir el Estado y conducir la producción.",
    coords: { E: -90, A: -90, S: -70, N: -70, V: 40 },
    cita: "La huelga general revolucionaria y la autogestión obrera directa."
  },
  {
    nombre: "Mutualismo",
    categoria: "Anarquismo Individualista",
    descripcion: "Propone una economía de libre mercado sin Estado ni monopolios, basada en bancos de crédito mutuo a interés cero y cooperativas de productores.",
    coords: { E: -10, A: -90, S: -50, N: -60, V: 50 },
    cita: "La propiedad monopólica es un robo; la posesión basada en el trabajo propio es libertad."
  },

  // --- FAMILIA NACIONALISTA Y POPULAR ---
  {
    nombre: "Peronismo Clásico / Justicialismo",
    categoria: "Nacionalismo Popular",
    descripcion: "Articula la soberanía política, la independencia económica y la justicia social mediante la alianza de clases (trabajadores y burguesía nacional), con fuerte liderazgo estatal.",
    coords: { E: -40, A: 35, S: 20, N: 85, V: -10 },
    cita: "Ni yanquis ni marxistas: tercera posición con la comunidad organizada."
  },
  {
    nombre: "Nacionalismo Popular Latinoamericano",
    categoria: "Soberanismo Popular",
    descripcion: "Enfatiza la protección de la industria nacional, la soberanía sobre recursos naturales estratégicos y la redistribución del ingreso con arraigo identitario.",
    coords: { E: -55, A: 40, S: 10, N: 90, V: 0 },
    cita: "Defensa intransigente de las riquezas de la patria frente a la especulación financiera internacional."
  },
  {
    nombre: "Nacionalpopulismo de Derecha",
    categoria: "Nacionalismo Conservador",
    descripcion: "Combina retórica contra las élites globales y la burocracia con un fuerte control de fronteras, patriotismo cultural y mano dura en seguridad.",
    coords: { E: 30, A: 75, S: 80, N: 95, V: -50 },
    cita: "Primero la patria, orden inquebrantable y protección de nuestra identidad frente al globalismo."
  },

  // --- FAMILIA CONSERVADORA Y SOCIALCRISTIANA ---
  {
    nombre: "Conservadurismo Liberal",
    categoria: "Centro-Derecha Tradicional",
    descripcion: "Une la defensa de los mercados libres y la disciplina presupuestaria con el respeto a las instituciones republicanas y valores familiares tradicionales.",
    coords: { E: 65, A: 25, S: 60, N: 20, V: -30 },
    cita: "Crecimiento impulsado por el mérito individual, la ley y el orden moral."
  },
  {
    nombre: "Democracia Cristiana",
    categoria: "Humanismo Cristiano",
    descripcion: "Inspirada en la Doctrina Social de la Iglesia. Defiende la economía social de mercado, la dignidad de la persona, la familia y el principio de subsidiaridad.",
    coords: { E: -10, A: 10, S: 50, N: 10, V: 20 },
    cita: "Una sociedad solidaria donde la economía sirva al ser humano integral."
  },
  {
    nombre: "Distributismo",
    categoria: "Tercera Vía Socialcristiana",
    descripcion: "Postula que la propiedad privada es tan buena que todos deberían tener una parte: rechaza tanto el monopolio capitalista como el monopolio estatal en favor de cooperativas familiares.",
    coords: { E: -25, A: -30, S: 65, N: 20, V: 40 },
    cita: "Demasiado poco capitalismo no significa demasiados capitalistas, sino demasiado pocos propietarios."
  },
  {
    nombre: "Tradicionalismo Nacionalcatólico",
    categoria: "Conservadurismo Religioso Estricto",
    descripcion: "Propone que el orden social, jurídico y educativo debe basarse de forma obligatoria en la ley natural y la moral católica, con jerarquía y disciplina estricta.",
    coords: { E: -10, A: 80, S: 95, N: 75, V: -10 },
    cita: "Dios, patria y familia como fundamentos sagrados del orden de la república."
  },

  // --- FAMILIA ECOLOGISTA ---
  {
    nombre: "Ecosocialismo",
    categoria: "Ecologismo Radical",
    descripcion: "Sostiene que la crisis climática es producto intrínseco del afán de lucro capitalista, proponiendo planificar democráticamente la producción con criterios ecológicos.",
    coords: { E: -80, A: -30, S: -75, N: -70, V: 95 },
    cita: "Cambiar el sistema, no el clima: la vida no puede someterse al extractivismo."
  },
  {
    nombre: "Ecologismo de Mercado (Verde Liberal)",
    categoria: "Sostenibilidad de Mercado",
    descripcion: "Utiliza incentivos económicos, bonos de carbono e innovación tecnológica privada para proteger el ambiente sin frenar el comercio ni la inversión.",
    coords: { E: 55, A: -20, S: -40, N: -40, V: 80 },
    cita: "La transición energética se logra a través de la innovación privada y mercados de carbono eficientes."
  },

  // --- TRADICIONES POLÍTICAS ARGENTINAS ---
  {
    nombre: "Radicalismo Yrigoyenista / Alfonsinista",
    categoria: "Democracia Social Republicana",
    descripcion: "Defensa intransigente del Estado de derecho, derechos humanos, educación pública universal, empresas estratégicas y ética en la función pública.",
    coords: { E: -20, A: -35, S: -40, N: 40, V: 40 },
    cita: "Con la democracia no solo se vota, sino que también se come, se cura y se educa."
  },
  {
    nombre: "Desarrollismo Argentino (Frondizismo)",
    categoria: "Industrialismo Integrador",
    descripcion: "Prioriza la industrialización pesada, energía, petroquímica y siderurgia mediante la atracción selectiva de capitales privados y tecnología.",
    coords: { E: 30, A: -10, S: -15, N: 20, V: -35 },
    cita: "El desarrollo económico integral es la base material de la soberanía nacional."
  },
  {
    nombre: "Kirchnerismo / Progresismo Nacional y Popular",
    categoria: "Populismo de Centro-Izquierda",
    descripcion: "Enfatiza el rol activo del Estado en la redistribución del ingreso, derechos humanos, memoria histórica, ampliación de derechos sociales y soberanía regional.",
    coords: { E: -65, A: 25, S: -80, N: 70, V: 30 },
    cita: "La patria es el otro y la política es la herramienta de transformación de los pueblos."
  },
  {
    nombre: "Republicanismo Liberal (Centro-Derecha Institucional)",
    categoria: "Liberalismo Republicano",
    descripcion: "Promueve la inserción al comercio internacional, la seguridad jurídica, la división de poderes, la reducción de la presión impositiva y la modernización del Estado.",
    coords: { E: 70, A: -25, S: 10, N: -30, V: -10 },
    cita: "República, reglas claras para la inversión y respeto estricto a las instituciones constitucionales."
  },
  {
    nombre: "Nacionalismo de Izquierda / Patria Grande",
    categoria: "Antiimperialismo Latinoamericano",
    descripcion: "Reivindica la integración soberana de los pueblos de América Latina frente a las potencias hegemónicas, la nacionalización de recursos y la justicia social.",
    coords: { E: -85, A: 30, S: -65, N: 85, V: 45 },
    cita: "Por la segunda y definitiva independencia de la Patria Grande latinoamericana."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { IDEOLOGIAS_DB };
}
