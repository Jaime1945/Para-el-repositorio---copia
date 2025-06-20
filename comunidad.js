const contenedor = document.getElementById("comentarios-contenedor");

// Comentarios iniciales simulados, cada uno con texto, imagen (opcional), cantidad de likes y respuestas
const comentariosIniciales = [
  {
    texto: "¡Adoptamos a Pericles hace un mes y ya es parte de la familia!",
    imagen: "Imagenes/pericles.jpg",
    likes: 2,
    respuestas: [
      { texto: "¡Qué alegría leer esto!", likes: 1 }
    ]
  },
  {
    texto: "¿Aún tienen disponibles a Luna? Me interesa mucho.",
    imagen: null,
    likes: 0,
    respuestas: []
  }
];

// Muestra cada comentario por defecto al cargar la página
comentariosIniciales.forEach(c => renderComentario(c.texto, c.imagen, c.likes, c.respuestas));

// Función para publicar un nuevo comentario desde el formulario
function publicarComentario() {
  const texto = document.getElementById("comentario").value.trim(); // extrae texto
  const archivo = document.getElementById("imagen").files[0]; // extrae imagen si hay

  if (!texto) {
    alert("Primero debes escribir un comentario.");
    return;
  }

  // Si hay imagen, se convierte en URL base64 con FileReader
  if (archivo) {
    const lector = new FileReader();
    lector.onload = function (e) {
      renderComentario(texto, e.target.result);
    };
    lector.readAsDataURL(archivo);
  } else {
    renderComentario(texto, null);
  }

  // Limpia el formulario
  document.getElementById("comentario").value = "";
  document.getElementById("imagen").value = "";
}

// Función principal para crear y mostrar un comentario
function renderComentario(texto, imagen = null, likes = 0, respuestas = []) {
  const div = document.createElement("div");
  div.className = "comentario";

  const contenido = document.createElement("p");
  contenido.textContent = texto;

  // Botón de like con contador dinámico
  const btnLike = document.createElement("button");
  btnLike.className = "like-btn";
  btnLike.innerHTML = `❤️ ${likes}`;
  btnLike.onclick = () => {
    likes++;
    btnLike.innerHTML = `❤️ ${likes}`;
  };

  // Botón para mostrar el formulario de respuesta
  const btnResponder = document.createElement("button");
  btnResponder.textContent = "Responder";
  btnResponder.className = "responder-btn";
  btnResponder.onclick = () => mostrarFormularioRespuesta(div);

  div.appendChild(contenido);

  // Si hay imagen, se inserta bajo el comentario
  if (imagen) {
    const img = document.createElement("img");
    img.src = imagen;
    img.alt = "Imagen del comentario";
    img.className = "comment-img";
    div.appendChild(img);
  }

  div.appendChild(btnLike);
  div.appendChild(btnResponder);

  // Renderiza todas las respuestas asociadas
  respuestas?.forEach(r => renderRespuesta(r.texto, div, r.likes));

  // Inserta el comentario al principio del contenedor
  contenedor.prepend(div);
}

// Muestra el formulario de respuesta debajo del comentario padre
function mostrarFormularioRespuesta(padre) {
  // Evita mostrar varios formularios al mismo tiempo
  if (padre.querySelector(".respuesta-form")) return;

  const form = document.createElement("div");
  form.className = "respuesta-form";

  const textarea = document.createElement("textarea");
  textarea.placeholder = "Escribe tu respuesta...";
  textarea.rows = 2;

  const btn = document.createElement("button");
  btn.textContent = "Publicar respuesta";
  btn.onclick = () => {
    const texto = textarea.value.trim();
    if (texto) {
      renderRespuesta(texto, padre);
      form.remove(); // borra el formulario tras publicar
    }
  };

  form.appendChild(textarea);
  form.appendChild(btn);
  padre.appendChild(form);
}

// Renderiza una respuesta dentro de su comentario padre
function renderRespuesta(texto, contenedor, likes = 0) {
  const div = document.createElement("div");
  div.className = "respuesta";
  div.textContent = texto;

  // Like para la respuesta
  const btnLike = document.createElement("button");
  btnLike.className = "like-btn";
  btnLike.innerHTML = `❤️ ${likes}`;
  btnLike.onclick = () => {
    likes++;
    btnLike.innerHTML = `❤️ ${likes}`;
  };

  div.appendChild(document.createElement("br"));
  div.appendChild(btnLike);

  contenedor.appendChild(div);
}
