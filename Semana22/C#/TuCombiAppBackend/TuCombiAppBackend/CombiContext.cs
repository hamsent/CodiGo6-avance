using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TuCombiAppBackend.Models;

namespace TuCombiAppBackend
{
    public class CombiContext: DbContext
    {
        public CombiContext(DbContextOptions<CombiContext> options):base(options)
        {

        }
        public DbSet<Combi> Combis { get; set; }
    }
}
