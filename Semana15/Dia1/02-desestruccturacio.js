let numeritos=[9,6,4,["x","y","z"],100,90,60];
let segundo=numeritos[1];
let primero=numeritos[0];
console.log(primero);
console.log(segundo);

let [uno,dos,tres,[xx,yy,zz],...elresto]=numeritos;
console.log(uno);
console.log(dos);
console.log(tres);
console.log(tres-uno);

console.log(xx);
console.log(yy);
console.log(zz);
console.log(elresto);

console.log("------------------Objetos Destructurados-----------------");

let cevichela={
    id:1,
    precio:30,
    descripcion:"Ceviche más chelas, plato preferido de Código",
    componentes:["Cerveza","Ceviche"],
    oferta:{
        descuento:5,
        condicion:"sábados y domingos"
    }
}

// let precio=cevichela.precio;
// let descripcion=cevichela.descripcion;

// console.log(precio);
// console.log(descripcion);

let {id,descripcion,precio:cuantoEsta}=cevichela;
console.log(descripcion);
console.log(cuantoEsta);

let {componentes:[pri,seg]}=cevichela;
console.log(pri);

let {oferta:{descuento,condicion}}=cevichela;
console.log(descuento,condicion);