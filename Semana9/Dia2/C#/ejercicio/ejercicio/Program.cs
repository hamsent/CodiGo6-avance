using System;

namespace ejercicio
{
    class Program
    {
        static void Main(string[] args)
        {
            //Ejecutar();
            //            Control de ventas de películas
            //1Hacer un menu

            //    int opcion
            //    (do -while)
            //    1 ver peliculas disponibles
            //    2 verificar disponibilidad
            //    3 comprar pelicula
            //    4 devolver película
            //    5 peliculas populares
            //2 Crear una clase Pelicula
            //2.1 Atributos: id, titulo, precio, disponibilidad, puntuacion
            //3 Arreglo de películas
            //4 Funciones:
            //            4.1 - 2 Foreach de peliculas con disponibilidad
            //4.3 Reducir stock
            //4.4 Aumenta stock
            //4.5 Ordenamiento por puntuacion
            Pelicula[] arrayPelicula= new Pelicula[10];
            //Pelicula peli = new Pelicula();
            arrayPelicula[0] = new Pelicula(1,"Piratas 1","accion",12,12,1,2010);
            //Pelicula[] peli = new Pelicula[]; 

           

            int opc = 0;
            do
            {
                Console.WriteLine("******************************");
                Console.WriteLine("1 ver peliculas disponibles");
                Console.WriteLine("2 verificar disponibilidad");
                Console.WriteLine("3 comprar pelicula");
                Console.WriteLine("4 devolver película");
                Console.WriteLine("5 peliculas populares");
                Console.WriteLine("6 Salir");
                Console.WriteLine("******************************");
                Console.WriteLine("Ingrese su Opción");
                opc=int.Parse(Console.ReadLine());
                
                switch (opc)
                {
                    case 1:
                        Console.WriteLine("opcion 1");
                        peli.peliculaDisponible();
                        break;
                    case 2:
                        Console.WriteLine("opcion 2");
                        break;
                    case 3:
                        Console.WriteLine("opcion 3");
                        break;
                    case 4:
                        Console.WriteLine("opcion 4");
                        break;
                    case 5:
                        Console.WriteLine("opcion 5");
                        break;
                    default:
                        Console.WriteLine("opcion equivocada");
                        break;

                }

            } while (opc!=6);

           
        }
        //private static void Ejecutar()
        //{
        //    Pelicula dato = new Pelicula();
        //    char opcion = ' ';
        //    do
        //    {
        //        Pelicula modelo = new Pelicula();
        //        Console.WriteLine("Digite el ID dela Película");
        //        modelo.Id = int.Parse(Console.ReadLine());

        //        Console.WriteLine("Digite el título de la Película");
        //        modelo.Titulo = Console.ReadLine();
               
        //        Console.WriteLine("Digite el género de la Película");
        //        modelo.Genero = Console.ReadLine();

        //        Console.WriteLine("Digite el precio de la Película");
        //        modelo.Precio =double.Parse(Console.ReadLine());

        //        Console.WriteLine("Digite el disponibilidad de la Película");
        //        modelo.Disponibilidad = Console.ReadLine();

        //        Console.WriteLine("Digite el puntuación de la Película");
        //        modelo.Puntuacion = Console.ReadLine();

        //        Console.WriteLine("Digite el estreno de la Película");
        //        modelo.Estreno = int.Parse(Console.ReadLine());

        //        dato.Guardar(modelo);;
        //        Console.WriteLine("Desea añadir otrapelicula?");
        //        opcion = char.Parse(Console.ReadLine());

        //    } while (opcion.Equals('s') || opcion.Equals('S'));
        //    foreach (Pelicula item in dato.Consultar())
        //    {
        //        Console.WriteLine("ID: " + item.Id);
        //        Console.WriteLine("TÍTULO: " + item.Titulo);
        //        Console.WriteLine("GÉNERO: " + item.Genero);
        //        Console.WriteLine("PRECIO: " + item.Precio);
        //        Console.WriteLine("DISPONIBILIDAD: " + item.Disponibilidad);
        //        Console.WriteLine("PUNTUACIÓN: " + item.Puntuacion);
        //        Console.WriteLine("ESTRENO: " + item.Estreno);
        //        Console.WriteLine("**************************************************");
        //    }
        //    Console.ReadLine();
        //}
    }
}
