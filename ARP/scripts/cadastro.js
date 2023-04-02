const form = document.getElementById('cadastro-paciente');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    
    // Cria um objeto com os dados do paciente
    const paciente = {
        nome: document.getElementById('nome').value,
        data_nascimento: document.getElementById('data_nascimento').value,
        cpf: document.getElementById('cpf').value,
        endereco: document.getElementById('endereco').value,
        telefone: document.getElementById('telefone').value
    };
    
    // Salva o objeto na memória do navegador
    let pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
    pacientes.push(paciente);
    localStorage.setItem('pacientes', JSON.stringify(pacientes));

    Swal.fire({
        title: 'Bom trabalho!',
        text: "Paciente cadastrado com sucesso!",
        icon: 'success',
      }).then(() => {
        window.location.href = "pacientes.html";
      });
});