using ClinicaMedicaAPI.Data;
using ClinicaMedicaAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ClinicaMedicaAPI.Repository
{
    public class AgendaRepository : IAgendaRepository
    {
        private readonly ClinicaMedicaDbContext _context;

        public AgendaRepository(ClinicaMedicaDbContext context)
        {
            _context = context;
        }

        public async Task CreateAsync(Agenda agenda)
        {
            await _context.Agenda.AddAsync(agenda);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Agenda>> GetAllAsync()
        {
            return await _context.Agenda.ToListAsync();
        }

        public async Task<Agenda> GetByIdAsync(int id)
        {
            var agenda = await _context.Agenda.SingleOrDefaultAsync();

            if (agenda == null)
            {
                return null;
            }

            return agenda;
        }

        public async Task DeleteAsync(Agenda agenda)
        {
            _context.Agenda.Remove(agenda);
            await _context.SaveChangesAsync();
        }
    }
}
