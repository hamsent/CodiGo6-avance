// EVENTOS, conjunto de instrucciones que se ejecutan cuando capturemos algun determminado evento o compartimiento en nuestro html, este dado por el usuario
// 1.addEventListener ->oyente

var divRojo=document.getElementById("rojo");
// addEventListener pedirá 1. el evento 2. la funcion a ejecutar


// 1ra. forma
// divRojo.addEventListener("click",function(){
//     alert("has dado click en Rojo");
// });

// 2da. forma

function alerta(){
    alert("este es otro Alert!!!")
}

// en este caso la funcion se llama sin parentesis, como si fuera una variable
// modelo de evewntos standar
divRojo.addEventListener("click",alerta);



var divBlanco=document.getElementById("blanco");
// hacemos referencia directamente al evento del elemento
// modelo de eventos básico
// hacemos referencia  y su evento directamente =>elemento.evento=funcion anónima
// 
divBlanco.onclick=function(){
    console.error("error de js");
}


var texto=function(){
    console.log("Has hecho click en el botón");
}

var texto2=function(){
    console.log("Has hecho click en el botón y a ejecutado otra función");
}

var btnDocumento=document.getElementById("boton");
btnDocumento.addEventListener("click",texto);
btnDocumento.addEventListener("click",texto2);
// removeEventListener removerá la ejecución de un evento, y su función => removeEventListener(evento,funcion)
btnDocumento.removeEventListener("click",texto);


var entrada=document.getElementById("input");
// entrada.addEventListener("focus",function(){
// console.log("Me has hecho focus");
// });

// el evento blur se activara cuando se quite el focus(marcador de escritura) de un elemento input 
// entrada.addEventListener("blur",function(){
//     console.log("Me estoy ejecutrando al salir");
// })


// el evento change se activara solo cuando el contenido del input cambie, mientras no cambie no pasará nada.
entrada.addEventListener("change",function(){
    console.log("He cambiado!!!!");
});