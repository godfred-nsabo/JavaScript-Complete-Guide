const startGameBtn = document.getElementById('start-game-btn');

const start =  function startGame() { // using functions as expression
  console.log('Game is about staring...');
}
/*function startGame() {
  // using functions as declaration
  console.log("Game is about staring...");
}
const start = function() {
  // Anonymous function
  console.log("Game is about staring...");
}*/
//startGame();
/*const person = {
  greet: function greet(){
    console.log('Hello World') // A function in an object is called METHOD - A function attached to an object
  }
};
person.greet();*/

console.log(typeof start);
console.log(typeof start()); // gives Undefined
console.dir(start);

startGameBtn.addEventListener('click', start); // AddeventListner is method on the object StartGameBtn 