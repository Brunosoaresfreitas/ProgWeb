using ClinicaMedicaAPI.Models;

namespace ClinicaMedicaAPI.Repository
{
    public interface IAgendaRepository
    {
        Task<List<Agenda>> GetAllAsync();
        Task<Agenda> GetByIdAsync(int id);
        Task CreateAsync(Agenda agenda);
        Task DeleteAsync(Agenda agenda);
    }
}
