// Datos de ramos (sin créditos)
const ramos = {
  'intro_negocios': {
    nombre: 'Introducción a los Negocios Internacionales', prerequisitos: [], abre: ['comercio_internacional'], semestre: 1
  },
  'comercio_internacional': {
    nombre: 'Comercio Internacional', prerequisitos: ['intro_negocios'], abre: [], semestre: 2
  }
};

const ramosAprobados = new Set();

function crearMalla() {
  const contenedor = document.getElementById('malla');
  const semestres = {};

  for (const clave in ramos) {
    const ramo = ramos[clave];
    if (!semestres[ramo.semestre]) {
      const seccion = document.createElement('section');
      seccion.classList.add('semestre');
      seccion.innerHTML = `<h2>Semestre ${ramo.semestre}</h2>`;
      semestres[ramo.semestre] = seccion;
      contenedor.appendChild(seccion);
    }

    const div = document.createElement('div');
    div.className = 'ramo bloqueado';
    div.id = clave;
    div.textContent = ramo.nombre;
    div.onclick = () => seleccionarRamo(clave);
    semestres[ramo.semestre].appendChild(div);
  }

  actualizarEstado();
}

function actualizarEstado() {
  for (const clave in ramos) {
    const div = document.getElementById(clave);
    const requisitos = ramos[clave].prerequisitos;
    const desbloqueado = requisitos.every(r => ramosAprobados.has(r));
    div.classList.toggle('bloqueado', !desbloqueado);
  }
}

function seleccionarRamo(clave) {
  const div = document.getElementById(clave);
  if (div.classList.contains('bloqueado')) return;

  if (div.classList.contains('aprobado')) {
    ramosAprobados.delete(clave);
    div.classList.remove('aprobado');
  } else {
    ramosAprobados.add(clave);
    div.classList.add('aprobado');
  }

  mostrarDetalles(clave);
  actualizarEstado();
}

function mostrarDetalles(clave) {
  const ramo = ramos[clave];
  document.getElementById('detalle-nombre').textContent = ramo.nombre;
  document.getElementById('detalle-prereq').textContent = ramo.prerequisitos.map(id => ramos[id]?.nombre).join(', ') || 'Ninguno';

  const posteriores = Object.entries(ramos)
    .filter(([id, r]) => r.prerequisitos.includes(clave))
    .map(([id, r]) => r.nombre);

  document.getElementById('detalle-requisitos').textContent = posteriores.length ? posteriores.join(', ') : 'Ninguno';
}

window.onload = crearMalla;
