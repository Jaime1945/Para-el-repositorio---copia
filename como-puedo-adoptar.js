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
            contentExtra: "Adopting a pet is an act of responsibility and love that involves much more than simply bringing an animal home. It means making space for them in your life, in your routine, and in your heart, with the awareness that they will be with you for many years. Before adopting, it’s important to reflect on whether you are ready to take on that commitment: to have the time, patience, and resources to care for a living being that will depend entirely on you. In Mexico, there are numerous associations and shelters dedicated to rescuing dogs and cats in situations of abandonment or abuse. Many of these animals arrive at the shelter with difficult stories, so finding them a home represents a second chance for them. The adoption process usually includes filling out a form, conducting an interview, and in some cases, allowing a visit to your home to ensure that the environment is suitable. A commitment is also signed in which you take responsibility for their well-being. When adopting, You are not only changing the life of an animal, you are also transforming your own. Pets offer companionship, unconditional love, and a unique bond. However, they also require medical care, exercise, proper feeding, and socialization. Preparing your home, educating yourself about their specific needs, and providing a safe environment are essential steps for a successful adaptation. Adoption should not be impulsive or temporary: it should be a conscious decision, made with both heart and reason. Because when you choose to adopt, you choose to be part of the solution, to provide hope, and to build a lifelong bond.",
            title3: "Final Thoughts",
            title4: "How to adopt a pet responsibly?",
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
            contentExtra: "Adoptar a una mascota es un acto de responsabilidad y amor que implica mucho más que simplemente llevar un animal a casa. Significa abrirle espacio en tu vida, en tu rutina y en tu corazón, con la conciencia de que estará contigo durante muchos años. Antes de adoptar, es importante reflexionar si estás preparado para asumir ese compromiso: tener el tiempo, la paciencia y los recursos para cuidar de un ser vivo que dependerá totalmente de ti. En México, existen numerosas asociaciones y refugios que se dedican a rescatar perros y gatos en situación de abandono o maltrato. Muchos de estos animales llegan al refugio con historias difíciles, por lo que encontrarles un hogar representa una segunda oportunidad para ellos. El proceso de adopción suele incluir llenar un formulario, realizar una entrevista y, en algunos casos, permitir una visita a tu domicilio para comprobar que el entorno es adecuado. También se firma un compromiso en el que te haces responsable de su bienestar. Al adoptar, no solo estás cambiando la vida de un animal, también estás transformando la tuya. Las mascotas ofrecen compañía, cariño incondicional y un vínculo único. Sin embargo, también requieren atención médica, ejercicio, alimentación adecuada y socialización. Preparar tu casa, informarte sobre sus necesidades específicas y brindarle un entorno seguro son pasos esenciales para que la adaptación sea exitosa. La adopción no debe ser impulsiva ni temporal: debe ser una decisión consciente, tomada con el corazón y la razón. Porque cuando eliges adoptar, eliges ser parte de la solución, brindar esperanza y construir un vínculo para toda la vida.",
            title3: "Para terminar",
            title4: "¿Cómo adoptar a una mascota de forma responsable?",
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
