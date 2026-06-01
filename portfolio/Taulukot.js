var numerot = [8, 3, 55, 420, 1, -5, 69, -999, 0, 321];
var sanat = ["skibidi", "rizz", "gyat", "sigma", "sus", "cap", "yeet", "lit", "simp", "cringe"];

function poimiElementti() {
    let indeksi = Number(document.getElementById("poimiNumero").value);

    document.getElementById("poimiTulos").innerHTML = sanat[indeksi - 1];
}

function loydäTaulukonIndeksi() {
    let sana = document.getElementById("etsiSana").value;

    document.getElementById("indeksiTulos").innerHTML = sanat.indexOf(sana);
}

function leikkaaTaulukko() {
    let alku = Number(document.getElementById("alkuIndeksi").value);
    let loppu = Number(document.getElementById("loppuIndeksi").value);

    let leikatut = sanat.slice(alku, loppu);

    let lista = document.getElementById("leikkausTulos");
    lista.innerHTML = "";

    leikatut.forEach(sana => {
        let li = document.createElement("li");
        li.innerHTML = sana;
        lista.appendChild(li);
    });
}

function tulostaLista(lista, tulosId) {
    let tulos = document.getElementById(tulosId);
    tulos.innerHTML = "";

    lista.forEach(alkio => {
        let li = document.createElement("li");
        li.innerHTML = alkio;
        tulos.appendChild(li);
    });
}

function tulostaSanat() {
    tulostaLista(sanat, "jarjestysTulos");
}

function jarjestaSanat() {
    sanat.sort();
}

function kaannaSanat() {
    sanat.reverse();
}

function tulostaNumerot() {
    tulostaLista(numerot, "jarjestysTulos");
}

function jarjestaNumerot() {
    numerot.sort((a, b) => a - b);
}

function kaannaNumerot() {
    numerot.reverse();
}

function tulostaSuodatusNumerot() {
    tulostaLista(numerot, "suodatusTulos");
}

function valitsePienemmat() {
    let raja = Number(document.getElementById("suodatusNumero").value);

    numerot = numerot.filter(numero => numero < raja);
}

function valitseSuuremmat() {
    let raja = Number(document.getElementById("suodatusNumero").value);

    numerot = numerot.filter(numero => numero > raja);
}