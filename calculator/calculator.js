const resultViewport = document.querySelector('.visor h1')

let firstNumber = ""
let secondNumber = ""
let currentNumber = ""
let currentOperation = ""
let lastResult = ""
let keepGoing = false
let canAddSign = false

function incrementNumber(event){
    number = event.currentTarget.innerHTML
    currentNumber += number
    updateViewport(number)

    if(firstNumber == ""){
        keepGoing = false
    }
}

function setMathOperation(operation){
    
    if(keepGoing && firstNumber == ""){
        firstNumber = lastResult
    }else if(firstNumber != "" && currentNumber != ""){
        executeMathOperation(false)
    }else{
        if(currentNumber != ""){
            firstNumber = currentNumber
            currentNumber = ""
            canAddSign = true
        }

        if(firstNumber == ""){
            resetViewPort()
        }
    }
    if(canAddSign){
        currentOperation = operation
        updateViewport(" " + operation + " ")
        canAddSign = false
    }
}

function executeMathOperation(reset){
    if(firstNumber == "" || currentNumber == ""){
        return
    }
    
    const n1 = parseInt(firstNumber)
    const n2 = parseInt(currentNumber)
    let result = 0

    switch(currentOperation){
        case "+":
            result = n1 + n2
        break;
        case "-":
            result = n1 - n2
        break;
        case "*":
            result = n1 * n2
        break;
        case "/":
            result = n1 / n2
        break;
    }
    resetViewPort()
    updateViewport(result)
    if(reset){
        firstNumber = ""
    }else{
        firstNumber = result
    }
    currentNumber = ""
    keepGoing = true
    lastResult = result
    canAddSign = true
}

function updateViewport(text){
    resultViewport.innerHTML += text
}

function resetViewPort(){
    resultViewport.innerHTML = ""
}
