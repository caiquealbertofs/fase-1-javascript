/* Etapa 4: index.js
Demonstração: adiciona 4 livros, empresta 2, devolve 1, lista os empréstimos ativos, e provoca de propósito dois erros (emprestar um livro já emprestado; adicionar um livro duplicado). Cada erro vai dentro de try/catch e imprime uma mensagem clara usando erro.name e erro.message. */
const { adicionarLivro } = require("./livros");
const {
  emprestarLivro,
  devolverLivro,
  listarEmprestimosAtivos,
} = require("./emprestimos");

const livro1 = adicionarLivro("O Hobbit", "J.R.R. Tolkien", 1937);
const livro2 = adicionarLivro("A Revolução dos Bichos", "George Orwell", 1945);
const livro3 = adicionarLivro("Capitães da Areia", "Jorge Amado", 1937);
const livro4 = adicionarLivro("O Alienista", "Machado de Assis", 1882);

const emprestimoMariana = emprestarLivro(livro3.id, "Mariana Oliveira");
const emprestimoRafael = emprestarLivro(livro4.id, "Rafael Mendes");

devolverLivro(emprestimoMariana.id);

console.log(listarEmprestimosAtivos());

try {
  emprestarLivro(livro4.id, "Camila Rodrigues");
} catch (erro) {
  console.log(erro.name);
  console.log(erro.message);
}
try {
  adicionarLivro("Capitães da Areia", "Jorge Amado", 1937);
} catch (erro) {
  console.log(erro.name);
  console.log(erro.message);
}
