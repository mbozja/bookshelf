//DETAILS CONTROLLER - bookDetails
var detailsController = (function() {

    //Some code
    
}) ();

//UI CONTROLLER
var UIController = (function() {

    //Some code

}) ();

//GLOBAL APP CONTROLLER
var controller = (function(detailsCtrl, UICtrl) {

    var ctrlAddBook = function() {
        // 1. Get the filed input data

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
