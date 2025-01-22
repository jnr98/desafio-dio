// Variável para armazenar as tarefas
let tarefas = [];

// Função para adicionar uma nova tarefa
function adicionarTarefa(nome) {
  tarefas.push(nome); // Adiciona a tarefa ao array
  console.log(`Tarefa "${nome}" adicionada!`);
}

// Função para listar todas as tarefas
function listarTarefas() {
  if (tarefas.length === 0) {
    console.log("Não há tarefas.");
  } else {
    console.log("Lista de Tarefas:");
    tarefas.forEach((tarefa, index) => {
      console.log(`${index + 1}. ${tarefa}`);
    });
  }
}

// Função para remover uma tarefa específica pelo nome
function removerTarefa(nome) {
  const tarefasFiltradas = tarefas.filter(tarefa => tarefa !== nome); // Filtra a tarefa
  if (tarefas.length === tarefasFiltradas.length) {
    console.log(`A tarefa "${nome}" não foi encontrada.`);
  } else {
    tarefas = tarefasFiltradas; // Atualiza o array de tarefas
    console.log(`Tarefa "${nome}" removida!`);
  }
}

// Testando as funções
adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Fazer compras");
listarTarefas();
removerTarefa("Fazer compras");
listarTarefas();
removerTarefa("Ir ao cinema"); // Tentando remover uma tarefa inexistente
