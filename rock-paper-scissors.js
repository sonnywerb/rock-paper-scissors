// create an array containing the strings, rock, paper, and scissor
let choices = ['ROCK', 'PAPER', 'SCISSORS'];

// will return a random variable indicating rock, paper, or scissor
function getComputerChoice() {
    // using the random function, select a random value from the list
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // return the selected value
    return computerChoice;
}

// function takes two parameters, one is the player's selection and the other is computer's selection
function playRound(playerSelection, computerSelection) {
    // make both the playerSelection and computerSelection to uppercase so we can do case
    // insensitive comparison
    playerSelection = playerSelection.toUpperCase();

    // check if playerSelection beats computerSelection through comparison
    if (playerSelection === computerSelection) {
        return 'Draw!'
    } else if (playerSelection === 'ROCK') {
        switch (computerSelection) {
            case 'PAPER':
                return `You lose! ${computerSelection} beats ${playerSelection}.`;
            case 'SCISSORS':
                return `You win! ${playerSelection} beats ${computerSelection}.`;
        }
    } else if (playerSelection === 'PAPER') {
        switch (computerSelection) {
            case 'ROCK':
                return `You win! ${playerSelection} beats ${computerSelection}.`;
            case 'SCISSORS':
                result = `You lose! ${computerSelection} beats ${playerSelection}.`;
                return result;
        }
    } else if (playerSelection === 'SCISSORS') {
        switch(computerSelection) {
            case 'ROCK':
                return `You lose! ${computerSelection} beats ${playerSelection}.`;
            case 'PAPER':
                return `You win! ${playerSelection} beats ${computerSelection}.`;
        }
    }
}

function game() {
    // create a variable playerSelection to ask user for rock paper or scissors
    // we will use this variable when we call playRounds
    // create variable 'rounds' to keep track of number of rounds
    let rounds = 1;
    // in a while loop, keep calling playRound until rounds is equal to 5
    while (rounds <= 5) {
        let playerSelection = prompt(`Round ${rounds}: ROCK, PAPER, or SCISSORS?`, 'ROCK');
        console.log(playRound(playerSelection, getComputerChoice()));
        rounds++;
    }
    return 'Good game!'
}
