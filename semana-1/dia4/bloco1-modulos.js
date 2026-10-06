// =================================
// TEORIA - apenas para estudo
// =================================

// Módulos permitem dividir o código em arquivos separados
// Cada arquivo é um módulo — tem seu próprio escopo
// O que não for exportado não existe fora do arquivo

// =================================
// COMMONJS — sistema antigo, ainda muito usado no Node.js
// =================================

// EXPORTAR (em outro arquivo, ex: matematica.js)
// module.exports = { somar, subtrair }
// ou exportar um item só:
// module.exports = somar

// IMPORTAR
// const { somar, subtrair } = require('./matematica')
// const somar = require('./matematica')

// =================================
// ES MODULES — sistema moderno
// =================================

// EXPORTAR (em outro arquivo)
// export const somar = (a, b) => a + b
// export default somar  // exportação padrão, só uma por arquivo

// IMPORTAR
// import { somar } from './matematica.js'
// import somar from './matematica.js'  // importa o default

// =================================
// QUAL USAR?
// =================================

// Node.js usa CommonJS por padrão (require/module.exports)
// Para usar ES Modules no Node, precisa de uma das duas:
// 1. Renomear o arquivo para .mjs
// 2. Adicionar "type": "module" no package.json

// No mercado você vai ver os dois. Aprenda os dois.
// Neste projeto vamos usar CommonJS por ser o padrão do Node.js
