using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_CodeFirst_6.Modelos
{

    [Table("MisAlumnos", Schema ="Administracion")]
    class Alumno
    {
       public Alumno()
        {
            Cursos = new List<Curso>();
        }
        //SNIPPET PROP

        public int CodigoAlumno { get; set; }
        [Required]
        [Column("Nombres y Apellidos",Order =1)]//EL ORDEN COMIENZA EN 0

        public string nombre { get; set; }
        [Column("Nota", Order = 0)]
        public double ponderado { get; set; }
        [NotMapped]
        public int edad { get; set; }


        //PROPIEDADES DE NAVEGACION
        public Direccion direccion { get; set; }
       
        public ICollection<Curso> Cursos { get; set; }
    }
}
