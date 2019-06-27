
// PECULARIEDADES DE OBJETOS EN JAVASCRIPT
var cafe="latte";

var jugo={
    ingrediente1:'Papaya',
    ingrediente2:'Agua',
    ingrediente3:'Azucar',
    ingrediente4:'Canela',
}
delete cafe;
delete jugo.ingrediente4;
console.log(jugo);

//copiar objetos

var gato={
    nombre:'Salem',
    color: 'Negro'
}
var gato2=gato;

console.log(gato);
console.log(gato2);
gato2.color='Blanco';
console.log(gato);
console.log(gato2);
// var gato3=Object.assign(gato);
// aplicando objeto {...objeto} copiamos un objeto pero sin hacer referencia a su misma direccion de memoria
var gato3={...gato};
gato3.color='Verde';
console.log(gato);
console.log(gato3);

var auto={
    motor:'6 cilindros',
    cambios:'Mecanico',
    suspension:'Hidraulico',
    asientos:'tela'
}
// object.keys nos retorna solo las propiedades
console.log(Object.keys(auto));

function RetornarAuto(auto){
    return {...auto,asientos:'Cuero', luces:'Neon'};
}
console.log(RetornarAuto());
var AutoNuevo=RetornarAuto(nuevo);
Console.log(AutoNuevo);