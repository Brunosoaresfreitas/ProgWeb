using ClinicaMedicaAPI.Models;
using ClinicaMedicaAPI.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ClinicaMedicaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AgendaController : ControllerBase
    {
        private readonly IAgendaRepository _agendaRepository;

        public AgendaController(IAgendaRepository agendaRepository)
        {
            _agendaRepository = agendaRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var agendas = await _agendaRepository.GetAllAsync();

            if (agendas == null)
            {
                return NotFound();
            }

            return Ok(agendas);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var agenda = await _agendaRepository.GetByIdAsync(id);

            if (agenda == null)
            {
                return NotFound();
            }

            return Ok(agenda);
        }

        [HttpPost]
        public async Task<IActionResult> Post(Agenda agenda)
        {
            var a = new Agenda(agenda.Id, agenda.NomeDoMedico, agenda.IdPaciente, agenda.Horario);

            await _agendaRepository.CreateAsync(a);

            return CreatedAtAction(nameof(GetById), new { id = a.Id }, agenda);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var agenda = await _agendaRepository.GetByIdAsync(id);

            await _agendaRepository.DeleteAsync(agenda);

            return NoContent();
        }
    }
}
