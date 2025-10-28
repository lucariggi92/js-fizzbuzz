/*Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/


//ESERCIZIO////////////////////////////////////////////////////////////////////////////
/* stampo numeri da 1 a 100 utilizzando un ciclo for */

/*for( i=1; i<= 100; i=i+1){

    console.log (i)
}*/

//ora devo apportare una modifica. i Multipli di 3 devono essere sostituiti con la scritta Fizz e multipli di 5 con Buzz
//come individuo i multipli di 3 e 5? divido il valore i per 3 con l'operatore % in modo tale da avere resto = 0, lo stesso col 5.

//se le divisioni = i % 3 == 0 e se i % 5 === 0 allora console= "FizzBuzz" (l'ho messa come condizione iniziale perchè non fiunzionava messa in fondo)
//se la divisione =i % 3 === 0 allora console === "Fizz"
//se la divisione = i % 5 == 0 allora console === "Buzz"

//else (se nessuno di questi casi è verso) lascia il numero i console.log (i)

for( i=1; i<=100; i=i+1){


if(i % 3===0 && i % 5===0)
  {
    console.log ("FizzBuzz")
  }
  else if(i % 3===0)
  {

     console.log ("Fizz")
  }
  
   else if(i % 5===0)
  {

     console.log ("Buzz")
  }

 
else{
    console.log (i)
  }
}
  



    


 