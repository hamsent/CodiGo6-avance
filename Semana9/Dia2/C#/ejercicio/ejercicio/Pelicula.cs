using System;
using System.Collections.Generic;
using System.Text;

namespace ejercicio
{
    class Pelicula
    {
        int id;
        string titulo;
        string genero;
        double precio;
        int disponibilidad;
        string puntuacion;
        int estreno;

       
        public Pelicula(int id, string titulo, string genero, double precio, int disponibilidad, string puntuacion, int estreno)
        {
            this.id = id;
            this.titulo = titulo;
            this.genero = genero;
            this.precio = precio;
            this.disponibilidad = disponibilidad;
            this.puntuacion = puntuacion;
            this.estreno = estreno;
        }

        public Pelicula()
        {
            this.id = 1;
            this.titulo = "Corazón Valiente";
            this.genero = "Drama";
            this.precio = 10;
            this.disponibilidad = 10;
            this.puntuacion = "5 estrellas";
            this.estreno = 2002;
        }

        public int Id { get => id; set => id = value; }
        public string Titulo { get => titulo; set => titulo = value; }
        public string Genero { get => genero; set => genero = value; }
        public double Precio { get => precio; set => precio = value; }
        public int Disponibilidad { get => disponibilidad; set => disponibilidad = value; }
        public string Puntuacion { get => puntuacion; set => puntuacion = value; }
        public int Estreno { get => estreno; set => estreno = value; }


        //List<Pelicula> lista = new List<Pelicula>();
        //public void Guardar(Pelicula modelo)
        //{
        //    lista.Add(modelo);
        //}
        //public List<Pelicula> Consultar()
        //{
        //    return lista;
        //}
        public void peliculaDisponible()
        {
            if (this.Disponibilidad >=1)
            {
                Console.WriteLine("ID: "+this.id);
                Console.WriteLine("TITULO: " + this.Titulo);
                Console.WriteLine("GENERO: " + this.Genero);
                Console.WriteLine("PRECIO: " + this.Precio);
                Console.WriteLine("DISPONIBILIDAD: " + this.Disponibilidad);
                Console.WriteLine("ESTRENO: " + this.Estreno);
            }
            else
            {
                Console.WriteLine("no hay peliculas disponibles");
            }
        }

        public void verificarDisponibilidad()
        {

        }
    }
}
