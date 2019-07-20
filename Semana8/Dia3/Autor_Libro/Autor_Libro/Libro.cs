using System;
using System.Collections.Generic;
using System.Text;

namespace Autor_Libro
{
    class Libro
    {
        //variable creado con _ se le identifica como privado _titulo
        string titulo;
        int precio;
        //creando un objeto autor dentro de la clase libro
        Autor autor;

        public Libro(string titulo, int precio)
        {
            this.titulo = titulo;
            this.precio = precio;
        }

        public Libro(string titulo, int precio, Autor autor)
        {
            this.titulo = titulo;
            this.precio = precio;
            this.autor = autor;
        }

        //sobreescritura de la funcion TOSTRING()
        public override string ToString()
        {
            return  $"[Titulo: {titulo} - precio: {precio} - Autor: {autor}]";
        }

        public string Titulo { get => titulo; set => titulo = value; }
        public int Precio { get => precio; set => precio = value; }
        internal Autor Autor { get => autor; set => autor = value; }
    }
}
