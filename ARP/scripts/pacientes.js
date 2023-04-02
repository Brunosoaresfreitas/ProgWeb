// Recupera os pacientes salvos na memória do navegador
const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];

// Adiciona uma linha na tabela para cada paciente
const tbody = document.getElementById('tbody');
for (const paciente of pacientes) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${paciente.nome}</td>
        <td>${paciente.data_nascimento}</td>
        <td>${paciente.cpf}</td>
        <td>${paciente.endereco}</td>
        <td>${paciente.telefone}</td>
    `;
    tbody.appendChild(tr);
}

document.getElementById("busca").addEventListener("keyup", function() {
    filtrarTabela();
});

function filtrarTabela() {
    var input = document.getElementById("busca");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("tbody");
    var rows = table.getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        var tdNome = rows[i].getElementsByTagName("td")[0];
        var tdCPF = rows[i].getElementsByTagName("td")[2];

        if (tdNome || tdCPF) {
            var nome = tdNome.textContent || tdNome.innerText;
            var cpf = tdCPF.textContent || tdCPF.innerText;

            if (nome.toUpperCase().indexOf(filter) > -1 || cpf.toUpperCase().indexOf(filter) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }       
    }
}
