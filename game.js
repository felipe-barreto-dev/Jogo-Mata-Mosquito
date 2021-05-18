
var h = 0
var w = 0
var vidas = 1
var tempo = 30
var createTarget = 1500
var level = window.location.search
level = level.replace('?', '')

if (level === 'normal') {
    createTarget = 1500
} else if (level === 'dificil') {
    createTarget = 1000
} else if (level === 'saitama') {
    createTarget = 750
}

function PalcoGame() {   
    h = window.innerHeight
    w = window.innerWidth

    console.log(w, h)
}

PalcoGame()

var conometro = setInterval(function() {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(conometro)
        clearInterval(mosquito)
        window.location.href = 'game_won.html'
    } else {
        document.getElementById('tempo').innerHTML = tempo
    }
}, 1000);


function GetRandomPosition() {
    //Remove the previous target
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if(vidas > 3) {
            window.location.href = 'game_over.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }

    var x = Math.floor(Math.random() * w) - 90
    var y = Math.floor(Math.random() * h) - 90

    x = x < 0 ? 0 : x
    y = y < 0 ? 0 : y

    console.log(x, y)

    //Create HTML element
    var mosquito = document.createElement('img')
    mosquito.className = GetRandomSize() + ' ' + GetRandomSide()
    mosquito.src = 'imagens/mosca.png'
    mosquito.style.left = x + 'px'
    mosquito.style.top = y + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function GetRandomSize() {
    var size = Math.floor(Math.random() * 3)
    switch(size) {
        case 0:
            return 'mosquito0'
        case 1:
            return 'mosquito1'
        case 2:
            return 'mosquito2' 
    }
}

function GetRandomSide() {
    var side = Math.floor(Math.random() * 2)

    switch(side) {
        case 0:
            return 'Aside'
        case 1:
            return 'Bside' 
    }
}

