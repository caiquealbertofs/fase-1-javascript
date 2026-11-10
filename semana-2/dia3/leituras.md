# Leituras — Semana 2, Dia 3

> Registro de estudo sobre os exercícios do Exercism (trilha JavaScript) feitos no Dia 2.
> Objetivo: entender o que eu escrevi, consultar documentação com método e comparar minha abordagem com outras.

## Como preencher

- **Parte 1:** preencha as colunas "Recebe", "Devolve" e "Altera o original?" **antes** de abrir qualquer documentação. Só depois preencha a última coluna, conferindo no MDN.
- **Parte 2:** escolha 3 exercícios, de preferência os que mais deram trabalho, e compare com 2 ou 3 soluções da comunidade.
- **Parte 3:** use o modelo nos próximos exercícios, durante a resolução.
- Escreva com suas palavras. Não cole trechos da documentação.

---

# Parte 1 — Explicando o que eu mesmo escrevi

Para cada exercício, abra a sua solução e liste os métodos e operadores que aparecem nela (por exemplo `indexOf`, `Set`, `%`, `includes`).

## hello-world

| Método / operador | Recebe | Devolve | Altera o original? | Conferência no MDN (certo / incompleto / errado) |
| ----------------- | ------ | ------- | ------------------ | ------------------------------------------------ |
| Nenhum            | Nenhum | Nenhum  | Nenhum             | Nenhum                                           |

## two-fer

| Método / operador | Recebe | Devolve | Altera o original? | Conferência no MDN (certo / incompleto / errado) |
| ----------------- | ------ | ------- | ------------------ | ------------------------------------------------ |
| Nenhum            | Nenhum | Nenhum  | Nenhum             | Nenhum                                           |

## resistor-color

| Método / operador | Recebe            | Devolve              | Altera o original? | Conferência no MDN (certo / incompleto / errado) |
| ----------------- | ----------------- | -------------------- | ------------------ | ------------------------------------------------ |
| !==               | request, "Colors" | true ou false        | Não                |                                                  |
| indexOf           | request           | Number(Índice ou -1) | Não                |                                                  |

## leap

| Método / operador | Recebe            | Devolve       | Altera o original? | Conferência no MDN (certo / incompleto / errado) |
| ----------------- | ----------------- | ------------- | ------------------ | ------------------------------------------------ |
| %                 | ano, 4, 100 e 400 | 0 ou Resto    | Não                |                                                  |
| ===               | 0, 4, 100 e 400   | true ou false | Não                |                                                  |

## raindrops

| Método / operador | Recebe                                     | Devolve       | Altera o original? | Conferência no MDN (certo / incompleto / errado) |
| ----------------- | ------------------------------------------ | ------------- | ------------------ | ------------------------------------------------ |
| =                 | resultado e ""                             | ""            | Não                |                                                  |
| %                 | num, 3, 5 e 7                              | 0 ou Resto    | Não                |                                                  |
| ===               | 0, 3, 5 e 7                                | true ou false | Não                |                                                  |
| +=                | variavel a esquerda e uma string a direita | String        | Sim                |

## collatz-conjecture

| Método / operador | Recebe                                          | Devolve                  | Altera o original? | Conferência no MDN (certo / incompleto / errado) |
| ----------------- | ----------------------------------------------- | ------------------------ | ------------------ | ------------------------------------------------ |
| <=                | num e 0                                         | true ou false            | Não                |                                                  |
| \|\|              | num <= 0 e !Number.isInteger(num)               | nada                     | Não                |                                                  |
| !                 | Number.isInteger(num)                           | true ou false            | Não                |                                                  |
| .isInteger        | num                                             | true ou false            | Não                |                                                  |
| =                 | variavel a esquerda e valor/expressão a direita | valor                    | Sim                |                                                  |
| >                 | variavel a esquerda e valor a direita           | true ou false            | Não                |                                                  |
| %                 | variavel a esquerda e valor a direita           | 0 ou Resto               | Não                |                                                  |
| !==               | expressão a esquerda e valor a direita          | true ou false            | Não                |                                                  |
| \*                | variavel a esquerda e valor a direita           | resultado da expressão   | Não                |                                                  |
| +                 | expressão a esquerda e valor a direita          | resultado da expressão   | Sim                |                                                  |
| ++                | variavel a esquerda                             | incrementa a variavel +1 | Sim                |                                                  |
| /                 | variavel a esquerda e valor a direita           | resultado da expressão   | Sim                |                                                  |

## pangram

| Método / operador | Recebe                                          | Devolve                  | Altera o original? | Conferência no MDN (certo / incompleto / errado) |
| ----------------- | ----------------------------------------------- | ------------------------ | ------------------ | ------------------------------------------------ |
| =                 | variavel a esquerda e lista ou string a direita | lista                    | Sim                |                                                  |
| .toLowerCase      | parámetro                                       | parametro em caixa baixa | Sim                |                                                  |
| .every            | variavel                                        | true ou false            | Não                |                                                  |
| .includes         | variavel                                        | true ou false            | Não                |                                                  |

## isogram

| Método / operador | Recebe                                    | Devolve       | Altera o original? | Conferência no MDN (certo / incompleto / errado) |
| ----------------- | ----------------------------------------- | ------------- | ------------------ | ------------------------------------------------ |
| =                 | variavel a esquerda e parametro a direita | string        | Sim                |                                                  |
| .toLoweCase       | parametro                                 | string        | Sim                |                                                  |
| .split            | parametro                                 | string        | Sim                |                                                  |
| .every            | variavel                                  | true ou false | Não                |                                                  |
| ===               | strings ou variaveis                      | true ou false | Não                |                                                  |
| .indexOf          | variavel                                  | Number        | Não                |                                                  |
| .lastIndexOf      | variavel                                  | Number        | Não                |                                                  |

## word-count

| Método / operador | Recebe                                                      | Devolve                 | Altera o original? | Conferência no MDN (certo / incompleto / errado) |
| ----------------- | ----------------------------------------------------------- | ----------------------- | ------------------ | ------------------------------------------------ |
| =                 | variavel a esquerda e parametro, objeto ou Number a direita | string ou objeto        | Sim                |                                                  |
| .toLowerCase      | parametro                                                   | string                  | Sim                |                                                  |
| .match            | parametro                                                   | Array ou null           | Não                |                                                  |
| !==               | variavel a esquerda e undefined a direita                   | true ou false           | Não                |                                                  |
| ++                | objeto a esquerda                                           | incrementa ao objeto +1 | Sim                |                                                  |

> Se alguma solução não usar nenhum método (por exemplo o `hello-world`), escreva isso e siga para a próxima.

---

# Parte 2 — Comparando com a comunidade

Escolha 3 exercícios e leia 2 ou 3 soluções da comunidade para cada um. Não copie nem reescreva a sua solução ainda: o objetivo é entender.

Foi escolhido os 3 ultimos, pangram, isogram e word-count

## Comparação 1

**Exercício: pangram**

- **Minha abordagem: criar array com o alfabeto, transformar o parametro em caixa baixa em uma variavel,e depois verificar se a variavel contem todas as letras da variavel alfabeto**
- **Abordagem encontrada: utilizando Set() com o parametro para já excluir as duplicidades, transformando diretamente em caixa baixa, diretamente o .match com o alfabeto e .size verificando se da 26**
- **O que ela faz diferente: basicamente já tira as duplicatas em vez de ler letra por letra**
- **Por que funciona (com minhas palavras): Um pangram precisa conter as 26 letras do alfabeto, e o Set permite contar de forma mais direta**
- **Quando eu preferiria uma ou outra: Apenas preferiria usar a abordagem encontrada, muito mais simples e rápida de ser fazer**

## Comparação 2

**Exercício: isogram**

- **Minha abordagem: transformar o parametro em uma variavel com caixa baixa e .split para separar cada caractere em uma lista, depois "tiro" espaços e hifens da lista, para retornar se existem 2 index iguais vende em ordam crescente e decrescente**
- **Abordagem encontrada: export const isIsogram = input => ! /(\w).\*\1/i.test(input);, eu se quer sei explicar exatamente oque é isso**
- **O que ela faz diferente: muito menos código, e utiliza RegEx**
- **Por que funciona (com minhas palavras): Não sei dizer**
- **Quando eu preferiria uma ou outra: Preferiria a abordagem encontrada, apesar de não saber exatamente como funciona, parece ser muito mais simples**

## Comparação 3

**Exercício: word-count**

- **Minha abordagem: cria uma variavel com a lista de palavras, transformando em caixa baixa, utilizando RegEx(auxiliado pelo gpt), depois cria um objeto que conta as palavras, e se já existir adiciona 1, se não inicia a contagem**
- **Abordagem encontrada: export const countWords = phrase => phrase.toLowerCase().match(/\w+('\w+)?/g).reduce((counts, word) => ({ ...counts, [word]: ~~counts[word] + 1 }), {}); , também existem muitas coisas que se quer não entendo ainda, porem novamente utiliza RegEx e aparentemente tornando a solução mais simples**
- **O que ela faz diferente: Não sei dizer**
- **Por que funciona (com minhas palavras):**
- **Quando eu preferiria uma ou outra: Preferiria a abordagem encontrada, apesar de não saber exatamente como funciona, parece ser muito mais simples**

---

# Parte 3 — Registro durante a resolução (para os próximos exercícios)

Preencha enquanto resolve, em 1 ou 2 linhas por item. Copie este modelo para cada exercício novo.

## nome-do-exercicio

- **Travei em:**
- **Consultei:**
- **Apliquei assim:**

---

# Critério de domínio do dia

- [ ] Escolhi 3 métodos da Parte 1 e expliquei cada um em voz alta, sem olhar o código nem a documentação
- [ ] Nas 3 comparações da Parte 2, expliquei por que a solução alternativa passa nos testes

**Pontos em que travei (entram na revisão):**

-

# Revisão após experimentação

| Trecho                 | O que eu previ            | O que apareceu            | O que concluí (minhas palavras)                                                                      |
| ---------------------- | ------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------- |
| toUpperCase: `t` e `u` | "Ola Mundo" e "OLA MUNDO" | "Ola Mundo" e "OLA MUNDO" | Exatamente como o esperado, toUpperCase() altera o T para caixa alta e o guarda em uma nova variavel |
| split + length         | 3                         | 3                         | Exatamente como o esperado, o resultado é a quantidade de elementos                                  |
| n = n / 2              | 5                         | 5                         | Exatamente como o esperado, o N que era 10 foi dividido por 2 virando 5                              |

toLowerCase() = altera uma string para todas as letras em caixa baixa
split() = cria um array separando uma string em partes, e a string é separada pelo separado escolhido dentro do (), pode também ser escolhido quantas vezes sera separado
every() = every testa se todos os elementos de um array passam em um teste que vai dentro do ()
match() = cria um array separando partes de uma string com expressões regulares(RegEx)
