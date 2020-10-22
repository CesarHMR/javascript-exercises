const resultViewport = document.querySelector('.visor h1')

let currentNumber = ""      //number that the user is typing - eventually it turns in the first Number and the second Number
let firstNumber = ""        //first number in the operation Ex:(n1 + n2 = result)
let secondNumber = ""       //second number in the operation Ex:(n1 + n2 = result)
let currentOperation = ""   //current arithmetic operatior
let lastResult = ""         //track of the last operation result, in case the users wants to operate with it

let canAddSign = false      //controls the entrace of the sign in the viewport - avoid user from add sign after sign Ex:(12 + + - 8)
let needToClean = false     //if it should clean the viewport

function typeNumber(event){
    if(needToClean){//clean viewport for a new operation
        cleanViewport()
        needToClean = false
    }

    number = event.currentTarget.innerHTML  //get content from button
    currentNumber += number                 //appends to currentNumber
    apendViewport(number)                   //appends to viewport

    if(firstNumber === ""){
        lastResult = ""
    }
}

function setMathOperation(operation){
    
    if(lastResult !== "" && firstNumber === ""){//this make that after use '=' sign, the user still can operate with the result
        firstNumber = lastResult
    }
    else if(firstNumber !== "" && currentNumber !== ""){//it can operate after a operation without using '=' sign Ex:1 + 1 + 1 + 1 + 1
        executeMathOperation(false)
    }
    else if(currentNumber !== ""){//Set the current number as the first number
        firstNumber = currentNumber
        currentNumber = ""
        canAddSign = true
    }

    if(canAddSign){//if should add the sign in the viewport
        currentOperation = operation
        apendViewport(` ${operation} `)
        canAddSign = false
    }

    needToClean = false
}

function executeMathOperation(continueOperationAfterResult){
    if(anyOfTheNumbersIsEmpty()){
        return
    }

    secondNumber = currentNumber
    const n1 = parseFloat(firstNumber)
    const n2 = parseFloat(secondNumber)
    let result

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

    cleanViewport()
    apendViewport(result)

    currentNumber = ""
    secondNumber = ""
    lastResult = result
    canAddSign = true

    if(continueOperationAfterResult)
    {
        firstNumber = ""
        needToClean = true
    }
    else
    {
        firstNumber = result
    }
}

function reset(){
    console.log("entrei")
    currentNumber = ""      
    firstNumber = ""
    secondNumber = ""       
    currentOperation = ""   
    lastResult = ""        
    
    canAddSign = false     
    needToClean = false

    cleanViewport()
    }

function apendViewport(text){ resultViewport.innerHTML += text }

function cleanViewport(){ resultViewport.innerHTML = "" }

function bothNumbersExist(){ return firstNumber !== "" && currentNumber !== "" }

function anyOfTheNumbersIsEmpty(){ return firstNumber === "" || currentNumber === "" }