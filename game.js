let deckMaquina = [
  {
    nome: 'Ouros',
    cla: 'Ravnos',
    descricao: '<p>Ouros representa riqueza e prosperidade nas cartas de tarô, mas que pode trazer perigo ou ilusão. Ela se juntou ao Sabá durante os anos 50, buscando proteção contra a violência entre os clãs. Permaneceu fiel à seita mesmo após a queda do Arcebispo, mas, no fundo, sua verdadeira lealdade é consigo mesma.</p>',
    imagem: './images/ouros.png',
    atributos: { fisico: 3, social: 6, mental: 5, disciplina: 4 }
  },
  {
    nome: 'Espadas',
    cla: 'Lasombra',
    descricao: '<p>O nome verdadeiro de Espadas se perdeu no tempo, assim como a sua paciência. Filho de Teodoro, conheceu Ouros no século XVI, formando o bando Sabá do Castelo de Cartas</p>',
    imagem: './images/espadas.png',
    atributos: { fisico: 5, social: 3, mental: 4, disciplina: 5 }
  },
  {
    nome: 'Copas',
    cla: 'Toreador',
    descricao: '<p>Arthur sempre foi um golpista de coração. Cria de Camille, esse Toreador abandonado por sua Senhora, se envolveu com um Setita em algo profano.</p>',
    imagem: './images/copas.png',
    atributos: { fisico: 3, social: 4, mental: 2, disciplina: 3 }
  },
  {
    nome: 'Bibelô',
    cla: `Malkaviana`,
    descricao: '<p>De certo modo, o abuso moldou a existência de Bibelô desde sempre. À medida que crescia, uma sexualidade voraz sufocava suas inseguranças. Bibelô é cria de Cintia, e ninguém sabe o que ela passou sob sua tutela.</p>',
    imagem: './images/bibelo.png',
    atributos: { fisico: 4, social: 3, mental: 3, disciplina: 5 }
  },
  {
    nome: 'Porcelana',
    cla: `Pander`,
    descricao: '<p>A criatura conhecida como Porcelana pode ter sido um escultor ou artesão durante seus dias mortais. A maioria dos detalhes relativos à sua existência permanece desconhecida. A Besta o deixou louco, então esses detalhes provavelmente estão perdidos para sempre. Alguns mortos-vivos especulam que ele é um experimento doentio dos Tzimisce.</p>',
    imagem: './images/porcelana.png',
    atributos: { fisico: 4, social: 2, mental: 1, disciplina: 5 }
  },
  {
    nome: 'Sabrina',
    cla: `Lasombra`,
    descricao: '<p>Herdeira da Casa Roja, um bordel luxuoso. Sua avó morreu e deixou o estabelecimento para ela. Em um novembro frio, ela conheceu o Lasombra, Luciano; que tornou-se seu Senhor.</p>',
    imagem: './images/sabrina.png',
    atributos: { fisico: 3, social: 4, mental: 2, disciplina: 3 }
  },
  {
    nome: 'Luciano',
    cla: `Lasombra`,
    descricao: '<p>Luciano entendeu que o ambiente mais regulamentado também é o mais corruptível. Quando o pacto foi forjado, Luciano supervisionou a maior parte dos campos de caça de Teodoro. A maioria dos vampiros se ressentia de sua ascensão meteórica ao poder.</p>',
    imagem: './images/luciano.png',
    atributos: { fisico: 4, social: 5, mental: 4, disciplina: 5 }
  },
  {
    nome: 'João e Maria',
    cla: `Panders`,
    descricao: '<p>Estes mórbidos gêmeos nasceram em uma família religiosa superprotetora. Inseparáveis, nunca vão participar de um conflito sozinhos.</p>',
    imagem: './images/joaomaria.png',
    atributos: { fisico: 4, social: 6, mental: 5, disciplina: 3 }
  },
  {
    nome: 'Acemira',
    cla: `Tzimisce`,
    descricao: '<p>Antes dos vampiros europeus entrarem no Brasil, Acemira já existia. Defini-la como a vampira mais antiga do país seria uma simplificação excessiva. Na densa Mata Atlântica, os índios Tupinambás a adoraram durante séculos. A tribo canibal costumava oferecer seu sangue e a deusa da noite e da dor os recompensava com vitórias e poderes bestiais.</p>',
    imagem: './images/acemira.png',
    atributos: { fisico: 7, social: 5, mental: 6, disciplina: 6 }
  },
  {
    nome: 'Feia',
    cla: `Tzimisce`,
    descricao: '<p>Silenciosa, violenta e desumana. Esses adjetivos acompanham Feia antes mesmo de se tornar uma guerreira temível do Sabá.</p>',
    imagem: './images/feia.png',
    atributos: { fisico: 4, social: 4, mental: 3, disciplina: 4 }
  },
  {
    nome: 'Dom Victor',
    cla: `Tzimisce`,
    descricao: '<p>Victor era um artesão no antigo Reino de Portugal. Quando seus patrocinadores se mudaram para o Brasil colonial, Victor os seguiu. Ficou conhecido por suas criações bizarras entre os Tzimisce.</p>',
    imagem: './images/dom_victor.png',
    atributos: { fisico: 7, social: 5, mental: 6, disciplina: 6 }
  },
  {
    nome: 'Penélope',
    cla: `Ventrue`,
    descricao: '<p>Seu nome incomoda muitos vampiros do Rio. Foram necessários vários anciões para sustentar o Pacto de São Sebastião, mas apenas uma neófita imprudente para mandar tudo pelos ares. Esta temível Ventrue antitribu tem um legado de caos, e ela o carrega com orgulho.</p>',
    imagem: './images/penelope.png',
    atributos: { fisico: 4, social: 3, mental: 5, disciplina: 6 }
  },
]

let deckJogador = [
  {
    nome: 'Cintia',
    cla: 'Malkaviana',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/cintia.png',
    atributos: { fisico: 3, social: 5, mental: 5, disciplina: 6 }
  },
  {
    nome: 'Joseph',
    cla: 'Ventrue',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/joseph.png',
    atributos: { fisico: 3, social: 4, mental: 3, disciplina: 4 }
  },
  {
    nome: 'Valkiria',
    cla: 'Ventrue',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/valkiria.png',
    atributos: { fisico: 3, social: 4, mental: 3, disciplina: 2 }
  },
  {
    nome: 'Valkiria',
    cla: 'Ventrue',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/valkiria.png',
    atributos: { fisico: 3, social: 4, mental: 3, disciplina: 2 }
  },
  {
    nome: 'Eric',
    cla: 'Ventrue',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/eric.png',
    atributos: { fisico: 3, social: 3, mental: 3, disciplina: 4 }
  },
  {
    nome: 'Vicenzo',
    cla: 'Tremere',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/vicente.png',
    atributos: { fisico: 3, social: 3, mental: 5, disciplina: 6 }
  },
  {
    nome: 'Sofia',
    cla: 'Tremere',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/sofia.png',
    atributos: { fisico: 2, social: 4, mental: 4, disciplina: 5 }
  },
  {
    nome: 'Lispector',
    cla: 'Tremere',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/lispector.png',
    atributos: { fisico: 3, social: 4, mental: 4, disciplina: 2 }
  },
  {
    nome: 'Anderson',
    cla: 'Nosferatu',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/anderson.png',
    atributos: { fisico: 3, social: 4, mental: 4, disciplina: 3 }
  },
  {
    nome: 'Marquesa',
    cla: 'Nosferatu',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/marquesa.png',
    atributos: { fisico: 4, social: 4, mental: 5, disciplina: 5 }
  },
  {
    nome: 'Helena',
    cla: 'Giovanni',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/helena.png',
    atributos: { fisico: 3, social: 5, mental: 3, disciplina: 4 }
  },
  {
    nome: 'Bianca',
    cla: 'Brujah',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/bianca.png',
    atributos: { fisico: 5, social: 4, mental: 3, disciplina: 4 }
  },
  {
    nome: 'Heitor',
    cla: 'Brujah',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/heitor.png',
    atributos: { fisico: 4, social: 3, mental: 4, disciplina: 4 }
  },
  {
    nome: 'Sinfonia',
    cla: 'Filha da Cacofonia',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/sinfonia.png',
    atributos: { fisico: 2, social: 4, mental: 3, disciplina: 4 }
  },
  {
    nome: 'Fellini',
    cla: 'Gangrel',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/fellini.png',
    atributos: { fisico: 5, social: 3, mental: 4, disciplina: 6 }
  },
  {
    nome: 'Lucas',
    cla: 'Gangrel',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/lucas.png',
    atributos: { fisico: 4, social: 3, mental: 3, disciplina: 3 }
  },
  {
    nome: 'Adriana',
    cla: 'Gangrel',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/adriana.png',
    atributos: { fisico: 4, social: 3, mental: 4, disciplina: 2 }
  },
  {
    nome: 'Abutre',
    cla: 'Makaviano',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/abutre.png',
    atributos: { fisico: 4, social: 2, mental: 4, disciplina: 3 }
  },
  {
    nome: 'Cipriano',
    cla: 'Nosferatu',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/cipriano.png',
    atributos: { fisico: 3, social: 4, mental: 4, disciplina: 3 }
  },
  {
    nome: 'Andrew',
    cla: 'Setita',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/andrew.png',
    atributos: { fisico: 4, social: 3, mental: 3, disciplina: 5 }
  },
  {
    nome: 'Samira',
    cla: 'Setita',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/samira.png',
    atributos: { fisico: 3, social: 4, mental: 3, disciplina: 3 }
  },
  {
    nome: 'Gregório',
    cla: 'Toreador',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/gregorio.png',
    atributos: { fisico: 6, social: 5, mental: 3, disciplina: 6 }
  },
  {
    nome: 'Maya',
    cla: 'Toreador',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/maia.png',
    atributos: { fisico: 4, social: 3, mental: 3, disciplina: 4 }
  },
  {
    nome: 'Fernando',
    cla: 'Toreador',
    descricao: '<p>A Primogênita Malkaviana do Rio de Janeiro é uma criatura enigmática.</p> <p>Sob sua liderança, os Malkavianos assumiram a Lapa.</p>',
    imagem: './images/fernando.png',
    atributos: { fisico: 3, social: 4, mental: 3, disciplina: 3 }
  },
]

/* --------------- Funções do Jogo --------------- */

let cartaMaquina
let cartaJogador

function addStyle() {
  console.log('criando')
}

let descJogador = document.querySelector('.box-hist')

function sortear() {
  
  addStyle()

  document.querySelector('.initial-card').innerHTML = ""
  document.querySelector('#initial-card').innerHTML = ""
    
  let numeroSorteioMaquina = parseInt(Math.random() * deckMaquina.length)
  cartaMaquina = deckMaquina[numeroSorteioMaquina]
  
  let numeroSorteioJogador = parseInt(Math.random() * deckJogador.length)
  cartaJogador = deckJogador[numeroSorteioJogador]
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false

  descJogador.innerHTML = cartaJogador.descricao
  resultadoJogo.innerHTML = cartaMaquina.descricao
  
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

let resultadoJogo = document.getElementById('resultado')

function jogar() {
  let atributoSelecionado = selecionaAtributo()

  msgVitoria = [
    `<p>Dessa vez, ${cartaJogador.nome} venceu e pode expor sua superioridade.</p>`,
    `<p>${cartaJogador.nome} venceu. Estará vivo(a) para outro confronto.</p>`,
    `<p>${cartaJogador.nome} está em sua melhor posição. Não precisa de ajuda de ninguém</p>`,
    `<p>A vitória pertence a ${cartaJogador.nome} e mais ninguém.</p>`,
    `<p>${cartaJogador.nome} derrotou ${cartaMaquina.nome} e ganha aalgum prestígio na Camarilla</p>`,
    `<p>${cartaMaquina.nome} caiu e ${cartaJogador.nome} reina superior.</p>`,
    `<p>${cartaMaquina.nome} foi avisado(a). ${cartaJogador.nome} não tolera desajustados.</p>`,
    `<p>${cartaJogador.nome} tem um vislumbre do status que vem com a vitória.</p>`,
    `<p>${cartaJogador.nome} nunca se sentiu tão bem em ter seu nome entre as Harpias.</p>`]


  msgDerrota = [
    `<p>${cartaJogador.nome} terá que se esconder e esperar a poeira baixar.</p>`,
    `<p>${cartaJogador.nome} foi derrotado(a) e não vai se expor por algum tempo.</p>`,
    `<p>A derrota foi demais para ${cartaJogador.nome}. Seu status pode não perdurar.</p>`,
    `<p>Antes do próximo passo, ${cartaJogador.nome} precisa se recuperar.</p>`,
    `<p>${cartaJogador.nome} passará um longo período longe dos holofotes.</p>`,
  ]

  msgEmpate = [
    `<p>Esta é uma noite carioca incomum. Os predadores se encaram, mas não rosnam.</p>`,
    `<p>${cartaJogador.nome} fica contente em poder dizer que não é mais a presa. Tudo igual entre as feras.</p>`,
    `<p>${cartaJogador.nome} e ${cartaMaquina.nome} se encaram e planejam o que farão em seu próximo encontro. Hoje, ninguém saiu na pior.</p>`,
  ]
  

  if (atributoSelecionado > atributoSelecionadoMaquina) {
    resultadoJogo.innerHTML = msgVitoria[parseInt(Math.random() * msgVitoria.length)]
  } else if (atributoSelecionado == atributoSelecionadoMaquina) {
    resultadoJogo.innerHTML = msgEmpate[parseInt(Math.random() * msgEmpate.length)]
  } else {
    resultadoJogo.innerHTML = msgDerrota[parseInt(Math.random() * msgDerrota.length)]
  }

  descJogador.innerHTML = ''
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
}
