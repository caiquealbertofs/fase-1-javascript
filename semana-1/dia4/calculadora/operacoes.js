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

const potencia = (base, expoente) => {
  return base ** expoente;
};

const porcentagem = (valor, percent) => {
  return (percent / valor) * 100;
};

export { somar, subtrair, multiplicar, dividir, potencia, porcentagem };
