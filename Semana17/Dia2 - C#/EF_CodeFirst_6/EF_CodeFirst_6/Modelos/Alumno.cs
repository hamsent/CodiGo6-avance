using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_CodeFirst_6.Modelos
{
    class Alumno
    {
       

        public int id { get; set; }
        public string nombre { get; set; }
        public double ponderado { get; set; }
        public Direccion direccion { get; set; }
       
        public ICollection<Curso> Cursos { get; set; }
    }
}
