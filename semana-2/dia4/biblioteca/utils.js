/* Etapa 1: utils.js
Exporta lerDados() (lê o dados.json e devolve o objeto) e salvarDados(dados) (grava o objeto no arquivo). Use path.join(__dirname, ...).
Pronto quando: um teste rápido lê, adiciona um item e grava, e o dados.json mostra a mudança.
*/

const fs = require("fs");
const path = require("path");

const lerDados = () => {
  const caminho = path.join(__dirname, "dados.json");
  const conteudo = fs.readFileSync(caminho, "utf-8");
  return JSON.parse(conteudo);
};

const salvarDados = (dados) => {
  const caminho = path.join(__dirname, "dados.json");
  fs.writeFileSync(caminho, JSON.stringify(dados, null, 2), "utf-8");
};

module.exports = { lerDados, salvarDados };
