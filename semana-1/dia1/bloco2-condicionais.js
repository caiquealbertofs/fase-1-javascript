// =================================
// TEORIA - apenas para estudo
// =================================

/* Condicionais permitem que o código tome decisoes */

// Estrutura basica:
// if (condição) { executa se true }
// else if (outra condicao) { executa se essa for true }
// else { executa se nenhuma for true }

// Operadores de comparacao:
// >   maior que
// <   menor que
// >=  maior ou igual
// <=  menor ou igual
// === igual (use sempre esse, nunca ==)
// !== diferente

// =================================
// EXERCICIOS
// =================================

/* EXERCICIO 1 - PROVA: DECLARE UMA VARIAVEL NOTA 7 E CRIE UMA CONDICIONAL DE APROVADO, RECUPARECAO E REPROVADO*/
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

/* EXERCICIO 2 - IMC: CRIE UM PROGRAMA QUE AVALIA O IMC DE UMA PESSOA*/
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
