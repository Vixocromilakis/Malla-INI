// Malla curricular completa con prerrequisitos dinámicos
const malla = [
  {
    "semestre": 1,
    "ramos": [
      {
        "nombre": "INTRODUCCIÓN A LOS NEGOCIOS INTERNACIONALES",
        "creditos": 5,
        "abre": ["comercio Internacional"],
        "prereq": []
      },
      {
        "nombre": "GESTIÓN DE ORGANIZACIONES",
        "creditos": 5,
        "abre": ["Personas y organizaciones", "Marketing Estrategico y contabilidad financiera"],
        "prereq": []
      },
      {
        "nombre": "INFORMÁTICA PARA LOS NEGOCIOS",
        "creditos": 5,
        "abre": ["sistemas de informacion"],
        "prereq": []
      },
      {
        "nombre": "ÁLGEBRA",
        "creditos": 6,
        "abre": ["calculo", "contabilidad financiera y calculo 2"],
        "prereq": []
      },
      {
        "nombre": "POLÍTICA Y FORMACIÓN CIUDADANA",
        "creditos": 3,
        "abre": ["derecho empresarial"],
        "prereq": []
      },
      {
        "nombre": "AUTOCONOCIMIENTO",
        "creditos": 3,
        "abre": [],
        "prereq": []
      },
      {
        "nombre": "HABILIDADES COMUNICACIONALES",
        "creditos": 4,
        "abre": ["inlges 1"],
        "prereq": []
      }
    ]
  },
  {
    "semestre": 2,
    "ramos": [
      {
        "nombre": "HISTORIA DE LAS RELACIONES INTERNACIONALES",
        "creditos": 5,
        "abre": ["comercio internacional"],
        "prereq": []
      },
      {
        "nombre": "GEOGRAFÍA POLÍTICA Y ECONÓMICA",
        "creditos": 5,
        "abre": ["comercio internacional"],
        "prereq": []
      },
      {
        "nombre": "PSICOLOGÍA SOCIAL Y ORGANIZACIONAL",
        "creditos": 5,
        "abre": ["personas y organizaciones"],
        "prereq": []
      },
      {
        "nombre": "SISTEMAS DE INFORMACIÓN I",
        "creditos": 4,
        "abre": ["sistemas de informacion 2"],
        "prereq": ["INFORMÁTICA PARA LOS NEGOCIOS"]
      },
      {
        "nombre": "CÁLCULO",
        "creditos": 5,
        "abre": ["estadísticas para los negocios", "Microeconomia", "practicas intermedias"],
        "prereq": ["ÁLGEBRA"]
      },
      {
        "nombre": "INGLÉS I",
        "creditos": 5,
        "abre": ["ingles 2"],
        "prereq": ["HABILIDADES COMUNICACIONALES"]
      }
    ]
  },
    {
    "semestre": 3,
    "ramos": [
      { "nombre": "PERSONAS Y ORGANIZACIONES", "creditos": 5, "abre": ["SIMULACIÓN DE NEGOCIOS"], "prereq": ["GESTIÓN DE ORGANIZACIONES", "PSICOLOGÍA SOCIAL Y ORGANIZACIONAL"] },
      { "nombre": "MARKETING ESTRATÉGICO", "creditos": 5, "abre": ["SIMULACIÓN DE NEGOCIOS", "MARKETING OPERATIVO", "METODOLOGÍA DE INVESTIGACIÓN DE NEGOCIOS INTERNACIONALES"], "prereq": ["GESTIÓN DE ORGANIZACIONES"] },
      { "nombre": "CÁLCULO II", "creditos": 5, "abre": ["MÉTODOS CUANTITATIVOS"], "prereq": ["ÁLGEBRA"] },
      { "nombre": "CONTABILIDAD FINANCIERA", "creditos": 5, "abre": ["SIMULACIÓN DE NEGOCIOS", "CONTABILIDAD ADMINISTRATIVA"], "prereq": ["GESTIÓN DE ORGANIZACIONES", "ÁLGEBRA"] },
      { "nombre": "DERECHO EMPRESARIAL", "creditos": 4, "abre": ["DERECHO COMERCIAL INTERNACIONAL"], "prereq": ["POLÍTICA Y FORMACIÓN CIUDADANA"] },
      { "nombre": "INGLÉS II", "creditos": 5, "abre": ["INGLÉS III"], "prereq": ["INGLÉS I"] }
    ]
  },
  {
    "semestre": 4,
    "ramos": [
      { "nombre": "SIMULACIÓN DE NEGOCIOS", "creditos": 7, "abre": ["PRÁCTICAS INTERMEDIAS", "TEORÍA DEL CONFLICTO Y NEGOCIACIÓN"], "prereq": ["CONTABILIDAD FINANCIERA", "MARKETING ESTRATÉGICO", "PERSONAS Y ORGANIZACIONES"] },
      { "nombre": "MARKETING OPERATIVO", "creditos": 5, "abre": [], "prereq": ["MARKETING ESTRATÉGICO"] },
      { "nombre": "ESTADÍSTICA PARA LOS NEGOCIOS", "creditos": 5, "abre": ["MÉTODOS CUANTITATIVOS", "METODOLOGÍA DE INVESTIGACIÓN DE NEGOCIOS INTERNACIONALES"], "prereq": ["CÁLCULO"] },
      { "nombre": "CONTABILIDAD ADMINISTRATIVA", "creditos": 5, "abre": ["GESTIÓN FINANCIERA", "PRÁCTICAS INTERMEDIAS", "GESTIÓN DE OPERACIONES"], "prereq": ["CONTABILIDAD FINANCIERA"] },
      { "nombre": "MICROECONOMÍA", "creditos": 5, "abre": ["MACROECONOMÍA"], "prereq": ["CÁLCULO"] },
      { "nombre": "INGLÉS III", "creditos": 4, "abre": ["INGLÉS IV", "NEGOCIACIONES INTERNACIONALES"], "prereq": ["INGLÉS II"] }
    ]
  }
];

  {
    "semestre": 5,
    "ramos": [
      { "nombre": "SISTEMAS DE INFORMACIÓN II", "creditos": 4, "abre": ["SIMULACIÓN DE NEGOCIOS II"], "prereq": ["SISTEMAS DE INFORMACIÓN I"] },
      { "nombre": "MÉTODOS CUANTITATIVOS", "creditos": 5, "abre": ["GESTIÓN DE OPERACIONES"], "prereq": ["CÁLCULO II", "ESTADÍSTICA PARA LOS NEGOCIOS"] },
      { "nombre": "GESTIÓN FINANCIERA", "creditos": 5, "abre": ["FINANZAS CORPORATIVAS"], "prereq": ["CONTABILIDAD ADMINISTRATIVA"] },
      { "nombre": "COMERCIO INTERNACIONAL", "creditos": 5, "abre": ["GESTIÓN ADUANERA Y DOCUMENTAL", "DERECHO COMERCIAL INTERNACIONAL"], "prereq": ["INTRODUCCIÓN A LOS NEGOCIOS INTERNACIONALES", "HISTORIA DE LAS RELACIONES INTERNACIONALES", "GEOGRAFÍA POLÍTICA Y ECONÓMICA"] },
      { "nombre": "TALLER PERFIL UV 1", "creditos": 2, "abre": [] , "prereq": [] },
      { "nombre": "INGLÉS IV", "creditos": 5, "abre": ["ACADEMIC COMMUNICATIONAL ENGLISH", "ENGLISH FOR INTERNATIONAL MANAGEMENT", "ENGLISH FOR FOREIGN TRADE", "SIMULACIÓN DE NEGOCIOS II"], "prereq": ["INGLÉS III"] },
      { "nombre": "PRÁCTICAS INTERMEDIAS", "creditos": 4, "abre": [], "prereq": ["CÁLCULO", "SIMULACIÓN DE NEGOCIOS", "CONTABILIDAD ADMINISTRATIVA"] }
    ]
  },
  {
    "semestre": 6,
    "ramos": [
      { "nombre": "TEORÍA DEL CONFLICTO Y NEGOCIACIÓN", "creditos": 5, "abre": ["NEGOCIACIONES INTERNACIONALES", "PRÁCTICA PROFESIONAL"], "prereq": ["SIMULACIÓN DE NEGOCIOS"] },
      { "nombre": "GESTIÓN DE OPERACIONES", "creditos": 5, "abre": ["TRANSPORTE Y DISTRIBUCIÓN INTERNACIONAL", "PRÁCTICA PROFESIONAL"], "prereq": ["CONTABILIDAD ADMINISTRATIVA", "MÉTODOS CUANTITATIVOS"] },
      { "nombre": "MACROECONOMÍA", "creditos": 5, "abre": ["ECONOMÍA INTERNACIONAL", "SIMULACIÓN DE NEGOCIOS II", "PRÁCTICA PROFESIONAL"], "prereq": ["MICROECONOMÍA"] },
      { "nombre": "DERECHO COMERCIAL INTERNACIONAL", "creditos": 4, "abre": ["INTEGRACIÓN COMERCIAL INTERNACIONAL", "PRÁCTICA PROFESIONAL"], "prereq": ["DERECHO EMPRESARIAL", "COMERCIO INTERNACIONAL"] },
      { "nombre": "GESTIÓN ADUANERA Y DOCUMENTAL", "creditos": 5, "abre": ["LOGÍSTICA Y SEGUROS INTERNACIONALES", "GESTIÓN BANCARIA INTERNACIONAL", "PRÁCTICA PROFESIONAL"], "prereq": ["COMERCIO INTERNACIONAL"] },
      { "nombre": "TALLER PERFIL UV 2", "creditos": 2, "abre": ["PRÁCTICA PROFESIONAL"], "prereq": [] },
      { "nombre": "ACADEMIC COMMUNICATIONAL ENGLISH", "creditos": 4, "abre": ["PRÁCTICA PROFESIONAL"], "prereq": ["INGLÉS IV"] }
    ]
  }

  {
    "semestre": 7,
    "ramos": [
      { "nombre": "NEGOCIACIONES INTERNACIONALES", "creditos": 4, "abre": ["ELECTIVO DE ACTUALIZACIÓN", "FORMACIÓN CIUDADANA GLOBAL"], "prereq": ["TEORÍA DEL CONFLICTO Y NEGOCIACIÓN", "INGLÉS III"] },
      { "nombre": "FINANZAS CORPORATIVAS", "creditos": 5, "abre": ["FORMULACIÓN Y EVALUACIÓN DE PROYECTOS", "ELECTIVO DE ACTUALIZACIÓN", "FINANZAS INTERNACIONALES"], "prereq": ["GESTIÓN FINANCIERA"] },
      { "nombre": "ECONOMÍA INTERNACIONAL", "creditos": 4, "abre": ["ELECTIVO DE ACTUALIZACIÓN", "ANÁLISIS DE ENTORNO Y COYUNTURA"], "prereq": ["MACROECONOMÍA"] },
      { "nombre": "LOGÍSTICA Y SEGUROS INTERNACIONALES", "creditos": 5, "abre": ["TRANSPORTE Y DISTRIBUCIÓN INTERNACIONAL", "ELECTIVO DE ACTUALIZACIÓN"], "prereq": ["GESTIÓN ADUANERA Y DOCUMENTAL"] },
      { "nombre": "METODOLOGÍA DE INVESTIGACIÓN DE NEGOCIOS INTERNACIONALES", "creditos": 4, "abre": ["MARKETING INTERNACIONAL Y GLOBAL", "SIMULACIÓN DE NEGOCIOS II", "ELECTIVO DE ACTUALIZACIÓN"], "prereq": ["ESTADÍSTICA PARA LOS NEGOCIOS", "MARKETING ESTRATÉGICO"] },
      { "nombre": "TALLER PERFIL UV 3", "creditos": 2, "abre": ["ELECTIVO DE ACTUALIZACIÓN"], "prereq": [] },
      { "nombre": "ENGLISH FOR INTERNATIONAL MANAGEMENT", "creditos": 4, "abre": ["ELECTIVO DE ACTUALIZACIÓN"], "prereq": ["INGLÉS IV"] }
    ]
  },
  {
    "semestre": 8,
    "ramos": [
      { "nombre": "INTEGRACIÓN COMERCIAL INTERNACIONAL", "creditos": 4, "abre": ["DIRECCIÓN Y GESTIÓN INTERNACIONAL", "ANÁLISIS DE ENTORNO Y COYUNTURA"], "prereq": ["DERECHO COMERCIAL INTERNACIONAL"] },
      { "nombre": "MARKETING INTERNACIONAL Y GLOBAL", "creditos": 4, "abre": ["DIRECCIÓN Y GESTIÓN INTERNACIONAL"], "prereq": ["METODOLOGÍA DE INVESTIGACIÓN DE NEGOCIOS INTERNACIONALES"] },
      { "nombre": "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS", "creditos": 4, "abre": ["DIRECCIÓN Y GESTIÓN INTERNACIONAL"], "prereq": ["FINANZAS CORPORATIVAS"] },
      { "nombre": "TRANSPORTE Y DISTRIBUCIÓN INTERNACIONAL", "creditos": 5, "abre": [], "prereq": ["GESTIÓN DE OPERACIONES", "LOGÍSTICA Y SEGUROS INTERNACIONALES"] },
      { "nombre": "GESTIÓN BANCARIA INTERNACIONAL", "creditos": 5, "abre": [], "prereq": ["GESTIÓN ADUANERA Y DOCUMENTAL"] },
      { "nombre": "ENGLISH FOR FOREIGN TRADE", "creditos": 4, "abre": [], "prereq": ["INGLÉS IV"] },
      { "nombre": "SIMULACIÓN DE NEGOCIOS II", "creditos": 5, "abre": ["SEMINARIO DE TÍTULO"], "prereq": ["MACROECONOMÍA", "SISTEMAS DE INFORMACIÓN II", "METODOLOGÍA DE INVESTIGACIÓN DE NEGOCIOS INTERNACIONALES", "INGLÉS IV"] }
    ]
  },

  {
    "semestre": 9,
    "ramos": [
      { "nombre": "DIRECCIÓN Y GESTIÓN INTERNACIONAL", "creditos": 5, "abre": [], "prereq": ["INTEGRACIÓN COMERCIAL INTERNACIONAL", "MARKETING INTERNACIONAL Y GLOBAL", "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS"] },
      { "nombre": "ELECTIVO DE ACTUALIZACIÓN", "creditos": 4, "abre": [], "prereq": ["NEGOCIACIONES INTERNACIONALES", "FINANZAS CORPORATIVAS", "ECONOMÍA INTERNACIONAL", "LOGÍSTICA Y SEGUROS INTERNACIONALES", "METODOLOGÍA DE INVESTIGACIÓN DE NEGOCIOS INTERNACIONALES", "TALLER PERFIL UV 3", "ENGLISH FOR INTERNATIONAL MANAGEMENT"] },
      { "nombre": "FINANZAS INTERNACIONALES", "creditos": 5, "abre": [], "prereq": ["FINANZAS CORPORATIVAS"] },
      { "nombre": "ANÁLISIS DE ENTORNO Y COYUNTURA", "creditos": 5, "abre": [], "prereq": ["ECONOMÍA INTERNACIONAL", "INTEGRACIÓN COMERCIAL INTERNACIONAL"] },
      { "nombre": "FORMACIÓN CIUDADANA GLOBAL", "creditos": 3, "abre": [], "prereq": ["NEGOCIACIONES INTERNACIONALES"] },
      { "nombre": "CURSO I DE ESPECIALIZACIÓN", "creditos": 0, "abre": [], "prereq": [] }
    ]
  },
  {
    "semestre": 10,
    "ramos": [
      { "nombre": "PRÁCTICA PROFESIONAL", "creditos": 16, "abre": [], "prereq": ["TEORÍA DEL CONFLICTO Y NEGOCIACIÓN", "GESTIÓN DE OPERACIONES", "MACROECONOMÍA", "DERECHO COMERCIAL INTERNACIONAL", "GESTIÓN ADUANERA Y DOCUMENTAL", "TALLER PERFIL UV 2", "ACADEMIC COMMUNICATIONAL ENGLISH"] },
      { "nombre": "SEMINARIO DE TÍTULO", "creditos": 12, "abre": [], "prereq": ["SIMULACIÓN DE NEGOCIOS II"] },
      { "nombre": "CURSO II DE ESPECIALIZACIÓN", "creditos": 0, "abre": [], "prereq": [] }
    ]
  }

];

// Búsqueda por nombre
function buscarRamo(nombreBuscado) {
  const resultados = document.querySelectorAll(".ramo");
  resultados.forEach(div => {
    if (div.dataset.nombre.toLowerCase().includes(nombreBuscado.toLowerCase())) {
      div.style.border = "3px solid orange";
    } else {
      div.style.border = "1px solid transparent";
    }
  });
}

// Mostrar créditos por semestre
function calcularCreditosPorSemestre() {
  const resumen = {};
  malla.forEach(sem => {
    resumen[sem.semestre] = sem.ramos
      .filter(r => aprobados.has(r.nombre))
      .reduce((acc, r) => acc + r.creditos, 0);
  });
  const salida = Object.entries(resumen)
    .map(([sem, creditos]) => `Semestre ${sem}: ${creditos} créditos`)
    .join("
");

  alert("Créditos aprobados por semestre:
" + salida);
}
}

// Mostrar solo ramos desbloqueados
function ocultarBloqueados() {
  document.querySelectorAll(".ramo").forEach(div => {
    if (!div.classList.contains("activo") && !div.classList.contains("aprobado")) {
      div.style.display = "none";
    } else {
      div.style.display = "block";
    }
  });
}

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
      div.textContent = `${ramo.nombre}
Créditos: ${ramo.creditos}`;
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

function mostrarDetalles(ramo) {
  document.getElementById("detalle-nombre").textContent = ramo.nombre;
  document.getElementById("detalle-creditos").textContent = ramo.creditos;
  document.getElementById("detalle-prereq").textContent = ramo.prereq.length > 0 ? ramo.prereq.join(", ") : "Ninguno";
  document.getElementById("detalle-requisitos").textContent = ramo.abre.length > 0 ? ramo.abre.join(", ") : "Ninguno";
}

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

document.addEventListener("DOMContentLoaded", () => {
  const panel = document.createElement("div");
  panel.style.position = "fixed";
  panel.style.top = "1rem";
  panel.style.right = "1rem";
  panel.style.background = "#fff";
  panel.style.padding = "1rem";
  panel.style.border = "1px solid #ccc";
  panel.style.borderRadius = "8px";
  panel.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
  panel.style.zIndex = 1000;

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Buscar ramo";
  searchInput.style.marginBottom = "0.5rem";
  searchInput.style.width = "100%";
  searchInput.addEventListener("input", () => buscarRamo(searchInput.value));

  const btnCreditos = document.createElement("button");
  btnCreditos.textContent = "Ver créditos por semestre";
  btnCreditos.style.display = "block";
  btnCreditos.style.margin = "0.3rem 0";
  btnCreditos.onclick = calcularCreditosPorSemestre;

  const btnFiltrar = document.createElement("button");
  btnFiltrar.textContent = "Mostrar solo desbloqueados";
  btnFiltrar.style.display = "block";
  btnFiltrar.style.margin = "0.3rem 0";
  btnFiltrar.onclick = ocultarBloqueados;

  panel.appendChild(searchInput);
  panel.appendChild(btnCreditos);
  panel.appendChild(btnFiltrar);
  document.body.appendChild(panel);

  renderMalla();
});
});
