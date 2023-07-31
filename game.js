//Let's say 0 is paper, 1 is rock and 2 are scissors
function getComputerSelection() {
    let result = Math.floor(Math.random() * 3);
    return result;
}

void function getPlayerSelection(playerSelection) {
    playGame(playerSelection);
}

