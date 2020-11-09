// Assignment - More on Functions

function sayHello(name) {
  console.log('Hi ' + name);
}

sayHello();

// Re-write the function you find above as an arrow function

const sayHelloo = (name) => {
  console.log('Hi ' + name);
}
sayHelloo('iamGoddey');

/* Adjust the arrow function you created as part of task 1 to use three
different syntaxes: With two arguments (incl. a phrase that replaces "Hi"),
with no arguments (hard-coded values in function body) and with one returned value 
(instead of outputting text inside of the function directly)*/

const sayHello1 = (name, inputPhrase) => {
  console.log(name + '' + inputPhrase);
}
sayHello1('How do you do? ', ' iamGoddey');
//const add = (a, b) => a + b;

const sayHello2 = () => 
console.log('Hi am new to coding');
sayHello2();

const sayHello3 = name => 'Hello ' + name;
console.log(sayHello3('iamGoddey'));

// Add a default argument to the function you created: A fallback value for 
// the phrase if no value is provided.

const sayCheese = (name, inputPhrase = 'Say Cheese take a picture ') =>
console.log(inputPhrase + '' + name);

sayCheese('with Goddey');
sayCheese('with Goddey', 'How art thou ');

/*
Add a new function: "checkInput" which takes an unlimited amount of
arguments (unlimited amount of strings) and executes a callback function
if NO argument/ string is an empty string. */

const checkInput = (resultHandler, ...inputStrings) => {
  const boolean = false;
   let text = boolean;
  //var text = false;
  //for (const eachText of arguments){}
  for (const eachText of inputStrings){
    const notText = !eachText;
    if (notText){
      text = true;
      break;
    }
  }
  if (!text){
    resultHandler();
  }
};

// printing

checkInput(() => {
  console.log('Text not empty');
},
'Hello Goddey', 'saleforce 123', 'bunch of strings'
); 
 

