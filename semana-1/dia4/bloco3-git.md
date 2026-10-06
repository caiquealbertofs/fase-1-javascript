# Git — Comandos essenciais

## Configuração inicial (já feita, só referência)

git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

## Iniciando um repositório

git init # inicia o git na pasta atual
git clone <url> # clona um repositório existente

## Fluxo diário

git status # mostra o estado atual dos arquivos
git add . # adiciona todos os arquivos modificados
git add arquivo.js # adiciona um arquivo específico
git commit -m "mensagem" # salva um ponto na história
git push # envia para o GitHub
git pull # baixa atualizações do GitHub

## Boas mensagens de commit

# Ruim:

git commit -m "alterações"
git commit -m "fix"

# Bom (padrão do mercado):

git commit -m "feat: adiciona calculadora de gorjeta"
git commit -m "fix: corrige divisão por zero na calculadora"
git commit -m "refactor: separa funções em módulos"
git commit -m "docs: atualiza README com instruções de uso"

## Prefixos padrão:

# feat — nova funcionalidade

# fix — correção de bug

# refactor — melhoria sem mudar comportamento

# docs — documentação

# chore — configuração, dependências

## Branches (você vai usar mais na Fase 2)

git branch # lista branches
git branch nome-da-branch # cria uma branch
git checkout nome-da-branch # muda para a branch
git merge nome-da-branch # mescla a branch na atual

## Desfazendo coisas

git restore arquivo.js # descarta mudanças não commitadas
git reset HEAD~1 # desfaz o último commit (mantém arquivos)
