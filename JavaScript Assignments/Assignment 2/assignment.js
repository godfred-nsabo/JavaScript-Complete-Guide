// =========================Assignment - Functions==================================

const task3Element = document.getElementById('task-3');

/*
    Create two new functions: One that takes no parameters and simply shows
    an <code>alert()</code> with some text of your choice and one that
    receives a name as a parameter and then uses <code>alert()</code> to
    output that name.
*/

function jScript(){
  alert('This is my first function in JavaScript - Iamgoddey');
} 

function myJScript(myscript) { 
  alert('This is my first ' + myscript);
 }


// Code arrangement - We create the third function here

/* Add a brand-new function that takes three parameters (three strings,
   give them any names you want) that returns one combined string (where the
    three strings are concatenated).
*/

function myScriptString(xString, yString, zString){
  let concatString = `${xString} ${yString} ${zString}`;
  return concatString;
}

// Call both functions directly from your code.
jScript();
myJScript('jscript - by iamgoddey');

/*
    Add an event listener to <code>task3Element</code> and attach it to the
    first function (the one without arguments). Click this task thereafter
    to verify whether it works.
*/
task3Element.addEventListener('click', jScript);
// The addEventListener respond after execution upon clicking the third task. 

/*
  Call that new function directly from your code and
  <code>alert()</code> the result of that function.
*/
let resultString = myScriptString('Hello World', 'this is', '@iamgoddey!!!');
alert(resultString);
