let deckComputador = [
  {
    nome: 'Ouros',
    cla: 'Ravnos',
    atributos: { fisico: 4, social: 5, mental: 3, disciplina: 5 }
  },
  {
    nome: 'Espadas',
    cla: 'Ministério',
    atributos: { fisico: 6, social: 3, mental: 4, disciplina: 5 }
  },
  {
    nome: 'Bibelô',
    cla: 'Tzimisce',
    atributos: { fisico: 5, social: 4, mental: 5, disciplina: 4 }
  }
]

let deckJogador = [
  {
    nome: 'Cinthia',
    cla: 'Malkavian',
    atributos: { fisico: 3, social: 7, mental: 5, disciplina: 6 }
  },
  {
    nome: 'Gregório',
    cla: 'Toreador',
    atributos: { fisico: 6, social: 8, mental: 5, disciplina: 3 }
  },
  {
    nome: 'Marquesa',
    cla: 'Nosferatu',
    atributos: { fisico: 8, social: 6, mental: 5, disciplina: 2 }
  }
]

function Sortear() {
  console.log(deckJogador[0].nome)
}
