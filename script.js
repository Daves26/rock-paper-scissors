let elements = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    let humanChoice = elements[index];
    return humanChoice;
}

function getHumanChoice() {
    let invalidChoice = true;
    while (invalidChoice) {
        let humanChoice = prompt("Your choice: ").toLocaleLowerCase().trim();
        if (elements.includes(humanChoice)) {
            invalidChoice = false;
            return humanChoice;
        }
    }
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("It's a tie!");
        return;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore++;
        console.log("You win! Paper beats Rock");
        return;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
        console.log("You win! Scissors beats Paper");
        return;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        console.log("You win! Rock beats Scissors");
        return;
    } else {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        return;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You've Won the Game!");
    } else {
        console.log("You've lost.");
    }
}

playGame();