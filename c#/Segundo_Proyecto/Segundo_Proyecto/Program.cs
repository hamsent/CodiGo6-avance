using System;

namespace Segundo_Proyecto
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingrese Opción");
            string tarjeta = Console.ReadLine();
            double monto = double.Parse(Console.ReadLine());
            switch(tarjeta)
            {
                case "ripley":
                    Console.WriteLine($"El monto a pagar es: {monto * 0.85}");
                    break;
                case "saga":
                    Console.WriteLine($"El monto a pagar es: {monto * 0.80}");
                    break;
                case "bcp":
                    Console.WriteLine($"El monto a pagar es: {monto * 0.90}");
                    break;
                default:
                   Console.WriteLine("No tiene tarjeta");
                    break;

            }


            Console.WriteLine("Ingrese Primer numero");
            float numero1 = float.Parse(Console.ReadLine());
            Console.WriteLine("Ingrese Segundo numero");
            float numero2 = float.Parse(Console.ReadLine());
            Console.WriteLine("Operador");
            Char operador = char.Parse(Console.ReadLine());

            switch (operador)
            {
                case '*':
                    Console.WriteLine($"{numero1} {operador} {numero2} = {numero1*numero2}");
                    break;
                case '/':
                    if (numero2 == 0)
                    {
                        Console.WriteLine("no se puede dividir entre cero");
                        break;
                    }
                    Console.WriteLine($"{numero1} {operador} {numero2} = {numero1 / numero2}");
                    break;
                case '+':
                    Console.WriteLine($"{numero1} {operador} {numero2} = {numero1 + numero2}");
                    break;
                case '-':
                    Console.WriteLine($"{numero1} {operador} {numero2} = {numero1 - numero2}");
                    break;
                default:
                    Console.WriteLine("operador incorrecto");
                    break;
            }
           


        }
    }
}
