/* 
1- Some todos os ano. Esperado: 5840
2- Descubra o livro mais antigo, devolvendo o objeto inteiro. Esperado: o objeto de “O Hobbit”. Dica: o acumulador não precisa ser um número.
3- Conte os livros por autor. Esperado: { Tolkien: 2, Orwell: 1 }
*/

const livros = [
  { titulo: "O Hobbit", autor: "Tolkien", ano: 1937 },
  { titulo: "A Sociedade do Anel", autor: "Tolkien", ano: 1954 },
  { titulo: "1984", autor: "Orwell", ano: 1949 },
];

const somarAnos = (array) => {
  const soma = array.reduce((acumulador, item) => {
    const total = acumulador + item.ano;
    return total;
  }, 0);
  return soma;
};
console.log(somarAnos(livros));

const livroMaisAntigo = (array) => {
  const MaisAntigo = array.reduce((acumulador, item) => {
    const acumuladorEhMaisAntigo = acumulador.ano < item.ano;
    if (acumuladorEhMaisAntigo === true) {
      return acumulador;
    } else {
      return item;
    }
  }, array[0]);
  return MaisAntigo;
};
console.log(livroMaisAntigo(livros));

const contarLivroPorAutor = (array) => {
  const autores = {};
  const LivroPorAutor = array.reduce((acumulador, livro) => {
    const chave = livro.autor;
    acumulador[chave] = (acumulador[chave] || 0) + 1;
    return acumulador;
  }, autores);
  return LivroPorAutor;
};
console.log(contarLivroPorAutor(livros));
