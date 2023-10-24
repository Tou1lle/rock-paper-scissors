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

    if (playerSelection === rock && computerSelection === rock) {
        return "Tie!";
    } else if (playerSelection === rock && computerSelection === paper) {
        return "You Lose! Paper beats Rock";
    }
}

const playerSelection = "rock";
const computerSelection = "Paper";
console.log(playRound(playerSelection, computerSelection));