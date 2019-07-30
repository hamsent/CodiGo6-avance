window.onload = function () {
    // obtenemos los elementos del html a utilizar tanto el contenedor como el modal
    var main = document.getElementById("contenedor");
    var modalTitulo = document.getElementById("modalTitulo");
    var modalImagen = document.getElementById("modalImagen");
    var modalDescripcion = document.getElementById("modalDescripcion");
    // es simular nuestra base de datos
    var productos = [
        {
            id: 10,
            nombre: 'Xiaomi Redmi 7',
            precio: 150,
            descripcion: 'Smartphone de 6 pulgadas con bateria de 4000 mAh, buen rendimiento de gama media',
            imagen: 'https://picsum.photos/200/200'
        },
        {
            id: 20,
            nombre: 'Razer Smarphone',
            precio: 300,
            descripcion: 'Bonito con pantalla 4K, bateria de alto rendimiento y excelente acabado',
            imagen: 'https://picsum.photos/200/200'
        },
        {
            id: 30,
            nombre: 'Huawei P10',
            precio: 700,
            descripcion: 'El Huawei P10 Plus es un Smartphone que redefine la forma en que el mundo te ve',
            imagen: 'https://picsum.photos/200/200'
        },
        {
            id: 40,
            nombre: 'Sony Xperia Z20',
            precio: 600,
            descripcion: 'Pantalla deficiente pero excelente rendimiento y proteccion contra líquidos',
            imagen: 'https://picsum.photos/200/200'
        },
        {
            id: 50,
            nombre: 'Akita',
            precio: 800,
            descripcion: 'Pantalla deficiente pero excelente rendimiento y proteccion contra líquidos',
            imagen: 'https://picsum.photos/200/200'
        }
    ];
    // var row = document.createElement("div");
    // row.className = "row";
    // main.appendChild(row);

    // var divProducto = "";

    // productos.forEach(function (item) {
    //     divProducto = divProducto + `<div class="col-md-4 mb-2">
    //                                 <div class="card">
    //                                     <img src="${item.imagen}" class="card-img-top">
    //                                         <div class="card-body">
    //                                             <h4 class="card-title">
    //                                                 ${item.nombre}
    //                                             </h4>
    //                                             <p class="card-text">
    //                                                 Precio: S/ ${item.precio}
    //                                             </p>
    //                                             <button class="btn btn-primary click" idproducto="${item.id}">
    //                                                 Detalles...
    //                                             </button>
    //                                         </div>
    //                                 </div>
    //                             </div>`
    // });
    // row.innerHTML = divProducto;

    var row1 = document.createElement("div");
    var tabla = document.createElement("table");
    row1.className = "row";
    tabla.className="table table-bordered table-hover";
    
    var tablaProducto = ""
    productos.forEach(function (item) {
        tablaProducto = tablaProducto + `
        <tbody>
                <tr>
                    <td>${item.id}</td>
                    <td>${item.nombre}</td>
                    <td>${item.precio}</td>
                    <td>${item.descripcion}</td>
                    <td><img src="${item.imagen}" class="card-img-top"></td>
                </tr>
        </tbody>
        `
    });
  
    tabla.innerHTML = `<thear>
        <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>PRECIO</th>
            <th>DESCRIPCION</th>
            <th>IMAGEN</th>
        </tr>
    </thear>${tablaProducto}`;
    row1.appendChild(tabla);
    main.appendChild(row1);
}