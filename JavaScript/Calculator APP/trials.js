// ===================== Comaparing Objects and Arrays =======================
// For Objects
const person1 = {name: 'IAMGODDEY'};
console.log(person1);

const person2 = {name: 'IAMGODDEY'};
console.log(person2);

console.log(person1 == person2)
console.log(person1 === person2)
const person3 = person1

console.log(person3 === person1)
// For ARRAYS

const hobbies = ['Sports', 'Cooking']
console.log(hobbies);

const moreHobbies = ['Sports', 'Cooking'];
console.log(hobbies === moreHobbies);

console.log(person1.name === person2.name);


// UNDERSTANING OPERATOR PRECEDENCE
/* Logical AND has higher Precedence than Logical OR */
console.log(5 == 5 && 3 < 6 || 10 > 5);
console.log( 3 + 2 < 9 -2);
console.log(5 != 5 && 3 < 6 || 10 > 5);

// Questions
//Which part will be executed first? A or B
const val1 = 10;
const val2 = 5;

if (val1 + val2 > 16) {
  // A
} else {
  // B
}

// Which part of the if statement will be executed in the below example?

if (val1 + val2 === "15") {
  // A
} else if (val1 + val2 == 15) {
  // B
} else if (val2 > 4) {
  // C
} else {
  // D
}

//Which part of the if statement will be executed in the below example?
if (val1 + val2 < 15) {
    // A
} else if (val1 === '10') {
    // B
} else if (val2 > 4) {
    // C
} else {
    // D
}

// What does this expression yield?
console.log(5 + 2 === 7 && 4 > 5 || 'Hi' === 'Hi')

// What's evaluated first in the below expression?
console.log(5 + 5 === 10 && 3 < 5 && 10 > 9 || 'Hi' === 'Hi')