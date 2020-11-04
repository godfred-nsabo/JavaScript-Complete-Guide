const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
  console.log('Game is about staring...');
}

//startGame();
/*const person = {
  greet: function greet(){
    console.log('Hello World') // A function in an object is called METHOD - A function attached to an object
  }
};
person.greet();*/


startGameBtn.addEventListener('click', startGame); // AddeventListner is method on the object StartGameBtn 