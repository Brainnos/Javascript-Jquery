let countdown;
let dateAuj = Date.now();
let dateStage = new Date("2019-11-21T16:14:20");

let tempsRestant = dateStage.getTime() - dateAuj;
console.log(tempsRestant);

// Nombre de jours dans le temps restant
// 1 jour = 1000ms + 60s + 60min + 24h = 86 400 000ms
let jour = Math.floor(tempsRestant / (1000 * 60 * 60 * 24));

// On calcule le temps restant après retrait des jours avec le modulo
tempsRestant = tempsRestant % (1000 * 60 * 60 * 24);

let heure = Math.floor(tempsRestant / (1000 * 60 * 60));
tempsRestant %= (1000 * 60 * 60);

let minute = Math.floor(tempsRestant / (1000 * 60));
tempsRestant %= (1000 * 60);

let seconde = Math.floor(tempsRestant / (1000));
tempsRestant %= (1000)

$(function () {
    $("#jour").html(jour);
    $("#heure").html(heure);
    $("#minute").html(minute);
    $("#seconde").html(seconde);

    countdown = setInterval(decompte, 1000)

});

/**
 * Cette fonction décompte le temps
 */
function decompte() {
    if (seconde == 0) {
        seconde = 59;
        if (minute == 0) {
            minute = 59;
            if (heure == 0) {
                heure = 23;
                if (jour > 0) {
                    jour--;
                }
            } else {
                heure--;
            }
        } else {
            minute--;
        }
    } else {
        seconde--;
    } if (jour == 0 && heure == 0 && minute == 0 && seconde == 0) {
        clearInterval(countdown)
        $("p").html("Vous êtes foutu")
    }

    $("#seconde").html(seconde);
    $("#minute").html(minute);
    $("#heure").html(heure);
    $("#jour").html(jour);
}