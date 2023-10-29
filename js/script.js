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

//take buttons and add them to nodelist
const buttons = document.querySelectorAll(".btn");

//Add to each button a corresponding event listener
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(playRound(button.textContent, getComputerChoice()));
    });
});