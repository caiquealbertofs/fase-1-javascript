// =================================
// TEORIA — APENAS PARA ESTUDO
// =================================

// Um array é uma lista ordenada de valores.
// Cada item tem um índice que começa em 0.
let frutas = ["maça", "banana", "laranja"];
console.log(frutas[0]); // "maça"
console.log(frutas[1]); // "banana"
console.log(frutas[2]); // "laranja"

// A propriedade length informa o tamanho do array.
console.log(frutas.length); // 3

// O índice do último item é sempre length - 1.
console.log(frutas[frutas.length - 1]); // "laranja"

// =================================
// MANIPULANDO ARRAYS
// =================================

// .push() adiciona um item ao final.
frutas.push("uva");
console.log(frutas);

// .pop() remove e retorna o último item.
let removido = frutas.pop();
console.log(removido);
console.log(frutas);

// .unshift() adiciona um item no início.
frutas.unshift("morango");
console.log(frutas);

// .shift() remove e retorna o primeiro item.
let primeiro = frutas.shift();
console.log(primeiro);

// .indexOf() retorna o índice de um item (-1 se não encontrar).
console.log(frutas.indexOf("banana")); // 1
console.log(frutas.indexOf("uva")); // -1

// .includes() retorna true se o item existir.
console.log(frutas.includes("banana")); // true
console.log(frutas.includes("uva")); // false

// .splice() remove ou substitui itens em qualquer posição.
frutas.splice(1, 1); // Sintaxe: splice(índice, quantidade a remover).
console.log(frutas); // ["maça", "laranja"]

// =================================
// MÉTODOS MODERNOS (os mais usados no mercado)
// =================================

let numeros = [1, 2, 3, 4, 5];

// .map() transforma cada item e retorna um novo array.
let dobrados = numeros.map((n) => n * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]

// .filter() filtra itens que atendem à condição.
let pares = numeros.filter((n) => n % 2 === 0);
console.log(pares);

// .find() retorna o primeiro item que atende à condição.
let maiorQueTres = numeros.find((n) => n > 3);
console.log(maiorQueTres); // 4

// .reduce() acumula valores em um único resultado.
let soma = numeros.reduce((acumulador, n) => acumulador + n, 0);
console.log(soma); // 15

// .forEach() percorre o array; não retorna um valor, apenas executa uma ação.
numeros.forEach((n) => console.log(n));

// Diferença importante:
// map/filter/find/reduce retornam um valor e não alteram o array original.
// push/pop/splice alteram o array original (mutação).

// =================================
// EXERCÍCIOS
// =================================

/*
EXERCÍCIO 1 — Lista de compras:
Crie um array listaCompras com cinco itens. Depois:
- Adicione dois itens ao final com push.
- Remova o último item com pop e imprima o item removido.
- Verifique com includes se "Leite" está na lista.
- Imprima a quantidade de itens usando length.
- Imprima todos os itens usando for...of.
*/
console.log("========== EXERCICIO 1 ==========");
let listaCompras = ["Leite", "Presunto", "Queijo", "Café", "Refrigerante"];

listaCompras.push("Ovos", "Pão");

console.log(listaCompras.pop());

listaCompras.includes("Leite");

console.log(listaCompras.length);

for (let item of listaCompras) {
  console.log(item);
}

/*
EXERCÍCIO 2 — Turma de alunos:
Crie um array notas com os valores [7, 4, 9, 6, 8, 3, 10, 5].
Usando os métodos modernos:
- Use filter para criar um array apenas com notas aprovadas (>= 7).
- Use map para multiplicar cada nota por 10 (ex.: converter em porcentagem).
- Use reduce para calcular a média da turma.
- Imprima os três resultados.
*/
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

/*
EXERCÍCIO 3 — Números:
Crie um array numeros com os valores [15, 3, 9, 21, 7, 12, 1, 18]. Depois:
- Use find para encontrar o primeiro número maior que 10.
- Use filter para criar um array apenas com números ímpares.
- Use map para calcular a raiz quadrada de cada número.
  Dica: Math.sqrt(numero).
- Imprima os três resultados.
*/
console.log("========== EXERCICIO 3 ==========");
let valores = [15, 3, 9, 21, 7, 12, 1, 18];

let maiores = valores.find((n) => n > 10);

let impar = valores.filter((n) => n % 2 === 1);

let raizQuadrada = valores.map((n) => Math.sqrt(n));

console.log(`${maiores}
${impar}
${raizQuadrada}`);
