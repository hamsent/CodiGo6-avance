
// de un pequeño sistema de mantenimiento  de vehiculos
//vamos a definir un objeto vehiculocon variables,arreglos para agrupar
// var objVehiculo1 = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     color: "Rojo",
//     anio: 2018,
//     mantenimiento:[
//         {
//             fecha: '01-01-2019',
//             observaciones:'Sin observaciones',
//             kilometraje: 9000
//         },
//         {
//             fecha: '02-05-2019',
//             observaciones:'Se observo un raspon',
//             kilometraje: 10000
//         }
//     ],
//     verVehiculo: function(){
//         console.log(this);
//     },
//     mostrarMantenimientos: function(){
//         // this va a hacer referencia a mi propio objeto
//         for (i=0;i<this.mantenimiento.length;i++){
//             console.log(`El mantenimiento ${[i]} se llevo a cabo el ${this.mantenimiento[i].fecha} con un kilometraje de ${this.mantenimiento[i].kilometraje} y tiene las siguientes obs. ${this.mantenimiento[i].observaciones}`);
//         }
//     }
// }
// objVehiculo1.verVehiculo();
// var mantenimientoAdicional={
//     fecha:'26-06-2019',
//     observaciones:'Estaba cochino, no lo lavan',
//     kilometraje:11000
// }
// objVehiculo1.mantenimiento.push(mantenimientoAdicional);
// objVehiculo1.mostrarMantenimientos();

// cree un carrito de compras que tenga NombredeUsuario y una propiedad Productos que sea un arreglo donde guarde todos los productos con NombredeProducto, cantidad y precio y una funcion que me devuelva todos
// Recuerde hacer this para hacer referencia a un objeto

var objPersona={
    nombre: 'Ronald',
    dni: 44565456
}

var objCarrito = {
    nombreUsuario: objPersona.nombre,
    productos:[
        {
            nombreProducto: 'Gaseosa',
            cantidad:100,
            precio: 800
        },
        {
            nombreProducto: 'Galletas',
            cantidad:500,
            precio: 560
        },
        {
            nombreProducto: 'Mantequilla',
            cantidad:20,
            precio: 67
        }
    ],
    mostrarProductos: function(){
        // this va a hacer referencia a mi propio objeto
        console.log(`USUARIO : ${objCarrito.nombreUsuario} \nDNI: ${objPersona.dni} \n**************************************` );
        var suma=0;
        for (i=0;i<this.productos.length;i++){
            console.log(`PRODUC.Nro. ${[i+1]}: ${this.productos[i].nombreProducto}.\nCANTIDAD: ${this.productos[i].cantidad}.\nPRECIO: S/. ${this.productos[i].precio} soles.`);
            suma=suma+this.productos[i].precio;
        }
        console.log(`TOTAL: S/. ${suma} soles.\n**************************************`);
    }
}
objCarrito.mostrarProductos();