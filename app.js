const board = document.querySelector('#board')
const colors = ['#9370DB', '#6495ED', '##F4A460', '#00FF7F', '#DC143C', '#ADFF2F', '#FF69B4', '#808000']
const SQUARES_NUMBER = 1395

for (let i=0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
        setColor(square))

    square.addEventListener('mouseleave', () => 
        removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 
                               0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = 'none'
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
