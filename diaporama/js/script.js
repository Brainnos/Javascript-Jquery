// Fonctions globales
let defilement;

window.onload = function () {

    // Get elements
    let image = document.getElementById("image");
    let flecheGauche = document.getElementById("fleche-gauche");
    let flecheDroite = document.getElementById("fleche-droite");
    let conteneur = document.getElementById("conteneur");
    let chargement = document.getElementById("chargement");


    // Event listener
    flecheDroite.addEventListener("click", suivante);
    flecheGauche.addEventListener("click", precedente);
    conteneur.addEventListener("mouseover", arret);
    conteneur.addEventListener("mouseout", reprise);

    // On masque le chargement après 3s
    chargement = setTimeout(masquerChargement, 3000);

    // Défilement diaporama
    defilement = setInterval(suivante, 2000);

} // Fermeture window.onload



let monTableau = ["image/img1.jpg", "image/image2.jpg", "image/metsky.jpg"];
let index = 0;

/**
 * Cette fonction permet d'avancer à l'image suivante en cliquant sur la flèche de droite
 */
function suivante() {
        if (index < monTableau.length - 1) {
            // Ici je ne suis pas à la dernière image
            index++;
        } else {
            // Ici je suis à la dernière image
            index = 0;
        }
        let image = document.getElementById("image");
        image.src = monTableau[index];
}

/**
 * Cette fonction permet d'avancer à l'image précédente en cliquant sur la flèche de gauche
 */
function precedente() {
    if (index > 0) {
        // Ici je ne suis pas au début
        index--;
    } else {
        // Ici on est au début
        index = monTableau.length - 1;
    }
    let image = document.getElementById("image");
    image.src = monTableau[index];
}


/**
 * Cette fonction arrête le défilement
 */
function arret() {
    clearInterval(defilement);
}

/**
 * Cette fonction redémarre le défilement
 */
function reprise() {
    defilement = setInterval(suivante, 2000);
}

function masquerChargement () {
    let chargement = document.getElementById("chargement");
    chargement.style.display = "none";
}