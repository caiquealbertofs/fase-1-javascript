console.log("Primeiro dia começando!");

// =================================
// TEORIA - apenas para estudo
// =================================

/* 3 formas de declarar variaveis */
var nome = "João"; // antiga, evitar isso
let idadeExemplo = 25; // use quando o valor pode mudar
const pais = "Brasil"; // use quando o valor não vai mudar

/* Os tipos de dados Basicos */
let texto = "Olá mundo"; // string - textos
let numero = 42; // number - numeros
let preco = 9.99; // number - decimais tambem
let ativo = true; // boolean - true ou false
let vazio = null; // null - ausencia intencional de valor
let indefinido = undefined; // undefined - valor nao definido

// DICA: interpolação de variaveis e o jeito moderno de se fazer, utilizando `` e `${}`

// =================================
// EXERCICIOS
// =================================

/* EXERCICIO 1 - CADASTRO: CRIE VARIAVEIS PARA REPRESENTAR UMA PESSOA COM ESSAS INFORMACOES*/
let nomeCompleto = "João Silva";
let idade = 25;
let cidade = "São Paulo";
let empregado = true;
let salario = 3500;

console.log(`
  Nome: ${nomeCompleto}
  Idade: ${idade} anos
  Cidade: ${cidade}
  Empregado: ${empregado}
  Salário: ${salario}
`);
/* EXERCICIO 2 - INFORMAÇÃO: montar uma frase com as variaveis ja existentes dentro de uma variavel */
let statusEmprego = empregado ? "está empregado" : "não está empregado"; // operador ternario, que e basicamente uma estrutura compacta para uma tomada de decisao que avalia uma condicao e retorna um de dois valores possiveis.

let descricao = `${nomeCompleto} tem ${idade} anos, mora em ${cidade} e atualmente ${statusEmprego} com salário de R$ ${salario}`;

console.log(descricao);
