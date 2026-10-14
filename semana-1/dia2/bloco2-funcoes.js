// =================================
// TEORIA — APENAS PARA ESTUDO
// =================================

// Funções são blocos de código criados para executar tarefas reutilizáveis.

// Função declarada: forma tradicional.
function somarTeoria(a, b) {
  return a + b;
}
console.log(somarTeoria(3, 4));

// Arrow function: forma moderna.
const multiplicarTeoria = (a, b) => {
  return a * b;
};
console.log(multiplicarTeoria(3, 4));

// Arrow function curta: quando há apenas um return, é possível simplificar.
const dividirTeoria = (a, b) => a / b;
console.log(dividirTeoria(10, 2));

// Parâmetros com valor padrão.
const saudacao = (nome = "visitante") => {
  return `Olá, ${nome}!`;
};
console.log(saudacao("João"));
console.log(saudacao());

// Função sem retorno: executa uma ação.
const imprimirLinha = () => {
  console.log("====================");
};
imprimirLinha();

// Diferença entre parâmetro e argumento:
// Parâmetro: variável na definição da função (a, b).
// Argumento: valor passado na chamada da função (3, 4).

// =================================
// EXERCÍCIOS
// =================================

/*
EXERCÍCIO 1 — Calculadora:
Crie quatro arrow functions: somar, subtrair, multiplicar e dividir.
Cada uma recebe dois números e retorna o resultado.
Depois, teste cada função com console.log.
*/
const somar = (a, b) => {
  return a + b;
};
const subtrair = (a, b) => {
  return a - b;
};
const multiplicar = (a, b) => {
  return a * b;
};
const dividir = (a, b) => {
  return a / b;
};
console.log(somar(2, 2));
console.log(subtrair(5, 4));
console.log(multiplicar(3, 2));
console.log(dividir(9, 3));

/*
EXERCÍCIO 2 — Verificador de par ou ímpar:
Crie uma arrow function ePar que receba um número e retorne true se for par
ou false se for ímpar. Teste com os números 4, 7 e 10.
*/
const verificador = (a) => {
  if (a % 2 === 0) {
    return "É par";
  } else {
    return "É impar";
  }
};
console.log(verificador(4));
console.log(verificador(7));
console.log(verificador(10));

/*
EXERCÍCIO 3 — Calculadora de IMC:
Transforme o exercício de IMC do dia anterior em uma função.
Crie uma arrow function calcularIMC que receba peso e altura e retorne
a classificação em texto ("peso normal", "sobrepeso" etc.).
Teste com pelo menos três combinações diferentes de peso e altura.
*/
const imc = (a, b) => {
  let peso = a;
  let altura = b;
  let imc = peso / (altura * altura);
  if (imc < 18.5) {
    return `Abaixo do peso. ${imc}`;
  } else if (imc >= 18.5 && imc <= 24.9) {
    return `Peso normal. ${imc}`;
  } else if (imc >= 25 && imc <= 29.9) {
    return `Sobre peso. ${imc}`;
  } else {
    return `Obesidade. ${imc}`;
  }
};
console.log(imc(55, 1.83));
console.log(imc(65, 1.83));
console.log(imc(87, 1.83));
console.log(imc(150, 1.83));

/*
EXERCÍCIO 4 — Tabuada como função:
Transforme o exercício da tabuada em uma função tabuada que receba um número
e imprima a tabuada completa desse número.
Depois, chame a função para imprimir as tabuadas do 5 e do 9.
*/
const tabuada = (a) => {
  for (let i = 0; i <= 10; i++) {
    let resultado = a * i;
    console.log(`${a} * ${i} = ${resultado}`);
  }
};
tabuada(5);
tabuada(9);
