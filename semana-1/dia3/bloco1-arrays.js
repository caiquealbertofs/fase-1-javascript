// =================================
// TEORIA - apenas para estudo
// =================================

// Array e uma lista ordenada de valores
// Cada item tem um indice que começa em 0
let frutas = ["maça", "banana", "laranja"];
console.log(frutas[0]); // "maça"
console.log(frutas[1]); // "banana"
console.log(frutas[2]); // "laranja"

/* Propriedade length = tamanho do array */
console.log(frutas.length); // 3

/* Ultimo item sempre e length -1 */
console.log(frutas[frutas.length - 1]); // "laranja"

// =================================
// MANIPULANDO ARRAYS
// =================================

/* .push() = adiciona no final */
frutas.push("uva");
console.log(frutas);

/* .pop() = remova o ultimo e retorna ele */
let removido = frutas.pop();
console.log(removido);
console.log(frutas);

/* .unshift() = adiciona no inicio */
frutas.unshift("morango");
console.log(frutas);

/* .shift() = remove o primeiro e retorna ele */
let primeiro = frutas.shift();
console.log(primeiro);

/* .indexOf() = retorna o indice de um item (-1 se não encontrar) */
console.log(frutas.indexOf("banana")); // 1
console.log(frutas.indexOf("uva")); // -1

/* .include() = retorna true se o item existir */
console.log(frutas.includes("banana")); // true
console.log(frutas.includes("uva")); // false

/*.splice() = remove ou substitui itens em qualquer posição */
frutas.splice(1, 1); // splice(indice, quantos remover) // remove 1 item do indice 1
console.log(frutas); // ["maça", "laranja"]

// =================================
// MÉTODOS MODERNOS (os mais usados no mercado)
// =================================

let numeros = [1, 2, 3, 4, 5];

/* .map() = transforma cada item e retorna um novo array */
let dobrados = numeros.map((n) => n * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]

/* .filter() = filtra itens que passam na condicao */
let pares = numeros.filter((n) => n % 2 === 0);
console.log(pares);

// .find() — retorna o PRIMEIRO item que passa na condição
let maiorQueTres = numeros.find((n) => n > 3);
console.log(maiorQueTres); // 4

/* .reduce() = acumula valores em um unico resultado */
let soma = numeros.reduce((acumulador, n) => acumulador + n, 0);
console.log(soma); // 15

/* .forEach() = percorre o array (nao retorna nada, so executa) */
numeros.forEach((n) => console.log(n));

// DIFERENÇA IMPORTANTE:
// map/filter/find/reduce = retornam um novo valor, nao alteram o original
// push/pop/splice = alteram o array original, ou seja, uma mutacao

// =================================
// EXERCICIOS
// =================================

/* EXERCICIO 1 - LISTA DE COMPRAS: CRIE UM ARRAY LISTACOMPRAS COM 5 ITENS.
DEPOIS: ADICIONA 2 ITENS NO FINAL COM PUSH, REMOVA O ÚLTIMO ITEM COM POP E IMPRIMA QUAL FOI REMOVIDO, VERIFIQUE SE LEITE ESTÁ NA LISTA COM INCLUDES, IMPRIMA O TOTAL DE ITENS COM O LENGTH, IMPRIMA TODOS OS ITENS USANDO FOR ... OF */
console.log("========== EXERCICIO 1 ==========");
let listaCompras = ["Leite", "Presunto", "Queijo", "Café", "Refrigerante"];

listaCompras.push("Ovos", "Pão");

console.log(listaCompras.pop());

listaCompras.includes("Leite");

console.log(listaCompras.length);

for (let item of listaCompras) {
  console.log(item);
}

/* EXERCICIO 2 - TURMA DE ALUNOS: CRIE UM ARRAY NOTAS COM VALORES [7, 4, 9, 6, 8, 3, 10, 5].
USANDO OS METODOS MODERNOS: USE FILTER PARA CRIAR UM ARRAY SO COM NOTAS APROVADAS (>=7),
USE MAP PARA CRIAR UM ARRAY COM CADA NOTA MULTIPLICA POR 10 (EX: VIRAR PORCENTAGEM),
USE REDUCE PARA CALCULAR A MEDIA DA TURMA, IMPRIMA OS TRES RESULTADOS */
console.log("========== EXERCICIO 2 ==========");
let notas = [7, 4, 9, 6, 8, 3, 10, 5];

let aprovados = notas.filter((n) => n >= 7);

let notasPercentual = notas.map((n) => n * 10);

let notasMedia = notas.reduce(
  (acumulador, n) => acumulador + n / notas.length,
  0,
);

console.log(`${aprovados}
${notasPercentual}
${notasMedia}`);

/* EXERCICIO 3 - NUMEROS: CRIE UM ARRAY NUMEROS COM VALORES [15, 3, 9, 21, 7, 12, 1, 18]. DEPOIS: USE FIND PARA ENCONTRAR O PRIMEIRO NUMERO MAIOR QUE 10,
USE FILTER PARA CRIAR ARRAY SO COM NUMEROS IMPARES,
USE MAP PARA CRIAR UM ARRAY COM A RAIZ QUADRADA DE CADA NUMERO, DICA: MATH.SQRT(NUMERO),
IMPRIMA OS TRES RESULTADOS */
console.log("========== EXERCICIO 3 ==========");
let valores = [15, 3, 9, 21, 7, 12, 1, 18];

let maiores = valores.find((n) => n > 10);

let impar = valores.filter((n) => n % 2 === 1);

let raizQuadrada = valores.map((n) => Math.sqrt(n));

console.log(`${maiores}
${impar}
${raizQuadrada}`);
