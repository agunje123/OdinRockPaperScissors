document.getElementById("getGameResult").addEventListener("click", getComputerResult);

function getComputerResult() {
    let result = Math.floor(Math.random() * 3);
    console.log(result);
    return result;
}