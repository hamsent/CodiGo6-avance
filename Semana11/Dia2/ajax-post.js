window.onload = function () {
    var inputNombre = document.getElementById("inputNombre");
    var inputTrabajo = document.getElementById("inputTrabajo");
    var btnCrear = document.getElementById("btnCrear");
    var divAlertas = document.getElementById("divAlertas");
    btnCrear.onclick = function (evt) {

        // evt.preventDefauld();
        var trabajador = {
            // trim quita los espacios en blanco al incio y final
            name: inputNombre.value.trim(),
            job: inputTrabajo.value.trim()
        };

        console.log(trabajador);
        var xhr = new XMLHttpRequest();
        // Limitamos el tiempo de espera de nuestra peticion
        // cambiando la propiedad timeout  de xhr, el tiempo es  
        xhr.timeout = 1500;
        xhr.ontimeout = function () {
            console.log("tiempo de espera superado");
        };
        xhr.onreadystatechange = function() {
            switch (xhr.readyState){
                case 1:
                    console.log("configurando");
                    break;
                case 2:
                    console.log("Enviando los datos");
                    break;
                case 3:
                    console.log("Cargando");
                    break;
                case 4:
                    if (xhr.status === 201) {
                        var json = JSON.parse(xhr.responseText);
                        console.log(json);
                        console.log("hecho!!!");
                        divAlertas.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">Tu usuario <strong>${json.name}</strong> ha sido creado exitosamente con el cargo de <strong>${json.job}</strong><button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`;
                    }
                    else {
                        console.log("respuesta obtenida por status extraño");
                    }
                    break;
                    defauld:
                    console.log("Algo inesperado");
                    // console.log(xhr.responseText);
                    // break;

            }
        };
        xhr.open("POST", "https://reqres.in/api/users");
        xhr.setRequestHeader("Content-Type", "application/json");
        // convertimos nuestro objeto a texto para que pueda ser enviado
        xhr.send(JSON.stringify(trabajador));
    };

};