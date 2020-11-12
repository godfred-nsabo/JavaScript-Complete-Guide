//const addMovieModal =  document.getElementById('add-modal');
//console.log(addMovieModal);

// Other methods of selection

//const addMovieModal2 =  document.body.children[1];
//console.log(addMovieModal2);

const addMovieModal1 = document.querySelector("#add-modal");
console.log(addMovieModal1);

const startMovieButton = document.querySelector("header button");
console.log(startMovieButton);

const addBackdrop = document.getElementById("backdrop");
// const addBackDrop = document.body.firstElementChild;
const removeMovie = addMovieModal1.querySelector(".btn--passive");
const addMovie = addMovieModal1.querySelector(".btn--success");
//const addMovie = removeMovie.nextElementSibling; //alternative approach

// other methods of selection;
//const startMovieButton = document.querySelector('header').lastElementChild;
//console.log(startMovieButton);
const userInputs = addMovieModal1.querySelectorAll("input");
//const userInputs = addMovieModal1.getElementsByTagName('input');

const movies = [];


//Functions


function updateUI () {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
}

function addNewMovies (title, imageUrl, rating) {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt = "${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `;
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);
};

function toggleMovieModel() {
  addMovieModal1.classList.toggle("visible");
  togglebackdropHandler();
}

function togglebackdropHandler() {
  addBackdrop.classList.toggle("visible");
}

function clearUserInputs () {
    for (const usrIput of userInputs) {
      usrIput.value = '';  
    }
}

function removeMovieButtonHandler() {
  toggleMovieModel();
  clearUserInputs(); 
}

function addMovieButtonHandler() {
  //toggleMovieModel();
  const titleValue = userInputs[0].value;
  const imageValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (titleValue.trim() === "") {
    alert("Please enter valid Inputs");
  } else if (imageValue.trim() === "") {
    alert("Please enter valid Inputs");
  } else if (ratingValue.trim() === "") {
    alert("Please enter valid Inputs");
  } else if (+ratingValue < 1 || +ratingValue > 5) {
    alert("Please enter valid inputs!");
  } else {
    clearUserInputs(); 
  }
  //const newMovies = JSON.parse(newMovies); //Try this later
  const newMovies = {
    title: titleValue,
    image: imageValue,
    rating: ratingValue
}
movies.push(newMovies);
console.log(movies);
toggleMovieModel();
clearUserInputs(); 
addNewMovies(newMovies.title, newMovies.image, newMovies.rating);
updateUI();
};

/*function addMovieButtonHandler() {
  //toggleMovieModel();
  const titleValue = userInputs[0].value;
  const imageValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid inputs!");
    return;
  }
}*/


function backdropClickHandler() {
  toggleMovieModel();
}


//EventListeners
startMovieButton.addEventListener("click", toggleMovieModel);
addBackdrop.addEventListener("click", toggleMovieModel);
removeMovie.addEventListener("click", removeMovieButtonHandler);
addMovie.addEventListener("click", addMovieButtonHandler);
