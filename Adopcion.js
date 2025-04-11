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
function showProfile(name, image, breed, age, gender, rescuer, location, childrenRating, petsRating, familyRating, playfulRating) {
  // Mostrar el modal con los datos dinámicos
  const modal = document.getElementById("profile-modal");
  modal.classList.remove("hidden");

  // Actualizar los detalles del perfil
  document.getElementById("profile-name").textContent = name;
  document.getElementById("profile-image").src = image;
  document.getElementById("profile-image").alt = name;
  document.getElementById("profile-description").textContent = `${breed} | ${age} | ${gender}`;
  document.getElementById("rescuer").textContent = rescuer;
  document.getElementById("location").textContent = location;
  document.getElementById("rating-children").textContent = childrenRating;
  document.getElementById("rating-pets").textContent = petsRating;
  document.getElementById("rating-family").textContent = familyRating;
  document.getElementById("rating-playful").textContent = playfulRating;
}

function closeProfile() {
  // Ocultar el modal
  const modal = document.getElementById("profile-modal");
  modal.classList.add("hidden");
}
