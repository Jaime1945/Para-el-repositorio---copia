function translatePage(lang) {
  const translations = {
      en: {
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
          content9: "Sponsorship: If you can't adopt, you can sponsor an animal to cover its basic needs until it finds a home."
      },
      es: {
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
          content9: "Apadrinamiento: Puedes apadrinar a un animal para cubrir sus necesidades básicas hasta que encuentre un hogar."
      }
  };

  Object.keys(translations[lang]).forEach(id => {
      document.getElementById(id).innerText = translations[lang][id];
  });
}
