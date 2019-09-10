using System;
using System.Collections.Generic;
using System.Text;

namespace ConexionDB_6.Entidades
{
    class Usuario
    {
        string correo;
        string contraseña;
        string nombre;
        DateTime fecha_naci;
        char privilegios;

        public string Correo { get => correo; set => correo = value; }
        public string Contraseña { get => contraseña; set => contraseña = value; }
        public string Nombre1 { get => nombre; set => nombre = value; }
        public DateTime Fecha_naci { get => fecha_naci; set => fecha_naci = value; }
        public char Privilegios { get => privilegios; set => privilegios = value; }
    }
}
