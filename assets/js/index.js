//Varibale for the Google Books API base URL
var gBooksURL = "https://www.googleapis.com/books/v1/volumes?q="
//Variable for the Google Books API key 
var gBooksAPIKey = "AIzaSyAB-DMWo1SEDPqiD8Ihs-wgBnfsUTn9DRo"
//Selects the form element from the html
var searchForm = document.getElementById('search-form')
//Selects the text input field where the user will enter their unput
var userInput = document.getElementById('book-input-field')
//Adds an event listener of submit to the entire search form
searchForm.addEventListener('submit', function (e) {
    //Gets the value entered by the user in the input field
    var inputVal = userInput.value
    //Prevents the page from refreshing
    e.preventDefault()
    console.log('submitted')
    //Look in the console to see what value we are getting
    console.log(inputVal)
    //Calls the searchBooks function with a argument of the users input value
    searchBooks(inputVal)
})
//Function to search for books using Google Books API based on user input
function searchBooks(input) {
    //Creates the full URL by concating user input and the API key to the base URL
    var fullUrl = gBooksURL + input + "&key=" + gBooksAPIKey
    //Makes an http request to Google Books
    fetch(fullUrl)
    .then(function(resp) {
        //If the response is not an OK code a new Error will be thrown and caught at the end of the response chain, skipping any code between
        if (!resp.ok) {
            throw new Error(`yeet`)
        }
        //Returns the response in json format
        return resp.json()
    })
    //Parsed json data from the above returned promise will be stored in data
    .then(function(data) {
        //Sets our searched data items into an array of objects in local storage for us to be able to grab by the key of'books' later
        localStorage.setItem('books', JSON.stringify(data.items))
        //When the user searches a book we are directed to the cards.html which is connected to the cards.js
        window.location.href = "assets/html/cards.html"
        
    })
    //Catches our thrown error and logs the error in the console
    .catch (function(err) {
        console.error(err, 'yeeted')
    })
}


/*Add in api ninja quotes url and key to use for 
display a random quote on the starting page

Need to handle error for when user doesnt input any data

On form submit we should be redirected to a new html that has cards 
displayed in 2 columns

new html file needs to be created to display the searched books
in the form of cards.
cards should be displayed dynamicially with js and styled 
with materialize

Cards should display book title, cover, author, and description
related to user input

once application is fully functional, add cutom css to stylize



*/