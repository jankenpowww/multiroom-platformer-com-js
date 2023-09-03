/*Selecionando e capturando o contexto do canvas. Isso nos permite
começar nossos teste e criações de elementros na tela.*/
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

/*Definindo largura e altura do canvas, baseando na proporção de tela
(aspect ratio) mais adequada à maioria das telas de dispositivo (16:9).
O valor 64 é referente ao tamanho dos tilesets utilizados para o jogo em questão.*/
canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576

//Criando uma classe para o player.
//A classe possui um construtor que define valores de propriedades para um objeto instanciado.
//E também um método 'draw()' que desenha o quadrado na tela.
//O método update() atualiza a posição atual do qudradado conforme o incremento da sua posY. Também possui a lógica de interrupção.
class Player {
    constructor(posX, posY, width, height){
        this.position = {
            posX: posX,
            posY: posY
        }

        this.width = width
        this.height = height

        this.sides = {
            bottom: this.position.posY + this.height
        }

    }

    draw(color){
        ctx.fillStyle = color
        ctx.fillRect(this.position.posX, this.position.posY, this.width, this.height)
    }

    update(){
        if (this.sides.bottom < canvas.height){
            this.position.posY += 10
            this.sides.bottom = this.position.posY + this.height
        }
    }
}

//Criando um jogador à partir da classe, passando os valores previamente no constructor.
const player = new Player(30, 30, 100, 100)

function animarQuadrado(){
    //requestAnimationFrame() recebe um callback da própria função que está estruturada.
    //A animação entrará em loop até parar.
    window.requestAnimationFrame(animarQuadrado)

    //Preenchendo o fundo de preto à cada quadro.
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    player.draw("orangered")
    
    player.update()
}

//Chamando a função de animação.
animarQuadrado()