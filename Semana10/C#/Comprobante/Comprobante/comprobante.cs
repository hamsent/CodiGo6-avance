using System;
using System.Collections.Generic;
using System.Text;

namespace Comprobante
{
    class comprobante
    {
        //protected, visible para los hijos, privado para otros
        protected string codigo;//correlativo autogenerado
        protected string fecha;
        protected string direccion;
        protected double montototal; // calculado a partir de los tatales parciales de los productos
        //Siempre se le separa un espacion en la memoria =new List<Producto>();
        protected List<Producto> productos=new List<Producto>();

        public comprobante(string fecha, string direccion)
        {
            this.fecha = fecha;
            this.direccion = direccion;
        }

        public double CalculaMontoTotal()
        {
            return 0;
        }
    }
}
