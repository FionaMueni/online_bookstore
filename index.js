let signup = document.querySelector(".signup");
let login = document.querySelector(".login");

const searchButton = document.getElementById("searchButton");
const browseButtons = document.getElementById("browseButtons");

     // Book data array
     const books = [];

     // Function to add a new book
     function addBook() {
         const title = prompt("Enter the title of the book:");
         const author = prompt("Enter the author of the book:");

         if (title && author) {
             const book = { title: title, author: author };
             books.push(book);
             alert("Book added successfully!");
         } else {
             alert("Title and author are required.");
         }
     }

     // Function to view book details
     function viewBookDetails() {
        const index = prompt("Enter the index of the book you want to view:");

         if (index !== null && !isNaN(index) && index >= 0 && index < books.length) {
             const book = books[index];
             document.getElementById("bookDetails").innerHTML = "Title: " + book.title + "<br>Author: " + book.author;
             document.getElementById("bookDetailsContainer").style.display = "block";
         } else {
             alert("Invalid index.");
         }
     }

     // Function to update book information
     function updateBook() {
         const index = prompt("Enter the index of the book you want to update:");

         if (index !== null && !isNaN(index) && index >= 0 && index < books.length) {
             const newTitle = prompt("Enter the new title of the book:");
             const newAuthor = prompt("Enter the new author of the book:");

             if (newTitle && newAuthor) {
                 const book = books[index];
                 book.title = newTitle;
                 book.author = newAuthor;
                 alert("Book updated successfully!");
             } else {
                 alert("Title and author are required.");
             }
         } else {
             alert("Invalid index.");
         }
     }

     // Function to delete a book
     function deleteBook() {
         const index = prompt("Enter the index of the book you want to delete:");

         if (index !== null && !isNaN(index) && index >= 0 && index < books.length) {
             const deletedBook = books.splice(index, 1);
             alert("Book deleted: " + deletedBook[0].title);
         } else {
             alert("Invalid index.");
         }
     }
