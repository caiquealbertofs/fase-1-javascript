// =================================
// TEORIA - apenas para estudo
// =================================

// Funcoes sao blocos de codigos que sao criados criados para executar uma determinada tarefa e podendo ser reutilizada.

/* Funcao declarada = forma tradicional */
function somarTeoria(a, b) {
  return a + b;
}
console.log(somarTeoria(3, 4));

/* Arrow function =
forma moderna, use essa */
const multiplicarTeoria = (a, b) => {
  return a * b;
};
console.log(multiplicarTeoria(3, 4));

/* Arrow function curta = quando tem so um return pode simplificar */
const dividirTeoria = (a, b) => a / b;
console.log(dividirTeoria(10, 2));

/* Parametros com valor padrao */
const saudacao = (nome = "visitante") => {
  return `Olá, ${nome}!`;
};
console.log(saudacao("João"));
console.log(saudacao());

/* Funcao sem retorno = apenas executa uma acao */
const imprimirLinha = () => {
  console.log("====================");
};
imprimirLinha();

// IMPORTANTE:
// diferenca entre parametro e argumento
// Parametro: variavel na definicao da funcao (a, b)
// Argumento: valor passado na chamada funcao (3, 4)

// =================================
// EXERCICIOS
// =================================

/* EXERCICIO 1 - CALCULADORA: CRIE QUATRO ARROW FUNCTIONS: SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR. CADA UMA RECEBE DOIS NUMEROS E RETORNA O RESULTADO. DEPOIS TESTE CADA UMA COM CONSOLE.LOG. */
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

/* EXERCICIO 2 - VERIFICADOR DE PAR OU IMPAR: CRIE UMA ARROW FUNCTIOR E PAR QUE RECEBE UM NUMERO E RETORNA TRUE SE FOR PAR OU FALSE SE FOR IMPAR. TESTE COM OS NUMEROS 4, 7 E 10. */
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

/* EXERCICIO 3 - CALCULADORA DE IMC: TRANSFORME O EXERCICIO DO IMC DO DIA ANTERIOR EM UMA FUNCAO. CRIE UMA ARROW FUNCTION CALCULARIMC QUE RECEBE PESO E ALTURA E RETORNA A CLASSIFICACAO JA COMO TEXTO ("PESO NORMAL", "SOBREPESO" ETC.). TESTE COM PELO MENOS 3 COMBINACOES DIFERENTES DE PESO E ALTURA. */
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

/* EXERCICIO 4 - TABUADA COMO FUNCAO: TRANSFORME O EXERCICIO DA TABUADA EM FUNCAO TABUADA QUE RECEBE UM NUMERO E IMPRIME A TABUADA COMPLETA DESSE NUMERO. DEPOIS CHAME A FUNCAO PARA IMPRIMIR A TABUADA DO 5 E DO 9. */
const tabuada = (a) => {
  for (let i = 0; i <= 10; i++) {
    let resultado = a * i;
    console.log(`${a} * ${i} = ${resultado}`);
  }
};
tabuada(5);
tabuada(9);
