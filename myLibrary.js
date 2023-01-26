//myLibrary has a single variable, myLibrary, an array of book objects
//able to create book obj from form data and delete books from library. Both methods update gui
class myLibrary{
    
    constructor(){
        //to contain book objects
        this.myLibrary=[];
    }
    
    addBookToLibrary(){
        //retrieve form data
        let form=document.getElementById('form');
        let newBookData= new FormData(form);
        
        //instantiate new book item using form data and add to library
        let newBook=new book(newBookData.get("name"),newBookData.get("author"),newBookData.get("format"));
        this.myLibrary.append(newBook);
    }
}

//book objects contain key information about the book
class book {
    constructor(name, author, format) {
        this.name = name;
        this.author = author;
        this.format = format;
    }
}

window.addEventListener('load', function() {init();});

var library;
function init(){
    library=new myLibrary();
}