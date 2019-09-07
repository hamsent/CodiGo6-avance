// [arreglo].map(()=>{}) recorrera un arreglo y transformara mi arreglo devolviendo un nuevo arreglo transformandolo segun lo que indequemos que retorne

let numeros=[4,9,16,25,36,49];

let mitades =numeros.map((numero)=>{
    return numero/2;
})
console.log(mitades);

let raiz=numeros.map((elemento)=>{
    return Math.sqrt(elemento);
})

console.log(raiz);