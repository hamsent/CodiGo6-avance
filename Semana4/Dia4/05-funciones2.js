'use strict';
function funcionSinVariables(){

}
funcionSinVariables();
function saludo(nombre){
    console.log(`Hola ${nombre} como estas`);
}
saludo("Ronald");



function potencia(num1,num2){
    // num1 es la base y num2 sera el exponente
    let resultado=num1**num2;
    console.log(`El resultado será: ${resultado}`);
}
potencia(2,3);
potencia(10,10);
potencia(123,3);

function arreglo(array){
    console.log(array);
}
var otroArreglo=[2,4,6,3];
arreglo(otroArreglo);

// conocido como funcion anonima
var miFuncion= function(masTexto){
    console.log("Texto aleatorio" + masTexto);
}
miFuncion(" hola hola");

function muchasVariables(a,b, ...elementos){
    // los elementos que estan demas los muestra en un arreglo o array y si no ponemos mas elementos mostrar un array vacio
    console.log(elementos);
    console.log(a);
    console.log(b);
}
muchasVariables(1,5)
muchasVariables(1,3,2,4,6,567,456,34,55);

// crear una funcion para una tienda que me acepte, el monto a pagar, la cantidad recibida, y me imprima esas dos variables mas el vuelto;
// el recibo es por _______ el cliente pago con__________y su vuelto es____________
// NT.:en el caso de usar prompt, recuerde que se debe convertir a float con parsefloat(variable) para que no lo reconozca como texto





function operacion(monto,recibido){
        console.log(` el recibo es por ${monto} el cliente pago con ${recibido} y su vuelto es ${recibido-monto}`);
}
var monto=+prompt("ingrese el monto a pagar:");
var recibido=+prompt("ingrese la cantidad recibida:");
operacion(monto,recibido);

// realice el mismo ejercicio de la parte superior pero reciba en vez de un solo monto a pagar un arreglo con el costo desglozado, el resultado deberia ser identico

var monto=+prompt("ingrese el monto a pagar:");
var recibido=+prompt("ingrese la cantidad recibida:");
function operacion(monto,recibido){
        console.log(` el recibo es por ${monto} el cliente pago con ${recibido} y su vuelto es ${recibido-monto}`);
}
var monto=+prompt("ingrese el monto a pagar:");
var recibido=+prompt("ingrese la cantidad recibida:");
operacion(monto,recibido);