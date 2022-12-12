// GLOBAL VARIABLES
const print = stuff=>console.log(stuff);
const API = "http://localhost:3000/films";

// ROWS DATA
const mainRow = document.getElementById('main-row-div');
const movieList = document.getElementById('movie-list');
const imageDiv = document.getElementById('image-div');
const detailsBody = document.getElementById('details-body');
const buyTicketDiv = document.getElementById('button-div');

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
    // Create variable thatshows available tickets
    let ticketsAmount = movie.capacity - movie.tickets_sold;

    // call functions to display the details
    displayMoviePoster();
    displayMovieInfo(ticketsAmount);
    addBuyTicketsButton();
    
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
        pRuntime.classList = ('card-text mb-4');

        // create p element for showtime
        const pShowtime = document.createElement('p');
        pShowtime.textContent = `Showtime : ${movie.showtime}`;
        pShowtime.classList = ('card-text mb-4');

        // create p element for available tickets
        const pTickets = document.createElement('p');
        pTickets.textContent = `Available Tickets : ${ticketsAmount}`;
        pTickets.classList = ('card-text mb-4');

        // append p elements to details-body
        detailsBody.innerHTML = '';
        detailsBody.append(pRuntime,pShowtime,pTickets);
    }

    function addBuyTicketsButton(){
        // create button element
        const button = document.createElement('button');
        button.type = 'button';
        button.classList = ('btn btn-outline-danger col-6 mx-auto');
        button.textContent = 'Buy Ticket';

        // add event listener to button
        button.addEventListener('click',()=>buyTicket());

        // append button element to button-div
        buyTicketDiv.innerHTML = '';
        buyTicketDiv.append(button);

        function buyTicket(){
            if(ticketsAmount>0){
                ticketsAmount-=1;
                displayMovieInfo();
            }
            return;
        }
    }
}