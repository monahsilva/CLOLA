using CLOLA.Model;
using Microsoft.EntityFrameworkCore;

namespace CLOLA.Data
{
    public partial class AplicationContext : DbContext
    {
        public AplicationContext(DbContextOptions<AplicationContext> options)
            : base(options)
        {
        }
        public DbSet<Pet> Pets { get; set; }

        public DbSet<Owner> Owners { get; set; }

        public DbSet<TypeService> TypeServices { get; set; }

        public DbSet<Appointment> Appointments { get; set; }
    }
}
