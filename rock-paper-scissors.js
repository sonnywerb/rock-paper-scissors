let choices = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

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
    let rounds = 1;
    while (rounds <= 5) {
        let playerSelection = prompt(`Round ${rounds}: ROCK, PAPER, or SCISSORS?`, 'ROCK');
        console.log(playRound(playerSelection, getComputerChoice()));
        rounds++;
    }
    return 'Good game!'
    
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});
