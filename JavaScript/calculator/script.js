let displayValue = ""
let chosenOpe = ""
let secondNum = false
let secondInputNum = ""
let display = document.querySelector(".displayP")
const keyNum = document.querySelectorAll(".num")
const keyOpe = document.querySelectorAll(".operator")

for(let i = 0; i < keyNum.length; i++) {
    let self = keyNum[i]
    
    self.addEventListener("click", function(e) {
        
        if(!secondNum) {
            switch(e.srcElement.id) {
                case "0":
                    displayValue += "0"
                    updateDisplay()
                    break
                case "1":
                    displayValue += "1"
                    updateDisplay()
                    break
                case "2":
                    displayValue += "2"
                    updateDisplay()
                    break
                case "3":
                    displayValue += "3"
                    updateDisplay()
                    break
                case "4":
                    displayValue += "4"
                    updateDisplay()
                    break
                case "5":
                    displayValue += "5"
                    updateDisplay()
                    break
                case "6":
                    displayValue += "6"
                    updateDisplay()
                    break
                case "7":
                    displayValue += "7"
                    updateDisplay()
                    break
                case "8":
                    displayValue += "8"
                    updateDisplay()
                    break
                case "9":
                    displayValue += "9"
                    updateDisplay()
                    break
            }
        }else if(secondNum) {
            switch(e.srcElement.id) {
                case "0":
                    displayValue += "0"
                    secondInputNum += "0"
                    updateDisplay()
                    break
                case "1":
                    displayValue += "1"
                    secondInputNum += "1"
                    updateDisplay()
                    break
                case "2":
                    displayValue += "2"
                    secondInputNum += "2"
                    updateDisplay()
                    break
                case "3":
                    displayValue += "3"
                    secondInputNum += "3"
                    updateDisplay()
                    break
                case "4":
                    displayValue += "4"
                    secondInputNum += "4"
                    updateDisplay()
                    break
                case "5":
                    displayValue += "5"
                    secondInputNum += "5"
                    updateDisplay()
                    break
                case "6":
                    displayValue += "6"
                    secondInputNum += "6"
                    updateDisplay()
                    break
                case "7":
                    displayValue += "7"
                    secondInputNum += "7"
                    updateDisplay()
                    break
                case "8":
                    displayValue += "8"
                    secondInputNum += "8"
                    updateDisplay()
                    break
                case "9":
                    displayValue += "9"
                    secondInputNum += "9"
                    updateDisplay()
                    break
            }
        }

    }, false)
}

for(let i = 0; i < keyOpe.length; i++) {
    let self = keyOpe[i]

    self.addEventListener("click", function(e) {
        let firstInputNum = parseInt(displayValue)

        switch(e.srcElement.id) {
            case "c":
                displayValue = ""
                firstInputNum = 0
                secondInputNum = ""
                secondNum = false
                updateDisplay()
                break
            case "+":
                displayValue += "+"
                chosenOpe = "+"
                secondNum = true
                updateDisplay()
                break
            case "-":
                displayValue += "-"
                chosenOpe = "-"
                secondNum = true
                updateDisplay()
                break
            case "*":
                displayValue += "*"
                chosenOpe = "*"
                secondNum = true
                updateDisplay()
                break
            case "/":
                displayValue += "/"
                chosenOpe = "/"
                secondNum = true
                updateDisplay()
                break
            case "enter":
                operate(chosenOpe,firstInputNum,parseInt(secondInputNum))
                break
        }
        
    })
}

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(symbol, num1, num2) {
    switch(symbol) {
        case "+":
            displayValue = add(num1, num2)
            updateDisplay()
            break
        case "-":
            displayValue = subtract(num1, num2)
            updateDisplay()
            break
        case "*":
            displayValue = multiply(num1, num2)
            updateDisplay()
            break
        case "/":
            displayValue = divide(num1, num2)
            updateDisplay()
            break
    }
}

function updateDisplay() {
    display.textContent = displayValue
}

updateDisplay(displayValue)