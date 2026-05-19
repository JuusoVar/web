console.log("Tehtävälista-sivu avattu");

let lista = [
    "Tehtävä 1",
    "Tehtävä 2"
];

function paivitaLista() {

    let ulElement = document.getElementById("lista");

    ulElement.innerHTML = "";

    for (let arvo of lista) {

        let liElement = document.createElement("li");

        liElement.innerHTML = arvo;

        ulElement.append(liElement);
    }
}

function lisaa() {

    let inputElement = document.getElementById("tehtava");

    let maaraElement = document.getElementById("maara");

    let tehtava = inputElement.value;

    let maara = maaraElement.value;

    for (let i = 0; i < maara; i++) {

        lista.push(tehtava);
    }

    paivitaLista();

    inputElement.value = "";

    maaraElement.value = "";
}

paivitaLista();