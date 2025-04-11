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
  