console.log("Muuttujia ja tietotyyppejä-sivu avattu");

let a = 3;
let b = 5;
let c = 7;
let d = 15;

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