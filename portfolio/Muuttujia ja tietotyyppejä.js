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

let veijo = new Set(["luku", "poisto"]);
let elvira = new Set(["luku", "kirjoitus", "muokkaus"]);
let mehdi = new Set(["luku", "muokkaus", "poisto"]);
let tuuli = new Set(["kirjoitus", "poisto"]);

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

let veijotuuli = new Set([...veijo, ...tuuli]);

let mehdielvira = new Set([...mehdi].filter(x => elvira.has(x)));

let elviratuuli = new Set(
    [...elvira].filter(x => !tuuli.has(x))
    .concat([...tuuli].filter(x => !elvira.has(x)))
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