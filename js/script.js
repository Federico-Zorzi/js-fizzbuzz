// * TRACCIA
/*
Ciao ragazzi,
Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

Buon lavoro e buon divertimento!
*/

// * PROCEDURA
// ! RACCOLTA DATI
const maxNumber = 100;
const txtMultiply3 = "Fizz";
const txtMultiply5 = "Buzz";
const txtMultiply3And5 = "FizzBuzz";

let msgOutput;

// ! ELABORAZIONE
// ciclo per stampare tutti i numeri da 1 a 100
for (let i = 1; i <= maxNumber; i++) {
  // SE il numero è divisibile sia per 3 e per 5
  if (i % 3 === 0 && i % 5 === 0) {
    // carico nella variabile msgOutput il valore "FizzBuzz"
    msgOutput = console.log(txtMultiply3And5);
  }
  // ALTRIMENTI SE il numero è divisibile per 3
  else if (i % 3 === 0) {
    // carico nella variabile msgOutput il valore "Fizz"
    msgOutput = console.log(txtMultiply3);
  }
  // ALTRIMENTI SE il numero è divisibile per 5
  else if (i % 5 === 0) {
    // carico nella variabile msgOutput il valore "Buzz"
    msgOutput = console.log(txtMultiply5);
  }
  // ALTRIMENTI stampo il normale numero di cui ha valore i
  else {
    // stampo i numeri da 1 a 100
    msgOutput = console.log(`${i}`);
  }
}

// ! OUTPUT
