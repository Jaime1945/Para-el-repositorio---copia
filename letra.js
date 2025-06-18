
  let tamañoLetra = 16;

  function cambiarTamañoLetra(valor) {
    tamañoLetra += valor;

    // Limitar para que no quede demasiado pequeño o grande
    if (tamañoLetra < 10) tamañoLetra = 10;
    if (tamañoLetra > 30) tamañoLetra = 30;

    document.body.style.fontSize = tamañoLetra + "px";
      }

