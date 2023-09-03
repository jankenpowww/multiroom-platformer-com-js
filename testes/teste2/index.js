const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 64 * 16
canvas.height = 64 * 9

const player = new Player(30, 128, 50, 50, "turquoise")

function animarQuadrado(){
    window.requestAnimationFrame(animarQuadrado)

    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    player.draw()

    player.moverPraCima()
}

animarQuadrado()