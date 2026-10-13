// =================================
// TEORIA: SÍNCRONO E ASSÍNCRONO
// =================================

// Código síncrono é executado em sequência: cada linha espera a anterior terminar.
console.log("Execução síncrona:");
console.log("1");
console.log("2");
console.log("3");

// setTimeout agenda uma função para mais tarde; ele não pausa o restante do programa.
// Por isso, o "3" aparece antes do "2", mesmo estando depois do setTimeout.
console.log("Execução assíncrona:");
console.log("1");
setTimeout(() => {
  console.log("2 (executado depois de 1 segundo)");
}, 1000);
console.log("3");

// Callback é uma função passada como argumento para ser chamada depois que uma tarefa termina.
// O padrão error-first usa callback(erro, resultado): erro será null quando não houver falha.
const buscarUsuarioTeoria = (id, callback) => {
  console.log(`Buscando usuário ${id}...`);
  setTimeout(() => {
    // O setTimeout simula uma operação demorada, como uma consulta a uma API ou banco de dados.
    callback(null, { id, nome: "João", email: "joao@email.com" });
  }, 1000);
};

buscarUsuarioTeoria(1, (erro, usuario) => {
  // Sempre verifique o erro antes de usar o resultado.
  if (erro) {
    console.log("Erro ao buscar usuário na teoria:", erro.message);
    return;
  }

  console.log("Usuário encontrado na teoria:", usuario);
});

// Callback hell acontece quando uma operação depende do resultado da anterior:
// primeiro buscamos o usuário, depois os pedidos dele e, por fim, os produtos.
const buscarPedidosTeoria = (userId, callback) => {
  setTimeout(() => {
    callback(null, [{ id: 101, produtoId: 501 }]);
  }, 1000);
};

const buscarProdutosTeoria = (produtoId, callback) => {
  setTimeout(() => {
    callback(null, [{ id: produtoId, nome: "Livro" }]);
  }, 1000);
};

buscarUsuarioTeoria(1, (erro, usuario) => {
  if (erro) {
    console.log("Erro ao buscar usuário na teoria:", erro.message);
    return;
  }

  buscarPedidosTeoria(usuario.id, (erroPedidos, pedidos) => {
    // O id do usuário é necessário para buscar os pedidos.
    if (erroPedidos) {
      console.log("Erro ao buscar pedidos na teoria:", erroPedidos.message);
      return;
    }

    buscarProdutosTeoria(pedidos[0].produtoId, (erroProdutos, produtos) => {
      // O id do produto veio do pedido retornado na etapa anterior.
      if (erroProdutos) {
        console.log("Erro ao buscar produtos na teoria:", erroProdutos.message);
        return;
      }

      console.log("Produtos do pedido na teoria:", produtos);
    });
  });
});

// Cada nível precisa tratar seu próprio erro; muitos níveis aninhados dificultam leitura e manutenção.
// Promises e async/await são alternativas para organizar esse tipo de encadeamento.

// =================================
// EXERCÍCIOS
// =================================

/*
EXERCICIO 1 - Simulando operações assíncronas:
- buscarUsuario(id, callback) -> aguarda 1s e retorna { id, nome: "João" }
- buscarEndereco(userId, callback) -> aguarda 1s e retorna { rua: "Av. Paulista", cidade: "São Paulo" }
- calcularFrete(cidade, callback) -> aguarda 1s e retorna o valor do frete

Encadeie as três operações: buscar o usuário, depois o endereço e, por fim, calcular o frete com a cidade do endereço.

EXERCICIO 2 - Callback com erro:
- se o id for menor que 1, chame callback(new Error("ID inválido"), null)
- se o id for maior que 100, chame callback(new Error("Usuário não encontrado"), null)
- caso contrário, retorne o usuário normalmente
- teste os ids 0, 50 e 200
*/

const buscarUsuario = (id, callback) => {
  if (id < 1) {
    return callback(new Error("ID inválido"), null);
  }

  if (id > 100) {
    return callback(new Error("Usuário não encontrado"), null);
  }

  setTimeout(() => {
    const usuario = { id, nome: "João" };
    callback(null, usuario);
  }, 1000);
};

const buscarEndereco = (userId, callback) => {
  setTimeout(() => {
    const endereco = { rua: "Av. Paulista", cidade: "São Paulo" };
    callback(null, endereco);
  }, 1000);
};

const calcularFrete = (cidade, callback) => {
  setTimeout(() => {
    const frete = { cidade, valor: 1200 };
    callback(null, frete);
  }, 1000);
};

const testarFluxo = (id) => {
  buscarUsuario(id, (erro, usuario) => {
    if (erro) {
      console.log("Erro ao buscar usuário:", erro.message);
      return;
    }

    buscarEndereco(usuario.id, (erroEndereco, endereco) => {
      if (erroEndereco) {
        console.log("Erro ao buscar endereço:", erroEndereco.message);
        return;
      }

      calcularFrete(endereco.cidade, (erroFrete, frete) => {
        if (erroFrete) {
          console.log("Erro ao calcular frete:", erroFrete.message);
          return;
        }

        console.log("Frete calculado:", frete);
      });
    });
  });
};

// Teste com ids válidos e inválidos
console.log("Teste com id 1:");
testarFluxo(1);

console.log("Teste com id 0:");
testarFluxo(0);

console.log("Teste com id 200:");
testarFluxo(200);

console.log("Teste com id 50:");
testarFluxo(50);
