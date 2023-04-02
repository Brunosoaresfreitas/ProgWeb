const form = document.getElementById('form-medicamento');
const listaMedicamentos = document.getElementById('lista-medicamentos');

// Adicionar medicamento à lista
function adicionarMedicamento(nome, dosagem) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${nome} (${dosagem})</span>
    <button>Remover</button>
  `;
  listaMedicamentos.appendChild(li);
  li.querySelector('button').addEventListener('click', () => {
    li.remove();
  });
}

// Adicionar medicamento ao enviar formulário
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = document.getElementById('nome').value;
  const dosagem = document.getElementById('dosagem').value;
  adicionarMedicamento(nome, dosagem);
  form.reset();
});
