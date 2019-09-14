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
             
                var objetos = context.Items.ToList();
                //EL METODO ToList() HACE UNA CONSULTA A LA BD
                foreach (var objeto in objetos)
                {
                    Console.WriteLine(objeto.Description);
                }

                Customer unCliente = new Customer()
                {

                    Name="TECSUP"
                };

                //FUNCION ADD

                context.Customers.Add(unCliente); // funcion add, añade un cliente a la lista de clientes
                context.SaveChanges(); //con esto guarda los datos en la base de datos

                //otra forma de agregar un registro
                context.Items.Add(new Item() { Description = "Un producto nuevo" });


                //BUSCAR CLIENTE
                //BUSQUEDA POR ID
                var cliente10 = context.Customers.Find(10);
                Console.WriteLine(cliente10.CustomerId + " " + cliente10.Name);


                try
                {
                    var cliente500 = context.Customers.Find(500);
                    Console.WriteLine(cliente500.CustomerId + " " + cliente500.Name);
                }
                catch
                {
                    Console.WriteLine("NO SE ENCONTRO EL CLIENTE");
                }


                //ACTUALIZACION DE DATOS
                var cliente1 = context.Customers.Find(1);
                cliente1.Name = "NUEVO NOMBRE DEL CLIENTE";
                context.SaveChanges();

                //BORRADO DE DATOS
                var cliente100 = context.Customers.Find(100);
                //context.Customers.Remove(cliente100);
                context.SaveChanges();


                //ToList() envia una peticion a la base de datos
                var clientes = context.Customers.ToList();
                //EL METODO ToList() HACE UNA CONSULTA A LA BD
                foreach (var cliente in clientes)
                {
                    Console.WriteLine(cliente.Name);
                }


                //FirstOrDefault() devuelve el primer elemento encontrado
                var primerItem = context.Items.FirstOrDefault(x=>x.Description=="Okra");
                Console.WriteLine(primerItem.Description);
                Console.WriteLine("\n\n");
                //EXPRESION 

                var clientesConR = context.Customers.Where(x => x.Name.StartsWith("R")).ToList();
                foreach(var cliente in clientesConR)
                {
                    Console.WriteLine(cliente.Name);
                }

            }
        }
    }
}
