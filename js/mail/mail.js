/*
    Chiedo all'utente mail
    Fare controllo presenza mail inserita nella lista mail autorizzate
    Stampare esito controllo
    Se mail presente continua
    Se mail non presente ripetere operazione

*/


// Chiedo mail utente
const mailUtente = prompt ("Inserisci tuo indirizzo e-mail per accedere");

//Lista mail autorizzate
const mailAutorizzate = ["utente1@boolean.it", "utente2@boolean.it", "utente3@boolean.it", "utente4@boolean.it"]

//Controllo presenza mail utente nella lista mail autorizzate

let mailCompresa = false;

for (let i = 0; i < mailAutorizzate.length; i++) {

    if (mailUtente == mailAutorizzate[i]) {
            mailCompresa = true; 
    }
}

if (mailCompresa) {
    console.log("Mail accettata");
} else {
    console.log("mail non accettata");
}








    

    