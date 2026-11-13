/* Etapa 2: erros.js e livros.js
Crie ErroValidacao, ErroNaoEncontrado e ErroNegocio em erros.js. Em livros.js, exporte:

adicionarLivro(titulo, autor, ano): título e autor obrigatórios (texto com algum conteúdo); ano é número; não pode existir livro com o mesmo título e autor. O id é sequencial. Guarda e devolve o livro criado, com disponivel: true.
listarLivros()
buscarLivroPorId(id): lança ErroNaoEncontrado se não existir. */
class ErroValidacao extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "ErroValidacao";
  }
}

class ErroNaoEncontrado extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "ErroNaoEncontrado";
  }
}

class ErroNegocio extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "ErroNegocio";
  }
}

module.exports = { ErroValidacao, ErroNaoEncontrado, ErroNegocio };
