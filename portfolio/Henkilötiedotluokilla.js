class Person {

    constructor(name, age, job, driversLicense) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.driversLicense = driversLicense;
    }

    isUnderage() {
        return this.age < 18;
    }

    isStudent() {
        return this.job.toLowerCase() === "opiskelija" ||
               this.job.toLowerCase() === "student";
    }
}

let persons = [

    new Person("Matti Meikäläinen", 17, "Opiskelija", false),
    new Person("Maija Meikäläinen", 25, "Opettaja", true),
    new Person("Pekka Virtanen", 19, "Opiskelija", true),
    new Person("Liisa Korhonen", 42, "Sairaanhoitaja", true),
    new Person("Kalle Koskinen", 15, "Opettaja", false)

];

let taulukko = document.getElementById("henkiloTaulukko");

persons.forEach(person => {

    let ika = person.age;

    if (!person.isUnderage()) {
        ika += " 🍺";
    }

    let tyo = person.job;

    if (person.isStudent()) {
        tyo += " 🎓";
    }

    taulukko.innerHTML += `
        <tr>
            <td>${person.name}</td>
            <td>${ika}</td>
            <td>${tyo}</td>
            <td>${person.driversLicense}</td>
        </tr>
    `;
});