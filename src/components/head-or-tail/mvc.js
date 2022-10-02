class Model {
    constructor(){
        this.headOrTail = null
    }
}

class View {
    renderDOM() {
        const generateButton = document.createElement('button')
        // play button
        generateButton.classList.add('play')
        generateButton.textContent = 'play'
        // create coin box
        const coinBox = document.createElement('div')
        coinBox.textContent = 'Орел чи Решка'
        coinBox.classList.add('coin-box')

        generateButton.onclick = () => { 
            coinBox.textContent = ''
            coinBox.classList.add('animate')
            setTimeout(() => {
                coinBox.classList.remove('animate')
                coinBox.textContent = controller.setTailOrHead() ? 'Решка' : 'Орел'
            }, 3500)
        }

        const getDOM = document.getElementById('game')
        getDOM.append(generateButton)
        getDOM.append(coinBox)

    }
}

class Controller {
    setTailOrHead(){
        const model = new Model()
        const randomizeCoinSide = Math.round(Math.random())
        model.headOrTail = !!randomizeCoinSide
        return model.headOrTail
    }

    init() {
        const view = new View()
        view.renderDOM()
    }
}


export const controller = new Controller()