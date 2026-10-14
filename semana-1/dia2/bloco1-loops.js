// =================================
// TEORIA — APENAS PARA ESTUDO
// =================================

// FOR: use quando souber quantas vezes precisa repetir.
// for (inicio; condição; incremento)
for (let i = 0; i < 5; i++) {
  console.log(i); // imprime 0 1 2 3 4 (um em cada linha)
}
// WHILE: use quando não souber quantas vezes precisa repetir.
let contadorTeoria = 0;
while (contadorTeoria < 5) {
  console.log(contadorTeoria);
  contadorTeoria++; // Incrementa 1 a cada passagem; sem isso, o loop pode ser infinito.
}
// FOR...OF: use para percorrer arrays (veremos arrays no próximo dia).
let frutas = ["maçã", "banana", "laranja"];
for (let fruta of frutas) {
  console.log(fruta);
}
// Operadores de incremento e decremento:
// i++   soma 1
// i--   subtrai 1
// i += 2 soma 2
// i *= 3 multiplica por 3

// =================================
// EXERCÍCIOS
// =================================

/*
EXERCÍCIO 1 — Tabuada:
Imprima a tabuada do número 7, do 0 ao 10, usando for.
*/
let sete = 7;
for (let i = 0; i < 11; i++) {
  console.log(sete * i);
}

/*
EXERCÍCIO 2 — Soma acumulada:
Usando while, some e imprima todos os números de 1 até 100.
O resultado esperado é 5050.
*/
let contadorSoma = 1;
let soma = 0;
while (contadorSoma <= 100) {
  soma = contadorSoma + soma;
  contadorSoma++;
}
console.log(soma);

/*
EXERCÍCIO 3 — Números pares:
Usando for, imprima todos os números pares entre 0 e 20.
Dica: um número é par quando o resto da divisão por 2 é zero.
Em JavaScript, o operador de resto é %.
*/
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

/*
EXERCÍCIO 4 — Contagem regressiva:
Usando for, imprima uma contagem regressiva de 10 até 1 e, depois,
imprima "Feliz Ano Novo!".
*/
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
if ((i = 1)) {
  console.log("Feliz Ano Novo!");
}
