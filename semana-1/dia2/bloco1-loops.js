// =================================
// TEORIA - apenas para estudo
// =================================

/* FOR = quando você sabe quantas vezes vai repetir*/
// for (inicio; condição; incremento)
for (let i = 0; i < 5; i++) {
  console.log(i); // imprime 0 1 2 3 4 (um em cada linha)
}
/* WHILE = quando você não sabe quantas vezes vai repetir */
let contadorTeoria = 0;
while (contadorTeoria < 5) {
  console.log(contadorTeoria);
  contadorTeoria++; // incrementa 1 a cada passagem, se nao tiver isso acaba virando loop infinito
}
/* FOR...OF = para percorrer arrays (aprenderemos arrays no proximo dia, preview aqui) */
let frutas = ["maçã", "banana", "laranja"];
for (let fruta of frutas) {
  console.log(fruta);
}
//Operadores de incremente e decremento:
// i++ soma 1
// i-- subtrai 1
// i += 2 soma 2
// i*= 3 multiplica por 3

// =================================
// EXERCICIOS
// =================================

/* EXERCICIO 1 - TABUADA: CRIE UM PROGRAMA QUE IMPRIMA A TABUADA DO NÚMERO 7 DO 0 AO 10, USANDO FOR */
let sete = 7;
for (let i = 0; i < 11; i++) {
  console.log(sete * i);
}

/* EXERCICIO 2 - SOMA ACUMULADA: USANDO WHILE, SOME TODOS OS NÚMEROS DE 1 ATÉ 100 E IMPRIMA, O RESULTADOCORRETO É 5050*/
let contadorSoma = 1;
let soma = 0;
while (contadorSoma <= 100) {
  soma = contadorSoma + soma;
  contadorSoma++;
}
console.log(soma);

/* EXERCICIO 3 - NUMEROS PARES: USANDO FOR, IMPRIMA TODOS OS NUMEROS PARES ENTRE 0 E 20. DICA: UM NUMERO E PAR QUANDO O RESTO DA DIVISAO POR 2 E ZERO. EM JAVA SCRIPT O OPERADOR DE RESTO E %*/
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

/* EXERCICIO 4 - CONTAGEM REGRESSIVA: USANDO FOR, IMPRIMA UMA CONTAGEM REGRESSIVA DE 10 ATÉ 1, DEPOIS IMPRIMA "Feliz Ano Novo!" */
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
if ((i = 1)) {
  console.log("Feliz Ano Novo!");
}
