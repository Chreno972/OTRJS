// ! AFFICHER LA DATE ET L'HEURE (NE PAS TOUCHER)
function date_heure() {
    var jour = new Array('Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam');
    var mois = new Array('Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jui', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc');
    var today = new Date();
    var j = jour[today.getDay()];
    var dd = today.getDate();
    var mm = mois[today.getMonth()];
    var yyyy = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    function date_hour_conditions() {
        dd = (dd < 10) ? "0" + dd : dd;
        mm = (mm < 10) ? "0" + mm : mm;
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
    }
    date_hour_conditions();
    //format des informations du jour
    today = `${j} ${dd} ${mm} ${yyyy} <br> ${h}: ${m}: ${s}`;
    let concernedDiv = document.getElementById('horloge');
    concernedDiv.innerHTML = today;
    setTimeout("date_heure()", 1000);
}
date_heure();