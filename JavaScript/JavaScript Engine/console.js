let name = "String";
console.log(name);
let anothorUser = name;
name = 'Object';
console.log(anothorUser);

console.log(name.length);

let hobbies = ['sports', 'cooking', 'crying'];

let newHobbies = hobbies;
console.log(hobbies);
console.log(newHobbies);

hobbies.push('Fishing');

console.log(hobbies);
console.log(newHobbies);

// Example;

let person = {age: 20};

let anotherPerson = person;

console.log(anotherPerson.age = 32);

console.log(person);

let yetAnotherPerson = { ...person};
console.log(yetAnotherPerson);
console.log(person);

// more examples

let hobies = ['Sports']

let moreHobies = [...hobies];

console.log(hobies.push('Cooking'));
console.log(moreHobies);

// 

const person1 = {age: 40};
const person2 = {age: 40};

console.log(person1 === person2);

const hobys = ['Sports'];
console.log(hobys.push('Cooking'));
console.log(hobys);