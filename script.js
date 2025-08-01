// Estructura de los ramos
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
  }
  // Puedes continuar agregando los semestres restantes aquí...
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
