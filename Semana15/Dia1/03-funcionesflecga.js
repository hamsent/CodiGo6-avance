// funciones flecha :)
function suma(a,b){
    return a+b;
}

console.log(suma(10,20));

let sumaFlecha=(a,b)=>{
return a+b;
}

console.log(sumaFlecha(25,30));

let hola=(nombre)=>console.log(`Hola ${nombre}`);
hola("Ronald");

let cuadrado =numero=>Math.pow(numero,2);  

console.log(cuadrado(3));