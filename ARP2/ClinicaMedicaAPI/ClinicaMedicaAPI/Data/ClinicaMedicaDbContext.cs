using ClinicaMedicaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ClinicaMedicaAPI.Data
{
    public class ClinicaMedicaDbContext : DbContext
    {
        public ClinicaMedicaDbContext(DbContextOptions<ClinicaMedicaDbContext> options)
            : base(options)
        {

        }

        public DbSet<Paciente> Paciente { get; set; }
        public DbSet<Agenda> Agenda { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Paciente>()
                .HasKey(p => p.Id);

            modelBuilder.Entity<Agenda>()
                .HasKey(a => a.Id);
        }
    }
}
