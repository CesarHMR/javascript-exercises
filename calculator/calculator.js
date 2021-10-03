//   ------------------
//   |   n1 | op | n2 |
//   ------------------
//   |           main |
//   ------------------

const mainVisor = document.querySelector('#main')
const n1Visor = document.querySelector('#n1')
const n2Visor = document.querySelector('#n2')
const operatorVisor = document.querySelector('#op')

let main = null;
let n1 = null;
let n2 = null;
let operation = null;

let currentNumber = "";

function TypeNumber(number) {
    if (n1 !== null && n2 !== null && main !== null) {
        ResetAll()
    }

    currentNumber += number
    main = parseFloat(currentNumber)
    UpdateVisorText()
}

function SetMathOperation(op) {
    operation = op

    if (n1 === null) {
        n1 = parseFloat(currentNumber)
        currentNumber = ""
    }

    UpdateVisorText()
}

function ExecuteMathOperation() {
    if (n1 === null || currentNumber === "") {
        console.log("invalid operation!")
        return
    }

    if (n1 !== null && n2 !== null && main !== null) {
        n1 = main;
    }

    if (n2 === null)
        n2 = currentNumber === null ? n2 : parseFloat(currentNumber)

    currentNumber = operation(n1, n2).toString()
    main = parseFloat(currentNumber)

    UpdateVisorText()
}

function UpdateVisorText() {
    let mainText = main === null ? "" : main.toString()
    let n1Text = n1 === null ? "" : n1.toString();
    let n2Text = n2 === null ? "" : n2.toString();
    let opText = operation === null ? "" : OperationSign(operation)

    mainVisor.innerHTML = mainText;
    n1Visor.innerHTML = n1Text;
    n2Visor.innerHTML = n2Text;
    operatorVisor.innerHTML = opText;
}

function ResetAll() {
    currentNumber = ""
    main = null
    n1 = null
    n2 = null
    operation = null

    UpdateVisorText()
}

function OperationSign(operation) {
    switch (operation) {
        case addition:
            return " + "
        case subtraction:
            return " - "
        case multiplication:
            return " * "
        case division:
            return " &divide; "
    }
}

const addition = (n1, n2) => n1 + n2
const subtraction = (n1, n2) => n1 - n2
const multiplication = (n1, n2) => n1 * n2
const division = (n1, n2) => n1 / n2