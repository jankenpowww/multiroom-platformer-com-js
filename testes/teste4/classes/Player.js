class Player {
    constructor(posX = Number(), posY = Number(), width = Number(), height = Number(), color = String()) {
        this.position = {
            posX: posX,
            posY: posY
        }

        this.width = width
        this.height = height

        this.sides = {
            bottom: this.position.posY + this.height
        }

        this.velocity = {
            velX: 0,
            velY: 0
        }

        this.gravity = 1

        this.color = color
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.posX, this.position.posY, this.width, this.height)
    }

    update() {
        this.position.posY += this.velocity.velY
        this.sides.bottom = this.position.posY + this.height

        if (canvas.height > this.sides.bottom + this.velocity.velY) {
            this.velocity.velY += this.gravity
        } else {
            this.velocity.velY = 0
        }
    }
}