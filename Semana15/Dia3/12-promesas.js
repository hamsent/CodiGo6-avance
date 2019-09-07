let mipromesa=()=>{
    return new Promise((resolve,reject)=>{
        // lo que queremos que haga
        setTimeout(()=>{
            resolve("algo ha pasado y hemos tenido exito ejecutandolo");
        },2000)
    });
}
// .then() se disparara cuando ejecute la funcion resolve, y .catch() cuando se ejecute la funcion reject

//then y catch ambas pueden recibir un parametro dentro de una funcion aninima si esque se le ha pasado ese parametro a reject y resolve
mipromesa().then(respuesta=>{
    console.log("exito!!!");
    console.log(respuesta);
}).catch(error=>{
    console.log("error");
})