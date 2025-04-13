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

//Bot
const params = new URL(window.location.href).searchParams;
const configParams = params.get("config");
let config = {};

try {
  if (!configParams) {
    throw "No config passed";
  }
  Object.assign(config, tryDecode(configParams));
  window.botpress.init(config);
} catch (err) {
  showError(`Could not initialize webchat: ${err}`);
}

function Habilitar_bot() {
  const colors = [
    "#d6409f",
    "#3a8ed6",
    "#f94d4d",
    "#42d697",
    "#f2c14e",
    "#9354e2",
    "#e64f5e",
    "#5ea4a4",
    "#c35020",
    "#7a3e9d"
  ];
  const variants = ["soft", "solid"]; //
  const themes = ["light", "dark"];

  try {
    botpress.fabIframe.remove();
  } catch {}
  try {
    botpress.webchatIframe.remove();
  } catch {}

  botpress.initialized = false;
  botpress.init({
    ...botpress,
    configuration: {
      ...botpress.configuration,
      color: pickRandom(colors),
      variant: pickRandom(variants),
      themeMode: pickRandom(themes)
    }
  });
}

window.botpress.on("*", (event) => {
  const eventsEl = document.getElementById("events");
  eventsEl.value += "\n" + JSON.stringify(event) + "\n";
  eventsEl.scrollTop = eventsEl.scrollHeight;
});

function pickRandom(arr) {
  return arr.at(Math.floor(Math.random() * arr.length));
}

function showError(error) {
  const el = document.getElementById("error");
  el.style.display = "block";
  el.innerText = error;
}

let check = setInterval(function () {
  if (window.botpress.initialized) {
    const el = document.getElementById("success");
    el.style.display = "block";
    el.innerText = "Initialized: " + window.botpress.botId;
    clearInterval(check);
  }
}, 500);

function tryDecode(str) {
  try {
    return JSON.parse(decodeURIComponent(atob(str)));
  } catch {}

  try {
    return JSON.parse(atob(str));
  } catch {}

  return {};
}

//pestañas?
 // Selecciona todos los enlaces dentro del contenedor de pestañas
 const tabs = document.querySelectorAll('#tabs a');

 // Agrega un evento de clic a cada pestaña
 tabs.forEach(tab => {
     tab.addEventListener('click', function() {
         // Remueve la clase "active" de todas las pestañas
         tabs.forEach(t => t.classList.remove('active'));

         // Agrega la clase "active" solo a la pestaña a la que se hizo clic
         this.classList.add('active');
     });
 });
