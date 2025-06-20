
  const TAMANO_MIN = 12;
const TAMANO_MAX = 28;
let tamañoActual = 22;

function ajustarContenido(cambio) {
  const area = document.getElementById("contenido-dinamico");
  const nuevoTamaño = tamañoActual + cambio;

  if (nuevoTamaño >= TAMANO_MIN && nuevoTamaño <= TAMANO_MAX) {
    tamañoActual = nuevoTamaño;
    area.style.fontSize = tamañoActual + "px";
  }
}
