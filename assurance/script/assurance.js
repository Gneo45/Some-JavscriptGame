let pointMalus;
let tarif;
let jeuneCon;
let junior = true;
const text = document.getElementById("text")

const calcul = () => {

    let age = document.getElementById('age_input').value;
    let permis = document.getElementById('permis_input').value;
    let accidents = document.getElementById('accidents_input').value;
    let assurance = document.getElementById('assurance_input').value;

    if (age < 25) {
        junior = true;
    } else {
        junior = false;
    }
    if (permis < "2") {
        jeuneCon = true;
    } else {
        jeuneCon = false;
    }
    pointMalus = accidents;
    if (junior == true) {
        pointMalus++;
    }
    if (jeuneCon == true) {
        pointMalus++;
    }
    if (assurance > 5) {
        pointMalus--;
    }
    if (pointMalus < 0) {
        tarif = "Votre tarif est bleue";
        text.style.color = "#0000FF";
    } else if (pointMalus == 0) {
        tarif = "Votre tarif est vert";
        text.style.color = "#03ac13";
    } else if (pointMalus == 1) {
        tarif = "Votre tarif est orange";
        text.style.color = "#ffa500";
    } else if (pointMalus == 2) {
        tarif = "Votre tarif est rouge";
        text.style.color = "#ff0000";
    } else if (pointMalus >= 3) {
        tarif = "Vous êtes refusé";
    }


    console.log("age " + age);
    console.log("permis " + permis);
    console.log("accidents" + accidents);
    console.log("assurance" + assurance);
    console.log("jeuneCon" + jeuneCon);
    console.log("junior" + junior);
    console.log("pointMalus" + pointMalus);
    console.log("tarrif" + tarif);
    text.innerHTML = tarif;


}