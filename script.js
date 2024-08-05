let humanScore = 0, computerScore = 0

function getComputerChoice() {

    choice = Math.floor(Math.random() * 3)

    if (choice == 0) return "rock"
    else if (choice == 1) return "paper"
    else return "scissors"

}

function playRound(humanChoice, computerChoice) {

    const resultDiv = document.querySelector(".result")
    const humanScoreDiv = document.querySelector(".human-score")
    const computerScoreDiv = document.querySelector(".computer-score")

    if (humanScore < 5 && computerScore < 5) {

        if (humanChoice == computerChoice) {
            console.log("It's a tie!")
            resultDiv.textContent = "It's a TIE!"
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("Human WON!")
            humanScore++
            resultDiv.textContent = `Human WON!`
            humanScoreDiv.textContent = `Human Score: ${humanScore}`
        } else {
            console.log("Computer WON!")
            computerScore++
            resultDiv.textContent = `Computer WON!`
            computerScoreDiv.textContent = `Computer Score: ${computerScore}`
        }
    
    } else {
        resultDiv.textContent = humanChoice == 5 ? "Human has won" : "Computer has won"
    }

}

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {

    button.addEventListener("click", () => {

        console.log(button.className)

        let humanChoice = button.className
        let computerChoice = getComputerChoice()

        playRound(humanChoice, computerChoice)

    })
})