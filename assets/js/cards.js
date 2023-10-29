document.addEventListener('DOMContentLoaded', function() {
    var books = JSON.parse(localStorage.getItem('books'))
    console.log(books)
    var cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = ''
    var cardsHTML = ''
    books.forEach(function(book) {
        var bookTitle = book.volumeInfo.title
        var bookDescription = book.volumeInfo.description
        var bookThumbnail = (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) || 'path/to/default-image.jpg'

        cardsHTML += `
        <div>
            <img src="${bookThumbnail}">
            <span>${bookTitle}</span>
            <p>${bookDescription}</p>
        </div>
        `    
    })

    cardContainer.innerHTML = cardsHTML

})