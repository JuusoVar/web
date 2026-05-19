console.log("Muuttujia ja tietotyyppejä-sivu avattu");

// muuttujat
let a = 3;
let b = 5;
let c = 7;
let d = 15;

// peruslaskut
function summa(a, b) {
    alert(Number(a) + Number(b));
}

function vahennys(a, b) {
    alert(Number(a) - Number(b));
}

function kerto(a, b) {
    alert(Number(a) * Number(b));
}

function jako(a, b) {
    alert(Number(a) / Number(b));
}

// laskin (input-kentät)
function laskin_summa() {
    let eka = document.getElementById("numero1").value;
    let toka = document.getElementById("numero2").value;
    summa(eka, toka);
}

function laskin_vahennys() {
    let eka = document.getElementById("numero1").value;
    let toka = document.getElementById("numero2").value;
    vahennys(eka, toka);
}

function laskin_kerto() {
    let eka = document.getElementById("numero1").value;
    let toka = document.getElementById("numero2").value;
    kerto(eka, toka);
}

function laskin_jako() {
    let eka = document.getElementById("numero1").value;
    let toka = document.getElementById("numero2").value;
    jako(eka, toka);
}

function naytaAika() {

    let nyt = new Date();

    let paivamaara = nyt.toLocaleDateString("fi-FI");
    let aika = nyt.toLocaleTimeString("fi-FI");
    let paivaJaAika = nyt.toLocaleString("fi-FI");

    let viikonpaiva = nyt.toLocaleDateString("fi-FI", {
        weekday: "long"
    });

    let kuukausi = nyt.toLocaleDateString("fi-FI", {
        month: "long"
    });

    document.getElementById("paivamaara").innerHTML = paivamaara;
    document.getElementById("aika").innerHTML = aika;
    document.getElementById("paivaJaAika").innerHTML = paivaJaAika;
    document.getElementById("viikonpaiva").innerHTML = viikonpaiva;
    document.getElementById("kuukausi").innerHTML = kuukausi;
}