// variables globales
var cafe="pasado";


function hola(){
    console.log("Hola chicos tomen un café "+ cafe);
}
hola();
function chau(){
    var hora= "10:00 pm";
    console.log("hoy nos vamos a " +hora);
}
chau();

if(true){
    // let nos limita el ambito de una variable a su entorno local
    let valor="Galletas";

}
// esto sera un error mientras este usando let
// console.log(valor);
