let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

canvas.width = 64 * 14
canvas.height = 64 * 9

let player = new Player(30, 450, 40, 40, "turquoise");

function animation() {
    window.requestAnimationFrame(animation)

    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    player.draw()
    player.moveUp()
}

animation()