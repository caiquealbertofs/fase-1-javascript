const formatarMoeda = (valor) => {
  const formatado = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
  return formatado;
};

const formatarPercentual = (valor) => {
  return (valor / 100).toLocaleString("pt-BR", {
    style: "percent",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
};

const arredondarNumero = (valor, casas) => {
  return valor.toLocaleString("pt-BR", {
    maximumFractionDigits: casas,
    minimumFractionDigits: casas,
  });
};

export { formatarMoeda, formatarPercentual, arredondarNumero };
