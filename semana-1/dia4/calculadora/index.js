import {
  somar,
  subtrair,
  multiplicar,
  dividir,
  potencia,
  porcentagem,
} from "./operacoes.js";
import {
  formatarMoeda,
  formatarPercentual,
  arredondarNumero,
} from "./formatador.js";

// =================================
// TESTES DAS OPERAÇÕES
// =================================
console.log(somar(2, 4));
console.log(subtrair(3, 4));
console.log(multiplicar(5, 6));
console.log(dividir(9, 3));
console.log(potencia(3, 3));
console.log(porcentagem(1250, 30));

// =================================
// TESTES DO FORMATADOR
// =================================
console.log(formatarMoeda(1250));
console.log(formatarPercentual(30));
console.log(arredondarNumero(3.14159265, 2));
