function Persona(nombreInicial, edadInicial, dniInicial, sueldoInicial=1000){
    var objPersona={
        nombre:nombreInicial,
        edad:edadInicial,
        dni:dniInicial,
        genero:'No especifica',
        email:'No dice',
        sueldo:sueldoInicial,
        verPersona:function(){
            console.log(`nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.dni} \nGénero: ${this.genero} \ne-mail: ${this.email} \nSueldo: ${this.sueldo}`)
        },
        cambiarGenero:function(nuevoGenero){
            this.genero=nuevoGenero;
        },
        cambiarNombre:function(nuevoNombre){
            this.nombre=nuevoNombre;
      }
    }
    return objPersona;
}

var Maria=Persona('Maria','22','34543456',1500);
var Paolo=Persona('Paolo','25','23434352')
// console.log(Maria);
// console.log(Paolo);
Maria.verPersona();
Paolo.verPersona();
Paolo.cambiarGenero('Varón');
Paolo.verPersona();
Maria.cambiarNombre('Mario');
Maria.cambiarGenero('Varón');
Maria.verPersona();

var arreglo=[0,1,2,3,4,5,6];
// splice adivina x elementos de una determinada posición, lo que hace splice(3,1)aqui va a eliminar un elemento desde la posicion 3
// 3 es la posicion, 1 cantidad de elementos 
arreglo.splice(3,2);
console.log(arreglo);