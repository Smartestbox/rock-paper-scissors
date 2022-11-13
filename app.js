let playerSelection = "";
let computerSelection = "";
let playerScore;
let computerScore;
let roundWinner;

function getComputerChoice() {
	const variants = ["rock", "paper", "scissors"];
	const randomCompChoice = Math.floor(Math.random() * 3);
	return variants[randomCompChoice];
}

function playRound(playerSelection, computerSelection) {
	playerSelection = prompt("Rock, paper or scissors?", "");
	computerSelection = getComputerChoice();

	switch (true) {
		case playerSelection.toLowerCase() === computerSelection:
			roundWinner = "tie";
			break;
		case playerSelection.toLowerCase() === "rock" &&
			computerSelection === "paper":
			roundWinner = "computer";
			break;
		case playerSelection.toLowerCase() === "rock" &&
			computerSelection === "scissors":
			roundWinner = "player";
			break;
		case playerSelection.toLowerCase() === "paper" &&
			computerSelection === "rock":
			roundWinner = "player";
			break;
		case playerSelection.toLowerCase() === "paper" &&
			computerSelection === "scissors":
			roundWinner = "computer";
			break;
		case playerSelection.toLowerCase() === "scissors" &&
			computerSelection === "rock":
			roundWinner = "computer";
            break;
		case playerSelection.toLowerCase() === "scissors" &&
			computerSelection === "paper":
			roundWinner = "player";
            break;
	}
}

function game() {
	playerScore = 0;
	computerScore = 0;

	for (let i = 1; i < 6; i++) {
		playRound(playerSelection, computerSelection);

		switch (true) {
			case roundWinner === "computer":
				computerScore += 1;
				break;
			case roundWinner === "player":
				playerScore += 1;
				break;
		}

		switch (true) {
			case playerScore > computerScore:
				console.log(
					`Your score is ${playerScore} and computer score is ${computerScore} - You are leader`
				);
				break;
			case computerScore > playerScore:
				console.log(
					`Your score is ${playerScore} and computer score is ${computerScore} - Computer is leader`
				);
				break;
			case playerScore === computerScore:
				console.log(
					`Your score is ${playerScore} and computer score is ${computerScore} - It\'s a tie`
				);
				break;
		}
	}

	switch (true) {
		case playerScore > computerScore:
			console.log(
				`Your score is ${playerScore} and computer score is ${computerScore} - Congratulations, you win the game!`
			);
			break;
		case playerScore < computerScore:
			console.log(
				`Your score is ${playerScore} and computer score is ${computerScore} - Computer win this the game!`
			);
			break;
		case playerScore === computerScore:
			console.log(
				`Your score is ${playerScore} and computer score is ${computerScore} - Wow, it\'s a tie! Rematch?`
			);
	}
}

game();
