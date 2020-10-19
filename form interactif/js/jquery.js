// Variable globale

let champ1, champ2, champ3;


$(function () {

    // Event Listener
    $("#nom").on("change", validationNom);
    $("#confirmerEmail").on("change", validationEmail);
    $("#confirmerMotDePasse").on("change", validationMotDePasse);
    $("#boutonMotDePasse").on("click", afficherMotDePasse);

    // On masque le bouton valider
    $("#boutonSubmit").hide();


}); // Fin du onload

/**
 * Une fonction qui permet de vérifier la longueur du champ nom
 */
function validationNom() {
    if ($(this).val().length >= 5) {
        $(this).css("border-color", "green");
        champ1 = true;
    } else {
        $(this).css("border-color", "red");
        champ1 = false;
    } 
    validationForm();
}

/**
 * Une fonction qui permet de vérifier si les deux champs emails sont identiques
 */
function validationEmail() {
    if ($("#email").val() == $("#confirmerEmail").val()) {
        $("#email, #confirmerEmail").css("border-color", "green");
        champ2 = true;
    } else {
        $("#email, #confirmerEmail").css("border-color", "red");
        champ2 = false;
    } 
    validationForm();
}

/**
 * Une fonction qui permet de vérifier si les deux champs mot de passe sont identiques
 */
function validationMotDePasse() {
    if ($("#motDePasse").val() == $("#confirmerMotDePasse").val()) {
        $("#motDePasse, #confirmerMotDePasse").css("border-color", "green");
        champ3 = true;
    } else {
        $("#motDePasse, #confirmerMotDePasse").css("border-color", "red");
        champ3 = false;
    } 
    validationForm();
}

/**
 * Cette fonction permet d'afficher/masquer le mot de passe
 */
function afficherMotDePasse() {
    if ($("#motDePasse, #confirmerMotDePasse").attr("type") == "password") {
        $("#motDePasse").attr("type", "text");
        $("#confirmerMotDePasse").attr("type", "text");

    } else {
        $("#motDePasse").attr("type", "password");
        $("#confirmerMotDePasse").attr("type", "password");
    }
   // $("#motDePasse, #confirmerMotDePasse").attr("type", ($("#motDePasse, #confirmerMotDePasse").attr("type") == "password") ? "text" : "password");
}

/**
 * Cette fonction permet d'afficher le bouton de validation
 */
function validationForm() {
    if (champ1 && champ2 && champ3) {
        $("#boutonSubmit").show();
    } else {
        $("#boutonSubmit").hide();
    }
}