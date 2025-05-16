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

//Traductor de la pagina
function toggleLanguage() {
    let button = document.getElementById("translateButton");
    let currentLang = document.documentElement.lang || "es";
//function translatePage(lang) {
    const translations = {
        en: {
            title: "Happy Paws House",
            content:"We seek to protect the lives of dogs and cats in a state of abuse and abandonment. We provide them with food, medicine and shelter, in order to improve their quality of life and get a home for the furry ones!",
            title1: "Welcome to Happy Paws Home! 🐾",
            content1: "At Happy Paws Home, we are passionate about providing the best care and love to all pets. Our mission is to create a home where every paw finds happiness and well-being. Here, pet owners and animal lovers can discover everything they need to care for, pamper, and enjoy their loyal companions.",
            content2: "Join our online community and share photos, videos, and experiences of your adorable pets. At Happy Paws Home, every paw has a story, and every story deserves to be told.",
            content3: "Thank you for being part of our family! 🐕🐱🐾",
            title2: "Our Purpose",
            content4: "We have changed their world, and they have changed ours. Many have been happily adopted, others have taught us perseverance and gratitude. Some are no longer with us, but we are left with the feeling of having allowed them to know human kindness. And then there are those who live in the shelter, still waiting for a chance to have a family and fill their homes with joy and love.",
            title3: "How to Help?",
            content5: "If you can't adopt, you can still make a difference! There are several ways to collaborate with our mission:",
            content6: "Monetary Donations: Help cover food, medical care, and shelter costs.",
            content7: "In-Kind Donations: Such as food, blankets, medications, and toys.",
            content8: "Volunteering: From cleaning assistance to socializing animals, there's always something you can do.",
            content9: "Sponsorship: If you can't adopt, you can sponsor an animal to cover its basic needs until it finds a home.",
            title4: "Adopted Pets!!!",
            mascota1: "Muñeco",
            mascota2: "Copito",
            mascota3: "Luna",
            desc1: "Muñeco is a noble and loving dog who just wants to give and receive love. He is calm, loves to sleep curled up, and is always ready for a good petting session. He gets along well with other dogs and kids, making him the perfect companion for any family.",
            desc2: "Copito is a kitten full of energy and curiosity. With his restless paws and ever-wagging tail, he is ready to explore the world by your side. He loves to play, run, and discover new things, but also enjoys hugs and naps after a fun-filled day.",
            desc3: "Luna is a puppy full of energy and love. With those bright eyes full of curiosity, she is ready to find her forever home. She loves to run, play with balls, and snuggle up after a day of adventures.",
            menuInicio: "Home",
            menuGuia: "Guide and Help",
            menuAdoptar: "How can I adopt?",
            menuCuidados: "Tips and Care",
            menuServicios: "Services",
            menuAdopcion: "Adoption",
            menuDonaciones: "Donations",
            menuNoticias: "News",
            menuContactos: "Contacts",
            searchInput: "Search...",
            Ingles: "Translate to English",
            Español:"Translate to Spanish",
        },
        es: {
            title: "Casa Patitas Felices",
            content:"Buscamos proteger la vida de perros y gatos en estado de maltrato y abandono. Les brindamos alimentos, medicamentos y albergue, con el fin de mejorar su calidad de vida y conseguirles un hogar a los peluditos!",
            title1: "¡Bienvenid@S a Casa Patitas Felices! 🐾",
            content1: "En Casa Patitas Felices nos apasiona brindar el mejor cuidado y amor a todas las mascotas. Nuestra misión es crear un hogar donde cada patita encuentre felicidad y bienestar. Aquí, los dueños de mascotas y amantes de los animales pueden descubrir todo lo necesario para cuidar, consentir y disfrutar de sus fieles compañeros.",
            content2: "Únete a nuestra comunidad en línea y comparte fotos, videos y experiencias de tus adorables mascotas. En Casa Patitas Felices, cada pata tiene una historia, y cada historia merece ser contada.",
            content3: "¡Gracias por ser parte de nuestra familia! 🐕🐱🐾",
            title2: "Nuestro Propósito",
            content4: "Hemos cambiado su mundo y ellos el nuestro. Muchos han sido felizmente adoptados, otros nos han enseñado a no darnos por vencidos y son ejemplo de perseverancia y gratitud. Algunos ya no nos acompañan, pero nos queda la sensación de haberles permitido conocer la bondad humana. Y están los que habitan el refugio y que siguen esperando una oportunidad para tener una familia y llenar sus hogares de alegría y amor. Puede que no salvemos millones de animales de la calle que existen, pero ayudaremos a los que estén a nuestro alcance, a los que el universo nos coloque en el camino.",
            title3: "¿Cómo ayudar?",
            content5: "Si no puedes adoptar, ¡aún puedes marcar la diferencia! Existen varias maneras en las que puedes colaborar con nuestra misión:",
            content6: "Donaciones Monetarias: Ayudan a cubrir los gastos de alimentación, atención médica y refugio.",
            content7: "Donaciones en Especie: Como alimento, mantas, medicamentos y juguetes.",
            content8: "Voluntariado: Desde ayudar con la limpieza hasta socializar a los animales.",
            content9: "Apadrinamiento: Puedes apadrinar a un animal para cubrir sus necesidades básicas hasta que encuentre un hogar.",
            title4: "Mascotas adoptadas!!!",
            mascota1: "Muñeco",
            mascota2: "Copito",
            mascota3: "Luna",
            desc1: "Muñeco es un perrito noble y amoroso que solo quiere dar y recibir cariño. Es tranquilo, le encanta dormir acurrucado y siempre está listo para una buena sesión de caricias. Se lleva bien con otros perritos y con niños, haciendo de él el compañero ideal para cualquier familia.",
            desc2: "Copito es un gatito lleno de energía y curiosidad. Con sus patitas inquietas y su colita siempre moviéndose, está listo para explorar el mundo a tu lado. Le encanta jugar, correr y descubrir cosas nuevas, pero también disfruta de los abrazos y las siestas después de un día lleno de diversión.",
            desc3: "Luna es una cachorrita llena de energía y amor. Con esos ojitos brillantes llenos de curiosidad, está lista para encontrar su hogar definitivo. Le encanta correr, jugar con pelotas y acurrucarse después de un día de aventuras.",
            menuInicio: "Inicio",
            menuGuia: "Guía y ayuda",
            menuAdoptar: "¿Cómo puedo adoptar?",
            menuCuidados: "Tips y Cuidados",
            menuServicios: "Servicios",
            menuAdopcion: "Adopción",
            menuDonaciones: "Donaciones",
            menuNoticias: "Noticias",
            menuContactos: "Contactos",
            searchInput: "Buscar...",
            Ingles: "Traducir a Inglés",
            Español:"Traducir a Español",
        }
    };
  
    //Object.keys(translations[lang]).forEach(id => {
      //  document.getElementById(id).innerText = translations[lang][id];
    //});

    // Traducir el placeholder de la barra de búsqueda
    //document.getElementById("searchInput").setAttribute("placeholder", translations[lang].searchInput);
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