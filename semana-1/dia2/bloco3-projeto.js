// =================================
// MINI PROJETO — CALCULADORA DE GORJETA
// =================================

/*
Una o conteúdo aprendido nos dois dias. Escreva o programa do zero, sem copiar.

O que o programa deve fazer:
- Declarar valorConta (ex.: 150), qualidadeServico (ex.: "Bom") e
  numeroPessoas (ex.: 4).
- Criar calcularGorjeta, que recebe o valor da conta e a qualidade do serviço,
  retornando o percentual:
  - "excelente": 20%
  - "bom": 15%
  - "regular": 10%
  - qualquer outro valor: 5%
- Criar dividirConta, que recebe o valor total e o número de pessoas e retorna
  quanto cada pessoa paga.
- Imprimir o resumo no formato abaixo:

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
