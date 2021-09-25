let deckMaquina = [
  {
    nome: 'Ouros',
    cla: 'Ravnos',
    imagem: './images/ouros.png',
    atributos: { fisico: 4, social: 5, mental: 3, disciplina: 5 }
  },
  {
    nome: 'Espadas',
    cla: 'Lasombra',
    imagem: './images/espadas.png',
    atributos: { fisico: 5, social: 3, mental: 4, disciplina: 5 }
  },
  {
    nome: 'Bibelô',
    cla: `Malkaviana`,
    imagem: './images/bibelo.png',
    atributos: { fisico: 4, social: 3, mental: 3, disciplina: 5 }
  },
  {
    nome: 'Porcelana',
    cla: `Pander`,
    imagem: './images/porcelana.png',
    atributos: { fisico: 4, social: 2, mental: 1, disciplina: 5 }
  },
  {
    nome: 'Sabrina',
    cla: `Lasombra`,
    imagem: './images/sabrina.png',
    atributos: { fisico: 4, social: 4, mental: 2, disciplina: 5 }
  },
]

let deckJogador = [
  {
    nome: 'Cintia',
    cla: 'Malkaviana',
    imagem: './images/cintia.png',
    atributos: { fisico: 3, social: 5, mental: 5, disciplina: 6 }
  },
  {
    nome: 'Anderson',
    cla: 'Nosferatu',
    imagem: './images/anderson.png',
    atributos: { fisico: 3, social: 4, mental: 4, disciplina: 3 }
  },
  {
    nome: 'Marquesa',
    cla: 'Nosferatu',
    imagem: './images/marquesa.png',
    atributos: { fisico: 4, social: 4, mental: 5, disciplina: 5 }
  },
  {
    nome: 'Helena',
    cla: 'Giovanni',
    imagem: './images/helena.png',
    atributos: { fisico: 3, social: 5, mental: 3, disciplina: 4 }
  },
  {
    nome: 'Bianca',
    cla: 'Brujah',
    imagem: './images/bianca.png',
    atributos: { fisico: 5, social: 4, mental: 3, disciplina: 4 }
  },
]

let cartaMaquina
let cartaJogador

function addStyle() {
  console.log('criando')
}


function sortear() {

  addStyle()

  let numeroSorteioMaquina = parseInt(Math.random() * deckMaquina.length)
  cartaMaquina = deckMaquina[numeroSorteioMaquina]

  let numeroSorteioJogador = parseInt(Math.random() * deckJogador.length)
  cartaJogador = deckJogador[numeroSorteioJogador]

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false

  exibirOpcoes()
}



function exibirOpcoes() {
  let tagAtributos = ""
  let tagAtributosMc = ""

  for (let atributoJogador in cartaJogador.atributos) {
    tagAtributos += `<input type="radio" id=${atributoJogador} class="atributo-jogador" name=${atributoJogador} value=${cartaJogador.atributos[atributoJogador]}>${atributoJogador} ${cartaJogador.atributos[atributoJogador]}<br>`;
  }
  
  for (let atributoMaquina in cartaMaquina.atributos) {
    tagAtributosMc += `<input type="radio" id=${atributoMaquina} class="atributo-maquina" disabled="true" name=${atributoMaquina} value=${cartaMaquina.atributos[atributoMaquina]}>${atributoMaquina}</input><br>`;
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

let atributoSelecionadoMaquina

function selecionaAtributo() {
  let radioAtributos = document.getElementsByClassName('atributo-jogador');
  let radioAtributosMc = document.getElementsByClassName('atributo-maquina');
  
  
  for (let i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked) {
      atributoSelecionadoMaquina = radioAtributosMc[i].value
      return radioAtributos[i].value 
    }
  }

}



function jogar() {
  let atributoSelecionado = selecionaAtributo()
  let resultadoJogo = document.getElementById('resultado')

  msgVitoria = [
    `<p>Dessa vez, ${cartaJogador.nome} venceu e pode expor sua superioridade.</p>`,
    `<p>${cartaJogador.nome} venceu. Estará viva para outro confronto.</p>`,
    `<p>${cartaJogador.nome} está em sua melhor posição. Não precisa de ajuda de ninguém</p>`,
    `<p>A vitória pertence a ${cartaJogador.nome} e mais ninguém.</p>`]


  msgDerrota = [
    `<p>${cartaJogador.nome} terá que se esconder e esperar a poeira baixar.</p>`,
    `<p>${cartaJogador.nome} foi derrotada e não vai se expor por algum tempo.</p>`,
    `<p>A derrota foi demais para ${cartaJogador.nome}. Seu status pode não perdurar.</p>`,
    `<p>Antes do próximo passo, ${cartaJogador.nome} precisa se recuperar.</p>`,
    `<p>${cartaJogador.nome} passará um longo período longe dos holofotes.</p>`,

  ]

  if (atributoSelecionado > atributoSelecionadoMaquina) {
    resultadoJogo.innerHTML = msgVitoria[parseInt(Math.random() * msgVitoria.length)]
  } else {
    resultadoJogo.innerHTML = msgDerrota[parseInt(Math.random() * msgDerrota.length)]
  }

  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
}
