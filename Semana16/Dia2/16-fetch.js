window.onload = function () {
    let btnObtenerDatos = document.getElementById("obtenerDatos");
    let inputNombre = document.getElementById("nombre");
    let inputDireccion = document.getElementById("direccion");
    let btnEnviarDatos = document.getElementById("enviarDatos");

    btnObtenerDatos.onclick = function () {
        // con una particion de tipo GET
        fetch("https://prueba-b662c.firebaseio.com/restaurantes.json").then((respuesta) => {
            console.log(respuesta);
            return respuesta.json();
        }).then((respuestaJSON) => {
            console.log(respuestaJSON)
        }).catch((error) => {
            console.log(error);
        });


    }

    // btnEnviarDatos.onclick=Function(){

    btnEnviarDatos.onclick = () => {
        let nombre = inputNombre.value;
        let direccion = inputDireccion.value;

        let objRestaurante = {
            nombre: nombre,
    direccion:direccion
        }

        let configuracion = {
            method: 'POST',
            body: JSON.stringify(objRestaurante),
            headers:{'Content-Type':'application/json'}

        }
        fetch("https://prueba-b662c.firebaseio.com/restaurantes.json",configuracion).then((respuesta)=>{
            return respuesta.json();
        }).then(respuestaJSON=>{
            console.log(respuestaJSON)
        }) 

    }
}