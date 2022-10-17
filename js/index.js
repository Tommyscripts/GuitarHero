
/*var captacion = {
    key: '',
    updateFlecha: function () {
        for (let i = 0; i < teclas.length; i++) {
            if (teclas[i].id === this.flecha) {
                dimension.left = teclas[i].offsetLeft
                dimension.top = teclas[i].offsetTop
                dimension.height = teclas[i].offsetHeight
                dimension.width = teclas[i].offsetWidth
                console.log(dimension)
            }
        }
    }
}

var dimension = {
    top: 0,
    left: 0,
    height: 0,
    width: 0, 
}*/

/*var game = {
    flechas: function () {
        
    }
}

game.flechas()
*/

window.addEventListener("keydown", function (e) {
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
        arrows.sprites[0].style.backgroundColor = "red"
        setTimeout(function() {
            arrows.sprites[0].style.backgroundColor = "transparent"
        },200)
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