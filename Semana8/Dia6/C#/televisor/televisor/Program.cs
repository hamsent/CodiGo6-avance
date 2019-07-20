using System;

namespace televisor
{
    class Program
    {
        static void Main(string[] args)
        {
           
            Televisor nuevo = new Televisor();
            //Console.WriteLine(nuevo);
            nuevo.ComprobarConsumo();
            nuevo.PrecioFinal();
            nuevo.CtrRemoto.Apagar();
            Console.WriteLine(nuevo);
        }
    }
}
