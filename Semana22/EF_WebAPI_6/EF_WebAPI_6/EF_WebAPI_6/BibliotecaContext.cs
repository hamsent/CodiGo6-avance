using EF_WebAPI_6.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EF_WebAPI_6
{
   public class BibliotecaContext : DbContext
   {
      public BibliotecaContext
         (DbContextOptions<BibliotecaContext> options) : base (options)
      {

      }

      public DbSet<Autor> Autores { get; set; }

   }
}
