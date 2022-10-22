let playerOneScore = 0;
let playerTwoScore = 0;

let gameRunning = false;

const playerOneScoreText = document.getElementById("playerOneScore");
const playerTwoScoreText = document.getElementById("playerTwoScore");
const wonText = document.getElementById("wonText");
const input = document.getElementById("timerInput");
let startButton = document.getElementById("startButton");
startButton.addEventListener("click", startGame);

document.addEventListener("keypress", keyBoardEvents);

function startGame() {
  restartGame();

  let time = input.value * 1000;
  setTimer(time);
  gameRunning = true;
}

function restartGame() {
  wonText.innerText = "";
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneScoreText.innerText = "Score: " + playerOneScore;
  playerTwoScoreText.innerText = "Score: " + playerTwoScore;
}

function setTimer(time) {
  setTimeout(function () {
    gameRunning = false;
    setWinner();
  }, time);
}

function setWinner() {
  if (playerOneScore > playerTwoScore) {
    wonText.innerText = "Player One Won!!";
  } else if (playerOneScore < playerTwoScore) {
    wonText.innerText = "Player Two Won!!";
  } else if (playerOneScore === playerTwoScore) {
    wonText.innerText = "Players Tied!";
  }
}

function keyBoardEvents(e) {
  if (gameRunning) {
    if (e.keyCode === 115) {
      playerOneScore++;
    } else if (e.keyCode === 108) {
      playerTwoScore++;
    }

    playerOneScoreText.innerText = "Score: " + playerOneScore;
    playerTwoScoreText.innerText = "Score: " + playerTwoScore;
  }
}
