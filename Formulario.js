ddocument.getElementById("adoptionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let fields = ["name", "age", "email", "phone", "address", "occupation", "petType", "homeType", "availability", "reason"];
    let valid = true;

    fields.forEach(field => {
        let value = document.getElementById(field).value.trim();
        if (!value) {
            valid = false;
        }
    });

    let agree = document.getElementById("agree").checked;

    if (!valid || !agree) {
        document.getElementById("message").textContent = "Por favor, complete todos los campos correctamente.";
        document.getElementById("message").style.color = "red";
        return;
    }

    document.getElementById("message").textContent = "¡Solicitud enviada con éxito!";
    document.getElementById("message").style.color = "green";

    // Simulación de envío de datos a un servidor
});
