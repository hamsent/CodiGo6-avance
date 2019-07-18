using System;
using System.Collections.Generic;
using System.Text;

namespace Autor_Libro
{
    class Autor
    {
        string nombre;
        string email;

        public Autor(string nombre, string email)
        {
            this.nombre = nombre;
            this.email = email;
        }
        public override string ToString()
        {
            return $"[Nombre: {nombre} - email: {email}]";
        }
        public string Nombre { get => nombre; set => nombre = value; }
        public string Email { get => email; set => email = value; }
    }
}
