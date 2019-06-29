var fecha=new Date();
// var x =new Number();
//imprime fecha actual completa
console.log(fecha);
// imprimeel año con la fecha en 4 digitos
console.log(fecha.getFullYear());
// imprimir el mes de la fecha en un numero entero [0-11]
console.log(fecha.getMonth());
// imprimir el numero del dia
console.log(fecha.getDate());
// imprimir el numero del dia en la semana [1-7]
console.log(fecha.getDay());
// imprimir la hora de la fecha
console.log(fecha.getHours());
// imprimir los minutos de la fecha actual
console.log(fecha.getMinutes());
// imporimir los segundos de la fecha actual
console.log(fecha.getSeconds());
// imprimir los millisegundos de la fecha actual
console.log(fecha.getMilliseconds());
console.log("Modificando el año al 2030");
// set para cambiar datos de la fecha
fecha.setFullYear(2030);
console.log("nueva fecha");
console.log(fecha);
//formas de instanciar un objeto de tipo fecha
// devuelve la fecha actual del ordenador(front end)
var miFecha=new Date();
// devuelve la fecha indicandoel año, mes y dia
var miFecha2=new Date(2018,09,08);
// devuelve la fecha indicando el anio,mes, dia, horas, minutos y segundos
var miFecha3=new Date(1991,09,08,02,10,45);
// 05 es junio porque los meses inician en 0
var ayer=new Date(2019,05,27);
console.log(miFecha-ayer)

// cuantas semanas faltan para navidad?



var navidad=new Date(2019,11,25);

var milisegundos=navidad-miFecha;
var segundos=milisegundos/1000;
var minutos=segundos/60;
var horas=minutos/60;
var dias=horas/24;
var semanas=dias/7;
console.log(semanas);













