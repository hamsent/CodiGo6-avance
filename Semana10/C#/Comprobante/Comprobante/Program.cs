using System;
using System.Collections.Generic;

namespace Comprobante
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Factura> folderDeFacturas = new List<Factura>();
            int opcion;
            do
            {
                Console.Clear();
                Console.WriteLine("SISTEMA DE FACTURACION NubeFACT");
                Console.WriteLine("Verificado por la SUNAT");
                Console.WriteLine("1 AGREGAR COMPROBANTE");
                Console.WriteLine("2 REPORTES");
                Console.WriteLine("3 Salir");
                Console.WriteLine("\nElija una opción");
                opcion = int.Parse(Console.ReadLine());
                int opcionComprobante;
                if (opcion == 1)
                {
                    do
                    {
                        Console.Clear();
                        Console.WriteLine("MENU DE COMPROBANTES");
                        Console.WriteLine("1 AGREGAR FACTURA");
                        Console.WriteLine("2 AGREGAR NOTA DE CRÉDITO");
                        Console.WriteLine("3 AGREGAR BOLETA DE VENTA");
                        Console.WriteLine("4 Ver facturas");
                        opcionComprobante = int.Parse(Console.ReadLine());
                        if (opcionComprobante == 1) // AGREGAR FACTURA
                        {
                            // DATOS PARA LA FACTURA
                            Console.Clear();
                            Console.WriteLine("Ingresar datos de factura");
                            Console.Write("Razon Social: ");
                            string razonSocial = Console.ReadLine();
                            Console.Write("RUC: ");
                            string ruc = Console.ReadLine();
                            Console.Write("Fecha: ");
                            string fecha = Console.ReadLine();
                            Console.Write("Direccion: ");
                            string direccion = Console.ReadLine();

                            Factura miFactura = new Factura(fecha,
                               direccion, razonSocial, ruc);
                            char respuesta;
                            do
                            {
                                Console.WriteLine("Detalle de Factura (Productos)");
                                Console.Write("Descripcion: ");
                                string descripcion = Console.ReadLine();
                                Console.Write("Cantidad: ");
                                int cantidad = int.Parse(Console.ReadLine());
                                Console.Write("Precio Unitario: ");
                                double precioUnitario = double.Parse(Console.ReadLine());

                                Producto miProducto = new Producto(precioUnitario,
                                   cantidad, descripcion);

                                miFactura.GetListaDeProductos().Add(miProducto);
                                Console.WriteLine("Se agregó el producto." +
                                   "¿Desea agregar otro? s/n");
                                respuesta = char.Parse(Console.ReadLine());
                            } while (respuesta == 's');

                            folderDeFacturas.Add(miFactura);
                        }
                        if (opcionComprobante == 4) // MOSTRAR FACTURAS
                        {
                            foreach (var item in folderDeFacturas)
                            {
                                item.MostrarFactura();
                            }
                            Console.ReadKey();
                        }
                    } while (opcionComprobante < 5 && opcionComprobante > 0);
                }
            } while (opcion < 3 && opcion > 0);
            // MENÚ


        }
    }
}
