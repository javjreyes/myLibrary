class myLibrary{
    
    constructor(){
        this.myLibrary=[];
    }
    
    addBookToLibrary(){
        let form=document.getElementById('form');
        let newBookData= new FormData(form);
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