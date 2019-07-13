using System;

namespace ejercicios
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Ingrese primer numero");
            //int numero1 = int.Parse(Console.ReadLine());
            //Console.WriteLine("Segundo primer numero");
            //int numero2 = int.Parse(Console.ReadLine());
            //if (numero1 > numero2)
            //    Console.Write("El primer numero es mayor, y su suma es {0}", numero1 + numero2);
            //else
            //    Console.Write("El segundo numero es mayor, y su siferencia es {0}", numero2 - numero1);



            //Se ingresa por teclado un número positivo de uno o dos dígitos(1..99) mostrar un
            //mensaje indicando si el número tiene uno o dos dígitos.

            //Console.WriteLine("Ingrese número: ");
            //int numero = int.Parse(Console.ReadLine());
            //if (numero > 0 && numero < 10)
            //    Console.WriteLine("El numero " + numero + " es de un digito");
            //if (numero>9 && numero < 100)
            //    Console.WriteLine("El numero " + numero + " es de dos digitos");

            //Se ingresa por teclado un número imprimir si es positivo o negativo.  

            //Console.WriteLine("Ingrese número: ");
            //int numero = int.Parse(Console.ReadLine());
            //if (numero > 0)
            //    Console.WriteLine("El numero " + numero + " es positivo");
            //else if(numero < 0)
            //    Console.WriteLine("El numero " + numero + " es negativo");
            //else
            //    Console.WriteLine("El numero " + numero + " no es positivo ni es negativo");

            //Se ingresa por teclado una letra imprimir vocal o letra.

            Console.WriteLine("Ingrese letra: ");
            string letra=Console.ReadLine();
            Console.WriteLine(letra);
            if (letra == char."a" && letra == "e" && letra == "i" && letra == "o" && letra == "u")
                Console.WriteLine(letra + " es una vocal");
        
         

        }

    }
}
