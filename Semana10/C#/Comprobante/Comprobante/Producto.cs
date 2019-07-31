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


        public Producto(double precio, int cantidad, string descripcion)
        {
            this.precio = precio;
            this.cantidad = cantidad;
            this.descripcion = descripcion;
        }

        public double Precio { get => precio; set => precio = value; }
        public int Cantidad { get => cantidad; set => cantidad = value; }
        public string Descripcion { get => descripcion; set => descripcion = value; }
    }
}
