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
  
  // Carga inicial de noticias al entrar en la página
  loadMoreNews();
  

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