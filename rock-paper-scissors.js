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
    let result = '';
    // check if playerSelection beats computerSelection through comparison
    if (playerSelection === 'ROCK') {
        switch (computerSelection) {
            case 'ROCK':
                result = 'Draw!'
                return result;
            case 'PAPER':
                result = `You lose! ${computerSelection} beats ${playerSelection}.`;
                return result;
            case 'SCISSORS':
                result = `You win! ${playerSelection} beats ${computerSelection}.`;
                return result;
        }
    } else if (playerSelection === 'PAPER') {
        switch (computerSelection) {
            case 'ROCK':
                result = `You win! ${playerSelection} beats ${computerSelection}.`;
                return result;
            case 'PAPER':
                result = 'Draw!'
                return result;
            case 'SCISSORS':
                result = `You lose! ${computerSelection} beats ${playerSelection}.`;
                return result;
        }
    } else if (playerSelection === 'SCISSORS') {
        switch(computerSelection) {
            case 'ROCK':
                result = `You lose! ${computerSelection} beats ${playerSelection}.`;
                return result;
            case 'PAPER':
                result = `You win! ${playerSelection} beats ${computerSelection}.`;
                return result;
            case 'SCISSORS':
                result = 'Draw!'
                return result;
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
}
