using System;

namespace caracteres
{
    class Program
    {
        static void Main(string[] args)
        {
            string nombre = "Christian";
            char primeraInicial = 'C';

            char[] arregloNombre = nombre.ToCharArray();
            char c = 'C';
            char.IsLetter(primeraInicial);
            char.IsDigit(c);

            //string palabra = Console.ReadLine();
            //char[] arreglo = palabra.ToCharArray();
            //double costo= 0;
            //for (int i = 0; i < arreglo.Length; i++)
            //{
            //    char letra = arreglo[i];

            //    if (char.IsLetter(letra))
            //       costo +=0.1;
            //    if (char.IsDigit(letra))
            //        costo += 0.15;
            //    if (char.IsSymbol(letra))
            //        costo += 0.2;
            //    if (char.IsPunctuation(letra))
            //        costo += 0.2;
            //}
            //Console.WriteLine("el costo del mensaje es " + costo);

            //string palabra = Console.ReadLine();
            //char[] arreglo = palabra.ToCharArray();

            //for (int i = 0; i < arreglo.Length; i++)
            //{
            //    //if (i % 2 == 0)
            //    if (arreglo[i] == 'a')
            //    Console.Write(char.ToUpper(arreglo[i]='@'));
            //    else if(arreglo[i]=='e')
            //        Console.Write(char.ToLower(arreglo[i]='3'));
            //    else
            //        Console.Write(char.ToLower(arreglo[i]));
            //}

            string palabra = Console.ReadLine();
            char[] arreglo = palabra.ToCharArray();
            bool a = false, e = false, i = false, o = false, u = false;
            
            for (int cont = 0; cont < arreglo.Length; cont++)
            {
                char.ToLower(arreglo[cont]);
                if (arreglo[cont] == 'a')
                    a=true;
                if (arreglo[cont] == 'e')
                    e=true;
                if (arreglo[cont] == 'i')
                    i=true;
                if (arreglo[cont] == 'o')
                    o=true;
                if (arreglo[cont] == 'u')
                    u=true;
            }
            if (a&&e&&i&&o&&u)
                Console.WriteLine("es panvocalica");
            else
                Console.WriteLine("no es panvocalica");
        }
    }
}
