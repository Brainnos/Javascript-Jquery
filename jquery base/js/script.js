// On attend que le document soit chargé
$(function(){
    // Equivalent window.onload
    //let baliseH1 = $("h1");

    console.log($("h1").html());

    $("h1").html("Nouveau titre"); // On change le titre
    $("h1").css("color", "blue"); // On met le titre en bleu

    $("#conteneur").append("<h2>Nouvelle partie</h2>") // On ajoute un h2 au conteneur


    // On change la couleur de H1 en rouge quand on survole la div
    /*
    $("#conteneur").mouseover(function() {
        $("h1").css("color", "red");
    });

    $("#conteneur").mouseout(function() {
        $("h1").css("color", "blue");
    });*/

    // $("#conteneur").hover(titreRouge, titreBleu); // Méthode hover

    /*
    $("#conteneur").mouseenter(titreRouge);
    $("#conteneur").mouseleave(titreBleu);*/ // Méthode mouse enter et leave avec fonction séparé

    $("#conteneur").on("mouseenter", titreRouge);
    $("#conteneur").on("mouseleave", titreBleu);



}); // Fin du onload


function titreRouge () {
    $("h1").css("color", "red");
}

function titreBleu () {
    $("h1").css("color", "blue");
}