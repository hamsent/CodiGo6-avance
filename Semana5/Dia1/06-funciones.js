
/* funcion NombreFuncion((VARIABLES,...masvariables){

}*/
//funcion que reciba x numeros e imprima la multiplicación


// function muchasVariables(...elementos){
//     // los elementos que estan demas los muestra en un arreglo o array y si no ponemos mas elementos mostrar un array vacio
//     console.log(elementos);

// }
// var multiplicacion;
// valor=1
// do {
//     var valor=muchasVariables(+prompt(console.log()));
//     valor=valor*multiplicacion;
//     console.log(multi);
// } while (valor!=0);

function multiplicar(...numeros) {
    var resultado = 1
    for (let i = 0; i < numeros.length; i++) {
        resultado = resultado * numeros[i];

    }
    return resultado;
}
var multiplicacion = multiplicar(2, 3, 6, 10, 20, 5);
console.log(multiplicacion);
console.log(multiplicacion * 1000);

console.log(`${multiplicar(9, 9, 10, 8, 7, 2, 3, 4)}`);
console.log(`${multiplicar(9 * 9)}`);

function alerta() {
    var texto = "Este es el mensaje de alerta Chile a perdido";
    return texto;
}
function alerta2() {
    return "Perú se salvo";

}
console.log(alerta());
console.log(alerta2());

// function menu(){
//     alert(`//Opciones
//             1.- Suma
//             2.- Resta
//             3.- Salir`);
// }
// function calculadora(operacion){
//     var a =+prompt("Ingrese el primer número");
//     var b =+prompt("Ingrese el segundo número");
//     if (operacion=="sumar"){
//         alert(`La suma de los valores será ${a+b}`);
//     }else {
//         alert(`La resta de los valores sera ${a-b}`);
//     }
// }
// do{
//     menu();
//     var opcion=+prompt("Elija opcion de las indicadas anteriormente:");

//     if (opcion==1){
//         calculadora("sumar");
//     }else if(opcion==2){
//         calculadora("restar");
//     }
// }while(opcion!==3);

function menu() {
    alert(`//ingrese color por cada banda:
            1.- Negro
            2.- Marron
            3.- Rojo 
            4.- Naranja
            5.- Amarillo
            6.- Verde
            7.- Azul
            8.- Violeta
            9.- Gris
            10.- Blanco`);
}
function colores(color) {

    switch (color) {
        case "negro":
            return 0;
        case "marron":
            return 1;
        case "rojo":
            return 2;
        case "naranja":
            return 3;
        case "amarillo":
            return 4;
        case "verde":
            return 5;
        case "azul":
            return 6;
        case "violeta":
            return 7;
        case "gris":
            return 8;
        case "blanco":
            return 9;
    }

}

var resistencia=[];

for (i = 0; i < 3; i++) {
    menu();
    var color = prompt(`Ingrese el color de la banda numero ${i+1}`);
    resistencia[i] = colores(color);
}
console.log(`La resistencia es ${resistencia}`);