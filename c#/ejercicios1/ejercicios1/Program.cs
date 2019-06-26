using System;

namespace ejercicios1
{
    class Program
    {
        static void Main(string[] args)
        {
            //Escribir los N últimos números impares desde 100
            //Console.WriteLine("Ingrese cantidad de numeros impares que desea ver:");
            //int cantidad = int.Parse(Console.ReadLine());
            //for (int i=100; i<=100+cantidad*2;i++)
            //{
            //    if (i % 2 != 0)
            //    {
            //        Console.WriteLine(i);
            //    }

            //}
            //Imprimir suma de los números intermedios de dos números

            //Console.WriteLine("Ingrese primer numero");
            //int a = int.Parse(Console.ReadLine());
            //Console.WriteLine("Ingrese segundo numero");
            //int b = int.Parse(Console.ReadLine());
            //int suma = 0;
            //for(int i=(a+1); i<b;i++)
            //{
            //    suma = suma + i;
            //}
            //Console.WriteLine($"La suma entre los números {a} y {b} es {suma}");


            //  Dado 3:
            //           1
            //         2   3
            //       4   5   6
            //     7   8   9   10
            //  11  12   13  14  15
            //Console.WriteLine("Ingrese numero:");
            //int numero = int.Parse(Console.ReadLine());

            //for (int x = 1; x <= numero * 2; x++)
            //{
            //    for (int y = 1; y <= numero * 2; y++)
            //    {
            //        if (num)
            //            Console.Write($"a");
            //    }
            //    Console.Write($"{x}");
            //    Console.WriteLine("\n");

            //}


            // int[] arreglo = { 45, 3, 45, 2, 3, 3, 9, 10 };
            // Dado un arreglo con datos:
            // Sumar los elementos.
            //Obtener media de elementos
            //Obtener el lemento más grande
            //Copia de un arreglo a otro
            //Revertir arreglo

            int[] arreglo = { 45, 3, 45, 2, 3, 3, 9, 10 };
            int suma = 0;
            int mayor = 0;
            int[] arreglo1 = new int[arreglo.Length];
            int[] arreglo3 = new int[arreglo.Length];

            Console.WriteLine(arreglo);
            for (int i = 0;  i < arreglo.Length; i++)
            {
                suma = suma + arreglo[i];

                if (mayor < arreglo[i])
                {
                    mayor = arreglo[i];
                }
                arreglo1[i] = arreglo[i];
                Console.Write($"{arreglo1[i]},");


            }
            Console.Write("Copia de ARREGLO a ARREGLO1 \n");

            Console.WriteLine($" La suma de los elementos es : {suma}");
            Console.WriteLine($" la media de los elementos es : {suma / arreglo.Length}");
            Console.WriteLine($" el numero mayor del arreglo es : {mayor}");
            Console.WriteLine(arreglo1);
            var cont = 1;
            
            for (int i = 1; i <= arreglo.Length; i++)
            { 
                arreglo3[i-1] = arreglo[arreglo.Length - i];
                Console.Write($"{arreglo3[i-1]}  ");
                cont = 0;

            }
            Console.WriteLine();



            //Insertar N elementos de la numeración Fibonacci
            //1 1 2 3 5 8 13 21 34

            Console.WriteLine("ingrese elementos de la numeracion fibonacci");
            int numero = int.Parse(Console.ReadLine());
            int[] arr = new int[numero];
            int primero = 0;
            int segundo = 1;
            int siguiente;
            Console.Write($"{primero}  ");
            Console.Write($"{segundo}  ");
            for (int i = 2; i <numero; i++)
            {
                siguiente = primero + segundo;
                Console.Write($"{siguiente}  ");
                primero = segundo;
                segundo = siguiente;
            }



            //Potenciación sin multiplicación
            // MULTIPLICACIÓN SIN USAR EL OPERADOR *

            //            int num1 = int.Parse(Console.ReadLine());
            //int num2 = int.Parse(Console.ReadLine());
            //int resultado = 0;
            //for (int i = 1; i <= num1; i++)
            //{
            //   resultado = resultado + num2;
            MostrarMayor(23, 45);

        }
       

        static void MostrarMayor(int numero1,int numero2)
        {
            if (numero1 > numero2)
            {
                Console.WriteLine($"El mayo es {numero1}");
            }
            else
            {
                Console.WriteLine($"El mayo es {numero2}");
            }
        }

       
    }

}
