//selecteurs
const btnSelector = document.querySelectorAll('.item');
const selectionSelector = document.querySelector(".selection");
const hintsSelector = document.querySelector(".hints");
const resetbtn = document.createElement('button');
let resetButton; // boutton reset
let son = document.querySelector('.son'); // son victoire
const colors = ["orange", "yellow", "blue", "green"];
let final = randomFinal();
const selectedColors = [];
let guesses = 0;
let finished = false



//tirage de couleurs aleatoires
function randomFinal() {
    const finalFinal = [...new Array(3)].map(color => {
        const random = Math.floor(Math.random() * Math.floor(colors.length));
        return colors[random];
    });

    console.log(finalFinal);
    return finalFinal;
}

//selecteur de couleur
btnSelector.forEach(btn => {
    const color = btn.classList[1];
    btn.addEventListener("click", () => selectColor(color));
});


//couleur choisies
function selectColor(color) {
    console.log(color);

    //dom work
    const div = document.createElement('div');
    div.classList.add('selection-item');
    div.classList.add(color);

    selectionSelector.appendChild(div);
    selectedColors.push(color);

    if (selectedColors.length === 3) {
        guesses++;

        for (const selColor of selectedColors) {
            const historyDiv = document.createElement("div");
            historyDiv.classList.add("history-item");
            historyDiv.classList.add(selColor);
            hintsSelector.appendChild(historyDiv);
        }

        const hints = calculateHints(selectedColors);

        for (const hint of hints) {
            const el = document.createElement("div");
            if (hint === "full") {
                el.classList.add("full");
            } else if (hint === "half") {
                el.classList.add("half")
            } else {
                el.classList.add("empty")
            };


            hintsSelector.appendChild(el);

        }

        let br = document.createElement('br'); //saute une ligne apres avoir donner les hints
        hintsSelector.appendChild(br)

        selectedColors.length = 0;
        selectionSelector.innerHTML = "";
        if (hints.length === final.length && hints.every(hint => hint === "full")) {
            window.confirm("Bravo vous avez gagné!");
            setGameOver();




        } else if (guesses > 8) {
            window.confirm("Perdu :( !");
            setGameOver();



        }
    }
}
//generer les indices
function calculateHints(colors) {
    let hints = [];
    let duplicateCheck = [];

    colors.forEach((color, index) => {
        if (final[index] === color) {
            hints.push("full");
            duplicateCheck.push(color);
        }
    })

    colors.forEach((color, index) => {
        if (!duplicateCheck.includes(color) && final.includes(color)) {
            hints.push("half");
        }

    });

    colors.forEach((color, index) => {
        if (!duplicateCheck.includes(color) && !final.includes(color)) {
            hints.push("empty");


        }

    });

    return hints;
}

const container = document.querySelector("#container")

// fonction game over
function setGameOver() {
    container.classList.add('hidde');
    resetButton = document.createElement('button');
    resetButton.setAttribute("class", "resetbtn")
    resetButton.textContent = 'Nouvelle partie';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

// fonction reset game
function resetGame() {

    container.classList.remove('hidde');
    container.classList.add('show');
    clearBox();
    resetButton.parentNode.removeChild(resetButton);
    refreshPage();


}

function clearBox() {
    hintsSelector.innerHTML = "";
};

const refreshPage = () => {
    location.reload();
}