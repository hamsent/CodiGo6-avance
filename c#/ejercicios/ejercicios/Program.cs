using System;

namespace ejercicios
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Ingrese primra nota");
            //int nota1=int.Parse(Console.ReadLine());
            //Console.WriteLine("Ingrese segunda nota");
            //int nota2 = int.Parse(Console.ReadLine());
            //Console.WriteLine("Ingrese nota aprobatoria");
            //int notaApro = int.Parse(Console.ReadLine());

            //int nota3=notaApro*3-nota1-nota2;

            //if (nota3 > 20)
            //{
            //    Console.WriteLine("Intente le proximo año :)");
            //}
            //else
            //{
            //    Console.WriteLine($"para aprovar necesita{nota3}");
            //}

            //Console.WriteLine("Ingrese primer numero");
            //int num1 = int.Parse(Console.ReadLine());
            //Console.WriteLine("Ingrese segundo numero");
            //int num2 = int.Parse(Console.ReadLine());
            //int suma = 0;
            //for (var i=num1; i <= num2; i++)
            //{
            //    suma = suma + i;
            //}
            //Console.WriteLine($"la suma es {suma}");


            //MULTIPLICACION SIN USAR *
            //Console.WriteLine("Ingrese primer numero");
            //int a = int.Parse(Console.ReadLine());
            //Console.WriteLine("Ingrese segundo numero");
            //int b = int.Parse(Console.ReadLine());
            //int multi = 0;
            //for (var i = 1; i <= b; i++)
            //{
            //    multi = multi + a;
            //}
            //Console.WriteLine($"la multiplicación es {multi}");

            //POTENCIACION SIN *

            //Console.WriteLine("Ingrese primer numero");
            //int a = int.Parse(Console.ReadLine());
            //Console.WriteLine("Ingrese segundo numero");
            //int b = int.Parse(Console.ReadLine());
            //int poten = 0;
            //int poten1 = 0;
            //for (var p = 1; p <= b; p++)
            //{
            //    poten1 = poten1 + poten;
            //    for (var i = 1; i <= b; i++)
            //    {
            //        poten = poten + a;

            //    }
            //}
            //Console.WriteLine($"la multiplicación es {poten1}");

            //for (var y = 1; y <= 10; y++)
            //{
            //    for (var i = 1; i <= 10; i++)
            //    {
            //        Console.Write($"{i * y}\t");
            //    }
            //    Console.WriteLine();
            //}

            //Console.WriteLine("Ingrese numero para determinar la identidad");
            //int a = int.Parse(Console.ReadLine());

            //for (var y=1; y <= a; y++)
            //{
            //    for ( var x=1; x<=a; x++)
            //    {
            //        if (y==x)
            //        {
            //            Console.Write($"{1}\t");
            //        }
            //        else
            //        {
            //            Console.Write($"{0}\t");
            //        }             
            //    }
            //    Console.WriteLine();
            //}



            //Console.WriteLine("Ingrese numeero");
            //int a = int.Parse(Console.ReadLine());

            //for (var y = 1; y <=a; y++)
            //{
            //    for (var x = 1; x <= y; x++)
            //    {
            //        Console.Write($"{x}\t");
            //    }

            //    Console.WriteLine();
            //}
            //for (var y = a; y >= 1; y--)
            //{
            //    for (var x = 1; x <= y-1; x++)
            //    {
            //        Console.Write($"{x}\t");
            //    }

            //    Console.WriteLine();
            //}



            //factorial
            //Console.WriteLine("Ingrese numero");
            //int fact = int.Parse(Console.ReadLine());
            //Int64 cal = 1;
            //for (var i = 1; i <= fact; i++)
            //{
            //    cal = cal * i;
            //}
            //Console.WriteLine($" el factorial de {fact} es {cal}");

            //int[] arregloDeEnteros;
            //int[] arreglo = { 1, 2, 3, 4, 5 };
            //Console.WriteLine(arreglo[4]);

            //NEW serpara espacios en la memoria new int[10] separa 10 espacios
            //int[] array = new int[10];
            //Console.WriteLine(array[5]);

            //array[0]= 10;
            //array[1] = 231;
            //array[5] = 12;

            //foreach(var item in array)
            //{
            //    Console.WriteLine(item);
            //}
            //____________________________________________________

            //Console.WriteLine("Ingrese tamaño de arreglo");
            //int tam = int.Parse(Console.ReadLine());
            //int[] arregloConTamaño = new int[tam];
            //for (int i= 0;  i< arregloConTamaño.Length; i++)
            //{
            //    arregloConTamaño[i] = i*2;

            //}
            //foreach (var elemento in arregloConTamaño)
            //{
            //    Console.Write(elemento + " ");
            //}

            //************************************************************

            //Console.WriteLine("Ingrese tamaño de arreglo");
            //int tam = int.Parse(Console.ReadLine());
            //int[] arregloConTamaño = new int[tam];
            //for (int i = 0; i < arregloConTamaño.Length; i++)
            //{
            //    Console.WriteLine($"Ingrese posicion{i}");

            //    arregloConTamaño[i] = int.Parse(Console.ReadLine());

            //}

            //foreach (var elemento in arregloConTamaño)
            //{
            //if ((elemento % 2) == 0)
            //{
            //        Console.Write("Numeros pares "+ elemento + " ");
            //}
            //}

            //*************************************************************
         
            int[] arregloConTamaño = new int[100];
            for (int i = 0; i<arregloConTamaño.Length; i++)
            {
                arregloConTamaño[i] = i+1;
                Console.WriteLine(arregloConTamaño[i]);

            }

            int cin = 0;
            int sie = 0;
            int ambos = 0;
            foreach (var elemento in arregloConTamaño)
            {
                if (elemento % 5 == 0)
                {
                    cin = cin + 1;
                   
                }
                if (elemento % 7 == 0)
                {
                    sie = sie + 1;
                }
                if (elemento % 5 == 0 && elemento%7==0)
                {
                    ambos = ambos + 1;
                }
            }
            Console.WriteLine("Multiplo de 5 : " + cin + " ");
            Console.WriteLine("Multiplo de 7 : " + sie + " ");
            Console.WriteLine("Multiplo de 5 y 7 : " + ambos + " ");




        }
    }
}
