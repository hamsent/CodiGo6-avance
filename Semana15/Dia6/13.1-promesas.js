let consulta = () => {
    //codigo que va a demorar cierto tiempo


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let arreglo = [];
            for (let i = 0; i < 30; i++) {
                arreglo.push(i);
            }
            if (arreglo.length > 0) {
                resolve(arreglo);
            } else {
                reject("Ha ocurrido un error o no se han encontrado datos");

            }

        }, 3000);
    })
}
consulta().then(respuesta => {
console.log("mis datos",respuesta)
}).catch(err =>{
    console.log(err)
});