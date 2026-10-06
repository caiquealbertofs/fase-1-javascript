// =================================
// TEORIA - apenas para estudo
// =================================

// Objeto e uma colecao de propriedades no formato chave: valor
// Use quando os dados tem significado e nome proprio
const pessoa = {
  nomeTeoria: "João",
  idade: 25,
  cidade: "São Paulo",
  empregado: true,
};

/* Acessando propriedades */
console.log(pessoa.nomeTeoria); // "João" - notacao de ponto
console.log(pessoa["idade"]); // 25 - notacao de colchetes (util quando a chave e dinamica)

/* Modificando propriedades */
pessoa.idade = 26;
console.log(pessoa.idade);

/* Adicionando novas propriedades */
pessoa.email = "joão@email.com";
console.log(pessoa);

/* Removendo propriedades */
delete pessoa.empregado;
console.log(pessoa);

/* Verificando se uma propriedade existe */
console.log("nomeTeoria" in pessoa); //true
console.log("salario" in pessoa); //false

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
    //use function() para acessar o proprio objeto com this
    return `${this.marca} ${this.modelo} ${this.ano}`;
  },
};

carro.ligar();
console.log(carro.descricao());

// =================================
// DESTRUCTURING — extrair propriedades em variaveis
// =================================

const { nomeTeoria, idade, cidade } = pessoa;
console.log(nomeTeoria); // "João"
console.log(idade); // 26
console.log(cidade); // "São Paulo"

/* Destructuring com renomeacao */

const { nomeTeoria: nomeCompleto, idade: anos } = pessoa;
console.log(nomeCompleto); // "João"
console.log(anos); // 26

// =================================
// SPREAD OPERATOR — copiar e mesclar objetos
// =================================
const endereco = { rua: "Av. Paulista", numero: 1000 };
const pessoaCompleto = { ...pessoa, ...endereco };
console.log(pessoaCompleto);

/* Copiar objeto sem referencia */
const copia = { ...pessoa };
copia.nomeTeoria = "Maria";
console.log(pessoa.nomeTeoria); // "João" - original nao foi alterado
console.log(copia.nomeTeoria); // "Maria"

// =================================
// ARRAY DE OBJETOS — o mais usado no mercado
// =================================

const produtosTeoria = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 10 },
  { id: 2, nome: "Mouse", preco: 80, estoque: 50 },
  { id: 3, nome: "Teclado", preco: 150, estoque: 25 },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 5 },
];

/* Combinando com metodos de array */
const caros = produtosTeoria.filter((p) => p.preco > 200);
console.log(caros);

const nomes = produtosTeoria.map((p) => p.nome);
console.log(nomes); // ["Notebook", "Mouse", "Teclado", "Monitor"]

const totalEstoque = produtosTeoria.reduce((acc, p) => acc + p.estoque, 0);
console.log(totalEstoque); // 90

// =================================
// EXERCICIOS
// =================================

/* EXERCICIO 1 - CADASTRO DE USUARIOS: CRIE UM OBJETO USUARIO COM PROPRIEDADES: NOME, EMAIL, IDADE, PLANO(EX.: "GRATUITO") E ATIVO(BOOLEAN). DEPOIS: IMPRIMA O NOME E EMAIL USANDO DESTRUCTURING, ATUALIZE O PLANO PARA "PREMIUM", ADICIONE UMA PROPRIEDADE ULTIMOACESSO COM A DATA DE HOJE COMO STRING, IMPRIMA O OBJETO COMPLETO ATUALIZADO */
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

/* EXERCICIO 2 - SISTEMA DE PRODUTOS: CRIE UM ARRAY PRODUTOS COM PELO MENOS 5 OBJETOS, CADA UM COM NOME, PRECO E CATEGORIA (EX.: "ELETRONICO", "ROUPA", "ALIMENTO"). DEPOIS: USE .FILTER() PARA LISTAR SO OS PRODUTOS DE UMA CATEGORIA ESPECIFICA, USE .MAP() PARA CRIAR UM ARRAY SO COM OS NOMES DOS PRODUTOS, USE .FIND() PARA ENCONTRAR UM PRODUTO PELO NOME, USE .REDUCE() PARA CALCULAR O VALOR TOTAL DE TODOS OS PRODUTOS IMPRIMA TODOS OS RESULTADOS */
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

/* EXERCICIO 3 - AGENDA DE CONTATOS: CRIE UM ARRAY CONTATOS COM PELO MENOS 5 OBJETOS, CADA UM COM NOME, TELEFONE E FAVORITO(BOLEAN). DEPOIS: USE .FILTER() PARA LISTAR SO OS CONTATOS FAVORITOS, USE .MAP() PARA CRIAR UMA LISTA FORMATADA "NOME: JOAO | TEL: 11999999999", USE .FIND() PARA BUSCAR UM CONTATO PELO NOME E IMPRIMA TUDO */
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

/* O exercicio adicional foi movido para exercicio-adicional.js. */
