// =================================
// TEORIA - apenas para estudo
// =================================

// JavaScript é single-thread — executa uma coisa por vez
// Mas precisa lidar com operações que demoram (rede, banco, arquivo)
// Assincronismo é como ele resolve isso sem travar tudo

// =================================
// SÍNCRONO vs ASSÍNCRONO
// =================================
/*
// Síncrono — executa em ordem, linha por linha
console.log("1");
console.log("2");
console.log("3");
// Imprime: 1, 2, 3

// Assíncrono — não bloqueia, continua executando
console.log("1");
setTimeout(() => {
  console.log("2"); // executa depois de 1 segundo
}, 1000);
console.log("3");
// Imprime: 1, 3, 2 — o 3 não espera o 2

// =================================
// CALLBACKS
// =================================

// Callback é uma função passada como argumento para outra função
// Ela será chamada quando a operação terminar

const buscarUsuarioTeoria = (id, callback) => {
  console.log(`Buscando usuário ${id}...`);
  setTimeout(() => {
    const usuario = { id: 1, nome: "João", email: "joao@email.com" };
    callback(null, usuario); // primeiro argumento é o erro (null = sem erro)
  }, 1000);
};

buscarUsuarioTeoria(1, (erro, usuario) => {
  if (erro) {
    console.log("Erro:", erro);
    return;
  }
  console.log("Usuário encontrado:", usuario);
});

// =================================
// CALLBACK HELL — o problema dos callbacks
// =================================

// Quando operações dependem umas das outras, o código vira uma pirâmide
buscarUsuarioTeoria(1, (erro, usuario) => {
  if (erro) return console.log(erro);

  buscarPedidos(usuario.id, (erro, pedidos) => {
    if (erro) return console.log(erro);

    buscarProdutos(pedidos[0].id, (erro, produtos) => {
      if (erro) return console.log(erro);

      // cada nível dentro do outro — difícil de ler e manter
      console.log(produtos);
    });
  });
});

// Promises e async/await resolvem exatamente esse problema
*/
/* EXERCICIO 1 - Simulando Operações Assincronas: Crie funções com callback que simulam operações com setTimeout: buscarUsuario(id, callback) = aguarda 1 segundo e retorna { id, nome: "João"}. buscarEndereco(userId, callback) = aguarda 1 segundo e retorna { rua: "Av. Paulista", cidade: "São Paulo"}. calcularFrete(cidade, callback) = aguarda 1 segundo e retorna o valor do frete. Encadeie as três, buscando o usuário, depois o endereço, depois calcule o frente com a cidade do endereço. Observe o callback hell que se forma. */

const buscarUsuario = (id, callback) => {
  setTimeout(() => {
    const usuario = { id, nome: "João" };
    callback(usuario);
  }, 1000);
};
const buscarEndereco = (userId, callback) => {
  setTimeout(() => {
    const endereco = { rua: "Av. Paulista", cidade: "São Paulo" };
    callback(endereco);
  }, 1000);
};
const calcularFrete = (cidade, callback) => {
  setTimeout(() => {
    const frete = { frete: 1200 };
    callback(frete);
  }, 1000);
};

buscarUsuario(1, (usuario) => {
  buscarEndereco(usuario.id, (endereco) => {
    calcularFrete(endereco.cidade, (frete) => {
      console.log(frete);
    });
  });
});

/* EXERCICIO 2 - Callback com erro: Modifique a função buscarUsuario para que: Se o id for menor 1, chame o callback com um erro: callback(new Error("ID inválido"), null), se o id for maior que 100, chame o callback com: callback(new Error("Usuário não encontrado"), null), caso contrário, retorne o usuário normalmente, depois teste os ids 0, 50 e 200.*/
