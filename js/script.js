console.log("hello world! Touille's here");

/*
Make a computer choose between rock, paper and scissors

Player chooses between rock paper scissors

Verdict - win or lose
*/

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function getComputerChoice() {
    const choices = [rock, paper, scissors];

    const index = Math.floor(Math.random() * choices.length);

    return choices[index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    // If statement for player's rock 
    if (playerSelection === rock && computerSelection === rock) {
        return "Tie!";
    } else if (playerSelection === rock && computerSelection === paper) {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === rock && computerSelection === scissors) {
        return "You Win! Rock beats Scissors";
    }

    //If statement for player's scissors
    if (playerSelection === scissors && computerSelection === scissors) {
        return "Tie!";
    } else if (playerSelection === scissors && computerSelection === rock) {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === scissors && computerSelection === paper) {
        return "You Win! Scissors beat Paper";
    }

    //If statement for player's paper
    if (playerSelection === paper && computerSelection === paper) {
        return "Tie!";
    } else if (playerSelection === paper && computerSelection === scissors) {
        return "You Lose! Scissors beat Paper";
    } else if (playerSelection === paper && computerSelection === rock) {
        return "You Win! Paper beats Rock";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let input = prompt("Choose Rock, Paper or Scissors!");

        let playerSelection = input;
        let computerSelection = getComputerChoice();

        let winner = playRound(playerSelection, computerSelection);

        console.log(winner);

        if (winner.includes("Win")) {
            playerScore++;
        } else if (winner.includes("Lose")) {
            computerScore++;
        }   

    }

    if (playerScore > computerScore) {
        return "You win!!!";
    } else if (computerScore > playerScore) {
        return "You lose!!!";
    } else {
        return "The game TIED!";
    }
}

console.log(game());