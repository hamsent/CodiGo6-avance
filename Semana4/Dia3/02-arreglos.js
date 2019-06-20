var marcas=["Hyundai","Toyota","Kia","Audi","Nissan"];
var equipos=[];
// imprimiendo todo un arreglo
console.log(marcas[2]);
console.log(marcas);
// se concatena de esta forma
console.log(`${marcas[0]} - ${marcas[2]}`);
// asignando el valor en una posicion del arreglo
marcas[3]="Daewoo";
console.log(marcas);



// propiedades básicas de los arreglos
// optener la cantidad de elementos de un arreglo
// length =>retorna la cantidad de elementos de un arreglo

var elementos=marcas.length;
console.log(elementos);
console.log(marcas.length);

// recorriendo un arreglo
for (var i=0; i<marcas.length;i++){
    // console.log(marcas[i]);
    console.log(`Posición ${i} => ${marcas[i]}`);
}
// declarar un arreglo de 10 numeros enteros y modificare dichos numerospor sus cuadrados al final, imprimir el arreglo resultado ejm [4,7,9,3] => [16,49,81,9]
var arreglo=[6,7,5,3,5,8,9,3,4,6]
for (var can=0; can<arreglo.length; can++){
    arreglo[can]=arreglo[can]**2;
    //   arreglo[can]=arreglo[can]*arreglo[can];
    //   (arreglo[can]^2);
}
console.log(arreglo);


