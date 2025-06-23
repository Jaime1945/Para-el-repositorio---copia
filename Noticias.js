// Lista de noticias predefinidas
const newsData = [
    {
      title: "¡Max encontró una familia!", // Título de la noticia
      date: "3 de abril de 2025", // Fecha
      image: "https://via.placeholder.com/400x250?text=Max", // Imagen de muestra
      text: "Después de varios meses en el refugio, Max fue adoptado por una familia increíble. ¡Estamos muy felices por él!" // Contenido
    },
    {
      title: "Nueva jornada de vacunación gratuita",
      date: "1 de abril de 2025",
      image: "https://via.placeholder.com/400x250?text=Vacunación",
      text: "Este sábado tendremos una jornada de vacunación gratuita. ¡Trae a tu peludo!"
    }
    // Puedes agregar más objetos con noticias aquí
  ];
  
  // Índice que rastrea cuántas noticias ya se cargaron
  let newsIndex = 0;
  
  // Referencia al contenedor donde se insertarán las noticias
  const newsContainer = document.getElementById('newsContainer');
  
  // Función que carga más noticias en pantalla
  function loadMoreNews() {
    // Selecciona 2 noticias más para mostrar
    const nextNews = newsData.slice(newsIndex, newsIndex + 2);
  
    // Recorre cada noticia
    nextNews.forEach(news => {
      const card = document.createElement('div'); // Crea un div para la tarjeta
      card.className = 'news-card'; // Le asigna la clase de estilo
      card.innerHTML = `
        <img src="${news.image}" alt="${news.title}" class="news-image" />
        <div class="news-content">
          <h2 class="news-title">${news.title}</h2>
          <p class="news-date">${news.date}</p>
          <p class="news-text">${news.text}</p>
        </div>
      `;
      newsContainer.appendChild(card); // Agrega la tarjeta al contenedor
    });
  
    // Actualiza el índice para saber cuántas se han cargado
    newsIndex += 2;
  
    // Si ya no quedan más noticias, oculta el botón
    if (newsIndex >= newsData.length) {
      document.querySelector('.load-more').style.display = 'none';
    }
  }
  
//Traductor ingles/español
function toggleLanguage() {
    let button = document.getElementById("translateButton");
    let currentLang = document.documentElement.lang || "es";
//function translatePage(lang) {
    const translations = {
        en: {
            //menus
            menuInicio: "Home",
            menuGuia: "Guide and Help",
            menuComoadopt: "How can I adopt?",
            menuTips: "Tips and care",
            menuServicios: "Services",
            menuAdopcion: "Adoption",
            menuDonaciones: "Donations",
            menuNoticias: "News",
            menuExtras: "Extras",
            menuBitacora: "Logbook",
            menuComunidad: "community",
            menuInicioSesion: "Log In",
            mensaje_bienvenida: "upcoming events!",
        },
        es: {
            //menus
            menuInicio: "Inicio",
            menuGuia: "Guia y ayuda",
            menuComoadopt: "¿Como puedo adoptar?",
            menuTips: "Tips y cuidados",
            menuServicios: "Servicios",
            menuAdopcion: "Adopcion",
            menuDonaciones: "Donaciones",
            menuNoticias: "Noticias",
            menuExtras: "Extras",
            menuBitacora: "Bitacora",
            menuComunidad: "Comunidad",
            menuInicioSesion: "Iniciar Sesion",
            mensaje_bienvenida: "proximos eventos!",
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
