using System;

namespace MiPrimeraAplicacion
{
    class Program
    {
        static void Main(string[] args)
        {
            string nombre;
            Console.WriteLine("Ingresa tu nombre:");
            nombre=Console.ReadLine();
            Console.WriteLine($"Hello {nombre} !!!");
            Console.WriteLine("Hello " + nombre + "!");
            Console.WriteLine("Hello {0} {1}!" , nombre, nombre);
            Console.Write("T\ne\nx\nt\no");
            //\n salto de linea
            Console.WriteLine(" mas\ttexto");
            int x;
            //char c;
            //float f;
            Console.WriteLine("Ingresa su edad:");
            x = int.Parse(Console.ReadLine());
            //c = char.Parse(Console.ReadLine());
            //f = float.Parse(Console.ReadLine());
            if (x>17 && x>0)
            {
                Console.WriteLine($"Tienes {x} años, eres mayor de edad");
            }
            else
            {
                Console.WriteLine($"Tienes {x} años, eres menor de edad");
            }

            //

            int numero = int.Parse(Console.ReadLine());
            if ((numero>99 && numero<1000)||(numero<-99 && numero>-1000) )
            {
                Console.WriteLine($"{numero} es de tres cifras");
            }
            else
            {
                Console.WriteLine($"{numero} no es de tres cifras");
            }
        }
    }
}
