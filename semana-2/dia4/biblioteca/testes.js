const { lerDados, salvarDados } = require("./utils");
const { adicionarLivro, listarLivros, buscarLivroPorId } = require("./livros");
const {
  emprestarLivro,
  devolverLivro,
  listarEmprestimosAtivos,
} = require("./emprestimos");
const { ErroValidacao, ErroNaoEncontrado, ErroNegocio } = require("./erros");
const dadosOriginais = lerDados();

//-------------------------------------------------------------------------------

try {
  const dados = lerDados();
  const livros = dados.livros;
  console.log("Dados lidos:");
  console.log(dados);
  console.log();

  // ----------------------------------------------------------------

  const ids = livros.map((livro) => livro.id);
  let maiorId;
  if (ids.length === 0) {
    maiorId = 0;
  } else {
    maiorId = Math.max(...ids);
  }

  dados.livros.push({
    id: maiorId + 1,
    titulo: "Livro de teste",
    autor: "Autor de teste",
    ano: 2020,
    disponivel: true,
  });

  salvarDados(dados);

  const dadosAtualizados = lerDados();

  console.log("Dados após gravação:");
  console.log(dadosAtualizados);
  console.log();

  // ----------------------------------------------------------------

  const testeLivro1 = adicionarLivro("Dom Casmurro", "Machado de Assis", 1889);
  const testeLivro2 = adicionarLivro("1984", "George Orwell", 1948);
  console.log("Dados de adicionarLivro:");
  console.log(testeLivro1);
  console.log(testeLivro2);
  console.log();

  const buscarLivro1 = buscarLivroPorId(testeLivro1.id);
  const buscarLivro2 = buscarLivroPorId(testeLivro2.id);
  console.log("Dados de buscaLivroPorId:");

  console.log(buscarLivro1);
  console.log(buscarLivro2);
  console.log();
  const livrosCadastrados = listarLivros();

  console.log("Dados de listarLivros:");
  console.log(livrosCadastrados);
  console.log();

  // ----------------------------------------------------------------

  try {
    adicionarLivro("Dom Casmurro", "Machado de Assis", 1889);
  } catch (erro) {
    console.log("Teste de livro duplicado:");
    console.log(erro.name);
    console.log(erro.message);
  }
  console.log();

  try {
    adicionarLivro("", "Machado de Assis", 1889);
  } catch (erro) {
    console.log("Teste de título inválido:");
    console.log(erro.name);
    console.log(erro.message);
  }
  console.log();

  try {
    adicionarLivro("  ", "Machado de Assis", 1889);
  } catch (erro) {
    console.log("Teste de título inválido com espaços:");
    console.log(erro.name);
    console.log(erro.message);
  }
  console.log();

  try {
    adicionarLivro("Livro de teste", "", 2020);
  } catch (erro) {
    console.log("Teste de autor inválido:");
    console.log(erro.name);
    console.log(erro.message);
  }
  console.log();

  try {
    adicionarLivro("Livro de teste", "  ", 2020);
  } catch (erro) {
    console.log("Teste de autor inválido com espaços:");
    console.log(erro.name);
    console.log(erro.message);
  }
  console.log();

  try {
    adicionarLivro("Livro de teste", "Autor de teste", "2020");
  } catch (erro) {
    console.log("Teste de Ano inválido:");
    console.log(erro.name);
    console.log(erro.message);
  }
  console.log();

  try {
    buscarLivroPorId(0);
  } catch (erro) {
    console.log("Teste de livro não encontrado:");
    console.log(erro.name);
    console.log(erro.message);
  }
  console.log();

  // ----------------------------------------------------------------

  const livroParaEmprestimo = adicionarLivro(
    "O Hobbit",
    "J.R.R. Tolkien",
    1937,
  );

  const novoEmprestimo = emprestarLivro(
    livroParaEmprestimo.id,
    "Usuário de teste",
  );

  console.log("Dados de emprestarLivro:");
  console.log(novoEmprestimo);
  console.log();

  try {
    emprestarLivro(livroParaEmprestimo.id, "Outro usuário");
  } catch (erro) {
    console.log("Teste de livro já emprestado:");
    console.log(erro.name);
    console.log(erro.message);
  }
  console.log();

  const livroEmprestado = buscarLivroPorId(livroParaEmprestimo.id);

  console.log("Disponibilidade após empréstimo:");
  console.log(livroEmprestado.disponivel);
  console.log();

  const emprestimosAtivos = listarEmprestimosAtivos();

  console.log("Empréstimos ativos:");
  console.log(emprestimosAtivos);
  console.log();

  const emprestimoDevolvido = devolverLivro(novoEmprestimo.id);

  console.log("Dados de devolverLivro:");
  console.log(emprestimoDevolvido);
  console.log();

  try {
    devolverLivro(emprestimoDevolvido.id);
  } catch (erro) {
    console.log("Teste de devolução duplicada:");
    console.log(erro.name);
    console.log(erro.message);
  }
  console.log();

  console.log(
    "Disponibilidade após devolução:",
    buscarLivroPorId(livroParaEmprestimo.id).disponivel,
  );
  console.log();

  console.log("Empréstimos ativos após devolução:");
  console.log(listarEmprestimosAtivos());
  console.log();

  try {
    devolverLivro(0);
  } catch (erro) {
    console.log("Teste de empréstimo não encontrado:");
    console.log(erro.name);
    console.log(erro.message);
  }
  console.log();
} finally {
  salvarDados(dadosOriginais);
  console.log("Dados originais restaurados.");
  console.log(lerDados());
  console.log();
}
