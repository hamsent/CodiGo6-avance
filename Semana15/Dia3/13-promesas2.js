window.onload=()=>{
let traerGatos=()=>{
    return new Promise((resolve,reject)=>{
        // va nuestro codigo asincrono
        $.ajax({
            type:"GET",
            url:"http://5d4b6ade00dbb10014879b1b.mockapi.io/gatos",
            time:1000,
            data:null,
            success:function(respuesta){
                resolve(respuesta);// el resolve disparara el then
            },
            error:function(error){
                reject(error); // disparara la funccion catch
            },
            beforeSend:function(){
                console.log("Aqui buscando Gatos");
            }
        });   
    });
}
let promesa=traerGatos();
//esta promesa va a estar pendiente a que se ejecute resolve o reject
console.log(promesa);
promesa.then((gatos)=>{
    console.log("Exito!!! promesa cumplida",gatos);

}).catch((error)=>{
    console.log("Ups algo ha pasado",error);
})
}