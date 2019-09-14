// string
let texto:String="Omar";
texto ="cevichelas";
// Number
let miEdad:Number=29;
// booleano
let conHambre:boolean=true;

// any
let multidato:any=0;
multidato="patata";
multidato=true;

//Arreglos
let numeros:Number[]=[1,22,98,669,10000];
let arrMultidatos:any[]=[1,"hola",2,9000];
let masMultidatos:Array<any>=[1,"chau",true,8751];

let anio:Number|String=2019;
anio="2019";
console.log(anio);
numeros.forEach((num:Number)=>{
    console.log(num);
})
