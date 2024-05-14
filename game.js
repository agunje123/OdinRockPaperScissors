let computerResult = 0;
let playerResult = 0;
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const result = document.getElementById("result");

//Let's say 0 is paper, 1 is rock and 2 are scissors
function getComputerSelection() {
	let result = Math.floor(Math.random() * 3);
	return result;
}

function playRound(playerSelection) {
	let computerSelection = getComputerSelection();
	if (playerSelection === computerSelection) {
		result.textContent = "It's a tie! Choose again!";
	} else if (
		(playerSelection === 1 && computerSelection === 2) ||
		(playerSelection === 0 && computerSelection === 1) ||
		(playerSelection === 2 && computerSelection === 0)
	) {
		playerResult++;
		result.textContent = "You win! Choose again!";
		playerScore.textContent = playerResult;
	} else {
		computerResult++;
		result.textContent = "You lose! Choose again!";
		computerScore.textContent = computerResult;
	}
}

function playGame(playerSelection) {
	playRound(playerSelection);
	if (playerResult === 5) {
		result.textContent = "You win the match!";
		playerResult = 0;
		playerScore.textContent = 0;
		computerResult = 0;
		computerScore.textContent = 0;
	}
	if (computerResult === 5) {
		result.textContent = "You lose the match!";
		playerResult = 0;
		playerScore.textContent = 0;
		computerResult = 0;
		computerScore.textContent = 0;
	}
}

document.getElementById("rock").addEventListener("click", function () {
	playGame(0);
});
document.getElementById("paper").addEventListener("click", function () {
	playGame(1);
});
document.getElementById("scissors").addEventListener("click", function () {
	playGame(2);
});
