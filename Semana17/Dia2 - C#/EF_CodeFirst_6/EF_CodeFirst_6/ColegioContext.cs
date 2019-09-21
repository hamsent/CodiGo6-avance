using EF_CodeFirst_6.Modelos;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EF_CodeFirst_6
{
    class ColegioContext : DbContext
    {
        public ColegioContext() : base("name=ConexionColegio")
        {
            Database.SetInitializer
                (new DropCreateDatabaseAlways <ColegioContext>());
        }
        public DbSet<Alumno> Alumnos { get; set; }
        public DbSet<Direccion> Direcciones { get; set; }
        public DbSet<Profesor> Profesores { get; set; }
        public DbSet<Curso> Cursos { get; set; }

    }
}
