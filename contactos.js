// Seleccionar la imagen
const image = document.getElementById("mainImage");

// Agregar evento de clic para cambiar la imagen
image.addEventListener("click", function() {
    let images = ["imagen.jpg", "imagen2.jpg", "imagen3.jpg"];
    let currentSrc = image.getAttribute("src");

    // Encontrar el siguiente índice en la lista
    let index = images.indexOf(currentSrc);
    let nextIndex = (index + 1) % images.length;

    // Cambiar la imagen
    image.setAttribute("src", images[nextIndex]);
});