using System;
using System.Collections.Generic;
using System.Text;

namespace Comprobante
{
    class factura : comprobante
    {
        string razonSocial;
        string ruc;

        //base() hereda el constructor del padre
        public factura(string fecha, string direccion, string razonSocial, string ruc) : base(fecha, direccion)
        {
            this.razonSocial = razonSocial;
            this.ruc = ruc;
        }

        public List<Producto> GetListaDeProductos()
        {
            return productos;
        }
        public void MostrarFactura()
        {
            Console.WriteLine("************FACTURA***********");
            Console.WriteLine($"CODIGO: {codigo}");
            Console.WriteLine($"RAZON SOCIAL: {razonSocial}");
            Console.WriteLine($"RUC: {ruc}");
            Console.WriteLine($"DIRECCIÓN: {direccion}");
            Console.WriteLine($"FECHA: {fecha}");
        }

        public string RazonSocial { get => razonSocial; set => razonSocial = value; }
        public string Ruc { get => ruc; set => ruc = value; }
    }
}
