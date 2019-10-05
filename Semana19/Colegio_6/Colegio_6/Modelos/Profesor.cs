using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Colegio_6.Modelos
{
    class Profesor
    {
        public int profesor_PK { get; set; }
        public string nombre { get; set; }
        public int facultad { get; set; }


        public Telefono Telefono { get;set; }
        public ICollection<Curso> Cursos { get; set; }

    }
}