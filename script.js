const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${this.read ? "Read" : "Not Read"}`
    };
}

function addBookToLibrary (title, author, pages, read) {
    const newBook = new Book (title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBook () {
    const libraryContainer = document.querySelector(".library-container");
    libraryContainer.innerHTML = "";

    for (let i = 0; i <= myLibrary.length; i++) {
        const book = myLibrary[i];
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        bookCard.innerHTML =
         `<h3>${book.title}</h3>
         <p>Author: ${book.author}</p>
         <p>Pages: ${book.pages}</p>
         <p>Status: ${book.read ? "Read" : "Not Read" }</p>
         <button class="remove-btn">Remove</button>
         <button class="toggle-read-btn">Mark as ${book.read ? "Unread" : "Read"}</button>
          `;

         libraryContainer.appendChild(bookCard);
    };
}

addBookToLibrary("1984rg", "Worlasi Eric", 234, false);
displayBook();
  