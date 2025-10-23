let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let elements = ["rock", "paper", "scissors"];
const results = document.querySelector(".results");
const humanPoints = document.querySelector("#human_points");
const computerPoints = document.querySelector("#computer_points");
const body = document.querySelector("body");

const buttons = document.querySelectorAll("button");

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    let computerChoice = elements[index];
    return computerChoice;
}

function playRound(computerChoice, humanChoice) {
    roundsPlayed++;
    if (computerChoice === humanChoice) {
        return "It's a tie!";
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore++;
        humanPoints.textContent = humanScore;
        return "You win! Paper beats Rock";
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
        humanPoints.textContent = humanScore;
        return "You win! Scissors beats Paper";
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        humanPoints.textContent = humanScore;
        return "You win! Rock beats Scissors";
    } else {
        computerScore++;
        computerPoints.textContent = computerScore;
        return "You lose! " + computerChoice + " beats " + humanChoice;
    }
}

function playGame() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (roundsPlayed == 5) {
                if (humanScore > computerScore) {
                    body.style.backgroundColor = "#112716"
                    results.textContent = "=== Congratulations! You Win! ===";
                    return;
                } else if (computerScore > humanScore) {
                    body.style.backgroundColor = "#271111"
                    results.textContent = "=== You Lose ===";
                    return;
                } else {
                    body.style.backgroundColor = "#1a1e27"
                    results.textContent = "=== Tied! ===";
                }
            }
            let computerChoice = getComputerChoice();
            let humanChoice = button.id;
            let result = playRound(computerChoice, humanChoice);
            results.textContent = result;
        });
    });
}

playGame();