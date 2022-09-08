let choices = ['ROCK', 'PAPER', 'SCISSOR'];

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    let result = '';

    if (playerSelection === computerSelection) {
        result = 'Draw!';
        return result;
    } else if (playerSelection === 'ROCK') {
        switch (computerSelection) {
            case 'PAPER':
                return `You lose! ${computerSelection} beats ${playerSelection}.`;
            case 'SCISSOR':
                return `You win! ${playerSelection} beats ${computerSelection}.`;
        }
    } else if (playerSelection === 'PAPER') {
        switch (computerSelection) {
            case 'ROCK':
                return `You win! ${playerSelection} beats ${computerSelection}.`;
            case 'SCISSOR':
                result = `You lose! ${computerSelection} beats ${playerSelection}.`;
                return result;
        }
    } else if (playerSelection === 'SCISSOR') {
        switch(computerSelection) {
            case 'ROCK':
                return `You lose! ${computerSelection} beats ${playerSelection}.`;
            case 'PAPER':
                return `You win! ${playerSelection} beats ${computerSelection}.`;
        }
    }
}

function game() {
    // let rounds = 1;
    // while (rounds <= 5) {
    //     let playerSelection = prompt(`Round ${rounds}: ROCK, PAPER, or SCISSORS?`, 'ROCK');
    //     console.log(playRound(playerSelection, getComputerChoice()));
    //     rounds++;
    // }
    // return 'Good game!'
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerSelected = getComputerChoice();
        let playerSelected = button.id;
        console.log(playRound(playerSelected, computerSelected));
    })
});

