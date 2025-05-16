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

//Traductor ingles/español
function toggleLanguage() {
    let button = document.getElementById("translateButton");
    let currentLang = document.documentElement.lang || "es";
//function translatePage(lang) {
    const translations = {
        en: {
            title: "¿How can I adopt?",
            content: "Adopting an animal is a wonderful decision! Adopting instead of buying has many benefits, both for the animal and for you, since you give a second chance to beings who need a home. Here is some general information on how to adopt a furry friend!",
            title1: "Benefits of Adopting🐾",
            beneficio1: "Save a life: By adopting, you give a home to an animal in need.",
            beneficio2: "Reduce street animals: Help fight abandonment.",
            beneficio3: "Support shelters: Free up space so they can help more animals.",
            beneficio4: "Unmatched companionship: Adopted animals are incredibly grateful.",
            title2: "How to Adopt?",
            adoptar1: "Explore options: Check available pets in shelters and associations.",
            adoptar2: "Fill out the form: Complete an application to assess compatibility.",
            adoptar3: "Meet the pet: Schedule a visit to interact with them.",
            adoptar4: "Responsible adoption process: Sign a commitment to ensure the pet's well-being.",
            adoptar5: "Preparations for arrival: How to adapt your home for a new pet.",
            adoptar6: "Responsibilities: Food, exercise, vaccines, and sterilization.",
            adoptar7: "Basic training: Tips for harmonious coexistence.",
            title3: "Final Thoughts",
            final1: "Adopting is an act of love and empathy that goes beyond words. Animals enrich our lives with companionship, loyalty, and joy, and teach us about the purity of love and nature's connection.",
            final2: "When you adopt, you’re not only giving a home to a being in need, but you're also saving a life and giving meaning to your own in a unique way. Animals, whether dogs, cats, or other species, have intrinsic value beyond their utility to humans.",
            final3: "They feel, express affection, and in different ways, understand the world through their experiences. It is our responsibility to respect their right to live with dignity, provide protection, and treat them with kindness.",
            final4: "Now that you have this information, you can go to the 'Services' section under 'Adoption' to see adoption options."
        },
        es: {
            title: "¿como puedo adoptar?",
            content: "Adoptar un animal es una decisión maravillosa! Adoptar en lugar de comprar tiene muchos beneficios, tanto para el animal como para ti, ya que les das una segunda oportunidad a seres que necesitan un hogar. A continuacion te dejo información general sobre cómo adoptar un peludito!",
            title1: "Beneficios de Adoptar🐾",
            beneficio1: "Salvas una vida: Al adoptar, le das un hogar a un animal que lo necesita.",
            beneficio2: "Reduces animales en situación de calle: Ayudas a combatir el abandono.",
            beneficio3: "Apoyo a refugios: Libera espacio en los refugios para que puedan ayudar a más animales.",
            beneficio4: "Compañía inigualable: Los animales adoptados suelen ser increíblemente agradecidos.",
            title2: "¿Cómo Adoptar?",
            adoptar1: "Explora las opciones: Revisa las mascotas disponibles en refugios y asociaciones.",
            adoptar2: "Llena el formulario: Completa una solicitud para evaluar la compatibilidad.",
            adoptar3: "Conoce a la mascota: Programa una visita para interactuar con ella.",
            adoptar4: "Proceso de adopción responsable: Firma un compromiso para garantizar el bienestar de la mascota.",
            adoptar5: "Preparativos para la llegada: Cómo adecuar tu hogar para una nueva mascota.",
            adoptar6: "Responsabilidades: Alimentos, ejercicio, vacunas y esterilización.",
            adoptar7: "Adiestramiento básico: Consejos para una convivencia armónica.",
            title3: "Para terminar",
            final1: "Adoptar es un acto de amor y empatía que trasciende las palabras. Los animales no solo enriquecen nuestras vidas con compañía, lealtad y alegría, sino que también nos enseñan lecciones profundas sobre la pureza del amor y la conexión con la naturaleza.",
            final2: "Cuando adoptas, no solo estás dando un hogar a un ser que lo necesita, sino que también estás salvando una vida y dando sentido a la tuya de una forma única.",
            final3: "Los animales sienten, expresan afecto y, de maneras distintas, entienden el mundo a través de sus experiencias. Es nuestra responsabilidad respetar su derecho a vivir dignamente, brindarles protección y tratarlos con bondad.",
            final4: "Ahora que ya tienes esta información puedes ir al apartado de 'Servicios' en la sección de 'Adoptar' para poder ver las opciones de adopción."
        }
    };

    //Object.keys(translations[lang]).forEach(id => {
      //  document.getElementById(id).innerText = translations[lang][id];
    //});
    let newLang = currentLang === "es" ? "en" : "es";
    document.documentElement.lang = newLang;
    
    // Actualizar el texto del botón sin afectar otros elementos
    button.textContent = translations[newLang].buttonText;

    // Recorrer todos los elementos con "data-key" y actualizar el texto
    document.querySelectorAll("[id]").forEach(element => {
        let key = element.getAttribute("id");
        if (translations[newLang][key]) {
            element.textContent = translations[newLang][key];
        }
    });
}

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