/*
PRIMEIRA TAREFA 
Primeiro faça uma correções da Semana 1,
Depois uma revisão cirúrgica.
O objetivo hoje não é aprender coisa nova. É fechar os pontos que ficaram abertos. 
*/

/*
SEGUNDA TAREFA 
Tarefa 2 — Exercícios de revisão

Escreve do zero, sem consultar os arquivos anteriores:

1. Crie uma função calcularDesconto(preco, percentual) que retorna o preço final após o desconto. Lance erro se o percentual for maior que 100 ou menor que 0.

2. Crie um array de 6 produtos com nome, preco e categoria. Use filter, map e reduce encadeados para: filtrar só os de uma categoria, pegar só os nomes e contar quantos são.

3. Crie uma função async buscarDados(url) que faz fetch, verifica se a resposta é ok, e lança erro com a mensagem "Falha na requisição: ${status}" se não for. Teste com uma URL válida e uma inválida.

4. Escreva a diferença entre Promise.all e Promise.allSettled em comentários com um exemplo de quando usar cada um.
*/

// Exercicio 1
const calcularDesconto = (preco, percentual) => {
  if (percentual > 100 || percentual < 0) {
    throw new Error(`${percentual} — Percentual Incorreto`);
  }

  return preco - (preco / 100) * percentual;
};

console.log(calcularDesconto(2849, 20));

// Exercicio 2
const produtos = [
  { nome: "Teclado", preco: 120, categoria: "eletrônicos" },
  { nome: "Mouse", preco: 80, categoria: "eletrônicos" },
  { nome: "Caderno", preco: 25, categoria: "papelaria" },
  { nome: "Caneta", preco: 5, categoria: "papelaria" },
  { nome: "Monitor", preco: 900, categoria: "eletrônicos" },
  { nome: "Mochila", preco: 150, categoria: "acessórios" },
];

const filtrarProdutos = (produtos, categoria) => {
  return produtos
    .filter((produto) => produto.categoria === categoria)
    .map((produto) => produto.nome)
    .reduce((total) => total + 1, 0);
};

console.log(filtrarProdutos(produtos, "eletrônicos"));

// Exercicio 3
const buscarDados = async (url) => {
  const resposta = await fetch(url);
  if (!resposta.ok) {
    throw new Error(`Falha na requisição: ${resposta.status}`);
  }
  return resposta.ok;
};

buscarDados("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((dados) => console.log("Dados válidos:", dados))
  .catch((erro) => console.error(erro.message));

buscarDados("https://pokeapi.co/api/v2/pokemon/naoexiste")
  .then((dados) => console.log("Dados inválidos:", dados))
  .catch((erro) => console.error(erro.message));

// Exercicio 4
/*
Promise.all = busca concorrente que assim que uma da erro para
exemplo de uso: uma função na qual deseja-se saber se todas as passagens de um onibus foram vendidas
*/
/*
Promise.allSettled = busca concorrente que busca todas mesmo que de erro
exemplo de uso: uma função que busca quais acentos de um onibus ainda não foram preenchidos 
*/
