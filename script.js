let playerScore = 0;
let pcScore = 0;
let pcChoise = "Waiting...";
let playerChoise = "Waiting...";
let options = ["rock", "paper", "scissors"];
document.getElementById("player-choice").innerText = playerChoise;
document.getElementById("pc-choice").innerText = pcChoise;

function computerPlay() {
  return (pc = options[Math.floor(Math.random() * 3)]);
}

function reset() {
  playerScore = 0;
  pcScore = 0;
}

function checkWinner(playerScore, pcScore) {
  if (playerScore == 5) {
    if (pcScore == 0) {
      alert("Player wins! Flawless victory!");
      reset();
    } else {
      alert("Player wins!");
      reset();
    }
  } else if (pcScore == 5) {
    if (playerScore == 0) {
      alert("Computer wins! Flawless victory!");
      reset();
    } else {
      alert("Computer wins!");
      reset();
    }
  }
}

function roundResult(pS, cS) {
  //playerSelection and computerSelection are replaced with pS cS respectively
  if (pS == cS) {
    return;
  } else if (
    (pS == "rock" && cS == "scissors") ||
    (pS == "paper" && cS == "rock") ||
    (pS == "scissors" && cS == "paper")
  ) {
    playerScore++;
    checkWinner(playerScore, pcScore);
    return;
  } else {
    pcScore++;
    checkWinner(playerScore, pcScore);
    return;
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerChoise = button.id;
    pcChoise = computerPlay();
    roundResult(playerChoise, pcChoise);
    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("pc-score").innerText = pcScore;
    document.getElementById("player-choice").innerText = playerChoise;
    document.getElementById("pc-choice").innerText = pcChoise;
  });
});
