let playerScore = 0;
let compScore = 0;

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
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "Tie, You both pick rock";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "Tie, You both pick scissors";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "Tie, You both pick paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore++;
    return "You lose, rock beats scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compScore++;
    return "You lose, scissors cuts paper";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compScore++;
    return "You lose, paper wraps rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win, rock breaks scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win, paper wraps rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win, scissors cuts paper";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const input = prompt("Choose rock, paper, scissors").toLowerCase();
    if (input === "rock" || input === "paper" || input === "scissors") {
      const playerSelection = input;
      console.log("Player chose " + playerSelection);
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
      console.log("  ");
    } else {
      alert("START AGAIN, you must input rock, paper or scissors");
      return game();
    }
  }

  if (playerScore > compScore) {
    console.log("your score is: " + playerScore);
    console.log("comp score is: " + compScore);

    return "You WON!!!!!!!!!!!!!";
  } else if (playerScore < compScore) {
    console.log("your score is: " + playerScore);
    console.log("comp score is: " + compScore);

    return "You LOSE!!!!!!!!!!!!!  try again";
  } else {
    console.log("your score is: " + playerScore);
    console.log("comp score is: " + compScore);

    return "You TIE!!!, Practice your Throw";
  }
  console.log("  ");
}

console.log(game());
