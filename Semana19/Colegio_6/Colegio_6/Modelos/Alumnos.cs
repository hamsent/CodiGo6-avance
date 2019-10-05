
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Colegio_6.Modelos
{
    class Alumno
    {
        public int alumno_PK { get; set; }
        public string nombre { get; set; }
        public double promedio { get; set; }

        public Telefono Telefono { get; set; }
        public Direccion Direccion { get; set; }
        public ICollection<Curso> Cursos { get; set; }

        // ALUMNO
        // PROFESOR
        // DIRECCION
        // TELEFONO
        // CURSO
    }
}