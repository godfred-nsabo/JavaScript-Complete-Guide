const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = PAPER;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function() {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random(); // genetrate numebr btn o and 1
  if (randomValue < 0.5) {
    return ROCK;
  } else if (randomValue < 0.8) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

/*
const add = (a, b) => a + b;
//same as
const add2 = function(a, b){
  return a + b;
} 
*/

const detWinner = (comChoice, playChoice) =>  // Arrow functions
  comChoice === playChoice // Tenary Operator
    ? RESULT_DRAW
    : (comChoice === ROCK && playChoice === PAPER) ||
      (comChoice === PAPER && playChoice === SCISSORS) ||
      (comChoice === SCISSORS && playChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;
 /* if (comChoice === playChoice) {
    return RESULT_DRAW;
  } else if (
    comChoice === ROCK && playChoice === PAPER ||
    comChoice === PAPER && playChoice === SCISSORS ||
    comChoice === SCISSORS && playChoice === ROCK
  ) {
    return RESULT_PLAYER_WINS;
  }else {
    return RESULT_COMPUTER_WINS;
  }
};*/

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is about staring...");
  const playerSelection = getPlayerChoice();
  //console.log(playerSelection);
  const computerChoice = getComputerChoice();
  const winner = detWinner(computerChoice, playerSelection);
  console.log(winner);
});
