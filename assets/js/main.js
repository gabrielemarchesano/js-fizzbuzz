/* 
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

TOOLS:
- let/const
- if/else-if/else
- for
- operatori di relazione e logici
*/

// 1. Scrivi un un programma che stampi i numeri da 1 a 100
  // 1.1 Creo un ciclo for che parta da 1 e arrivi fino a 100 
  for(let i = 1; i <= 100; i++){
    // 1.2 Controllo se il numero è un multiplo sia di 3 sia di 5
    if(i % 3 === 0 && i % 5 === 0){
      // 1.2.1 Se lo è, stampo la scritta FizzBuzz
      console.log("FizzBuzz");      
    } else if(i % 3 === 0){ // 1.3 Altrimenti controllo se il numero è divisibile per 3
      // 1.3.1 Se lo è, stampo Fizz
      console.log("Fizz");
    }
  }