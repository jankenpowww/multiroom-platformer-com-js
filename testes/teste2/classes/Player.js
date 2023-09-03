class Player {
    constructor(posX = Number(), posY = Number(), width = Number(), height = Number(), color = String()){
        this.position = {
            posX: posX,
            posY: posY
        }

        this.width = width
        this.height = height

        this.sides = {
            top: this.position.posY,
            bottom: this.position.posY + this.height
        }

        this.color = color
    }

    draw(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.posX, this.position.posY, this.width, this.height)
    }

    update(){
        //alert(`Canvas Height: ${canvas.height}\nPlayer Bottom: ${this.sides.bottom}`)
        if (canvas.height > this.sides.bottom){
            this.position.posY += 1
            this.sides.bottom = this.position.posY + this.height
        }
    }

    moverPraCima(){
        //alert(`Canvas Height: ${canvas.height - canvas.height}\nPlayer Top: ${this.sides.top}`)
        if (canvas.height - canvas.height < this.sides.top){
            this.position.posY -= 1
            this.sides.top = this.position.posY;
        }
    }
}