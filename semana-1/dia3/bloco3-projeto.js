/*PROJETO DO DIA - SISTEMA DE NOTAS ESCOLAR: CRIE UM ARRAY TURMA COM PELO MENO 10 ALUNOS, CADA ALUNO É UM OBJETO COM NOME, NOTA E TURNO (MANHA, TARDE OU NOITE). DEPOIS CRIE FUNCOES PARA: LISTARAPROVADOS(TURMA) -  RETORNA ARRAY COM OBJETOS DOS ALUNOS COM NOTA >=7. LISTARREPROVADOS(TURMA) -  RETORNA ARRAY COM OBJETOS DOS ALUNOS COM NOTA <5. CALCULARMEDIA(TURMA) RETORNA A MEDIA GERAL DA TURMA COM 2 CASAS DECIMAIS. MELHORALUNO(TURMA) - RETORNA O ALUNO COM A MELHOR NOTA(DICA: USE .REDUCE()). ALUNOSPORTURNO(TURMA, TURNO) - RECEBE A TURMA E O TURNO E RETORNA SÓ O ALUNOS DAQUELE TURNO */

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
