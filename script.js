const malla = [{'semestre': 1, 'ramos': [{'nombre': 'INTRODUCCIÓN A LOS NEGOCIOS INTERNACIONALES', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'GESTIÓN DE ORGANIZACIONES', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'INFORMÁTICA PARA LOS NEGOCIOS', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'ÁLGEBRA', 'creditos': 6, 'abre': [], 'prereq': []}, {'nombre': 'POLÍTICA Y FORMACIÓN CIUDADANA', 'creditos': 3, 'abre': [], 'prereq': []}, {'nombre': 'AUTOCONOCIMIENTO', 'creditos': 3, 'abre': [], 'prereq': []}, {'nombre': 'HABILIDADES COMUNICACIONALES', 'creditos': 4, 'abre': [], 'prereq': []}]}, {'semestre': 2, 'ramos': [{'nombre': 'HISTORIA DE LAS RELACIONES INTERNACIONALES', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'GEOGRAFÍA POLÍTICA Y ECONÓMICA', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'PSICOLOGÍA SOCIAL Y ORGANIZACIONAL', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'SISTEMAS DE INFORMACIÓN I', 'creditos': 4, 'abre': [], 'prereq': []}, {'nombre': 'CÁLCULO', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'INGLÉS I', 'creditos': 5, 'abre': [], 'prereq': []}]}, {'semestre': 3, 'ramos': [{'nombre': 'PERSONAS Y ORGANIZACIONES', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'MARKETING ESTRATÉGICO', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'CÁLCULO II', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'CONTABILIDAD FINANCIERA', 'creditos': 5, 'abre': [], 'prereq': ['GESTIÓN DE ORGANIZACIONES', 'ÁLGEBRA']}, {'nombre': 'DERECHO EMPRESARIAL', 'creditos': 4, 'abre': [], 'prereq': ['POLÍTICA Y FORMACIÓN CIUDADANA']}, {'nombre': 'INGLÉS II', 'creditos': 5, 'abre': [], 'prereq': []}]}, {'semestre': 4, 'ramos': [{'nombre': 'SIMULACIÓN DE NEGOCIOS', 'creditos': 7, 'abre': [], 'prereq': ['PERSONAS Y ORGANIZACIONES', 'MARKETING ESTRATÉGICO', 'CONTABILIDAD FINANCIERA']}, {'nombre': 'MARKETING OPERATIVO', 'creditos': 5, 'abre': [], 'prereq': ['MARKETING ESTRATÉGICO']}, {'nombre': 'ESTADÍSTICA PARA LOS NEGOCIOS', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'CONTABILIDAD ADMINISTRATIVA', 'creditos': 5, 'abre': [], 'prereq': ['CONTABILIDAD FINANCIERA']}, {'nombre': 'MICROECONOMÍA', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'INGLÉS III', 'creditos': 4, 'abre': [], 'prereq': []}]}, {'semestre': 5, 'ramos': [{'nombre': 'SISTEMAS DE INFORMACIÓN II', 'creditos': 4, 'abre': [], 'prereq': []}, {'nombre': 'MÉTODOS CUANTITATIVOS', 'creditos': 5, 'abre': [], 'prereq': ['ESTADÍSTICA PARA LOS NEGOCIOS']}, {'nombre': 'GESTIÓN FINANCIERA', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'COMERCIO INTERNACIONAL', 'creditos': 5, 'abre': [], 'prereq': ['INTRODUCCIÓN A LOS NEGOCIOS INTERNACIONALES', 'HISTORIA DE LAS RELACIONES INTERNACIONALES', 'GEOGRAFÍA POLÍTICA Y ECONÓMICA']}, {'nombre': 'TALLER PERFIL UV 1', 'creditos': 2, 'abre': [], 'prereq': []}, {'nombre': 'INGLÉS IV', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'PRÁCTICAS INTERMEDIAS', 'creditos': 4, 'abre': [], 'prereq': []}]}, {'semestre': 6, 'ramos': [{'nombre': 'TEORÍA DEL CONFLICTO Y NEGOCIACIÓN', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'GESTIÓN DE OPERACIONES', 'creditos': 5, 'abre': [], 'prereq': ['CONTABILIDAD ADMINISTRATIVA', 'MÉTODOS CUANTITATIVOS']}, {'nombre': 'MACROECONOMÍA', 'creditos': 5, 'abre': [], 'prereq': ['MICROECONOMÍA']}, {'nombre': 'DERECHO COMERCIAL INTERNACIONAL', 'creditos': 4, 'abre': [], 'prereq': ['DERECHO EMPRESARIAL', 'COMERCIO INTERNACIONAL']}, {'nombre': 'GESTIÓN ADUANERA Y DOCUMENTAL', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'TALLER PERFIL UV 2', 'creditos': 2, 'abre': [], 'prereq': []}, {'nombre': 'ACADEMIC COMMUNICATIONAL ENGLISH', 'creditos': 4, 'abre': [], 'prereq': ['INGLÉS IV']}]}, {'semestre': 7, 'ramos': [{'nombre': 'NEGOCIACIONES INTERNACIONALES', 'creditos': 4, 'abre': [], 'prereq': ['INGLÉS III', 'TEORÍA DEL CONFLICTO Y NEGOCIACIÓN']}, {'nombre': 'FINANZAS CORPORATIVAS', 'creditos': 5, 'abre': [], 'prereq': ['GESTIÓN FINANCIERA']}, {'nombre': 'ECONOMÍA INTERNACIONAL', 'creditos': 4, 'abre': [], 'prereq': ['MACROECONOMÍA']}, {'nombre': 'LOGÍSTICA Y SEGUROS INTERNACIONALES', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'METODOLOGÍA DE INVESTIGACIÓN DE NEGOCIOS INTERNACIONALES', 'creditos': 4, 'abre': [], 'prereq': ['ESTADÍSTICA PARA LOS NEGOCIOS']}, {'nombre': 'TALLER PERFIL UV 3', 'creditos': 2, 'abre': [], 'prereq': []}, {'nombre': 'ENGLISH FOR INTERNATIONAL MANAGEMENT', 'creditos': 4, 'abre': [], 'prereq': ['INGLÉS IV']}]}, {'semestre': 8, 'ramos': [{'nombre': 'INTEGRACIÓN COMERCIAL INTERNACIONAL', 'creditos': 4, 'abre': [], 'prereq': ['DERECHO COMERCIAL INTERNACIONAL']}, {'nombre': 'MARKETING INTERNACIONAL Y GLOBAL', 'creditos': 4, 'abre': [], 'prereq': []}, {'nombre': 'FORMULACIÓN Y EVALUACIÓN DE PROYECTOS', 'creditos': 4, 'abre': [], 'prereq': []}, {'nombre': 'TRANSPORTE Y DISTRIBUCIÓN INTERNACIONAL', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'GESTIÓN BANCARIA INTERNACIONAL', 'creditos': 5, 'abre': [], 'prereq': ['GESTIÓN ADUANERA Y DOCUMENTAL']}, {'nombre': 'ENGLISH FOR FOREING TRADE', 'creditos': 4, 'abre': [], 'prereq': []}, {'nombre': 'SIMULACIÓN DE NEGOCIOS II', 'creditos': 5, 'abre': [], 'prereq': []}]}, {'semestre': 9, 'ramos': [{'nombre': 'DIRECCIÓN Y GESTIÓN INTERNACIONAL', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'ELECTIVO DE ACTUALIZACIÓN', 'creditos': 4, 'abre': [], 'prereq': ['FINANZAS CORPORATIVAS', 'LOGÍSTICA Y SEGUROS INTERNACIONALES', 'TALLER PERFIL UV 3']}, {'nombre': 'FINANZAS INTERNACIONALES', 'creditos': 5, 'abre': [], 'prereq': ['FINANZAS CORPORATIVAS']}, {'nombre': 'ANÁLISIS DE ENTORNO Y COYUNTURA', 'creditos': 5, 'abre': [], 'prereq': []}, {'nombre': 'FORMACIÓN CIUDADANA GLOBAL', 'creditos': 3, 'abre': [], 'prereq': ['NEGOCIACIONES INTERNACIONALES']}]}, {'semestre': 10, 'ramos': [{'nombre': 'PRÁCTICA PROFESIONAL', 'creditos': 16, 'abre': [], 'prereq': []}, {'nombre': 'SEMINARIO DE TÍTULO', 'creditos': 12, 'abre': [], 'prereq': []}]}];


document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("malla");
  const detalle = document.getElementById("detalle");
  const nombre = document.getElementById("nombre");
  const creditos = document.getElementById("creditos");
  const prereq = document.getElementById("prereq");
  const desbloquea = document.getElementById("desbloquea");
  let ramosAprobados = new Set();
  let creditosTotales = 0;

  function renderMalla() {
    main.innerHTML = "";
    malla.forEach(bloque => {
      const semestreDiv = document.createElement("div");
      semestreDiv.classList.add("semestre");
      const titulo = document.createElement("h2");
      titulo.textContent = `Semestre ${bloque.semestre}`;
      semestreDiv.appendChild(titulo);

      bloque.ramos.forEach(ramo => {
        const div = document.createElement("div");
        div.classList.add("ramo");
        div.textContent = `${ramo.nombre} (${ramo.creditos} créditos)`;
        if (ramosAprobados.has(ramo.nombre)) {
          div.classList.add("aprobado");
        } else if (ramo.prereq.every(p => ramosAprobados.has(p))) {
          div.classList.add("desbloqueado");
        } else {
          div.classList.add("bloqueado");
        }

        div.addEventListener("click", () => {
          if (ramosAprobados.has(ramo.nombre)) {
            ramosAprobados.delete(ramo.nombre);
            creditosTotales -= ramo.creditos;
          } else if (ramo.prereq.every(p => ramosAprobados.has(p))) {
            ramosAprobados.add(ramo.nombre);
            creditosTotales += ramo.creditos;
          }
          document.getElementById("contador-creditos").textContent = creditosTotales;
          renderMalla();
        });

        div.addEventListener("mouseenter", () => {
          nombre.textContent = ramo.nombre;
          creditos.textContent = ramo.creditos;
          prereq.innerHTML = ramo.prereq.length ? ramo.prereq.join(", ") : "Ninguno";
          desbloquea.innerHTML = ramo.abre.length ? ramo.abre.join(", ") : "Ninguno";
        });

        semestreDiv.appendChild(div);
      });

      main.appendChild(semestreDiv);
    });
  }

  renderMalla();
});
