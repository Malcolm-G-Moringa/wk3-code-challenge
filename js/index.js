// GLOBAL VARIABLES
const print = stuff=>console.log(stuff);
const API = "http://localhost:3000/films";

// ROWS DATA
const mainRow = document.getElementById('main-row-div');
const movieList = document.getElementById('movie-list');
const imageDiv = document.getElementById('image-div');
const detailsBody = document.getElementById('details-body');

fetch(API)
    .then(resp=>resp.json())
        .then(initialize)


function initialize(movies){
    print(movies);
    displayDetails(movies[0]);
    // loop through data and get the movie titles
    for(let movie of movies){
        createMovieListItem(movie);
    }
}

// Function to create a movie item and append to movie menu
function createMovieListItem(movie){
    // create list element
    const li = document.createElement('li');
    li.classList = ('list-group-item');

    // create button element
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('type','button');
    deleteButton.classList = ('btn btn-warning btn-sm ms-4');
    deleteButton.textContent = 'delete'

    // append movie title to li text content
    li.textContent = `${movie.title}`;

    // append button to li element
    li.append(deleteButton);

    // append li to menu list
    movieList.append(li);

    // add event listener to li item
    li.addEventListener('click',()=>displayDetails(movie));
}

function displayDetails(movie){
    displayMoviePoster();
    displayMovieInfo();
    
    // function to display image
    function displayMoviePoster(){
        // create imgae element
        const image = document.createElement('img');
        image.src = movie.poster;
        image.alt = `${movie.title} poster`
        image.classList = ('card-img')

        // append image to iage div
        imageDiv.innerHTML = '';
        imageDiv.append(image);
    }

    // function to display movie info
    function displayMovieInfo(){
        // create p element for runtime
        const pRuntime = document.createElement('p');
        pRuntime.textContent = `Runtime(minutes) : ${movie.runtime}`;

        // create p element for showtime
        const pShowtime = document.createElement('p');
        pShowtime.textContent = `Showtime : ${movie.showtime}`;

        // create p element for available tickets
        const pTickets = document.createElement('p');
        pTickets.textContent = `Available Tickets : ${movie.showtime}`;

        // append p elements to details-body
        detailsBody.append(pRuntime,pShowtime,pTickets);
    }
}