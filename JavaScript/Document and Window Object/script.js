/*
console.dir(document.getElementById('main-title'));
console.dir(document.getElementsByClassName('.list-item'));

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(h1.textContent);
console.dir(h1.textContent = 'Dive into DOM');
console.dir(h1.className = 'title');
console.dir(h1.classList);
console.dir(h1.style.color = 'white');
console.dir(h1.style.backgroundColor = 'red');

const input = document.querySelector('input');
console.dir(input);

const input2 = document.querySelector('input');
console.dir(input2);

console.dir(input2.value = 'Some new inputs from User');

console.dir(input.setAttribute('value', 'some other default'));
console.dir(input.value = input.getAttribute('value'));


const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ` (Changed!)`;

const body = document.body;
const head = document.head;



//const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');

for (const list in listItemElements){
  console.dir(list);
}
/*
const docuBody = document.body;
const docuTitle2 = document.body.querySelector('h1');
docuTitle2.textContent = "Assignment - Solved!";*/

/*const ul = document.querySelector('ul');
console.dir(ul.children);
console.dir(ul.children[1]); // selects only select children elements nodes

console.dir(ul.childNodes); // selects all child nodes and includes text nodes

// use .firstChild or .firstElementChild and same as .lastChild or .lastElementChild

console.dir(ul.firstChild);
console.dir(ul.firstElementChild);

const liFirst = document.querySelector(('l'));
console.dir(liFirst.parentNode); // To the nearest parent Node
console.dir(liFirst.parentElement); // To the nearest parent Element node

document.documentElement.parentElement;

document.documentElement.parentNode;

// Ancestors

liFirst.closest('body'); // nice method for selecting any ancestor element

liFirst.closest('header'); // header not an ancestor


const ul = li.parentElement;
console.dir(ul);
console.dir(ul.previousSibling);
console.dir(ul.nextSibling);
console.dir(ul.nextElementSibling);

*/


const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);

const section = document.querySelector('section');
const button = document.querySelector('button');

console.dir(section);

//section.style.backgroundColor = 'magenta';
section.className = 'red-bg';

button.addEventListener('click', () => {
    /*if (section.className === 'red-bg visible'){
        section.className = 'red-bg invisible';
    } else {
        section.className = 'red-bg visible';
    }*/
    //section.classList.toggle('visible');
    section.classList.toggle('invisible');
});

//section.textContent = 'New Content';
console.dir(section);
//section.innerHTML = '<h2> A new Heading - Woow!</h2>';

const list = document.querySelector('ul');
list.innerHTML = list.innerHTML + '<li>Item 4</li>';
list.innerHTML = list.innerHTML + '<li>Item 5</li>';

const div = document.querySelector('div');

div.innerHTML = div.innerHTML + '<p>incorrect! Check details</p>';

div.insertAdjacentHTML('beforeend', '<p>incorrect! Check details</p>');