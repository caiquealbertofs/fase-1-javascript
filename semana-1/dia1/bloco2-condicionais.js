// =================================
// TEORIA — APENAS PARA ESTUDO
// =================================

// Condicionais permitem que o código tome decisões.

// Estrutura básica:
// if (condição) { executa se for true }
// else if (outra condição) { executa se essa for true }
// else { executa se nenhuma condição for true }

// Operadores de comparação:
// >   maior que
// <   menor que
// >=  maior ou igual
// <=  menor ou igual
// === igual (use sempre este, nunca ==)
// !== diferente

// =================================
// EXERCÍCIOS
// =================================

/*
EXERCÍCIO 1 — Prova:
Declare uma variável nota com valor 7 e crie uma condicional que classifique
o resultado como aprovado, recuperação ou reprovado.
*/
let nota = 4;
let resultadoNota;
if (nota >= 7) {
  resultadoNota = "Aprovado";
} else if (nota >= 5 && nota < 7) {
  resultadoNota = "Recuperação";
} else {
  resultadoNota = "Reprovado";
}
console.log(resultadoNota);

/*
EXERCÍCIO 2 — IMC:
Crie um programa que avalie o IMC de uma pessoa.
*/
let peso = 83;
let altura = 1.83;
let imc = peso / (altura * altura);
let resultadoIMC;

if (imc < 18.5) {
  resultadoIMC = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9) {
  resultadoIMC = "Peso normal";
} else if (imc >= 25 && imc <= 29.9) {
  resultadoIMC = "Sobrepeso";
} else {
  resultadoIMC = "Obesidade";
}
console.log(resultadoIMC);
