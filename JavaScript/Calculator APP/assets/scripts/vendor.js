const usrInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const modulusBtn = document.getElementById('btn-modulus');
const indexBtn = document.getElementById('btn-index');
const exponentialBtn = document.getElementById('btn-exponential');
const openBracketBtn = document.getElementById('btn-openbracket');
const closeBracketBtn = document.getElementById('btn-closebracket');
const tangentBtn = document.getElementById('btn-tangent');
const atangentBtn = document.getElementById('btn-atan');
const atanhBtn = document.getElementById('btn-atanh');
const cosineBtn = document.getElementById('btn-cosine');
const acosineBtn = document.getElementById('btn-acos');
const acoshBtn = document.getElementById('btn-acosh');
const sineBtn = document.getElementById('btn-sine');
const asineBtn = document.getElementById('btn-asin');
const asinhBtn = document.getElementById('btn-asinh');
const greaterThanBtn = document.getElementById('btn-greaterthan');
const greaterorEqualToBtn = document.getElementById('btn-greaterorequalto');
const lessthanBtn = document.getElementById('btn-lessthan');
const lessorEqualtoBtn = document.getElementById('btn-lessorequalto');
const percentageBtn = document.getElementById('btn-percentage');
const logBtn = document.getElementById('btn-log');
const lnBtn = document.getElementById('btn-ln');
const baseLogBtn = document.getElementById('btn-baseLog');



const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
