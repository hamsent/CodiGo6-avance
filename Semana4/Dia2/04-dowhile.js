// var contador=0;
// do {
//     console.log(`saludo ${contador}`);
//     contador++;
// } while (contador<5);

// algoritmo para pedir al usuario una opcion
// si el usuario ingresa el numero:
// 1=> el programa debe mostrar la palabra "LUNES"
// 2=>

// do {
//     var opcion = +prompt("ingrese opcion del 1 al 7 o 10 para finalizar:");
//     switch (opcion) {
//         case 1:
//             console.log("Lunes");
//             break;
//         case 2:
//             console.log("Martes");
//             break;
//         case 3:
//             console.log("Miercoles");
//             break;
//         case 4:
//             console.log("Jueves");
//             break;
//         case 5:
//             console.log("Viernes");
//             break;
//         case 6:
//             console.log("Sabado");
//             break;
//         case 7:
//             console.log("Domingo");
//             break;
//         case 10:

//             console.log("Fin del programa");
//             break;

//         default:
//             console.log("ERROR!!!");
//     }
// } while (opcion!=10);


var cant = +prompt("ingrese cantidad de hamburguesas:");
var tipo = prompt("ingrese el tipo: sencillas (S), dobles (D) y triples (T)");

switch (tipo) {
    case "S":
        console.log(`total a pagar ${cant * (20 * 1.05)}`);
        break;
    case "D":
        console.log(`total a pagar ${cant * (25 * 1.05)}`);
        break;
    case "T":
        console.log(`total a pagar ${cant * (28 * 1.05)}`);
        break;
    default:
        console.log("ERROR!!!");
}