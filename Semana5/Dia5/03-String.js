var nombre="  Asociación Tecsup Arequipa";
//Obtener un texto en minúsculas
console.log(nombre.toLocaleLowerCase());

// obtener un texto en mayúsculas
console.log(nombre.toUpperCase());

// longitu de una cadena
console.log(nombre.length);

// optener una porción de la cadena dada una posición inicial y una posición final
console.log(nombre.substring(11,17));

//  optener una porción de la cadena dada una posición inicial  hasta el final
console.log(nombre.substring(11));

// obtener un arreglo de subcadenas apartir de un caracter separador
console.log(nombre.split(" "));

// obtener un caracter de la cadena dada su posición
// forma1 => tratar a la cadena como un arreglo
console.log(nombre[11]);
// forma2 => usando la funcion charAt([posicion])
console.log(nombre.charAt(11));


// obtener la posicion desde donde inicia un caracter o una subcadena
console.log(nombre.indexOf("ecsup"));

// obtener una cadena sin los espacios en blanco en los EXTREMOS
console.log(nombre.trim());

for (i=0;i<nombre.length;i++){
    console.log(nombre.charAt(i));

}

// ejercios
// obtener la cantidad de vocales mayusculas o minusculas de una cadena de texto

var minusculas=nombre.toLocaleLowerCase;

for (i=0;i<minusculas.length;i++){
    if (text[i]=="a"||texto[i]=="A"){
        con++;
    }
    
}
console.log(con);
