//DETAILS CONTROLLER - bookDetails
var detailsController = (function() {

    //Some code
    
}) ();

//UI CONTROLLER
var UIController = (function() {

    return {
        getInput: function() {
            return{
                title: document.querySelector('.add_title').value,
                author: document.querySelector('.add_author').value,
                year: document.querySelector('.add_year').value,
                isbn13: document.querySelector('.add_isbn13').value,
                isbn10: document.querySelector('.add_isbn10').value,
                summary: document.querySelector('.add_summary').value,
                price: document.querySelector('.add_price').value,
                genre: document.querySelector('.add_genre').value,
                file: document.querySelector('.box__file').value
            };
        }
    };

}) ();

//GLOBAL APP CONTROLLER
var controller = (function(detailsCtrl, UICtrl) {

    var ctrlAddBook = function() {
        // 1. Get the filed input data
        var input = getInput();
        console.log(input);


        // 2. Add a book to the details controller

        // 3. Add a book to the UI

        // 4. Display a book on the UI

        //ze na začetku je, ne dela pravilno
        console.log('It works!');
    }

    document.querySelector('.add-btn').addEventListener('click', ctrlAddBook() );

    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddBook();
        }
    });

}) (detailsController, UIController);
