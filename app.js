const roundResult = document.querySelector('.round-result');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const buttons = document.querySelector('.player-choices');
const resetBtn = document.querySelector('.reset')

resetBtn.addEventListener('click', () => {
	playerWins = 0;
	computerWins = 0;
	playerScore.textContent = 0;
	computerScore.textContent = 0;
	roundResult.textContent = 'Who will win?';
	buttons.addEventListener('click', getRoundResult);
})

let playerSelection = "";
let computerSelection = "";
let playerWins = 0;
let computerWins = 0;
const variants = ["rock", "paper", "scissors"];

const getPlayerChoice = function(event) {
	switch(true) {
		case event.target.className === 'rock-btn':
			playerSelection = variants[0];
			break;
		case event.target.className === 'paper-btn':
			playerSelection = variants[1];
			break;
		case event.target.className === 'scissors-btn':
			playerSelection = variants[2];
			break;
	};
};

function getRoundResult(event) {
	getPlayerChoice(event);
	
	playRound(playerSelection, computerSelection);

	if(playerWins === 5 || computerWins === 5) {
		if(playerWins > computerWins) {
			roundResult.textContent = 'The winner is player'
		}
		if(computerWins > playerWins) {
			roundResult.textContent = 'The winner is computer'
		}
		buttons.removeEventListener('click', getRoundResult)
	}
}

buttons.addEventListener('click', getRoundResult);

function getComputerChoice() {
	const randomCompChoice = Math.floor(Math.random() * 3);
	return variants[randomCompChoice];
};

function playRound(playerSelection, computerSelection) {

	computerSelection = getComputerChoice();

	switch (true) {
		case playerSelection.toLowerCase() === computerSelection:
			roundResult.textContent = "In this round - tie";
			break;
		case (playerSelection.toLowerCase() === "rock" &&
			computerSelection === "paper") || (playerSelection.toLowerCase() === "paper" &&
			computerSelection === "scissors") || (playerSelection.toLowerCase() === "scissors" &&
			computerSelection === "rock"):
			roundResult.textContent = "Computer wins this round";
			computerWins += 1;
			computerScore.textContent = computerWins;
			break;
		case (playerSelection.toLowerCase() === "rock" &&
			computerSelection === "scissors") || (playerSelection.toLowerCase() === "paper" &&
			computerSelection === "rock") || (playerSelection.toLowerCase() === "scissors" &&
			computerSelection === "paper"):
			roundResult.textContent = "Player wins this round";
			playerWins += 1;
			playerScore.textContent = playerWins;
			break;
	};
};

