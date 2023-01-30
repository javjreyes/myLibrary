//myLibrary has a single variable, myLibrary, an array of book objects
//able to create book obj from form data and delete books from library. Both methods update gui
class myLibrary{
    
    constructor(){
        //to contain book objects
        //{title, author, format} strings
        this.myLibrary=[];
    }


    addBookToLibrary(){
        //retrieve form data
        let form=document.getElementById('newBookForm');
        let newBookData= new FormData(form);

        document.getElementById("newBookForm").style.display="none";

        let title=newBookData.get("title");
        let author=newBookData.get("author");
        let format=newBookData.get("format")

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


        let readButton=document.createElement("button");
        readButton.innerText="read";
        readButton.addEventListener('click', function(){library.markRead(this)});
        newBook.append(readButton)

        let delButton=document.createElement("button");
        delButton.innerHTML="<img src='delete.png' alt='delete'>"
        delButton.addEventListener('click', function(){library.deleteBookFromLibrary(this,title,author,format);});
        newBook.append(delButton);

        document.getElementById("libraryContainer").append(newBook);
    }

    deleteBookFromLibrary(delButton,title, author, format){
        
        this.deleteFromDisplay(delButton);

        let notFound=true;
        let libIndex=0;
        while(notFound){
            if(this.myLibrary[libIndex].name==title &&
               this.myLibrary[libIndex].author==author &&
               this.myLibrary[libIndex].format==format){
                this.myLibrary.splice(libIndex, 1);
                notFound=false;
                console.log(title+" deleted");
            }
            else if(libIndex==this.myLibrary.length){notFound=false; console.log("Error. Failed to find book");}
            libIndex+=1;
        }
        
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

function openForm(){
    document.getElementById("newBookForm").style.display="block"
}

window.addEventListener('load', function() {init();});

var library;
function init(){
    library=new myLibrary();
}