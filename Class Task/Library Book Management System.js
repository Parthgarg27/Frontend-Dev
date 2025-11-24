// Book Class Definition
class Book {
  constructor(title, author, isbn, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = isAvailable;
  }

  // Method to toggle availability
  toggleStatus() {
    this.isAvailable = !this.isAvailable;
  }
}

// Creating 3 book objects
const book1 = new Book("The Alchemist", "Paulo Coelho", "ISBN001", true);
const book2 = new Book(
  "Rich Dad Poor Dad",
  "Robert Kiyosaki",
  "ISBN002",
  false
);
const book3 = new Book("Atomic Habits", "James Clear", "ISBN003", true);

// Store them in an array
const library = [book1, book2, book3];

// Convert array to JSON
const jsonData = JSON.stringify(library, null, 2);
console.log("Library JSON Data:\n", jsonData);

// Create a historyBook using Object.create() that inherits from Book prototype
const historyBook = Object.create(Book.prototype);
historyBook.title = "World History";
historyBook.author = "H. Wells";
historyBook.isbn = "ISBN004";
historyBook.isAvailable = true;

console.log("\nHistory Book (Inherited):", historyBook);

// Borrow Simulation Function
function borrowBook(book) {
  if (book.isAvailable) {
    book.toggleStatus();
    console.log(`Book issued: ${book.title}`);
  } else {
    console.log(`Not available: ${book.title}`);
  }
}

// Test borrowing
console.log("\nBorrowing Books:");
borrowBook(book1); // Available → issued
borrowBook(book2); // Not available
borrowBook(historyBook); // Available → issued
