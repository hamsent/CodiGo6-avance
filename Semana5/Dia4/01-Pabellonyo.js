
function Pabellon(nombreIni,capacidadIni,nro_filasIni,nro_colIni,idIni){
    var objPabellon={
        nombre:nombreIni,
        capacidad:nro_colIni*nro_filasIni,
        nro_filas:nro_filasIni,
        nro_col:nro_colIni,
        id:idIni,
        nichos:[
           {
            id:1,
            nro:1,
            precio:5000,
            estado:"disponible"
           },
           {
            id:2,
            nro:2,
            precio:3000,
            estado:"ocupado"
           },
         
        ],
        venderNicho: function(){
            console.log(this.nichos.length);
            for(i=0;i<this.nichos.length;i++){
                if(this.nichos[i].estado=="ocupado"){
                    console.log(`nicho nro. ${this.nichos[i].nro}, no se puede vender porque esta ocupasdo`);
                }
                else{
                    console.log(`nicho nro. ${this.nichos[i].nro}, esta libre`);
                }
                // console.log(this.nichos.estado[i]);
            }
         
        }
        
    }
    return objPabellon;
}
// Desarrollar las siguientes funciones
// - venderNicho(idNicho)=> la funcion, mostrara un mensaje por consola, de "Nicho vendido" tras cambiar su estado a "acupado", si el nicho esta ocupado,el sistema, deberá mostrar un mensaje de error indicando que el nicho no se puede vender.

var pabell1=Pabellon('san jorge',5,4);
pabell1.venderNicho(); 

Pabellon('san jorge',5,4).venderNicho();





// -consultarNichosLibres()=> la función retornara la cantidad de nichos en estado "libre"
// - liberarPabellon() => la funcion borrará todos los nichos del pabellon (limpiará el arreglo de nichos)
// repoblarPabellon() => la funcion, primero llamará a la funcion liberarPabellon(), lueego creara tantos nichos como capacidad tenga el pabellon , con valores por defecto para cada nicho. OJO > el numero y el id del nicho, deben ser valores correlativos, el precio iniciara en cero y todos los estados serán "libre".
// console.log(Pabellon("ronald"));