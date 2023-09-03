class Player {
    constructor(posX = Number(), posY = Number(), width = Number(), height = Number(), color = String()) {
        this.position = {
            x: posX,
            y: posY
        }

        this.width = width
        this.height = height

        this.sides = {
            top: this.position.y,
            bottom: this.height + this.position.y
        }

        this.color = color
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    moveUp() {
        //alert(`Canvas Height: ${canvas.height - canvas.height}\nTop: ${this.sides.top}`)
        if (canvas.height - canvas.height < this.sides.top) {
            this.position.y--
            this.sides.top--
        }
    }

    moveDown() {
        //alert(`Canvas Height: ${canvas.height}\nBottom: ${this.sides.bottom}`)
        if (canvas.height > this.sides.bottom) {
            this.position.y++
            this.sides.bottom++
        }
    }
}