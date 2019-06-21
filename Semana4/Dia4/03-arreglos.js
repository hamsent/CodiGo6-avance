
var paises=["Perú","Venezuela","Brasil","Bolivia",1,4,2,3,true];
console.log(paises[0]);
var palabra="Pizza";
console.log(palabra[1]);
// console.log(`La longitud de ${palabra} es ${palabra.length}`);
// for (i=0; 1<palabra.length; i++) {
//     console.log(palabra[i]);
    
// }

// var personas=["Sr. Garnica","Sr. Rodriguez","Srta. Azucena"];
// var profesion=["Ingeniero","Ingeniero","Psicologa"];
// var edad=[27,26,40];
// for (i=0;i<personas.length;i++){
//     console.log(`El sr. (La srta.) ${personas[i]} tiene ${edad[i]} años y es ${profesion[i]}`);
// }

// var arreglo=[9,8,2,15,8,7,6,7,8,2,1];
// var cantidad=+prompt("Ingrese la cantidad de los ultimos numeros a ver;")
// for (i=(arreglo.length-1); i>((arreglo.length)-(cantidad+1)); i--){
//     console.log(arreglo[i]);
// }

// var palabra=prompt("Ingrese palabra;")
// for (i=(palabra.length-1); i>=0; i--){
//     console.log(palabra[i]);
// }

// sumando matrices

console.log("------------------------------");

var matriz1=[[1,8,4],[3,2,5],[8,1,9]];
var matriz2=[[3,1,2],[4,3,1],[0,2,1]];
var matriz3=[];
for (i=0;i<matriz1.length;i++){
    // 
    matriz3[i]=[]
    for(j=0;j<matriz1[i].length;j++){
        matriz3[i][j]=matriz1[i][j]+matriz2[i][j];
     
    }
}
console.log(matriz3);

//trasponer una matriz

var matriz=[[5,6,3],[1,2,4]];

// http://tiny.cc/transpuesta
// resultado sea =>[[5,1],[6,2],3,4]

for (1=0; i<matriz.length;1++){

}
