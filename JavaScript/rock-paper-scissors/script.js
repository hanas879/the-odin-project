let humanScore = 0
let computerScore = 0

let humanP = document.querySelector(".humanScore")
const humanDiv = document.querySelector(".human")
let computerP = document.querySelector(".computerScore")
const computerDiv = document.querySelector(".computer")
let winner = document.querySelector(".winner")

humanP.textContent = "Human: " + humanScore
computerP.textContent = "Computer: " + computerScore

function computerPlay() {
    let ranNum = Math.round(Math.random() * 2)
    
    if(ranNum == 0) {
        return "Rock"
    } else if(ranNum == 1) {
        return "Paper"
    } else if(ranNum == 2) {
        return "Scissors"
    } else {
        console.log("Error!..")
    }
}

function game(human) {
    
    let computer = computerPlay().toLowerCase()

    if(human == "rock" && computer == "rock") {
        console.log("It's a draw!")
    } else if(human == "rock" && computer == "paper") {
        console.log("You lose! Paper beats Rock")
        computerScore += 1
    } else if(human == "rock" && computer == "scissors") {
        console.log("You Win! Rock beats Scissors")
        humanScore += 1
    } else if(human == "paper" && computer == "paper") {
        console.log("It's a draw!")
    } else if(human == "paper" && computer == "rock") {
        console.log("You Win! Paper beats Rock")
        humanScore += 1
    } else if(human == "paper" && computer == "scissors") {
        console.log("You Lose! Scissors beat Paper")
        computerScore += 1
    } else if(human == "scissors" && computer == "rock") {
        console.log("You Lose! Rock beats Scissors")
        computerScore += 1
    } else if(human == "scissors" && computer == "paper") {
        console.log("You Win! Scissors beats Paper")
        humanScore += 1
    } else if(human == "scissors" && computer == "scissors") {
        console.log("It's a draw")
    } else {
        console.log("Error! Something went wrong...")
    }
    
    humanP.textContent = "Human: " + humanScore
    computerP.textContent = "Computer: " + computerScore

    if(humanScore === 5) {
        winner.textContent = "The Human Wins!"
        humanDiv.style.background = "green"
        computerDiv.style.background = "red"
    }else if(computerScore === 5) {
        winner.textContent = "The Computer Wins!"
        humanDiv.style.background = "red"
        computerDiv.style.background = "green"
    }
}



function endGame() {
    humanScore = 0
    computerScore = 0
    humanP.textContent = "Human: " + humanScore
    computerP.textContent = "Computer: " + computerScore
    winner.textContent = ""
    humanDiv.style.background = ""
    computerDiv.style.background = ""
}
