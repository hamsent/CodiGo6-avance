using System;
using System.Collections.Generic;

using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Colegio_6.Modelos
{
    class Curso
    {
        public int curso_PK { get; set; }
        public string titulo { get; set; }
        public DateTime fechaDeInicio { get; set; }

        public int profesor_PK { get;set; }
        public ICollection<Alumno> Alumnos { get; set; }
        public Profesor Profesor { get; set; }

    }
}