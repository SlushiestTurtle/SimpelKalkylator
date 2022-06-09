class Calculator {
    constructor(totalEquationText, completeInputText) {
        this.totalEquationText = totalEquationText
        this.completeInputText = completeInputText
        this.clearAll()
    }

    // Rensar båda fälten så ny mattematik kan utföras
    clearAll() {
        this.totalEquation = ''
        this.currentNumber = ''
    }

    // Tar bort ett nummer eller operator
    delete() {
        if (this.currentNumber.charAt(this.currentNumber.length - 1) === ' ') {
            this.currentNumber = this.currentNumber.toString().slice(0, -1)
        }
        this.currentNumber = this.currentNumber.toString().slice(0, -1)
    }

    // Lägger till valfri nummer
    addNumber(number) {
        if (number === '.' && this.currentNumber.includes('.')) return
        this.currentNumber = this.currentNumber + number
    }

    // Lägger till valfri operator
    selectOperation(operation) {
        if (this.currentNumber === '') return
        if (this.currentNumber.charAt(this.currentNumber.length - 1) === ' ') return
        this.currentNumber += ' ' + operation + ' '
    }

    // Sparar ekvationen för display och räknar ut ekvationen
    compute() {
        this.totalEquation = this.currentNumber
        this.currentNumber = eval(this.currentNumber)
    }

    // Uppdaterar displayen
    updateDisplay() {
        this.totalEquationText.innerText = this.totalEquation
        this.completeInputText.innerText = this.currentNumber
    }
}

const numberButtons = document.querySelectorAll('#data-number') // Tar in nummer värden
const operationButtons = document.querySelectorAll('#data-operation') // Tar in operator värden
const equalButton = document.querySelector('#data-equal') // Exekverar funktionerna 'compute' & 'updateDisplay'
const deleteButton = document.querySelector('#delete') // Exekverar funktionerna 'delete'
const allClearButton = document.querySelector('#clear-all') // Exekverar funktionerna 'clearAll'
const totalEquationText = document.querySelector('#total-operand') // Display för ekvationen
const completeInputText = document.querySelector('#complete-input-operand') // Display för ekvationens resultat

const calculator = new Calculator(totalEquationText, completeInputText)

// Knapp respons för nummer
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNumber(button.innerText)
        calculator.updateDisplay()
    })
})

// Knapp respons för operatorer
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.selectOperation(button.innerText)
        calculator.updateDisplay()
    })
})

// Knapp respons för nummber eller operator
deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

// Knapp respons för ta bort allt
allClearButton.addEventListener('click', button => {
    calculator.clearAll()
    calculator.updateDisplay()
})

// Knapp respons för exekvera resultatet
equalButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})