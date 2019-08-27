
var tablaProductos=$('#listaProductos');
tablaProductos.DataTable({
    "ajax":{
        type:"GET",
        url:"https://5d4b6adb00dbb10014879b12.mockapi.io/productos",
        timeout:1500,
        // dataSrc para que maneje los datos obtenidos de la API  como si se tratara d eun arreglo
        dataSrc:""
    },
    // columns tendra como valor un arreglo con =>[data:nombre_del_campo_de_la_API]
      "columns":[
        {data:"prod_id"},
        {data:"prod_nom"},
        {data:"prod_desc"},
        {data:"prod_prec"},
        {data:"prod_img", 
        render:function(data){
            let imagen=`<img src="${data}" width="100"/>`;
            return imagen;
        }}
        
      ],
      "language":{
        "lengthMenu":"Mostrando_MENU_elementos","search":"Buscar",  "info":           "Mostrando _START_ a _END_ de _TOTAL_ elementos", "paginate": {
            "first":      "Primero",
            "last":       "Final",
            "next":       "Siguiente",
            "previous":   "Anterior"
        },
    }
});
