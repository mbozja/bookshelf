//DETAILS CONTROLLER - bookDetails
var detailsController = (function() {

    var Book = function(id, title, authors, year, isbn13, isbn10, summary, price, genre, file) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.year = year;
        this.isbn13 = isbn13;
        this.isbn10 = isbn10;
        this.summary = summary;
        this.price = price;
        this.genre = genre;
        this.file = file;
    }

    var Wishlist = function(id, title, authors, year, isbn13, isbn10, summary, price, genre) {
        this.id = id;
        this.title = title;
        this.authors = authors;
        this.year = year;
        this.isbn13 = isbn13;
        this.isbn10 = isbn10;
        this.summary = summary;
        this.price = price;
        this.genre = genre;
    }

    //data of library books(books) and wishlist books(wishlist)
    var data = {
        allBookItems: {
            lib: [],
            wish: []
        },
        totals: {
            lib: 0,
            wish: 0
        }
    };

    return {
        addBook: function(type, titl, auth, yea, isb13, isb10, sum, pric, genr, fil) {
            var newBook, ID;

            //Create new ID
            if (data.allBookItems[type].length > 0) {
                ID = data.allBookItems[type][data.allBookItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            

            //Create new book based on 'lib' or 'wish' type
            if (type === 'lib') {
                newBook = new Book(ID, titl, auth, yea, isb13, isb10, sum, pric, genr, fil)
            } else if (type === 'wish') {
                newBook = new Wishlist(ID, titl, auth, yea, isb13, isb10, sum, pric, genr)
            }

            //Push it into our data structure
            data.allBookItems[type].push(newBook);

            //Return the new element
            return newBook;
        },

        testing: function() {
            console.log(data);
        }
    };
    
}) ();

//UI CONTROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add_type',
        inputTitle: '.add_title',
        inputAuthor: '.add_author',
        inputYear: '.add_year',
        inputIsbn13: '.add_isbn13',
        inputIsbn10: '.add_isbn10',
        inputSummary: '.add_summary',
        inputPrice: '.add_price',
        inputGenre: '.add_genre',
        inputFile: '.box__file',
        inputBtn: '#add-btn',
        libraryContainer: '.book_details-0',
        wishlistContainer: '.book_details-1'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // library ali wishlist
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

        addListBook: function(obj, type) {
            var html, newHtml, element;
            //Create HTML string with placeholder text
            if (type === 'lib') {
                element = DOMstrings.libraryContainer;

                html = '<div class="book clearfix" id="book-%id%"><div class="book__main--details"><div class="book-title"><p><i class="fas fa-book icon-book"></i>%title%</p></div><br><div class="book-author"><p><i class="fas fa-pen-fancy icon-book"></i>%author%</p></div><br><div class="book-year"><p><i class="far fa-calendar-alt icon-book"></i>%year%</p></div></div><div class="book__more--details"><div class="book-isbn13"><p><i class="fas fa-barcode icon-book"></i>13:&nbsp;%isbn13%</p></div><br><div class="book-isbn10"><p><i class="fas fa-barcode icon-book"></i>10:&nbsp;%isbn10%</p></div><div class="book-tags"><p><i class="fas fa-hashtag icon-book"></i>%tags%</p></div></div><div class="book__sum--details"><div class="book__sum--heading"><i class="fas fa-bars icon-book"></i></div><div class="book-sum"><p class="sum">%sum%</p></div><div class="book__sum--footer"></div></div><div class="book__other--details"><div class="other-details"><div class="book-price"><p><i class="fas fa-money-bill-wave icon-book"></i>%price%</p></div><div class="book-genre"><p><i class="fas fa-dungeon icon-book"></i>%genre%</p></div><div class="book-file"><p><i class="far fa-file-alt icon-book"></i>%file%</p></div></div><div class="do-more"><div class="book-edit"><i class="fas fa-edit icon-book-edit"></i></div><div class="book-delete"><i class="fas fa-trash-alt icon-book-delete"></i></div></div></div>';
            } else if (type === 'wish') {
                element = DOMstrings.wishlistContainer;

                html = '<div class="book clearfix" id="wish-%id%"><div class="book__main--details"><div class="book-title"><p><i class="fas fa-book icon-book"></i>%title%</p></div><br><div class="book-author"><p><i class="fas fa-pen-fancy icon-book"></i>%author%</p></div><br><div class="book-year"><p><i class="far fa-calendar-alt icon-book"></i>%year%</p></div></div><div class="book__more--details"><div class="book-isbn13"><p><i class="fas fa-barcode icon-book"></i>13:&nbsp;%isbn13%</p></div><br><div class="book-isbn10"><p><i class="fas fa-barcode icon-book"></i>10:&nbsp;%isbn10%</p></div><div class="book-tags"><p><i class="fas fa-hashtag icon-book"></i>%tags%</p></div></div><div class="book__sum--details"><div class="book__sum--heading"><i class="fas fa-bars icon-book"></i></div><div class="book-sum"><p class="sum">%sum%</p></div><div class="book__sum--footer"></div></div><div class="book__other--details"><div class="other-details"><div class="book-price"><p><i class="fas fa-money-bill-wave icon-book"></i>%price%</p></div><div class="book-genre"><p><i class="fas fa-dungeon icon-book"></i>%genre%</p></div></div><div class="do-more"><div class="book-edit"><i class="fas fa-edit icon-book-edit"></i></div><div class="book-delete"><i class="fas fa-trash-alt icon-book-delete"></i></div></div></div>';
            }
            
            //Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%title%', obj.title);
            newHtml = newHtml.replace('%author%', obj.authors);
            newHtml = newHtml.replace('%year%', obj.year);
            newHtml = newHtml.replace('%isbn13%', obj.isbn13);
            newHtml = newHtml.replace('%isbn10%', obj.isbn10);
            //newHtml = newHtml.replace('%tags%', obj.tags);
            newHtml = newHtml.replace('%sum%', obj.summary);
            newHtml = newHtml.replace('%price%', obj.price);
            newHtml = newHtml.replace('%genre%', obj.genre);
            newHtml = newHtml.replace('%file%', obj.file);

            //Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        getDOMstrings: function() {
            return DOMstrings;
        },

        //To display correct book details
        switchDisplayLibWish: function() {

            //Get the checkbox
            var checkBox = document.getElementById('checkboxLibWish');

            //Get both output texts
            var libr = document.getElementById('library_display');
            var wishl = document.getElementById('wishlist_display');
        
            //Check if is checkbox checked and display content
            if (checkBox.checked == true) {
            wishl.style.display = 'block';
            libr.style.display = 'none';
            } else {
            wishl.style.display = 'none';
            libr.style.display = 'block';
            }
        },

        //To display book details according to dropdown selection of option
        parallelFormDetails: function() {

            var dropdown = document.getElementById('select_type');
            var checkBox = document.getElementById('checkboxLibWish');

            //Display book details accordingly
            if (dropdown.selectedOptions[0].value === 'wish') {
                checkBox.checked = true;
            } else {
                checkBox.checked = false;
            }
            var event = new Event('change');
            checkBox.dispatchEvent(event);
        },

        //To hide upload book when user changes form to wishlist
        hideUploadBook: function() {

            var uploadBook = document.getElementById('upload_book');
            var dropdown = document.getElementById('select_type');

            if (dropdown.selectedOptions[0].value === 'wish') {
                uploadBook.style.visibility = 'hidden';
            } else {
                uploadBook.style.visibility = 'visible';
            }
            var event = new Event('change');
            uploadBook.dispatchEvent(event);

        }
        
    };

}) ();

//GLOBAL APP CONTROLLER
var controller = (function(detailsCtrl, UICtrl) {

    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMstrings();

        document.getElementById(DOM.inputBtn).addEventListener('click', ctrlAddBook);

        document.getElementById('checkboxLibWish').addEventListener('change', UICtrl.switchDisplayLibWish);

        document.getElementById('select_type').addEventListener('change', UICtrl.parallelFormDetails);

        document.getElementById('select_type').addEventListener('change', UICtrl.hideUploadBook);
    }

    var ctrlAddBook = function() {
        var input, newItemBook;

        // 1. Get the filed input data
        input = UICtrl.getInput();

        // 2. Add a book to the details controller
        newItemBook = detailsCtrl.addBook(input.type, input.title, input.author, input.year, input.isbn13, input.isbn10, input.summary, input.price, input.genre, input.file);

        // 3. Add a book to the UI
        UICtrl.addListBook(newItemBook, input.type);

        // 4. Display a book on the UI

        
    }

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    };


   

}) (detailsController, UIController);


controller.init();
UIController.switchDisplayLibWish();

