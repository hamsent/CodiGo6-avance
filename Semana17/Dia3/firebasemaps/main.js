
window.onload = () => {
    var mapGoogle;
    let divMapa = document.getElementById("mapa");

    function inicializandoFirebase() {
        //Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyD1PMgQVd6znOGdq5RnsZHRIw2oQveiP6k",
            authDomain: "parking-3c24e.firebaseapp.com",
            databaseURL: "https://parking-3c24e.firebaseio.com",
            projectId: "parking-3c24e",
            storageBucket: "",
            messagingSenderId: "348215956236",
            appId: "1:348215956236:web:945920e010f5ff0e696f29"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }


    inicializandoFirebase();

    function configurarMaps() {
        mapGoogle = new google.maps.Map(divMapa, {
            center: { lat: -16, lng: -71 },
            zoom: 9
        });
        listenerMaps();
    }

    let crearNuevoParqueo = (lat, lng) => {
        $('modal').modal('show');
        let inputNombre = $('#inputNombre').val();
        let inputDireccion = $('#inputDireccion').val();
        let inputDescripcion = $('#inputDescripcion').val();
        let btnCrear = $('#btnCrear');

        btnCrear.click(()=>{
        let referencia = firebase.database().ref("parking");
        const NUEVO_ID = referencia.push().key;
        referencia.child(NUEVO_ID).set(
            {
                nombre: inputNombre,
                descripcion: inputDescripcion,
                direccion: inputDireccion,
                lat: lat,
                lng: lng

            }, error => {
                if (error) {
                    console.log(error);
                }
            }
        );
    })

}

let listenerMaps = () => {
    mapGoogle.addListener("click", coords => {
        let lat = coords.latLng.lat();
        let lng = coords.latLng.lng();
        console.log(lat, lng);
        crearNuevoParqueo(lat,lng);
    })
}


function imprimirMarcadores(arregloMarcadores) {
    arregloMarcadores.forEach(({ nombre, direccion, descripcion, lat, lng }) => {

        let miLatLng = {
            lat: lat,
            lng: lng

        }
        let marcador = new google.maps.Marker({
            position: miLatLng,
            icon: {
                url: './parking.png',
                scaledSize: new google.maps.Size(50, 50)
            },
            title:nombre
        });

        let info=new google.maps.InfoWindows({
            content:`<h4>${nombre}</h4>
            <br/>
            <strong>Dirección:</strong>${direccion}
            <br/>
            <strong>Descripcion:</strong>${descripcion}`
        });
        marcador.addListener("click",()=>{
            info.open(mapGoogle,marcador);
        })
        marcador.setMap(mapGoogle);
    })

}

function obtenerParking() {
    let referencia = firebase.database().ref("parking");
    referencia.on("value", data => {

        let arregloData = [];
        // console.log(data);
        data.forEach(espacio => {
            // console.log(espacio);
            // console.log(espacio.val().nombre);
            // console.log(espacio.val().direccion);
            // console.log(espacio.val().descripcion);
            // console.log(espacio.val().lat);
            // console.log(espacio.val().lng);

            let objTemporal = {
                nombre: espacio.val().nombre,
                descripcion: espacio.val().descripcion,
                direccion: espacio.val().direccion,
                lat: espacio.val().lat,
                lng: espacio.val().lng,
            }
            arregloData.push(objTemporal);
            imprimirMarcadores(arregloData);
        });
    })
}

obtenerParking();
configurarMaps();
};