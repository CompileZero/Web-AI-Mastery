// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
// UI Constructor

function UI() {}

//Add book to list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");

  //Create tr element
  const row = document.createElement("tr");

  //Insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>`;
  console.log(row);

  list.appendChild(row);
};

//Delete Book
UI.prototype.deleteBook = function (target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};

//Clear Fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

//Show Alert
UI.prototype.showAlert = function (message, className) {
  //Create div
  const div = document.createElement("div");
  //Add Classes
  div.className = `alert ${className}`;

  //Add Text
  div.appendChild(document.createTextNode(message));

  //Get parent
  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");

  //Insert Alert
  container.insertBefore(div, form);

  //Timeout after 3 sec
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

// Event Listener for Add Book

document.getElementById("book-form").addEventListener("submit", function (e) {
  // Get Form Values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // Instantiate UI
  const ui = new UI();
  //Validation
  if (title === "" || author === "" || isbn === "") {
    //Error Alert
    ui.showAlert("Please enter all fields", "error");
  } else {
    //Instantiate book
    const book = new Book(title, author, isbn);

    //Add book to list
    ui.addBookToList(book);

    //Show Success
    ui.showAlert("Book Added", "success");

    //Clear Fields
    ui.clearFields();
  }

  e.preventDefault();
});

//Event Listener for Delete
document.getElementById("book-list").addEventListener("click", function (e) {
  //Instantiate UI
  const ui = new UI();

  //Delete Book
  ui.deleteBook(e.target);

  //Show message
  ui.showAlert("Book removed", "success");
  e.preventDefault();
});
