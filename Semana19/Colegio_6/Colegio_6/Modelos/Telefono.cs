﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Colegio_6.Modelos
{
    class Telefono
    {
        public int id { get; set; }
        public string codCiudad { get; set; }
        public string numero { get; set; }

        public Alumno Alumno { get; set; }
 
    }
}