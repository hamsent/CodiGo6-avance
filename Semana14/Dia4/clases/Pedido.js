class NotaPedido extends Comprobante{
    pedido_envio=false;

    constructor(comp_id,comp_fecha,pedido_envio){
        // con super hacemos referencia al padre
        super(comp_id,comp_fecha);
        this.pedido_envio=pedido_envio;

    }
    recalculo(){
        let total=0;
        for(let i=0;i<this.comprobante_detalle.length;i++){
            let cantidad=this.comprobante_detalle[i].detalle_cant;
            let punit=this.comprobante_detalle[i].detalle_punit;
            total+=this.calcularSubTotal(cantidad,punit);

        }
        this.comprobante_total=total;

    }
}