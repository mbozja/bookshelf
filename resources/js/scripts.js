//DETAILS CONTROLLER - bookDetails
var detailsController = (function() {

    //Some code
    
}) ();

//UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputTitle: '.add_title',
        inputAuthor: '.add_author',
        inputYear: '.add_year',
        inputIsbn13: '.add_isbn13',
        inputIsbn10: '.add_isbn10',
        inputSummary: '.add_summary',
        inputPrice: '.add_price',
        inputGenre: '.add_genre',
        inputFile: '.box__file',
        inputBtn: '#add-btn'
    };

    return {
        getInput: function() {
            return {
                title: document.querySelector(DOMstrings.inputTitle).value,
                author: document.querySelector(DOMstrings.inputAuthor).value,
                year: document.querySelector(DOMstrings.inputYear).value,
                isbn13: document.querySelector(DOMstrings.inputIsbn13).value,
                isbn10: document.querySelector(DOMstrings.inputIsbn10).value,
                summary: document.querySelector(DOMstrings.inputSummary).value,
                price: document.querySelector(DOMstrings.inputPrice).value,
                genre: document.querySelector(DOMstrings.inputGenre).value,
                file: document.querySelector(DOMstrings.inputFile)
            };
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };

}) ();

//GLOBAL APP CONTROLLER
var controller = (function(detailsCtrl, UICtrl) {

    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMstrings();

        document.getElementById(DOM.inputBtn).addEventListener('click', ctrlAddBook);
    }

    var ctrlAddBook = function() {
        //ze na zacetku :/ namest pol ko das input dejasnko notr
        // 1. Get the filed input data
        var input = UICtrl.getInput();
        console.log(input);


        // 2. Add a book to the details controller

        // 3. Add a book to the UI

        // 4. Display a book on the UI

        //ze na začetku je, ne dela pravilno
        //console.log('It works!');
    }

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    };

   

}) (detailsController, UIController);


controller.init();