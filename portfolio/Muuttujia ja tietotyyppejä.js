console.log("Muuttujia ja tietotyyppejä-sivu avattu");

let a = 3;
let b = 5;
let c = 7;
let d = 15;

// Peruslaskut

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

// Laskin

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

// Math-toiminnot

function laskin_abs() {

    let eka = document.getElementById("numero1").value;

    alert(Math.abs(Number(eka)));
}

function laskin_sqrt() {

    let eka = document.getElementById("numero1").value;

    alert(Math.sqrt(Number(eka)));
}

function laskin_pow() {

    let eka = document.getElementById("numero1").value;
    let toka = document.getElementById("numero2").value;

    alert(Math.pow(Number(eka), Number(toka)));
}

function laskin_max() {

    let eka = document.getElementById("numero1").value;
    let toka = document.getElementById("numero2").value;

    alert(Math.max(Number(eka), Number(toka)));
}

function laskin_min() {

    let eka = document.getElementById("numero1").value;
    let toka = document.getElementById("numero2").value;

    alert(Math.min(Number(eka), Number(toka)));
}

function laskin_round() {

    let eka = document.getElementById("numero1").value;

    alert(Math.round(Number(eka)));
}

// Päivämäärä ja aika

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

// Setit

let veijo = new Set([
    "luku",
    "poisto"
]);

let elvira = new Set([
    "luku",
    "kirjoitus",
    "muokkaus"
]);

let mehdi = new Set([
    "luku",
    "muokkaus",
    "poisto"
]);

let tuuli = new Set([
    "kirjoitus",
    "poisto"
]);

function tulostaKayttaja(nimi, setti) {

    let ul = document.querySelector(`#${nimi} ul`);

    ul.innerHTML = "";

    for (let oikeus of setti) {

        let li = document.createElement("li");

        li.innerHTML = oikeus;

        ul.appendChild(li);
    }
}

tulostaKayttaja("veijo", veijo);
tulostaKayttaja("elvira", elvira);
tulostaKayttaja("mehdi", mehdi);
tulostaKayttaja("tuuli", tuuli);

// Yhdistelmät

let veijotuuli = new Set([
    ...veijo,
    ...tuuli
]);

let mehdielvira = new Set(
    [...mehdi].filter(x => elvira.has(x))
);

let elviratuuli = new Set(
    [...elvira].filter(x => !tuuli.has(x))
    .concat(
        [...tuuli].filter(x => !elvira.has(x))
    )
);

function tulostaSetti(id, setti) {

    let ul = document.getElementById(id);

    ul.innerHTML = "";

    for (let arvo of setti) {

        let li = document.createElement("li");

        li.innerHTML = arvo;

        ul.appendChild(li);
    }
}

tulostaSetti("veijotuuli", veijotuuli);
tulostaSetti("mehdielvira", mehdielvira);
tulostaSetti("elviratuuli", elviratuuli);