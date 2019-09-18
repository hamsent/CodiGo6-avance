using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_CodeFirst_6.Modelos
{
    class Curso
    {
        public int id { get; set; }
        public string titulo { get; set; }
        public DateTime fechaDeInicio { get; set; }
        
        public ICollection<Alumno> Alumnos { get; set; }
        public Profesor Profesor { get; set; }

    }
}
