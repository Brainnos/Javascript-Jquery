// Variables globales
let hauteurDoc = $(document).height();
let hauteurFenetre = $(window).height();
let hauteurCourante = $(window).scrollTop();


$(function () {
    // Event Listener
    $(window).on("scroll", basDePage);
    $(window).on("scroll", progressBar);

    $("#cache").hide();
    document.getElementById("progressbar");

}) // Fin window.onload

/**
 * Fonction qui affiche un texte caché
 */
function basDePage() {
    /*if ($(document).height() == $(window).height() + $(window).scrollTop()) {
        console.log("Je suis en bas");
        $("#cache").show();
    }*/
    hauteurDoc = $(document).height();
    hauteurFenetre = $(window).height();
    hauteurCourante = $(window).scrollTop();

    if (hauteurCourante == 0) {
        console.log("Je suis en haut");
    } else {
        if (hauteurCourante == hauteurDoc - hauteurFenetre) {
            console.log("Je suis en bas");
            $("#cache").show();
        }
    }
}

function progressBar() {
   /* let height = hauteurDoc - hauteurFenetre;
    let scrolled = (hauteurCourante / height) * 100;
    document.getElementById("progressbar").style.width = scrolled + "%";*/

    let largeurFenetre = $(window).width();
    let largeurBarre = hauteurCourante / (hauteurDoc - hauteurFenetre) * largeurFenetre;
    $("#progressbar").css("width", largeurBarre);
}

