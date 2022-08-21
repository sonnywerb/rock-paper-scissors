// create an array containing the strings, rock, paper, and scissor
let choices = ['rock', 'paper', 'scissors'];

// will return a random variable indicating rock, paper, or scissor
function getComputerChoice() {
    // using the random function, select a random value from the list
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    // return the selected value
    return computerChoice;
}