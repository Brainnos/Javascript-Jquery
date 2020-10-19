// Variable globales
let baliseA;

// On s'assure que le DOM est chargé
window.onload = function () {
    // Ici le DOM est chargé
    let balisesH1 = document.getElementsByTagName("h1");

    // On charge l'élément qui a l'id "titre"
    let titre = document.getElementById("titre");
    console.log(titre);

    // On change le titre de la page
    titre.innerHTML = "Nouveau titre de la page";

    // On change le bg du titre
    titre.style.background = "red";

    // On va chercher l'élément qui à l'id "conteneur"
    let conteneur = document.getElementById("conteneur");

    // On va créer la balise h2
    let baliseH2 = document.createElement("h2");

    // On ajoute le texte
    baliseH2.innerHTML = "Le \"texte\" qu'on veut";

    // On ajoute un id "sous-titre"
    baliseH2.id = "sous-titre";

    // On ajoute la balise H2 au conteneur
    conteneur.appendChild(baliseH2);

    console.log(baliseH2);

    // On ajoute un lien vers FB

    baliseA = document.createElement("a");
    baliseA.innerHTML = "Lien vers Facebook";
    baliseA.href = "https://www.facebook.com";
    baliseA.target = "_blank";
    conteneur.appendChild(baliseA);

    console.log(baliseA);

    // On supprime la balise H1
    titre.parentNode.removeChild(titre);


    // On va écouter l'évènement mouseenter sur la baliseA

    baliseA.addEventListener("mouseenter", debutSurvol = function () {
        console.log("La souris survole le lien");
    });

    // On va écouter l'évènement mouseleave sur la baliseA

    baliseA.addEventListener("mouseleave", finSurvol);

    // Quand on clique sur H2 on enlève les écouteurs de la baliseA

    baliseH2.addEventListener("click", enleveMouseEvent);



} // window.onload

/**
 * Cette fonction est excecutée au survol de la balise A
 */
function finSurvol() {
    console.log("La souris ne survole plus le lien");
}

function enleveMouseEvent() {
    baliseA.removeEventListener("mouseenter", debutSurvol);
    baliseA.removeEventListener("mouseleave", finSurvol);
    console.log("Fin d'écoute");
}
getelementb


// Les tableaux

// Déclarer un tableau
let monTableau = [123, "bonjour", true];
console.log(monTableau[1]);

// Ajouter la valeur "red" à la fin de mon tableau
monTableau.push("red");
console.log(monTableau);

// Ajouter la valeur "#f00" au début du tableau
monTableau.unshift("#f00");
console.log(monTableau);

// Retirer la dernière valeur du tableau
let valeur = monTableau.pop();
console.log(monTableau);
console.log(valeur);

// Retirer la première valeur du tableau
valeur = monTableau.shift()
console.log(monTableau);
console.log(valeur);

// Parcourir un tableau
for (let index = 0; index < monTableau.length; index++) {
    console.log(monTableau[index]);
}