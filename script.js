// Malla curricular completa con prerrequisitos dinámicos
const malla = [
  {
    "semestre": 1,
    "ramos": [
      { "nombre": "INTRODUCCIÓN A LOS NEGOCIOS INTERNACIONALES", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "GESTIÓN DE ORGANIZACIONES", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "INFORMÁTICA PARA LOS NEGOCIOS", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "ÁLGEBRA", "creditos": 6, "abre": [], "prereq": [] },
      { "nombre": "POLÍTICA Y FORMACIÓN CIUDADANA", "creditos": 3, "abre": [], "prereq": [] },
      { "nombre": "HABILIDADES COMUNICACIONALES", "creditos": 4, "abre": [], "prereq": [] }
    ]
  },
  {
    "semestre": 2,
    "ramos": [
      { "nombre": "HISTORIA DE LAS RELACIONES INTERNACIONALES", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "GEOGRAFÍA POLÍTICA Y ECONÓMICA", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "PSICOLOGÍA SOCIAL Y ORGANIZACIONAL", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "SISTEMAS DE INFORMACIÓN I", "creditos": 4, "abre": [], "prereq": [] },
      { "nombre": "CÁLCULO", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "INGLÉS I", "creditos": 5, "abre": [], "prereq": [] }
    ]
  },
  {
    "semestre": 3,
    "ramos": [
      { "nombre": "PERSONAS Y ORGANIZACIONES", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "MARKETING ESTRATÉGICO", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "CÁLCULO II", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "CONTABILIDAD FINANCIERA", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "DERECHO EMPRESARIAL", "creditos": 4, "abre": [], "prereq": [] },
      { "nombre": "INGLÉS II", "creditos": 5, "abre": [], "prereq": [] }
    ]
  },
  {
    "semestre": 4,
    "ramos": [
      { "nombre": "SIMULACIÓN DE NEGOCIOS", "creditos": 6, "abre": [], "prereq": [] },
      { "nombre": "SISTEMAS DE INFORMACIÓN II", "creditos": 4, "abre": [], "prereq": [] },
      { "nombre": "MICROECONOMÍA", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "ESTADÍSTICA PARA LOS NEGOCIOS", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "CONTABILIDAD ADMINISTRATIVA", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "INGLÉS III", "creditos": 5, "abre": [], "prereq": [] }
    ]
  },
  {
    "semestre": 5,
    "ramos": [
      { "nombre": "COMERCIO INTERNACIONAL", "creditos": 6, "abre": [], "prereq": [] },
      { "nombre": "MARKETING OPERATIVO", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "MÉTODOS CUANTITATIVOS", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "DERECHO COMERCIAL INTERNACIONAL", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "INGLÉS IV", "creditos": 5, "abre": [], "prereq": [] }
    ]
  },
  {
    "semestre": 6,
    "ramos": [
      { "nombre": "ECONOMÍA INTERNACIONAL", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "GESTIÓN DE OPERACIONES GLOBALES", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "INTELIGENCIA DE NEGOCIOS", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "GESTIÓN ADUANERA", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "INGLÉS DE NEGOCIOS INTERNACIONALES", "creditos": 5, "abre": [], "prereq": [] }
    ]
  },
  {
    "semestre": 7,
    "ramos": [
      { "nombre": "ESTRATEGIA DE INTERNACIONALIZACIÓN", "creditos": 6, "abre": [], "prereq": [] },
      { "nombre": "LOGÍSTICA Y CADENAS DE SUMINISTRO GLOBALES", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "TRIBUTACIÓN DEL COMERCIO INTERNACIONAL", "creditos": 5, "abre": [], "prereq": [] },
      { "nombre": "METODOLOGÍA DE INVESTIGACIÓN DE NEGOCIOS INTERNACIONALES", "creditos": 5, "abre": [], "prereq": [] }
    ]
  },
  {
    "semestre": 8,
    "ramos": [
      { "nombre": "SEMINARIO DE TÍTULO", "creditos": 10, "abre": [], "prereq": [] },
      { "nombre": "TALLER DE INTEGRACIÓN", "creditos": 10, "abre": [], "prereq": [] }
    ]
  },
  {
    "semestre": 9,
    "ramos": [
      { "nombre": "PRÁCTICA INTERMEDIA", "creditos": 10, "abre": [], "prereq": [] }
    ]
  },
  {
    "semestre": 10,
    "ramos": [
      { "nombre": "PRÁCTICA PROFESIONAL", "creditos": 10, "abre": [], "prereq": [] },
      { "nombre": "EXAMEN DE TÍTULO", "creditos": 5, "abre": [], "prereq": [] }
    ]
  }
];
