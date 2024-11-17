/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Number = sono i numeri sia interi che decimali 
   String = è utilizzato per rappresentare il testo sono delimitati da "" o ''
   Boolean = rappresenta un valore che può essere vero o falso
   Null = rappresenta un valore vuoto
   Undefined = quando un valore non è definito 

*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto è una coppia di chiave-valore */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log(12 + 20)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12 

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Francesco"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(x - 4)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"
let name2 = "John"
console.log (name1!==name2)
let name3 = name2.toLowerCase 
let name4 = name1.toLowerCase
console.log (name4===name3)
