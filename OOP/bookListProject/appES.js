class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById("book-list");

    // Create tr element
    const row = document.createElement("tr");

    //   Insert columns
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
     `;
    list.appendChild(row);
  }

  showAlert(message, className) {
    // Create div
    const div = document.createElement("div");
    // Add classes
    div.className = `alert ${className}`;
    // Add text node
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    // Insert the alert
    container.insertBefore(div, form);

    //   set time out for alert
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

// Local storage functionality

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function (book) {
      const ui = new UI();

      //   Add book to the UI
      ui.addBookToList(book);
    });
  }
  static addBook(book) {
    const books = Store.getBooks();

    books.push(book);

    localStorage.setItem("books", JSON.stringify(books));
  }
  static removeBook(isbn) {
    const books = Store.getBooks();
    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}

// DOM load events
document.addEventListener("DOMContentLoaded", Store.displayBooks);

// Event Listeners
document.getElementById("book-form").addEventListener("submit", function (e) {
  e.preventDefault();

  //   variables to get the fields
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  //   Instantiate UI
  const ui = new UI();

  //   Validation
  if (title === "" || author === "" || isbn === "") {
    // Error alert
    ui.showAlert("Please fill out all fields!", "error");
  } else {
    // Add book to the list
    ui.addBookToList(book);

    // Add to LS
    Store.addBook(book);

    // Show success alert
    ui.showAlert("Book Added!", "success");

    //   Clear fields
    ui.clearFields();
  }
});

// Event listener for delete=ing books
document.getElementById("book-list").addEventListener("click", function (e) {
  e.preventDefault();

  // Instantiate UI
  const ui = new UI();

  // Delete book
  ui.deleteBook(e.target);

  //   Remove from LS
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  // Show Alert
  ui.showAlert("Book Removed!", "success");
});
