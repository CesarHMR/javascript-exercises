const button = document.querySelector('#changer')
const background = document.querySelector('.main')
const hexcode = document.querySelector('#color')
const hexcolorArray = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

function getRandomInt(min,max){
    result = min + Math.floor(Math.random() * (max-min))
    return result
}

function getRandomColor(){
    currentColor = "#"
    for (let i = 0; i < 6; i++) {
        currentColor += hexcolorArray[getRandomInt(0,hexcolorArray.length)]
    }
    return currentColor
}

function changeBackgroundColor(){
    const color = getRandomColor()
    background.style.backgroundColor = color
    hexcode.innerHTML = color
}

button.addEventListener('click', changeBackgroundColor)