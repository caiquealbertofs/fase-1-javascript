/* Etapa 2: erros.js e livros.js
Crie ErroValidacao, ErroNaoEncontrado e ErroNegocio em erros.js. Em livros.js, exporte:

adicionarLivro(titulo, autor, ano): título e autor obrigatórios (texto com algum conteúdo); ano é número; não pode existir livro com o mesmo título e autor. O id é sequencial. Guarda e devolve o livro criado, com disponivel: true.
listarLivros()
buscarLivroPorId(id): lança ErroNaoEncontrado se não existir. */
const { lerDados, salvarDados } = require("./utils");
const { ErroValidacao, ErroNaoEncontrado, ErroNegocio } = require("./erros");

const adicionarLivro = (titulo, autor, ano) => {
  if (typeof titulo !== "string" || titulo.trim() === "") {
    throw new ErroValidacao("Titulo deve ser preenchido");
  }
  if (typeof autor !== "string" || autor.trim() === "") {
    throw new ErroValidacao("Autor deve ser preenchido");
  }
  const tituloLimpo = titulo.trim();
  const autorLimpo = autor.trim();
  if (typeof ano !== "number") {
    throw new ErroValidacao("Ano dever ser um Number");
  }
  const dados = lerDados();
  const livros = dados.livros;
  if (
    livros.some(
      (livroExistente) =>
        livroExistente.titulo === tituloLimpo &&
        livroExistente.autor === autorLimpo,
    )
  ) {
    throw new ErroNegocio("Este livro já está cadastrado.");
  }
  const ids = livros.map((livro) => livro.id);
  let maiorId;
  if (ids.length === 0) {
    maiorId = 0;
  } else {
    maiorId = Math.max(...ids);
  }
  const novoId = maiorId + 1;
  const novoLivro = {
    id: novoId,
    titulo: tituloLimpo,
    autor: autorLimpo,
    ano: ano,
    disponivel: true,
  };
  livros.push(novoLivro);
  salvarDados(dados);
  return novoLivro;
};
//-------------------------------------------------------------------------------
const listarLivros = () => {
  const dados = lerDados();
  const livros = dados.livros;
  return livros;
};
//-------------------------------------------------------------------------------
const buscarLivroPorId = (id) => {
  const dados = lerDados();
  const livros = dados.livros;
  const livroEncontrado = livros.find((livro) => id === livro.id);
  if (livroEncontrado === undefined) {
    throw new ErroNaoEncontrado("Livro não encontrado");
  }
  return livroEncontrado;
};

module.exports = { adicionarLivro, listarLivros, buscarLivroPorId };
