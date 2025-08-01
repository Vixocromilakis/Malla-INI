function normalizar(nombre) {
  return nombre.trim().toLowerCase();
}

const malla = [
  {
    semestre: 1,
    ramos: [
      { nombre: "INTRODUCCIÓN A LOS NEGOCIOS INTERNACIONALES", creditos: 5, prereq: [] },
      { nombre: "GESTIÓN DE ORGANIZACIONES", creditos: 5, prereq: [] },
      { nombre: "INFORMÁTICA PARA LOS NEGOCIOS", creditos: 5, prereq: [] },
      { nombre: "ÁLGEBRA", creditos: 6, prereq: [] },
      { nombre: "POLÍTICA Y FORMACIÓN CIUDADANA", creditos: 3, prereq: [] },
      { nombre: "AUTOCONOCIMIENTO", creditos: 3, prereq: [] },
      { nombre: "HABILIDADES COMUNICACIONALES", creditos: 4, prereq: [] }
    ]
  },
  {
    semestre: 2,
    ramos: [
      { nombre: "HISTORIA DE LAS RELACIONES INTERNACIONALES", creditos: 5, prereq: [] },
      { nombre: "GEOGRAFÍA POLÍTICA Y ECONÓMICA", creditos: 5, prereq: [] },
      { nombre: "PSICOLOGÍA SOCIAL Y ORGANIZACIONAL", creditos: 5, prereq: [] },
      { nombre: "SISTEMAS DE INFORMACIÓN I", creditos: 4, prereq: ["INFORMÁTICA PARA LOS NEGOCIOS"] },
      { nombre: "CÁLCULO", creditos: 5, prereq: ["ÁLGEBRA"] },
      { nombre: "INGLÉS I", creditos: 5, prereq: ["HABILIDADES COMUNICACIONALES"] }
    ]
  },
  {
    semestre: 3,
    ramos: [
      { nombre: "PERSONAS Y ORGANIZACIONES", creditos: 5, prereq: ["GESTIÓN DE ORGANIZACIONES", "PSICOLOGÍA SOCIAL Y ORGANIZACIONAL"] },
      { nombre: "MARKETING ESTRATÉGICO", creditos: 5, prereq: ["GESTIÓN DE ORGANIZACIONES"] },
      { nombre: "CÁLCULO II", creditos: 5, prereq: ["CÁLCULO"] },
      { nombre: "CONTABILIDAD FINANCIERA", creditos: 5, prereq: ["GESTIÓN DE ORGANIZACIONES", "ÁLGEBRA"] },
      { nombre: "DERECHO EMPRESARIAL", creditos: 4, prereq: ["POLÍTICA Y FORMACIÓN CIUDADANA"] },
      { nombre: "INGLÉS II", creditos: 5, prereq: ["INGLÉS I"] }
    ]
  },
  {
    semestre: 4,
    ramos: [
      { nombre: "SIMULACIÓN DE NEGOCIOS", creditos: 7, prereq: ["PERSONAS Y ORGANIZACIONES", "CONTABILIDAD FINANCIERA", "MARKETING ESTRATÉGICO"] },
      { nombre: "MARKETING OPERATIVO", creditos: 5, prereq: ["MARKETING ESTRATÉGICO"] },
      { nombre: "ESTADÍSTICA PARA LOS NEGOCIOS", creditos: 5, prereq: ["CÁLCULO"] },
      { nombre: "CONTABILIDAD ADMINISTRATIVA", creditos: 5, prereq: ["CONTABILIDAD FINANCIERA"] },
      { nombre: "MICROECONOMÍA", creditos: 5, prereq: ["CÁLCULO"] },
      { nombre: "INGLÉS III", creditos: 4, prereq: ["INGLÉS II"] }
    ]
  },
  {
    semestre: 5,
    ramos: [
      { nombre: "SISTEMAS DE INFORMACIÓN II", creditos: 4, prereq: ["SISTEMAS DE INFORMACIÓN I"] },
      { nombre: "MÉTODOS CUANTITATIVOS", creditos: 5, prereq: ["CÁLCULO II", "ESTADÍSTICA PARA LOS NEGOCIOS"] },
      { nombre: "GESTIÓN FINANCIERA", creditos: 5, prereq: ["CONTABILIDAD ADMINISTRATIVA"] },
      { nombre: "COMERCIO INTERNACIONAL", creditos: 5, prereq: ["INTRODUCCIÓN A LOS NEGOCIOS INTERNACIONALES", "HISTORIA DE LAS RELACIONES INTERNACIONALES", "GEOGRAFÍA POLÍTICA Y ECONÓMICA"] },
      { nombre: "TALLER PERFIL UV 1", creditos: 2, prereq: [] },
      { nombre: "INGLÉS IV", creditos: 5, prereq: ["INGLÉS III"] },
      { nombre: "PRÁCTICAS INTERMEDIAS", creditos: 4, prereq: ["SIMULACIÓN DE NEGOCIOS", "CÁLCULO", "CONTABILIDAD ADMINISTRATIVA"] }
    ]
  },
  {
    semestre: 6,
    ramos: [
      { nombre: "TEORÍA DEL CONFLICTO Y NEGOCIACIÓN", creditos: 5, prereq: ["SIMULACIÓN DE NEGOCIOS"] },
      { nombre: "GESTIÓN DE OPERACIONES", creditos: 5, prereq: ["CONTABILIDAD ADMINISTRATIVA", "MÉTODOS CUANTITATIVOS"] },
      { nombre: "MACROECONOMÍA", creditos: 5, prereq: ["MICROECONOMÍA"] },
      { nombre: "DERECHO COMERCIAL INTERNACIONAL", creditos: 4, prereq: ["DERECHO EMPRESARIAL", "COMERCIO INTERNACIONAL"] },
      { nombre: "GESTIÓN ADUANERA Y DOCUMENTAL", creditos: 5, prereq: ["COMERCIO INTERNACIONAL"] },
      { nombre: "TALLER PERFIL UV 2", creditos: 2, prereq: ["TALLER PERFIL UV 1"] },
      { nombre: "ACADEMIC COMMUNICATIONAL ENGLISH", creditos: 4, prereq: ["INGLÉS IV"] }
    ]
  },
  {
    semestre: 7,
    ramos: [
      { nombre: "NEGOCIACIONES INTERNACIONALES", creditos: 4, prereq: ["TEORÍA DEL CONFLICTO Y NEGOCIACIÓN", "INGLÉS III"] },
      { nombre: "FINANZAS CORPORATIVAS", creditos: 5, prereq: ["GESTIÓN FINANCIERA"] },
      { nombre: "ECONOMÍA INTERNACIONAL", creditos: 4, prereq: ["MACROECONOMÍA"] },
      { nombre: "LOGÍSTICA Y SEGUROS INTERNACIONALES", creditos: 5, prereq: ["GESTIÓN ADUANERA Y DOCUMENTAL"] },
      { nombre: "METODOLOGÍA DE INVESTIGACIÓN DE NEGOCIOS INTERNACIONALES", creditos: 4, prereq: ["MARKETING ESTRATÉGICO", "ESTADÍSTICA PARA LOS NEGOCIOS"] },
      { nombre: "TALLER PERFIL UV 3", creditos: 2, prereq: ["TALLER PERFIL UV 2"] },
      { nombre: "ENGLISH FOR INTERNATIONAL MANAGEMENT", creditos: 4, prereq: ["INGLÉS IV"] }
    ]
  },
  {
    semestre: 8,
    ramos: [
      { nombre: "INTEGRACIÓN COMERCIAL INTERNACIONAL", creditos: 4, prereq: ["DERECHO COMERCIAL INTERNACIONAL"] },
      { nombre: "MARKETING INTERNACIONAL Y GLOBAL", creditos: 4, prereq: ["METODOLOGÍA DE INVESTIGACIÓN DE NEGOCIOS INTERNACIONALES"] },
      { nombre: "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS", creditos: 4, prereq: ["FINANZAS CORPORATIVAS"] },
      { nombre: "TRANSPORTE Y DISTRIBUCIÓN INTERNACIONAL", creditos: 5, prereq: ["GESTIÓN DE OPERACIONES", "LOGÍSTICA Y SEGUROS INTERNACIONALES"] },
      { nombre: "GESTIÓN BANCARIA INTERNACIONAL", creditos: 5, prereq: ["GESTIÓN ADUANERA Y DOCUMENTAL"] },
      { nombre: "ENGLISH FOR FOREIGN TRADE", creditos: 4, prereq: ["INGLÉS IV"] },
      { nombre: "SIMULACIÓN DE NEGOCIOS II", creditos: 5, prereq: ["SIMULACIÓN DE NEGOCIOS", "METODOLOGÍA DE INVESTIGACIÓN DE NEGOCIOS INTERNACIONALES"] }
    ]
  },
  {
    semestre: 9,
    ramos: [
      { nombre: "DIRECCIÓN Y GESTIÓN INTERNACIONAL", creditos: 5, prereq: ["MARKETING INTERNACIONAL Y GLOBAL", "FORMULACIÓN Y EVALUACIÓN DE PROYECTOS", "INTEGRACIÓN COMERCIAL INTERNACIONAL"] },
      { nombre: "ELECTIVO DE ACTUALIZACIÓN", creditos: 4, prereq: ["NEGOCIACIONES INTERNACIONALES", "FINANZAS CORPORATIVAS", "LOGÍSTICA Y SEGUROS INTERNACIONALES", "METODOLOGÍA DE INVESTIGACIÓN DE NEGOCIOS INTERNACIONALES", "TALLER PERFIL UV 3", "ENGLISH FOR INTERNATIONAL MANAGEMENT"] },
      { nombre: "FINANZAS INTERNACIONALES", creditos: 5, prereq: ["FINANZAS CORPORATIVAS"] },
      { nombre: "ANÁLISIS DE ENTORNO Y COYUNTURA", creditos: 5, prereq: ["ECONOMÍA INTERNACIONAL", "INTEGRACIÓN COMERCIAL INTERNACIONAL"] },
      { nombre: "FORMACIÓN CIUDADANA GLOBAL", creditos: 3, prereq: ["NEGOCIACIONES INTERNACIONALES"] },
      { nombre: "CURSO I DE ESPECIALIZACIÓN", creditos: 0, prereq: [] }
    ]
  },
  {
    semestre: 10,
    ramos: [
      { nombre: "PRÁCTICA PROFESIONAL", creditos: 16, prereq: ["TEORÍA DEL CONFLICTO Y NEGOCIACIÓN", "GESTIÓN DE OPERACIONES", "MACROECONOMÍA", "DERECHO COMERCIAL INTERNACIONAL", "GESTIÓN ADUANERA Y DOCUMENTAL", "TALLER PERFIL UV 2", "ACADEMIC COMMUNICATIONAL ENGLISH"] },
      { nombre: "SEMINARIO DE TÍTULO", creditos: 12, prereq: ["SIMULACIÓN DE NEGOCIOS II"] },
      { nombre: "CURSO II DE ESPECIALIZACIÓN", creditos: 0, prereq: ["CURSO I DE ESPECIALIZACIÓN"] }
    ]
  }
];

// Estado y funciones del sistema
let aprobados = new Set();
let creditosTotales = 0;

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

      actualizarClaseRamo(div, ramo);
      div.addEventListener("click", () => manejarClick(div, ramo));

      bloque.appendChild(div);
    });

    contenedor.appendChild(bloque);
  });
}

function actualizarClaseRamo(div, ramo) {
  const cumplidos = ramo.prereq.every((req) => aprobados.has(normalizar(req)));
  div.classList.remove("activo", "aprobado");
  if (aprobados.has(normalizar(ramo.nombre))) {
    div.classList.add("aprobado");
    div.style.cursor = "pointer";
    div.style.opacity = "1";
  } else if (cumplidos) {
    div.classList.add("activo");
    div.style.cursor = "pointer";
    div.style.opacity = "1";
  } else {
    div.style.cursor = "not-allowed";
    div.style.opacity = "0.6";
  }
}

function manejarClick(div, ramo) {
  if (!div.classList.contains("activo") && !div.classList.contains("aprobado")) return;

  if (aprobados.has(normalizar(ramo.nombre))) {
    desmarcarRamoYDependientes(ramo.nombre);
  } else {
    aprobados.add(normalizar(ramo.nombre));
    creditosTotales += ramo.creditos;
  }

  guardarSeleccion();
  document.getElementById("creditos-total").textContent = creditosTotales;
  actualizarTodosLosRamos();
  mostrarDetalles(ramo);
}
function actualizarTodosLosRamos() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;
    const ramo = malla.flatMap(s => s.ramos).find(r => r.nombre === nombre);
    actualizarClaseRamo(div, ramo);
  });
}

function guardarSeleccion(ramosMap) {
  const seleccionados = Object.keys(ramosMap).filter(id => ramosMap[id].seleccionado);
  localStorage.setItem('ramosSeleccionados', JSON.stringify(seleccionados));
}

function mostrarDetalles(ramo) {
  document.getElementById("detalle-nombre").textContent = ramo.nombre;
  document.getElementById("detalle-creditos").textContent = ramo.creditos;
  document.getElementById("detalle-prereq").textContent = ramo.prereq.length > 0 ? ramo.prereq.join(", ") : "Ninguno";

  const abreRamos = malla.flatMap(s => s.ramos)
    .filter(r => r.prereq.includes(ramo.nombre))
    .map(r => r.nombre);
  document.getElementById("detalle-requisitos").textContent = abreRamos.length > 0 ? abreRamos.join(", ") : "Ninguno";
}

function restaurarSeleccion() {
  const data = localStorage.getItem("ramosSeleccionados");
  if (!data) return;

  const seleccionados = JSON.parse(data);
  seleccionados.forEach(nombre => {
    aprobados.add(nombre);
  });

  creditosTotales = malla
    .flatMap(s => s.ramos)
    .filter(r => aprobados.has(normalizar(r.nombre)))
    .reduce((sum, r) => sum + r.creditos, 0);

  document.getElementById("creditos-total").textContent = creditosTotales;
  actualizarTodosLosRamos();
}

function guardarSeleccion() {
  const seleccionados = Array.from(aprobados);
  localStorage.setItem("ramosSeleccionados", JSON.stringify(seleccionados));
}

function construirMapaDependenciasInversas(malla) {
  const mapa = {};
  malla.forEach(semestre => {
    semestre.ramos.forEach(ramo => {
      ramo.prereq.forEach(prereq => {
        if (!mapa[prereq]) {
          mapa[prereq] = [];
        }
        mapa[prereq].push(ramo.nombre);
      });
    });
  });
  return mapa;
}

function desmarcarRamoYDependientes(nombreRamo) {
  const clave = normalizar(nombreRamo);
  if (!aprobados.has(clave)) return;

  aprobados.delete(clave);
  const ramo = malla.flatMap(s => s.ramos).find(r => normalizar(r.nombre) === clave);
  if (ramo) creditosTotales -= ramo.creditos;

  if (dependenciasInversas[clave]) {
    dependenciasInversas[clave].forEach(dep => {
      desmarcarRamoYDependientes(dep);
    });
  }
}
  if (!aprobados.has(nombreRamo)) return;

  aprobados.delete(nombreRamo);
  const ramo = malla.flatMap(s => s.ramos).find(r => r.nombre === nombreRamo);
  if (ramo) creditosTotales -= ramo.creditos;

  if (dependenciasInversas[nombreRamo]) {
    dependenciasInversas[nombreRamo].forEach(dep => {
      desmarcarRamoYDependientes(dep);
    });
  }
}

const dependenciasInversas = construirMapaDependenciasInversas(malla);

document.addEventListener("DOMContentLoaded", () => {
  renderMalla();
  document.getElementById("creditos-total").textContent = creditosTotales;
  restaurarSeleccion();
});
