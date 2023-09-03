let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

canvas.width = 64 * 14
canvas.height = 64 * 9

let player = new Player(30, 30, 30, 30, "limegreen")

function animation() {
    window.requestAnimationFrame(animation)

    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    player.draw()
    player.update()
}

animation()

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "w":
            player.velocity.velY -= 20
        break;
    }
})