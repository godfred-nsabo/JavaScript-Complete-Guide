const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// Write code that shows an alert (with any message) when that number is greater than 0.7.

if (randomNumber > 0.7) {
  alert("The random number is Greater than 0.7");
} else {
  alert("The random number is Less 0.7");
}

/*
Create an array of numbers (any numbers of your choice) and loop through
the array in two different ways - outputting the numbers inside of the
loop.
*/

const myArray = Array.from({ length: 15 }, (x, i) => i);
//const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// First method using For Loop

for (let eachArray = 0; eachArray < myArray.length; eachArray++) {
  console.log(myArray[eachArray]);
}

// Second Method Using For-of Loop and for-in Loop
let eachArray = 0;
for (const array of myArray) {
  console.log(`#${eachArray}`);
  for (const key in array) {
    console.log(`${key} => ${array[key]}`);
  }
}
eachArray++;

/*
Adjust one of the loops from the last task such that it actually starts
at the end (last element) of the array and loops to the first element.
*/

for (
  let eachArray = myArray.length - 1;
  eachArray >= 0;
  eachArray--
) {
  console.log(myArray[eachArray]);
}

/*
Create another random number (in a separate constant) and show an alert
in two different scenarios: Both are greater 0.7 OR at least one of the two is
NOT greater than 0.2.
*/

const newRandomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (
  (newRandomNumber > 0.7 && randomNumber > 0.7) ||
  newRandomNumber <= 0.2 ||
  randomNumber <= 0.2
) {
  alert('The Random Number is Greater than 0.7 or Less than 0.2');
}
console.log(randomNumber);
console.log(newRandomNumber);