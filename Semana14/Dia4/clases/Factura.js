class Factura extends Comprobante{
    factura_igv_porcentaje=0;
    factura_igv_total=0;

    constructor(comp_id,comp_fecha,fact_igv){
        // accedemos al constructor de comprobante y setearemos sus propiedades
        super(comp_id,comp_fecha);
        this.factura_igv_porcentaje=fact_igv;
    
    
    }

    // este metodo recalculara tanto el total del comprobante como el total del igv

    recalculo(){
        let total=0;
        // iterara por cada producto
        for(let i=0;i<this.comprobante_detalle.length;i++){
            // total+=this.calcularSubTotal(this.comprobante_detalle[i].cantidad,this.comprobante_detalle[i].prec_unit)

            let cantidad=this.comprobante_detalle[i].detalle_cant;
            let precio_unit=this.comprobante_detalle[i].detalle_punit;
            total+=this.calcularSubTotal(cantidad,precio_unit);
            // console.log("com "+ total);
        }
        this.factura_igv_total=total*this.factura_igv_porcentaje/100;
        this.comprobante_total=total;
    }
}