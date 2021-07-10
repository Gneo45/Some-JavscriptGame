const validation = () => {
    const form = document.getElementById("form");
    const password = document.getElementById("password").value;
    const text = document.getElementById("text");
    var patternDangereux = ("^(?=.*[a-z])"); //doit contenir au moins 1 minuscule
    var patternMoyen = ("^(?=.*[a-z])(?=.*[A-Z])"); //doit contenir au moin 1minuscule et une maj
    var patternSecurise = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])") //doit contenir au moin 1minuscule et une maj et un chiffre
    var patternTresSecurise = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*+-])") //doit contenir au moin 1minuscule et une maj et un chiffreet une caractere special



    if (password.match(patternTresSecurise) && (patternSecurise) && (patternMoyen) && (patternDangereux)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Votre Mot de passe est Très Securisé.";
        text.style.color = "#00ff00";
    } else if (password.match(patternSecurise) && (patternMoyen) && (patternDangereux)) {
        form.classList.add("invalid");
        form.classList.remove("valid");
        text.innerHTML = "Votre Mot de passe est Securisé.";
        text.style.color = "#808000";

    } else if (password.match(patternMoyen) && (patternDangereux)) {
        form.classList.add("invalid");
        form.classList.remove("valid");
        text.innerHTML = "Votre Mot de passe est Moyen.";
        text.style.color = "#ff4901";
    } else if (password.match(patternDangereux)) {
        form.classList.add("invalid");
        form.classList.remove("valid");
        text.innerHTML = "Votre Mot de passe est dangereux.";
        text.style.color = "#fe1b00";

    }
    if (password == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";

    }

}

const passwordInput = document.getElementById('password');

passwordInput.addEventListener("keydown", function() {
    validation();
});