document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault();

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const phoneNumber = event.target.phoneNumber.value;
    const email = event.target.email.value;
    const confirmEmail = event.target.confirmEmail.value;
    const policy = event.target.policy.checked;

    const msj = [];

    if (firstName.length < 2 || firstName.length > 15) {
        msj.push('Invalid First Name.');
        console.log('Invalid First Name.');
    }

    if (lastName.length < 2 || lastName.length > 15) {
        msj.push('Invalid Last Name.');
        console.log('Invalid Last Name.');
    }

    if (phoneNumber.length != 11) {
        msj.push('Invalid Phone Number.');
        console.log('Invalid Phone Number.');
    }

    if (!email.endsWith('.com') || !email.includes('@')) {
        msj.push('Invalid Email format.');
        console.log('Invalid Email format.');
    }

    if (confirmEmail != email) {
        msj.push(`Emails don't match.`);
        console.log(`Emails don't match.`);
    }

    if (policy == false) {
        msj.push('Privacy Policy not accepted.');
        console.log('Privacy Policy not accepted.');
    }

    if (msj != []) {
        let listaPadre = document.createElement('ul');
        document.getElementById('newsletter').appendChild(listaPadre);
        for (i = 0; i < msj.length; i++) {
            let lista = document.createElement('li');
            let texto = document.createTextNode(`${msj[i]}`);
            listaPadre.appendChild(lista);
            lista.appendChild(texto);
        }
    }

})