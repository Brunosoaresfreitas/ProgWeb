/* 
Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Bruno Henrique Soares de Freitas 
*/

const startButton = document.querySelector('#start-button');

// Seleciona o menu de start e o container do jogo
const startMenu = document.querySelector('#start-menu');
const gameContainer = document.querySelector('#game-container');

// Adiciona um event listener ao botão de iniciar jogo
startButton.addEventListener('click', () => {
  // Esconde o menu de start
  startMenu.style.display = 'none';
  // Exibe o container do jogo
  gameContainer.style.display = 'block';
});
  document.addEventListener('DOMContentLoaded', () => {
    const arrayDeCartas = [
      {
        name: '1',
        img: 'https://fv5-1.failiem.lv/thumb_show.php?i=b9j27fdmz&view'
      },
      {
        name: '2',
        img: 'https://fv5-1.failiem.lv/thumb_show.php?i=7trrn9avz&view'
      },
      {
        name: '3',
        img: 'https://fv5-2.failiem.lv/thumb_show.php?i=wsajpkzjq&view'
      },
      {
        name: '4',
        img: 'https://fv5-2.failiem.lv/thumb_show.php?i=h7c2u4wbt&view'
      },
      {
        name: '5',
        img: 'https://fv5-2.failiem.lv/thumb_show.php?i=682msb6vp&view'
      },
      {
        name: '6',
        img: 'https://fv5-1.failiem.lv/thumb_show.php?i=u3xp6fe5t&view'
      },
      {
        name: '7',
        img: 'https://fv5-1.failiem.lv/thumb_show.php?i=gc5pjsmy5&view'
      },
      {
        name: '8',
        img: 'https://fv5-1.failiem.lv/thumb_show.php?i=bcsj6php3&view'
      },
      {
        name: '1',
        img: 'https://fv5-1.failiem.lv/thumb_show.php?i=b9j27fdmz&view'
      },
      {
        name: '2',
        img: 'https://fv5-1.failiem.lv/thumb_show.php?i=7trrn9avz&view'
      },
      {
        name: '3',
        img: 'https://fv5-2.failiem.lv/thumb_show.php?i=wsajpkzjq&view'
      },
      {
        name: '4',
        img: 'https://fv5-2.failiem.lv/thumb_show.php?i=h7c2u4wbt&view'
      },
      {
        name: '5',
        img: 'https://fv5-2.failiem.lv/thumb_show.php?i=682msb6vp&view'
      },
      {
        name: '6',
        img: 'https://fv5-1.failiem.lv/thumb_show.php?i=u3xp6fe5t&view'
      },
      {
        name: '7',
        img: 'https://fv5-1.failiem.lv/thumb_show.php?i=gc5pjsmy5&view'
      },
      {
        name: '8',
        img: 'https://fv5-1.failiem.lv/thumb_show.php?i=bcsj6php3&view'
      }
    ]
    arrayDeCartas.sort(() => 0.5 - Math.random())
    const tabuleiro = document.querySelector('.tabuleiro')
    const resultado = document.querySelector('#pontuacao')
    const placeholder = 'https://fv9-5.failiem.lv/thumb_show.php?i=pav7cyvya&view'
    const branco = 'https://fv5-1.failiem.lv/thumb_show.php?i=jzchfyqks&amp;view'
    const temporizador = setInterval(atualizarTempo, 1000);
  
    var cartasClicadas = []
    var cartasClicadasId = []
    var cartasCombinadas = []
    
    let tempoRestante = 60;
    
    function criarTabuleiro() {
      for (let i = 0; i < arrayDeCartas.length; i++) {
        var carta = document.createElement('img')
        carta.setAttribute('src', placeholder)
        carta.setAttribute('data-id', i)
        carta.addEventListener('click', viraCarta)
        tabuleiro.appendChild(carta)
      }
    }
  
    function viraCarta() {
      var cartaId = this.getAttribute('data-id')
      cartasClicadas.push(arrayDeCartas[cartaId].name)
      cartasClicadasId.push(cartaId)
      this.setAttribute('src', arrayDeCartas[cartaId].img)
      if (cartasClicadas.length === 2) {
        setTimeout(checarPorCombinacao, 500)
      }
    }
    function checarPorCombinacao() {
      var cartas = document.querySelectorAll('img')
      const primeiraCarta = cartasClicadasId[0]
      const segundaCarta = cartasClicadasId[1]
      if (primeiraCarta === segundaCarta) {
        cartas[primeiraCarta].setAttribute('src', placeholder)
        cartas[segundaCarta].setAttribute('src', placeholder)
        alert('Você clicou na mesma carta!')
      }
      else if (cartasClicadas[0] === cartasClicadas[1]) {
        cartas[primeiraCarta].setAttribute('src', branco)
        cartas[segundaCarta].setAttribute('src', branco)
        cartasCombinadas.push(cartasClicadas)
        cartas[primeiraCarta].removeEventListener('click', viraCarta)
        cartas[segundaCarta].removeEventListener('click', viraCarta)
      }
      else {
        cartas[primeiraCarta].setAttribute('src', placeholder)
        cartas[segundaCarta].setAttribute('src', placeholder)
      }
      cartasClicadas = []
      cartasClicadasId = []
      resultado.textContent = cartasCombinadas.length
      if (cartasCombinadas.length === arrayDeCartas.length / 2) {
        resultado.textContent = 'Parabéns! Você encontrou todas as cartas!'
      }
    }
    function atualizarTempo() {
      const timerElement = document.querySelector('#timer');
      const minutos = Math.floor(tempoRestante / 60);
      const segundos = tempoRestante % 60;
      const timer = document.querySelector('#timer');
      timer.classList.add('timer');
      timerElement.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
      tempoRestante--;
      if (tempoRestante < 0) {
        clearInterval(temporizador);
        alert('Seu tempo acabou!');
        
      }
    }
    criarTabuleiro()
    atualizarTempo();
  })