const getPassword = () => {
    const patterns = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ§@#$%^&*()_+?><:{}[]";
    const passwordLength = 16;
    let password = "";
    let passwordInput = document.getElementById('password_input');

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * patterns.length);
        password += patterns.substring(randomNumber, randomNumber + 1);
    }
    console.log(password);

    passwordInput.value = password;

}