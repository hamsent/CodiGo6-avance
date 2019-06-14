console.log("prueba");  
// con var se declara variables 
var nombre;
// varable=valor;
// siempre poner un ; al finally
nombre= "jorge";
var PrimerNombre="Ronald", PrimerApellido="Huarca", SegundoApellido="Toledo";
console.log(PrimerNombre);
// javascript diferencia las bariables si esta con mayuscula o minuscula
// numeros/number texto/string booleanos
// number
var x=9;
var y=3.1415;
var e=10e10;
console.log(x);
console.log(y);
console.log(e);

// strings - texto
var string='Hola';
var caracter='A';
console.log(string);
console.log(caracter);

// variables booleanas
var lapizzavaconpina=true;
var piscoeschileno=false;
console.log(lapizzavaconpina);
console.log(piscoeschileno);

// valores raros
// valor infinito
console.log(5/0);

// Not A Number
console.log(5/"patata");

// operadores
var n1=9;
var n2=7;
var suma=n1+n2;
var resta=n1-n2;
var multiplicacion=n1*n2;
var division=n1/n2;
var residuo=n1%n2;
console.log("operacion suma: " + suma);
console.log("operacion resta: " + resta);
console.log("operacion multiplicacion: " + multiplicacion);
console.log("operacion division: " + division);
console.log("operacion residuo: " + residuo);

// operador unario
var mitexto="pizza con champiñones";
var pedazosdepizza=8;
console.log(typeof(mitexto));
console.log(typeof(pedazosdepizza));

// imprimir caracteres extraños
var otrotexto="\"hola \n chicos\"";
// para imprimir comilla le antepongo\ y si quiero slato de linea \n
console.log(otrotexto);