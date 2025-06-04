document.getElementById("adoptionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let petType = document.getElementById("petType").value;
    let experience = document.getElementById("experience").value.trim();
    let agree = document.getElementById("agree").checked;

    if (!name || !email || !phone || !petType || !experience || !agree) {
        document.getElementById("message").textContent = "Por favor, complete todos los campos.";
        document.getElementById("message").style.color = "red";
        return;
    }

    document.getElementById("message").textContent = "¡Solicitud enviada con éxito!";
    document.getElementById("message").style.color = "green";

    // Aquí podrías enviar los datos a un servidor
});
