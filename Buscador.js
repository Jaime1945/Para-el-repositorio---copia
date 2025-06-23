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

//funcion 2 del buscador
// Definimos un arreglo de objetos que contiene las palabras clave y sus URLs correspondientes.
// Esto funciona como nuestra "base de datos" para buscar y redirigir.
const searchData = [
  { keyword: "adopción de mascotas", url: "adopcion.html#content_inicial" },
  { keyword: "comentarios comunidad", url: "comunidad.html#title" },
  { keyword: "Donaciones", url: "Donaciones.html" },
  { keyword: "requisitos para adoptar", url: "como-puedo-adoptar.html#beneficio4" },
  { keyword: "Tips de cuidados", url: "tips-y-cuidados.html#texto_comienzo" },
  { keyword: "Eventos", url: "Noticias.html#mensaje-bienvenida"},
  { keyword: "Red social Facebook", url: "https://facebook.com/tuperfil"},
  { keyword: "Red social Instagram", url: "https://www.instagram.com/casa_patitasfelices/?next=%2F"},
  { keyword: "Red social twitter (X)", url: "https://x.com/Casa_PatitasFec"},
];

// Referencias a los elementos HTML del input de búsqueda y la lista de sugerencias.
const input = document.getElementById("site-search");
const suggestions = document.getElementById("suggestions");

// Escucha el evento 'input' en el campo de texto (cuando el usuario escribe algo)
input.addEventListener("input", () => {
  const value = input.value.toLowerCase(); // Se obtiene el texto en minúsculas
  suggestions.innerHTML = ""; // Se limpia la lista de sugerencias anteriores

  // Si el input está vacío, no se muestra nada
  if (!value) return;

  // Filtra los elementos que coincidan parcialmente con lo que se escribe
  const matches = searchData.filter(item =>
    item.keyword.toLowerCase().includes(value)
  );

  // Por cada coincidencia encontrada, se crea un <li> como sugerencia
  matches.forEach(match => {
    const li = document.createElement("li");
    li.textContent = match.keyword; // Se muestra el texto encontrado

    // Si se hace clic en la sugerencia, se redirige a la URL correspondiente
    li.onclick = () => {
      window.location.href = match.url;
    };

    // Se agrega la sugerencia al contenedor de la lista
    suggestions.appendChild(li);
  });
});

// Esta función se activa si el usuario hace clic en el botón de la lupa 🔍
function handleSearch() {
  const value = input.value.toLowerCase(); // Se obtiene lo que el usuario escribió
  // Se busca una coincidencia exacta o parcial
  const match = searchData.find(item => item.keyword.toLowerCase().includes(value));

  if (match) {
    // Si se encuentra coincidencia, redirige a esa URL
    window.location.href = match.url;
  } else {
    // Si no se encuentra nada, se muestra una alerta (puedes personalizar esto)
    alert("No se encontró esa sección");
  }
}

function handleSearch() {
  // Impide búsqueda si hay caracteres inválidos
  const regex = /[.*+?^${}()|[\]\\]/g;
  const value = input.value.toLowerCase();

  if (regex.test(value)) {
    alert("No se permiten caracteres especiales como /[.*+?^${}()|[\]\\]/g en la búsqueda.");
    return;
  }

  const match = searchData.find(item =>
    item.keyword.toLowerCase().includes(value)
  );

  if (match) {
    window.location.href = match.url;
  } else {
    alert("No se encontró esa sección");
  }
}