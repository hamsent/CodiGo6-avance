// function Auto(placa,color,marca){
//     this.placa=placa;
//     this.color=color;
//     this.marca=marca;
// }

// var camioneta=new Auto("EH-4648","rojo","Hyundai");
// Auto.prototype.resume=function(){
//     console.log("")
// }
// console.log(camioneta);
 class Comprobante{
     comprobante_id=0;
     comprobante_fecha=new Date();
     comprobante_total=0;
     comprobante_detalle=[];

     constructor(comp_id,comp_fecha){
        this.comprobante_id=comp_id;
        this.comprobante_fecha=comp_fecha;
     }

     anadirDetalle(ObjProducto){
        //  ObjDeetalle sera un objeto, porque puede contenre varios campos, id,nombre:_prod,precio_unitario,
     
    this.comprobante_detalle.push(ObjProducto)
    }

    mostraFechaComprobante(){
        console.log(this.comprobante_fecha);
    }

    mostrarComrobante(){
        // solo this, hace referencia al objeto que se acava de crear
        console.log("Resumen comprobante", this);
    }

    calcularSubTotal(cantidad,precio_unit){
      
        return cantidad*precio_unit;
    }
 }