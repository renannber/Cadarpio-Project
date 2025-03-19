// Simulação de adição de itens de pedido

// Seleciona todos os botões que possuem a classe 'adicionar'
const botoesAdicionais = document.querySelectorAll('.adicionar');

// Seleciona a lista onde os itens do pedido serão exibidos
const listaPedido = document.getElementById('lista-pedido');

// Seleciona o elemento que exibirá o valor total do pedido
const totalElemento = document.getElementById('total');

// Cria variável que armazena o total do pedido
let total = 0;

// Percorre todos os botões 'adicionar' e adiciona um evento de clique em cada um
botoesAdicionais.forEach((botao) => {
  botao.addEventListener('click', () => {
    // Obtém o elemento pai do botão
    const produto = botao.parentElement;

    // Obtém o nome do produto a partir do texto da tag <h3>
    const nome = produto.querySelector('h3').textContent;

    // Obtém o preço do produto, removendo o texto 'R$' e converte o valor para decimal
    const preco = parseFloat(produto.querySelector('.preco').textContent.replace("R$ ", ""));

    // Obtém um novo item de lista <li> para adicionar o produto ao pedido
    const itemPedido = document.createElement('li');
    itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

    // Adiciona o item criado à lista de pedidos
    listaPedido.appendChild(itemPedido);

    // Atualiza o total da compra
    total += preco;

    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
  });
});

// Simula finalização do pedido
const botaoFinalizarPedido = document.getElementById('finalizar-pedido');
botaoFinalizarPedido.addEventListener("click", () => {
  alert("Pedido Finalizado com sucesso! " + totalElemento.textContent);

  // Limpa a lista de pedidos e reseta o total
  listaPedido.innerHTML = '';
  total = 0; 

  // Atualiza o total no elemento
  totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`; 
});
