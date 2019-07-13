window.onload=function(){
    // var nombre="Paolo Guerrero";
    // localStorage.setItem("name",nombre);
    var body = document.getElementById("cuerpo");
    var nombre=document.getElementById("inputNombre");
    var apellido=document.getElementById("inputApellido");
    var color=document.getElementById("inputColor");
    var guardar=document.getElementById("inputGuardar");
    var borrar=document.getElementById("btnBorrar");

    function obtener(){
        // para obtener una variable de localStorage
        // localStorage.getItem("nombreVariable")
        var nombreGuardado=localStorage.getItem("nombre");
        var apellidoGuardado=localStorage.getItem("apellido");
        var colorGuardado=localStorage.getItem("color");
        // if(nombreGuardado!=null)
        // if(nombreGuardado) los dos son iguales
        if(nombreGuardado&&apellidoGuardado&&colorGuardado){
            body.style.backgroundColor=colorGuardado;
            color.value=colorGuardado;
            nombre.value=nombreGuardado;
            apellido.value=apellidoGuardado;
        }else{
            console.log("No hay nada guardado");
        }
    }
    // obtener();

    function obtenerPorObjeto(){
        // el objeto guardado como texto
        var objPreferenciasString=localStorage.getItem("objPreferencias");
        // con JSON.parse lo convertimos de texto a JSON
        var objPreferenciasJSON=JSON.parse(objPreferenciasString);
        console.log("objeto convertido ", objPreferenciasJSON);
        if(objPreferenciasJSON){
            body.style.backgroundColor=objPreferenciasString.color;
            color.value=objPreferenciasJSON.color;
            nombre.value=objPreferenciasJSON.nombre;
            apellido.value=objPreferenciasJSON.apellido;
        }else{
            console.log("cuak ha ocurrido un error!!!");
        }
    }
    obtenerPorObjeto();

    borrar.onclick=function(){
        // Para borrar un elemento o clave del localStorage, utilizamos:
        localStorage.removeItem("nombreItem")
        localStorage.removeItem("nombre");
        localStorage.removeItem("apellido");
        localStorage.removeItem("color");
        localStorage.removeItem("objPreferencias");
        
        // localStorage.clear(),borrara todo! no como thanos
        // localStorage.clear();

    }

    

    guardar.addEventListener("click",function(e){
        e.preventDefault();
        // guardar datos con localStorage.setItem("nombreaguardar","el contenido")
        localStorage.setItem("nombre",nombre.value);
        localStorage.setItem("apellido",apellido.value);
        localStorage.setItem("color",color.value);

        var objPreferencias={
            nombre: nombre.value,
            apellido:apellido.value,
            color: color.value,
        }
        // JSON - Javascript Object Notation
        // JSON.stringfy([objeto]); -> nos devuelve el objeto, pero en string
        console.log(objPreferencias);
        // localStorage.setItem(JSON.stringify(objPreferencias));
        var PreferenciasTexto=JSON.stringify(objPreferencias);
        localStorage.setItem("objPreferencias",PreferenciasTexto);
        console.log(PreferenciasTexto);
    })

}