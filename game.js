let deckMaquina = [
  {
    nome: 'Ouros',
    cla: 'Ravnos',
    imagem: './images/ouros.jpg',
    atributos: { fisico: 4, social: 5, mental: 3, disciplina: 5 }
  },
  {
    nome: 'Espadas',
    cla: 'Ministério',
    imagem: './images/anderson.png',
    atributos: { fisico: 6, social: 3, mental: 4, disciplina: 5 }
  },
  {
    nome: 'Bibelô',
    cla: 'Tzimisce',
    imagem: './images/ouros.png',
    atributos: { fisico: 5, social: 4, mental: 5, disciplina: 4 }
  }
]

let deckJogador = [
  {
    nome: 'Cinthia',
    cla: 'Malkavian',
    imagem: './images/ouros.png',
    atributos: { fisico: 3, social: 7, mental: 5, disciplina: 6 }
  },
  {
    nome: 'Anderson',
    cla: 'Nosferatu',
    imagem: './images/anderson.png',
    atributos: { fisico: 6, social: 8, mental: 5, disciplina: 3 }
  },
  {
    nome: 'Marquesa',
    cla: 'Nosferatu',
    imagem: './images/anderson.png',
    atributos: { fisico: 8, social: 6, mental: 5, disciplina: 2 }
  }
]

let cartaMaquina
let cartaJogador

function sortear() {
  let numeroSorteioMaquina = parseInt(Math.random() * deckMaquina.length)
  cartaMaquina = deckMaquina[numeroSorteioMaquina]
  console.log(cartaMaquina)

  let numeroSorteioJogador = parseInt(Math.random() * deckJogador.length)
  cartaJogador = deckJogador[numeroSorteioJogador]
  console.log(cartaJogador)

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false

  exibirOpcoes()
}

function exibirOpcoes() {
  let tagAtributos = ""
  let tagAtributosMc = ""

  for (let atributoJogador in cartaJogador.atributos) {
    tagAtributos += `<input type="radio" name="atributoJogador" value=${atributoJogador}>${atributoJogador} ${cartaJogador.atributos[atributoJogador]}<br>`;
  }
  
  for (let atributoMaquina in cartaMaquina.atributos) {
    tagAtributosMc += `<input type="radio" name="atributoMaquina" value=${atributoMaquina}>${atributoMaquina} ${cartaMaquina.atributos[atributoMaquina]}<br>`;
  }
 
  document.querySelector('#imagem_carta_jogador').innerHTML = "<img src=" + cartaJogador.imagem + " />"
  document.querySelector('#card_name').innerHTML = cartaJogador.nome
  document.querySelector('#card_clan').innerHTML = cartaJogador.cla
  document.querySelector('#card_opcoes').innerHTML = tagAtributos
  
  document.querySelector('#imagem_carta_maquina').innerHTML = "<img src=" + cartaMaquina.imagem + " />"
  document.querySelector('#card_name_mc').innerHTML = cartaMaquina.nome
  document.querySelector('#card_clan_mc').innerHTML = cartaMaquina.cla
  document.querySelector('#card_opcoes_mc').innerHTML = tagAtributosMc

}



function jogar() {
  console.log('por fazer')

  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
}
