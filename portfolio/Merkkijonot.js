function poimiKirjain() {
    let teksti = document.getElementById("teksti1").value;
    let indeksi = Number(document.getElementById("indeksi1").value);

    document.getElementById("tulos1").innerHTML = teksti[indeksi - 1];
}

function loydäIndeksi() {
    let teksti = document.getElementById("teksti2").value;
    let haku = document.getElementById("haku2").value;

    document.getElementById("tulos2").innerHTML = teksti.indexOf(haku);
}

function leikkaaMerkkijono() {
    let teksti = document.getElementById("teksti3").value;
    let alku = Number(document.getElementById("alku3").value);
    let loppu = Number(document.getElementById("loppu3").value);

    document.getElementById("tulos3").innerHTML = teksti.slice(alku, loppu);
}

function etsiJaKorvaa() {
    let teksti = document.getElementById("teksti4").value;
    let etsi = document.getElementById("etsi4").value;
    let korvaa = document.getElementById("korvaa4").value;

    document.getElementById("tulos4").innerHTML = teksti.replaceAll(etsi, korvaa);
}

function poikkiJaPinoon() {
    let teksti = document.getElementById("teksti5").value;
    let jakaja = document.getElementById("jakaja5").value;
    let osat = teksti.split(jakaja);

    let lista = document.getElementById("tulos5");
    lista.innerHTML = "";

    osat.forEach(osa => {
        let li = document.createElement("li");
        li.innerHTML = osa;
        lista.appendChild(li);
    });
}