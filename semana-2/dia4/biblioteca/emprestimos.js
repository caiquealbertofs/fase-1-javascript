/* Etapa 3: emprestimos.js

emprestarLivro(livroId, nomeUsuario): o livro precisa existir (ErroNaoEncontrado) e estar disponível (ErroNegocio). Cria o empréstimo com dataEmprestimo, dataDevolucaoPrevista (hoje + 14 dias, em texto ISO) e dataDevolucaoReal: null. Marca o livro como indisponível.
devolverLivro(emprestimoId): o empréstimo precisa existir e ainda não ter sido devolvido. Preenche dataDevolucaoReal e torna o livro disponível de novo.
listarEmprestimosAtivos(): os que têm dataDevolucaoReal igual a null. */
const { lerDados, salvarDados } = require("./utils");
const { ErroNaoEncontrado, ErroNegocio } = require("./erros");

//-------------------------------------------------------------------------------

const emprestarLivro = (livroId, nomeUsuario) => {
  const dados = lerDados();
  const livros = dados.livros;
  const emprestimos = dados.emprestimos;
  const livroEncontrado = livros.find((livro) => livroId === livro.id);

  if (livroEncontrado === undefined) {
    throw new ErroNaoEncontrado("Livro não encontrado");
  }
  if (livroEncontrado.disponivel === false) {
    throw new ErroNegocio("Livro não disponivel");
  }

  const ids = emprestimos.map((emprestimo) => emprestimo.id);
  let maiorId;
  if (ids.length === 0) {
    maiorId = 0;
  } else {
    maiorId = Math.max(...ids);
  }
  const novoId = maiorId + 1;

  const hoje = new Date();
  const dataDevolucaoPrevista = new Date(hoje);

  dataDevolucaoPrevista.setDate(dataDevolucaoPrevista.getDate() + 14);

  const novoEmprestimo = {
    id: novoId,
    livroId: livroId,
    nomeUsuario: nomeUsuario,
    dataEmprestimo: hoje.toISOString(),
    dataDevolucaoPrevista: dataDevolucaoPrevista.toISOString(),
    dataDevolucaoReal: null,
  };

  emprestimos.push(novoEmprestimo);
  livroEncontrado.disponivel = false;
  salvarDados(dados);
  return novoEmprestimo;
};

//-------------------------------------------------------------------------------

const devolverLivro = (emprestimoId) => {
  const dados = lerDados();
  const livros = dados.livros;
  const emprestimos = dados.emprestimos;
  const emprestimoEncontrado = emprestimos.find(
    (emprestimo) => emprestimoId === emprestimo.id,
  );

  if (emprestimoEncontrado === undefined) {
    throw new ErroNaoEncontrado("Emprestimo não encontrado");
  }
  if (emprestimoEncontrado.dataDevolucaoReal !== null) {
    throw new ErroNegocio("Este empréstimo já foi devolvido.");
  }

  const livro = livros.find(
    (livro) => emprestimoEncontrado.livroId === livro.id,
  );

  emprestimoEncontrado.dataDevolucaoReal = new Date().toISOString();
  livro.disponivel = true;
  salvarDados(dados);
  return emprestimoEncontrado;
};

//-------------------------------------------------------------------------------

const listarEmprestimosAtivos = () => {
  const dados = lerDados();
  const emprestimos = dados.emprestimos;

  const emprestimosAtivos = emprestimos.filter(
    (emprestimo) => emprestimo.dataDevolucaoReal === null,
  );

  return emprestimosAtivos;
};

//-------------------------------------------------------------------------------

module.exports = {
  emprestarLivro,
  devolverLivro,
  listarEmprestimosAtivos,
};
