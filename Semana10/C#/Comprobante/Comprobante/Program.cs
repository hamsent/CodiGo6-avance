using System;
using System.Collections.Generic;

namespace Comprobante
{
    class Program
    {
        static void Main(string[] args)
        {
            //Funcionalidad del sistema
            List<factura> folderDeFacturas = new List<factura>();

            int opcion;
            do
            {
                Console.Clear();
                Console.WriteLine("SISTEMA DE FACTURACION NubeFACT");
                Console.WriteLine("verificado por la SUNAT");
                Console.WriteLine("*********************************");
                Console.WriteLine("1. AGREGAR COMPROBANTE");
                Console.WriteLine("2. REPORTES");
                Console.WriteLine("*********************************");
                Console.WriteLine("\nElija una opción");
                opcion = int.Parse(Console.ReadLine());

                int opcionComprobante;


                if (opcion == 1)
                {
                    do
                    {
                        Console.Clear();
                        Console.WriteLine("MENU DE COMPROBANTES");
                        Console.WriteLine("1. Agregar Factura");
                        Console.WriteLine("2. Agregar Nota de Crédito");
                        Console.WriteLine("3. Agregar Boleta");
                        Console.WriteLine("4. Atras");
                        opcionComprobante = int.Parse(Console.ReadLine());
                        if (opcionComprobante == 1)
                        {
                            //Agregar factura
                            Console.Write("Fecha: ");
                            string fecha = Console.ReadLine();
                            Console.Write("Dirección: ");
                            string direccion = Console.ReadLine();
                            Console.Write("Razon Social: ");
                            string razonSocial = Console.ReadLine();
                            Console.Write("RUC: ");
                            string ruc = Console.ReadLine();
                            factura miFactura = new factura(fecha, direccion, razonSocial, ruc);
                            char respuesta;
                            do
                            {
                                Console.WriteLine("Detalle de Factura (Productos) ");
                                Console.WriteLine("Descripción: ");
                                string descripcion= Console.ReadLine();
                                Console.WriteLine("Cantidad:");
                                int cantidad = int.Parse(Console.ReadLine());
                                Console.WriteLine("Precio Unitario: ");
                                double precioUnitario = double.Parse(Console.ReadLine());

                                Producto miProducto = new Producto(precioUnitario,cantidad,descripcion);
                                miFactura.GetListaDeProductos().Add(miProducto);
                                respuesta = char.Parse(Console.ReadLine());

                            } while (respuesta=='s');

                            folderDeFacturas.Add(miFactura);
                        }

                        //if (opcion == 2)
                        //{
                        //    Console.WriteLine("1. Reporte Facturas");
                        //    Console.WriteLine("2. Reporte Boletas");
                        //    Console.WriteLine("3. Reporte Nota de Crédito");
                        //    Console.WriteLine("4. Reporte Total");
                        //    Console.WriteLine("5. Atras");
                        //}
                        if (opcionComprobante
                            == 4)//mostrar facturas
                        {
                            foreach(var item in folderDeFacturas)
                            {
                                item.MostrarFactura();
                            }
                        }
                        Console.ReadKey();
                    } while (opcionComprobante < 5 && opcionComprobante > 0);
                }
            } while (opcion < 3 && opcion > 0);

        }
    }
}
