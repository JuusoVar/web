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
        ika.innerHTML = henkilo.age;

        let ammatti = document.createElement("td");
        ammatti.innerHTML = henkilo.job;

        let ajokortti = document.createElement("td");
        ajokortti.innerHTML = henkilo.driversLicense;

        rivi.append(nimi);
        rivi.append(ika);
        rivi.append(ammatti);
        rivi.append(ajokortti);

        rivit.append(rivi);
    }
}

luoRivit();