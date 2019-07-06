var productos = [
    {
        codigo: "0001",
        descripcion: "laptop toshiba",
        precio: 4500.00,
        imagen: "https://placehold.it/100x100",
        existencias: 45,
        estado: "activo"
    },
    {
        codigo: "0002",
        descripcion: "Mouse Razer",
        precio: 400.00,
        imagen: "https://placehold.it/100x100",
        existencias: 10,
        estado: "inactivo"
    },
    {
        codigo: "0003",
        descripcion: "tablet lenovo",
        precio: 100.00,
        imagen: "https://placehold.it/100x100",
        existencias: 900,
        estado: "activo"
    }
]
var contenedor=document.getElementById("contenedor")
var tabla = document.createElement("table");
tabla.setAttribute("border","1");
tabla.innerHTML = `<tr>
<td>Codigo</td>
<td>Descripción</td>
<td>Precio</td>
<td>Imagen</td>
<td>Existencias</td>
<td>Estado</td>
</tr>`

for (i=0;i<productos.length;i++){
    var trFila=document.createElement("tr");
    var tdCodigo=document.createElement("td");
    var tdDescripcion=document.createElement("td");
    var tdPrecio=document.createElement("td");
    var tdImagen=document.createElement("td");
    // forma1 para la imagen => creamos un elemento img
    // var imagen=document.createElement("img");
    // imagen.setAttribute("src",productos[i].imagen);

    var tdExistencias=document.createElement("td");
    var tdEstado=document.createElement("td");
    // colocando el contenido de cada td
    tdCodigo.innerHTML=productos[i].codigo;
    tdDescripcion.innerHTML=productos[i].descripcion;
    tdPrecio.innerHTML=productos[i].precio;
    // tdImagen.innerHTML=productos[i].imagen;
    // forma1
    // tdImagen.appendChild(imagen);
    tdImagen.innerHTML=`<img src=${productos[i].imagen}/>`
    tdExistencias.innerHTML=productos[i].existencias;
    tdEstado.innerHTML=productos[i].estado;
    tdEstado.style.color=productos[i].estado==="inactivo"?"yellow":"green";
    // inyectando los TD's dentro del TR o fila
    trFila.appendChild(tdCodigo);
    trFila.appendChild(tdDescripcion);
    trFila.appendChild(tdPrecio);
    trFila.appendChild(tdImagen);
    trFila.appendChild(tdExistencias);
    trFila.appendChild(tdEstado);
    tabla.appendChild(trFila);
//     if (trFila.appendChild(tdEstado)=="activo"){
//         trFila.style.backgroundColor="";
//     }
}


contenedor.appendChild(tabla);
