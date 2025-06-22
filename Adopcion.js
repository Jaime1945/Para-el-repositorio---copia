//Funcion de los perfiles de mascotas/pantallas modales
/*function showModal(modalId) {
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
/*function cerrarModales() {
    document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
}*/

//funcion animacion
// Abrir modal y animar barras
    document.querySelectorAll(".open-modal").forEach(boton => {
      boton.addEventListener("click", () => {
        const modalId = boton.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        modal.style.display = "flex";

        // Reiniciar y animar barras
        modal.querySelectorAll(".rating").forEach(bar => {
          const value = bar.getAttribute("data-value") || "0";
          bar.style.width = "0%";
          void bar.offsetWidth;
          bar.style.width = value + "%";
        });
      });
    });

    // Cerrar todos los modales
    function cerrarModales() {
      document.querySelectorAll(".modal").forEach(modal => {
        modal.style.display = "none";
        modal.querySelectorAll(".rating").forEach(bar => {
          bar.style.width = "0%";
        });
      });
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
            pet1_kids: "Friendly with children: Calm and patient, ideal for homes with kids.",
            pet1_pets: "Friendly with other pets: Gets along with cats and adapts to friendly dogs.",
            pet1_family: "Affectionate with family: Loyal, protective, and always willing to show love.",
            pet1_playful: "Playful: Loves walks, ball games, and running outdoors.",
            pet1_story: "Artemisa was a stray dog who was injured and alone. One day, some volunteers rescued her, took care of her, and gave her lots of love. Now, Moka is waiting for a forever family.",
            pet2_name: "Panchito",
            pet2_info: "German Shepherd | Adult | Male",
            pet2_kids: "Friendly with children: Calm and patient, ideal for homes with kids.",
            pet2_pets: "Friendly with other pets: Gets along with cats and adapts to friendly dogs.",
            pet2_family: "Affectionate with family: Loyal, protective, and always willing to show love.",
            pet2_playful: "Playful: Loves walks, ball games, and running outdoors.",
            pet2_story: "Panchito was a stray dog who was injured and alone. One day, some volunteers rescued her, took care of her, and gave her lots of love. Now, Moka is waiting for a forever family.",
            pet3_name: "Luna",
            pet3_info: "Labrador | Puppy | Female",
            pet3_kids: "Friendly with children: Calm and patient, ideal for homes with kids.",
            pet3_pets: "Friendly with other pets: Gets along with cats and adapts to friendly dogs.",
            pet3_family: "Affectionate with family: Loyal, protective, and always willing to show love.",
            pet3_playful: "Playful: Loves walks, ball games, and running outdoors.",
            pet3_story: "Luna was a stray dog who was injured and alone. One day, some volunteers rescued her, took care of her, and gave her lots of love. Now, Moka is waiting for a forever family.",
            Adop_button:"ADOPT",
            pet4_name: "Palomo",
            pet4_info: "Unique breed | Young | Male | Beige and white",
            pet4_kids: "Friendly with children: Calm and patient, ideal for homes with kids.",
            pet4_pets: "Friendly with other pets: Gets along with cats and adapts to friendly dogs.",
            pet4_family: "Affectionate with family: Loyal, protective, and always willing to show love.",
            pet4_playful: "Playful: Loves walks, ball games, and running outdoors.",
            pet4_story: "Palomo was a stray dog who was injured and alone. One day, some volunteers rescued her, took care of her, and gave her lots of love. Now, Moka is waiting for a forever family.",
            pet5_name: "Muñeco",
            pet5_info: "Unique breed | Adult | Male | Beige, white and black",
            pet5_kids: "Friendly with children: Calm and patient, ideal for homes with kids.",
            pet5_pets: "Friendly with other pets: Gets along with cats and adapts to friendly dogs.",
            pet5_family: "Affectionate with family: Loyal, protective, and always willing to show love.",
            pet5_playful: "Playful: Loves walks, ball games, and running outdoors.",
            pet5_story: "Muñeco was a stray dog who was injured and alone. One day, some volunteers rescued her, took care of her, and gave her lots of love. Now, Moka is waiting for a forever family.",
            pet6_name: "little cow",
            pet6_info: "Unique breed | Adult | Female | black and white",
            pet6_kids: "Friendly with children: Calm and patient, ideal for homes with kids.",
            pet6_pets: "Friendly with other pets: Gets along with cats and adapts to friendly dogs.",
            pet6_family: "Affectionate with family: Loyal, protective, and always willing to show love.",
            pet6_playful: "Playful: Loves walks, ball games, and running outdoors.",
            pet6_story: "Vaquita was found among some flower pots in a quiet neighborhood. She was crying for food and affection, and when she was rescued, she didn't hesitate to show her sweetest side. Since then, she hasn't stopped purring and sharing love. She is a very clean, well-behaved, and lively little cat.",
            pet7_name: "atenea",
            pet7_info: "Unique breed | Young | Female | white and gray",
            pet8_name:"Hans",
            pet8_info:"Unique breed | Adult | Male | Golden",
            pet8_kids: "Friendly with children: Calm and patient, ideal for homes with kids.",
            pet8_pets: "Friendly with other pets: Gets along with cats and adapts to friendly dogs.",
            pet8_family: "Affectionate with family: Loyal, protective, and always willing to show love.",
            pet8_playful: "Playful: Loves walks, ball games, and running outdoors.",
            pet8_story: "Hans lived on the street with other dogs, but his noble and calm character made him stand out. He was rescued after a heavy rain, soaked but without losing his gentleness. Since then, he has proven to be a loyal, calm companion and very grateful to those who care for him.",
            pet9_name:"Copito",
            pet9_info:"Chihuahua | Young | Male | White",
            pet10_name:"Mikis",
            pet10_info:"Unique breed | Female | Brown",
            pet11_name:"Milly",
            pet11_info:"Unique breed | Female | Brown", 
            pet12_name:"Michi",
            pet12_info:"unique breed | Young | Female | white and gray",         
            pet13_name:"Adolfo",
            pet13_info:"Unique breed | Young | Male | white and gray",
            pet14_name:"Churro",
            pet14_info:"Unique breed | Young | Male | light and dark brown",
            pet15_name:"Moka",
            pet15_info:"Unique breed | Young | Male | light and dark brown",
            pet15_kids: "Friendly with children: Calm and patient, ideal for homes with kids.",
            pet15_pets: "Friendly with other pets: Gets along with cats and adapts to friendly dogs.",
            pet15_family: "Affectionate with family: Loyal, protective, and always willing to show love.",
            pet15_playful: "Playful: Loves walks, ball games, and running outdoors.",
            pet15_story: "Moka was a stray dog who was injured and alone. One day, some volunteers rescued her, took care of her, and gave her lots of love. Now, Moka is waiting for a forever family.",
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
            desc1: "uh.",
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
            Adop_button:"ADOPT"

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
            //Mascotas
            title3: "Adopción de Mascotas",
            pet1_name: "Artemisa",
            pet1_info: "Bombay | Joven | Hembra",
            pet1_kids: "Amistosa con los niños:Le encanta convivir con los más pequeños, es paciente y juguetona.",
            pet1_pets: "Amistosa con otras mascotas:Se está adaptando, prefiere ir conociendo a los otros peludos poco a poco..",
            pet1_family: "Cariñosa con la familia:Le gusta recibir cariño, aunque a veces disfruta de su espacio.",
            pet1_playful: "Juguetona:Le encantan las pelotas suaves, las cajas y todo lo que se mueva rápido.",
            pet1_story: "Artemisa fue rescatada de las calles luego de pasar por un momento muy difícil: perdió a sus crías. A pesar de eso, no ha perdido su espíritu fuerte y amoroso. Es una gatita que ha aprendido a confiar nuevamente en las personas y está lista para formar parte de una familia que le brinde el cariño que merece.",
            pet2_name: "Panchito",
            pet2_info: "Raza unica | Joven | Macho | Negro y cafe",
            pet2_kids: "Amistoso con los niños:Protector y paciente, ideal para convivir con toda la familia.",
            pet2_pets: "Amistoso con otras mascotas:Puede convivir con otros perros, aunque a veces es territorial.",
            pet2_family: "Cariñoso con la familia:Muy leal y afectuoso, siempre está atento a los suyos.",
            pet2_story: "panchito fue rescatado de una situación de abandono, donde vivía encadenado sin poder correr libremente. A pesar de sus difíciles comienzos, nunca perdió su espíritu noble. Con los cuidados del refugio ha recuperado la energía y el brillo en su mirada. Es un perro inteligente, fuerte y con un corazón enorme.",
            pet3_name: "Luna",
            pet3_info: "Border Collie | Cachorro | Hembra | Negro y Blanco",
            pet3_kids: "Amistosa con los niños:Ideal para convivir con los más pequeños, les encanta jugar juntos",
            pet3_pets: "Amistosa con otras mascotas:Está en proceso de socialización, pero es curiosa y juguetona",
            pet3_family: "Cariñosa con la familia:Le encanta que la consientan, siempre quiere estar acompañada.",
            pet3_playful: "Juguetona:No se cansa de correr, brincar y jugar con su moñito rosado",
            pet3_story: "Luna fue encontrada en un parque, sola y desorientada. Una vecina del refugio la llevó a un lugar seguro, donde ha recibido todo el amor y cuidados que merece. A pesar de su corto tiempo en este mundo, ya muestra un corazón valiente y muchas ganas de dar y recibir cariño.",
            Adop_button:"ADOPT",
            pet4_name: "Palomo",
            pet4_info: "Raza unica | Joven | Macho | Beige y blanco",
            pet4_kids: "Amistoso con los niños:Muy tranquilo y paciente, ideal para convivir con familias",
            pet4_pets: "Amistoso con otras mascotas:Sociable y tolerante, se lleva bien con otros perros..",
            pet4_family: " Cariñoso con la familia:Le encanta seguir a su humano a todas partes",
            pet4_playful: "Juguetón:Disfruta de paseos y juegos al aire libre, especialmente si hay pelotas..",
            pet4_story: "Palomo fue encontrado cerca de una terminal de autobuses, donde pasaba los días buscando comida y afecto. A pesar de sus días duros, es un perro alegre, agradecido y muy noble. Desde que llegó al refugio, ha mostrado una gran capacidad de adaptación y muchas ganas de ser parte de una familia.",
            pet5_name: "Muñeco",
            pet5_info: "Raza unica | Adulto | Macho | Beige, blanco y Negro",
            pet5_kids: "Amistoso con los niños:Le encanta correr con los pequeños y recibir caricias.",
            pet5_pets: "Amistoso con otras mascotas: <br> Juega sin parar con sus compañeros del refugio",
            pet5_family: "Cariñoso con la familia: <br> Siempre busca acurrucarse cerca de alguien.",
            pet5_playful: "Juguetón:¡Es energía pura! Ama perseguir hojas, juguetes y hacer travesuras",
            pet5_story: "Muñeco fue encontrado en un lote baldío, asustado pero con mucha energía y curiosidad. Desde el primer día mostró su corazón valiente y tierno. Es un perrito que está aprendiendo rápido y adora estar rodeado de personas y otros animales. Su mezcla de colores lo hace único, ¡pero su personalidad lo hace inolvidable!.",
            pet6_name: "Vaquita",
            pet6_info: "Raza unica | Adulto | Hembra | blanco y Negro",
            pet6_kids: "Amistoso con los niños:Curioso y juguetón, le encanta que lo sigan con juguetes",
            pet6_pets: ">Amistoso con otras mascotas:Muy sociable con otros gatitos y perros pequeños.",
            pet6_family: "Cariñoso con la familia:Siempre busca subirse a tu regazo y ronronear.",
            pet6_playful: "Juguetón:Salta, corre y juega todo el día con lo que encuentre.",
            pet6_story: "Vaquita fue encontrado entre unas macetas en una colonia tranquila. Lloraba por comida y cariño, y cuando fue rescatado no dudó en mostrar su lado más dulce. Desde entonces, no ha dejado de ronronear y compartir amor. Es un gatito muy limpio, educado y lleno de vida.",
            pet2_name: "Panchito",
            pet2_info: "Pastor Alemán | Adulto | Macho",
            pet3_name: "Luna",
            pet3_info: "Labrador | Cachorro | Hembra",
            pet4_name: "Palomo",
            pet4_info: "Raza unica | Joven | Macho | Beige y blanco",
            pet5_name: "Muñeco",
            pet5_info: "Raza unica | Adulto | Macho | Beige, blanco y Negro",
            pet6_name: "Andres Manuel",
            pet6_info: "Raza unica | Adulto | Hembra | blanco y Negro",
            pet7_name: "atenea",
            pet7_info: "Raza unica | Joven | Hembra | blanco y Gris",
            pet8_name:"Hans",
            pet8_info:"Raza unica | Adulto | Macho | Golden",
            pet9_name:"Copito",
            pet9_info:"Chihuahua | Joven | Macho | blanco",
            pet10_name:"Mikis",
            pet10_info:"Raza unica | Hembra | Cafe",
            pet11_name:"Milly",
            pet11_info:"Raza unica | Adulto | Hembra | blanco y Gris", 
            pet12_name:"Michi",
            pet12_info:"Raza unica | Joven | Hembra | blanco y Gris",         
            pet13_name:"Adolfo",
            pet13_info:"Raza unica | Joven | Macho | blanco y Gris",
            pet14_name:"Churro",
            pet14_info:" Raza unica | Joven | Macho | cafe claro y obscuro",
            pet15_name:"Moka",
            pet15_info:"Raza unica | Joven | hembra | cafe claro y obscuro",
            profile_name: "Perfil de Mascota",
            profile_description: "¡Este maravilloso compañero está buscando un hogar lleno de amor!",
            rescuer_label: "Rescatado por",
            rating_children_label: "Amistoso con los niños:",
            rating_pets_label: "Amistoso con otras mascotas:",
            rating_family_label: "Cariñoso con la familia:",
            rating_playful_label: "Juguetón:",
            //Tarjetas de "Adoptados"
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


const barras = modal.querySelectorAll(".rating");
  barras.forEach(barra => {
    const porcentaje = barra.style.width; // almacena el valor real
    barra.style.width = "0"; // reinicia
    setTimeout(() => {
      barra.style.width = porcentaje; // aplica con transición
    }, 100);
  });