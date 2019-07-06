using System;

namespace funciones_1
{
    class Program
    {
        static void MostrarArreglo(int[] arreglo)
        {
            for (int i=0;i<arreglo.Length;i++)
            {
                Console.Write(arreglo[i]+" ");
            }
            Console.WriteLine();
        }
        static int[] Push(int n,int[] arr)
        {
            MostrarArreglo(arr);
            int[] arregloNuevo = new int[arr.Length + 1];
          
            for(int i=0;i<arr.Length;i++)
            {
                arregloNuevo[i] = arr[i];
            }
            arregloNuevo[arregloNuevo.Length-1]=n;
            arr = arregloNuevo;
            MostrarArreglo(arr);
            return arregloNuevo;
        }

        static int[] Pop(int[] arr)
        {
           if (arr.Length!=0)
            {
                MostrarArreglo(arr);
                int[] eliminarArrerlo = new int[arr.Length - 1];

                for (int i = 0; i < arr.Length - 1; i++)
                {
                    eliminarArrerlo[i] = arr[i];
                }
                arr = eliminarArrerlo;
                MostrarArreglo(arr);
                return eliminarArrerlo;
            }
            else
            {
                Console.WriteLine("arreglo vacio");
                return arr;
            }
            
        }


        static int[] QuitarElemento(int pos, int[] arr)
        {
            if (pos<0 ||pos>arr.Length-1)
            {
                Console.WriteLine("\nPosicion errada");
                return arr;
            }
            MostrarArreglo(arr);
            int[] eliminar = new int[arr.Length-1];
            for (int i = 0, a=0; i < arr.Length-1; i++,a++)
            {
                if (i==pos)
                {
                   
                    eliminar[i] = arr[++a];
                }
                else
                {
                    eliminar[i] = arr[a];
                }
            }
            arr = eliminar;
            MostrarArreglo(arr);
            return eliminar;
        }
        static void Main(string[] args)
        {
            int[] arreglo = { 6, 3, 5, 9, 2, 10, 32, 7 };
            int opcion;
            do
            {
                Console.WriteLine("*******MENU*********");
                Console.WriteLine("1. Funcion Push");
                Console.WriteLine("2. Funcion Pop");
                Console.WriteLine("3. Ordenar el arreglo");
                Console.WriteLine("4. el arreglo es simetrico?");
                Console.WriteLine("5. quitar elemento por posicion");
                Console.WriteLine("6. Salir");
                Console.WriteLine("\ningrese una opción");
                opcion = int.Parse(Console.ReadLine());
                switch (opcion)
                {
                    case 1:
                        Console.WriteLine("Ingrese un numero para el arreglo");
                        int n = int.Parse(Console.ReadLine());
                        arreglo=Push(n,arreglo);
                        break;
                    case 2:
                        Console.WriteLine("Ingrese un numero para el arreglo");
                        
                        arreglo = Pop( arreglo);
                        break;
                    case 3:
                        //OrdenarArreglo();
                        break;
                    case 4:
                        //EsSimetrico();
                        break;
                    case 5:
                        Console.WriteLine("\nIngrese la posicion a eliminar");
                        int pos = int.Parse(Console.ReadLine());
                        arreglo = QuitarElemento(pos, arreglo);
                        
                        break;
                    default:
                        break;
                }
            } while (opcion!=6);
        }
    }
}
