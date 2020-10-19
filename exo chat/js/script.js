// Variables globales
let champ1, champ2;


$(function () {

    // Event Listener
    $("#boutonvalider").on("click", validationChampTexte);
    $("#boutonvalider").on("click", validationListe)
    $("#boutonvalider").on("click", validationForm);
    $("#liste, #champtexte").on("change", bordureNormale);



}); // Fin du window.onload

/**
 * Cette fonction permet de valider si un élément de la liste est sélectionné
 */
function validationListe() {
    if ($("#liste").val() == 0) {
        $("#liste").css("border-color", "red");
    }
    if ($("#liste").val() != 0) {
        champ1 = true;
    }
}

/**
 * Cette fonction permet de valider la longueur du champ texte
 */
function validationChampTexte() {

    if ($("#champtexte").val().length <= 15) {
        $("#champtexte").css("border-color", "red");
    }
    if ($("#champtexte").val().length >= 15) {
        champ2 = true;
    }
}

/**
 * Cette fonction remet les bordures à la couleur initial lors d'un changement
 */
function bordureNormale() {
    if ($(this).css("border-color", "red")) {
        $(this).css("border-color", "#ced4da");
    }
}

/**
 * Cette fonction fait disparaitre le form quand on valide celui ci
 */
function validationForm() {
    if (champ1 == true && champ2 == true) {
        $("#formulaire").replaceWith($(".toast"))
        $(".toast").toast("show");
    }
}
