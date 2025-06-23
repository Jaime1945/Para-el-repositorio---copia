function mostrarFormulario(tipo) {
  const contenedor = document.getElementById("formulario-contenedor");
  const t = traduccionesFormularios[idiomaActual][tipo];
  let html = "";

  if (tipo === "dinero") {
    html = `
      <form>
        <h2>${t.titulo}</h2>

        <label for="nombre">${t.nombre}</label>
        <input type="text" id="nombre" placeholder="${t.placeholderNombre}" required />

        <label for="email">${t.correo}</label>
        <input type="email" id="email" placeholder="${t.placeholderCorreo}" required />

        <label for="telefono">${t.telefono}</label>
        <input type="tel" id="telefono" placeholder="${t.placeholderTelefono}" required pattern="[0-9]{10}" />

        <label for="tarjeta">${t.tarjeta}</label>
        <input type="text" id="tarjeta" placeholder="${t.placeholderTarjeta}" required pattern="\\d{16}" />

        <label for="cantidad">${t.cantidad}</label>
        <input type="number" id="cantidad" placeholder="${t.placeholderCantidad}" required />

        <label for="comentario">${t.comentario}</label>
        <textarea id="comentario" placeholder="${t.placeholderComentario}"></textarea>

        <button type="submit" onclick="event.preventDefault(); alert('${t.alerta}')">${t.boton}</button>
      </form>
    `;
  }

  if (tipo === "material") {
    html = `
      <form>
        <h2>${t.titulo}</h2>
        <label for="nombre">${t.nombre}</label>
        <input type="text" id="nombre" required />

        <label for="tipo">${t.tipo}</label>
        <select id="tipo">
          ${t.opciones.map(o => `<option value="${o.toLowerCase()}">${o}</option>`).join("")}
        </select>

        <label for="cantidad">${t.descripcion}</label>
        <textarea id="cantidad" required></textarea>

        <button type="submit" onclick="event.preventDefault(); alert('${t.alerta}')">${t.boton}</button>
      </form>
    `;
  }

  if (tipo === "voluntario") {
    html = `
      <form>
        <h2>${t.titulo}</h2>
        <label for="nombre">${t.nombre}</label>
        <input type="text" id="nombre" required />

        <label for="correo">${t.correo}</label>
        <input type="email" id="correo" required />

        <label for="actividades">${t.actividades}</label>
        <textarea id="actividades" placeholder="${t.placeholder}" required></textarea>

        <button type="submit" onclick="event.preventDefault(); alert('${t.alerta}')">${t.boton}</button>
      </form>
    `;
  }

  contenedor.innerHTML = html;
}


// Variable para llevar el control del idioma actual
let idiomaActual = 'es';

// Objeto con traducciones
const traducciones = {
  es: {
    titulo: "Ayuda a Casa Patitas Felices 🐾",
    subtitulo: "Tu colaboración hace la diferencia: dona, apadrina o participa como voluntario.",
    volverInicio: "🔙 Volver al Inicio",
    botones: {
      dinero: "💳 Donación Monetaria",
      material: "🎁 Donar Materiales",
      voluntario: "🙋 Ser Voluntario"
    }
  },
  en: {
    titulo: "Support Happy Paws Home 🐾",
    subtitulo: "Your support makes a difference: donate, sponsor, or volunteer.",
    volverInicio: "🔙 Back to Home",
    botones: {
      dinero: "💳 Monetary Donation",
      material: "🎁 Donate Supplies",
      voluntario: "🙋 Become a Volunteer"
    }
  }
};

const traduccionesFormularios = {
  es: {
    dinero: {
      titulo: "Donación Monetaria",
      nombre: "Nombre",
      correo: "Correo electrónico",
      telefono: "Número de teléfono",
      tarjeta: "Número de tarjeta",
      cantidad: "Cantidad a donar (MXN)",
      comentario: "Mensaje (opcional)",
      placeholderNombre: "Tu nombre...",
      placeholderCorreo: "ejemplo@correo.com",
      placeholderTelefono: "Ej. 5512345678",
      placeholderTarjeta: "0000 0000 0000 0000",
      placeholderCantidad: "Ej. 500",
      placeholderComentario: "Gracias por apoyar...",
      boton: "Donar",
      alerta: "¡Gracias por tu generosidad! 🐾"
    },
    material: {
      titulo: "Donar Materiales",
      nombre: "Nombre",
      tipo: "Tipo de material",
      descripcion: "Cantidad / Descripción",
      opciones: ["Alimento", "Juguetes", "Cobijas", "Medicina", "Otro"],
      boton: "Enviar",
      alerta: "¡Gracias por tu donación solidaria! 🎁"
    },
    voluntario: {
      titulo: "Quiero ser voluntario/a",
      nombre: "Nombre completo",
      correo: "Correo electrónico",
      actividades: "¿En qué te gustaría ayudar?",
      placeholder: "Pasear perritos, limpieza, difusión en redes...",
      boton: "Enviar",
      alerta: "¡Gracias por querer formar parte del equipo! 🤝",

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
    }
  },
  en: {
    dinero: {
      titulo: "Monetary Donation",
      nombre: "Name",
      correo: "Email",
      telefono: "Phone Number",
      tarjeta: "Card Number",
      cantidad: "Donation Amount (MXN)",
      comentario: "Message (optional)",
      placeholderNombre: "Your name...",
      placeholderCorreo: "example@mail.com",
      placeholderTelefono: "e.g. 5512345678",
      placeholderTarjeta: "0000 0000 0000 0000",
      placeholderCantidad: "e.g. 500",
      placeholderComentario: "Thanks for your support...",
      boton: "Donate",
      alerta: "Thanks for your generosity! 🐾"
    },
    material: {
      titulo: "Donate Supplies",
      nombre: "Name",
      tipo: "Type of Material",
      descripcion: "Quantity / Description",
      opciones: ["Food", "Toys", "Blankets", "Medicine", "Other"],
      boton: "Submit",
      alerta: "Thanks for your donation! 🎁"
    },
    voluntario: {
      titulo: "I want to be a volunteer",
      nombre: "Full Name",
      correo: "Email",
      actividades: "How would you like to help?",
      placeholder: "Walk dogs, cleaning, social media outreach...",
      boton: "Submit",
      alerta: "Thanks for joining the team! 🤝",

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
    }
  }
};


// Función para alternar idioma
function toggleLanguage() {
  idiomaActual = (idiomaActual === 'es') ? 'en' : 'es';
  const t = traducciones[idiomaActual];

  // Traduce textos clave de la interfaz
  document.querySelector('.container2 h1').innerText = t.titulo;
  document.querySelector('.container2 p').innerText = t.subtitulo;
  document.querySelector('.volver-inicio button').innerText = t.volverInicio;

  const botones = document.querySelectorAll('.opciones button');
  if (botones.length === 3) {
    botones[0].innerText = t.botones.dinero;
    botones[1].innerText = t.botones.material;
    botones[2].innerText = t.botones.voluntario;
  }

  // Si tienes formularios ya desplegados, podrías recargar el contenido
  const tipoActivo = document.querySelector("#formulario-contenedor h2")?.innerText;
  if (tipoActivo) {
    if (tipoActivo.includes("Monetaria") || tipoActivo.includes("Monetary")) {
      mostrarFormulario("dinero");
    } else if (tipoActivo.includes("Material")) {
      mostrarFormulario("material");
    } else if (tipoActivo.includes("voluntario") || tipoActivo.includes("Volunteer")) {
      mostrarFormulario("voluntario");
    }
  }
}
