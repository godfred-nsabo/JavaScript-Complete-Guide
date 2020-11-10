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

