// Este script carga dinámicamente la malla por AÑO y SEMESTRE
// Utiliza la estructura generada automáticamente desde el Word

// Malla curricular completa con prerrequisitos dinámicos
    "semestre":
let aprobados = new Set();
let creditosTotales = 0;

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  for (let i = 0; i < malla.length; i += 2) {
    const año = document.createElement("div");
    año.classList.add("año");

    const semestre1 = malla[i];
    const bloque1 = crearSemestre(semestre1);
    año.appendChild(bloque1);

    if (malla[i + 1]) {
      const semestre2 = malla[i + 1];
      const bloque2 = crearSemestre(semestre2);
      año.appendChild(bloque2);
    }

    contenedor.appendChild(año);
  }
}

function crearSemestre(sem) {
  const bloque = document.createElement("section");
  bloque.classList.add("semestre");

  const titulo = document.createElement("h2");
  titulo.textContent = `Semestre ${sem.semestre}`;
  bloque.appendChild(titulo);

  sem.ramos.forEach((ramo) => {
    const div = document.createElement("div");
    div.classList.add("ramo");
    div.textContent = `${ramo.nombre}\nCréditos: ${ramo.creditos}`;
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

  return bloque;
}

function mostrarDetalles(ramo) {
  document.getElementById("detalle-nombre").textContent = ramo.nombre;
  document.getElementById("detalle-creditos").textContent = ramo.creditos;
  document.getElementById("detalle-prereq").textContent = ramo.prereq.length ? ramo.prereq.join(", ") : "Ninguno";
  document.getElementById("detalle-requisitos").textContent = ramo.abre.length ? ramo.abre.join(", ") : "Ninguno";
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
