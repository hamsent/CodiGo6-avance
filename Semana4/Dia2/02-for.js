for (var i = 0; i < 10; i++) {
    console.log(`saludo ${i}`);
}

// formas de incrementar una unidad
// i=i+1
// i+=1
// i++

for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
// algoritmo para imprimir la suma acumulada de los numeros impares comprendidos entre 0 y 100

//debugger sirve para inspeccionar nuestro codigo, para ver que pasa en cada vuelta
// debugger;
var suma = 0
for (var i = 0; i < 101; i++) {
    if (i % 2 != 0) {
        suma = suma + i;
    }
}
console.log(suma);

// algoritmo para contar la cantidad de numeros pares y contar la cantidad de numeros impares entre dos numeros dados por el usuario

var inicio = +prompt("ingrese número de inicio :");
var fin = +prompt("ingrese número de termino :");
var par = 0;
var impar = 0;
for (var cont = inicio; cont <= fin; cont++) {
    if (cont%2 == 0) {
        par = par + 1;
    } else if (cont%2 != 0) {
        impar = impar + 1;
    }

}
console.log("numeros par : " + par);
console.log("numeros impar : " + impar);
// algoritmos para mostrar los multimplos de 5 dados dos numeros (inicio y fin) de forma descendente

var inicio = +prompt("ingrese número de inicio :");
var fin = +prompt("ingrese número de termino :");
// var par = 0;
// var impar = 0;
for (var cont = fin; cont >= inicio; cont--) {
    if (cont%5 == 0) {
        console.log("numeros multiplos de cinco: " + cont);
    } 

}



