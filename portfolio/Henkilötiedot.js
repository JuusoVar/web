console.log("Henkilötiedot-sivu avattu");

let henkilot = [

    {
        name: "Merja Meikäläinen",
        age: 20,
        job: "Opiskelija",
        driversLicense: true
    },

    {
        name: "Teppo Teikäläinen",
        age: 25,
        job: "Sähköteknikko",
        driversLicense: true
    },

    {
        name: "Helena Heikäläinen",
        age: 30,
        job: "Ohjelmistosuunnittelija",
        driversLicense: false
    },

    {
        name: "Semir Sikäläinen",
        age: 18,
        job: "Opiskelija",
        driversLicense: true
    },

    {
        name: "Tomas Täkäläinen",
        age: 22,
        job: "Linja-autonkuljettaja",
        driversLicense: true
    }
];

let rivit = document.getElementById("rivit");

function luoRivit() {

    rivit.innerHTML = "";

    for (let henkilo of henkilot) {

        let rivi = document.createElement("tr");

        let nimi = document.createElement("td");
        nimi.innerHTML = henkilo.name;

        let ika = document.createElement("td");

        if (henkilo.age >= 18) {
            ika.innerHTML = henkilo.age + " 🍺";
        } else {
            ika.innerHTML = henkilo.age;
        }

        let ammatti = document.createElement("td");

        if (henkilo.job.toLowerCase() == "opiskelija") {
            ammatti.innerHTML = henkilo.job + " 🎓";
        } else {
            ammatti.innerHTML = henkilo.job;
        }

        let ajokortti = document.createElement("td");

        if (henkilo.driversLicense) {
            ajokortti.innerHTML = "Kyllä";
        } else {
            ajokortti.innerHTML = "Ei";
        }

        rivi.append(nimi);
        rivi.append(ika);
        rivi.append(ammatti);
        rivi.append(ajokortti);

        rivit.append(rivi);
    }
}

function lisaaHenkilo() {

    let nimi = document.getElementById("nimi").value;

    let ika = Number(document.getElementById("ika").value);

    let tyo = document.getElementById("tyo").value;

    let ajokortti = document.getElementById("ajokortti").checked;

    if (ika < 0) {

        alert("Iän pitää olla positiivinen luku");

    } else {

        let uusiHenkilo = {

            name: nimi,
            age: ika,
            job: tyo,
            driversLicense: ajokortti
        };

        henkilot.push(uusiHenkilo);

        luoRivit();
    }
}

luoRivit();