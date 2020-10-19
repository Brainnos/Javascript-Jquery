// Variables globales

let nom;
let email;
let confirmerEmail;
let motDePasse;
let confirmerMotDePasse;
let boutonMotDePasse;
let boutonSubmit;
let champ1, champ2, champ3;


window.onload = function () {

    // Get elements
    nom = document.getElementById("nom");
    email = document.getElementById("email");
    confirmerEmail = document.getElementById("confirmerEmail");
    motDePasse = document.getElementById("motDePasse");
    confirmerMotDePasse = document.getElementById("confirmerMotDePasse");
    boutonMotDePasse = document.getElementById("boutonMotDePasse");
    boutonSubmit = document.getElementById("boutonSubmit");


    // Event Listener
    nom.addEventListener("blur", validationChampLength);
    confirmerEmail.addEventListener("blur", validationEmail);
    confirmerMotDePasse.addEventListener("blur", validationMotDePasse);
    boutonMotDePasse.addEventListener("click", afficherMotDePasse);


    // On masque le bouton Valider

    boutonSubmit.style.display = "none";

} // Fonction window.onload
    
// LES FONCTIONS


/**
 * Une fonction qui permet de vérifier la longueur du champ nom
 */
function validationChampLength() {
    if (nom.value.length >= 5) {
        nom.style.borderColor = "green";
        champ1 = true;
    } else {
        nom.style.borderColor = "red";
        champ1 = false;
    }
    validationForm();
}

/**
 * Une fonction qui permet de vérifier si les deux champs emails sont identiques
 */
function validationEmail() {
    if (email.value == confirmerEmail.value) {
        email.style.borderColor = "green";
        confirmerEmail.style.borderColor = "green";
        champ2 = true;
    } else {
        email.style.borderColor = "red";
        confirmerEmail.style.borderColor = "red";
        champ2 = false;
    }
    validationForm();
}

/**
 * Une fonction qui permet de vérifier si les deux champs mot de passe sont identiques
 */
function validationMotDePasse() {
    if (motDePasse.value == confirmerMotDePasse.value) {
        motDePasse.style.borderColor = "green";
        confirmerMotDePasse.style.borderColor = "green";
        champ3 = true;
    } else {
        motDePasse.style.borderColor = "red";
        confirmerMotDePasse.style.borderColor = "red";
        champ3 = false;
    }
    validationForm();
}


/**
 * Cette fonction permet d'afficher/masquer le mot de passe
 */
function afficherMotDePasse() {
    /*if (motDePasse.type === "password" && confirmerMotDePasse.type === "password") {
        motDePasse.type = "text";
        confirmerMotDePasse.type = "text";
    } else {
        motDePasse.type = "password";
        confirmerMotDePasse.type = "password";
    }*/
    motDePasse.type = (motDePasse.type == "password") ? "text" : "password";
    confirmerMotDePasse.type = (confirmerMotDePasse.type == "password") ? "text" : "password";
}

/**
 * Cette fonction permet d'afficher le bouton de validation
 */
function validationForm() {
    if (champ1 && champ2 && champ3) {
            boutonSubmit.style.display = "initial";
        } else {
            boutonSubmit.style.display = "none";
        }
    }

