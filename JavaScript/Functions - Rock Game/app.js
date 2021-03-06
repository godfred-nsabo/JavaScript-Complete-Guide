const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return; // User chose nothing
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

const detWinner = (
  comChoice,
  playChoice = DEFAULT_USER_CHOICE // Arrow functions
) =>
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
  const playerSelection = getPlayerChoice(); // return Undefined
  //console.log(playerSelection);
  const computerChoice = getComputerChoice();
  let winner;
  if (playerSelection) {
    const winner = detWinner(computerChoice, playerSelection);
  } else {
    winner = detWinner(computerChoice, playerSelection);
  }
  //console.log(winner);
  let imessages = `You picked ${
    playerSelection ? playerSelection : DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    imessages = imessages + `had a ${RESULT_DRAW}`;
  } else if (winner === RESULT_PLAYER_WINS) {
    imessages = imessages + "WON!!!";
  } else {
    imessages = imessages + "LOST";
  }
  alert(imessages);
  gameIsRunning = false;
});

// not related to game

const combineOperation = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

/*const subractup = function(resultHandler, ...numbers){ //(...numbers){
  let sub = 0;
  for (const num of numbers) { // don't use that
    sub -= num;
  }
  return sub;
}*/

const showResult = (messageText, result) => {
  alert(messageText + " " + result);
};

// Another Approach
function showResult2(result) {
  alert(`The result after operation is : ${result}`);
}

combineOperation(
  showResult.bind(this, " The result after adding all numbers is "),
  "ADD",
  1,
  5,
  'string',
  -3,
  10,
  6,
  10
); // .bind() will create a function as referecne
combineOperation(
  showResult.bind(this, " The result after adding all numbers is "),
  "ADD",
  1,
  5,
  10,
  -3,
  6,
  10,
  25,
  88
);
combineOperation(
  showResult.bind(this, " The result after subtracting all numbers is "),
  1,
  "SUBTRACT",
  5,
  10,
  -3,
  6,
  10,
  25
);
