using ClinicaMedicaAPI.Models;
using ClinicaMedicaAPI.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Diagnostics;

namespace ClinicaMedicaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacienteController : ControllerBase
    {
        private readonly IPacienteRepository _pacienteRepository;

        public PacienteController(IPacienteRepository pacienteRepository)
        {
            _pacienteRepository = pacienteRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var pacientes = await _pacienteRepository.GetAllAsync();

            if (pacientes == null)
            {
                return NotFound();
            }

            return Ok(pacientes);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var paciente = await _pacienteRepository.GetByIdAsync(id);

            if (paciente == null)
            {
                return NotFound();
            }

            return Ok(paciente);
        }

        [HttpPost]
        public async Task<IActionResult> Post(Paciente paciente)
        {
            var p = new Paciente(paciente.Id, paciente.Nome, paciente.DataNascimento, paciente.Cpf, paciente.Endereco, paciente.Telefone);
            await _pacienteRepository.CreateAsync(paciente);

            return CreatedAtAction(nameof(GetById), new { id = p.Id }, paciente);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var paciente = await _pacienteRepository.GetByIdAsync(id);

            await _pacienteRepository.DeleteAsync(paciente);

            return NoContent();
        }
    }
}
