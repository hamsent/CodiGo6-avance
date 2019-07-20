window.onload=function(){
    
    // Creamos nuestro objeto global, para guardarlo en el localstorage
        var objFactura={
        fecha:'',
        nombre:'',
        dni:'',
        direccion:'',
        ListadoProductos:[],
        total:''
    }

    // Empezamos a relacionar los input con nuestras variables
    var inputFecha=document.getElementById("inputFecha");
    var inputNombre=document.getElementById("inputNombre");
    var inputDni=document.getElementById("inputDni");
    var inputDireccion=document.getElementById("inputDireccion");

    var tProductos=document.getElementById("tProductos");

    var inputCant=document.getElementById("inputCant");
    var inputProd=document.getElementById("inputProd");
    var inputPrecio=document.getElementById("inputPrecio");
    var btnAgregar=document.getElementById("btnAgregar");
    var tdTotal=document.getElementById("tdTotal");
    var totalFactura=0;

    function obtenerFactura(){
        // obtenemos nuestro objeto en texto de localStorage
        var facturaTexto=localStorage.getItem("objFactura")
        // lo convertimos de nuevo a un objeto
        var facturaJSON=JSON.parse(facturaTexto);
        
        // console.log(facturaJSON);

        var arregloProductos=facturaJSON.ListadoProductos;
        // console.log(arregloProductos);

      
        arregloProductos.forEach(function(productos) {
            var tr=document.createElement("tr");
            // console.log(productos.precioUnitario);
            var td1=document.createElement("td");
            var td2=document.createElement("td");
            var td3=document.createElement("td");
            var td4=document.createElement("td");

            td1.innerHTML=productos.cantidad;
            td2.innerHTML=productos.producto;
            td3.innerHTML=productos.precioUnitario;
            td4.innerHTML=productos.valorVenta;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tProductos.appendChild(tr);
        });
     
    }
    obtenerFactura();


    // estamos cambiando los valores de las propiedades del objeto factura con el valor de los input
    btnAgregar.addEventListener("click",function(){
        objFactura.fecha=inputFecha.value;
        objFactura.nombre=inputNombre.value;
        objFactura.dni=inputDni.value;
        objFactura.direccion=inputDireccion.value;
        console.log(objFactura);

        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        var td2=document.createElement("td");
        var td3=document.createElement("td");
        var td4=document.createElement("td");

        // hemos obtenido los valores de los input y los hemos agregado dentro de cada columna correspondiente para nuestro listado de productos
        td1.innerHTML=inputCant.value;
        td2.innerHTML=inputProd.value;
        td3.innerHTML=inputPrecio.value;
        td4.innerHTML=parseInt(inputCant.value)*parseFloat(inputPrecio.value);

        // aqui cambiaremos 
        totalFactura=totalFactura+(parseInt(inputCant.value)*parseFloat(inputPrecio.value));
        tdTotal.innerHTML=totalFactura;

        objFactura.total=totalFactura;
        // agragamos cada columna ya con su contenido como elemento
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        tProductos.appendChild(tr);

        // creamos un objeto temporal que represente nuestro producto
        var objProducto={
            cantidad: inputCant.value,
            producto:inputProd.value,
            precioUnitario:inputPrecio.value,
            valorVenta: inputCant.value*parseFloat(inputPrecio.value)

        }

        // agreagmos al arreglo de procuctos que tiene nuestro objFactura
        objFactura.ListadoProductos.push(objProducto);
        console.log(objFactura);

        var facturaConvertida=JSON.stringify(objFactura);
        // guardamos nuestro objeto en el localStorage
        localStorage.setItem("objFactura",facturaConvertida);

        // limpia los valores
        inputCant.value="";
        inputProd.value="";
        inputPrecio.value="";
    })
}