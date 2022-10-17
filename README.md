# ArrowHero
Integrantes: Javier Cabrera Escoz, Emilio Casado de Galdo, Alejandro José Cruz Santiago





## Introducción 🚀
Realizamos un juego basado en HTML, CSS y JavaScripts.

El juego se llama  Arrow Hero, el jugador tendra que presionar la tecla que el juego genere en el tiempo determinado, si dicho jugador pulsa la tecla antes de tiempo perdera una vida, al igual si la pulsa despues del tiempo determinado, al pusar la tecla en el tiempo exacto obtendra puntos,lo cual le regenerará una vida.

### Primeros pasos 📋

Para la realización del proyecto, primero creamos una idea grupal de como hariamos cada paso de las ideas obtenidas en grupo, una vez cumplido este objetivo, decidimos el orden necesario de la realización del proyecto para que funcione lo más básico, tras ello, hemos comenzado las tareas para crear una interfaz visible,  una vez la interfaz es visible, hemos comenzado con la generación de eventos y la creación de notas.

### Creación del código 🔧

Tras tener la visualización, hemos creado un sistema básico, para poder testear los codigos creados en JavaScript, la versión de prueba de dicho juego.

Dar nombre a las variables y funciones, las cuales son las siguientes:
Arrows = variable dada a las flechas.

Notas = las notas generadas por el juego.

Guitarra = la variable utilizada para crear el camino que recorrera las notas.

Funcion activated Arrow = para detectar si ha pulsado bien la nota el usuario, o ha errado.

Addevenlistener (keydown) con un switch, donde detectanos el evento de la pulsación de las flechas.



```
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
```
El activated arrow

```
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
```

La generación de la primera nota.

## Ejecutando las pruebas ⚙️

_Explica como ejecutar las pruebas automatizadas para este sistema_

### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Andrés Villanueva** - *Trabajo Inicial* - [villanuevand](https://github.com/villanuevand)
* **Fulanito Detal** - *Documentación* - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
