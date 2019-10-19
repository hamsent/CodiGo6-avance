class vehiculo{
    constructor (tipo,marca){
        this.tipo=tipo;
        this.marca=marca
    }
    imprimirVehiculo(){
        consolee.log(`Es un ${this.tipo}  de marca ${this.marca}`);
    }
   
}
class Avion extends Vehiculo{
    constructor(){
        super('Boeing 747','Boeing')
    }
}