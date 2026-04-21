/* getElementsByID */
var primerItem = document.getElementById("primero");
console.log(primerItem);

/* getElementsByClassName() */
var items = document.getElementsByClassName("item");
console.log(items);

/* getElementsByTagName()*/
var items = document.getElementsByTagName("li");
console.log(items);

/* querySelector()
devuelve el primer nodo que coincida con el selector*/
var primerItem = document.querySelector("ul .item");
console.log(primerItem);

/* querySelectorAll()*/
var items = document.querySelectorAll("ul .item");
console.log(items);
