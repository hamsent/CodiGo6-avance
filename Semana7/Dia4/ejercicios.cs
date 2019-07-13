using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            //4) Se ingresa por teclado una letra imprimir vocal o letra.
            //Console.WriteLine("Ingrese letra:");
            //string letra =Console.ReadLine().ToLower();
            ////letra=letra.ToLower();
            //if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u")
            //    Console.WriteLine(" Es una vocal");
            //else
            //    Console.WriteLine(" No es una vocal");

            //5) Se ingresa por teclado un numero del 1 al 9 y que genere su tabla de multiplicar:
            //Ejemplo > 5 Resultado: 5x1 = 5 5x2 = 10..utilizando métodos.

            //            Console.WriteLine("Ingrese numero del 1 al 9");
            //            int numero = int.Parse(Console.ReadLine());
            //            if (numero > 0 && numero <= 9)
            //                for (int i = 1; i <= numero; i++)
            //                {
            //                    Console.WriteLine(numero + " x " + i + " = " + numero * i);
            //                }
            //            else
            //                Console.WriteLine("El numero a ingresar debe ser del 1 al 9");

            //6) Con solo IFS ingresar por teclado un numero y me indique el día de la semana.
            //Validar si hay errores de dias.

            //Console.WriteLine("Ingrese un numero del 1 al 7");
            //int semana = int.Parse(Console.ReadLine());
            //if (semana>0 && semana <= 7)
            //{
            //    if (semana == 1)
            //        Console.WriteLine("Día Lunes");
            //    else if (semana == 2)
            //        Console.WriteLine("Día Martes");
            //    else if (semana == 3)
            //        Console.WriteLine("Día Miercoles");
            //    else if (semana == 4)
            //        Console.WriteLine("Día Jueves");
            //    else if (semana == 5)
            //        Console.WriteLine("Día Viernes");
            //    else if (semana == 6)
            //        Console.WriteLine("Día Sabado");
            //    else if (semana == 7)
            //        Console.WriteLine("Día Domingo");
            //}
            //else
            //{
            //    Console.WriteLine("El numero ingresado no corresponde a ningun día de la semana");
            //}

            //7) Sistema de Validación de Locutorio telefónico: El costo por llamada local de
            //teléfono FIJO es del 0,2 centavos de sol por minuto y llamada nacional es 0,5
            //centavos de sol por minuto.Si es teléfono CELULAR se incrementa en X2 el costo,
            //es llamada gratuita si es 105,103,106,123.El sistema debe solicitar el tiempo de
            //llamada y el numero a marcar. Y debe imprimir el costo a pagar por esa llamada.           

            Console.WriteLine("ingrese el telefono a llamar: ");
            string telefono = Console.ReadLine();
            
            Console.WriteLine(telefono.Substring(0, 3));


            //Console.WriteLine("ingrese el tiempo de llamada: ");
            //int minutos = int.Parse(Console.ReadLine());
          


        }
    }
}
