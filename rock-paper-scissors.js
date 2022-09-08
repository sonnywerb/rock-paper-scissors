let choices = ['ROCK', 'PAPER', 'SCISSOR'];
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    if (playerSelection === computerSelection) {
        return 'Draw!';
    } else if (playerSelection === 'ROCK') {
        switch (computerSelection) {
            case 'PAPER':
                computerScore++;
                return `You lost this round! ${computerSelection} beats ${playerSelection}.`;
            case 'SCISSOR':
                playerScore++;
                return `You won this round! ${playerSelection} beats ${computerSelection}.`;
        }
    } else if (playerSelection === 'PAPER') {
        switch (computerSelection) {
            case 'ROCK':
                playerScore++;
                return `You won this round! ${playerSelection} beats ${computerSelection}.`;
            case 'SCISSOR':
                computerScore++;
                result = `You lost this round! ${computerSelection} beats ${playerSelection}.`;
                return result;
        }
    } else if (playerSelection === 'SCISSOR') {
        switch(computerSelection) {
            case 'ROCK':
                computerScore++;
                return `You lost this round! ${computerSelection} beats ${playerSelection}.`;
            case 'PAPER':
                playerScore++;
                return `You won this round! ${playerSelection} beats ${computerSelection}.`;
        }
    }
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

function newGame() {
    const newGameBtn = document.createElement('button');
    newGameBtn.textContent = 'New Game';
    document.body.appendChild(newGameBtn);

    newGameBtn.addEventListener('click', () => {
        resetScore();
        document.body.removeChild(newGameBtn);
        const round = document.querySelector('#roundResult');
        round.textContent = '';
        const score = document.querySelector('#score');
        score.textContent = '';

        const buttons = document.querySelectorAll('.selection');
        buttons.forEach((button) => {
            button.disabled = false;
        });
    })
}

function disableButtons() {
    const buttons = document.querySelectorAll('.selection');
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

function scoreTracker() {
    let gameOverMsg = ' ';
    if (playerScore === 5) {
        gameOverMsg =  `You win! Player: ${playerScore} - Computer: ${computerScore}!`;
        disableButtons();
        newGame();
        return gameOverMsg;
    }
    if (computerScore === 5) {
        gameOverMsg =  `You lost! Player: ${playerScore} - Computer: ${computerScore}`;
        disableButtons
        disableButtons();
        newGame();
        return gameOverMsg;
    }
    return `Player: ${playerScore} - Computer: ${computerScore}`;
}

function game() {
    
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerSelected = getComputerChoice();
        let playerSelected = button.id;
        const round = document.querySelector('#roundResult');
        round.textContent = playRound(playerSelected, computerSelected);
        const score = document.querySelector('#score');
        score.textContent = scoreTracker();
        
    })
});

