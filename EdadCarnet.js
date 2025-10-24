var prompt = require('prompt-sync')();

let edad = Number(prompt ('Introduzca la edad:'))

console.log(typeof(edad));
console.log(edad);


if (edad >= 18 ) {


//let define la variable como ambito bloque, es decir
//carnet solo va a vivir en memoria mienstras se ejecuta
//dentro de la condicion if
   let carnet = prompt ('Tienes Carnet?(S/N)');

    if ( carnet === 'S' ) {

        console.log('Puedes Conducir');
    } else {

        console.log('No puedes conducir');
    }

} else {
    console.log('No puedes conducir');
}
