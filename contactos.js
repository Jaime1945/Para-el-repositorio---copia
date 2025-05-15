
// Seleccionar la imagen con el id "mainImage"
// Seleccionar la imagen
const image = document.getElementById("mainImage");

// Agregar un evento de clic a la imagen para cambiar la imagen cuando se haga clic
image.addEventListener("click", function() {
    // Crear un arreglo que contiene las rutas de las imágenes que vamos a mostrar
    let images = ["imagen.jpg", "imagen2.jpg", "imagen3.jpg"];

    // Obtener la ruta (src) de la imagen que se está mostrando actualmente
    let currentSrc = image.getAttribute("src");

    // Encontrar el índice de la imagen actual en el arreglo "images"
    let index = images.indexOf(currentSrc);

    // Calcular el índice de la siguiente imagen. El operador módulo "%" asegura que, cuando se llega al final del arreglo, vuelva al principio
    let nextIndex = (index + 1) % images.length;

    // Cambiar la imagen actual estableciendo el atributo "src" con la siguiente imagen en el arreglo
    image.setAttribute("src", images[nextIndex]);
});

//Adaptador de pantalla
function ajustarContenido() {
    let anchoPantalla = window.innerWidth;

    if (anchoPantalla <= 1024) { // Para tablets y móviles
        document.body.style.fontSize = anchoPantalla <= 600 ? "12px" : "14px";

        document.querySelectorAll("img, video").forEach(el => {
            el.style.width = "100%";
            el.style.height = "auto";
        });

        document.querySelectorAll("button").forEach(btn => {
            btn.style.padding = anchoPantalla <= 600 ? "6px 12px" : "8px 15px";
            btn.style.fontSize = anchoPantalla <= 600 ? "12px" : "14px";
        });

        document.querySelectorAll("p, h1, h2, h3").forEach(texto => {
            texto.style.maxWidth = "90%";
            texto.style.margin = "auto";
            texto.style.textAlign = "center";
        });
    } else {
        document.body.style.fontSize = "16px"; // Mantener tamaño estándar en pantallas grandes
    }
}

// Ejecutar en carga y cuando cambie tamaño
window.onload = ajustarContenido;
window.onresize = ajustarContenido;
//Fin de lo del adptador de pantalla