/* Exercice 1*/

5 >= 1
// prediction : true
// outputs : true
0 === 1
// prediction : false
// outputs : false
4 <= 1
// prediction : false
// outputs : false
1 != 1
// prediction : false
// outputs : false
"A" > "B"
// prediction : false
// outputs : false
"B" < "C"
// prediction : true
// outputs : true
"a" > "A"
// prediction : true
// outputs : true
"b" < "A"
// prediction : false
// outputs : false
true === false
// prediction : false
// outputs : false
true != true
// prediction : false
// outputs : false

// Exercice 2

let nbrString = prompt("Saisissez une suite de chiffre séparé par des virgule :");
let nbrTable = nbrString.split(",");
let sum = 0;

for (let i = 0; i < nbrTable.length; i++) {
    sum += parseInt(nbrTable[i]);
}
console.log(sum);

// Exercice 3

let phrasal = prompt("Entrer ue phrase contenant le mot Nemo :");
let index = phrasal.indexOf("Nemo");
console.log((index != -1) ? "found" : "not found Nemo");

// Exercice 4
const normalResult = "boum";
let nbrUser = prompt("Saisissez un nombre :");

if (nbrUser < 2) {
    console.log(normalResult);
} else if(nbrUser > 2 ) {
    if(nbrUser % 2 == 0 && nbrUser % 5 == 0) {
        console.log((normalResult+"!").toUpperCase());
    }
    else if(nbrUser % 5 == 0) {
        console.log(normalResult.toUpperCase());
    }
    else if(nbrUser % 2 == 0 ) {
        console.log(normalResult + "!");
    }
    else {
        console.log(" la chaîne doit comporter n nombre de 'o' (n étant le nombre donné)")
    }
}


