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

 //traductor ingles/español
 function toggleLanguage() {
    let button = document.getElementById("translateButton");
    let currentLang = document.documentElement.lang || "es";
 //function translatePage(lang) {
  const translations = {
      es: {
         intro: "Tips y Cuidados recomendados",
         texto_intro: "Si adoptaste una mascota rescatada, ten en cuenta que podría necesitar más paciencia para construir confianza. Dedica tiempo para entender sus miedos y reacciones, y evita forzar el contacto físico hasta que se sientan cómodos. Con amor constante, estos animales suelen transformarse en compañeros increíblemente leales.",
         comienzo: "Recomendaciones para tu mascota",
         texto_comienzo: "Ahora te diremos lo que no puede faltar en tu hogar para recibir al nuevo integrante de tu familia como se merece:",
         final1: "Unas ultimas palabras",
         texto_final: " El cariño y la atención no solo benefician a las mascotas, sino también a los humanos. Estudios han demostrado que interactuar con animales puede reducir el estrés, mejorar el estado de ánimo y fomentar un mayor sentido de propósito. Por eso, cuidar el bienestar emocional de tu mascota no es solo un acto de bondad, ¡es también una experiencia que te enriquecerá a ti como persona!",
          tab1_title: "Alimentación Adecuada",
          tab2_title: "Vacunación y Desparasitación",
          tab3_title: "Higiene y Limpieza",
          tab4_title: "Espacio Seguro y Cuidado del Entorno",
          tab5_title: "Esterilización o Castración",
          tab6_title: "Cariño y Tiempo de Calidad",
          title1: "Alimentación Adecuada",
          text1: "Cada mascota tiene necesidades nutricionales distintas. Consulta con un veterinario para elegir la mejor dieta según la edad, raza y condición de salud de tu mascota.",
          text2: "La alimentación debe adecuarse al nivel de actividad. No todas las mascotas requieren la misma cantidad de comida.",
          text3: "Hidratación: Mantén siempre agua fresca y limpia disponible para evitar problemas de salud.",
          title2: "Vacunación y Desparasitación",
          text4: "Las vacunas son esenciales para prevenir enfermedades mortales y brotes.",
          text5: "Vacuna a tu mascota siguiendo las indicaciones veterinarias.",
          text6: "Los parásitos internos y externos pueden afectar órganos y piel. Usa tratamientos recomendados por especialistas.",
          title3: "Higiene y Limpieza",
          text7: "Cepilla regularmente para evitar nudos, reducir el pelo muerto y mejorar la circulación sanguínea.",
          text8: "No bañes demasiado seguido a tu mascota para evitar problemas en la piel.",
          text9: "La salud dental es esencial. Utiliza productos adecuados para el cuidado de los dientes.",
          title4: "Espacio Seguro y Cuidado del Entorno",
          text10: "Proporciona un espacio cómodo donde tu mascota pueda relajarse y sentirse segura.",
          text11: "Retira productos tóxicos o pequeños objetos que podrían ser ingeridos accidentalmente.",
          text12: "Usa correas y placas de identificación en lugares públicos para garantizar su seguridad.",
          title5: "Esterilización o Castración",
          text13: "Beneficios para la salud: Reduce riesgos de enfermedades reproductivas.",
          text14: "Control de población: Evita la reproducción no planificada, reduciendo el abandono.",
          title6: "Cariño y Tiempo de Calidad",
          text15: "La interacción diaria fortalece la relación entre dueño y mascota.",
          text16: "Dedica tiempo para juegos y ejercicio, esenciales para su bienestar.",
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
          boton_bot: "Habilitar bot",
      },
      en: {
         intro: "Recommended Tips and Care",
         texto_intro: "If you adopted a rescued pet, keep in mind that it may need more patience to build trust. Take time to understand their fears and reactions, and avoid forcing physical contact until they feel comfortable. With constant love, these animals often transform into incredibly loyal companions.",
         comienzo: "Recommendations for your pet",
         texto_comienzo: "Now we will tell you what cannot be missing in your home to receive the new member of your family as it deserves:",
         final1: "A final word",
         texto_final: "Affection and attention not only benefit pets, but also humans. Studies have shown that interacting with animals can reduce stress, improve mood, and foster a greater sense of purpose. That's why taking care of your pet's emotional well-being is not only an act of kindness, it's also an experience that will enrich you as a person!",
          tab1_title: "Proper Nutrition",
          tab2_title: "Vaccination and Deworming",
          tab3_title: "Hygiene and Cleaning",
          tab4_title: "Safe Space and Environmental Care",
          tab5_title: "Sterilization or Neutering",
          tab6_title: "Love and Quality Time",
          title1: "Proper Nutrition",
          text1: "Each pet has specific dietary needs. Consult a vet to choose the best diet according to their age, breed, and health.",
          text2: "Feeding frequency and portions depend on activity level. Not all pets require the same amount of food.",
          text3: "Hydration: Keep fresh and clean water available at all times.",
          title2: "Vaccination and Deworming",
          text4: "Vaccines are essential to prevent life-threatening diseases and outbreaks.",
          text5: "Follow a proper vaccination schedule recommended by a vet.",
          text6: "Internal and external parasites can affect organs and skin. Use treatments recommended by specialists.",
          title3: "Hygiene and Cleaning",
          text7: "Regular brushing prevents knots, removes loose hair, and improves circulation.",
          text8: "Avoid excessive bathing to prevent skin problems.",
          text9: "Oral hygiene is essential. Use proper dental care products.",
          title4: "Safe Space and Environmental Care",
          text10: "Provide a comfortable resting space.",
          text11: "Remove toxic items or small objects that may be accidentally ingested.",
          text12: "Ensure safety during walks with leashes and ID tags.",
          title5: "Sterilization or Neutering",
          text13: "Health benefits: Reduces risks of reproductive diseases.",
          text14: "Prevents uncontrolled reproduction, reducing pet abandonment.",
          title6: "Love and Quality Time",
          text15: "Daily interaction strengthens emotional bonds between owner and pet.",
          text16: "Engage in fun activities and exercise to ensure overall well-being.",
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
          boton_bot: "Enable bot",
      },
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