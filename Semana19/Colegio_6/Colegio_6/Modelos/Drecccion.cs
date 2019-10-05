using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Colegio_6.Modelos
{
    class Direccion
    {

        public int id { get; set; }
        public string calle { get; set; }
        public int numero { get; set; }
        public Alumno Alumno { get; set; }

    }
}