// =================================
// TEORIA — APENAS PARA ESTUDO
// =================================

// Um objeto é uma coleção de propriedades no formato chave: valor.
// Use objetos quando os dados têm significado e nomes próprios.
const pessoa = {
  nomeTeoria: "João",
  idade: 25,
  cidade: "São Paulo",
  empregado: true,
};

// Acessando propriedades.
console.log(pessoa.nomeTeoria); // "João" - notacao de ponto
console.log(pessoa["idade"]); // 25 - notacao de colchetes (util quando a chave e dinamica)

// Modificando propriedades.
pessoa.idade = 26;
console.log(pessoa.idade);

// Adicionando novas propriedades.
pessoa.email = "joão@email.com";
console.log(pessoa);

// Removendo propriedades.
delete pessoa.empregado;
console.log(pessoa);

// Verificando se uma propriedade existe.
console.log("nomeTeoria" in pessoa); // true
console.log("salario" in pessoa); // false

// =================================
// MÉTODOS DENTRO DE OBJETOS
// =================================

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  ligar: () => {
    console.log("Vrum!");
  },
  descricao: function () {
        // Use function() para acessar o próprio objeto com this.
    return `${this.marca} ${this.modelo} ${this.ano}`;
  },
};

carro.ligar();
console.log(carro.descricao());

// =================================
// DESTRUCTURING — EXTRAINDO PROPRIEDADES EM VARIÁVEIS
// =================================

const { nomeTeoria, idade, cidade } = pessoa;
console.log(nomeTeoria); // "João"
console.log(idade); // 26
console.log(cidade); // "São Paulo"

// Destructuring com renomeação.

const { nomeTeoria: nomeCompleto, idade: anos } = pessoa;
console.log(nomeCompleto); // "João"
console.log(anos); // 26

// =================================
// SPREAD OPERATOR — COPIANDO E MESCLANDO OBJETOS
// =================================
const endereco = { rua: "Av. Paulista", numero: 1000 };
const pessoaCompleto = { ...pessoa, ...endereco };
console.log(pessoaCompleto);

// Copiando um objeto sem compartilhar a referência.
const copia = { ...pessoa };
copia.nomeTeoria = "Maria";
console.log(pessoa.nomeTeoria); // "João" — o original não foi alterado.
console.log(copia.nomeTeoria); // "Maria"

// =================================
// ARRAY DE OBJETOS — MUITO USADO NO MERCADO
// =================================

const produtosTeoria = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 10 },
  { id: 2, nome: "Mouse", preco: 80, estoque: 50 },
  { id: 3, nome: "Teclado", preco: 150, estoque: 25 },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 5 },
];

// Combinando com métodos de array.
const caros = produtosTeoria.filter((p) => p.preco > 200);
console.log(caros);

const nomes = produtosTeoria.map((p) => p.nome);
console.log(nomes); // ["Notebook", "Mouse", "Teclado", "Monitor"]

const totalEstoque = produtosTeoria.reduce((acc, p) => acc + p.estoque, 0);
console.log(totalEstoque); // 90

// =================================
// EXERCÍCIOS
// =================================

/*
EXERCÍCIO 1 — Cadastro de usuários:
Crie um objeto usuario com as propriedades nome, email, idade, plano
(ex.: "GRATUITO") e ativo (boolean).
Depois:
- Imprima nome e email usando destructuring.
- Atualize o plano para "PREMIUM".
- Adicione ultimoAcesso com a data de hoje como string.
- Imprima o objeto completo atualizado.
*/
console.log("===== EXERCICIO 1 - CADASTRO DE USUARIOS ======");
const usuario = {
  nome: "Roberto Alberto Barbosa Santos",
  email: "robertoabs@email.com",
  idade: 19,
  plano: "GRATUITO",
  ativo: true,
};

const { nome, email } = usuario;
console.log(nome);
console.log(email);

usuario.plano = "PREMIUM";
usuario.ultimoAcesso = "16/09/26";

console.log(usuario);

/*
EXERCÍCIO 2 — Sistema de produtos:
Crie um array produtos com pelo menos cinco objetos, cada um com nome, preço
e categoria (ex.: "ELETRONICO", "ROUPA", "ALIMENTO"). Depois:
- Use filter para listar os produtos de uma categoria específica.
- Use map para criar um array apenas com os nomes dos produtos.
- Use find para encontrar um produto pelo nome.
- Use reduce para calcular o valor total dos produtos.
- Imprima todos os resultados.
*/
console.log("===== EXERCICIO 2 - SISTEMA DE PRODUTOS =====");
const produtos = [
  { id: 1, nome: "Pão", preco: 5.0, categoria: "Alimento" },
  { id: 2, nome: "Tomate", preco: 6.0, categoria: "Alimento" },
  { id: 3, nome: "Queijo", preco: 10.0, categoria: "Alimento" },
  { id: 4, nome: "Detergente", preco: 8.5, categoria: "Limpeza" },
  { id: 5, nome: "Sabão em Pó", preco: 12.99, categoria: "Limpeza" },
];

let alimentos = produtos.filter((p) => p.categoria == "Alimento");
console.log(alimentos);

let nomeProdutos = produtos.map((p) => p.nome);
console.log(nomeProdutos);

let tomate = produtos.find((p) => p.nome === "Tomate");
console.log(tomate);

let valorTotal = produtos.reduce((a, n) => a + n.preco, 0);
console.log(valorTotal);

/*
EXERCÍCIO 3 — Agenda de contatos:
Crie um array contatos com pelo menos cinco objetos, cada um com nome,
telefone e favorito (boolean). Depois:
- Use filter para listar apenas os contatos favoritos.
- Use map para criar uma lista no formato "NOME: JOAO | TEL: 11999999999".
- Use find para buscar um contato pelo nome.
- Imprima todos os resultados.
*/
console.log("===== EXERCICIO 3 - CONTATOS =====");
const contatos = [
  { id: 1, nome: "Caique", numero: "11911111111", favorito: true },
  { id: 2, nome: "Erick", numero: "11922222222", favorito: false },
  { id: 3, nome: "Giovani", numero: "11933333333", favorito: true },
  { id: 4, nome: "Victão", numero: "11944444444", favorito: false },
  { id: 5, nome: "Victor", numero: "11955555555", favorito: true },
];

let favoritos = contatos.filter((c) => c.favorito == true);
console.log(favoritos);

let lista = contatos.map((c) => `NOME: ${c.nome} | TEL: ${c.numero}`);
console.log(lista);

let giovani = contatos.find((c) => c.nome === "Giovani");
console.log(giovani);

// O exercício adicional foi movido para exercicio-adicional.js.
