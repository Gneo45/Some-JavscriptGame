const validation = () => {
    const form = document.getElementById("form");
    const email = document.getElementById("email").value;
    const text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{1,2}$/;


    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Votre adresse Email est Valide.";
        text.style.color = "#00ff00";

    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "Entrez une adresse Email valide.";
        text.style.color = "#ff0000";


    }
    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";

    }

}

const emailInput = document.getElementById('email');

emailInput.addEventListener("keydown", function() {
    validation();
});