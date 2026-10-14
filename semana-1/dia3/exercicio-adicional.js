// =================================
// EXERCÍCIO ADICIONAL — ELEIÇÃO
// =================================

/*
Use o array eleicao com pelo menos 15 objetos. Cada objeto deve ter nome,
estado (cinco estados no total), número, votos e partido (três partidos).

Com apenas 10 cadeiras, descubra quais candidatos foram eleitos usando:
- Sistema proporcional de lista aberta.
- Sistema proporcional de lista fechada.
- Sistema majoritário simples.

Imprima os resultados dos três sistemas.
Dica: use new Set(...) para obter valores sem repetição e .size para contar.
*/
console.log("===== EXERCICIO ADICIONAL - ELEIÇÃO =====");

const cadeiras = 10;
const eleicao = [
  {
    id: 1,
    nome: "João Silva",
    estado: "SP",
    numero: 10842,
    votos: 87342156,
    partido: "Partido A",
  },
  {
    id: 2,
    nome: "Maria Souza",
    estado: "RJ",
    numero: 30721,
    votos: 64281739,
    partido: "Partido C",
  },
  {
    id: 3,
    nome: "Carlos Oliveira",
    estado: "MG",
    numero: 20516,
    votos: 91836452,
    partido: "Partido B",
  },
  {
    id: 4,
    nome: "Ana Santos",
    estado: "BA",
    numero: 10138,
    votos: 57391824,
    partido: "Partido A",
  },
  {
    id: 5,
    nome: "Pedro Costa",
    estado: "PR",
    numero: 20264,
    votos: 74629183,
    partido: "Partido B",
  },
  {
    id: 6,
    nome: "Lucas Pereira",
    estado: "SP",
    numero: 30927,
    votos: 48172635,
    partido: "Partido C",
  },
  {
    id: 7,
    nome: "Juliana Alves",
    estado: "RJ",
    numero: 10673,
    votos: 82937461,
    partido: "Partido A",
  },
  {
    id: 8,
    nome: "Rafael Lima",
    estado: "MG",
    numero: 30345,
    votos: 63481927,
    partido: "Partido C",
  },
  {
    id: 9,
    nome: "Fernanda Rocha",
    estado: "BA",
    numero: 20859,
    votos: 95726384,
    partido: "Partido B",
  },
  {
    id: 10,
    nome: "Bruno Martins",
    estado: "PR",
    numero: 10127,
    votos: 52917463,
    partido: "Partido A",
  },
  {
    id: 11,
    nome: "Gabriel Mendes",
    estado: "SP",
    numero: 20764,
    votos: 68143925,
    partido: "Partido B",
  },
  {
    id: 12,
    nome: "Camila Ferreira",
    estado: "RJ",
    numero: 30192,
    votos: 39751846,
    partido: "Partido C",
  },
  {
    id: 13,
    nome: "Diego Barbosa",
    estado: "MG",
    numero: 10487,
    votos: 71293658,
    partido: "Partido A",
  },
  {
    id: 14,
    nome: "Larissa Gomes",
    estado: "BA",
    numero: 30651,
    votos: 46821739,
    partido: "Partido C",
  },
  {
    id: 15,
    nome: "Thiago Ribeiro",
    estado: "PR",
    numero: 20973,
    votos: 55141753,
    partido: "Partido B",
  },
];

const partidos = [...new Set(eleicao.map((candidato) => candidato.partido))];
const estados = [...new Set(eleicao.map((candidato) => candidato.estado))];
const cadeirasPorEstado = cadeiras / estados.length;

const distribuirCadeiras = (eleicao) => {
  return estados.flatMap((estado) => {
    const votosPorPartido = Object.fromEntries(
      partidos.map((partido) => [
        partido,
        eleicao
          .filter(
            (candidato) =>
              candidato.estado === estado && candidato.partido === partido,
          )
          .reduce((total, candidato) => total + candidato.votos, 0),
      ]),
    );
    const cadeirasPorPartido = Object.fromEntries(
      partidos.map((partido) => [partido, 0]),
    );

    for (let cadeira = 0; cadeira < cadeirasPorEstado; cadeira++) {
      const vencedor = partidos
        .map((partido) => ({
          partido,
          media: votosPorPartido[partido] / (cadeirasPorPartido[partido] + 1),
        }))
        .sort(
          (a, b) => b.media - a.media || a.partido.localeCompare(b.partido),
        )[0];

      cadeirasPorPartido[vencedor.partido]++;
    }

    return partidos
      .filter((partido) => cadeirasPorPartido[partido] > 0)
      .map((partido) => ({
        estado,
        partido,
        cadeiras: cadeirasPorPartido[partido],
      }));
  });
};

const eleitosProporcionais = (eleicao, compararCandidatos) => {
  const distribuicao = distribuirCadeiras(eleicao);

  return distribuicao
    .flatMap(({ estado, partido, cadeiras }) =>
      eleicao
        .filter(
          (candidato) =>
            candidato.estado === estado && candidato.partido === partido,
        )
        .sort(compararCandidatos)
        .slice(0, cadeiras),
    )
    .sort(
      (a, b) => a.estado.localeCompare(b.estado) || compararCandidatos(a, b),
    );
};

const eleitosListaAberta = (eleicao) =>
  eleitosProporcionais(eleicao, (a, b) => b.votos - a.votos);

const eleitosListaFechada = (eleicao) =>
  eleitosProporcionais(eleicao, (a, b) => a.id - b.id);

const eleitosMajoritaria = (eleicao) => {
  return estados.flatMap((estado) =>
    eleicao
      .filter((candidato) => candidato.estado === estado)
      .sort((a, b) => b.votos - a.votos)
      .slice(0, cadeirasPorEstado),
  );
};

const exibirEleitos = (titulo, eleitos) => {
  const votosFormatados = new Intl.NumberFormat("pt-BR");

  console.log(`\n========== ${titulo} ==========`);
  for (const estado of estados) {
    const candidatos = eleitos.filter(
      (candidato) => candidato.estado === estado,
    );

    console.log(`\nEstado: ${estado}`);
    candidatos.forEach((candidato, indice) => {
      console.log(
        `${indice + 1}o eleito: ${candidato.nome} | ` +
          `${candidato.partido} | ` +
          `${votosFormatados.format(candidato.votos)} votos`,
      );
    });
  }
};

exibirEleitos(
  "ELEITOS - PROPORCIONAL DE LISTA ABERTA",
  eleitosListaAberta(eleicao),
);
exibirEleitos(
  "ELEITOS - PROPORCIONAL DE LISTA FECHADA",
  eleitosListaFechada(eleicao),
);
exibirEleitos("ELEITOS - MAJORITÁRIA SIMPLES", eleitosMajoritaria(eleicao));

// Observação: este exercício foi feito com ajuda de IA.
