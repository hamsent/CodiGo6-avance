using System;
using System.Collections.Generic;
using System.Text;

namespace ConexionDB_6.Entidades
{
    class Usuario
    {
        string nombre;
        string clave;

        public string Nombre { get => nombre; set => nombre = value; }
        public string Clave { get => clave; set => clave = value; }
    }
}
