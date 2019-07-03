// Document
// DOM Document Object Model, es la representacon del documento

// 1. referenciar a un elemento del DOM mediante su ID o identificador

var miTitulo=document.getElementById("titulo");
console.log(miTitulo);

// 2. referenciar a un conjunto de elementos del DOM dado el nombre de la class que compartan

var miParrafos=document.getElementsByClassName("descripcion");
console.log(miParrafos);

// 3. Referenciar a un conjunto de elementos del DOM dado el nombre de su etiqueta

var misLis=document.getElementsByTagName("li");
console.log(misLis);

// 4. Referenciar a un conjunto de elementos del DOM dado un selector como en css

var misUls=document.querySelectorAll("section article ul");
console.log(misUls);

// 5. Referenciar a la primera coincidencia dado un selector como en CSS
// ojo> Solo devuelve un elemento, asi exista mas de uno que coincida con la selección

var unParrafo=document.querySelector("p");
console.log(unParrafo);
