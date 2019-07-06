var principal=document.getElementById("principal");
var footer=document.getElementById("pie");

// Crear un elemento
// createElement("[nombre de la etiqueta]")
var nuevoDiv=document.createElement("div");
// colocar contenido dentro de un documento html
// [elemento].innerHTML
nuevoDiv.innerHTML="Este es un texto de prueba"

// Seteando o colocando un atributo en un elemento
// [el].setAtribute("[nombre_del_atributo]","[valor_del_atributo]"")
nuevoDiv.setAttribute("id","nuevoDiv");

// tambien se puede asignar atributos no validos por html
nuevoDiv.setAttribute("nombre","unaSeccion")
nuevoDiv.style.backgroundColor="rgba(200,200,200,0.5)"

// afregando un elemento dentro de otro elemento
// [elemento].appendChild([elemento]);
principal.appendChild(nuevoDiv);

// forma de crear un elemento dentro de otro mediante texto con el atributo innerHTML
footer.innerHTML="<h1>Titulo del pie</h1>";

// Forma de crear un elemento delntro de otro mediante la creacion de otro elemento
var miH1=document.createElement("h1");
miH1.innerHTML="Titulo del pie";
footer.appendChild(miH1);

// innerHtml modifica y appendChild crea o agrega
// prepend inserta un elemento hijo dentro del otro , como primer elemento hijo
// appendChild inserta uno debajo del otro