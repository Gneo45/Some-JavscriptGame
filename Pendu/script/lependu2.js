//tableau des mots 

const ListeDeMot = [
    "hypercomplexes",
    "hydrographique",
    "hydrodynamique",
    "cyclothymiques",
    "cryptologiques",
    "impressionnismes",
    "photoelectriques",
    "postsynchroniser",
    "transfigurations",
    "naturalisassions"

]



let reponse = '';
let erreursMax = 10;
let erreurs = 0;
let devine = [];
let etatMot = null; //
let resetButton;
let son = document.querySelector('.son');

//foncion choix du mot random
const choixCategorie = () => {
    reponse = ListeDeMot[Math.floor(Math.random() * ListeDeMot.length)];
}

//foncion generer boutton alphabet
const genererAlphabet = () => {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(lettre =>
        `
        <button
            class="btnalphabet"
            id= '` + lettre + `'
            onClick="proposition('` + lettre + `')"
            >
                ` + lettre + `
            </button>
        
        `).join('');

    document.getElementById('clavier').innerHTML = buttonsHTML;
}


//gameplay
//foncion desactiver boutton alphabet choisie
const proposition = (lettreChoisie) => {
    devine.indexOf(lettreChoisie) === -1 ? devine.push(lettreChoisie) : null;
    document.getElementById(lettreChoisie).setAttribute('disabled', true);



    if (reponse.indexOf(lettreChoisie) >= 0) {
        motDeviner();
        checkIfGameWon();
    } else if (reponse.indexOf(lettreChoisie) === -1) {
        erreurs++;
        updateErreurs();
        checkIfGameLost();
        updateImgPendu();
    }
}

//fonction pendu img
const updateImgPendu = () => {
        document.getElementById("imgPendu").src = '../image/' + erreurs + '.png';
    }
    //fonction etat avancement du jeux
const checkIfGameWon = () => {
    if (etatMot === reponse) {
        document.getElementById("clavier").innerHTML = 'Vous êtes sauvé !!';
        son.play();
        resetButton = document.createElement('button');
        resetButton.setAttribute("class", "resetbtn")
        resetButton.textContent = 'Nouvelle partie';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
    }
}

const checkIfGameLost = () => {
    if (erreurs === erreursMax) {
        document.getElementById("motADeviner").innerHTML = 'La réponse était: ' + reponse;
        document.getElementById("clavier").innerHTML = 'Vous êtes Mort !!';
        resetButton = document.createElement('button');
        resetButton.setAttribute("class", "resetbtn")
        resetButton.textContent = 'Recommencer';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
    }
}

//
const motDeviner = () => {
    etatMot = reponse.split('').map(lettre => (devine.indexOf(lettre) >= 0 ? lettre : " _ ")).join('');

    document.getElementById('motADeviner').innerHTML = etatMot;
}

const updateErreurs = () => {
    document.getElementById('erreurs').innerHTML = erreurs;
}

const resetGame = () => {
    erreurs = 0;
    devine = [];
    document.getElementById('imgPendu').src = '../image/0.png';

    choixCategorie();
    motDeviner();
    updateErreurs();
    genererAlphabet();
    resetButton.parentNode.removeChild(resetButton)

}

document.getElementById('erreursMax').innerHTML = erreursMax;

choixCategorie();
genererAlphabet();
motDeviner();
updateErreurs();
resetGame();
proposition();