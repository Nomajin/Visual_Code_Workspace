//Lee desde entrada dos variables numéricas A y B. 
// Con ellas se pide realizar un algoritmo 
// que intercambie los valores de ambas variables 
// y muestre cuánto valen al final las dos variables.


//https://www.npmjs.com/package/prompt-sync?activeTab=readme

let prompt = require('prompt-sync')();

let a = prompt ('Introduzca a:');

console.log (typeof b);

let b = prompt ('Introduzca b:');

console.log (typeof a);


//Patron de intercambio

bTemporal = b;
b = a;
a = bTemporal;

//Back ` tb sirve para declarar cadenas te permite interpolacion de cadenas
console.log (`a = ${a}, b = ${b}`);

//Sin interpolacion, uso concatenacion de cadenas +
//console.log ('a = ' + a +',b = ' + b);



