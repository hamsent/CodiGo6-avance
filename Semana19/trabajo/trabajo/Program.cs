using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace trabajo
{
    class Program
    {
        static void Main(string[] args)
        {
            using(BikeStoresEntities context=new BikeStoresEntities())
            {

                //1 MOSTRAR LOS PRODUCTOS CON MODELO DEL AÑO 2016

                //var ejercicio1 = from p in context.products.ToList()
                //                 where p.model_year == 2016
                //                 select new
                //                 {
                //                     Nombre = p.product_name,
                //                     Modelo = p.model_year
                //                 };

                //var ejercicio1x = context.products.Where(x => x.model_year == 2016).Select(x => new
                //{
                //    Nombre = x.product_name,
                //    Modelo = x.model_year

                //});
                //foreach(var item in ejercicio1x)
                //{
                //    Console.WriteLine(item.Nombre + " " + item.Modelo);
                //}


                //MOSTRAR PRODUCTOS EN UNA SOLA COLUMNA CON SU RESPECTIVO PRECIO Y AÑO **

                //var product = context.products.Select(x => new
                //{
                //    Nombre=x.product_name + "|" + x.list_price + "|"+x.model_year
                //});

                //foreach(var item in product)
                //{
                //    Console.WriteLine(item.Nombre);
                //}


                //3 MOSTRAR LOS PRODUCTOS CON MODELO PRECIOS 5499.99, 1549.99, 999.99

                //var product = context.products.Where(x => x.list_price ==5499.99m || x.list_price == 1549.99m || x.list_price == 999.99m).Select(x => new
                //{
                //    Nombre = "NOMBRE: "+ x.product_name + " MODELO: " + x.model_year+ " PRECIO: " + x.list_price
                //});

                //foreach (var item in product)
                //{
                //    Console.WriteLine(item.Nombre);
                //}

                //4 MOSTRAR CUÁNTOS CLIENTES TIENEN UN MISMO CÓDIGO POSTAL


                var product = context.products.Where().Select(x => new
                       {
                           Nombre = "NOMBRE: " + x.product_name + " MODELO: " + x.model_year + " PRECIO: " + x.list_price
                       });

                foreach (var item in product)
                {
                    Console.WriteLine(item.Nombre);
                }
            }
        }
    }
}
