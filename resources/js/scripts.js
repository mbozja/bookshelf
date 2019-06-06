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

    document.querySelector('.sub').addEventListener('click', function() {
        //When pressed it shows for only a second, 
        //background goes for a second to orange
        //does not stay in the console
        console.log('Button was pressed.'); 

        // 1. Get the filed input data

        // 2. Add a book to the details controller

        // 3. Add a book to the UI

        // 4. Display a book on the UI
        
    });

}) (detailsController, UIController);
