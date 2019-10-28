export interface iProductos {
    id:number;
    nombre: string;
    descripcion: string;
    precio: number;
    // stock es una propiedad opcional
    stock?: number;
}