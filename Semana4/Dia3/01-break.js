var cont = 1

for (var i = 1; i < 1000; i++) {

    if ((i % 3) == 0) {
        if (cont < 6) {
            console.log(`multiplo de tres ${i}`);
            cont++;
        } else {
            break;
        }
    }  
}

// continue=> sentencia que omite las operaciones que debe hacer el ciclo for, hasta su proximo ciclo. Esto depende de la ubicacion de la sentencia continue;
// Se omite las operaciones desde donde se encuentra la sentencia "continue" en adelante.

// suma acumulada de los numeros entre 0 y 500 excepto los multiplos de 5.
// debugger;
var total=0;
for (var i = 0; i < 11; i++) {
    if(i%5==0){
        continue;
    }
    total=total+i;
}
console.log(total);