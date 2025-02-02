// array that holds the books and their details
const myLibrary = [];

// book object constructor 
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${this.read ? "Read" : "Not Read"}`
    };
}

//storing books in the myLibrary array using the object constructor
function addBookToLibrary (title, author, pages, read) {
    const newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);
}

// function to display the books from myLibrary on the page
function displayBook () {
    const libraryContainer = document.querySelector(".library-container");
    libraryContainer.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        bookCard.innerHTML =
         `<h3>${book.title}</h3>
         <p>By, ${book.author}</p>
         <p>${book.pages} pages</p>
         <div p class = "read-status">${book.read ? "Read" : "Not Read" }</div>
         <button class="remove-btn" data-index = "${i}">Remove</button>
         <button class="toggle-read-btn" data-index = "${i}">Mark as ${book.read ? "Unread" : "Read"}</button>
          `;

         libraryContainer.appendChild(bookCard);
    };
}

//function that allows for removal of books from the library or marking them as read or unread
const libraryContainer = document.querySelector(".library-container");

libraryContainer.addEventListener("click", (e) => {
    const removeButton = e.target.closest(".remove-btn"); 
    const toggleButton = e.target.closest(".toggle-read-btn"); 

    if (removeButton) {
        const index = removeButton.dataset.index; 
        myLibrary.splice(index, 1); 
        displayBook(); 
    }

    if (toggleButton) {
        const index = toggleButton.dataset.index; 
        myLibrary[index].read = !myLibrary[index].read;
        displayBook(); 
    }
});

// addBookToLibrary("Harry Potter", "J.K. Rowling", 720, true);
// displayBook();

//modal for entering book details  
const newBookBtn = document.querySelector("#add-button");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#close-modal");

newBookBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener('click', () => {
    modal.classList.add("modal-closing");
    setTimeout(() => {
        modal.style.display = "none"; 
        modal.classList.remove("modal-closing"); 
    }, 200);
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("modal-closing");
        document.body.style.overflow = "auto";
      setTimeout(() => {
        modal.style.display = "none"; 
        modal.classList.remove("modal-closing"); 
    }, 100);
    }
  });

//function for receiving book details, storing them in the library and displaying them
const newBookForm = document.querySelector("#new-book-form");

newBookForm.addEventListener("submit" , (e) => {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const  pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;
    
    addBookToLibrary(title, author, pages, read);
    
    displayBook();
    
    modal.classList.add("modal-closing");
    document.body.style.overflow = "auto";
    setTimeout(() => {
      modal.style.display = "none"; 
      modal.classList.remove("modal-closing"); 
  }, 100);

    newBookForm.reset();
});










  