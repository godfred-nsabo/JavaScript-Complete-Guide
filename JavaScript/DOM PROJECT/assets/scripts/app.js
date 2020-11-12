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
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

//Functions

function updateUI() {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
}

function accendentDeleteHandler(movieId) {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  //listRoot.removeChild(listRoot.children[movieIndex]);
  cancelMovieDelete();
}

function cancelMovieDelete() {
  toggleBackdropHandler();
  deleteMovieModal.classList.remove("visible");
}

function deleteMovieHandler(movieId) {
  deleteMovieModal.classList.add("visible");
  toggleBackdropHandler();
  // add event listners
  // local constants
  const cancelDeleteButton = deleteMovieModal.querySelector(".btn--passive");
  const acceptDeleteButton = deleteMovieModal.querySelector(".btn--danger");
 
  acceptDeleteButton.removeEventListener(
    "click",
    deleteMovieHandler.bind(null, movieId)
  );  
  acceptDeleteButton.removeEventListener("click", cancelMovieDelete);

  cancelDeleteButton.addEventListener("click", cancelMovieDelete);
  acceptDeleteButton.addEventListener(
    "click",
    accendentDeleteHandler.bind(null, movieId)
  );
  //function () {
  //closeMovieDeletionModal();});

  //accendentDeleteHandler(movieId);
}

function addNewMovies(id, title, imageUrl, rating) {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt = "${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}<div class="main">
        <span class="heading">User Rating</span>
        <span class="fa fa-star checked" id="one"></span>
        <span class="fa fa-star checked" id="two"></span>
        <span class="fa fa-star unchecked" id="three"></span>
        <span class="fa fa-star unchecked" id="four"></span>
        <span class="fa fa-star unchecked" id="five"><span>
        </div>
        </p>
    </div>
    `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  //newMovieElement.addEventListener("mouseout", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
}

function showMovieModalHandler() {
  addMovieModal1.classList.add("visible");
  toggleBackdropHandler();
}

function closeMovieModal() {
  addMovieModal1.classList.remove("visible");
}

function toggleBackdropHandler() {
  addBackdrop.classList.toggle("visible");
}

function clearUserInputs() {
  for (const usrIput of userInputs) {
    usrIput.value = "";
  }
}

function removeMovieButtonHandler() {
  closeMovieModal();
  toggleBackdropHandler();
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
    id: Math.random().toString(),
    title: titleValue,
    image: imageValue,
    rating: ratingValue,
  };
  movies.push(newMovies);
  console.log(movies);
  closeMovieModal();
  toggleBackdropHandler();
  clearUserInputs();
  addNewMovies(
    newMovies.id,
    newMovies.title,
    newMovies.image,
    newMovies.rating
  );
  updateUI();
}

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
  closeMovieModal();
  cancelMovieDelete();
  clearUserInputs();
}

//EventListeners
startMovieButton.addEventListener("click", showMovieModalHandler);
addBackdrop.addEventListener("click", backdropClickHandler);
removeMovie.addEventListener("click", removeMovieButtonHandler);
addMovie.addEventListener("click", addMovieButtonHandler);
