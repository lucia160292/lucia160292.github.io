function mostrarContenido(id) {
  // Oculta todos los contenidos
  const secciones = document.querySelectorAll('.contenido');
  secciones.forEach(seccion => {
    seccion.classList.remove('activo');
  });

  // Muestra solo el contenido correspondiente al botón
  const activo = document.getElementById(id);
  if (activo) {
    activo.classList.add('activo');
  }
}

// Mostrar la sección "quienes" al cargar la página
window.onload = function () {
  mostrarContenido('quienes');
};

function mostrarContenido(id) {
  // ocultar todas las secciones
  const secciones = document.querySelectorAll('section.contenido');
  secciones.forEach(seccion => {
    seccion.style.display = 'none';
  });

  // mostrar la sección seleccionada
  const seccionMostrar = document.getElementById(id);
  if (seccionMostrar) {
    seccionMostrar.style.display = 'block';
  }
}
function mostrarContenido(id) {
  const secciones = document.querySelectorAll(".contenido");
  secciones.forEach(seccion => seccion.style.display = "none");

  const seccionSeleccionada = document.getElementById(id);
  if (seccionSeleccionada) {
    seccionSeleccionada.style.display = "block";
  }
}
