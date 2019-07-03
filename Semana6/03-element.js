var divCuadrado=document.getElementById("cuadrado");

// GET ancho de un elemento esto es un GET cuando pido 
// devuelve un valor nnumerico en pixeles
console.log(divCuadrado.clientWidth);

// setteando => el ancho es un SET cuando modifico
divCuadrado.style.width="250px";

// Para colocar los estilos
// cuando el estilo es de una sola palabra por ejemplo: width, height, margin, padding, etc.
// la asignacion será[elemento].style.[el mismo atributo];

// Cuando el estilo es de unapalabra compuesta
// Por ejemplo: background-color. border-radius, margin-top, etc
// la asignacion sera usando Camel Case
// ejemplo: backgroundColor, borderRadius,marginTop

// GET alto de un elemento
// devuelve un valor nnumerico en pixeles
console.log(divCuadrado.clientHeight);

// nos devuelve el ancho con bordes
console.log(divCuadrado.offsetWidth);

// nos devuelve el alto con bordes
console.log(divCuadrado.offsetHeight);

// nos devuelve el desplazamiento según la parte superior a partir del contenedor en el que se encuentra
console.log(divCuadrado.offsetTop);

// nos devolvera el desplazamiento del lado izquierdo apartir del contenedor en el que se encuentre
console.log(divCuadrado.offsetLeft);

// devuelve la posición del elemento con referencia al top
// hace referencia el ccontenido
// obtendrá el numero de pixeles del elemento que ha sido desplazado con la barra de desplazamiento vertical
console.log(divCuadrado.scrollTop);

// devolvera la posición del elemento con referencia al left
// obtendrá el numero de pixeles del elemento que ha sido desplazado con la barra de desplazamiento horizontal
console.log(divCuadrado.scrollLeft);


function deslizar(){
    var miCaja=document.getElementById("miDiv");
    miCaja.scrollTop=miCaja.scrollTop+20;
    miCaja.scrollLeft=miCaja.scrollLeft+10;
}
// => con la consola llamemos a esta funcion para ver lo que hace el scroll


// como asignar una funcion a un determinado evento
// que en este caso va a ser el evento click.

var boton=document.getElementById("botoncito");
// addeVentListener recibe 2 cosas 
// 1ra. va a rtecibir el evento que hay que escuchar
// 2da. una funcion, algo que ejecutar
boton.addEventListener("click",function(){
    // alert("Me has dado click")
    divCuadrado.style.height=`${divCuadrado.clientHeight+5}px`;
    divCuadrado.style.left=`${divCuadrado.offsetLeft+6}px`;
});

var btnCambiarClase=document.getElementById("cambiarClase");
btnCambiarClase.addEventListener("click",function(){
    // className => obtiene la clase del elemento
    // console.log(divCuadrado.className);
    
    if (divCuadrado.className=="redondo"){
        divCuadrado.className="cuadrado";
    }else{
        divCuadrado.className="redondo";
    }   
})


var multiclase=document.querySelector("#multiclase");
// classList nos va a dar un arreglo con todas las clases que tiene nuestro elemento

var btnAgregarClase=document.getElementById("agregarClase");
btnAgregarClase.addEventListener("click",function(){
    multiclase.classList.add("margen");
    multiclase.classList.remove("fondo");
})


