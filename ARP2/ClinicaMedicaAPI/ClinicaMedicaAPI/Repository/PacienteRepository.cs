using ClinicaMedicaAPI.Data;
using ClinicaMedicaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ClinicaMedicaAPI.Repository
{
    public class PacienteRepository : IPacienteRepository
    {
        private readonly ClinicaMedicaDbContext _context;

        public PacienteRepository(ClinicaMedicaDbContext context)
        {
            _context = context;
        }

        public async Task CreateAsync(Paciente paciente)
        {
            await _context.Paciente.AddAsync(paciente);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Paciente>> GetAllAsync()
        {
            return await _context.Paciente.ToListAsync();
        }

        public async Task<Paciente> GetByIdAsync(int id)
        {
            var paciente = await _context.Paciente.SingleOrDefaultAsync(p => p.Id == id);

            if (paciente == null)
            {
                return null;
            }

            return paciente;
        }

        public async Task DeleteAsync(Paciente paciente)
        {
            _context.Paciente.Remove(paciente);
            await _context.SaveChangesAsync();
        }
    }
}
