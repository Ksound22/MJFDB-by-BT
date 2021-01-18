// Book constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add book to the list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");

  // Create tr element
  const row = document.createElement("tr");

  //   Insert columns
  row.innerHTML = `<td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href="#" class="delete">X</a></td>
                `;
  list.appendChild(row);
};

// Show alert
UI.prototype.showAlert = function (message, className) {
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
};

// Delete a book
UI.prototype.deleteBook = function (target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};

// Clear fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Event listener for deleting books
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

  console.log(ui);

  //   Validation
  if (title === "" || author === "" || isbn === "") {
    // Error alert
    ui.showAlert("Please fill out all fields!", "error");
  } else {
    // Add book to the list
    ui.addBookToList(book);

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

  // Show Alert
  ui.showAlert("Book Removed!", "success");
});
