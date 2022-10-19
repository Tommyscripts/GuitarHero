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
var start = document.getElementById('startgame')
var comboBox = document.getElementById('combo')
var comboCounter = 0

start.addEventListener('click', function(e) {
  startGame(40000)
})

function generator() {
  var position = ['629px', '835px', '1043px', '1248px']
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

function removeNote() {
  arrayLeft.forEach(function (note) {
    if (note.top === 728) {
      guitarra.removeChild(note.html)
      arrayLeft.shift()
      live--
      life.innerText = live
      gameOver()
    }
  }.bind(this))
  arrayUp.forEach(function (note) {
    if (note.top === 728) {
      guitarra.removeChild(note.html)
      arrayUp.shift()
      live--
      life.innerText = live
      gameOver()
    }
  }.bind(this))
  arrayDown.forEach(function (note) {
    if (note.top === 728) {
      guitarra.removeChild(note.html)
      arrayDown.shift()
      live--
      life.innerText = live
      gameOver()
    }
  }.bind(this))
  arrayRight.forEach(function (note) {
    if (note.top === 728) {
      guitarra.removeChild(note.html)
      arrayRight.shift()
      live--
      life.innerText = live
      gameOver()
    }
  }.bind(this))
}

function gameOver() {
  if (live === -1) {
    alert("Game Over")
    clearGame()
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
  timerGenerator = setInterval(generator, 2000)
  timerGame = setInterval(function () {
    moveNote()
    removeNote()
  }, 10)
  timerWinner = setTimeout(function () {
  alert("you win")
    clearGame()
  },songTimer)
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
  score.innerText = 0
  live = parseInt(life.innerHTML)
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
        this.colorAndTransparent(0, 'red');
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
        this.colorAndTransparent(3, 'yellow');
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