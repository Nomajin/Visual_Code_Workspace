const inventario = [
    {nombre: "Manzanas Gala", precio: 2.50, stock: 25, oferta: true},
    {nombre: "Plátanos Canarias", precio: 1.80, stock: 0, oferta: false},
    {nombre: "Fresas del Bosque", precio: 4.20, stock: 12, oferta: true},
    {nombre: "Naranjas de Mesa", precio: 1.50, stock: 40, oferta: false},
    {nombre: "Mangos Importados", precio: 3.90, stock: 0, oferta: false}
];

/* Ejercicio 1 */
var ej1 = document.querySelector("tbody");
console.log(ej1);


for (let indice = 0; indice < inventario.length; indice++) {
    var tr1 = document.createElement("tr");
    var tdNombre = document.createElement("td");
    var tdPrecio = document.createElement("td");
    var tdStock = document.createElement("td");

    tdNombre.innerText = inventario[indice].nombre;
    tdPrecio.innerText = inventario[indice].precio + "€";
    tdStock.innerText = inventario[indice].stock;

    if (inventario[indice].stock === 0) {
        tdPrecio.innerText = "Agotado";
        tdStock.classList.add("outOfStock")
    }

    if (inventario[indice].stock === true) {
        tr1.classList.add("highlight");
    }

    tr1.append(tdNombre, tdPrecio, tdStock);
    ej1.append(tr1);

}





/* Ejercicio 2 

var tr1 = document.createElement("tr");
tr1.innerHTML = inventario [0];

var tr2 = document.createElement("tr");
tr2.innerHTML = inventario [1];

var tr3 = document.createElement("tr");
tr3.innerHTML = inventario [2];

var tr4 = document.createElement("tr");
tr4.innerHTML = inventario [3];

var tr5 = document.createElement("tr");
tr5.innerHTML = inventario [4];


 Ejercicio 3 

var tdNombre = document.createElement("td");
tdNombre.innerText = "Nombre"

var tdPrecio = document.createElement("td");
tdPrecio.innerText = "Precio"

var tdStock = document.createElement("td");
tdStock.innerText = "Stock"


 Ejercicio 4 

tdPrecio.innerText = inventario[0].precio + "€";

 Ejercicio 5 

var agotado = null;

for (let indice = 0; indice < inventario.length; indice++) {

    if (inventario[indice].stock === 0) {

        agotado = inventario[indice].stock = "Agotado";
        agotado.className = ".outOfStock";
    }

}


 Ejercicio 6 

var istrue = null;

for (let indice = 0; indice < inventario.length; indice++) {

    if (inventario[indice].oferta === true) {

        istrue = inventario[indice].oferta;
        istrue.className = ".highlight";
    }

}

 Ejercicio 7 */








