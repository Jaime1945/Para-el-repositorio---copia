let tamañoActual = 16; // tamaño base en px

function cambiarTamañoLetra(cambio) {
  tamañoActual += cambio;

  // Limita el tamaño mínimo y máximo
  if (tamañoActual < 12) tamañoActual = 12;
  if (tamañoActual > 30) tamañoActual = 30;

  document.getElementById("contenido").style.fontSize = tamañoActual + "px";
}
