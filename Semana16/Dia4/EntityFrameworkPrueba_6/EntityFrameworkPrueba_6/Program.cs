using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityFrameworkPrueba_6
{
    class Program
    {
        static void Main(string[] args)
        {
            //using crea un bloque que al terminar elimina de la memoria todo lo que habia en este
            using(FACTURAEntities context=new FACTURAEntities())
            {
                // CONTEXT CONTROLAMTODAS LAS ENTIDADES DE LA BD
                var clientes=context.Customers.ToList();
                //EL METODO ToList() HACE UNA CONSULTA A LA BD
                foreach(var cliente in clientes)
                {
                    Console.WriteLine(cliente.Name);
                }
            }
        }
    }
}
