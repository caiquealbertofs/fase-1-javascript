/*
PROJETO DO DIA
Mini projeto: Cliente de API de CEP

Escreva do zero. Une assincronismo com tudo que aprendeu nos dias anteriores.

O que o programa deve fazer:

Crie uma função buscarCEP(cep) que:

Busca o endereço na API: https://viacep.com.br/ws/${cep}/json/
Retorna um objeto formatado com cep, rua, bairro, cidade e estado
Lança ErroValidacao se o CEP não tiver 8 dígitos
Lança ErroNaoEncontrado se o CEP não existir (a API retorna { erro: true } nesses casos)

Crie uma função buscarMultiplosCEPs(ceps) que:

Recebe um array de CEPs
Busca todos em paralelo com Promise.all
Retorna array com os endereços encontrados
Trata os erros individualmente — um CEP inválido não deve derrubar os outros
O programa deve imprimir:

===== BUSCADOR DE CEP =====

CEP: 01310-100
Rua: Avenida Paulista
Bairro: Bela Vista
Cidade: São Paulo
Estado: SP

===========================

Buscando múltiplos CEPs...
✓ 01310-100 — Av. Paulista, São Paulo/SP
✓ 20040-020 — Av. Rio Branco, Rio de Janeiro/RJ
✗ 00000-000 — CEP não encontrado
*/

const cepTeste = "01310000";
const listaCep = [
  "01001000",
  "01310100",
  "0000000",
  "03001000",
  "04001000",
  "05001000",
  "00010000",
  "07010000",
  "08010000",
  "09010000",
];

const buscarCep = async (cep) => {
  if (cep.length !== 8) {
    throw new Error(`${cep} — inválido: cep não contem 8 dígitos.`);
  }

  const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const dados = await resposta.json();

  if (dados.erro) {
    throw new Error(`${cep} — CEP não encontrado.`);
  }
  const endereco = {
    cep: dados.cep,
    rua: dados.logradouro,
    bairro: dados.bairro,
    cidade: dados.localidade,
    estado: dados.estado,
  };
  return endereco;
};

const exibirCep = async (cep) => {
  const endereco = await buscarCep(cep);
  console.log(`
===== BUSCADOR DE CEP =====

CEP: ${endereco.cep}
Rua: ${endereco.rua}
Bairro: ${endereco.bairro}
Cidade: ${endereco.cidade}
Estado: ${endereco.estado}

===========================
  `);
};

exibirCep(cepTeste);

const buscarListaCep = async (lista) => {
  const resultado = await Promise.allSettled(
    lista.map((cep) => buscarCep(cep)),
  );
  const endereco = resultado.map((endereco) => {
    const { status, reason, value = {} } = endereco;
    const { cep, rua, cidade, estado } = value;
    return { status, reason, cep, rua, cidade, estado };
  });
  endereco.forEach((item) => {
    if (item.status === "fulfilled") {
      console.log(`${item.cep} — ${item.rua}, ${item.cidade}/${item.estado}\n`);
    } else {
      console.log(item.reason.message, "\n");
    }
  });
};

buscarListaCep(listaCep);
