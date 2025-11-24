// Q3: Library Management System
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (!this.isIssued) this.isIssued = true;
    }

    returnBook() {
        if (this.isIssued) this.isIssued = false;
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "111"),
    new Book("Atomic Habits", "James Clear", "222", true),
    new Book("Deep Work", "Cal Newport", "333")
];

const availableBooks = books.filter(b => !b.isIssued);
console.log("Available books:", availableBooks);

function issueByISBN(isbn) {
    const book = books.find(b => b.isbn === isbn);
    if (book && !book.isIssued) {
        book.issueBook();
        console.log("Book issued:", book.title);
    } else {
        console.log("Book not available or already issued.");
    }
}
