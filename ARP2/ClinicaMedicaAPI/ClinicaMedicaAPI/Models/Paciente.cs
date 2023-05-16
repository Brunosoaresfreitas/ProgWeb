namespace ClinicaMedicaAPI.Models
{
    public class Paciente
    {
        public Paciente(int id, string nome, DateTime dataNascimento, string cpf, string endereco, string telefone)
        {
            Id = id;
            Nome = nome;
            DataNascimento = dataNascimento;
            Cpf = cpf;
            Endereco = endereco;
            Telefone = telefone;
        }

        public int Id { get; private set; }
        public string Nome { get; private set; }
        public DateTime DataNascimento { get; private set; }
        public string Cpf { get; private set; }
        public string Endereco { get; private set; }
        public string Telefone { get; private set; }
    }
}
