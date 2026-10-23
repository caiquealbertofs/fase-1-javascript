// =================================
// TEORIA - apenas para estudo
// =================================

// Async/await é açúcar sintático sobre Promises
// O mesmo comportamento, escrita mais limpa e fácil de ler
// Por baixo dos panos ainda são Promises

// =================================
// ASYNC/AWAIT BÁSICO
// =================================

// async transforma a função em uma Promise automaticamente
// await pausa a execução até a Promise resolver
const buscarUsuarioTeoria = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 1) reject(new Error("ID inválido"));
      else resolve({ id, nome: "João" });
    }, 1000);
  });
};

const buscarEnderecoTeoria = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ rua: "Av. Paulista", cidade: "São Paulo" });
    }, 1000);
  });
};

const calcularFreteTeoria = (cidade) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ cidade, valorFrete: 1200 });
    }, 1000);
  });
};

const buscarPedidosTeoria = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 101, produto: "Livro" }]);
    }, 1000);
  });
};

const buscarNotificacoesTeoria = (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ mensagem: "Pedido enviado" }]);
    }, 1000);
  });
};

// Com .then() — funciona mas é menos legível
buscarUsuarioTeoria(1)
  .then((usuario) => console.log(usuario))
  .catch((erro) => console.log(erro.message));

// Com async/await — lê como código síncrono
const mainTeoria = async () => {
  const usuario = await buscarUsuarioTeoria(1);
  console.log(usuario);
};
mainTeoria();

// =================================
// TRATAMENTO DE ERROS COM TRY/CATCH
// =================================
const executarTeoria = async () => {
  try {
    const usuarioTeoria = await buscarUsuarioTeoria(1);
    console.log("Usuário:", usuarioTeoria);

    const enderecoTeoria = await buscarEnderecoTeoria(usuarioTeoria.id);
    console.log("Endereço:", enderecoTeoria);

    const freteTeoria = await calcularFreteTeoria(enderecoTeoria.cidade);
    console.log("Frete:", freteTeoria);
  } catch (erro) {
    console.log("Erro:", erro.message);
  } finally {
    console.log("Finalizado");
  }
};
executarTeoria();

// =================================
// ASYNC/AWAIT COM PROMISE.ALL
// =================================

// await funciona com Promise.all também
const buscarTudo = async () => {
  try {
    const [usuario, pedidos, notificacoes] = await Promise.all([
      buscarUsuarioTeoria(1),
      buscarPedidosTeoria(1),
      buscarNotificacoesTeoria(1),
    ]);
    console.log({ usuario, pedidos, notificacoes });
  } catch (erro) {
    console.log(erro.message);
  }
};

buscarTudo();

// =================================
// ERRO COMUM — await fora de async
// =================================

// Isso dá erro:
// const usuario = await buscarUsuario(1) //  SyntaxError

// await só funciona dentro de funções async
// A solução é sempre envolver em uma função async e chamá-la:
const init = async () => {
  const usuario = await buscarUsuarioTeoria(1);
};
init();

// =================================
// LOOP COM ASYNC/AWAIT
// =================================
const idsTeoria = [1, 2, 3, 4, 5];

// Sequencial — um por vez (mais lento)
const buscarSequencial = async () => {
  for (const id of idsTeoria) {
    const usuario = await buscarUsuarioTeoria(id);
    console.log(usuario);
  }
};

// Paralelo — todos ao mesmo tempo (mais rápido)
const buscarParalelo = async () => {
  const usuarios = await Promise.all(
    idsTeoria.map((id) => buscarUsuarioTeoria(id)),
  );
  console.log(usuarios);
};

// =================================
// EXERCÍCIOS
// =================================

/*
EXERCÍCIO 1 — Reescrevendo com async/await:
- Pegue o exercício 1 do Bloco 2 (buscarUsuario, buscarEndereco, calcularFrete com Promises).
- Reescreva usando async/await com try/catch.
- Compare os três códigos: callback, Promise e async/await fazendo a mesma coisa.
*/
const buscarUsuario = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 1) {
        reject(new Error("ID inválido"));
      } else if (id > 100) {
        reject(new Error("Usuário não encontrado"));
      } else {
        resolve({ id, nome: "Guilherme" });
      }
    }, 1000);
  });
};

const buscarEndereco = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ rua: "Av. Paulista", cidade: "São Paulo" });
    }, 1000);
  });
};

const calcularFrete = (cidade) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ valorFrete: 1000 });
    }, 1000);
  });
};

const executar = async () => {
  try {
    const usuario = await buscarUsuario(1);
    const endereco = await buscarEndereco(usuario.id);
    const frete = await calcularFrete(endereco.cidade);
    console.log({ usuario, endereco, frete });
  } catch (erro) {
    console.log(erro.message);
  }
};
executar();

/*
EXERCÍCIO 2 — Buscando dados de API real:
- Use o fetch para buscar dados reais da PokeAPI.
- Crie uma função async buscarPokemon(nome) que:
  - Busque https://pokeapi.co/api/v2/pokemon/${nome}.
  - Retorne um objeto com nome, altura, peso e tipos do pokémon.
  - Lance um erro se o pokémon não existir.
- Teste com "pikachu", "charizard" e "pokemon-inexistente".
*/
/*
EXERCÍCIO 3 — Múltiplas buscas:
- Crie um array ["bulbasaur", "charmander", "squirtle"].
- Use Promise.all com async/await para buscar os três ao mesmo tempo.
- Imprima uma tabela comparando nome, altura e peso dos três.
*/

const listaPokemons = [
  "pikachu",
  "charizard",
  "bulbasaur",
  "charmander",
  "squirtle",
];

const buscarPokemon = async (nome) => {
  const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
  if (!resposta.ok) {
    throw new Error("Pokemon Inexistente");
  }
  const dados = await resposta.json();
  const pokemon = {
    nome: dados.name,
    altura: `${dados.height * 10} cm`,
    peso: `${dados.weight / 10} kg`,
    tipo: dados.types.map((elemento) => elemento.type.name),
  };
  return pokemon;
};

const buscarListaPokemons = async (lista) => {
  const resultado = await Promise.all(lista.map((nome) => buscarPokemon(nome)));
  const tabela = resultado.map((pokemon) => {
    const { nome, altura, peso } = pokemon;
    return { nome, altura, peso };
  });
  console.table(tabela);
};

buscarListaPokemons(listaPokemons);
