const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

//Aspect Ratio 16:9
canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576

//Definindo variáveis de posição x e y do quadrado.
//O valor de posY vai ser incrementado dentro da função.
let posX = 30
let posY = 30

//Este bloco, ao ser chamado, rodará infinitamente enquanto correponder à alguma condição.
//Basicamente, vai 'atualizar' o canvas pintando o fundo de preto e movimentando o bloco
//para baixo.
function animarQuadradoCaindoEParando(){
    window.requestAnimationFrame(animarQuadradoCaindoEParando)

    context.fillStyle = "black"
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.fillStyle = "deeppink"
    context.fillRect(posX, posY, 30, 30)

    //Condição: o quadrado só vai cair até atingir a borda.
    if (canvas.height > posY + 30){
        posY += 1 //Enquanto a condição corresponder, o quadrado continuará "caindo".
                  //Quanto maior o valor incrementado, mais rápida a queda.
                  //E quanto maior, mais fora da borda o quadrado vai estar quando a condição retornar falso.
    }
}

animarQuadradoCaindoEParando() //Executando a animação que rodará em loop até que algo interrompa.