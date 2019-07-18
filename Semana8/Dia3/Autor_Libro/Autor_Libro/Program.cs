using System;

namespace Autor_Libro
{
    class Program
    {
        static void Main(string[] args)
        {
            Autor autor = new Autor("Mark Dougl","mar@gmail.com");
            Libro libro = new Libro("trading en la Zona", 30);
            //toString() es implicito 
            Console.WriteLine(autor);
            Console.WriteLine(libro);
            libro.Autor = autor;
            Console.WriteLine(libro);

            Libro libro2 = new Libro("La vaca", 40, new Autor("Psicologo", "sser@gmail.com"));
        }
    }
}
