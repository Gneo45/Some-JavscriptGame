let randomNumber = Math.floor(Math.random() * 100) + 1; //prix random
let guesses = document.querySelector('.guesses'); //proposition
let lastResult = document.querySelector('.lastResult'); //historique resultats
let lowOrHi = document.querySelector('.lowOrHi'); // indice prix plus élevé ou plus bas
let guessSubmit = document.querySelector('.guessSubmit'); //valider la proposition 
let guessField = document.querySelector('.guessField'); // champ saisie proposition
let guessCount = 1; // nombre de proposition
let resetButton; // boutton reset
let son = document.querySelector('.son'); // son victoire

// tableau images
const images = [
    "../assets/1.jpg",
    "../assets/2.jpg",
    "../assets/3.jpg",
    "../assets/4.jpg",
    "../assets/5.jpg",
];
// fonction choix d'image random
const getRandomImage = () => {
    const randomNum = Math.floor(Math.random() * 5);
    const randomImgSrc = images[randomNum];

    document.querySelector("img").setAttribute("src", randomImgSrc);
};

getRandomImage();

const btn = document.querySelector("#boutton_roulette"); // bouton pour lancer le jeux
const containerBtn = document.querySelector("#container_btn") // container boutton 
btn.addEventListener("click", getRandomImage); // event click
const img = document.querySelector('img'); // image 
const form = document.querySelector('.form') // formulaire

//toggle jeux on/off
btn.addEventListener('click', () => {
    img.classList.toggle('show');
    form.classList.toggle('show');
    containerBtn.classList.add('hidde');
    lastResult.style.backgroundColor = 'transparent';
})



//fonctionnement du jeux
function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Propositions précédentes : ';
    }
    guesses.textContent += userGuess + ' ';
    //victoire
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Bravo, vous avez trouvé le bon prix !';
        lastResult.style.backgroundColor = 'green';
        son.play();
        lowOrHi.textContent = '';
        setGameOver();
        //defaite       
    } else if (guessCount === 10) {
        lastResult.textContent = '!!! PERDU !!!';
        setGameOver();
        //la partie continu - indice prix        
    } else {
        lastResult.textContent = 'Faux !';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = "C'est Plus !!!";
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "C'est Moins !!!";
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

// fonction game over
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    form.disabled = true;
    resetButton = document.createElement('button');
    resetButton.setAttribute("class", "resetbtn")
    resetButton.textContent = 'Nouvelle partie';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

// fonction reset game
function resetGame() {
    guessCount = 1;

    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    img.classList.toggle('show');
    form.classList.toggle('show');
    lastResult.style.backgroundColor = 'transparent';
    randomNumber = Math.floor(Math.random() * 100) + 1;
    containerBtn.classList.remove('hidde');

}