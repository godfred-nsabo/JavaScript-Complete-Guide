//const addMovieModal =  document.getElementById('add-modal');
//console.log(addMovieModal);

// Other methods of selection

//const addMovieModal2 =  document.body.children[1];
//console.log(addMovieModal2);

const addMovieModal1 = document.querySelector('#add-modal');
console.log(addMovieModal1);

const startMovieButton = document.querySelector('header button');
console.log(startMovieButton);

const addBackdrop = document.getElementById('backdrop');
// const addBackDrop = document.body.firstElementChild;
const removeMovie = addMovieModal1.querySelector('.btn--passive');
const addMovie = addMovieModal1.querySelector('.btn--success');
const addMovie = removeMovie.nextElementSibling;
// other methods of selection;
//const startMovieButton = document.querySelector('header').lastElementChild;
//console.log(startMovieButton);

function toggleMovieModel () {
    addMovieModal1.classList.toggle('visible');
    togglebacdrop();
};

function togglebacdrop () {
    addBackdrop.classList.toggle('visible')
};

function removeMovieButton () {
    toggleMovieModel();
};

function addMovieButton() {
    toggleMovieModel();
};

function backdropClickHandler () {
    toggleMovieModel();
};

//EventListeners
startMovieButton.addEventListener('click', toggleMovieModel);
addBackdrop.addEventListener('click', toggleMovieModel);
removeMovie.addEventListener('click', removeMovieButton);
addMovie.addEventListener('click', addMovieButton);

