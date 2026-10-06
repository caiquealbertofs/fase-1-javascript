//Mini Projeto: Calculadora de gorjeta
/* Une tudo que aprendeu nos dois dias. Sem copiar — escreva do zero.

O que o programa deve fazer:

Declara variaveis para valorConta (ex: 150), qualidadeServico (ex: "Bom") e numeroPessoas (ex: 4)

Cria uma funcao calcularGorjeta que recebe o valor da conta e a qualidade do serviço e retorna o percentual de gorjeta:
"excelente" : 20%
"bom" : 15%
"regular" : 10%
qualquer outro : 5%

Cria uma função dividirConta que recebe o valor total e o número de pessoas e retorna quanto cada um paga

O programa deve imprimir:

===== CALCULADORA DE GORJETA =====
Valor da conta: R$ 150
Qualidade do serviço: bom
Gorjeta (15%): R$ 22.5
Total com gorjeta: R$ 172.5
Número de pessoas: 4
Cada pessoa paga: R$ 43.13
==================================
*/

let valorConta = 150;
let qualidadeServico = "Bom";
let numeroPessoas = 4;

const calcularGorgeta = (a, b) => {
  if (b === "Excelente") {
    return 20;
  } else if (b === "Bom") {
    return 15;
  } else if (b === "Regular") {
    return 10;
  } else {
    return 5;
  }
};
const dividirConta = (a, b) => {
  divisaoConta = a / b;
  return divisaoConta;
};

calcularGorgeta(valorConta, qualidadeServico);
dividirConta(valorConta, numeroPessoas);

console.log(`===== CALCULADORA DE GORJETA =====
Valor da conta: ${valorConta}
Qualidade do serviço: ${qualidadeServico}
Gorjeta (${calcularGorgeta(valorConta, qualidadeServico)}%): ${(valorConta / 100) * calcularGorgeta(valorConta, qualidadeServico)}
Total com gorjeta: ${(valorConta / 100) * calcularGorgeta(valorConta, qualidadeServico) + valorConta}
Número de pessoas: ${numeroPessoas}
Cada pessoa paga: ${((valorConta / 100) * calcularGorgeta(valorConta, qualidadeServico) + valorConta) / numeroPessoas}
==================================`);
