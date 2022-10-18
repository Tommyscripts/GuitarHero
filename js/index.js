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
var timerGame = null
var timerGenerator = null

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

var life = document.getElementById('life')
var live = parseInt(life.innerText)

function removeNote() {
  arrayLeft.forEach(function (note) {
    if (note.top === 728) {
      guitarra.removeChild(note.html)
      arrayLeft.shift()
      live--
      life.innerText = live
    }
  }.bind(this))
  arrayUp.forEach(function (note) {
    if (note.top === 728) {
      guitarra.removeChild(note.html)
      arrayUp.shift()
      live--
      life.innerText = live
    }
  }.bind(this))
  arrayDown.forEach(function (note) {
    if (note.top === 728) {
      guitarra.removeChild(note.html)
      arrayDown.shift()
      live--
      life.innerText = live
    }
  }.bind(this))
  arrayRight.forEach(function (note) {
    if (note.top === 728) {
      guitarra.removeChild(note.html)
      arrayRight.shift()
      live--
      life.innerText = live
    }
  }.bind(this))
}

var score = document.getElementById('score')
var point = 0

function checkNote(pressed) {
  switch (pressed) {
    case 'ArrowLeft':
      if (arrayLeft.length != 0) {
        arrayLeft.forEach(function (note) {
          if (note.top > 582 && note.top + note.height < 712) {
            guitarra.removeChild(note.html)
            arrayLeft.shift()
            point += 10
            score.innerText = point
          } else if (arrayLeft[0] && note.top < 582) {
            live--
            life.innerText = live
          }
        }.bind(this))
      } else {
        live--
        life.innerText = live
      }

      break;
    case 'ArrowUp':
      arrayUp.forEach(function (note) {
        if (note.top > 582 && note.top + note.height < 712) {
          guitarra.removeChild(note.html)
          arrayUp.shift()
          point += 10
          score.innerText = point
        } else if (arrayUp[0] && note.top < 582 || arrayUp.length === 0) {
          live--
          life.innerText = live
        }
      }.bind(this))
      break;
    case 'ArrowDown':
      arrayDown.forEach(function (note) {
        if (note.top > 582 && note.top + note.height < 712) {
          guitarra.removeChild(note.html)
          arrayDown.shift()
          point += 10
          score.innerText = point
        } else if (arrayDown[0] && note.top < 582 || arrayDown.length === 0) {
          live--
          life.innerText = live
        }
      }.bind(this))
      break;
    case 'ArrowRight':
      arrayRight.forEach(function (note) {
        if (note.top > 582 && note.top + note.height < 712) {
          guitarra.removeChild(note.html)
          arrayRight.shift()
          point += 10
          score.innerText = point
        } else if (arrayRight[0] && note.top < 582 || arrayRight.length === 0) {
          live--
          life.innerText = live
        }
      }.bind(this))
      break;
  }
}

function startGame() {
  timerGenerator = setInterval(generator, 2000)
  timerGame = setInterval(function () {
    moveNote()
    removeNote()
  }, 10)
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
//startGame()