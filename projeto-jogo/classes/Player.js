class Player {
    constructor(posX = Number(), posY = Number(), width = Number(), height = Number(), color = String()) {
        this.position = {
            posX: posX,
            posY: posY
        }

        //Velocidade. Objeto com parâmetros para a velocidade em ambas as direções (X e Y)
        //A velocidade é incrementada de forma exponencial, de forma com que a velocidade do
        //jogador, enquanto estiver caindo, vai aumentando de forma contínua.
        this.velocity = {
            velX: 0,
            velY: 0
        }

        this.gravity = 1

        this.width = width
        this.height = height

        this.sides = {
            bottom: this.position.posY + this.height
        }

        this.color = color
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.posX, this.position.posY, this.width, this.height)
    }

    update() {
        this.position.posY += this.velocity.velY //Incrementa o valor da posição Y do objeto
                                                 //com o valor de velocidade atual.
        this.sides.bottom = this.position.posY + this.height //Atualiza o valor do bottom do objeto.

        if (canvas.height > this.sides.bottom + this.velocity.velY) {
            this.velocity.velY += this.gravity //Incrementa o valor da velocidade com o valor de gravidade. A cada repetição
                                    //a queda do objeto vai ficando mais rápida.


            this.sides.bottom = this.position.posY + this.height
        } else {
            this.velocity.velY = 0 //Se o canvas.height é igual ao bottom do objeto + velocidade,
                                   //o objeto atingiu a borda inferior do canvas. A velocidade 
                                   //de queda recebe 0 e o objeto para de cair.
        }
    }
}