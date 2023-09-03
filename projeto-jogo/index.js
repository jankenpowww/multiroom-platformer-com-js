let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

canvas.width = 64 * 14
canvas.height = 64 * 9

let player = new Player(30, 30, 30, 30, "deeppink")

//Corrigindo o problema de movimentação: verifica quais os botões estão sendo pressionados.
//independentemente se há mais de um botão pressionado, e executar o movimento.
const keys = {
    w: { pressed: false },
    a: { pressed: false },
    d: { pressed: false }
}

function animation() {
    window.requestAnimationFrame(animation)

    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    //Verificando se botões de direção vertical estão sendo pressionados, se sim, o  player se movimenta.
    player.velocity.velX = 0
    if (keys.d.pressed) {
        player.velocity.velX = 1
    } else if (keys.a.pressed) {
        player.velocity.velX = -1
    }

    player.draw()
    player.update()
}

animation()

//Movimentação do personagem. Verifica se os botões estão sendo pressionados ou não.
//Se sim, o estado da propriedade do objeto 'keys' altera seu valor booleano
//Dentro da função de animação, esse estado é verificado. Se true, o objeto se desloca para a direção do botão associado.
window.addEventListener("keydown", (e) => {
    switch (e.key) {

        //Se a velocidade é igual à 0, o jogador está no chão. Essa é a condição que permite o jogador
        //pular, e isso impede de realizar mais pulos enquanto está no ar.
        case "w":   
            if (player.velocity.velY === 0) {
                player.velocity.velY -= 20
            }
        break;

        case "a":
            keys.a.pressed = true
        break

        case "d":
            keys.d.pressed = true
        break
    }
})

window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "a":
            keys.pressed = false
        break

        case "d":
            keys.pressed = false
        break
    }
})