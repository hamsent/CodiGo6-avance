using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_CodeFirst_6.Modelos
{
    class Profesor
    {
        public int id { get; set; }
        [Required]
        public string nombre { get; set; }
        public int facultad { get; set; }

        //propiedades de navegacion
        public ICollection<Curso> Cursos { get; set; }
    }
}
