using System;
using System.Collections.Generic;
using System.Text;

namespace Comprobante
{
    class Producto
    {
        double precio;
        int cantidad;
        string descripcion;
        double valorVenta;

        public Producto(double precio, int cantidad, string descripcion)
        {
            this.precio = precio;
            this.cantidad = cantidad;
            this.descripcion = descripcion;
            this.valorVenta = this.precio * this.cantidad;
        }
    }
}
