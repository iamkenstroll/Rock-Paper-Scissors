let playerScore = 0;
let compScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeDiv = document.querySelector(".outcome");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector("computer-score");

function getComputerChoice() {
  const arrOfChoices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * arrOfChoices.length);
  const compChoice = arrOfChoices[randomNum];
  console.log("Computer picks " + compChoice);
  return compChoice;

  // OR ALTERNATIVELY

  // const arrOfChoices = ["rock", "paper", "scissors"];
  // const randomNum = Math.floor(Math.random() * arrOfChoices.length);
  // console.log("Computer picks " + arrOfChoices[randomNum]);
  // return arrOfChoices[randomNum];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    const p = document.createElement("p");
    p.innerText = `Tie, You both picked ${playerSelection}`;
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore++;
    const p = document.createElement("p");
    p.innerText = `You lose, rock beats scissors`;
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compScore++;
    const p = document.createElement("p");
    p.innerText = `You lose, scissors cuts paper`;
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compScore++;
    const p = document.createElement("p");
    p.innerText = `You lose, paper wraps rock`;
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = `You win, rock breaks scissors`;
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = `You win, paper wraps rock`;
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = `You win, scissors cuts paper`;
    outcomeDiv.appendChild(p);
  }
}

const checkForWinner = (playerScore, compScore) => {
  if (playerScore === 5) {
    const h2 = document.createElement("h2");
    h2.classList.add("player-won");
    h2.innerText = `You won ${playerScore} to ${compScore} great job beating the computer!`;
    outcomeDiv.append(h2);
    return alert("You Won");
  } else if (compScore === 5) {
    const h2 = document.createElement("h2");
    h2.classList.add("computer-won");
    h2.innerText = `You lost ${compScore} to ${playerScore} try beating computer!`;
    outcomeDiv.append(h2);
    return alert("Computer Won");
  }
};

rockButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  checkForWinner(playerScore, compScore);
  let text = `playerScore is ${playerScore} and compScore is ${compScore}`;
  outcomeDiv.append(text);
});

paperButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  checkForWinner(playerScore, compScore);
  let text = `playerScore is ${playerScore} and compScore is ${compScore}`;
  outcomeDiv.append(text);
});

scissorsButton.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
  checkForWinner(playerScore, compScore);
  let text = `playerScore is ${playerScore} and compScore is ${compScore}`;
  outcomeDiv.append(text);
});
