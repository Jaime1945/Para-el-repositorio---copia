document.addEventListener('DOMContentLoaded'), function () {
    const menu = document.querySelector('.menu');
    const menuToggle = menu.querySelector('.menu-toggle');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const content = document.body; // Cambiado para buscar en todo el cuerpo del documento

    // Mostrar/ocultar menú en dispositivos móviles
    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Función para resaltar texto dentro del contenido
    function highlightText(text) {
        // Eliminar resaltados previos
        const highlightedElements = content.querySelectorAll('.highlight');
        highlightedElements.forEach(function (element) {
            const parent = element.parentNode;
            parent.replaceChild(document.createTextNode(element.textContent), element);
            parent.normalize();
        });

        if (text === '') {
            return;
        }

        const regex = new RegExp(`(${text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');

        const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, null, false);
        const textNodes = [];

        while (walker.nextNode()) {
            textNodes.push(walker.currentNode);
        }

        textNodes.forEach(function (node) {
            if (regex.test(node.nodeValue)) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = node.nodeValue.replace(regex, '<span class="highlight">$1</span>');
                const fragment = document.createDocumentFragment();
                Array.from(tempDiv.childNodes).forEach(function (child) {
                    fragment.appendChild(child);
                });
                node.parentNode.replaceChild(fragment, node);
            }
        });
    }
}

//perfiles de mascotas en adopcion
const mascotas = [
    {
      nombre: "Luna",
      foto: "https://via.placeholder.com/200",
      informacion: "Luna es una gata amigable de 2 años. Le encanta jugar y dormir mucho.",
    },
    {
      nombre: "Max",
      foto: "https://via.placeholder.com/200",
      informacion: "Max es un perro leal de 4 años. Disfruta de paseos largos y abrazos.",
    },
    {
      nombre: "Bella",
      foto: "https://via.placeholder.com/200",
      informacion: "Bella es una coneja adorable que ama las zanahorias y las caricias.",
    },
  ];
  
  const listaMascotas = document.getElementById("mascotas-lista");
  const detallePerfil = document.getElementById("perfil-detalle");
  const nombreMascota = document.getElementById("nombre-mascota");
  const fotoMascota = document.getElementById("foto-mascota");
  const informacionMascota = document.getElementById("informacion-mascota");
  const botonVolver = document.getElementById("volver");
  
  // Crear la lista de mascotas
  mascotas.forEach((mascota, index) => {
    const mascotaDiv = document.createElement("div");
    mascotaDiv.classList.add("mascota");
    mascotaDiv.innerHTML = `
      <img src="${mascota.foto}" alt="Foto de ${mascota.nombre}">
      <h3>${mascota.nombre}</h3>
    `;
    mascotaDiv.addEventListener("click", () => mostrarPerfil(index));
    listaMascotas.appendChild(mascotaDiv);
  });
  
  // Mostrar el perfil de una mascota
  function mostrarPerfil(index) {
    const mascota = mascotas[index];
    nombreMascota.textContent = mascota.nombre;
    fotoMascota.src = mascota.foto;
    informacionMascota.textContent = mascota.informacion;
  
    listaMascotas.style.display = "none";
    detallePerfil.style.display = "block";
  }
  
  // Volver a la lista
  botonVolver.addEventListener("click", () => {
    detallePerfil.style.display = "none";
    listaMascotas.style.display = "flex";
  });
  