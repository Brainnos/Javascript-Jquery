// Fonctions Globales
let defilement;

$(function () {

    // Event listener
    $("#fleche-droite").on("click", suivante);
    $("#fleche-gauche").on("click", precedente);
    $("#conteneur").on("mouseover", arret);
    $("#conteneur").on("mouseout", reprise);
    $("#rond").on("click", mouvement)

    // On masque le chargement après 3s
    setTimeout(masquerChargement, 3000);

    // Défilement diaporama
    defilement = setInterval(suivante, 3000);

}) // Fin du window.onload


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
    $("#image").fadeTo(1500, 0.01, function () {
        $("#image").attr("src", monTableau[index]);
    }).fadeTo(1500, 1);
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
    $("#image").fadeTo(1500, 0.01, function () {
        $("#image").attr("src", monTableau[index]);
    }).fadeTo(1500, 1);
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
    defilement = setInterval(suivante, 4000);
}

/**
 * Cette fonction permet de masquer l'écran de chargement
 */
function masquerChargement() {
    $("#chargement").hide();
}


function mouvement() {
    /*  $("#rond").animate({
          right: 0
      }, 3000).animate({
          top: "+=50%"
      }, 3000).animate({
          left: 0,
          top: "-=50%"
      }, 3000, function () {
          $("#fini").fadeIn()
      })*/

    $(this).animate({
        right: 0
    }, 2000, function () {
        $(this).animate({
            top: "+=50%"
        }, 2000, function () {
            $(this).animate({
                top: "-=50%",
                left: 0
            }, 2000, function () {
                $("#fini").fadeIn()
            });
        });
    });
}