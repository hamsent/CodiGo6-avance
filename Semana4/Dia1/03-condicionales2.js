// analizar una estacion del año dado un numero
// entre 1 y 4
// 1 => verano
// 2 => invierno
// 3 => primavera
// 4 => otoño
var estacion=+prompt("ingrese un numero entre 1 y 4");
var rpta="";
if (estacion==1){
    rpta="verano";
}else if(estacion==2){
    rpta="invierno";
}else if(estacion==3){
    rpta="primavera";
}else if(estacion==4){
    rpta="otoño";
} else{
    rpta="error!!!";
}
console.log(`Estamos en la estaciòn de ${rpta}`);

// Ejercicio 3.1
// var edad=+prompt("ingrese su edad");
// if (edad>=18) {
//     console.log(`Usted tiene ${edad} años, puede votar`);
// } else {
//     console.log(`Usted tiene ${edad} años, no puede votar`);
// }

var precio=+prompt("ingrese el precio de compra");

if (precio<11 && precio>0) {
    console.log("Puede comprar Tarjetas");    
}else if(precio<101 && precio>10){
    console.log("Puede comprar Chocolates");
}else if(precio<251 && precio>100){
    console.log("Puede comprar flores");
}else if(precio>251){
    console.log("Puede comprar anillos");
}

var horas=+prompt("ingrese el tiempo de estacionamiento");
var costo=0
if (horas<3) {
    costo=horas*5;
} else if(horas<6 && horas>2){
    costo=(horas-2)
}

var horas=+prompt("ingrese primer nombre");



