window.onload = function () {
    var divCarga= document.getElementById("divCarga");
    var inputBuscar = document.getElementById("inputBuscar");
    var frmBusqueda = document.getElementById("frmBusqueda");

    frmBusqueda.onsubmit = function (evento) {
        evento.preventDefault();
        var busqueda = inputBuscar.Value;
        buscarLugar(busqueda);
        console.log("haciendo submit");
    }
    // funcion para hacer la busqueda del lugar en la api de lugares
    function buscarLugar(busqueda) {
        console.log("cargando...")
        // mostrando el div de carga
        divCarga.removeAttribute("hidden");
        console.log(`alguien esta buscando ${busqueda}`);
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
        
            if(xhr.readyState==4){
                divCarga.setAttribute("hidden","true");
                console.log(JSON.parse(xhr.responseText));
            }
        }
        xhr.open("GET",`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${busqueda}`);
        xhr.setRequestHeader("x-rapidapi-host","devru-latitude-longitude-find-v1.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key","0509ce5680msh4036dd086e5f1ddp150c3ejsnbd0c932584ab");
        xhr.send();
    }
}