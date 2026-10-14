console.log("Primeiro dia começando!");

// =================================
// TEORIA — APENAS PARA ESTUDO
// =================================

// Três formas de declarar variáveis
var nome = "João"; // Forma antiga; evite usar.
let idadeExemplo = 25; // Use quando o valor puder mudar.
const pais = "Brasil"; // Use quando o valor não mudar.

// Tipos de dados básicos
let texto = "Olá mundo"; // string: textos
let numero = 42; // number: números inteiros
let preco = 9.99; // number: números decimais
let ativo = true; // boolean: true ou false
let vazio = null; // null: ausência intencional de valor
let indefinido = undefined; // undefined: valor não definido

// Dica: use crases e ${} para interpolar variáveis.

// =================================
// EXERCÍCIOS
// =================================

/*
EXERCÍCIO 1 — Cadastro:
Crie variáveis para representar uma pessoa com as informações solicitadas.
*/
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
/*
EXERCÍCIO 2 — Informação:
Monte uma frase em uma variável usando as variáveis já existentes.
*/
let statusEmprego = empregado ? "está empregado" : "não está empregado"; // O operador ternário escolhe entre dois valores conforme uma condição.

let descricao = `${nomeCompleto} tem ${idade} anos, mora em ${cidade} e atualmente ${statusEmprego} com salário de R$ ${salario}`;

console.log(descricao);
