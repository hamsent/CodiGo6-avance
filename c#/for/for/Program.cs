using System;

namespace Clasefor
{
    class Program
{
    static void Main(string[] args)
    {
        for (int i = 1; i <= 12; i++)
        {
            Console.WriteLine($"{i} * 9 = {i * 9}");
        }
            int con = 1;
            for ( int impar =1; con<=20; impar=impar+2) 
            {
                con = con + 1;
                Console.WriteLine(impar);
            }


            Console.WriteLine("Ingrese cantidad de numeros: ");
            int tope = int.Parse(Console.ReadLine());
            int suma = 0;
            for (int i=1; i <= tope; i++)
            {
                suma = suma + (i * 3);
            }
            Console.WriteLine($"La suma de los {tope} numeros multiplos de 3 es: {suma}");
        }
}
}
