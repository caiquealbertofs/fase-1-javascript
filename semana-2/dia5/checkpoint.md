Qual a diferença entre let e const? = let é uma variavel alteravel, const é uma variavel não alteravel
O que é escopo? O que acontece com uma variável let declarada dentro de um if? = Escopo é como se fosse um bloco, e ai um let dentro de um if esta apenas dentro daquele escopo(bloco)
O que .map(), .filter() e .find() devolvem? Alteram o array original? = O .map() mapea um array, pegando cada elemento e cria outro novo com uma modificação exemplo somar +3 emt todos os numeros, o .filter() filtra elementos de um array e cria outro com o resultado, e o .find() cria um array novo com elementos que procurou em outro array.
toUpperCase() altera a string? Como guardar o resultado? = toUpperCase() cria uma nova string, então tem que ser criada uma nova variavel para guardar o resultado
Quais são os 3 estados de uma Promise? = não lembro
Qual a diferença entre Promise.all e Promise.allSettled? = Promise.all todas são feitas, porem se uma falhar o processo não continua, o Promise.allSettled todas são feitas independente de se alguma falhar
O que o await faz e onde só pode ser usado? = await espera algo ser concluido para que o código siga, é bom para quando algo vai demorar mais para carregar que o código todo, ou quando exige que aquilo seja feito antes para que não de erro
O que o module.exports faz e como importar o que foi exportado? = module.exports exporta coisas de um arquivo para outro, e ara importar crie ua variavel const {importado} = require("arquivo.js")
Como funciona try/catch/finally? O que roda e quando? = try é literalmente uma tentativa, o código tenta algo que vai dentro dele, e o catch captura por exemplo erros e o exibe, o finally e para fazer algo independendo do true false ou erro do código
O que é callback hell e como async/await ajuda? = callback hell é a aninhação de varios callback que acaba dando erro, e o async/await resolve isso fazendo um esperar o outro para terminar
