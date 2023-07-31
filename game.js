//Let's say 0 is paper, 1 is rock and 2 are scissors
function getComputerResult() {
  let result = Math.floor(Math.random() * 3);
  return result;
}

function playGame(playerSelection) {
  let computerSelection = getComputerResult();
  if (playerSelection === computerSelection) {
    return "It's a tie! Choose again!";
  } else if (
    (playerSelection === 1 && computerSelection === 2) ||
    (playerSelection === 0 && computerSelection === 1) ||
    (playerSelection === 2 && computerSelection === 0)
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}