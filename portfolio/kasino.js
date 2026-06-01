function heitäNoppaa() {
    let luku = Math.floor(Math.random() * 6) + 1;

    document.getElementById("noppa").innerHTML =
        "Heitit numeron " + luku;
}

function arvoLotto() {

    let lottoNumerot = [];

    while (lottoNumerot.length < 7) {
        let numero = Math.floor(Math.random() * 40) + 1;

        if (!lottoNumerot.includes(numero)) {
            lottoNumerot.push(numero);
        }
    }

    lottoNumerot.sort((a, b) => a - b);

    let oikein = 0;
    let omatNumerot = document.querySelectorAll(".omaNumero");

    omatNumerot.forEach(kenttä => {
        let numero = Number(kenttä.value);

        if (lottoNumerot.includes(numero)) {
            oikein++;
        }
    });

    document.getElementById("lotto").innerHTML =
        "Arvotut numerot: " + lottoNumerot.join(", ") +
        "<br>Oikeita osumia: " + oikein;
}