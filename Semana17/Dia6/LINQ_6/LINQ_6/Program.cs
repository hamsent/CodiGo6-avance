using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQ_6
{
    class Program
    {
        static void Main(string[] args)
        {
            using (BikeStoresEntities context=new BikeStoresEntities())
            {
                foreach(var categoria in context.categories.ToList())
                {
                    Console.WriteLine(categoria.category_name);
                }
                List<int> miLista = new List<int>{ 1,2,3,4,5,6,7,8};
                var pares = miLista.FindAll(x => x % 2 == 0);





                //SINTAXIS DE CONSULTAS(QUERY SYNTAX)

                var query = from cliente in context.customers.ToList()
                            where cliente.state == "NY"
                            select cliente;

                //SELECT * FROM CUSTOMERS WHERE STATE='NY'
                Console.WriteLine("Clases en Nueva York");
                foreach (var item in query)
                {
                    Console.WriteLine(item.first_name + " " + item.last_name);
                }

                //CONSULTA CON LA BASE DE DATOS TODO EL PERSONAL (STAFFS) CUYO APELLIDO EMPIECE CON D.
               // var primeraLetra = cadena.StartsWith("H");
                var empiezaConD =  from personal in context.staffs.ToList()
                            where personal.last_name.StartsWith("D")
                            select personal;
                foreach (var item in empiezaConD)
                {
                    Console.WriteLine(item.last_name + " " + item.first_name);

                }
                //SINTAXIS DE METODOS 
                var empleados = context.staffs.ToList();
                var queryX = empleados.Where(x => x.last_name.StartsWith("D"));
                //var queryX = empleados.Where(empleado => empleado.last_name.StartsWith("D"));

                //consulta todos los clientes cuyo nombre empiece con j y su correo sea del dominio @aol.com y que se de houston

                var misClientes = from cliente in context.customers.ToList()
                                  where cliente.first_name.StartsWith("J") && cliente.email.Contains("@aol.com") && cliente.city == "Houston"
                                  select cliente;




















            }
        }
    }
}
