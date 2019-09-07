using System;

namespace ejercicio
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            int a,b;
            a=int.Parse(Console.ReadLine());
            b = int.Parse(Console.ReadLine());

            int[] lista = { 1, 2, 3, 4, 5, 6 };
            try //acciones que intentamos hacer y pueden dar una excepcion
            {
                Console.WriteLine(a / b);

                Console.WriteLine(lista[7]);

            }
            catch (DivideByZeroException dbzEx)
            {
                Console.WriteLine("No se puede dividir entre cero"); //lanzar la excepcion
                //throw;
                //enviar mensaje al administrador sobre la excepcion
                Console.WriteLine("Desea enviar los detalles al admin? s/n");
                char opc = char.Parse(Console.ReadLine());
                if (opc == 's')
                    Console.WriteLine(dbzEx.StackTrace);
                else if (opc == 'n')
                    Console.WriteLine("No se envio nada");
            }
            catch(IndexOutOfRangeException loorEx)
            {
                Console.WriteLine("te fuiste muy lejos");
            }
            Console.WriteLine("el programa funciona despues de la excepcion");

            // CREAR UN ARREGLO CON 5 ELEMENTOS Y MOSTRAR LA POSICION 7
           
         
        }
    }
}
