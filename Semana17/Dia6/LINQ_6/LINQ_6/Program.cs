using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LINQ_6
{
    class Program
    {
        static void Main(string[] args)
        {
            using (BikeStoresEntities context = new BikeStoresEntities())
            {
                foreach (var categoria in context.categories.ToList())
                {
                    Console.WriteLine(categoria.category_name);
                }
                List<int> miLista = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8 };
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
                var empiezaConD = from personal in context.staffs.ToList()
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
                //sql: select * from customers where first_name like  'J%' and email like '%@aol.com' and city='longview'

                //select city from customers
                var ciudades = from c in context.customers.ToList()
                               select new { Ciudad = c.city };
                foreach (var ciudad in ciudades)
                {
                    Console.WriteLine(ciudad.Ciudad);
                }

                // MOSTRAR EL TELÉFONO Y LA TIENDA DEL PERSONAL (STAFFS)
                var telefonoYTienda = from s in context.staffs.ToList()
                                      select new
                                      {
                                          Telefono = s.phone,
                                          Tienda = s.store_id
                                      };

                var telefonoYTiendaX = context.staffs
                   .Select(x => new
                   {
                       Telefono = x.phone,
                       Tienda = x.store_id
                   });

                var clientesOrdenados = from c in context.customers.ToList()
                                        orderby c.first_name descending,
                                        c.last_name ascending
                                        select c;

                var clientesOrdenadosX = context.customers.OrderByDescending(x => x.first_name).ThenBy(x => x.last_name);

                var grupoPorEstado = from clientes in context.customers.ToList()
                                     where clientes.last_name.StartsWith("J")
                                     group clientes by clientes.state into grupo
                                     select grupo;

                //mostar grupos por estadoq
                Console.WriteLine("Grupos de estado: ");
                foreach (var grupos in grupoPorEstado)
                {
                    Console.WriteLine(grupos.Key);
                    foreach (var cliente in grupos)
                    {
                        Console.WriteLine(cliente.last_name);
                    }
                }

                var grupoPorEstadoX = context.customers.GroupBy(x => x.state);
                var joinClienteOrden = from c in context.customers.ToList()
                                       join o in context.orders.ToList()
                                       on c.customer_id equals o.customer_id
                                       select new
                                       {
                                           Cliente = c.first_name,
                                           Orden = o.order_status
                                       };


                var clientX = context.orders.Find(1).order_items;

                // EAGER LOAD

                var clientesConOrdenes = from c in context.customers.Include(x=>x.orders)
                                         select c;

                var ClientesConOrdenesX = context.customers.Include(x => x.orders);
                foreach(var cliente in clientesConOrdenes)
                {
                    Console.WriteLine(cliente.first_name);
                    foreach(var order in cliente.orders)
                    {
                        Console.WriteLine(order.order_status);
                    }
                }


                //MOSTRAR EL NOMBRE DEL PRODUCTO Y SU CATEGORIA AL COSTADO USANDO EAGER LOAD(INCLUDE)


                var productoConCtegoria= from p in context.products.Include(x => x.category)
                                         select p;

                var productoConCtegoriaX = context.products.Include(x => x.category);
                foreach (var producto in productoConCtegoria)
                {
                    Console.WriteLine(producto.product_name + ", CATEGORIA:  "+producto.category.category_name);
                
                }

                // mostrar un empleado con su respectivo JEFE DE la siguiente forma osmar, Jefe: jorge

                var empleadoConJefe = from emp in context.staffs.Include(x=>x.staff1)
                               select emp;
                //var empleadoJEFEX = context.products.Include(x=>);
                foreach(var empleado in empleadoConJefe)
                {
                    if (empleado.staff1==null)
                        Console.WriteLine(empleado.first_name + ", Jefe Supremo");
                    else
                    Console.WriteLine(empleado.first_name+", jefe: "+empleado.staff1.first_name);
                }


                // MOSTRAR UN EMPLEADO CON SUS SUBORDINADOS

                var empleadoConSubordinados = context.staffs.Include(x => x.staffs1);

                foreach (var empleado in empleadoConSubordinados)
                {

                    //Console.WriteLine(empleado.first_name + "\nSubordinados:");
                    //if (!empleado.staffs1.Any())
                    //   Console.WriteLine("No tiene.");
                    //foreach (var subordinado in empleado.staffs1) 
                    //{
                    //   Console.WriteLine(" - " + subordinado.first_name);
                    //}
                }

                // MOSTRAR LAS MARCAS CON TODOS SUS PRODUCTOS QUE 
                // SEAN DEL AÑO 2016, SI NO HAY QUE MUESTRE "SIN PRODUCTOS"

                var marcasConSusProductos = context.brands.Include(x => x.products);
                foreach (var marca in marcasConSusProductos)
                {
                    Console.WriteLine(marca.brand_name);
                    var productosDel2016 =
                       marca.products.Where(x => x.model_year == 2016);
                    if (!productosDel2016.Any())
                        Console.WriteLine("No hay productos");
                    foreach (var item in productosDel2016)
                    {
                        Console.WriteLine(item.product_name);
                    }
                }




            }
        }
    }
}
