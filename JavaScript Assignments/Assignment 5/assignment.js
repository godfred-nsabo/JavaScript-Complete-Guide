 // Assignment - DOM Querying & Manipulation

 /*
Select this task (in two different ways at least!) and change the
background-color to black, text-color to white.
 */

 //Method 1
 const task1 = document.getElementById('task-1');
 //Method 2
 const task2 = document.querySelector('li');

// Change colors
 
task1.style.color = 'white';
task2.style.backgroundColor = 'black';

/*
Change the document title (in <code>&lt;head&gt;&lt;/head&gt;</code>) to
"Assignment - Solved!". Use two different ways for getting access to the
<code>&lt;title&gt;</code> element: Via <code>querySelector</code> on
document and via <code>querySelector</code> on the certain property you
find in <code>document</code>
*/
// Method 1
const docuTitle = document.querySelector('title');
docuTitle.textContent = 'Assignment - Solved';

//Method 2
const docuBody = document.body;
const docuTitle2 = document.body.querySelector('h1');
docuTitle2.textContent = 'Assignment - Solved!';


/*
Select the <code>&lt;h1&gt;</code> element on this page and change 
its text to "Assignment - Solved!".
*/

const h1 = document.querySelector("h1");
h1.textContent = "Assignment - Solved!";


const hh1 = document.getElementsByTagName('hi');
hh1.textContent = "Assignment - Solved!";