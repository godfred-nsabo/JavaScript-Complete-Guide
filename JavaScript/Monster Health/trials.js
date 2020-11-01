const userInput = '';
//const isValidInput = userInput? true : false;
// OR 
const isValidInput = !!userInput
console.log(isValidInput);

//console.log(!!userInput);

//const userName = userInput || 'Goddey';

//console.log(userName);

const realUserInput = 'Manifest';
const realUserName = realUserInput || 'Goddey';

console.log(realUserName);

// Double AND Operator

let isLoggedIn = true;

const shoppingCart = isLoggedIn && ['BOOKS']
console.log(shoppingCart);

isLoggedIn = false;
console.log(isLoggedIn = false);

console.log(isLoggedIn && ['BOOKS']);

console.log(null && ['BOOKS']);

isLoggedIn = true;
console.log(isLoggedIn = true);

console.log(isLoggedIn && "");

//const enteredValue = "Max";
//const userName = enteredValue && "Anna";

const userName = "Max";
console.log(!!userName);

// WHILE LOOPS

let randomNumbers = [];
let finished = false;
while (!finished){
  const rndNumber = Math.random();
  randomNumbers.push(rndNumber);
  if (rndNumber > 0.5){
    finished = true;
    console.log(randomNumbers);
  }
}
// What does the following loop produce as output?

/*let sum = 0;
for (const i = 2; i <= 6; i++) {
    sum = sum + i;
}
console.log(sum); // ???*/

let sum = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 5; j > 2; j--) {
        sum = sum + j + i;
    }
}
console.log(sum); // ???

//let sum = 0;
for (let i = 0; i < 3; i++) {
    for (let j = 5; j > 2; j--) {
        sum = j + i;
    }
}
console.log(sum); // ???

const hobbies = ["Sports", "Cooking", "Coding"];
let favoriteHobby;
for (const hobby of hobbies) {
  favoriteHobby = hobby;
}
console.log(favoriteHobby);

// Uing Continue

for (let i = 0; i < 5; i++){
  if (i ===3){
    break;
  }
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}