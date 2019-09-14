window.onload = () => {
    var mapaGoogle;
    var miPosicion;
    var divMapa = document.getElementById("mapa");
    var btnGetPosition = document.getElementById("btnGetPosition");
    var btnBorrarPosition = document.getElementById("btnBorrarPosition");
    var coordAnterior;

    let configurarMapa = () => {
        //google.maps.Map(elemento donde se colocara el mapa)
        mapaGoogle = new google.maps.Map(divMapa, {
            center: { lat: -16, lng: -71 },
            zoom: 8
        });
        listenersMapa();
    }

    btnGetPosition.onclick = () => {
        //Esta habilitada la ubicación?
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((posicion) => {
                console.log(posicion)
                let ubicacion = {
                    lat: posicion.coords.latitude,
                    lng: posicion.coords.longitude
                }
                miPosicion = new google.maps.Marker({
                    position: ubicacion,
                    title: "Aqui estamos",
                    map: mapaGoogle
                });
            }, (error) => {
                console.log(error);
            });
        } else {
            alert("No se permitio el acceso a la ubicación");
        }
    }
    btnBorrarPosition.onclick = () => {
        miPosicion.setMap(null);
    }

    let listenersMapa = () => {
        mapaGoogle.addListener('click', (coords) => {
            let LatLng = {
                lat: coords.latLng.lat(),
                lng: coords.latLng.lng()
            }
            // Console.log(LatLng);
            var marcador = new google.maps.Marker(
                {
                    position: LatLng,
                    draggable: true
                }
            );
            marcador.addListener("drag", (coords) => {
                let miLatLng = {
                    latitud: coords.latLng.lat(),
                    longitud: coords.latLng.lng()

                }
                console.log(miLatLng);
            });

            marcador.addListener("dblclick", () => {
                marcador.setMap(null);
            })
            marcador.setMap(mapaGoogle);

            if (coordAnterior) {
                var coordenadasPolyline = [
                    coordAnterior,
                     {
                        lat: coords.latLng.lat(),
                        lng: coords.latLng.lng()
                    }
                ]
            }else{
                var coordenadasPolyline=[
                    {
                        lat: coords.latLng.lat(),
                        lng: coords.latLng.lng()
                    },
                    {
                        lat: coords.latLng.lat(),
                        lng: coords.latLng.lng()
                    }
                ]
            }

            let miPolyline = new google.maps.Polyline({
                path:coordenadasPolyline,
                strokeColor: "#ff0000",
                strokeWeight: 1
            });

            miPolyline.setMap(mapaGoogle);


            coordAnterior = {
                lat: coords.latLng.lat(),
                lng: coords.latLng.lng()
            }
        });
    }

    configurarMapa();

}