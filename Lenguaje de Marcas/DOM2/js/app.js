/* createElement() */
/* creacion de un elemento "div" */
var div = document.createElement("div");
/* y adiccion de contenido textual al susodicho elemento */
div.innerText = "Aprendiendo JavaScript";
/* creacion de un elemento "h1" */
var h1 = document.createElement("h1");
/* y adiccion de contenido textual al susodicho elemento */
h1.innerText = "Manipulacion del DOM";

/*replaceChild()*/
/* sustitucion del hijo del "div" por el h1 creado previamente */
var oldNode = div.childNodes[0];
div.replaceChild(h1, oldNode);

/*appendChild().*/
var p1 = document.createElement("p");
p1.innerText = "deberias prestar atencion en clase";
/* adicion del elemento "p" como hijo del "div" */
div.appendChild(p1);

/* cloneNode() */
/* clonacion del elemento "p" sin incluir su hijo */
var p2 = p1.cloneNode(false);
var text = document.createTextNode("Si quieres aprender a manipular el DOM de JavaScript");
p2.appendChild(text);

/* insertBefore() */
div.insertBefore(p2, p1);

/* adicion del elemento "div" como hijo del elemento "body" */
document.body.appendChild(div);

/* remove() y removeChild() */
p2.remove();
div.removeChild(p1);