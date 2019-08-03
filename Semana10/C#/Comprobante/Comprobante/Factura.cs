using System;
using System.Collections.Generic;
using System.Text;

namespace Comprobante
{
    class Factura : comprobante
    {
        string razonSocial;
        string ruc;

        public Factura(string fecha, string direccion,
           string razonSocial, string ruc)
           : base(fecha, direccion)
        {
            this.razonSocial = razonSocial;
            this.ruc = ruc;
        }

        public List<Producto> GetListaDeProductos()
        {
            return productos;
        }

        public void MostrarFactura() // PUEDE SER LA FUNCION TOSTRING()
        {
            Console.WriteLine($"***********FACTURA************");
            Console.WriteLine($"* Codigo: {codigo}\t\t\t*");
            Console.WriteLine($"* Razon Social: {razonSocial}\t\t\t*");
            Console.WriteLine($"* RUC: {ruc}                 *");
            Console.WriteLine($"* Direccion: {direccion}     *");
            Console.WriteLine($"* Fecha: {fecha}             *");
            Console.WriteLine($"* Detalle:                   *");
            Console.WriteLine($"* Cant.  Descripcion  Precio *");
            foreach (var item in productos)
            {
                //Console.WriteLine($"* {item.cantidad} {item.descripcion}")
            }

            Console.WriteLine($"******************************");
            Console.WriteLine();

        }

        public string RazonSocial { get => razonSocial; set => razonSocial = value; }
        public string Ruc { get => ruc; set => ruc = value; }
    }
}
