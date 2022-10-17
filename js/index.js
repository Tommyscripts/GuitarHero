window.addEventListener("keyup", function (e) {
    switch (e.code) {
        case 'ArrowLeft':
            arrows.pressed = 'left'
            activatedArrow()
            break;
        case 'ArrowUp':
            arrows.pressed = 'up'
            activatedArrow()
            break;
        case 'ArrowDown':
            arrows.pressed = 'down'
            activatedArrow()
            break;
        case 'ArrowRight':
            arrows.pressed = 'right'
            activatedArrow()
            break;
    }
})

const arrows = {
    sprites: document.getElementsByClassName("botn"),
    pressed: null,
}

function activatedArrow() {
    if (arrows.pressed === 'left') {
        
    }else if(arrows.pressed === 'up'){
        arrows.sprites[1].style.backgroundColor = "green"
        setTimeout(function() {
            arrows.sprites[1].style.backgroundColor = "transparent"
        },200)
    }else if(arrows.pressed === 'down'){
        arrows.sprites[2].style.backgroundColor = "blue"
        setTimeout(function() {
            arrows.sprites[2].style.backgroundColor = "transparent"
        },200)
    }else if(arrows.pressed === 'right'){
        arrows.sprites[3].style.backgroundColor = "yellow"
        setTimeout(function() {
            arrows.sprites[3].style.backgroundColor = "transparent"
        },200)
    }
}
var pos = ['630px','825px','1030px','1223px']

var guitarra = document.getElementById('guitarra')

var nota = document.createElement('div')
nota.setAttribute('class','notaCSS')
guitarra.appendChild(nota)
console.log(nota)
var notaTop = 10
var direccion = 1

const moveNote = function() {
    if (notaTop == 728) {
        guitarra.removeChild(nota)
    }
    notaTop += 1 * direccion
    nota.style.top = notaTop+'px'
}

var timeUp = setInterval(moveNote,10)

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