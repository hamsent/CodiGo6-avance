using System;

namespace Autor_Libro
{
    class Program
    {
        static void Main(string[] args)
        {
            Autor autor = new Autor("Mark Dougl","mar@gmail.com");
            Libro libro = new Libro("trading en la Zona", 30);
            //toString() es implicito uede ir o no
            Console.WriteLine(autor);
            Console.WriteLine(libro);
            libro.Autor = autor;
            Console.WriteLine(libro);
            
            //podemos crear un autor llamando al constructor del libro
            Libro libro2 = new Libro("La vaca", 40, new Autor("Psicologo", "sser@gmail.com"));
            Console.WriteLine(libro2.Autor.Nombre);
        }
    }
}
