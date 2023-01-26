//myLibrary has a single variable, myLibrary, an array of book objects
//able to create book obj from form data and delete books from library. Both methods update gui
class myLibrary{
    
    constructor(){
        //to contain book objects
        //{title, author, format} strings
        this.myLibrary=[];
    }
    
    /*addBookToLibrary(){
        //retrieve form data
        let form=document.getElementById('form');
        let newBookData= new FormData(form);

        //instantiate new book item using form data and add to library
        let newBook=new book(newBookData.get("name"),newBookData.get("author"),newBookData.get("format"));
        this.myLibrary.append(newBook);
    }
    */

    addBookToLibrary(){
        let title="title";
        let author="author";
        let format="format";

        let newBook=new book(title,author,format);
        this.myLibrary.push(newBook);

        this.addToDisplay(title,author,format);
    }

    addToDisplay(title,author,format){
        let newBook= document.createElement("div");
        newBook.classList.add("bookCard");

        
        let titleH2=document.createElement("h2");
        titleH2.innerText=title;
        
        let authorP=document.createElement("p");
        authorP.innerText=author;
        
        let formatP=document.createElement("p");
        formatP.innerText=format;

        newBook.append(titleH2);
        newBook.append(authorP);
        newBook.append(formatP);


        let editButton=document.createElement("button");
        editButton.innerText="edit";
        //editButton.addEventListener('click', function(){});
        newBook.append(editButton)

        let delButton=document.createElement("button");
        delButton.innerText="delete";
        delButton.addEventListener('click', function(){library.deleteBookFromLibrary(this);});
        newBook.append(delButton);

        document.getElementById("libraryContainer").append(newBook);
    }

    deleteBookFromLibrary(delButton){
        let title=delButton.parentElement.firstElementChild.textContent;
        this.deleteFromDisplay(delButton);

        let secondChild=title.nextSibling;
        //let author=secondChild.textContent;
        console.log(secondChild);


        let notFound=true;
        let libIndex=0;
        while(notFound){
            if(this.myLibrary[libIndex].name==title){
                this.myLibrary.splice(libIndex, 1);
                notFound=false;
            }
        }


        console.log(title+"deleted");
    }

    deleteFromDisplay(delButton){
        delButton.parentElement.remove();
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