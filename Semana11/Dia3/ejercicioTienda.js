window.onload = function () {
    var divProductos = document.getElementById("divProductos");
    var detalleProducto = document.getElementById("detalleProducto");
    var nombreProducto = document.getElementById("nombreProducto");
    var descProducto = document.getElementById("descProducto");
    var precioProducto = document.getElementById("precioProducto");
    var stockProducto = document.getElementById("stockProducto");
    var btnEliminar = document.getElementById("btnEliminar");
    function eliminarProducto(id) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            switch (xhr.readyState) {
                case 4:
                    console.log("Se ha elimado el producto correctamente");
                    obtenerProductos();
                    break;
            }
        }
        xhr.open("DELETE", "https://5d4b6ade00dbb10014879b1b.mockapi.io/Tiendita/" + id);
        xhr.send(null);
    }


    function imprimirDetalle(id) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            switch (xhr.readyState) {
                case 4:
                    console.log(xhr.responseText);
                    let objProducto = JSON.parse(xhr.responseText);
                    nombreProducto.innerHTML = objProducto.prod_nom;
                    console.log(objProducto);

                    descProducto.innerHTML = objProducto.prod_desc;

                    precioProducto.innerHTML = objProducto.prod_prec;

                    stockProducto.innerHTML = objProducto.prod_stock ? "hay stock" : "no hay stock";
                    btnEliminar.onclick = function () {
                        eliminarProducto(id);

                    }

                    break;
            }
        }
        xhr.open("GET", "https://5d4b6ade00dbb10014879b1b.mockapi.io/Tiendita/" + id);
        xhr.send(null);
    }

    function imprimirProductos(arregloProductos) {
        divProductos.innerHTML = "";
        divFila = document.createElement("div");
        divFila.setAttribute("class", "row");
        divProductos.appendChild(divFila);

        for (let i = 0; i < arregloProductos.length; i++) {
            var divColumna = document.createElement("div");
            divColumna.setAttribute("class", "col-4");
            divColumna.style.height = "300px";
            divColumna.style.backgroundImage = `url('${arregloProductos[i].prod_img}')`;
            divColumna.style.margin = "2px";
            if (arregloProductos[i].prod_stock == false) {
                divColumna.style.border = "2px solid red";
            }
            divColumna.innerHTML = arregloProductos[i].prod_nom;
            divColumna.style.padding = "5px";
            divFila.appendChild(divColumna);

            divColumna.onclick = function () {
                imprimirDetalle(arregloProductos[i].prod_id);
            }

        }
    }
    function obtenerProductos() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            switch (xhr.readyState) {
                case 2:
                    console.log("se esta ejecutando la peticion");
                    break;
                case 3:
                    console.log("descargando datos");
                    break;
                case 4:
                    console.log("listo!!");
                    console.log(xhr.responseText)

                    var jsonProductos = JSON.parse(xhr.responseText);
                    imprimirProductos(jsonProductos);
                    break;
            }


        }
        xhr.open("GET", "https://5d4b6ade00dbb10014879b1b.mockapi.io/Tiendita");
        xhr.send(null);
    }
    obtenerProductos();
}
