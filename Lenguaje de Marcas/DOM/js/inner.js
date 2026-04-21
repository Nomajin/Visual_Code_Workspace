/* querySelectorAll()*/
var items = document.querySelectorAll("ul .item");
console.log(items);

/* innerText*/
console.log(items[1].innerText);

/* modificacion del susodicho contenido ("Item 2" -> "Segundo item") */

items[1].innerText = "Segundo Item";
console.log(items[1].innerText);

/* visualizacion del contenido HTML (innerHTML) del tercer elemento de la lista */
console.log(items[2].innerHTML);
/* modificacion del susodicho contenido ("Item 3" -> <strong>Tercero</strong>) */
items[2].innerHTML = "<strong>Tercero</strong>";
console.log(items[2].innerHTML);

