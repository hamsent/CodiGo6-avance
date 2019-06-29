// Math => clase que provee de funciones matematicas "sin la necesidad" de crear un objeto de dicha clase.
// estas clases, son llamadas clases "estaticas".


// raiz cuadrada de un numero 
console.log(Math.sqrt(81));

// el piso de un numero
console.log("piso de 9.8 =>"+ Math.floor(9.8));
// el techo de un numero
console.log("techo de 9.1 =>"+ Math.ceil(9.1));
// redondear un numero
console.log("Redondeo de 4.5 =>"+Math.round(4.5));
console.log("Redondeo de 4.1 =>"+Math.round(4.1));
console.log("Redondeo de 4.9 =>"+Math.round(4.9));
// numero random o aleatorio entre 0 y 1 en decimales
console.log("Random entre 0 y 1 =>"+ Math.random());

// numero random entre 2 numeros dados
console.log("Random entre 4 y 25 =>" + (Math.random()*(25-4)+4));