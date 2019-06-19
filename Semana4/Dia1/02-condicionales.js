var sueldo = 3400.00;
if (sueldo > 3500) {
    console.log("Se retiene el 13%");
    console.log(`Total a pagar ${sueldo - sueldo * 0.13} soles.`);
} else {
    console.log(`No se retiene el 13%, total a pagar ${sueldo} soles.`)
}
console.log("Fin del programa")

// programa para que el usuario ingrese horas trabajadas, sueldo por hora, el total a pagar sera las 40 primeras horas multiplicado por el sueldo por hora, el exceso a las 40 horas, se paga el doble del sueldo por hora.
// para convertir en entero lo ingresado por prompt se usa parseint y para desimales parsefloat pero tambien podemos poner defrente 

var horasTrabajadas = +prompt('Ingrese Horas Trabajadas');

var sueldoHora = +prompt('ingrese sueldo por hora');
// var horasTrabajadas=45
// var sueldoHora=10
if (horasTrabajadas < 41) {
    console.log(`Sueldo a pagar ${horasTrabajadas * sueldoHora}`);
} else {  => a menor que b
// a <= b => a menor o igual que b
// a >= b => a mayor o igual que b
// a == b => a igual que b
// a != b => a diferente que b

// COMPARADORES LÓGICOS
// p && q => p y q
// p || q => p ó q
// !q     => no q
// 


// evaluar si el anio es bisiesto
var anio = 1998;
// un año es bisiesto cuando 
// 1.- es multiplo de 4 pero no de 100
// 2.- o sea multiplo de 400 a la vez


var anio = +prompt("Ingrese Año");
if ((anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0) {
    console.log(`El año ${anio} es bisiesto`);
}
else {
    console.log(`El año ${anio} no es bisiesto`);
}














