console.log("Keskustelusivu avattu");

function send(e) {
    e.preventDefault();

    let form = e.target.form;

    let birthday = form.birthday.value;
    let email = form.email.value;
    let type = form.type.value;
    let usage = form.usage.value;
    let body = form.body.value;
    let marketing = form.marketing.checked;

    console.log("Syntymäpäivä:", birthday);
    console.log("Sähköposti:", email);
    console.log("Tyyppi:", type);
    console.log("Käyttötarkoitus:", usage);
    console.log("Viesti:", body);
    console.log("Markkinointilupa:", marketing);

    document.getElementById("kommenttinappi").close();
}