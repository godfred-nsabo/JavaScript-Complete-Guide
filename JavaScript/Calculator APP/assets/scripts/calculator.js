alert("This is a working calculator - BY @IAMGODDEY!");

/*Use camelCase because its the best practice and its allowed
1. use only letters and digits eg. let ageGroup5; there won't be any white space
2. using eg user_name is not allowed or recommended
*/
/*const defaultResult = 0
let currentResult = defaultResult;
//let res;

function sum(xval, yval, zval){
  const res = (xval + yval) - zval;
  //alert('The result is ' + res);
  return res;
  //alert('Contact user or admin!')
}

//sum(2**4,3**2,20);
//sum(3, 4, 2%10);
//additionalResult = res;
additionalResult = sum(2**4,3**2,20);


//const defaultResult = num_1
//let currentResult = defaultResult;

//defaultResult = (currentResult + 10) * 3 / 2 - 1;
/* Operators are syntax feaures that allow to manipulate values. we have +,-,*,/,%,** (2**3=8) and 
= (Assign operator)*/

//currentResult = (currentResult + 10) * 3 / 2 - 1;
/*additionalResult = (additionalResult + 10) * 3 / 2 - 1;


//let calDescription = 'Result of (0 + 10) * 3 / 2 - 1 is';
//concatinating string
//let calDescription = `Result of ( defaultResult  + 10 ) * 3 / 2 - 1`;
let calDescription = `( ${defaultResult}  + ${additionalResult} ) * 3 / 2 - 1`;
//let errorMessage = 'An error \n' + 
//                  'occurred!';
//let errorMessage = 'An error \'' + 
                  'occurred!';

//outputResult(currentResult, errorMessage);
outputResult(additionalResult, calDescription);

console.log(additionalResult);*/

const defaultResult = 0;
let currentResult = defaultResult;
// global variable for storing data
let logEntries = [];

// get input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

//generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCal, calNumber) {
  const calDescription = `${resultBeforeCal} ${operator} ${calNumber}`;
  outputResult(currentResult, calDescription); // from vendor file
}

function writeLog(operationIdentifier, prevResult, operationNumber, newResult) {
  const logEntry = {
    // creating of object adding an identifier
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry); // properties using the dot notation
}/*
// Using if statements
function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE" &&
      calculationType !== "MODULUS" &&
      calculationType !== "POWER" &&
      calculationType !== "EXPONENT" &&
      calculationType !== "TANGENT" &&
      calculationType !== "ARCTAN" &&
      calculationType !== "ARCTANH" &&
      calculationType !== "SINE" &&
      calculationType !== "ARCSINE" &&
      calculationType !== "ARCSINH" &&
      calculationType !== "COSINE" &&
      calculationType !== "ARCCOS" &&
      calculationType !== "ARCCOSH" &&
      calculationType !== "LOGARITHM" &&
      calculationType !== "NATURAL LOG" &&
      calculationType !== "PERCENT") ||
    !enteredNumber
  ) {
    return;
  }
  //const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "MODULUS") {
    currentResult %= enteredNumber;
    mathOperator = "%";
  } else if (calculationType === "POWER") {
    currentResult = currentResult ** enteredNumber;
    mathOperator = "**";
  } else if (calculationType === "EXPONENT") {
    currentResult = Math.exp(enteredNumber);
    mathOperator = "Math.exp()";
  } else if (calculationType === "TANGENT") {
    currentResult = Math.tan(enteredNumber * (Math.PI / 180));
    mathOperator = "Math.tan()";
  } else if (calculationType === "ARCTAN") {
    currentResult = Math.atan(enteredNumber);
    mathOperator = "Math.atan()";
  } else if (calculationType === "ARCTANH") {
    currentResult = Math.atanh(enteredNumber * (Math.PI / 180));
    mathOperator = "Math.atanh()*";
  } else if (calculationType === "SINE") {
    currentResult = Math.sin(enteredNumber);
    mathOperator = "Math.sin()";
  } else if (calculationType === "ARCSINE") {
    currentResult = Math.asin(enteredNumber);
    mathOperator = "Math.asin()";
  } else if (calculationType === "ARCSINH") {
    currentResult = Math.asinh(enteredNumber);
    mathOperator = "Math.asinh()";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  } else if (calculationType === "COSINE") {
    currentResult = Math.cos(enteredNumber);
    mathOperator = "Math.cos()";
  } else if (calculationType === "ARCCOS") {
    currentResult = Math.acos(enteredNumber);
    mathOperator = "Math.acos()";
  } else if (calculationType === "ARCCOSH") {
    currentResult = Math.acosh(enteredNumber);
    mathOperator = "Math.acosh()";
  } else if (calculationType === "LOGARITHM") {
    currentResult = Math.log(enteredNumber);
    mathOperator = "Math.log()";
  } else if (calculationType === "NATURAL LOG") {
    currentResult = Math.log(enteredNumber);
    mathOperator = "Math.log()";
  } else if (calculationType === "PERCENT") {
    currentResult += enteredNumber / 100;
    mathOperator = "/100";
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeLog(calculationType, initialResult, enteredNumber, currentResult);
  /*if (
    calculationType === "ADD" ||
    calculationType === "SUBTRACT" ||
    calculationType === "MULTIPLY" ||
    calculationType === "DIVIDE" ||
    calculationType === "MODULUS" ||
    calculationType === "POWER" ||
    calculationType === "EXPONENT" ||
    calculationType === "TANGENT" ||
    calculationType === "ARCTAN" ||
    calculationType === "ARCTANH" ||
    calculationType === "SINE" ||
    calculationType === "ARCSINE" ||
    calculationType === "ARCSINH" ||
    calculationType === "COSINE" ||
    calculationType === "ARCCOS" ||
    calculationType === "ARCCOSH" ||
    calculationType === "LOGARITHM" ||
    calculationType === "NATURAL LOG" ||
    calculationType === "PERCENT"
  ) {}*/
/*}

function add() {
  calculateResult("ADD");
  // for automatically changing without affecting the entire documents
  /*const enteredNumber = getUserNumberInput();
  //const calDescription = `${currentResult} + ${enteredNumber}`;
  const initialResult = currentResult;
  //const result = currentResult + userInput.value;
  //return result;
  currentResult += enteredNumber;
  //currentResult = currentResult.toString() + parseInt(userInput.value);
 //currentResult = currentResult + +userInput.value;
  //outputResult(currentResult, calDescription);
  createAndWriteOutput('+', initialResult, enteredNumber);
  //logEntries = [enteredNumber];
  /*const logEntry = { // creating of object adding an identifier
      operation: 'ADD',
      prevResult: initialResult,
      number: enteredNumber,
      result: currentResult
  }; 
  logEntries.push(logEntry);
  console.log(logEntry.operation); // properties using the dot notation
  console.log(logEntries);
  //console.log(logEntries[0]); 
  writeLog('ADD', initialResult, enteredNumber, currentResult);*/
/*}

function subtract() {
  calculateResult("SUBTRACT");
  /*const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber);
  /*const logEntry = { // creating of object adding an identifier
      operation: 'SUBRACT',
      prevResult: initialResult,
      number: enteredNumber,
      result: currentResult
  }; 
  logEntries.push(logEntry);
  console.log(logEntry.operation); // properties using the dot notation
  console.log(logEntries);
  writeLog('SUBTRACT', initialResult, enteredNumber, currentResult);*/
/*}

function multiply() {
  calculateResult("MULTIPLY");
  /*const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber);  
  const logEntry = { // creating of object adding an identifier
      operation: 'MULTIPLY',
      prevResult: initialResult,
      number: enteredNumber,
      result: currentResult
  }; 
  logEntries.push(logEntry);
  console.log(logEntry.operation); // properties using the dot notation
  console.log(logEntries);
  writeLog('MULTIPLY', initialResult, enteredNumber, currentResult);*/
/*}

function divide() {
  calculateResult("DIVIDE");
  /*const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  /*createAndWriteOutput('/', initialResult, enteredNumber);
  const logEntry = { // creating of object adding an identifier
      operation: 'DIVIDE',
      prevResult: initialResult,
      number: enteredNumber,
      result: currentResult
  }; 
  logEntries.push(logEntry);
  console.log(logEntry.operation); // properties using the dot notation
  console.log(logEntries);
  writeLog('DIVIDE', initialResult, enteredNumber, currentResult);}*/

function modulus() {
  calculateResult("MODULUS");
  /*const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult %= enteredNumber;
  createAndWriteOutput('%', initialResult, enteredNumber);
  /*const logEntry = { // creating of object adding an identifier
      operation: 'MODULUS',
      prevResult: initialResult,
      number: enteredNumber,
      result: currentResult
  }; 
  logEntries.push(logEntry);
  console.log(logEntry.operation); // properties using the dot notation
  console.log(logEntries);*
  writeLog('MODULUS', initialResult, enteredNumber, currentResult);*/
}

function index() {
  calculateResult("POWER");
  /*const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult ** enteredNumber;
  createAndWriteOutput('**', initialResult, enteredNumber);
  writeLog('POWER', initialResult, enteredNumber, currentResult);*/
}

function exponential() {
  calculateResult("EXPONENT");
  /* const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = Math.exp(enteredNumber);
  createAndWriteOutput(`Math.exp(${enteredNumber})`, initialResult, enteredNumber);
  writeLog('EXPONENT', initialResult, enteredNumber, currentResult);*/
}

//This will return the tangent of user input.
function tan() {
  calculateResult("TANGENT");
  /*const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = Math.tan(enteredNumber* (Math.PI/180));
  createAndWriteOutput(`Math.tan(${enteredNumber* (Math.PI/180)})`, initialResult, enteredNumber);
  writeLog('TANGENT', initialResult, enteredNumber, currentResult);*/
}

function atan() {
  calculateResult("ARCTAN");
  /*const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = Math.atan(enteredNumber);
  createAndWriteOutput(`Math.atan(${enteredNumber})`, initialResult, enteredNumber);
  writeLog('ARCTAN', initialResult, enteredNumber, currentResult);*/
}

function atanh() {
  calculateResult("ARCTANH");
  /*const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = Math.atanh(enteredNumber);
  createAndWriteOutput(`Math.atanh(${enteredNumber})`, initialResult, enteredNumber);*/
}

//This will return the sine of user input, a value between -1 and 1.
function sine() {
  calculateResult("SINE");
  /*const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = Math.sin(enteredNumber* (Math.PI/180));
  createAndWriteOutput(`Math.sin(${enteredNumber* (Math.PI/180)})`, initialResult, enteredNumber);
  writeLog('SINE', initialResult, enteredNumber, currentResult);*/
}
function asine() {
  calculateResult("ARCSINE");
  /*const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = Math.asin(enteredNumber);
  createAndWriteOutput(`Math.asin(${enteredNumber})`, initialResult, enteredNumber);
  writeLog('ARCSINE', initialResult, enteredNumber, currentResult);*/
}

function asinh() {
  calculateResult("ARCSINH");
  /*const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = Math.asinh(enteredNumber);
  createAndWriteOutput(`Math.asinh(${enteredNumber})`, initialResult, enteredNumber);
  writeLog('ARCSINH', initialResult, enteredNumber, currentResult);*/
}

//This will return the cosine of input, a value between -1 and 1
function cosine() {
  calculateResult("COSINE");
  /*const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = Math.cos(enteredNumber*(Math.PI/180));
  createAndWriteOutput(`Math.cos(${enteredNumber * (Math.PI/180)})`, initialResult, enteredNumber);
  writeLog('COSINE', initialResult, enteredNumber, currentResult);*/
}

function acos() {
  calculateResult("ARCOS");
  /*const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = Math.acos(enteredNumber);
  createAndWriteOutput(`Math.acos(${enteredNumber})`, initialResult, enteredNumber);
  writeLog('ARCCOS', initialResult, enteredNumber, currentResult);*/
}

function acosh() {
  calculateResult("ARCCOSH");
  /*const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = Math.acosh(enteredNumber);
  createAndWriteOutput(`Math.acosh(${enteredNumber})`, initialResult, enteredNumber);
  writeLog('ARCCOSH', initialResult, enteredNumber, currentResult);*/
}

//function returns the natural logarithm (base e) of a number, that is ∀ x>0,
//Math.log(x)= ln(x)= the unique y such that e^(y) = x
function log() {
  calculateResult("LOGARITHM");
  /*const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = Math.log(enteredNumber);
  createAndWriteOutput(`Math.log(${enteredNumber})`,initialResult, enteredNumber);
  writeLog('LOGARITHM', initialResult, enteredNumber, currentResult);*/
}
function ln() {
  calculateResult("NATURAL LOG");
  /*const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = Math.log(enteredNumber);
  createAndWriteOutput(`Math.log(${enteredNumber})`,initialResult, enteredNumber);
  writeLog('NATURAL LOG', initialResult, enteredNumber, currentResult);*/
}

function percentage() {
  calculateResult("PERCENT");
  /*const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber / 100;
  createAndWriteOutput('/100', initialResult, enteredNumber);
  writeLog('PERCENT', initialResult, enteredNumber, currentResult);*/
}

function calculate(operation){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator;
  if (operationt === 'ADD'){
    currentResult += enteredNumber;
    operator = '+'
  } else if (operation === 'SUBTRACT'){
    currentResult -= enteredNumber;
    operator = '-'
  } else if (operation === 'MULTIPLY'){
      currentResult *= enteredNumber;
      operator = '*' 
  } else {
      currentResult *= enteredNumber;
      operator = '/'
  }
  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeLog(operation, initialResult, enteredNumber, currentResult);
}

// Adding document from vendor file
addBtn.addEventListener("click", calculate.bind(this, 'ADD'));
subtractBtn.addEventListener("click", calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener("click", calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener("click", calculate.bind(this, 'DIVIDE'));
modulusBtn.addEventListener("click", modulus);
indexBtn.addEventListener("click", index);
exponentialBtn.addEventListener("click", exponential);
tangentBtn.addEventListener("click", tan);
sineBtn.addEventListener("click", sine);
cosineBtn.addEventListener("click", cosine);
percentageBtn.addEventListener("click", percentage);
logBtn.addEventListener("click", log);
lnBtn.addEventListener("click", ln);
acoshBtn.addEventListener("click", acosh);
asineBtn.addEventListener("click", asine);
atangentBtn.addEventListener("click", atan);
acosineBtn.addEventListener("click", acos);
asinhBtn.addEventListener("click", asinh);
atanhBtn.addEventListener("click", atanh);
