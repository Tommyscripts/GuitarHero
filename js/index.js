// TODO
// var pos = ['630px', '825px', '1030px', '1223px']

var Nota = {
  html: document.createElement('div'),
  top: 10,
  height: 70, 
  incremento: 1,
  timerId: null,
  move() {
    if (this.top == 728) {
      guitarra.removeChild(this.html)
    }
    this.top += this.incremento
    this.html.style.top = this.top + 'px'
  },
  start() {
    this.timerId = setInterval(this.move.bind(this), 10)
  }
}
Nota.html.setAttribute('class', 'notaCSS');
var guitarra = document.getElementById('guitarra')
guitarra.appendChild(Nota.html)

Nota.start()

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
        break;
      case 'ArrowUp':
        this.colorAndTransparent(1, 'green');
        break;
      case 'ArrowDown':
        this.colorAndTransparent(2, 'blue');
        break;
      case 'ArrowRight':
        this.colorAndTransparent(3, 'yellow');
        break;
    }
    if (Nota.top > 582 && Nota.top+Nota.height < 712) {
      console.log('DENTRO PERO CUALQUIER TECLA')
    }
  }
}

window.addEventListener("keydown", function (e) {
  if (['ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'].includes(e.code)) {
    arrows.activatedArrow(e.code);
  }
})

// var notaCSS = {
//     top: 10px;
//     left: 630px;
//     left2: 825px;
//     left3: 1030px;
//     left4: 1223px;
//     height: '200px',
//     width: '200px',
//     backgroundColor: 'green',
// }