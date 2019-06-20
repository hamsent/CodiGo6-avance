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

// 4.2 “El náufrago satisfecho” ofrece hamburguesas sencillas (S), dobles (D) y triples (T), las cuales tienen un costo de $20, $25 y $28 respectivamente. La empresa acepta tarjetas de crédito con un cargo de 5 % sobre la compra. Suponiendo que los clientes adquieren N hamburguesas, las cuales pueden ser de diferente tipo, realice un algoritmo para determinar cuánto deben pagar. 

// var cant = +prompt("ingrese cantidad de hamburguesas:");
// var tipo = prompt("ingrese el tipo: sencillas (S), dobles (D) y triples (T)");

// switch (tipo) {
//     case "S":
//         console.log(`total a pagar ${cant * (20 * 1.05)}`);
//         break;
//     case "D":
//         console.log(`total a pagar ${cant * (25 * 1.05)}`);
//         break;
//     case "T":
//         console.log(`total a pagar ${cant * (28 * 1.05)}`);
//         break;
//     default:
//         console.log("ERROR!!!");
// }

// 4.3 Se requiere un algoritmo para determinar, de N cantidades, cuántas son cero, cuántas son menores a cero, y cuántas son mayores a cero. Realice el diagrama de flujo, el pseudocódigo y el diagrama N/S para representarlo, utilizando el ciclo apropiado.

// var igual=0;
// var menor=0;
// var mayor=0;
// var salir="i"
// do {
//     var numero=+prompt("Ingrese Numero, i presione la letra \"a\" para salir");
//     if (numero==0) {
//        igual++;
//     }else if(numero<0){
//         menor++;
//     }else if(numero>0){
//         mayor++;
//     }else{
//         salir="a"
//     }
// } while (salir=="i");
// console.log(` ${igual} numeros iguales a cero `);
// console.log(` ${menor} numeros menores a cero `);
// console.log(` ${mayor} numeros mayores a cero `);

// Se requiere un algoritmo para determinar cuánto ahorrará en pesos una persona diariamente, y en un año, si ahorra 3¢ el primero de enero, 9¢ el dos de enero, 27¢ el 3 de enero y así sucesivamente todo el año. Represente la solución mediante el diagrama de flujo, el pseudocódigo y el diagrama N/S, utilizando el ciclo apropiado.

// var ahorro=1;
// for (var dia = 1; dia <= 365; dia++) {
//     ahorro=ahorro*3; 
//     console.log(`El ahorro es: ${ahorro}`);
// }


// 4.9  Un cliente de un banco deposita equis cantidad de pesos cada mes en una cuenta de ahorros. La cuenta percibe un interés fijo durante un año de 10 % anual. Realice un algoritmo para determinar  el total de la inversión final de cada año en los próximos N años. Represente la solución mediante el diagrama de flujo, el pseudocódigo y diagrama N/S.



for (var mes=1; mes<=12; mes++){
var deposito=+prompt("Ingrese cantidad ");
console.log(`${deposito}`);
}
