// CAMBIAR PANTALLA
// Busca todos los botones del menú y los guarda en "botonesMenu"
const botonesMenu = document.querySelectorAll('#nav button');
function mostrar(nombre){
    //Recorre todas las secciones, ponle la clase activo si la condicion es correcta y la quita si es falsa
    document.querySelectorAll('section').forEach(function (seccion) {
    seccion.classList.toggle('activo', seccion.id === nombre);
  });
//Pone el color de activo a la seccion que esta en uso
botonesMenu.forEach(function (boton) {
    boton.classList.toggle('activo', boton.dataset.t === nombre);
  });
// Sube la página hasta arriba para no quedar a media pantalla
  window.scrollTo(0, 0);
}
// A cada botón del menú: "cuando te den clic, muestra tu sección"
botonesMenu.forEach(function (boton) {
  boton.onclick = function () {
    mostrar(boton.dataset.t);
  };
});
//Cursos

//Texto a señas