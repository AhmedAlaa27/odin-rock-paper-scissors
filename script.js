function getComputerChoice() {

    choice = Math.floor(Math.random() * 3)

    if (choice == 0) return "rock"
    else if (choice == 1) return "paper"
    else return "scissors"

}

function getHumanChoice() {
    
    let choice = parseInt(prompt("1. Rock\n2. Paper\n3. Scissors\n"))

    if (choice == 1) return "rock"
    else if (choice == 2) return "paper"
    else if (choice == 3) return "scissors"

}

function playGame() {

    let humanScore = 0, computerScore = 0

    function playRound(humanChoice, computerChoice) {
    
        if (humanChoice == computerChoice) {
            console.log("It's a tie!")
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log("Human WON!")
            humanScore++
        } else {
            console.log("Computer WON!")
            computerScore++
        }
    
    }

    for (let i = 1; i <= 5; i++) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()

        playRound(humanChoice, computerChoice)
    }

    console.log(`Human Score: ${humanScore} \nComputer Score: ${computerScore}`)

}

playGame()