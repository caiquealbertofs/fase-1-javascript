// =================================
// TEORIA - apenas para estudo
// =================================

// Promise representa uma operação que vai completar no futuro
// Tem 3 estados:
// pending  — ainda executando
// resolved — completou com sucesso
// rejected — completou com erro

// =================================
// CRIANDO UMA PROMISE
// =================================

const buscarUsuario = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 1) {
        reject(new Error("ID inválido"));
        return;
      }
      const usuario = { id, nome: "João" };
      resolve(usuario);
    }, 1000);
  });
};

// =================================
// CONSUMINDO COM .then() e .catch()
// =================================

buscarUsuario(1)
  .then((usuario) => {
    console.log("Usuário:", usuario);
    return usuario; // passa para o próximo .then()
  })
  .then((usuario) => {
    console.log("Nome:", usuario.nome);
  })
  .catch((erro) => {
    console.log("Erro:", erro.message);
  })
  .finally(() => {
    console.log("Operação finalizada");
  });

// =================================
// ENCADEAMENTO — resolve o callback hell
// =================================

buscarUsuario(1)
  .then((usuario) => buscarEndereco(usuario.id))
  .then((endereco) => calcularFrete(endereco.cidade))
  .then((frete) => console.log("Frete:", frete))
  .catch((erro) => console.log("Erro em qualquer etapa:", erro.message));

// Compare com o callback hell — muito mais legível

// =================================
// PROMISE.ALL — executa várias promises em paralelo
// =================================

// Quando as operações não dependem umas das outras
// use Promise.all para executar ao mesmo tempo (mais rápido)

Promise.all([buscarUsuario(1), buscarUsuario(2), buscarUsuario(3)])
  .then(([usuario1, usuario2, usuario3]) => {
    console.log(usuario1, usuario2, usuario3);
  })
  .catch((erro) => console.log(erro.message));

// Se qualquer uma falhar, o .catch() é chamado

// =================================
// PROMISE.ALLSETTLED — todas completam, mesmo com erro
// =================================

Promise.allSettled([
  buscarUsuario(1),
  buscarUsuario(-1), // vai falhar
  buscarUsuario(3),
]).then((resultados) => {
  resultados.forEach((resultado) => {
    if (resultado.status === "fulfilled") {
      console.log("Sucesso:", resultado.value);
    } else {
      console.log("Erro:", resultado.reason.message);
    }
  });
});

// =================================
// PROMISE.RACE — retorna a primeira que completar
// =================================

Promise.race([buscarUsuario(1), buscarUsuario(2)]).then((primeiro) =>
  console.log("Primeiro:", primeiro),
);

// =================================
// EXERCÍCIOS
// =================================

/*
EXERCÍCIO 1 — Reescrevendo com Promises:
- Pegue o exercício 1 do Bloco 1 (buscarUsuario, buscarEndereco, calcularFrete).
- Reescreva todas as funções para retornarem Promises em vez de usarem callbacks.
- Encadeie as operações com .then() e trate os erros com .catch().
- Compare os dois códigos.

EXERCÍCIO 2 — Promise.all na prática:
- Crie uma função buscarDashboard(userId) que use Promise.all para buscar em paralelo:
  - Dados do usuário
  - Lista de pedidos do usuário
  - Notificações do usuário
- Cada função deve simular um tempo diferente usando setTimeout.
- Quando todas as operações forem concluídas, imprima um objeto com os três resultados.

EXERCÍCIO 3 — Promise.allSettled:
- Crie um array de ids [1, -1, 5, 200, 3].
- Faça com que ids negativos e maiores que 100 retornem erro.
- Use Promise.allSettled para buscar todos os ids.
- Imprima separadamente quantos tiveram sucesso e quais tiveram erro, incluindo o motivo.
*/
