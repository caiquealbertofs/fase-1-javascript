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
  setTimeout(() => {
    if (id < 1) {
      callback(new Error("ID inválido"), null);
    } else if (id > 100) {
      callback(new Error("Usuário não encontrado"), null);
    } else {
      callback(null, { id, nome: "João" });
    }
  }, 1000);
};
const buscarEndereco = (userId, callback) => {
  setTimeout(() => {
    callback(null, { rua: "Av. Paulista", cidade: "São Paulo" });
  }, 1000);
};
const calcularFrete = (cidade, callback) => {
  setTimeout(() => {
    callback(null, { valorFrete: 1000 });
  }, 1000);
};

buscarUsuario(1, (erro, usuario) => {
  if (erro) {
    console.log(erro.message);
    return;
  }
  console.log(usuario.id);
  buscarEndereco(usuario.id, (erro, endereco) => {
    calcularFrete(endereco.cidade, (erro, frete) => {
      console.log("Frete:", frete);
    });
  });
});

[0, 2, 50, 200].forEach((id) => {
  buscarUsuario(id, (erro, usuario) => {
    if (erro) {
      console.log(`ID ${id}: ${erro.message}`);
      return;
    }
    console.log(`ID ${id}:`, usuario);
  });
});
