function Nota(left) {
  this.left = left
  this.top = 10
  this.height = 70
  this.incremento = 1
  this.timerId = null
  this.html = document.createElement('div')
  this.move = function () {
    this.top += this.incremento
    this.html.style.top = this.top + 'px'
  }
}

var arrayLeft = []
var arrayUp = []
var arrayDown = []
var arrayRight = []
var timerGame = null
var timerGenerator = null
var timerWinner = null
var life = document.getElementById('life')
var live = parseInt(life.innerText)
var score = document.getElementById('score')
var point = 0
var start = document.getElementById('start')
var comboBox = document.getElementById('combo')
var comboCounter = 0
var music = new Audio("song/acdc.mp3")
var backTittle = document.getElementsByClassName('tittle')
var loser = document.getElementById('windowGameover')
var winner = document.getElementById('windowGamewin')
var maxPoint = document.getElementsByClassName('maxp')
var maxCombo = document.getElementsByClassName('maxc')
var maxC = 0
var leveup = 0

for (let i = 0; i < backTittle.length; i++) {
  backTittle[i].addEventListener('click', function (e) {
    start.parentNode.parentNode.style.display = "block"
    backTittle[i].parentNode.parentNode.style.display = "none"
  })
}

start.addEventListener('click', function (e) {
  start.parentNode.parentNode.style.display = "none"
  console.log(start.parentNode.parentNode)
  startGame(music.duration)
})

function generator() {
  var position = ['75px', '280px', '485px', '700px']
  var ranPosition = Math.floor(Math.random() * 4)
  var newNota = new Nota(position[ranPosition])
  newNota.html.setAttribute('class', 'notaCSS');
  newNota.html.style.left = newNota.left
  var guitarra = document.getElementById('guitarra')
  guitarra.appendChild(newNota.html)

  if (ranPosition === 0) {
    arrayLeft.push(newNota)
  }
  if (ranPosition === 1) {
    arrayUp.push(newNota)
  }
  if (ranPosition === 2) {
    arrayDown.push(newNota)
  }
  if (ranPosition === 3) {
    arrayRight.push(newNota)
  }

}

function moveNote() {
  arrayLeft.forEach(function (note) {
    note.move()
  }.bind(this))
  arrayUp.forEach(function (note) {
    note.move()
  }.bind(this))
  arrayDown.forEach(function (note) {
    note.move()
  }.bind(this))
  arrayRight.forEach(function (note) {
    note.move()
  }.bind(this))
}

function removeNote(arr) {
  if (arr.length > 0 && arr[0].top === 728) {
    guitarra.removeChild(arr[0].html)
    arr.shift()
    live--
    life.innerText = live
    gameOver()
  }
}

function checkRemoveNote() {

  removeNote(arrayLeft)
  removeNote(arrayUp)
  removeNote(arrayDown)
  removeNote(arrayRight)

}

function gameOver() {
  if (live === -1) {
    clearGame()
    loser.style.display = "block"
  }
}

function inputAction(arr) {
  if (arr.length != 0) {
    arr.forEach(function (note) {
      if (note.top > 582 && note.top + note.height < 712) {
        guitarra.removeChild(note.html)
        arr.shift()
        point += 10
        score.innerText = point
        comboCounter++
        comboBox.innerText = comboCounter
        if (maxC < comboCounter) {
          maxC = comboCounter
          for (let i = 0; i < maxCombo.length; i++) {
            maxCombo[i].innerText = maxC
          }
        }

      } else if (arr[0] && note.top < 582) {
        live--
        life.innerText = live
        comboCounter = 0
        comboBox.innerText = comboCounter
        gameOver()
      }
    }.bind(this))
  } else {
    live--
    life.innerText = live
    comboCounter = 0
    comboBox.innerText = comboCounter
    gameOver()
  }
}

function checkNote(pressed) {
  switch (pressed) {
    case 'ArrowLeft':
      inputAction(arrayLeft)
      break;
    case 'ArrowUp':
      inputAction(arrayUp)
      break;
    case 'ArrowDown':
      inputAction(arrayDown)
      break;
    case 'ArrowRight':
      inputAction(arrayRight)
      break;
  }
}

function startGame(songTimer) {
  maxC = 0
  for (let i = 0; i < maxCombo.length; i++) {
    maxCombo[i].innerText = 0
    maxPoint[i].innerText = 0
  }
  music.volume = 0.1;
  music.play();
  timerGenerator = setInterval(generator, 2000)
  timerGame = setInterval(function () {
    moveNote()
    checkRemoveNote()
  }, 10)
  timerWinner = setTimeout(function () {
    clearGame()
    winner.style.display = "block"
  }, songTimer * 1000)
}

function clearGame() {
  arrayLeft.forEach(function (note) {
    guitarra.removeChild(note.html)
  }.bind(this))
  arrayUp.forEach(function (note) {
    guitarra.removeChild(note.html)
  }.bind(this))
  arrayDown.forEach(function (note) {
    guitarra.removeChild(note.html)
  }.bind(this))
  arrayRight.forEach(function (note) {
    guitarra.removeChild(note.html)
  }.bind(this))

  arrayLeft = []
  arrayUp = []
  arrayDown = []
  arrayRight = []

  life.innerText = 5
  for (let i = 0; i < maxPoint.length; i++) {
    maxPoint[i].innerText = point
  }
  point = 0
  score.innerText = 0
  live = parseInt(life.innerHTML)
  comboCounter = 0
  comboBox.innerText = comboCounter

  music.pause();
  music.currentTime = 0

  clearInterval(timerGame)
  clearInterval(timerGenerator)
  clearTimeout(timerWinner)
}

const arrows = {
  sprites: document.getElementsByClassName("botn"),
  colorAndTransparent(id, color) {
    this.sprites[id].style.backgroundColor = color
    setTimeout(() => {
      this.sprites[id].style.backgroundColor = "transparent"
    }, 200)
  },
  activatedArrow(pressed) {
    switch (pressed) {
      case 'ArrowLeft':
        this.colorAndTransparent(0, '#900707');
        checkNote(pressed)
        break;
      case 'ArrowUp':
        this.colorAndTransparent(1, 'green');
        checkNote(pressed)
        break;
      case 'ArrowDown':
        this.colorAndTransparent(2, 'blue');
        checkNote(pressed)
        break;
      case 'ArrowRight':
        this.colorAndTransparent(3, '#AFAF05');
        checkNote(pressed)
        break;
    }
  }
}

window.addEventListener("keydown", function (e) {
  if (['ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'].includes(e.code)) {
    arrows.activatedArrow(e.code);
  }
})
