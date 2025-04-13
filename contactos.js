
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