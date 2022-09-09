let choices = ['ROCK', 'PAPER', 'SCISSOR'];
let playerName = '';
let computerScore = 0;
let playerScore = 0;

disableButtons();

const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
    playerName = document.getElementById('name').value;
    document.getElementById('name').value = "";

    const container = document.querySelector('.container');

    const h4 = document.createElement('h4');
    h4.textContent = `Good luck ${playerName}!`;
    container.append(h4);
    submit.disabled = true;
    enableButtons();
});

function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();

    const currentPlayer = playerName.toUpperCase();
    if (currentPlayer === 'DAN') {
        if (playerSelection === 'ROCK') {
            computerSelection = 'SCISSOR';
        } else if (playerSelection === 'PAPER') {
            computerSelection = 'ROCK';
        } else {
            computerSelection = 'PAPER';
        }
    }

    if (currentPlayer === 'JASON') {
        if (playerSelection === 'ROCK') {
            computerSelection = 'PAPER';
        } else if (playerSelection === 'PAPER') {
            computerSelection = 'SCISSOR';
        } else {
            computerSelection = 'ROCK';
        }
    }

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

        const container = document.querySelector('.container');
        container.removeChild(container.lastChild);

        const submit = document.querySelector('submit');
        submit.disabled = false;
        enableButtons();
    })
}

function disableButtons() {
    const buttons = document.querySelectorAll('.selection');
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

function enableButtons() {
    const buttons = document.querySelectorAll('.selection');
    buttons.forEach((button) => {
        button.disabled = false;
    });
}

function scoreTracker() {
    let gameOverMsg = ' ';
    if (playerScore === 5) {
        gameOverMsg =  `You win! ${playerName}: ${playerScore} - Computer: ${computerScore}!`;
        disableButtons();
        newGame();
        return gameOverMsg;
    }
    if (computerScore === 5) {
        gameOverMsg =  `You lost! ${playerName}: ${playerScore} - Computer: ${computerScore}`;
        disableButtons
        disableButtons();
        newGame();
        return gameOverMsg;
    }
    return `${playerName}: ${playerScore} - Computer: ${computerScore}`;
}

const buttons = document.querySelectorAll('.container2>button');
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



