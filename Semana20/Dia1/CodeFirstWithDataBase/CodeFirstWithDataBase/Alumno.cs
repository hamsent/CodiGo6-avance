using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeFirstWithDataBase
{ 

    [Table("Alumnos")]
    public class Alumno
    {
        public int id { get; set; }
        [MaxLength(20)]
        public string nombre { get; set; }
        public int? nota { get; set; }  //? significa que puede ser nulo
        public string sobrenombre { get; set; }

    }
}
