alert('Welcome!! my MONSTER HEALTH WEB_APP')
const ATTACK_VALUE = 10; // a global value
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = "ATTACK"; // MODE_ATTACK = 0
const MODE_STRONG_ATTACK = "STRONG_ATTACK";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVEN_GAME_OVER = "GAME_OVER";

let battleLog = [];
let lastLoggedEntry;

function getMaxLifeValues() {
  const enteredValue = prompt("Maximum life for you and the monster.", "100");

  const parsedValue = parseInt(enteredValue);
if (isNaN(parsedValue) || parsedValue <= 0) {
  throw {message: 'Invalid User input!, not a number'};
}
  return parsedValue;
}
let chosenMaxLife;
try{
 chosenMaxLife = getMaxLifeValues();
}catch (error){
  console.log(error);
  chosenMaxLife = 100;
  alert("You've entered wrong Number, default value is 100");
} //finally { // for clean up work}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);



function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };
  switch (ev) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry.target = "PLAYER";
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry.target = "PLAYER";
      break;
    case LOG_EVEN_GAME_OVER:
      logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    default:
      logEntry = {};
  }
  /*if (ev === LOG_EVENT_PLAYER_ATTACK) {
    logEntry.target = "MONSTER";
  } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logEntry.target = "MONSTER";
  } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
    logEntry.target = "PLAYER";
  } else if (ev === LOG_EVENT_PLAYER_HEAL) {
    logEntry.target = "PLAYER";
  } else if (ev === LOG_EVEN_GAME_OVER) {
    logEntry = {
      event: ev,
      value: val,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth,
    };
  }*/
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();

    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("The BONUS LIFE !! saved you from death");
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("Congratulations!!! \n You've Won");
    writeToLog(
      LOG_EVEN_GAME_OVER,
      "PLAYER WON!!",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("Sorry!!! \n You've Lost");
    writeToLog(
      LOG_EVEN_GAME_OVER,
      "MONSTER WON!!",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert("Fortunately You have a draw!!!");
    writeToLog(
      LOG_EVEN_GAME_OVER,
      "A DRAW!!",
      currentMonsterHealth,
      currentPlayerHealth
    );
  }
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  const logEvent =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;
  /*if (param === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
    logEvent = LOG_EVENT_PLAYER_ATTACK;
  } else if (param === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
    logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;}*/

  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
  /*const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0){
    alert("Congratulations!!! \n You've Won");
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0){
    alert("Sorry!!! \n You've Lost");
  }else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
    alert("Unfortunately!!! \n You have a draw!!!")
  }*/
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert(" You can't heal to more than your max initial health.");
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

function printLogHandler() {
  for (let eachLog = 0; eachLog < battleLog.length; eachLog++) {
    console.log("--------");
  }
  let j = 0;
  outerWhile: do{
    console.log('outerLoop', j);
    innerFor: for (let k = 0; k < 5; k++){
      if (k === 3){
        break outerWhile;
        //continue innerFor;
      }
      console.log('innerLoop', k);
    }
    j++;
  }
  while (j < battleLog.length);
  /*for (let eachLog = 10; eachLog > battleLog.length;){
    eachLog--;
    console.log(eachLog);
  }
  for (let eachLog = 0; eachLog < battleLog.length; eachLog++){
    console.log(battleLog[eachLog]);
  }
  let eachLog = 0;
  for (const logEntry of battleLog){
    console.log(logEntry); // Access to element not index
    console.log(eachLog);
    eachLog++;
  }*/
  let eachLog = 0;
  for (const logEntry of battleLog) {
    if (!lastLoggedEntry && lastLoggedEntry !== 0 || lastLoggedEntry < eachLog){
      console.log(`#${eachLog}`); // Access to element not index
      for (const key in logEntry) {
        console.log(`${key} => ${logEntry[key]}`);
        //console.log(key);
        //console.log(logEntry[key]);
      }
      lastLoggedEntry = eachLog;
      break; // break out the function or loop execution earlier
    }
    eachLog++;
  }
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);
