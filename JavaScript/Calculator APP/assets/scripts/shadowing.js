let userName = 'Max';
function greetUser(name) {
  let userName = name;
  alert(userName);
}
userName = 'Manu';
greetUser('Max');

/* This will actually show an alert that says 'Max' (NOT 'Manu').

You might've expected that an error gets thrown because we use and declare userName more than once - and as you learned, that is not allowed.

It indeed is not allowed on the same level/ in the same scope.

So this would fail:*/

let userName = 'Max';
let userName = 'Manu';
/*Why does it work in the first code snippet though?

Because we first create a global variable userName via */

let userName = 'Max';
/*But then we never re-declare that on the global level (that would not be allowed).
We only declare another variable inside of the function. But since variables in functions get 
their own scope, JavaScript does something which is called "shadowing".
It creates a new variable on a different scope - this variabl*/