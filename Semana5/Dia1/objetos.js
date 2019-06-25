
// var objperro={
//     raza:'Poodle',
//     tamaño:'chiquito',
//     color:'blanquito',
//     carcater:'bullicioso',
//     edad:11,
//     hobbies:['masticar zapatos','perseguir gatos','dormir'],
// }

// var objperro2={
//     raza:'Pastor Alemán',
//     tamaño:'grande',
//     color:'negro con cafe',
//     genero:'hembra',
   
// }

// console.log(objperro);
// console.log(objperro.edad);

// console.log(objperro2.color);
// console.log(objperro.hobbies[1]);

// var jauria=[objperro,objperro2];
// console.log(jauria);

var objPersona1={
    nombre:'Martha',
    apellidos:'Rojas',
    edad:29,
    dni:78345678,
    domicilio:'Cerro Colorado',
    profesion:'Medico',
    telefono:45934789
}
var objPersona2={
    nombre:'Fredy',
    apellidos:'Polar',
    edad:30,
    dni:34545678,
    domicilio:'Cayma',
    profesion:'Chef',
    telefono:942090289
}

var personas=[];
objPersona1.celular=941090977;
personas.push(objPersona1);
personas.push(objPersona2);

for(i=0;i<personas.length;i++){
    alert(`${personas[i].nombre} tiene el siguiente DNI ${personas[i].dni}`);
    var nuevoDni=+prompt("Ingrese su nuevo DNI : ");
    personas[i].dni=nuevoDni;
    var Genero=prompt("El genero de la persona es?");
    personas[i].genero=Genero;
}
console.log(personas);
