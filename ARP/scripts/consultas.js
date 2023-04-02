// Recupera os pacientes salvos na memória do navegador
const consultas = JSON.parse(localStorage.getItem('consultas')) || [];

// Adiciona uma linha na tabela para cada paciente
const tbody = document.getElementById('tbody');
for (const consulta of consultas) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${consulta.datepicker}</td>
        <td>${consulta.medico}</td>
        <td>${consulta.consulta}</td>
    `;
    tbody.appendChild(tr);
}