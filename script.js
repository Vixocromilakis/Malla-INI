// Estructura de los ramos
const malla = {
  semestre: X, // Número del semestre
  ramos: [
    { nombre: "NOMBRE RAMO", creditos: X, prereq: ["RAMO PREREQUISITO"], abre: ["RAMOS QUE ABRE"] },
    // más ramos...
  ]
}, 
  [
  {
  // SEMESTRE 1
  'intro_negocios': { nombre: 'Introducción a los Negocios Internacionales', creditos: 5, prerequisitos: [], abre: ['comercio_internacional'], semestre: 1 },
  
  'gestion_organizaciones': { nombre: 'Gestión de Organizaciones', creditos: 5, prerequisitos: [], abre: ['personas_organizaciones','marketing_estrategico','contabilidad_financiera'], semestre: 1 },
  'informatica': {
    nombre: 'Informática para los Negocios', creditos: 5, prerequisitos: [], abre: ['sistemas1'], semestre: 1
  },
  'algebra': {
    nombre: 'Álgebra', creditos: 6, prerequisitos: [], abre: ['calculo','contabilidad_financiera','calculo2'], semestre: 1
  },
  'formacion_ciudadana': {
    nombre: 'Política y Formación Ciudadana', creditos: 3, prerequisitos: [], abre: ['derecho_empresarial'], semestre: 1
  },
  'autoconocimiento': {
    nombre: 'Autoconocimiento', creditos: 3, prerequisitos: [], abre: [], semestre: 1
  },
  'habilidades_comunicacionales': {
    nombre: 'Habilidades Comunicacionales', creditos: 4, prerequisitos: [], abre: ['ingles1'], semestre: 1
  },

  // SEMESTRE 2
  'historia_relaciones': {
    nombre: 'Historia de las Relaciones Internacionales', creditos: 5, prerequisitos: [], abre: ['comercio_internacional'], semestre: 2
  },
  'geografia': {
    nombre: 'Geografía Política y Económica', creditos: 5, prerequisitos: [], abre: ['comercio_internacional'], semestre: 2
  },
  'psicologia': {
    nombre: 'Psicología Social y Organizacional', creditos: 5, prerequisitos: [], abre: ['personas_organizaciones'], semestre: 2
  },
  'sistemas1': {
    nombre: 'Sistemas de Información I', creditos: 4, prerequisitos: ['informatica'], abre: ['sistemas2'], semestre: 2
  },
  'calculo': {
    nombre: 'Cálculo', creditos: 5, prerequisitos: ['algebra'], abre: ['estadisticas','microeconomia','practicas'], semestre: 2
  },
  'ingles1': {
    nombre: 'Inglés I', creditos: 5, prerequisitos: ['habilidades_comunicacionales'], abre: ['ingles2'], semestre: 2
  },

  // SEMESTRE 3
  'personas_organizaciones': {
    nombre: 'Personas y Organizaciones', creditos: 5, prerequisitos: ['gestion_organizaciones','psicologia'], abre: ['simulacion1'], semestre: 3
  },
  'marketing_estrategico': {
    nombre: 'Marketing Estratégico', creditos: 5, prerequisitos: ['gestion_organizaciones'], abre: ['simulacion1','marketing_operativo','metodologia'], semestre: 3
  },
  'calculo2': {
    nombre: 'Cálculo II', creditos: 5, prerequisitos: ['algebra'], abre: ['metodos_cuantitativos'], semestre: 3
  },
  'contabilidad_financiera': {
    nombre: 'Contabilidad Financiera', creditos: 5, prerequisitos: ['algebra','gestion_organizaciones'], abre: ['simulacion1','contabilidad_administrativa'], semestre: 3
  },
  'derecho_empresarial': {
    nombre: 'Derecho Empresarial', creditos: 4, prerequisitos: ['formacion_ciudadana'], abre: ['derecho_comercial'], semestre: 3
  },
  'ingles2': {
    nombre: 'Inglés II', creditos: 5, prerequisitos: ['ingles1'], abre: ['ingles3'], semestre: 3
  },

  // SEMESTRE 4
  'simulacion1': {
    nombre: 'Simulación de Negocios', creditos: 7, prerequisitos: ['personas_organizaciones','marketing_estrategico','contabilidad_financiera'], abre: ['practicas','negociacion'], semestre: 4
  },
  'marketing_operativo': {
    nombre: 'Marketing Operativo', creditos: 5, prerequisitos: ['marketing_estrategico'], abre: [], semestre: 4
  },
  'estadisticas': {
    nombre: 'Estadística para los Negocios', creditos: 5, prerequisitos: ['calculo'], abre: ['metodos_cuantitativos','metodologia'], semestre: 4
  },
  'contabilidad_administrativa': {
    nombre: 'Contabilidad Administrativa', creditos: 5, prerequisitos: ['contabilidad_financiera'], abre: ['gestion_financiera','practicas','operaciones'], semestre: 4
  },
  'microeconomia': {
    nombre: 'Microeconomía', creditos: 5, prerequisitos: ['calculo'], abre: ['macroeconomia'], semestre: 4
  },
  'ingles3': {
    nombre: 'Inglés III', creditos: 4, prerequisitos: ['ingles2'], abre: ['ingles4','negociaciones'], semestre: 4
  },

  // SEMESTRE 5
  'sistemas2': {
    nombre: 'Sistemas de Información II', creditos: 4, prerequisitos: ['sistemas1'], abre: ['simulacion2'], semestre: 5
  },
  'metodos_cuantitativos': {
    nombre: 'Métodos Cuantitativos', creditos: 5, prerequisitos: ['calculo2','estadisticas'], abre: ['operaciones'], semestre: 5
  },
  'gestion_financiera': {
    nombre: 'Gestión Financiera', creditos: 5, prerequisitos: ['contabilidad_administrativa'], abre: ['finanzas_corporativas'], semestre: 5
  },
  'comercio_internacional': {
    nombre: 'Comercio Internacional', creditos: 5, prerequisitos: ['intro_negocios','historia_relaciones','geografia'], abre: ['gestion_aduanera','derecho_comercial'], semestre: 5
  },
  'perfil1': {
    nombre: 'Taller Perfil UV 1', creditos: 2, prerequisitos: [], abre: [], semestre: 5
  },
  'ingles4': {
    nombre: 'Inglés IV', creditos: 5, prerequisitos: ['ingles3'], abre: ['english_academic','english_management','english_trade','simulacion2'], semestre: 5
  },
  'practicas': {
    nombre: 'Prácticas Intermedias', creditos: 4, prerequisitos: ['calculo','contabilidad_administrativa','simulacion1'], abre: [], semestre: 5
  },

  // SEMESTRE 6
  'negociacion': {
    nombre: 'Teoría del Conflicto y Negociación', creditos: 5, prerequisitos: ['simulacion1'], abre: ['negociaciones','practica'], semestre: 6
  },
  'operaciones': {
    nombre: 'Gestión de Operaciones', creditos: 5, prerequisitos: ['contabilidad_administrativa','metodos_cuantitativos'], abre: ['transporte','practica'], semestre: 6
  },
  'macroeconomia': {
    nombre: 'Macroeconomía', creditos: 5, prerequisitos: ['microeconomia'], abre: ['economia_internacional','simulacion2','practica'], semestre: 6
  },
  'derecho_comercial': {
    nombre: 'Derecho Comercial Internacional', creditos: 4, prerequisitos: ['derecho_empresarial','comercio_internacional'], abre: ['integracion','practica'], semestre: 6
  },
  'gestion_aduanera': {
    nombre: 'Gestión Aduanera y Documental', creditos: 5, prerequisitos: ['comercio_internacional'], abre: ['logistica','bancaria','practica'], semestre: 6
  },
  'perfil2': {
    nombre: 'Taller Perfil UV 2', creditos: 2, prerequisitos: ['perfil1'], abre: ['practica'], semestre: 6
  },
  'english_academic': {
    nombre: 'Academic Communicational English', creditos: 4, prerequisitos: ['ingles4'], abre: ['practica'], semestre: 6
  },

  // SEMESTRE 7
  'negociaciones': {
    nombre: 'Negociaciones Internacionales', creditos: 4, prerequisitos: ['ingles3','negociacion'], abre: ['electivo','ciudadana_global'], semestre: 7
  },
  'finanzas_corporativas': {
    nombre: 'Finanzas Corporativas', creditos: 5, prerequisitos: ['gestion_financiera'], abre: ['proyectos','electivo','finanzas_internacionales'], semestre: 7
  },
  'economia_internacional': {
    nombre: 'Economía Internacional', creditos: 4, prerequisitos: ['macroeconomia'], abre: ['electivo','coyuntura'], semestre: 7
  },
  'logistica': {
    nombre: 'Logística y Seguros Internacionales', creditos: 5, prerequisitos: ['gestion_aduanera'], abre: ['transporte','electivo'], semestre: 7
  },
  'metodologia': {
    nombre: 'Metodología de Investigación de Negocios Internacionales', creditos: 4, prerequisitos: ['estadisticas','marketing_estrategico'], abre: ['marketing_global','simulacion2','electivo'], semestre: 7
  },
  'perfil3': {
    nombre: 'Taller Perfil UV 3', creditos: 2, prerequisitos: ['perfil2'], abre: ['electivo'], semestre: 7
  },
  'english_management': {
    nombre: 'English for International Management', creditos: 4, prerequisitos: ['ingles4'], abre: ['electivo'], semestre: 7
  },

// SEMESTRE 8
  'integracion': {
    nombre: 'Integración Comercial Internacional', creditos: 4, prerequisitos: ['derecho_comercial'], abre: ['direccion','coyuntura'], semestre: 8
  },
  'marketing_global': {
    nombre: 'Marketing Internacional y Global', creditos: 4, prerequisitos: ['metodologia'], abre: ['direccion'], semestre: 8
  },
  'proyectos': {
    nombre: 'Formulación y Evaluación de Proyectos', creditos: 4, prerequisitos: ['finanzas_corporativas'], abre: ['direccion'], semestre: 8
  },
  'transporte': {
    nombre: 'Transporte y Distribución Internacional', creditos: 5, prerequisitos: ['logistica','operaciones'], abre: [], semestre: 8
  },
  'bancaria': {
    nombre: 'Gestión Bancaria Internacional', creditos: 5, prerequisitos: ['gestion_aduanera'], abre: [], semestre: 8
  },
  'english_trade': {
    nombre: 'English for Foreign Trade', creditos: 4, prerequisitos: ['ingles4'], abre: [], semestre: 8
  },
  'simulacion2': {
    nombre: 'Simulación de Negocios II', creditos: 5, prerequisitos: ['sistemas2','english_trade','macroeconomia','metodologia'], abre: ['seminario'], semestre: 8
  },

  // SEMESTRE 9
  'direccion': {
    nombre: 'Dirección y Gestión Internacional', creditos: 5, prerequisitos: ['integracion','marketing_global','proyectos'], abre: [], semestre: 9
  },
  'electivo': {
    nombre: 'Electivo de Actualización', creditos: 4, prerequisitos: ['negociaciones','finanzas_corporativas','economia_internacional','logistica','metodologia','perfil3','english_management'], abre: [], semestre: 9
  },
  'finanzas_internacionales': {
    nombre: 'Finanzas Internacionales', creditos: 5, prerequisitos: ['finanzas_corporativas'], abre: [], semestre: 9
  },
  'coyuntura': {
    nombre: 'Análisis de Entorno y Coyuntura', creditos: 5, prerequisitos: ['economia_internacional','integracion'], abre: [], semestre: 9
  },
  'ciudadana_global': {
    nombre: 'Formación Ciudadana Global', creditos: 3, prerequisitos: ['negociaciones'], abre: [], semestre: 9
  },
  'especializacion1': {
    nombre: 'Curso I de Especialización', creditos: 0, prerequisitos: [], abre: [], semestre: 9
  },

  // SEMESTRE 10
  'practica': {
    nombre: 'Práctica Profesional', creditos: 16, prerequisitos: ['perfil2','english_academic','gestion_aduanera','derecho_comercial','macroeconomia','negociacion','operaciones'], abre: [], semestre: 10
  },
  'seminario': {
    nombre: 'Seminario de Título', creditos: 12, prerequisitos: ['simulacion2'], abre: [], semestre: 10
  },
  'especializacion2': {
    nombre: 'Curso II de Especialización', creditos: 0, prerequisitos: [], abre: [], semestre: 10
  },
};
];

// Estado de los ramos
let aprobados = new Set();
let creditosTotales = 0;

// Renderizar malla
function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  malla.forEach((sem) => {
    const bloque = document.createElement("section");
    bloque.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${sem.semestre}`;
    bloque.appendChild(titulo);

    sem.ramos.forEach((ramo) => {
      const div = document.createElement("div");
      div.classList.add("ramo");
      div.textContent = ramo.nombre;
      div.dataset.nombre = ramo.nombre;

      if (ramo.prereq.length === 0) {
        div.classList.add("activo");
      }

      div.addEventListener("click", () => {
        if (!div.classList.contains("activo") || div.classList.contains("aprobado")) return;

        div.classList.add("aprobado");
        aprobados.add(ramo.nombre);
        creditosTotales += ramo.creditos;
        document.getElementById("creditos-total").textContent = creditosTotales;

        mostrarDetalles(ramo);
        desbloquearRamos();
      });

      bloque.appendChild(div);
    });

    contenedor.appendChild(bloque);
  });
}

// Mostrar detalles del ramo
function mostrarDetalles(ramo) {
  document.getElementById("detalle-nombre").textContent = ramo.nombre;
  document.getElementById("detalle-creditos").textContent = ramo.creditos;
  document.getElementById("detalle-prereq").textContent = ramo.prereq.length > 0 ? ramo.prereq.join(", ") : "Ninguno";
  document.getElementById("detalle-requisitos").textContent = ramo.abre.length > 0 ? ramo.abre.join(", ") : "Ninguno";
}

// Activar ramos desbloqueados
function desbloquearRamos() {
  malla.forEach((sem) => {
    sem.ramos.forEach((ramo) => {
      const div = document.querySelector(`.ramo[data-nombre='${ramo.nombre}']`);
      if (aprobados.has(ramo.nombre)) return;
      if (ramo.prereq.every((req) => aprobados.has(req))) {
        div.classList.add("activo");
        div.style.cursor = "pointer";
        div.style.opacity = "1";
      }
    });
  });
}

// Iniciar
document.addEventListener("DOMContentLoaded", () => {
  renderMalla();
});
