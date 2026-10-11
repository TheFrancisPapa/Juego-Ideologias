// sociedad_argentina_profunda.js - Mapeo de universidades, marchas, planes sociales, SMVM, justicia, senadores y cultura pop (Gran Hermano)

const SOCIEDAD_PROFUNDA = {
  // 1. UNIVERSIDADES PÚBLICAS Y PRIVADAS (UBA, CIN, FEDUN, CONADU)
  universidades: {
    uba: {
      nombre: "Universidad de Buenos Aires (UBA)",
      perfil: "La mayor casa de altos estudios del país, orgullo de premios Nobel y ranking mundial. Epicentro de la 'Marcha Federal Universitaria'. Debate sobre presupuesto, auditorías estatales y arancelamiento a extranjeros no residentes."
    },
    universidadesNacionales: {
      nombre: "Consejo Interuniversitario Nacional (CIN)",
      perfil: "Nuclea a las 57 universidades nacionales (Córdoba -UNC-, La Plata -UNLP-, Rosario -UNR-, Cuyo, Nordeste y las del conurbano como La Matanza, San Martín y Lanús). Motor de ascenso social de primera generación universitaria."
    },
    universidadesPrivadas: {
      nombre: "Universidades Privadas (UADE, Di Tella, San Andrés, UCA, Austral)",
      perfil: "Formación ejecutiva, económica y profesional ligada al sector corporativo y finanzas privadas."
    }
  },

  // 2. SISTEMA EDUCATIVO BÁSICO Y DOCENTE (CTERA, BARADEL, PAROS)
  educacionBasica: {
    parosDocentes: {
      nombre: "Paritarias Docentes y CTERA",
      perfil: "Inicio de clases marcado por la huelga docente nacional, el Fondo Nacional de Incentivo Docente (FONID) y el reclamo salarial de maestros de escuelas públicas de todo el país."
    },
    colegiosPrivados: {
      nombre: "Vouchers Educativos y Subsidios Escolares",
      perfil: "Debate sobre subsidios estatales a colegios privados parroquiales y laicos vs. vouchers directos a las familias para amortiguar la suba de cuotas."
    }
  },

  // 3. PLANES SOCIALES Y TRABAJO (POTENCIAR TRABAJO, SMVM, INTERMEDIARIOS)
  asistenciaSocial: {
    smvm: {
      nombre: "Salario Mínimo, Vital y Móvil (SMVM)",
      perfil: "Fijado en el Consejo del Salario entre empresarios, CGT/CTA y el gobierno. Piso legal de ingresos y referencia clave para jubilaciones y planes de empleo."
    },
    planesSociales: {
      nombre: "Planes Sociales / Potenciar Trabajo / Asignación Universal (AUH)",
      perfil: "Herramienta de supervivencia para millones de familias informales. Debate al rojo vivo: ¿eliminación de intermediarios piqueteros ('gerentes de la pobreza') o criminalización de la ayuda social?"
    }
  },

  // 4. INSTITUCIONES DE PODER: SENADO, DIPUTADOS Y TRIBUNALES
  poderInstitucional: {
    senadoNacion: {
      nombre: "Honorable Senado de la Nación",
      perfil: "Cámara que representa a los gobernadores provinciales (3 por provincia). Histórica trinchera federal donde se traban o negocian leyes clave, pliegos de jueces y coparticipación."
    },
    diputadosNacion: {
      nombre: "Cámara de Diputados de la Nación",
      perfil: "Representación directa del pueblo según población (257 bancas). Escenario de maratónicas sesiones de madrugada, dictámenes de mayoría y 'rosca' de bloques bisagra."
    },
    justiciaFiscales: {
      nombre: "Poder Judicial, Comodoro Py y Fiscales Federales",
      perfil: "Jueces de la Corte Suprema, fiscales antinarcóticos y tribunales federales. Tensión constante por causas de corrupción, pedidos de desafuero a expresidentes e interferencias del Poder Ejecutivo."
    }
  },

  // 5. LAS GRANDES MARCHAS Y MOVILIZACIONES ARGENTINAS
  movilizaciones: {
    marchaUniversitaria: {
      nombre: "Marcha Federal Universitaria",
      perfil: "La movilización cívica más multitudinaria de la clase media argentina, con cientos de miles de estudiantes, docentes y familias con libros en alto defendiendo la educación pública gratuita."
    },
    marcha24Marzo: {
      nombre: "Marcha del 24 de Marzo (Día de la Memoria)",
      perfil: "Masiva concentración histórica en Plaza de Mayo por Memoria, Verdad y Justicia, con Abuelas y Madres de Plaza de Mayo, y tensión con discursos negacionistas o de 'memoria completa'."
    },
    marchaSanCayetano: {
      nombre: "Marcha de San Cayetano (Paz, Pan y Trabajo)",
      perfil: "Caminata de organizaciones sociales y la Iglesia desde Liniers a Plaza de Mayo cada 7 de agosto, pidiendo tierra, techo y trabajo."
    },
    marchaNiUnaMenos: {
      nombre: "Movilización Ni Una Menos / 8M",
      perfil: "Marea feminista contra la violencia machista, femicidios y reclamo de derechos reproductivos e igualdad salarial."
    }
  },

  // 6. CULTURA POPULAR Y FENÓMENOS TELEVISIVOS (GRAN HERMANO Y EL CLIMA SOCIAL)
  culturaPop: {
    granHermano: {
      nombre: "Gran Hermano Argentina (Telefe / DGO)",
      perfil: "El fenómeno de rating más arrollador de la televisión argentina. Paraliza el prime time, marca récords de votos telefónicos y refleja estereotipos, batallas de convivencia, 'carpetazos' y la necesidad de plata de los pibes comunes.",
      impactoPolitico: "Políticos y programas de noticias compitiendo por atención; debates sobre si 'Gran Hermano es el opio del pueblo para tapar la inflación' o un espejo sociológico del individualismo argentino."
    }
  }
};

// Exportación modular para Node.js y navegador
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SOCIEDAD_PROFUNDA };
}

if (typeof window !== 'undefined') {
  window.SOCIEDAD_PROFUNDA = SOCIEDAD_PROFUNDA;
}
