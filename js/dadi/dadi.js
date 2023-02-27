/* 
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/

//Genero numero random per l'utente
let numeroRandomUtente = Math.floor(Math.random() * 6) + 1;
console.log(numeroRandomUtente);

//Genero numero random per il computer
let numeroRandomComputer = Math.floor(Math.random() * 6) + 1;
console.log(numeroRandomComputer);

//Calcolo vincitore

if (numeroRandomUtente == numeroRandomComputer) {
    console.log("Pareggio!");
} else if (numeroRandomUtente > numeroRandomComputer) {
    console.log("Vince l'utente!");
} else if (numeroRandomUtente < numeroRandomComputer) {
    console.log("Vince il computer!");
}