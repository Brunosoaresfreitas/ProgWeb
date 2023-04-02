$(function() {
    $(".datepicker").datepicker({
      dateFormat: "dd/mm/yy", // formato da data
      minDate: 0, // permite apenas datas a partir de hoje
      showTimepicker: true, // mostra o seletor de hora
      timeFormat: "HH:mm", // formato da hora
      hourMin: 8, // permite agendamentos a partir das 8h
      hourMax: 18 // permite agendamentos até as 18h
    });
  });

const form = document.getElementById('agendamento-consulta');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    
    // Cria um objeto com os dados do paciente
    const consulta = {
        datepicker: document.getElementById('datepicker').value,
        medico: document.getElementById('medico').value,
        consulta: document.getElementById('consulta').value,
    };
    
    // Salva o objeto na memória do navegador
    let consultas = JSON.parse(localStorage.getItem('consultas')) || [];
    consultas.push(consulta);
    localStorage.setItem('consultas', JSON.stringify(consultas));

    Swal.fire({
        title: 'Bom trabalho!',
        text: "Consulta agendada com sucesso!",
        icon: 'success',
      }).then(() => {
        window.location.href = "consultas.html";
      });
});
