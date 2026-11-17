/*
Crie a função agruparPor(array, chave), que recebe um array de objetos e o nome de uma propriedade, e devolve um objeto agrupando os itens por essa propriedade. Fato da linguagem que ajuda: para ler uma propriedade cujo nome está numa variável, use colchetes, item[chave], e não item.chave. 
*/

const produtos = [
  { nome: "Notebook", categoria: "eletronico" },
  { nome: "Mouse", categoria: "eletronico" },
  { nome: "Camiseta", categoria: "roupa" },
];

const agruparPor = (array, chave) => {
  const grupos = {};
  array.forEach((item) => {
    const propriedade = item[chave];
    if (grupos[propriedade] === undefined) {
      grupos[propriedade] = [];
    }
    grupos[propriedade].push(item);
  });
  return grupos;
};

console.log(agruparPor(produtos, "categoria"));
