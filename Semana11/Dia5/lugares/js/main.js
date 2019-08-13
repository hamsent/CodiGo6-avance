window.onload = function () {
    var divCarga = document.getElementById("divCarga");
    var inputBuscar = document.getElementById("inputBuscar");
    var frmBusqueda = document.getElementById("frmBusqueda");
    var divVacio = document.getElementById("divVacio");
    var cuerpo = document.getElementById("cuerpo");
    var contenedorTabla = document.getElementById("contenedorTabla");
    var map;

    frmBusqueda.onsubmit = function (evento) {
        evento.preventDefault();
        divVacio.setAttribute("hidden", "true")
        // limpiar el cuerpo de la tabla
        cuerpo.innerHTML = "";
        contenedorTabla.removeAttribute("hidden", "true");
        var busqueda = inputBuscar.value;
        buscarLugar(busqueda);
        console.log("haciendo submit");
    }
    // funcion para hacer la busqueda del lugar en la api de lugares
    function buscarLugar(busqueda) {
        console.log("cargando...")

        // mostrando el div de carga
        divCarga.removeAttribute("hidden");
        console.log(`alguien esta buscando ${busqueda}`);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {

            if (xhr.readyState == 4) {
                divCarga.setAttribute("hidden", "true");
                // console.log(JSON.parse(xhr.responseText));
                var gata = JSON.parse(xhr.responseText).Results;
                console.log(gata);
                dibujarTabla(gata);
            }
        }
        xhr.open("GET", `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${busqueda}`);
        xhr.setRequestHeader("x-rapidapi-host", "devru-latitude-longitude-find-v1.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "0509ce5680msh4036dd086e5f1ddp150c3ejsnbd0c932584ab");
        xhr.send();
    }
    function dibujarTabla(gata) {
        if (gata.length === 0) {
            divVacio.removeAttribute("hidden");

        } else {
            gata.forEach(function (elemento, i) {

                var tr = document.createElement("tr");
                var tdNro = document.createElement("td");
                tdNro.innerHTML = (i + 1);
                tr.appendChild(tdNro);

                var tdNombre = document.createElement("td");
                tdNombre.innerHTML = elemento.name;
                tr.appendChild(tdNombre);

                var tdTipo = document.createElement("td");
                tdTipo.innerHTML = elemento.type;
                tr.appendChild(tdTipo);

                var tdPais = document.createElement("td");
                tdPais.innerHTML = elemento.c;
                tr.appendChild(tdPais);

                var tdLongitud = document.createElement("td");
                tdLongitud.innerHTML = elemento.lon;
                tr.appendChild(tdLongitud);

                var tdLatitud = document.createElement("td");
                tdLatitud.innerHTML = elemento.lat;
                tr.appendChild(tdLatitud);

                var botonVer = document.createElement("button");
                botonVer.innerHTML = `<i class="fas fa-eye"></i>`;
                botonVer.setAttribute("class", "btn btn-outline-success mt-1");

                // primera opcion para modal

                // botonVer.setAttribute("type","button");
                // botonVer.setAttribute("data-toggle","modal");
                // botonVer.setAttribute("data-target","#modalMapa");

                // $ selector universal de jquery
                botonVer.onclick = function () {
                    $(`#modalMapa`).modal(`show`);
                    // centra el mapa en una coordenada especifica
                    map.setCenter(new google.maps.LatLng(elemento.lat,elemento.lon));
                }

                // botonVer.setAttribute("type","button");
                tr.appendChild(botonVer);

                cuerpo.appendChild(tr);
            });
            contenedorTabla.removeAttribute("hidden");
        }
    }

    function initMap() {
        // inicializar el mapa
        // la variable map es la referencia al mapa google
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
    }
    initMap();

}