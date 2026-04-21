var div = document.getElementsByTagName("div");
var h1 = document.getElementsByTagName("h1");

/* setAttribute() */
/* adiccion del atributo "id" al elemento "div" */
div.setAttribute("id", "contenedor");
/* y del atributo "style" al elemento "h1" */
h1.setAttribute("style", "color:blue;");

/********* getAttribute() **********/
/* visualizacion, por consola de los atributos previamente añadidos */
console.log(div.getAttribute("id"));
console.log(h1.getAttribute("style"));

/* removeAttribute() */
h1.removeAttribute("style");

/* className */
/* adiccion de la clase "seccion" y "contenido" al div utilizando, para ello, la propiedad className */
div.className = "seccion";
div.className+= " contenido";

/********* classList **********/
console.log(div.classList.value); /* <div class="seccion contenido"> */

/* classList.remove() */
div.classList.remove("contenido");
console.log(div.classList.value); /* <div class="seccion"> */

/* classList.add() */
/* adiccion de la clase "principal" al div utilizando, para ello, el método classList */
div.classList.add("principal");
console.log(div.classList.value); /* <div class="seccion principal"> */

/* classList.toggle() */
/* eliminacion/desactivacion de la clase "seccion" del elemento "div"  */
div.classList.toggle("section");
console.log(div.classList.value); 
/* adiccion/activacion de la clase "section" del elemento "div" */
div.classList.toggle("section"); /* <div class="principal section"> */
console.log(div.classList.value); 
