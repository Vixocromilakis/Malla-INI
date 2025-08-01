// Estructura de los ramos por semestre con prerequisitos y relaciones
const malla = [
  {
    semestre: 1,
    ramos: [
      { nombre: "INTRODUCCIÓN A LOS NEGOCIOS INTERNACIONALES", creditos: 5, prereq: [], abre: ["COMERCIO INTERNACIONAL"] },
      { nombre: "GESTIÓN DE ORGANIZACIONES", creditos: 5, prereq: [], abre: ["PERSONAS Y ORGANIZACIONES", "MARKETING ESTRATÉGICO", "CONTABILIDAD FINANCIERA"] },
      { nombre: "INFORMÁTICA PARA LOS NEGOCIOS", creditos: 5, prereq: [], abre: ["SISTEMAS DE INFORMACIÓN I"] },
      { nombre: "ÁLGEBRA", creditos: 6, prereq: [], abre: ["CÁLCULO", "CONTABILIDAD FINANCIERA", "CÁLCULO II"] },
      { nombre: "POLÍTICA Y FORMACIÓN CIUDADANA", creditos: 3, prereq: [], abre: ["DERECHO EMPRESARIAL"] },
      { nombre: "AUTOCONOCIMIENTO", creditos: 3, prereq: [], abre: [] },
      { nombre: "HABILIDADES COMUNICACIONALES", creditos: 4, prereq: [], abre: ["INGLÉS I"] }
    ]
  },
  {
    semestre: 2,
    ramos: [
      { nombre: "HISTORIA DE LAS RELACIONES INTERNACIONALES", creditos: 5, prereq: [], abre: ["COMERCIO INTERNACIONAL"] },
      { nombre: "GEOGRAFÍA POLÍTICA Y ECONÓMICA", creditos: 5, prereq: [], abre: ["COMERCIO INTERNACIONAL"] },
      { nombre: "PSICOLOGÍA SOCIAL Y ORGANIZACIONAL", creditos: 5, prereq: [], abre: ["PERSONAS Y ORGANIZACIONES"] },
      { nombre: "SISTEMAS DE INFORMACIÓN I", creditos: 4, prereq: ["INFORMÁTICA PARA LOS NEGOCIOS"], abre: ["SISTEMAS DE INFORMACIÓN II"] },
      { nombre: "CÁLCULO", creditos: 5, prereq: ["ÁLGEBRA"], abre: ["ESTADÍSTICA PARA LOS NEGOCIOS", "MICROECONOMÍA"] },
      { nombre: "INGLÉS I", creditos: 5, prereq: ["HABILIDADES COMUNICACIONALES"], abre: ["INGLÉS II"] }
    ]
  },
  {
    semestre: 3,
    ramos: [
      { nombre: "COMERCIO INTERNACIONAL", creditos: 5, prereq: ["INTRODUCCIÓN A LOS NEGOCIOS INTERNACIONALES", "HISTORIA DE LAS RELACIONES INTERNACIONALES", "GEOGRAFÍA POLÍTICA Y ECONÓMICA"], abre: ["NEGOCIACIÓN INTERNACIONAL", "FINANZAS INTERNACIONALES"] },
      { nombre: "PERSONAS Y ORGANIZACIONES", creditos: 5, prereq: ["GESTIÓN DE ORGANIZACIONES", "PSICOLOGÍA SOCIAL Y ORGANIZACIONAL"], abre: ["GESTIÓN INTERNACIONAL DEL TALENTO HUMANO"] },
      { nombre: "ESTADÍSTICA PARA LOS NEGOCIOS", creditos: 5, prereq: ["CÁLCULO"], abre: ["INVESTIGACIÓN DE MERCADOS", "ESTADÍSTICA APLICADA A LOS NEGOCIOS"] },
      { nombre: "MARKETING ESTRATÉGICO", creditos: 5, prereq: ["GESTIÓN DE ORGANIZACIONES"], abre: ["INVESTIGACIÓN DE MERCADOS"] },
      { nombre: "CONTABILIDAD FINANCIERA", creditos: 5, prereq: ["GESTIÓN DE ORGANIZACIONES", "ÁLGEBRA"], abre: ["COSTOS Y PRESUPUESTOS", "CONTABILIDAD INTERNACIONAL"] },
      { nombre: "DERECHO EMPRESARIAL", creditos: 5, prereq: ["POLÍTICA Y FORMACIÓN CIUDADANA"], abre: ["DERECHO INTERNACIONAL"] },
      { nombre: "INGLÉS II", creditos: 5, prereq: ["INGLÉS I"], abre: ["INGLÉS III"] }
    ]
  },
  {
    semestre: 4,
    ramos: [
      { nombre: "NEGOCIACIÓN INTERNACIONAL", creditos: 5, prereq: ["COMERCIO INTERNACIONAL"], abre: ["DIRECCIÓN ESTRATÉGICA"] },
      { nombre: "MICROECONOMÍA", creditos: 5, prereq: ["CÁLCULO"], abre: ["MACROECONOMÍA", "ECONOMÍA INTERNACIONAL"] },
      { nombre: "GESTIÓN INTERNACIONAL DEL TALENTO HUMANO", creditos: 5, prereq: ["PERSONAS Y ORGANIZACIONES"], abre: [] },
      { nombre: "INVESTIGACIÓN DE MERCADOS", creditos: 5, prereq: ["MARKETING ESTRATÉGICO", "ESTADÍSTICA PARA LOS NEGOCIOS"], abre: [] },
      { nombre: "COSTOS Y PRESUPUESTOS", creditos: 5, prereq: ["CONTABILIDAD FINANCIERA"], abre: [] },
      { nombre: "SISTEMAS DE INFORMACIÓN II", creditos: 4, prereq: ["SISTEMAS DE INFORMACIÓN I"], abre: [] },
      { nombre: "INGLÉS III", creditos: 5, prereq: ["INGLÉS II"], abre: ["INGLÉS IV"] }
    ]
  },
  {
    semestre: 5,
    ramos: [
      { nombre: "FINANZAS INTERNACIONALES", creditos: 5, prereq: ["COMERCIO INTERNACIONAL"], abre: [] },
      { nombre: "MACROECONOMÍA", creditos: 5, prereq: ["MICROECONOMÍA"], abre: ["ECONOMÍA INTERNACIONAL"] },
      { nombre: "ESTADÍSTICA APLICADA A LOS NEGOCIOS", creditos: 5, prereq: ["ESTADÍSTICA PARA LOS NEGOCIOS"], abre: ["ANÁLISIS DE DATOS PARA LOS NEGOCIOS"] },
      { nombre: "CONTABILIDAD INTERNACIONAL", creditos: 5, prereq: ["CONTABILIDAD FINANCIERA"], abre: [] },
      { nombre: "DERECHO INTERNACIONAL", creditos: 5, prereq: ["DERECHO EMPRESARIAL"], abre: [] },
      { nombre: "OPTATIVO DE PROFUNDIZACIÓN I", creditos: 3, prereq: [], abre: [] },
      { nombre: "INGLÉS IV", creditos: 5, prereq: ["INGLÉS III"], abre: [] }
    ]
  },
  {
    semestre: 6,
    ramos: [
      { nombre: "ECONOMÍA INTERNACIONAL", creditos: 5, prereq: ["MACROECONOMÍA", "MICROECONOMÍA"], abre: [] },
      { nombre: "ANÁLISIS DE DATOS PARA LOS NEGOCIOS", creditos: 5, prereq: ["ESTADÍSTICA APLICADA A LOS NEGOCIOS"], abre: [] },
      { nombre: "OPTATIVO DE PROFUNDIZACIÓN II", creditos: 3, prereq: [], abre: [] },
      { nombre: "TALLER DE NEGOCIOS INTERNACIONALES I", creditos: 5, prereq: [], abre: ["TALLER DE NEGOCIOS INTERNACIONALES II"] },
      { nombre: "TALLER DE HABILIDADES DIRECTIVAS", creditos: 5, prereq: [], abre: [] },
      { nombre: "ELECTIVO COMPLEMENTARIO I", creditos: 3, prereq: [], abre: [] }
    ]
  },
  {
    semestre: 7,
    ramos: [
      { nombre: "DIRECCIÓN ESTRATÉGICA", creditos: 5, prereq: ["NEGOCIACIÓN INTERNACIONAL"], abre: [] },
      { nombre: "OPTATIVO DE PROFUNDIZACIÓN III", creditos: 3, prereq: [], abre: [] },
      { nombre: "TALLER DE NEGOCIOS INTERNACIONALES II", creditos: 5, prereq: ["TALLER DE NEGOCIOS INTERNACIONALES I"], abre: ["TALLER DE GRADO"] },
      { nombre: "ELECTIVO COMPLEMENTARIO II", creditos: 3, prereq: [], abre: [] },
      { nombre: "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS", creditos: 5, prereq: [], abre: [] },
      { nombre: "EVALUACIÓN DE INVERSIONES INTERNACIONALES", creditos: 5, prereq: [], abre: [] }
    ]
  },
  {
    semestre: 8,
    ramos: [
      { nombre: "TALLER DE GRADO", creditos: 10, prereq: ["TALLER DE NEGOCIOS INTERNACIONALES II"], abre: [] },
      { nombre: "OPTATIVO DE PROFUNDIZACIÓN IV", creditos: 3, prereq: [], abre: [] },
      { nombre: "TALLER DE SIMULACIÓN DE NEGOCIOS INTERNACIONALES", creditos: 5, prereq: [], abre: [] },
      { nombre: "TALLER DE ÉTICA", creditos: 5, prereq: [], abre: [] }
    ]
  }
];

// Estado de los ramos
let aprobados = new Set();
let creditosTotales = 0;

// Renderizado de la malla
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

// Mostrar los detalles del ramo seleccionado
function mostrarDetalles(ramo) {
  document.getElementById("detalle-nombre").textContent = ramo.nombre;
  document.getElementById("detalle-creditos").textContent = ramo.creditos;
  document.getElementById("detalle-prereq").textContent = ramo.prereq.length > 0 ? ramo.prereq.join(", ") : "Ninguno";
  document.getElementById("detalle-requisitos").textContent = ramo.abre.length > 0 ? ramo.abre.join(", ") : "Ninguno";
}

// Desbloquear los ramos que cumplan con sus prerrequisitos
function desbloquearRamos() {
  malla.forEach((sem) => {
    sem.ramos.forEach((ramo) => {
      if (aprobados.has(ramo.nombre)) return;
      const div = Array.from(document.querySelectorAll(".ramo")).find(d => d.dataset.nombre === ramo.nombre);
      if (!div) return;
      if (ramo.prereq.every((req) => aprobados.has(req))) {
        div.classList.add("activo");
        div.style.cursor = "pointer";
        div.style.opacity = "1";
      }
    });
  });
}

// Iniciar al cargar
document.addEventListener("DOMContentLoaded", () => {
  renderMalla();
});
