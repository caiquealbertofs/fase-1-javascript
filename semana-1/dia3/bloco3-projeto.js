// =================================
// PROJETO — SISTEMA DE NOTAS ESCOLAR
// =================================

/*
Crie um array turma com pelo menos 10 alunos. Cada aluno deve ser um objeto
com nome, nota e turno (manhã, tarde ou noite).

Depois, crie as seguintes funções:
- listarAprovados(turma): retorna os alunos com nota >= 7.
- listarReprovados(turma): retorna os alunos com nota < 5.
- calcularMedia(turma): retorna a média geral com duas casas decimais.
- melhorAluno(turma): retorna o aluno com a melhor nota.
  Dica: use reduce().
- alunosPorTurno(turma, turno): retorna os alunos daquele turno.
*/

let turma = [
  { nome: "João", notas: [7, 8, 9], turno: "manha" },
  { nome: "Maria", notas: [10, 9, 8], turno: "tarde" },
  { nome: "Pedro", notas: [7, 8, 9], turno: "manha" },
  { nome: "Lucas", notas: [4, 5, 3], turno: "MANHA" },
  { nome: "Ana", notas: [6, 6, 6], turno: "noite" },
  { nome: "Bruno", notas: [6, 7, 8], turno: "TARDE" },
  { nome: "Carla", notas: [9, 10, 8], turno: "manha" },
  { nome: "Daniel", notas: [5, 4, 6], turno: "NOITE" },
  { nome: "Eduarda", notas: [8, 9, 7], turno: "tarde" },
  { nome: "Felipe", notas: [3, 2, 4], turno: "manha" },
];

const calcularMediaAluno = (aluno) => {
  return aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
};

const listarAprovados = (turma) => {
  return turma.filter((aluno) => calcularMediaAluno(aluno) >= 7);
};

const listarReprovados = (turma) => {
  return turma.filter((aluno) => calcularMediaAluno(aluno) < 5);
};

const calcularMedia = (turma) => {
  const totalNotas = turma.reduce((acc, aluno) => {
    return acc + calcularMediaAluno(aluno);
  }, 0);

  return (totalNotas / turma.length).toFixed(2);
};

const melhorAluno = (turma) => {
  return turma.reduce((melhor, aluno) => {
    return calcularMediaAluno(aluno) > calcularMediaAluno(melhor)
      ? aluno
      : melhor;
  });
};

const alunosPorTurno = (turma, turno) => {
  return turma.filter((aluno) => aluno.turno === turno.toLowerCase());
};

const nomesAprovados = listarAprovados(turma)
  .map((aluno) => aluno.nome)
  .join(", ");
const nomesReprovados = listarReprovados(turma)
  .map((aluno) => aluno.nome)
  .join(", ");
const alunosManha = alunosPorTurno(turma, "manha")
  .map((aluno) => aluno.nome)
  .join(", ");
const melhor = melhorAluno(turma);
const melhorNota = Math.max(...melhor.notas);

console.log("===== SISTEMA DE NOTAS =====");
console.log(`Aprovados: ${nomesAprovados}`);
console.log(`Reprovados: ${nomesReprovados}`);
console.log(`Média da turma: ${calcularMedia(turma)}`);
console.log(`Melhor aluno: ${melhor.nome} (nota ${melhorNota})`);
console.log(`Alunos da manhã: ${alunosManha}`);
console.log("============================");
