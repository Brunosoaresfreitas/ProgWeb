namespace ClinicaMedicaAPI.Models
{
    public class Agenda
    {
        public Agenda(int id, string nomeDoMedico, int idPaciente, DateTime horario)
        {
            Id = id;
            NomeDoMedico = nomeDoMedico;
            IdPaciente = idPaciente;
            Horario = horario;
        }

        public int Id { get; private set; }
        public string NomeDoMedico { get; private set; }
        public int IdPaciente { get; private set; }
        public DateTime Horario { get; private set; }
    }
}
