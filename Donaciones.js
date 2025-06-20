function mostrarFormulario(tipo) {
  const contenedor = document.getElementById("formulario-contenedor");
  contenedor.innerHTML = "";

  let html = "";

  if (tipo === "dinero") {
  html = `
    <form>
      <h2>Donación Monetaria</h2>

      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" placeholder="Tu nombre..." required />

      <label for="email">Correo electrónico</label>
      <input type="email" id="email" placeholder="ejemplo@correo.com" required />

      <label for="telefono">Número de teléfono</label>
      <input type="tel" id="telefono" placeholder="Ej. 5512345678" required pattern="[0-9]{10}" />

      <label for="tarjeta">Número de tarjeta</label>
      <input type="text" id="tarjeta" placeholder="0000 0000 0000 0000" required pattern="\\d{16}" />

      <label for="cantidad">Cantidad a donar (MXN)</label>
      <input type="number" id="cantidad" placeholder="Ej. 500" required />

      <label for="comentario">Mensaje (opcional)</label>
      <textarea id="comentario" placeholder="Gracias por apoyar..."></textarea>

      <button type="submit" onclick="event.preventDefault(); alert('¡Gracias por tu generosidad! 🐾')">Donar</button>
    </form>
  `;
}


  if (tipo === "material") {
    html = `
      <form>
        <h2>Donar Materiales</h2>
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" required />

        <label for="tipo">Tipo de material</label>
        <select id="tipo">
          <option value="alimento">Alimento</option>
          <option value="juguetes">Juguetes</option>
          <option value="cobijas">Cobijas</option>
          <option value="medicina">Medicina</option>
          <option value="otro">Otro</option>
        </select>

        <label for="cantidad">Cantidad / Descripción</label>
        <textarea id="cantidad" required></textarea>

        <button type="submit" onclick="event.preventDefault(); alert('¡Gracias por tu donación solidaria! 🎁')">Enviar</button>
      </form>
    `;
  }

  if (tipo === "voluntario") {
    html = `
      <form>
        <h2>Quiero ser voluntario/a</h2>
        <label for="nombre">Nombre completo</label>
        <input type="text" id="nombre" required />

        <label for="correo">Correo electrónico</label>
        <input type="email" id="correo" required />

        <label for="actividades">¿En qué te gustaría ayudar?</label>
        <textarea id="actividades" placeholder="Pasear perritos, limpieza, difusión en redes..." required></textarea>

        <button type="submit" onclick="event.preventDefault(); alert('¡Gracias por querer formar parte del equipo! 🤝')">Enviar</button>
      </form>
    `;
  }

  contenedor.innerHTML = html;
}
