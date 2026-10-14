// =================================
// TEORIA — APENAS PARA ESTUDO
// =================================

// Erros acontecem. O código profissional os antecipa e trata.
// Sem tratamento, um erro derruba toda a aplicação.

// =================================
// TRY/CATCH — captura erros em tempo de execução
// =================================

try {
  // código que pode dar erro
  const resultado = 10 / 0;
  console.log(resultado); // Infinity — JavaScript não lança erro aqui

  JSON.parse("isso não é json"); // isso lança um erro
} catch (erro) {
  console.log("Deu erro:", erro.message);
} finally {
  console.log("Isso executa sempre, com ou sem erro");
}

// =================================
// THROW — lançar erros intencionalmente
// =================================

const dividir = (a, b) => {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida");
  }
  return a / b;
};

try {
  console.log(dividir(10, 2)); // 5
  console.log(dividir(10, 0)); // lança erro
} catch (erro) {
  console.log(erro.message); // "Divisão por zero não é permitida"
}

// =================================
// CLASSES DE ERRO PERSONALIZADAS
// =================================

// Erros genéricos não explicam o que aconteceu.
// Crie erros específicos para cada situação.

class ErroValidacao extends Error {
  constructor(mensagem, campo) {
    super(mensagem);
    this.name = "ErroValidacao";
    this.campo = campo;
  }
}

class ErroNaoEncontrado extends Error {
  constructor(recurso) {
    super(`${recurso} não encontrado`);
    this.name = "ErroNaoEncontrado";
  }
}

// Usando erros personalizados.
const buscarUsuario = (id) => {
  const usuarios = [
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" },
  ];
  const usuario = usuarios.find((u) => u.id === id);
  if (!usuario) {
    throw new ErroNaoEncontrado("Usuário");
  }
  return usuario;
};

try {
  console.log(buscarUsuario(1)); // { id: 1, nome: "João" }
  console.log(buscarUsuario(5)); // lança ErroNaoEncontrado
} catch (erro) {
  if (erro instanceof ErroNaoEncontrado) {
    console.log(`[${erro.name}] ${erro.message}`);
  } else {
    console.log("Erro inesperado:", erro.message);
  }
}

// =================================
// VALIDAÇÃO DE DADOS — PADRÃO DO MERCADO
// =================================

const validarIdade = (idade) => {
  if (typeof idade !== "number") {
    throw new ErroValidacao("Idade deve ser um número", "idade");
  }
  if (idade < 0 || idade > 120) {
    throw new ErroValidacao("Idade inválida", "idade");
  }
  return true;
};

try {
  validarIdade(25); // ok
  validarIdade(-5); // lança ErroValidacao
} catch (erro) {
  console.log(`Campo: ${erro.campo} | Erro: ${erro.message}`);
}

// =================================
// EXERCÍCIOS
// =================================

/*
EXERCÍCIO 1 — Validação de cadastro:
Crie validarCadastro(usuario), que recebe um objeto e valida:
- Nome: string com pelo menos três caracteres.
- Email: string que contenha @.
- Idade: número entre 18 e 100.
- Senha: pelo menos seis caracteres.

Lance ErroValidacao com mensagem e campo específicos para cada caso.
Teste dados válidos e inválidos.
*/
const validarCadastro = (usuario) => {
  if (!usuario || typeof usuario !== "object") {
    throw new ErroValidacao("Usuário deve ser um objeto", "usuario");
  }

  if (typeof usuario.nome !== "string" || usuario.nome.trim().length < 3) {
    throw new ErroValidacao(
      "Nome deve ser uma string com pelo menos 3 caracteres",
      "nome",
    );
  }

  if (typeof usuario.email !== "string" || !usuario.email.includes("@")) {
    throw new ErroValidacao("Email deve ser uma string contendo @", "email");
  }

  if (
    typeof usuario.idade !== "number" ||
    usuario.idade < 18 ||
    usuario.idade > 100
  ) {
    throw new ErroValidacao("Idade deve ser um número entre 18 e 100", "idade");
  }

  if (typeof usuario.senha !== "string" || usuario.senha.length < 6) {
    throw new ErroValidacao("Senha deve ter pelo menos 6 caracteres", "senha");
  }

  return true;
};

try {
  console.log(
    validarCadastro({
      nome: "Ana",
      email: "ana@email.com",
      idade: 25,
      senha: "123456",
    }),
  );
  console.log(
    validarCadastro({
      nome: "A",
      email: "ana@email.com",
      idade: 25,
      senha: "123456",
    }),
  );
} catch (erro) {
  console.log(`Campo: ${erro.campo} | Erro: ${erro.message}`);
}

/*
EXERCÍCIO 2 — Calculadora segura:
Crie calcular(a, operacao, b), que:
- Aceite as operações somar, subtrair, multiplicar e dividir.
- Lance um erro se a operação não existir.
- Lance um erro ao tentar dividir por zero.
- Lance um erro se a ou b não forem números.
- Retorne o resultado formatado, por exemplo: "10 + 5 = 15".
- Seja testada em pelo menos cinco cenários, incluindo sucesso e erro.
*/
const calcular = (a, operacao, b) => {
  if (a === undefined || operacao === undefined || b === undefined) {
    throw new ErroValidacao("Operação não existe", ["a", "operacao", "b"]);
  }
  if (b === 0 && operacao === "/") {
    throw new Error("Não é possivel dividir por 0", "b");
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new ErroValidacao("Não é um numero.", ["a", "b"]);
  }
  if (!["+", "-", "*", "/"].includes(operacao)) {
    throw new ErroValidacao("Não é um Operador Númerico.");
  }

  let resultadoOperacao = null;
  if (operacao === "+") {
    resultadoOperacao = a + b;
  } else if (operacao === "-") {
    resultadoOperacao = a - b;
  } else if (operacao === "*") {
    resultadoOperacao = a * b;
  } else if (operacao === "/") {
    resultadoOperacao = a / b;
  }

  return `${a} ${operacao} ${b} = ${resultadoOperacao}`;
};

try {
  console.log(calcular(3, "/", 0));
} catch (erro) {
  console.log(`Campo: ${erro.campo} | Erro: ${erro.message}`);
}
try {
  console.log(calcular(3, "+"));
} catch (erro) {
  console.log(`Campo: ${erro.campo} | Erro: ${erro.message}`);
}
try {
  console.log(calcular(14, "*", 10));
} catch (erro) {
  console.log(`Campo: ${erro.campo} | Erro: ${erro.message}`);
}
try {
  console.log(calcular(7, "-", 21));
} catch (erro) {
  console.log(`Campo: ${erro.campo} | Erro: ${erro.message}`);
}
try {
  console.log(calcular(4096, "/", 4));
} catch (erro) {
  console.log(`Campo: ${erro.campo} | Erro: ${erro.message}`);
}

/*
EXERCÍCIO 3 — Sistema de busca com erros:
Crie um array de produtos com pelo menos cinco objetos (id, nome e preço).
Depois, crie:
- buscarPorId(id), que lance ErroNaoEncontrado se não encontrar o produto.
- buscarPorNome(nome), que lance ErroNaoEncontrado se não encontrar o produto.
- atualizePreco(id, novoPreco), que lance um erro se o preço for negativo,
  zero ou não for um número.
*/
const produtos = [
  { id: 1, nome: "Teclado", preco: 150 },
  { id: 2, nome: "Mouse", preco: 80 },
  { id: 3, nome: "Monitor", preco: 900 },
  { id: 4, nome: "Headset", preco: 200 },
  { id: 5, nome: "Webcam", preco: 250 },
];

const buscarProdutoPorId = (id) => {
  const produto = produtos.find((produto) => produto.id === id);
  if (produto === undefined) {
    throw new ErroNaoEncontrado("id");
  }
  return produto;
};

const buscarPorNome = (nome) => {
  const produto = produtos.find((produto) => produto.nome === nome);
  if (produto === undefined) {
    throw new ErroNaoEncontrado("nome");
  }
  return produto;
};

const atualizePreco = (id, novopreco) => {
  const produto = produtos.find((produto) => produto.id === id);
  if (produto === undefined) {
    throw new ErroNaoEncontrado("id");
  }
  if (novopreco <= 0 || typeof novopreco !== "number") {
    throw new ErroValidacao(
      "Novo Preço não pode ser 0 ou negativo",
      "novopreco",
    );
  }
  produto.preco = novopreco;
  return produto;
};

try {
  console.log(buscarProdutoPorId(1));
} catch (erro) {
  if (erro instanceof ErroNaoEncontrado) {
    console.log(`[${erro.name}] ${erro.message}`);
  } else {
    console.log(`Campo: ${erro.campo} | Erro: ${erro.message}`);
  }
}
try {
  console.log(buscarProdutoPorId(6));
} catch (erro) {
  if (erro instanceof ErroNaoEncontrado) {
    console.log(`[${erro.name}] ${erro.message}`);
  } else {
    console.log(`Campo: ${erro.campo} | Erro: ${erro.message}`);
  }
}
try {
  console.log(buscarPorNome("Mouse"));
} catch (erro) {
  if (erro instanceof ErroNaoEncontrado) {
    console.log(`[${erro.name}] ${erro.message}`);
  } else {
    console.log(`Campo: ${erro.campo} | Erro: ${erro.message}`);
  }
}
try {
  console.log(buscarPorNome("Mouse Pad"));
} catch (erro) {
  if (erro instanceof ErroNaoEncontrado) {
    console.log(`[${erro.name}] ${erro.message}`);
  } else {
    console.log(`Campo: ${erro.campo} | Erro: ${erro.message}`);
  }
}
try {
  console.log(atualizePreco(2, 90));
} catch (erro) {
  if (erro instanceof ErroNaoEncontrado) {
    console.log(`[${erro.name}] ${erro.message}`);
  } else {
    console.log(`Campo: ${erro.campo} | Erro: ${erro.message}`);
  }
}
try {
  console.log(atualizePreco(2, "90"));
} catch (erro) {
  if (erro instanceof ErroNaoEncontrado) {
    console.log(`[${erro.name}] ${erro.message}`);
  } else {
    console.log(`Campo: ${erro.campo} | Erro: ${erro.message}`);
  }
}
