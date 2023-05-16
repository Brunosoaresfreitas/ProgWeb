using ClinicaMedicaAPI.Models;

namespace ClinicaMedicaAPI.Repository
{
    public interface IPacienteRepository
    {
        Task<List<Paciente>> GetAllAsync();
        Task<Paciente> GetByIdAsync(int id);
        Task CreateAsync(Paciente paciente);
        Task DeleteAsync(Paciente paciente);
    }
}
