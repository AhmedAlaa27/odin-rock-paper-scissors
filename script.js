function getComputerChoice() {

    choice = Math.floor(Math.random() * 3)

    if (choice == 0) return "Rock"
    else if (choice == 1) return "Paper"
    else return "Scissors"

}

function getHumanChoice() {
    
    let choice = parseInt(prompt("1. Rock\n2. Paper\n3. Scissors\n"))

    if (choice == 1) return "Rock"
    else if (choice == 2) return "Paper"
    else if (choice == 3) return "Scissors"

}

let humanScore = 0, computerScore = 0 