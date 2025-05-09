document.addEventListener('DOMContentLoaded', function () {
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

    // Manejar la búsqueda
    function handleSearch() {
        const searchTerm = searchInput.value.trim();
        highlightText(searchTerm);

        // Desplazarse al primer resultado
        const firstMatch = content.querySelector('.highlight');
        if (firstMatch) {
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    // Eventos del buscador
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
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