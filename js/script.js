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

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    // If statement for player's rock 
    if (playerSelection === rock && computerSelection === rock) {
        return "Tie!";
    } else if (playerSelection === rock && computerSelection === paper) {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === rock && computerSelection === scissors) {
        return "You win! Rock beats Scissors";
    }

    //If statement for player's scissors
    if (playerSelection === scissors && computerSelection === scissors) {
        return "Tie!";
    } else if (playerSelection === scissors && computerSelection === rock) {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection === scissors && computerSelection === paper) {
        return "You win! Scissors beat Paper";
    }

    //If statement for player's paper
    if (playerSelection === paper && computerSelection === paper) {
        return "Tie!";
    } else if (playerSelection === paper && computerSelection === scissors) {
        return "You Lose! Scissors beat Paper";
    } else if (playerSelection === paper && computerSelection === rock) {
        return "You win! Paper beats Rock";
    }
}

const playerSelection = "sCiSSors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));