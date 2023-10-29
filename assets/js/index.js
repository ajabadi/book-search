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
        //Returns the response in json format
        return resp.json()
    })
    //Parsed json data from the above returned promise will be stored in data
    .then(function(data) {
        //Check the console to see what kind of information we get back
        console.log(data)
        console.log(data.items[0].volumeInfo.authors.toString())
        console.log(data.items[0].volumeInfo.description.toString())
        localStorage.setItem('books', JSON.stringify(data.items))
        window.location.href = "assets/html/cards.html"
        
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