//Funcion de los perfiles de mascotas/pantallas modales
function showModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function hideModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Abrir modales de cada mascota
document.getElementById("open-artemisa-modal").addEventListener("click",function () {
    showModal("modal-artemisa");
});

document.getElementById("open-luna-modal").addEventListener("click",function () {
    showModal("modal-luna");
});

document.getElementById("open-panchito-modal").addEventListener("click",function () {
    showModal("modal-panchito");
});

document.getElementById("open-palomo-modal").addEventListener("click",function () {
    showModal("modal-palomo");
});

document.getElementById("open-muñeco-modal").addEventListener("click",function () {
    showModal("modal-muñeco");
});

document.getElementById("open-vaquita-modal").addEventListener("click",function () {
    showModal("modal-vaquita");
});

document.getElementById("open-atenea-modal").addEventListener("click",function () {
    showModal("modal-atenea");
});

document.getElementById("open-Hans-modal").addEventListener("click",function () {
    showModal("modal-Hans");
});

document.getElementById("open-copito-modal").addEventListener("click",function () {
    showModal("modal-copito");
});

document.getElementById("open-mikis-modal").addEventListener("click",function () {
    showModal("modal-mikis");
});

document.getElementById("open-milly-modal").addEventListener("click",function () {
    showModal("modal-milly");
});

document.getElementById("open-michi-modal").addEventListener("click",function () {
    showModal("modal-michi");
});


//Funcion para cerrar las pantallas modales
function cerrarModales() {
    document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
}
//



//Funcion para cerrar las pantallas modales
function cerrarModales() {
    document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
}

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




//traductor ingles/español
function toggleLanguage() {
    let button = document.getElementById("translateButton");
    let currentLang = document.documentElement.lang || "es";
    const translations = {
        en: {
            title_inicial: "Happy Paws House",
            content_inicial:"We seek to protect the lives of dogs and cats in a state of abuse and abandonment. We provide them with food, medicine and shelter, in order to improve their quality of life and get a home for the furry ones!",
            title: "A Few Words from Our Team",
            intro: "Every time someone chooses to adopt instead of buy, they help reduce abandonment and overpopulation problems, sending a powerful message of compassion and solidarity. Adopting means recognizing that all lives have value and that our actions can make a difference. </br> As Anatole France said: 'Until one has loved an animal, a part of one's soul remains unawakened.' And what a wonderful awakening it is to care for and be loved by them.",
            title2: "Adoption Form",
            text1: "We would love to provide a furry friend to everyone who wants to adopt, but our great responsibility towards them requires us to have minimum requirements to ensure they find permanent homes.",
            req1: "💛 The responsible person for the pet.",
            req2: "💛 This little one will be part of the family for approximately 15 years.",
            req3: "💛 Fill out the Adoption Pre-form.",
            req4: "💛 The entered data will be verified by foundation officials (this verification takes 3 business days).",
            req5: "💛 If your application is approved, we will contact you to arrange the pet's arrival at your home.",
            req6: "💛 It is important to have time and space for a comfortable environment.",
            req7: "💛 It is crucial to have financial stability to ensure proper care.",
            warning1: "🚫 If you live in an area with excessive stray dogs or cats, we encourage you to adopt one from the streets.",
            warning2: "⚠️ The commitments and obligations in the Adoption Contract must be fulfilled.",
            warning3: "⚠️ We will continue monitoring to ensure everything is going well. They will always be our little ones.",
            title3: "Pet Adoption",
            pet1_name: "Artemisa",
            pet1_info: "Bombay | Young | Female",
            pet2_name: "Panchito",
            pet2_info: "German Shepherd | Adult | Male",
            pet3_name: "Luna",
            pet3_info: "Labrador | Puppy | Female",
            pet4_name: "Palomo",
            pet4_info: "Siberian Husky | Young | Male",
            pet5_name: "Jose Roberto",
            pet5_info: "Siberian Husky | Young | Male",
            pet6_name: "Andres Manuel",
            pet6_info: "Siberian Husky | Young | Male",
            profile_name: "Pet Profile",
            profile_description: "This wonderful companion is looking for a loving home!",
            rescuer_label: "Rescued by",
            rating_children_label: "Friendly with children:",
            rating_pets_label: "Friendly with other pets:",
            rating_family_label: "Affectionate with the family:",
            rating_playful_label: "Playful:",
            adopt_now: "Adopt Now!",
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
            titulo_mascoadoptadas:"Adopted pets!!!",
            Adop_button:"ADOPT",
        },
        es: {
            title_inicial: "Casa Patitas Felices",
            content_inicial:"Buscamos proteger la vida de perros y gatos en estado de maltrato y abandono. Les brindamos alimentos, medicamentos y albergue, con el fin de mejorar su calidad de vida y conseguirles un hogar a los peluditos!",
            title: "Unas Palabras de nuestro Equipo",
            intro: "Cada vez que alguien opta por adoptar en lugar de comprar, contribuye a reducir el abandono y los problemas de sobrepoblación, enviando un poderoso mensaje de compasión y solidaridad. Adoptar es reconocer que todas las vidas tienen valor y que nuestras acciones pueden marcar la diferencia. </br> Como dijo Anatole France: 'Hasta que no hayas amado a un animal, una parte de tu alma estará dormida.' Y qué despertar tan maravilloso es cuidar y ser amado por ellos.",
            title2: "Formato de Adopción",
            text1: "Nos encantaría poder entregar un peludito a cada persona que desee adoptar, pero la gran responsabilidad que sentimos con nuestros ángeles nos obliga a tener unos requisitos mínimos para garantizar hogares definitivos.",
            req1: "💛 La persona responsable del peludito.",
            req2: "💛 Este o esta pequeñita será miembro de la familia alrededor de 15 años.",
            req3: "💛 Diligencia el Pre-formulario de Adopción.",
            req4: "💛 Los datos ingresados serán verificados por funcionarios de la Fundación (esta verificación tarda 3 días hábiles).",
            req5: "💛 Si tu solicitud y todo está en orden, nos contactaremos contigo para coordinar el día en que el peludito llegue a tu casa.",
            req6: "💛 Es importante tener el tiempo y el espacio para que tú y ellos estén muy bien.",
            req7: "💛 Es importante contar con estabilidad económica para garantizar sus cuidados.",
            warning1: "🚫 Si vives en una zona de sobrepoblación canina o felina, te pedimos adoptes a uno de la calle.",
            warning2: "⚠️ Se deben cumplir los compromisos y obligaciones del Contrato de Adopción.",
            warning3: "⚠️ Seguimos en constante seguimiento para saber cómo va todo. Ellos siempre serán nuestros hijitos.",
            title3: "Adopción de Mascotas",
            pet1_name: "Artemisa",
            pet1_info: "Bombay | Joven | Hembra",
            pet2_name: "Panchito",
            pet2_info: "Pastor Alemán | Adulto | Macho",
            pet3_name: "Luna",
            pet3_info: "Labrador | Cachorro | Hembra",
            pet4_name: "Palomo",
            pet4_info: "Husky Siberiano | Joven | Macho",
            pet5_name: "Muñeco",
            pet5_info: "Husky Siberiano | Joven | Macho",
            pet6_name: "Andres Manuel",
            pet6_info: "Husky Siberiano | Joven | Macho",
            profile_name: "Perfil de Mascota",
            profile_description: "¡Este maravilloso compañero está buscando un hogar lleno de amor!",
            rescuer_label: "Rescatado por",
            rating_children_label: "Amistoso con los niños:",
            rating_pets_label: "Amistoso con otras mascotas:",
            rating_family_label: "Cariñoso con la familia:",
            rating_playful_label: "Juguetón:",
            adopt_now: "¡Adoptar Ahora!",
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
            titulo_mascoadoptadas:"Mascotas adoptadas!!!",
            Adop_button:"ADOPTAR",
        }
    };
    
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
