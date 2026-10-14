// =================================
// TEORIA — APENAS PARA ESTUDO
// =================================

// Módulos permitem dividir o código em arquivos separados.
// Cada arquivo é um módulo com seu próprio escopo.
// O que não for exportado não fica disponível fora do arquivo.

// =================================
// COMMONJS — SISTEMA ANTIGO, AINDA MUITO USADO NO NODE.JS
// =================================

// Exportar (em outro arquivo, por exemplo, matematica.js):
// module.exports = { somar, subtrair }
// Ou exportar apenas um item:
// module.exports = somar

// Importar:
// const { somar, subtrair } = require('./matematica')
// const somar = require('./matematica')

// =================================
// ES MODULES — SISTEMA MODERNO
// =================================

// Exportar (em outro arquivo):
// export const somar = (a, b) => a + b
// export default somar  // exportação padrão, só uma por arquivo

// Importar:
// import { somar } from './matematica.js'
// import somar from './matematica.js'  // importa o default

// =================================
// QUAL USAR?
// =================================

// Node.js usa CommonJS por padrão (require/module.exports).
// Para usar ES Modules no Node, precisa de uma das duas:
// 1. Renomear o arquivo para .mjs.
// 2. Adicionar "type": "module" no package.json.

// No mercado, você encontrará os dois formatos; aprenda ambos.
// Neste projeto, usaremos CommonJS por ser o padrão do Node.js.
